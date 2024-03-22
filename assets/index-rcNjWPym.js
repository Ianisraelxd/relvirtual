function ed(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function td(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ta = { exports: {} },
  Co = {},
  za = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pr = Symbol.for("react.element"),
  nd = Symbol.for("react.portal"),
  rd = Symbol.for("react.fragment"),
  od = Symbol.for("react.strict_mode"),
  id = Symbol.for("react.profiler"),
  ld = Symbol.for("react.provider"),
  sd = Symbol.for("react.context"),
  ad = Symbol.for("react.forward_ref"),
  ud = Symbol.for("react.suspense"),
  cd = Symbol.for("react.memo"),
  dd = Symbol.for("react.lazy"),
  ds = Symbol.iterator;
function hd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ds && e[ds]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Pa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _a = Object.assign,
  Ra = {};
function Sn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ra),
    (this.updater = n || Pa);
}
Sn.prototype.isReactComponent = {};
Sn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Sn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function La() {}
La.prototype = Sn.prototype;
function pl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ra),
    (this.updater = n || Pa);
}
var ml = (pl.prototype = new La());
ml.constructor = pl;
_a(ml, Sn.prototype);
ml.isPureReactComponent = !0;
var hs = Array.isArray,
  Oa = Object.prototype.hasOwnProperty,
  gl = { current: null },
  Fa = { key: !0, ref: !0, __self: !0, __source: !0 };
