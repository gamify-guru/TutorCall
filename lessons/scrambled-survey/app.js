(function() {
  const f = document.createElement("link").relList;
  if (f && f.supports && f.supports("modulepreload")) return;
  for (const b of document.querySelectorAll('link[rel="modulepreload"]')) o(b);
  new MutationObserver(b => {
    for (const k of b)
      if (k.type === "childList")
        for (const y of k.addedNodes) y.tagName === "LINK" && y.rel === "modulepreload" && o(y)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function d(b) {
    const k = {};
    return b.integrity && (k.integrity = b.integrity), b.referrerPolicy && (k.referrerPolicy = b.referrerPolicy), b.crossOrigin === "use-credentials" ? k.credentials = "include" : b.crossOrigin === "anonymous" ? k.credentials = "omit" : k.credentials = "same-origin", k
  }

  function o(b) {
    if (b.ep) return;
    b.ep = !0;
    const k = d(b);
    fetch(b.href, k)
  }
})();
var Zr = {
    exports: {}
  },
  Zn = {};
var jm;

function O0() {
  if (jm) return Zn;
  jm = 1;
  var r = Symbol.for("react.transitional.element"),
    f = Symbol.for("react.fragment");

  function d(o, b, k) {
    var y = null;
    if (k !== void 0 && (y = "" + k), b.key !== void 0 && (y = "" + b.key), "key" in b) {
      k = {};
      for (var w in b) w !== "key" && (k[w] = b[w])
    } else k = b;
    return b = k.ref, {
      $$typeof: r,
      type: o,
      key: y,
      ref: b !== void 0 ? b : null,
      props: k
    }
  }
  return Zn.Fragment = f, Zn.jsx = d, Zn.jsxs = d, Zn
}
var Nm;

function D0() {
  return Nm || (Nm = 1, Zr.exports = O0()), Zr.exports
}
var s = D0(),
  Kr = {
    exports: {}
  },
  ie = {};
var wm;

function R0() {
  if (wm) return ie;
  wm = 1;
  var r = Symbol.for("react.transitional.element"),
    f = Symbol.for("react.portal"),
    d = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    b = Symbol.for("react.profiler"),
    k = Symbol.for("react.consumer"),
    y = Symbol.for("react.context"),
    w = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    D = Symbol.for("react.lazy"),
    A = Symbol.for("react.activity"),
    O = Symbol.iterator;

  function G(x) {
    return x === null || typeof x != "object" ? null : (x = O && x[O] || x["@@iterator"], typeof x == "function" ? x : null)
  }
  var H = {
      isMounted: function() {
        return !1
      },
      enqueueForceUpdate: function() {},
      enqueueReplaceState: function() {},
      enqueueSetState: function() {}
    },
    V = Object.assign,
    Y = {};

  function R(x, _, q) {
    this.props = x, this.context = _, this.refs = Y, this.updater = q || H
  }
  R.prototype.isReactComponent = {}, R.prototype.setState = function(x, _) {
    if (typeof x != "object" && typeof x != "function" && x != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, x, _, "setState")
  }, R.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate")
  };

  function W() {}
  W.prototype = R.prototype;

  function F(x, _, q) {
    this.props = x, this.context = _, this.refs = Y, this.updater = q || H
  }
  var le = F.prototype = new W;
  le.constructor = F, V(le, R.prototype), le.isPureReactComponent = !0;
  var xe = Array.isArray;

  function Ae() {}
  var se = {
      H: null,
      A: null,
      T: null,
      S: null
    },
    Q = Object.prototype.hasOwnProperty;

  function be(x, _, q) {
    var L = q.ref;
    return {
      $$typeof: r,
      type: x,
      key: _,
      ref: L !== void 0 ? L : null,
      props: q
    }
  }

  function _e(x, _) {
    return be(x.type, _, x.props)
  }

  function Ke(x) {
    return typeof x == "object" && x !== null && x.$$typeof === r
  }

  function Qe(x) {
    var _ = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + x.replace(/[=:]/g, function(q) {
      return _[q]
    })
  }
  var Ut = /\/+/g;

  function dt(x, _) {
    return typeof x == "object" && x !== null && x.key != null ? Qe("" + x.key) : _.toString(36)
  }

  function Je(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (typeof x.status == "string" ? x.then(Ae, Ae) : (x.status = "pending", x.then(function(_) {
            x.status === "pending" && (x.status = "fulfilled", x.value = _)
          }, function(_) {
            x.status === "pending" && (x.status = "rejected", x.reason = _)
          })), x.status) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason
        }
    }
    throw x
  }

  function T(x, _, q, L, ne) {
    var oe = typeof x;
    (oe === "undefined" || oe === "boolean") && (x = null);
    var ae = !1;
    if (x === null) ae = !0;
    else switch (oe) {
      case "bigint":
      case "string":
      case "number":
        ae = !0;
        break;
      case "object":
        switch (x.$$typeof) {
          case r:
          case f:
            ae = !0;
            break;
          case D:
            return ae = x._init, T(ae(x._payload), _, q, L, ne)
        }
    }
    if (ae) return ne = ne(x), ae = L === "" ? "." + dt(x, 0) : L, xe(ne) ? (q = "", ae != null && (q = ae.replace(Ut, "$&/") + "/"), T(ne, _, q, "", function(Ht) {
      return Ht
    })) : ne != null && (Ke(ne) && (ne = _e(ne, q + (ne.key == null || x && x.key === ne.key ? "" : ("" + ne.key).replace(Ut, "$&/") + "/") + ae)), _.push(ne)), 1;
    ae = 0;
    var $e = L === "" ? "." : L + ":";
    if (xe(x))
      for (var Me = 0; Me < x.length; Me++) L = x[Me], oe = $e + dt(L, Me), ae += T(L, _, q, oe, ne);
    else if (Me = G(x), typeof Me == "function")
      for (x = Me.call(x), Me = 0; !(L = x.next()).done;) L = L.value, oe = $e + dt(L, Me++), ae += T(L, _, q, oe, ne);
    else if (oe === "object") {
      if (typeof x.then == "function") return T(Je(x), _, q, L, ne);
      throw _ = String(x), Error("Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead.")
    }
    return ae
  }

  function B(x, _, q) {
    if (x == null) return x;
    var L = [],
      ne = 0;
    return T(x, L, "", "", function(oe) {
      return _.call(q, oe, ne++)
    }), L
  }

  function U(x) {
    if (x._status === -1) {
      var _ = x._result;
      _ = _(), _.then(function(q) {
        (x._status === 0 || x._status === -1) && (x._status = 1, x._result = q)
      }, function(q) {
        (x._status === 0 || x._status === -1) && (x._status = 2, x._result = q)
      }), x._status === -1 && (x._status = 0, x._result = _)
    }
    if (x._status === 1) return x._result.default;
    throw x._result
  }
  var ve = typeof reportError == "function" ? reportError : function(x) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var _ = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof x == "object" && x !== null && typeof x.message == "string" ? String(x.message) : String(x),
          error: x
        });
        if (!window.dispatchEvent(_)) return
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", x);
        return
      }
      console.error(x)
    },
    Ne = {
      map: B,
      forEach: function(x, _, q) {
        B(x, function() {
          _.apply(this, arguments)
        }, q)
      },
      count: function(x) {
        var _ = 0;
        return B(x, function() {
          _++
        }), _
      },
      toArray: function(x) {
        return B(x, function(_) {
          return _
        }) || []
      },
      only: function(x) {
        if (!Ke(x)) throw Error("React.Children.only expected to receive a single React element child.");
        return x
      }
    };
  return ie.Activity = A, ie.Children = Ne, ie.Component = R, ie.Fragment = d, ie.Profiler = b, ie.PureComponent = F, ie.StrictMode = o, ie.Suspense = v, ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = se, ie.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(x) {
      return se.H.useMemoCache(x)
    }
  }, ie.cache = function(x) {
    return function() {
      return x.apply(null, arguments)
    }
  }, ie.cacheSignal = function() {
    return null
  }, ie.cloneElement = function(x, _, q) {
    if (x == null) throw Error("The argument must be a React element, but you passed " + x + ".");
    var L = V({}, x.props),
      ne = x.key;
    if (_ != null)
      for (oe in _.key !== void 0 && (ne = "" + _.key), _) !Q.call(_, oe) || oe === "key" || oe === "__self" || oe === "__source" || oe === "ref" && _.ref === void 0 || (L[oe] = _[oe]);
    var oe = arguments.length - 2;
    if (oe === 1) L.children = q;
    else if (1 < oe) {
      for (var ae = Array(oe), $e = 0; $e < oe; $e++) ae[$e] = arguments[$e + 2];
      L.children = ae
    }
    return be(x.type, ne, L)
  }, ie.createContext = function(x) {
    return x = {
      $$typeof: y,
      _currentValue: x,
      _currentValue2: x,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, x.Provider = x, x.Consumer = {
      $$typeof: k,
      _context: x
    }, x
  }, ie.createElement = function(x, _, q) {
    var L, ne = {},
      oe = null;
    if (_ != null)
      for (L in _.key !== void 0 && (oe = "" + _.key), _) Q.call(_, L) && L !== "key" && L !== "__self" && L !== "__source" && (ne[L] = _[L]);
    var ae = arguments.length - 2;
    if (ae === 1) ne.children = q;
    else if (1 < ae) {
      for (var $e = Array(ae), Me = 0; Me < ae; Me++) $e[Me] = arguments[Me + 2];
      ne.children = $e
    }
    if (x && x.defaultProps)
      for (L in ae = x.defaultProps, ae) ne[L] === void 0 && (ne[L] = ae[L]);
    return be(x, oe, ne)
  }, ie.createRef = function() {
    return {
      current: null
    }
  }, ie.forwardRef = function(x) {
    return {
      $$typeof: w,
      render: x
    }
  }, ie.isValidElement = Ke, ie.lazy = function(x) {
    return {
      $$typeof: D,
      _payload: {
        _status: -1,
        _result: x
      },
      _init: U
    }
  }, ie.memo = function(x, _) {
    return {
      $$typeof: h,
      type: x,
      compare: _ === void 0 ? null : _
    }
  }, ie.startTransition = function(x) {
    var _ = se.T,
      q = {};
    se.T = q;
    try {
      var L = x(),
        ne = se.S;
      ne !== null && ne(q, L), typeof L == "object" && L !== null && typeof L.then == "function" && L.then(Ae, ve)
    } catch (oe) {
      ve(oe)
    } finally {
      _ !== null && q.types !== null && (_.types = q.types), se.T = _
    }
  }, ie.unstable_useCacheRefresh = function() {
    return se.H.useCacheRefresh()
  }, ie.use = function(x) {
    return se.H.use(x)
  }, ie.useActionState = function(x, _, q) {
    return se.H.useActionState(x, _, q)
  }, ie.useCallback = function(x, _) {
    return se.H.useCallback(x, _)
  }, ie.useContext = function(x) {
    return se.H.useContext(x)
  }, ie.useDebugValue = function() {}, ie.useDeferredValue = function(x, _) {
    return se.H.useDeferredValue(x, _)
  }, ie.useEffect = function(x, _) {
    return se.H.useEffect(x, _)
  }, ie.useEffectEvent = function(x) {
    return se.H.useEffectEvent(x)
  }, ie.useId = function() {
    return se.H.useId()
  }, ie.useImperativeHandle = function(x, _, q) {
    return se.H.useImperativeHandle(x, _, q)
  }, ie.useInsertionEffect = function(x, _) {
    return se.H.useInsertionEffect(x, _)
  }, ie.useLayoutEffect = function(x, _) {
    return se.H.useLayoutEffect(x, _)
  }, ie.useMemo = function(x, _) {
    return se.H.useMemo(x, _)
  }, ie.useOptimistic = function(x, _) {
    return se.H.useOptimistic(x, _)
  }, ie.useReducer = function(x, _, q) {
    return se.H.useReducer(x, _, q)
  }, ie.useRef = function(x) {
    return se.H.useRef(x)
  }, ie.useState = function(x) {
    return se.H.useState(x)
  }, ie.useSyncExternalStore = function(x, _, q) {
    return se.H.useSyncExternalStore(x, _, q)
  }, ie.useTransition = function() {
    return se.H.useTransition()
  }, ie.version = "19.2.6", ie
}
var Sm;

function so() {
  return Sm || (Sm = 1, Kr.exports = R0()), Kr.exports
}
var Z = so(),
  Jr = {
    exports: {}
  },
  Kn = {},
  $r = {
    exports: {}
  },
  Wr = {};
var km;

function U0() {
  return km || (km = 1, (function(r) {
    function f(T, B) {
      var U = T.length;
      T.push(B);
      e: for (; 0 < U;) {
        var ve = U - 1 >>> 1,
          Ne = T[ve];
        if (0 < b(Ne, B)) T[ve] = B, T[U] = Ne, U = ve;
        else break e
      }
    }

    function d(T) {
      return T.length === 0 ? null : T[0]
    }

    function o(T) {
      if (T.length === 0) return null;
      var B = T[0],
        U = T.pop();
      if (U !== B) {
        T[0] = U;
        e: for (var ve = 0, Ne = T.length, x = Ne >>> 1; ve < x;) {
          var _ = 2 * (ve + 1) - 1,
            q = T[_],
            L = _ + 1,
            ne = T[L];
          if (0 > b(q, U)) L < Ne && 0 > b(ne, q) ? (T[ve] = ne, T[L] = U, ve = L) : (T[ve] = q, T[_] = U, ve = _);
          else if (L < Ne && 0 > b(ne, U)) T[ve] = ne, T[L] = U, ve = L;
          else break e
        }
      }
      return B
    }

    function b(T, B) {
      var U = T.sortIndex - B.sortIndex;
      return U !== 0 ? U : T.id - B.id
    }
    if (r.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var k = performance;
      r.unstable_now = function() {
        return k.now()
      }
    } else {
      var y = Date,
        w = y.now();
      r.unstable_now = function() {
        return y.now() - w
      }
    }
    var v = [],
      h = [],
      D = 1,
      A = null,
      O = 3,
      G = !1,
      H = !1,
      V = !1,
      Y = !1,
      R = typeof setTimeout == "function" ? setTimeout : null,
      W = typeof clearTimeout == "function" ? clearTimeout : null,
      F = typeof setImmediate < "u" ? setImmediate : null;

    function le(T) {
      for (var B = d(h); B !== null;) {
        if (B.callback === null) o(h);
        else if (B.startTime <= T) o(h), B.sortIndex = B.expirationTime, f(v, B);
        else break;
        B = d(h)
      }
    }

    function xe(T) {
      if (V = !1, le(T), !H)
        if (d(v) !== null) H = !0, Ae || (Ae = !0, Qe());
        else {
          var B = d(h);
          B !== null && Je(xe, B.startTime - T)
        }
    }
    var Ae = !1,
      se = -1,
      Q = 5,
      be = -1;

    function _e() {
      return Y ? !0 : !(r.unstable_now() - be < Q)
    }

    function Ke() {
      if (Y = !1, Ae) {
        var T = r.unstable_now();
        be = T;
        var B = !0;
        try {
          e: {
            H = !1,
            V && (V = !1, W(se), se = -1),
            G = !0;
            var U = O;
            try {
              t: {
                for (le(T), A = d(v); A !== null && !(A.expirationTime > T && _e());) {
                  var ve = A.callback;
                  if (typeof ve == "function") {
                    A.callback = null, O = A.priorityLevel;
                    var Ne = ve(A.expirationTime <= T);
                    if (T = r.unstable_now(), typeof Ne == "function") {
                      A.callback = Ne, le(T), B = !0;
                      break t
                    }
                    A === d(v) && o(v), le(T)
                  } else o(v);
                  A = d(v)
                }
                if (A !== null) B = !0;
                else {
                  var x = d(h);
                  x !== null && Je(xe, x.startTime - T), B = !1
                }
              }
              break e
            }
            finally {
              A = null, O = U, G = !1
            }
            B = void 0
          }
        }
        finally {
          B ? Qe() : Ae = !1
        }
      }
    }
    var Qe;
    if (typeof F == "function") Qe = function() {
      F(Ke)
    };
    else if (typeof MessageChannel < "u") {
      var Ut = new MessageChannel,
        dt = Ut.port2;
      Ut.port1.onmessage = Ke, Qe = function() {
        dt.postMessage(null)
      }
    } else Qe = function() {
      R(Ke, 0)
    };

    function Je(T, B) {
      se = R(function() {
        T(r.unstable_now())
      }, B)
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(T) {
      T.callback = null
    }, r.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < T ? Math.floor(1e3 / T) : 5
    }, r.unstable_getCurrentPriorityLevel = function() {
      return O
    }, r.unstable_next = function(T) {
      switch (O) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = O
      }
      var U = O;
      O = B;
      try {
        return T()
      } finally {
        O = U
      }
    }, r.unstable_requestPaint = function() {
      Y = !0
    }, r.unstable_runWithPriority = function(T, B) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3
      }
      var U = O;
      O = T;
      try {
        return B()
      } finally {
        O = U
      }
    }, r.unstable_scheduleCallback = function(T, B, U) {
      var ve = r.unstable_now();
      switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? ve + U : ve) : U = ve, T) {
        case 1:
          var Ne = -1;
          break;
        case 2:
          Ne = 250;
          break;
        case 5:
          Ne = 1073741823;
          break;
        case 4:
          Ne = 1e4;
          break;
        default:
          Ne = 5e3
      }
      return Ne = U + Ne, T = {
        id: D++,
        callback: B,
        priorityLevel: T,
        startTime: U,
        expirationTime: Ne,
        sortIndex: -1
      }, U > ve ? (T.sortIndex = U, f(h, T), d(v) === null && T === d(h) && (V ? (W(se), se = -1) : V = !0, Je(xe, U - ve))) : (T.sortIndex = Ne, f(v, T), H || G || (H = !0, Ae || (Ae = !0, Qe()))), T
    }, r.unstable_shouldYield = _e, r.unstable_wrapCallback = function(T) {
      var B = O;
      return function() {
        var U = O;
        O = B;
        try {
          return T.apply(this, arguments)
        } finally {
          O = U
        }
      }
    }
  })(Wr)), Wr
}
var zm;

function H0() {
  return zm || (zm = 1, $r.exports = U0()), $r.exports
}
var Fr = {
    exports: {}
  },
  at = {};
var Tm;

function q0() {
  if (Tm) return at;
  Tm = 1;
  var r = so();

  function f(v) {
    var h = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var D = 2; D < arguments.length; D++) h += "&args[]=" + encodeURIComponent(arguments[D])
    }
    return "Minified React error #" + v + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }

  function d() {}
  var o = {
      d: {
        f: d,
        r: function() {
          throw Error(f(522))
        },
        D: d,
        C: d,
        L: d,
        m: d,
        X: d,
        S: d,
        M: d
      },
      p: 0,
      findDOMNode: null
    },
    b = Symbol.for("react.portal");

  function k(v, h, D) {
    var A = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: b,
      key: A == null ? null : "" + A,
      children: v,
      containerInfo: h,
      implementation: D
    }
  }
  var y = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

  function w(v, h) {
    if (v === "font") return "";
    if (typeof h == "string") return h === "use-credentials" ? h : ""
  }
  return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, at.createPortal = function(v, h) {
    var D = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11) throw Error(f(299));
    return k(v, h, null, D)
  }, at.flushSync = function(v) {
    var h = y.T,
      D = o.p;
    try {
      if (y.T = null, o.p = 2, v) return v()
    } finally {
      y.T = h, o.p = D, o.d.f()
    }
  }, at.preconnect = function(v, h) {
    typeof v == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, o.d.C(v, h))
  }, at.prefetchDNS = function(v) {
    typeof v == "string" && o.d.D(v)
  }, at.preinit = function(v, h) {
    if (typeof v == "string" && h && typeof h.as == "string") {
      var D = h.as,
        A = w(D, h.crossOrigin),
        O = typeof h.integrity == "string" ? h.integrity : void 0,
        G = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      D === "style" ? o.d.S(v, typeof h.precedence == "string" ? h.precedence : void 0, {
        crossOrigin: A,
        integrity: O,
        fetchPriority: G
      }) : D === "script" && o.d.X(v, {
        crossOrigin: A,
        integrity: O,
        fetchPriority: G,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      })
    }
  }, at.preinitModule = function(v, h) {
    if (typeof v == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var D = w(h.as, h.crossOrigin);
          o.d.M(v, {
            crossOrigin: D,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          })
        }
      } else h == null && o.d.M(v)
  }, at.preload = function(v, h) {
    if (typeof v == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var D = h.as,
        A = w(D, h.crossOrigin);
      o.d.L(v, D, {
        crossOrigin: A,
        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0,
        type: typeof h.type == "string" ? h.type : void 0,
        fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
        referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
        imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
        imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
        media: typeof h.media == "string" ? h.media : void 0
      })
    }
  }, at.preloadModule = function(v, h) {
    if (typeof v == "string")
      if (h) {
        var D = w(h.as, h.crossOrigin);
        o.d.m(v, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: D,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        })
      } else o.d.m(v)
  }, at.requestFormReset = function(v) {
    o.d.r(v)
  }, at.unstable_batchedUpdates = function(v, h) {
    return v(h)
  }, at.useFormState = function(v, h, D) {
    return y.H.useFormState(v, h, D)
  }, at.useFormStatus = function() {
    return y.H.useHostTransitionStatus()
  }, at.version = "19.2.6", at
}
var Am;

function B0() {
  if (Am) return Fr.exports;
  Am = 1;

  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
    } catch (f) {
      console.error(f)
    }
  }
  return r(), Fr.exports = q0(), Fr.exports
}
var Em;

function Y0() {
  if (Em) return Kn;
  Em = 1;
  var r = H0(),
    f = so(),
    d = B0();

  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++) t += "&args[]=" + encodeURIComponent(arguments[l])
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }

  function b(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
  }

  function k(e) {
    var t = e,
      l = e;
    if (e.alternate)
      for (; t.return;) t = t.return;
    else {
      e = t;
      do t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? l : null
  }

  function y(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
  }

  function w(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
  }

  function v(e) {
    if (k(e) !== e) throw Error(o(188))
  }

  function h(e) {
    var t = e.alternate;
    if (!t) {
      if (t = k(e), t === null) throw Error(o(188));
      return t !== e ? null : e
    }
    for (var l = e, a = t;;) {
      var n = l.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (a = n.return, a !== null) {
          l = a;
          continue
        }
        break
      }
      if (n.child === i.child) {
        for (i = n.child; i;) {
          if (i === l) return v(n), e;
          if (i === a) return v(n), t;
          i = i.sibling
        }
        throw Error(o(188))
      }
      if (l.return !== a.return) l = n, a = i;
      else {
        for (var c = !1, u = n.child; u;) {
          if (u === l) {
            c = !0, l = n, a = i;
            break
          }
          if (u === a) {
            c = !0, a = n, l = i;
            break
          }
          u = u.sibling
        }
        if (!c) {
          for (u = i.child; u;) {
            if (u === l) {
              c = !0, l = i, a = n;
              break
            }
            if (u === a) {
              c = !0, a = i, l = n;
              break
            }
            u = u.sibling
          }
          if (!c) throw Error(o(189))
        }
      }
      if (l.alternate !== a) throw Error(o(190))
    }
    if (l.tag !== 3) throw Error(o(188));
    return l.stateNode.current === l ? e : t
  }

  function D(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null;) {
      if (t = D(e), t !== null) return t;
      e = e.sibling
    }
    return null
  }
  var A = Object.assign,
    O = Symbol.for("react.element"),
    G = Symbol.for("react.transitional.element"),
    H = Symbol.for("react.portal"),
    V = Symbol.for("react.fragment"),
    Y = Symbol.for("react.strict_mode"),
    R = Symbol.for("react.profiler"),
    W = Symbol.for("react.consumer"),
    F = Symbol.for("react.context"),
    le = Symbol.for("react.forward_ref"),
    xe = Symbol.for("react.suspense"),
    Ae = Symbol.for("react.suspense_list"),
    se = Symbol.for("react.memo"),
    Q = Symbol.for("react.lazy"),
    be = Symbol.for("react.activity"),
    _e = Symbol.for("react.memo_cache_sentinel"),
    Ke = Symbol.iterator;

  function Qe(e) {
    return e === null || typeof e != "object" ? null : (e = Ke && e[Ke] || e["@@iterator"], typeof e == "function" ? e : null)
  }
  var Ut = Symbol.for("react.client.reference");

  function dt(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === Ut ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case V:
        return "Fragment";
      case R:
        return "Profiler";
      case Y:
        return "StrictMode";
      case xe:
        return "Suspense";
      case Ae:
        return "SuspenseList";
      case be:
        return "Activity"
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case H:
        return "Portal";
      case F:
        return e.displayName || "Context";
      case W:
        return (e._context.displayName || "Context") + ".Consumer";
      case le:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case se:
        return t = e.displayName || null, t !== null ? t : dt(e.type) || "Memo";
      case Q:
        t = e._payload, e = e._init;
        try {
          return dt(e(t))
        } catch {}
    }
    return null
  }
  var Je = Array.isArray,
    T = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    B = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    U = {
      pending: !1,
      data: null,
      method: null,
      action: null
    },
    ve = [],
    Ne = -1;

  function x(e) {
    return {
      current: e
    }
  }

  function _(e) {
    0 > Ne || (e.current = ve[Ne], ve[Ne] = null, Ne--)
  }

  function q(e, t) {
    Ne++, ve[Ne] = e.current, e.current = t
  }
  var L = x(null),
    ne = x(null),
    oe = x(null),
    ae = x(null);

  function $e(e, t) {
    switch (q(oe, t), q(ne, e), q(L, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Qd(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI) t = Qd(t), e = Xd(t, e);
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
    _(L), q(L, e)
  }

  function Me() {
    _(L), _(ne), _(oe)
  }

  function Ht(e) {
    e.memoizedState !== null && q(ae, e);
    var t = L.current,
      l = Xd(t, e.type);
    t !== l && (q(ne, e), q(L, l))
  }

  function rl(e) {
    ne.current === e && (_(L), _(ne)), ae.current === e && (_(ae), Ln._currentValue = U)
  }
  var ol, yo;

  function Yl(e) {
    if (ol === void 0) try {
      throw Error()
    } catch (l) {
      var t = l.stack.trim().match(/\n( *(at )?)/);
      ol = t && t[1] || "", yo = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : ""
    }
    return `
` + ol + e + yo
  }
  var Ei = !1;

  function Mi(e, t) {
    if (!e || Ei) return "";
    Ei = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var C = function() {
                throw Error()
              };
              if (Object.defineProperty(C.prototype, "props", {
                  set: function() {
                    throw Error()
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(C, [])
                } catch (z) {
                  var S = z
                }
                Reflect.construct(e, [], C)
              } else {
                try {
                  C.call()
                } catch (z) {
                  S = z
                }
                e.call(C.prototype)
              }
            } else {
              try {
                throw Error()
              } catch (z) {
                S = z
              }(C = e()) && typeof C.catch == "function" && C.catch(function() {})
            }
          } catch (z) {
            if (z && S && typeof z.stack == "string") return [z.stack, S.stack]
          }
          return [null, null]
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot"
      });
      var i = a.DetermineComponentFrameRoot(),
        c = i[0],
        u = i[1];
      if (c && u) {
        var m = c.split(`
`),
          N = u.split(`
`);
        for (n = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot");) a++;
        for (; n < N.length && !N[n].includes("DetermineComponentFrameRoot");) n++;
        if (a === m.length || n === N.length)
          for (a = m.length - 1, n = N.length - 1; 1 <= a && 0 <= n && m[a] !== N[n];) n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (m[a] !== N[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || m[a] !== N[n]) {
                  var E = `
` + m[a].replace(" at new ", " at ");
                  return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), E
                } while (1 <= a && 0 <= n);
            break
          }
      }
    } finally {
      Ei = !1, Error.prepareStackTrace = l
    }
    return (l = e ? e.displayName || e.name : "") ? Yl(l) : ""
  }

  function up(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Yl(e.type);
      case 16:
        return Yl("Lazy");
      case 13:
        return e.child !== t && t !== null ? Yl("Suspense Fallback") : Yl("Suspense");
      case 19:
        return Yl("SuspenseList");
      case 0:
      case 15:
        return Mi(e.type, !1);
      case 11:
        return Mi(e.type.render, !1);
      case 1:
        return Mi(e.type, !0);
      case 31:
        return Yl("Activity");
      default:
        return ""
    }
  }

  function vo(e) {
    try {
      var t = "",
        l = null;
      do t += up(e, l), l = e, e = e.return; while (e);
      return t
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack
    }
  }
  var _i = Object.prototype.hasOwnProperty,
    Ci = r.unstable_scheduleCallback,
    Oi = r.unstable_cancelCallback,
    fp = r.unstable_shouldYield,
    dp = r.unstable_requestPaint,
    mt = r.unstable_now,
    mp = r.unstable_getCurrentPriorityLevel,
    jo = r.unstable_ImmediatePriority,
    No = r.unstable_UserBlockingPriority,
    ts = r.unstable_NormalPriority,
    hp = r.unstable_LowPriority,
    wo = r.unstable_IdlePriority,
    pp = r.log,
    xp = r.unstable_setDisableYieldValue,
    Pa = null,
    ht = null;

  function ul(e) {
    if (typeof pp == "function" && xp(e), ht && typeof ht.setStrictMode == "function") try {
      ht.setStrictMode(Pa, e)
    } catch {}
  }
  var pt = Math.clz32 ? Math.clz32 : yp,
    bp = Math.log,
    gp = Math.LN2;

  function yp(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (bp(e) / gp | 0) | 0
  }
  var ls = 256,
    as = 262144,
    ns = 4194304;

  function Gl(e) {
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

  function ss(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      i = e.suspendedLanes,
      c = e.pingedLanes;
    e = e.warmLanes;
    var u = a & 134217727;
    return u !== 0 ? (a = u & ~i, a !== 0 ? n = Gl(a) : (c &= u, c !== 0 ? n = Gl(c) : l || (l = u & ~e, l !== 0 && (n = Gl(l))))) : (u = a & ~i, u !== 0 ? n = Gl(u) : c !== 0 ? n = Gl(c) : l || (l = a & ~e, l !== 0 && (n = Gl(l)))), n === 0 ? 0 : t !== 0 && t !== n && (t & i) === 0 && (i = n & -n, l = t & -t, i >= l || i === 32 && (l & 4194048) !== 0) ? t : n
  }

  function en(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
  }

  function vp(e, t) {
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

  function So() {
    var e = ns;
    return ns <<= 1, (ns & 62914560) === 0 && (ns = 4194304), e
  }

  function Di(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t
  }

  function tn(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
  }

  function jp(e, t, l, a, n, i) {
    var c = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var u = e.entanglements,
      m = e.expirationTimes,
      N = e.hiddenUpdates;
    for (l = c & ~l; 0 < l;) {
      var E = 31 - pt(l),
        C = 1 << E;
      u[E] = 0, m[E] = -1;
      var S = N[E];
      if (S !== null)
        for (N[E] = null, E = 0; E < S.length; E++) {
          var z = S[E];
          z !== null && (z.lane &= -536870913)
        }
      l &= ~C
    }
    a !== 0 && ko(e, a, 0), i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(c & ~t))
  }

  function ko(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - pt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930
  }

  function zo(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l;) {
      var a = 31 - pt(l),
        n = 1 << a;
      n & t | e[a] & t && (e[a] |= t), l &= ~n
    }
  }

  function To(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : Ri(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
  }

  function Ri(e) {
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

  function Ui(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
  }

  function Ao() {
    var e = B.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : hm(e.type))
  }

  function Eo(e, t) {
    var l = B.p;
    try {
      return B.p = e, t()
    } finally {
      B.p = l
    }
  }
  var fl = Math.random().toString(36).slice(2),
    Ie = "__reactFiber$" + fl,
    st = "__reactProps$" + fl,
    ua = "__reactContainer$" + fl,
    Hi = "__reactEvents$" + fl,
    Np = "__reactListeners$" + fl,
    wp = "__reactHandles$" + fl,
    Mo = "__reactResources$" + fl,
    ln = "__reactMarker$" + fl;

  function qi(e) {
    delete e[Ie], delete e[st], delete e[Hi], delete e[Np], delete e[wp]
  }

  function fa(e) {
    var t = e[Ie];
    if (t) return t;
    for (var l = e.parentNode; l;) {
      if (t = l[ua] || l[Ie]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = Id(e); e !== null;) {
            if (l = e[Ie]) return l;
            e = Id(e)
          }
        return t
      }
      e = l, l = e.parentNode
    }
    return null
  }

  function da(e) {
    if (e = e[Ie] || e[ua]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e
    }
    return null
  }

  function an(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33))
  }

  function ma(e) {
    var t = e[Mo];
    return t || (t = e[Mo] = {
      hoistableStyles: new Map,
      hoistableScripts: new Map
    }), t
  }

  function We(e) {
    e[ln] = !0
  }
  var _o = new Set,
    Co = {};

  function Ll(e, t) {
    ha(e, t), ha(e + "Capture", t)
  }

  function ha(e, t) {
    for (Co[e] = t, e = 0; e < t.length; e++) _o.add(t[e])
  }
  var Sp = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
    Oo = {},
    Do = {};

  function kp(e) {
    return _i.call(Do, e) ? !0 : _i.call(Oo, e) ? !1 : Sp.test(e) ? Do[e] = !0 : (Oo[e] = !0, !1)
  }

  function is(e, t, l) {
    if (kp(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return
            }
        }
        e.setAttribute(t, "" + l)
      }
  }

  function cs(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return
      }
      e.setAttribute(t, "" + l)
    }
  }

  function Vt(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return
      }
      e.setAttributeNS(t, l, "" + a)
    }
  }

  function wt(e) {
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

  function Ro(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
  }

  function zp(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get,
        i = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return n.call(this)
        },
        set: function(c) {
          l = "" + c, i.call(this, c)
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l
        },
        setValue: function(c) {
          l = "" + c
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t]
        }
      }
    }
  }

  function Bi(e) {
    if (!e._valueTracker) {
      var t = Ro(e) ? "checked" : "value";
      e._valueTracker = zp(e, t, "" + e[t])
    }
  }

  function Uo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = "";
    return e && (a = Ro(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1
  }

  function rs(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body
    } catch {
      return e.body
    }
  }
  var Tp = /[\n"\\]/g;

  function St(e) {
    return e.replace(Tp, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " "
    })
  }

  function Yi(e, t, l, a, n, i, c, u) {
    e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + wt(t)) : e.value !== "" + wt(t) && (e.value = "" + wt(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), t != null ? Gi(e, c, wt(t)) : l != null ? Gi(e, c, wt(l)) : a != null && e.removeAttribute("value"), n == null && i != null && (e.defaultChecked = !!i), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? e.name = "" + wt(u) : e.removeAttribute("name")
  }

  function Ho(e, t, l, a, n, i, c, u) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        Bi(e);
        return
      }
      l = l != null ? "" + wt(l) : "", t = t != null ? "" + wt(t) : l, u || t === e.value || (e.value = t), e.defaultValue = t
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = u ? e.checked : !!a, e.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c), Bi(e)
  }

  function Gi(e, t, l) {
    t === "number" && rs(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l)
  }

  function pa(e, t, l, a) {
    if (e = e.options, t) {
      t = {};
      for (var n = 0; n < l.length; n++) t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++) n = t.hasOwnProperty("$" + e[l].value), e[l].selected !== n && (e[l].selected = n), n && a && (e[l].defaultSelected = !0)
    } else {
      for (l = "" + wt(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          e[n].selected = !0, a && (e[n].defaultSelected = !0);
          return
        }
        t !== null || e[n].disabled || (t = e[n])
      }
      t !== null && (t.selected = !0)
    }
  }

  function qo(e, t, l) {
    if (t != null && (t = "" + wt(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return
    }
    e.defaultValue = l != null ? "" + wt(l) : ""
  }

  function Bo(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(o(92));
        if (Je(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0]
        }
        l = a
      }
      l == null && (l = ""), t = l
    }
    l = wt(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), Bi(e)
  }

  function xa(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return
      }
    }
    e.textContent = t
  }
  var Ap = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

  function Yo(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Ap.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px"
  }

  function Go(e, t, l) {
    if (t != null && typeof t != "object") throw Error(o(62));
    if (e = e.style, l != null) {
      for (var a in l) !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var n in t) a = t[n], t.hasOwnProperty(n) && l[n] !== a && Yo(e, n, a)
    } else
      for (var i in t) t.hasOwnProperty(i) && Yo(e, i, t[i])
  }

  function Li(e) {
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
  var Ep = new Map([
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
    Mp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

  function os(e) {
    return Mp.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
  }

  function Qt() {}
  var Vi = null;

  function Qi(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
  }
  var ba = null,
    ga = null;

  function Lo(e) {
    var t = da(e);
    if (t && (e = t.stateNode)) {
      var l = e[st] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Yi(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
            for (l = e; l.parentNode;) l = l.parentNode;
            for (l = l.querySelectorAll('input[name="' + St("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[st] || null;
                if (!n) throw Error(o(90));
                Yi(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
              }
            }
            for (t = 0; t < l.length; t++) a = l[t], a.form === e.form && Uo(a)
          }
          break e;
        case "textarea":
          qo(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && pa(e, !!l.multiple, t, !1)
      }
    }
  }
  var Xi = !1;

  function Vo(e, t, l) {
    if (Xi) return e(t, l);
    Xi = !0;
    try {
      var a = e(t);
      return a
    } finally {
      if (Xi = !1, (ba !== null || ga !== null) && (Ws(), ba && (t = ba, e = ga, ga = ba = null, Lo(t), e)))
        for (t = 0; t < e.length; t++) Lo(e[t])
    }
  }

  function nn(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[st] || null;
    if (a === null) return null;
    l = a[t];
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
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
        break e;
      default:
        e = !1
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(o(231, t, typeof l));
    return l
  }
  var Xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Zi = !1;
  if (Xt) try {
    var sn = {};
    Object.defineProperty(sn, "passive", {
      get: function() {
        Zi = !0
      }
    }), window.addEventListener("test", sn, sn), window.removeEventListener("test", sn, sn)
  } catch {
    Zi = !1
  }
  var dl = null,
    Ki = null,
    us = null;

  function Qo() {
    if (us) return us;
    var e, t = Ki,
      l = t.length,
      a, n = "value" in dl ? dl.value : dl.textContent,
      i = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var c = l - e;
    for (a = 1; a <= c && t[l - a] === n[i - a]; a++);
    return us = n.slice(e, 1 < a ? 1 - a : void 0)
  }

  function fs(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
  }

  function ds() {
    return !0
  }

  function Xo() {
    return !1
  }

  function it(e) {
    function t(l, a, n, i, c) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = i, this.target = c, this.currentTarget = null;
      for (var u in e) e.hasOwnProperty(u) && (l = e[u], this[u] = l ? l(i) : i[u]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ds : Xo, this.isPropagationStopped = Xo, this
    }
    return A(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = ds)
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = ds)
      },
      persist: function() {},
      isPersistent: ds
    }), t
  }
  var Vl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0
    },
    ms = it(Vl),
    cn = A({}, Vl, {
      view: 0,
      detail: 0
    }),
    _p = it(cn),
    Ji, $i, rn, hs = A({}, cn, {
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
      getModifierState: Fi,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== rn && (rn && e.type === "mousemove" ? (Ji = e.screenX - rn.screenX, $i = e.screenY - rn.screenY) : $i = Ji = 0, rn = e), Ji)
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : $i
      }
    }),
    Zo = it(hs),
    Cp = A({}, hs, {
      dataTransfer: 0
    }),
    Op = it(Cp),
    Dp = A({}, cn, {
      relatedTarget: 0
    }),
    Wi = it(Dp),
    Rp = A({}, Vl, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }),
    Up = it(Rp),
    Hp = A({}, Vl, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
      }
    }),
    qp = it(Hp),
    Bp = A({}, Vl, {
      data: 0
    }),
    Ko = it(Bp),
    Yp = {
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
    Gp = {
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
    Lp = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };

  function Vp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Lp[e]) ? !!t[e] : !1
  }

  function Fi() {
    return Vp
  }
  var Qp = A({}, cn, {
      key: function(e) {
        if (e.key) {
          var t = Yp[e.key] || e.key;
          if (t !== "Unidentified") return t
        }
        return e.type === "keypress" ? (e = fs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Gp[e.keyCode] || "Unidentified" : ""
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Fi,
      charCode: function(e) {
        return e.type === "keypress" ? fs(e) : 0
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
      },
      which: function(e) {
        return e.type === "keypress" ? fs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
      }
    }),
    Xp = it(Qp),
    Zp = A({}, hs, {
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
    Jo = it(Zp),
    Kp = A({}, cn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Fi
    }),
    Jp = it(Kp),
    $p = A({}, Vl, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }),
    Wp = it($p),
    Fp = A({}, hs, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
      },
      deltaZ: 0,
      deltaMode: 0
    }),
    Ip = it(Fp),
    Pp = A({}, Vl, {
      newState: 0,
      oldState: 0
    }),
    ex = it(Pp),
    tx = [9, 13, 27, 32],
    Ii = Xt && "CompositionEvent" in window,
    on = null;
  Xt && "documentMode" in document && (on = document.documentMode);
  var lx = Xt && "TextEvent" in window && !on,
    $o = Xt && (!Ii || on && 8 < on && 11 >= on),
    Wo = " ",
    Fo = !1;

  function Io(e, t) {
    switch (e) {
      case "keyup":
        return tx.indexOf(t.keyCode) !== -1;
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

  function Po(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
  }
  var ya = !1;

  function ax(e, t) {
    switch (e) {
      case "compositionend":
        return Po(t);
      case "keypress":
        return t.which !== 32 ? null : (Fo = !0, Wo);
      case "textInput":
        return e = t.data, e === Wo && Fo ? null : e;
      default:
        return null
    }
  }

  function nx(e, t) {
    if (ya) return e === "compositionend" || !Ii && Io(e, t) ? (e = Qo(), us = Ki = dl = null, ya = !1, e) : null;
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
        return $o && t.locale !== "ko" ? null : t.data;
      default:
        return null
    }
  }
  var sx = {
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

  function eu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!sx[e.type] : t === "textarea"
  }

  function tu(e, t, l, a) {
    ba ? ga ? ga.push(a) : ga = [a] : ba = a, t = ai(t, "onChange"), 0 < t.length && (l = new ms("onChange", "change", null, l, a), e.push({
      event: l,
      listeners: t
    }))
  }
  var un = null,
    fn = null;

  function ix(e) {
    qd(e, 0)
  }

  function ps(e) {
    var t = an(e);
    if (Uo(t)) return e
  }

  function lu(e, t) {
    if (e === "change") return t
  }
  var au = !1;
  if (Xt) {
    var Pi;
    if (Xt) {
      var ec = "oninput" in document;
      if (!ec) {
        var nu = document.createElement("div");
        nu.setAttribute("oninput", "return;"), ec = typeof nu.oninput == "function"
      }
      Pi = ec
    } else Pi = !1;
    au = Pi && (!document.documentMode || 9 < document.documentMode)
  }

  function su() {
    un && (un.detachEvent("onpropertychange", iu), fn = un = null)
  }

  function iu(e) {
    if (e.propertyName === "value" && ps(fn)) {
      var t = [];
      tu(t, fn, e, Qi(e)), Vo(ix, t)
    }
  }

  function cx(e, t, l) {
    e === "focusin" ? (su(), un = t, fn = l, un.attachEvent("onpropertychange", iu)) : e === "focusout" && su()
  }

  function rx(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ps(fn)
  }

  function ox(e, t) {
    if (e === "click") return ps(t)
  }

  function ux(e, t) {
    if (e === "input" || e === "change") return ps(t)
  }

  function fx(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
  }
  var xt = typeof Object.is == "function" ? Object.is : fx;

  function dn(e, t) {
    if (xt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!_i.call(t, n) || !xt(e[n], t[n])) return !1
    }
    return !0
  }

  function cu(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
  }

  function ru(e, t) {
    var l = cu(e);
    e = 0;
    for (var a; l;) {
      if (l.nodeType === 3) {
        if (a = e + l.textContent.length, e <= t && a >= t) return {
          node: l,
          offset: t - e
        };
        e = a
      }
      e: {
        for (; l;) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e
          }
          l = l.parentNode
        }
        l = void 0
      }
      l = cu(l)
    }
  }

  function ou(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ou(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
  }

  function uu(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = rs(e.document); t instanceof e.HTMLIFrameElement;) {
      try {
        var l = typeof t.contentWindow.location.href == "string"
      } catch {
        l = !1
      }
      if (l) e = t.contentWindow;
      else break;
      t = rs(e.document)
    }
    return t
  }

  function tc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
  }
  var dx = Xt && "documentMode" in document && 11 >= document.documentMode,
    va = null,
    lc = null,
    mn = null,
    ac = !1;

  function fu(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ac || va == null || va !== rs(a) || (a = va, "selectionStart" in a && tc(a) ? a = {
      start: a.selectionStart,
      end: a.selectionEnd
    } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), mn && dn(mn, a) || (mn = a, a = ai(lc, "onSelect"), 0 < a.length && (t = new ms("onSelect", "select", null, t, l), e.push({
      event: t,
      listeners: a
    }), t.target = va)))
  }

  function Ql(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l
  }
  var ja = {
      animationend: Ql("Animation", "AnimationEnd"),
      animationiteration: Ql("Animation", "AnimationIteration"),
      animationstart: Ql("Animation", "AnimationStart"),
      transitionrun: Ql("Transition", "TransitionRun"),
      transitionstart: Ql("Transition", "TransitionStart"),
      transitioncancel: Ql("Transition", "TransitionCancel"),
      transitionend: Ql("Transition", "TransitionEnd")
    },
    nc = {},
    du = {};
  Xt && (du = document.createElement("div").style, "AnimationEvent" in window || (delete ja.animationend.animation, delete ja.animationiteration.animation, delete ja.animationstart.animation), "TransitionEvent" in window || delete ja.transitionend.transition);

  function Xl(e) {
    if (nc[e]) return nc[e];
    if (!ja[e]) return e;
    var t = ja[e],
      l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in du) return nc[e] = t[l];
    return e
  }
  var mu = Xl("animationend"),
    hu = Xl("animationiteration"),
    pu = Xl("animationstart"),
    mx = Xl("transitionrun"),
    hx = Xl("transitionstart"),
    px = Xl("transitioncancel"),
    xu = Xl("transitionend"),
    bu = new Map,
    sc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  sc.push("scrollEnd");

  function Ot(e, t) {
    bu.set(e, t), Ll(t, [e])
  }
  var xs = typeof reportError == "function" ? reportError : function(e) {
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
    kt = [],
    Na = 0,
    ic = 0;

  function bs() {
    for (var e = Na, t = ic = Na = 0; t < e;) {
      var l = kt[t];
      kt[t++] = null;
      var a = kt[t];
      kt[t++] = null;
      var n = kt[t];
      kt[t++] = null;
      var i = kt[t];
      if (kt[t++] = null, a !== null && n !== null) {
        var c = a.pending;
        c === null ? n.next = n : (n.next = c.next, c.next = n), a.pending = n
      }
      i !== 0 && gu(l, n, i)
    }
  }

  function gs(e, t, l, a) {
    kt[Na++] = e, kt[Na++] = t, kt[Na++] = l, kt[Na++] = a, ic |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a)
  }

  function cc(e, t, l, a) {
    return gs(e, t, l, a), ys(e)
  }

  function Zl(e, t) {
    return gs(e, null, null, t), ys(e)
  }

  function gu(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, i = e.return; i !== null;) i.childLanes |= l, a = i.alternate, a !== null && (a.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (n = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, n && t !== null && (n = 31 - pt(l), e = i.hiddenUpdates, a = e[n], a === null ? e[n] = [t] : a.push(t), t.lane = l | 536870912), i) : null
  }

  function ys(e) {
    if (50 < Rn) throw Rn = 0, xr = null, Error(o(185));
    for (var t = e.return; t !== null;) e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null
  }
  var wa = {};

  function xx(e, t, l, a) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
  }

  function bt(e, t, l, a) {
    return new xx(e, t, l, a)
  }

  function rc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
  }

  function Zt(e, t) {
    var l = e.alternate;
    return l === null ? (l = bt(e.tag, t, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l
  }

  function yu(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e
  }

  function vs(e, t, l, a, n, i) {
    var c = 0;
    if (a = e, typeof e == "function") rc(e) && (c = 1);
    else if (typeof e == "string") c = j0(e, l, L.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else e: switch (e) {
      case be:
        return e = bt(31, l, t, n), e.elementType = be, e.lanes = i, e;
      case V:
        return Kl(l.children, n, i, t);
      case Y:
        c = 8, n |= 24;
        break;
      case R:
        return e = bt(12, l, t, n | 2), e.elementType = R, e.lanes = i, e;
      case xe:
        return e = bt(13, l, t, n), e.elementType = xe, e.lanes = i, e;
      case Ae:
        return e = bt(19, l, t, n), e.elementType = Ae, e.lanes = i, e;
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case F:
            c = 10;
            break e;
          case W:
            c = 9;
            break e;
          case le:
            c = 11;
            break e;
          case se:
            c = 14;
            break e;
          case Q:
            c = 16, a = null;
            break e
        }
        c = 29, l = Error(o(130, e === null ? "null" : typeof e, "")), a = null
    }
    return t = bt(c, l, t, n), t.elementType = e, t.type = a, t.lanes = i, t
  }

  function Kl(e, t, l, a) {
    return e = bt(7, e, a, t), e.lanes = l, e
  }

  function oc(e, t, l) {
    return e = bt(6, e, null, t), e.lanes = l, e
  }

  function vu(e) {
    var t = bt(18, null, null, 0);
    return t.stateNode = e, t
  }

  function uc(e, t, l) {
    return t = bt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t
  }
  var ju = new WeakMap;

  function zt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = ju.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: vo(t)
      }, ju.set(e, t), t)
    }
    return {
      value: e,
      source: t,
      stack: vo(t)
    }
  }
  var Sa = [],
    ka = 0,
    js = null,
    hn = 0,
    Tt = [],
    At = 0,
    ml = null,
    qt = 1,
    Bt = "";

  function Kt(e, t) {
    Sa[ka++] = hn, Sa[ka++] = js, js = e, hn = t
  }

  function Nu(e, t, l) {
    Tt[At++] = qt, Tt[At++] = Bt, Tt[At++] = ml, ml = e;
    var a = qt;
    e = Bt;
    var n = 32 - pt(a) - 1;
    a &= ~(1 << n), l += 1;
    var i = 32 - pt(t) + n;
    if (30 < i) {
      var c = n - n % 5;
      i = (a & (1 << c) - 1).toString(32), a >>= c, n -= c, qt = 1 << 32 - pt(t) + n | l << n | a, Bt = i + e
    } else qt = 1 << i | l << n | a, Bt = e
  }

  function fc(e) {
    e.return !== null && (Kt(e, 1), Nu(e, 1, 0))
  }

  function dc(e) {
    for (; e === js;) js = Sa[--ka], Sa[ka] = null, hn = Sa[--ka], Sa[ka] = null;
    for (; e === ml;) ml = Tt[--At], Tt[At] = null, Bt = Tt[--At], Tt[At] = null, qt = Tt[--At], Tt[At] = null
  }

  function wu(e, t) {
    Tt[At++] = qt, Tt[At++] = Bt, Tt[At++] = ml, qt = t.id, Bt = t.overflow, ml = e
  }
  var Pe = null,
    Ce = null,
    pe = !1,
    hl = null,
    Et = !1,
    mc = Error(o(519));

  function pl(e) {
    var t = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw pn(zt(t, e)), mc
  }

  function Su(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (t[Ie] = e, t[st] = a, l) {
      case "dialog":
        de("cancel", t), de("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        de("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Hn.length; l++) de(Hn[l], t);
        break;
      case "source":
        de("error", t);
        break;
      case "img":
      case "image":
      case "link":
        de("error", t), de("load", t);
        break;
      case "details":
        de("toggle", t);
        break;
      case "input":
        de("invalid", t), Ho(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
        break;
      case "select":
        de("invalid", t);
        break;
      case "textarea":
        de("invalid", t), Bo(t, a.value, a.defaultValue, a.children)
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || Ld(t.textContent, l) ? (a.popover != null && (de("beforetoggle", t), de("toggle", t)), a.onScroll != null && de("scroll", t), a.onScrollEnd != null && de("scrollend", t), a.onClick != null && (t.onclick = Qt), t = !0) : t = !1, t || pl(e, !0)
  }

  function ku(e) {
    for (Pe = e.return; Pe;) switch (Pe.tag) {
      case 5:
      case 31:
      case 13:
        Et = !1;
        return;
      case 27:
      case 3:
        Et = !0;
        return;
      default:
        Pe = Pe.return
    }
  }

  function za(e) {
    if (e !== Pe) return !1;
    if (!pe) return ku(e), pe = !0, !1;
    var t = e.tag,
      l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || _r(e.type, e.memoizedProps)), l = !l), l && Ce && pl(e), ku(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Ce = Fd(e)
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Ce = Fd(e)
    } else t === 27 ? (t = Ce, El(e.type) ? (e = Ur, Ur = null, Ce = e) : Ce = t) : Ce = Pe ? _t(e.stateNode.nextSibling) : null;
    return !0
  }

  function Jl() {
    Ce = Pe = null, pe = !1
  }

  function hc() {
    var e = hl;
    return e !== null && (ut === null ? ut = e : ut.push.apply(ut, e), hl = null), e
  }

  function pn(e) {
    hl === null ? hl = [e] : hl.push(e)
  }
  var pc = x(null),
    $l = null,
    Jt = null;

  function xl(e, t, l) {
    q(pc, t._currentValue), t._currentValue = l
  }

  function $t(e) {
    e._currentValue = pc.current, _(pc)
  }

  function xc(e, t, l) {
    for (; e !== null;) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
      e = e.return
    }
  }

  function bc(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null;) {
      var i = n.dependencies;
      if (i !== null) {
        var c = n.child;
        i = i.firstContext;
        e: for (; i !== null;) {
          var u = i;
          i = n;
          for (var m = 0; m < t.length; m++)
            if (u.context === t[m]) {
              i.lanes |= l, u = i.alternate, u !== null && (u.lanes |= l), xc(i.return, l, e), a || (c = null);
              break e
            } i = u.next
        }
      } else if (n.tag === 18) {
        if (c = n.return, c === null) throw Error(o(341));
        c.lanes |= l, i = c.alternate, i !== null && (i.lanes |= l), xc(c, l, e), c = null
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

  function Ta(e, t, l, a) {
    e = null;
    for (var n = t, i = !1; n !== null;) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(o(387));
        if (c = c.memoizedProps, c !== null) {
          var u = n.type;
          xt(n.pendingProps.value, c.value) || (e !== null ? e.push(u) : e = [u])
        }
      } else if (n === ae.current) {
        if (c = n.alternate, c === null) throw Error(o(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Ln) : e = [Ln])
      }
      n = n.return
    }
    e !== null && bc(t, e, l, a), t.flags |= 262144
  }

  function Ns(e) {
    for (e = e.firstContext; e !== null;) {
      if (!xt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next
    }
    return !1
  }

  function Wl(e) {
    $l = e, Jt = null, e = e.dependencies, e !== null && (e.firstContext = null)
  }

  function et(e) {
    return zu($l, e)
  }

  function ws(e, t) {
    return $l === null && Wl(e), zu(e, t)
  }

  function zu(e, t) {
    var l = t._currentValue;
    if (t = {
        context: t,
        memoizedValue: l,
        next: null
      }, Jt === null) {
      if (e === null) throw Error(o(308));
      Jt = t, e.dependencies = {
        lanes: 0,
        firstContext: t
      }, e.flags |= 524288
    } else Jt = Jt.next = t;
    return l
  }
  var bx = typeof AbortController < "u" ? AbortController : function() {
      var e = [],
        t = this.signal = {
          aborted: !1,
          addEventListener: function(l, a) {
            e.push(a)
          }
        };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(l) {
          return l()
        })
      }
    },
    gx = r.unstable_scheduleCallback,
    yx = r.unstable_NormalPriority,
    Ye = {
      $$typeof: F,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };

  function gc() {
    return {
      controller: new bx,
      data: new Map,
      refCount: 0
    }
  }

  function xn(e) {
    e.refCount--, e.refCount === 0 && gx(yx, function() {
      e.controller.abort()
    })
  }
  var bn = null,
    yc = 0,
    Aa = 0,
    Ea = null;

  function vx(e, t) {
    if (bn === null) {
      var l = bn = [];
      yc = 0, Aa = Nr(), Ea = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a)
        }
      }
    }
    return yc++, t.then(Tu, Tu), t
  }

  function Tu() {
    if (--yc === 0 && bn !== null) {
      Ea !== null && (Ea.status = "fulfilled");
      var e = bn;
      bn = null, Aa = 0, Ea = null;
      for (var t = 0; t < e.length; t++)(0, e[t])()
    }
  }

  function jx(e, t) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function(n) {
          l.push(n)
        }
      };
    return e.then(function() {
      a.status = "fulfilled", a.value = t;
      for (var n = 0; n < l.length; n++)(0, l[n])(t)
    }, function(n) {
      for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)(0, l[n])(void 0)
    }), a
  }
  var Au = T.S;
  T.S = function(e, t) {
    dd = mt(), typeof t == "object" && t !== null && typeof t.then == "function" && vx(e, t), Au !== null && Au(e, t)
  };
  var Fl = x(null);

  function vc() {
    var e = Fl.current;
    return e !== null ? e : Ee.pooledCache
  }

  function Ss(e, t) {
    t === null ? q(Fl, Fl.current) : q(Fl, t.pool)
  }

  function Eu() {
    var e = vc();
    return e === null ? null : {
      parent: Ye._currentValue,
      pool: e
    }
  }
  var Ma = Error(o(460)),
    jc = Error(o(474)),
    ks = Error(o(542)),
    zs = {
      then: function() {}
    };

  function Mu(e) {
    return e = e.status, e === "fulfilled" || e === "rejected"
  }

  function _u(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Qt, Qt), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Ou(e), e;
      default:
        if (typeof t.status == "string") t.then(Qt, Qt);
        else {
          if (e = Ee, e !== null && 100 < e.shellSuspendCounter) throw Error(o(482));
          e = t, e.status = "pending", e.then(function(a) {
            if (t.status === "pending") {
              var n = t;
              n.status = "fulfilled", n.value = a
            }
          }, function(a) {
            if (t.status === "pending") {
              var n = t;
              n.status = "rejected", n.reason = a
            }
          })
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Ou(e), e
        }
        throw Pl = t, Ma
    }
  }

  function Il(e) {
    try {
      var t = e._init;
      return t(e._payload)
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Pl = l, Ma) : l
    }
  }
  var Pl = null;

  function Cu() {
    if (Pl === null) throw Error(o(459));
    var e = Pl;
    return Pl = null, e
  }

  function Ou(e) {
    if (e === Ma || e === ks) throw Error(o(483))
  }
  var _a = null,
    gn = 0;

  function Ts(e) {
    var t = gn;
    return gn += 1, _a === null && (_a = []), _u(_a, e, t)
  }

  function yn(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null
  }

  function As(e, t) {
    throw t.$$typeof === O ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
  }

  function Du(e) {
    function t(g, p) {
      if (e) {
        var j = g.deletions;
        j === null ? (g.deletions = [p], g.flags |= 16) : j.push(p)
      }
    }

    function l(g, p) {
      if (!e) return null;
      for (; p !== null;) t(g, p), p = p.sibling;
      return null
    }

    function a(g) {
      for (var p = new Map; g !== null;) g.key !== null ? p.set(g.key, g) : p.set(g.index, g), g = g.sibling;
      return p
    }

    function n(g, p) {
      return g = Zt(g, p), g.index = 0, g.sibling = null, g
    }

    function i(g, p, j) {
      return g.index = j, e ? (j = g.alternate, j !== null ? (j = j.index, j < p ? (g.flags |= 67108866, p) : j) : (g.flags |= 67108866, p)) : (g.flags |= 1048576, p)
    }

    function c(g) {
      return e && g.alternate === null && (g.flags |= 67108866), g
    }

    function u(g, p, j, M) {
      return p === null || p.tag !== 6 ? (p = oc(j, g.mode, M), p.return = g, p) : (p = n(p, j), p.return = g, p)
    }

    function m(g, p, j, M) {
      var I = j.type;
      return I === V ? E(g, p, j.props.children, M, j.key) : p !== null && (p.elementType === I || typeof I == "object" && I !== null && I.$$typeof === Q && Il(I) === p.type) ? (p = n(p, j.props), yn(p, j), p.return = g, p) : (p = vs(j.type, j.key, j.props, null, g.mode, M), yn(p, j), p.return = g, p)
    }

    function N(g, p, j, M) {
      return p === null || p.tag !== 4 || p.stateNode.containerInfo !== j.containerInfo || p.stateNode.implementation !== j.implementation ? (p = uc(j, g.mode, M), p.return = g, p) : (p = n(p, j.children || []), p.return = g, p)
    }

    function E(g, p, j, M, I) {
      return p === null || p.tag !== 7 ? (p = Kl(j, g.mode, M, I), p.return = g, p) : (p = n(p, j), p.return = g, p)
    }

    function C(g, p, j) {
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint") return p = oc("" + p, g.mode, j), p.return = g, p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case G:
            return j = vs(p.type, p.key, p.props, null, g.mode, j), yn(j, p), j.return = g, j;
          case H:
            return p = uc(p, g.mode, j), p.return = g, p;
          case Q:
            return p = Il(p), C(g, p, j)
        }
        if (Je(p) || Qe(p)) return p = Kl(p, g.mode, j, null), p.return = g, p;
        if (typeof p.then == "function") return C(g, Ts(p), j);
        if (p.$$typeof === F) return C(g, ws(g, p), j);
        As(g, p)
      }
      return null
    }

    function S(g, p, j, M) {
      var I = p !== null ? p.key : null;
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint") return I !== null ? null : u(g, p, "" + j, M);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case G:
            return j.key === I ? m(g, p, j, M) : null;
          case H:
            return j.key === I ? N(g, p, j, M) : null;
          case Q:
            return j = Il(j), S(g, p, j, M)
        }
        if (Je(j) || Qe(j)) return I !== null ? null : E(g, p, j, M, null);
        if (typeof j.then == "function") return S(g, p, Ts(j), M);
        if (j.$$typeof === F) return S(g, p, ws(g, j), M);
        As(g, j)
      }
      return null
    }

    function z(g, p, j, M, I) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint") return g = g.get(j) || null, u(p, g, "" + M, I);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case G:
            return g = g.get(M.key === null ? j : M.key) || null, m(p, g, M, I);
          case H:
            return g = g.get(M.key === null ? j : M.key) || null, N(p, g, M, I);
          case Q:
            return M = Il(M), z(g, p, j, M, I)
        }
        if (Je(M) || Qe(M)) return g = g.get(j) || null, E(p, g, M, I, null);
        if (typeof M.then == "function") return z(g, p, j, Ts(M), I);
        if (M.$$typeof === F) return z(g, p, j, ws(p, M), I);
        As(p, M)
      }
      return null
    }

    function X(g, p, j, M) {
      for (var I = null, ge = null, $ = p, re = p = 0, he = null; $ !== null && re < j.length; re++) {
        $.index > re ? (he = $, $ = null) : he = $.sibling;
        var ye = S(g, $, j[re], M);
        if (ye === null) {
          $ === null && ($ = he);
          break
        }
        e && $ && ye.alternate === null && t(g, $), p = i(ye, p, re), ge === null ? I = ye : ge.sibling = ye, ge = ye, $ = he
      }
      if (re === j.length) return l(g, $), pe && Kt(g, re), I;
      if ($ === null) {
        for (; re < j.length; re++) $ = C(g, j[re], M), $ !== null && (p = i($, p, re), ge === null ? I = $ : ge.sibling = $, ge = $);
        return pe && Kt(g, re), I
      }
      for ($ = a($); re < j.length; re++) he = z($, g, re, j[re], M), he !== null && (e && he.alternate !== null && $.delete(he.key === null ? re : he.key), p = i(he, p, re), ge === null ? I = he : ge.sibling = he, ge = he);
      return e && $.forEach(function(Dl) {
        return t(g, Dl)
      }), pe && Kt(g, re), I
    }

    function ee(g, p, j, M) {
      if (j == null) throw Error(o(151));
      for (var I = null, ge = null, $ = p, re = p = 0, he = null, ye = j.next(); $ !== null && !ye.done; re++, ye = j.next()) {
        $.index > re ? (he = $, $ = null) : he = $.sibling;
        var Dl = S(g, $, ye.value, M);
        if (Dl === null) {
          $ === null && ($ = he);
          break
        }
        e && $ && Dl.alternate === null && t(g, $), p = i(Dl, p, re), ge === null ? I = Dl : ge.sibling = Dl, ge = Dl, $ = he
      }
      if (ye.done) return l(g, $), pe && Kt(g, re), I;
      if ($ === null) {
        for (; !ye.done; re++, ye = j.next()) ye = C(g, ye.value, M), ye !== null && (p = i(ye, p, re), ge === null ? I = ye : ge.sibling = ye, ge = ye);
        return pe && Kt(g, re), I
      }
      for ($ = a($); !ye.done; re++, ye = j.next()) ye = z($, g, re, ye.value, M), ye !== null && (e && ye.alternate !== null && $.delete(ye.key === null ? re : ye.key), p = i(ye, p, re), ge === null ? I = ye : ge.sibling = ye, ge = ye);
      return e && $.forEach(function(C0) {
        return t(g, C0)
      }), pe && Kt(g, re), I
    }

    function Te(g, p, j, M) {
      if (typeof j == "object" && j !== null && j.type === V && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case G:
            e: {
              for (var I = j.key; p !== null;) {
                if (p.key === I) {
                  if (I = j.type, I === V) {
                    if (p.tag === 7) {
                      l(g, p.sibling), M = n(p, j.props.children), M.return = g, g = M;
                      break e
                    }
                  } else if (p.elementType === I || typeof I == "object" && I !== null && I.$$typeof === Q && Il(I) === p.type) {
                    l(g, p.sibling), M = n(p, j.props), yn(M, j), M.return = g, g = M;
                    break e
                  }
                  l(g, p);
                  break
                } else t(g, p);
                p = p.sibling
              }
              j.type === V ? (M = Kl(j.props.children, g.mode, M, j.key), M.return = g, g = M) : (M = vs(j.type, j.key, j.props, null, g.mode, M), yn(M, j), M.return = g, g = M)
            }
            return c(g);
          case H:
            e: {
              for (I = j.key; p !== null;) {
                if (p.key === I)
                  if (p.tag === 4 && p.stateNode.containerInfo === j.containerInfo && p.stateNode.implementation === j.implementation) {
                    l(g, p.sibling), M = n(p, j.children || []), M.return = g, g = M;
                    break e
                  } else {
                    l(g, p);
                    break
                  }
                else t(g, p);
                p = p.sibling
              }
              M = uc(j, g.mode, M),
              M.return = g,
              g = M
            }
            return c(g);
          case Q:
            return j = Il(j), Te(g, p, j, M)
        }
        if (Je(j)) return X(g, p, j, M);
        if (Qe(j)) {
          if (I = Qe(j), typeof I != "function") throw Error(o(150));
          return j = I.call(j), ee(g, p, j, M)
        }
        if (typeof j.then == "function") return Te(g, p, Ts(j), M);
        if (j.$$typeof === F) return Te(g, p, ws(g, j), M);
        As(g, j)
      }
      return typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint" ? (j = "" + j, p !== null && p.tag === 6 ? (l(g, p.sibling), M = n(p, j), M.return = g, g = M) : (l(g, p), M = oc(j, g.mode, M), M.return = g, g = M), c(g)) : l(g, p)
    }
    return function(g, p, j, M) {
      try {
        gn = 0;
        var I = Te(g, p, j, M);
        return _a = null, I
      } catch ($) {
        if ($ === Ma || $ === ks) throw $;
        var ge = bt(29, $, null, g.mode);
        return ge.lanes = M, ge.return = g, ge
      }
    }
  }
  var ea = Du(!0),
    Ru = Du(!1),
    bl = !1;

  function Nc(e) {
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

  function wc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    })
  }

  function gl(e) {
    return {
      lane: e,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    }
  }

  function yl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (je & 2) !== 0) {
      var n = a.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = ys(e), gu(e, null, l), t
    }
    return gs(e, a, t, l), ys(e)
  }

  function vn(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, zo(e, l)
    }
  }

  function Sc(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null,
        i = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var c = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          i === null ? n = i = c : i = i.next = c, l = l.next
        } while (l !== null);
        i === null ? n = i = t : i = i.next = t
      } else n = i = t;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = l;
      return
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t
  }
  var kc = !1;

  function jn() {
    if (kc) {
      var e = Ea;
      if (e !== null) throw e
    }
  }

  function Nn(e, t, l, a) {
    kc = !1;
    var n = e.updateQueue;
    bl = !1;
    var i = n.firstBaseUpdate,
      c = n.lastBaseUpdate,
      u = n.shared.pending;
    if (u !== null) {
      n.shared.pending = null;
      var m = u,
        N = m.next;
      m.next = null, c === null ? i = N : c.next = N, c = m;
      var E = e.alternate;
      E !== null && (E = E.updateQueue, u = E.lastBaseUpdate, u !== c && (u === null ? E.firstBaseUpdate = N : u.next = N, E.lastBaseUpdate = m))
    }
    if (i !== null) {
      var C = n.baseState;
      c = 0, E = N = m = null, u = i;
      do {
        var S = u.lane & -536870913,
          z = S !== u.lane;
        if (z ? (me & S) === S : (a & S) === S) {
          S !== 0 && S === Aa && (kc = !0), E !== null && (E = E.next = {
            lane: 0,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          });
          e: {
            var X = e,
              ee = u;S = t;
            var Te = l;
            switch (ee.tag) {
              case 1:
                if (X = ee.payload, typeof X == "function") {
                  C = X.call(Te, C, S);
                  break e
                }
                C = X;
                break e;
              case 3:
                X.flags = X.flags & -65537 | 128;
              case 0:
                if (X = ee.payload, S = typeof X == "function" ? X.call(Te, C, S) : X, S == null) break e;
                C = A({}, C, S);
                break e;
              case 2:
                bl = !0
            }
          }
          S = u.callback, S !== null && (e.flags |= 64, z && (e.flags |= 8192), z = n.callbacks, z === null ? n.callbacks = [S] : z.push(S))
        } else z = {
          lane: S,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        }, E === null ? (N = E = z, m = C) : E = E.next = z, c |= S;
        if (u = u.next, u === null) {
          if (u = n.shared.pending, u === null) break;
          z = u, u = z.next, z.next = null, n.lastBaseUpdate = z, n.shared.pending = null
        }
      } while (!0);
      E === null && (m = C), n.baseState = m, n.firstBaseUpdate = N, n.lastBaseUpdate = E, i === null && (n.shared.lanes = 0), Sl |= c, e.lanes = c, e.memoizedState = C
    }
  }

  function Uu(e, t) {
    if (typeof e != "function") throw Error(o(191, e));
    e.call(t)
  }

  function Hu(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) Uu(l[e], t)
  }
  var Ca = x(null),
    Es = x(0);

  function qu(e, t) {
    e = nl, q(Es, e), q(Ca, t), nl = e | t.baseLanes
  }

  function zc() {
    q(Es, nl), q(Ca, Ca.current)
  }

  function Tc() {
    nl = Es.current, _(Ca), _(Es)
  }
  var gt = x(null),
    Mt = null;

  function vl(e) {
    var t = e.alternate;
    q(qe, qe.current & 1), q(gt, e), Mt === null && (t === null || Ca.current !== null || t.memoizedState !== null) && (Mt = e)
  }

  function Ac(e) {
    q(qe, qe.current), q(gt, e), Mt === null && (Mt = e)
  }

  function Bu(e) {
    e.tag === 22 ? (q(qe, qe.current), q(gt, e), Mt === null && (Mt = e)) : jl()
  }

  function jl() {
    q(qe, qe.current), q(gt, gt.current)
  }

  function yt(e) {
    _(gt), Mt === e && (Mt = null), _(qe)
  }
  var qe = x(0);

  function Ms(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Dr(l) || Rr(l))) return t
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
  var Wt = 0,
    ce = null,
    ke = null,
    Ge = null,
    _s = !1,
    Oa = !1,
    ta = !1,
    Cs = 0,
    wn = 0,
    Da = null,
    Nx = 0;

  function Ue() {
    throw Error(o(321))
  }

  function Ec(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!xt(e[l], t[l])) return !1;
    return !0
  }

  function Mc(e, t, l, a, n, i) {
    return Wt = i, ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, T.H = e === null || e.memoizedState === null ? wf : Xc, ta = !1, i = l(a, n), ta = !1, Oa && (i = Gu(t, l, a, n)), Yu(e), i
  }

  function Yu(e) {
    T.H = zn;
    var t = ke !== null && ke.next !== null;
    if (Wt = 0, Ge = ke = ce = null, _s = !1, wn = 0, Da = null, t) throw Error(o(300));
    e === null || Le || (e = e.dependencies, e !== null && Ns(e) && (Le = !0))
  }

  function Gu(e, t, l, a) {
    ce = e;
    var n = 0;
    do {
      if (Oa && (Da = null), wn = 0, Oa = !1, 25 <= n) throw Error(o(301));
      if (n += 1, Ge = ke = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0)
      }
      T.H = Sf, i = t(l, a)
    } while (Oa);
    return i
  }

  function wx() {
    var e = T.H,
      t = e.useState()[0];
    return t = typeof t.then == "function" ? Sn(t) : t, e = e.useState()[0], (ke !== null ? ke.memoizedState : null) !== e && (ce.flags |= 1024), t
  }

  function _c() {
    var e = Cs !== 0;
    return Cs = 0, e
  }

  function Cc(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l
  }

  function Oc(e) {
    if (_s) {
      for (e = e.memoizedState; e !== null;) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next
      }
      _s = !1
    }
    Wt = 0, Ge = ke = ce = null, Oa = !1, wn = Cs = 0, Da = null
  }

  function nt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ge === null ? ce.memoizedState = Ge = e : Ge = Ge.next = e, Ge
  }

  function Be() {
    if (ke === null) {
      var e = ce.alternate;
      e = e !== null ? e.memoizedState : null
    } else e = ke.next;
    var t = Ge === null ? ce.memoizedState : Ge.next;
    if (t !== null) Ge = t, ke = e;
    else {
      if (e === null) throw ce.alternate === null ? Error(o(467)) : Error(o(310));
      ke = e, e = {
        memoizedState: ke.memoizedState,
        baseState: ke.baseState,
        baseQueue: ke.baseQueue,
        queue: ke.queue,
        next: null
      }, Ge === null ? ce.memoizedState = Ge = e : Ge = Ge.next = e
    }
    return Ge
  }

  function Os() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    }
  }

  function Sn(e) {
    var t = wn;
    return wn += 1, Da === null && (Da = []), e = _u(Da, e, t), t = ce, (Ge === null ? t.memoizedState : Ge.next) === null && (t = t.alternate, T.H = t === null || t.memoizedState === null ? wf : Xc), e
  }

  function Ds(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Sn(e);
      if (e.$$typeof === F) return et(e)
    }
    throw Error(o(438, String(e)))
  }

  function Dc(e) {
    var t = null,
      l = ce.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var a = ce.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(n) {
          return n.slice()
        }),
        index: 0
      })))
    }
    if (t == null && (t = {
        data: [],
        index: 0
      }), l === null && (l = Os(), ce.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = _e;
    return t.index++, l
  }

  function Ft(e, t) {
    return typeof t == "function" ? t(e) : t
  }

  function Rs(e) {
    var t = Be();
    return Rc(t, ke, e)
  }

  function Rc(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue,
      i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var c = n.next;
        n.next = i.next, i.next = c
      }
      t.baseQueue = n = i, a.pending = null
    }
    if (i = e.baseState, n === null) e.memoizedState = i;
    else {
      t = n.next;
      var u = c = null,
        m = null,
        N = t,
        E = !1;
      do {
        var C = N.lane & -536870913;
        if (C !== N.lane ? (me & C) === C : (Wt & C) === C) {
          var S = N.revertLane;
          if (S === 0) m !== null && (m = m.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          }), C === Aa && (E = !0);
          else if ((Wt & S) === S) {
            N = N.next, S === Aa && (E = !0);
            continue
          } else C = {
            lane: 0,
            revertLane: N.revertLane,
            gesture: null,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          }, m === null ? (u = m = C, c = i) : m = m.next = C, ce.lanes |= S, Sl |= S;
          C = N.action, ta && l(i, C), i = N.hasEagerState ? N.eagerState : l(i, C)
        } else S = {
          lane: C,
          revertLane: N.revertLane,
          gesture: N.gesture,
          action: N.action,
          hasEagerState: N.hasEagerState,
          eagerState: N.eagerState,
          next: null
        }, m === null ? (u = m = S, c = i) : m = m.next = S, ce.lanes |= C, Sl |= C;
        N = N.next
      } while (N !== null && N !== t);
      if (m === null ? c = i : m.next = u, !xt(i, e.memoizedState) && (Le = !0, E && (l = Ea, l !== null))) throw l;
      e.memoizedState = i, e.baseState = c, e.baseQueue = m, a.lastRenderedState = i
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch]
  }

  function Uc(e) {
    var t = Be(),
      l = t.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      n = l.pending,
      i = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var c = n = n.next;
      do i = e(i, c.action), c = c.next; while (c !== n);
      xt(i, t.memoizedState) || (Le = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), l.lastRenderedState = i
    }
    return [i, a]
  }

  function Lu(e, t, l) {
    var a = ce,
      n = Be(),
      i = pe;
    if (i) {
      if (l === void 0) throw Error(o(407));
      l = l()
    } else l = t();
    var c = !xt((ke || n).memoizedState, l);
    if (c && (n.memoizedState = l, Le = !0), n = n.queue, Bc(Xu.bind(null, a, n, e), [e]), n.getSnapshot !== t || c || Ge !== null && Ge.memoizedState.tag & 1) {
      if (a.flags |= 2048, Ra(9, {
          destroy: void 0
        }, Qu.bind(null, a, n, l, t), null), Ee === null) throw Error(o(349));
      i || (Wt & 127) !== 0 || Vu(a, t, l)
    }
    return l
  }

  function Vu(e, t, l) {
    e.flags |= 16384, e = {
      getSnapshot: t,
      value: l
    }, t = ce.updateQueue, t === null ? (t = Os(), ce.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e))
  }

  function Qu(e, t, l, a) {
    t.value = l, t.getSnapshot = a, Zu(t) && Ku(e)
  }

  function Xu(e, t, l) {
    return l(function() {
      Zu(t) && Ku(e)
    })
  }

  function Zu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !xt(e, l)
    } catch {
      return !0
    }
  }

  function Ku(e) {
    var t = Zl(e, 2);
    t !== null && ft(t, e, 2)
  }

  function Hc(e) {
    var t = nt();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), ta) {
        ul(!0);
        try {
          l()
        } finally {
          ul(!1)
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ft,
      lastRenderedState: e
    }, t
  }

  function Ju(e, t, l, a) {
    return e.baseState = l, Rc(e, ke, typeof a == "function" ? a : Ft)
  }

  function Sx(e, t, l, a, n) {
    if (qs(e)) throw Error(o(485));
    if (e = t.action, e !== null) {
      var i = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(c) {
          i.listeners.push(c)
        }
      };
      T.T !== null ? l(!0) : i.isTransition = !1, a(i), l = t.pending, l === null ? (i.next = t.pending = i, $u(t, i)) : (i.next = l.next, t.pending = l.next = i)
    }
  }

  function $u(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state;
    if (t.isTransition) {
      var i = T.T,
        c = {};
      T.T = c;
      try {
        var u = l(n, a),
          m = T.S;
        m !== null && m(c, u), Wu(e, t, u)
      } catch (N) {
        qc(e, t, N)
      } finally {
        i !== null && c.types !== null && (i.types = c.types), T.T = i
      }
    } else try {
      i = l(n, a), Wu(e, t, i)
    } catch (N) {
      qc(e, t, N)
    }
  }

  function Wu(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
      Fu(e, t, a)
    }, function(a) {
      return qc(e, t, a)
    }) : Fu(e, t, l)
  }

  function Fu(e, t, l) {
    t.status = "fulfilled", t.value = l, Iu(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, $u(e, l)))
  }

  function qc(e, t, l) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do t.status = "rejected", t.reason = l, Iu(t), t = t.next; while (t !== a)
    }
    e.action = null
  }

  function Iu(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++)(0, e[t])()
  }

  function Pu(e, t) {
    return t
  }

  function ef(e, t) {
    if (pe) {
      var l = Ee.formState;
      if (l !== null) {
        e: {
          var a = ce;
          if (pe) {
            if (Ce) {
              t: {
                for (var n = Ce, i = Et; n.nodeType !== 8;) {
                  if (!i) {
                    n = null;
                    break t
                  }
                  if (n = _t(n.nextSibling), n === null) {
                    n = null;
                    break t
                  }
                }
                i = n.data,
                n = i === "F!" || i === "F" ? n : null
              }
              if (n) {
                Ce = _t(n.nextSibling), a = n.data === "F!";
                break e
              }
            }
            pl(a)
          }
          a = !1
        }
        a && (t = l[0])
      }
    }
    return l = nt(), l.memoizedState = l.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Pu,
      lastRenderedState: t
    }, l.queue = a, l = vf.bind(null, ce, a), a.dispatch = l, a = Hc(!1), i = Qc.bind(null, ce, !1, a.queue), a = nt(), n = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = n, l = Sx.bind(null, ce, n, i, l), n.dispatch = l, a.memoizedState = e, [t, l, !1]
  }

  function tf(e) {
    var t = Be();
    return lf(t, ke, e)
  }

  function lf(e, t, l) {
    if (t = Rc(e, t, Pu)[0], e = Rs(Ft)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var a = Sn(t)
    } catch (c) {
      throw c === Ma ? ks : c
    } else a = t;
    t = Be();
    var n = t.queue,
      i = n.dispatch;
    return l !== t.memoizedState && (ce.flags |= 2048, Ra(9, {
      destroy: void 0
    }, kx.bind(null, n, l), null)), [a, i, e]
  }

  function kx(e, t) {
    e.action = t
  }

  function af(e) {
    var t = Be(),
      l = ke;
    if (l !== null) return lf(t, l, e);
    Be(), t = t.memoizedState, l = Be();
    var a = l.queue.dispatch;
    return l.memoizedState = e, [t, a, !1]
  }

  function Ra(e, t, l, a) {
    return e = {
      tag: e,
      create: l,
      deps: a,
      inst: t,
      next: null
    }, t = ce.updateQueue, t === null && (t = Os(), ce.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e
  }

  function nf() {
    return Be().memoizedState
  }

  function Us(e, t, l, a) {
    var n = nt();
    ce.flags |= e, n.memoizedState = Ra(1 | t, {
      destroy: void 0
    }, l, a === void 0 ? null : a)
  }

  function Hs(e, t, l, a) {
    var n = Be();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    ke !== null && a !== null && Ec(a, ke.memoizedState.deps) ? n.memoizedState = Ra(t, i, l, a) : (ce.flags |= e, n.memoizedState = Ra(1 | t, i, l, a))
  }

  function sf(e, t) {
    Us(8390656, 8, e, t)
  }

  function Bc(e, t) {
    Hs(2048, 8, e, t)
  }

  function zx(e) {
    ce.flags |= 4;
    var t = ce.updateQueue;
    if (t === null) t = Os(), ce.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e)
    }
  }

  function cf(e) {
    var t = Be().memoizedState;
    return zx({
        ref: t,
        nextImpl: e
      }),
      function() {
        if ((je & 2) !== 0) throw Error(o(440));
        return t.impl.apply(void 0, arguments)
      }
  }

  function rf(e, t) {
    return Hs(4, 2, e, t)
  }

  function of(e, t) {
    return Hs(4, 4, e, t)
  }

  function uf(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function() {
        typeof l == "function" ? l() : t(null)
      }
    }
    if (t != null) return e = e(), t.current = e,
      function() {
        t.current = null
      }
  }

  function ff(e, t, l) {
    l = l != null ? l.concat([e]) : null, Hs(4, 4, uf.bind(null, t, e), l)
  }

  function Yc() {}

  function df(e, t) {
    var l = Be();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Ec(t, a[1]) ? a[0] : (l.memoizedState = [e, t], e)
  }

  function mf(e, t) {
    var l = Be();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Ec(t, a[1])) return a[0];
    if (a = e(), ta) {
      ul(!0);
      try {
        e()
      } finally {
        ul(!1)
      }
    }
    return l.memoizedState = [a, t], a
  }

  function Gc(e, t, l) {
    return l === void 0 || (Wt & 1073741824) !== 0 && (me & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = hd(), ce.lanes |= e, Sl |= e, l)
  }

  function hf(e, t, l, a) {
    return xt(l, t) ? l : Ca.current !== null ? (e = Gc(e, l, a), xt(e, t) || (Le = !0), e) : (Wt & 42) === 0 || (Wt & 1073741824) !== 0 && (me & 261930) === 0 ? (Le = !0, e.memoizedState = l) : (e = hd(), ce.lanes |= e, Sl |= e, t)
  }

  function pf(e, t, l, a, n) {
    var i = B.p;
    B.p = i !== 0 && 8 > i ? i : 8;
    var c = T.T,
      u = {};
    T.T = u, Qc(e, !1, t, l);
    try {
      var m = n(),
        N = T.S;
      if (N !== null && N(u, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var E = jx(m, a);
        kn(e, t, E, Nt(e))
      } else kn(e, t, a, Nt(e))
    } catch (C) {
      kn(e, t, {
        then: function() {},
        status: "rejected",
        reason: C
      }, Nt())
    } finally {
      B.p = i, c !== null && u.types !== null && (c.types = u.types), T.T = c
    }
  }

  function Tx() {}

  function Lc(e, t, l, a) {
    if (e.tag !== 5) throw Error(o(476));
    var n = xf(e).queue;
    pf(e, n, t, U, l === null ? Tx : function() {
      return bf(e), l(a)
    })
  }

  function xf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: U,
      baseState: U,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ft,
        lastRenderedState: U
      },
      next: null
    };
    var l = {};
    return t.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ft,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t
  }

  function bf(e) {
    var t = xf(e);
    t.next === null && (t = e.alternate.memoizedState), kn(e, t.next.queue, {}, Nt())
  }

  function Vc() {
    return et(Ln)
  }

  function gf() {
    return Be().memoizedState
  }

  function yf() {
    return Be().memoizedState
  }

  function Ax(e) {
    for (var t = e.return; t !== null;) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Nt();
          e = gl(l);
          var a = yl(t, e, l);
          a !== null && (ft(a, t, l), vn(a, t, l)), t = {
            cache: gc()
          }, e.payload = t;
          return
      }
      t = t.return
    }
  }

  function Ex(e, t, l) {
    var a = Nt();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, qs(e) ? jf(t, l) : (l = cc(e, t, l, a), l !== null && (ft(l, e, a), Nf(l, t, a)))
  }

  function vf(e, t, l) {
    var a = Nt();
    kn(e, t, l, a)
  }

  function kn(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (qs(e)) jf(t, n);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var c = t.lastRenderedState,
          u = i(c, l);
        if (n.hasEagerState = !0, n.eagerState = u, xt(u, c)) return gs(e, t, n, 0), Ee === null && bs(), !1
      } catch {}
      if (l = cc(e, t, n, a), l !== null) return ft(l, e, a), Nf(l, t, a), !0
    }
    return !1
  }

  function Qc(e, t, l, a) {
    if (a = {
        lane: 2,
        revertLane: Nr(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, qs(e)) {
      if (t) throw Error(o(479))
    } else t = cc(e, l, a, 2), t !== null && ft(t, e, 2)
  }

  function qs(e) {
    var t = e.alternate;
    return e === ce || t !== null && t === ce
  }

  function jf(e, t) {
    Oa = _s = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t
  }

  function Nf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, zo(e, l)
    }
  }
  var zn = {
    readContext: et,
    use: Ds,
    useCallback: Ue,
    useContext: Ue,
    useEffect: Ue,
    useImperativeHandle: Ue,
    useLayoutEffect: Ue,
    useInsertionEffect: Ue,
    useMemo: Ue,
    useReducer: Ue,
    useRef: Ue,
    useState: Ue,
    useDebugValue: Ue,
    useDeferredValue: Ue,
    useTransition: Ue,
    useSyncExternalStore: Ue,
    useId: Ue,
    useHostTransitionStatus: Ue,
    useFormState: Ue,
    useActionState: Ue,
    useOptimistic: Ue,
    useMemoCache: Ue,
    useCacheRefresh: Ue
  };
  zn.useEffectEvent = Ue;
  var wf = {
      readContext: et,
      use: Ds,
      useCallback: function(e, t) {
        return nt().memoizedState = [e, t === void 0 ? null : t], e
      },
      useContext: et,
      useEffect: sf,
      useImperativeHandle: function(e, t, l) {
        l = l != null ? l.concat([e]) : null, Us(4194308, 4, uf.bind(null, t, e), l)
      },
      useLayoutEffect: function(e, t) {
        return Us(4194308, 4, e, t)
      },
      useInsertionEffect: function(e, t) {
        Us(4, 2, e, t)
      },
      useMemo: function(e, t) {
        var l = nt();
        t = t === void 0 ? null : t;
        var a = e();
        if (ta) {
          ul(!0);
          try {
            e()
          } finally {
            ul(!1)
          }
        }
        return l.memoizedState = [a, t], a
      },
      useReducer: function(e, t, l) {
        var a = nt();
        if (l !== void 0) {
          var n = l(t);
          if (ta) {
            ul(!0);
            try {
              l(t)
            } finally {
              ul(!1)
            }
          }
        } else n = t;
        return a.memoizedState = a.baseState = n, e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n
        }, a.queue = e, e = e.dispatch = Ex.bind(null, ce, e), [a.memoizedState, e]
      },
      useRef: function(e) {
        var t = nt();
        return e = {
          current: e
        }, t.memoizedState = e
      },
      useState: function(e) {
        e = Hc(e);
        var t = e.queue,
          l = vf.bind(null, ce, t);
        return t.dispatch = l, [e.memoizedState, l]
      },
      useDebugValue: Yc,
      useDeferredValue: function(e, t) {
        var l = nt();
        return Gc(l, e, t)
      },
      useTransition: function() {
        var e = Hc(!1);
        return e = pf.bind(null, ce, e.queue, !0, !1), nt().memoizedState = e, [!1, e]
      },
      useSyncExternalStore: function(e, t, l) {
        var a = ce,
          n = nt();
        if (pe) {
          if (l === void 0) throw Error(o(407));
          l = l()
        } else {
          if (l = t(), Ee === null) throw Error(o(349));
          (me & 127) !== 0 || Vu(a, t, l)
        }
        n.memoizedState = l;
        var i = {
          value: l,
          getSnapshot: t
        };
        return n.queue = i, sf(Xu.bind(null, a, i, e), [e]), a.flags |= 2048, Ra(9, {
          destroy: void 0
        }, Qu.bind(null, a, i, l, t), null), l
      },
      useId: function() {
        var e = nt(),
          t = Ee.identifierPrefix;
        if (pe) {
          var l = Bt,
            a = qt;
          l = (a & ~(1 << 32 - pt(a) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = Cs++, 0 < l && (t += "H" + l.toString(32)), t += "_"
        } else l = Nx++, t = "_" + t + "r_" + l.toString(32) + "_";
        return e.memoizedState = t
      },
      useHostTransitionStatus: Vc,
      useFormState: ef,
      useActionState: ef,
      useOptimistic: function(e) {
        var t = nt();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return t.queue = l, t = Qc.bind(null, ce, !0, l), l.dispatch = t, [e, t]
      },
      useMemoCache: Dc,
      useCacheRefresh: function() {
        return nt().memoizedState = Ax.bind(null, ce)
      },
      useEffectEvent: function(e) {
        var t = nt(),
          l = {
            impl: e
          };
        return t.memoizedState = l,
          function() {
            if ((je & 2) !== 0) throw Error(o(440));
            return l.impl.apply(void 0, arguments)
          }
      }
    },
    Xc = {
      readContext: et,
      use: Ds,
      useCallback: df,
      useContext: et,
      useEffect: Bc,
      useImperativeHandle: ff,
      useInsertionEffect: rf,
      useLayoutEffect: of,
      useMemo: mf,
      useReducer: Rs,
      useRef: nf,
      useState: function() {
        return Rs(Ft)
      },
      useDebugValue: Yc,
      useDeferredValue: function(e, t) {
        var l = Be();
        return hf(l, ke.memoizedState, e, t)
      },
      useTransition: function() {
        var e = Rs(Ft)[0],
          t = Be().memoizedState;
        return [typeof e == "boolean" ? e : Sn(e), t]
      },
      useSyncExternalStore: Lu,
      useId: gf,
      useHostTransitionStatus: Vc,
      useFormState: tf,
      useActionState: tf,
      useOptimistic: function(e, t) {
        var l = Be();
        return Ju(l, ke, e, t)
      },
      useMemoCache: Dc,
      useCacheRefresh: yf
    };
  Xc.useEffectEvent = cf;
  var Sf = {
    readContext: et,
    use: Ds,
    useCallback: df,
    useContext: et,
    useEffect: Bc,
    useImperativeHandle: ff,
    useInsertionEffect: rf,
    useLayoutEffect: of,
    useMemo: mf,
    useReducer: Uc,
    useRef: nf,
    useState: function() {
      return Uc(Ft)
    },
    useDebugValue: Yc,
    useDeferredValue: function(e, t) {
      var l = Be();
      return ke === null ? Gc(l, e, t) : hf(l, ke.memoizedState, e, t)
    },
    useTransition: function() {
      var e = Uc(Ft)[0],
        t = Be().memoizedState;
      return [typeof e == "boolean" ? e : Sn(e), t]
    },
    useSyncExternalStore: Lu,
    useId: gf,
    useHostTransitionStatus: Vc,
    useFormState: af,
    useActionState: af,
    useOptimistic: function(e, t) {
      var l = Be();
      return ke !== null ? Ju(l, ke, e, t) : (l.baseState = e, [e, l.queue.dispatch])
    },
    useMemoCache: Dc,
    useCacheRefresh: yf
  };
  Sf.useEffectEvent = cf;

  function Zc(e, t, l, a) {
    t = e.memoizedState, l = l(a, t), l = l == null ? t : A({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l)
  }
  var Kc = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var a = Nt(),
        n = gl(a);
      n.payload = t, l != null && (n.callback = l), t = yl(e, n, a), t !== null && (ft(t, e, a), vn(t, e, a))
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var a = Nt(),
        n = gl(a);
      n.tag = 1, n.payload = t, l != null && (n.callback = l), t = yl(e, n, a), t !== null && (ft(t, e, a), vn(t, e, a))
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Nt(),
        a = gl(l);
      a.tag = 2, t != null && (a.callback = t), t = yl(e, a, l), t !== null && (ft(t, e, l), vn(t, e, l))
    }
  };

  function kf(e, t, l, a, n, i, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, c) : t.prototype && t.prototype.isPureReactComponent ? !dn(l, a) || !dn(n, i) : !0
  }

  function zf(e, t, l, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && Kc.enqueueReplaceState(t, t.state, null)
  }

  function la(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t) a !== "ref" && (l[a] = t[a])
    }
    if (e = e.defaultProps) {
      l === t && (l = A({}, l));
      for (var n in e) l[n] === void 0 && (l[n] = e[n])
    }
    return l
  }

  function Tf(e) {
    xs(e)
  }

  function Af(e) {
    console.error(e)
  }

  function Ef(e) {
    xs(e)
  }

  function Bs(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, {
        componentStack: t.stack
      })
    } catch (a) {
      setTimeout(function() {
        throw a
      })
    }
  }

  function Mf(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      })
    } catch (n) {
      setTimeout(function() {
        throw n
      })
    }
  }

  function Jc(e, t, l) {
    return l = gl(l), l.tag = 3, l.payload = {
      element: null
    }, l.callback = function() {
      Bs(e, t)
    }, l
  }

  function _f(e) {
    return e = gl(e), e.tag = 3, e
  }

  function Cf(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      e.payload = function() {
        return n(i)
      }, e.callback = function() {
        Mf(t, l, a)
      }
    }
    var c = l.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
      Mf(t, l, a), typeof n != "function" && (kl === null ? kl = new Set([this]) : kl.add(this));
      var u = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: u !== null ? u : ""
      })
    })
  }

  function Mx(e, t, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = l.alternate, t !== null && Ta(t, l, n, !0), l = gt.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Mt === null ? Fs() : l.alternate === null && He === 0 && (He = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === zs ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = new Set([a]) : t.add(a), yr(e, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === zs ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: new Set([a])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = new Set([a]) : l.add(a)), yr(e, a, n)), !1
        }
        throw Error(o(435, l.tag))
      }
      return yr(e, a, n), Fs(), !1
    }
    if (pe) return t = gt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== mc && (e = Error(o(422), {
      cause: a
    }), pn(zt(e, l)))) : (a !== mc && (t = Error(o(423), {
      cause: a
    }), pn(zt(t, l))), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = zt(a, l), n = Jc(e.stateNode, a, n), Sc(e, n), He !== 4 && (He = 2)), !1;
    var i = Error(o(520), {
      cause: a
    });
    if (i = zt(i, l), Dn === null ? Dn = [i] : Dn.push(i), He !== 4 && (He = 2), t === null) return !0;
    a = zt(a, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = n & -n, l.lanes |= e, e = Jc(l.stateNode, a, e), Sc(l, e), !1;
        case 1:
          if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (kl === null || !kl.has(i)))) return l.flags |= 65536, n &= -n, l.lanes |= n, n = _f(n), Cf(n, e, l, a), Sc(l, n), !1
      }
      l = l.return
    } while (l !== null);
    return !1
  }
  var $c = Error(o(461)),
    Le = !1;

  function tt(e, t, l, a) {
    t.child = e === null ? Ru(t, null, l, a) : ea(t, e.child, l, a)
  }

  function Of(e, t, l, a, n) {
    l = l.render;
    var i = t.ref;
    if ("ref" in a) {
      var c = {};
      for (var u in a) u !== "ref" && (c[u] = a[u])
    } else c = a;
    return Wl(t), a = Mc(e, t, l, c, i, n), u = _c(), e !== null && !Le ? (Cc(e, t, n), It(e, t, n)) : (pe && u && fc(t), t.flags |= 1, tt(e, t, a, n), t.child)
  }

  function Df(e, t, l, a, n) {
    if (e === null) {
      var i = l.type;
      return typeof i == "function" && !rc(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, Rf(e, t, i, a, n)) : (e = vs(l.type, null, a, t, t.mode, n), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !ar(e, n)) {
      var c = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : dn, l(c, a) && e.ref === t.ref) return It(e, t, n)
    }
    return t.flags |= 1, e = Zt(i, a), e.ref = t.ref, e.return = t, t.child = e
  }

  function Rf(e, t, l, a, n) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (dn(i, a) && e.ref === t.ref)
        if (Le = !1, t.pendingProps = a = i, ar(e, n))(e.flags & 131072) !== 0 && (Le = !0);
        else return t.lanes = e.lanes, It(e, t, n)
    }
    return Wc(e, t, l, a, n)
  }

  function Uf(e, t, l, a) {
    var n = a.children,
      i = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | l : l, e !== null) {
          for (a = t.child = e.child, n = 0; a !== null;) n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~i
        } else a = 0, t.child = null;
        return Hf(e, t, i, l, a)
      }
      if ((l & 536870912) !== 0) t.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, e !== null && Ss(t, i !== null ? i.cachePool : null), i !== null ? qu(t, i) : zc(), Bu(t);
      else return a = t.lanes = 536870912, Hf(e, t, i !== null ? i.baseLanes | l : l, l, a)
    } else i !== null ? (Ss(t, i.cachePool), qu(t, i), jl(), t.memoizedState = null) : (e !== null && Ss(t, null), zc(), jl());
    return tt(e, t, n, l), t.child
  }

  function Tn(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling
  }

  function Hf(e, t, l, a, n) {
    var i = vc();
    return i = i === null ? null : {
      parent: Ye._currentValue,
      pool: i
    }, t.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, e !== null && Ss(t, null), zc(), Bu(t), e !== null && Ta(e, t, a, !0), t.childLanes = n, null
  }

  function Ys(e, t) {
    return t = Ls({
      mode: t.mode,
      children: t.children
    }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t
  }

  function qf(e, t, l) {
    return ea(t, e.child, null, l), e = Ys(t, t.pendingProps), e.flags |= 2, yt(t), t.memoizedState = null, e
  }

  function _x(e, t, l) {
    var a = t.pendingProps,
      n = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (pe) {
        if (a.mode === "hidden") return e = Ys(t, a), t.lanes = 536870912, Tn(null, e);
        if (Ac(t), (e = Ce) ? (e = Wd(e, Et), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
            dehydrated: e,
            treeContext: ml !== null ? {
              id: qt,
              overflow: Bt
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = vu(e), l.return = t, t.child = l, Pe = t, Ce = null)) : e = null, e === null) throw pl(t);
        return t.lanes = 536870912, null
      }
      return Ys(t, a)
    }
    var i = e.memoizedState;
    if (i !== null) {
      var c = i.dehydrated;
      if (Ac(t), n)
        if (t.flags & 256) t.flags &= -257, t = qf(e, t, l);
        else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
      else throw Error(o(558));
      else if (Le || Ta(e, t, l, !1), n = (l & e.childLanes) !== 0, Le || n) {
        if (a = Ee, a !== null && (c = To(a, l), c !== 0 && c !== i.retryLane)) throw i.retryLane = c, Zl(e, c), ft(a, e, c), $c;
        Fs(), t = qf(e, t, l)
      } else e = i.treeContext, Ce = _t(c.nextSibling), Pe = t, pe = !0, hl = null, Et = !1, e !== null && wu(t, e), t = Ys(t, a), t.flags |= 4096;
      return t
    }
    return e = Zt(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e
  }

  function Gs(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(o(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816)
    }
  }

  function Wc(e, t, l, a, n) {
    return Wl(t), l = Mc(e, t, l, a, void 0, n), a = _c(), e !== null && !Le ? (Cc(e, t, n), It(e, t, n)) : (pe && a && fc(t), t.flags |= 1, tt(e, t, l, n), t.child)
  }

  function Bf(e, t, l, a, n, i) {
    return Wl(t), t.updateQueue = null, l = Gu(t, a, l, n), Yu(e), a = _c(), e !== null && !Le ? (Cc(e, t, i), It(e, t, i)) : (pe && a && fc(t), t.flags |= 1, tt(e, t, l, i), t.child)
  }

  function Yf(e, t, l, a, n) {
    if (Wl(t), t.stateNode === null) {
      var i = wa,
        c = l.contextType;
      typeof c == "object" && c !== null && (i = et(c)), i = new l(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Kc, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, Nc(t), c = l.contextType, i.context = typeof c == "object" && c !== null ? et(c) : wa, i.state = t.memoizedState, c = l.getDerivedStateFromProps, typeof c == "function" && (Zc(t, l, c, a), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && Kc.enqueueReplaceState(i, i.state, null), Nn(t, a, i, n), jn(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !0
    } else if (e === null) {
      i = t.stateNode;
      var u = t.memoizedProps,
        m = la(l, u);
      i.props = m;
      var N = i.context,
        E = l.contextType;
      c = wa, typeof E == "object" && E !== null && (c = et(E));
      var C = l.getDerivedStateFromProps;
      E = typeof C == "function" || typeof i.getSnapshotBeforeUpdate == "function", u = t.pendingProps !== u, E || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u || N !== c) && zf(t, i, a, c), bl = !1;
      var S = t.memoizedState;
      i.state = S, Nn(t, a, i, n), jn(), N = t.memoizedState, u || S !== N || bl ? (typeof C == "function" && (Zc(t, l, C, a), N = t.memoizedState), (m = bl || kf(t, l, m, a, S, N, c)) ? (E || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = N), i.props = a, i.state = N, i.context = c, a = m) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !1)
    } else {
      i = t.stateNode, wc(e, t), c = t.memoizedProps, E = la(l, c), i.props = E, C = t.pendingProps, S = i.context, N = l.contextType, m = wa, typeof N == "object" && N !== null && (m = et(N)), u = l.getDerivedStateFromProps, (N = typeof u == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c !== C || S !== m) && zf(t, i, a, m), bl = !1, S = t.memoizedState, i.state = S, Nn(t, a, i, n), jn();
      var z = t.memoizedState;
      c !== C || S !== z || bl || e !== null && e.dependencies !== null && Ns(e.dependencies) ? (typeof u == "function" && (Zc(t, l, u, a), z = t.memoizedState), (E = bl || kf(t, l, E, a, S, z, m) || e !== null && e.dependencies !== null && Ns(e.dependencies)) ? (N || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, z, m), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(a, z, m)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && S === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && S === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = z), i.props = a, i.state = z, i.context = m, a = E) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && S === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && S === e.memoizedState || (t.flags |= 1024), a = !1)
    }
    return i = a, Gs(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = ea(t, e.child, null, n), t.child = ea(t, null, l, n)) : tt(e, t, l, n), t.memoizedState = i.state, e = t.child) : e = It(e, t, n), e
  }

  function Gf(e, t, l, a) {
    return Jl(), t.flags |= 256, tt(e, t, l, a), t.child
  }
  var Fc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };

  function Ic(e) {
    return {
      baseLanes: e,
      cachePool: Eu()
    }
  }

  function Pc(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= jt), e
  }

  function Lf(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      i = (t.flags & 128) !== 0,
      c;
    if ((c = i) || (c = e !== null && e.memoizedState === null ? !1 : (qe.current & 2) !== 0), c && (n = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (pe) {
        if (n ? vl(t) : jl(), (e = Ce) ? (e = Wd(e, Et), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
            dehydrated: e,
            treeContext: ml !== null ? {
              id: qt,
              overflow: Bt
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = vu(e), l.return = t, t.child = l, Pe = t, Ce = null)) : e = null, e === null) throw pl(t);
        return Rr(e) ? t.lanes = 32 : t.lanes = 536870912, null
      }
      var u = a.children;
      return a = a.fallback, n ? (jl(), n = t.mode, u = Ls({
        mode: "hidden",
        children: u
      }, n), a = Kl(a, n, l, null), u.return = t, a.return = t, u.sibling = a, t.child = u, a = t.child, a.memoizedState = Ic(l), a.childLanes = Pc(e, c, l), t.memoizedState = Fc, Tn(null, a)) : (vl(t), er(t, u))
    }
    var m = e.memoizedState;
    if (m !== null && (u = m.dehydrated, u !== null)) {
      if (i) t.flags & 256 ? (vl(t), t.flags &= -257, t = tr(e, t, l)) : t.memoizedState !== null ? (jl(), t.child = e.child, t.flags |= 128, t = null) : (jl(), u = a.fallback, n = t.mode, a = Ls({
        mode: "visible",
        children: a.children
      }, n), u = Kl(u, n, l, null), u.flags |= 2, a.return = t, u.return = t, a.sibling = u, t.child = a, ea(t, e.child, null, l), a = t.child, a.memoizedState = Ic(l), a.childLanes = Pc(e, c, l), t.memoizedState = Fc, t = Tn(null, a));
      else if (vl(t), Rr(u)) {
        if (c = u.nextSibling && u.nextSibling.dataset, c) var N = c.dgst;
        c = N, a = Error(o(419)), a.stack = "", a.digest = c, pn({
          value: a,
          source: null,
          stack: null
        }), t = tr(e, t, l)
      } else if (Le || Ta(e, t, l, !1), c = (l & e.childLanes) !== 0, Le || c) {
        if (c = Ee, c !== null && (a = To(c, l), a !== 0 && a !== m.retryLane)) throw m.retryLane = a, Zl(e, a), ft(c, e, a), $c;
        Dr(u) || Fs(), t = tr(e, t, l)
      } else Dr(u) ? (t.flags |= 192, t.child = e.child, t = null) : (e = m.treeContext, Ce = _t(u.nextSibling), Pe = t, pe = !0, hl = null, Et = !1, e !== null && wu(t, e), t = er(t, a.children), t.flags |= 4096);
      return t
    }
    return n ? (jl(), u = a.fallback, n = t.mode, m = e.child, N = m.sibling, a = Zt(m, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = m.subtreeFlags & 65011712, N !== null ? u = Zt(N, u) : (u = Kl(u, n, l, null), u.flags |= 2), u.return = t, a.return = t, a.sibling = u, t.child = a, Tn(null, a), a = t.child, u = e.child.memoizedState, u === null ? u = Ic(l) : (n = u.cachePool, n !== null ? (m = Ye._currentValue, n = n.parent !== m ? {
      parent: m,
      pool: m
    } : n) : n = Eu(), u = {
      baseLanes: u.baseLanes | l,
      cachePool: n
    }), a.memoizedState = u, a.childLanes = Pc(e, c, l), t.memoizedState = Fc, Tn(e.child, a)) : (vl(t), l = e.child, e = l.sibling, l = Zt(l, {
      mode: "visible",
      children: a.children
    }), l.return = t, l.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [e], t.flags |= 16) : c.push(e)), t.child = l, t.memoizedState = null, l)
  }

  function er(e, t) {
    return t = Ls({
      mode: "visible",
      children: t
    }, e.mode), t.return = e, e.child = t
  }

  function Ls(e, t) {
    return e = bt(22, e, null, t), e.lanes = 0, e
  }

  function tr(e, t, l) {
    return ea(t, e.child, null, l), e = er(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
  }

  function Vf(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), xc(e.return, t, l)
  }

  function lr(e, t, l, a, n, i) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n,
      treeForkCount: i
    } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = l, c.tailMode = n, c.treeForkCount = i)
  }

  function Qf(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      i = a.tail;
    a = a.children;
    var c = qe.current,
      u = (c & 2) !== 0;
    if (u ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, q(qe, c), tt(e, t, a, l), a = pe ? hn : 0, !u && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) {
      if (e.tag === 13) e.memoizedState !== null && Vf(e, l, t);
      else if (e.tag === 19) Vf(e, l, t);
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
        for (l = t.child, n = null; l !== null;) e = l.alternate, e !== null && Ms(e) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = t.child, t.child = null) : (n = l.sibling, l.sibling = null), lr(t, !1, n, l, i, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = t.child, t.child = null; n !== null;) {
          if (e = n.alternate, e !== null && Ms(e) === null) {
            t.child = n;
            break
          }
          e = n.sibling, n.sibling = l, l = n, n = e
        }
        lr(t, !0, l, null, i, a);
        break;
      case "together":
        lr(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null
    }
    return t.child
  }

  function It(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), Sl |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (Ta(e, t, l, !1), (l & t.childLanes) === 0) return null
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, l = Zt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null;) e = e.sibling, l = l.sibling = Zt(e, e.pendingProps), l.return = t;
      l.sibling = null
    }
    return t.child
  }

  function ar(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ns(e)))
  }

  function Cx(e, t, l) {
    switch (t.tag) {
      case 3:
        $e(t, t.stateNode.containerInfo), xl(t, Ye, e.memoizedState.cache), Jl();
        break;
      case 27:
      case 5:
        Ht(t);
        break;
      case 4:
        $e(t, t.stateNode.containerInfo);
        break;
      case 10:
        xl(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, Ac(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) return a.dehydrated !== null ? (vl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? Lf(e, t, l) : (vl(t), e = It(e, t, l), e !== null ? e.sibling : null);
        vl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (a = (l & t.childLanes) !== 0, a || (Ta(e, t, l, !1), a = (l & t.childLanes) !== 0), n) {
          if (a) return Qf(e, t, l);
          t.flags |= 128
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), q(qe, qe.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Uf(e, t, l, t.pendingProps);
      case 24:
        xl(t, Ye, e.memoizedState.cache)
    }
    return It(e, t, l)
  }

  function Xf(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Le = !0;
      else {
        if (!ar(e, l) && (t.flags & 128) === 0) return Le = !1, Cx(e, t, l);
        Le = (e.flags & 131072) !== 0
      }
    else Le = !1, pe && (t.flags & 1048576) !== 0 && Nu(t, hn, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = Il(t.elementType), t.type = e, typeof e == "function") rc(e) ? (a = la(e, a), t.tag = 1, t = Yf(null, t, e, a, l)) : (t.tag = 0, t = Wc(null, t, e, a, l));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === le) {
                t.tag = 11, t = Of(null, t, e, a, l);
                break e
              } else if (n === se) {
                t.tag = 14, t = Df(null, t, e, a, l);
                break e
              }
            }
            throw t = dt(e) || e, Error(o(306, t, ""))
          }
        }
        return t;
      case 0:
        return Wc(e, t, t.type, t.pendingProps, l);
      case 1:
        return a = t.type, n = la(a, t.pendingProps), Yf(e, t, a, n, l);
      case 3:
        e: {
          if ($e(t, t.stateNode.containerInfo), e === null) throw Error(o(387));a = t.pendingProps;
          var i = t.memoizedState;n = i.element,
          wc(e, t),
          Nn(t, a, null, l);
          var c = t.memoizedState;
          if (a = c.cache, xl(t, Ye, a), a !== i.cache && bc(t, [Ye], l, !0), jn(), a = c.element, i.isDehydrated)
            if (i = {
                element: a,
                isDehydrated: !1,
                cache: c.cache
              }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = Gf(e, t, a, l);
              break e
            } else if (a !== n) {
            n = zt(Error(o(424)), t), pn(n), t = Gf(e, t, a, l);
            break e
          } else
            for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ce = _t(e.firstChild), Pe = t, pe = !0, hl = null, Et = !0, l = Ru(t, null, a, l), t.child = l; l;) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Jl(), a === n) {
              t = It(e, t, l);
              break e
            }
            tt(e, t, a, l)
          }
          t = t.child
        }
        return t;
      case 26:
        return Gs(e, t), e === null ? (l = lm(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : pe || (l = t.type, e = t.pendingProps, a = ni(oe.current).createElement(l), a[Ie] = t, a[st] = e, lt(a, l, e), We(a), t.stateNode = a) : t.memoizedState = lm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
      case 27:
        return Ht(t), e === null && pe && (a = t.stateNode = Pd(t.type, t.pendingProps, oe.current), Pe = t, Et = !0, n = Ce, El(t.type) ? (Ur = n, Ce = _t(a.firstChild)) : Ce = n), tt(e, t, t.pendingProps.children, l), Gs(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && pe && ((n = a = Ce) && (a = r0(a, t.type, t.pendingProps, Et), a !== null ? (t.stateNode = a, Pe = t, Ce = _t(a.firstChild), Et = !1, n = !0) : n = !1), n || pl(t)), Ht(t), n = t.type, i = t.pendingProps, c = e !== null ? e.memoizedProps : null, a = i.children, _r(n, i) ? a = null : c !== null && _r(n, c) && (t.flags |= 32), t.memoizedState !== null && (n = Mc(e, t, wx, null, null, l), Ln._currentValue = n), Gs(e, t), tt(e, t, a, l), t.child;
      case 6:
        return e === null && pe && ((e = l = Ce) && (l = o0(l, t.pendingProps, Et), l !== null ? (t.stateNode = l, Pe = t, Ce = null, e = !0) : e = !1), e || pl(t)), null;
      case 13:
        return Lf(e, t, l);
      case 4:
        return $e(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = ea(t, null, a, l) : tt(e, t, a, l), t.child;
      case 11:
        return Of(e, t, t.type, t.pendingProps, l);
      case 7:
        return tt(e, t, t.pendingProps, l), t.child;
      case 8:
        return tt(e, t, t.pendingProps.children, l), t.child;
      case 12:
        return tt(e, t, t.pendingProps.children, l), t.child;
      case 10:
        return a = t.pendingProps, xl(t, t.type, a.value), tt(e, t, a.children, l), t.child;
      case 9:
        return n = t.type._context, a = t.pendingProps.children, Wl(t), n = et(n), a = a(n), t.flags |= 1, tt(e, t, a, l), t.child;
      case 14:
        return Df(e, t, t.type, t.pendingProps, l);
      case 15:
        return Rf(e, t, t.type, t.pendingProps, l);
      case 19:
        return Qf(e, t, l);
      case 31:
        return _x(e, t, l);
      case 22:
        return Uf(e, t, l, t.pendingProps);
      case 24:
        return Wl(t), a = et(Ye), e === null ? (n = vc(), n === null && (n = Ee, i = gc(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= l), n = i), t.memoizedState = {
          parent: a,
          cache: n
        }, Nc(t), xl(t, Ye, n)) : ((e.lanes & l) !== 0 && (wc(e, t), Nn(t, null, null, l), jn()), n = e.memoizedState, i = t.memoizedState, n.parent !== a ? (n = {
          parent: a,
          cache: a
        }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), xl(t, Ye, a)) : (a = i.cache, xl(t, Ye, a), a !== n.cache && bc(t, [Ye], l, !0))), tt(e, t, t.pendingProps.children, l), t.child;
      case 29:
        throw t.pendingProps
    }
    throw Error(o(156, t.tag))
  }

  function Pt(e) {
    e.flags |= 4
  }

  function nr(e, t, l, a, n) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (n & 335544128) === n)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (gd()) e.flags |= 8192;
      else throw Pl = zs, jc
    } else e.flags &= -16777217
  }

  function Zf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (e.flags |= 16777216, !cm(t))
      if (gd()) e.flags |= 8192;
      else throw Pl = zs, jc
  }

  function Vs(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? So() : 536870912, e.lanes |= t, Ba |= t)
  }

  function An(e, t) {
    if (!pe) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var l = null; t !== null;) t.alternate !== null && (l = t), t = t.sibling;
        l === null ? e.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = e.tail;
        for (var a = null; l !== null;) l.alternate !== null && (a = l), l = l.sibling;
        a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null
    }
  }

  function Oe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var n = e.child; n !== null;) l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = e, n = n.sibling;
    else
      for (n = e.child; n !== null;) l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = e, n = n.sibling;
    return e.subtreeFlags |= a, e.childLanes = l, t
  }

  function Ox(e, t, l) {
    var a = t.pendingProps;
    switch (dc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Oe(t), null;
      case 1:
        return Oe(t), null;
      case 3:
        return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), $t(Ye), Me(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (za(t) ? Pt(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, hc())), Oe(t), null;
      case 26:
        var n = t.type,
          i = t.memoizedState;
        return e === null ? (Pt(t), i !== null ? (Oe(t), Zf(t, i)) : (Oe(t), nr(t, n, null, a, l))) : i ? i !== e.memoizedState ? (Pt(t), Oe(t), Zf(t, i)) : (Oe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && Pt(t), Oe(t), nr(t, n, e, a, l)), null;
      case 27:
        if (rl(t), l = oe.current, n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && Pt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(o(166));
            return Oe(t), null
          }
          e = L.current, za(t) ? Su(t) : (e = Pd(n, a, l), t.stateNode = e, Pt(t))
        }
        return Oe(t), null;
      case 5:
        if (rl(t), n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && Pt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(o(166));
            return Oe(t), null
          }
          if (i = L.current, za(t)) Su(t);
          else {
            var c = ni(oe.current);
            switch (i) {
              case 1:
                i = c.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                i = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    i = c.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    i = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                    break;
                  case "script":
                    i = c.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(i.firstChild);
                    break;
                  case "select":
                    i = typeof a.is == "string" ? c.createElement("select", {
                      is: a.is
                    }) : c.createElement("select"), a.multiple ? i.multiple = !0 : a.size && (i.size = a.size);
                    break;
                  default:
                    i = typeof a.is == "string" ? c.createElement(n, {
                      is: a.is
                    }) : c.createElement(n)
                }
            }
            i[Ie] = t, i[st] = a;
            e: for (c = t.child; c !== null;) {
              if (c.tag === 5 || c.tag === 6) i.appendChild(c.stateNode);
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
            t.stateNode = i;
            e: switch (lt(i, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1
            }
            a && Pt(t)
          }
        }
        return Oe(t), nr(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && Pt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(o(166));
          if (e = oe.current, za(t)) {
            if (e = t.stateNode, l = t.memoizedProps, a = null, n = Pe, n !== null) switch (n.tag) {
              case 27:
              case 5:
                a = n.memoizedProps
            }
            e[Ie] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || Ld(e.nodeValue, l)), e || pl(t, !0)
          } else e = ni(e).createTextNode(a), e[Ie] = t, t.stateNode = e
        }
        return Oe(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = za(t), l !== null) {
            if (e === null) {
              if (!a) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[Ie] = t
            } else Jl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Oe(t), e = !1
          } else l = hc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e) return t.flags & 256 ? (yt(t), t) : (yt(t), null);
          if ((t.flags & 128) !== 0) throw Error(o(558))
        }
        return Oe(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = za(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(o(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(o(317));
              n[Ie] = t
            } else Jl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Oe(t), n = !1
          } else n = hc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n) return t.flags & 256 ? (yt(t), t) : (yt(t), null)
        }
        return yt(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== n && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Vs(t, t.updateQueue), Oe(t), null);
      case 4:
        return Me(), e === null && zr(t.stateNode.containerInfo), Oe(t), null;
      case 10:
        return $t(t.type), Oe(t), null;
      case 19:
        if (_(qe), a = t.memoizedState, a === null) return Oe(t), null;
        if (n = (t.flags & 128) !== 0, i = a.rendering, i === null)
          if (n) An(a, !1);
          else {
            if (He !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null;) {
                if (i = Ms(e), i !== null) {
                  for (t.flags |= 128, An(a, !1), e = i.updateQueue, t.updateQueue = e, Vs(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null;) yu(l, e), l = l.sibling;
                  return q(qe, qe.current & 1 | 2), pe && Kt(t, a.treeForkCount), t.child
                }
                e = e.sibling
              }
            a.tail !== null && mt() > Js && (t.flags |= 128, n = !0, An(a, !1), t.lanes = 4194304)
          }
        else {
          if (!n)
            if (e = Ms(i), e !== null) {
              if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, Vs(t, e), An(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !pe) return Oe(t), null
            } else 2 * mt() - a.renderingStartTime > Js && l !== 536870912 && (t.flags |= 128, n = !0, An(a, !1), t.lanes = 4194304);
          a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i)
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = mt(), e.sibling = null, l = qe.current, q(qe, n ? l & 1 | 2 : l & 1), pe && Kt(t, a.treeForkCount), e) : (Oe(t), null);
      case 22:
      case 23:
        return yt(t), Tc(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Oe(t), l = t.updateQueue, l !== null && Vs(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && _(Fl), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), $t(Ye), Oe(t), null;
      case 25:
        return null;
      case 30:
        return null
    }
    throw Error(o(156, t.tag))
  }

  function Dx(e, t) {
    switch (dc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return $t(Ye), Me(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return rl(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (yt(t), t.alternate === null) throw Error(o(340));
          Jl()
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (yt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          Jl()
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return _(qe), null;
      case 4:
        return Me(), null;
      case 10:
        return $t(t.type), null;
      case 22:
      case 23:
        return yt(t), Tc(), e !== null && _(Fl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return $t(Ye), null;
      case 25:
        return null;
      default:
        return null
    }
  }

  function Kf(e, t) {
    switch (dc(t), t.tag) {
      case 3:
        $t(Ye), Me();
        break;
      case 26:
      case 27:
      case 5:
        rl(t);
        break;
      case 4:
        Me();
        break;
      case 31:
        t.memoizedState !== null && yt(t);
        break;
      case 13:
        yt(t);
        break;
      case 19:
        _(qe);
        break;
      case 10:
        $t(t.type);
        break;
      case 22:
      case 23:
        yt(t), Tc(), e !== null && _(Fl);
        break;
      case 24:
        $t(Ye)
    }
  }

  function En(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var i = l.create,
              c = l.inst;
            a = i(), c.destroy = a
          }
          l = l.next
        } while (l !== n)
      }
    } catch (u) {
      Se(t, t.return, u)
    }
  }

  function Nl(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            var c = a.inst,
              u = c.destroy;
            if (u !== void 0) {
              c.destroy = void 0, n = t;
              var m = l,
                N = u;
              try {
                N()
              } catch (E) {
                Se(n, m, E)
              }
            }
          }
          a = a.next
        } while (a !== i)
      }
    } catch (E) {
      Se(t, t.return, E)
    }
  }

  function Jf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Hu(t, l)
      } catch (a) {
        Se(e, e.return, a)
      }
    }
  }

  function $f(e, t, l) {
    l.props = la(e.type, e.memoizedProps), l.state = e.memoizedState;
    try {
      l.componentWillUnmount()
    } catch (a) {
      Se(e, t, a)
    }
  }

  function Mn(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode
        }
        typeof l == "function" ? e.refCleanup = l(a) : l.current = a
      }
    } catch (n) {
      Se(e, t, n)
    }
  }

  function Yt(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function") try {
        a()
      } catch (n) {
        Se(e, t, n)
      } finally {
        e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null)
      } else if (typeof l == "function") try {
        l(null)
      } catch (n) {
        Se(e, t, n)
      } else l.current = null
  }

  function Wf(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet)
      }
    }
    catch (n) {
      Se(e, e.return, n)
    }
  }

  function sr(e, t, l) {
    try {
      var a = e.stateNode;
      l0(a, e.type, l, t), a[st] = t
    } catch (n) {
      Se(e, e.return, n)
    }
  }

  function Ff(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && El(e.type) || e.tag === 4
  }

  function ir(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || Ff(e.return)) return null;
        e = e.return
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
        if (e.tag === 27 && El(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child
      }
      if (!(e.flags & 2)) return e.stateNode
    }
  }

  function cr(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Qt));
    else if (a !== 4 && (a === 27 && El(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (cr(e, t, l), e = e.sibling; e !== null;) cr(e, t, l), e = e.sibling
  }

  function Qs(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (a !== 4 && (a === 27 && El(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Qs(e, t, l), e = e.sibling; e !== null;) Qs(e, t, l), e = e.sibling
  }

  function If(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length;) t.removeAttributeNode(n[0]);
      lt(t, a, l), t[Ie] = e, t[st] = l
    } catch (i) {
      Se(e, e.return, i)
    }
  }
  var el = !1,
    Ve = !1,
    rr = !1,
    Pf = typeof WeakSet == "function" ? WeakSet : Set,
    Fe = null;

  function Rx(e, t) {
    if (e = e.containerInfo, Er = fi, e = uu(e), tc(e)) {
      if ("selectionStart" in e) var l = {
        start: e.selectionStart,
        end: e.selectionEnd
      };
      else e: {
        l = (l = e.ownerDocument) && l.defaultView || window;
        var a = l.getSelection && l.getSelection();
        if (a && a.rangeCount !== 0) {
          l = a.anchorNode;
          var n = a.anchorOffset,
            i = a.focusNode;
          a = a.focusOffset;
          try {
            l.nodeType, i.nodeType
          } catch {
            l = null;
            break e
          }
          var c = 0,
            u = -1,
            m = -1,
            N = 0,
            E = 0,
            C = e,
            S = null;
          t: for (;;) {
            for (var z; C !== l || n !== 0 && C.nodeType !== 3 || (u = c + n), C !== i || a !== 0 && C.nodeType !== 3 || (m = c + a), C.nodeType === 3 && (c += C.nodeValue.length), (z = C.firstChild) !== null;) S = C, C = z;
            for (;;) {
              if (C === e) break t;
              if (S === l && ++N === n && (u = c), S === i && ++E === a && (m = c), (z = C.nextSibling) !== null) break;
              C = S, S = C.parentNode
            }
            C = z
          }
          l = u === -1 || m === -1 ? null : {
            start: u,
            end: m
          }
        } else l = null
      }
      l = l || {
        start: 0,
        end: 0
      }
    } else l = null;
    for (Mr = {
        focusedElem: e,
        selectionRange: l
      }, fi = !1, Fe = t; Fe !== null;)
      if (t = Fe, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Fe = e;
      else
        for (; Fe !== null;) {
          switch (t = Fe, i = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (l = 0; l < e.length; l++) n = e[l], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                e = void 0, l = t, n = i.memoizedProps, i = i.memoizedState, a = l.stateNode;
                try {
                  var X = la(l.type, n);
                  e = a.getSnapshotBeforeUpdate(X, i), a.__reactInternalSnapshotBeforeUpdate = e
                } catch (ee) {
                  Se(l, l.return, ee)
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9) Or(e);
                else if (l === 1) switch (e.nodeName) {
                  case "HEAD":
                  case "HTML":
                  case "BODY":
                    Or(e);
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
              if ((e & 1024) !== 0) throw Error(o(163))
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, Fe = e;
            break
          }
          Fe = t.return
        }
  }

  function ed(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ll(e, l), a & 4 && En(5, l);
        break;
      case 1:
        if (ll(e, l), a & 4)
          if (e = l.stateNode, t === null) try {
            e.componentDidMount()
          } catch (c) {
            Se(l, l.return, c)
          } else {
            var n = la(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate)
            } catch (c) {
              Se(l, l.return, c)
            }
          }
        a & 64 && Jf(l), a & 512 && Mn(l, l.return);
        break;
      case 3:
        if (ll(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
          if (t = null, l.child !== null) switch (l.child.tag) {
            case 27:
            case 5:
              t = l.child.stateNode;
              break;
            case 1:
              t = l.child.stateNode
          }
          try {
            Hu(e, t)
          } catch (c) {
            Se(l, l.return, c)
          }
        }
        break;
      case 27:
        t === null && a & 4 && If(l);
      case 26:
      case 5:
        ll(e, l), t === null && a & 4 && Wf(l), a & 512 && Mn(l, l.return);
        break;
      case 12:
        ll(e, l);
        break;
      case 31:
        ll(e, l), a & 4 && ad(e, l);
        break;
      case 13:
        ll(e, l), a & 4 && nd(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = Qx.bind(null, l), u0(e, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || el, !a) {
          t = t !== null && t.memoizedState !== null || Ve, n = el;
          var i = Ve;
          el = a, (Ve = t) && !i ? al(e, l, (l.subtreeFlags & 8772) !== 0) : ll(e, l), el = n, Ve = i
        }
        break;
      case 30:
        break;
      default:
        ll(e, l)
    }
  }

  function td(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, td(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && qi(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
  }
  var Re = null,
    ct = !1;

  function tl(e, t, l) {
    for (l = l.child; l !== null;) ld(e, t, l), l = l.sibling
  }

  function ld(e, t, l) {
    if (ht && typeof ht.onCommitFiberUnmount == "function") try {
      ht.onCommitFiberUnmount(Pa, l)
    } catch {}
    switch (l.tag) {
      case 26:
        Ve || Yt(l, t), tl(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Ve || Yt(l, t);
        var a = Re,
          n = ct;
        El(l.type) && (Re = l.stateNode, ct = !1), tl(e, t, l), Bn(l.stateNode), Re = a, ct = n;
        break;
      case 5:
        Ve || Yt(l, t);
      case 6:
        if (a = Re, n = ct, Re = null, tl(e, t, l), Re = a, ct = n, Re !== null)
          if (ct) try {
            (Re.nodeType === 9 ? Re.body : Re.nodeName === "HTML" ? Re.ownerDocument.body : Re).removeChild(l.stateNode)
          } catch (i) {
            Se(l, t, i)
          } else try {
            Re.removeChild(l.stateNode)
          } catch (i) {
            Se(l, t, i)
          }
        break;
      case 18:
        Re !== null && (ct ? (e = Re, Jd(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), Ka(e)) : Jd(Re, l.stateNode));
        break;
      case 4:
        a = Re, n = ct, Re = l.stateNode.containerInfo, ct = !0, tl(e, t, l), Re = a, ct = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Nl(2, l, t), Ve || Nl(4, l, t), tl(e, t, l);
        break;
      case 1:
        Ve || (Yt(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && $f(l, t, a)), tl(e, t, l);
        break;
      case 21:
        tl(e, t, l);
        break;
      case 22:
        Ve = (a = Ve) || l.memoizedState !== null, tl(e, t, l), Ve = a;
        break;
      default:
        tl(e, t, l)
    }
  }

  function ad(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Ka(e)
      } catch (l) {
        Se(t, t.return, l)
      }
    }
  }

  function nd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
      Ka(e)
    } catch (l) {
      Se(t, t.return, l)
    }
  }

  function Ux(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Pf), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Pf), t;
      default:
        throw Error(o(435, e.tag))
    }
  }

  function Xs(e, t) {
    var l = Ux(e);
    t.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = Xx.bind(null, e, a);
        a.then(n, n)
      }
    })
  }

  function rt(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          i = e,
          c = t,
          u = c;
        e: for (; u !== null;) {
          switch (u.tag) {
            case 27:
              if (El(u.type)) {
                Re = u.stateNode, ct = !1;
                break e
              }
              break;
            case 5:
              Re = u.stateNode, ct = !1;
              break e;
            case 3:
            case 4:
              Re = u.stateNode.containerInfo, ct = !0;
              break e
          }
          u = u.return
        }
        if (Re === null) throw Error(o(160));
        ld(i, c, n), Re = null, ct = !1, i = n.alternate, i !== null && (i.return = null), n.return = null
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null;) sd(t, e), t = t.sibling
  }
  var Dt = null;

  function sd(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        rt(t, e), ot(e), a & 4 && (Nl(3, e, e.return), En(3, e), Nl(5, e, e.return));
        break;
      case 1:
        rt(t, e), ot(e), a & 512 && (Ve || l === null || Yt(l, l.return)), a & 64 && el && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = Dt;
        if (rt(t, e), ot(e), a & 512 && (Ve || l === null || Yt(l, l.return)), a & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (a = e.memoizedState, l === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type,
                  l = e.memoizedProps,
                  n = n.ownerDocument || n;t: switch (a) {
                    case "title":
                      i = n.getElementsByTagName("title")[0], (!i || i[ln] || i[Ie] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(a), n.head.insertBefore(i, n.querySelector("head > title"))), lt(i, a, l), i[Ie] = e, We(i), a = i;
                      break e;
                    case "link":
                      var c = sm("link", "href", n).get(a + (l.href || ""));
                      if (c) {
                        for (var u = 0; u < c.length; u++)
                          if (i = c[u], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            c.splice(u, 1);
                            break t
                          }
                      }
                      i = n.createElement(a), lt(i, a, l), n.head.appendChild(i);
                      break;
                    case "meta":
                      if (c = sm("meta", "content", n).get(a + (l.content || ""))) {
                        for (u = 0; u < c.length; u++)
                          if (i = c[u], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            c.splice(u, 1);
                            break t
                          }
                      }
                      i = n.createElement(a), lt(i, a, l), n.head.appendChild(i);
                      break;
                    default:
                      throw Error(o(468, a))
                  }
                  i[Ie] = e,
                  We(i),
                  a = i
                }
                e.stateNode = a
              }
          else im(n, e.type, e.stateNode);
          else e.stateNode = nm(n, a, e.memoizedProps);
          else i !== a ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, a === null ? im(n, e.type, e.stateNode) : nm(n, a, e.memoizedProps)) : a === null && e.stateNode !== null && sr(e, e.memoizedProps, l.memoizedProps)
        }
        break;
      case 27:
        rt(t, e), ot(e), a & 512 && (Ve || l === null || Yt(l, l.return)), l !== null && a & 4 && sr(e, e.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (rt(t, e), ot(e), a & 512 && (Ve || l === null || Yt(l, l.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            xa(n, "")
          } catch (X) {
            Se(e, e.return, X)
          }
        }
        a & 4 && e.stateNode != null && (n = e.memoizedProps, sr(e, n, l !== null ? l.memoizedProps : n)), a & 1024 && (rr = !0);
        break;
      case 6:
        if (rt(t, e), ot(e), a & 4) {
          if (e.stateNode === null) throw Error(o(162));
          a = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = a
          } catch (X) {
            Se(e, e.return, X)
          }
        }
        break;
      case 3:
        if (ci = null, n = Dt, Dt = si(t.containerInfo), rt(t, e), Dt = n, ot(e), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Ka(t.containerInfo)
        } catch (X) {
          Se(e, e.return, X)
        }
        rr && (rr = !1, id(e));
        break;
      case 4:
        a = Dt, Dt = si(e.stateNode.containerInfo), rt(t, e), ot(e), Dt = a;
        break;
      case 12:
        rt(t, e), ot(e);
        break;
      case 31:
        rt(t, e), ot(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Xs(e, a)));
        break;
      case 13:
        rt(t, e), ot(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Ks = mt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Xs(e, a)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var m = l !== null && l.memoizedState !== null,
          N = el,
          E = Ve;
        if (el = N || n, Ve = E || m, rt(t, e), Ve = E, el = N, ot(e), a & 8192) e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (l === null || m || el || Ve || aa(e)), l = null, t = e;;) {
          if (t.tag === 5 || t.tag === 26) {
            if (l === null) {
              m = l = t;
              try {
                if (i = m.stateNode, n) c = i.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                else {
                  u = m.stateNode;
                  var C = m.memoizedProps.style,
                    S = C != null && C.hasOwnProperty("display") ? C.display : null;
                  u.style.display = S == null || typeof S == "boolean" ? "" : ("" + S).trim()
                }
              } catch (X) {
                Se(m, m.return, X)
              }
            }
          } else if (t.tag === 6) {
            if (l === null) {
              m = t;
              try {
                m.stateNode.nodeValue = n ? "" : m.memoizedProps
              } catch (X) {
                Se(m, m.return, X)
              }
            }
          } else if (t.tag === 18) {
            if (l === null) {
              m = t;
              try {
                var z = m.stateNode;
                n ? $d(z, !0) : $d(m.stateNode, !1)
              } catch (X) {
                Se(m, m.return, X)
              }
            }
          } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue
          }
          if (t === e) break e;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) break e;
            l === t && (l = null), t = t.return
          }
          l === t && (l = null), t.sibling.return = t.return, t = t.sibling
        }
        a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Xs(e, l))));
        break;
      case 19:
        rt(t, e), ot(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Xs(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        rt(t, e), ot(e)
    }
  }

  function ot(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null;) {
          if (Ff(a)) {
            l = a;
            break
          }
          a = a.return
        }
        if (l == null) throw Error(o(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              i = ir(e);
            Qs(e, i, n);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (xa(c, ""), l.flags &= -33);
            var u = ir(e);
            Qs(e, u, c);
            break;
          case 3:
          case 4:
            var m = l.stateNode.containerInfo,
              N = ir(e);
            cr(e, N, m);
            break;
          default:
            throw Error(o(161))
        }
      } catch (E) {
        Se(e, e.return, E)
      }
      e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
  }

  function id(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null;) {
        var t = e;
        id(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling
      }
  }

  function ll(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null;) ed(e, t.alternate, t), t = t.sibling
  }

  function aa(e) {
    for (e = e.child; e !== null;) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Nl(4, t, t.return), aa(t);
          break;
        case 1:
          Yt(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && $f(t, t.return, l), aa(t);
          break;
        case 27:
          Bn(t.stateNode);
        case 26:
        case 5:
          Yt(t, t.return), aa(t);
          break;
        case 22:
          t.memoizedState === null && aa(t);
          break;
        case 30:
          aa(t);
          break;
        default:
          aa(t)
      }
      e = e.sibling
    }
  }

  function al(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
      var a = t.alternate,
        n = e,
        i = t,
        c = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          al(n, i, l), En(4, i);
          break;
        case 1:
          if (al(n, i, l), a = i, n = a.stateNode, typeof n.componentDidMount == "function") try {
            n.componentDidMount()
          } catch (N) {
            Se(a, a.return, N)
          }
          if (a = i, n = a.updateQueue, n !== null) {
            var u = a.stateNode;
            try {
              var m = n.shared.hiddenCallbacks;
              if (m !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++) Uu(m[n], u)
            } catch (N) {
              Se(a, a.return, N)
            }
          }
          l && c & 64 && Jf(i), Mn(i, i.return);
          break;
        case 27:
          If(i);
        case 26:
        case 5:
          al(n, i, l), l && a === null && c & 4 && Wf(i), Mn(i, i.return);
          break;
        case 12:
          al(n, i, l);
          break;
        case 31:
          al(n, i, l), l && c & 4 && ad(n, i);
          break;
        case 13:
          al(n, i, l), l && c & 4 && nd(n, i);
          break;
        case 22:
          i.memoizedState === null && al(n, i, l), Mn(i, i.return);
          break;
        case 30:
          break;
        default:
          al(n, i, l)
      }
      t = t.sibling
    }
  }

  function or(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && xn(l))
  }

  function ur(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && xn(e))
  }

  function Rt(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) cd(e, t, l, a), t = t.sibling
  }

  function cd(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Rt(e, t, l, a), n & 2048 && En(9, t);
        break;
      case 1:
        Rt(e, t, l, a);
        break;
      case 3:
        Rt(e, t, l, a), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && xn(e)));
        break;
      case 12:
        if (n & 2048) {
          Rt(e, t, l, a), e = t.stateNode;
          try {
            var i = t.memoizedProps,
              c = i.id,
              u = i.onPostCommit;
            typeof u == "function" && u(c, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
          } catch (m) {
            Se(t, t.return, m)
          }
        } else Rt(e, t, l, a);
        break;
      case 31:
        Rt(e, t, l, a);
        break;
      case 13:
        Rt(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        i = t.stateNode, c = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? Rt(e, t, l, a) : _n(e, t) : i._visibility & 2 ? Rt(e, t, l, a) : (i._visibility |= 2, Ua(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)), n & 2048 && or(c, t);
        break;
      case 24:
        Rt(e, t, l, a), n & 2048 && ur(t.alternate, t);
        break;
      default:
        Rt(e, t, l, a)
    }
  }

  function Ua(e, t, l, a, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null;) {
      var i = e,
        c = t,
        u = l,
        m = a,
        N = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Ua(i, c, u, m, n), En(8, c);
          break;
        case 23:
          break;
        case 22:
          var E = c.stateNode;
          c.memoizedState !== null ? E._visibility & 2 ? Ua(i, c, u, m, n) : _n(i, c) : (E._visibility |= 2, Ua(i, c, u, m, n)), n && N & 2048 && or(c.alternate, c);
          break;
        case 24:
          Ua(i, c, u, m, n), n && N & 2048 && ur(c.alternate, c);
          break;
        default:
          Ua(i, c, u, m, n)
      }
      t = t.sibling
    }
  }

  function _n(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            _n(l, a), n & 2048 && or(a.alternate, a);
            break;
          case 24:
            _n(l, a), n & 2048 && ur(a.alternate, a);
            break;
          default:
            _n(l, a)
        }
        t = t.sibling
      }
  }
  var Cn = 8192;

  function Ha(e, t, l) {
    if (e.subtreeFlags & Cn)
      for (e = e.child; e !== null;) rd(e, t, l), e = e.sibling
  }

  function rd(e, t, l) {
    switch (e.tag) {
      case 26:
        Ha(e, t, l), e.flags & Cn && e.memoizedState !== null && N0(l, Dt, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Ha(e, t, l);
        break;
      case 3:
      case 4:
        var a = Dt;
        Dt = si(e.stateNode.containerInfo), Ha(e, t, l), Dt = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = Cn, Cn = 16777216, Ha(e, t, l), Cn = a) : Ha(e, t, l));
        break;
      default:
        Ha(e, t, l)
    }
  }

  function od(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do t = e.sibling, e.sibling = null, e = t; while (e !== null)
    }
  }

  function On(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          Fe = a, fd(a, e)
        }
      od(e)
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) ud(e), e = e.sibling
  }

  function ud(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        On(e), e.flags & 2048 && Nl(9, e, e.return);
        break;
      case 3:
        On(e);
        break;
      case 12:
        On(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Zs(e)) : On(e);
        break;
      default:
        On(e)
    }
  }

  function Zs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          Fe = a, fd(a, e)
        }
      od(e)
    }
    for (e = e.child; e !== null;) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Nl(8, t, t.return), Zs(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Zs(t));
          break;
        default:
          Zs(t)
      }
      e = e.sibling
    }
  }

  function fd(e, t) {
    for (; Fe !== null;) {
      var l = Fe;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Nl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++
          }
          break;
        case 24:
          xn(l.memoizedState.cache)
      }
      if (a = l.child, a !== null) a.return = l, Fe = a;
      else e: for (l = e; Fe !== null;) {
        a = Fe;
        var n = a.sibling,
          i = a.return;
        if (td(a), a === l) {
          Fe = null;
          break e
        }
        if (n !== null) {
          n.return = i, Fe = n;
          break e
        }
        Fe = i
      }
    }
  }
  var Hx = {
      getCacheForType: function(e) {
        var t = et(Ye),
          l = t.data.get(e);
        return l === void 0 && (l = e(), t.data.set(e, l)), l
      },
      cacheSignal: function() {
        return et(Ye).controller.signal
      }
    },
    qx = typeof WeakMap == "function" ? WeakMap : Map,
    je = 0,
    Ee = null,
    fe = null,
    me = 0,
    we = 0,
    vt = null,
    wl = !1,
    qa = !1,
    fr = !1,
    nl = 0,
    He = 0,
    Sl = 0,
    na = 0,
    dr = 0,
    jt = 0,
    Ba = 0,
    Dn = null,
    ut = null,
    mr = !1,
    Ks = 0,
    dd = 0,
    Js = 1 / 0,
    $s = null,
    kl = null,
    Xe = 0,
    zl = null,
    Ya = null,
    sl = 0,
    hr = 0,
    pr = null,
    md = null,
    Rn = 0,
    xr = null;

  function Nt() {
    return (je & 2) !== 0 && me !== 0 ? me & -me : T.T !== null ? Nr() : Ao()
  }

  function hd() {
    if (jt === 0)
      if ((me & 536870912) === 0 || pe) {
        var e = as;
        as <<= 1, (as & 3932160) === 0 && (as = 262144), jt = e
      } else jt = 536870912;
    return e = gt.current, e !== null && (e.flags |= 32), jt
  }

  function ft(e, t, l) {
    (e === Ee && (we === 2 || we === 9) || e.cancelPendingCommit !== null) && (Ga(e, 0), Tl(e, me, jt, !1)), tn(e, l), ((je & 2) === 0 || e !== Ee) && (e === Ee && ((je & 2) === 0 && (na |= l), He === 4 && Tl(e, me, jt, !1)), Gt(e))
  }

  function pd(e, t, l) {
    if ((je & 6) !== 0) throw Error(o(327));
    var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || en(e, t),
      n = a ? Gx(e, t) : gr(e, t, !0),
      i = a;
    do {
      if (n === 0) {
        qa && !a && Tl(e, t, 0, !1);
        break
      } else {
        if (l = e.current.alternate, i && !Bx(l)) {
          n = gr(e, t, !1), i = !1;
          continue
        }
        if (n === 2) {
          if (i = t, e.errorRecoveryDisabledLanes & i) var c = 0;
          else c = e.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            t = c;
            e: {
              var u = e;n = Dn;
              var m = u.current.memoizedState.isDehydrated;
              if (m && (Ga(u, c).flags |= 256), c = gr(u, c, !1), c !== 2) {
                if (fr && !m) {
                  u.errorRecoveryDisabledLanes |= i, na |= i, n = 4;
                  break e
                }
                i = ut, ut = n, i !== null && (ut === null ? ut = i : ut.push.apply(ut, i))
              }
              n = c
            }
            if (i = !1, n !== 2) continue
          }
        }
        if (n === 1) {
          Ga(e, 0), Tl(e, t, 0, !0);
          break
        }
        e: {
          switch (a = e, i = n, i) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Tl(a, t, jt, !wl);
              break e;
            case 2:
              ut = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329))
          }
          if ((t & 62914560) === t && (n = Ks + 300 - mt(), 10 < n)) {
            if (Tl(a, t, jt, !wl), ss(a, 0, !0) !== 0) break e;
            sl = t, a.timeoutHandle = Zd(xd.bind(null, a, l, ut, $s, mr, t, jt, na, Ba, wl, i, "Throttled", -0, 0), n);
            break e
          }
          xd(a, l, ut, $s, mr, t, jt, na, Ba, wl, i, null, -0, 0)
        }
      }
      break
    } while (!0);
    Gt(e)
  }

  function xd(e, t, l, a, n, i, c, u, m, N, E, C, S, z) {
    if (e.timeoutHandle = -1, C = t.subtreeFlags, C & 8192 || (C & 16785408) === 16785408) {
      C = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Qt
      }, rd(t, i, C);
      var X = (i & 62914560) === i ? Ks - mt() : (i & 4194048) === i ? dd - mt() : 0;
      if (X = w0(C, X), X !== null) {
        sl = i, e.cancelPendingCommit = X(Sd.bind(null, e, t, i, l, a, n, c, u, m, E, C, null, S, z)), Tl(e, i, c, !N);
        return
      }
    }
    Sd(e, t, i, l, a, n, c, u, m)
  }

  function Bx(e) {
    for (var t = e;;) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            i = n.getSnapshot;
          n = n.value;
          try {
            if (!xt(i(), n)) return !1
          } catch {
            return !1
          }
        }
      if (l = t.child, t.subtreeFlags & 16384 && l !== null) l.return = t, t = l;
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

  function Tl(e, t, l, a) {
    t &= ~dr, t &= ~na, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var n = t; 0 < n;) {
      var i = 31 - pt(n),
        c = 1 << i;
      a[i] = -1, n &= ~c
    }
    l !== 0 && ko(e, l, t)
  }

  function Ws() {
    return (je & 6) === 0 ? (Un(0), !1) : !0
  }

  function br() {
    if (fe !== null) {
      if (we === 0) var e = fe.return;
      else e = fe, Jt = $l = null, Oc(e), _a = null, gn = 0, e = fe;
      for (; e !== null;) Kf(e.alternate, e), e = e.return;
      fe = null
    }
  }

  function Ga(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, s0(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), sl = 0, br(), Ee = e, fe = l = Zt(e.current, null), me = t, we = 0, vt = null, wl = !1, qa = en(e, t), fr = !1, Ba = jt = dr = na = Sl = He = 0, ut = Dn = null, mr = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a;) {
        var n = 31 - pt(a),
          i = 1 << n;
        t |= e[n], a &= ~i
      }
    return nl = t, bs(), l
  }

  function bd(e, t) {
    ce = null, T.H = zn, t === Ma || t === ks ? (t = Cu(), we = 3) : t === jc ? (t = Cu(), we = 4) : we = t === $c ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, vt = t, fe === null && (He = 1, Bs(e, zt(t, e.current)))
  }

  function gd() {
    var e = gt.current;
    return e === null ? !0 : (me & 4194048) === me ? Mt === null : (me & 62914560) === me || (me & 536870912) !== 0 ? e === Mt : !1
  }

  function yd() {
    var e = T.H;
    return T.H = zn, e === null ? zn : e
  }

  function vd() {
    var e = T.A;
    return T.A = Hx, e
  }

  function Fs() {
    He = 4, wl || (me & 4194048) !== me && gt.current !== null || (qa = !0), (Sl & 134217727) === 0 && (na & 134217727) === 0 || Ee === null || Tl(Ee, me, jt, !1)
  }

  function gr(e, t, l) {
    var a = je;
    je |= 2;
    var n = yd(),
      i = vd();
    (Ee !== e || me !== t) && ($s = null, Ga(e, t)), t = !1;
    var c = He;
    e: do try {
        if (we !== 0 && fe !== null) {
          var u = fe,
            m = vt;
          switch (we) {
            case 8:
              br(), c = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              gt.current === null && (t = !0);
              var N = we;
              if (we = 0, vt = null, La(e, u, m, N), l && qa) {
                c = 0;
                break e
              }
              break;
            default:
              N = we, we = 0, vt = null, La(e, u, m, N)
          }
        }
        Yx(), c = He;
        break
      } catch (E) {
        bd(e, E)
      }
      while (!0);
      return t && e.shellSuspendCounter++, Jt = $l = null, je = a, T.H = n, T.A = i, fe === null && (Ee = null, me = 0, bs()), c
  }

  function Yx() {
    for (; fe !== null;) jd(fe)
  }

  function Gx(e, t) {
    var l = je;
    je |= 2;
    var a = yd(),
      n = vd();
    Ee !== e || me !== t ? ($s = null, Js = mt() + 500, Ga(e, t)) : qa = en(e, t);
    e: do try {
        if (we !== 0 && fe !== null) {
          t = fe;
          var i = vt;
          t: switch (we) {
            case 1:
              we = 0, vt = null, La(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Mu(i)) {
                we = 0, vt = null, Nd(t);
                break
              }
              t = function() {
                we !== 2 && we !== 9 || Ee !== e || (we = 7), Gt(e)
              }, i.then(t, t);
              break e;
            case 3:
              we = 7;
              break e;
            case 4:
              we = 5;
              break e;
            case 7:
              Mu(i) ? (we = 0, vt = null, Nd(t)) : (we = 0, vt = null, La(e, t, i, 7));
              break;
            case 5:
              var c = null;
              switch (fe.tag) {
                case 26:
                  c = fe.memoizedState;
                case 5:
                case 27:
                  var u = fe;
                  if (c ? cm(c) : u.stateNode.complete) {
                    we = 0, vt = null;
                    var m = u.sibling;
                    if (m !== null) fe = m;
                    else {
                      var N = u.return;
                      N !== null ? (fe = N, Is(N)) : fe = null
                    }
                    break t
                  }
              }
              we = 0, vt = null, La(e, t, i, 5);
              break;
            case 6:
              we = 0, vt = null, La(e, t, i, 6);
              break;
            case 8:
              br(), He = 6;
              break e;
            default:
              throw Error(o(462))
          }
        }
        Lx();
        break
      } catch (E) {
        bd(e, E)
      }
      while (!0);
      return Jt = $l = null, T.H = a, T.A = n, je = l, fe !== null ? 0 : (Ee = null, me = 0, bs(), He)
  }

  function Lx() {
    for (; fe !== null && !fp();) jd(fe)
  }

  function jd(e) {
    var t = Xf(e.alternate, e, nl);
    e.memoizedProps = e.pendingProps, t === null ? Is(e) : fe = t
  }

  function Nd(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Bf(l, t, t.pendingProps, t.type, void 0, me);
        break;
      case 11:
        t = Bf(l, t, t.pendingProps, t.type.render, t.ref, me);
        break;
      case 5:
        Oc(t);
      default:
        Kf(l, t), t = fe = yu(t, nl), t = Xf(l, t, nl)
    }
    e.memoizedProps = e.pendingProps, t === null ? Is(e) : fe = t
  }

  function La(e, t, l, a) {
    Jt = $l = null, Oc(t), _a = null, gn = 0;
    var n = t.return;
    try {
      if (Mx(e, n, t, l, me)) {
        He = 1, Bs(e, zt(l, e.current)), fe = null;
        return
      }
    } catch (i) {
      if (n !== null) throw fe = n, i;
      He = 1, Bs(e, zt(l, e.current)), fe = null;
      return
    }
    t.flags & 32768 ? (pe || a === 1 ? e = !0 : qa || (me & 536870912) !== 0 ? e = !1 : (wl = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = gt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), wd(t, e)) : Is(t)
  }

  function Is(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        wd(t, wl);
        return
      }
      e = t.return;
      var l = Ox(t.alternate, t, nl);
      if (l !== null) {
        fe = l;
        return
      }
      if (t = t.sibling, t !== null) {
        fe = t;
        return
      }
      fe = t = e
    } while (t !== null);
    He === 0 && (He = 5)
  }

  function wd(e, t) {
    do {
      var l = Dx(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, fe = l;
        return
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        fe = e;
        return
      }
      fe = e = l
    } while (e !== null);
    He = 6, fe = null
  }

  function Sd(e, t, l, a, n, i, c, u, m) {
    e.cancelPendingCommit = null;
    do Ps(); while (Xe !== 0);
    if ((je & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (i = t.lanes | t.childLanes, i |= ic, jp(e, l, i, c, u, m), e === Ee && (fe = Ee = null, me = 0), Ya = t, zl = e, sl = l, hr = i, pr = n, md = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Zx(ts, function() {
          return Ed(), null
        })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = T.T, T.T = null, n = B.p, B.p = 2, c = je, je |= 4;
        try {
          Rx(e, t, l)
        } finally {
          je = c, B.p = n, T.T = a
        }
      }
      Xe = 1, kd(), zd(), Td()
    }
  }

  function kd() {
    if (Xe === 1) {
      Xe = 0;
      var e = zl,
        t = Ya,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = T.T, T.T = null;
        var a = B.p;
        B.p = 2;
        var n = je;
        je |= 4;
        try {
          sd(t, e);
          var i = Mr,
            c = uu(e.containerInfo),
            u = i.focusedElem,
            m = i.selectionRange;
          if (c !== u && u && u.ownerDocument && ou(u.ownerDocument.documentElement, u)) {
            if (m !== null && tc(u)) {
              var N = m.start,
                E = m.end;
              if (E === void 0 && (E = N), "selectionStart" in u) u.selectionStart = N, u.selectionEnd = Math.min(E, u.value.length);
              else {
                var C = u.ownerDocument || document,
                  S = C && C.defaultView || window;
                if (S.getSelection) {
                  var z = S.getSelection(),
                    X = u.textContent.length,
                    ee = Math.min(m.start, X),
                    Te = m.end === void 0 ? ee : Math.min(m.end, X);
                  !z.extend && ee > Te && (c = Te, Te = ee, ee = c);
                  var g = ru(u, ee),
                    p = ru(u, Te);
                  if (g && p && (z.rangeCount !== 1 || z.anchorNode !== g.node || z.anchorOffset !== g.offset || z.focusNode !== p.node || z.focusOffset !== p.offset)) {
                    var j = C.createRange();
                    j.setStart(g.node, g.offset), z.removeAllRanges(), ee > Te ? (z.addRange(j), z.extend(p.node, p.offset)) : (j.setEnd(p.node, p.offset), z.addRange(j))
                  }
                }
              }
            }
            for (C = [], z = u; z = z.parentNode;) z.nodeType === 1 && C.push({
              element: z,
              left: z.scrollLeft,
              top: z.scrollTop
            });
            for (typeof u.focus == "function" && u.focus(), u = 0; u < C.length; u++) {
              var M = C[u];
              M.element.scrollLeft = M.left, M.element.scrollTop = M.top
            }
          }
          fi = !!Er, Mr = Er = null
        } finally {
          je = n, B.p = a, T.T = l
        }
      }
      e.current = t, Xe = 2
    }
  }

  function zd() {
    if (Xe === 2) {
      Xe = 0;
      var e = zl,
        t = Ya,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = T.T, T.T = null;
        var a = B.p;
        B.p = 2;
        var n = je;
        je |= 4;
        try {
          ed(e, t.alternate, t)
        } finally {
          je = n, B.p = a, T.T = l
        }
      }
      Xe = 3
    }
  }

  function Td() {
    if (Xe === 4 || Xe === 3) {
      Xe = 0, dp();
      var e = zl,
        t = Ya,
        l = sl,
        a = md;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Xe = 5 : (Xe = 0, Ya = zl = null, Ad(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (kl = null), Ui(l), t = t.stateNode, ht && typeof ht.onCommitFiberRoot == "function") try {
        ht.onCommitFiberRoot(Pa, t, void 0, (t.current.flags & 128) === 128)
      } catch {}
      if (a !== null) {
        t = T.T, n = B.p, B.p = 2, T.T = null;
        try {
          for (var i = e.onRecoverableError, c = 0; c < a.length; c++) {
            var u = a[c];
            i(u.value, {
              componentStack: u.stack
            })
          }
        } finally {
          T.T = t, B.p = n
        }
      }(sl & 3) !== 0 && Ps(), Gt(e), n = e.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? e === xr ? Rn++ : (Rn = 0, xr = e) : Rn = 0, Un(0)
    }
  }

  function Ad(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, xn(t)))
  }

  function Ps() {
    return kd(), zd(), Td(), Ed()
  }

  function Ed() {
    if (Xe !== 5) return !1;
    var e = zl,
      t = hr;
    hr = 0;
    var l = Ui(sl),
      a = T.T,
      n = B.p;
    try {
      B.p = 32 > l ? 32 : l, T.T = null, l = pr, pr = null;
      var i = zl,
        c = sl;
      if (Xe = 0, Ya = zl = null, sl = 0, (je & 6) !== 0) throw Error(o(331));
      var u = je;
      if (je |= 4, ud(i.current), cd(i, i.current, c, l), je = u, Un(0, !1), ht && typeof ht.onPostCommitFiberRoot == "function") try {
        ht.onPostCommitFiberRoot(Pa, i)
      } catch {}
      return !0
    } finally {
      B.p = n, T.T = a, Ad(e, t)
    }
  }

  function Md(e, t, l) {
    t = zt(l, t), t = Jc(e.stateNode, t, 2), e = yl(e, t, 2), e !== null && (tn(e, 2), Gt(e))
  }

  function Se(e, t, l) {
    if (e.tag === 3) Md(e, e, l);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          Md(t, e, l);
          break
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (kl === null || !kl.has(a))) {
            e = zt(l, e), l = _f(2), a = yl(t, l, 2), a !== null && (Cf(l, a, t, e), tn(a, 2), Gt(a));
            break
          }
        }
        t = t.return
      }
  }

  function yr(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new qx;
      var n = new Set;
      a.set(t, n)
    } else n = a.get(t), n === void 0 && (n = new Set, a.set(t, n));
    n.has(l) || (fr = !0, n.add(l), e = Vx.bind(null, e, t, l), t.then(e, e))
  }

  function Vx(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Ee === e && (me & l) === l && (He === 4 || He === 3 && (me & 62914560) === me && 300 > mt() - Ks ? (je & 2) === 0 && Ga(e, 0) : dr |= l, Ba === me && (Ba = 0)), Gt(e)
  }

  function _d(e, t) {
    t === 0 && (t = So()), e = Zl(e, t), e !== null && (tn(e, t), Gt(e))
  }

  function Qx(e) {
    var t = e.memoizedState,
      l = 0;
    t !== null && (l = t.retryLane), _d(e, l)
  }

  function Xx(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode,
          n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314))
    }
    a !== null && a.delete(t), _d(e, l)
  }

  function Zx(e, t) {
    return Ci(e, t)
  }
  var ei = null,
    Va = null,
    vr = !1,
    ti = !1,
    jr = !1,
    Al = 0;

  function Gt(e) {
    e !== Va && e.next === null && (Va === null ? ei = Va = e : Va = Va.next = e), ti = !0, vr || (vr = !0, Jx())
  }

  function Un(e, t) {
    if (!jr && ti) {
      jr = !0;
      do
        for (var l = !1, a = ei; a !== null;) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var c = a.suspendedLanes,
                u = a.pingedLanes;
              i = (1 << 31 - pt(42 | e) + 1) - 1, i &= n & ~(c & ~u), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0
            }
            i !== 0 && (l = !0, Rd(a, i))
          } else i = me, i = ss(a, a === Ee ? i : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (i & 3) === 0 || en(a, i) || (l = !0, Rd(a, i));
          a = a.next
        }
      while (l);
      jr = !1
    }
  }

  function Kx() {
    Cd()
  }

  function Cd() {
    ti = vr = !1;
    var e = 0;
    Al !== 0 && n0() && (e = Al);
    for (var t = mt(), l = null, a = ei; a !== null;) {
      var n = a.next,
        i = Od(a, t);
      i === 0 ? (a.next = null, l === null ? ei = n : l.next = n, n === null && (Va = l)) : (l = a, (e !== 0 || (i & 3) !== 0) && (ti = !0)), a = n
    }
    Xe !== 0 && Xe !== 5 || Un(e), Al !== 0 && (Al = 0)
  }

  function Od(e, t) {
    for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i;) {
      var c = 31 - pt(i),
        u = 1 << c,
        m = n[c];
      m === -1 ? ((u & l) === 0 || (u & a) !== 0) && (n[c] = vp(u, t)) : m <= t && (e.expiredLanes |= u), i &= ~u
    }
    if (t = Ee, l = me, l = ss(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, l === 0 || e === t && (we === 2 || we === 9) || e.cancelPendingCommit !== null) return a !== null && a !== null && Oi(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || en(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (a !== null && Oi(a), Ui(l)) {
        case 2:
        case 8:
          l = No;
          break;
        case 32:
          l = ts;
          break;
        case 268435456:
          l = wo;
          break;
        default:
          l = ts
      }
      return a = Dd.bind(null, e), l = Ci(l, a), e.callbackPriority = t, e.callbackNode = l, t
    }
    return a !== null && a !== null && Oi(a), e.callbackPriority = 2, e.callbackNode = null, 2
  }

  function Dd(e, t) {
    if (Xe !== 0 && Xe !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (Ps() && e.callbackNode !== l) return null;
    var a = me;
    return a = ss(e, e === Ee ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (pd(e, a, t), Od(e, mt()), e.callbackNode != null && e.callbackNode === l ? Dd.bind(null, e) : null)
  }

  function Rd(e, t) {
    if (Ps()) return null;
    pd(e, t, !0)
  }

  function Jx() {
    i0(function() {
      (je & 6) !== 0 ? Ci(jo, Kx) : Cd()
    })
  }

  function Nr() {
    if (Al === 0) {
      var e = Aa;
      e === 0 && (e = ls, ls <<= 1, (ls & 261888) === 0 && (ls = 256)), Al = e
    }
    return Al
  }

  function Ud(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : os("" + e)
  }

  function Hd(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e
  }

  function $x(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var i = Ud((n[st] || null).action),
        c = a.submitter;
      c && (t = (t = c[st] || null) ? Ud(t.formAction) : c.getAttribute("formAction"), t !== null && (i = t, c = null));
      var u = new ms("action", "action", null, a, n);
      e.push({
        event: u,
        listeners: [{
          instance: null,
          listener: function() {
            if (a.defaultPrevented) {
              if (Al !== 0) {
                var m = c ? Hd(n, c) : new FormData(n);
                Lc(l, {
                  pending: !0,
                  data: m,
                  method: n.method,
                  action: i
                }, null, m)
              }
            } else typeof i == "function" && (u.preventDefault(), m = c ? Hd(n, c) : new FormData(n), Lc(l, {
              pending: !0,
              data: m,
              method: n.method,
              action: i
            }, i, m))
          },
          currentTarget: n
        }]
      })
    }
  }
  for (var wr = 0; wr < sc.length; wr++) {
    var Sr = sc[wr],
      Wx = Sr.toLowerCase(),
      Fx = Sr[0].toUpperCase() + Sr.slice(1);
    Ot(Wx, "on" + Fx)
  }
  Ot(mu, "onAnimationEnd"), Ot(hu, "onAnimationIteration"), Ot(pu, "onAnimationStart"), Ot("dblclick", "onDoubleClick"), Ot("focusin", "onFocus"), Ot("focusout", "onBlur"), Ot(mx, "onTransitionRun"), Ot(hx, "onTransitionStart"), Ot(px, "onTransitionCancel"), Ot(xu, "onTransitionEnd"), ha("onMouseEnter", ["mouseout", "mouseover"]), ha("onMouseLeave", ["mouseout", "mouseover"]), ha("onPointerEnter", ["pointerout", "pointerover"]), ha("onPointerLeave", ["pointerout", "pointerover"]), Ll("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ll("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ll("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ll("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ll("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ll("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Hn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Ix = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hn));

  function qd(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var c = a.length - 1; 0 <= c; c--) {
            var u = a[c],
              m = u.instance,
              N = u.currentTarget;
            if (u = u.listener, m !== i && n.isPropagationStopped()) break e;
            i = u, n.currentTarget = N;
            try {
              i(n)
            } catch (E) {
              xs(E)
            }
            n.currentTarget = null, i = m
          } else
            for (c = 0; c < a.length; c++) {
              if (u = a[c], m = u.instance, N = u.currentTarget, u = u.listener, m !== i && n.isPropagationStopped()) break e;
              i = u, n.currentTarget = N;
              try {
                i(n)
              } catch (E) {
                xs(E)
              }
              n.currentTarget = null, i = m
            }
      }
    }
  }

  function de(e, t) {
    var l = t[Hi];
    l === void 0 && (l = t[Hi] = new Set);
    var a = e + "__bubble";
    l.has(a) || (Bd(t, e, 2, !1), l.add(a))
  }

  function kr(e, t, l) {
    var a = 0;
    t && (a |= 4), Bd(l, e, a, t)
  }
  var li = "_reactListening" + Math.random().toString(36).slice(2);

  function zr(e) {
    if (!e[li]) {
      e[li] = !0, _o.forEach(function(l) {
        l !== "selectionchange" && (Ix.has(l) || kr(l, !1, e), kr(l, !0, e))
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[li] || (t[li] = !0, kr("selectionchange", !1, t))
    }
  }

  function Bd(e, t, l, a) {
    switch (hm(t)) {
      case 2:
        var n = z0;
        break;
      case 8:
        n = T0;
        break;
      default:
        n = Gr
    }
    l = n.bind(null, t, l, e), n = void 0, !Zi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: n
    }) : e.addEventListener(t, l, !0) : n !== void 0 ? e.addEventListener(t, l, {
      passive: n
    }) : e.addEventListener(t, l, !1)
  }

  function Tr(e, t, l, a, n) {
    var i = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null) e: for (;;) {
      if (a === null) return;
      var c = a.tag;
      if (c === 3 || c === 4) {
        var u = a.stateNode.containerInfo;
        if (u === n) break;
        if (c === 4)
          for (c = a.return; c !== null;) {
            var m = c.tag;
            if ((m === 3 || m === 4) && c.stateNode.containerInfo === n) return;
            c = c.return
          }
        for (; u !== null;) {
          if (c = fa(u), c === null) return;
          if (m = c.tag, m === 5 || m === 6 || m === 26 || m === 27) {
            a = i = c;
            continue e
          }
          u = u.parentNode
        }
      }
      a = a.return
    }
    Vo(function() {
      var N = i,
        E = Qi(l),
        C = [];
      e: {
        var S = bu.get(e);
        if (S !== void 0) {
          var z = ms,
            X = e;
          switch (e) {
            case "keypress":
              if (fs(l) === 0) break e;
            case "keydown":
            case "keyup":
              z = Xp;
              break;
            case "focusin":
              X = "focus", z = Wi;
              break;
            case "focusout":
              X = "blur", z = Wi;
              break;
            case "beforeblur":
            case "afterblur":
              z = Wi;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              z = Zo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = Op;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = Jp;
              break;
            case mu:
            case hu:
            case pu:
              z = Up;
              break;
            case xu:
              z = Wp;
              break;
            case "scroll":
            case "scrollend":
              z = _p;
              break;
            case "wheel":
              z = Ip;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = qp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = Jo;
              break;
            case "toggle":
            case "beforetoggle":
              z = ex
          }
          var ee = (t & 4) !== 0,
            Te = !ee && (e === "scroll" || e === "scrollend"),
            g = ee ? S !== null ? S + "Capture" : null : S;
          ee = [];
          for (var p = N, j; p !== null;) {
            var M = p;
            if (j = M.stateNode, M = M.tag, M !== 5 && M !== 26 && M !== 27 || j === null || g === null || (M = nn(p, g), M != null && ee.push(qn(p, M, j))), Te) break;
            p = p.return
          }
          0 < ee.length && (S = new z(S, X, null, l, E), C.push({
            event: S,
            listeners: ee
          }))
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (S = e === "mouseover" || e === "pointerover", z = e === "mouseout" || e === "pointerout", S && l !== Vi && (X = l.relatedTarget || l.fromElement) && (fa(X) || X[ua])) break e;
          if ((z || S) && (S = E.window === E ? E : (S = E.ownerDocument) ? S.defaultView || S.parentWindow : window, z ? (X = l.relatedTarget || l.toElement, z = N, X = X ? fa(X) : null, X !== null && (Te = k(X), ee = X.tag, X !== Te || ee !== 5 && ee !== 27 && ee !== 6) && (X = null)) : (z = null, X = N), z !== X)) {
            if (ee = Zo, M = "onMouseLeave", g = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (ee = Jo, M = "onPointerLeave", g = "onPointerEnter", p = "pointer"), Te = z == null ? S : an(z), j = X == null ? S : an(X), S = new ee(M, p + "leave", z, l, E), S.target = Te, S.relatedTarget = j, M = null, fa(E) === N && (ee = new ee(g, p + "enter", X, l, E), ee.target = j, ee.relatedTarget = Te, M = ee), Te = M, z && X) t: {
              for (ee = Px, g = z, p = X, j = 0, M = g; M; M = ee(M)) j++;M = 0;
              for (var I = p; I; I = ee(I)) M++;
              for (; 0 < j - M;) g = ee(g),
              j--;
              for (; 0 < M - j;) p = ee(p),
              M--;
              for (; j--;) {
                if (g === p || p !== null && g === p.alternate) {
                  ee = g;
                  break t
                }
                g = ee(g), p = ee(p)
              }
              ee = null
            }
            else ee = null;
            z !== null && Yd(C, S, z, ee, !1), X !== null && Te !== null && Yd(C, Te, X, ee, !0)
          }
        }
        e: {
          if (S = N ? an(N) : window, z = S.nodeName && S.nodeName.toLowerCase(), z === "select" || z === "input" && S.type === "file") var ge = lu;
          else if (eu(S))
            if (au) ge = ux;
            else {
              ge = rx;
              var $ = cx
            }
          else z = S.nodeName,
          !z || z.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? N && Li(N.elementType) && (ge = lu) : ge = ox;
          if (ge && (ge = ge(e, N))) {
            tu(C, ge, l, E);
            break e
          }
          $ && $(e, S, N),
          e === "focusout" && N && S.type === "number" && N.memoizedProps.value != null && Gi(S, "number", S.value)
        }
        switch ($ = N ? an(N) : window, e) {
          case "focusin":
            (eu($) || $.contentEditable === "true") && (va = $, lc = N, mn = null);
            break;
          case "focusout":
            mn = lc = va = null;
            break;
          case "mousedown":
            ac = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ac = !1, fu(C, l, E);
            break;
          case "selectionchange":
            if (dx) break;
          case "keydown":
          case "keyup":
            fu(C, l, E)
        }
        var re;
        if (Ii) e: {
          switch (e) {
            case "compositionstart":
              var he = "onCompositionStart";
              break e;
            case "compositionend":
              he = "onCompositionEnd";
              break e;
            case "compositionupdate":
              he = "onCompositionUpdate";
              break e
          }
          he = void 0
        }
        else ya ? Io(e, l) && (he = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (he = "onCompositionStart");he && ($o && l.locale !== "ko" && (ya || he !== "onCompositionStart" ? he === "onCompositionEnd" && ya && (re = Qo()) : (dl = E, Ki = "value" in dl ? dl.value : dl.textContent, ya = !0)), $ = ai(N, he), 0 < $.length && (he = new Ko(he, e, null, l, E), C.push({
          event: he,
          listeners: $
        }), re ? he.data = re : (re = Po(l), re !== null && (he.data = re)))),
        (re = lx ? ax(e, l) : nx(e, l)) && (he = ai(N, "onBeforeInput"), 0 < he.length && ($ = new Ko("onBeforeInput", "beforeinput", null, l, E), C.push({
          event: $,
          listeners: he
        }), $.data = re)),
        $x(C, e, N, l, E)
      }
      qd(C, t)
    })
  }

  function qn(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    }
  }

  function ai(e, t) {
    for (var l = t + "Capture", a = []; e !== null;) {
      var n = e,
        i = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = nn(e, l), n != null && a.unshift(qn(e, n, i)), n = nn(e, t), n != null && a.push(qn(e, n, i))), e.tag === 3) return a;
      e = e.return
    }
    return []
  }

  function Px(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5 && e.tag !== 27);
    return e || null
  }

  function Yd(e, t, l, a, n) {
    for (var i = t._reactName, c = []; l !== null && l !== a;) {
      var u = l,
        m = u.alternate,
        N = u.stateNode;
      if (u = u.tag, m !== null && m === a) break;
      u !== 5 && u !== 26 && u !== 27 || N === null || (m = N, n ? (N = nn(l, i), N != null && c.unshift(qn(l, N, m))) : n || (N = nn(l, i), N != null && c.push(qn(l, N, m)))), l = l.return
    }
    c.length !== 0 && e.push({
      event: t,
      listeners: c
    })
  }
  var e0 = /\r\n?/g,
    t0 = /\u0000|\uFFFD/g;

  function Gd(e) {
    return (typeof e == "string" ? e : "" + e).replace(e0, `
`).replace(t0, "")
  }

  function Ld(e, t) {
    return t = Gd(t), Gd(e) === t
  }

  function ze(e, t, l, a, n, i) {
    switch (l) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || xa(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && xa(e, "" + a);
        break;
      case "className":
        cs(e, "class", a);
        break;
      case "tabIndex":
        cs(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        cs(e, l, a);
        break;
      case "style":
        Go(e, a, i);
        break;
      case "data":
        if (t !== "object") {
          cs(e, "data", a);
          break
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break
        }
        a = os("" + a), e.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break
        } else typeof i == "function" && (l === "formAction" ? (t !== "input" && ze(e, t, "name", n.name, n, null), ze(e, t, "formEncType", n.formEncType, n, null), ze(e, t, "formMethod", n.formMethod, n, null), ze(e, t, "formTarget", n.formTarget, n, null)) : (ze(e, t, "encType", n.encType, n, null), ze(e, t, "method", n.method, n, null), ze(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break
        }
        a = os("" + a), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = Qt);
        break;
      case "onScroll":
        a != null && de("scroll", e);
        break;
      case "onScrollEnd":
        a != null && de("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(o(60));
            e.innerHTML = l
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
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
          e.removeAttribute("xlink:href");
          break
        }
        l = os("" + a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "" + a) : e.removeAttribute(l);
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
        a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? e.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
        break;
      case "popover":
        de("beforetoggle", e), de("toggle", e), is(e, "popover", a);
        break;
      case "xlinkActuate":
        Vt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Vt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Vt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Vt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Vt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Vt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Vt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Vt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Vt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        is(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Ep.get(l) || l, is(e, l, a))
    }
  }

  function Ar(e, t, l, a, n, i) {
    switch (l) {
      case "style":
        Go(e, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(o(60));
            e.innerHTML = l
          }
        }
        break;
      case "children":
        typeof a == "string" ? xa(e, a) : (typeof a == "number" || typeof a == "bigint") && xa(e, "" + a);
        break;
      case "onScroll":
        a != null && de("scroll", e);
        break;
      case "onScrollEnd":
        a != null && de("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = Qt);
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
        if (!Co.hasOwnProperty(l)) e: {
          if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), t = l.slice(2, n ? l.length - 7 : void 0), i = e[st] || null, i = i != null ? i[l] : null, typeof i == "function" && e.removeEventListener(t, i, n), typeof a == "function")) {
            typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, n);
            break e
          }
          l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : is(e, l, a)
        }
    }
  }

  function lt(e, t, l) {
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
        de("error", e), de("load", e);
        var a = !1,
          n = !1,
          i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var c = l[i];
            if (c != null) switch (i) {
              case "src":
                a = !0;
                break;
              case "srcSet":
                n = !0;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                ze(e, t, i, c, l, null)
            }
          } n && ze(e, t, "srcSet", l.srcSet, l, null), a && ze(e, t, "src", l.src, l, null);
        return;
      case "input":
        de("invalid", e);
        var u = i = c = n = null,
          m = null,
          N = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var E = l[a];
            if (E != null) switch (a) {
              case "name":
                n = E;
                break;
              case "type":
                c = E;
                break;
              case "checked":
                m = E;
                break;
              case "defaultChecked":
                N = E;
                break;
              case "value":
                i = E;
                break;
              case "defaultValue":
                u = E;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null) throw Error(o(137, t));
                break;
              default:
                ze(e, t, a, E, l, null)
            }
          } Ho(e, i, u, m, N, c, n, !1);
        return;
      case "select":
        de("invalid", e), a = c = i = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (u = l[n], u != null)) switch (n) {
            case "value":
              i = u;
              break;
            case "defaultValue":
              c = u;
              break;
            case "multiple":
              a = u;
            default:
              ze(e, t, n, u, l, null)
          }
        t = i, l = c, e.multiple = !!a, t != null ? pa(e, !!a, t, !1) : l != null && pa(e, !!a, l, !0);
        return;
      case "textarea":
        de("invalid", e), i = n = a = null;
        for (c in l)
          if (l.hasOwnProperty(c) && (u = l[c], u != null)) switch (c) {
            case "value":
              a = u;
              break;
            case "defaultValue":
              n = u;
              break;
            case "children":
              i = u;
              break;
            case "dangerouslySetInnerHTML":
              if (u != null) throw Error(o(91));
              break;
            default:
              ze(e, t, c, u, l, null)
          }
        Bo(e, a, n, i);
        return;
      case "option":
        for (m in l) l.hasOwnProperty(m) && (a = l[m], a != null) && (m === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : ze(e, t, m, a, l, null));
        return;
      case "dialog":
        de("beforetoggle", e), de("toggle", e), de("cancel", e), de("close", e);
        break;
      case "iframe":
      case "object":
        de("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Hn.length; a++) de(Hn[a], e);
        break;
      case "image":
        de("error", e), de("load", e);
        break;
      case "details":
        de("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        de("error", e), de("load", e);
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
        for (N in l)
          if (l.hasOwnProperty(N) && (a = l[N], a != null)) switch (N) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(o(137, t));
            default:
              ze(e, t, N, a, l, null)
          }
        return;
      default:
        if (Li(t)) {
          for (E in l) l.hasOwnProperty(E) && (a = l[E], a !== void 0 && Ar(e, t, E, a, l, void 0));
          return
        }
    }
    for (u in l) l.hasOwnProperty(u) && (a = l[u], a != null && ze(e, t, u, a, l, null))
  }

  function l0(e, t, l, a) {
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
          i = null,
          c = null,
          u = null,
          m = null,
          N = null,
          E = null;
        for (z in l) {
          var C = l[z];
          if (l.hasOwnProperty(z) && C != null) switch (z) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              m = C;
            default:
              a.hasOwnProperty(z) || ze(e, t, z, null, a, C)
          }
        }
        for (var S in a) {
          var z = a[S];
          if (C = l[S], a.hasOwnProperty(S) && (z != null || C != null)) switch (S) {
            case "type":
              i = z;
              break;
            case "name":
              n = z;
              break;
            case "checked":
              N = z;
              break;
            case "defaultChecked":
              E = z;
              break;
            case "value":
              c = z;
              break;
            case "defaultValue":
              u = z;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (z != null) throw Error(o(137, t));
              break;
            default:
              z !== C && ze(e, t, S, z, a, C)
          }
        }
        Yi(e, c, u, m, N, E, i, n);
        return;
      case "select":
        z = c = u = S = null;
        for (i in l)
          if (m = l[i], l.hasOwnProperty(i) && m != null) switch (i) {
            case "value":
              break;
            case "multiple":
              z = m;
            default:
              a.hasOwnProperty(i) || ze(e, t, i, null, a, m)
          }
        for (n in a)
          if (i = a[n], m = l[n], a.hasOwnProperty(n) && (i != null || m != null)) switch (n) {
            case "value":
              S = i;
              break;
            case "defaultValue":
              u = i;
              break;
            case "multiple":
              c = i;
            default:
              i !== m && ze(e, t, n, i, a, m)
          }
        t = u, l = c, a = z, S != null ? pa(e, !!l, S, !1) : !!a != !!l && (t != null ? pa(e, !!l, t, !0) : pa(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        z = S = null;
        for (u in l)
          if (n = l[u], l.hasOwnProperty(u) && n != null && !a.hasOwnProperty(u)) switch (u) {
            case "value":
              break;
            case "children":
              break;
            default:
              ze(e, t, u, null, a, n)
          }
        for (c in a)
          if (n = a[c], i = l[c], a.hasOwnProperty(c) && (n != null || i != null)) switch (c) {
            case "value":
              S = n;
              break;
            case "defaultValue":
              z = n;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (n != null) throw Error(o(91));
              break;
            default:
              n !== i && ze(e, t, c, n, a, i)
          }
        qo(e, S, z);
        return;
      case "option":
        for (var X in l) S = l[X], l.hasOwnProperty(X) && S != null && !a.hasOwnProperty(X) && (X === "selected" ? e.selected = !1 : ze(e, t, X, null, a, S));
        for (m in a) S = a[m], z = l[m], a.hasOwnProperty(m) && S !== z && (S != null || z != null) && (m === "selected" ? e.selected = S && typeof S != "function" && typeof S != "symbol" : ze(e, t, m, S, a, z));
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
        for (var ee in l) S = l[ee], l.hasOwnProperty(ee) && S != null && !a.hasOwnProperty(ee) && ze(e, t, ee, null, a, S);
        for (N in a)
          if (S = a[N], z = l[N], a.hasOwnProperty(N) && S !== z && (S != null || z != null)) switch (N) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (S != null) throw Error(o(137, t));
              break;
            default:
              ze(e, t, N, S, a, z)
          }
        return;
      default:
        if (Li(t)) {
          for (var Te in l) S = l[Te], l.hasOwnProperty(Te) && S !== void 0 && !a.hasOwnProperty(Te) && Ar(e, t, Te, void 0, a, S);
          for (E in a) S = a[E], z = l[E], !a.hasOwnProperty(E) || S === z || S === void 0 && z === void 0 || Ar(e, t, E, S, a, z);
          return
        }
    }
    for (var g in l) S = l[g], l.hasOwnProperty(g) && S != null && !a.hasOwnProperty(g) && ze(e, t, g, null, a, S);
    for (C in a) S = a[C], z = l[C], !a.hasOwnProperty(C) || S === z || S == null && z == null || ze(e, t, C, S, a, z)
  }

  function Vd(e) {
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

  function a0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a],
          i = n.transferSize,
          c = n.initiatorType,
          u = n.duration;
        if (i && u && Vd(c)) {
          for (c = 0, u = n.responseEnd, a += 1; a < l.length; a++) {
            var m = l[a],
              N = m.startTime;
            if (N > u) break;
            var E = m.transferSize,
              C = m.initiatorType;
            E && Vd(C) && (m = m.responseEnd, c += E * (m < u ? 1 : (u - N) / (m - N)))
          }
          if (--a, t += 8 * (i + c) / (n.duration / 1e3), e++, 10 < e) break
        }
      }
      if (0 < e) return t / e / 1e6
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5
  }
  var Er = null,
    Mr = null;

  function ni(e) {
    return e.nodeType === 9 ? e : e.ownerDocument
  }

  function Qd(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0
    }
  }

  function Xd(e, t) {
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

  function _r(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
  }
  var Cr = null;

  function n0() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Cr ? !1 : (Cr = e, !0) : (Cr = null, !1)
  }
  var Zd = typeof setTimeout == "function" ? setTimeout : void 0,
    s0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Kd = typeof Promise == "function" ? Promise : void 0,
    i0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Kd < "u" ? function(e) {
      return Kd.resolve(null).then(e).catch(c0)
    } : Zd;

  function c0(e) {
    setTimeout(function() {
      throw e
    })
  }

  function El(e) {
    return e === "head"
  }

  function Jd(e, t) {
    var l = t,
      a = 0;
    do {
      var n = l.nextSibling;
      if (e.removeChild(l), n && n.nodeType === 8)
        if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            e.removeChild(n), Ka(t);
            return
          }
          a--
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") a++;
      else if (l === "html") Bn(e.ownerDocument.documentElement);
      else if (l === "head") {
        l = e.ownerDocument.head, Bn(l);
        for (var i = l.firstChild; i;) {
          var c = i.nextSibling,
            u = i.nodeName;
          i[ln] || u === "SCRIPT" || u === "STYLE" || u === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = c
        }
      } else l === "body" && Bn(e.ownerDocument.body);
      l = n
    } while (l);
    Ka(t)
  }

  function $d(e, t) {
    var l = e;
    e = 0;
    do {
      var a = l.nextSibling;
      if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8)
        if (l = a.data, l === "/$") {
          if (e === 0) break;
          e--
        } else l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
      l = a
    } while (l)
  }

  function Or(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Or(l), qi(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue
      }
      e.removeChild(l)
    }
  }

  function r0(e, t, l, a) {
    for (; e.nodeType === 1;) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break
      } else if (a) {
        if (!e[ln]) switch (t) {
          case "meta":
            if (!e.hasAttribute("itemprop")) break;
            return e;
          case "link":
            if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence")) break;
            if (i !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title)) break;
            return e;
          case "style":
            if (e.hasAttribute("data-precedence")) break;
            return e;
          case "script":
            if (i = e.getAttribute("src"), (i !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
            return e;
          default:
            return e
        }
      } else if (t === "input" && e.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === i) return e
      } else return e;
      if (e = _t(e.nextSibling), e === null) break
    }
    return null
  }

  function o0(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3;)
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = _t(e.nextSibling), e === null)) return null;
    return e
  }

  function Wd(e, t) {
    for (; e.nodeType !== 8;)
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = _t(e.nextSibling), e === null)) return null;
    return e
  }

  function Dr(e) {
    return e.data === "$?" || e.data === "$~"
  }

  function Rr(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"
  }

  function u0(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading") t();
    else {
      var a = function() {
        t(), l.removeEventListener("DOMContentLoaded", a)
      };
      l.addEventListener("DOMContentLoaded", a), e._reactRetry = a
    }
  }

  function _t(e) {
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
  var Ur = null;

  function Fd(e) {
    e = e.nextSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0) return _t(e.nextSibling);
          t--
        } else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++
      }
      e = e.nextSibling
    }
    return null
  }

  function Id(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--
        } else l !== "/$" && l !== "/&" || t++
      }
      e = e.previousSibling
    }
    return null
  }

  function Pd(e, t, l) {
    switch (t = ni(l), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(o(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(o(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(o(454));
        return e;
      default:
        throw Error(o(451))
    }
  }

  function Bn(e) {
    for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
    qi(e)
  }
  var Ct = new Map,
    em = new Set;

  function si(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
  }
  var il = B.d;
  B.d = {
    f: f0,
    r: d0,
    D: m0,
    C: h0,
    L: p0,
    m: x0,
    X: g0,
    S: b0,
    M: y0
  };

  function f0() {
    var e = il.f(),
      t = Ws();
    return e || t
  }

  function d0(e) {
    var t = da(e);
    t !== null && t.tag === 5 && t.type === "form" ? bf(t) : il.r(e)
  }
  var Qa = typeof document > "u" ? null : document;

  function tm(e, t, l) {
    var a = Qa;
    if (a && typeof t == "string" && t) {
      var n = St(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), em.has(n) || (em.add(n), e = {
        rel: e,
        crossOrigin: l,
        href: t
      }, a.querySelector(n) === null && (t = a.createElement("link"), lt(t, "link", e), We(t), a.head.appendChild(t)))
    }
  }

  function m0(e) {
    il.D(e), tm("dns-prefetch", e, null)
  }

  function h0(e, t) {
    il.C(e, t), tm("preconnect", e, t)
  }

  function p0(e, t, l) {
    il.L(e, t, l);
    var a = Qa;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + St(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + St(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + St(l.imageSizes) + '"]')) : n += '[href="' + St(e) + '"]';
      var i = n;
      switch (t) {
        case "style":
          i = Xa(e);
          break;
        case "script":
          i = Za(e)
      }
      Ct.has(i) || (e = A({
        rel: "preload",
        href: t === "image" && l && l.imageSrcSet ? void 0 : e,
        as: t
      }, l), Ct.set(i, e), a.querySelector(n) !== null || t === "style" && a.querySelector(Yn(i)) || t === "script" && a.querySelector(Gn(i)) || (t = a.createElement("link"), lt(t, "link", e), We(t), a.head.appendChild(t)))
    }
  }

  function x0(e, t) {
    il.m(e, t);
    var l = Qa;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n = 'link[rel="modulepreload"][as="' + St(a) + '"][href="' + St(e) + '"]',
        i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Za(e)
      }
      if (!Ct.has(i) && (e = A({
          rel: "modulepreload",
          href: e
        }, t), Ct.set(i, e), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Gn(i))) return
        }
        a = l.createElement("link"), lt(a, "link", e), We(a), l.head.appendChild(a)
      }
    }
  }

  function b0(e, t, l) {
    il.S(e, t, l);
    var a = Qa;
    if (a && e) {
      var n = ma(a).hoistableStyles,
        i = Xa(e);
      t = t || "default";
      var c = n.get(i);
      if (!c) {
        var u = {
          loading: 0,
          preload: null
        };
        if (c = a.querySelector(Yn(i))) u.loading = 5;
        else {
          e = A({
            rel: "stylesheet",
            href: e,
            "data-precedence": t
          }, l), (l = Ct.get(i)) && Hr(e, l);
          var m = c = a.createElement("link");
          We(m), lt(m, "link", e), m._p = new Promise(function(N, E) {
            m.onload = N, m.onerror = E
          }), m.addEventListener("load", function() {
            u.loading |= 1
          }), m.addEventListener("error", function() {
            u.loading |= 2
          }), u.loading |= 4, ii(c, t, a)
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: u
        }, n.set(i, c)
      }
    }
  }

  function g0(e, t) {
    il.X(e, t);
    var l = Qa;
    if (l && e) {
      var a = ma(l).hoistableScripts,
        n = Za(e),
        i = a.get(n);
      i || (i = l.querySelector(Gn(n)), i || (e = A({
        src: e,
        async: !0
      }, t), (t = Ct.get(n)) && qr(e, t), i = l.createElement("script"), We(i), lt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i))
    }
  }

  function y0(e, t) {
    il.M(e, t);
    var l = Qa;
    if (l && e) {
      var a = ma(l).hoistableScripts,
        n = Za(e),
        i = a.get(n);
      i || (i = l.querySelector(Gn(n)), i || (e = A({
        src: e,
        async: !0,
        type: "module"
      }, t), (t = Ct.get(n)) && qr(e, t), i = l.createElement("script"), We(i), lt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i))
    }
  }

  function lm(e, t, l, a) {
    var n = (n = oe.current) ? si(n) : null;
    if (!n) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Xa(l.href), l = ma(n).hoistableStyles, a = l.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = Xa(l.href);
          var i = ma(n).hoistableStyles,
            c = i.get(e);
          if (c || (n = n.ownerDocument || n, c = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, i.set(e, c), (i = n.querySelector(Yn(e))) && !i._p && (c.instance = i, c.state.loading = 5), Ct.has(e) || (l = {
              rel: "preload",
              as: "style",
              href: l.href,
              crossOrigin: l.crossOrigin,
              integrity: l.integrity,
              media: l.media,
              hrefLang: l.hrefLang,
              referrerPolicy: l.referrerPolicy
            }, Ct.set(e, l), i || v0(n, e, l, c.state))), t && a === null) throw Error(o(528, ""));
          return c
        }
        if (t && a !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Za(l), l = ma(n).hoistableScripts, a = l.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(o(444, e))
    }
  }

  function Xa(e) {
    return 'href="' + St(e) + '"'
  }

  function Yn(e) {
    return 'link[rel="stylesheet"][' + e + "]"
  }

  function am(e) {
    return A({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    })
  }

  function v0(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1
    }), t.addEventListener("error", function() {
      return a.loading |= 2
    }), lt(t, "link", l), We(t), e.head.appendChild(t))
  }

  function Za(e) {
    return '[src="' + St(e) + '"]'
  }

  function Gn(e) {
    return "script[async]" + e
  }

  function nm(e, t, l) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var a = e.querySelector('style[data-href~="' + St(l.href) + '"]');
        if (a) return t.instance = a, We(a), a;
        var n = A({}, l, {
          "data-href": l.href,
          "data-precedence": l.precedence,
          href: null,
          precedence: null
        });
        return a = (e.ownerDocument || e).createElement("style"), We(a), lt(a, "style", n), ii(a, l.precedence, e), t.instance = a;
      case "stylesheet":
        n = Xa(l.href);
        var i = e.querySelector(Yn(n));
        if (i) return t.state.loading |= 4, t.instance = i, We(i), i;
        a = am(l), (n = Ct.get(n)) && Hr(a, n), i = (e.ownerDocument || e).createElement("link"), We(i);
        var c = i;
        return c._p = new Promise(function(u, m) {
          c.onload = u, c.onerror = m
        }), lt(i, "link", a), t.state.loading |= 4, ii(i, l.precedence, e), t.instance = i;
      case "script":
        return i = Za(l.src), (n = e.querySelector(Gn(i))) ? (t.instance = n, We(n), n) : (a = l, (n = Ct.get(i)) && (a = A({}, l), qr(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), We(n), lt(n, "link", a), e.head.appendChild(n), t.instance = n);
      case "void":
        return null;
      default:
        throw Error(o(443, t.type))
    } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, ii(a, l.precedence, e));
    return t.instance
  }

  function ii(e, t, l) {
    for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, i = n, c = 0; c < a.length; c++) {
      var u = a[c];
      if (u.dataset.precedence === t) i = u;
      else if (i !== n) break
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild))
  }

  function Hr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title)
  }

  function qr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity)
  }
  var ci = null;

  function sm(e, t, l) {
    if (ci === null) {
      var a = new Map,
        n = ci = new Map;
      n.set(l, a)
    } else n = ci, a = n.get(l), a || (a = new Map, n.set(l, a));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++) {
      var i = l[n];
      if (!(i[ln] || i[Ie] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = i.getAttribute(t) || "";
        c = e + c;
        var u = a.get(c);
        u ? u.push(i) : a.set(c, [i])
      }
    }
    return a
  }

  function im(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null)
  }

  function j0(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
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

  function cm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
  }

  function N0(e, t, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = Xa(a.href),
          i = t.querySelector(Yn(n));
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = ri.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = i, We(i);
          return
        }
        i = t.ownerDocument || t, a = am(a), (n = Ct.get(n)) && Hr(a, n), i = i.createElement("link"), We(i);
        var c = i;
        c._p = new Promise(function(u, m) {
          c.onload = u, c.onerror = m
        }), lt(i, "link", a), l.instance = i
      }
      e.stylesheets === null && (e.stylesheets = new Map), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = ri.bind(e), t.addEventListener("load", l), t.addEventListener("error", l))
    }
  }
  var Br = 0;

  function w0(e, t) {
    return e.stylesheets && e.count === 0 && ui(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (e.stylesheets && ui(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i()
        }
      }, 6e4 + t);
      0 < e.imgBytes && Br === 0 && (Br = 62500 * a0());
      var n = setTimeout(function() {
        if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ui(e, e.stylesheets), e.unsuspend)) {
          var i = e.unsuspend;
          e.unsuspend = null, i()
        }
      }, (e.imgBytes > Br ? 50 : 800) + t);
      return e.unsuspend = l,
        function() {
          e.unsuspend = null, clearTimeout(a), clearTimeout(n)
        }
    } : null
  }

  function ri() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) ui(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e()
      }
    }
  }
  var oi = null;

  function ui(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, oi = new Map, t.forEach(S0, e), oi = null, ri.call(e))
  }

  function S0(e, t) {
    if (!(t.state.loading & 4)) {
      var l = oi.get(e);
      if (l) var a = l.get(null);
      else {
        l = new Map, oi.set(e, l);
        for (var n = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < n.length; i++) {
          var c = n[i];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c), a = c)
        }
        a && l.set(null, a)
      }
      n = t.instance, c = n.getAttribute("data-precedence"), i = l.get(c) || a, i === a && l.set(null, n), l.set(c, n), this.count++, a = ri.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), i ? i.parentNode.insertBefore(n, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4
    }
  }
  var Ln = {
    $$typeof: F,
    Provider: null,
    Consumer: null,
    _currentValue: U,
    _currentValue2: U,
    _threadCount: 0
  };

  function k0(e, t, l, a, n, i, c, u, m) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Di(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Di(0), this.hiddenUpdates = Di(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = new Map
  }

  function rm(e, t, l, a, n, i, c, u, m, N, E, C) {
    return e = new k0(e, t, l, c, m, N, E, C, u), t = 1, i === !0 && (t |= 24), i = bt(3, null, null, t), e.current = i, i.stateNode = e, t = gc(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: t
    }, Nc(i), e
  }

  function om(e) {
    return e ? (e = wa, e) : wa
  }

  function um(e, t, l, a, n, i) {
    n = om(n), a.context === null ? a.context = n : a.pendingContext = n, a = gl(t), a.payload = {
      element: l
    }, i = i === void 0 ? null : i, i !== null && (a.callback = i), l = yl(e, a, t), l !== null && (ft(l, e, t), vn(l, e, t))
  }

  function fm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t
    }
  }

  function Yr(e, t) {
    fm(e, t), (e = e.alternate) && fm(e, t)
  }

  function dm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Zl(e, 67108864);
      t !== null && ft(t, e, 67108864), Yr(e, 67108864)
    }
  }

  function mm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Nt();
      t = Ri(t);
      var l = Zl(e, t);
      l !== null && ft(l, e, t), Yr(e, t)
    }
  }
  var fi = !0;

  function z0(e, t, l, a) {
    var n = T.T;
    T.T = null;
    var i = B.p;
    try {
      B.p = 2, Gr(e, t, l, a)
    } finally {
      B.p = i, T.T = n
    }
  }

  function T0(e, t, l, a) {
    var n = T.T;
    T.T = null;
    var i = B.p;
    try {
      B.p = 8, Gr(e, t, l, a)
    } finally {
      B.p = i, T.T = n
    }
  }

  function Gr(e, t, l, a) {
    if (fi) {
      var n = Lr(a);
      if (n === null) Tr(e, t, a, di, l), pm(e, a);
      else if (E0(n, e, t, l, a)) a.stopPropagation();
      else if (pm(e, a), t & 4 && -1 < A0.indexOf(e)) {
        for (; n !== null;) {
          var i = da(n);
          if (i !== null) switch (i.tag) {
            case 3:
              if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                var c = Gl(i.pendingLanes);
                if (c !== 0) {
                  var u = i;
                  for (u.pendingLanes |= 2, u.entangledLanes |= 2; c;) {
                    var m = 1 << 31 - pt(c);
                    u.entanglements[1] |= m, c &= ~m
                  }
                  Gt(i), (je & 6) === 0 && (Js = mt() + 500, Un(0))
                }
              }
              break;
            case 31:
            case 13:
              u = Zl(i, 2), u !== null && ft(u, i, 2), Ws(), Yr(i, 2)
          }
          if (i = Lr(a), i === null && Tr(e, t, a, di, l), i === n) break;
          n = i
        }
        n !== null && a.stopPropagation()
      } else Tr(e, t, a, null, l)
    }
  }

  function Lr(e) {
    return e = Qi(e), Vr(e)
  }
  var di = null;

  function Vr(e) {
    if (di = null, e = fa(e), e !== null) {
      var t = k(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (e = y(t), e !== null) return e;
          e = null
        } else if (l === 31) {
          if (e = w(t), e !== null) return e;
          e = null
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null
        } else t !== e && (e = null)
      }
    }
    return di = e, null
  }

  function hm(e) {
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
        switch (mp()) {
          case jo:
            return 2;
          case No:
            return 8;
          case ts:
          case hp:
            return 32;
          case wo:
            return 268435456;
          default:
            return 32
        }
      default:
        return 32
    }
  }
  var Qr = !1,
    Ml = null,
    _l = null,
    Cl = null,
    Vn = new Map,
    Qn = new Map,
    Ol = [],
    A0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

  function pm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ml = null;
        break;
      case "dragenter":
      case "dragleave":
        _l = null;
        break;
      case "mouseover":
      case "mouseout":
        Cl = null;
        break;
      case "pointerover":
      case "pointerout":
        Vn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qn.delete(t.pointerId)
    }
  }

  function Xn(e, t, l, a, n, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [n]
    }, t !== null && (t = da(t), t !== null && dm(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e)
  }

  function E0(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return Ml = Xn(Ml, e, t, l, a, n), !0;
      case "dragenter":
        return _l = Xn(_l, e, t, l, a, n), !0;
      case "mouseover":
        return Cl = Xn(Cl, e, t, l, a, n), !0;
      case "pointerover":
        var i = n.pointerId;
        return Vn.set(i, Xn(Vn.get(i) || null, e, t, l, a, n)), !0;
      case "gotpointercapture":
        return i = n.pointerId, Qn.set(i, Xn(Qn.get(i) || null, e, t, l, a, n)), !0
    }
    return !1
  }

  function xm(e) {
    var t = fa(e.target);
    if (t !== null) {
      var l = k(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = y(l), t !== null) {
            e.blockedOn = t, Eo(e.priority, function() {
              mm(l)
            });
            return
          }
        } else if (t === 31) {
          if (t = w(l), t !== null) {
            e.blockedOn = t, Eo(e.priority, function() {
              mm(l)
            });
            return
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return
        }
      }
    }
    e.blockedOn = null
  }

  function mi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var l = Lr(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        Vi = a, l.target.dispatchEvent(a), Vi = null
      } else return t = da(l), t !== null && dm(t), e.blockedOn = l, !1;
      t.shift()
    }
    return !0
  }

  function bm(e, t, l) {
    mi(e) && l.delete(t)
  }

  function M0() {
    Qr = !1, Ml !== null && mi(Ml) && (Ml = null), _l !== null && mi(_l) && (_l = null), Cl !== null && mi(Cl) && (Cl = null), Vn.forEach(bm), Qn.forEach(bm)
  }

  function hi(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Qr || (Qr = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, M0)))
  }
  var pi = null;

  function gm(e) {
    pi !== e && (pi = e, r.unstable_scheduleCallback(r.unstable_NormalPriority, function() {
      pi === e && (pi = null);
      for (var t = 0; t < e.length; t += 3) {
        var l = e[t],
          a = e[t + 1],
          n = e[t + 2];
        if (typeof a != "function") {
          if (Vr(a || l) === null) continue;
          break
        }
        var i = da(l);
        i !== null && (e.splice(t, 3), t -= 3, Lc(i, {
          pending: !0,
          data: n,
          method: l.method,
          action: a
        }, a, n))
      }
    }))
  }

  function Ka(e) {
    function t(m) {
      return hi(m, e)
    }
    Ml !== null && hi(Ml, e), _l !== null && hi(_l, e), Cl !== null && hi(Cl, e), Vn.forEach(t), Qn.forEach(t);
    for (var l = 0; l < Ol.length; l++) {
      var a = Ol[l];
      a.blockedOn === e && (a.blockedOn = null)
    }
    for (; 0 < Ol.length && (l = Ol[0], l.blockedOn === null);) xm(l), l.blockedOn === null && Ol.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          i = l[a + 1],
          c = n[st] || null;
        if (typeof i == "function") c || gm(l);
        else if (c) {
          var u = null;
          if (i && i.hasAttribute("formAction")) {
            if (n = i, c = i[st] || null) u = c.formAction;
            else if (Vr(n) !== null) continue
          } else u = c.action;
          typeof u == "function" ? l[a + 1] = u : (l.splice(a, 3), a -= 3), gm(l)
        }
      }
  }

  function ym() {
    function e(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
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
      n !== null && (n(), n = null), a || setTimeout(l, 20)
    }

    function l() {
      if (!a && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
          info: "react-transition",
          history: "replace"
        })
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        n = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100),
        function() {
          a = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null)
        }
    }
  }

  function Xr(e) {
    this._internalRoot = e
  }
  xi.prototype.render = Xr.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var l = t.current,
      a = Nt();
    um(l, a, e, t, null, null)
  }, xi.prototype.unmount = Xr.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      um(e.current, 2, null, e, null, null), Ws(), t[ua] = null
    }
  };

  function xi(e) {
    this._internalRoot = e
  }
  xi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ao();
      e = {
        blockedOn: null,
        target: e,
        priority: t
      };
      for (var l = 0; l < Ol.length && t !== 0 && t < Ol[l].priority; l++);
      Ol.splice(l, 0, e), l === 0 && xm(e)
    }
  };
  var vm = f.version;
  if (vm !== "19.2.6") throw Error(o(527, vm, "19.2.6"));
  B.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = h(t), e = e !== null ? D(e) : null, e = e === null ? null : e.stateNode, e
  };
  var _0 = {
    bundleType: 0,
    version: "19.2.6",
    rendererPackageName: "react-dom",
    currentDispatcherRef: T,
    reconcilerVersion: "19.2.6"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var bi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bi.isDisabled && bi.supportsFiber) try {
      Pa = bi.inject(_0), ht = bi
    } catch {}
  }
  return Kn.createRoot = function(e, t) {
    if (!b(e)) throw Error(o(299));
    var l = !1,
      a = "",
      n = Tf,
      i = Af,
      c = Ef;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = rm(e, 1, !1, null, null, l, a, null, n, i, c, ym), e[ua] = t.current, zr(e), new Xr(t)
  }, Kn.hydrateRoot = function(e, t, l) {
    if (!b(e)) throw Error(o(299));
    var a = !1,
      n = "",
      i = Tf,
      c = Af,
      u = Ef,
      m = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (c = l.onCaughtError), l.onRecoverableError !== void 0 && (u = l.onRecoverableError), l.formState !== void 0 && (m = l.formState)), t = rm(e, 1, !0, t, l ?? null, a, n, m, i, c, u, ym), t.context = om(null), l = t.current, a = Nt(), a = Ri(a), n = gl(a), n.callback = null, yl(l, n, a), l = a, t.current.lanes = l, tn(t, l), Gt(t), e[ua] = t.current, zr(e), new xi(t)
  }, Kn.version = "19.2.6", Kn
}
var Mm;

function G0() {
  if (Mm) return Jr.exports;
  Mm = 1;

  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
    } catch (f) {
      console.error(f)
    }
  }
  return r(), Jr.exports = Y0(), Jr.exports
}
var L0 = G0();
const V0 = r => r?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

function Q0(r, f, d = []) {
  if (f == null) throw new Error("[lucide]: iconNode is required when icon name is used");
  return {
    name: V0(r),
    size: 24,
    node: f,
    ...d.length > 0 ? {
      aliases: d
    } : {}
  }
}
const X0 = r => {
  let f = "",
    d = !1;
  for (const o of r) {
    if (o === "-" || o === "_" || o <= " ") {
      d = f.length > 0;
      continue
    }
    f.length === 0 ? f += o.toLowerCase() : f += d ? o.toUpperCase() : o, d = !1
  }
  return f
};
const Z0 = r => {
  const f = X0(r);
  return f.charAt(0).toUpperCase() + f.slice(1)
};
const lo = (...r) => r.filter((f, d, o) => !!f && f.trim() !== "" && o.indexOf(f) === d).join(" ").trim();
const sa = {
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

function Ir(r) {
  return r != null
}

function K0(r, f = {}) {
  const d = f.attributeNames ?? {},
    o = O => d[O] ?? O,
    b = r.size ?? r.width ?? sa.width,
    k = r.size ?? r.height ?? sa.height,
    y = r.aliases?.filter(O => typeof O == "string" && O.trim() !== "").map(O => `lucide-${O}`) ?? [],
    w = [...r.name ? [`lucide-${r.name}`] : [], ...y],
    v = f.className?.split(" ").filter(Boolean) ?? [],
    h = f.includeDefaultClasses === !1 ? lo(...v) : lo("lucide", ...w, ...v),
    D = f.absoluteStrokeWidth ? Number(f.strokeWidth ?? sa["stroke-width"]) * Number(r.size ?? r.width ?? sa.width) / Number(f.size ?? f.width ?? sa.width) : f.strokeWidth ?? sa["stroke-width"];
  return ["svg", {
    ...Object.entries(sa).reduce((O, [G, H]) => (O[o(G)] = H, O), {}),
    ..."color" in f && f.color && {
      [o("stroke")]: f.color
    },
    ..."size" in f && Ir(f.size) && {
      [o("width")]: f.size,
      [o("height")]: f.size
    },
    ..."width" in f && Ir(f.width) && {
      [o("width")]: f.width
    },
    ..."height" in f && Ir(f.height) && {
      [o("height")]: f.height
    },
    [o("stroke-width")]: D,
    ...h && {
      [o("class")]: h
    },
    [o("viewBox")]: `0 0 ${b} ${k}`,
    ...f.hasA11yProp === !1 ? {
      [o("aria-hidden")]: "true"
    } : {},
    ..."attributes" in f && f.attributes
  }, r.node.map(O => {
    const [G, H, V] = O, Y = f.nonScalingStroke ? {
      [o("vector-effect")]: "non-scaling-stroke",
      ...H
    } : H;
    return V ? [G, Y, V] : [G, Y]
  })]
}

function J0(r, f = {}) {
  return K0(r, {
    ...f,
    attributeNames: {
      ...f.attributeNames,
      class: "className",
      "stroke-width": "strokeWidth",
      "stroke-linecap": "strokeLinecap",
      "stroke-linejoin": "strokeLinejoin",
      "vector-effect": "vectorEffect"
    }
  })
}
const $0 = r => {
    for (const f in r)
      if (f.startsWith("aria-") || f === "role" || f === "title") return !0;
    return !1
  },
  W0 = Z.createContext({}),
  F0 = () => Z.useContext(W0),
  I0 = Z.forwardRef(({
    color: r,
    size: f,
    width: d,
    height: o,
    strokeWidth: b,
    absoluteStrokeWidth: k,
    nonScalingStroke: y,
    className: w = "",
    children: v,
    iconNode: h = [],
    icon: D = {
      node: h,
      aliases: [],
      size: 24
    },
    ...A
  }, O) => {
    const {
      size: G = 24,
      strokeWidth: H = 2,
      absoluteStrokeWidth: V = !1,
      nonScalingStroke: Y = !1,
      color: R = "currentColor",
      className: W = ""
    } = F0() ?? {}, F = !!v || $0(A), [le, xe, Ae = []] = J0(D, {
      color: r ?? R,
      width: d ?? f ?? G,
      height: o ?? f ?? G,
      strokeWidth: b ?? H,
      absoluteStrokeWidth: k ?? V,
      nonScalingStroke: y ?? Y,
      className: lo(W, w),
      hasA11yProp: F,
      attributes: A
    });
    return Z.createElement(le, {
      ref: O,
      ...xe
    }, [...Ae.map(([se, Q]) => Z.createElement(se, Q)), ...Array.isArray(v) ? v : [v]])
  });

function te(r, f = [], d = []) {
  const o = typeof r == "string" ? Q0(r, f, d) : r,
    b = Z.forwardRef(({
      className: k,
      ...y
    }, w) => Z.createElement(I0, {
      ref: w,
      icon: o,
      className: k,
      ...y
    }));
  return o.name && (b.displayName = Z0(o.name)), b
}
const Lm = {
  name: "arrow-down",
  size: 24,
  node: [
    ["path", {
      d: "M12 5v14",
      key: "s699le"
    }],
    ["path", {
      d: "m19 12-7 7-7-7",
      key: "1idqje"
    }]
  ]
};
Lm.node;
const ki = te(Lm);
const Vm = {
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
Vm.node;
const P0 = te(Vm);
const Qm = {
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
Qm.node;
const Xm = te(Qm);
const Zm = {
  name: "arrow-up-right",
  size: 24,
  node: [
    ["path", {
      d: "M7 7h10v10",
      key: "1tivn9"
    }],
    ["path", {
      d: "M7 17 17 7",
      key: "1vkiza"
    }]
  ]
};
Zm.node;
const eb = te(Zm);
const Km = {
  name: "arrow-up",
  size: 24,
  node: [
    ["path", {
      d: "m5 12 7-7 7 7",
      key: "hav0vg"
    }],
    ["path", {
      d: "M12 19V5",
      key: "x0mq9r"
    }]
  ]
};
Km.node;
const Jm = te(Km);
const $m = {
  name: "badge-check",
  size: 24,
  node: [
    ["path", {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }],
    ["path", {
      d: "m16 9-5.5 5.5L8 12",
      key: "xofnsj"
    }]
  ],
  aliases: ["verified"]
};
$m.node;
const tb = te($m);
const Wm = {
  name: "book-open-check",
  size: 24,
  node: [
    ["path", {
      d: "M12 5v16",
      key: "1f6ucr"
    }],
    ["path", {
      d: "m16 12 2 2 4-4",
      key: "mdajum"
    }],
    ["path", {
      d: "M22 6V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2h4.001A2 2 0 0022 17v-1.344",
      key: "144kbk"
    }]
  ]
};
Wm.node;
const lb = te(Wm);
const Fm = {
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
Fm.node;
const oa = te(Fm);
const Im = {
  name: "brackets",
  size: 24,
  node: [
    ["path", {
      d: "M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3",
      key: "1kt8lf"
    }],
    ["path", {
      d: "M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3",
      key: "gduv9"
    }]
  ]
};
Im.node;
const ab = te(Im);
const Pm = {
  name: "calculator",
  size: 24,
  node: [
    ["rect", {
      width: "16",
      height: "20",
      x: "4",
      y: "2",
      rx: "2",
      key: "1nb95v"
    }],
    ["line", {
      x1: "8",
      x2: "16",
      y1: "6",
      y2: "6",
      key: "x4nwl0"
    }],
    ["line", {
      x1: "16",
      x2: "16",
      y1: "14",
      y2: "18",
      key: "wjye3r"
    }],
    ["path", {
      d: "M16 10h.01",
      key: "1m94wz"
    }],
    ["path", {
      d: "M12 10h.01",
      key: "1nrarc"
    }],
    ["path", {
      d: "M8 10h.01",
      key: "19clt8"
    }],
    ["path", {
      d: "M12 14h.01",
      key: "1etili"
    }],
    ["path", {
      d: "M8 14h.01",
      key: "6423bh"
    }],
    ["path", {
      d: "M12 18h.01",
      key: "mhygvu"
    }],
    ["path", {
      d: "M8 18h.01",
      key: "lrp35t"
    }]
  ]
};
Pm.node;
const eh = te(Pm);
const th = {
  name: "check",
  size: 24,
  node: [
    ["path", {
      d: "M20 6 9 17l-5-5",
      key: "1gmf2c"
    }]
  ]
};
th.node;
const De = te(th);
const lh = {
  name: "chevron-down",
  size: 24,
  node: [
    ["path", {
      d: "m6 9 6 6 6-6",
      key: "qrunsl"
    }]
  ]
};
lh.node;
const io = te(lh);
const ah = {
  name: "chevron-up",
  size: 24,
  node: [
    ["path", {
      d: "m18 15-6-6-6 6",
      key: "153udz"
    }]
  ]
};
ah.node;
const nb = te(ah);
const nh = {
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
nh.node;
const sh = te(nh);
const ih = {
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
      d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
      key: "1u773s"
    }],
    ["path", {
      d: "M12 17h.01",
      key: "p32p05"
    }]
  ],
  aliases: ["help-circle", "circle-help"]
};
ih.node;
const ch = te(ih);
const rh = {
  name: "clock-3",
  size: 24,
  node: [
    ["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }],
    ["path", {
      d: "M12 6v6h4",
      key: "135r8i"
    }]
  ]
};
rh.node;
const Wn = te(rh);
const oh = {
  name: "compass",
  size: 24,
  node: [
    ["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }],
    ["path", {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1"
    }]
  ]
};
oh.node;
const sb = te(oh);
const uh = {
  name: "download",
  size: 24,
  node: [
    ["path", {
      d: "M12 15V3",
      key: "m9g1x1"
    }],
    ["path", {
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
      key: "ih7n3h"
    }],
    ["path", {
      d: "m7 10 5 5 5-5",
      key: "brsn70"
    }]
  ]
};
uh.node;
const fh = te(uh);
const dh = {
  name: "file-check-corner",
  size: 24,
  node: [
    ["path", {
      d: "M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6",
      key: "g5mvt7"
    }],
    ["path", {
      d: "M14 2v5a1 1 0 0 0 1 1h5",
      key: "wfsgrz"
    }],
    ["path", {
      d: "m14 20 2 2 4-4",
      key: "15kota"
    }]
  ],
  aliases: ["file-check-2"]
};
dh.node;
const ib = te(dh);
const mh = {
  name: "file-plus-corner",
  size: 24,
  node: [
    ["path", {
      d: "M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35",
      key: "17jvcc"
    }],
    ["path", {
      d: "M14 2v5a1 1 0 0 0 1 1h5",
      key: "wfsgrz"
    }],
    ["path", {
      d: "M14 19h6",
      key: "bvotb8"
    }],
    ["path", {
      d: "M17 16v6",
      key: "18yu1i"
    }]
  ],
  aliases: ["file-plus-2"]
};
mh.node;
const cb = te(mh);
const hh = {
  name: "file-search-corner",
  size: 24,
  node: [
    ["path", {
      d: "M11.1 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.589 3.588A2.4 2.4 0 0 1 20 8v3.25",
      key: "uh4ikj"
    }],
    ["path", {
      d: "M14 2v5a1 1 0 0 0 1 1h5",
      key: "wfsgrz"
    }],
    ["path", {
      d: "m21 22-2.88-2.88",
      key: "9dd25w"
    }],
    ["circle", {
      cx: "16",
      cy: "17",
      r: "3",
      key: "11br10"
    }]
  ],
  aliases: ["file-search-2"]
};
hh.node;
const rb = te(hh);
const ph = {
  name: "file-text",
  size: 24,
  node: [
    ["path", {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }],
    ["path", {
      d: "M14 2v5a1 1 0 0 0 1 1h5",
      key: "wfsgrz"
    }],
    ["path", {
      d: "M10 9H8",
      key: "b1mrlr"
    }],
    ["path", {
      d: "M16 13H8",
      key: "t4e002"
    }],
    ["path", {
      d: "M16 17H8",
      key: "z1uh3a"
    }]
  ]
};
ph.node;
const wi = te(ph);
const xh = {
  name: "fingerprint-pattern",
  size: 24,
  node: [
    ["path", {
      d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",
      key: "1nerag"
    }],
    ["path", {
      d: "M14 13.12c0 2.38 0 6.38-1 8.88",
      key: "o46ks0"
    }],
    ["path", {
      d: "M17.29 21.02c.12-.6.43-2.3.5-3.02",
      key: "ptglia"
    }],
    ["path", {
      d: "M2 12a10 10 0 0 1 18-6",
      key: "ydlgp0"
    }],
    ["path", {
      d: "M2 16h.01",
      key: "1gqxmh"
    }],
    ["path", {
      d: "M21.8 16c.2-2 .131-5.354 0-6",
      key: "drycrb"
    }],
    ["path", {
      d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",
      key: "1tidbn"
    }],
    ["path", {
      d: "M8.65 22c.21-.66.45-1.32.57-2",
      key: "13wd9y"
    }],
    ["path", {
      d: "M9 6.8a6 6 0 0 1 9 5.2v2",
      key: "1fr1j5"
    }]
  ],
  aliases: ["fingerprint"]
};
xh.node;
const ao = te(xh);
const bh = {
  name: "footprints",
  size: 24,
  node: [
    ["path", {
      d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",
      key: "1dudjm"
    }],
    ["path", {
      d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",
      key: "l2t8xc"
    }],
    ["path", {
      d: "M16 17h4",
      key: "1dejxt"
    }],
    ["path", {
      d: "M4 13h4",
      key: "1bwh8b"
    }]
  ]
};
bh.node;
const ob = te(bh);
const gh = {
  name: "gamepad-2",
  size: 24,
  node: [
    ["line", {
      x1: "6",
      x2: "10",
      y1: "11",
      y2: "11",
      key: "1gktln"
    }],
    ["line", {
      x1: "8",
      x2: "8",
      y1: "9",
      y2: "13",
      key: "qnk9ow"
    }],
    ["line", {
      x1: "15",
      x2: "15.01",
      y1: "12",
      y2: "12",
      key: "krot7o"
    }],
    ["line", {
      x1: "18",
      x2: "18.01",
      y1: "10",
      y2: "10",
      key: "1lcuu1"
    }],
    ["path", {
      d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
      key: "mfqc10"
    }]
  ]
};
gh.node;
const ub = te(gh);
const yh = {
  name: "grip-vertical",
  size: 24,
  node: [
    ["circle", {
      cx: "9",
      cy: "12",
      r: "1",
      key: "1vctgf"
    }],
    ["circle", {
      cx: "9",
      cy: "5",
      r: "1",
      key: "hp0tcf"
    }],
    ["circle", {
      cx: "9",
      cy: "19",
      r: "1",
      key: "fkjjf6"
    }],
    ["circle", {
      cx: "15",
      cy: "12",
      r: "1",
      key: "1tmaij"
    }],
    ["circle", {
      cx: "15",
      cy: "5",
      r: "1",
      key: "19l28e"
    }],
    ["circle", {
      cx: "15",
      cy: "19",
      r: "1",
      key: "f4zoj3"
    }]
  ]
};
yh.node;
const vh = te(yh);
const jh = {
  name: "hash",
  size: 24,
  node: [
    ["line", {
      x1: "4",
      x2: "20",
      y1: "9",
      y2: "9",
      key: "4lhtct"
    }],
    ["line", {
      x1: "4",
      x2: "20",
      y1: "15",
      y2: "15",
      key: "vyu0kd"
    }],
    ["line", {
      x1: "10",
      x2: "8",
      y1: "3",
      y2: "21",
      key: "1ggp8o"
    }],
    ["line", {
      x1: "16",
      x2: "14",
      y1: "3",
      y2: "21",
      key: "weycgp"
    }]
  ]
};
jh.node;
const fb = te(jh);
const Nh = {
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
Nh.node;
const Hl = te(Nh);
const wh = {
  name: "link-2",
  size: 24,
  node: [
    ["path", {
      d: "M9 17H7A5 5 0 0 1 7 7h2",
      key: "8i5ue5"
    }],
    ["path", {
      d: "M15 7h2a5 5 0 1 1 0 10h-2",
      key: "1b9ql8"
    }],
    ["line", {
      x1: "8",
      x2: "16",
      y1: "12",
      y2: "12",
      key: "1jonct"
    }]
  ]
};
wh.node;
const db = te(wh);
const Sh = {
  name: "list-checks",
  size: 24,
  node: [
    ["path", {
      d: "M13 5h8",
      key: "a7qcls"
    }],
    ["path", {
      d: "M13 12h8",
      key: "h98zly"
    }],
    ["path", {
      d: "M13 19h8",
      key: "c3s6r1"
    }],
    ["path", {
      d: "m3 17 2 2 4-4",
      key: "1jhpwq"
    }],
    ["path", {
      d: "m3 7 2 2 4-4",
      key: "1obspn"
    }]
  ]
};
Sh.node;
const mb = te(Sh);
const kh = {
  name: "list-ordered",
  size: 24,
  node: [
    ["path", {
      d: "M11 5h10",
      key: "1cz7ny"
    }],
    ["path", {
      d: "M11 12h10",
      key: "1438ji"
    }],
    ["path", {
      d: "M11 19h10",
      key: "11t30w"
    }],
    ["path", {
      d: "M4 4h1v5",
      key: "10yrso"
    }],
    ["path", {
      d: "M4 9h2",
      key: "r1h2o0"
    }],
    ["path", {
      d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",
      key: "xtkcd5"
    }]
  ]
};
kh.node;
const co = te(kh);
const zh = {
  name: "lock-keyhole",
  size: 24,
  node: [
    ["circle", {
      cx: "12",
      cy: "16",
      r: "1",
      key: "1au0dj"
    }],
    ["rect", {
      x: "3",
      y: "10",
      width: "18",
      height: "12",
      rx: "2",
      key: "6s8ecr"
    }],
    ["path", {
      d: "M7 10V7a5 5 0 0 1 10 0v3",
      key: "1pqi11"
    }]
  ]
};
zh.node;
const ji = te(zh);
const Th = {
  name: "map",
  size: 24,
  node: [
    ["path", {
      d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
      key: "169xi5"
    }],
    ["path", {
      d: "M15 5.764v15",
      key: "1pn4in"
    }],
    ["path", {
      d: "M9 3.236v15",
      key: "1uimfh"
    }]
  ]
};
Th.node;
const hb = te(Th);
const Ah = {
  name: "message-square-quote",
  size: 24,
  node: [
    ["path", {
      d: "M14 14a2 2 0 0 0 2-2V8h-2",
      key: "1r06pg"
    }],
    ["path", {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }],
    ["path", {
      d: "M8 14a2 2 0 0 0 2-2V8H8",
      key: "1jzu5j"
    }]
  ]
};
Ah.node;
const pb = te(Ah);
const Eh = {
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
Eh.node;
const xb = te(Eh);
const Mh = {
  name: "pen-line",
  size: 24,
  node: [
    ["path", {
      d: "M13 21h8",
      key: "1jsn5i"
    }],
    ["path", {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }]
  ],
  aliases: ["edit-3"]
};
Mh.node;
const _h = te(Mh);
const Ch = {
  name: "play",
  size: 24,
  node: [
    ["path", {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }]
  ]
};
Ch.node;
const bb = te(Ch);
const Oh = {
  name: "plus",
  size: 24,
  node: [
    ["path", {
      d: "M5 12h14",
      key: "1ays0h"
    }],
    ["path", {
      d: "M12 5v14",
      key: "s699le"
    }]
  ]
};
Oh.node;
const ro = te(Oh);
const Dh = {
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
Dh.node;
const Rh = te(Dh);
const Uh = {
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
Uh.node;
const oo = te(Uh);
const Hh = {
  name: "scan-search",
  size: 24,
  node: [
    ["path", {
      d: "M3 7V5a2 2 0 0 1 2-2h2",
      key: "aa7l1z"
    }],
    ["path", {
      d: "M17 3h2a2 2 0 0 1 2 2v2",
      key: "4qcy5o"
    }],
    ["path", {
      d: "M21 17v2a2 2 0 0 1-2 2h-2",
      key: "6vwrx8"
    }],
    ["path", {
      d: "M7 21H5a2 2 0 0 1-2-2v-2",
      key: "ioqczr"
    }],
    ["circle", {
      cx: "12",
      cy: "12",
      r: "3",
      key: "1v7zrd"
    }],
    ["path", {
      d: "m16 16-1.9-1.9",
      key: "1dq9hf"
    }]
  ]
};
Hh.node;
const qh = te(Hh);
const Bh = {
  name: "search",
  size: 24,
  node: [
    ["path", {
      d: "m21 21-4.34-4.34",
      key: "14j7rj"
    }],
    ["circle", {
      cx: "11",
      cy: "11",
      r: "8",
      key: "4ej97u"
    }]
  ]
};
Bh.node;
const Fn = te(Bh);
const Yh = {
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
Yh.node;
const gb = te(Yh);
const Gh = {
  name: "signature",
  size: 24,
  node: [
    ["path", {
      d: "m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284",
      key: "y32ogt"
    }],
    ["path", {
      d: "M3 21h18",
      key: "itz85i"
    }]
  ]
};
Gh.node;
const yb = te(Gh);
const Lh = {
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
Lh.node;
const zi = te(Lh);
const Vh = {
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
Vh.node;
const Ni = te(Vh);
const Qh = {
  name: "table-2",
  size: 24,
  node: [
    ["path", {
      d: "M3 9h18",
      key: "1pudct"
    }],
    ["path", {
      d: "M9 3v18",
      key: "fh3hqa"
    }],
    ["rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      key: "h1oib"
    }]
  ]
};
Qh.node;
const Xh = te(Qh);
const Zh = {
  name: "target",
  size: 24,
  node: [
    ["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }],
    ["circle", {
      cx: "12",
      cy: "12",
      r: "6",
      key: "1vlfrh"
    }],
    ["circle", {
      cx: "12",
      cy: "12",
      r: "2",
      key: "1c9p78"
    }]
  ]
};
Zh.node;
const vb = te(Zh);
const Kh = {
  name: "tv",
  size: 24,
  node: [
    ["path", {
      d: "m17 2-5 5-5-5",
      key: "16satq"
    }],
    ["rect", {
      width: "20",
      height: "15",
      x: "2",
      y: "7",
      rx: "2",
      key: "1e6viu"
    }]
  ]
};
Kh.node;
const jb = te(Kh);
const Jh = {
  name: "user-round",
  size: 24,
  node: [
    ["circle", {
      cx: "12",
      cy: "8",
      r: "5",
      key: "1hypcn"
    }],
    ["path", {
      d: "M20 21a8 8 0 0 0-16 0",
      key: "rfgkzh"
    }]
  ],
  aliases: ["user-2"]
};
Jh.node;
const Nb = te(Jh);
const $h = {
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
$h.node;
const ql = te($h);

function Wh(r) {
  var f, d, o = "";
  if (typeof r == "string" || typeof r == "number") o += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var b = r.length;
      for (f = 0; f < b; f++) r[f] && (d = Wh(r[f])) && (o && (o += " "), o += d)
    } else
      for (d in r) r[d] && (o && (o += " "), o += d);
  return o
}

function wb() {
  for (var r, f, d = 0, o = "", b = arguments.length; d < b; d++)(r = arguments[d]) && (f = Wh(r)) && (o && (o += " "), o += f);
  return o
}
const Sb = (r, f) => {
    const d = new Array(r.length + f.length);
    for (let o = 0; o < r.length; o++) d[o] = r[o];
    for (let o = 0; o < f.length; o++) d[r.length + o] = f[o];
    return d
  },
  kb = (r, f) => ({
    classGroupId: r,
    validator: f
  }),
  Fh = (r = new Map, f = null, d) => ({
    nextPart: r,
    validators: f,
    classGroupId: d
  }),
  Si = "-",
  _m = [],
  zb = "arbitrary..",
  Tb = r => {
    const f = Eb(r),
      {
        conflictingClassGroups: d,
        conflictingClassGroupModifiers: o
      } = r;
    return {
      getClassGroupId: y => {
        if (y.startsWith("[") && y.endsWith("]")) return Ab(y);
        const w = y.split(Si),
          v = w[0] === "" && w.length > 1 ? 1 : 0;
        return Ih(w, v, f)
      },
      getConflictingClassGroupIds: (y, w) => {
        if (w) {
          const v = o[y],
            h = d[y];
          return v ? h ? Sb(h, v) : v : h || _m
        }
        return d[y] || _m
      }
    }
  },
  Ih = (r, f, d) => {
    if (r.length - f === 0) return d.classGroupId;
    const b = r[f],
      k = d.nextPart.get(b);
    if (k) {
      const h = Ih(r, f + 1, k);
      if (h) return h
    }
    const y = d.validators;
    if (y === null) return;
    const w = f === 0 ? r.join(Si) : r.slice(f).join(Si),
      v = y.length;
    for (let h = 0; h < v; h++) {
      const D = y[h];
      if (D.validator(w)) return D.classGroupId
    }
  },
  Ab = r => r.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
    const f = r.slice(1, -1),
      d = f.indexOf(":"),
      o = f.slice(0, d);
    return o ? zb + o : void 0
  })(),
  Eb = r => {
    const {
      theme: f,
      classGroups: d
    } = r;
    return Mb(d, f)
  },
  Mb = (r, f) => {
    const d = Fh();
    for (const o in r) {
      const b = r[o];
      uo(b, d, o, f)
    }
    return d
  },
  uo = (r, f, d, o) => {
    const b = r.length;
    for (let k = 0; k < b; k++) {
      const y = r[k];
      _b(y, f, d, o)
    }
  },
  _b = (r, f, d, o) => {
    if (typeof r == "string") {
      Cb(r, f, d);
      return
    }
    if (typeof r == "function") {
      Ob(r, f, d, o);
      return
    }
    Db(r, f, d, o)
  },
  Cb = (r, f, d) => {
    const o = r === "" ? f : Ph(f, r);
    o.classGroupId = d
  },
  Ob = (r, f, d, o) => {
    if (Rb(r)) {
      uo(r(o), f, d, o);
      return
    }
    f.validators === null && (f.validators = []), f.validators.push(kb(d, r))
  },
  Db = (r, f, d, o) => {
    const b = Object.entries(r),
      k = b.length;
    for (let y = 0; y < k; y++) {
      const [w, v] = b[y];
      uo(v, Ph(f, w), d, o)
    }
  },
  Ph = (r, f) => {
    let d = r;
    const o = f.split(Si),
      b = o.length;
    for (let k = 0; k < b; k++) {
      const y = o[k];
      let w = d.nextPart.get(y);
      w || (w = Fh(), d.nextPart.set(y, w)), d = w
    }
    return d
  },
  Rb = r => "isThemeGetter" in r && r.isThemeGetter === !0,
  Ub = r => {
    if (r < 1) return {
      get: () => {},
      set: () => {}
    };
    let f = 0,
      d = Object.create(null),
      o = Object.create(null);
    const b = (k, y) => {
      d[k] = y, f++, f > r && (f = 0, o = d, d = Object.create(null))
    };
    return {
      get(k) {
        let y = d[k];
        if (y !== void 0) return y;
        if ((y = o[k]) !== void 0) return b(k, y), y
      },
      set(k, y) {
        k in d ? d[k] = y : b(k, y)
      }
    }
  },
  no = "!",
  Cm = ":",
  Hb = [],
  Om = (r, f, d, o, b) => ({
    modifiers: r,
    hasImportantModifier: f,
    baseClassName: d,
    maybePostfixModifierPosition: o,
    isExternal: b
  }),
  qb = r => {
    const {
      prefix: f,
      experimentalParseClassName: d
    } = r;
    let o = b => {
      const k = [];
      let y = 0,
        w = 0,
        v = 0,
        h;
      const D = b.length;
      for (let V = 0; V < D; V++) {
        const Y = b[V];
        if (y === 0 && w === 0) {
          if (Y === Cm) {
            k.push(b.slice(v, V)), v = V + 1;
            continue
          }
          if (Y === "/") {
            h = V;
            continue
          }
        }
        Y === "[" ? y++ : Y === "]" ? y-- : Y === "(" ? w++ : Y === ")" && w--
      }
      const A = k.length === 0 ? b : b.slice(v);
      let O = A,
        G = !1;
      A.endsWith(no) ? (O = A.slice(0, -1), G = !0) : A.startsWith(no) && (O = A.slice(1), G = !0);
      const H = h && h > v ? h - v : void 0;
      return Om(k, G, O, H)
    };
    if (f) {
      const b = f + Cm,
        k = o;
      o = y => y.startsWith(b) ? k(y.slice(b.length)) : Om(Hb, !1, y, void 0, !0)
    }
    if (d) {
      const b = o;
      o = k => d({
        className: k,
        parseClassName: b
      })
    }
    return o
  },
  Bb = r => {
    const f = new Map;
    return r.orderSensitiveModifiers.forEach((d, o) => {
      f.set(d, 1e6 + o)
    }), d => {
      const o = [];
      let b = [];
      for (let k = 0; k < d.length; k++) {
        const y = d[k],
          w = y[0] === "[",
          v = f.has(y);
        w || v ? (b.length > 0 && (b.sort(), o.push(...b), b = []), o.push(y)) : b.push(y)
      }
      return b.length > 0 && (b.sort(), o.push(...b)), o
    }
  },
  Yb = r => ({
    cache: Ub(r.cacheSize),
    parseClassName: qb(r),
    sortModifiers: Bb(r),
    ...Tb(r)
  }),
  Gb = /\s+/,
  Lb = (r, f) => {
    const {
      parseClassName: d,
      getClassGroupId: o,
      getConflictingClassGroupIds: b,
      sortModifiers: k
    } = f, y = [], w = r.trim().split(Gb);
    let v = "";
    for (let h = w.length - 1; h >= 0; h -= 1) {
      const D = w[h],
        {
          isExternal: A,
          modifiers: O,
          hasImportantModifier: G,
          baseClassName: H,
          maybePostfixModifierPosition: V
        } = d(D);
      if (A) {
        v = D + (v.length > 0 ? " " + v : v);
        continue
      }
      let Y = !!V,
        R = o(Y ? H.substring(0, V) : H);
      if (!R) {
        if (!Y) {
          v = D + (v.length > 0 ? " " + v : v);
          continue
        }
        if (R = o(H), !R) {
          v = D + (v.length > 0 ? " " + v : v);
          continue
        }
        Y = !1
      }
      const W = O.length === 0 ? "" : O.length === 1 ? O[0] : k(O).join(":"),
        F = G ? W + no : W,
        le = F + R;
      if (y.indexOf(le) > -1) continue;
      y.push(le);
      const xe = b(R, Y);
      for (let Ae = 0; Ae < xe.length; ++Ae) {
        const se = xe[Ae];
        y.push(F + se)
      }
      v = D + (v.length > 0 ? " " + v : v)
    }
    return v
  },
  Vb = (...r) => {
    let f = 0,
      d, o, b = "";
    for (; f < r.length;)(d = r[f++]) && (o = ep(d)) && (b && (b += " "), b += o);
    return b
  },
  ep = r => {
    if (typeof r == "string") return r;
    let f, d = "";
    for (let o = 0; o < r.length; o++) r[o] && (f = ep(r[o])) && (d && (d += " "), d += f);
    return d
  },
  Qb = (r, ...f) => {
    let d, o, b, k;
    const y = v => {
        const h = f.reduce((D, A) => A(D), r());
        return d = Yb(h), o = d.cache.get, b = d.cache.set, k = w, w(v)
      },
      w = v => {
        const h = o(v);
        if (h) return h;
        const D = Lb(v, d);
        return b(v, D), D
      };
    return k = y, (...v) => k(Vb(...v))
  },
  Xb = [],
  Ze = r => {
    const f = d => d[r] || Xb;
    return f.isThemeGetter = !0, f
  },
  tp = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  lp = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Zb = /^\d+\/\d+$/,
  Kb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Jb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  $b = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  Wb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Fb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ja = r => Zb.test(r),
  ue = r => !!r && !Number.isNaN(Number(r)),
  Rl = r => !!r && Number.isInteger(Number(r)),
  Pr = r => r.endsWith("%") && ue(r.slice(0, -1)),
  cl = r => Kb.test(r),
  Ib = () => !0,
  Pb = r => Jb.test(r) && !$b.test(r),
  ap = () => !1,
  e1 = r => Wb.test(r),
  t1 = r => Fb.test(r),
  l1 = r => !K(r) && !J(r),
  a1 = r => Fa(r, ip, ap),
  K = r => tp.test(r),
  ia = r => Fa(r, cp, Pb),
  eo = r => Fa(r, r1, ue),
  Dm = r => Fa(r, np, ap),
  n1 = r => Fa(r, sp, t1),
  gi = r => Fa(r, rp, e1),
  J = r => lp.test(r),
  Jn = r => Ia(r, cp),
  s1 = r => Ia(r, o1),
  Rm = r => Ia(r, np),
  i1 = r => Ia(r, ip),
  c1 = r => Ia(r, sp),
  yi = r => Ia(r, rp, !0),
  Fa = (r, f, d) => {
    const o = tp.exec(r);
    return o ? o[1] ? f(o[1]) : d(o[2]) : !1
  },
  Ia = (r, f, d = !1) => {
    const o = lp.exec(r);
    return o ? o[1] ? f(o[1]) : d : !1
  },
  np = r => r === "position" || r === "percentage",
  sp = r => r === "image" || r === "url",
  ip = r => r === "length" || r === "size" || r === "bg-size",
  cp = r => r === "length",
  r1 = r => r === "number",
  o1 = r => r === "family-name",
  rp = r => r === "shadow",
  u1 = () => {
    const r = Ze("color"),
      f = Ze("font"),
      d = Ze("text"),
      o = Ze("font-weight"),
      b = Ze("tracking"),
      k = Ze("leading"),
      y = Ze("breakpoint"),
      w = Ze("container"),
      v = Ze("spacing"),
      h = Ze("radius"),
      D = Ze("shadow"),
      A = Ze("inset-shadow"),
      O = Ze("text-shadow"),
      G = Ze("drop-shadow"),
      H = Ze("blur"),
      V = Ze("perspective"),
      Y = Ze("aspect"),
      R = Ze("ease"),
      W = Ze("animate"),
      F = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
      le = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
      xe = () => [...le(), J, K],
      Ae = () => ["auto", "hidden", "clip", "visible", "scroll"],
      se = () => ["auto", "contain", "none"],
      Q = () => [J, K, v],
      be = () => [Ja, "full", "auto", ...Q()],
      _e = () => [Rl, "none", "subgrid", J, K],
      Ke = () => ["auto", {
        span: ["full", Rl, J, K]
      }, Rl, J, K],
      Qe = () => [Rl, "auto", J, K],
      Ut = () => ["auto", "min", "max", "fr", J, K],
      dt = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
      Je = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
      T = () => ["auto", ...Q()],
      B = () => [Ja, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...Q()],
      U = () => [r, J, K],
      ve = () => [...le(), Rm, Dm, {
        position: [J, K]
      }],
      Ne = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
      }],
      x = () => ["auto", "cover", "contain", i1, a1, {
        size: [J, K]
      }],
      _ = () => [Pr, Jn, ia],
      q = () => ["", "none", "full", h, J, K],
      L = () => ["", ue, Jn, ia],
      ne = () => ["solid", "dashed", "dotted", "double"],
      oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
      ae = () => [ue, Pr, Rm, Dm],
      $e = () => ["", "none", H, J, K],
      Me = () => ["none", ue, J, K],
      Ht = () => ["none", ue, J, K],
      rl = () => [ue, J, K],
      ol = () => [Ja, "full", ...Q()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [cl],
        breakpoint: [cl],
        color: [Ib],
        container: [cl],
        "drop-shadow": [cl],
        ease: ["in", "out", "in-out"],
        font: [l1],
        "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
        "inset-shadow": [cl],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
        radius: [cl],
        shadow: [cl],
        spacing: ["px", ue],
        text: [cl],
        "text-shadow": [cl],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
      },
      classGroups: {
        aspect: [{
          aspect: ["auto", "square", Ja, K, J, Y]
        }],
        container: ["container"],
        columns: [{
          columns: [ue, K, J, w]
        }],
        "break-after": [{
          "break-after": F()
        }],
        "break-before": [{
          "break-before": F()
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
          object: xe()
        }],
        overflow: [{
          overflow: Ae()
        }],
        "overflow-x": [{
          "overflow-x": Ae()
        }],
        "overflow-y": [{
          "overflow-y": Ae()
        }],
        overscroll: [{
          overscroll: se()
        }],
        "overscroll-x": [{
          "overscroll-x": se()
        }],
        "overscroll-y": [{
          "overscroll-y": se()
        }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{
          inset: be()
        }],
        "inset-x": [{
          "inset-x": be()
        }],
        "inset-y": [{
          "inset-y": be()
        }],
        start: [{
          start: be()
        }],
        end: [{
          end: be()
        }],
        top: [{
          top: be()
        }],
        right: [{
          right: be()
        }],
        bottom: [{
          bottom: be()
        }],
        left: [{
          left: be()
        }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{
          z: [Rl, "auto", J, K]
        }],
        basis: [{
          basis: [Ja, "full", "auto", w, ...Q()]
        }],
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        "flex-wrap": [{
          flex: ["nowrap", "wrap", "wrap-reverse"]
        }],
        flex: [{
          flex: [ue, Ja, "auto", "initial", "none", K]
        }],
        grow: [{
          grow: ["", ue, J, K]
        }],
        shrink: [{
          shrink: ["", ue, J, K]
        }],
        order: [{
          order: [Rl, "first", "last", "none", J, K]
        }],
        "grid-cols": [{
          "grid-cols": _e()
        }],
        "col-start-end": [{
          col: Ke()
        }],
        "col-start": [{
          "col-start": Qe()
        }],
        "col-end": [{
          "col-end": Qe()
        }],
        "grid-rows": [{
          "grid-rows": _e()
        }],
        "row-start-end": [{
          row: Ke()
        }],
        "row-start": [{
          "row-start": Qe()
        }],
        "row-end": [{
          "row-end": Qe()
        }],
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        "auto-cols": [{
          "auto-cols": Ut()
        }],
        "auto-rows": [{
          "auto-rows": Ut()
        }],
        gap: [{
          gap: Q()
        }],
        "gap-x": [{
          "gap-x": Q()
        }],
        "gap-y": [{
          "gap-y": Q()
        }],
        "justify-content": [{
          justify: [...dt(), "normal"]
        }],
        "justify-items": [{
          "justify-items": [...Je(), "normal"]
        }],
        "justify-self": [{
          "justify-self": ["auto", ...Je()]
        }],
        "align-content": [{
          content: ["normal", ...dt()]
        }],
        "align-items": [{
          items: [...Je(), {
            baseline: ["", "last"]
          }]
        }],
        "align-self": [{
          self: ["auto", ...Je(), {
            baseline: ["", "last"]
          }]
        }],
        "place-content": [{
          "place-content": dt()
        }],
        "place-items": [{
          "place-items": [...Je(), "baseline"]
        }],
        "place-self": [{
          "place-self": ["auto", ...Je()]
        }],
        p: [{
          p: Q()
        }],
        px: [{
          px: Q()
        }],
        py: [{
          py: Q()
        }],
        ps: [{
          ps: Q()
        }],
        pe: [{
          pe: Q()
        }],
        pt: [{
          pt: Q()
        }],
        pr: [{
          pr: Q()
        }],
        pb: [{
          pb: Q()
        }],
        pl: [{
          pl: Q()
        }],
        m: [{
          m: T()
        }],
        mx: [{
          mx: T()
        }],
        my: [{
          my: T()
        }],
        ms: [{
          ms: T()
        }],
        me: [{
          me: T()
        }],
        mt: [{
          mt: T()
        }],
        mr: [{
          mr: T()
        }],
        mb: [{
          mb: T()
        }],
        ml: [{
          ml: T()
        }],
        "space-x": [{
          "space-x": Q()
        }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{
          "space-y": Q()
        }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{
          size: B()
        }],
        w: [{
          w: [w, "screen", ...B()]
        }],
        "min-w": [{
          "min-w": [w, "screen", "none", ...B()]
        }],
        "max-w": [{
          "max-w": [w, "screen", "none", "prose", {
            screen: [y]
          }, ...B()]
        }],
        h: [{
          h: ["screen", "lh", ...B()]
        }],
        "min-h": [{
          "min-h": ["screen", "lh", "none", ...B()]
        }],
        "max-h": [{
          "max-h": ["screen", "lh", ...B()]
        }],
        "font-size": [{
          text: ["base", d, Jn, ia]
        }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{
          font: [o, J, eo]
        }],
        "font-stretch": [{
          "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Pr, K]
        }],
        "font-family": [{
          font: [s1, K, f]
        }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{
          tracking: [b, J, K]
        }],
        "line-clamp": [{
          "line-clamp": [ue, "none", J, eo]
        }],
        leading: [{
          leading: [k, ...Q()]
        }],
        "list-image": [{
          "list-image": ["none", J, K]
        }],
        "list-style-position": [{
          list: ["inside", "outside"]
        }],
        "list-style-type": [{
          list: ["disc", "decimal", "none", J, K]
        }],
        "text-alignment": [{
          text: ["left", "center", "right", "justify", "start", "end"]
        }],
        "placeholder-color": [{
          placeholder: U()
        }],
        "text-color": [{
          text: U()
        }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{
          decoration: [...ne(), "wavy"]
        }],
        "text-decoration-thickness": [{
          decoration: [ue, "from-font", "auto", J, ia]
        }],
        "text-decoration-color": [{
          decoration: U()
        }],
        "underline-offset": [{
          "underline-offset": [ue, "auto", J, K]
        }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{
          text: ["wrap", "nowrap", "balance", "pretty"]
        }],
        indent: [{
          indent: Q()
        }],
        "vertical-align": [{
          align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", J, K]
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
          content: ["none", J, K]
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
          bg: ve()
        }],
        "bg-repeat": [{
          bg: Ne()
        }],
        "bg-size": [{
          bg: x()
        }],
        "bg-image": [{
          bg: ["none", {
            linear: [{
              to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
            }, Rl, J, K],
            radial: ["", J, K],
            conic: [Rl, J, K]
          }, c1, n1]
        }],
        "bg-color": [{
          bg: U()
        }],
        "gradient-from-pos": [{
          from: _()
        }],
        "gradient-via-pos": [{
          via: _()
        }],
        "gradient-to-pos": [{
          to: _()
        }],
        "gradient-from": [{
          from: U()
        }],
        "gradient-via": [{
          via: U()
        }],
        "gradient-to": [{
          to: U()
        }],
        rounded: [{
          rounded: q()
        }],
        "rounded-s": [{
          "rounded-s": q()
        }],
        "rounded-e": [{
          "rounded-e": q()
        }],
        "rounded-t": [{
          "rounded-t": q()
        }],
        "rounded-r": [{
          "rounded-r": q()
        }],
        "rounded-b": [{
          "rounded-b": q()
        }],
        "rounded-l": [{
          "rounded-l": q()
        }],
        "rounded-ss": [{
          "rounded-ss": q()
        }],
        "rounded-se": [{
          "rounded-se": q()
        }],
        "rounded-ee": [{
          "rounded-ee": q()
        }],
        "rounded-es": [{
          "rounded-es": q()
        }],
        "rounded-tl": [{
          "rounded-tl": q()
        }],
        "rounded-tr": [{
          "rounded-tr": q()
        }],
        "rounded-br": [{
          "rounded-br": q()
        }],
        "rounded-bl": [{
          "rounded-bl": q()
        }],
        "border-w": [{
          border: L()
        }],
        "border-w-x": [{
          "border-x": L()
        }],
        "border-w-y": [{
          "border-y": L()
        }],
        "border-w-s": [{
          "border-s": L()
        }],
        "border-w-e": [{
          "border-e": L()
        }],
        "border-w-t": [{
          "border-t": L()
        }],
        "border-w-r": [{
          "border-r": L()
        }],
        "border-w-b": [{
          "border-b": L()
        }],
        "border-w-l": [{
          "border-l": L()
        }],
        "divide-x": [{
          "divide-x": L()
        }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{
          "divide-y": L()
        }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{
          border: [...ne(), "hidden", "none"]
        }],
        "divide-style": [{
          divide: [...ne(), "hidden", "none"]
        }],
        "border-color": [{
          border: U()
        }],
        "border-color-x": [{
          "border-x": U()
        }],
        "border-color-y": [{
          "border-y": U()
        }],
        "border-color-s": [{
          "border-s": U()
        }],
        "border-color-e": [{
          "border-e": U()
        }],
        "border-color-t": [{
          "border-t": U()
        }],
        "border-color-r": [{
          "border-r": U()
        }],
        "border-color-b": [{
          "border-b": U()
        }],
        "border-color-l": [{
          "border-l": U()
        }],
        "divide-color": [{
          divide: U()
        }],
        "outline-style": [{
          outline: [...ne(), "none", "hidden"]
        }],
        "outline-offset": [{
          "outline-offset": [ue, J, K]
        }],
        "outline-w": [{
          outline: ["", ue, Jn, ia]
        }],
        "outline-color": [{
          outline: U()
        }],
        shadow: [{
          shadow: ["", "none", D, yi, gi]
        }],
        "shadow-color": [{
          shadow: U()
        }],
        "inset-shadow": [{
          "inset-shadow": ["none", A, yi, gi]
        }],
        "inset-shadow-color": [{
          "inset-shadow": U()
        }],
        "ring-w": [{
          ring: L()
        }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{
          ring: U()
        }],
        "ring-offset-w": [{
          "ring-offset": [ue, ia]
        }],
        "ring-offset-color": [{
          "ring-offset": U()
        }],
        "inset-ring-w": [{
          "inset-ring": L()
        }],
        "inset-ring-color": [{
          "inset-ring": U()
        }],
        "text-shadow": [{
          "text-shadow": ["none", O, yi, gi]
        }],
        "text-shadow-color": [{
          "text-shadow": U()
        }],
        opacity: [{
          opacity: [ue, J, K]
        }],
        "mix-blend": [{
          "mix-blend": [...oe(), "plus-darker", "plus-lighter"]
        }],
        "bg-blend": [{
          "bg-blend": oe()
        }],
        "mask-clip": [{
          "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
        }, "mask-no-clip"],
        "mask-composite": [{
          mask: ["add", "subtract", "intersect", "exclude"]
        }],
        "mask-image-linear-pos": [{
          "mask-linear": [ue]
        }],
        "mask-image-linear-from-pos": [{
          "mask-linear-from": ae()
        }],
        "mask-image-linear-to-pos": [{
          "mask-linear-to": ae()
        }],
        "mask-image-linear-from-color": [{
          "mask-linear-from": U()
        }],
        "mask-image-linear-to-color": [{
          "mask-linear-to": U()
        }],
        "mask-image-t-from-pos": [{
          "mask-t-from": ae()
        }],
        "mask-image-t-to-pos": [{
          "mask-t-to": ae()
        }],
        "mask-image-t-from-color": [{
          "mask-t-from": U()
        }],
        "mask-image-t-to-color": [{
          "mask-t-to": U()
        }],
        "mask-image-r-from-pos": [{
          "mask-r-from": ae()
        }],
        "mask-image-r-to-pos": [{
          "mask-r-to": ae()
        }],
        "mask-image-r-from-color": [{
          "mask-r-from": U()
        }],
        "mask-image-r-to-color": [{
          "mask-r-to": U()
        }],
        "mask-image-b-from-pos": [{
          "mask-b-from": ae()
        }],
        "mask-image-b-to-pos": [{
          "mask-b-to": ae()
        }],
        "mask-image-b-from-color": [{
          "mask-b-from": U()
        }],
        "mask-image-b-to-color": [{
          "mask-b-to": U()
        }],
        "mask-image-l-from-pos": [{
          "mask-l-from": ae()
        }],
        "mask-image-l-to-pos": [{
          "mask-l-to": ae()
        }],
        "mask-image-l-from-color": [{
          "mask-l-from": U()
        }],
        "mask-image-l-to-color": [{
          "mask-l-to": U()
        }],
        "mask-image-x-from-pos": [{
          "mask-x-from": ae()
        }],
        "mask-image-x-to-pos": [{
          "mask-x-to": ae()
        }],
        "mask-image-x-from-color": [{
          "mask-x-from": U()
        }],
        "mask-image-x-to-color": [{
          "mask-x-to": U()
        }],
        "mask-image-y-from-pos": [{
          "mask-y-from": ae()
        }],
        "mask-image-y-to-pos": [{
          "mask-y-to": ae()
        }],
        "mask-image-y-from-color": [{
          "mask-y-from": U()
        }],
        "mask-image-y-to-color": [{
          "mask-y-to": U()
        }],
        "mask-image-radial": [{
          "mask-radial": [J, K]
        }],
        "mask-image-radial-from-pos": [{
          "mask-radial-from": ae()
        }],
        "mask-image-radial-to-pos": [{
          "mask-radial-to": ae()
        }],
        "mask-image-radial-from-color": [{
          "mask-radial-from": U()
        }],
        "mask-image-radial-to-color": [{
          "mask-radial-to": U()
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
          "mask-radial-at": le()
        }],
        "mask-image-conic-pos": [{
          "mask-conic": [ue]
        }],
        "mask-image-conic-from-pos": [{
          "mask-conic-from": ae()
        }],
        "mask-image-conic-to-pos": [{
          "mask-conic-to": ae()
        }],
        "mask-image-conic-from-color": [{
          "mask-conic-from": U()
        }],
        "mask-image-conic-to-color": [{
          "mask-conic-to": U()
        }],
        "mask-mode": [{
          mask: ["alpha", "luminance", "match"]
        }],
        "mask-origin": [{
          "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
        }],
        "mask-position": [{
          mask: ve()
        }],
        "mask-repeat": [{
          mask: Ne()
        }],
        "mask-size": [{
          mask: x()
        }],
        "mask-type": [{
          "mask-type": ["alpha", "luminance"]
        }],
        "mask-image": [{
          mask: ["none", J, K]
        }],
        filter: [{
          filter: ["", "none", J, K]
        }],
        blur: [{
          blur: $e()
        }],
        brightness: [{
          brightness: [ue, J, K]
        }],
        contrast: [{
          contrast: [ue, J, K]
        }],
        "drop-shadow": [{
          "drop-shadow": ["", "none", G, yi, gi]
        }],
        "drop-shadow-color": [{
          "drop-shadow": U()
        }],
        grayscale: [{
          grayscale: ["", ue, J, K]
        }],
        "hue-rotate": [{
          "hue-rotate": [ue, J, K]
        }],
        invert: [{
          invert: ["", ue, J, K]
        }],
        saturate: [{
          saturate: [ue, J, K]
        }],
        sepia: [{
          sepia: ["", ue, J, K]
        }],
        "backdrop-filter": [{
          "backdrop-filter": ["", "none", J, K]
        }],
        "backdrop-blur": [{
          "backdrop-blur": $e()
        }],
        "backdrop-brightness": [{
          "backdrop-brightness": [ue, J, K]
        }],
        "backdrop-contrast": [{
          "backdrop-contrast": [ue, J, K]
        }],
        "backdrop-grayscale": [{
          "backdrop-grayscale": ["", ue, J, K]
        }],
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [ue, J, K]
        }],
        "backdrop-invert": [{
          "backdrop-invert": ["", ue, J, K]
        }],
        "backdrop-opacity": [{
          "backdrop-opacity": [ue, J, K]
        }],
        "backdrop-saturate": [{
          "backdrop-saturate": [ue, J, K]
        }],
        "backdrop-sepia": [{
          "backdrop-sepia": ["", ue, J, K]
        }],
        "border-collapse": [{
          border: ["collapse", "separate"]
        }],
        "border-spacing": [{
          "border-spacing": Q()
        }],
        "border-spacing-x": [{
          "border-spacing-x": Q()
        }],
        "border-spacing-y": [{
          "border-spacing-y": Q()
        }],
        "table-layout": [{
          table: ["auto", "fixed"]
        }],
        caption: [{
          caption: ["top", "bottom"]
        }],
        transition: [{
          transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", J, K]
        }],
        "transition-behavior": [{
          transition: ["normal", "discrete"]
        }],
        duration: [{
          duration: [ue, "initial", J, K]
        }],
        ease: [{
          ease: ["linear", "initial", R, J, K]
        }],
        delay: [{
          delay: [ue, J, K]
        }],
        animate: [{
          animate: ["none", W, J, K]
        }],
        backface: [{
          backface: ["hidden", "visible"]
        }],
        perspective: [{
          perspective: [V, J, K]
        }],
        "perspective-origin": [{
          "perspective-origin": xe()
        }],
        rotate: [{
          rotate: Me()
        }],
        "rotate-x": [{
          "rotate-x": Me()
        }],
        "rotate-y": [{
          "rotate-y": Me()
        }],
        "rotate-z": [{
          "rotate-z": Me()
        }],
        scale: [{
          scale: Ht()
        }],
        "scale-x": [{
          "scale-x": Ht()
        }],
        "scale-y": [{
          "scale-y": Ht()
        }],
        "scale-z": [{
          "scale-z": Ht()
        }],
        "scale-3d": ["scale-3d"],
        skew: [{
          skew: rl()
        }],
        "skew-x": [{
          "skew-x": rl()
        }],
        "skew-y": [{
          "skew-y": rl()
        }],
        transform: [{
          transform: [J, K, "", "none", "gpu", "cpu"]
        }],
        "transform-origin": [{
          origin: xe()
        }],
        "transform-style": [{
          transform: ["3d", "flat"]
        }],
        translate: [{
          translate: ol()
        }],
        "translate-x": [{
          "translate-x": ol()
        }],
        "translate-y": [{
          "translate-y": ol()
        }],
        "translate-z": [{
          "translate-z": ol()
        }],
        "translate-none": ["translate-none"],
        accent: [{
          accent: U()
        }],
        appearance: [{
          appearance: ["none", "auto"]
        }],
        "caret-color": [{
          caret: U()
        }],
        "color-scheme": [{
          scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
        }],
        cursor: [{
          cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", J, K]
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
          "scroll-m": Q()
        }],
        "scroll-mx": [{
          "scroll-mx": Q()
        }],
        "scroll-my": [{
          "scroll-my": Q()
        }],
        "scroll-ms": [{
          "scroll-ms": Q()
        }],
        "scroll-me": [{
          "scroll-me": Q()
        }],
        "scroll-mt": [{
          "scroll-mt": Q()
        }],
        "scroll-mr": [{
          "scroll-mr": Q()
        }],
        "scroll-mb": [{
          "scroll-mb": Q()
        }],
        "scroll-ml": [{
          "scroll-ml": Q()
        }],
        "scroll-p": [{
          "scroll-p": Q()
        }],
        "scroll-px": [{
          "scroll-px": Q()
        }],
        "scroll-py": [{
          "scroll-py": Q()
        }],
        "scroll-ps": [{
          "scroll-ps": Q()
        }],
        "scroll-pe": [{
          "scroll-pe": Q()
        }],
        "scroll-pt": [{
          "scroll-pt": Q()
        }],
        "scroll-pr": [{
          "scroll-pr": Q()
        }],
        "scroll-pb": [{
          "scroll-pb": Q()
        }],
        "scroll-pl": [{
          "scroll-pl": Q()
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
          "will-change": ["auto", "scroll", "contents", "transform", J, K]
        }],
        fill: [{
          fill: ["none", ...U()]
        }],
        "stroke-w": [{
          stroke: [ue, Jn, ia, eo]
        }],
        stroke: [{
          stroke: ["none", ...U()]
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
  f1 = Qb(u1);

function P(...r) {
  return f1(wb(r))
}


const TTC_KEY = "tutorcall-scrambled-survey-v1";
function ttcLoad() {
  try {
    const x = JSON.parse(localStorage.getItem(TTC_KEY) || "{}");
    return x && typeof x === "object" ? x : {}
  } catch {
    return {}
  }
}
function ttcSave(patch) {
  const next = Object.assign({}, ttcLoad(), patch, {
    savedAt: Date.now()
  });
  try {
    localStorage.setItem(TTC_KEY, JSON.stringify(next))
  } catch {}
  return next
}
function ttcShuffle(ids) {
  const a = ids.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
function ttcNorm(s) {
  return String(s || "").toLowerCase().normalize("NFC").replace(/[’‘`]/g, "'").replace(/[—–]/g, "-").replace(/[^a-z0-9'"?.,\-\s]/g, " ").replace(/\s+/g, " ").trim()
}
function ttcIsQuestion(s) {
  const n = ttcNorm(s);
  if (!n) return false;
  if (n.includes("?")) return true;
  return /^(why|what|where|when|who|how|how many|did|do|does|is|are|was|were|can|could|would)\b/.test(n)
}
function ttcUse(key, initial) {
  const [v, set] = Z.useState(() => {
    const s = ttcLoad();
    if (s[key] !== undefined) return s[key];
    const val = typeof initial === "function" ? initial() : initial;
    ttcSave({
      [key]: val
    });
    return val
  });
  const setAndSave = Z.useCallback(next => {
    set(prev => {
      const val = typeof next === "function" ? next(prev) : next;
      ttcSave({
        [key]: val
      });
      return val
    })
  }, [key]);
  return [v, setAndSave]
}
function ttcResetConfirm() {
  if (confirm("Начать заново? Весь прогресс по уроку и домашним заданиям будет удалён.")) {
    try {
      localStorage.removeItem(TTC_KEY)
    } catch {}
    location.reload()
  }
}


function Um(r) {
  const f = Math.floor(r / 60),
    d = r % 60;
  return `${String(f).padStart(2,"0")}:${String(d).padStart(2,"0")}`
}
const d1 = [{
  href: "#briefing",
  label: "Briefing"
}, {
  href: "#evidence",
  label: "Evidence"
}, {
  href: "#investigation",
  label: "The case"
}, {
  href: "#report",
  label: "Report"
}];

function m1({
  timeLeft: r,
  running: f,
  progress: d,
  completed: o,
  onToggleTimer: b,
  onResetTimer: k,
  onOpenRules: y
}) {
  const w = r <= 300;
  return s.jsxs("header", {
    className: "no-print sticky top-0 z-40 border-b border-forest/10 bg-parchment-light/90 backdrop-blur-xl",
    children: [s.jsxs("div", {
      className: "mx-auto flex h-[68px] max-w-[1440px] items-center gap-3 px-4 sm:px-6 lg:h-[74px] lg:px-8",
      children: [s.jsxs("a", {
        href: "#top",
        className: "group flex shrink-0 items-center gap-2.5",
        "aria-label": "Field Notes, back to top",
        children: [s.jsxs("span", {
          className: "relative flex h-10 w-10 items-center justify-center rounded-xl bg-forest text-parchment-light shadow-sm transition-transform duration-300 group-hover:-rotate-3",
          children: [s.jsx(Fn, {
            className: "h-5 w-5",
            strokeWidth: 2.1
          }), s.jsx("span", {
            className: "absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-parchment-light bg-brass"
          })]
        }), s.jsxs("span", {
          className: "hidden leading-none sm:block",
          children: [s.jsx("span", {
            className: "block font-display text-[1.16rem] font-semibold tracking-[-0.03em] text-forest",
            children: "Field Notes"
          }), s.jsx("span", {
            className: "label-mono mt-1 block text-[0.52rem] tracking-[0.18em] text-forest/47",
            children: "Detective English"
          })]
        })]
      }), s.jsx("span", {
        className: "mx-2 hidden h-7 w-px bg-forest/12 xl:block"
      }), s.jsx("nav", {
        "aria-label": "Lesson sections",
        className: "hidden items-center gap-1 xl:flex",
        children: d1.map(v => s.jsx("a", {
          href: v.href,
          className: "rounded-full px-3 py-2 text-[0.74rem] font-bold text-forest/58 transition-colors hover:bg-forest/[0.055] hover:text-forest",
          children: v.label
        }, v.href))
      }), s.jsxs("div", {
        className: "ml-auto flex items-center gap-2",
        children: [s.jsxs("span", {
          className: "label-mono mr-1 hidden text-[0.55rem] text-forest/45 lg:inline",
          children: ["Case ", o, "/5"]
        }), s.jsxs("div", {
          className: P("flex h-9 items-center rounded-full border bg-parchment-light/70 pl-2.5 pr-1 transition-colors", w ? "border-clay/35 text-clay" : "border-forest/15 text-forest"),
          "aria-label": `Lesson timer ${Um(r)} remaining`,
          children: [s.jsx(Wn, {
            className: "mr-1.5 h-3.5 w-3.5",
            strokeWidth: 2
          }), s.jsx("span", {
            className: "font-mono text-[0.74rem] font-semibold tabular-nums",
            role: "timer",
            "aria-live": "off",
            children: Um(r)
          }), s.jsx("button", {
            type: "button",
            onClick: b,
            className: "ml-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-forest text-parchment-light transition-colors hover:bg-forest-deep",
            "aria-label": f ? "Pause lesson timer" : "Start lesson timer",
            children: f ? s.jsx(xb, {
              className: "h-3 w-3 fill-current"
            }) : s.jsx(bb, {
              className: "ml-0.5 h-3 w-3 fill-current"
            })
          }), s.jsx("button", {
            type: "button",
            onClick: k,
            className: "hidden h-7 w-7 items-center justify-center rounded-full text-forest/55 transition-colors hover:bg-forest/[0.06] hover:text-forest sm:flex",
            "aria-label": "Reset lesson timer to 45 minutes",
            children: s.jsx(oo, {
              className: "h-3.5 w-3.5"
            })
          })]
        }), s.jsxs("button", {
          type: "button",
          onClick: y,
          className: "btn btn-brass btn-sm sm:min-h-[2.35rem] sm:px-4",
          children: [s.jsx(oa, {
            className: "h-4 w-4",
            strokeWidth: 2.2
          }), s.jsx("span", {
            className: "hidden sm:inline",
            children: "Rules / Help"
          }), s.jsx("span", {
            className: "sm:hidden",
            children: "Help"
          })]
        }), s.jsx("button", {
          type: "button",
          onClick: ttcResetConfirm,
          className: "btn btn-light btn-sm sm:min-h-[2.35rem] sm:px-3",
          "aria-label": "Начать заново, удалить весь прогресс",
          children: "↺ Начать заново"
        })]
      })]
    }), s.jsx("div", {
      className: "relative h-[3px] bg-forest/[0.07]",
      "aria-hidden": "true",
      children: s.jsx("div", {
        className: "absolute inset-y-0 left-0 bg-gradient-to-r from-forest-soft via-brass to-brass-light transition-[width] duration-700 ease-out",
        style: {
          width: `${d}%`
        }
      })
    }), s.jsxs("span", {
      className: "sr-only",
      "aria-live": "polite",
      children: ["Case file ", d, "% restored."]
    })]
  })
}

function h1({
  onStart: r,
  onOpenRules: f
}) {
  return s.jsxs("section", {
    id: "top",
    className: "relative isolate overflow-hidden rounded-[26px] bg-forest text-parchment-light shadow-[0_24px_70px_-40px_rgba(13,32,26,0.8)] sm:rounded-[32px]",
    "aria-labelledby": "lesson-title",
    children: [s.jsxs("div", {
      className: "pointer-events-none absolute inset-0 -z-10 opacity-30",
      children: [s.jsx("div", {
        className: "absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-brass/20 blur-3xl"
      }), s.jsx("div", {
        className: "absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-sage/20 blur-3xl"
      }), s.jsx("div", {
        className: "absolute inset-0 opacity-[0.13]",
        style: {
          backgroundImage: "linear-gradient(rgba(244,239,228,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(244,239,228,0.22) 1px, transparent 1px)",
          backgroundSize: "58px 58px",
          maskImage: "linear-gradient(105deg, black 0%, transparent 62%)"
        }
      })]
    }), s.jsxs("div", {
      className: "grid lg:grid-cols-[1.08fr_0.92fr]",
      children: [s.jsxs("div", {
        className: "relative z-10 flex flex-col justify-between px-5 pb-7 pt-7 sm:px-9 sm:pb-9 sm:pt-9 lg:px-11 lg:py-11 xl:px-14 xl:py-12",
        children: [s.jsxs("div", {
          children: [s.jsxs("div", {
            className: "mb-7 flex flex-wrap items-center gap-2.5",
            children: [s.jsxs("span", {
              className: "label-mono inline-flex items-center gap-2 rounded-full border border-parchment/20 bg-parchment/[0.06] px-3 py-1.5 text-[0.55rem] text-parchment/75",
              children: [s.jsx("span", {
                className: "h-1.5 w-1.5 rounded-full bg-brass"
              }), "Academy Stars 3"]
            }), s.jsx("span", {
              className: "label-mono text-[0.55rem] text-parchment/40",
              children: "Unit 2 · Lesson 8"
            })]
          }), s.jsxs("p", {
            className: "label-mono mb-4 flex items-center gap-2 text-[0.58rem] text-brass",
            children: [s.jsx("span", {
              className: "h-px w-7 bg-brass/70"
            }), "Case file no. 021 / A missing survey"]
          }), s.jsxs("h1", {
            id: "lesson-title",
            className: "max-w-xl text-[clamp(2.65rem,5vw,4.45rem)] leading-[0.94] tracking-[-0.045em] text-parchment-light",
            children: ["The Case of the", " ", s.jsxs("span", {
              className: "relative inline-block font-display italic text-brass",
              children: ["Scrambled", s.jsx("svg", {
                "aria-hidden": "true",
                viewBox: "0 0 280 14",
                className: "absolute -bottom-1 left-0 w-full text-brass/55",
                preserveAspectRatio: "none",
                children: s.jsx("path", {
                  d: "M2 9C58 2 142 2 278 7",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "3",
                  strokeLinecap: "round"
                })
              })]
            }), " ", "Survey."]
          }), s.jsx("p", {
            className: "mt-6 max-w-[30rem] text-[0.9rem] leading-[1.7] text-parchment/68 sm:text-[0.96rem]",
            children: "Class 3B answered a survey about free time. Then the evidence scrambled. Read the table, check the numbers, and rebuild every missing finding before the file goes cold."
          })]
        }), s.jsxs("div", {
          className: "mt-8",
          children: [s.jsxs("div", {
            className: "flex flex-wrap items-center gap-x-5 gap-y-2.5 border-y border-parchment/12 py-3.5",
            children: [s.jsxs("span", {
              className: "flex items-center gap-2 text-[0.7rem] font-semibold text-parchment/65",
              children: [s.jsx(Wn, {
                className: "h-3.5 w-3.5 text-brass"
              }), "45-minute case"]
            }), s.jsxs("span", {
              className: "flex items-center gap-2 text-[0.7rem] font-semibold text-parchment/65",
              children: [s.jsx(Nb, {
                className: "h-3.5 w-3.5 text-brass"
              }), "Solo detective"]
            }), s.jsxs("span", {
              className: "flex items-center gap-2 text-[0.7rem] font-semibold text-parchment/65",
              children: [s.jsx(ao, {
                className: "h-3.5 w-3.5 text-brass"
              }), "A2 English"]
            })]
          }), s.jsxs("div", {
            className: "mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap",
            children: [s.jsxs("button", {
              type: "button",
              onClick: r,
              className: "btn btn-brass group",
              children: ["Start the investigation", s.jsx(ki, {
                className: "h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
              })]
            }), s.jsxs("button", {
              type: "button",
              onClick: f,
              className: "btn btn-outline-light",
              children: [s.jsx(oa, {
                className: "h-4 w-4"
              }), "Open detective notes"]
            })]
          }), s.jsxs("p", {
            className: "mt-4 flex items-center gap-2 font-mono text-[0.58rem] uppercase tracking-[0.08em] text-parchment/38",
            children: [s.jsx(gb, {
              className: "h-3.5 w-3.5"
            }), "Rules are available at any point in the lesson"]
          })]
        })]
      }), s.jsxs("div", {
        className: "relative min-h-[305px] overflow-hidden sm:min-h-[380px] lg:min-h-[600px]",
        children: [s.jsx("img", {
          src: "./images/case-cover.jpg",
          alt: "A young detective examines a glowing holographic survey table with a magnifying glass in a dim study.",
          className: "absolute inset-0 h-full w-full object-cover object-[center_42%]",
          loading: "eager",
          fetchPriority: "high"
        }), s.jsx("div", {
          className: "absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/10 to-transparent lg:bg-gradient-to-r lg:from-forest lg:via-forest/20 lg:to-transparent"
        }), s.jsx("div", {
          className: "absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-forest-deep/90 to-transparent"
        }), s.jsxs("div", {
          className: "absolute left-4 top-4 flex items-center gap-2 rounded-full border border-parchment/20 bg-forest-deep/55 px-3 py-1.5 backdrop-blur-md sm:left-5 sm:top-5",
          children: [s.jsx("span", {
            className: "h-1.5 w-1.5 animate-pulse rounded-full bg-[#e1b756]"
          }), s.jsx("span", {
            className: "label-mono text-[0.52rem] text-parchment/80",
            children: "Exhibit A · Recovered"
          })]
        }), s.jsxs("div", {
          className: "floaty absolute right-4 top-[30%] hidden w-[112px] rounded-[4px] border border-forest/10 bg-[#efe4cc] p-3 text-forest shadow-xl sm:block xl:right-6",
          style: {
            "--float-rotate": "4deg"
          },
          children: [s.jsx("div", {
            className: "mb-2 h-1 w-7 bg-forest/50"
          }), s.jsx("p", {
            className: "font-display text-[1rem] leading-none",
            children: "Case 021"
          }), s.jsx("p", {
            className: "mt-1.5 font-mono text-[0.46rem] uppercase tracking-[0.09em] text-forest/55",
            children: "Leisure habits · 3B"
          }), s.jsx("span", {
            className: "absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brass text-forest",
            children: s.jsx(ao, {
              className: "h-3 w-3"
            })
          })]
        }), s.jsxs("div", {
          className: "absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-5 sm:left-5 sm:right-5",
          children: [s.jsx("div", {
            className: "rounded-2xl border border-parchment/16 bg-forest-deep/65 px-4 py-3 backdrop-blur-md",
            children: s.jsxs("div", {
              className: "flex items-baseline gap-2.5",
              children: [s.jsx("span", {
                className: "font-display text-[2.3rem] leading-none text-parchment-light",
                children: "21"
              }), s.jsxs("div", {
                children: [s.jsx("p", {
                  className: "font-mono text-[0.55rem] uppercase tracking-[0.11em] text-brass",
                  children: "Witnesses"
                }), s.jsx("p", {
                  className: "mt-0.5 text-[0.66rem] font-semibold text-parchment/60",
                  children: "pupils surveyed"
                })]
              })]
            })
          }), s.jsx("span", {
            className: "stamp stamp-double hidden text-brass/85 sm:flex",
            children: "Classified"
          })]
        })]
      })]
    })]
  })
}

function Bl({
  children: r,
  className: f,
  delay: d = 0
}) {
  const o = Z.useRef(null),
    [b, k] = Z.useState(!1);
  return Z.useEffect(() => {
    const y = o.current;
    if (!y) return;
    if (typeof IntersectionObserver > "u") {
      k(!0);
      return
    }
    const w = new IntersectionObserver(v => {
      v.forEach(h => {
        h.isIntersecting && (k(!0), w.disconnect())
      })
    }, {
      threshold: .01,
      rootMargin: "80px 0px 80px 0px"
    });
    return w.observe(y), () => w.disconnect()
  }, []), s.jsx("div", {
    ref: o,
    className: P("reveal", b && "is-visible", f),
    style: {
      transitionDelay: `${d}ms`
    },
    children: r
  })
}

function In({
  id: r,
  index: f,
  kicker: d,
  title: o,
  description: b,
  right: k,
  dark: y = !1
}) {
  return s.jsxs("div", {
    className: "mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end",
    children: [s.jsxs("div", {
      className: "max-w-2xl",
      children: [s.jsxs("div", {
        className: P("label-mono mb-3 flex items-center gap-2.5", y ? "text-brass-light/80" : "text-forest/55"),
        children: [s.jsx("span", {
          className: P("inline-flex h-6 min-w-6 items-center justify-center rounded-full border px-1.5 text-[0.58rem]", y ? "border-brass/40 text-brass" : "border-forest/20 text-forest/70"),
          children: f
        }), s.jsx("span", {
          className: "h-px w-5 bg-current opacity-40"
        }), d]
      }), s.jsx("h2", {
        id: r,
        className: P("text-[clamp(2rem,3.8vw,3.1rem)] leading-[1.02] tracking-[-0.035em]", y ? "text-parchment-light" : "text-forest"),
        children: o
      }), b ? s.jsx("p", {
        className: P("mt-3 max-w-xl text-[0.9rem] leading-relaxed", y ? "text-parchment/65" : "text-forest/63"),
        children: b
      }) : null]
    }), k ? s.jsx("div", {
      className: "shrink-0",
      children: k
    }) : null]
  })
}

function fo({
  complete: r,
  number: f,
  size: d = "md",
  className: o
}) {
  const b = {
    sm: "h-5 w-5 text-[0.6rem]",
    md: "h-7 w-7 text-[0.68rem]",
    lg: "h-10 w-10 text-sm"
  };
  return s.jsx("span", {
    "aria-hidden": "true",
    className: P("flex shrink-0 items-center justify-center rounded-full border font-mono font-semibold transition-colors", r ? "border-forest bg-forest text-parchment-light" : "border-forest/18 bg-parchment-light text-forest/50", b[d], o),
    children: r ? s.jsx(De, {
      className: "h-3/5 w-3/5",
      strokeWidth: 2.6
    }) : f
  })
}

function p1({
  complete: r,
  locked: f = !1,
  className: d
}) {
  return s.jsxs("span", {
    className: P("label-mono inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.58rem]", r ? "border-forest/15 bg-forest/[0.06] text-forest" : f ? "border-forest/10 bg-transparent text-forest/40" : "border-brass/35 bg-brass-light/35 text-forest/65", d),
    children: [r ? s.jsx(De, {
      className: "h-3 w-3",
      strokeWidth: 2.7
    }) : f ? s.jsx(ji, {
      className: "h-2.5 w-2.5"
    }) : s.jsx("span", {
      className: "h-1.5 w-1.5 rounded-full bg-brass"
    }), r ? "Checkpoint cleared" : f ? "Sealed" : "Open"]
  })
}
const x1 = [{
  label: "The situation",
  icon: rb,
  title: "The evidence got scrambled.",
  body: "The results of a class survey about free time are scattered. The pupils' answers are still in the table, but the written findings have disappeared.",
  footer: "Exhibit A is your primary source."
}, {
  label: "Your mission",
  icon: vb,
  title: "Restore all seven findings.",
  body: "Read rows and columns, check the totals, and write complete sentences. Clear five checkpoints to rebuild the final case report.",
  footer: "Every answer must be proved by the table."
}, {
  label: "The method",
  icon: co,
  title: "Count. Check. Sequence.",
  body: "Find the activity, find the frequency, then read the number. Add a row to check the class total, and arrange the facts into a logical report.",
  footer: "Soft landing: wrong answers can be retried."
}];

function b1({
  onOpenRules: r,
  completed: f
}) {
  return s.jsxs("section", {
    id: "briefing",
    className: "scroll-mt-28 pt-12 sm:pt-14",
    "aria-labelledby": "briefing-heading",
    children: [s.jsx(In, {
      id: "briefing-heading",
      index: "01",
      kicker: "The briefing · What we know · 5 min",
      title: s.jsxs(s.Fragment, {
        children: ["A normal class survey.", s.jsx("br", {
          className: "hidden sm:block"
        }), " ", s.jsx("em", {
          className: "italic text-forest/55",
          children: "One unusual problem."
        })]
      }),
      description: "You are the lead detective. The class has 21 pupils, four free-time activities, and three possible answers. The table has the truth — your job is to make it speak.",
      right: s.jsxs("div", {
        className: "flex items-center gap-2 rounded-full border border-forest/12 bg-parchment-light/70 px-3.5 py-2 text-[0.7rem] font-bold text-forest/65",
        children: [s.jsx("span", {
          className: "h-2 w-2 rounded-full bg-brass"
        }), f, "/5 checkpoints cleared"]
      })
    }), s.jsx("div", {
      className: "grid gap-3.5 md:grid-cols-3",
      children: x1.map((d, o) => {
        const b = d.icon;
        return s.jsx(Bl, {
          delay: o * 80,
          children: s.jsxs("article", {
            className: "group relative h-full overflow-hidden rounded-[20px] border border-forest/11 bg-parchment-light/80 p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-forest/22 hover:bg-parchment-light hover:shadow-lift sm:p-6",
            children: [s.jsxs("div", {
              className: "mb-7 flex items-start justify-between",
              children: [s.jsx("span", {
                className: "flex h-10 w-10 items-center justify-center rounded-xl border border-forest/12 bg-parchment text-forest/80 transition-colors group-hover:border-brass/40 group-hover:bg-brass-light/30",
                children: s.jsx(b, {
                  className: "h-[18px] w-[18px]",
                  strokeWidth: 1.9
                })
              }), s.jsxs("span", {
                className: "font-mono text-[0.62rem] tabular-nums text-forest/28",
                children: ["0", o + 1]
              })]
            }), s.jsx("p", {
              className: "label-mono text-[0.56rem] text-forest/45",
              children: d.label
            }), s.jsx("h3", {
              className: "mt-2 max-w-[16rem] text-[1.38rem] leading-[1.1] text-forest",
              children: d.title
            }), s.jsx("p", {
              className: "mt-3 text-[0.83rem] leading-[1.7] text-forest/60",
              children: d.body
            }), s.jsxs("div", {
              className: "mt-5 flex items-start gap-2 border-t border-forest/9 pt-3",
              children: [s.jsx(sh, {
                className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-forest/38"
              }), s.jsx("p", {
                className: "text-[0.67rem] font-semibold leading-relaxed text-forest/46",
                children: d.footer
              })]
            })]
          })
        }, d.label)
      })
    }), s.jsx(Bl, {
      delay: 120,
      children: s.jsxs("div", {
        className: "mt-3.5 flex flex-col items-start justify-between gap-4 rounded-[18px] border border-forest/11 bg-[#eae1cf]/55 px-4 py-4 sm:flex-row sm:items-center sm:px-5",
        children: [s.jsxs("div", {
          className: "flex items-start gap-3",
          children: [s.jsx("span", {
            className: "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-forest/15 text-forest/60",
            children: s.jsx(ch, {
              className: "h-3.5 w-3.5"
            })
          }), s.jsxs("p", {
            className: "max-w-2xl text-[0.76rem] leading-relaxed text-forest/65",
            children: [s.jsx("strong", {
              className: "font-extrabold text-forest",
              children: "Not sure how to read the table?"
            }), " ", "Open the detective notes. They explain the frequencies, the question form, and how to sequence a report."]
          })]
        }), s.jsxs("button", {
          type: "button",
          onClick: r,
          className: "group inline-flex shrink-0 items-center gap-2 text-[0.72rem] font-extrabold text-forest transition-colors hover:text-clay",
          children: ["Rules / Help", s.jsx(Xm, {
            className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
          })]
        })]
      })
    })]
  })
}
const mo = [{
    id: "watch-tv",
    name: "watch TV",
    nameShort: "Watch TV",
    values: {
      once: 13,
      twice: 5,
      never: 3
    },
    color: "#e3b24e",
    icon: "tv"
  }, {
    id: "do-sport",
    name: "do sport",
    nameShort: "Do sport",
    values: {
      once: 6,
      twice: 12,
      never: 3
    },
    color: "#7fbf82",
    icon: "sport"
  }, {
    id: "computer-games",
    name: "play computer games",
    nameShort: "Computer games",
    values: {
      once: 10,
      twice: 7,
      never: 4
    },
    color: "#a995df",
    icon: "games"
  }, {
    id: "read-book",
    name: "read a book",
    nameShort: "Read a book",
    values: {
      once: 11,
      twice: 8,
      never: 2
    },
    color: "#6fb6cc",
    icon: "book"
  }],
  ho = 21,
  ca = [{
    id: "tv-twice",
    prompt: "How many children watch TV twice a week?",
    answer: 5,
    row: "watch TV",
    column: "twice a week"
  }, {
    id: "tv-never",
    prompt: "How many children never watch TV?",
    answer: 3,
    row: "watch TV",
    column: "never"
  }, {
    id: "sport-once",
    prompt: "How many children do sport once a day?",
    answer: 6,
    row: "do sport",
    column: "once a day"
  }, {
    id: "games-never",
    prompt: "How many children never play computer games?",
    answer: 4,
    row: "play computer games",
    column: "never"
  }, {
    id: "read-once",
    prompt: "How many children read a book once a day?",
    answer: 11,
    row: "read a book",
    column: "once a day"
  }, {
    id: "read-twice",
    prompt: "How many children read a book twice a week?",
    answer: 8,
    row: "read a book",
    column: "twice a week"
  }],
  $n = [{
    id: "watch-tv",
    label: "watch TV",
    expression: [13, null, 3],
    missingIndex: 1,
    answer: 5,
    options: [3, 5, 7, 11]
  }, {
    id: "do-sport",
    label: "do sport",
    expression: [6, 12, null],
    missingIndex: 2,
    answer: 3,
    options: [3, 5, 7, 11]
  }, {
    id: "computer-games",
    label: "play computer games",
    expression: [10, null, 4],
    missingIndex: 1,
    answer: 7,
    options: [3, 5, 7, 11]
  }, {
    id: "read-book",
    label: "read a book",
    expression: [null, 8, 2],
    missingIndex: 0,
    answer: 11,
    options: [3, 5, 7, 11],
    total: 21
  }, {
    id: "col-once",
    label: "column: once a day",
    expression: [13, 6, 10, null],
    missingIndex: 3,
    answer: 11,
    options: [7, 8, 11, 13],
    total: 40
  }, {
    id: "col-never",
    label: "column: never",
    expression: [3, 3, 4, null],
    missingIndex: 3,
    answer: 2,
    options: [2, 3, 4, 5],
    total: 12
  }],
  ra = [{
    id: "finding-1",
    before: "There are",
    after: "pupils in her class.",
    answer: 21,
    completed: "There are 21 pupils in her class."
  }, {
    id: "finding-2",
    before: "",
    after: "pupils never watch TV.",
    answer: 3,
    completed: "3 pupils never watch TV."
  }, {
    id: "finding-3",
    before: "",
    after: "pupils do sport twice a week.",
    answer: 12,
    completed: "12 pupils do sport twice a week."
  }, {
    id: "finding-4",
    before: "",
    after: "pupils read a book once a day.",
    answer: 11,
    completed: "11 pupils read a book once a day."
  }, {
    id: "finding-5",
    before: "",
    after: "pupils do sport once a day.",
    answer: 6,
    completed: "6 pupils do sport once a day."
  }, {
    id: "finding-6",
    before: "",
    after: "pupils play computer games once a day.",
    answer: 10,
    completed: "10 pupils play computer games once a day."
  }, {
    id: "finding-7",
    before: "",
    after: "pupils never read a book.",
    answer: 2,
    completed: "2 pupils never read a book."
  }],
  g1 = [2, 3, 6, 10, 11, 12, 21],
  $a = [{
    id: "gap-1",
    before: "13 pupils watch TV",
    after: "a day.",
    answer: "once"
  }, {
    id: "gap-2",
    before: "3 pupils",
    after: "watch TV.",
    answer: "never"
  }, {
    id: "gap-3",
    before: "12 pupils do sport twice a",
    after: ".",
    answer: "week"
  }, {
    id: "gap-4",
    before: "6 pupils do sport",
    after: "a day.",
    answer: "once"
  }, {
    id: "gap-5",
    before: "10 pupils play computer games",
    after: "a day.",
    answer: "once"
  }, {
    id: "gap-6",
    before: "11 pupils read a book once a",
    after: ".",
    answer: "day"
  }, {
    id: "gap-7",
    before: "2 pupils",
    after: "read a book.",
    answer: "never"
  }],
  Hm = ["once", "twice", "never", "day", "week"],
  Lt = [{
    id: "part-1",
    text: "There are 21 pupils in her class."
  }, {
    id: "part-2",
    text: "13 pupils watch TV once a day, and 5 pupils watch TV twice a week."
  }, {
    id: "part-3",
    text: "3 pupils never watch TV."
  }, {
    id: "part-4",
    text: "6 pupils do sport once a day, and 12 pupils do sport twice a week."
  }, {
    id: "part-5",
    text: "10 pupils play computer games once a day, and 7 pupils play them twice a week."
  }, {
    id: "part-6",
    text: "11 pupils read a book once a day, and 8 pupils read a book twice a week."
  }, {
    id: "part-7",
    text: "Only 2 pupils never read a book."
  }],
  qm = [Lt[3], Lt[6], Lt[1], Lt[4], Lt[0], Lt[5], Lt[2]],
  po = ["There are 21 pupils in her class.", "3 pupils never watch TV.", "12 pupils do sport twice a week.", "11 pupils read a book once a day.", "6 pupils do sport once a day.", "10 pupils play computer games once a day.", "2 pupils never read a book."],
  Ul = [{
    id: "day-1",
    order: 1,
    text: "First, I get up at seven o'clock."
  }, {
    id: "day-2",
    order: 2,
    text: "After breakfast, I do the dishes."
  }, {
    id: "day-3",
    order: 3,
    text: "At eight o'clock, I go to school."
  }, {
    id: "day-4",
    order: 4,
    text: "After school, I do my homework."
  }, {
    id: "day-5",
    order: 5,
    text: "In the evening, I watch TV for an hour."
  }, {
    id: "day-6",
    order: 6,
    text: "Before bed, I read a book."
  }],
  Bm = [Ul[3], Ul[0], Ul[5], Ul[2], Ul[4], Ul[1]],
  xo = [{
    id: "briefing",
    label: "Briefing",
    short: "Briefing"
  }, {
    id: "evidence",
    label: "The evidence",
    short: "Evidence"
  }, {
    id: "investigation",
    label: "Investigation",
    short: "Tasks"
  }, {
    id: "report",
    label: "Final report",
    short: "Report"
  }, {
    id: "homework",
    label: "Take-home dossier",
    short: "Homework"
  }],
  y1 = [{
    id: 1,
    title: "Read the evidence",
    eyebrow: "Decode the table"
  }, {
    id: 2,
    title: "Balance the totals",
    eyebrow: "Use the numbers"
  }, {
    id: 3,
    title: "Match the findings",
    eyebrow: "Connect clues"
  }, {
    id: 4,
    title: "Complete the sentences",
    eyebrow: "Write the evidence"
  }, {
    id: 5,
    title: "Rebuild the report",
    eyebrow: "Sequence the facts"
  }],
  v1 = {
    tv: jb,
    sport: ob,
    games: ub,
    book: oa
  },
  to = [{
    key: "once",
    label: "Once a day",
    short: "once",
    tint: "#e3b24e"
  }, {
    key: "twice",
    label: "Twice a week",
    short: "twice",
    tint: "#9cc39b"
  }, {
    key: "never",
    label: "Never",
    short: "never",
    tint: "#d88b75"
  }];

function j1({
  onOpenRules: r
}) {
  const [f, d] = Z.useState(null);
  return s.jsxs("section", {
    id: "evidence",
    className: "scroll-mt-28 pt-12 sm:pt-14",
    "aria-labelledby": "evidence-heading",
    children: [s.jsx(In, {
      id: "evidence-heading",
      index: "02",
      kicker: "Exhibit A · Primary source · 8 min",
      title: s.jsxs(s.Fragment, {
        children: ["The evidence is ", s.jsx("em", {
          className: "italic text-forest/55",
          children: "still intact."
        })]
      }),
      description: "This is the complete class survey. Each row belongs to one free-time activity; each column tells us how often the pupils do it. Tap any number to inspect it.",
      right: s.jsxs("button", {
        type: "button",
        onClick: r,
        className: "btn btn-light btn-sm",
        children: [s.jsx(oa, {
          className: "h-3.5 w-3.5"
        }), "How to read this table"]
      })
    }), s.jsx(Bl, {
      children: s.jsxs("div", {
        className: "evidence-board overflow-hidden rounded-[24px] text-parchment-light shadow-[0_30px_70px_-42px_rgba(13,32,26,0.85)] sm:rounded-[28px]",
        children: [s.jsx("div", {
          "aria-hidden": "true",
          className: "pointer-events-none absolute inset-0 -z-10 opacity-[0.23] mix-blend-screen",
          style: {
            backgroundImage: "url('./images/case-cover.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 38%"
          }
        }), s.jsx("div", {
          "aria-hidden": "true",
          className: "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-forest-deep/50 via-forest-deep/20 to-forest-deep/75"
        }), s.jsxs("div", {
          className: "relative border-b border-parchment/12 px-4 pb-5 pt-5 sm:px-6 sm:pb-6 sm:pt-6",
          children: [s.jsxs("div", {
            className: "flex flex-col justify-between gap-5 sm:flex-row sm:items-start",
            children: [s.jsxs("div", {
              children: [s.jsxs("div", {
                className: "mb-3 flex flex-wrap items-center gap-2",
                children: [s.jsxs("span", {
                  className: "label-mono inline-flex items-center gap-1.5 rounded-full border border-parchment/20 bg-parchment/[0.07] px-2.5 py-1 text-[0.51rem] text-parchment/75",
                  children: [s.jsx(qh, {
                    className: "h-3 w-3 text-brass"
                  }), "Evidence A"]
                }), s.jsx("span", {
                  className: "label-mono text-[0.5rem] text-parchment/35",
                  children: "Source: Class 3B"
                })]
              }), s.jsx("h3", {
                className: "max-w-md text-[clamp(1.6rem,3.6vw,2.2rem)] leading-[1.06] text-parchment-light",
                children: "How often do you…?"
              }), s.jsx("p", {
                className: "mt-2 text-[0.74rem] leading-relaxed text-parchment/48",
                children: "All 21 pupils answered four questions about their free time."
              })]
            }), s.jsxs("div", {
              className: "flex items-center gap-2 self-start rounded-full border border-[#a3c9b2]/25 bg-[#a3c9b2]/[0.08] px-3 py-1.5",
              children: [s.jsxs("span", {
                className: "relative flex h-2 w-2",
                children: [s.jsx("span", {
                  className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a3c9b2] opacity-40"
                }), s.jsx("span", {
                  className: "relative inline-flex h-2 w-2 rounded-full bg-[#a3c9b2]"
                })]
              }), s.jsx("span", {
                className: "label-mono text-[0.51rem] text-[#b5d5c2]",
                children: "File intact"
              })]
            })]
          }), s.jsxs("div", {
            className: "mt-5 flex items-center gap-3 sm:hidden",
            children: [s.jsx("span", {
              className: "label-mono text-[0.48rem] text-parchment/38",
              children: "Swipe the table to read all columns"
            }), s.jsx("span", {
              className: "h-px flex-1 bg-parchment/15"
            })]
          })]
        }), s.jsx("div", {
          className: "overflow-x-auto thin-scrollbar",
          children: s.jsxs("table", {
            className: "evidence-table min-w-[640px]",
            children: [s.jsx("caption", {
              className: "sr-only",
              children: "Survey results for 21 pupils: how often they watch TV, do sport, play computer games, and read a book."
            }), s.jsx("thead", {
              children: s.jsxs("tr", {
                className: "bg-[#f4efe4]/[0.03]",
                children: [s.jsxs("th", {
                  scope: "col",
                  className: "w-[37%] px-4 py-4 text-left sm:px-6",
                  children: [s.jsx("span", {
                    className: "label-mono text-[0.52rem] text-parchment/38",
                    children: "Question"
                  }), s.jsx("span", {
                    className: "mt-1 block font-display text-[0.94rem] italic text-parchment/72",
                    children: "How often do you…"
                  })]
                }), to.map((o, b) => s.jsxs("th", {
                  scope: "col",
                  className: P("px-2 py-4 text-center", b === to.length - 1 && "bg-[#d88b75]/[0.035]"),
                  children: [s.jsx("span", {
                    className: "mx-auto mb-2 block h-1 w-5 rounded-full",
                    style: {
                      backgroundColor: o.tint
                    }
                  }), s.jsx("span", {
                    className: "block whitespace-nowrap font-mono text-[0.57rem] font-medium uppercase tracking-[0.05em] text-parchment/65",
                    children: o.label
                  })]
                }, o.key)), s.jsxs("th", {
                  scope: "col",
                  className: "px-3 py-4 text-center sm:px-4",
                  children: [s.jsx("span", {
                    className: "mb-2 block h-1 w-5 mx-auto rounded-full bg-parchment/30"
                  }), s.jsx("span", {
                    className: "block whitespace-nowrap font-mono text-[0.55rem] uppercase tracking-[0.05em] text-parchment/38",
                    children: "Row total"
                  })]
                })]
              })
            }), s.jsx("tbody", {
              children: mo.map(o => {
                const b = v1[o.icon],
                  k = o.values.once + o.values.twice + o.values.never;
                return s.jsxs("tr", {
                  children: [s.jsx("th", {
                    scope: "row",
                    className: "px-4 py-3 text-left sm:px-6 sm:py-3.5",
                    children: s.jsxs("span", {
                      className: "flex items-center gap-3",
                      children: [s.jsx("span", {
                        className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border",
                        style: {
                          color: o.color,
                          borderColor: `${o.color}30`,
                          backgroundColor: `${o.color}10`
                        },
                        children: s.jsx(b, {
                          className: "h-[17px] w-[17px]",
                          strokeWidth: 1.9
                        })
                      }), s.jsx("span", {
                        className: "font-sans text-[0.8rem] font-bold capitalize leading-tight text-parchment/82 sm:text-[0.86rem]",
                        children: o.name
                      })]
                    })
                  }), to.map(y => {
                    const w = f?.activity.id === o.id && f.frequency === y.short;
                    return s.jsx("td", {
                      className: "p-1.5 text-center sm:p-2",
                      children: s.jsxs("button", {
                        type: "button",
                        onClick: () => d({
                          activity: o,
                          frequency: y.short,
                          value: o.values[y.key]
                        }),
                        className: P("group relative mx-auto flex h-12 w-full max-w-[86px] items-center justify-center rounded-lg border border-transparent font-mono text-[1.12rem] font-semibold tabular-nums transition-all duration-200 hover:border-parchment/25 hover:bg-parchment/[0.07] sm:h-[54px] sm:text-[1.22rem]", w && "border-brass/60 bg-brass/[0.12]"),
                        style: {
                          color: o.color
                        },
                        "aria-label": `${o.name}, ${y.label}: ${o.values[y.key]} pupils. Inspect this number.`,
                        "aria-pressed": w,
                        children: [o.values[y.key], s.jsx("span", {
                          className: P("absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full opacity-0 transition-opacity", w && "opacity-100"),
                          style: {
                            backgroundColor: o.color
                          }
                        })]
                      })
                    }, y.key)
                  }), s.jsx("td", {
                    className: "px-3 py-3 text-center sm:px-4",
                    children: s.jsxs("span", {
                      className: "inline-flex items-center gap-1.5 rounded-full border border-parchment/13 bg-parchment/[0.045] px-2.5 py-1 font-mono text-[0.7rem] font-semibold text-parchment/70",
                      children: [s.jsx(De, {
                        className: "h-3 w-3 text-sage",
                        strokeWidth: 2.4
                      }), k]
                    })
                  })]
                }, o.id)
              })
            })]
          })
        }), s.jsx("div", {
          className: "relative border-t border-parchment/12 px-4 py-4 sm:px-6",
          children: s.jsxs("div", {
            className: "flex flex-col justify-between gap-4 lg:flex-row lg:items-center",
            children: [s.jsxs("div", {
              className: "flex min-h-10 items-center gap-2.5 rounded-lg border border-parchment/10 bg-forest-deep/35 px-3 py-2",
              "aria-live": "polite",
              children: [s.jsx(zi, {
                className: "h-4 w-4 shrink-0 text-brass"
              }), f ? s.jsxs("p", {
                className: "text-[0.69rem] leading-snug text-parchment/65",
                children: [s.jsx("span", {
                  className: "font-bold capitalize text-parchment/90",
                  children: f.activity.name
                }), " ", "· ", f.frequency, " — the table says", " ", s.jsx("strong", {
                  className: "font-mono text-[0.76rem] font-semibold text-brass",
                  children: f.value
                }), " ", "pupils.", s.jsxs("button", {
                  type: "button",
                  onClick: () => d(null),
                  className: "ml-2 inline-flex items-center gap-1 font-mono text-[0.57rem] uppercase tracking-[0.06em] text-parchment/38 underline underline-offset-2 hover:text-parchment/75",
                  children: [s.jsx(oo, {
                    className: "h-2.5 w-2.5"
                  }), "Clear"]
                })]
              }) : s.jsx("p", {
                className: "text-[0.69rem] text-parchment/42",
                children: "Tap any number to inspect the evidence."
              })]
            }), s.jsxs("div", {
              className: "flex flex-wrap items-center gap-x-5 gap-y-2",
              children: [s.jsxs("span", {
                className: "flex items-center gap-1.5 text-[0.64rem] font-semibold text-parchment/46",
                children: [s.jsx(Wn, {
                  className: "h-3 w-3 text-parchment/30"
                }), "4 activities × 21 pupils"]
              }), s.jsxs("span", {
                className: "flex items-center gap-1.5 text-[0.64rem] font-semibold text-parchment/46",
                children: [s.jsx(De, {
                  className: "h-3 w-3 text-sage"
                }), "Every row makes 21"]
              })]
            })]
          })
        })]
      })
    }), s.jsx(Bl, {
      delay: 80,
      children: s.jsxs("div", {
        className: "mt-3.5 grid gap-3 sm:grid-cols-3",
        children: [s.jsxs("div", {
          className: "rounded-[16px] border border-forest/11 bg-parchment-light/65 px-4 py-3.5",
          children: [s.jsx("p", {
            className: "label-mono text-[0.51rem] text-forest/40",
            children: "Rows"
          }), s.jsx("p", {
            className: "mt-1 text-[0.75rem] font-semibold text-forest/70",
            children: "One free-time activity per row."
          })]
        }), s.jsxs("div", {
          className: "rounded-[16px] border border-forest/11 bg-parchment-light/65 px-4 py-3.5",
          children: [s.jsx("p", {
            className: "label-mono text-[0.51rem] text-forest/40",
            children: "Columns"
          }), s.jsx("p", {
            className: "mt-1 text-[0.75rem] font-semibold text-forest/70",
            children: "Once, twice, or never."
          })]
        }), s.jsxs("div", {
          className: "rounded-[16px] border border-forest/11 bg-parchment-light/65 px-4 py-3.5",
          children: [s.jsx("p", {
            className: "label-mono text-[0.51rem] text-forest/40",
            children: "Cross-check"
          }), s.jsx("p", {
            className: "mt-1 text-[0.75rem] font-semibold text-forest/70",
            children: "Add across each row — you should get 21."
          })]
        })]
      })
    })]
  })
}
const N1 = {
  amber: {
    icon: "border-[#d8b15e]/35 bg-[#f2dfb4]/55 text-[#87631f]",
    line: "from-[#e3b24e]",
    soft: "bg-[#f2dfb4]/25",
    text: "text-[#87631f]"
  },
  green: {
    icon: "border-[#9bbda3]/40 bg-[#dbe8dc]/65 text-[#3a6448]",
    line: "from-[#7e9c8c]",
    soft: "bg-[#dbe8dc]/38",
    text: "text-[#3a6448]"
  },
  violet: {
    icon: "border-[#b2a5c9]/35 bg-[#e4dfee]/70 text-[#5c4d7c]",
    line: "from-[#9c8bb5]",
    soft: "bg-[#e4dfee]/45",
    text: "text-[#5c4d7c]"
  },
  clay: {
    icon: "border-[#c98a77]/35 bg-[#f0e0d8]/70 text-[#8b4d34]",
    line: "from-[#c98a77]",
    soft: "bg-[#f0e0d8]/40",
    text: "text-[#8b4d34]"
  },
  ink: {
    icon: "border-forest/15 bg-forest/[0.07] text-forest/75",
    line: "from-forest",
    soft: "bg-forest/[0.035]",
    text: "text-forest"
  }
};

function Pn({
  number: r,
  eyebrow: f,
  title: d,
  intro: o,
  icon: b,
  accent: k,
  complete: y,
  children: w
}) {
  const v = N1[k];
  return s.jsxs("article", {
    id: `task-${r}`,
    className: P("scroll-mt-28 overflow-hidden rounded-[22px] border bg-parchment-light/82 shadow-card transition-colors", y ? "border-forest/24" : "border-forest/11"),
    children: [s.jsx("div", {
      className: P("h-[3px] w-full bg-gradient-to-r via-transparent to-transparent opacity-75", v.line)
    }), s.jsxs("div", {
      className: "p-4 sm:p-6",
      children: [s.jsxs("header", {
        className: "flex flex-col gap-4 sm:flex-row sm:items-start",
        children: [s.jsx("span", {
          className: P("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border", v.icon),
          children: s.jsx(b, {
            className: "h-[18px] w-[18px]",
            strokeWidth: 1.9
          })
        }), s.jsxs("div", {
          className: "min-w-0 flex-1",
          children: [s.jsxs("p", {
            className: "label-mono flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.53rem] text-forest/42",
            children: [s.jsxs("span", {
              children: ["Checkpoint 0", r]
            }), s.jsx("span", {
              className: "h-px w-3 bg-forest/20"
            }), s.jsx("span", {
              className: v.text,
              children: f
            }), s.jsx("span", {
              className: "rounded-full border border-forest/10 px-1.5 py-0.5 text-[0.47rem]",
              children: "20% of file"
            })]
          }), s.jsxs("div", {
            className: "mt-1.5 flex flex-wrap items-center gap-2.5",
            children: [s.jsx("h3", {
              className: "text-[1.55rem] leading-none text-forest sm:text-[1.7rem]",
              children: d
            }), y ? s.jsx("span", {
              className: "flex h-5 w-5 items-center justify-center rounded-full bg-forest text-parchment-light",
              children: s.jsx(De, {
                className: "h-3 w-3",
                strokeWidth: 3
              })
            }) : null]
          }), s.jsx("p", {
            className: "mt-2 max-w-2xl text-[0.79rem] leading-relaxed text-forest/58",
            children: o
          })]
        }), s.jsx(p1, {
          complete: y,
          className: "self-start"
        })]
      }), s.jsx("div", {
        className: "mt-5",
        children: w
      })]
    })]
  })
}

function es({
  complete: r,
  canCheck: f,
  checkLabel: d,
  onCheck: o,
  feedback: b,
  hint: k,
  helper: y
}) {
  const [w, v] = Z.useState(!1);
  return Z.useEffect(() => {
    b && b.tone !== "success" && v(!0)
  }, [b]), s.jsxs("div", {
    className: "mt-5 border-t border-forest/9 pt-4",
    children: [b ? s.jsxs("div", {
      role: "status",
      "aria-live": "polite",
      className: P("mb-3 flex items-start gap-2.5 rounded-xl border px-3 py-2.5", b.tone === "success" && "border-[#9bbda3]/45 bg-[#edf5ee] text-[#2f5c42]", b.tone === "partial" && "border-[#d8b15e]/45 bg-[#fbf4e3] text-[#72551b]", b.tone === "info" && "border-forest/12 bg-parchment/65 text-forest/62"),
      children: [b.tone === "success" ? s.jsx(fo, {
        complete: !0,
        size: "sm"
      }) : b.tone === "partial" ? s.jsx(Hl, {
        className: "mt-0.5 h-4 w-4 shrink-0"
      }) : s.jsx(ch, {
        className: "mt-0.5 h-4 w-4 shrink-0"
      }), s.jsx("p", {
        className: "text-[0.73rem] font-semibold leading-relaxed",
        children: b.message
      })]
    }) : null, s.jsxs("div", {
      className: "flex flex-wrap items-center gap-2.5",
      children: [s.jsx("button", {
        type: "button",
        onClick: o,
        disabled: r || !f,
        className: P("btn btn-sm", r ? "btn-light" : "btn-primary"),
        children: r ? s.jsxs(s.Fragment, {
          children: [s.jsx(De, {
            className: "h-4 w-4",
            strokeWidth: 2.7
          }), "Checkpoint cleared"]
        }) : s.jsxs(s.Fragment, {
          children: [s.jsx(Fn, {
            className: "h-3.5 w-3.5"
          }), d]
        })
      }), r ? null : s.jsxs("button", {
        type: "button",
        onClick: () => v(h => !h),
        "aria-expanded": w,
        className: "inline-flex items-center gap-1.5 rounded-full border border-transparent px-2.5 py-2 text-[0.69rem] font-bold text-forest/48 transition-colors hover:bg-forest/[0.05] hover:text-forest",
        children: [s.jsx(Hl, {
          className: "h-3.5 w-3.5"
        }), w ? "Hide hint" : "Need a hint?", s.jsx(io, {
          className: P("h-3 w-3 transition-transform", w && "rotate-180")
        })]
      }), !f && !r ? s.jsx("span", {
        className: "ml-auto hidden font-mono text-[0.54rem] uppercase tracking-[0.05em] text-forest/32 sm:block",
        children: y ?? "Fill in every blank to check"
      }) : null]
    }), w && !r ? s.jsxs("div", {
      className: "animate-rise mt-3 flex items-start gap-2.5 rounded-xl border border-brass/25 bg-brass-light/20 px-3 py-2.5",
      children: [s.jsx(Hl, {
        className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-brass"
      }), s.jsxs("p", {
        className: "text-[0.71rem] leading-relaxed text-forest/64",
        children: [s.jsx("strong", {
          className: "font-extrabold text-forest",
          children: "Detective hint: "
        }), k]
      })]
    }) : null]
  })
}

function bo(r) {
  return r === "correct" ? "is-correct" : r === "wrong" ? "is-wrong" : ""
}

function go(r, f) {
  return r === 0 ? "No matches yet — that is normal at the start. Use the hint, then try again." : `${r} of ${f} clues match. The incorrect ones are marked; use the hint and take a second look.`
}

function w1({
  completed: r,
  onComplete: f
}) {
  const [d, o] = ttcUse("decode", () => Object.fromEntries(ca.map(A => [A.id, ""]))), [b, k] = Z.useState({}), [y, w] = Z.useState(null), v = ca.every(A => d[A.id].trim() !== ""), h = () => {
    const A = ca.filter(G => Number(d[G.id]) === G.answer),
      O = Object.fromEntries(ca.map(G => [G.id, Number(d[G.id]) === G.answer ? "correct" : "wrong"]));
    k(O), A.length === ca.length ? (w({
      tone: "success",
      message: "Six clues decoded, detective. You matched each activity row with the correct frequency column."
    }), f()) : w({
      tone: "partial",
      message: go(A.length, ca.length)
    })
  }, D = (A, O) => {
    o(G => ({
      ...G,
      [A]: O.replace(/\D/g, "").slice(0, 3)
    })), k(G => {
      const H = {
        ...G
      };
      return delete H[A], H
    })
  };
  return s.jsxs(Pn, {
    number: 1,
    eyebrow: "Decode the table",
    title: "Read the evidence",
    intro: "Read each question twice: first find the activity row, then follow it to the frequency column. Enter the number of pupils.",
    icon: qh,
    accent: "amber",
    complete: r,
    children: [s.jsx("div", {
      className: "grid gap-2.5 sm:grid-cols-2",
      children: ca.map((A, O) => {
        const G = b[A.id];
        return s.jsx("div", {
          className: P("rounded-xl border bg-white/45 p-3 transition-colors", G === "correct" ? "border-[#9bbda3]/60 bg-[#edf5ee]/60" : G === "wrong" ? "border-[#c98a77]/50 bg-[#fdf5f0]/60" : "border-forest/10"),
          children: s.jsxs("label", {
            htmlFor: `decode-${A.id}`,
            className: "flex gap-2.5",
            children: [s.jsx("span", {
              className: "mt-0.5 font-mono text-[0.55rem] tabular-nums text-forest/30",
              children: String(O + 1).padStart(2, "0")
            }), s.jsxs("span", {
              className: "flex-1",
              children: [s.jsx("span", {
                className: "block text-[0.8rem] font-semibold leading-relaxed text-forest/70",
                children: A.prompt
              }), s.jsxs("span", {
                className: "mt-2 flex items-center gap-2",
                children: [s.jsx("input", {
                  id: `decode-${A.id}`,
                  type: "text",
                  inputMode: "numeric",
                  value: d[A.id],
                  onChange: H => D(A.id, H.target.value),
                  placeholder: "?",
                  "aria-label": `Number of children: ${A.prompt}`,
                  className: P("field field-number h-9 min-h-9 w-[66px] px-2 py-1 text-center", bo(G))
                }), s.jsx("span", {
                  className: "font-mono text-[0.56rem] uppercase tracking-[0.05em] text-forest/35",
                  children: "pupils"
                }), G === "correct" ? s.jsx(De, {
                  className: "ml-auto h-4 w-4 text-[#3a7a5c]",
                  strokeWidth: 2.7
                }) : G === "wrong" ? s.jsx(ql, {
                  className: "ml-auto h-4 w-4 text-clay",
                  strokeWidth: 2.7
                }) : null]
              }), G === "wrong" ? s.jsxs("span", {
                className: "mt-1.5 block font-mono text-[0.53rem] uppercase tracking-[0.03em] text-clay/80",
                children: ["Look: row “", A.row, "” × column “", A.column, "”"]
              }) : null]
            })]
          })
        }, A.id)
      })
    }), s.jsx(es, {
      complete: r,
      canCheck: v,
      checkLabel: "Check the evidence",
      onCheck: h,
      feedback: y,
      hint: "Point to the activity row first, then move along to the right frequency column. Do not add the numbers yet — read one cell only.",
      helper: "Answer all 6 clues to check"
    })]
  })
}

function S1({
  completed: r,
  onComplete: f
}) {
  const [d, o] = ttcUse("totalsRows", {}), [b, k] = ttcUse("classSize", ""), [y, w] = Z.useState({}), [v, h] = Z.useState(), [D, A] = Z.useState(null), O = $n.every(H => d[H.id]) && b !== "", G = () => {
    const H = Object.fromEntries($n.map(R => [R.id, Number(d[R.id]) === R.answer ? "correct" : "wrong"]));
    w(H);
    const V = $n.filter(R => Number(d[R.id]) === R.answer).length,
      Y = b === "21";
    h(Y ? "correct" : "wrong"), V === $n.length && Y ? (A({
      tone: "success",
      message: "Exactly! Every row adds up to 21, so the class total is 21 pupils. The arithmetic proof is attached to the file."
    }), f()) : A({
      tone: "partial",
      message: `${V} of 6 lines balance${Y?" and the class total is right":", but the class total needs another look"}. For a row, use 21 minus the known numbers. For a column, add the numbers you can see.`
    })
  };
  return s.jsxs(Pn, {
    number: 2,
    eyebrow: "Use the numbers",
    title: "Balance the totals",
    intro: "One number has fallen out of each row, and two column totals also need a missing cell. Use addition or subtraction. Every activity row should total 21.",
    icon: eh,
    accent: "green",
    complete: r,
    children: [s.jsx("div", {
      className: "grid gap-2.5 sm:grid-cols-2",
      children: $n.map(H => {
        const V = y[H.id];
        return s.jsxs("div", {
          className: P("rounded-xl border bg-white/45 p-3.5 transition-colors", V === "correct" ? "border-[#9bbda3]/60 bg-[#edf5ee]/60" : V === "wrong" ? "border-[#c98a77]/50 bg-[#fdf5f0]/60" : "border-forest/10"),
          children: [s.jsxs("div", {
            className: "mb-2 flex items-center justify-between gap-2",
            children: [s.jsx("p", {
              className: "text-[0.7rem] font-extrabold capitalize text-forest/65",
              children: H.label
            }), V === "correct" ? s.jsx(De, {
              className: "h-3.5 w-3.5 text-[#3a7a5c]",
              strokeWidth: 2.8
            }) : V === "wrong" ? s.jsx(ql, {
              className: "h-3.5 w-3.5 text-clay",
              strokeWidth: 2.8
            }) : s.jsx("span", {
              className: "font-mono text-[0.5rem] uppercase tracking-[0.06em] text-forest/28",
              children: "Total " + (H.total ?? 21)
            })]
          }), s.jsxs("div", {
            className: "flex flex-wrap items-center gap-1.5 font-mono text-[0.85rem] font-semibold text-forest/65",
            children: [H.expression.map((Y, R) => s.jsxs("span", {
              className: "flex items-center gap-1.5",
              children: [R > 0 ? s.jsx("span", {
                className: "text-forest/28",
                children: "+"
              }) : null, Y === null ? s.jsxs("select", {
                "aria-label": `Missing number for ${H.label}`,
                value: d[H.id] ?? "",
                onChange: W => o(F => ({
                  ...F,
                  [H.id]: W.target.value
                })),
                className: P("field field-number h-9 min-h-9 w-[62px] px-2 py-0 text-center", bo(V)),
                children: [s.jsx("option", {
                  value: "",
                  children: "?"
                }), H.options.map(W => s.jsx("option", {
                  value: W,
                  children: W
                }, W))]
              }) : s.jsx("span", {
                className: "rounded-md bg-forest/[0.055] px-2 py-1.5 text-forest/65",
                children: Y
              })]
            }, `${H.id}-${R}`)), s.jsx("span", {
              className: "text-forest/28",
              children: "="
            }), s.jsx("span", {
              className: "rounded-md bg-brass-light/55 px-2 py-1.5 text-[0.72rem] text-forest",
              children: String(H.total ?? 21)
            })]
          })]
        }, H.id)
      })
    }), s.jsxs("div", {
      className: "mt-3 rounded-xl border border-forest/11 bg-parchment/60 p-3.5",
      children: [s.jsx("p", {
        className: "mb-2.5 text-[0.73rem] font-bold text-forest/68",
        children: "The six lines agree. So, how many pupils are in the class?"
      }), s.jsxs("div", {
        className: "flex flex-wrap gap-2",
        children: [
          [12, 21, 84].map(H => s.jsxs("button", {
            type: "button",
            onClick: () => {
              k(String(H)), h(void 0)
            },
            "aria-pressed": b === String(H),
            className: P("flex h-9 min-w-[78px] items-center justify-center gap-1.5 rounded-lg border font-mono text-[0.78rem] font-semibold transition-all", b === String(H) ? v === "correct" ? "border-[#5d9474] bg-[#e3f0e5] text-[#2f5c42]" : v === "wrong" ? "border-clay bg-[#f9e9e2] text-[#8b4d34]" : "border-forest bg-forest text-parchment-light" : "border-forest/13 bg-white/55 text-forest/60 hover:border-forest/30 hover:bg-white"),
            children: [H, b === String(H) && v === "correct" ? s.jsx(De, {
              className: "h-3 w-3"
            }) : null]
          }, H)), s.jsx("span", {
            className: "self-center pl-1 font-mono text-[0.52rem] uppercase tracking-[0.06em] text-forest/30",
            children: "pupils"
          })
        ]
      })]
    }), s.jsx(es, {
      complete: r,
      canCheck: !!O,
      checkLabel: "Check my totals",
      onCheck: G,
      feedback: D,
      hint: "For a missing number, work backwards: 21 − 13 − 3 = ?. Then use the same total (21) in every row.",
      helper: "Restore 6 lines and choose a class size"
    })]
  })
}

function k1({
  completed: r,
  onComplete: f
}) {
  const [d, o] = ttcUse("matches", () => Object.fromEntries(ra.map(R => [R.id, null]))), [b, k] = Z.useState(null), [y, w] = Z.useState(null), [v, h] = Z.useState({}), [D, A] = Z.useState(null), O = ra.every(R => d[R.id] !== null), G = Object.values(d).filter(R => R !== null), H = (R, W) => {
    o(F => {
      const le = {
        ...F
      };
      return Object.keys(le).forEach(xe => {
        le[xe] === W && (le[xe] = null)
      }), le[R] = W, le
    }), k(null), h(F => {
      const le = {
        ...F
      };
      return delete le[R], le
    })
  }, V = R => {
    o(W => ({
      ...W,
      [R]: null
    })), h(W => {
      const F = {
        ...W
      };
      return delete F[R], F
    })
  }, Y = () => {
    const R = Object.fromEntries(ra.map(F => [F.id, d[F.id] === F.answer ? "correct" : "wrong"]));
    h(R);
    const W = ra.filter(F => d[F.id] === F.answer).length;
    W === ra.length ? (A({
      tone: "success",
      message: "All seven findings restored. Every number now has a clear, evidence-backed statement."
    }), f()) : A({
      tone: "partial",
      message: go(W, ra.length)
    })
  };
  return s.jsxs(Pn, {
    number: 3,
    eyebrow: "Connect the clues",
    title: "Match the findings",
    intro: "Select a number, then drop it into the sentence it proves. Each number is used once. A finding only counts if the table supports it.",
    icon: db,
    accent: "violet",
    complete: r,
    children: [s.jsxs("div", {
      className: "mb-4 flex flex-wrap items-center gap-2 rounded-xl border border-forest/10 bg-parchment/60 p-3",
      children: [s.jsx("span", {
        className: "label-mono mr-1 text-[0.49rem] text-forest/38",
        children: "Number bank"
      }), g1.map(R => {
        const W = G.includes(R);
        return s.jsx("button", {
          type: "button",
          draggable: !0,
          onDragStart: () => w(R),
          onDragEnd: () => w(null),
          onClick: () => k(b === R ? null : R),
          "aria-pressed": b === R,
          "aria-label": `Select the number ${R}`,
          className: P("flex h-9 w-11 items-center justify-center rounded-lg border font-mono text-[0.85rem] font-semibold transition-all", b === R ? "border-forest bg-forest text-parchment-light shadow-sm" : W ? "border-forest/10 bg-forest/[0.035] text-forest/24 line-through" : "border-forest/18 bg-parchment-light text-forest hover:-translate-y-0.5 hover:border-brass hover:bg-white"),
          children: R
        }, R)
      }), s.jsx("span", {
        className: "ml-auto hidden font-mono text-[0.5rem] uppercase tracking-[0.05em] text-forest/32 sm:block",
        children: O ? "All numbers placed" : "Click or drag a number"
      })]
    }), s.jsx("ol", {
      className: "space-y-1.5",
      children: ra.map((R, W) => {
        const F = d[R.id],
          le = v[R.id];
        return s.jsxs("li", {
          onDragOver: xe => xe.preventDefault(),
          onDrop: xe => {
            xe.preventDefault(), y !== null && H(R.id, y), w(null)
          },
          className: P("flex items-start gap-2.5 rounded-xl border px-3 py-2.5 transition-colors", le === "correct" ? "border-[#9bbda3]/55 bg-[#edf5ee]/55" : le === "wrong" ? "border-[#c98a77]/45 bg-[#fdf5f0]/55" : "border-transparent bg-parchment/35"),
          children: [s.jsx("span", {
            className: "mt-0.5 font-mono text-[0.53rem] tabular-nums text-forest/28",
            children: String(W + 1).padStart(2, "0")
          }), s.jsxs("p", {
            className: "flex flex-1 flex-wrap items-center gap-x-1.5 gap-y-1 text-[0.8rem] font-medium leading-relaxed text-forest/72",
            children: [R.before ? s.jsx("span", {
              children: R.before
            }) : null, s.jsxs("span", {
              className: "inline-flex items-center gap-0.5",
              children: [s.jsx("button", {
                type: "button",
                onClick: () => {
                  b !== null ? H(R.id, b) : F !== null && V(R.id)
                },
                "aria-label": F !== null ? `${R.completed} Selected ${F}. Click to clear.` : `Place a number in finding ${W+1}`,
                className: P("inline-flex h-7 min-w-[48px] items-center justify-center rounded-md border border-dashed px-1.5 font-mono text-[0.76rem] font-semibold transition-colors", F === null ? "border-forest/28 bg-white/45 text-forest/28 hover:border-brass hover:bg-brass-light/25" : le === "correct" ? "border-[#5d9474] bg-[#e3f0e5] text-[#2f5c42]" : le === "wrong" ? "border-clay bg-[#f9e9e2] text-[#8b4d34]" : "border-forest/30 bg-white text-forest"),
                children: F ?? "___"
              }), F !== null ? s.jsx("button", {
                type: "button",
                onClick: () => V(R.id),
                className: "flex h-5 w-5 items-center justify-center rounded-full text-forest/25 transition-colors hover:bg-forest/[0.06] hover:text-forest/60",
                "aria-label": `Clear the number in finding ${W+1}`,
                children: s.jsx(ql, {
                  className: "h-2.5 w-2.5"
                })
              }) : null]
            }), s.jsx("span", {
              children: R.after
            })]
          }), le === "correct" ? s.jsx(De, {
            className: "mt-1 h-3.5 w-3.5 shrink-0 text-[#3a7a5c]",
            strokeWidth: 2.8
          }) : le === "wrong" ? s.jsx(ql, {
            className: "mt-1 h-3.5 w-3.5 shrink-0 text-clay",
            strokeWidth: 2.8
          }) : null]
        }, R.id)
      })
    }), s.jsxs("div", {
      className: "mt-3 flex items-start gap-2 rounded-lg border border-forest/9 bg-white/30 px-3 py-2",
      children: [s.jsx(vh, {
        className: "mt-0.5 h-3 w-3 shrink-0 text-forest/30"
      }), s.jsx("p", {
        className: "text-[0.65rem] leading-relaxed text-forest/45",
        children: "Tip: You can drag a number chip straight onto a sentence, or tap a chip and then tap the blank."
      })]
    }), s.jsx(es, {
      complete: r,
      canCheck: O,
      checkLabel: "Check my matches",
      onCheck: Y,
      feedback: D,
      hint: "Start with the class total: 21 pupils. Then test each number against a specific activity and frequency. For example, sport twice a week uses the do sport row, twice a week column.",
      helper: "Place all 7 numbers to check"
    })]
  })
}

function z1({
  completed: r,
  onComplete: f
}) {
  const [d, o] = ttcUse("gaps", {}), [b, k] = Z.useState({}), [y, w] = Z.useState(null), v = $a.every(D => d[D.id]), h = () => {
    const D = Object.fromEntries($a.map(O => [O.id, d[O.id] === O.answer ? "correct" : "wrong"]));
    k(D);
    const A = $a.filter(O => d[O.id] === O.answer).length;
    A === $a.length ? (w({
      tone: "success",
      message: "Seven complete, accurate sentences. Each one names the pupils, the activity and how often it happens."
    }), f()) : w({
      tone: "partial",
      message: `${go(A,$a.length)} Remember: once a day, twice a week, never.`
    })
  };
  return s.jsxs(Pn, {
    number: 4,
    eyebrow: "Write the evidence",
    title: "Complete the sentences",
    intro: "Choose the missing word or phrase for each sentence. Read the whole sentence after you choose — does it say exactly what the table proves?",
    icon: _h,
    accent: "clay",
    complete: r,
    children: [s.jsx("div", {
      className: "grid gap-2 md:grid-cols-2",
      children: $a.map((D, A) => {
        const O = b[D.id];
        return s.jsx("div", {
          className: P("rounded-xl border p-3 transition-colors", O === "correct" ? "border-[#9bbda3]/60 bg-[#edf5ee]/55" : O === "wrong" ? "border-[#c98a77]/50 bg-[#fdf5f0]/55" : "border-forest/10 bg-white/40"),
          children: s.jsxs("div", {
            className: "flex items-start gap-2",
            children: [s.jsx("span", {
              className: "mt-2 font-mono text-[0.52rem] tabular-nums text-forest/28",
              children: String(A + 1).padStart(2, "0")
            }), s.jsxs("label", {
              className: "flex-1",
              children: [s.jsxs("span", {
                className: "flex flex-wrap items-center gap-x-1.5 gap-y-1.5 text-[0.8rem] font-medium leading-relaxed text-forest/72",
                children: [s.jsx("span", {
                  children: D.before
                }), s.jsxs("select", {
                  value: d[D.id] ?? "",
                  onChange: G => {
                    o(H => ({
                      ...H,
                      [D.id]: G.target.value
                    })), k(H => {
                      const V = {
                        ...H
                      };
                      return delete V[D.id], V
                    })
                  },
                  "aria-label": `Missing phrase in sentence ${A+1}`,
                  className: P("field h-8 min-h-8 w-[88px] px-2 py-0 text-[0.7rem] font-bold", bo(O)),
                  children: [s.jsx("option", {
                    value: "",
                    children: "choose"
                  }), Hm.map(G => s.jsx("option", {
                    value: G,
                    children: G
                  }, G))]
                }), s.jsx("span", {
                  children: D.after
                })]
              }), O === "wrong" ? s.jsx("span", {
                className: "mt-1 block font-mono text-[0.52rem] uppercase tracking-[0.04em] text-clay/75",
                children: "Look at the table again — then choose another option."
              }) : null]
            }), O === "correct" ? s.jsx(De, {
              className: "mt-1.5 h-3.5 w-3.5 shrink-0 text-[#3a7a5c]",
              strokeWidth: 2.8
            }) : O === "wrong" ? s.jsx(ql, {
              className: "mt-1.5 h-3.5 w-3.5 shrink-0 text-clay",
              strokeWidth: 2.8
            }) : null]
          })
        }, D.id)
      })
    }), s.jsxs("div", {
      className: "mt-3 flex flex-wrap gap-2",
      children: [Hm.map(D => s.jsx("span", {
        className: "chip normal-case tracking-normal",
        children: D
      }, D)), s.jsx("span", {
        className: "self-center font-mono text-[0.49rem] uppercase tracking-[0.05em] text-forest/28",
        children: "Word bank"
      })]
    }), s.jsx(es, {
      complete: r,
      canCheck: v,
      checkLabel: "Check my sentences",
      onCheck: h,
      feedback: y,
      hint: "Once a day = one time each day. Twice a week = two times each week. Never = not at all. After “a”, choose day or week.",
      helper: "Choose a phrase for all 7 sentences"
    })]
  })
}

function T1({
  completed: r,
  onComplete: f
}) {
  const [d, o] = ttcUse("reportOrder", () => ttcShuffle(Lt.map(Y => Y.id))), [b, k] = Z.useState(null), [y, w] = Z.useState(!1), [v, h] = Z.useState(null), D = Lt.map(Y => Y.id), A = Object.fromEntries(Lt.map(Y => [Y.id, Y])), O = d.filter((Y, R) => Y === D[R]).length, G = (Y, R) => {
    const W = Y + R;
    W < 0 || W >= d.length || (o(F => {
      const le = [...F];
      return [le[Y], le[W]] = [le[W], le[Y]], le
    }), w(!1), h(null))
  }, H = Y => {
    !b || b === Y || (o(R => {
      const W = R.filter(le => le !== b),
        F = W.indexOf(Y);
      return W.splice(F, 0, b), W
    }), k(null), w(!1), h(null))
  }, V = () => {
    w(!0), d.every((R, W) => R === D[W]) ? (h({
      tone: "success",
      message: "The report is in order: class size first, then one activity at a time. This is a complete, logical case report."
    }), f()) : h({
      tone: "partial",
      message: `${O} of 7 lines are in the right position. Green numbers are correct. Reorder the rest — begin with the class size.`
    })
  };
  return s.jsxs(Pn, {
    number: 5,
    eyebrow: "Sequence the facts",
    title: "Rebuild the report",
    intro: "Seven report lines are out of order. Move them until the report tells the story logically: class total first, then the evidence for each activity.",
    icon: mb,
    accent: "ink",
    complete: r,
    children: [s.jsxs("div", {
      className: "mb-2.5 flex items-center justify-between",
      children: [s.jsx("span", {
        className: "label-mono text-[0.49rem] text-forest/38",
        children: "Draft report · 7 lines"
      }), s.jsxs("button", {
        type: "button",
        onClick: () => {
          o(ttcShuffle(Lt.map(Y => Y.id))), w(!1), h(null)
        },
        className: "inline-flex items-center gap-1 font-mono text-[0.5rem] uppercase tracking-[0.05em] text-forest/35 transition-colors hover:text-forest",
        children: [s.jsx(oo, {
          className: "h-3 w-3"
        }), "Reshuffle"]
      })]
    }), s.jsx("ol", {
      className: "relative space-y-1.5",
      children: d.map((Y, R) => {
        const W = A[Y],
          F = y && Y === D[R],
          le = y && Y !== D[R];
        return s.jsxs("li", {
          draggable: !0,
          onDragStart: () => k(Y),
          onDragEnd: () => k(null),
          onDragOver: xe => xe.preventDefault(),
          onDrop: xe => {
            xe.preventDefault(), H(Y)
          },
          className: P("group flex items-start gap-2.5 rounded-xl border bg-white/40 px-2.5 py-2 transition-colors sm:px-3", F ? "border-[#9bbda3]/60 bg-[#edf5ee]/55" : le ? "border-[#c98a77]/45 bg-[#fdf5f0]/45" : b === Y ? "border-brass bg-brass-light/20" : "border-forest/10"),
          children: [s.jsx(vh, {
            className: "mt-0.5 hidden h-4 w-4 shrink-0 cursor-grab text-forest/22 sm:block"
          }), s.jsx("span", {
            className: P("mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono text-[0.56rem]", F ? "border-forest bg-forest text-parchment-light" : "border-forest/15 bg-parchment text-forest/48"),
            children: F ? s.jsx(De, {
              className: "h-3 w-3",
              strokeWidth: 3
            }) : R + 1
          }), s.jsx("p", {
            className: "flex-1 pt-0.5 text-[0.79rem] font-medium leading-relaxed text-forest/70",
            children: W.text
          }), s.jsxs("span", {
            className: "flex shrink-0 flex-col gap-0.5",
            children: [s.jsx("button", {
              type: "button",
              onClick: () => G(R, -1),
              disabled: R === 0,
              className: "flex h-6 w-6 items-center justify-center rounded-md border border-forest/10 bg-parchment-light/70 text-forest/40 transition-colors hover:border-forest/25 hover:text-forest disabled:cursor-not-allowed disabled:opacity-25",
              "aria-label": `Move report line ${R+1} up`,
              children: s.jsx(nb, {
                className: "h-3 w-3"
              })
            }), s.jsx("button", {
              type: "button",
              onClick: () => G(R, 1),
              disabled: R === d.length - 1,
              className: "flex h-6 w-6 items-center justify-center rounded-md border border-forest/10 bg-parchment-light/70 text-forest/40 transition-colors hover:border-forest/25 hover:text-forest disabled:cursor-not-allowed disabled:opacity-25",
              "aria-label": `Move report line ${R+1} down`,
              children: s.jsx(io, {
                className: "h-3 w-3"
              })
            })]
          })]
        }, Y)
      })
    }), s.jsxs("div", {
      className: "mt-3 grid gap-2 rounded-xl border border-forest/10 bg-parchment/55 p-3 sm:grid-cols-[1fr_auto] sm:items-center",
      children: [s.jsxs("div", {
        children: [s.jsx("p", {
          className: "label-mono text-[0.48rem] text-forest/38",
          children: "Report logic"
        }), s.jsx("p", {
          className: "mt-1 text-[0.69rem] font-semibold leading-relaxed text-forest/58",
          children: "Big picture → one activity at a time → smallest / most surprising fact."
        })]
      }), s.jsx("div", {
        className: "flex gap-1",
        "aria-hidden": "true",
        children: Lt.map((Y, R) => s.jsx("span", {
          className: P("flex h-6 w-6 items-center justify-center rounded-full border font-mono text-[0.5rem]", y && d[R] === D[R] ? "border-forest/30 bg-forest text-parchment-light" : "border-forest/12 text-forest/36"),
          children: R + 1
        }, Y.id))
      })]
    }), s.jsx(es, {
      complete: r,
      canCheck: !0,
      checkLabel: "Check the sequence",
      onCheck: V,
      feedback: v,
      hint: "Line 1 sets the scene: how many pupils are in the class? Lines 2–6 move through one activity at a time, with the frequency and number together. The final line is the smallest never fact.",
      helper: "Arrange all 7 lines, then check"
    })]
  })
}


const ttcQPrompts = [{
  id: "qq1",
  prompt: "Write a question to find how many children watch TV twice a week.",
  keys: [["how many", "watch tv"], ["how many", "tv", "twice"]]
}, {
  id: "qq2",
  prompt: "Write a question to find how many children never watch TV.",
  keys: [["how many", "never", "tv"], ["how many", "watch tv", "never"]]
}, {
  id: "qq3",
  prompt: "Write a question to find how many children do sport once a day.",
  keys: [["how many", "sport"], ["how many", "do sport"]]
}, {
  id: "qq4",
  prompt: "Write a question to find how many children never play computer games.",
  keys: [["how many", "computer"], ["how many", "games", "never"]]
}, {
  id: "qq5",
  prompt: "Write a question to find how many children read a book once a day.",
  keys: [["how many", "read"], ["how many", "book"]]
}, {
  id: "qq6",
  prompt: "Write a question about the size of the class (how many pupils there are).",
  keys: [["how many", "pupil"], ["how many", "children", "class"], ["how many", "in", "class"]]
}];

function ttcScoreQ(val, row) {
  if (!ttcIsQuestion(val)) return false;
  const n = ttcNorm(val);
  return row.keys.some(g => g.every(p => n.includes(ttcNorm(p))))
}

function TtcQuestions() {
  const [d, o] = ttcUse("questions", {}), [b, k] = ttcUse("questionsChecked", !1);
  const filled = ttcQPrompts.every(q => ttcNorm((d || {})[q.id]));
  const onCheck = () => { k(!0) };
  return s.jsxs("section", {
    id: "ask-questions",
    className: "scroll-mt-28 pt-8 sm:pt-10",
    "aria-labelledby": "ask-questions-heading",
    children: [s.jsxs("article", {
      className: "overflow-hidden rounded-[22px] border border-forest/11 bg-parchment-light/82 p-4 shadow-card sm:p-6",
      children: [s.jsxs("header", {
        className: "mb-4",
        children: [s.jsx("p", {
          className: "label-mono text-[0.53rem] text-forest/42",
          children: "Write it yourself · 6 questions"
        }), s.jsx("h3", {
          id: "ask-questions-heading",
          className: "mt-1.5 text-[1.55rem] leading-none text-forest sm:text-[1.7rem]",
          children: "Ask the witnesses"
        }), s.jsx("p", {
          className: "mt-2 max-w-2xl text-[0.79rem] leading-relaxed text-forest/58",
          children: "Write six questions of your own about Exhibit A. Do not copy a ready-made question from a list — compose each one. A question mark or a question word is enough; spelling can be a little free, but the meaning must be clear."
        })]
      }), s.jsx("div", {
        className: "grid gap-2.5 sm:grid-cols-2",
        children: ttcQPrompts.map((q, i) => {
          const val = (d || {})[q.id] || "";
          const ok = b && ttcScoreQ(val, q);
          const bad = b && !ok;
          return s.jsxs("div", {
            className: "rounded-xl border p-3 " + (ok ? "border-[#9bbda3]/60 bg-[#edf5ee]/55" : bad ? "border-[#c98a77]/50 bg-[#fdf5f0]/55" : "border-forest/10 bg-white/40"),
            children: [s.jsxs("label", {
              htmlFor: "qq-" + q.id,
              className: "block text-[0.78rem] font-semibold text-forest/72",
              children: [String(i + 1).padStart(2, "0"), ". ", q.prompt]
            }), s.jsx("textarea", {
              id: "qq-" + q.id,
              rows: 2,
              maxLength: 200,
              value: val,
              placeholder: "Write your question in English…",
              onChange: ev => {
                o(prev => Object.assign({}, prev, {
                  [q.id]: ev.target.value.slice(0, 200)
                }));
                k(!1)
              },
              className: "field mt-2 w-full min-h-[3rem] px-2.5 py-2 text-[0.78rem]"
            }), b ? s.jsx("p", {
              className: "mt-1.5 text-[0.68rem] font-semibold " + (ok ? "text-[#2f5c42]" : "text-[#8b4d34]"),
              children: ok ? "This question is accepted." : "Make it a real question and mention the activity or fact from the table."
            }) : null]
          }, q.id)
        })
      }), s.jsxs("div", {
        className: "mt-4 flex flex-wrap items-center gap-2.5",
        children: [s.jsx("button", {
          type: "button",
          className: "btn btn-primary btn-sm",
          disabled: !filled,
          onClick: onCheck,
          children: "Check my questions"
        }), b ? s.jsxs("span", {
          className: "font-mono text-[0.7rem] text-forest/60",
          children: [ttcQPrompts.filter(q => ttcScoreQ((d || {})[q.id], q)).length, " / 6 accepted"]
        }) : s.jsx("span", {
          className: "font-mono text-[0.54rem] uppercase tracking-[0.05em] text-forest/32",
          children: "Write all 6 questions to check"
        })]
      })]
    })]
  })
}


function A1({
  completed: r,
  progress: f,
  onComplete: d
}) {
  return s.jsxs("section", {
    id: "investigation",
    className: "scroll-mt-28 pt-12 sm:pt-14",
    "aria-labelledby": "investigation-heading",
    children: [s.jsx(In, {
      id: "investigation-heading",
      index: "03",
      kicker: "The investigation · Five checkpoints · 25 min",
      title: s.jsxs(s.Fragment, {
        children: ["Clear the case, ", s.jsx("em", {
          className: "italic text-forest/55",
          children: "clue by clue."
        })]
      }),
      description: "Each checkpoint restores part of the file. Mistakes are safe: read the nudge, check the evidence, and try again. Your detective notes are always available.",
      right: s.jsxs("div", {
        className: "flex items-center gap-3 rounded-[14px] border border-forest/12 bg-parchment-light/70 px-3.5 py-2.5",
        children: [s.jsxs("span", {
          className: "relative flex h-9 w-9 items-center justify-center rounded-full border border-forest/12 font-mono text-[0.65rem] font-semibold text-forest",
          children: [f, "%"]
        }), s.jsxs("div", {
          children: [s.jsx("p", {
            className: "label-mono text-[0.47rem] text-forest/36",
            children: "File status"
          }), s.jsx("p", {
            className: "text-[0.69rem] font-extrabold text-forest/68",
            children: r.length === 5 ? "Ready to seal" : `${r.length} of 5 cleared`
          })]
        })]
      })
    }), s.jsx(Bl, {
      children: s.jsx("div", {
        className: "mb-4 grid grid-cols-5 gap-1.5 rounded-[16px] border border-forest/11 bg-parchment-light/60 p-2",
        children: y1.map((o, b) => {
          const k = r.includes(o.id);
          return s.jsxs("a", {
            href: `#task-${o.id}`,
            className: P("group flex min-w-0 flex-col items-center gap-1.5 rounded-xl px-1 py-2 text-center transition-colors", k ? "bg-forest/[0.055]" : "hover:bg-forest/[0.035]"),
            children: [s.jsx(fo, {
              complete: k,
              number: b + 1,
              size: "sm"
            }), s.jsx("span", {
              className: P("hidden truncate text-[0.58rem] font-bold sm:block", k ? "text-forest/70" : "text-forest/38"),
              children: o.eyebrow
            }), s.jsx("span", {
              className: "font-mono text-[0.48rem] text-forest/30 sm:hidden",
              children: b + 1
            })]
          }, o.id)
        })
      })
    }), s.jsxs("div", {
      className: "space-y-3.5",
      children: [s.jsx(w1, {
        completed: r.includes(1),
        onComplete: () => d(1)
      }), s.jsx(S1, {
        completed: r.includes(2),
        onComplete: () => d(2)
      }), s.jsx(k1, {
        completed: r.includes(3),
        onComplete: () => d(3)
      }), s.jsx(z1, {
        completed: r.includes(4),
        onComplete: () => d(4)
      }), s.jsx(T1, {
        completed: r.includes(5),
        onComplete: () => d(5)
      })]
    }), s.jsx(Bl, {
      children: s.jsxs("div", {
        className: "mt-4 flex flex-col items-start justify-between gap-4 rounded-[18px] border border-forest/11 bg-[#eae1cf]/55 px-4 py-4 sm:flex-row sm:items-center",
        children: [s.jsxs("div", {
          className: "flex items-start gap-3",
          children: [s.jsx(zi, {
            className: "mt-0.5 h-4 w-4 shrink-0 text-brass"
          }), s.jsxs("p", {
            className: "text-[0.73rem] leading-relaxed text-forest/58",
            children: [s.jsx("strong", {
              className: "font-extrabold text-forest",
              children: r.length === 5 ? "All checkpoints are clear." : "The file is rebuilding."
            }), " ", r.length === 5 ? "Move to the final report, verify the findings and seal the case." : `${5-r.length} checkpoint${5-r.length===1?"":"s"} remain before the final report can be verified.`]
          })]
        }), s.jsxs("a", {
          href: "#report",
          className: "btn btn-light btn-sm shrink-0",
          children: ["Go to the report", s.jsx(ki, {
            className: "h-3.5 w-3.5"
          })]
        })]
      })
    })]
  })
}
const E1 = [{
  label: "Once a day",
  color: "#c69a3d"
}, {
  label: "Twice a week",
  color: "#7e9c8c"
}, {
  label: "Never",
  color: "#c07d67"
}];

function op({
  text: r
}) {
  return s.jsx(s.Fragment, {
    children: r.split(/(\d+)/g).map((f, d) => /^\d+$/.test(f) ? s.jsx("span", {
      className: "mx-0.5 inline-block rounded-[3px] bg-brass/16 px-1 font-mono text-[0.92em] font-semibold leading-none text-forest",
      children: f
    }, `${f}-${d}`) : s.jsx("span", {
      children: f
    }, `${f}-${d}`))
  })
}

function M1() {
  return s.jsx("div", {
    className: "space-y-3",
    children: mo.map(r => {
      const f = r.values.once + r.values.twice + r.values.never,
        d = [{
          value: r.values.once,
          color: "#c69a3d",
          label: "once a day"
        }, {
          value: r.values.twice,
          color: "#7e9c8c",
          label: "twice a week"
        }, {
          value: r.values.never,
          color: "#c07d67",
          label: "never"
        }];
      return s.jsxs("div", {
        children: [s.jsxs("div", {
          className: "mb-1.5 flex items-baseline justify-between gap-2",
          children: [s.jsx("p", {
            className: "text-[0.67rem] font-bold capitalize text-forest/65",
            children: r.name
          }), s.jsxs("span", {
            className: "font-mono text-[0.53rem] text-forest/35",
            children: ["total ", f]
          })]
        }), s.jsx("div", {
          className: "flex h-2.5 gap-[2px] overflow-hidden rounded-full bg-forest/[0.06]",
          role: "img",
          "aria-label": `${r.name}: ${r.values.once} pupils once a day, ${r.values.twice} twice a week, ${r.values.never} never.`,
          children: d.map(o => s.jsx("span", {
            title: `${o.value} · ${o.label}`,
            style: {
              width: `${o.value/f*100}%`,
              backgroundColor: o.color
            },
            className: "block h-full first:rounded-l-full last:rounded-r-full"
          }, o.label))
        }), s.jsx("div", {
          className: "mt-1 flex justify-between font-mono text-[0.52rem] font-medium text-forest/42",
          children: d.map(o => s.jsx("span", {
            children: o.value
          }, o.label))
        })]
      }, r.id)
    })
  })
}

function _1({
  completed: r,
  progress: f,
  caseClosed: d,
  onSeal: o,
  onOpenCaseClosed: b,
  onDownload: k,
  onPrint: y
}) {
  const [w, v] = ttcUse("signature", ""), h = Array.isArray(r) && r.length === 5;
  return s.jsxs("section", {
    id: "report",
    className: "scroll-mt-28 pt-12 sm:pt-14",
    "aria-labelledby": "final-report-heading",
    children: [s.jsx(In, {
      id: "final-report-heading",
      index: "04",
      kicker: "The final report · Verify & seal · 5 min",
      title: s.jsxs(s.Fragment, {
        children: ["Every clue, in its ", s.jsx("em", {
          className: "italic text-forest/55",
          children: "rightful place."
        })]
      }),
      description: "The report below is built from the restored findings. Check that every statement is backed by Exhibit A, add your signature line, then seal the case.",
      right: s.jsxs("div", {
        className: "flex items-center gap-2 rounded-full border border-forest/12 bg-parchment-light/70 px-3.5 py-2",
        children: [s.jsx(ib, {
          className: P("h-4 w-4", h ? "text-[#3a7a5c]" : "text-forest/35")
        }), s.jsx("span", {
          className: "font-mono text-[0.58rem] uppercase tracking-[0.06em] text-forest/55",
          children: d ? "Case closed" : h ? "Ready to seal" : `${f}% restored`
        })]
      })
    }), s.jsx(Bl, {
      children: s.jsxs("div", {
        className: "rounded-[24px] border border-forest/12 bg-[#eae1cf]/55 p-2 shadow-card sm:p-3",
        children: [s.jsxs("div", {
          className: P("mb-2 flex flex-col justify-between gap-3 rounded-[17px] border px-4 py-3.5 sm:flex-row sm:items-center", h ? "border-[#9bbda3]/55 bg-[#e7f0e9]" : "border-forest/10 bg-parchment-light/70"),
          children: [s.jsxs("div", {
            className: "flex items-start gap-2.5",
            children: [h ? s.jsx(tb, {
              className: "mt-0.5 h-[18px] w-[18px] shrink-0 text-[#3a7a5c]"
            }) : s.jsx(ji, {
              className: "mt-0.5 h-[17px] w-[17px] shrink-0 text-forest/48"
            }), s.jsxs("div", {
              children: [s.jsx("p", {
                className: "text-[0.75rem] font-extrabold text-forest",
                children: d ? "The file is sealed and complete." : h ? "All evidence restored. The report is ready for verification." : `Report preview — ${5-r.length} checkpoint${5-r.length===1?"":"s"} still open.`
              }), s.jsx("p", {
                className: "mt-0.5 text-[0.67rem] leading-relaxed text-forest/50",
                children: d ? "You can revisit the case-closing file whenever you need it." : h ? "Review the facts, sign your name, then press “Seal the case”." : "The findings stay marked as unverified until every checkpoint is cleared."
              })]
            })]
          }), d ? s.jsxs("button", {
            type: "button",
            onClick: b,
            className: "btn btn-light btn-sm shrink-0",
            children: [s.jsx(Ni, {
              className: "h-3.5 w-3.5"
            }), "View Case Closed"]
          }) : s.jsx("button", {
            type: "button",
            onClick: o,
            disabled: !h || !String(w).trim(),
            className: "btn btn-primary btn-sm shrink-0",
            children: h ? s.jsxs(s.Fragment, {
              children: [s.jsx(Ni, {
                className: "h-3.5 w-3.5"
              }), "Seal the case"]
            }) : s.jsxs(s.Fragment, {
              children: [s.jsx(ji, {
                className: "h-3.5 w-3.5"
              }), f, "% restored"]
            })
          })]
        }), s.jsxs("article", {
          "aria-labelledby": "report-heading",
          className: "report-print relative overflow-hidden rounded-[17px] border border-forest/12 bg-[#fcf9f1] px-4 py-5 sm:px-7 sm:py-7 lg:px-9 lg:py-8",
          children: [s.jsx("div", {
            "aria-hidden": "true",
            className: "pointer-events-none absolute -right-7 top-20 select-none font-display text-[14rem] leading-none text-forest/[0.025]",
            children: "021"
          }), s.jsxs("div", {
            className: "relative flex flex-col justify-between gap-4 border-b-2 border-forest/70 pb-4 sm:flex-row sm:items-start",
            children: [s.jsxs("div", {
              children: [s.jsxs("div", {
                className: "mb-3 flex items-center gap-2",
                children: [s.jsx("span", {
                  className: "flex h-7 w-7 items-center justify-center rounded-md border border-forest/60 font-display text-[0.8rem] font-bold text-forest",
                  children: "F"
                }), s.jsxs("div", {
                  children: [s.jsx("p", {
                    className: "label-mono text-[0.48rem] tracking-[0.15em] text-forest/60",
                    children: "Field Notes Bureau"
                  }), s.jsx("p", {
                    className: "font-mono text-[0.46rem] uppercase tracking-[0.1em] text-forest/38",
                    children: "English investigation division"
                  })]
                })]
              }), s.jsx("p", {
                className: "label-mono text-[0.48rem] text-forest/38",
                children: "Official case report · No. 021"
              }), s.jsxs("h3", {
                id: "report-heading",
                className: "mt-1.5 max-w-lg text-[clamp(1.7rem,3.5vw,2.45rem)] leading-[1.02] text-forest",
                children: ["Leisure habits of ", s.jsx("em", {
                  className: "italic",
                  children: "Class 3B"
                })]
              })]
            }), s.jsx("div", {
              className: P("stamp shrink-0 self-start text-[0.57rem] sm:mt-1", d ? "stamp-double animate-stamp text-[#3a7a5c]" : "text-clay/70"),
              children: d ? "Case Closed" : "Awaiting verification"
            })]
          }), s.jsxs("div", {
            className: "relative grid grid-cols-2 gap-x-4 gap-y-3 border-b border-forest/13 py-4 sm:grid-cols-4",
            children: [s.jsxs("div", {
              children: [s.jsx("p", {
                className: "label-mono text-[0.45rem] text-forest/35",
                children: "Subject"
              }), s.jsx("p", {
                className: "mt-1 text-[0.68rem] font-bold text-forest/72",
                children: "Free-time survey"
              })]
            }), s.jsxs("div", {
              children: [s.jsx("p", {
                className: "label-mono text-[0.45rem] text-forest/35",
                children: "Evidence"
              }), s.jsx("p", {
                className: "mt-1 text-[0.68rem] font-bold text-forest/72",
                children: "Exhibit A · Table"
              })]
            }), s.jsxs("div", {
              children: [s.jsx("p", {
                className: "label-mono text-[0.45rem] text-forest/35",
                children: "Cohort"
              }), s.jsx("p", {
                className: "mt-1 text-[0.68rem] font-bold text-forest/72",
                children: "21 pupils · 4 activities"
              })]
            }), s.jsxs("div", {
              children: [s.jsx("p", {
                className: "label-mono text-[0.45rem] text-forest/35",
                children: "Status"
              }), s.jsxs("p", {
                className: P("mt-1 flex items-center gap-1 text-[0.68rem] font-bold", d ? "text-[#3a7a5c]" : "text-clay"),
                children: [s.jsx("span", {
                  className: P("h-1.5 w-1.5 rounded-full", d ? "bg-[#3a7a5c]" : "bg-clay")
                }), d ? "Closed" : h ? "Ready" : "Draft"]
              })]
            })]
          }), s.jsxs("div", {
            className: "relative grid gap-6 py-5 lg:grid-cols-[1.28fr_0.72fr] lg:gap-8",
            children: [s.jsxs("div", {
              children: [s.jsx("p", {
                className: "label-mono text-[0.47rem] text-forest/36",
                children: "Summary"
              }), s.jsxs("p", {
                className: "mt-2 text-[0.76rem] leading-[1.8] text-forest/65",
                children: [s.jsx("span", {
                  className: "float-left mr-2 mt-0.5 font-display text-[2.8rem] leading-[0.78] text-forest",
                  children: "T"
                }), "he class survey is complete and all four activity rows are internally consistent. Twenty-one pupils answered, so every activity has exactly 21 responses. The restored findings below report the numbers exactly as they appear in Exhibit A."]
              }), s.jsx("p", {
                className: "label-mono mb-2.5 mt-5 text-[0.47rem] text-forest/36",
                children: "Restored findings · 7 statements"
              }), s.jsx("ol", {
                className: "space-y-1.5",
                children: po.map((D, A) => s.jsxs("li", {
                  className: "flex items-start gap-2.5 rounded-md border border-transparent px-1.5 py-1 transition-colors hover:border-forest/8 hover:bg-forest/[0.025]",
                  children: [s.jsx("span", {
                    className: "mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border border-forest/18 font-mono text-[0.48rem] text-forest/40",
                    children: A + 1
                  }), s.jsx("p", {
                    className: "text-[0.75rem] leading-relaxed text-forest/72",
                    children: s.jsx(op, {
                      text: D
                    })
                  })]
                }, D))
              }), s.jsx("p", {
                className: "label-mono mb-2 mt-5 text-[0.47rem] text-forest/36",
                children: "Conclusion"
              }), s.jsxs("p", {
                className: "text-[0.74rem] leading-[1.8] text-forest/62",
                children: ["Every activity row adds up to 21, so there are no missing pupils and no duplicate answers. Sport is the most popular twice-a-week activity (", 12, " pupils), while watching TV once a day is the most common single answer (", 13, " pupils). The survey is consistent, complete, and ready to close."]
              }), s.jsxs("div", {
                className: "mt-5 flex flex-col justify-between gap-4 border-t border-forest/15 pt-4 sm:flex-row sm:items-end",
                children: [s.jsxs("label", {
                  className: "block max-w-[250px] flex-1",
                  children: [s.jsxs("span", {
                    className: "label-mono flex items-center gap-1.5 text-[0.45rem] text-forest/36",
                    children: [s.jsx(yb, {
                      className: "h-3 w-3"
                    }), "Verified by"]
                  }), s.jsx("input", {
                    type: "text",
                    value: w,
                    onChange: D => v(D.target.value.slice(0, 34)),
                    placeholder: "Your detective name",
                    className: "mt-1.5 w-full border-0 border-b border-forest/25 bg-transparent px-0 py-1 font-display text-[0.9rem] italic text-forest placeholder:text-forest/22 focus:border-brass focus:outline-none focus:ring-0"
                  })]
                }), s.jsxs("div", {
                  className: "text-left sm:text-right",
                  children: [s.jsx("p", {
                    className: "label-mono text-[0.43rem] text-forest/32",
                    children: "Lead detective"
                  }), s.jsx("p", {
                    className: "mt-1 font-display text-[0.86rem] italic text-forest/60",
                    children: w.trim() || "Agent ________"
                  }), s.jsx("p", {
                    className: "mt-0.5 font-mono text-[0.44rem] uppercase tracking-[0.08em] text-forest/30",
                    children: "Academy Stars 3 · Lesson 8"
                  })]
                })]
              })]
            }), s.jsxs("aside", {
              className: "rounded-[12px] border border-forest/13 bg-parchment/55 px-3.5 py-4",
              children: [s.jsxs("div", {
                className: "flex items-center justify-between",
                children: [s.jsx("p", {
                  className: "label-mono text-[0.46rem] text-forest/38",
                  children: "Exhibit A · breakdown"
                }), s.jsx(ao, {
                  className: "h-3.5 w-3.5 text-forest/20"
                })]
              }), s.jsxs("div", {
                className: "my-3 rounded-lg border border-forest/10 bg-parchment-light/70 px-2.5 py-2.5",
                children: [s.jsxs("div", {
                  className: "flex items-baseline gap-2",
                  children: [s.jsx("span", {
                    className: "font-display text-[2.15rem] leading-none text-forest",
                    children: "21"
                  }), s.jsxs("span", {
                    className: "pb-0.5 text-[0.57rem] font-semibold leading-tight text-forest/45",
                    children: ["pupils in the", s.jsx("br", {}), "class"]
                  })]
                }), s.jsxs("div", {
                  className: "mt-2 border-t border-forest/9 pt-2 font-mono text-[0.48rem] uppercase leading-relaxed tracking-[0.04em] text-forest/35",
                  children: [ho, " × 4 activities = 84 responses"]
                })]
              }), s.jsx(M1, {}), s.jsxs("div", {
                className: "mt-3.5 border-t border-forest/10 pt-2.5",
                children: [s.jsx("div", {
                  className: "flex flex-wrap gap-x-3 gap-y-1",
                  children: E1.map(D => s.jsxs("span", {
                    className: "flex items-center gap-1 font-mono text-[0.46rem] uppercase tracking-[0.02em] text-forest/45",
                    children: [s.jsx("span", {
                      className: "h-1.5 w-1.5 rounded-full",
                      style: {
                        backgroundColor: D.color
                      }
                    }), D.label]
                  }, D.label))
                }), s.jsxs("div", {
                  className: "mt-2.5 flex items-center gap-1.5 rounded-md bg-[#dbe8dc]/45 px-2 py-1.5",
                  children: [s.jsx(De, {
                    className: "h-3 w-3 shrink-0 text-[#3a6448]"
                  }), s.jsx("p", {
                    className: "text-[0.55rem] font-semibold leading-snug text-forest/55",
                    children: "Every row totals 21 — evidence verified."
                  })]
                })]
              })]
            })]
          }), s.jsxs("div", {
            className: "relative flex flex-col justify-between gap-2 border-t border-forest/20 pt-3 sm:flex-row sm:items-center",
            children: [s.jsx("p", {
              className: "font-mono text-[0.46rem] uppercase tracking-[0.1em] text-forest/32",
              children: "Case no. 021 · Decode & sequence · 45-minute individual session"
            }), s.jsxs("p", {
              className: "font-mono text-[0.46rem] uppercase tracking-[0.08em] text-forest/32",
              children: ["File restoration: ", d ? "100%" : `${f}%`]
            })]
          })]
        }), s.jsxs("div", {
          className: "no-print flex flex-col items-start justify-between gap-3 px-2 pb-1 pt-3 sm:flex-row sm:items-center",
          children: [s.jsxs("div", {
            className: "flex items-center gap-2",
            children: [s.jsx(zi, {
              className: "h-3.5 w-3.5 text-brass"
            }), s.jsx("p", {
              className: "text-[0.65rem] font-semibold text-forest/45",
              children: h ? "Evidence checked. The report is ready for the final stamp." : "Keep restoring the file to unlock the official seal."
            })]
          }), s.jsxs("div", {
            className: "flex flex-wrap gap-2",
            children: [s.jsxs("button", {
              type: "button",
              onClick: k,
              className: "btn btn-light btn-sm",
              children: [s.jsx(fh, {
                className: "h-3.5 w-3.5"
              }), "Download"]
            }), s.jsxs("button", {
              type: "button",
              onClick: y,
              className: "btn btn-light btn-sm",
              children: [s.jsx(Rh, {
                className: "h-3.5 w-3.5"
              }), "Print"]
            }), d ? null : s.jsxs("button", {
              type: "button",
              onClick: o,
              disabled: !h || !String(w).trim(),
              className: "btn btn-primary btn-sm",
              children: [h ? s.jsx(Ni, {
                className: "h-3.5 w-3.5"
              }) : s.jsx(ji, {
                className: "h-3.5 w-3.5"
              }), "Seal the case"]
            })]
          })]
        })]
      })
    }), s.jsx("div", {
      className: "mt-3 flex justify-center",
      children: s.jsxs("a", {
        href: "#homework",
        className: "group inline-flex items-center gap-2 font-mono text-[0.55rem] uppercase tracking-[0.08em] text-forest/38 transition-colors hover:text-forest",
        children: ["Continue to the take-home dossier", s.jsx(ki, {
          className: "h-3 w-3 transition-transform group-hover:translate-y-0.5"
        })]
      })
    })]
  })
}
const Ym = ["#d5a03c", "#7e9c8c", "#c07d67", "#f2dfb4", "#f4efe4"];

function C1({
  open: r,
  onClose: f,
  onDownload: d,
  onPrint: o,
  completed: b
}) {
  const k = Z.useRef(f);
  return Z.useEffect(() => {
    k.current = f
  }, [f]), Z.useEffect(() => {
    if (!r) return;
    const y = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const w = v => {
      v.key === "Escape" && k.current()
    };
    return window.addEventListener("keydown", w), () => {
      document.body.style.overflow = y, window.removeEventListener("keydown", w)
    }
  }, [r]), r ? s.jsxs("div", {
    className: "no-print fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-forest-deep/72 px-3 py-4 backdrop-blur-md sm:items-center sm:px-5 sm:py-8",
    children: [s.jsx("div", {
      className: "pointer-events-none fixed inset-0 overflow-hidden",
      "aria-hidden": "true",
      children: Array.from({
        length: 34
      }).map((y, w) => {
        const v = (w * 37 + 11) % 100,
          h = 4.2 + w * 13 % 35 / 10,
          D = w * 7 % 30 / 10,
          A = w * 23 % 120 - 60,
          O = 5 + w % 3 * 3;
        return s.jsx("span", {
          className: "confetti-piece absolute top-0 block rounded-[1px]",
          style: {
            left: `${v}%`,
            width: `${O}px`,
            height: `${O*1.7}px`,
            backgroundColor: Ym[w % Ym.length],
            "--duration": `${h}s`,
            "--delay": `${D}s`,
            "--drift": `${A}px`
          }
        }, w)
      })
    }), s.jsxs("div", {
      className: "animate-rise relative z-10 w-full max-w-[680px] overflow-hidden rounded-[24px] border border-brass/30 bg-parchment-light shadow-2xl",
      children: [s.jsx("button", {
        type: "button",
        onClick: f,
        className: "absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-forest/15 bg-parchment-light/80 text-forest/55 transition-colors hover:bg-parchment hover:text-forest",
        "aria-label": "Close Case Closed screen",
        children: s.jsx(ql, {
          className: "h-3.5 w-3.5"
        })
      }), s.jsxs("div", {
        className: "relative overflow-hidden bg-forest px-5 pb-14 pt-7 text-center text-parchment-light sm:px-8 sm:pb-16 sm:pt-9",
        children: [s.jsx("div", {
          className: "pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brass/15"
        }), s.jsx("div", {
          className: "pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brass/10"
        }), s.jsxs("div", {
          className: "relative",
          children: [s.jsxs("p", {
            className: "label-mono mb-3 flex items-center justify-center gap-2 text-[0.54rem] text-brass",
            children: [s.jsx(zi, {
              className: "h-3.5 w-3.5"
            }), "Case file no. 021 · 100% restored"]
          }), s.jsxs("div", {
            className: "animate-stamp mx-auto mb-5 inline-flex items-center gap-2 rounded-md border-2 border-brass px-4 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brass",
            children: [s.jsx(Ni, {
              className: "h-4 w-4"
            }), "Case closed"]
          }), s.jsxs("h2", {
            className: "text-[clamp(2.2rem,7vw,3.4rem)] leading-[0.98] text-parchment-light",
            children: ["Evidence restored.", s.jsx("br", {}), s.jsx("em", {
              className: "italic text-brass",
              children: "Mystery solved."
            })]
          }), s.jsx("p", {
            className: "mx-auto mt-3 max-w-[27rem] text-[0.76rem] leading-relaxed text-parchment/58",
            children: "You cleared all five checkpoints, rebuilt every missing finding, and proved the class total. Class 3B's survey is complete."
          }), s.jsxs("div", {
            className: "mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[0.53rem] uppercase tracking-[0.08em] text-parchment/45",
            children: [s.jsxs("span", {
              className: "flex items-center gap-1.5",
              children: [s.jsx(De, {
                className: "h-3 w-3 text-brass"
              }), "5/5 checkpoints"]
            }), s.jsxs("span", {
              className: "flex items-center gap-1.5",
              children: [s.jsx(De, {
                className: "h-3 w-3 text-brass"
              }), "7 findings restored"]
            }), s.jsxs("span", {
              className: "flex items-center gap-1.5",
              children: [s.jsx(De, {
                className: "h-3 w-3 text-brass"
              }), b, " pupils surveyed"]
            })]
          })]
        })]
      }), s.jsx("div", {
        className: "relative -mt-8 px-3 pb-4 sm:px-5",
        children: s.jsxs("div", {
          className: "rounded-[16px] border border-forest/12 bg-parchment-light p-4 shadow-lg sm:p-6",
          children: [s.jsxs("div", {
            className: "mb-3 flex items-center justify-between border-b border-forest/15 pb-2.5",
            children: [s.jsx("p", {
              className: "label-mono text-[0.49rem] text-forest/42",
              children: "Final report · Class 3B"
            }), s.jsx("span", {
              className: "stamp text-[0.42rem] text-[#3a7a5c]",
              children: "Verified"
            })]
          }), s.jsx("ol", {
            className: "grid gap-x-4 gap-y-1 sm:grid-cols-2",
            children: po.map((y, w) => s.jsxs("li", {
              className: "flex items-start gap-2 border-b border-forest/7 py-1.5 text-[0.69rem] leading-relaxed text-forest/68 sm:last:border-0",
              children: [s.jsx("span", {
                className: "mt-0.5 font-mono text-[0.5rem] text-forest/30",
                children: String(w + 1).padStart(2, "0")
              }), s.jsx("span", {
                children: s.jsx(op, {
                  text: y
                })
              })]
            }, y))
          }), s.jsx("p", {
            className: "mt-3 rounded-lg bg-[#dbe8dc]/40 px-3 py-2 text-[0.64rem] leading-relaxed text-forest/55",
            children: "All four activity rows total 21. The survey is internally consistent: 21 pupils × 4 activities = 84 responses."
          })]
        })
      }), s.jsxs("div", {
        className: "flex flex-col gap-2 px-4 pb-4 sm:flex-row sm:justify-center sm:px-5 sm:pb-5",
        children: [s.jsx("button", {
          type: "button",
          onClick: f,
          className: "btn btn-primary w-full sm:w-auto",
          children: "Review the case"
        }), s.jsxs("button", {
          type: "button",
          onClick: d,
          className: "btn btn-light w-full sm:w-auto",
          children: [s.jsx(fh, {
            className: "h-3.5 w-3.5"
          }), "Download report"]
        }), s.jsxs("button", {
          type: "button",
          onClick: o,
          className: "btn btn-light w-full sm:w-auto",
          children: [s.jsx(Rh, {
            className: "h-3.5 w-3.5"
          }), "Print"]
        })]
      })]
    })]
  }) : null
}
const vi = [{
  id: "my-habits",
  number: "H1",
  short: "My habits",
  title: "Six sentences about me",
  time: "8–10 min",
  icon: _h
}, {
  id: "mini-table",
  number: "H2",
  short: "Mini table",
  title: "Build a habit table",
  time: "8–10 min",
  icon: Xh
}, {
  id: "my-day",
  number: "H3",
  short: "My day",
  title: "Put my day in order",
  time: "6–8 min",
  icon: co
}, {
  id: "finish-report",
  number: "H4",
  short: "Finish report",
  title: "Extend the report",
  time: "6–8 min",
  icon: cb
}];

function Wa(r) {
  return r.split(/[.!?]+/).map(f => f.trim()).filter(Boolean).length
}

function Ti({
  id: r,
  value: f,
  onChange: d,
  placeholder: o,
  rows: b = 7,
  label: k
}) {
  return s.jsxs("div", {
    className: "overflow-hidden rounded-xl border border-forest/14 bg-[#fffdf7] shadow-[inset_0_1px_3px_rgba(22,50,41,0.035)] focus-within:border-brass focus-within:ring-4 focus-within:ring-brass/10",
    children: [s.jsxs("div", {
      className: "flex items-center justify-between border-b border-forest/9 bg-parchment/40 px-3 py-1.5",
      children: [s.jsx("span", {
        className: "label-mono text-[0.47rem] text-forest/38",
        children: k
      }), s.jsxs("span", {
        className: "font-mono text-[0.48rem] uppercase tracking-[0.04em] text-forest/28",
        children: [Wa(f), " sentence", Wa(f) === 1 ? "" : "s"]
      })]
    }), s.jsx("textarea", {
      id: r,
      value: f,
      onChange: y => d(y.target.value),
      placeholder: o,
      rows: b,
      className: "block w-full resize-y border-0 bg-transparent px-3.5 py-3 text-[0.78rem] leading-[1.9] text-forest outline-none placeholder:text-forest/26 focus:ring-0",
      style: {
        backgroundImage: "repeating-linear-gradient(to bottom, transparent 0, transparent calc(1.9em - 1px), rgba(22,50,41,0.06) calc(1.9em - 1px), rgba(22,50,41,0.06) 1.9em)",
        backgroundPosition: "0 0.8rem"
      }
    })]
  })
}

function Ai({
  eligible: r,
  done: f,
  onToggle: d,
  requirement: o,
  readyMessage: b
}) {
  return s.jsxs("div", {
    className: "mt-4 flex flex-col justify-between gap-3 border-t border-forest/10 pt-4 sm:flex-row sm:items-center",
    children: [s.jsxs("p", {
      className: "flex items-center gap-2 text-[0.66rem] font-semibold text-forest/44",
      children: [r || f ? s.jsx(sh, {
        className: "h-3.5 w-3.5 shrink-0 text-[#3a7a5c]"
      }) : s.jsx(Hl, {
        className: "h-3.5 w-3.5 shrink-0 text-brass"
      }), f ? "Assignment complete. Save it in your notebook too." : r ? b : o]
    }), s.jsxs("button", {
      type: "button",
      onClick: d,
      disabled: !r && !f,
      className: P("btn btn-sm shrink-0", f ? "btn-light" : "btn-primary"),
      children: [s.jsx(De, {
        className: "h-3.5 w-3.5"
      }), f ? "Done — reopen" : "Mark assignment done"]
    })]
  })
}

function O1({
  done: r,
  toggleDone: f
}) {
  const [d, o] = ttcUse("hwHabits", ""), b = ["I usually…", "I … once a day.", "I … twice a week.", "I never…"], k = Wa(d), y = w => {
    o(v => v.trim() ? `${v.trim()} ${w} ` : `${w} `)
  };
  return s.jsxs("div", {
    children: [s.jsxs("div", {
      className: "mb-4 flex flex-wrap items-center gap-2",
      children: [s.jsx("span", {
        className: "chip",
        children: "Once a day"
      }), s.jsx("span", {
        className: "chip",
        children: "Twice a week"
      }), s.jsx("span", {
        className: "chip",
        children: "Never"
      }), s.jsx("span", {
        className: "ml-auto font-mono text-[0.5rem] uppercase tracking-[0.05em] text-forest/30",
        children: "Target: 6–8 sentences"
      })]
    }), s.jsxs("p", {
      className: "mb-3 rounded-lg border border-forest/9 bg-parchment/40 px-3 py-2 text-[0.69rem] leading-relaxed text-forest/50",
      children: [s.jsx("strong", {
        className: "font-bold text-forest/70",
        children: "Your brief:"
      }), " Write 6–8 sentences about your own free-time activities. Use each frequency phrase at least once. Be honest — this is your evidence, not Class 3B's."]
    }), s.jsx(Ti, {
      id: "homework-my-habits",
      value: d,
      onChange: o,
      label: "My field notes",
      rows: 9,
      placeholder: `I usually...
I ... once a day.
I ... twice a week.
I never...`
    }), s.jsxs("div", {
      className: "mt-3 flex flex-wrap items-center gap-1.5",
      children: [s.jsx("span", {
        className: "label-mono mr-1 text-[0.46rem] text-forest/32",
        children: "Starter clues"
      }), b.map(w => s.jsxs("button", {
        type: "button",
        onClick: () => y(w),
        className: "inline-flex items-center gap-1 rounded-full border border-forest/12 bg-parchment-light/70 px-2 py-1 text-[0.59rem] font-semibold text-forest/52 transition-colors hover:border-brass/45 hover:bg-brass-light/20 hover:text-forest",
        children: [s.jsx(ro, {
          className: "h-2.5 w-2.5"
        }), w]
      }, w))]
    }), s.jsx("div", {
      className: "mt-3 grid gap-2 sm:grid-cols-3",
      children: ["Capital letter at the start", "A clear frequency phrase", "A full stop at the end"].map(w => s.jsxs("div", {
        className: "flex items-center gap-1.5 rounded-lg border border-forest/8 bg-white/35 px-2.5 py-2 text-[0.62rem] font-semibold text-forest/46",
        children: [s.jsx(De, {
          className: "h-3 w-3 shrink-0 text-[#3a7a5c]"
        }), w]
      }, w))
    }), s.jsxs("div", {
      className: "mt-3 flex items-center justify-between rounded-lg bg-brass-light/20 px-3 py-2",
      children: [s.jsx("span", {
        className: "text-[0.64rem] font-semibold text-forest/48",
        children: "Sentence count"
      }), s.jsxs("span", {
        className: P("font-mono text-[0.7rem] font-semibold", k >= 6 ? "text-[#3a7a5c]" : "text-[#87631f]"),
        children: [k, " / 6 minimum"]
      })]
    }), s.jsx(Ai, {
      eligible: k >= 6,
      done: r,
      onToggle: f,
      requirement: "Write at least 6 complete sentences to finish.",
      readyMessage: "Six or more sentences written. Review punctuation, then mark it done."
    })]
  })
}
const D1 = [{
  activity: "",
  frequency: "",
  when: ""
}, {
  activity: "",
  frequency: "",
  when: ""
}, {
  activity: "",
  frequency: "",
  when: ""
}];

function R1({
  done: r,
  toggleDone: f
}) {
  const [d, o] = ttcUse("hwTable", D1), [b, k] = ttcUse("hwTableSentences", ""), [y, w] = Z.useState(""), v = Wa(b), h = (A, O, G) => {
    o(H => H.map((V, Y) => Y === A ? {
      ...V,
      [O]: G
    } : V)), w("")
  }, D = () => {
    if (d.some(O => !O.activity.trim() || !O.frequency || !O.when)) {
      w("Fill in an activity, frequency and time for all three habits before building your sentences.");
      return
    }
    const A = d.map((O, i) => `${i+1}. I … (${O.activity.trim() || "activity"}, ${O.frequency || "how often"}, ${O.when || "when"})`);
    if (!b.trim()) k(A.join("\n"));
    w("Your table is ready. Now write six full sentences yourself in the box — do not leave the notes in brackets.")
  };
  return s.jsxs("div", {
    children: [s.jsxs("div", {
      className: "mb-3 flex flex-col justify-between gap-2 sm:flex-row sm:items-center",
      children: [s.jsxs("p", {
        className: "text-[0.69rem] leading-relaxed text-forest/50",
        children: ["Choose ", s.jsx("strong", {
          className: "font-bold text-forest/70",
          children: "three real habits"
        }), ", then record how often and when. The table will become six sentences."]
      }), s.jsx("span", {
        className: "font-mono text-[0.49rem] uppercase tracking-[0.05em] text-forest/30",
        children: "3 rows → 6 sentences"
      })]
    }), s.jsx("div", {
      className: "overflow-x-auto rounded-xl border border-forest/13 bg-[#fffdf7]",
      children: s.jsxs("table", {
        className: "w-full min-w-[510px] border-collapse text-left",
        children: [s.jsx("thead", {
          children: s.jsxs("tr", {
            className: "border-b border-forest/13 bg-forest/[0.045]",
            children: [s.jsx("th", {
              className: "px-3 py-2 font-mono text-[0.5rem] font-medium uppercase tracking-[0.05em] text-forest/38",
              children: "#"
            }), s.jsx("th", {
              className: "px-2 py-2 font-mono text-[0.5rem] font-medium uppercase tracking-[0.05em] text-forest/38",
              children: "My free-time activity"
            }), s.jsx("th", {
              className: "px-2 py-2 font-mono text-[0.5rem] font-medium uppercase tracking-[0.05em] text-forest/38",
              children: "How often?"
            }), s.jsx("th", {
              className: "px-2 py-2 font-mono text-[0.5rem] font-medium uppercase tracking-[0.05em] text-forest/38",
              children: "When?"
            })]
          })
        }), s.jsx("tbody", {
          children: d.map((A, O) => s.jsxs("tr", {
            className: "border-b border-forest/8 last:border-0",
            children: [s.jsx("td", {
              className: "px-3 py-2 font-mono text-[0.6rem] text-forest/32",
              children: O + 1
            }), s.jsx("td", {
              className: "px-2 py-2",
              children: s.jsx("input", {
                type: "text",
                value: A.activity,
                onChange: G => h(O, "activity", G.target.value),
                placeholder: "e.g. play football",
                "aria-label": `Habit ${O+1} activity`,
                className: "field h-9 min-h-9 min-w-[150px] px-2.5 py-1 text-[0.69rem]"
              })
            }), s.jsx("td", {
              className: "px-2 py-2",
              children: s.jsxs("select", {
                value: A.frequency,
                onChange: G => h(O, "frequency", G.target.value),
                "aria-label": `Habit ${O+1} frequency`,
                className: "field h-9 min-h-9 min-w-[126px] px-2 py-1 text-[0.67rem]",
                children: [s.jsx("option", {
                  value: "",
                  children: "choose"
                }), s.jsx("option", {
                  value: "once a day",
                  children: "once a day"
                }), s.jsx("option", {
                  value: "twice a week",
                  children: "twice a week"
                }), s.jsx("option", {
                  value: "never",
                  children: "never"
                })]
              })
            }), s.jsx("td", {
              className: "px-2 py-2",
              children: s.jsxs("select", {
                value: A.when,
                onChange: G => h(O, "when", G.target.value),
                "aria-label": `Habit ${O+1} time`,
                className: "field h-9 min-h-9 min-w-[132px] px-2 py-1 text-[0.67rem]",
                children: [s.jsx("option", {
                  value: "",
                  children: "choose"
                }), s.jsx("option", {
                  value: "after school",
                  children: "after school"
                }), s.jsx("option", {
                  value: "in the evening",
                  children: "in the evening"
                }), s.jsx("option", {
                  value: "at the weekend",
                  children: "at the weekend"
                }), s.jsx("option", {
                  value: "before school",
                  children: "before school"
                })]
              })
            })]
          }, O))
        })]
      })
    }), s.jsxs("div", {
      className: "mt-3 flex flex-wrap items-center gap-3",
      children: [s.jsxs("button", {
        type: "button",
        onClick: D,
        className: "btn btn-primary btn-sm",
        children: [s.jsx(U1, {}), "Use my table as a plan"]
      }), y ? s.jsxs("p", {
        role: "status",
        className: P("flex max-w-md items-start gap-1.5 text-[0.64rem] font-semibold leading-relaxed", v >= 6 ? "text-[#3a7a5c]" : "text-[#87631f]"),
        children: [s.jsx(Hl, {
          className: "mt-0.5 h-3 w-3 shrink-0"
        }), y]
      }) : null]
    }), s.jsx("div", {
      className: "mt-3",
      children: s.jsx(Ti, {
        id: "homework-mini-table-writing",
        value: b,
        onChange: k,
        label: "My six sentences",
        rows: 7,
        placeholder: "Fill in the table and press “Build my 6 sentences”. Then edit the sentences so they sound natural."
      })
    }), s.jsx(Ai, {
      eligible: v >= 6,
      done: r,
      onToggle: f,
      requirement: "Build and check six sentences from your three habits.",
      readyMessage: "Six table-based sentences are ready. Read them aloud, then mark the task done."
    })]
  })
}

function U1() {
  return s.jsx("svg", {
    viewBox: "0 0 24 24",
    className: "h-3.5 w-3.5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: s.jsx("path", {
      d: "M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1",
      strokeLinecap: "round"
    })
  })
}

function H1({
  done: r,
  toggleDone: f
}) {
  const [d, o] = ttcUse("hwDayOrder", () => ttcShuffle(Ul.map(H => H.id))), [b, k] = Z.useState(!1), [y, w] = ttcUse("hwDayWriting", ""), v = Ul.map(H => H.id), h = Object.fromEntries(Ul.map(H => [H.id, H])), D = d.every((H, V) => H === v[V]), A = Wa(y), O = (H, V) => {
    const Y = H + V;
    Y < 0 || Y >= d.length || (o(R => {
      const W = [...R];
      return [W[H], W[Y]] = [W[Y], W[H]], W
    }), k(!1))
  }, G = ["First, I ...", "After that, I ...", "In the evening, I ..."];
  return s.jsxs("div", {
    children: [s.jsxs("p", {
      className: "mb-3 text-[0.69rem] leading-relaxed text-forest/50",
      children: ["Put the day in chronological order — from morning to bedtime. Use the arrows to move each line. Then add ", s.jsx("strong", {
        className: "font-bold text-forest/70",
        children: "two sentences of your own"
      }), " ", "about your evening."]
    }), s.jsxs("div", {
      className: "grid gap-3 lg:grid-cols-[1.05fr_0.95fr]",
      children: [s.jsxs("div", {
        children: [s.jsxs("div", {
          className: "mb-1.5 flex items-center justify-between",
          children: [s.jsx("span", {
            className: "label-mono text-[0.47rem] text-forest/35",
            children: "Scrambled day · 6 lines"
          }), s.jsx("button", {
            type: "button",
            onClick: () => {
              o(ttcShuffle(Ul.map(H => H.id))), k(!1)
            },
            className: "font-mono text-[0.47rem] uppercase tracking-[0.05em] text-forest/32 hover:text-forest",
            children: "Reshuffle"
          })]
        }), s.jsx("ol", {
          className: "space-y-1.5",
          children: d.map((H, V) => {
            const Y = h[H],
              R = b && H === v[V];
            return s.jsxs("li", {
              className: P("flex items-center gap-2 rounded-lg border bg-white/45 px-2 py-1.5", R ? "border-[#9bbda3]/65 bg-[#edf5ee]/60" : b ? "border-[#c98a77]/35" : "border-forest/10"),
              children: [s.jsx("span", {
                className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-forest/14 font-mono text-[0.5rem] text-forest/38",
                children: R ? s.jsx(De, {
                  className: "h-2.5 w-2.5 text-[#3a7a5c]"
                }) : V + 1
              }), s.jsx("p", {
                className: "flex-1 text-[0.65rem] font-semibold leading-relaxed text-forest/66",
                children: Y.text
              }), s.jsxs("span", {
                className: "flex shrink-0 gap-0.5",
                children: [s.jsx("button", {
                  type: "button",
                  onClick: () => O(V, -1),
                  disabled: V === 0,
                  className: "flex h-5 w-5 items-center justify-center rounded border border-forest/10 bg-parchment-light text-forest/40 disabled:opacity-20",
                  "aria-label": `Move day line ${V+1} up`,
                  children: s.jsx(Jm, {
                    className: "h-2.5 w-2.5"
                  })
                }), s.jsx("button", {
                  type: "button",
                  onClick: () => O(V, 1),
                  disabled: V === d.length - 1,
                  className: "flex h-5 w-5 items-center justify-center rounded border border-forest/10 bg-parchment-light text-forest/40 disabled:opacity-20",
                  "aria-label": `Move day line ${V+1} down`,
                  children: s.jsx(ki, {
                    className: "h-2.5 w-2.5"
                  })
                })]
              })]
            }, H)
          })
        }), s.jsxs("button", {
          type: "button",
          onClick: () => k(!0),
          className: P("btn btn-sm mt-2.5 w-full", D ? "btn-light" : "btn-primary"),
          children: [D ? s.jsx(De, {
            className: "h-3.5 w-3.5"
          }) : null, D ? "Chronology verified" : "Check my chronology"]
        }), b && !D ? s.jsx("p", {
          className: "mt-2 rounded-lg border border-[#d8b15e]/35 bg-brass-light/20 px-2.5 py-1.5 text-[0.62rem] leading-relaxed text-forest/55",
          children: "Some lines are still out of order. Think: wake up → meals and chores → school → homework → evening free time → bed."
        }) : null]
      }), s.jsxs("div", {
        children: [s.jsx(Ti, {
          id: "homework-own-day",
          value: y,
          onChange: w,
          label: "My two extra sentences",
          rows: 7,
          placeholder: `First, I ...
After that, I ...`
        }), s.jsx("div", {
          className: "mt-2 flex flex-wrap gap-1.5",
          children: G.map(H => s.jsxs("button", {
            type: "button",
            onClick: () => w(V => V.trim() ? `${V.trim()} ${H} ` : `${H} `),
            className: "inline-flex items-center gap-1 rounded-full border border-forest/12 bg-parchment-light/70 px-2 py-1 text-[0.57rem] font-semibold text-forest/50 hover:border-brass/40 hover:text-forest",
            children: [s.jsx(ro, {
              className: "h-2.5 w-2.5"
            }), H]
          }, H))
        }), s.jsxs("div", {
          className: "mt-2 flex items-center justify-between rounded-lg bg-parchment/55 px-2.5 py-1.5",
          children: [s.jsx("span", {
            className: "text-[0.61rem] font-semibold text-forest/44",
            children: "Your sentences"
          }), s.jsxs("span", {
            className: P("font-mono text-[0.62rem]", A >= 2 ? "text-[#3a7a5c]" : "text-[#87631f]"),
            children: [A, " / 2 minimum"]
          })]
        })]
      })]
    }), s.jsx(Ai, {
      eligible: D && A >= 2,
      done: r,
      onToggle: f,
      requirement: "Verify the chronology and write two sentences of your own.",
      readyMessage: "Chronology verified, personal sentences added. Ready to mark done."
    })]
  })
}

function q1({
  done: r,
  toggleDone: f
}) {
  const [d, o] = ttcUse("hwReport", "Our class survey tells an interesting story about free time."), b = Wa(d), k = ["13 pupils watch TV once a day.", "Only 3 pupils never watch TV.", "12 pupils do sport twice a week.", "6 pupils do sport once a day.", "10 pupils play computer games once a day.", "11 pupils read a book once a day.", "2 pupils never read a book.", "Interestingly, every activity row totals 21."], y = w => {
    o(v => `${v.trim()} ${w}`)
  };
  return s.jsxs("div", {
    children: [s.jsxs("div", {
      className: "grid gap-3 lg:grid-cols-[1.1fr_0.9fr]",
      children: [s.jsxs("div", {
        children: [s.jsxs("p", {
          className: "mb-2 text-[0.69rem] leading-relaxed text-forest/50",
          children: ["This report has an opening, but it stops too soon. Add", " ", s.jsx("strong", {
            className: "font-bold text-forest/70",
            children: "at least six new sentences"
          }), ". Use facts from the survey, then add one comparison or opinion of your own."]
        }), s.jsx(Ti, {
          id: "homework-finish-report",
          value: d,
          onChange: o,
          label: "Unfinished report",
          rows: 10,
          placeholder: "Continue the report here..."
        }), s.jsxs("div", {
          className: "mt-2 flex items-center justify-between rounded-lg bg-parchment/55 px-2.5 py-2",
          children: [s.jsx("span", {
            className: "text-[0.62rem] font-semibold text-forest/44",
            children: "New facts added after the opening"
          }), s.jsxs("span", {
            className: P("font-mono text-[0.65rem]", b >= 7 ? "text-[#3a7a5c]" : "text-[#87631f]"),
            children: [Math.max(0, b - 1), " / 6"]
          })]
        })]
      }), s.jsxs("div", {
        className: "rounded-xl border border-forest/11 bg-parchment/45 p-3",
        children: [s.jsxs("div", {
          className: "mb-2 flex items-center gap-1.5",
          children: [s.jsx(wi, {
            className: "h-3.5 w-3.5 text-brass"
          }), s.jsx("p", {
            className: "label-mono text-[0.48rem] text-forest/38",
            children: "Evidence fact bank"
          })]
        }), s.jsx("div", {
          className: "space-y-1.5",
          children: k.map(w => s.jsxs("button", {
            type: "button",
            onClick: () => y(w),
            className: "group flex w-full items-start gap-1.5 rounded-md border border-transparent bg-white/40 px-2 py-1.5 text-left text-[0.62rem] font-semibold leading-snug text-forest/58 transition-colors hover:border-forest/14 hover:bg-white/75 hover:text-forest",
            children: [s.jsx(ro, {
              className: "mt-0.5 h-2.5 w-2.5 shrink-0 text-forest/28 group-hover:text-brass"
            }), w]
          }, w))
        }), s.jsxs("div", {
          className: "mt-2.5 rounded-md bg-brass-light/20 px-2.5 py-2 text-[0.58rem] leading-relaxed text-forest/48",
          children: [s.jsx("strong", {
            className: "font-bold text-forest/65",
            children: "Stretch:"
          }), " Add “In my opinion…” or “I was surprised that…” as your final sentence."]
        })]
      })]
    }), s.jsx(Ai, {
      eligible: Math.max(0, b - 1) >= 6,
      done: r,
      onToggle: f,
      requirement: "Add six new sentences to the unfinished report.",
      readyMessage: "The report is extended with six new facts. Check the punctuation and finish."
    })]
  })
}

function B1({
  onOpenRules: r
}) {
  const [f, d] = ttcUse("hwTab", "my-habits"), [o, b] = ttcUse("hwDone", []), k = h => {
    b(D => D.includes(h) ? D.filter(A => A !== h) : [...D, h])
  }, y = vi.find(h => h.id === f) ?? vi[0], w = y.icon, v = {
    done: o.includes(f),
    toggleDone: () => k(f)
  };
  return s.jsxs("section", {
    id: "homework",
    className: "scroll-mt-28 pt-12 sm:pt-14",
    "aria-labelledby": "homework-section-heading",
    children: [s.jsx(In, {
      id: "homework-section-heading",
      index: "05",
      kicker: "Off the clock · Field assignment · 15–20 min",
      title: s.jsxs(s.Fragment, {
        children: ["Take-home ", s.jsx("em", {
          className: "italic text-forest/55",
          children: "dossier."
        })]
      }),
      description: "Homework for Grade 6. A separate set of missions after the lesson. Write in full English sentences, with capital letters and full stops. Nothing here repeats the class investigation: this file is about your own habits, your own day, and your own conclusions.",
      right: s.jsxs("div", {
        className: "flex items-center gap-2 rounded-full border border-forest/12 bg-parchment-light/70 px-3.5 py-2",
        children: [s.jsx(Wn, {
          className: "h-3.5 w-3.5 text-forest/40"
        }), s.jsx("span", {
          className: "font-mono text-[0.56rem] uppercase tracking-[0.06em] text-forest/55",
          children: "20–25 minutes"
        })]
      })
    }), s.jsx(Bl, {
      children: s.jsxs("div", {
        className: "relative overflow-hidden rounded-[26px] bg-forest text-parchment-light shadow-[0_28px_70px_-42px_rgba(13,32,26,0.85)]",
        children: [s.jsx("div", {
          className: "pointer-events-none absolute inset-0 opacity-[0.06]",
          children: s.jsx("div", {
            className: "absolute inset-0",
            style: {
              backgroundImage: "url('./images/case-cover.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center 45%"
            }
          })
        }), s.jsx("div", {
          "aria-hidden": "true",
          className: "pointer-events-none absolute -bottom-20 -right-14 h-64 w-64 rounded-full border border-brass/10"
        }), s.jsxs("div", {
          className: "relative border-b border-parchment/12 px-4 py-5 sm:px-6 sm:py-6 lg:flex lg:items-end lg:justify-between lg:gap-6",
          children: [s.jsxs("div", {
            children: [s.jsxs("p", {
              className: "label-mono mb-2 flex items-center gap-2 text-[0.51rem] text-brass",
              children: [s.jsx(wi, {
                className: "h-3.5 w-3.5"
              }), "Field assignment · Case no. 021-H"]
            }), s.jsxs("h3", {
              id: "homework-heading",
              className: "text-[clamp(1.7rem,4vw,2.35rem)] leading-none text-parchment-light",
              children: ["Your own ", s.jsx("em", {
                className: "italic text-brass",
                children: "evidence."
              })]
            }), s.jsx("p", {
              className: "mt-2 max-w-xl text-[0.72rem] leading-relaxed text-parchment/50",
              children: "Choose any task, or complete the whole dossier. Each one can be marked done separately; your case file progress will not change."
            })]
          }), s.jsxs("div", {
            className: "mt-4 flex items-center gap-4 lg:mt-0",
            children: [s.jsxs("div", {
              className: "flex items-baseline gap-1.5",
              children: [s.jsx("span", {
                className: "font-display text-[2.3rem] leading-none text-parchment-light",
                children: o.length
              }), s.jsx("span", {
                className: "pb-1 font-mono text-[0.52rem] uppercase tracking-[0.06em] text-parchment/35",
                children: "/ 4 complete"
              })]
            }), s.jsx("div", {
              className: "flex gap-1",
              children: vi.map(h => s.jsx("span", {
                className: P("h-1.5 w-5 rounded-full transition-colors", o.includes(h.id) ? "bg-brass" : "bg-parchment/15")
              }, h.id))
            }), s.jsxs("button", {
              type: "button",
              onClick: r,
              className: "btn btn-outline-light btn-sm",
              children: [s.jsx(oa, {
                className: "h-3.5 w-3.5"
              }), "Rules"]
            })]
          })]
        }), s.jsxs("div", {
          className: "relative grid lg:grid-cols-[228px_1fr]",
          children: [s.jsxs("div", {
            className: "border-b border-parchment/12 p-3 sm:p-4 lg:border-b-0 lg:border-r lg:p-4",
            children: [s.jsx("div", {
              role: "tablist",
              "aria-label": "Homework assignments",
              className: "no-scrollbar flex gap-1.5 overflow-x-auto lg:flex-col lg:gap-1",
              children: vi.map(h => {
                const D = h.icon,
                  A = f === h.id,
                  O = o.includes(h.id);
                return s.jsxs("button", {
                  role: "tab",
                  id: `home-tab-${h.id}`,
                  "aria-selected": A,
                  "aria-controls": `home-panel-${h.id}`,
                  onClick: () => d(h.id),
                  className: P("group flex shrink-0 items-center gap-2 rounded-lg border px-2.5 py-2 text-left transition-colors lg:w-full lg:shrink", A ? "border-brass/35 bg-brass/[0.13]" : "border-transparent hover:border-parchment/10 hover:bg-parchment/[0.055]"),
                  children: [s.jsx("span", {
                    className: P("flex h-6 w-6 shrink-0 items-center justify-center rounded-md border", A ? "border-brass/30 bg-brass/15 text-brass" : "border-parchment/12 text-parchment/35"),
                    children: s.jsx(D, {
                      className: "h-3.5 w-3.5"
                    })
                  }), s.jsxs("span", {
                    className: "min-w-0 flex-1",
                    children: [s.jsxs("span", {
                      className: P("block whitespace-nowrap font-mono text-[0.44rem] uppercase tracking-[0.07em] lg:whitespace-normal", A ? "text-brass/80" : "text-parchment/30"),
                      children: [h.number, " · ", h.time]
                    }), s.jsx("span", {
                      className: P("mt-0.5 block whitespace-nowrap text-[0.66rem] font-bold lg:whitespace-normal", A ? "text-parchment/90" : "text-parchment/55 group-hover:text-parchment/75"),
                      children: h.short
                    })]
                  }), O ? s.jsx("span", {
                    className: "hidden h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brass text-forest lg:flex",
                    children: s.jsx(De, {
                      className: "h-2.5 w-2.5",
                      strokeWidth: 3
                    })
                  }) : null]
                }, h.id)
              })
            }), s.jsxs("div", {
              className: "mt-4 hidden rounded-lg border border-parchment/10 bg-parchment/[0.045] px-3 py-2.5 lg:block",
              children: [s.jsxs("p", {
                className: "flex items-center gap-1.5 font-mono text-[0.45rem] uppercase tracking-[0.07em] text-parchment/35",
                children: [s.jsx(wi, {
                  className: "h-3 w-3"
                }), "Keep it yours"]
              }), s.jsx("p", {
                className: "mt-1 text-[0.6rem] leading-relaxed text-parchment/42",
                children: "Teachers look for true details, clear frequency phrases and full sentences — not perfect handwriting."
              })]
            })]
          }), s.jsx("div", {
            className: "p-2 sm:p-3",
            children: s.jsxs("div", {
              role: "tabpanel",
              id: `home-panel-${f}`,
              "aria-labelledby": `home-tab-${f}`,
              className: "animate-rise min-h-[460px] rounded-[18px] bg-parchment-light px-4 py-4 text-forest sm:px-5 sm:py-5",
              children: [s.jsxs("div", {
                className: "mb-4 flex flex-wrap items-start justify-between gap-2 border-b border-forest/10 pb-3",
                children: [s.jsxs("div", {
                  className: "flex items-start gap-2.5",
                  children: [s.jsx("span", {
                    className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-brass/30 bg-brass-light/25 text-[#87631f]",
                    children: s.jsx(w, {
                      className: "h-4 w-4"
                    })
                  }), s.jsxs("div", {
                    children: [s.jsxs("p", {
                      className: "label-mono text-[0.46rem] text-forest/35",
                      children: ["Assignment ", y.number, " · ", y.time]
                    }), s.jsx("h4", {
                      className: "mt-0.5 text-[1.3rem] leading-tight text-forest",
                      children: y.title
                    })]
                  })]
                }), o.includes(f) ? s.jsxs("span", {
                  className: "label-mono flex items-center gap-1 rounded-full border border-[#9bbda3]/50 bg-[#edf5ee] px-2.5 py-1 text-[0.48rem] text-[#3a6448]",
                  children: [s.jsx(De, {
                    className: "h-2.5 w-2.5"
                  }), "Complete"]
                }) : s.jsxs("span", {
                  className: "label-mono flex items-center gap-1 rounded-full border border-forest/10 px-2.5 py-1 text-[0.46rem] text-forest/32",
                  children: [s.jsx(io, {
                    className: "h-2.5 w-2.5"
                  }), "In progress"]
                })]
              }), f === "my-habits" ? s.jsx(O1, {
                ...v
              }) : null, f === "mini-table" ? s.jsx(R1, {
                ...v
              }) : null, f === "my-day" ? s.jsx(H1, {
                ...v
              }) : null, f === "finish-report" ? s.jsx(q1, {
                ...v
              }) : null]
            }, f)
          })]
        })]
      })
    })]
  })
}
const Y1 = ["Decode", "Totals", "Match", "Sentences", "Report"];

function G1({
  completed: r,
  progress: f,
  activeSection: d,
  onOpenRules: o
}) {
  const k = 2 * Math.PI * 34,
    y = k - f / 100 * k;
  return s.jsxs("aside", {
    className: "no-print sticky top-[98px] hidden max-h-[calc(100vh-118px)] self-start overflow-y-auto pr-1 thin-scrollbar xl:block",
    children: [s.jsxs("div", {
      className: "rounded-[22px] border border-forest/12 bg-parchment-light/76 p-4 shadow-card backdrop-blur-sm xl:p-5",
      children: [s.jsxs("div", {
        className: "mb-4 flex items-center justify-between",
        children: [s.jsxs("div", {
          children: [s.jsx("p", {
            className: "label-mono text-[0.53rem] text-forest/40",
            children: "Case file"
          }), s.jsx("p", {
            className: "mt-0.5 font-display text-[1.15rem] font-semibold leading-none text-forest",
            children: "No. 021"
          })]
        }), s.jsx("span", {
          className: "stamp text-[0.46rem] text-forest/35",
          children: "Classified"
        })]
      }), s.jsxs("div", {
        className: "flex items-center gap-3 rounded-[14px] border border-forest/10 bg-parchment/70 px-3 py-3",
        children: [s.jsxs("div", {
          className: "relative flex h-[82px] w-[82px] shrink-0 items-center justify-center",
          children: [s.jsxs("svg", {
            viewBox: "0 0 84 84",
            className: "absolute inset-0 h-full w-full -rotate-90",
            role: "img",
            "aria-label": `Case file ${f}% restored`,
            children: [s.jsx("circle", {
              cx: "42",
              cy: "42",
              r: 34,
              fill: "none",
              stroke: "rgba(22,50,41,0.1)",
              strokeWidth: "5"
            }), s.jsx("circle", {
              cx: "42",
              cy: "42",
              r: 34,
              fill: "none",
              stroke: "var(--color-brass)",
              strokeWidth: "5",
              strokeLinecap: "round",
              strokeDasharray: k,
              strokeDashoffset: y,
              className: "transition-[stroke-dashoffset] duration-700 ease-out"
            })]
          }), s.jsxs("div", {
            className: "text-center",
            children: [s.jsxs("span", {
              className: "block font-mono text-[1.12rem] font-semibold leading-none text-forest",
              children: [f, s.jsx("span", {
                className: "text-[0.6rem] font-medium text-forest/50",
                children: "%"
              })]
            }), s.jsx("span", {
              className: "label-mono mt-1 block text-[0.4rem] tracking-[0.1em] text-forest/40",
              children: "Restored"
            })]
          })]
        }), s.jsxs("div", {
          className: "min-w-0",
          children: [s.jsx("p", {
            className: "text-[0.72rem] font-extrabold leading-tight text-forest",
            children: r === 5 ? "The file is complete." : "Rebuild the case file."
          }), s.jsxs("p", {
            className: "mt-1 text-[0.65rem] leading-snug text-forest/48",
            children: [r, " of 5 checkpoints cleared"]
          }), s.jsx("div", {
            className: "mt-2 flex gap-1",
            "aria-hidden": "true",
            children: Y1.map((w, v) => s.jsx("span", {
              title: w,
              className: P("h-1 w-4 rounded-full transition-colors", v < r ? "bg-forest" : "bg-forest/12")
            }, w))
          })]
        })]
      }), s.jsxs("nav", {
        "aria-label": "Case map",
        className: "mt-5",
        children: [s.jsxs("p", {
          className: "label-mono mb-2 flex items-center gap-1.5 text-[0.5rem] text-forest/38",
          children: [s.jsx(hb, {
            className: "h-3 w-3"
          }), "Case map"]
        }), s.jsx("ul", {
          className: "space-y-0.5",
          children: xo.map((w, v) => {
            const h = d === w.id;
            return s.jsx("li", {
              children: s.jsxs("a", {
                href: `#${w.id}`,
                "aria-current": h ? "location" : void 0,
                className: P("group flex items-center gap-2.5 rounded-lg px-2 py-2 transition-colors", h ? "bg-forest/[0.065]" : "hover:bg-forest/[0.045]"),
                children: [s.jsx("span", {
                  className: P("flex h-5 w-5 shrink-0 items-center justify-center rounded-full border font-mono text-[0.5rem] transition-colors", h ? "border-brass bg-brass/20 text-forest" : "border-forest/13 text-forest/38 group-hover:border-forest/30"),
                  children: v === 2 && r === 5 ? s.jsx(De, {
                    className: "h-2.5 w-2.5"
                  }) : `0${v+1}`
                }), s.jsx("span", {
                  className: P("flex-1 text-[0.72rem] font-bold leading-none", h ? "text-forest" : "text-forest/58 group-hover:text-forest/80"),
                  children: w.label
                }), v === 2 ? s.jsxs("span", {
                  className: "font-mono text-[0.51rem] text-forest/35",
                  children: [r, "/5"]
                }) : null, h ? s.jsx("span", {
                  className: "h-1 w-1 rounded-full bg-brass"
                }) : null]
              })
            }, w.id)
          })
        })]
      }), s.jsxs("div", {
        className: "mt-4 overflow-hidden rounded-[15px] bg-forest p-3.5 text-parchment-light",
        children: [s.jsxs("div", {
          className: "mb-2 flex items-center justify-between",
          children: [s.jsx("span", {
            className: "flex h-7 w-7 items-center justify-center rounded-lg bg-parchment/10 text-brass",
            children: s.jsx(oa, {
              className: "h-3.5 w-3.5"
            })
          }), s.jsx("span", {
            className: "label-mono text-[0.43rem] text-parchment/35",
            children: "Any time"
          })]
        }), s.jsx("p", {
          className: "text-[0.8rem] font-bold leading-tight",
          children: "Need a rule?"
        }), s.jsx("p", {
          className: "mt-1 text-[0.62rem] leading-relaxed text-parchment/48",
          children: "Table reading, frequencies and sentence models are one click away."
        }), s.jsxs("button", {
          type: "button",
          onClick: o,
          className: "mt-3 flex w-full items-center justify-between rounded-lg border border-parchment/15 bg-parchment/[0.06] px-2.5 py-2 text-[0.65rem] font-extrabold text-parchment/80 transition-colors hover:bg-parchment/[0.12] hover:text-parchment",
          children: ["Open detective notes", s.jsx(eb, {
            className: "h-3 w-3"
          })]
        })]
      }), s.jsxs("div", {
        className: "mt-4 flex items-center justify-between border-t border-forest/9 pt-3",
        children: [s.jsxs("span", {
          className: "flex items-center gap-1.5 font-mono text-[0.5rem] uppercase tracking-[0.07em] text-forest/38",
          children: [s.jsx(Wn, {
            className: "h-3 w-3"
          }), "45 min · solo"]
        }), s.jsx(Fn, {
          className: "h-3.5 w-3.5 text-forest/22"
        })]
      })]
    }), s.jsx("p", {
      className: "mt-3 px-2 text-center font-mono text-[0.48rem] uppercase leading-relaxed tracking-[0.06em] text-forest/28",
      children: "Evidence speaks. You translate."
    })]
  })
}

function L1({
  completed: r,
  progress: f,
  activeSection: d
}) {
  return s.jsxs("div", {
    className: "no-print xl:hidden",
    children: [s.jsxs("div", {
      className: "mb-2 flex items-center justify-between",
      children: [s.jsxs("span", {
        className: "label-mono flex items-center gap-1.5 text-[0.5rem] text-forest/42",
        children: [s.jsx(fo, {
          complete: r === 5,
          size: "sm"
        }), "Case file ", f, "% restored"]
      }), s.jsxs("span", {
        className: "font-mono text-[0.52rem] text-forest/38",
        children: [r, "/5 checkpoints"]
      })]
    }), s.jsx("nav", {
      "aria-label": "Mobile case map",
      className: "no-scrollbar -mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1",
      children: xo.map((o, b) => s.jsxs("a", {
        href: `#${o.id}`,
        className: P("flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-2 text-[0.65rem] font-bold transition-colors", d === o.id ? "border-forest bg-forest text-parchment-light" : "border-forest/13 bg-parchment-light/55 text-forest/58"),
        "aria-current": d === o.id ? "location" : void 0,
        children: [s.jsxs("span", {
          className: "font-mono text-[0.48rem] opacity-55",
          children: ["0", b + 1]
        }), o.short]
      }, o.id))
    })]
  })
}
const Gm = [{
  id: "rule-read",
  number: "01",
  title: "How to read the survey table",
  icon: Xh,
  tint: "bg-[#f2dfb4]/55 text-[#8a6520]"
}, {
  id: "rule-frequency",
  number: "02",
  title: "Once, twice, or never?",
  icon: sb,
  tint: "bg-[#dbe8dc]/70 text-[#3a6448]"
}, {
  id: "rule-question",
  number: "03",
  title: "Asking “How many…?”",
  icon: pb,
  tint: "bg-[#e4dfee]/80 text-[#5c4d7c]"
}, {
  id: "rule-total",
  number: "04",
  title: "Adding up a row",
  icon: eh,
  tint: "bg-[#f0e0d8]/80 text-[#8b4d34]"
}, {
  id: "rule-sentence",
  number: "05",
  title: "Building a complete sentence",
  icon: lb,
  tint: "bg-[#dbe8dc]/70 text-[#3a6448]"
}, {
  id: "rule-sequence",
  number: "06",
  title: "Sequencing the report",
  icon: co,
  tint: "bg-[#f2dfb4]/55 text-[#8a6520]"
}];

function V1({
  open: r,
  onClose: f
}) {
  const d = Z.useRef(null),
    o = Z.useRef(null),
    b = Z.useRef(f);
  if (Z.useEffect(() => {
      b.current = f
    }, [f]), Z.useEffect(() => {
      if (!r) return;
      const y = document.body.style.overflow;
      document.body.style.overflow = "hidden", d.current?.focus();
      const w = v => {
        v.key === "Escape" && b.current()
      };
      return window.addEventListener("keydown", w), () => {
        document.body.style.overflow = y, window.removeEventListener("keydown", w)
      }
    }, [r]), !r) return null;
  const k = y => {
    o.current?.querySelector(`#${y}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  };
  return s.jsxs("div", {
    className: "no-print fixed inset-0 z-50",
    children: [s.jsx("button", {
      type: "button",
      onClick: f,
      className: "animate-fade-in absolute inset-0 h-full w-full cursor-default bg-forest-deep/55 backdrop-blur-[3px]",
      "aria-label": "Close detective notes",
      tabIndex: -1
    }), s.jsxs("aside", {
      ref: o,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "rules-title",
      className: "animate-slide-in-right thin-scrollbar absolute inset-y-0 right-0 flex w-full flex-col overflow-y-auto border-l border-parchment/15 bg-parchment shadow-2xl sm:max-w-[500px]",
      children: [s.jsxs("div", {
        className: "relative overflow-hidden bg-forest px-5 pb-5 pt-5 text-parchment-light sm:px-6",
        children: [s.jsx("div", {
          className: "pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full border border-brass/20"
        }), s.jsx("div", {
          className: "pointer-events-none absolute -right-4 -top-8 h-32 w-32 rounded-full border border-brass/12"
        }), s.jsxs("div", {
          className: "relative flex items-start justify-between gap-4",
          children: [s.jsxs("div", {
            children: [s.jsxs("p", {
              className: "label-mono mb-2 flex items-center gap-2 text-[0.53rem] text-brass/85",
              children: [s.jsx(Fn, {
                className: "h-3 w-3"
              }), "Detective notes · always available"]
            }), s.jsxs("h2", {
              id: "rules-title",
              className: "text-[2rem] leading-none text-parchment-light",
              children: ["Rules ", s.jsx("em", {
                className: "italic text-brass",
                children: "&"
              }), " help"]
            }), s.jsx("p", {
              className: "mt-2 max-w-[21rem] text-[0.75rem] leading-relaxed text-parchment/55",
              children: "Keep this field guide beside you. The evidence never changes — only how you read it."
            })]
          }), s.jsx("button", {
            ref: d,
            type: "button",
            onClick: f,
            className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-parchment/20 text-parchment/70 transition-colors hover:bg-parchment/10 hover:text-parchment",
            "aria-label": "Close detective notes",
            children: s.jsx(ql, {
              className: "h-4 w-4"
            })
          })]
        }), s.jsxs("div", {
          className: "no-scrollbar relative mt-5 flex gap-1.5 overflow-x-auto pb-0.5",
          children: [Gm.map(y => s.jsx("button", {
            type: "button",
            onClick: () => k(y.id),
            className: "whitespace-nowrap rounded-full border border-parchment/15 bg-parchment/[0.06] px-2.5 py-1.5 font-mono text-[0.54rem] uppercase tracking-[0.06em] text-parchment/55 transition-colors hover:border-brass/40 hover:text-parchment",
            children: y.number
          }, y.id)), s.jsx("span", {
            className: "ml-1 self-center font-mono text-[0.5rem] uppercase tracking-[0.08em] text-parchment/30",
            children: "6 cards"
          })]
        })]
      }), s.jsxs("div", {
        className: "paper-ruled flex-1 px-4 py-5 sm:px-5",
        children: [s.jsx("div", {
          className: "space-y-3.5",
          children: Gm.map(y => {
            const w = y.icon;
            return s.jsxs("section", {
              id: y.id,
              className: "scroll-mt-4 rounded-[16px] border border-forest/12 bg-parchment-light/93 shadow-[0_2px_5px_rgba(13,32,26,0.04)]",
              "aria-labelledby": `${y.id}-heading`,
              children: [s.jsxs("div", {
                className: "flex items-center gap-3 border-b border-forest/9 px-4 py-3.5",
                children: [s.jsx("span", {
                  className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${y.tint}`,
                  children: s.jsx(w, {
                    className: "h-4 w-4",
                    strokeWidth: 1.9
                  })
                }), s.jsxs("div", {
                  className: "flex min-w-0 flex-1 items-baseline gap-2",
                  children: [s.jsx("span", {
                    className: "font-mono text-[0.54rem] text-forest/32",
                    children: y.number
                  }), s.jsx("h3", {
                    id: `${y.id}-heading`,
                    className: "text-[1.03rem] font-medium leading-tight text-forest",
                    children: y.title
                  })]
                })]
              }), s.jsxs("div", {
                className: "px-4 py-4 text-[0.8rem] leading-[1.7] text-forest/65",
                children: [y.id === "rule-read" && s.jsxs(s.Fragment, {
                  children: [s.jsxs("p", {
                    children: ["A row goes ", s.jsx("strong", {
                      className: "text-forest",
                      children: "across"
                    }), " and shows one activity. A column goes ", s.jsx("strong", {
                      className: "text-forest",
                      children: "down"
                    }), " and shows one frequency."]
                  }), s.jsxs("div", {
                    className: "mt-3 overflow-hidden rounded-lg border border-forest/12 bg-white/55",
                    children: [s.jsxs("div", {
                      className: "grid grid-cols-[1.3fr_1fr_1fr] bg-forest/[0.055] font-mono text-[0.51rem] uppercase tracking-[0.04em] text-forest/48",
                      children: [s.jsx("span", {
                        className: "border-r border-forest/10 px-2 py-1.5",
                        children: "Activity"
                      }), s.jsx("span", {
                        className: "border-r border-forest/10 px-2 py-1.5 text-center",
                        children: "Twice"
                      }), s.jsx("span", {
                        className: "px-2 py-1.5 text-center",
                        children: "Never"
                      })]
                    }), s.jsxs("div", {
                      className: "grid grid-cols-[1.3fr_1fr_1fr] border-t border-forest/10 text-[0.68rem]",
                      children: [s.jsx("span", {
                        className: "border-r border-forest/10 px-2 py-1.5 font-semibold text-forest/70",
                        children: "Watch TV"
                      }), s.jsx("span", {
                        className: "border-r border-forest/10 bg-brass/15 px-2 py-1.5 text-center font-mono font-semibold text-forest",
                        children: "5"
                      }), s.jsx("span", {
                        className: "px-2 py-1.5 text-center font-mono font-semibold text-forest/65",
                        children: "3"
                      })]
                    })]
                  }), s.jsxs("p", {
                    className: "mt-2.5 flex gap-2 text-[0.68rem] leading-relaxed text-forest/48",
                    children: [s.jsx(Hl, {
                      className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-brass"
                    }), "Move your finger along the row, then up or down the column. Where they meet is your answer."]
                  })]
                }), y.id === "rule-frequency" && s.jsxs(s.Fragment, {
                  children: [s.jsx("p", {
                    children: "These phrases describe how often something happens. Match the wording exactly."
                  }), s.jsxs("ul", {
                    className: "mt-3 space-y-2",
                    children: [s.jsxs("li", {
                      className: "flex items-start justify-between gap-3 rounded-lg border border-forest/9 bg-white/45 px-3 py-2",
                      children: [s.jsxs("span", {
                        children: [s.jsx("strong", {
                          className: "font-extrabold text-forest",
                          children: "once a day"
                        }), s.jsx("span", {
                          className: "block text-[0.65rem] text-forest/45",
                          children: "one time every day"
                        })]
                      }), s.jsx("span", {
                        className: "mt-0.5 shrink-0 font-mono text-[0.6rem] text-forest/40",
                        children: "7× / week"
                      })]
                    }), s.jsxs("li", {
                      className: "flex items-start justify-between gap-3 rounded-lg border border-forest/9 bg-white/45 px-3 py-2",
                      children: [s.jsxs("span", {
                        children: [s.jsx("strong", {
                          className: "font-extrabold text-forest",
                          children: "twice a week"
                        }), s.jsx("span", {
                          className: "block text-[0.65rem] text-forest/45",
                          children: "two times every week"
                        })]
                      }), s.jsx("span", {
                        className: "mt-0.5 shrink-0 font-mono text-[0.6rem] text-forest/40",
                        children: "2× / week"
                      })]
                    }), s.jsxs("li", {
                      className: "flex items-start justify-between gap-3 rounded-lg border border-forest/9 bg-white/45 px-3 py-2",
                      children: [s.jsxs("span", {
                        children: [s.jsx("strong", {
                          className: "font-extrabold text-forest",
                          children: "never"
                        }), s.jsx("span", {
                          className: "block text-[0.65rem] text-forest/45",
                          children: "not at any time"
                        })]
                      }), s.jsx("span", {
                        className: "mt-0.5 shrink-0 font-mono text-[0.6rem] text-forest/40",
                        children: "0×"
                      })]
                    })]
                  }), s.jsxs("p", {
                    className: "mt-2.5 flex gap-2 text-[0.68rem] leading-relaxed text-forest/48",
                    children: [s.jsx(Hl, {
                      className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-brass"
                    }), s.jsxs("span", {
                      children: ["Use ", s.jsx("em", {
                        className: "font-medium",
                        children: "once a day"
                      }), " and", " ", s.jsx("em", {
                        className: "font-medium",
                        children: "twice a week"
                      }), " — not just “often”."]
                    })]
                  })]
                }), y.id === "rule-question" && s.jsxs(s.Fragment, {
                  children: [s.jsx("p", {
                    children: "Start with the number question, then name the activity and frequency."
                  }), s.jsxs("div", {
                    className: "mt-3 rounded-lg border border-forest/12 bg-white/55 p-3 font-mono text-[0.7rem] leading-relaxed",
                    children: [s.jsx("p", {
                      className: "text-forest/50",
                      children: "How many"
                    }), s.jsxs("div", {
                      className: "mt-1 flex flex-wrap gap-1",
                      children: [s.jsx("span", {
                        className: "rounded bg-brass/25 px-1.5 py-0.5 font-semibold text-forest",
                        children: "+ pupils / children"
                      }), s.jsx("span", {
                        className: "rounded bg-forest/8 px-1.5 py-0.5 font-semibold text-forest",
                        children: "+ do / watch / play / read"
                      }), s.jsx("span", {
                        className: "rounded bg-[#dbe8dc] px-1.5 py-0.5 font-semibold text-forest",
                        children: "+ activity"
                      }), s.jsx("span", {
                        className: "rounded bg-[#e4dfee] px-1.5 py-0.5 font-semibold text-forest",
                        children: "+ frequency?"
                      })]
                    })]
                  }), s.jsxs("div", {
                    className: "mt-3 space-y-1.5 text-[0.72rem]",
                    children: [s.jsxs("p", {
                      children: [s.jsx("span", {
                        className: "text-forest/35",
                        children: "Q:"
                      }), " How many", " ", s.jsx("span", {
                        className: "border-b border-dashed border-brass/70",
                        children: "pupils never read a book?"
                      })]
                    }), s.jsxs("p", {
                      children: [s.jsx("span", {
                        className: "text-forest/35",
                        children: "A:"
                      }), " ", s.jsx("strong", {
                        className: "font-extrabold text-forest",
                        children: "2 pupils."
                      })]
                    })]
                  })]
                }), y.id === "rule-total" && s.jsxs(s.Fragment, {
                  children: [s.jsxs("p", {
                    children: ["Add the three numbers in a row. Every activity in this survey must total", " ", s.jsx("strong", {
                      className: "font-mono text-forest",
                      children: "21"
                    }), "."]
                  }), s.jsxs("div", {
                    className: "mt-3 rounded-lg border border-forest/12 bg-white/55 p-3 text-center font-mono text-[0.76rem] font-semibold text-forest/75",
                    children: ["13 ", s.jsx("span", {
                      className: "text-forest/35",
                      children: "+"
                    }), " 5", " ", s.jsx("span", {
                      className: "text-forest/35",
                      children: "+"
                    }), " 3", " ", s.jsx("span", {
                      className: "text-forest/35",
                      children: "="
                    }), " ", s.jsx("span", {
                      className: "rounded bg-brass/25 px-1.5 py-0.5 text-forest",
                      children: "21"
                    })]
                  }), s.jsx("p", {
                    className: "mt-2 text-center font-mono text-[0.56rem] uppercase tracking-[0.05em] text-forest/38",
                    children: "watch TV · once + twice + never"
                  }), s.jsxs("div", {
                    className: "mt-3 flex items-start gap-2 rounded-lg bg-[#dbe8dc]/40 px-3 py-2 text-[0.68rem] leading-relaxed text-forest/60",
                    children: [s.jsx(fb, {
                      className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-[#3a6448]"
                    }), s.jsxs("span", {
                      children: ["If a number is missing, subtract the two you know:", " ", s.jsx("span", {
                        className: "font-mono",
                        children: "21 − 13 − 3 = 5"
                      }), "."]
                    })]
                  })]
                }), y.id === "rule-sentence" && s.jsxs(s.Fragment, {
                  children: [s.jsx("p", {
                    children: "Use a capital letter, a number, the activity, and the frequency. Finish with a full stop."
                  }), s.jsxs("div", {
                    className: "mt-3 space-y-2",
                    children: [s.jsxs("div", {
                      className: "rounded-lg border border-[#9bbda3]/35 bg-[#dbe8dc]/35 px-3 py-2",
                      children: [s.jsx("p", {
                        className: "text-[0.72rem] font-semibold text-forest",
                        children: "13 pupils watch TV once a day."
                      }), s.jsx("p", {
                        className: "mt-0.5 font-mono text-[0.52rem] uppercase tracking-[0.04em] text-forest/40",
                        children: "number + activity + frequency"
                      })]
                    }), s.jsxs("div", {
                      className: "rounded-lg border border-forest/10 bg-white/45 px-3 py-2",
                      children: [s.jsx("p", {
                        className: "text-[0.72rem] font-semibold text-forest",
                        children: "Twelve pupils do sport twice a week."
                      }), s.jsx("p", {
                        className: "mt-0.5 font-mono text-[0.52rem] uppercase tracking-[0.04em] text-forest/40",
                        children: "twelve = 12"
                      })]
                    }), s.jsxs("div", {
                      className: "rounded-lg border border-[#c98a77]/30 bg-[#f0e0d8]/35 px-3 py-2",
                      children: [s.jsx("p", {
                        className: "text-[0.72rem] font-semibold text-forest",
                        children: "Two pupils never read a book."
                      }), s.jsx("p", {
                        className: "mt-0.5 font-mono text-[0.52rem] uppercase tracking-[0.04em] text-forest/40",
                        children: "never goes before the verb"
                      })]
                    })]
                  }), s.jsx("p", {
                    className: "mt-2.5 text-[0.67rem] leading-relaxed text-forest/45",
                    children: "Cross out “there is” when the number is more than one. Use “there are”."
                  })]
                }), y.id === "rule-sequence" && s.jsxs(s.Fragment, {
                  children: [s.jsx("p", {
                    children: "Arrange your facts like a detective writing a report. Move from big picture to detail."
                  }), s.jsx("ol", {
                    className: "mt-3 space-y-1.5",
                    children: ["Start with the size of the class.", "Group the findings by activity.", "Give the number and the frequency.", "Finish with the smallest or most surprising fact."].map((v, h) => s.jsxs("li", {
                      className: "flex items-start gap-2.5 text-[0.71rem]",
                      children: [s.jsx("span", {
                        className: "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-forest font-mono text-[0.52rem] text-parchment-light",
                        children: h + 1
                      }), v]
                    }, v))
                  }), s.jsxs("div", {
                    className: "mt-3 flex items-start gap-2 rounded-lg border border-forest/10 bg-white/45 px-3 py-2 text-[0.67rem] leading-relaxed text-forest/55",
                    children: [s.jsx(ab, {
                      className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-brass"
                    }), "Linking words can help: ", s.jsx("em", {
                      children: "First, then, also, in the end."
                    })]
                  })]
                })]
              })]
            }, y.id)
          })
        }), s.jsxs("div", {
          className: "mt-4 rounded-[14px] border border-brass/25 bg-brass-light/30 px-4 py-3",
          children: [s.jsxs("p", {
            className: "label-mono mb-1 flex items-center gap-1.5 text-[0.5rem] text-forest/50",
            children: [s.jsx(Hl, {
              className: "h-3 w-3 text-brass"
            }), "One last tip"]
          }), s.jsx("p", {
            className: "text-[0.71rem] leading-relaxed text-forest/60",
            children: "Before you write an answer, point to the row and the column. If both match the sentence, you have your evidence."
          })]
        })]
      }), s.jsxs("div", {
        className: "sticky bottom-0 border-t border-forest/10 bg-parchment-light/95 px-4 py-3.5 backdrop-blur sm:px-5",
        children: [s.jsxs("button", {
          type: "button",
          onClick: f,
          className: "btn btn-primary w-full",
          children: [s.jsx(P0, {
            className: "h-4 w-4"
          }), "Back to the case", s.jsx(Xm, {
            className: "ml-auto h-3.5 w-3.5 opacity-40"
          })]
        }), s.jsx("p", {
          className: "mt-2 text-center font-mono text-[0.49rem] uppercase tracking-[0.08em] text-forest/35",
          children: "Press Esc to close · Your progress stays safe"
        })]
      })]
    })]
  })
}
const Q1 = ["FIELD NOTES BUREAU — OFFICIAL CASE REPORT", "Case no. 021: The Case of the Scrambled Survey", "Academy Stars 3 · Unit 2 · Lesson 8", `Subject: Free-time habits of Class 3B | ${ho} pupils | 4 activities`, "", "RESTORED FINDINGS", ...po.map((r, f) => `${f+1}. ${r}`), "", "EXHIBIT A — SURVEY DATA", "How often do you…? | once a day | twice a week | never | row total", ...mo.map(r => `${r.name} | ${r.values.once} | ${r.values.twice} | ${r.values.never} | ${r.values.once+r.values.twice+r.values.never}`), "", "CONCLUSION", "Every activity row adds up to 21, so the survey is complete and internally consistent.", "21 pupils × 4 activities = 84 responses.", "", "Status: CASE CLOSED"].join(`
`);

function X1() {
  const [r, f] = ttcUse("timeLeft", 2700), [d, o] = Z.useState(!1), [b, k] = ttcUse("completed", []), [y, w] = Z.useState(!1), [v, h] = ttcUse("caseClosed", !1), [D, A] = Z.useState(!1), [O, G] = Z.useState("briefing"), [H, V] = Z.useState(null), Y = (Array.isArray(b) ? b.length : 0) * 20;
  Z.useEffect(() => {
    if (!d) return;
    const Q = window.setInterval(() => {
      f(be => Math.max(0, be - 1))
    }, 1e3);
    return () => window.clearInterval(Q)
  }, [d]), Z.useEffect(() => {
    r === 0 && d && o(!1)
  }, [r, d]), Z.useEffect(() => {
    if (!H) return;
    const Q = window.setTimeout(() => V(null), 4500);
    return () => window.clearTimeout(Q)
  }, [H]), Z.useEffect(() => {
    const Q = xo.map(_e => document.getElementById(_e.id)).filter(_e => !!_e);
    if (!Q.length || typeof IntersectionObserver > "u") return;
    const be = new IntersectionObserver(_e => {
      _e.forEach(Ke => {
        Ke.isIntersecting && G(Ke.target.id)
      })
    }, {
      rootMargin: "-25% 0px -60% 0px",
      threshold: 0
    });
    return Q.forEach(_e => be.observe(_e)), () => be.disconnect()
  }, []);
  const R = () => {
      if (r === 0) {
        f(2700), o(!0);
        return
      }
      o(Q => !Q)
    },
    W = () => {
      o(!1), f(2700)
    },
    F = () => {
      o(!0), document.getElementById("briefing")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    },
    le = Q => {
      if (b.includes(Q)) return;
      const be = [...b, Q].sort((_e, Ke) => _e - Ke);
      k(be), V({
        id: Date.now(),
        message: be.length === 5 ? "All five checkpoints cleared. The final report is ready to verify." : `Checkpoint 0${Q} cleared · ${be.length*20}% of the case file restored.`
      })
    },
    xe = () => {
      b.length < 5 || (h(!0), A(!0), V(null))
    },
    Ae = () => {
      const Q = new Blob([Q1], {
          type: "text/plain;charset=utf-8"
        }),
        be = URL.createObjectURL(Q),
        _e = document.createElement("a");
      _e.href = be, _e.download = "case-021-scrambled-survey-report.txt", document.body.appendChild(_e), _e.click(), _e.remove(), URL.revokeObjectURL(be), V({
        id: Date.now(),
        message: "Case report downloaded as a text file."
      })
    },
    se = () => {
      window.print()
    };
  return s.jsxs("div", {
    className: "relative min-h-screen overflow-x-clip",
    children: [s.jsx("div", {
      className: "page-noise",
      "aria-hidden": "true"
    }), s.jsx("a", {
      href: "#main",
      className: "sr-only z-[70] rounded-full bg-forest px-4 py-2 text-parchment-light focus:not-sr-only focus:fixed focus:left-4 focus:top-4",
      children: "Skip to the lesson"
    }), s.jsx(m1, {
      timeLeft: r,
      running: d,
      progress: Y,
      completed: b.length,
      onToggleTimer: R,
      onResetTimer: W,
      onOpenRules: () => w(!0)
    }), s.jsx("main", {
      id: "main",
      className: "relative z-10 mx-auto max-w-[1440px] px-3 pb-10 pt-3 sm:px-6 sm:pt-5 lg:px-8",
      children: s.jsxs("div", {
        className: "grid items-start gap-6 xl:grid-cols-[264px_minmax(0,1fr)] xl:gap-7",
        children: [s.jsx(G1, {
          completed: b.length,
          progress: Y,
          activeSection: O,
          onOpenRules: () => w(!0)
        }), s.jsxs("div", {
          className: "min-w-0",
          children: [s.jsx(h1, {
            onStart: F,
            onOpenRules: () => w(!0)
          }), s.jsx("div", {
            className: "mt-3.5 lg:mt-4",
            children: s.jsx(L1, {
              completed: b.length,
              progress: Y,
              activeSection: O
            })
          }), s.jsx(b1, {
            onOpenRules: () => w(!0),
            completed: b.length
          }), s.jsx(j1, {
            onOpenRules: () => w(!0)
          }), s.jsx(A1, {
            completed: b,
            progress: Y,
            onComplete: le
          }), s.jsx(TtcQuestions, {}), s.jsx(_1, {
            completed: b,
            progress: Y,
            caseClosed: v,
            onSeal: xe,
            onOpenCaseClosed: () => A(!0),
            onDownload: Ae,
            onPrint: se
          }), s.jsx(B1, {
            onOpenRules: () => w(!0)
          })]
        })]
      })
    }), s.jsxs("footer", {
      className: "no-print relative z-10 mt-4 overflow-hidden bg-forest text-parchment-light",
      children: [s.jsx("div", {
        "aria-hidden": "true",
        className: "pointer-events-none absolute inset-0 opacity-[0.055]",
        style: {
          backgroundImage: "url('./images/case-cover.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%"
        }
      }), s.jsxs("div", {
        className: "relative mx-auto flex max-w-[1440px] flex-col gap-5 px-4 py-7 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8",
        children: [s.jsxs("div", {
          className: "flex items-start gap-3",
          children: [s.jsx("span", {
            className: "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-parchment/15 bg-parchment/[0.06] text-brass",
            children: s.jsx(Fn, {
              className: "h-4 w-4"
            })
          }), s.jsxs("div", {
            children: [s.jsx("p", {
              className: "font-display text-[1.05rem] leading-none text-parchment-light",
              children: "Field Notes"
            }), s.jsx("p", {
              className: "mt-1.5 font-mono text-[0.49rem] uppercase tracking-[0.11em] text-parchment/35",
              children: "Detective English · Case 021"
            }), s.jsx("p", {
              className: "mt-2 max-w-[27rem] text-[0.64rem] leading-relaxed text-parchment/40",
              children: "The Case of the Scrambled Survey · Academy Stars 3, Unit 2, Lesson 8. Decode and sequence the information."
            })]
          })]
        }), s.jsxs("div", {
          className: "flex flex-wrap items-center gap-x-5 gap-y-2.5",
          children: [s.jsxs("span", {
            className: "flex items-center gap-1.5 font-mono text-[0.52rem] uppercase tracking-[0.06em] text-parchment/38",
            children: [s.jsx(wi, {
              className: "h-3 w-3"
            }), "45-minute solo lesson"]
          }), s.jsxs("span", {
            className: "flex items-center gap-1.5 font-mono text-[0.52rem] uppercase tracking-[0.06em] text-parchment/38",
            children: [s.jsx(De, {
              className: "h-3 w-3 text-brass"
            }), b.length, "/5 checkpoints"]
          }), s.jsxs("button", {
            type: "button",
            onClick: () => w(!0),
            className: "flex items-center gap-1.5 rounded-full border border-parchment/15 px-3 py-1.5 font-mono text-[0.5rem] uppercase tracking-[0.06em] text-parchment/55 transition-colors hover:border-brass/40 hover:text-parchment",
            children: [s.jsx(oa, {
              className: "h-3 w-3"
            }), "Rules / Help"]
          }), s.jsx("a", {
            href: "#top",
            className: "flex h-8 w-8 items-center justify-center rounded-full border border-parchment/15 text-parchment/50 transition-colors hover:border-brass/40 hover:text-parchment",
            "aria-label": "Back to the top of the lesson",
            children: s.jsx(Jm, {
              className: "h-3.5 w-3.5"
            })
          })]
        })]
      }), s.jsx("div", {
        className: "relative border-t border-parchment/10",
        children: s.jsxs("div", {
          className: "mx-auto flex max-w-[1440px] flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8",
          children: [s.jsx("p", {
            className: "font-mono text-[0.44rem] uppercase tracking-[0.09em] text-parchment/25",
            children: "Evidence speaks. You translate."
          }), s.jsx("p", {
            className: "font-mono text-[0.44rem] uppercase tracking-[0.09em] text-parchment/25",
            children: "All evidence sourced from the class survey · 21 pupils"
          })]
        })
      })]
    }), s.jsx(V1, {
      open: y,
      onClose: () => w(!1)
    }), s.jsx(C1, {
      open: D,
      onClose: () => A(!1),
      onDownload: Ae,
      onPrint: se,
      completed: ho
    }), H ? s.jsx("div", {
      className: "no-print fixed bottom-4 left-1/2 z-[55] w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 sm:bottom-5 sm:left-auto sm:right-5 sm:translate-x-0",
      role: "status",
      "aria-live": "polite",
      children: s.jsxs("div", {
        className: "animate-toast flex items-start gap-2.5 rounded-xl border border-parchment/15 bg-forest px-3.5 py-3 text-parchment-light shadow-2xl",
        children: [s.jsx("span", {
          className: "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brass text-forest",
          children: s.jsx(De, {
            className: "h-3 w-3",
            strokeWidth: 3
          })
        }), s.jsx("p", {
          className: "flex-1 text-[0.71rem] font-semibold leading-relaxed text-parchment/82",
          children: H.message
        }), s.jsx("button", {
          type: "button",
          onClick: () => V(null),
          className: "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-parchment/36 hover:bg-parchment/10 hover:text-parchment",
          "aria-label": "Dismiss notification",
          children: s.jsx(ql, {
            className: "h-3 w-3"
          })
        })]
      })
    }) : null]
  })
}
L0.createRoot(document.getElementById("root")).render(s.jsx(Z.StrictMode, {
  children: s.jsx(X1, {})
}));