function Aa(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Oa.call(t, r) && !Fa.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var u = Array(a), d = 0; d < a; d++) u[d] = arguments[d + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: pr,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: gl.current,
  };
}
function fd(e, t) {
  return {
    $$typeof: pr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function vl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === pr;
}
function pd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var fs = /\/+/g;
function qo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? pd("" + e.key)
    : t.toString(36);
}
function br(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case pr:
          case nd:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + qo(l, 0) : r),
      hs(o)
        ? ((n = ""),
          e != null && (n = e.replace(fs, "$&/") + "/"),
          br(o, t, n, "", function (d) {
            return d;
          }))
        : o != null &&
          (vl(o) &&
            (o = fd(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(fs, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), hs(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var u = r + qo(i, a);
      l += br(i, t, n, u, o);
    }
  else if (((u = hd(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + qo(i, a++)), (l += br(i, t, n, u, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function Sr(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    br(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function md(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var de = { current: null },
  Br = { transition: null },
  gd = {
    ReactCurrentDispatcher: de,
    ReactCurrentBatchConfig: Br,
    ReactCurrentOwner: gl,
  };
L.Children = {
  map: Sr,
  forEach: function (e, t, n) {
    Sr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Sr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Sr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!vl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
L.Component = Sn;
L.Fragment = rd;
L.Profiler = id;
L.PureComponent = pl;
L.StrictMode = od;
L.Suspense = ud;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gd;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = _a({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = gl.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      Oa.call(t, u) &&
        !Fa.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var d = 0; d < u; d++) a[d] = arguments[d + 2];
    r.children = a;
  }
  return { $$typeof: pr, type: e.type, key: o, ref: i, props: r, _owner: l };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: sd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ld, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = Aa;
L.createFactory = function (e) {
  var t = Aa.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: ad, render: e };
};
L.isValidElement = vl;
L.lazy = function (e) {
  return { $$typeof: dd, _payload: { _status: -1, _result: e }, _init: md };
};
L.memo = function (e, t) {
  return { $$typeof: cd, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = Br.transition;
  Br.transition = {};
  try {
    e();
  } finally {
    Br.transition = t;
  }
};
L.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (e, t) {
  return de.current.useCallback(e, t);
};
L.useContext = function (e) {
  return de.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return de.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return de.current.useEffect(e, t);
};
L.useId = function () {
  return de.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
  return de.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
  return de.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return de.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return de.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
  return de.current.useReducer(e, t, n);
};
L.useRef = function (e) {
  return de.current.useRef(e);
};
L.useState = function (e) {
  return de.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
  return de.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
  return de.current.useTransition();
};
L.version = "18.2.0";
za.exports = L;
var g = za.exports;
const Da = td(g),
  vd = ed({ __proto__: null, default: Da }, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yd = g,
  wd = Symbol.for("react.element"),
  kd = Symbol.for("react.fragment"),
  xd = Object.prototype.hasOwnProperty,
  Sd = yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  jd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ma(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) xd.call(t, r) && !jd.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: wd,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Sd.current,
  };
}
Co.Fragment = kd;
Co.jsx = Ma;
Co.jsxs = Ma;
Ta.exports = Co;
var s = Ta.exports,
  yi = {},
  ba = { exports: {} },
  Se = {},
  Ba = { exports: {} },
  Wa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(z, _) {
    var R = z.length;
    z.push(_);
    e: for (; 0 < R; ) {
      var Q = (R - 1) >>> 1,
        X = z[Q];
      if (0 < o(X, _)) (z[Q] = _), (z[R] = X), (R = Q);
      else break e;
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function r(z) {
    if (z.length === 0) return null;
    var _ = z[0],
      R = z.pop();
    if (R !== _) {
      z[0] = R;
      e: for (var Q = 0, X = z.length, kr = X >>> 1; Q < kr; ) {
        var xt = 2 * (Q + 1) - 1,
          $o = z[xt],
          St = xt + 1,
          xr = z[St];
        if (0 > o($o, R))
          St < X && 0 > o(xr, $o)
            ? ((z[Q] = xr), (z[St] = R), (Q = St))
            : ((z[Q] = $o), (z[xt] = R), (Q = xt));
        else if (St < X && 0 > o(xr, R)) (z[Q] = xr), (z[St] = R), (Q = St);
        else break e;
      }
    }
    return _;
  }
  function o(z, _) {
    var R = z.sortIndex - _.sortIndex;
    return R !== 0 ? R : z.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var u = [],
    d = [],
    m = 1,
    v = null,
    y = 3,
    w = !1,
    k = !1,
    x = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(z) {
    for (var _ = n(d); _ !== null; ) {
      if (_.callback === null) r(d);
      else if (_.startTime <= z)
        r(d), (_.sortIndex = _.expirationTime), t(u, _);
      else break;
      _ = n(d);
    }
  }
  function S(z) {
    if (((x = !1), f(z), !k))
      if (n(u) !== null) (k = !0), Ho(I);
      else {
        var _ = n(d);
        _ !== null && Uo(S, _.startTime - z);
      }
  }
  function I(z, _) {
    (k = !1), x && ((x = !1), p(C), (C = -1)), (w = !0);
    var R = y;
    try {
      for (
        f(_), v = n(u);
        v !== null && (!(v.expirationTime > _) || (z && !Pe()));

      ) {
        var Q = v.callback;
        if (typeof Q == "function") {
          (v.callback = null), (y = v.priorityLevel);
          var X = Q(v.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof X == "function" ? (v.callback = X) : v === n(u) && r(u),
            f(_);
        } else r(u);
        v = n(u);
      }
      if (v !== null) var kr = !0;
      else {
        var xt = n(d);
        xt !== null && Uo(S, xt.startTime - _), (kr = !1);
      }
      return kr;
    } finally {
      (v = null), (y = R), (w = !1);
    }
  }
  var N = !1,
    h = null,
    C = -1,
    P = 5,
    O = -1;
  function Pe() {
    return !(e.unstable_now() - O < P);
  }
  function In() {
    if (h !== null) {
      var z = e.unstable_now();
      O = z;
      var _ = !0;
      try {
        _ = h(!0, z);
      } finally {
        _ ? Nn() : ((N = !1), (h = null));
      }
    } else N = !1;
  }
  var Nn;
  if (typeof c == "function")
    Nn = function () {
      c(In);
    };
  else if (typeof MessageChannel < "u") {
    var cs = new MessageChannel(),
      Zc = cs.port2;
    (cs.port1.onmessage = In),
      (Nn = function () {
        Zc.postMessage(null);
      });
  } else
    Nn = function () {
      j(In, 0);
    };
  function Ho(z) {
    (h = z), N || ((N = !0), Nn());
  }
  function Uo(z, _) {
    C = j(function () {
      z(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (z) {
      z.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      k || w || ((k = !0), Ho(I));
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (P = 0 < z ? Math.floor(1e3 / z) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return y;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (z) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = y;
      }
      var R = y;
      y = _;
      try {
        return z();
      } finally {
        y = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (z, _) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var R = y;
      y = z;
      try {
        return _();
      } finally {
        y = R;
      }
    }),
    (e.unstable_scheduleCallback = function (z, _, R) {
      var Q = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? Q + R : Q))
          : (R = Q),
        z)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = R + X),
        (z = {
          id: m++,
          callback: _,
          priorityLevel: z,
          startTime: R,
          expirationTime: X,
          sortIndex: -1,
        }),
        R > Q
          ? ((z.sortIndex = R),
            t(d, z),
            n(u) === null &&
              z === n(d) &&
              (x ? (p(C), (C = -1)) : (x = !0), Uo(S, R - Q)))
          : ((z.sortIndex = X), t(u, z), k || w || ((k = !0), Ho(I))),
        z
      );
    }),
    (e.unstable_shouldYield = Pe),
    (e.unstable_wrapCallback = function (z) {
      var _ = y;
      return function () {
        var R = y;
        y = _;
        try {
          return z.apply(this, arguments);
        } finally {
          y = R;
        }
      };
    });
})(Wa);
Ba.exports = Wa;
var Cd = Ba.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ha = g,
  xe = Cd;
function E(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ua = new Set(),
  Kn = {};
function qt(e, t) {
  mn(e, t), mn(e + "Capture", t);
}
function mn(e, t) {
  for (Kn[e] = t, e = 0; e < t.length; e++) Ua.add(t[e]);
}
var Ge = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  wi = Object.prototype.hasOwnProperty,
  Ed =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ps = {},
  ms = {};
function Id(e) {
  return wi.call(ms, e)
    ? !0
    : wi.call(ps, e)
    ? !1
    : Ed.test(e)
    ? (ms[e] = !0)
    : ((ps[e] = !0), !1);
}
function Nd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Td(e, t, n, r) {
  if (t === null || typeof t > "u" || Nd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function he(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    re[e] = new he(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  re[t] = new he(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  re[e] = new he(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  re[e] = new he(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    re[e] = new he(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  re[e] = new he(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  re[e] = new he(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  re[e] = new he(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  re[e] = new he(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var yl = /[\-:]([a-z])/g;
function wl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(yl, wl);
    re[t] = new he(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(yl, wl);
    re[t] = new he(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(yl, wl);
  re[t] = new he(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  re[e] = new he(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new he(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  re[e] = new he(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function kl(e, t, n, r) {
  var o = re.hasOwnProperty(t) ? re[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Td(t, n, o, r) && (n = null),
    r || o === null
      ? Id(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xe = Ha.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  jr = Symbol.for("react.element"),
  Yt = Symbol.for("react.portal"),
  Jt = Symbol.for("react.fragment"),
  xl = Symbol.for("react.strict_mode"),
  ki = Symbol.for("react.profiler"),
  $a = Symbol.for("react.provider"),
  qa = Symbol.for("react.context"),
  Sl = Symbol.for("react.forward_ref"),
  xi = Symbol.for("react.suspense"),
  Si = Symbol.for("react.suspense_list"),
  jl = Symbol.for("react.memo"),
  et = Symbol.for("react.lazy"),
  Qa = Symbol.for("react.offscreen"),
  gs = Symbol.iterator;
function Tn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (gs && e[gs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $ = Object.assign,
  Qo;
function An(e) {
  if (Qo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Qo = (t && t[1]) || "";
    }
  return (
    `
` +
    Qo +
    e
  );
}
var Vo = !1;
function Go(e, t) {
  if (!e || Vo) return "";
  Vo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          r = d;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var o = d.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          a = i.length - 1;
        1 <= l && 0 <= a && o[l] !== i[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (o[l] !== i[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || o[l] !== i[a])) {
                var u =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (Vo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? An(e) : "";
}
function zd(e) {
  switch (e.tag) {
    case 5:
      return An(e.type);
    case 16:
      return An("Lazy");
    case 13:
      return An("Suspense");
    case 19:
      return An("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Go(e.type, !1)), e;
    case 11:
      return (e = Go(e.type.render, !1)), e;
    case 1:
      return (e = Go(e.type, !0)), e;
    default:
      return "";
  }
}
function ji(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Jt:
      return "Fragment";
    case Yt:
      return "Portal";
    case ki:
      return "Profiler";
    case xl:
      return "StrictMode";
    case xi:
      return "Suspense";
    case Si:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case qa:
        return (e.displayName || "Context") + ".Consumer";
      case $a:
        return (e._context.displayName || "Context") + ".Provider";
      case Sl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case jl:
        return (
          (t = e.displayName || null), t !== null ? t : ji(e.type) || "Memo"
        );
      case et:
        (t = e._payload), (e = e._init);
        try {
          return ji(e(t));
        } catch {}
    }
  return null;
}
function Pd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ji(t);
    case 8:
      return t === xl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function gt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Va(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function _d(e) {
  var t = Va(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Cr(e) {
  e._valueTracker || (e._valueTracker = _d(e));
}
function Ga(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Va(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Jr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ci(e, t) {
  var n = t.checked;
  return $({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function vs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = gt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ka(e, t) {
  (t = t.checked), t != null && kl(e, "checked", t, !1);
}
function Ei(e, t) {
  Ka(e, t);
  var n = gt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ii(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ii(e, t.type, gt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ys(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ii(e, t, n) {
  (t !== "number" || Jr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Dn = Array.isArray;
function un(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + gt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ni(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return $({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ws(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (Dn(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: gt(n) };
}
function Ya(e, t) {
  var n = gt(t.value),
    r = gt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ks(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ja(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ti(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ja(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Er,
  Xa = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Er = Er || document.createElement("div"),
          Er.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Er.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Yn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Bn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Rd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Bn).forEach(function (e) {
  Rd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Bn[t] = Bn[e]);
  });
});
function Za(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Bn.hasOwnProperty(e) && Bn[e])
    ? ("" + t).trim()
    : t + "px";
}
function eu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Za(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Ld = $(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function zi(e, t) {
  if (t) {
    if (Ld[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Pi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
      return !0;
  }
}
var _i = null;
function Cl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ri = null,
  cn = null,
  dn = null;
function xs(e) {
  if ((e = vr(e))) {
    if (typeof Ri != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = zo(t)), Ri(e.stateNode, e.type, t));
  }
}
function tu(e) {
  cn ? (dn ? dn.push(e) : (dn = [e])) : (cn = e);
}
function nu() {
  if (cn) {
    var e = cn,
      t = dn;
    if (((dn = cn = null), xs(e), t)) for (e = 0; e < t.length; e++) xs(t[e]);
  }
}
function ru(e, t) {
  return e(t);
}
function ou() {}
var Ko = !1;
function iu(e, t, n) {
  if (Ko) return e(t, n);
  Ko = !0;
  try {
    return ru(e, t, n);
  } finally {
    (Ko = !1), (cn !== null || dn !== null) && (ou(), nu());
  }
}
function Jn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = zo(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var Li = !1;
if (Ge)
  try {
    var zn = {};
    Object.defineProperty(zn, "passive", {
      get: function () {
        Li = !0;
      },
    }),
      window.addEventListener("test", zn, zn),
      window.removeEventListener("test", zn, zn);
  } catch {
    Li = !1;
  }
function Od(e, t, n, r, o, i, l, a, u) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (m) {
    this.onError(m);
  }
}
var Wn = !1,
  Xr = null,
  Zr = !1,
  Oi = null,
  Fd = {
    onError: function (e) {
      (Wn = !0), (Xr = e);
    },
  };
function Ad(e, t, n, r, o, i, l, a, u) {
  (Wn = !1), (Xr = null), Od.apply(Fd, arguments);
}
function Dd(e, t, n, r, o, i, l, a, u) {
  if ((Ad.apply(this, arguments), Wn)) {
    if (Wn) {
      var d = Xr;
      (Wn = !1), (Xr = null);
    } else throw Error(E(198));
    Zr || ((Zr = !0), (Oi = d));
  }
}
function Qt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function lu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ss(e) {
  if (Qt(e) !== e) throw Error(E(188));
}
function Md(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Qt(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Ss(o), e;
        if (i === r) return Ss(o), t;
        i = i.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, a = o.child; a; ) {
        if (a === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = i.child; a; ) {
          if (a === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function su(e) {
  return (e = Md(e)), e !== null ? au(e) : null;
}
function au(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = au(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var uu = xe.unstable_scheduleCallback,
  js = xe.unstable_cancelCallback,
  bd = xe.unstable_shouldYield,
  Bd = xe.unstable_requestPaint,
  V = xe.unstable_now,
  Wd = xe.unstable_getCurrentPriorityLevel,
  El = xe.unstable_ImmediatePriority,
  cu = xe.unstable_UserBlockingPriority,
  eo = xe.unstable_NormalPriority,
  Hd = xe.unstable_LowPriority,
  du = xe.unstable_IdlePriority,
  Eo = null,
  We = null;
function Ud(e) {
  if (We && typeof We.onCommitFiberRoot == "function")
    try {
      We.onCommitFiberRoot(Eo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Fe = Math.clz32 ? Math.clz32 : Qd,
  $d = Math.log,
  qd = Math.LN2;
function Qd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - (($d(e) / qd) | 0)) | 0;
}
var Ir = 64,
  Nr = 4194304;
function Mn(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function to(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~o;
    a !== 0 ? (r = Mn(a)) : ((i &= l), i !== 0 && (r = Mn(i)));
  } else (l = n & ~o), l !== 0 ? (r = Mn(l)) : i !== 0 && (r = Mn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Fe(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Vd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Gd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - Fe(i),
      a = 1 << l,
      u = o[l];
    u === -1
      ? (!(a & n) || a & r) && (o[l] = Vd(a, t))
      : u <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Fi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function hu() {
  var e = Ir;
  return (Ir <<= 1), !(Ir & 4194240) && (Ir = 64), e;
}
function Yo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function mr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Fe(t)),
    (e[t] = n);
}
function Kd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Fe(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Il(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Fe(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var A = 0;
function fu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var pu,
  Nl,
  mu,
  gu,
  vu,
  Ai = !1,
  Tr = [],
  st = null,
  at = null,
  ut = null,
  Xn = new Map(),
  Zn = new Map(),
  nt = [],
  Yd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Cs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      st = null;
      break;
    case "dragenter":
    case "dragleave":
      at = null;
      break;
    case "mouseover":
    case "mouseout":
      ut = null;
      break;
    case "pointerover":
    case "pointerout":
      Xn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zn.delete(t.pointerId);
  }
}
function Pn(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = vr(t)), t !== null && Nl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Jd(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (st = Pn(st, e, t, n, r, o)), !0;
    case "dragenter":
      return (at = Pn(at, e, t, n, r, o)), !0;
    case "mouseover":
      return (ut = Pn(ut, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Xn.set(i, Pn(Xn.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Zn.set(i, Pn(Zn.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function yu(e) {
  var t = Ft(e.target);
  if (t !== null) {
    var n = Qt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = lu(n)), t !== null)) {
          (e.blockedOn = t),
            vu(e.priority, function () {
              mu(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Wr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Di(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (_i = r), n.target.dispatchEvent(r), (_i = null);
    } else return (t = vr(n)), t !== null && Nl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Es(e, t, n) {
  Wr(e) && n.delete(t);
}
function Xd() {
  (Ai = !1),
    st !== null && Wr(st) && (st = null),
    at !== null && Wr(at) && (at = null),
    ut !== null && Wr(ut) && (ut = null),
    Xn.forEach(Es),
    Zn.forEach(Es);
}
function _n(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ai ||
      ((Ai = !0),
      xe.unstable_scheduleCallback(xe.unstable_NormalPriority, Xd)));
}
function er(e) {
  function t(o) {
    return _n(o, e);
  }
  if (0 < Tr.length) {
    _n(Tr[0], e);
    for (var n = 1; n < Tr.length; n++) {
      var r = Tr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    st !== null && _n(st, e),
      at !== null && _n(at, e),
      ut !== null && _n(ut, e),
      Xn.forEach(t),
      Zn.forEach(t),
      n = 0;
    n < nt.length;
    n++
  )
    (r = nt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nt.length && ((n = nt[0]), n.blockedOn === null); )
    yu(n), n.blockedOn === null && nt.shift();
}
var hn = Xe.ReactCurrentBatchConfig,
  no = !0;
function Zd(e, t, n, r) {
  var o = A,
    i = hn.transition;
  hn.transition = null;
  try {
    (A = 1), Tl(e, t, n, r);
  } finally {
    (A = o), (hn.transition = i);
  }
}
function eh(e, t, n, r) {
  var o = A,
    i = hn.transition;
  hn.transition = null;
  try {
    (A = 4), Tl(e, t, n, r);
  } finally {
    (A = o), (hn.transition = i);
  }
}
function Tl(e, t, n, r) {
  if (no) {
    var o = Di(e, t, n, r);
    if (o === null) li(e, t, r, ro, n), Cs(e, r);
    else if (Jd(o, e, t, n, r)) r.stopPropagation();
    else if ((Cs(e, r), t & 4 && -1 < Yd.indexOf(e))) {
      for (; o !== null; ) {
        var i = vr(o);
        if (
          (i !== null && pu(i),
          (i = Di(e, t, n, r)),
          i === null && li(e, t, r, ro, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else li(e, t, r, null, n);
  }
}
var ro = null;
function Di(e, t, n, r) {
  if (((ro = null), (e = Cl(r)), (e = Ft(e)), e !== null))
    if (((t = Qt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = lu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ro = e), null;
}
function wu(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Wd()) {
        case El:
          return 1;
        case cu:
          return 4;
        case eo:
        case Hd:
          return 16;
        case du:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ot = null,
  zl = null,
  Hr = null;
function ku() {
  if (Hr) return Hr;
  var e,
    t = zl,
    n = t.length,
    r,
    o = "value" in ot ? ot.value : ot.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Hr = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ur(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function zr() {
  return !0;
}
function Is() {
  return !1;
}
function je(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? zr
        : Is),
      (this.isPropagationStopped = Is),
      this
    );
  }
  return (
    $(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = zr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = zr));
      },
      persist: function () {},
      isPersistent: zr,
    }),
    t
  );
}
var jn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Pl = je(jn),
  gr = $({}, jn, { view: 0, detail: 0 }),
  th = je(gr),
  Jo,
  Xo,
  Rn,
  Io = $({}, gr, {
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
    getModifierState: _l,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Rn &&
            (Rn && e.type === "mousemove"
              ? ((Jo = e.screenX - Rn.screenX), (Xo = e.screenY - Rn.screenY))
              : (Xo = Jo = 0),
            (Rn = e)),
          Jo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Xo;
    },
  }),
  Ns = je(Io),
  nh = $({}, Io, { dataTransfer: 0 }),
  rh = je(nh),
  oh = $({}, gr, { relatedTarget: 0 }),
  Zo = je(oh),
  ih = $({}, jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lh = je(ih),
  sh = $({}, jn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ah = je(sh),
  uh = $({}, jn, { data: 0 }),
  Ts = je(uh),
  ch = {
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
    MozPrintableKey: "Unidentified",
  },
  dh = {
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
    224: "Meta",
  },
  hh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function fh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = hh[e]) ? !!t[e] : !1;
}
function _l() {
  return fh;
}
var ph = $({}, gr, {
    key: function (e) {
      if (e.key) {
        var t = ch[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ur(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? dh[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _l,
    charCode: function (e) {
      return e.type === "keypress" ? Ur(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ur(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  mh = je(ph),
  gh = $({}, Io, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  zs = je(gh),
  vh = $({}, gr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _l,
  }),
  yh = je(vh),
  wh = $({}, jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  kh = je(wh),
  xh = $({}, Io, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Sh = je(xh),
  jh = [9, 13, 27, 32],
  Rl = Ge && "CompositionEvent" in window,
  Hn = null;
Ge && "documentMode" in document && (Hn = document.documentMode);
var Ch = Ge && "TextEvent" in window && !Hn,
  xu = Ge && (!Rl || (Hn && 8 < Hn && 11 >= Hn)),
  Ps = " ",
  _s = !1;
function Su(e, t) {
  switch (e) {
    case "keyup":
      return jh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ju(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Xt = !1;
function Eh(e, t) {
  switch (e) {
    case "compositionend":
      return ju(t);
    case "keypress":
      return t.which !== 32 ? null : ((_s = !0), Ps);
    case "textInput":
      return (e = t.data), e === Ps && _s ? null : e;
    default:
      return null;
  }
}
function Ih(e, t) {
  if (Xt)
    return e === "compositionend" || (!Rl && Su(e, t))
      ? ((e = ku()), (Hr = zl = ot = null), (Xt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return xu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Nh = {
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
  week: !0,
};
function Rs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Nh[e.type] : t === "textarea";
}
function Cu(e, t, n, r) {
  tu(r),
    (t = oo(t, "onChange")),
    0 < t.length &&
      ((n = new Pl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Un = null,
  tr = null;
function Th(e) {
  Fu(e, 0);
}
function No(e) {
  var t = tn(e);
  if (Ga(t)) return e;
}
function zh(e, t) {
  if (e === "change") return t;
}
var Eu = !1;
if (Ge) {
  var ei;
  if (Ge) {
    var ti = "oninput" in document;
    if (!ti) {
      var Ls = document.createElement("div");
      Ls.setAttribute("oninput", "return;"),
        (ti = typeof Ls.oninput == "function");
    }
    ei = ti;
  } else ei = !1;
  Eu = ei && (!document.documentMode || 9 < document.documentMode);
}
function Os() {
  Un && (Un.detachEvent("onpropertychange", Iu), (tr = Un = null));
}
function Iu(e) {
  if (e.propertyName === "value" && No(tr)) {
    var t = [];
    Cu(t, tr, e, Cl(e)), iu(Th, t);
  }
}
function Ph(e, t, n) {
  e === "focusin"
    ? (Os(), (Un = t), (tr = n), Un.attachEvent("onpropertychange", Iu))
    : e === "focusout" && Os();
}
function _h(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return No(tr);
}
function Rh(e, t) {
  if (e === "click") return No(t);
}
function Lh(e, t) {
  if (e === "input" || e === "change") return No(t);
}
function Oh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var De = typeof Object.is == "function" ? Object.is : Oh;
function nr(e, t) {
  if (De(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!wi.call(t, o) || !De(e[o], t[o])) return !1;
  }
  return !0;
}
function Fs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function As(e, t) {
  var n = Fs(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Fs(n);
  }
}
function Nu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Nu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Tu() {
  for (var e = window, t = Jr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Jr(e.document);
  }
  return t;
}
function Ll(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Fh(e) {
  var t = Tu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Nu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ll(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = As(n, i));
        var l = As(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ah = Ge && "documentMode" in document && 11 >= document.documentMode,
  Zt = null,
  Mi = null,
  $n = null,
  bi = !1;
function Ds(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  bi ||
    Zt == null ||
    Zt !== Jr(r) ||
    ((r = Zt),
    "selectionStart" in r && Ll(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    ($n && nr($n, r)) ||
      (($n = r),
      (r = oo(Mi, "onSelect")),
      0 < r.length &&
        ((t = new Pl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Zt))));
}
function Pr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var en = {
    animationend: Pr("Animation", "AnimationEnd"),
    animationiteration: Pr("Animation", "AnimationIteration"),
    animationstart: Pr("Animation", "AnimationStart"),
    transitionend: Pr("Transition", "TransitionEnd"),
  },
  ni = {},
  zu = {};
Ge &&
  ((zu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete en.animationend.animation,
    delete en.animationiteration.animation,
    delete en.animationstart.animation),
  "TransitionEvent" in window || delete en.transitionend.transition);
function To(e) {
  if (ni[e]) return ni[e];
  if (!en[e]) return e;
  var t = en[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in zu) return (ni[e] = t[n]);
  return e;
}
var Pu = To("animationend"),
  _u = To("animationiteration"),
  Ru = To("animationstart"),
  Lu = To("transitionend"),
  Ou = new Map(),
  Ms =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function yt(e, t) {
  Ou.set(e, t), qt(t, [e]);
}
for (var ri = 0; ri < Ms.length; ri++) {
  var oi = Ms[ri],
    Dh = oi.toLowerCase(),
    Mh = oi[0].toUpperCase() + oi.slice(1);
  yt(Dh, "on" + Mh);
}
yt(Pu, "onAnimationEnd");
yt(_u, "onAnimationIteration");
yt(Ru, "onAnimationStart");
yt("dblclick", "onDoubleClick");
yt("focusin", "onFocus");
yt("focusout", "onBlur");
yt(Lu, "onTransitionEnd");
mn("onMouseEnter", ["mouseout", "mouseover"]);
mn("onMouseLeave", ["mouseout", "mouseover"]);
mn("onPointerEnter", ["pointerout", "pointerover"]);
mn("onPointerLeave", ["pointerout", "pointerover"]);
qt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
qt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
qt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
qt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
qt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var bn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  bh = new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));
function bs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Dd(r, t, void 0, e), (e.currentTarget = null);
}
function Fu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            u = a.instance,
            d = a.currentTarget;
          if (((a = a.listener), u !== i && o.isPropagationStopped())) break e;
          bs(o, a, d), (i = u);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (u = a.instance),
            (d = a.currentTarget),
            (a = a.listener),
            u !== i && o.isPropagationStopped())
          )
            break e;
          bs(o, a, d), (i = u);
        }
    }
  }
  if (Zr) throw ((e = Oi), (Zr = !1), (Oi = null), e);
}
function M(e, t) {
  var n = t[$i];
  n === void 0 && (n = t[$i] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Au(t, e, 2, !1), n.add(r));
}
function ii(e, t, n) {
  var r = 0;
  t && (r |= 4), Au(n, e, r, t);
}
var _r = "_reactListening" + Math.random().toString(36).slice(2);
function rr(e) {
  if (!e[_r]) {
    (e[_r] = !0),
      Ua.forEach(function (n) {
        n !== "selectionchange" && (bh.has(n) || ii(n, !1, e), ii(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_r] || ((t[_r] = !0), ii("selectionchange", !1, t));
  }
}
function Au(e, t, n, r) {
  switch (wu(t)) {
    case 1:
      var o = Zd;
      break;
    case 4:
      o = eh;
      break;
    default:
      o = Tl;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Li ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function li(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var u = l.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = l.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = Ft(a)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            r = i = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  iu(function () {
    var d = i,
      m = Cl(n),
      v = [];
    e: {
      var y = Ou.get(e);
      if (y !== void 0) {
        var w = Pl,
          k = e;
        switch (e) {
          case "keypress":
            if (Ur(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = mh;
            break;
          case "focusin":
            (k = "focus"), (w = Zo);
            break;
          case "focusout":
            (k = "blur"), (w = Zo);
            break;
          case "beforeblur":
          case "afterblur":
            w = Zo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Ns;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = rh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = yh;
            break;
          case Pu:
          case _u:
          case Ru:
            w = lh;
            break;
          case Lu:
            w = kh;
            break;
          case "scroll":
            w = th;
            break;
          case "wheel":
            w = Sh;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = ah;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = zs;
        }
        var x = (t & 4) !== 0,
          j = !x && e === "scroll",
          p = x ? (y !== null ? y + "Capture" : null) : y;
        x = [];
        for (var c = d, f; c !== null; ) {
          f = c;
          var S = f.stateNode;
          if (
            (f.tag === 5 &&
              S !== null &&
              ((f = S),
              p !== null && ((S = Jn(c, p)), S != null && x.push(or(c, S, f)))),
            j)
          )
            break;
          c = c.return;
        }
        0 < x.length &&
          ((y = new w(y, k, null, n, m)), v.push({ event: y, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((y = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          y &&
            n !== _i &&
            (k = n.relatedTarget || n.fromElement) &&
            (Ft(k) || k[Ke]))
        )
          break e;
        if (
          (w || y) &&
          ((y =
            m.window === m
              ? m
              : (y = m.ownerDocument)
              ? y.defaultView || y.parentWindow
              : window),
          w
            ? ((k = n.relatedTarget || n.toElement),
              (w = d),
              (k = k ? Ft(k) : null),
              k !== null &&
                ((j = Qt(k)), k !== j || (k.tag !== 5 && k.tag !== 6)) &&
                (k = null))
            : ((w = null), (k = d)),
          w !== k)
        ) {
          if (
            ((x = Ns),
            (S = "onMouseLeave"),
            (p = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = zs),
              (S = "onPointerLeave"),
              (p = "onPointerEnter"),
              (c = "pointer")),
            (j = w == null ? y : tn(w)),
            (f = k == null ? y : tn(k)),
            (y = new x(S, c + "leave", w, n, m)),
            (y.target = j),
            (y.relatedTarget = f),
            (S = null),
            Ft(m) === d &&
              ((x = new x(p, c + "enter", k, n, m)),
              (x.target = f),
              (x.relatedTarget = j),
              (S = x)),
            (j = S),
            w && k)
          )
            t: {
              for (x = w, p = k, c = 0, f = x; f; f = Kt(f)) c++;
              for (f = 0, S = p; S; S = Kt(S)) f++;
              for (; 0 < c - f; ) (x = Kt(x)), c--;
              for (; 0 < f - c; ) (p = Kt(p)), f--;
              for (; c--; ) {
                if (x === p || (p !== null && x === p.alternate)) break t;
                (x = Kt(x)), (p = Kt(p));
              }
              x = null;
            }
          else x = null;
          w !== null && Bs(v, y, w, x, !1),
            k !== null && j !== null && Bs(v, j, k, x, !0);
        }
      }
      e: {
        if (
          ((y = d ? tn(d) : window),
          (w = y.nodeName && y.nodeName.toLowerCase()),
          w === "select" || (w === "input" && y.type === "file"))
        )
          var I = zh;
        else if (Rs(y))
          if (Eu) I = Lh;
          else {
            I = _h;
            var N = Ph;
          }
        else
          (w = y.nodeName) &&
            w.toLowerCase() === "input" &&
            (y.type === "checkbox" || y.type === "radio") &&
            (I = Rh);
        if (I && (I = I(e, d))) {
          Cu(v, I, n, m);
          break e;
        }
        N && N(e, y, d),
          e === "focusout" &&
            (N = y._wrapperState) &&
            N.controlled &&
            y.type === "number" &&
            Ii(y, "number", y.value);
      }
      switch (((N = d ? tn(d) : window), e)) {
        case "focusin":
          (Rs(N) || N.contentEditable === "true") &&
            ((Zt = N), (Mi = d), ($n = null));
          break;
        case "focusout":
          $n = Mi = Zt = null;
          break;
        case "mousedown":
          bi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (bi = !1), Ds(v, n, m);
          break;
        case "selectionchange":
          if (Ah) break;
        case "keydown":
        case "keyup":
          Ds(v, n, m);
      }
      var h;
      if (Rl)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        Xt
          ? Su(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (xu &&
          n.locale !== "ko" &&
          (Xt || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && Xt && (h = ku())
            : ((ot = m),
              (zl = "value" in ot ? ot.value : ot.textContent),
              (Xt = !0))),
        (N = oo(d, C)),
        0 < N.length &&
          ((C = new Ts(C, e, null, n, m)),
          v.push({ event: C, listeners: N }),
          h ? (C.data = h) : ((h = ju(n)), h !== null && (C.data = h)))),
        (h = Ch ? Eh(e, n) : Ih(e, n)) &&
          ((d = oo(d, "onBeforeInput")),
          0 < d.length &&
            ((m = new Ts("onBeforeInput", "beforeinput", null, n, m)),
            v.push({ event: m, listeners: d }),
            (m.data = h)));
    }
    Fu(v, t);
  });
}
function or(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function oo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Jn(e, n)),
      i != null && r.unshift(or(e, i, o)),
      (i = Jn(e, t)),
      i != null && r.push(or(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Kt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Bs(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      d = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      d !== null &&
      ((a = d),
      o
        ? ((u = Jn(n, i)), u != null && l.unshift(or(n, u, a)))
        : o || ((u = Jn(n, i)), u != null && l.push(or(n, u, a)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Bh = /\r\n?/g,
  Wh = /\u0000|\uFFFD/g;
function Ws(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Bh,
      `
`
    )
    .replace(Wh, "");
}
function Rr(e, t, n) {
  if (((t = Ws(t)), Ws(e) !== t && n)) throw Error(E(425));
}
function io() {}
var Bi = null,
  Wi = null;
function Hi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ui = typeof setTimeout == "function" ? setTimeout : void 0,
  Hh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Hs = typeof Promise == "function" ? Promise : void 0,
  Uh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Hs < "u"
      ? function (e) {
          return Hs.resolve(null).then(e).catch($h);
        }
      : Ui;
function $h(e) {
  setTimeout(function () {
    throw e;
  });
}
function si(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), er(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  er(t);
}
function ct(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Us(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Cn = Math.random().toString(36).slice(2),
  Be = "__reactFiber$" + Cn,
  ir = "__reactProps$" + Cn,
  Ke = "__reactContainer$" + Cn,
  $i = "__reactEvents$" + Cn,
  qh = "__reactListeners$" + Cn,
  Qh = "__reactHandles$" + Cn;
function Ft(e) {
  var t = e[Be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ke] || n[Be])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Us(e); e !== null; ) {
          if ((n = e[Be])) return n;
          e = Us(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function vr(e) {
  return (
    (e = e[Be] || e[Ke]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function tn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function zo(e) {
  return e[ir] || null;
}
var qi = [],
  nn = -1;
function wt(e) {
  return { current: e };
}
function b(e) {
  0 > nn || ((e.current = qi[nn]), (qi[nn] = null), nn--);
}
function D(e, t) {
  nn++, (qi[nn] = e.current), (e.current = t);
}
var vt = {},
  se = wt(vt),
  me = wt(!1),
  Bt = vt;
function gn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function ge(e) {
  return (e = e.childContextTypes), e != null;
}
function lo() {
  b(me), b(se);
}
function $s(e, t, n) {
  if (se.current !== vt) throw Error(E(168));
  D(se, t), D(me, n);
}
function Du(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(E(108, Pd(e) || "Unknown", o));
  return $({}, n, r);
}
function so(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || vt),
    (Bt = se.current),
    D(se, e),
    D(me, me.current),
    !0
  );
}
function qs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = Du(e, t, Bt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      b(me),
      b(se),
      D(se, e))
    : b(me),
    D(me, n);
}
var $e = null,
  Po = !1,
  ai = !1;
function Mu(e) {
  $e === null ? ($e = [e]) : $e.push(e);
}
function Vh(e) {
  (Po = !0), Mu(e);
}
function kt() {
  if (!ai && $e !== null) {
    ai = !0;
    var e = 0,
      t = A;
    try {
      var n = $e;
      for (A = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ($e = null), (Po = !1);
    } catch (o) {
      throw ($e !== null && ($e = $e.slice(e + 1)), uu(El, kt), o);
    } finally {
      (A = t), (ai = !1);
    }
  }
  return null;
}
var rn = [],
  on = 0,
  ao = null,
  uo = 0,
  Ce = [],
  Ee = 0,
  Wt = null,
  qe = 1,
  Qe = "";
function Lt(e, t) {
  (rn[on++] = uo), (rn[on++] = ao), (ao = e), (uo = t);
}
function bu(e, t, n) {
  (Ce[Ee++] = qe), (Ce[Ee++] = Qe), (Ce[Ee++] = Wt), (Wt = e);
  var r = qe;
  e = Qe;
  var o = 32 - Fe(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Fe(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (qe = (1 << (32 - Fe(t) + o)) | (n << o) | r),
      (Qe = i + e);
  } else (qe = (1 << i) | (n << o) | r), (Qe = e);
}
function Ol(e) {
  e.return !== null && (Lt(e, 1), bu(e, 1, 0));
}
function Fl(e) {
  for (; e === ao; )
    (ao = rn[--on]), (rn[on] = null), (uo = rn[--on]), (rn[on] = null);
  for (; e === Wt; )
    (Wt = Ce[--Ee]),
      (Ce[Ee] = null),
      (Qe = Ce[--Ee]),
      (Ce[Ee] = null),
      (qe = Ce[--Ee]),
      (Ce[Ee] = null);
}
var ke = null,
  we = null,
  B = !1,
  Oe = null;
function Bu(e, t) {
  var n = Ie(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Qs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ke = e), (we = ct(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ke = e), (we = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Wt !== null ? { id: qe, overflow: Qe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ie(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ke = e),
            (we = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Qi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Vi(e) {
  if (B) {
    var t = we;
    if (t) {
      var n = t;
      if (!Qs(e, t)) {
        if (Qi(e)) throw Error(E(418));
        t = ct(n.nextSibling);
        var r = ke;
        t && Qs(e, t)
          ? Bu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (B = !1), (ke = e));
      }
    } else {
      if (Qi(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (B = !1), (ke = e);
    }
  }
}
function Vs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ke = e;
}
function Lr(e) {
  if (e !== ke) return !1;
  if (!B) return Vs(e), (B = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Hi(e.type, e.memoizedProps))),
    t && (t = we))
  ) {
    if (Qi(e)) throw (Wu(), Error(E(418)));
    for (; t; ) Bu(e, t), (t = ct(t.nextSibling));
  }
  if ((Vs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              we = ct(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = ke ? ct(e.stateNode.nextSibling) : null;
  return !0;
}
function Wu() {
  for (var e = we; e; ) e = ct(e.nextSibling);
}
function vn() {
  (we = ke = null), (B = !1);
}
function Al(e) {
  Oe === null ? (Oe = [e]) : Oe.push(e);
}
var Gh = Xe.ReactCurrentBatchConfig;
function Re(e, t) {
  if (e && e.defaultProps) {
    (t = $({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var co = wt(null),
  ho = null,
  ln = null,
  Dl = null;
function Ml() {
  Dl = ln = ho = null;
}
function bl(e) {
  var t = co.current;
  b(co), (e._currentValue = t);
}
function Gi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function fn(e, t) {
  (ho = e),
    (Dl = ln = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (pe = !0), (e.firstContext = null));
}
function Te(e) {
  var t = e._currentValue;
  if (Dl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ln === null)) {
      if (ho === null) throw Error(E(308));
      (ln = e), (ho.dependencies = { lanes: 0, firstContext: e });
    } else ln = ln.next = e;
  return t;
}
var At = null;
function Bl(e) {
  At === null ? (At = [e]) : At.push(e);
}
function Hu(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Bl(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Ye(e, r)
  );
}
function Ye(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var tt = !1;
function Wl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Uu(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ve(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Ye(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Bl(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Ye(e, n)
  );
}
function $r(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Il(e, n);
  }
}
function Gs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function fo(e, t, n, r) {
  var o = e.updateQueue;
  tt = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var u = a,
      d = u.next;
    (u.next = null), l === null ? (i = d) : (l.next = d), (l = u);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (a = m.lastBaseUpdate),
      a !== l &&
        (a === null ? (m.firstBaseUpdate = d) : (a.next = d),
        (m.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var v = o.baseState;
    (l = 0), (m = d = u = null), (a = i);
    do {
      var y = a.lane,
        w = a.eventTime;
      if ((r & y) === y) {
        m !== null &&
          (m = m.next =
            {
              eventTime: w,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var k = e,
            x = a;
          switch (((y = t), (w = n), x.tag)) {
            case 1:
              if (((k = x.payload), typeof k == "function")) {
                v = k.call(w, v, y);
                break e;
              }
              v = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = x.payload),
                (y = typeof k == "function" ? k.call(w, v, y) : k),
                y == null)
              )
                break e;
              v = $({}, v, y);
              break e;
            case 2:
              tt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (y = o.effects),
          y === null ? (o.effects = [a]) : y.push(a));
      } else
        (w = {
          eventTime: w,
          lane: y,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          m === null ? ((d = m = w), (u = v)) : (m = m.next = w),
          (l |= y);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (y = a),
          (a = y.next),
          (y.next = null),
          (o.lastBaseUpdate = y),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (u = v),
      (o.baseState = u),
      (o.firstBaseUpdate = d),
      (o.lastBaseUpdate = m),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Ut |= l), (e.lanes = l), (e.memoizedState = v);
  }
}
function Ks(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(E(191, o));
        o.call(r);
      }
    }
}
var $u = new Ha.Component().refs;
function Ki(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : $({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _o = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Qt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      o = ft(e),
      i = Ve(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = dt(e, i, o)),
      t !== null && (Ae(t, e, o, r), $r(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      o = ft(e),
      i = Ve(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = dt(e, i, o)),
      t !== null && (Ae(t, e, o, r), $r(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = ft(e),
      o = Ve(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = dt(e, o, r)),
      t !== null && (Ae(t, e, r, n), $r(t, e, r));
  },
};
function Ys(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !nr(n, r) || !nr(o, i)
      : !0
  );
}
function qu(e, t, n) {
  var r = !1,
    o = vt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Te(i))
      : ((o = ge(t) ? Bt : se.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? gn(e, o) : vt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = _o),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Js(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && _o.enqueueReplaceState(t, t.state, null);
}
function Yi(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = $u), Wl(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Te(i))
    : ((i = ge(t) ? Bt : se.current), (o.context = gn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ki(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && _o.enqueueReplaceState(o, o.state, null),
      fo(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ln(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var a = o.refs;
            a === $u && (a = o.refs = {}),
              l === null ? delete a[i] : (a[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Or(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Xs(e) {
  var t = e._init;
  return t(e._payload);
}
function Qu(e) {
  function t(p, c) {
    if (e) {
      var f = p.deletions;
      f === null ? ((p.deletions = [c]), (p.flags |= 16)) : f.push(c);
    }
  }
  function n(p, c) {
    if (!e) return null;
    for (; c !== null; ) t(p, c), (c = c.sibling);
    return null;
  }
  function r(p, c) {
    for (p = new Map(); c !== null; )
      c.key !== null ? p.set(c.key, c) : p.set(c.index, c), (c = c.sibling);
    return p;
  }
  function o(p, c) {
    return (p = pt(p, c)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, c, f) {
    return (
      (p.index = f),
      e
        ? ((f = p.alternate),
          f !== null
            ? ((f = f.index), f < c ? ((p.flags |= 2), c) : f)
            : ((p.flags |= 2), c))
        : ((p.flags |= 1048576), c)
    );
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, c, f, S) {
    return c === null || c.tag !== 6
      ? ((c = mi(f, p.mode, S)), (c.return = p), c)
      : ((c = o(c, f)), (c.return = p), c);
  }
  function u(p, c, f, S) {
    var I = f.type;
    return I === Jt
      ? m(p, c, f.props.children, S, f.key)
      : c !== null &&
        (c.elementType === I ||
          (typeof I == "object" &&
            I !== null &&
            I.$$typeof === et &&
            Xs(I) === c.type))
      ? ((S = o(c, f.props)), (S.ref = Ln(p, c, f)), (S.return = p), S)
      : ((S = Yr(f.type, f.key, f.props, null, p.mode, S)),
        (S.ref = Ln(p, c, f)),
        (S.return = p),
        S);
  }
  function d(p, c, f, S) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== f.containerInfo ||
      c.stateNode.implementation !== f.implementation
      ? ((c = gi(f, p.mode, S)), (c.return = p), c)
      : ((c = o(c, f.children || [])), (c.return = p), c);
  }
  function m(p, c, f, S, I) {
    return c === null || c.tag !== 7
      ? ((c = bt(f, p.mode, S, I)), (c.return = p), c)
      : ((c = o(c, f)), (c.return = p), c);
  }
  function v(p, c, f) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = mi("" + c, p.mode, f)), (c.return = p), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case jr:
          return (
            (f = Yr(c.type, c.key, c.props, null, p.mode, f)),
            (f.ref = Ln(p, null, c)),
            (f.return = p),
            f
          );
        case Yt:
          return (c = gi(c, p.mode, f)), (c.return = p), c;
        case et:
          var S = c._init;
          return v(p, S(c._payload), f);
      }
      if (Dn(c) || Tn(c))
        return (c = bt(c, p.mode, f, null)), (c.return = p), c;
      Or(p, c);
    }
    return null;
  }
  function y(p, c, f, S) {
    var I = c !== null ? c.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return I !== null ? null : a(p, c, "" + f, S);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case jr:
          return f.key === I ? u(p, c, f, S) : null;
        case Yt:
          return f.key === I ? d(p, c, f, S) : null;
        case et:
          return (I = f._init), y(p, c, I(f._payload), S);
      }
      if (Dn(f) || Tn(f)) return I !== null ? null : m(p, c, f, S, null);
      Or(p, f);
    }
    return null;
  }
  function w(p, c, f, S, I) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (p = p.get(f) || null), a(c, p, "" + S, I);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case jr:
          return (p = p.get(S.key === null ? f : S.key) || null), u(c, p, S, I);
        case Yt:
          return (p = p.get(S.key === null ? f : S.key) || null), d(c, p, S, I);
        case et:
          var N = S._init;
          return w(p, c, f, N(S._payload), I);
      }
      if (Dn(S) || Tn(S)) return (p = p.get(f) || null), m(c, p, S, I, null);
      Or(c, S);
    }
    return null;
  }
  function k(p, c, f, S) {
    for (
      var I = null, N = null, h = c, C = (c = 0), P = null;
      h !== null && C < f.length;
      C++
    ) {
      h.index > C ? ((P = h), (h = null)) : (P = h.sibling);
      var O = y(p, h, f[C], S);
      if (O === null) {
        h === null && (h = P);
        break;
      }
      e && h && O.alternate === null && t(p, h),
        (c = i(O, c, C)),
        N === null ? (I = O) : (N.sibling = O),
        (N = O),
        (h = P);
    }
    if (C === f.length) return n(p, h), B && Lt(p, C), I;
    if (h === null) {
      for (; C < f.length; C++)
        (h = v(p, f[C], S)),
          h !== null &&
            ((c = i(h, c, C)), N === null ? (I = h) : (N.sibling = h), (N = h));
      return B && Lt(p, C), I;
    }
    for (h = r(p, h); C < f.length; C++)
      (P = w(h, p, C, f[C], S)),
        P !== null &&
          (e && P.alternate !== null && h.delete(P.key === null ? C : P.key),
          (c = i(P, c, C)),
          N === null ? (I = P) : (N.sibling = P),
          (N = P));
    return (
      e &&
        h.forEach(function (Pe) {
          return t(p, Pe);
        }),
      B && Lt(p, C),
      I
    );
  }
  function x(p, c, f, S) {
    var I = Tn(f);
    if (typeof I != "function") throw Error(E(150));
    if (((f = I.call(f)), f == null)) throw Error(E(151));
    for (
      var N = (I = null), h = c, C = (c = 0), P = null, O = f.next();
      h !== null && !O.done;
      C++, O = f.next()
    ) {
      h.index > C ? ((P = h), (h = null)) : (P = h.sibling);
      var Pe = y(p, h, O.value, S);
      if (Pe === null) {
        h === null && (h = P);
        break;
      }
      e && h && Pe.alternate === null && t(p, h),
        (c = i(Pe, c, C)),
        N === null ? (I = Pe) : (N.sibling = Pe),
        (N = Pe),
        (h = P);
    }
    if (O.done) return n(p, h), B && Lt(p, C), I;
    if (h === null) {
      for (; !O.done; C++, O = f.next())
        (O = v(p, O.value, S)),
          O !== null &&
            ((c = i(O, c, C)), N === null ? (I = O) : (N.sibling = O), (N = O));
      return B && Lt(p, C), I;
    }
    for (h = r(p, h); !O.done; C++, O = f.next())
      (O = w(h, p, C, O.value, S)),
        O !== null &&
          (e && O.alternate !== null && h.delete(O.key === null ? C : O.key),
          (c = i(O, c, C)),
          N === null ? (I = O) : (N.sibling = O),
          (N = O));
    return (
      e &&
        h.forEach(function (In) {
          return t(p, In);
        }),
      B && Lt(p, C),
      I
    );
  }
  function j(p, c, f, S) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === Jt &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case jr:
          e: {
            for (var I = f.key, N = c; N !== null; ) {
              if (N.key === I) {
                if (((I = f.type), I === Jt)) {
                  if (N.tag === 7) {
                    n(p, N.sibling),
                      (c = o(N, f.props.children)),
                      (c.return = p),
                      (p = c);
                    break e;
                  }
                } else if (
                  N.elementType === I ||
                  (typeof I == "object" &&
                    I !== null &&
                    I.$$typeof === et &&
                    Xs(I) === N.type)
                ) {
                  n(p, N.sibling),
                    (c = o(N, f.props)),
                    (c.ref = Ln(p, N, f)),
                    (c.return = p),
                    (p = c);
                  break e;
                }
                n(p, N);
                break;
              } else t(p, N);
              N = N.sibling;
            }
            f.type === Jt
              ? ((c = bt(f.props.children, p.mode, S, f.key)),
                (c.return = p),
                (p = c))
              : ((S = Yr(f.type, f.key, f.props, null, p.mode, S)),
                (S.ref = Ln(p, c, f)),
                (S.return = p),
                (p = S));
          }
          return l(p);
        case Yt:
          e: {
            for (N = f.key; c !== null; ) {
              if (c.key === N)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === f.containerInfo &&
                  c.stateNode.implementation === f.implementation
                ) {
                  n(p, c.sibling),
                    (c = o(c, f.children || [])),
                    (c.return = p),
                    (p = c);
                  break e;
                } else {
                  n(p, c);
                  break;
                }
              else t(p, c);
              c = c.sibling;
            }
            (c = gi(f, p.mode, S)), (c.return = p), (p = c);
          }
          return l(p);
        case et:
          return (N = f._init), j(p, c, N(f._payload), S);
      }
      if (Dn(f)) return k(p, c, f, S);
      if (Tn(f)) return x(p, c, f, S);
      Or(p, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        c !== null && c.tag === 6
          ? (n(p, c.sibling), (c = o(c, f)), (c.return = p), (p = c))
          : (n(p, c), (c = mi(f, p.mode, S)), (c.return = p), (p = c)),
        l(p))
      : n(p, c);
  }
  return j;
}
var yn = Qu(!0),
  Vu = Qu(!1),
  yr = {},
  He = wt(yr),
  lr = wt(yr),
  sr = wt(yr);
function Dt(e) {
  if (e === yr) throw Error(E(174));
  return e;
}
function Hl(e, t) {
  switch ((D(sr, t), D(lr, e), D(He, yr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ti(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ti(t, e));
  }
  b(He), D(He, t);
}
function wn() {
  b(He), b(lr), b(sr);
}
function Gu(e) {
  Dt(sr.current);
  var t = Dt(He.current),
    n = Ti(t, e.type);
  t !== n && (D(lr, e), D(He, n));
}
function Ul(e) {
  lr.current === e && (b(He), b(lr));
}
var H = wt(0);
function po(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ui = [];
function $l() {
  for (var e = 0; e < ui.length; e++)
    ui[e]._workInProgressVersionPrimary = null;
  ui.length = 0;
}
var qr = Xe.ReactCurrentDispatcher,
  ci = Xe.ReactCurrentBatchConfig,
  Ht = 0,
  U = null,
  Y = null,
  Z = null,
  mo = !1,
  qn = !1,
  ar = 0,
  Kh = 0;
function oe() {
  throw Error(E(321));
}
function ql(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!De(e[n], t[n])) return !1;
  return !0;
}
function Ql(e, t, n, r, o, i) {
  if (
    ((Ht = i),
    (U = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (qr.current = e === null || e.memoizedState === null ? Zh : ef),
    (e = n(r, o)),
    qn)
  ) {
    i = 0;
    do {
      if (((qn = !1), (ar = 0), 25 <= i)) throw Error(E(301));
      (i += 1),
        (Z = Y = null),
        (t.updateQueue = null),
        (qr.current = tf),
        (e = n(r, o));
    } while (qn);
  }
  if (
    ((qr.current = go),
    (t = Y !== null && Y.next !== null),
    (Ht = 0),
    (Z = Y = U = null),
    (mo = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function Vl() {
  var e = ar !== 0;
  return (ar = 0), e;
}
function be() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? (U.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function ze() {
  if (Y === null) {
    var e = U.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = Z === null ? U.memoizedState : Z.next;
  if (t !== null) (Z = t), (Y = e);
  else {
    if (e === null) throw Error(E(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      Z === null ? (U.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function ur(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function di(e) {
  var t = ze(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = Y,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (l = null),
      u = null,
      d = i;
    do {
      var m = d.lane;
      if ((Ht & m) === m)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action));
      else {
        var v = {
          lane: m,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        u === null ? ((a = u = v), (l = r)) : (u = u.next = v),
          (U.lanes |= m),
          (Ut |= m);
      }
      d = d.next;
    } while (d !== null && d !== i);
    u === null ? (l = r) : (u.next = a),
      De(r, t.memoizedState) || (pe = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (U.lanes |= i), (Ut |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function hi(e) {
  var t = ze(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    De(i, t.memoizedState) || (pe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Ku() {}
function Yu(e, t) {
  var n = U,
    r = ze(),
    o = t(),
    i = !De(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (pe = !0)),
    (r = r.queue),
    Gl(Zu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      cr(9, Xu.bind(null, n, r, o, t), void 0, null),
      ee === null)
    )
      throw Error(E(349));
    Ht & 30 || Ju(n, t, o);
  }
  return o;
}
function Ju(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = U.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (U.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Xu(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ec(t) && tc(e);
}
function Zu(e, t, n) {
  return n(function () {
    ec(t) && tc(e);
  });
}
function ec(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !De(e, n);
  } catch {
    return !0;
  }
}
function tc(e) {
  var t = Ye(e, 1);
  t !== null && Ae(t, e, 1, -1);
}
function Zs(e) {
  var t = be();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ur,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Xh.bind(null, U, e)),
    [t.memoizedState, e]
  );
}
function cr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = U.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (U.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function nc() {
  return ze().memoizedState;
}
function Qr(e, t, n, r) {
  var o = be();
  (U.flags |= e),
    (o.memoizedState = cr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ro(e, t, n, r) {
  var o = ze();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Y !== null) {
    var l = Y.memoizedState;
    if (((i = l.destroy), r !== null && ql(r, l.deps))) {
      o.memoizedState = cr(t, n, i, r);
      return;
    }
  }
  (U.flags |= e), (o.memoizedState = cr(1 | t, n, i, r));
}
function ea(e, t) {
  return Qr(8390656, 8, e, t);
}
function Gl(e, t) {
  return Ro(2048, 8, e, t);
}
function rc(e, t) {
  return Ro(4, 2, e, t);
}
function oc(e, t) {
  return Ro(4, 4, e, t);
}
function ic(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function lc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ro(4, 4, ic.bind(null, t, e), n)
  );
}
function Kl() {}
function sc(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ql(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ac(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ql(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function uc(e, t, n) {
  return Ht & 21
    ? (De(n, t) || ((n = hu()), (U.lanes |= n), (Ut |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (pe = !0)), (e.memoizedState = n));
}
function Yh(e, t) {
  var n = A;
  (A = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ci.transition;
  ci.transition = {};
  try {
    e(!1), t();
  } finally {
    (A = n), (ci.transition = r);
  }
}
function cc() {
  return ze().memoizedState;
}
function Jh(e, t, n) {
  var r = ft(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    dc(e))
  )
    hc(t, n);
  else if (((n = Hu(e, t, n, r)), n !== null)) {
    var o = ue();
    Ae(n, e, r, o), fc(n, t, r);
  }
}
function Xh(e, t, n) {
  var r = ft(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dc(e)) hc(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), De(a, l))) {
          var u = t.interleaved;
          u === null
            ? ((o.next = o), Bl(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Hu(e, t, o, r)),
      n !== null && ((o = ue()), Ae(n, e, r, o), fc(n, t, r));
  }
}
function dc(e) {
  var t = e.alternate;
  return e === U || (t !== null && t === U);
}
function hc(e, t) {
  qn = mo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function fc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Il(e, n);
  }
}
var go = {
    readContext: Te,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1,
  },
  Zh = {
    readContext: Te,
    useCallback: function (e, t) {
      return (be().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Te,
    useEffect: ea,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Qr(4194308, 4, ic.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Qr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Qr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = be();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = be();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Jh.bind(null, U, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = be();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Zs,
    useDebugValue: Kl,
    useDeferredValue: function (e) {
      return (be().memoizedState = e);
    },
    useTransition: function () {
      var e = Zs(!1),
        t = e[0];
      return (e = Yh.bind(null, e[1])), (be().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = U,
        o = be();
      if (B) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), ee === null)) throw Error(E(349));
        Ht & 30 || Ju(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        ea(Zu.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        cr(9, Xu.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = be(),
        t = ee.identifierPrefix;
      if (B) {
        var n = Qe,
          r = qe;
        (n = (r & ~(1 << (32 - Fe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ar++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Kh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ef = {
    readContext: Te,
    useCallback: sc,
    useContext: Te,
    useEffect: Gl,
    useImperativeHandle: lc,
    useInsertionEffect: rc,
    useLayoutEffect: oc,
    useMemo: ac,
    useReducer: di,
    useRef: nc,
    useState: function () {
      return di(ur);
    },
    useDebugValue: Kl,
    useDeferredValue: function (e) {
      var t = ze();
      return uc(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = di(ur)[0],
        t = ze().memoizedState;
      return [e, t];
    },
    useMutableSource: Ku,
    useSyncExternalStore: Yu,
    useId: cc,
    unstable_isNewReconciler: !1,
  },
  tf = {
    readContext: Te,
    useCallback: sc,
    useContext: Te,
    useEffect: Gl,
    useImperativeHandle: lc,
    useInsertionEffect: rc,
    useLayoutEffect: oc,
    useMemo: ac,
    useReducer: hi,
    useRef: nc,
    useState: function () {
      return hi(ur);
    },
    useDebugValue: Kl,
    useDeferredValue: function (e) {
      var t = ze();
      return Y === null ? (t.memoizedState = e) : uc(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = hi(ur)[0],
        t = ze().memoizedState;
      return [e, t];
    },
    useMutableSource: Ku,
    useSyncExternalStore: Yu,
    useId: cc,
    unstable_isNewReconciler: !1,
  };
function kn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += zd(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function fi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ji(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var nf = typeof WeakMap == "function" ? WeakMap : Map;
function pc(e, t, n) {
  (n = Ve(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      yo || ((yo = !0), (sl = r)), Ji(e, t);
    }),
    n
  );
}
function mc(e, t, n) {
  (n = Ve(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ji(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ji(e, t),
          typeof r != "function" &&
            (ht === null ? (ht = new Set([this])) : ht.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function ta(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new nf();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = vf.bind(null, e, t, n)), t.then(e, e));
}
function na(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ra(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ve(-1, 1)), (t.tag = 2), dt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var rf = Xe.ReactCurrentOwner,
  pe = !1;
function ae(e, t, n, r) {
  t.child = e === null ? Vu(t, null, n, r) : yn(t, e.child, n, r);
}
function oa(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    fn(t, o),
    (r = Ql(e, t, n, r, i, o)),
    (n = Vl()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Je(e, t, o))
      : (B && n && Ol(t), (t.flags |= 1), ae(e, t, r, o), t.child)
  );
}
function ia(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !rs(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), gc(e, t, i, r, o))
      : ((e = Yr(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : nr), n(l, r) && e.ref === t.ref)
    )
      return Je(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = pt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function gc(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (nr(i, r) && e.ref === t.ref)
      if (((pe = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (pe = !0);
      else return (t.lanes = e.lanes), Je(e, t, o);
  }
  return Xi(e, t, n, r, o);
}
function vc(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(an, ye),
        (ye |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(an, ye),
          (ye |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        D(an, ye),
        (ye |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(an, ye),
      (ye |= r);
  return ae(e, t, o, n), t.child;
}
function yc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Xi(e, t, n, r, o) {
  var i = ge(n) ? Bt : se.current;
  return (
    (i = gn(t, i)),
    fn(t, o),
    (n = Ql(e, t, n, r, i, o)),
    (r = Vl()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Je(e, t, o))
      : (B && r && Ol(t), (t.flags |= 1), ae(e, t, n, o), t.child)
  );
}
function la(e, t, n, r, o) {
  if (ge(n)) {
    var i = !0;
    so(t);
  } else i = !1;
  if ((fn(t, o), t.stateNode === null))
    Vr(e, t), qu(t, n, r), Yi(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var u = l.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = Te(d))
      : ((d = ge(n) ? Bt : se.current), (d = gn(t, d)));
    var m = n.getDerivedStateFromProps,
      v =
        typeof m == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || u !== d) && Js(t, l, r, d)),
      (tt = !1);
    var y = t.memoizedState;
    (l.state = y),
      fo(t, r, l, o),
      (u = t.memoizedState),
      a !== r || y !== u || me.current || tt
        ? (typeof m == "function" && (Ki(t, n, m, r), (u = t.memoizedState)),
          (a = tt || Ys(t, n, a, r, y, u, d))
            ? (v ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (l.props = r),
          (l.state = u),
          (l.context = d),
          (r = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Uu(e, t),
      (a = t.memoizedProps),
      (d = t.type === t.elementType ? a : Re(t.type, a)),
      (l.props = d),
      (v = t.pendingProps),
      (y = l.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Te(u))
        : ((u = ge(n) ? Bt : se.current), (u = gn(t, u)));
    var w = n.getDerivedStateFromProps;
    (m =
      typeof w == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== v || y !== u) && Js(t, l, r, u)),
      (tt = !1),
      (y = t.memoizedState),
      (l.state = y),
      fo(t, r, l, o);
    var k = t.memoizedState;
    a !== v || y !== k || me.current || tt
      ? (typeof w == "function" && (Ki(t, n, w, r), (k = t.memoizedState)),
        (d = tt || Ys(t, n, d, r, y, k, u) || !1)
          ? (m ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, k, u),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, k, u)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (l.props = r),
        (l.state = k),
        (l.context = u),
        (r = d))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Zi(e, t, n, r, i, o);
}
function Zi(e, t, n, r, o, i) {
  yc(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && qs(t, n, !1), Je(e, t, i);
  (r = t.stateNode), (rf.current = t);
  var a =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = yn(t, e.child, null, i)), (t.child = yn(t, null, a, i)))
      : ae(e, t, a, i),
    (t.memoizedState = r.state),
    o && qs(t, n, !0),
    t.child
  );
}
function wc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? $s(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && $s(e, t.context, !1),
    Hl(e, t.containerInfo);
}
function sa(e, t, n, r, o) {
  return vn(), Al(o), (t.flags |= 256), ae(e, t, n, r), t.child;
}
var el = { dehydrated: null, treeContext: null, retryLane: 0 };
function tl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function kc(e, t, n) {
  var r = t.pendingProps,
    o = H.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    D(H, o & 1),
    e === null)
  )
    return (
      Vi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Fo(l, r, 0, null)),
              (e = bt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = tl(n)),
              (t.memoizedState = el),
              e)
            : Yl(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return of(e, t, l, r, a, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (a = o.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = pt(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = pt(a, i)) : ((i = bt(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? tl(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = el),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = pt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Yl(e, t) {
  return (
    (t = Fo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Fr(e, t, n, r) {
  return (
    r !== null && Al(r),
    yn(t, e.child, null, n),
    (e = Yl(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function of(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = fi(Error(E(422)))), Fr(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Fo({ mode: "visible", children: r.children }, o, 0, null)),
        (i = bt(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && yn(t, e.child, null, l),
        (t.child.memoizedState = tl(l)),
        (t.memoizedState = el),
        i);
  if (!(t.mode & 1)) return Fr(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(E(419))), (r = fi(i, r, void 0)), Fr(e, t, l, r);
  }
  if (((a = (l & e.childLanes) !== 0), pe || a)) {
    if (((r = ee), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Ye(e, o), Ae(r, e, o, -1));
    }
    return ns(), (r = fi(Error(E(421)))), Fr(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = yf.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (we = ct(o.nextSibling)),
      (ke = t),
      (B = !0),
      (Oe = null),
      e !== null &&
        ((Ce[Ee++] = qe),
        (Ce[Ee++] = Qe),
        (Ce[Ee++] = Wt),
        (qe = e.id),
        (Qe = e.overflow),
        (Wt = t)),
      (t = Yl(t, r.children)),
      (t.flags |= 4096),
      t);
}
function aa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Gi(e.return, t, n);
}
function pi(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function xc(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((ae(e, t, r.children, n), (r = H.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && aa(e, n, t);
        else if (e.tag === 19) aa(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D(H, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && po(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          pi(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && po(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        pi(t, !0, n, null, i);
        break;
      case "together":
        pi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Vr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Je(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ut |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = pt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = pt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function lf(e, t, n) {
  switch (t.tag) {
    case 3:
      wc(t), vn();
      break;
    case 5:
      Gu(t);
      break;
    case 1:
      ge(t.type) && so(t);
      break;
    case 4:
      Hl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      D(co, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(H, H.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? kc(e, t, n)
          : (D(H, H.current & 1),
            (e = Je(e, t, n)),
            e !== null ? e.sibling : null);
      D(H, H.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return xc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        D(H, H.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), vc(e, t, n);
  }
  return Je(e, t, n);
}
var Sc, nl, jc, Cc;
Sc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
nl = function () {};
jc = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Dt(He.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Ci(e, o)), (r = Ci(e, r)), (i = []);
        break;
      case "select":
        (o = $({}, o, { value: void 0 })),
          (r = $({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Ni(e, o)), (r = Ni(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = io);
    }
    zi(n, r);
    var l;
    n = null;
    for (d in o)
      if (!r.hasOwnProperty(d) && o.hasOwnProperty(d) && o[d] != null)
        if (d === "style") {
          var a = o[d];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (Kn.hasOwnProperty(d)
              ? i || (i = [])
              : (i = i || []).push(d, null));
    for (d in r) {
      var u = r[d];
      if (
        ((a = o != null ? o[d] : void 0),
        r.hasOwnProperty(d) && u !== a && (u != null || a != null))
      )
        if (d === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (u && u.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in u)
              u.hasOwnProperty(l) &&
                a[l] !== u[l] &&
                (n || (n = {}), (n[l] = u[l]));
          } else n || (i || (i = []), i.push(d, n)), (n = u);
        else
          d === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (i = i || []).push(d, u))
            : d === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(d, "" + u)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (Kn.hasOwnProperty(d)
                ? (u != null && d === "onScroll" && M("scroll", e),
                  i || a === u || (i = []))
                : (i = i || []).push(d, u));
    }
    n && (i = i || []).push("style", n);
    var d = i;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Cc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function On(e, t) {
  if (!B)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function sf(e, t, n) {
  var r = t.pendingProps;
  switch ((Fl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ie(t), null;
    case 1:
      return ge(t.type) && lo(), ie(t), null;
    case 3:
      return (
        (r = t.stateNode),
        wn(),
        b(me),
        b(se),
        $l(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Lr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Oe !== null && (cl(Oe), (Oe = null)))),
        nl(e, t),
        ie(t),
        null
      );
    case 5:
      Ul(t);
      var o = Dt(sr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        jc(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return ie(t), null;
        }
        if (((e = Dt(He.current)), Lr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Be] = t), (r[ir] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              M("cancel", r), M("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              M("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < bn.length; o++) M(bn[o], r);
              break;
            case "source":
              M("error", r);
              break;
            case "img":
            case "image":
            case "link":
              M("error", r), M("load", r);
              break;
            case "details":
              M("toggle", r);
              break;
            case "input":
              vs(r, i), M("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                M("invalid", r);
              break;
            case "textarea":
              ws(r, i), M("invalid", r);
          }
          zi(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var a = i[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Rr(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Rr(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Kn.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  M("scroll", r);
            }
          switch (n) {
            case "input":
              Cr(r), ys(r, i, !0);
              break;
            case "textarea":
              Cr(r), ks(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = io);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ja(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Be] = t),
            (e[ir] = r),
            Sc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Pi(n, r)), n)) {
              case "dialog":
                M("cancel", e), M("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                M("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < bn.length; o++) M(bn[o], e);
                o = r;
                break;
              case "source":
                M("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                M("error", e), M("load", e), (o = r);
                break;
              case "details":
                M("toggle", e), (o = r);
                break;
              case "input":
                vs(e, r), (o = Ci(e, r)), M("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = $({}, r, { value: void 0 })),
                  M("invalid", e);
                break;
              case "textarea":
                ws(e, r), (o = Ni(e, r)), M("invalid", e);
                break;
              default:
                o = r;
            }
            zi(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var u = a[i];
                i === "style"
                  ? eu(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Xa(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Yn(e, u)
                    : typeof u == "number" && Yn(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Kn.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && M("scroll", e)
                      : u != null && kl(e, i, u, l));
              }
            switch (n) {
              case "input":
                Cr(e), ys(e, r, !1);
                break;
              case "textarea":
                Cr(e), ks(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + gt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? un(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      un(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = io);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ie(t), null;
    case 6:
      if (e && t.stateNode != null) Cc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = Dt(sr.current)), Dt(He.current), Lr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Be] = t),
            (i = r.nodeValue !== n) && ((e = ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                Rr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Rr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Be] = t),
            (t.stateNode = r);
      }
      return ie(t), null;
    case 13:
      if (
        (b(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (B && we !== null && t.mode & 1 && !(t.flags & 128))
          Wu(), vn(), (t.flags |= 98560), (i = !1);
        else if (((i = Lr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(E(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(E(317));
            i[Be] = t;
          } else
            vn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ie(t), (i = !1);
        } else Oe !== null && (cl(Oe), (Oe = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? J === 0 && (J = 3) : ns())),
          t.updateQueue !== null && (t.flags |= 4),
          ie(t),
          null);
    case 4:
      return (
        wn(), nl(e, t), e === null && rr(t.stateNode.containerInfo), ie(t), null
      );
    case 10:
      return bl(t.type._context), ie(t), null;
    case 17:
      return ge(t.type) && lo(), ie(t), null;
    case 19:
      if ((b(H), (i = t.memoizedState), i === null)) return ie(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) On(i, !1);
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = po(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    On(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return D(H, (H.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            V() > xn &&
            ((t.flags |= 128), (r = !0), On(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = po(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              On(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !B)
            )
              return ie(t), null;
          } else
            2 * V() - i.renderingStartTime > xn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), On(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = V()),
          (t.sibling = null),
          (n = H.current),
          D(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (ie(t), null);
    case 22:
    case 23:
      return (
        ts(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ye & 1073741824 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ie(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function af(e, t) {
  switch ((Fl(t), t.tag)) {
    case 1:
      return (
        ge(t.type) && lo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        wn(),
        b(me),
        b(se),
        $l(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ul(t), null;
    case 13:
      if ((b(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        vn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return b(H), null;
    case 4:
      return wn(), null;
    case 10:
      return bl(t.type._context), null;
    case 22:
    case 23:
      return ts(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ar = !1,
  le = !1,
  uf = typeof WeakSet == "function" ? WeakSet : Set,
  T = null;
function sn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        q(e, t, r);
      }
    else n.current = null;
}
function rl(e, t, n) {
  try {
    n();
  } catch (r) {
    q(e, t, r);
  }
}
var ua = !1;
function cf(e, t) {
  if (((Bi = no), (e = Tu()), Ll(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            u = -1,
            d = 0,
            m = 0,
            v = e,
            y = null;
          t: for (;;) {
            for (
              var w;
              v !== n || (o !== 0 && v.nodeType !== 3) || (a = l + o),
                v !== i || (r !== 0 && v.nodeType !== 3) || (u = l + r),
                v.nodeType === 3 && (l += v.nodeValue.length),
                (w = v.firstChild) !== null;

            )
              (y = v), (v = w);
            for (;;) {
              if (v === e) break t;
              if (
                (y === n && ++d === o && (a = l),
                y === i && ++m === r && (u = l),
                (w = v.nextSibling) !== null)
              )
                break;
              (v = y), (y = v.parentNode);
            }
            v = w;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Wi = { focusedElem: e, selectionRange: n }, no = !1, T = t; T !== null; )
    if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (T = e);
    else
      for (; T !== null; ) {
        t = T;
        try {
          var k = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var x = k.memoizedProps,
                    j = k.memoizedState,
                    p = t.stateNode,
                    c = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Re(t.type, x),
                      j
                    );
                  p.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (S) {
          q(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (T = e);
          break;
        }
        T = t.return;
      }
  return (k = ua), (ua = !1), k;
}
function Qn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && rl(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Lo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ol(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ec(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ec(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Be], delete t[ir], delete t[$i], delete t[qh], delete t[Qh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ic(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ca(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ic(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function il(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = io));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (il(e, t, n), e = e.sibling; e !== null; ) il(e, t, n), (e = e.sibling);
}
function ll(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ll(e, t, n), e = e.sibling; e !== null; ) ll(e, t, n), (e = e.sibling);
}
var te = null,
  Le = !1;
function Ze(e, t, n) {
  for (n = n.child; n !== null; ) Nc(e, t, n), (n = n.sibling);
}
function Nc(e, t, n) {
  if (We && typeof We.onCommitFiberUnmount == "function")
    try {
      We.onCommitFiberUnmount(Eo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      le || sn(n, t);
    case 6:
      var r = te,
        o = Le;
      (te = null),
        Ze(e, t, n),
        (te = r),
        (Le = o),
        te !== null &&
          (Le
            ? ((e = te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null &&
        (Le
          ? ((e = te),
            (n = n.stateNode),
            e.nodeType === 8
              ? si(e.parentNode, n)
              : e.nodeType === 1 && si(e, n),
            er(e))
          : si(te, n.stateNode));
      break;
    case 4:
      (r = te),
        (o = Le),
        (te = n.stateNode.containerInfo),
        (Le = !0),
        Ze(e, t, n),
        (te = r),
        (Le = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && rl(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      Ze(e, t, n);
      break;
    case 1:
      if (
        !le &&
        (sn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          q(n, t, a);
        }
      Ze(e, t, n);
      break;
    case 21:
      Ze(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((le = (r = le) || n.memoizedState !== null), Ze(e, t, n), (le = r))
        : Ze(e, t, n);
      break;
    default:
      Ze(e, t, n);
  }
}
function da(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new uf()),
      t.forEach(function (r) {
        var o = wf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function _e(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (te = a.stateNode), (Le = !1);
              break e;
            case 3:
              (te = a.stateNode.containerInfo), (Le = !0);
              break e;
            case 4:
              (te = a.stateNode.containerInfo), (Le = !0);
              break e;
          }
          a = a.return;
        }
        if (te === null) throw Error(E(160));
        Nc(i, l, o), (te = null), (Le = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (d) {
        q(o, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Tc(t, e), (t = t.sibling);
}
function Tc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((_e(t, e), Me(e), r & 4)) {
        try {
          Qn(3, e, e.return), Lo(3, e);
        } catch (x) {
          q(e, e.return, x);
        }
        try {
          Qn(5, e, e.return);
        } catch (x) {
          q(e, e.return, x);
        }
      }
      break;
    case 1:
      _e(t, e), Me(e), r & 512 && n !== null && sn(n, n.return);
      break;
    case 5:
      if (
        (_e(t, e),
        Me(e),
        r & 512 && n !== null && sn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Yn(o, "");
        } catch (x) {
          q(e, e.return, x);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Ka(o, i),
              Pi(a, l);
            var d = Pi(a, i);
            for (l = 0; l < u.length; l += 2) {
              var m = u[l],
                v = u[l + 1];
              m === "style"
                ? eu(o, v)
                : m === "dangerouslySetInnerHTML"
                ? Xa(o, v)
                : m === "children"
                ? Yn(o, v)
                : kl(o, m, v, d);
            }
            switch (a) {
              case "input":
                Ei(o, i);
                break;
              case "textarea":
                Ya(o, i);
                break;
              case "select":
                var y = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? un(o, !!i.multiple, w, !1)
                  : y !== !!i.multiple &&
                    (i.defaultValue != null
                      ? un(o, !!i.multiple, i.defaultValue, !0)
                      : un(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ir] = i;
          } catch (x) {
            q(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((_e(t, e), Me(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (x) {
          q(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (_e(t, e), Me(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          er(t.containerInfo);
        } catch (x) {
          q(e, e.return, x);
        }
      break;
    case 4:
      _e(t, e), Me(e);
      break;
    case 13:
      _e(t, e),
        Me(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Zl = V())),
        r & 4 && da(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((le = (d = le) || m), _e(t, e), (le = d)) : _e(t, e),
        Me(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !m && e.mode & 1)
        )
          for (T = e, m = e.child; m !== null; ) {
            for (v = T = m; T !== null; ) {
              switch (((y = T), (w = y.child), y.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qn(4, y, y.return);
                  break;
                case 1:
                  sn(y, y.return);
                  var k = y.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    (r = y), (n = y.return);
                    try {
                      (t = r),
                        (k.props = t.memoizedProps),
                        (k.state = t.memoizedState),
                        k.componentWillUnmount();
                    } catch (x) {
                      q(r, n, x);
                    }
                  }
                  break;
                case 5:
                  sn(y, y.return);
                  break;
                case 22:
                  if (y.memoizedState !== null) {
                    fa(v);
                    continue;
                  }
              }
              w !== null ? ((w.return = y), (T = w)) : fa(v);
            }
            m = m.sibling;
          }
        e: for (m = null, v = e; ; ) {
          if (v.tag === 5) {
            if (m === null) {
              m = v;
              try {
                (o = v.stateNode),
                  d
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = v.stateNode),
                      (u = v.memoizedProps.style),
                      (l =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = Za("display", l)));
              } catch (x) {
                q(e, e.return, x);
              }
            }
          } else if (v.tag === 6) {
            if (m === null)
              try {
                v.stateNode.nodeValue = d ? "" : v.memoizedProps;
              } catch (x) {
                q(e, e.return, x);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            m === v && (m = null), (v = v.return);
          }
          m === v && (m = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      _e(t, e), Me(e), r & 4 && da(e);
      break;
    case 21:
      break;
    default:
      _e(t, e), Me(e);
  }
}
function Me(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ic(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Yn(o, ""), (r.flags &= -33));
          var i = ca(e);
          ll(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = ca(e);
          il(e, a, l);
          break;
        default:
          throw Error(E(161));
      }
    } catch (u) {
      q(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function df(e, t, n) {
  (T = e), zc(e);
}
function zc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var o = T,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Ar;
      if (!l) {
        var a = o.alternate,
          u = (a !== null && a.memoizedState !== null) || le;
        a = Ar;
        var d = le;
        if (((Ar = l), (le = u) && !d))
          for (T = o; T !== null; )
            (l = T),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? pa(o)
                : u !== null
                ? ((u.return = l), (T = u))
                : pa(o);
        for (; i !== null; ) (T = i), zc(i), (i = i.sibling);
        (T = o), (Ar = a), (le = d);
      }
      ha(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (T = i)) : ha(e);
  }
}
function ha(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || Lo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Re(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Ks(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ks(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var d = t.alternate;
                if (d !== null) {
                  var m = d.memoizedState;
                  if (m !== null) {
                    var v = m.dehydrated;
                    v !== null && er(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        le || (t.flags & 512 && ol(t));
      } catch (y) {
        q(t, t.return, y);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function fa(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function pa(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Lo(4, t);
          } catch (u) {
            q(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              q(t, o, u);
            }
          }
          var i = t.return;
          try {
            ol(t);
          } catch (u) {
            q(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            ol(t);
          } catch (u) {
            q(t, l, u);
          }
      }
    } catch (u) {
      q(t, t.return, u);
    }
    if (t === e) {
      T = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (T = a);
      break;
    }
    T = t.return;
  }
}
var hf = Math.ceil,
  vo = Xe.ReactCurrentDispatcher,
  Jl = Xe.ReactCurrentOwner,
  Ne = Xe.ReactCurrentBatchConfig,
  F = 0,
  ee = null,
  G = null,
  ne = 0,
  ye = 0,
  an = wt(0),
  J = 0,
  dr = null,
  Ut = 0,
  Oo = 0,
  Xl = 0,
  Vn = null,
  fe = null,
  Zl = 0,
  xn = 1 / 0,
  Ue = null,
  yo = !1,
  sl = null,
  ht = null,
  Dr = !1,
  it = null,
  wo = 0,
  Gn = 0,
  al = null,
  Gr = -1,
  Kr = 0;
function ue() {
  return F & 6 ? V() : Gr !== -1 ? Gr : (Gr = V());
}
function ft(e) {
  return e.mode & 1
    ? F & 2 && ne !== 0
      ? ne & -ne
      : Gh.transition !== null
      ? (Kr === 0 && (Kr = hu()), Kr)
      : ((e = A),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : wu(e.type))),
        e)
    : 1;
}
function Ae(e, t, n, r) {
  if (50 < Gn) throw ((Gn = 0), (al = null), Error(E(185)));
  mr(e, n, r),
    (!(F & 2) || e !== ee) &&
      (e === ee && (!(F & 2) && (Oo |= n), J === 4 && rt(e, ne)),
      ve(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((xn = V() + 500), Po && kt()));
}
function ve(e, t) {
  var n = e.callbackNode;
  Gd(e, t);
  var r = to(e, e === ee ? ne : 0);
  if (r === 0)
    n !== null && js(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && js(n), t === 1))
      e.tag === 0 ? Vh(ma.bind(null, e)) : Mu(ma.bind(null, e)),
        Uh(function () {
          !(F & 6) && kt();
        }),
        (n = null);
    else {
      switch (fu(r)) {
        case 1:
          n = El;
          break;
        case 4:
          n = cu;
          break;
        case 16:
          n = eo;
          break;
        case 536870912:
          n = du;
          break;
        default:
          n = eo;
      }
      n = Dc(n, Pc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Pc(e, t) {
  if (((Gr = -1), (Kr = 0), F & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (pn() && e.callbackNode !== n) return null;
  var r = to(e, e === ee ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ko(e, r);
  else {
    t = r;
    var o = F;
    F |= 2;
    var i = Rc();
    (ee !== e || ne !== t) && ((Ue = null), (xn = V() + 500), Mt(e, t));
    do
      try {
        mf();
        break;
      } catch (a) {
        _c(e, a);
      }
    while (!0);
    Ml(),
      (vo.current = i),
      (F = o),
      G !== null ? (t = 0) : ((ee = null), (ne = 0), (t = J));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Fi(e)), o !== 0 && ((r = o), (t = ul(e, o)))), t === 1)
    )
      throw ((n = dr), Mt(e, 0), rt(e, r), ve(e, V()), n);
    if (t === 6) rt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !ff(o) &&
          ((t = ko(e, r)),
          t === 2 && ((i = Fi(e)), i !== 0 && ((r = i), (t = ul(e, i)))),
          t === 1))
      )
        throw ((n = dr), Mt(e, 0), rt(e, r), ve(e, V()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Ot(e, fe, Ue);
          break;
        case 3:
          if (
            (rt(e, r), (r & 130023424) === r && ((t = Zl + 500 - V()), 10 < t))
          ) {
            if (to(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Ui(Ot.bind(null, e, fe, Ue), t);
            break;
          }
          Ot(e, fe, Ue);
          break;
        case 4:
          if ((rt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Fe(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = V() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * hf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ui(Ot.bind(null, e, fe, Ue), r);
            break;
          }
          Ot(e, fe, Ue);
          break;
        case 5:
          Ot(e, fe, Ue);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return ve(e, V()), e.callbackNode === n ? Pc.bind(null, e) : null;
}
function ul(e, t) {
  var n = Vn;
  return (
    e.current.memoizedState.isDehydrated && (Mt(e, t).flags |= 256),
    (e = ko(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && cl(t)),
    e
  );
}
function cl(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function ff(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!De(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function rt(e, t) {
  for (
    t &= ~Xl,
      t &= ~Oo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Fe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ma(e) {
  if (F & 6) throw Error(E(327));
  pn();
  var t = to(e, 0);
  if (!(t & 1)) return ve(e, V()), null;
  var n = ko(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Fi(e);
    r !== 0 && ((t = r), (n = ul(e, r)));
  }
  if (n === 1) throw ((n = dr), Mt(e, 0), rt(e, t), ve(e, V()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ot(e, fe, Ue),
    ve(e, V()),
    null
  );
}
function es(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((xn = V() + 500), Po && kt());
  }
}
function $t(e) {
  it !== null && it.tag === 0 && !(F & 6) && pn();
  var t = F;
  F |= 1;
  var n = Ne.transition,
    r = A;
  try {
    if (((Ne.transition = null), (A = 1), e)) return e();
  } finally {
    (A = r), (Ne.transition = n), (F = t), !(F & 6) && kt();
  }
}
function ts() {
  (ye = an.current), b(an);
}
function Mt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Hh(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n;
      switch ((Fl(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && lo();
          break;
        case 3:
          wn(), b(me), b(se), $l();
          break;
        case 5:
          Ul(r);
          break;
        case 4:
          wn();
          break;
        case 13:
          b(H);
          break;
        case 19:
          b(H);
          break;
        case 10:
          bl(r.type._context);
          break;
        case 22:
        case 23:
          ts();
      }
      n = n.return;
    }
  if (
    ((ee = e),
    (G = e = pt(e.current, null)),
    (ne = ye = t),
    (J = 0),
    (dr = null),
    (Xl = Oo = Ut = 0),
    (fe = Vn = null),
    At !== null)
  ) {
    for (t = 0; t < At.length; t++)
      if (((n = At[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    At = null;
  }
  return e;
}
function _c(e, t) {
  do {
    var n = G;
    try {
      if ((Ml(), (qr.current = go), mo)) {
        for (var r = U.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        mo = !1;
      }
      if (
        ((Ht = 0),
        (Z = Y = U = null),
        (qn = !1),
        (ar = 0),
        (Jl.current = null),
        n === null || n.return === null)
      ) {
        (J = 1), (dr = t), (G = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          a = n,
          u = t;
        if (
          ((t = ne),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var d = u,
            m = a,
            v = m.tag;
          if (!(m.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var y = m.alternate;
            y
              ? ((m.updateQueue = y.updateQueue),
                (m.memoizedState = y.memoizedState),
                (m.lanes = y.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var w = na(l);
          if (w !== null) {
            (w.flags &= -257),
              ra(w, l, a, i, t),
              w.mode & 1 && ta(i, d, t),
              (t = w),
              (u = d);
            var k = t.updateQueue;
            if (k === null) {
              var x = new Set();
              x.add(u), (t.updateQueue = x);
            } else k.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              ta(i, d, t), ns();
              break e;
            }
            u = Error(E(426));
          }
        } else if (B && a.mode & 1) {
          var j = na(l);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              ra(j, l, a, i, t),
              Al(kn(u, a));
            break e;
          }
        }
        (i = u = kn(u, a)),
          J !== 4 && (J = 2),
          Vn === null ? (Vn = [i]) : Vn.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = pc(i, u, t);
              Gs(i, p);
              break e;
            case 1:
              a = u;
              var c = i.type,
                f = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (ht === null || !ht.has(f))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = mc(i, a, t);
                Gs(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Oc(n);
    } catch (I) {
      (t = I), G === n && n !== null && (G = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Rc() {
  var e = vo.current;
  return (vo.current = go), e === null ? go : e;
}
function ns() {
  (J === 0 || J === 3 || J === 2) && (J = 4),
    ee === null || (!(Ut & 268435455) && !(Oo & 268435455)) || rt(ee, ne);
}
function ko(e, t) {
  var n = F;
  F |= 2;
  var r = Rc();
  (ee !== e || ne !== t) && ((Ue = null), Mt(e, t));
  do
    try {
      pf();
      break;
    } catch (o) {
      _c(e, o);
    }
  while (!0);
  if ((Ml(), (F = n), (vo.current = r), G !== null)) throw Error(E(261));
  return (ee = null), (ne = 0), J;
}
function pf() {
  for (; G !== null; ) Lc(G);
}
function mf() {
  for (; G !== null && !bd(); ) Lc(G);
}
function Lc(e) {
  var t = Ac(e.alternate, e, ye);
  (e.memoizedProps = e.pendingProps),
    t === null ? Oc(e) : (G = t),
    (Jl.current = null);
}
function Oc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = af(n, t)), n !== null)) {
        (n.flags &= 32767), (G = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (J = 6), (G = null);
        return;
      }
    } else if (((n = sf(n, t, ye)), n !== null)) {
      G = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      G = t;
      return;
    }
    G = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function Ot(e, t, n) {
  var r = A,
    o = Ne.transition;
  try {
    (Ne.transition = null), (A = 1), gf(e, t, n, r);
  } finally {
    (Ne.transition = o), (A = r);
  }
  return null;
}
function gf(e, t, n, r) {
  do pn();
  while (it !== null);
  if (F & 6) throw Error(E(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Kd(e, i),
    e === ee && ((G = ee = null), (ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Dr ||
      ((Dr = !0),
      Dc(eo, function () {
        return pn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ne.transition), (Ne.transition = null);
    var l = A;
    A = 1;
    var a = F;
    (F |= 4),
      (Jl.current = null),
      cf(e, n),
      Tc(n, e),
      Fh(Wi),
      (no = !!Bi),
      (Wi = Bi = null),
      (e.current = n),
      df(n),
      Bd(),
      (F = a),
      (A = l),
      (Ne.transition = i);
  } else e.current = n;
  if (
    (Dr && ((Dr = !1), (it = e), (wo = o)),
    (i = e.pendingLanes),
    i === 0 && (ht = null),
    Ud(n.stateNode),
    ve(e, V()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (yo) throw ((yo = !1), (e = sl), (sl = null), e);
  return (
    wo & 1 && e.tag !== 0 && pn(),
    (i = e.pendingLanes),
    i & 1 ? (e === al ? Gn++ : ((Gn = 0), (al = e))) : (Gn = 0),
    kt(),
    null
  );
}
function pn() {
  if (it !== null) {
    var e = fu(wo),
      t = Ne.transition,
      n = A;
    try {
      if (((Ne.transition = null), (A = 16 > e ? 16 : e), it === null))
        var r = !1;
      else {
        if (((e = it), (it = null), (wo = 0), F & 6)) throw Error(E(331));
        var o = F;
        for (F |= 4, T = e.current; T !== null; ) {
          var i = T,
            l = i.child;
          if (T.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var d = a[u];
                for (T = d; T !== null; ) {
                  var m = T;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qn(8, m, i);
                  }
                  var v = m.child;
                  if (v !== null) (v.return = m), (T = v);
                  else
                    for (; T !== null; ) {
                      m = T;
                      var y = m.sibling,
                        w = m.return;
                      if ((Ec(m), m === d)) {
                        T = null;
                        break;
                      }
                      if (y !== null) {
                        (y.return = w), (T = y);
                        break;
                      }
                      T = w;
                    }
                }
              }
              var k = i.alternate;
              if (k !== null) {
                var x = k.child;
                if (x !== null) {
                  k.child = null;
                  do {
                    var j = x.sibling;
                    (x.sibling = null), (x = j);
                  } while (x !== null);
                }
              }
              T = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (T = l);
          else
            e: for (; T !== null; ) {
              if (((i = T), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qn(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (T = p);
                break e;
              }
              T = i.return;
            }
        }
        var c = e.current;
        for (T = c; T !== null; ) {
          l = T;
          var f = l.child;
          if (l.subtreeFlags & 2064 && f !== null) (f.return = l), (T = f);
          else
            e: for (l = c; T !== null; ) {
              if (((a = T), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lo(9, a);
                  }
                } catch (I) {
                  q(a, a.return, I);
                }
              if (a === l) {
                T = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (T = S);
                break e;
              }
              T = a.return;
            }
        }
        if (
          ((F = o), kt(), We && typeof We.onPostCommitFiberRoot == "function")
        )
          try {
            We.onPostCommitFiberRoot(Eo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (A = n), (Ne.transition = t);
    }
  }
  return !1;
}
function ga(e, t, n) {
  (t = kn(n, t)),
    (t = pc(e, t, 1)),
    (e = dt(e, t, 1)),
    (t = ue()),
    e !== null && (mr(e, 1, t), ve(e, t));
}
function q(e, t, n) {
  if (e.tag === 3) ga(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ga(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ht === null || !ht.has(r)))
        ) {
          (e = kn(n, e)),
            (e = mc(t, e, 1)),
            (t = dt(t, e, 1)),
            (e = ue()),
            t !== null && (mr(t, 1, e), ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function vf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e &&
      (ne & n) === n &&
      (J === 4 || (J === 3 && (ne & 130023424) === ne && 500 > V() - Zl)
        ? Mt(e, 0)
        : (Xl |= n)),
    ve(e, t);
}
function Fc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Nr), (Nr <<= 1), !(Nr & 130023424) && (Nr = 4194304))
      : (t = 1));
  var n = ue();
  (e = Ye(e, t)), e !== null && (mr(e, t, n), ve(e, n));
}
function yf(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Fc(e, n);
}
function wf(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), Fc(e, n);
}
var Ac;
Ac = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || me.current) pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (pe = !1), lf(e, t, n);
      pe = !!(e.flags & 131072);
    }
  else (pe = !1), B && t.flags & 1048576 && bu(t, uo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Vr(e, t), (e = t.pendingProps);
      var o = gn(t, se.current);
      fn(t, n), (o = Ql(null, t, r, e, o, n));
      var i = Vl();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ge(r) ? ((i = !0), so(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Wl(t),
            (o.updater = _o),
            (t.stateNode = o),
            (o._reactInternals = t),
            Yi(t, r, e, n),
            (t = Zi(null, t, r, !0, i, n)))
          : ((t.tag = 0), B && i && Ol(t), ae(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Vr(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = xf(r)),
          (e = Re(r, e)),
          o)
        ) {
          case 0:
            t = Xi(null, t, r, e, n);
            break e;
          case 1:
            t = la(null, t, r, e, n);
            break e;
          case 11:
            t = oa(null, t, r, e, n);
            break e;
          case 14:
            t = ia(null, t, r, Re(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Re(r, o)),
        Xi(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Re(r, o)),
        la(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((wc(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Uu(e, t),
          fo(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = kn(Error(E(423)), t)), (t = sa(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = kn(Error(E(424)), t)), (t = sa(e, t, r, n, o));
            break e;
          } else
            for (
              we = ct(t.stateNode.containerInfo.firstChild),
                ke = t,
                B = !0,
                Oe = null,
                n = Vu(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((vn(), r === o)) {
            t = Je(e, t, n);
            break e;
          }
          ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Gu(t),
        e === null && Vi(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Hi(r, o) ? (l = null) : i !== null && Hi(r, i) && (t.flags |= 32),
        yc(e, t),
        ae(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Vi(t), null;
    case 13:
      return kc(e, t, n);
    case 4:
      return (
        Hl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = yn(t, null, r, n)) : ae(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Re(r, o)),
        oa(e, t, r, o, n)
      );
    case 7:
      return ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          D(co, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (De(i.value, l)) {
            if (i.children === o.children && !me.current) {
              t = Je(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                l = i.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = Ve(-1, n & -n)), (u.tag = 2);
                      var d = i.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var m = d.pending;
                        m === null
                          ? (u.next = u)
                          : ((u.next = m.next), (m.next = u)),
                          (d.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      Gi(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(E(341));
                (l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  Gi(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        ae(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        fn(t, n),
        (o = Te(o)),
        (r = r(o)),
        (t.flags |= 1),
        ae(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Re(r, t.pendingProps)),
        (o = Re(r.type, o)),
        ia(e, t, r, o, n)
      );
    case 15:
      return gc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Re(r, o)),
        Vr(e, t),
        (t.tag = 1),
        ge(r) ? ((e = !0), so(t)) : (e = !1),
        fn(t, n),
        qu(t, r, o),
        Yi(t, r, o, n),
        Zi(null, t, r, !0, e, n)
      );
    case 19:
      return xc(e, t, n);
    case 22:
      return vc(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function Dc(e, t) {
  return uu(e, t);
}
function kf(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ie(e, t, n, r) {
  return new kf(e, t, n, r);
}
function rs(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function xf(e) {
  if (typeof e == "function") return rs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Sl)) return 11;
    if (e === jl) return 14;
  }
  return 2;
}
function pt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ie(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Yr(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) rs(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Jt:
        return bt(n.children, o, i, t);
      case xl:
        (l = 8), (o |= 8);
        break;
      case ki:
        return (
          (e = Ie(12, n, t, o | 2)), (e.elementType = ki), (e.lanes = i), e
        );
      case xi:
        return (e = Ie(13, n, t, o)), (e.elementType = xi), (e.lanes = i), e;
      case Si:
        return (e = Ie(19, n, t, o)), (e.elementType = Si), (e.lanes = i), e;
      case Qa:
        return Fo(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case $a:
              l = 10;
              break e;
            case qa:
              l = 9;
              break e;
            case Sl:
              l = 11;
              break e;
            case jl:
              l = 14;
              break e;
            case et:
              (l = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ie(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function bt(e, t, n, r) {
  return (e = Ie(7, e, r, t)), (e.lanes = n), e;
}
function Fo(e, t, n, r) {
  return (
    (e = Ie(22, e, r, t)),
    (e.elementType = Qa),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function mi(e, t, n) {
  return (e = Ie(6, e, null, t)), (e.lanes = n), e;
}
function gi(e, t, n) {
  return (
    (t = Ie(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Sf(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Yo(0)),
    (this.expirationTimes = Yo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Yo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function os(e, t, n, r, o, i, l, a, u) {
  return (
    (e = new Sf(e, t, n, a, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ie(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Wl(i),
    e
  );
}
function jf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Yt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Mc(e) {
  if (!e) return vt;
  e = e._reactInternals;
  e: {
    if (Qt(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ge(n)) return Du(e, n, t);
  }
  return t;
}
function bc(e, t, n, r, o, i, l, a, u) {
  return (
    (e = os(n, r, !0, e, o, i, l, a, u)),
    (e.context = Mc(null)),
    (n = e.current),
    (r = ue()),
    (o = ft(n)),
    (i = Ve(r, o)),
    (i.callback = t ?? null),
    dt(n, i, o),
    (e.current.lanes = o),
    mr(e, o, r),
    ve(e, r),
    e
  );
}
function Ao(e, t, n, r) {
  var o = t.current,
    i = ue(),
    l = ft(o);
  return (
    (n = Mc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ve(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = dt(o, t, l)),
    e !== null && (Ae(e, o, l, i), $r(e, o, l)),
    l
  );
}
function xo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function va(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function is(e, t) {
  va(e, t), (e = e.alternate) && va(e, t);
}
function Cf() {
  return null;
}
var Bc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ls(e) {
  this._internalRoot = e;
}
Do.prototype.render = ls.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Ao(e, t, null, null);
};
Do.prototype.unmount = ls.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $t(function () {
      Ao(null, e, null, null);
    }),
      (t[Ke] = null);
  }
};
function Do(e) {
  this._internalRoot = e;
}
Do.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = gu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < nt.length && t !== 0 && t < nt[n].priority; n++);
    nt.splice(n, 0, e), n === 0 && yu(e);
  }
};
function ss(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Mo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ya() {}
function Ef(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var d = xo(l);
        i.call(d);
      };
    }
    var l = bc(t, r, e, 0, null, !1, !1, "", ya);
    return (
      (e._reactRootContainer = l),
      (e[Ke] = l.current),
      rr(e.nodeType === 8 ? e.parentNode : e),
      $t(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var d = xo(u);
      a.call(d);
    };
  }
  var u = os(e, 0, !1, null, null, !1, !1, "", ya);
  return (
    (e._reactRootContainer = u),
    (e[Ke] = u.current),
    rr(e.nodeType === 8 ? e.parentNode : e),
    $t(function () {
      Ao(t, u, n, r);
    }),
    u
  );
}
function bo(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var u = xo(l);
        a.call(u);
      };
    }
    Ao(t, l, e, o);
  } else l = Ef(n, t, e, o, r);
  return xo(l);
}
pu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mn(t.pendingLanes);
        n !== 0 &&
          (Il(t, n | 1), ve(t, V()), !(F & 6) && ((xn = V() + 500), kt()));
      }
      break;
    case 13:
      $t(function () {
        var r = Ye(e, 1);
        if (r !== null) {
          var o = ue();
          Ae(r, e, 1, o);
        }
      }),
        is(e, 1);
  }
};
Nl = function (e) {
  if (e.tag === 13) {
    var t = Ye(e, 134217728);
    if (t !== null) {
      var n = ue();
      Ae(t, e, 134217728, n);
    }
    is(e, 134217728);
  }
};
mu = function (e) {
  if (e.tag === 13) {
    var t = ft(e),
      n = Ye(e, t);
    if (n !== null) {
      var r = ue();
      Ae(n, e, t, r);
    }
    is(e, t);
  }
};
gu = function () {
  return A;
};
vu = function (e, t) {
  var n = A;
  try {
    return (A = e), t();
  } finally {
    A = n;
  }
};
Ri = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ei(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = zo(r);
            if (!o) throw Error(E(90));
            Ga(r), Ei(r, o);
          }
        }
      }
      break;
    case "textarea":
      Ya(e, n);
      break;
    case "select":
      (t = n.value), t != null && un(e, !!n.multiple, t, !1);
  }
};
ru = es;
ou = $t;
var If = { usingClientEntryPoint: !1, Events: [vr, tn, zo, tu, nu, es] },
  Fn = {
    findFiberByHostInstance: Ft,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Nf = {
    bundleType: Fn.bundleType,
    version: Fn.version,
    rendererPackageName: Fn.rendererPackageName,
    rendererConfig: Fn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = su(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Fn.findFiberByHostInstance || Cf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Mr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Mr.isDisabled && Mr.supportsFiber)
    try {
      (Eo = Mr.inject(Nf)), (We = Mr);
    } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = If;
Se.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ss(t)) throw Error(E(200));
  return jf(e, t, null, n);
};
Se.createRoot = function (e, t) {
  if (!ss(e)) throw Error(E(299));
  var n = !1,
    r = "",
    o = Bc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = os(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ke] = t.current),
    rr(e.nodeType === 8 ? e.parentNode : e),
    new ls(t)
  );
};
Se.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = su(t)), (e = e === null ? null : e.stateNode), e;
};
Se.flushSync = function (e) {
  return $t(e);
};
Se.hydrate = function (e, t, n) {
  if (!Mo(t)) throw Error(E(200));
  return bo(null, e, t, !0, n);
};
Se.hydrateRoot = function (e, t, n) {
  if (!ss(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = Bc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = bc(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[Ke] = t.current),
    rr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Do(t);
};
Se.render = function (e, t, n) {
  if (!Mo(t)) throw Error(E(200));
  return bo(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function (e) {
  if (!Mo(e)) throw Error(E(40));
  return e._reactRootContainer
    ? ($t(function () {
        bo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ke] = null);
        });
      }),
      !0)
    : !1;
};
Se.unstable_batchedUpdates = es;
Se.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Mo(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return bo(e, t, n, !1, r);
};
Se.version = "18.2.0-next-9e3b772b8-20220608";
function Wc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wc);
    } catch (e) {
      console.error(e);
    }
}
Wc(), (ba.exports = Se);
var Tf = ba.exports,
  wa = Tf;
(yi.createRoot = wa.createRoot), (yi.hydrateRoot = wa.hydrateRoot);
/**
 * @remix-run/router v1.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function hr() {
  return (
    (hr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    hr.apply(this, arguments)
  );
}
var lt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(lt || (lt = {}));
const ka = "popstate";
function zf(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: l, hash: a } = r.location;
    return dl(
      "",
      { pathname: i, search: l, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : So(o);
  }
  return _f(t, n, null, e);
}
function K(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Hc(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Pf() {
  return Math.random().toString(36).substr(2, 8);
}
function xa(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function dl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    hr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? En(t) : t,
      { state: n, key: (t && t.key) || r || Pf() }
    )
  );
}
function So(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function En(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function _f(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    l = o.history,
    a = lt.Pop,
    u = null,
    d = m();
  d == null && ((d = 0), l.replaceState(hr({}, l.state, { idx: d }), ""));
  function m() {
    return (l.state || { idx: null }).idx;
  }
  function v() {
    a = lt.Pop;
    let j = m(),
      p = j == null ? null : j - d;
    (d = j), u && u({ action: a, location: x.location, delta: p });
  }
  function y(j, p) {
    a = lt.Push;
    let c = dl(x.location, j, p);
    n && n(c, j), (d = m() + 1);
    let f = xa(c, d),
      S = x.createHref(c);
    try {
      l.pushState(f, "", S);
    } catch (I) {
      if (I instanceof DOMException && I.name === "DataCloneError") throw I;
      o.location.assign(S);
    }
    i && u && u({ action: a, location: x.location, delta: 1 });
  }
  function w(j, p) {
    a = lt.Replace;
    let c = dl(x.location, j, p);
    n && n(c, j), (d = m());
    let f = xa(c, d),
      S = x.createHref(c);
    l.replaceState(f, "", S),
      i && u && u({ action: a, location: x.location, delta: 0 });
  }
  function k(j) {
    let p = o.location.origin !== "null" ? o.location.origin : o.location.href,
      c = typeof j == "string" ? j : So(j);
    return (
      (c = c.replace(/ $/, "%20")),
      K(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, p)
    );
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(o, l);
    },
    listen(j) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(ka, v),
        (u = j),
        () => {
          o.removeEventListener(ka, v), (u = null);
        }
      );
    },
    createHref(j) {
      return t(o, j);
    },
    createURL: k,
    encodeLocation(j) {
      let p = k(j);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: y,
    replace: w,
    go(j) {
      return l.go(j);
    },
  };
  return x;
}
var Sa;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Sa || (Sa = {}));
function Rf(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? En(t) : t,
    o = as(r.pathname || "/", n);
  if (o == null) return null;
  let i = Uc(e);
  Lf(i);
  let l = null;
  for (let a = 0; l == null && a < i.length; ++a) {
    let u = qf(o);
    l = Hf(i[a], u);
  }
  return l;
}
function Uc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, l, a) => {
    let u = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    u.relativePath.startsWith("/") &&
      (K(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let d = mt([r, u.relativePath]),
      m = n.concat(u);
    i.children &&
      i.children.length > 0 &&
      (K(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + d + '".')
      ),
      Uc(i.children, t, m, d)),
      !(i.path == null && !i.index) &&
        t.push({ path: d, score: Bf(d, i.index), routesMeta: m });
  };
  return (
    e.forEach((i, l) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, l);
      else for (let u of $c(i.path)) o(i, l, u);
    }),
    t
  );
}
function $c(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let l = $c(r.join("/")),
    a = [];
  return (
    a.push(...l.map((u) => (u === "" ? i : [i, u].join("/")))),
    o && a.push(...l),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function Lf(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Wf(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Of = /^:[\w-]+$/,
  Ff = 3,
  Af = 2,
  Df = 1,
  Mf = 10,
  bf = -2,
  ja = (e) => e === "*";
function Bf(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(ja) && (r += bf),
    t && (r += Af),
    n
      .filter((o) => !ja(o))
      .reduce((o, i) => o + (Of.test(i) ? Ff : i === "" ? Df : Mf), r)
  );
}
function Wf(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Hf(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let l = 0; l < n.length; ++l) {
    let a = n[l],
      u = l === n.length - 1,
      d = o === "/" ? t : t.slice(o.length) || "/",
      m = Uf(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        d
      );
    if (!m) return null;
    Object.assign(r, m.params);
    let v = a.route;
    i.push({
      params: r,
      pathname: mt([o, m.pathname]),
      pathnameBase: Kf(mt([o, m.pathnameBase])),
      route: v,
    }),
      m.pathnameBase !== "/" && (o = mt([o, m.pathnameBase]));
  }
  return i;
}
function Uf(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = $f(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    l = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((d, m, v) => {
      let { paramName: y, isOptional: w } = m;
      if (y === "*") {
        let x = a[v] || "";
        l = i.slice(0, i.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const k = a[v];
      return (
        w && !k ? (d[y] = void 0) : (d[y] = (k || "").replace(/%2F/g, "/")), d
      );
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function $f(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Hc(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function qf(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Hc(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function as(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Qf(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? En(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Vf(n, t)) : t,
    search: Yf(r),
    hash: Jf(o),
  };
}
function Vf(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function vi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Gf(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function qc(e, t) {
  let n = Gf(e);
  return t
    ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Qc(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = En(e))
    : ((o = hr({}, e)),
      K(
        !o.pathname || !o.pathname.includes("?"),
        vi("?", "pathname", "search", o)
      ),
      K(
        !o.pathname || !o.pathname.includes("#"),
        vi("#", "pathname", "hash", o)
      ),
      K(!o.search || !o.search.includes("#"), vi("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    l = i ? "/" : o.pathname,
    a;
  if (l == null) a = n;
  else {
    let v = t.length - 1;
    if (!r && l.startsWith("..")) {
      let y = l.split("/");
      for (; y[0] === ".."; ) y.shift(), (v -= 1);
      o.pathname = y.join("/");
    }
    a = v >= 0 ? t[v] : "/";
  }
  let u = Qf(o, a),
    d = l && l !== "/" && l.endsWith("/"),
    m = (i || l === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (d || m) && (u.pathname += "/"), u;
}
const mt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Kf = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Yf = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Jf = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Xf(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Vc = ["post", "put", "patch", "delete"];
new Set(Vc);
const Zf = ["get", ...Vc];
new Set(Zf);
/**
 * React Router v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fr() {
  return (
    (fr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fr.apply(this, arguments)
  );
}
const us = g.createContext(null),
  ep = g.createContext(null),
  Vt = g.createContext(null),
  Bo = g.createContext(null),
  Gt = g.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Gc = g.createContext(null);
function tp(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  wr() || K(!1);
  let { basename: r, navigator: o } = g.useContext(Vt),
    { hash: i, pathname: l, search: a } = Yc(e, { relative: n }),
    u = l;
  return (
    r !== "/" && (u = l === "/" ? r : mt([r, l])),
    o.createHref({ pathname: u, search: a, hash: i })
  );
}
function wr() {
  return g.useContext(Bo) != null;
}
function Wo() {
  return wr() || K(!1), g.useContext(Bo).location;
}
function Kc(e) {
  g.useContext(Vt).static || g.useLayoutEffect(e);
}
function np() {
  let { isDataRoute: e } = g.useContext(Gt);
  return e ? mp() : rp();
}
function rp() {
  wr() || K(!1);
  let e = g.useContext(us),
    { basename: t, future: n, navigator: r } = g.useContext(Vt),
    { matches: o } = g.useContext(Gt),
    { pathname: i } = Wo(),
    l = JSON.stringify(qc(o, n.v7_relativeSplatPath)),
    a = g.useRef(!1);
  return (
    Kc(() => {
      a.current = !0;
    }),
    g.useCallback(
      function (d, m) {
        if ((m === void 0 && (m = {}), !a.current)) return;
        if (typeof d == "number") {
          r.go(d);
          return;
        }
        let v = Qc(d, JSON.parse(l), i, m.relative === "path");
        e == null &&
          t !== "/" &&
          (v.pathname = v.pathname === "/" ? t : mt([t, v.pathname])),
          (m.replace ? r.replace : r.push)(v, m.state, m);
      },
      [t, r, l, i, e]
    )
  );
}
function Yc(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = g.useContext(Vt),
    { matches: o } = g.useContext(Gt),
    { pathname: i } = Wo(),
    l = JSON.stringify(qc(o, r.v7_relativeSplatPath));
  return g.useMemo(() => Qc(e, JSON.parse(l), i, n === "path"), [e, l, i, n]);
}
function op(e, t) {
  return ip(e, t);
}
function ip(e, t, n, r) {
  wr() || K(!1);
  let { navigator: o } = g.useContext(Vt),
    { matches: i } = g.useContext(Gt),
    l = i[i.length - 1],
    a = l ? l.params : {};
  l && l.pathname;
  let u = l ? l.pathnameBase : "/";
  l && l.route;
  let d = Wo(),
    m;
  if (t) {
    var v;
    let j = typeof t == "string" ? En(t) : t;
    u === "/" || ((v = j.pathname) != null && v.startsWith(u)) || K(!1),
      (m = j);
  } else m = d;
  let y = m.pathname || "/",
    w = y;
  if (u !== "/") {
    let j = u.replace(/^\//, "").split("/");
    w = "/" + y.replace(/^\//, "").split("/").slice(j.length).join("/");
  }
  let k = Rf(e, { pathname: w }),
    x = cp(
      k &&
        k.map((j) =>
          Object.assign({}, j, {
            params: Object.assign({}, a, j.params),
            pathname: mt([
              u,
              o.encodeLocation
                ? o.encodeLocation(j.pathname).pathname
                : j.pathname,
            ]),
            pathnameBase:
              j.pathnameBase === "/"
                ? u
                : mt([
                    u,
                    o.encodeLocation
                      ? o.encodeLocation(j.pathnameBase).pathname
                      : j.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && x
    ? g.createElement(
        Bo.Provider,
        {
          value: {
            location: fr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              m
            ),
            navigationType: lt.Pop,
          },
        },
        x
      )
    : x;
}
function lp() {
  let e = pp(),
    t = Xf(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return g.createElement(
    g.Fragment,
    null,
    g.createElement("h2", null, "Unexpected Application Error!"),
    g.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? g.createElement("pre", { style: o }, n) : null,
    null
  );
}
const sp = g.createElement(lp, null);
class ap extends g.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? g.createElement(
          Gt.Provider,
          { value: this.props.routeContext },
          g.createElement(Gc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function up(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = g.useContext(us);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    g.createElement(Gt.Provider, { value: t }, r)
  );
}
function cp(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let l = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let m = l.findIndex(
      (v) => v.route.id && (a == null ? void 0 : a[v.route.id])
    );
    m >= 0 || K(!1), (l = l.slice(0, Math.min(l.length, m + 1)));
  }
  let u = !1,
    d = -1;
  if (n && r && r.v7_partialHydration)
    for (let m = 0; m < l.length; m++) {
      let v = l[m];
      if (
        ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (d = m),
        v.route.id)
      ) {
        let { loaderData: y, errors: w } = n,
          k =
            v.route.loader &&
            y[v.route.id] === void 0 &&
            (!w || w[v.route.id] === void 0);
        if (v.route.lazy || k) {
          (u = !0), d >= 0 ? (l = l.slice(0, d + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((m, v, y) => {
    let w,
      k = !1,
      x = null,
      j = null;
    n &&
      ((w = a && v.route.id ? a[v.route.id] : void 0),
      (x = v.route.errorElement || sp),
      u &&
        (d < 0 && y === 0
          ? (gp("route-fallback", !1), (k = !0), (j = null))
          : d === y &&
            ((k = !0), (j = v.route.hydrateFallbackElement || null))));
    let p = t.concat(l.slice(0, y + 1)),
      c = () => {
        let f;
        return (
          w
            ? (f = x)
            : k
            ? (f = j)
            : v.route.Component
            ? (f = g.createElement(v.route.Component, null))
            : v.route.element
            ? (f = v.route.element)
            : (f = m),
          g.createElement(up, {
            match: v,
            routeContext: { outlet: m, matches: p, isDataRoute: n != null },
            children: f,
          })
        );
      };
    return n && (v.route.ErrorBoundary || v.route.errorElement || y === 0)
      ? g.createElement(ap, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: w,
          children: c(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var Jc = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Jc || {}),
  jo = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(jo || {});
function dp(e) {
  let t = g.useContext(us);
  return t || K(!1), t;
}
function hp(e) {
  let t = g.useContext(ep);
  return t || K(!1), t;
}
function fp(e) {
  let t = g.useContext(Gt);
  return t || K(!1), t;
}
function Xc(e) {
  let t = fp(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || K(!1), n.route.id;
}
function pp() {
  var e;
  let t = g.useContext(Gc),
    n = hp(jo.UseRouteError),
    r = Xc(jo.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function mp() {
  let { router: e } = dp(Jc.UseNavigateStable),
    t = Xc(jo.UseNavigateStable),
    n = g.useRef(!1);
  return (
    Kc(() => {
      n.current = !0;
    }),
    g.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, fr({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const Ca = {};
function gp(e, t, n) {
  !t && !Ca[e] && (Ca[e] = !0);
}
function W(e) {
  K(!1);
}
function vp(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = lt.Pop,
    navigator: i,
    static: l = !1,
    future: a,
  } = e;
  wr() && K(!1);
  let u = t.replace(/^\/*/, "/"),
    d = g.useMemo(
      () => ({
        basename: u,
        navigator: i,
        static: l,
        future: fr({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, i, l]
    );
  typeof r == "string" && (r = En(r));
  let {
      pathname: m = "/",
      search: v = "",
      hash: y = "",
      state: w = null,
      key: k = "default",
    } = r,
    x = g.useMemo(() => {
      let j = as(m, u);
      return j == null
        ? null
        : {
            location: { pathname: j, search: v, hash: y, state: w, key: k },
            navigationType: o,
          };
    }, [u, m, v, y, w, k, o]);
  return x == null
    ? null
    : g.createElement(
        Vt.Provider,
        { value: d },
        g.createElement(Bo.Provider, { children: n, value: x })
      );
}
function yp(e) {
  let { children: t, location: n } = e;
  return op(hl(t), n);
}
new Promise(() => {});
function hl(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    g.Children.forEach(e, (r, o) => {
      if (!g.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === g.Fragment) {
        n.push.apply(n, hl(r.props.children, i));
        return;
      }
      r.type !== W && K(!1), !r.props.index || !r.props.children || K(!1);
      let l = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (l.children = hl(r.props.children, i)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fl() {
  return (
    (fl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fl.apply(this, arguments)
  );
}
function wp(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function kp(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function xp(e, t) {
  return e.button === 0 && (!t || t === "_self") && !kp(e);
}
const Sp = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  jp = "6";
try {
  window.__reactRouterVersion = jp;
} catch {}
const Cp = "startTransition",
  Ea = vd[Cp];
function Ep(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = g.useRef();
  i.current == null && (i.current = zf({ window: o, v5Compat: !0 }));
  let l = i.current,
    [a, u] = g.useState({ action: l.action, location: l.location }),
    { v7_startTransition: d } = r || {},
    m = g.useCallback(
      (v) => {
        d && Ea ? Ea(() => u(v)) : u(v);
      },
      [u, d]
    );
  return (
    g.useLayoutEffect(() => l.listen(m), [l, m]),
    g.createElement(vp, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: l,
      future: r,
    })
  );
}
const Ip =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Np = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ce = g.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: l,
        state: a,
        target: u,
        to: d,
        preventScrollReset: m,
        unstable_viewTransition: v,
      } = t,
      y = wp(t, Sp),
      { basename: w } = g.useContext(Vt),
      k,
      x = !1;
    if (typeof d == "string" && Np.test(d) && ((k = d), Ip))
      try {
        let f = new URL(window.location.href),
          S = d.startsWith("//") ? new URL(f.protocol + d) : new URL(d),
          I = as(S.pathname, w);
        S.origin === f.origin && I != null
          ? (d = I + S.search + S.hash)
          : (x = !0);
      } catch {}
    let j = tp(d, { relative: o }),
      p = Tp(d, {
        replace: l,
        state: a,
        target: u,
        preventScrollReset: m,
        relative: o,
        unstable_viewTransition: v,
      });
    function c(f) {
      r && r(f), f.defaultPrevented || p(f);
    }
    return g.createElement(
      "a",
      fl({}, y, { href: k || j, onClick: x || i ? r : c, ref: n, target: u })
    );
  });
var Ia;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Ia || (Ia = {}));
var Na;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Na || (Na = {}));
function Tp(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: l,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    u = np(),
    d = Wo(),
    m = Yc(e, { relative: l });
  return g.useCallback(
    (v) => {
      if (xp(v, n)) {
        v.preventDefault();
        let y = r !== void 0 ? r : So(d) === So(m);
        u(e, {
          replace: y,
          state: o,
          preventScrollReset: i,
          relative: l,
          unstable_viewTransition: a,
        });
      }
    },
    [d, u, m, r, o, n, e, i, l, a]
  );
}
const zp = "assets/vrta-BoOHp3Td.png",
  Pp = () =>
    s.jsx("div", {
      className: "main-container",
      children: s.jsxs("div", {
        className: "main-content",
        children: [
          s.jsx("div", {
            className: "content-image",
            children: s.jsx("img", { src: zp, alt: "VRTA" }),
          }),
          s.jsx("div", {
            className: "button",
            children: s.jsx(ce, {
              to: "/menu",
              children: s.jsx("button", {
                className: "cta-button",
                children: "Get Started",
              }),
            }),
          }),
        ],
      }),
    }),
  _p = "./assets/vrta-BoOHp3Td.png",
  Rp = () => {
    const [e, t] = g.useState("home");
    return s.jsxs("div", {
      className: "navbar",
      children: [
        s.jsx("div", {
          className: "navlogo",
          children: s.jsx("img", {
            src: _p,
            alt: "",
            style: { width: 130, marginTop: 13 },
          }),
        }),
        s.jsxs("ul", {
          className: "navmenu",
          children: [
            s.jsx("li", {
              onClick: () => {
                t("home");
              },
              children: s.jsx(ce, {
                style: { textDecoration: "none", color: "white" },
                to: "/",
                children: "Home",
              }),
            }),
            s.jsx("li", {
              onClick: () => {
                t("menu");
              },
              children: s.jsx(ce, {
                style: { textDecoration: "none", color: "white" },
                to: "/menu",
                children: "Quiz",
              }),
            }),
            s.jsx("li", { children: "Projects" }),
            s.jsx("li", { children: "Contact" }),
          ],
        }),
      ],
    });
  },
  Lp = () => {
    const e = [1, 2, 3, 4, 5],
      t = [6, 7, 8, 9, 10];
    return s.jsxs("div", {
      className: "menu",
      children: [
        s.jsxs("div", {
          className: "menu-container",
          children: [
            s.jsx("div", {
              className: "genre-title",
              children: s.jsx("h1", { children: "Adventure Stories" }),
            }),
            s.jsx("div", {
              className: "buttons-container",
              children: e.map((n) =>
                s.jsx(
                  "div",
                  {
                    className: "button",
                    children: s.jsx(ce, {
                      to: `/story${n}`,
                      className: "button-link",
                      children: s.jsxs("h1", { children: ["Story ", n] }),
                    }),
                  },
                  n
                )
              ),
            }),
          ],
        }),
        s.jsxs("div", {
          className: "menu-container",
          children: [
            s.jsx("div", {
              className: "genre-title",
              children: s.jsx("h1", { children: "Thriller Stories" }),
            }),
            s.jsx("div", {
              className: "buttons-container",
              children: t.map((n) =>
                s.jsx(
                  "div",
                  {
                    className: "button",
                    children: s.jsx(ce, {
                      to: `/story${n}`,
                      className: "button-link",
                      children: s.jsxs("h1", { children: ["Story ", n] }),
                    }),
                  },
                  n
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  Op = () =>
    s.jsx("div", {
      className: "page-container",
      children: s.jsxs("div", {
        className: "story-container",
        children: [
          s.jsxs("div", {
            className: "box-story",
            children: [
              s.jsx("h1", { className: "title", children: "The Sea Raiders" }),
              s.jsx("div", {
                className: "content-container",
                children: s.jsxs("p", {
                  className: "author-info",
                  children: [
                    "By H. G. Wells ",
                    s.jsx("br", {}),
                    "Written by Missyshears, February 13, 2018",
                  ],
                }),
              }),
              s.jsxs("div", {
                className: "centered-content",
                children: [
                  s.jsx("p", {
                    className: "story-text",
                    children:
                      "Until the extraordinary affair at Sidmouth, the peculiar species Haploteuthis ferox was known to science only generically, on the strength of a half-digested tentacle obtained near the Azores, and a decaying body pecked by birds and nibbled by fish, found early in 1896 by Mr. Jennings, near Land’s End. In no department of zoological science, indeed, are we quite so in the dark as with regard to the deep-sea cephalopods. A mere accident, for instance, it was that led to the Prince of Monaco’s discovery of nearly a dozen new forms in the summer of 1895, a discovery in which the before-mentioned tentacle was included. It chanced that a cachalot was killed off Terceira by some sperm whalers, and in its last struggles charged almost to the Prince’s yacht, missed it, rolled under, and died within twenty yards of his rudder.",
                  }),
                  s.jsx(ce, {
                    style: { textDecoration: "none" },
                    to: "/quiz1",
                    children: s.jsx("div", {
                      className: "button-container",
                      children: s.jsx("button", {
                        className: "start-quiz-button",
                        children: "Start Quiz",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          s.jsx("div", { className: "bot" }),
        ],
      }),
    }),
  Fp = () =>
    s.jsx("div", {
      className: "page-container",
      children: s.jsxs("div", {
        className: "story-container",
        children: [
          s.jsxs("div", {
            className: "box-story",
            children: [
              s.jsx("h1", { className: "title", children: "To build a fire" }),
              s.jsx("div", {
                className: "content-container",
                children: s.jsxs("p", {
                  className: "author-info",
                  children: [
                    "By Jack London ",
                    s.jsx("br", {}),
                    "Written by Jack London May 28, 1902",
                  ],
                }),
              }),
              s.jsxs("div", {
                className: "centered-content",
                children: [
                  s.jsx("p", {
                    className: "story-text",
                    children:
                      "The man walked down the trail on a cold, gray day in Alaska, his first winter there. Dressed in heavy clothes and fur boots, he trudged through the pure white snow and ice that covered the Earth as far as he could see. His destination was a camp near Henderson Creek, where his friends awaited him with a fire and hot food. Behind him, a big gray dog, part dog and part wolf, followed, uneasy with the extreme cold. As he journeyed, he encountered hazards, like a frozen stream where an underground spring threatened to weaken the ice. Despite his precautions, he suffered an accident, his feet sinking into icy water. Frustrated but determined, he built a fire to dry his clothes and boots, battling against the numbing cold and the challenges of starting a fire in such extreme conditions. Yet, as he sat by the flames, thawing his frozen limbs, he reflected on the wisdom of the old men who warned against traveling alone in the Yukon's brutal cold. Despite his survival, he acknowledged the importance of preparation and respect for the wilderness, recognizing both its beauty and its unforgiving nature.",
                  }),
                  s.jsx(ce, {
                    style: { textDecoration: "none" },
                    to: "/quiz2",
                    children: s.jsx("div", {
                      className: "button-container",
                      children: s.jsx("button", {
                        className: "start-quiz-button",
                        children: "Start Quiz",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          s.jsx("div", { className: "bot" }),
        ],
      }),
    }),
  Ap = () =>
    s.jsx("div", {
      className: "page-container",
      children: s.jsxs("div", {
        className: "story-container",
        children: [
          s.jsxs("div", {
            className: "box-story",
            children: [
              s.jsx("h1", { className: "title", children: "SHIFT OF FATE" }),
              s.jsx("div", {
                className: "content-container",
                children: s.jsx("p", {
                  className: "author-info",
                  children: "by Kelly Grabovac",
                }),
              }),
              s.jsxs("div", {
                className: "centered-content",
                children: [
                  s.jsxs("p", {
                    className: "story-text",
                    children: [
                      "The crisp autumn breeze caressed her cheeks. The hair that had fallen over her eyes swept back, along with the loose leaves of the tree in which she was residing. The lit torches on the stone wall flickered at the sudden gust. She felt her heart stop, her stomach drop to her aching feet.",
                      s.jsx("br", {}),
                      " “No,” she whispered, horror crashing through her.",
                      s.jsx("br", {}),
                      " The wind gusted again, harder, the scant clouds above beginning to move faster across the night sky. Panic crashing into her, she watched the guards on the wall. They did not seem to notice the shift in the wind. Did not seem to realize how it changed their fates. ",
                      s.jsx("br", {}),
                      "She clambered down the tree, skin scratching against the tough bark. Her bare feet hit the grass seconds later. In the next moment, she was sprinting through the forest, flying silently through the trees as she retraced the path she had traveled earlier in the evening. ",
                      s.jsx("br", {}),
                      "The camp came into view thanks to the ample starlight—there were no torches lit, despite the commotion that reached her ears.",
                      s.jsx("br", {}),
                      " Fire would give away their position, a position they had worked for years to secure. She pushed her way through the first ring of tents, some alarmed comrades starting at her sudden appearance, and ran straight to the center of their base.",
                      s.jsx("br", {}),
                      " “Commander!” she gasped, skidding to a halt beside him. He turned from the comrades before him, face stern, no emotions playing in the dark irises. “Why have you abandoned your post?” he hissed. “The wind,” she explained through her gasps. “The wind shifted, Commander. It is against us now. We must call off the attack.” The camp around them grew quiet at her words. “We cannot call off the attack,” the Commander said slowly, hand drifting to the hilt of the sword on his hip. “We have worked too long to get to this point.” “We are already at a disadvantage, being downhill of the wall,” she snapped back, anger replacing the panic. “With the wind against us now, we will not be able to breach it.”",
                      s.jsx("br", {}),
                      " “The guard is reduced tonight, and reinforcements will return tomorrow. Our window will close then. It must be tonight.” He turned away from her. A dismissal. “Commander!” she yelled, grabbing his armored shoulder. The crowd around her murmured at the bold move. “We may still have a chance tomorrow. But if we attack with the wind against us, many will die. We will not be successful!” “You have forgotten your place!” he yelled, swiveling back to face her. “Return to your post. Wait for our signal. If you abandon it again, you abandon your right to live.” ",
                      s.jsx("br", {}),
                      "He stormed off, into the largest tent of the camp. Her comrades dissipated, not one of them daring to approach her. She stood, trembling slightly, as they all resumed their duties. The wind pulled at her hair again. She did not bother hurrying as she made her way back to her post. The rough bark did not bother her as much as she pulled herself up each branch, body as numb as her mind. She silently rested on the thin branch, tree swaying in the wind, and stared unseeingly at the fort before her. Rebelling against tyranny had seemed noble. Four years ago, the decision had been easy for her. The Commander and his party had arrived too late, the town already reduced to cinders, but they had waded through every corpse until they found her. Barely breathing, they had carried her to safety, while the wind had carried the ashes of her family in the opposite direction. Now, things were not so black and white.",
                      s.jsx("br", {}),
                      " After years, with only small victories fueling them forward, she realized there would be no vengeance for her fallen family. There would be no dismantling the rulers that stole without reason, that killed without hesitation. If they found her alive after this failed siege...her fate would be worse than death. The sound of a bird call echoed from below. Her body went ridged at the signal, heart racing ahead. The soft sound of leaves crunching alerted her to the presence of the Commander and his company. Below her, shadows moved through the trees, weapons drawn. All that was left of their host stood below her. They stopped their forward motion, waiting for her. She reached for the bow strapped to her back. The weapon was a familiar weight in her hand. The quiver at her hip was full of arrows, but one was longer than the others. Heavier. She reached for that one. She only had one shot.",
                      s.jsx("br", {}),
                      " One chance to make this count. The fort before them was still unaware of their presence in the trees. The late hour of the night had the small array of guards gazing at the stars above their heads, rather than the forest at the bottom of the hill. She didn’t blame them. No one in their right mind would dare dream of sacking this fort, not when its rulers had held it for a thousand years. But no one in this company was in their right mind. Misfits, held together underneath a banner of grief. A party that knew loss enough to not fear death. Free people with nothing left to lose. ",
                      s.jsx("br", {}),
                      "She took a deep, steadying breath. Her feet scrapped on the bark as she slid herself into a more balanced position. The arrow she nocked into place was one of a kind, specially crafted by her over the last week. The smell of gasoline made her nauseous. The Commander had given her reign over their scant supplies in order to do so. The last of their supplies. The last of their hope. She pulled back the nocked arrow, bringing it to her shoulder. Another steadying breath, and she leaned back, tilting the arrow towards the sky. The fort was uphill, upwind. The shot was impossible. She kept her eyes on the mounted torch. ",
                      s.jsx("br", {}),
                      "Her arrow would have to pass through the flame, would have to light, before it sailed into the interior and lit the arsenal of ammo that waited within the stone walls. Light guards, a heavy amount of explosive material horded within...the Commander had waited years for this opportunity. She would try for him. She would most likely die for him. Just then, the wind shifted.",
                    ],
                  }),
                  s.jsx(ce, {
                    style: { textDecoration: "none" },
                    to: "/quiz3",
                    children: s.jsx("div", {
                      className: "button-container",
                      children: s.jsx("button", {
                        className: "start-quiz-button",
                        children: "Start Quiz",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          s.jsx("div", { className: "bot" }),
        ],
      }),
    }),
  Dp = () =>
    s.jsx("div", {
      className: "page-container",
      children: s.jsxs("div", {
        className: "story-container",
        children: [
          s.jsxs("div", {
            className: "box-story",
            children: [
              s.jsx("h1", {
                className: "title",
                children: "Curious George Adventure Story",
              }),
              s.jsx("div", {
                className: "content-container",
                children: s.jsxs("p", {
                  className: "author-info",
                  children: [
                    "by Mukesh Joshi ",
                    s.jsx("br", {}),
                    "August 20, 2023 in Adventure Stories",
                  ],
                }),
              }),
              s.jsxs("div", {
                className: "centered-content",
                children: [
                  s.jsx("p", {
                    className: "story-text",
                    children:
                      "Once upon a time in a bustling little town, lived a curious and lively monkey named George. George wasn’t your everyday monkey; he was brimming with curiosity and had an insatiable spirit of adventure. His sparkling eyes and mischievous grin were a clear indication that something exciting was always on his mind. One bright morning, George woke up to the cheerful chirping of birds and the gentle rustling of leaves outside his window. With a big stretch and a big yawn, he was ready to embark on another day filled with fun and exploration. He shared his home with the Man with the Yellow Hat, a good friend who always encouraged George’s inquisitive nature. As George hopped and bounded around the cozy house, his gaze landed upon a shiny red balloon resting by the window. Oh, what a sight to behold! The balloon seemed to call out to George, its vibrant color and buoyant form practically begging for attention. Without a moment’s hesitation, George snatched the balloon and dashed outside. The balloon tugged playfully at his little hand as a gentle breeze swept by. George’s heart raced with excitement as he watched the balloon ascend higher and higher into the endless sky. He couldn’t help but wonder where it might be off to. With determination burning in his heart, George decided to follow the whimsical balloon. He scurried through the lively town, his nimble feet carrying him with fervor. People smiled and waved at him, but George had his sights set solely on that red balloon. Through lively streets and vibrant markets, George pursued the balloon, his enthusiasm growing with each step. He found himself in unfamiliar places – a park brimming with giggling children, a fragrant bakery wafting the scent of freshly baked bread, and a bustling train station where commuters hurriedly hopped on and off trains. As the sun gradually set, casting a warm and golden hue over the town, George’s balloon became a mere dot in the expansive sky. Yet, it seemed to wink at George, urging him to press on. As darkness descended, George realized he had ventured far from home and felt a touch of loneliness. Just when a tinge of melancholy crept in, George heard a familiar voice in the distance. It was the Man with the Yellow Hat, calling out his name with concern. Relief and joy surged within George as he saw his friend rushing toward him. The Man lifted George into a warm embrace, relieved to have found his adventurous companion. Together, they made their way back home, the balloon having long drifted away. However, the memory of their incredible journey remained etched in George’s heart. Settling down for the night, George nestled beneath his cozy blanket, feeling thankful for his curiosity and the true friend who always watched over him. And so, as the stars adorned the night sky, George drifted into sleep, dreaming of the next wonderful escapade that awaited him – an adventure characterized by curiosity, camaraderie, and endless potential.",
                  }),
                  s.jsx(ce, {
                    style: { textDecoration: "none" },
                    to: "/quiz4",
                    children: s.jsx("div", {
                      className: "button-container",
                      children: s.jsx("button", {
                        className: "start-quiz-button",
                        children: "Start Quiz",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          s.jsx("div", { className: "bot" }),
        ],
      }),
    }),
  Mp = () =>
    s.jsx("div", {
      className: "page-container",
      children: s.jsxs("div", {
        className: "story-container",
        children: [
          s.jsxs("div", {
            className: "box-story",
            children: [
              s.jsx("h1", {
                className: "title",
                children: "The Adventures Of Florian",
              }),
              s.jsx("div", {
                className: "content-container",
                children: s.jsxs("p", {
                  className: "author-info",
                  children: [
                    "By: Henry Beston ",
                    s.jsx("br", {}),
                    "Ririro. (2023, December 10). The Adventures of Florian.",
                  ],
                }),
              }),
              s.jsxs("div", {
                className: "centered-content",
                children: [
                  s.jsx("p", {
                    className: "story-text",
                    children:
                      "Once upon a time there was a widow who had one daughter, named Isabella. They were of noble birth but lived in poverty. The father taught his daughter everything a father would teach his son. He taught her horseback riding, swimming and fencing. He taught her so much that she was more like a boy than a girl. One fall evening the father passed away. Isabella was left with only the old house, there was no money. Isabella decided to go to the city and look for work. She would have more chances as a boy, so she cut her hair and put on men’s clothing. In the city she saw a couple of esquires and introduced herself as Florian. Suddenly a black knight on a black horse came galloping towards them. He called the esquires to him, but they all ignored him. Florian got curious and asked: ‘Why do you act as if you don’t hear this knight?’ ‘He is the wizard of the Black Rock. Nobody wants to work for him because his castle is inhabited by demons,’ they answered. Florian knew that he had little choice. So he walked up to the wizard and offered to come along. After a long journey they arrived at the castle. Before they entered the castle the wizard said: ‘Boy, don’t let anything you hear or see scare you. Be confident that no spirit or power can hurt you. Be loyal and you shall never have a reason to regret coming here.’ Florian, who had always been brave, decided to never let his courage be shaken, and it didn’t. And so it happened, that Florian worked in loyal service of the wizard for several years. One day Florian decided that he wanted to see more of the world and told the wizard that he had to leave. ‘Alright,’ said the wizard, who had grown to respect Florian. ‘I shall give you three parting gifts. The first is a necklace with a golden charm in the shape of a bird. This will keep you safe from magic and will sing when you come close to danger. The second gift is a key with which you can open any door in the world. The third gift is a sphere. Put it on the ground and it will help you when you lose your way. Above all you can call me when you are in deadly danger. I shall come help you.’ Florian had to look for a new job and he found it at the royal couple of the Twelve Towers. They had a gorgeous and brave son, prince Florizel. The parents send their son Florizel to a king in hopes that he would fall in love with his daughter, princess Rosamond. Florizel asked Florian to join him and his company. In the meantime, Florian had fallen head over heels in love with Florizel. One morning, when the prince wanted to pick a beautiful flower, the little gold bird started to sing. Florian grabbed the flower and threw it away. ‘How rude!’, the company said. Shortly after the prince found a dagger on the road. Again the bird started singing. Before the prince could pick up the dagger, Florian snatched it from the ground and threw it in a ditch. Florian tried to explain that the flower and dagger were enchanted, but the prince was distracted by a beautiful garden with birds, butterflies and flowers. At that moment the golden bird started singing louder than it ever had. ‘Please, don’t go there,’ Florian begged. But the prince and his company were already near the garden. At that moment everybody turned into stone, except for Florian and Florizel. It was the wicked witch who was behind this. She wanted to kidnap the prince and couple him with her ugly daughter. The witch immediately saw that it was Florian’s little gold bird that was protecting them from her magic. So she decided to get rid of Florian by conjuring her castle and garden to the other side of the world. She spoke a spell and everything disappeared. Florian used the sphere to find his way to the castle. But it took one year before he reached the gate of the witches’ garden. During that year the witch had done everything she could to make prince Florizel marry her ugly daughter. But the prince persistently refused. That evening Florian was standing in front of the garden. Florizel was locked in the top of the highest tower under lock and key of twenty different doors. Florian took the key the wizard had given him and opened all the doors until he found Florizel. The prince was so relieved to see Florian! He had already managed to free himself from the chains he was bound with. It didn’t take long before the witch discovered the escape. She found the boys quickly. She was about to change them both into hares, but Florian quickly put the necklace with the bird around Florizel’s neck. He was protected from the spell, but Florian transformed into a hare. The witch then send hound dogs after him. The prince did what he could to protect the hare. Isabella called for the wizard to help her. The wizard came and defeated the witch. Isabella was changed back into her human form. The company came to live too. The witch had already decorated the castle for the wedding. ‘Too bad that princess Rosamond isn’t here,’ said the company, ‘then there would maybe be a wedding.’ ‘A wedding? No,’ said Florizel, ‘not until I find a woman who is as loyal as Florian.’’ ‘There already is.’ said the wizard and he touched Florian with his wand. There was Isabella in a beautiful dress. She was so beautiful that Florizel didn’t hesitate one second to ask her to marry him. Florizel’s parents were quickly fetched and so it happened that a wedding took place. Florizel and Isabella lived happily ever after.",
                  }),
                  s.jsx(ce, {
                    style: { textDecoration: "none" },
                    to: "/quiz5",
                    children: s.jsx("div", {
                      className: "button-container",
                      children: s.jsx("button", {
                        className: "start-quiz-button",
                        children: "Start Quiz",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          s.jsx("div", { className: "bot" }),
        ],
      }),
    }),
  bp = () =>
    s.jsx("div", {
      className: "page-container",
      children: s.jsxs("div", {
        className: "story-container",
        children: [
          s.jsxs("div", {
            className: "box-story",
            children: [
              s.jsx("h1", {
                className: "title",
                children: "SIR,I AM THE MURDERER…",
              }),
              s.jsx("div", {
                className: "content-container",
                children: s.jsxs("p", {
                  className: "author-info",
                  children: ["PUBLISHED BY SANDEEP SHARMA ", s.jsx("br", {})],
                }),
              }),
              s.jsxs("div", {
                className: "centered-content",
                children: [
                  s.jsx("p", {
                    className: "story-text",
                    children:
                      "“Sir, I am a murderer.” She was trembling while saying this. She was sitting in our police station, opposite to my table. She was there to surrender herself. I was in charge of the police station. She was a beautiful lady of about 22 or 23 years, had long hair which was maintained really nicely, wearing a pink shirt and dark blue jeans, and had sunglasses on her eyes. She was from a nice and rich family. “Who did you kill?” Well I asked her after taking a long pause because her first sentence was not really expected or if I talk frankly, I was lost in her beauty. “I have killed 3 people.” I was really surprised to hear that. A girl, so pretty, can kill 3 people and also commit it in front of police. The whole thing was a bit unusual for me. “I have killed my Gardner, my driver and ……..” She paused a bit and started to sob. “And my mother.” She started crying hard. I gave her water and she started to take a sip from that glass. When she controlled her emotions, she continued to talk. “Please I beg of you, please arrest me otherwise I will kill someone else also.” “Why did you kill them and why will you kill others? Mam………. What’s your name?” “Shilpa.” She was still sobbing. “Shilpa, why did you kill them?” “I don’t know. It just happened automatically.” “Shilpa, I am not getting it. And I cannot arrest you without any complaint and without seeing the body of the dead people you are talking about.” She was looking very tense to me. So I continued, “Shilpa, where are the bodies?” “I dug them in my garden.” She was not looking fake but what she was saying did not even look to be believed. I decided to go to her house. I took two constables also with me. When we reached her house she took us to her garden and told us the places where the bodies of the gardener and driver were dug. I commanded the constables to take the bodies out. “Where’s the body of your mother?” I asked Shilpa. “Inside the home.” I started to follow Shilpa. She took me inside the house and then stopped in front of a dark room. “Inside. My mother is lying inside.” She started to cry again. I slowly started to move inside the room. The room was so dark that it was difficult to see anything. I had one torch with me so I decided to turn that on. I searched the whole room but the room was empty. Then I saw one room which was closed. I opened that room. And got shocked to see that there were three bodies lying inside the room. Two men may be Shilpa’s gardener and driver and one old lady may be her mother. I was wondering why Shilpa told me that bodies are out there in the garden. “Ahhhhhh………” Someone stabbed me from behind. I turned around. I was shocked to see Shilpa standing with a knife in her right hand covered with blood of mine. “Why?” I asked her in a trembling voice. She came closer to me and stabbed me in my stomach and said, “Because, it’s fun.” I fell to the ground and she took my gun and rushed outside. I heard two fires. She killed my constables. I saw her last image standing in front of the mirror, combing her hair and singing songs………….",
                  }),
                  s.jsx(ce, {
                    style: { textDecoration: "none" },
                    to: "/quiz6",
                    children: s.jsx("div", {
                      className: "button-container",
                      children: s.jsx("button", {
                        className: "start-quiz-button",
                        children: "Start Quiz",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          s.jsx("div", { className: "bot" }),
        ],
      }),
    }),
  Bp = () =>
    s.jsx("div", {
      className: "page-container",
      children: s.jsxs("div", {
        className: "story-container",
        children: [
          s.jsxs("div", {
            className: "box-story",
            children: [
              s.jsx("h1", {
                className: "title",
                children: "A Jury of Her Peers",
              }),
              s.jsx("div", {
                className: "content-container",
                children: s.jsxs("p", {
                  className: "author-info",
                  children: ["By Susan Glaspell ", s.jsx("br", {})],
                }),
              }),
              s.jsxs("div", {
                className: "centered-content",
                children: [
                  s.jsx("p", {
                    className: "story-text",
                    children:
                      "This detective short story was adapted from Glaspell’s one-act play Trifles (1916). It is based on a murder story Susan Glaspell covered as a reporter. When Martha Hale opened the storm-door and got a cut of the north wind, she ran back for her big woolen scarf. As she hurriedly wound that round her head her eye made a scandalized sweep of her kitchen. It was no ordinary thing that called her away–it was probably further from ordinary than anything that had ever happened in Dickson County. But what her eye took in was that her kitchen was in no shape for leaving: her bread all ready for mixing, half the flour sifted and half unsifted. She hated to see things half done; but she had been at that when the team from town stopped to get Mr. Hale, and then the sheriff came running in to say his wife wished Mrs. Hale would come too–adding, with a grin, that he guessed she was getting scary and wanted another woman along. So she had dropped everything right where it was.",
                  }),
                  s.jsx(ce, {
                    style: { textDecoration: "none" },
                    to: "/quiz7",
                    children: s.jsx("div", {
                      className: "button-container",
                      children: s.jsx("button", {
                        className: "start-quiz-button",
                        children: "Start Quiz",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          s.jsx("div", { className: "bot" }),
        ],
      }),
    }),
  Wp = () =>
    s.jsx("div", {
      className: "page-container",
      children: s.jsxs("div", {
        className: "story-container",
        children: [
          s.jsxs("div", {
            className: "box-story",
            children: [
              s.jsx("h1", {
                className: "title",
                children: "NOT YET ACTIVATED",
              }),
              s.jsx("div", {
                className: "content-container",
                children: s.jsxs("p", {
                  className: "author-info",
                  children: ["By Aaron Morgans ", s.jsx("br", {})],
                }),
              }),
              s.jsxs("div", {
                className: "centered-content",
                children: [
                  s.jsx("p", {
                    className: "story-text",
                    children:
                      "I move through the forest, gliding through the trees and shrubs like a ghost. It is effortless to move this way, but it hasn’t always been. In a ravine ahead I see bushes weighed down with gooseberries. I spend a few minutes picking each bush clean and place the berries in a small leather bag. The shadows are growing longer. It’s time to go back. The barely noticeable deer trail will lead back to the camp. I begin to glide again, moving quickly but making no sound. The sun peeks through the foliage, disappearing and reappearing as I weave through the trees. The stillness of the forest is broken. A metallic clang on the path ahead echoes through the woods like a gunshot. Creaking and groaning noises fill the forest as bushes snap and small trees fall. The noise grows louder. I haven’t made a sound. How could it have found me? I scamper to the right side of the small path and find a huge stone lying there. I duck behind it and peer out of a small crack in the rock. The creaking and groaning grows louder still. I can see it now. I have seen it a few times before. It is jet black, about the size of a small bus. It moves along the deer trail in the same direction I had originally come. Its long legs snap through small trees and undergrowth as easily as if they were toothpicks. The metallic frame is mostly closed in, but on the sides there are two openings which are covered in a metal screen. These “ears” of the machine are known to be a marvel of technology, even in this world where technology rules all. It has been said that the ears can hear a whisper 20 miles away. While some still scoff at this idea, I don’t doubt it. At my last camp there were some who were careless. Because of them we were discovered. Everyone was sent fleeing in every direction like insects when a rock gets turned over. I haven’t seen anyone from my old camp since that day. On the day my old camp was destroyed, I followed the stream into the canyon walls until stumbling upon the small settlement where I now live. Eric greeted me soundlessly. We spoke that night, whispering as the wind rustled in the treetops. He told me that we may be the last group of natural humans on planet earth. Outside the camp, the few remaining in our species have their hardware implanted and activated. They move as one with the machines, thinking as they do. Their wills are intertwined with circuits and wires. I feel the scar on the back of my skull sometimes, an ugly reminder that I wasn’t always on the run fleeing to the remote areas of what used to be known as the western United States. The hardware was implanted when I was a child, but I don’t remember it being put in. In those early days I do remember hearing a child screaming in the night, my parent’s faces covered with worry and fear. A baby born in this time of war between man and machine. He also had a scar on the back of his skull. I was no longer only a child, I was also a sister. The terrible night came soon after that. We woke up to explosions rocking our apartment. Glass was shattering, distant screams and sirens could be heard in the streets down below. My parents gathered us up and brought us out of the building just before it collapsed. We ran along the street with hordes of screaming people. My mother had a tight grip on my hand, but then she was ripped away from me. I was lost in the swirling crowd. I have been on my own as I have grown older, traveling from camp to camp and moving further into the wilderness and away from the terrors of the city. My name is Miriam. I am a vagrant with no home, no family. A part of a remnant of humanity which is free to use their own minds, hardware intact but not yet activated. – The gleaner is gone now. I haven’t heard the tell-tale snapping and cracking for several minutes. My noiseless glide through the forest begins again. I don’t go straight back to the camp, but instead take a winding route, crossing over the stream several times. Descending from rock to rock on the steep, narrow path on the canyon wall, I can see the top of the cottonwood tree which is at the center of the small settlement. It stands alone in the clearing, surrounded by a grassy expanse which leads to the stream which cuts through the canyon on the other side. Though it is growing dark I can also see the cabins that are positioned around the tree. The walls are made of pine logs, covered at the top with a tangled mess of dead juniper branches. The cabins must not look unnatural to the eyes overhead. Eva greets me at the entrance to our little village, her gray hair rustles in the breeze as she signs her thanks for the provisions in my little bag. She is the oldest in the camp, but she is also the strongest in her own way, unyielding to the changing times around her. Eric stands beside her, I can tell that he is worried that I was out so late. Eric has always been like a father to me. Ever since the day that I first found my way into the canyon he has been willing to accept me and to teach me about how to survive. I was only a scared little girl then, but now as I have become older I have grown in my confidence. Of course, I’m careful. But not afraid, at least, not most of the time. As I have grown older Eric often asks for my opinion when he makes decisions for the good of the camp, but he does not always take me into his confidence. About a week ago he left the camp for three entire days. Where did he go? Where did he sleep? I could see these questions written on the faces of everyone. But we did not speak of it. Not even in a whisper. Eric has been a good leader. I go to my little cabin and I lie down on a mat as the canyon darkens. The evening meal is brought to me in a small wooden dish. It contains berries, nuts, roots and a small portion of dried meat. It is enough. In the night I hear the wind rustling in the leaves of the cottonwood tree. I find Eric sitting alone by the stream. I sit beside him and wait. As the wind picks up I begin to whisper. “I saw a gleaner today. It must have been following me while I gathered in the forest. Eric, it was almost inside the walls of the canyon. I’ve never seen one this close to camp before.” Eric listens as he looks out at the stream. When the wind begins again he leans toward me and whispers his response. “I’ve been traveling for miles, searching for a place to relocate. Strongholds are all around us. We are probably in the last place that is undetectable, and it will soon be discovered by them.” “So what do we do?” I ask. I don’t like his tone. It seems resigned. He is our leader. If he doesn’t have a plan we have no hope. He sighs. “It’s time that we consider speaking with them. We can’t live like this forever. “ “Giving ourselves up? Are you crazy?” My voice is now slightly more than a whisper. “What happened to surviving? You said we could make a stand if we wait longer.” Eric says nothing in response, he stares out at the water. I go on. “We need to have a meeting. Everyone needs to know what we are up against. We need to decide what we will do. Together.” The wind has died down again. We sit in silence for a few minutes. I can’t believe I am speaking to him like this, but what is he thinking? We are quite possibly the last unactivated humans on the planet. We must survive. We must resist at all costs. Eric finally looks at me. “You’re right. We will have a meeting tomorrow night if the conditions are good.” The hours creep by in the quiet stillness of the night. I think about waking Eva. Maybe she could speak with Eric. In the morning the camp is already bustling. Some have already left to hunt while others are washing clothes in the stream. Eva is working in the storehouse, preparing food for the day ahead. Where is Eric? I check his cabin and find that the door is open. Maybe he left earlier to hunt. I join Eva in the storehouse to help her with her work. She pauses as I enter the doorway but then continues, laying out small strips of meat on a screen as she cuts them. Her wrinkled face is furrowed as she concentrates. My hands become slimy and red, covered with blood. We place the frames in a sunny spot at the edge of the camp, propping them up on rocks. She gestures for me to follow her as we walk along the edge of the stream, farther away from the camp. We cross the stream on a fallen log and she leads me to a place where the water runs straight toward the canyon wall leaving a small peninsula. A bush is at the furthest point of this area and its branches hover above the water. Behind the bush there is a huge crack in the canyon wall a little less than two feet wide. Water runs out of the bottom of the crack over the roots of the bush and into the stream, making a trickling sound as it drips over the edge. Eva crouches down beside the stream in a place where we are out of view of the camp. She leans towards me and whispers. “Eric has been acting strange lately. I’m worried that he –” Her voice trails off as the trickling waterfall covers it. “We may need to make other plans.” “I spoke with Eric last night. He wants to hold a meeting after the evening meal. We could wait until after then.” Eva replies, “Yes, we will give him a chance to speak for himself. But if he doesn’t answer well then we need to come up with a solution on our own.” She turns and looks at me with an intense gaze. “ You need to be brave, Miriam. It will be hard to confront him.” She doesn’t know that I have already confronted him. His answer to me last night definitely wasn’t what she would want to hear. But if I reveal this it may tear the camp apart. We would lose the trust that we have worked so hard to build in the last several years. No one is willing to give themselves up willingly. Stubbornness and rebellion course through our veins. It unites us and links us together. Eric will have to answer tonight, but I will not speak for him. If he had turned me away on that day that I came wandering into camp I would surely be caught by now. I would be activated. The day creeps by slower than the night. It is evening now. Most have returned from hunting and foraging, Eva receives their findings with enthusiasm no matter how meager they are. But where is Eric? I bring the knives from the storehouse to the stream and kneel down to wash them. I hear a sharp crack at the edge of the forest. I stand, straining my eyes to see into the shadows of the trees. Then I see them. Three, maybe four gleaners are crawling at the edge of the forest, heading towards me, toward the camp. I quickly turn back to the camp and something immediately catches my eye beyond it on the other side of the clearing. A large tree is falling. In the distance I can see more shadows emerging from the forest on the other side of the clearing. We are surrounded. The only way out is the path up the rock wall, but surely we cannot all make it up in time. I begin to run back toward the camp. I haven’t spoken one word above a whisper in years. Now that it is time to warn the others my throat feels dry and constricted. My feet begin to move faster, pounding the sandy soil beneath me. I see the gleaners beyond continue their movement out of the forest, they are almost in the clearing now. A strength fills me as I continue to gain speed. “RUN!” My voice is unrecognizable to me as it pours out of my mouth and seems to shake the camp with its power. Eva comes out of the storehouse and begins running towards me. Some of the others come rushing out of their cabins and I see their eyes grow wide as the gleaners move in on both sides. They have emerged fully from the woods beyond. There are eight in total, their jet black frames moving at a steady pace, each with one red eye focused toward us as they close the gap in the clearing. Everyone is frozen for a moment. Some remember the little path up the canyon wall and begin to run toward it. Over the top of the canyon I see something flying low with lights shining underneath. It moves with great speed as it lowers itself into the walls. There is a streak of light and a deafening roar makes us all fall to the ground. The cottonwood tree explodes. Several of the cabins instantly catch fire with flames licking up the sides. The helicopter hovers over us as we scatter. Those that were headed toward the path on the canyon wall are cut off by a gleaner. Eva and I are running toward the little peninsula where we spoke yesterday. We scramble over the fallen log and Eva points to the crack in the canyon wall. “GO!” she shrieks. I make a quick glance around us. A gleaner moves toward our location, its red eye pointing at us. A light from the helicopter shines down, spotlighting our location as if we are on stage. I squeeze myself into the crack in the canyon wall, straining as I move forward. The walls press against me so tightly that I cannot take a full breath. I can hear Eva scrambling in behind me. A blinding red light beams into the crevice, illuminating our bodies as we push further into the space ahead. Eva screams. I look back and see her convulsing figure, her eyes looking at me in desperation. Then she stops struggling. A white light shines from behind her eyes as she looks toward me with a blank expression. She begins to move out in the same direction we came. I grab her arm but she pushes me away with seemingly supernatural strength. I try again to pull her deeper into the cavern but this time her hand reaches for my throat. She tightens her grip as I try to peel her fingers off of my neck. She pulls me closer to her, closer to the opening. The blank expression still covers her face. The white light from behind her eyes illuminates the walls. “Eva!” I croak. “Don’t do this!” The light shining from behind her eyes seems to flicker. A hint of recognition washes over her face. Her grip loosens just enough for me to pull her hand away. I begin to push my way deeper, still looking back. The light behind her eyes intensifies and she screams again. I keep straining, pushing my way deeper into the crevice. The floor begins to rise higher. Sharp rocks cut into my legs. I feel warm blood running down to my feet which slip on the wet, cutting edges of the uneven surface below. Every once in a while I smell smoke from the burning camp which wafts its way into the walls. After almost an hour of struggling forward, the crevice opens up a bit. Cold water continually runs over my feet as I move up a small, trickling stream toward its source. I see a faint illumination of the darkening sky above as I make my way further upwards, moving from rock to rock in the blackness below. I can see the sky not only above me, but also ahead. Soon I am in the open air, lying face down on the ground panting for breath. The helicopter is still hovering in the distance. Tears stream down my face as I breathe with sharp, uneven breaths, my body shaking from shock and exhaustion. After a few minutes I struggle to my feet. Pain shoots through my legs as I put weight through them, moving toward a stretch of forest ahead of me. I begin to walk, limping at first but then gaining speed. The branches of the trees hang over me like a thick blanket. The night breeze pushes me onwards as I begin to glide through the forest, making my way over logs and through bushes. Confidence begins to flow through me as my legs grow stronger with each quiet stride. There must be others out in this wilderness. There must be more who will stand up to the machines instead of cowering and betraying as Eric did. I am a survivor. My hardware is intact but I am not yet activated. I will resist. I won’t give in without a fight.",
                  }),
                  s.jsx(ce, {
                    style: { textDecoration: "none" },
                    to: "/quiz8",
                    children: s.jsx("div", {
                      className: "button-container",
                      children: s.jsx("button", {
                        className: "start-quiz-button",
                        children: "Start Quiz",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          s.jsx("div", { className: "bot" }),
        ],
      }),
    }),
  Hp = () =>
    s.jsx("div", {
      className: "page-container",
      children: s.jsxs("div", {
        className: "story-container",
        children: [
          s.jsxs("div", {
            className: "box-story",
            children: [
              s.jsx("h1", {
                className: "title",
                children: "The Tell-Tale Heart",
              }),
              s.jsx("div", {
                className: "content-container",
                children: s.jsxs("p", {
                  className: "author-info",
                  children: [
                    "By Edgar Allan Poe ",
                    s.jsx("br", {}),
                    "Written by Edgar Allan Poe January,1843",
                  ],
                }),
              }),
              s.jsxs("div", {
                className: "centered-content",
                children: [
                  s.jsxs("p", {
                    className: "story-text",
                    children: [
                      "It is a psychological thriller that delves into themes of guilt, paranoia, and the complexities of the human mind. ",
                      s.jsx("br", {}),
                      " TRUE! --nervous --very, very dreadfully nervous I had been and am; but why will you say that I am mad? The disease had sharpened my senses --not destroyed --not dulled them. Above all was the sense of hearing acute. I heard all things in the heaven and in the earth. I heard many things in hell. How, then, am I mad? Hearken! and observe how healthily --how calmly I can tell you the whole story. Object there was none. Passion there was none. I loved the old man. He had never wronged me. He had never given me insult. It was his eye! yes, it was this! I made up my mind to take his life to rid myself of the eye forever. Every night, about midnight, I opened his door, slowly. I moved my head in, shining a lantern on his eye. For seven nights, I did this. On the eighth, he heard me. His fears grew. I opened the lantern, the light fell upon his eye. I heard the beating of his heart, louder and louder. I killed him and hid the body beneath the floorboards. The police came, I welcomed them. They chatted, but the beating of the heart grew louder. I confessed, revealing the corpse's location. They tore up the planks, revealing the beating of the hideous heart.",
                    ],
                  }),
                  s.jsx(ce, {
                    style: { textDecoration: "none" },
                    to: "/quiz9",
                    children: s.jsx("div", {
                      className: "button-container",
                      children: s.jsx("button", {
                        className: "start-quiz-button",
                        children: "Start Quiz",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          s.jsx("div", { className: "bot" }),
        ],
      }),
    }),
  Up = () =>
    s.jsx("div", {
      className: "page-container",
      children: s.jsxs("div", {
        className: "story-container",
        children: [
          s.jsxs("div", {
            className: "box-story",
            children: [
              s.jsx("h1", {
                className: "title",
                children: "Within a blink on an eye",
              }),
              s.jsx("div", {
                className: "content-container",
                children: s.jsxs("p", {
                  className: "author-info",
                  children: [
                    "by Bhoomi Khanvilkar. ",
                    s.jsx("br", {}),
                    "Written by Missyshears, February 13, 2018",
                  ],
                }),
              }),
              s.jsxs("div", {
                className: "centered-content",
                children: [
                  s.jsx("p", {
                    className: "story-text",
                    children:
                      "As Jack was walking down the halls of his new office he was getting tons of mixed feelings. He was confident yet nervous maybe because of it his third transfer in the last two years. Everything he was transferred he regretted taking the job of being a detective. It caused him many difficulties like put his life in jeopardy. He was just weary of doing it. Until his seniors handed him a case that was almost impossible to solve, he was in a dilemma as he was going to his office to tell his office that he was going to quit his job but instead it backfired. He was perplexed about the decision, however, later a thought appeared in his mind that his boss must have handed him the case maybe because he thinks superior of him. He accepted the case but he wasn’t ready to face its consequences. The case was about a thief who became famous over a period of five days. He would steal extraordinary things like popular painting and valuable jewelry and replace them with artificial ones and while leaving the thief always left a note saying, “Thanks for the valuables, too bad you won’t see them again.” Considering his attitude and his way of stealing things people Bagan to call him ‘The Jackal’. Police had tried for months to catch but all their attempts were a failure. So the case was handed over to Jack’s agency. Jack spent hours and hours on the case. His days were busy, his nights ruined and after a tremendous amount of diligence, he found a clue that would bring him one step closer to catching the Jackal. While he was researching thought the case and going through the files and photos of the sites where the theft had taken place, he found a that Jackal didn’t realize there was a hidden camera at one of the houses and it caught the tattoo the shape of a bird on his left wrist. “Jackpot!!” exclaimed Jack. Eventually, though one of his informers Jack discovered Jackal’s address and left straight for his home before he escaped. Fortunately, Jackal was still present before Jack and his team had arrived. They arrested him but Jack knew Jackal wasn’t the kind of guy or thief who would just live quietly in jail for the rest of their lives. After a few weeks, as Jack feared Jackal had escaped and he left a message for Jack written on the rusty walls of the prison cell. It said, “Good luck finding me Detective Jack.” It left everyone bewildered and everyone had finally established that Jackal was a dangerous guy and can’t be found easily. They were disheartened as they had to carry out a whole new investigation to find him again. Everything ended within a blink of an eye.",
                  }),
                  s.jsx(ce, {
                    style: { textDecoration: "none" },
                    to: "/quiz10",
                    children: s.jsx("div", {
                      className: "button-container",
                      children: s.jsx("button", {
                        className: "start-quiz-button",
                        children: "Start Quiz",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          s.jsx("div", { className: "bot" }),
        ],
      }),
    }),
  jt = [
    {
      question:
        "Describe the circumstances that initially brought the peculiar species Haploteuthis ferox to the attention of scientists.",
      option1: "A) A research expedition led by marine biologists",
      option2: "B) A half-digested tentacle obtained near the Azores",
      option3: "C) A chance encounter during a documentary filming",
      option4: "D) A specimen found in a laboratory aquarium",
      ans: 2,
    },
    {
      question:
        "How did the Prince of Monaco make a significant contribution to the understanding of deep-sea cephalopods in 1895?",
      option1: "A) Through a series of fictional writings",
      option2: "B) By funding a deep-sea photography project",
      option3: "C) Via a chance discovery during a whaling expedition",
      option4: "D) By organizing a scientific expedition",
      ans: 3,
    },
    {
      question:
        "What role did a cachalot play in the events leading to the discovery of new forms of cephalopods in the Prince of Monaco's expedition?",
      option1: "A) It acted as a guide for the expedition team",
      option2: "B) It attacked the expedition's ship",
      option3: "C) Its death led to the discovery of new cephalopods",
      option4: "D) It swallowed a valuable scientific instrument",
      ans: 3,
    },
    {
      question:
        "What challenges and uncertainties are highlighted in the story regarding the study of deep-sea cephalopods?",
      option1: "A) The abundance of available data",
      option2: "B) The ease of access to deep-sea environments",
      option3: "C) The complexity and lack of knowledge about cephalopods",
      option4:
        "D) The straightforward and predictable nature of cephalopod behaviors",
      ans: 3,
    },
    {
      question:
        "Explain the significance of Mr. Jennings' discovery near Land’s End in 1896 and its contribution to the understanding of Haploteuthis ferox.",
      option1: "A) It disproved the existence of Haploteuthis ferox",
      option2: "B) It provided a detailed description of the species' behavior",
      option3: "C) It led to the formation of a new scientific theory",
      option4:
        "D) It contributed to the initial generic classification of Haploteuthis ferox",
      ans: 4,
    },
  ],
  $p = () => {
    const [e, t] = g.useState(0),
      [n, r] = g.useState(jt[e]),
      [o, i] = g.useState(!1),
      [l, a] = g.useState(0),
      [u, d] = g.useState(!1),
      [m, v] = g.useState(10),
      [y, w] = g.useState(null),
      k = g.useRef(null),
      x = g.useRef(null),
      j = g.useRef(null),
      p = g.useRef(null),
      c = [k, x, j, p];
    g.useEffect(() => {
      v(10),
        e > 0 &&
          e < jt.length &&
          (r(jt[e]),
          i(!1),
          c.forEach((h) => {
            h.current.classList.remove("incorrect"),
              h.current.classList.remove("correct");
          }));
    }, [e]),
      g.useEffect(() => {
        const h = setInterval(() => {
          m > 0 && !o ? v((C) => C - 1) : m === 0 && !o && S();
        }, 1e3);
        return () => clearInterval(h);
      }, [m, o]);
    const f = (h, C) => {
        o ||
          (n.ans === C
            ? (h.target.classList.add("correct"),
              i(!0),
              a((P) => P + 1),
              w("Correct!"))
            : (h.target.classList.add("incorrect"),
              c[n.ans - 1].current.classList.add("correct"),
              i(!0),
              w("Incorrect!")));
      },
      S = () => {
        i(!0),
          c[n.ans - 1].current.classList.add("correct"),
          w("Time's up! The correct answer is:");
      },
      I = () => {
        o && (e === jt.length - 1 ? d(!0) : (t((h) => h + 1), w(null)));
      },
      N = () => {
        t(0), r(jt[0]), a(0), i(!1), d(!1), w(null);
      };
    return s.jsxs("div", {
      className: "container",
      children: [
        s.jsx("h1", { children: "Ka antok" }),
        s.jsx("hr", {}),
        u
          ? s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", jt.length],
                }),
                s.jsx("button", { onClick: N, children: "Reset" }),
              ],
            })
          : s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", { children: [e + 1, ". ", n.question] }),
                s.jsx("div", {
                  className: "anscover",
                  children: s.jsxs("ul", {
                    children: [
                      s.jsx("li", {
                        ref: k,
                        onClick: (h) => f(h, 1),
                        children: n.option1,
                      }),
                      s.jsx("li", {
                        ref: x,
                        onClick: (h) => f(h, 2),
                        children: n.option2,
                      }),
                      s.jsx("li", {
                        ref: j,
                        onClick: (h) => f(h, 3),
                        children: n.option3,
                      }),
                      s.jsx("li", {
                        ref: p,
                        onClick: (h) => f(h, 4),
                        children: n.option4,
                      }),
                    ],
                  }),
                }),
                s.jsx("div", { className: "selected-option", children: y }),
                s.jsx("button", { onClick: I, disabled: !o, children: "Next" }),
                s.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", jt.length, " questions"],
                }),
                s.jsxs("div", {
                  className: "timer",
                  children: ["Time Left: ", m],
                }),
              ],
            }),
      ],
    });
  },
  Ct = [
    {
      question:
        "What does the word 'trudged' mean in the context of the passage?",
      option1: "A) Walked quickly and lightly",
      option2: "B) Walked slowly and heavily",
      option3: "C) Ran with urgency",
      option4: "D) Stumbled over obstacles",
      ans: 2,
    },
    {
      question:
        "How would you describe the man's feelings towards the extreme cold weather?",
      option1: "A) Comfortable",
      option2: "B) Excited",
      option3: "C) Uneasy",
      option4: "D) Indifferent",
      ans: 3,
    },
    {
      question:
        "What does the word 'brutal' suggest about the environment the man is in?",
      option1: "A) Pleasant",
      option2: "B) Severe and harsh",
      option3: "C) Inviting",
      option4: "D) Welcoming",
      ans: 2,
    },
    {
      question: "What does the man do to thaw his frozen limbs?",
      option1: "A) Rubs them vigorously with snow",
      option2: "B) Hits his hands against his legs",
      option3: "C) Ignores the cold and continues walking",
      option4: "D) Takes off his boots and socks",
      ans: 2,
    },
    {
      question:
        "Which word best describes the man's attitude towards the old men's advice about traveling alone in the Yukon?",
      option1: "A) Dismissive",
      option2: "B) Respectful",
      option3: "C) Arrogant",
      option4: "D) Ambivalent",
      ans: 1,
    },
  ],
  qp = () => {
    const [e, t] = g.useState(0),
      [n, r] = g.useState(Ct[e]),
      [o, i] = g.useState(!1),
      [l, a] = g.useState(0),
      [u, d] = g.useState(!1),
      [m, v] = g.useState(10),
      [y, w] = g.useState(null),
      k = g.useRef(null),
      x = g.useRef(null),
      j = g.useRef(null),
      p = g.useRef(null),
      c = [k, x, j, p];
    g.useEffect(() => {
      v(10),
        e > 0 &&
          e < Ct.length &&
          (r(Ct[e]),
          i(!1),
          c.forEach((h) => {
            h.current.classList.remove("incorrect"),
              h.current.classList.remove("correct");
          }));
    }, [e]),
      g.useEffect(() => {
        const h = setInterval(() => {
          m > 0 && !o ? v((C) => C - 1) : m === 0 && !o && S();
        }, 1e3);
        return () => clearInterval(h);
      }, [m, o]);
    const f = (h, C) => {
        o ||
          (n.ans === C
            ? (h.target.classList.add("correct"),
              i(!0),
              a((P) => P + 1),
              w("Correct!"))
            : (h.target.classList.add("incorrect"),
              c[n.ans - 1].current.classList.add("correct"),
              i(!0),
              w("Incorrect!")));
      },
      S = () => {
        i(!0),
          c[n.ans - 1].current.classList.add("correct"),
          w("Time's up! The correct answer is:");
      },
      I = () => {
        o && (e === Ct.length - 1 ? d(!0) : (t((h) => h + 1), w(null)));
      },
      N = () => {
        t(0), r(Ct[0]), a(0), i(!1), d(!1), w(null);
      };
    return s.jsxs("div", {
      className: "container",
      children: [
        s.jsx("h1", { children: "Ka antok" }),
        s.jsx("hr", {}),
        u
          ? s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", Ct.length],
                }),
                s.jsx("button", { onClick: N, children: "Reset" }),
              ],
            })
          : s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", { children: [e + 1, ". ", n.question] }),
                s.jsx("div", {
                  className: "anscover",
                  children: s.jsxs("ul", {
                    children: [
                      s.jsx("li", {
                        ref: k,
                        onClick: (h) => f(h, 1),
                        children: n.option1,
                      }),
                      s.jsx("li", {
                        ref: x,
                        onClick: (h) => f(h, 2),
                        children: n.option2,
                      }),
                      s.jsx("li", {
                        ref: j,
                        onClick: (h) => f(h, 3),
                        children: n.option3,
                      }),
                      s.jsx("li", {
                        ref: p,
                        onClick: (h) => f(h, 4),
                        children: n.option4,
                      }),
                    ],
                  }),
                }),
                s.jsx("div", { className: "selected-option", children: y }),
                s.jsx("button", { onClick: I, disabled: !o, children: "Next" }),
                s.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", Ct.length, " questions"],
                }),
                s.jsxs("div", {
                  className: "timer",
                  children: ["Time Left: ", m],
                }),
              ],
            }),
      ],
    });
  },
  Et = [
    {
      question:
        "How does the protagonist's decision to inform the Commander about the change in wind direction impact the story?",
      option1: "A) It leads to the success of their mission.",
      option2: "B) It results in the destruction of their camp.",
      option3: "C) It causes tension among the rebels.",
      option4: "D) It highlights the protagonist's loyalty to the cause.",
      ans: 3,
    },
    {
      question:
        "How does the protagonist's past experiences influence her decision-making in the story?",
      option1: "A) She is driven by a desire for vengeance.",
      option2: "B) She is guided by a sense of duty to her comrades.",
      option3: "C) She is haunted by memories of loss and betrayal.",
      option4: "D) She is determined to prove her worth to the Commander.",
      ans: 3,
    },
    {
      question:
        "Describe the protagonist's emotional state when she realizes the wind has shifted against them.",
      option1: "A) Fearful and panicked.",
      option2: "B) Confident and determined.",
      option3: "C) Angry and defiant.",
      option4: "D) Resigned and apathetic.",
      ans: 1,
    },
    {
      question:
        "In what way does the protagonist's perspective on rebellion change throughout the story?",
      option1: "A) She becomes more disillusioned with the cause.",
      option2: "B) She grows more determined to overthrow the rulers.",
      option3: "C) She becomes conflicted about the morality of their actions.",
      option4: "D) She grows indifferent to the outcome of the conflict.",
      ans: 3,
    },
    {
      question:
        "Discuss the significance of the final sentence, 'Just then, the wind shifted.'",
      option1: "A) It suggests a turning point in the protagonist's fate.",
      option2: "B) It foreshadows further conflict and uncertainty.",
      option3:
        "C) It symbolizes the cyclical nature of rebellion and oppression.",
      option4: "D) It represents the protagonist's renewed sense of hope.",
      ans: 2,
    },
  ],
  Qp = () => {
    const [e, t] = g.useState(0),
      [n, r] = g.useState(Et[e]),
      [o, i] = g.useState(!1),
      [l, a] = g.useState(0),
      [u, d] = g.useState(!1),
      [m, v] = g.useState(10),
      [y, w] = g.useState(null),
      k = g.useRef(null),
      x = g.useRef(null),
      j = g.useRef(null),
      p = g.useRef(null),
      c = [k, x, j, p];
    g.useEffect(() => {
      v(10),
        e > 0 &&
          e < Et.length &&
          (r(Et[e]),
          i(!1),
          c.forEach((h) => {
            h.current.classList.remove("incorrect"),
              h.current.classList.remove("correct");
          }));
    }, [e]),
      g.useEffect(() => {
        const h = setInterval(() => {
          m > 0 && !o ? v((C) => C - 1) : m === 0 && !o && S();
        }, 1e3);
        return () => clearInterval(h);
      }, [m, o]);
    const f = (h, C) => {
        o ||
          (n.ans === C
            ? (h.target.classList.add("correct"),
              i(!0),
              a((P) => P + 1),
              w("Correct!"))
            : (h.target.classList.add("incorrect"),
              c[n.ans - 1].current.classList.add("correct"),
              i(!0),
              w("Incorrect!")));
      },
      S = () => {
        i(!0),
          c[n.ans - 1].current.classList.add("correct"),
          w("Time's up! The correct answer is:");
      },
      I = () => {
        o && (e === Et.length - 1 ? d(!0) : (t((h) => h + 1), w(null)));
      },
      N = () => {
        t(0), r(Et[0]), a(0), i(!1), d(!1), w(null);
      };
    return s.jsxs("div", {
      className: "container",
      children: [
        s.jsx("h1", { children: "Ka antok" }),
        s.jsx("hr", {}),
        u
          ? s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", Et.length],
                }),
                s.jsx("button", { onClick: N, children: "Reset" }),
              ],
            })
          : s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", { children: [e + 1, ". ", n.question] }),
                s.jsx("div", {
                  className: "anscover",
                  children: s.jsxs("ul", {
                    children: [
                      s.jsx("li", {
                        ref: k,
                        onClick: (h) => f(h, 1),
                        children: n.option1,
                      }),
                      s.jsx("li", {
                        ref: x,
                        onClick: (h) => f(h, 2),
                        children: n.option2,
                      }),
                      s.jsx("li", {
                        ref: j,
                        onClick: (h) => f(h, 3),
                        children: n.option3,
                      }),
                      s.jsx("li", {
                        ref: p,
                        onClick: (h) => f(h, 4),
                        children: n.option4,
                      }),
                    ],
                  }),
                }),
                s.jsx("div", { className: "selected-option", children: y }),
                s.jsx("button", { onClick: I, disabled: !o, children: "Next" }),
                s.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", Et.length, " questions"],
                }),
                s.jsxs("div", {
                  className: "timer",
                  children: ["Time Left: ", m],
                }),
              ],
            }),
      ],
    });
  },
  It = [
    {
      question: "What character trait is most prominent in George?",
      option1: "A) Laziness",
      option2: "B) Anger",
      option3: "C) Curiosity",
      option4: "D) Fear",
      ans: 3,
    },
    {
      question:
        "What caught George's attention in the house on the morning of the adventure?",
      option1: "A) A shiny red balloon",
      option2: "B) A yellow hat",
      option3: "C) A chirping bird",
      option4: "D) A fresh loaf of bread",
      ans: 1,
    },
    {
      question: "Where did George find himself while chasing the balloon?",
      option1: "A) A park with giggling children",
      option2: "B) A fragrant bakery",
      option3: "C) A bustling train station",
      option4: "D) All of the above",
      ans: 4,
    },
    {
      question:
        "How did George feel when he realized he had ventured far from home?",
      option1: "A) Excited",
      option2: "B) Scared",
      option3: "C) Lonely",
      option4: "D) Angry",
      ans: 3,
    },
    {
      question: "Who found George when he was feeling lonely?",
      option1: "A) The Man with the Yellow Hat",
      option2: "B) A friendly bird",
      option3: "C) Another monkey",
      option4: "D) The balloon itself",
      ans: 1,
    },
  ],
  Vp = () => {
    const [e, t] = g.useState(0),
      [n, r] = g.useState(It[e]),
      [o, i] = g.useState(!1),
      [l, a] = g.useState(0),
      [u, d] = g.useState(!1),
      [m, v] = g.useState(10),
      [y, w] = g.useState(null),
      k = g.useRef(null),
      x = g.useRef(null),
      j = g.useRef(null),
      p = g.useRef(null),
      c = [k, x, j, p];
    g.useEffect(() => {
      v(10),
        e > 0 &&
          e < It.length &&
          (r(It[e]),
          i(!1),
          c.forEach((h) => {
            h.current.classList.remove("incorrect"),
              h.current.classList.remove("correct");
          }));
    }, [e]),
      g.useEffect(() => {
        const h = setInterval(() => {
          m > 0 && !o ? v((C) => C - 1) : m === 0 && !o && S();
        }, 1e3);
        return () => clearInterval(h);
      }, [m, o]);
    const f = (h, C) => {
        o ||
          (n.ans === C
            ? (h.target.classList.add("correct"),
              i(!0),
              a((P) => P + 1),
              w("Correct!"))
            : (h.target.classList.add("incorrect"),
              c[n.ans - 1].current.classList.add("correct"),
              i(!0),
              w("Incorrect!")));
      },
      S = () => {
        i(!0),
          c[n.ans - 1].current.classList.add("correct"),
          w("Time's up! The correct answer is:");
      },
      I = () => {
        o && (e === It.length - 1 ? d(!0) : (t((h) => h + 1), w(null)));
      },
      N = () => {
        t(0), r(It[0]), a(0), i(!1), d(!1), w(null);
      };
    return s.jsxs("div", {
      className: "container",
      children: [
        s.jsx("h1", { children: "Ka antok" }),
        s.jsx("hr", {}),
        u
          ? s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", It.length],
                }),
                s.jsx("button", { onClick: N, children: "Reset" }),
              ],
            })
          : s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", { children: [e + 1, ". ", n.question] }),
                s.jsx("div", {
                  className: "anscover",
                  children: s.jsxs("ul", {
                    children: [
                      s.jsx("li", {
                        ref: k,
                        onClick: (h) => f(h, 1),
                        children: n.option1,
                      }),
                      s.jsx("li", {
                        ref: x,
                        onClick: (h) => f(h, 2),
                        children: n.option2,
                      }),
                      s.jsx("li", {
                        ref: j,
                        onClick: (h) => f(h, 3),
                        children: n.option3,
                      }),
                      s.jsx("li", {
                        ref: p,
                        onClick: (h) => f(h, 4),
                        children: n.option4,
                      }),
                    ],
                  }),
                }),
                s.jsx("div", { className: "selected-option", children: y }),
                s.jsx("button", { onClick: I, disabled: !o, children: "Next" }),
                s.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", It.length, " questions"],
                }),
                s.jsxs("div", {
                  className: "timer",
                  children: ["Time Left: ", m],
                }),
              ],
            }),
      ],
    });
  },
  Nt = [
    {
      question: "What are 3 gifts that the wizard gave to Florian?",
      option1: "A) Gold, necklace, diamond",
      option2: "B) Golden charm in the shape of bird, key, sphere",
      option3: "C) Golden armor, sword, money",
      option4: "D) Horse, sphere, key",
      ans: 2,
    },
    {
      question:
        "What is the name of the king's son that has been trying to fall in love with Florizel?",
      option1: "A) Princess Rosamond",
      option2: "B) Princess Florian",
      option3: "C) Princess florizel",
      option4: "D) Princess Rose",
      ans: 1,
    },
    {
      question: "At that moment, everybody turned into stone, except?",
      option1: "A) The Guard",
      option2: "B) The Witch",
      option3: "C) Florian and florizel",
      option4: "D) The king",
      ans: 3,
    },
    {
      question:
        "How many years did Florian take to reach the gate of the witches' garden?",
      option1: "A) Three years",
      option2: "B) One year",
      option3: "C) Two years",
      option4: "D) Four years",
      ans: 2,
    },
    {
      question: "Who will be marrying Florizel?",
      option1: "A) Princess Rosamond",
      option2: "B) Princess ugly witch",
      option3: "C) Wizard",
      option4: "D) Isabella",
      ans: 4,
    },
  ],
  Gp = () => {
    const [e, t] = g.useState(0),
      [n, r] = g.useState(Nt[e]),
      [o, i] = g.useState(!1),
      [l, a] = g.useState(0),
      [u, d] = g.useState(!1),
      [m, v] = g.useState(10),
      [y, w] = g.useState(null),
      k = g.useRef(null),
      x = g.useRef(null),
      j = g.useRef(null),
      p = g.useRef(null),
      c = [k, x, j, p];
    g.useEffect(() => {
      v(10),
        e > 0 &&
          e < Nt.length &&
          (r(Nt[e]),
          i(!1),
          c.forEach((h) => {
            h.current.classList.remove("incorrect"),
              h.current.classList.remove("correct");
          }));
    }, [e]),
      g.useEffect(() => {
        const h = setInterval(() => {
          m > 0 && !o ? v((C) => C - 1) : m === 0 && !o && S();
        }, 1e3);
        return () => clearInterval(h);
      }, [m, o]);
    const f = (h, C) => {
        o ||
          (n.ans === C
            ? (h.target.classList.add("correct"),
              i(!0),
              a((P) => P + 1),
              w("Correct!"))
            : (h.target.classList.add("incorrect"),
              c[n.ans - 1].current.classList.add("correct"),
              i(!0),
              w("Incorrect!")));
      },
      S = () => {
        i(!0),
          c[n.ans - 1].current.classList.add("correct"),
          w("Time's up! The correct answer is:");
      },
      I = () => {
        o && (e === Nt.length - 1 ? d(!0) : (t((h) => h + 1), w(null)));
      },
      N = () => {
        t(0), r(Nt[0]), a(0), i(!1), d(!1), w(null);
      };
    return s.jsxs("div", {
      className: "container",
      children: [
        s.jsx("h1", { children: "Ka antok" }),
        s.jsx("hr", {}),
        u
          ? s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", Nt.length],
                }),
                s.jsx("button", { onClick: N, children: "Reset" }),
              ],
            })
          : s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", { children: [e + 1, ". ", n.question] }),
                s.jsx("div", {
                  className: "anscover",
                  children: s.jsxs("ul", {
                    children: [
                      s.jsx("li", {
                        ref: k,
                        onClick: (h) => f(h, 1),
                        children: n.option1,
                      }),
                      s.jsx("li", {
                        ref: x,
                        onClick: (h) => f(h, 2),
                        children: n.option2,
                      }),
                      s.jsx("li", {
                        ref: j,
                        onClick: (h) => f(h, 3),
                        children: n.option3,
                      }),
                      s.jsx("li", {
                        ref: p,
                        onClick: (h) => f(h, 4),
                        children: n.option4,
                      }),
                    ],
                  }),
                }),
                s.jsx("div", { className: "selected-option", children: y }),
                s.jsx("button", { onClick: I, disabled: !o, children: "Next" }),
                s.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", Nt.length, " questions"],
                }),
                s.jsxs("div", {
                  className: "timer",
                  children: ["Time Left: ", m],
                }),
              ],
            }),
      ],
    });
  },
  Tt = [
    {
      question:
        "What was the officer's initial reaction to the woman's confession?",
      option1: "A) Disbelief",
      option2: "B) Fear",
      option3: "C) Anger",
      option4: "D) Sympathy",
      ans: 1,
    },
    {
      question: "Who did the woman claim to have killed?",
      option1: "A) Her gardener, her driver, and her mother",
      option2: "B) Her father, her brother, and her sister",
      option3: "C) Her teacher, her neighbor, and her friend",
      option4: "D) Her boss, her coworker, and her client",
      ans: 1,
    },
    {
      question:
        "Where did the woman claim to have buried the bodies of the gardener and the driver?",
      option1: "A) In the basement",
      option2: "B) In her garden",
      option3: "C) In the forest",
      option4: "D) In the local graveyard",
      ans: 2,
    },
    {
      question:
        "What happened when the officer followed the woman into the house?",
      option1: "A) He found the bodies in the garden",
      option2: "B) He was stabbed by the woman",
      option3: "C) He found the woman's mother alive",
      option4: "D) He arrested the woman",
      ans: 2,
    },
    {
      question: "What was the woman doing when the officer saw her last?",
      option1: "A) Singing songs and combing her hair",
      option2: "B) Crying and apologizing for her actions",
      option3: "C) Talking to herself in a mirror",
      option4: "D) Laughing uncontrollably",
      ans: 1,
    },
  ],
  Kp = () => {
    const [e, t] = g.useState(0),
      [n, r] = g.useState(Tt[e]),
      [o, i] = g.useState(!1),
      [l, a] = g.useState(0),
      [u, d] = g.useState(!1),
      [m, v] = g.useState(10),
      [y, w] = g.useState(null),
      k = g.useRef(null),
      x = g.useRef(null),
      j = g.useRef(null),
      p = g.useRef(null),
      c = [k, x, j, p];
    g.useEffect(() => {
      v(10),
        e > 0 &&
          e < Tt.length &&
          (r(Tt[e]),
          i(!1),
          c.forEach((h) => {
            h.current.classList.remove("incorrect"),
              h.current.classList.remove("correct");
          }));
    }, [e]),
      g.useEffect(() => {
        const h = setInterval(() => {
          m > 0 && !o ? v((C) => C - 1) : m === 0 && !o && S();
        }, 1e3);
        return () => clearInterval(h);
      }, [m, o]);
    const f = (h, C) => {
        o ||
          (n.ans === C
            ? (h.target.classList.add("correct"),
              i(!0),
              a((P) => P + 1),
              w("Correct!"))
            : (h.target.classList.add("incorrect"),
              c[n.ans - 1].current.classList.add("correct"),
              i(!0),
              w("Incorrect!")));
      },
      S = () => {
        i(!0),
          c[n.ans - 1].current.classList.add("correct"),
          w("Time's up! The correct answer is:");
      },
      I = () => {
        o && (e === Tt.length - 1 ? d(!0) : (t((h) => h + 1), w(null)));
      },
      N = () => {
        t(0), r(Tt[0]), a(0), i(!1), d(!1), w(null);
      };
    return s.jsxs("div", {
      className: "container",
      children: [
        s.jsx("h1", { children: "Ka antok" }),
        s.jsx("hr", {}),
        u
          ? s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", Tt.length],
                }),
                s.jsx("button", { onClick: N, children: "Reset" }),
              ],
            })
          : s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", { children: [e + 1, ". ", n.question] }),
                s.jsx("div", {
                  className: "anscover",
                  children: s.jsxs("ul", {
                    children: [
                      s.jsx("li", {
                        ref: k,
                        onClick: (h) => f(h, 1),
                        children: n.option1,
                      }),
                      s.jsx("li", {
                        ref: x,
                        onClick: (h) => f(h, 2),
                        children: n.option2,
                      }),
                      s.jsx("li", {
                        ref: j,
                        onClick: (h) => f(h, 3),
                        children: n.option3,
                      }),
                      s.jsx("li", {
                        ref: p,
                        onClick: (h) => f(h, 4),
                        children: n.option4,
                      }),
                    ],
                  }),
                }),
                s.jsx("div", { className: "selected-option", children: y }),
                s.jsx("button", { onClick: I, disabled: !o, children: "Next" }),
                s.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", Tt.length, " questions"],
                }),
                s.jsxs("div", {
                  className: "timer",
                  children: ["Time Left: ", m],
                }),
              ],
            }),
      ],
    });
  },
  zt = [
    {
      question:
        "In what way does the opening of the story convey the urgency and unexpected nature of Martha Hale's departure from her kitchen?",
      option1: "A) Through a calm and deliberate description",
      option2: "B) By emphasizing the routine and mundane activities",
      option3: "C) By highlighting the chaotic state of the kitchen",
      option4: "D) Through a detailed account of Martha's emotions",
      ans: 3,
    },
    {
      question:
        "How does the author use language to highlight the significance of Martha Hale's kitchen and the unfinished tasks within it?",
      option1: "A) By downplaying the importance of the kitchen",
      option2: "B) Through vivid imagery and sensory details",
      option3: "C) By omitting details about the kitchen",
      option4: "D) Through abstract and ambiguous language",
      ans: 2,
    },
    {
      question:
        "What role does Martha Hale's reaction to her kitchen's state play in revealing her character and priorities?",
      option1: "A) It suggests she is indifferent to her surroundings",
      option2: "B) It portrays her as meticulous and detail-oriented",
      option3: "C) It implies she is easily distracted and disorganized",
      option4: "D) It signifies her disregard for household chores",
      ans: 4,
    },
    {
      question:
        "Analyze the sheriff's comment about Mrs. Hale being 'scary' and wanting another woman along. How does this language contribute to the overall tone of the narrative?",
      option1: "A) It adds humor and lightens the tone",
      option2: "B) It creates a tense and suspenseful atmosphere",
      option3: "C) It suggests a lack of seriousness in the situation",
      option4: "D) It establishes a somber and melancholic mood",
      ans: 2,
    },
    {
      question:
        "Considering that the story was adapted from Glaspell's play 'Trifles' and is based on a murder case she covered as a reporter, discuss how the language proficiency in the text sets the scene for a detective story and the unfolding events.",
      option1: "A) By using straightforward and simple language",
      option2: "B) Through complex and convoluted language",
      option3: "C) By employing vivid and descriptive language",
      option4: "D) Through minimalistic and sparse language",
      ans: 1,
    },
  ],
  Yp = () => {
    const [e, t] = g.useState(0),
      [n, r] = g.useState(zt[e]),
      [o, i] = g.useState(!1),
      [l, a] = g.useState(0),
      [u, d] = g.useState(!1),
      [m, v] = g.useState(10),
      [y, w] = g.useState(null),
      k = g.useRef(null),
      x = g.useRef(null),
      j = g.useRef(null),
      p = g.useRef(null),
      c = [k, x, j, p];
    g.useEffect(() => {
      v(10),
        e > 0 &&
          e < zt.length &&
          (r(zt[e]),
          i(!1),
          c.forEach((h) => {
            h.current.classList.remove("incorrect"),
              h.current.classList.remove("correct");
          }));
    }, [e]),
      g.useEffect(() => {
        const h = setInterval(() => {
          m > 0 && !o ? v((C) => C - 1) : m === 0 && !o && S();
        }, 1e3);
        return () => clearInterval(h);
      }, [m, o]);
    const f = (h, C) => {
        o ||
          (n.ans === C
            ? (h.target.classList.add("correct"),
              i(!0),
              a((P) => P + 1),
              w("Correct!"))
            : (h.target.classList.add("incorrect"),
              c[n.ans - 1].current.classList.add("correct"),
              i(!0),
              w("Incorrect!")));
      },
      S = () => {
        i(!0),
          c[n.ans - 1].current.classList.add("correct"),
          w("Time's up! The correct answer is:");
      },
      I = () => {
        o && (e === zt.length - 1 ? d(!0) : (t((h) => h + 1), w(null)));
      },
      N = () => {
        t(0), r(zt[0]), a(0), i(!1), d(!1), w(null);
      };
    return s.jsxs("div", {
      className: "container",
      children: [
        s.jsx("h1", { children: "Ka antok" }),
        s.jsx("hr", {}),
        u
          ? s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", zt.length],
                }),
                s.jsx("button", { onClick: N, children: "Reset" }),
              ],
            })
          : s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", { children: [e + 1, ". ", n.question] }),
                s.jsx("div", {
                  className: "anscover",
                  children: s.jsxs("ul", {
                    children: [
                      s.jsx("li", {
                        ref: k,
                        onClick: (h) => f(h, 1),
                        children: n.option1,
                      }),
                      s.jsx("li", {
                        ref: x,
                        onClick: (h) => f(h, 2),
                        children: n.option2,
                      }),
                      s.jsx("li", {
                        ref: j,
                        onClick: (h) => f(h, 3),
                        children: n.option3,
                      }),
                      s.jsx("li", {
                        ref: p,
                        onClick: (h) => f(h, 4),
                        children: n.option4,
                      }),
                    ],
                  }),
                }),
                s.jsx("div", { className: "selected-option", children: y }),
                s.jsx("button", { onClick: I, disabled: !o, children: "Next" }),
                s.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", zt.length, " questions"],
                }),
                s.jsxs("div", {
                  className: "timer",
                  children: ["Time Left: ", m],
                }),
              ],
            }),
      ],
    });
  },
  Pt = [
    {
      question:
        "1. What does Miriam gather from the forest at the beginning of the story?",
      option1: "A) Mushrooms",
      option2: "B) Berries",
      option3: "C) Leaves",
      option4: "D) Flowers",
      ans: 2,
    },
    {
      question:
        "2. How does Miriam react when she sees the gleaners approaching the camp?",
      option1: "A) She confronts them head-on",
      option2: "B) She hides and tries to warn the others",
      option3: "C) She surrenders to them willingly",
      option4: "D) She flees into the forest",
      ans: 2,
    },
    {
      question: "3. What does the helicopter do when it arrives at the camp?",
      option1: "A) It drops supplies for the survivors",
      option2: "B) It destroys the camp with a missile",
      option3: "C) It scans the area with its lights",
      option4: "D) It lands to pick up the survivors",
      ans: 3,
    },
    {
      question:
        "4. How does Miriam's past experiences influence her actions in the story?",
      option1: "A) They make her fearful and hesitant",
      option2: "B) They make her determined and resilient",
      option3: "C) They make her distrustful of others",
      option4: "D) They make her reckless and impulsive",
      ans: 2,
    },
    {
      question: "5. How does Miriam's internal conflict drive the narrative?",
      option1: "A) It motivates her to surrender to the machines",
      option2: "B) It pushes her to confront Eric and the camp community",
      option3: "C) It leads her to question her loyalty and beliefs",
      option4: "D) It compels her to seek revenge against the gleaners",
      ans: 3,
    },
  ],
  Jp = () => {
    const [e, t] = g.useState(0),
      [n, r] = g.useState(Pt[e]),
      [o, i] = g.useState(!1),
      [l, a] = g.useState(0),
      [u, d] = g.useState(!1),
      [m, v] = g.useState(10),
      [y, w] = g.useState(null),
      k = g.useRef(null),
      x = g.useRef(null),
      j = g.useRef(null),
      p = g.useRef(null),
      c = [k, x, j, p];
    g.useEffect(() => {
      v(10),
        e > 0 &&
          e < Pt.length &&
          (r(Pt[e]),
          i(!1),
          c.forEach((h) => {
            h.current.classList.remove("incorrect"),
              h.current.classList.remove("correct");
          }));
    }, [e]),
      g.useEffect(() => {
        const h = setInterval(() => {
          m > 0 && !o ? v((C) => C - 1) : m === 0 && !o && S();
        }, 1e3);
        return () => clearInterval(h);
      }, [m, o]);
    const f = (h, C) => {
        o ||
          (n.ans === C
            ? (h.target.classList.add("correct"),
              i(!0),
              a((P) => P + 1),
              w("Correct!"))
            : (h.target.classList.add("incorrect"),
              c[n.ans - 1].current.classList.add("correct"),
              i(!0),
              w("Incorrect!")));
      },
      S = () => {
        i(!0),
          c[n.ans - 1].current.classList.add("correct"),
          w("Time's up! The correct answer is:");
      },
      I = () => {
        o && (e === Pt.length - 1 ? d(!0) : (t((h) => h + 1), w(null)));
      },
      N = () => {
        t(0), r(Pt[0]), a(0), i(!1), d(!1), w(null);
      };
    return s.jsxs("div", {
      className: "container",
      children: [
        s.jsx("h1", { children: "Ka antok" }),
        s.jsx("hr", {}),
        u
          ? s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", Pt.length],
                }),
                s.jsx("button", { onClick: N, children: "Reset" }),
              ],
            })
          : s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", { children: [e + 1, ". ", n.question] }),
                s.jsx("div", {
                  className: "anscover",
                  children: s.jsxs("ul", {
                    children: [
                      s.jsx("li", {
                        ref: k,
                        onClick: (h) => f(h, 1),
                        children: n.option1,
                      }),
                      s.jsx("li", {
                        ref: x,
                        onClick: (h) => f(h, 2),
                        children: n.option2,
                      }),
                      s.jsx("li", {
                        ref: j,
                        onClick: (h) => f(h, 3),
                        children: n.option3,
                      }),
                      s.jsx("li", {
                        ref: p,
                        onClick: (h) => f(h, 4),
                        children: n.option4,
                      }),
                    ],
                  }),
                }),
                s.jsx("div", { className: "selected-option", children: y }),
                s.jsx("button", { onClick: I, disabled: !o, children: "Next" }),
                s.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", Pt.length, " questions"],
                }),
                s.jsxs("div", {
                  className: "timer",
                  children: ["Time Left: ", m],
                }),
              ],
            }),
      ],
    });
  },
  _t = [
    {
      question:
        "1. What is the primary reason the protagonist gives for wanting to kill the old man?",
      option1: "A) The old man wronged the protagonist in the past",
      option2: "B) The old man possesses great wealth",
      option3:
        "C) The protagonist is driven by a passionate desire for revenge",
      option4: "D) The protagonist is troubled by the old man's 'vulture eye'",
      ans: 4,
    },
    {
      question:
        "2. How does the protagonist feel about the old man, aside from the eye?",
      option1: "A) The protagonist deeply loves and respects the old man",
      option2: "B) The protagonist holds a neutral opinion of the old man",
      option3: "C) The protagonist fears and despises the old man",
      option4: "D) The protagonist admires the old man's wealth and success",
      ans: 3,
    },
    {
      question:
        "3. What time does the protagonist typically visit the old man's room?",
      option1: "A) Just before dawn",
      option2: "B) At noon",
      option3: "C) Around midnight",
      option4: "D) In the early evening",
      ans: 3,
    },
    {
      question:
        "4. What ultimately leads to the protagonist's confession to the police?",
      option1: "A) The police discover the old man's body hidden in the house",
      option2:
        "B) The protagonist feels guilty about the murder and decides to confess",
      option3:
        "C) The protagonist's fear of the old man's eye drives them to madness",
      option4:
        "D) The police hear the sound of the old man's heart beating under the floorboards",
      ans: 4,
    },
    {
      question:
        "5. How does the protagonist react to the sound of the old man's heart?",
      option1: "A) They are unaffected by it",
      option2: "B) They find it soothing and comforting",
      option3: "C) They become increasingly agitated and disturbed by it",
      option4:
        "D) They believe it is a figment of their imagination and ignore it",
      ans: 3,
    },
  ],
  Xp = () => {
    const [e, t] = g.useState(0),
      [n, r] = g.useState(_t[e]),
      [o, i] = g.useState(!1),
      [l, a] = g.useState(0),
      [u, d] = g.useState(!1),
      [m, v] = g.useState(10),
      [y, w] = g.useState(null),
      k = g.useRef(null),
      x = g.useRef(null),
      j = g.useRef(null),
      p = g.useRef(null),
      c = [k, x, j, p];
    g.useEffect(() => {
      v(10),
        e > 0 &&
          e < _t.length &&
          (r(_t[e]),
          i(!1),
          c.forEach((h) => {
            h.current.classList.remove("incorrect"),
              h.current.classList.remove("correct");
          }));
    }, [e]),
      g.useEffect(() => {
        const h = setInterval(() => {
          m > 0 && !o ? v((C) => C - 1) : m === 0 && !o && S();
        }, 1e3);
        return () => clearInterval(h);
      }, [m, o]);
    const f = (h, C) => {
        o ||
          (n.ans === C
            ? (h.target.classList.add("correct"),
              i(!0),
              a((P) => P + 1),
              w("Correct!"))
            : (h.target.classList.add("incorrect"),
              c[n.ans - 1].current.classList.add("correct"),
              i(!0),
              w("Incorrect!")));
      },
      S = () => {
        i(!0),
          c[n.ans - 1].current.classList.add("correct"),
          w("Time's up! The correct answer is:");
      },
      I = () => {
        o && (e === _t.length - 1 ? d(!0) : (t((h) => h + 1), w(null)));
      },
      N = () => {
        t(0), r(_t[0]), a(0), i(!1), d(!1), w(null);
      };
    return s.jsxs("div", {
      className: "container",
      children: [
        s.jsx("h1", { children: "Ka antok" }),
        s.jsx("hr", {}),
        u
          ? s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", _t.length],
                }),
                s.jsx("button", { onClick: N, children: "Reset" }),
              ],
            })
          : s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", { children: [e + 1, ". ", n.question] }),
                s.jsx("div", {
                  className: "anscover",
                  children: s.jsxs("ul", {
                    children: [
                      s.jsx("li", {
                        ref: k,
                        onClick: (h) => f(h, 1),
                        children: n.option1,
                      }),
                      s.jsx("li", {
                        ref: x,
                        onClick: (h) => f(h, 2),
                        children: n.option2,
                      }),
                      s.jsx("li", {
                        ref: j,
                        onClick: (h) => f(h, 3),
                        children: n.option3,
                      }),
                      s.jsx("li", {
                        ref: p,
                        onClick: (h) => f(h, 4),
                        children: n.option4,
                      }),
                    ],
                  }),
                }),
                s.jsx("div", { className: "selected-option", children: y }),
                s.jsx("button", { onClick: I, disabled: !o, children: "Next" }),
                s.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", _t.length, " questions"],
                }),
                s.jsxs("div", {
                  className: "timer",
                  children: ["Time Left: ", m],
                }),
              ],
            }),
      ],
    });
  },
  Rt = [
    {
      question: "1). What is Jack's job?",
      option1: "A) Detective",
      option2: "B) Police",
      option3: "C) Doctor",
      option4: "D) Attorney",
      ans: 1,
    },
    {
      question: "2). What kind of case does the boss give to Jack?",
      option1: "A) Illegal grumbling",
      option2: "B) Killing",
      option3: "C) Robbing",
      option4: "D) Accident",
      ans: 3,
    },
    {
      question: "3). How many days does the thief become famous?",
      option1: "A) Three days",
      option2: "B) Five days",
      option3: "C) Four days",
      option4: "D) Two days",
      ans: 2,
    },
    {
      question:
        "4). What is the shape of the tattoo on the thief's left wrist?",
      option1: "A) Heart",
      option2: "B) Snake",
      option3: "C) Fire",
      option4: "D) Bird",
      ans: 4,
    },
    {
      question:
        "5). After getting caught, does the thief escape from his cell?",
      option1: "A) Yes, because he is good at escaping",
      option2: "B) No, because he doesn't know how to escape",
      option3: "C) Maybe, because the thief has supernatural strength",
      option4: "D) Yes, because the cell is unlocked",
      ans: 1,
    },
  ],
  Zp = () => {
    const [e, t] = g.useState(0),
      [n, r] = g.useState(Rt[e]),
      [o, i] = g.useState(!1),
      [l, a] = g.useState(0),
      [u, d] = g.useState(!1),
      [m, v] = g.useState(10),
      [y, w] = g.useState(null),
      k = g.useRef(null),
      x = g.useRef(null),
      j = g.useRef(null),
      p = g.useRef(null),
      c = [k, x, j, p];
    g.useEffect(() => {
      v(10),
        e > 0 &&
          e < Rt.length &&
          (r(Rt[e]),
          i(!1),
          c.forEach((h) => {
            h.current.classList.remove("incorrect"),
              h.current.classList.remove("correct");
          }));
    }, [e]),
      g.useEffect(() => {
        const h = setInterval(() => {
          m > 0 && !o ? v((C) => C - 1) : m === 0 && !o && S();
        }, 1e3);
        return () => clearInterval(h);
      }, [m, o]);
    const f = (h, C) => {
        o ||
          (n.ans === C
            ? (h.target.classList.add("correct"),
              i(!0),
              a((P) => P + 1),
              w("Correct!"))
            : (h.target.classList.add("incorrect"),
              c[n.ans - 1].current.classList.add("correct"),
              i(!0),
              w("Incorrect!")));
      },
      S = () => {
        i(!0),
          c[n.ans - 1].current.classList.add("correct"),
          w("Time's up! The correct answer is:");
      },
      I = () => {
        o && (e === Rt.length - 1 ? d(!0) : (t((h) => h + 1), w(null)));
      },
      N = () => {
        t(0), r(Rt[0]), a(0), i(!1), d(!1), w(null);
      };
    return s.jsxs("div", {
      className: "container",
      children: [
        s.jsx("h1", { children: "Ka antok" }),
        s.jsx("hr", {}),
        u
          ? s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", Rt.length],
                }),
                s.jsx("button", { onClick: N, children: "Reset" }),
              ],
            })
          : s.jsxs(s.Fragment, {
              children: [
                s.jsxs("h2", { children: [e + 1, ". ", n.question] }),
                s.jsx("div", {
                  className: "anscover",
                  children: s.jsxs("ul", {
                    children: [
                      s.jsx("li", {
                        ref: k,
                        onClick: (h) => f(h, 1),
                        children: n.option1,
                      }),
                      s.jsx("li", {
                        ref: x,
                        onClick: (h) => f(h, 2),
                        children: n.option2,
                      }),
                      s.jsx("li", {
                        ref: j,
                        onClick: (h) => f(h, 3),
                        children: n.option3,
                      }),
                      s.jsx("li", {
                        ref: p,
                        onClick: (h) => f(h, 4),
                        children: n.option4,
                      }),
                    ],
                  }),
                }),
                s.jsx("div", { className: "selected-option", children: y }),
                s.jsx("button", { onClick: I, disabled: !o, children: "Next" }),
                s.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", Rt.length, " questions"],
                }),
                s.jsxs("div", {
                  className: "timer",
                  children: ["Time Left: ", m],
                }),
              ],
            }),
      ],
    });
  };
function em() {
  return s.jsxs(Ep, {
    children: [
      s.jsx(Rp, {}),
      s.jsxs(yp, {
        children: [
          s.jsx(W, { path: "/", element: s.jsx(Pp, {}) }),
          s.jsx(W, { path: "/menu", element: s.jsx(Lp, {}) }),
          s.jsx(W, { path: "/story1", element: s.jsx(Op, {}) }),
          s.jsx(W, { path: "/story2", element: s.jsx(Fp, {}) }),
          s.jsx(W, { path: "/story3", element: s.jsx(Ap, {}) }),
          s.jsx(W, { path: "/story4", element: s.jsx(Dp, {}) }),
          s.jsx(W, { path: "/story5", element: s.jsx(Mp, {}) }),
          s.jsx(W, { path: "/story6", element: s.jsx(bp, {}) }),
          s.jsx(W, { path: "/story7", element: s.jsx(Bp, {}) }),
          s.jsx(W, { path: "/story8", element: s.jsx(Wp, {}) }),
          s.jsx(W, { path: "/story9", element: s.jsx(Hp, {}) }),
          s.jsx(W, { path: "/story10", element: s.jsx(Up, {}) }),
          s.jsx(W, { path: "/quiz1", element: s.jsx($p, {}) }),
          s.jsx(W, { path: "/quiz2", element: s.jsx(qp, {}) }),
          s.jsx(W, { path: "/quiz3", element: s.jsx(Qp, {}) }),
          s.jsx(W, { path: "/quiz4", element: s.jsx(Vp, {}) }),
          s.jsx(W, { path: "/quiz5", element: s.jsx(Gp, {}) }),
          s.jsx(W, { path: "/quiz6", element: s.jsx(Kp, {}) }),
          s.jsx(W, { path: "/quiz7", element: s.jsx(Yp, {}) }),
          s.jsx(W, { path: "/quiz8", element: s.jsx(Jp, {}) }),
          s.jsx(W, { path: "/quiz9", element: s.jsx(Xp, {}) }),
          s.jsx(W, { path: "/quiz10", element: s.jsx(Zp, {}) }),
        ],
      }),
    ],
  });
}
yi.createRoot(document.getElementById("root")).render(
  s.jsx(Da.StrictMode, { children: s.jsx(em, {}) })
);
