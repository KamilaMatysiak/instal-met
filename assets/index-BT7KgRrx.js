;(function () {
  const r = document.createElement('link').relList
  if (r && r.supports && r.supports('modulepreload')) return
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s)
  new MutationObserver((s) => {
    for (const h of s)
      if (h.type === 'childList')
        for (const y of h.addedNodes)
          y.tagName === 'LINK' && y.rel === 'modulepreload' && o(y)
  }).observe(document, { childList: !0, subtree: !0 })
  function f(s) {
    const h = {}
    return (
      s.integrity && (h.integrity = s.integrity),
      s.referrerPolicy && (h.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (h.credentials = 'include')
        : s.crossOrigin === 'anonymous'
        ? (h.credentials = 'omit')
        : (h.credentials = 'same-origin'),
      h
    )
  }
  function o(s) {
    if (s.ep) return
    s.ep = !0
    const h = f(s)
    fetch(s.href, h)
  }
})()
var bf = { exports: {} },
  Mu = {}
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Td
function N3() {
  if (Td) return Mu
  Td = 1
  var i = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.fragment')
  function f(o, s, h) {
    var y = null
    if (
      (h !== void 0 && (y = '' + h),
      s.key !== void 0 && (y = '' + s.key),
      'key' in s)
    ) {
      h = {}
      for (var p in s) p !== 'key' && (h[p] = s[p])
    } else h = s
    return (
      (s = h.ref),
      { $$typeof: i, type: o, key: y, ref: s !== void 0 ? s : null, props: h }
    )
  }
  return (Mu.Fragment = r), (Mu.jsx = f), (Mu.jsxs = f), Mu
}
var Rd
function U3() {
  return Rd || ((Rd = 1), (bf.exports = N3())), bf.exports
}
var D = U3(),
  Sf = { exports: {} },
  be = {}
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Md
function j3() {
  if (Md) return be
  Md = 1
  var i = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.portal'),
    f = Symbol.for('react.fragment'),
    o = Symbol.for('react.strict_mode'),
    s = Symbol.for('react.profiler'),
    h = Symbol.for('react.consumer'),
    y = Symbol.for('react.context'),
    p = Symbol.for('react.forward_ref'),
    v = Symbol.for('react.suspense'),
    m = Symbol.for('react.memo'),
    E = Symbol.for('react.lazy'),
    U = Symbol.iterator
  function M(b) {
    return b === null || typeof b != 'object'
      ? null
      : ((b = (U && b[U]) || b['@@iterator']),
        typeof b == 'function' ? b : null)
  }
  var B = {
      isMounted: function () {
        return !1
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    H = Object.assign,
    J = {}
  function $(b, G, k) {
    ;(this.props = b),
      (this.context = G),
      (this.refs = J),
      (this.updater = k || B)
  }
  ;($.prototype.isReactComponent = {}),
    ($.prototype.setState = function (b, G) {
      if (typeof b != 'object' && typeof b != 'function' && b != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        )
      this.updater.enqueueSetState(this, b, G, 'setState')
    }),
    ($.prototype.forceUpdate = function (b) {
      this.updater.enqueueForceUpdate(this, b, 'forceUpdate')
    })
  function q() {}
  q.prototype = $.prototype
  function re(b, G, k) {
    ;(this.props = b),
      (this.context = G),
      (this.refs = J),
      (this.updater = k || B)
  }
  var W = (re.prototype = new q())
  ;(W.constructor = re), H(W, $.prototype), (W.isPureReactComponent = !0)
  var se = Array.isArray,
    F = { H: null, A: null, T: null, S: null, V: null },
    N = Object.prototype.hasOwnProperty
  function pe(b, G, k, Z, le, Me) {
    return (
      (k = Me.ref),
      { $$typeof: i, type: b, key: G, ref: k !== void 0 ? k : null, props: Me }
    )
  }
  function Se(b, G) {
    return pe(b.type, G, void 0, void 0, void 0, b.props)
  }
  function ye(b) {
    return typeof b == 'object' && b !== null && b.$$typeof === i
  }
  function Ze(b) {
    var G = { '=': '=0', ':': '=2' }
    return (
      '$' +
      b.replace(/[=:]/g, function (k) {
        return G[k]
      })
    )
  }
  var tt = /\/+/g
  function Ke(b, G) {
    return typeof b == 'object' && b !== null && b.key != null
      ? Ze('' + b.key)
      : G.toString(36)
  }
  function St() {}
  function _e(b) {
    switch (b.status) {
      case 'fulfilled':
        return b.value
      case 'rejected':
        throw b.reason
      default:
        switch (
          (typeof b.status == 'string'
            ? b.then(St, St)
            : ((b.status = 'pending'),
              b.then(
                function (G) {
                  b.status === 'pending' &&
                    ((b.status = 'fulfilled'), (b.value = G))
                },
                function (G) {
                  b.status === 'pending' &&
                    ((b.status = 'rejected'), (b.reason = G))
                }
              )),
          b.status)
        ) {
          case 'fulfilled':
            return b.value
          case 'rejected':
            throw b.reason
        }
    }
    throw b
  }
  function Re(b, G, k, Z, le) {
    var Me = typeof b
    ;(Me === 'undefined' || Me === 'boolean') && (b = null)
    var ce = !1
    if (b === null) ce = !0
    else
      switch (Me) {
        case 'bigint':
        case 'string':
        case 'number':
          ce = !0
          break
        case 'object':
          switch (b.$$typeof) {
            case i:
            case r:
              ce = !0
              break
            case E:
              return (ce = b._init), Re(ce(b._payload), G, k, Z, le)
          }
      }
    if (ce)
      return (
        (le = le(b)),
        (ce = Z === '' ? '.' + Ke(b, 0) : Z),
        se(le)
          ? ((k = ''),
            ce != null && (k = ce.replace(tt, '$&/') + '/'),
            Re(le, G, k, '', function (rl) {
              return rl
            }))
          : le != null &&
            (ye(le) &&
              (le = Se(
                le,
                k +
                  (le.key == null || (b && b.key === le.key)
                    ? ''
                    : ('' + le.key).replace(tt, '$&/') + '/') +
                  ce
              )),
            G.push(le)),
        1
      )
    ce = 0
    var Et = Z === '' ? '.' : Z + ':'
    if (se(b))
      for (var Ve = 0; Ve < b.length; Ve++)
        (Z = b[Ve]), (Me = Et + Ke(Z, Ve)), (ce += Re(Z, G, k, Me, le))
    else if (((Ve = M(b)), typeof Ve == 'function'))
      for (b = Ve.call(b), Ve = 0; !(Z = b.next()).done; )
        (Z = Z.value), (Me = Et + Ke(Z, Ve++)), (ce += Re(Z, G, k, Me, le))
    else if (Me === 'object') {
      if (typeof b.then == 'function') return Re(_e(b), G, k, Z, le)
      throw (
        ((G = String(b)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (G === '[object Object]'
              ? 'object with keys {' + Object.keys(b).join(', ') + '}'
              : G) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      )
    }
    return ce
  }
  function O(b, G, k) {
    if (b == null) return b
    var Z = [],
      le = 0
    return (
      Re(b, Z, '', '', function (Me) {
        return G.call(k, Me, le++)
      }),
      Z
    )
  }
  function K(b) {
    if (b._status === -1) {
      var G = b._result
      ;(G = G()),
        G.then(
          function (k) {
            ;(b._status === 0 || b._status === -1) &&
              ((b._status = 1), (b._result = k))
          },
          function (k) {
            ;(b._status === 0 || b._status === -1) &&
              ((b._status = 2), (b._result = k))
          }
        ),
        b._status === -1 && ((b._status = 0), (b._result = G))
    }
    if (b._status === 1) return b._result.default
    throw b._result
  }
  var ee =
    typeof reportError == 'function'
      ? reportError
      : function (b) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var G = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof b == 'object' &&
                b !== null &&
                typeof b.message == 'string'
                  ? String(b.message)
                  : String(b),
              error: b,
            })
            if (!window.dispatchEvent(G)) return
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', b)
            return
          }
          console.error(b)
        }
  function ge() {}
  return (
    (be.Children = {
      map: O,
      forEach: function (b, G, k) {
        O(
          b,
          function () {
            G.apply(this, arguments)
          },
          k
        )
      },
      count: function (b) {
        var G = 0
        return (
          O(b, function () {
            G++
          }),
          G
        )
      },
      toArray: function (b) {
        return (
          O(b, function (G) {
            return G
          }) || []
        )
      },
      only: function (b) {
        if (!ye(b))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          )
        return b
      },
    }),
    (be.Component = $),
    (be.Fragment = f),
    (be.Profiler = s),
    (be.PureComponent = re),
    (be.StrictMode = o),
    (be.Suspense = v),
    (be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F),
    (be.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (b) {
        return F.H.useMemoCache(b)
      },
    }),
    (be.cache = function (b) {
      return function () {
        return b.apply(null, arguments)
      }
    }),
    (be.cloneElement = function (b, G, k) {
      if (b == null)
        throw Error(
          'The argument must be a React element, but you passed ' + b + '.'
        )
      var Z = H({}, b.props),
        le = b.key,
        Me = void 0
      if (G != null)
        for (ce in (G.ref !== void 0 && (Me = void 0),
        G.key !== void 0 && (le = '' + G.key),
        G))
          !N.call(G, ce) ||
            ce === 'key' ||
            ce === '__self' ||
            ce === '__source' ||
            (ce === 'ref' && G.ref === void 0) ||
            (Z[ce] = G[ce])
      var ce = arguments.length - 2
      if (ce === 1) Z.children = k
      else if (1 < ce) {
        for (var Et = Array(ce), Ve = 0; Ve < ce; Ve++)
          Et[Ve] = arguments[Ve + 2]
        Z.children = Et
      }
      return pe(b.type, le, void 0, void 0, Me, Z)
    }),
    (be.createContext = function (b) {
      return (
        (b = {
          $$typeof: y,
          _currentValue: b,
          _currentValue2: b,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (b.Provider = b),
        (b.Consumer = { $$typeof: h, _context: b }),
        b
      )
    }),
    (be.createElement = function (b, G, k) {
      var Z,
        le = {},
        Me = null
      if (G != null)
        for (Z in (G.key !== void 0 && (Me = '' + G.key), G))
          N.call(G, Z) &&
            Z !== 'key' &&
            Z !== '__self' &&
            Z !== '__source' &&
            (le[Z] = G[Z])
      var ce = arguments.length - 2
      if (ce === 1) le.children = k
      else if (1 < ce) {
        for (var Et = Array(ce), Ve = 0; Ve < ce; Ve++)
          Et[Ve] = arguments[Ve + 2]
        le.children = Et
      }
      if (b && b.defaultProps)
        for (Z in ((ce = b.defaultProps), ce))
          le[Z] === void 0 && (le[Z] = ce[Z])
      return pe(b, Me, void 0, void 0, null, le)
    }),
    (be.createRef = function () {
      return { current: null }
    }),
    (be.forwardRef = function (b) {
      return { $$typeof: p, render: b }
    }),
    (be.isValidElement = ye),
    (be.lazy = function (b) {
      return { $$typeof: E, _payload: { _status: -1, _result: b }, _init: K }
    }),
    (be.memo = function (b, G) {
      return { $$typeof: m, type: b, compare: G === void 0 ? null : G }
    }),
    (be.startTransition = function (b) {
      var G = F.T,
        k = {}
      F.T = k
      try {
        var Z = b(),
          le = F.S
        le !== null && le(k, Z),
          typeof Z == 'object' &&
            Z !== null &&
            typeof Z.then == 'function' &&
            Z.then(ge, ee)
      } catch (Me) {
        ee(Me)
      } finally {
        F.T = G
      }
    }),
    (be.unstable_useCacheRefresh = function () {
      return F.H.useCacheRefresh()
    }),
    (be.use = function (b) {
      return F.H.use(b)
    }),
    (be.useActionState = function (b, G, k) {
      return F.H.useActionState(b, G, k)
    }),
    (be.useCallback = function (b, G) {
      return F.H.useCallback(b, G)
    }),
    (be.useContext = function (b) {
      return F.H.useContext(b)
    }),
    (be.useDebugValue = function () {}),
    (be.useDeferredValue = function (b, G) {
      return F.H.useDeferredValue(b, G)
    }),
    (be.useEffect = function (b, G, k) {
      var Z = F.H
      if (typeof k == 'function')
        throw Error(
          'useEffect CRUD overload is not enabled in this build of React.'
        )
      return Z.useEffect(b, G)
    }),
    (be.useId = function () {
      return F.H.useId()
    }),
    (be.useImperativeHandle = function (b, G, k) {
      return F.H.useImperativeHandle(b, G, k)
    }),
    (be.useInsertionEffect = function (b, G) {
      return F.H.useInsertionEffect(b, G)
    }),
    (be.useLayoutEffect = function (b, G) {
      return F.H.useLayoutEffect(b, G)
    }),
    (be.useMemo = function (b, G) {
      return F.H.useMemo(b, G)
    }),
    (be.useOptimistic = function (b, G) {
      return F.H.useOptimistic(b, G)
    }),
    (be.useReducer = function (b, G, k) {
      return F.H.useReducer(b, G, k)
    }),
    (be.useRef = function (b) {
      return F.H.useRef(b)
    }),
    (be.useState = function (b) {
      return F.H.useState(b)
    }),
    (be.useSyncExternalStore = function (b, G, k) {
      return F.H.useSyncExternalStore(b, G, k)
    }),
    (be.useTransition = function () {
      return F.H.useTransition()
    }),
    (be.version = '19.1.0'),
    be
  )
}
var zd
function Uf() {
  return zd || ((zd = 1), (Sf.exports = j3())), Sf.exports
}
var j = Uf(),
  Ef = { exports: {} },
  zu = {},
  xf = { exports: {} },
  Tf = {}
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cd
function H3() {
  return (
    Cd ||
      ((Cd = 1),
      (function (i) {
        function r(O, K) {
          var ee = O.length
          O.push(K)
          e: for (; 0 < ee; ) {
            var ge = (ee - 1) >>> 1,
              b = O[ge]
            if (0 < s(b, K)) (O[ge] = K), (O[ee] = b), (ee = ge)
            else break e
          }
        }
        function f(O) {
          return O.length === 0 ? null : O[0]
        }
        function o(O) {
          if (O.length === 0) return null
          var K = O[0],
            ee = O.pop()
          if (ee !== K) {
            O[0] = ee
            e: for (var ge = 0, b = O.length, G = b >>> 1; ge < G; ) {
              var k = 2 * (ge + 1) - 1,
                Z = O[k],
                le = k + 1,
                Me = O[le]
              if (0 > s(Z, ee))
                le < b && 0 > s(Me, Z)
                  ? ((O[ge] = Me), (O[le] = ee), (ge = le))
                  : ((O[ge] = Z), (O[k] = ee), (ge = k))
              else if (le < b && 0 > s(Me, ee))
                (O[ge] = Me), (O[le] = ee), (ge = le)
              else break e
            }
          }
          return K
        }
        function s(O, K) {
          var ee = O.sortIndex - K.sortIndex
          return ee !== 0 ? ee : O.id - K.id
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == 'object' &&
            typeof performance.now == 'function')
        ) {
          var h = performance
          i.unstable_now = function () {
            return h.now()
          }
        } else {
          var y = Date,
            p = y.now()
          i.unstable_now = function () {
            return y.now() - p
          }
        }
        var v = [],
          m = [],
          E = 1,
          U = null,
          M = 3,
          B = !1,
          H = !1,
          J = !1,
          $ = !1,
          q = typeof setTimeout == 'function' ? setTimeout : null,
          re = typeof clearTimeout == 'function' ? clearTimeout : null,
          W = typeof setImmediate < 'u' ? setImmediate : null
        function se(O) {
          for (var K = f(m); K !== null; ) {
            if (K.callback === null) o(m)
            else if (K.startTime <= O)
              o(m), (K.sortIndex = K.expirationTime), r(v, K)
            else break
            K = f(m)
          }
        }
        function F(O) {
          if (((J = !1), se(O), !H))
            if (f(v) !== null) (H = !0), N || ((N = !0), Ke())
            else {
              var K = f(m)
              K !== null && Re(F, K.startTime - O)
            }
        }
        var N = !1,
          pe = -1,
          Se = 5,
          ye = -1
        function Ze() {
          return $ ? !0 : !(i.unstable_now() - ye < Se)
        }
        function tt() {
          if ((($ = !1), N)) {
            var O = i.unstable_now()
            ye = O
            var K = !0
            try {
              e: {
                ;(H = !1), J && ((J = !1), re(pe), (pe = -1)), (B = !0)
                var ee = M
                try {
                  t: {
                    for (
                      se(O), U = f(v);
                      U !== null && !(U.expirationTime > O && Ze());

                    ) {
                      var ge = U.callback
                      if (typeof ge == 'function') {
                        ;(U.callback = null), (M = U.priorityLevel)
                        var b = ge(U.expirationTime <= O)
                        if (((O = i.unstable_now()), typeof b == 'function')) {
                          ;(U.callback = b), se(O), (K = !0)
                          break t
                        }
                        U === f(v) && o(v), se(O)
                      } else o(v)
                      U = f(v)
                    }
                    if (U !== null) K = !0
                    else {
                      var G = f(m)
                      G !== null && Re(F, G.startTime - O), (K = !1)
                    }
                  }
                  break e
                } finally {
                  ;(U = null), (M = ee), (B = !1)
                }
                K = void 0
              }
            } finally {
              K ? Ke() : (N = !1)
            }
          }
        }
        var Ke
        if (typeof W == 'function')
          Ke = function () {
            W(tt)
          }
        else if (typeof MessageChannel < 'u') {
          var St = new MessageChannel(),
            _e = St.port2
          ;(St.port1.onmessage = tt),
            (Ke = function () {
              _e.postMessage(null)
            })
        } else
          Ke = function () {
            q(tt, 0)
          }
        function Re(O, K) {
          pe = q(function () {
            O(i.unstable_now())
          }, K)
        }
        ;(i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (O) {
            O.callback = null
          }),
          (i.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Se = 0 < O ? Math.floor(1e3 / O) : 5)
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return M
          }),
          (i.unstable_next = function (O) {
            switch (M) {
              case 1:
              case 2:
              case 3:
                var K = 3
                break
              default:
                K = M
            }
            var ee = M
            M = K
            try {
              return O()
            } finally {
              M = ee
            }
          }),
          (i.unstable_requestPaint = function () {
            $ = !0
          }),
          (i.unstable_runWithPriority = function (O, K) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                O = 3
            }
            var ee = M
            M = O
            try {
              return K()
            } finally {
              M = ee
            }
          }),
          (i.unstable_scheduleCallback = function (O, K, ee) {
            var ge = i.unstable_now()
            switch (
              (typeof ee == 'object' && ee !== null
                ? ((ee = ee.delay),
                  (ee = typeof ee == 'number' && 0 < ee ? ge + ee : ge))
                : (ee = ge),
              O)
            ) {
              case 1:
                var b = -1
                break
              case 2:
                b = 250
                break
              case 5:
                b = 1073741823
                break
              case 4:
                b = 1e4
                break
              default:
                b = 5e3
            }
            return (
              (b = ee + b),
              (O = {
                id: E++,
                callback: K,
                priorityLevel: O,
                startTime: ee,
                expirationTime: b,
                sortIndex: -1,
              }),
              ee > ge
                ? ((O.sortIndex = ee),
                  r(m, O),
                  f(v) === null &&
                    O === f(m) &&
                    (J ? (re(pe), (pe = -1)) : (J = !0), Re(F, ee - ge)))
                : ((O.sortIndex = b),
                  r(v, O),
                  H || B || ((H = !0), N || ((N = !0), Ke()))),
              O
            )
          }),
          (i.unstable_shouldYield = Ze),
          (i.unstable_wrapCallback = function (O) {
            var K = M
            return function () {
              var ee = M
              M = K
              try {
                return O.apply(this, arguments)
              } finally {
                M = ee
              }
            }
          })
      })(Tf)),
    Tf
  )
}
var Dd
function L3() {
  return Dd || ((Dd = 1), (xf.exports = H3())), xf.exports
}
var Rf = { exports: {} },
  bt = {}
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _d
function B3() {
  if (_d) return bt
  _d = 1
  var i = Uf()
  function r(v) {
    var m = 'https://react.dev/errors/' + v
    if (1 < arguments.length) {
      m += '?args[]=' + encodeURIComponent(arguments[1])
      for (var E = 2; E < arguments.length; E++)
        m += '&args[]=' + encodeURIComponent(arguments[E])
    }
    return (
      'Minified React error #' +
      v +
      '; visit ' +
      m +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  function f() {}
  var o = {
      d: {
        f,
        r: function () {
          throw Error(r(522))
        },
        D: f,
        C: f,
        L: f,
        m: f,
        X: f,
        S: f,
        M: f,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for('react.portal')
  function h(v, m, E) {
    var U =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
      $$typeof: s,
      key: U == null ? null : '' + U,
      children: v,
      containerInfo: m,
      implementation: E,
    }
  }
  var y = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
  function p(v, m) {
    if (v === 'font') return ''
    if (typeof m == 'string') return m === 'use-credentials' ? m : ''
  }
  return (
    (bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (bt.createPortal = function (v, m) {
      var E =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(r(299))
      return h(v, m, null, E)
    }),
    (bt.flushSync = function (v) {
      var m = y.T,
        E = o.p
      try {
        if (((y.T = null), (o.p = 2), v)) return v()
      } finally {
        ;(y.T = m), (o.p = E), o.d.f()
      }
    }),
    (bt.preconnect = function (v, m) {
      typeof v == 'string' &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == 'string'
                ? m === 'use-credentials'
                  ? m
                  : ''
                : void 0))
          : (m = null),
        o.d.C(v, m))
    }),
    (bt.prefetchDNS = function (v) {
      typeof v == 'string' && o.d.D(v)
    }),
    (bt.preinit = function (v, m) {
      if (typeof v == 'string' && m && typeof m.as == 'string') {
        var E = m.as,
          U = p(E, m.crossOrigin),
          M = typeof m.integrity == 'string' ? m.integrity : void 0,
          B = typeof m.fetchPriority == 'string' ? m.fetchPriority : void 0
        E === 'style'
          ? o.d.S(v, typeof m.precedence == 'string' ? m.precedence : void 0, {
              crossOrigin: U,
              integrity: M,
              fetchPriority: B,
            })
          : E === 'script' &&
            o.d.X(v, {
              crossOrigin: U,
              integrity: M,
              fetchPriority: B,
              nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
            })
      }
    }),
    (bt.preinitModule = function (v, m) {
      if (typeof v == 'string')
        if (typeof m == 'object' && m !== null) {
          if (m.as == null || m.as === 'script') {
            var E = p(m.as, m.crossOrigin)
            o.d.M(v, {
              crossOrigin: E,
              integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
              nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
            })
          }
        } else m == null && o.d.M(v)
    }),
    (bt.preload = function (v, m) {
      if (
        typeof v == 'string' &&
        typeof m == 'object' &&
        m !== null &&
        typeof m.as == 'string'
      ) {
        var E = m.as,
          U = p(E, m.crossOrigin)
        o.d.L(v, E, {
          crossOrigin: U,
          integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
          nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
          type: typeof m.type == 'string' ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == 'string' ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == 'string' ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == 'string' ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == 'string' ? m.imageSizes : void 0,
          media: typeof m.media == 'string' ? m.media : void 0,
        })
      }
    }),
    (bt.preloadModule = function (v, m) {
      if (typeof v == 'string')
        if (m) {
          var E = p(m.as, m.crossOrigin)
          o.d.m(v, {
            as: typeof m.as == 'string' && m.as !== 'script' ? m.as : void 0,
            crossOrigin: E,
            integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
          })
        } else o.d.m(v)
    }),
    (bt.requestFormReset = function (v) {
      o.d.r(v)
    }),
    (bt.unstable_batchedUpdates = function (v, m) {
      return v(m)
    }),
    (bt.useFormState = function (v, m, E) {
      return y.H.useFormState(v, m, E)
    }),
    (bt.useFormStatus = function () {
      return y.H.useHostTransitionStatus()
    }),
    (bt.version = '19.1.0'),
    bt
  )
}
var Ad
function q3() {
  if (Ad) return Rf.exports
  Ad = 1
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
      } catch (r) {
        console.error(r)
      }
  }
  return i(), (Rf.exports = B3()), Rf.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Od
function Y3() {
  if (Od) return zu
  Od = 1
  var i = L3(),
    r = Uf(),
    f = q3()
  function o(e) {
    var t = 'https://react.dev/errors/' + e
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1])
      for (var l = 2; l < arguments.length; l++)
        t += '&args[]=' + encodeURIComponent(arguments[l])
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  function s(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
  }
  function h(e) {
    var t = e,
      l = e
    if (e.alternate) for (; t.return; ) t = t.return
    else {
      e = t
      do (t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return)
      while (e)
    }
    return t.tag === 3 ? l : null
  }
  function y(e) {
    if (e.tag === 13) {
      var t = e.memoizedState
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated
    }
    return null
  }
  function p(e) {
    if (h(e) !== e) throw Error(o(188))
  }
  function v(e) {
    var t = e.alternate
    if (!t) {
      if (((t = h(e)), t === null)) throw Error(o(188))
      return t !== e ? null : e
    }
    for (var l = e, a = t; ; ) {
      var n = l.return
      if (n === null) break
      var u = n.alternate
      if (u === null) {
        if (((a = n.return), a !== null)) {
          l = a
          continue
        }
        break
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return p(n), e
          if (u === a) return p(n), t
          u = u.sibling
        }
        throw Error(o(188))
      }
      if (l.return !== a.return) (l = n), (a = u)
      else {
        for (var c = !1, d = n.child; d; ) {
          if (d === l) {
            ;(c = !0), (l = n), (a = u)
            break
          }
          if (d === a) {
            ;(c = !0), (a = n), (l = u)
            break
          }
          d = d.sibling
        }
        if (!c) {
          for (d = u.child; d; ) {
            if (d === l) {
              ;(c = !0), (l = u), (a = n)
              break
            }
            if (d === a) {
              ;(c = !0), (a = u), (l = n)
              break
            }
            d = d.sibling
          }
          if (!c) throw Error(o(189))
        }
      }
      if (l.alternate !== a) throw Error(o(190))
    }
    if (l.tag !== 3) throw Error(o(188))
    return l.stateNode.current === l ? e : t
  }
  function m(e) {
    var t = e.tag
    if (t === 5 || t === 26 || t === 27 || t === 6) return e
    for (e = e.child; e !== null; ) {
      if (((t = m(e)), t !== null)) return t
      e = e.sibling
    }
    return null
  }
  var E = Object.assign,
    U = Symbol.for('react.element'),
    M = Symbol.for('react.transitional.element'),
    B = Symbol.for('react.portal'),
    H = Symbol.for('react.fragment'),
    J = Symbol.for('react.strict_mode'),
    $ = Symbol.for('react.profiler'),
    q = Symbol.for('react.provider'),
    re = Symbol.for('react.consumer'),
    W = Symbol.for('react.context'),
    se = Symbol.for('react.forward_ref'),
    F = Symbol.for('react.suspense'),
    N = Symbol.for('react.suspense_list'),
    pe = Symbol.for('react.memo'),
    Se = Symbol.for('react.lazy'),
    ye = Symbol.for('react.activity'),
    Ze = Symbol.for('react.memo_cache_sentinel'),
    tt = Symbol.iterator
  function Ke(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (tt && e[tt]) || e['@@iterator']),
        typeof e == 'function' ? e : null)
  }
  var St = Symbol.for('react.client.reference')
  function _e(e) {
    if (e == null) return null
    if (typeof e == 'function')
      return e.$$typeof === St ? null : e.displayName || e.name || null
    if (typeof e == 'string') return e
    switch (e) {
      case H:
        return 'Fragment'
      case $:
        return 'Profiler'
      case J:
        return 'StrictMode'
      case F:
        return 'Suspense'
      case N:
        return 'SuspenseList'
      case ye:
        return 'Activity'
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case B:
          return 'Portal'
        case W:
          return (e.displayName || 'Context') + '.Provider'
        case re:
          return (e._context.displayName || 'Context') + '.Consumer'
        case se:
          var t = e.render
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          )
        case pe:
          return (
            (t = e.displayName || null), t !== null ? t : _e(e.type) || 'Memo'
          )
        case Se:
          ;(t = e._payload), (e = e._init)
          try {
            return _e(e(t))
          } catch {}
      }
    return null
  }
  var Re = Array.isArray,
    O = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ee = { pending: !1, data: null, method: null, action: null },
    ge = [],
    b = -1
  function G(e) {
    return { current: e }
  }
  function k(e) {
    0 > b || ((e.current = ge[b]), (ge[b] = null), b--)
  }
  function Z(e, t) {
    b++, (ge[b] = e.current), (e.current = t)
  }
  var le = G(null),
    Me = G(null),
    ce = G(null),
    Et = G(null)
  function Ve(e, t) {
    switch ((Z(ce, t), Z(Me, e), Z(le, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? F0(e) : 0
        break
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) (t = F0(t)), (e = P0(t, e))
        else
          switch (e) {
            case 'svg':
              e = 1
              break
            case 'math':
              e = 2
              break
            default:
              e = 0
          }
    }
    k(le), Z(le, e)
  }
  function rl() {
    k(le), k(Me), k(ce)
  }
  function rt(e) {
    e.memoizedState !== null && Z(Et, e)
    var t = le.current,
      l = P0(t, e.type)
    t !== l && (Z(Me, e), Z(le, l))
  }
  function It(e) {
    Me.current === e && (k(le), k(Me)),
      Et.current === e && (k(Et), (Su._currentValue = ee))
  }
  var Ga = Object.prototype.hasOwnProperty,
    Cn = i.unstable_scheduleCallback,
    el = i.unstable_cancelCallback,
    sr = i.unstable_shouldYield,
    dr = i.unstable_requestPaint,
    Ot = i.unstable_now,
    hr = i.unstable_getCurrentPriorityLevel,
    Bu = i.unstable_ImmediatePriority,
    qu = i.unstable_UserBlockingPriority,
    Va = i.unstable_NormalPriority,
    pl = i.unstable_LowPriority,
    Ll = i.unstable_IdlePriority,
    Yu = i.log,
    Dn = i.unstable_setDisableYieldValue,
    Rt = null,
    $e = null
  function tl(e) {
    if (
      (typeof Yu == 'function' && Dn(e),
      $e && typeof $e.setStrictMode == 'function')
    )
      try {
        $e.setStrictMode(Rt, e)
      } catch {}
  }
  var ht = Math.clz32 ? Math.clz32 : Gu,
    mr = Math.log,
    cl = Math.LN2
  function Gu(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((mr(e) / cl) | 0)) | 0
  }
  var ha = 256,
    ma = 4194304
  function bl(e) {
    var t = e & 42
    if (t !== 0) return t
    switch (e & -e) {
      case 1:
        return 1
      case 2:
        return 2
      case 4:
        return 4
      case 8:
        return 8
      case 16:
        return 16
      case 32:
        return 32
      case 64:
        return 64
      case 128:
        return 128
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
        return e & 4194048
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560
      case 67108864:
        return 67108864
      case 134217728:
        return 134217728
      case 268435456:
        return 268435456
      case 536870912:
        return 536870912
      case 1073741824:
        return 0
      default:
        return e
    }
  }
  function va(e, t, l) {
    var a = e.pendingLanes
    if (a === 0) return 0
    var n = 0,
      u = e.suspendedLanes,
      c = e.pingedLanes
    e = e.warmLanes
    var d = a & 134217727
    return (
      d !== 0
        ? ((a = d & ~u),
          a !== 0
            ? (n = bl(a))
            : ((c &= d),
              c !== 0
                ? (n = bl(c))
                : l || ((l = d & ~e), l !== 0 && (n = bl(l)))))
        : ((d = a & ~u),
          d !== 0
            ? (n = bl(d))
            : c !== 0
            ? (n = bl(c))
            : l || ((l = a & ~e), l !== 0 && (n = bl(l)))),
      n === 0
        ? 0
        : t !== 0 &&
          t !== n &&
          (t & u) === 0 &&
          ((u = n & -n),
          (l = t & -t),
          u >= l || (u === 32 && (l & 4194048) !== 0))
        ? t
        : n
    )
  }
  function fl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
  }
  function Vu(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250
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
        return t + 5e3
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1
      default:
        return -1
    }
  }
  function Xa() {
    var e = ha
    return (ha <<= 1), (ha & 4194048) === 0 && (ha = 256), e
  }
  function Xu() {
    var e = ma
    return (ma <<= 1), (ma & 62914560) === 0 && (ma = 4194304), e
  }
  function Za(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e)
    return t
  }
  function ya(e, t) {
    ;(e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0))
  }
  function Zu(e, t, l, a, n, u) {
    var c = e.pendingLanes
    ;(e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0)
    var d = e.entanglements,
      g = e.expirationTimes,
      C = e.hiddenUpdates
    for (l = c & ~l; 0 < l; ) {
      var L = 31 - ht(l),
        V = 1 << L
      ;(d[L] = 0), (g[L] = -1)
      var _ = C[L]
      if (_ !== null)
        for (C[L] = null, L = 0; L < _.length; L++) {
          var A = _[L]
          A !== null && (A.lane &= -536870913)
        }
      l &= ~V
    }
    a !== 0 && ga(e, a, 0),
      u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~t))
  }
  function ga(e, t, l) {
    ;(e.pendingLanes |= t), (e.suspendedLanes &= ~t)
    var a = 31 - ht(t)
    ;(e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 4194090))
  }
  function pa(e, t) {
    var l = (e.entangledLanes |= t)
    for (e = e.entanglements; l; ) {
      var a = 31 - ht(l),
        n = 1 << a
      ;(n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n)
    }
  }
  function _n(e) {
    switch (e) {
      case 2:
        e = 1
        break
      case 8:
        e = 4
        break
      case 32:
        e = 16
        break
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
        e = 128
        break
      case 268435456:
        e = 134217728
        break
      default:
        e = 0
    }
    return e
  }
  function An(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    )
  }
  function S() {
    var e = K.p
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : gd(e.type))
  }
  function R(e, t) {
    var l = K.p
    try {
      return (K.p = e), t()
    } finally {
      K.p = l
    }
  }
  var w = Math.random().toString(36).slice(2),
    X = '__reactFiber$' + w,
    Q = '__reactProps$' + w,
    te = '__reactContainer$' + w,
    fe = '__reactEvents$' + w,
    P = '__reactListeners$' + w,
    ue = '__reactHandles$' + w,
    ie = '__reactResources$' + w,
    he = '__reactMarker$' + w
  function ae(e) {
    delete e[X], delete e[Q], delete e[fe], delete e[P], delete e[ue]
  }
  function ve(e) {
    var t = e[X]
    if (t) return t
    for (var l = e.parentNode; l; ) {
      if ((t = l[te] || l[X])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = ld(e); e !== null; ) {
            if ((l = e[X])) return l
            e = ld(e)
          }
        return t
      }
      ;(e = l), (l = e.parentNode)
    }
    return null
  }
  function we(e) {
    if ((e = e[X] || e[te])) {
      var t = e.tag
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e
    }
    return null
  }
  function Qe(e) {
    var t = e.tag
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode
    throw Error(o(33))
  }
  function We(e) {
    var t = e[ie]
    return (
      t ||
        (t = e[ie] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    )
  }
  function Ne(e) {
    e[he] = !0
  }
  var Ae = new Set(),
    Bl = {}
  function xt(e, t) {
    Gt(e, t), Gt(e + 'Capture', t)
  }
  function Gt(e, t) {
    for (Bl[e] = t, e = 0; e < t.length; e++) Ae.add(t[e])
  }
  var Mt = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    ql = {},
    Yl = {}
  function On(e) {
    return Ga.call(Yl, e)
      ? !0
      : Ga.call(ql, e)
      ? !1
      : Mt.test(e)
      ? (Yl[e] = !0)
      : ((ql[e] = !0), !1)
  }
  function Vt(e, t, l) {
    if (On(t))
      if (l === null) e.removeAttribute(t)
      else {
        switch (typeof l) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t)
            return
          case 'boolean':
            var a = t.toLowerCase().slice(0, 5)
            if (a !== 'data-' && a !== 'aria-') {
              e.removeAttribute(t)
              return
            }
        }
        e.setAttribute(t, '' + l)
      }
  }
  function Sl(e, t, l) {
    if (l === null) e.removeAttribute(t)
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t)
          return
      }
      e.setAttribute(t, '' + l)
    }
  }
  function xe(e, t, l, a) {
    if (a === null) e.removeAttribute(l)
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(l)
          return
      }
      e.setAttributeNS(t, l, '' + a)
    }
  }
  var gt, ll
  function al(e) {
    if (gt === void 0)
      try {
        throw Error()
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/)
        ;(gt = (t && t[1]) || ''),
          (ll =
            -1 <
            l.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < l.stack.indexOf('@')
              ? '@unknown:0:0'
              : '')
      }
    return (
      `
` +
      gt +
      e +
      ll
    )
  }
  var ba = !1
  function Je(e, t) {
    if (!e || ba) return ''
    ba = !0
    var l = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var V = function () {
                throw Error()
              }
              if (
                (Object.defineProperty(V.prototype, 'props', {
                  set: function () {
                    throw Error()
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(V, [])
                } catch (A) {
                  var _ = A
                }
                Reflect.construct(e, [], V)
              } else {
                try {
                  V.call()
                } catch (A) {
                  _ = A
                }
                e.call(V.prototype)
              }
            } else {
              try {
                throw Error()
              } catch (A) {
                _ = A
              }
              ;(V = e()) &&
                typeof V.catch == 'function' &&
                V.catch(function () {})
            }
          } catch (A) {
            if (A && _ && typeof A.stack == 'string') return [A.stack, _.stack]
          }
          return [null, null]
        },
      }
      a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot'
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        'name'
      )
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        })
      var u = a.DetermineComponentFrameRoot(),
        c = u[0],
        d = u[1]
      if (c && d) {
        var g = c.split(`
`),
          C = d.split(`
`)
        for (
          n = a = 0;
          a < g.length && !g[a].includes('DetermineComponentFrameRoot');

        )
          a++
        for (; n < C.length && !C[n].includes('DetermineComponentFrameRoot'); )
          n++
        if (a === g.length || n === C.length)
          for (
            a = g.length - 1, n = C.length - 1;
            1 <= a && 0 <= n && g[a] !== C[n];

          )
            n--
        for (; 1 <= a && 0 <= n; a--, n--)
          if (g[a] !== C[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || g[a] !== C[n])) {
                  var L =
                    `
` + g[a].replace(' at new ', ' at ')
                  return (
                    e.displayName &&
                      L.includes('<anonymous>') &&
                      (L = L.replace('<anonymous>', e.displayName)),
                    L
                  )
                }
              while (1 <= a && 0 <= n)
            break
          }
      }
    } finally {
      ;(ba = !1), (Error.prepareStackTrace = l)
    }
    return (l = e ? e.displayName || e.name : '') ? al(l) : ''
  }
  function Gl(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return al(e.type)
      case 16:
        return al('Lazy')
      case 13:
        return al('Suspense')
      case 19:
        return al('SuspenseList')
      case 0:
      case 15:
        return Je(e.type, !1)
      case 11:
        return Je(e.type.render, !1)
      case 1:
        return Je(e.type, !0)
      case 31:
        return al('Activity')
      default:
        return ''
    }
  }
  function wn(e) {
    try {
      var t = ''
      do (t += Gl(e)), (e = e.return)
      while (e)
      return t
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      )
    }
  }
  function zt(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e
      case 'object':
        return e
      default:
        return ''
    }
  }
  function Qf(e) {
    var t = e.type
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    )
  }
  function D2(e) {
    var t = Qf(e) ? 'checked' : 'value',
      l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      a = '' + e[t]
    if (
      !e.hasOwnProperty(t) &&
      typeof l < 'u' &&
      typeof l.get == 'function' &&
      typeof l.set == 'function'
    ) {
      var n = l.get,
        u = l.set
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this)
          },
          set: function (c) {
            ;(a = '' + c), u.call(this, c)
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a
          },
          setValue: function (c) {
            a = '' + c
          },
          stopTracking: function () {
            ;(e._valueTracker = null), delete e[t]
          },
        }
      )
    }
  }
  function Qu(e) {
    e._valueTracker || (e._valueTracker = D2(e))
  }
  function Kf(e) {
    if (!e) return !1
    var t = e._valueTracker
    if (!t) return !0
    var l = t.getValue(),
      a = ''
    return (
      e && (a = Qf(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    )
  }
  function Ku(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null
    try {
      return e.activeElement || e.body
    } catch {
      return e.body
    }
  }
  var _2 = /[\n"\\]/g
  function Xt(e) {
    return e.replace(_2, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' '
    })
  }
  function vr(e, t, l, a, n, u, c, d) {
    ;(e.name = ''),
      c != null &&
      typeof c != 'function' &&
      typeof c != 'symbol' &&
      typeof c != 'boolean'
        ? (e.type = c)
        : e.removeAttribute('type'),
      t != null
        ? c === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) &&
            (e.value = '' + zt(t))
          : e.value !== '' + zt(t) && (e.value = '' + zt(t))
        : (c !== 'submit' && c !== 'reset') || e.removeAttribute('value'),
      t != null
        ? yr(e, c, zt(t))
        : l != null
        ? yr(e, c, zt(l))
        : a != null && e.removeAttribute('value'),
      n == null && u != null && (e.defaultChecked = !!u),
      n != null &&
        (e.checked = n && typeof n != 'function' && typeof n != 'symbol'),
      d != null &&
      typeof d != 'function' &&
      typeof d != 'symbol' &&
      typeof d != 'boolean'
        ? (e.name = '' + zt(d))
        : e.removeAttribute('name')
  }
  function Jf(e, t, l, a, n, u, c, d) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (e.type = u),
      t != null || l != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || t != null)) return
      ;(l = l != null ? '' + zt(l) : ''),
        (t = t != null ? '' + zt(t) : l),
        d || t === e.value || (e.value = t),
        (e.defaultValue = t)
    }
    ;(a = a ?? n),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (e.checked = d ? e.checked : !!a),
      (e.defaultChecked = !!a),
      c != null &&
        typeof c != 'function' &&
        typeof c != 'symbol' &&
        typeof c != 'boolean' &&
        (e.name = c)
  }
  function yr(e, t, l) {
    ;(t === 'number' && Ku(e.ownerDocument) === e) ||
      e.defaultValue === '' + l ||
      (e.defaultValue = '' + l)
  }
  function Qa(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {}
      for (var n = 0; n < l.length; n++) t['$' + l[n]] = !0
      for (l = 0; l < e.length; l++)
        (n = t.hasOwnProperty('$' + e[l].value)),
          e[l].selected !== n && (e[l].selected = n),
          n && a && (e[l].defaultSelected = !0)
    } else {
      for (l = '' + zt(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          ;(e[n].selected = !0), a && (e[n].defaultSelected = !0)
          return
        }
        t !== null || e[n].disabled || (t = e[n])
      }
      t !== null && (t.selected = !0)
    }
  }
  function kf(e, t, l) {
    if (
      t != null &&
      ((t = '' + zt(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t)
      return
    }
    e.defaultValue = l != null ? '' + zt(l) : ''
  }
  function $f(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(o(92))
        if (Re(a)) {
          if (1 < a.length) throw Error(o(93))
          a = a[0]
        }
        l = a
      }
      l == null && (l = ''), (t = l)
    }
    ;(l = zt(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== '' && a !== null && (e.value = a)
  }
  function Ka(e, t) {
    if (t) {
      var l = e.firstChild
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t
        return
      }
    }
    e.textContent = t
  }
  var A2 = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  )
  function Wf(e, t, l) {
    var a = t.indexOf('--') === 0
    l == null || typeof l == 'boolean' || l === ''
      ? a
        ? e.setProperty(t, '')
        : t === 'float'
        ? (e.cssFloat = '')
        : (e[t] = '')
      : a
      ? e.setProperty(t, l)
      : typeof l != 'number' || l === 0 || A2.has(t)
      ? t === 'float'
        ? (e.cssFloat = l)
        : (e[t] = ('' + l).trim())
      : (e[t] = l + 'px')
  }
  function Ff(e, t, l) {
    if (t != null && typeof t != 'object') throw Error(o(62))
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf('--') === 0
            ? e.setProperty(a, '')
            : a === 'float'
            ? (e.cssFloat = '')
            : (e[a] = ''))
      for (var n in t)
        (a = t[n]), t.hasOwnProperty(n) && l[n] !== a && Wf(e, n, a)
    } else for (var u in t) t.hasOwnProperty(u) && Wf(e, u, t[u])
  }
  function gr(e) {
    if (e.indexOf('-') === -1) return !1
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1
      default:
        return !0
    }
  }
  var O2 = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    w2 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i
  function Ju(e) {
    return w2.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e
  }
  var pr = null
  function br(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    )
  }
  var Ja = null,
    ka = null
  function Pf(e) {
    var t = we(e)
    if (t && (e = t.stateNode)) {
      var l = e[Q] || null
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (vr(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (t = l.name),
            l.type === 'radio' && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode
            for (
              l = l.querySelectorAll(
                'input[name="' + Xt('' + t) + '"][type="radio"]'
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t]
              if (a !== e && a.form === e.form) {
                var n = a[Q] || null
                if (!n) throw Error(o(90))
                vr(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                )
              }
            }
            for (t = 0; t < l.length; t++)
              (a = l[t]), a.form === e.form && Kf(a)
          }
          break e
        case 'textarea':
          kf(e, l.value, l.defaultValue)
          break e
        case 'select':
          ;(t = l.value), t != null && Qa(e, !!l.multiple, t, !1)
      }
    }
  }
  var Sr = !1
  function If(e, t, l) {
    if (Sr) return e(t, l)
    Sr = !0
    try {
      var a = e(t)
      return a
    } finally {
      if (
        ((Sr = !1),
        (Ja !== null || ka !== null) &&
          (wi(), Ja && ((t = Ja), (e = ka), (ka = Ja = null), Pf(t), e)))
      )
        for (t = 0; t < e.length; t++) Pf(e[t])
    }
  }
  function Nn(e, t) {
    var l = e.stateNode
    if (l === null) return null
    var a = l[Q] || null
    if (a === null) return null
    l = a[t]
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ;(a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !a)
        break e
      default:
        e = !1
    }
    if (e) return null
    if (l && typeof l != 'function') throw Error(o(231, t, typeof l))
    return l
  }
  var El = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Er = !1
  if (El)
    try {
      var Un = {}
      Object.defineProperty(Un, 'passive', {
        get: function () {
          Er = !0
        },
      }),
        window.addEventListener('test', Un, Un),
        window.removeEventListener('test', Un, Un)
    } catch {
      Er = !1
    }
  var Vl = null,
    xr = null,
    ku = null
  function eo() {
    if (ku) return ku
    var e,
      t = xr,
      l = t.length,
      a,
      n = 'value' in Vl ? Vl.value : Vl.textContent,
      u = n.length
    for (e = 0; e < l && t[e] === n[e]; e++);
    var c = l - e
    for (a = 1; a <= c && t[l - a] === n[u - a]; a++);
    return (ku = n.slice(e, 1 < a ? 1 - a : void 0))
  }
  function $u(e) {
    var t = e.keyCode
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    )
  }
  function Wu() {
    return !0
  }
  function to() {
    return !1
  }
  function Ct(e) {
    function t(l, a, n, u, c) {
      ;(this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = c),
        (this.currentTarget = null)
      for (var d in e)
        e.hasOwnProperty(d) && ((l = e[d]), (this[d] = l ? l(u) : u[d]))
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Wu
          : to),
        (this.isPropagationStopped = to),
        this
      )
    }
    return (
      E(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var l = this.nativeEvent
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
            (this.isDefaultPrevented = Wu))
        },
        stopPropagation: function () {
          var l = this.nativeEvent
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = Wu))
        },
        persist: function () {},
        isPersistent: Wu,
      }),
      t
    )
  }
  var Sa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Fu = Ct(Sa),
    jn = E({}, Sa, { view: 0, detail: 0 }),
    N2 = Ct(jn),
    Tr,
    Rr,
    Hn,
    Pu = E({}, jn, {
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
      getModifierState: zr,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== Hn &&
              (Hn && e.type === 'mousemove'
                ? ((Tr = e.screenX - Hn.screenX), (Rr = e.screenY - Hn.screenY))
                : (Rr = Tr = 0),
              (Hn = e)),
            Tr)
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Rr
      },
    }),
    lo = Ct(Pu),
    U2 = E({}, Pu, { dataTransfer: 0 }),
    j2 = Ct(U2),
    H2 = E({}, jn, { relatedTarget: 0 }),
    Mr = Ct(H2),
    L2 = E({}, Sa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    B2 = Ct(L2),
    q2 = E({}, Sa, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData
      },
    }),
    Y2 = Ct(q2),
    G2 = E({}, Sa, { data: 0 }),
    ao = Ct(G2),
    V2 = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    X2 = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Z2 = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    }
  function Q2(e) {
    var t = this.nativeEvent
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Z2[e])
      ? !!t[e]
      : !1
  }
  function zr() {
    return Q2
  }
  var K2 = E({}, jn, {
      key: function (e) {
        if (e.key) {
          var t = V2[e.key] || e.key
          if (t !== 'Unidentified') return t
        }
        return e.type === 'keypress'
          ? ((e = $u(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
          ? X2[e.keyCode] || 'Unidentified'
          : ''
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: zr,
      charCode: function (e) {
        return e.type === 'keypress' ? $u(e) : 0
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
      },
      which: function (e) {
        return e.type === 'keypress'
          ? $u(e)
          : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0
      },
    }),
    J2 = Ct(K2),
    k2 = E({}, Pu, {
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
    no = Ct(k2),
    $2 = E({}, jn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: zr,
    }),
    W2 = Ct($2),
    F2 = E({}, Sa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    P2 = Ct(F2),
    I2 = E({}, Pu, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
          ? -e.wheelDeltaX
          : 0
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
          ? -e.wheelDelta
          : 0
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    eh = Ct(I2),
    th = E({}, Sa, { newState: 0, oldState: 0 }),
    lh = Ct(th),
    ah = [9, 13, 27, 32],
    Cr = El && 'CompositionEvent' in window,
    Ln = null
  El && 'documentMode' in document && (Ln = document.documentMode)
  var nh = El && 'TextEvent' in window && !Ln,
    uo = El && (!Cr || (Ln && 8 < Ln && 11 >= Ln)),
    io = ' ',
    ro = !1
  function co(e, t) {
    switch (e) {
      case 'keyup':
        return ah.indexOf(t.keyCode) !== -1
      case 'keydown':
        return t.keyCode !== 229
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0
      default:
        return !1
    }
  }
  function fo(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
  }
  var $a = !1
  function uh(e, t) {
    switch (e) {
      case 'compositionend':
        return fo(t)
      case 'keypress':
        return t.which !== 32 ? null : ((ro = !0), io)
      case 'textInput':
        return (e = t.data), e === io && ro ? null : e
      default:
        return null
    }
  }
  function ih(e, t) {
    if ($a)
      return e === 'compositionend' || (!Cr && co(e, t))
        ? ((e = eo()), (ku = xr = Vl = null), ($a = !1), e)
        : null
    switch (e) {
      case 'paste':
        return null
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char
          if (t.which) return String.fromCharCode(t.which)
        }
        return null
      case 'compositionend':
        return uo && t.locale !== 'ko' ? null : t.data
      default:
        return null
    }
  }
  var rh = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
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
  }
  function oo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return t === 'input' ? !!rh[e.type] : t === 'textarea'
  }
  function so(e, t, l, a) {
    Ja ? (ka ? ka.push(a) : (ka = [a])) : (Ja = a),
      (t = Bi(t, 'onChange')),
      0 < t.length &&
        ((l = new Fu('onChange', 'change', null, l, a)),
        e.push({ event: l, listeners: t }))
  }
  var Bn = null,
    qn = null
  function ch(e) {
    K0(e, 0)
  }
  function Iu(e) {
    var t = Qe(e)
    if (Kf(t)) return e
  }
  function ho(e, t) {
    if (e === 'change') return t
  }
  var mo = !1
  if (El) {
    var Dr
    if (El) {
      var _r = 'oninput' in document
      if (!_r) {
        var vo = document.createElement('div')
        vo.setAttribute('oninput', 'return;'),
          (_r = typeof vo.oninput == 'function')
      }
      Dr = _r
    } else Dr = !1
    mo = Dr && (!document.documentMode || 9 < document.documentMode)
  }
  function yo() {
    Bn && (Bn.detachEvent('onpropertychange', go), (qn = Bn = null))
  }
  function go(e) {
    if (e.propertyName === 'value' && Iu(qn)) {
      var t = []
      so(t, qn, e, br(e)), If(ch, t)
    }
  }
  function fh(e, t, l) {
    e === 'focusin'
      ? (yo(), (Bn = t), (qn = l), Bn.attachEvent('onpropertychange', go))
      : e === 'focusout' && yo()
  }
  function oh(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return Iu(qn)
  }
  function sh(e, t) {
    if (e === 'click') return Iu(t)
  }
  function dh(e, t) {
    if (e === 'input' || e === 'change') return Iu(t)
  }
  function hh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
  }
  var wt = typeof Object.is == 'function' ? Object.is : hh
  function Yn(e, t) {
    if (wt(e, t)) return !0
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1
    var l = Object.keys(e),
      a = Object.keys(t)
    if (l.length !== a.length) return !1
    for (a = 0; a < l.length; a++) {
      var n = l[a]
      if (!Ga.call(t, n) || !wt(e[n], t[n])) return !1
    }
    return !0
  }
  function po(e) {
    for (; e && e.firstChild; ) e = e.firstChild
    return e
  }
  function bo(e, t) {
    var l = po(e)
    e = 0
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t))
          return { node: l, offset: t - e }
        e = a
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling
            break e
          }
          l = l.parentNode
        }
        l = void 0
      }
      l = po(l)
    }
  }
  function So(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? So(e, t.parentNode)
        : 'contains' in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1
  }
  function Eo(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window
    for (var t = Ku(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == 'string'
      } catch {
        l = !1
      }
      if (l) e = t.contentWindow
      else break
      t = Ku(e.document)
    }
    return t
  }
  function Ar(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    )
  }
  var mh = El && 'documentMode' in document && 11 >= document.documentMode,
    Wa = null,
    Or = null,
    Gn = null,
    wr = !1
  function xo(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument
    wr ||
      Wa == null ||
      Wa !== Ku(a) ||
      ((a = Wa),
      'selectionStart' in a && Ar(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Gn && Yn(Gn, a)) ||
        ((Gn = a),
        (a = Bi(Or, 'onSelect')),
        0 < a.length &&
          ((t = new Fu('onSelect', 'select', null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = Wa))))
  }
  function Ea(e, t) {
    var l = {}
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l['Webkit' + e] = 'webkit' + t),
      (l['Moz' + e] = 'moz' + t),
      l
    )
  }
  var Fa = {
      animationend: Ea('Animation', 'AnimationEnd'),
      animationiteration: Ea('Animation', 'AnimationIteration'),
      animationstart: Ea('Animation', 'AnimationStart'),
      transitionrun: Ea('Transition', 'TransitionRun'),
      transitionstart: Ea('Transition', 'TransitionStart'),
      transitioncancel: Ea('Transition', 'TransitionCancel'),
      transitionend: Ea('Transition', 'TransitionEnd'),
    },
    Nr = {},
    To = {}
  El &&
    ((To = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Fa.animationend.animation,
      delete Fa.animationiteration.animation,
      delete Fa.animationstart.animation),
    'TransitionEvent' in window || delete Fa.transitionend.transition)
  function xa(e) {
    if (Nr[e]) return Nr[e]
    if (!Fa[e]) return e
    var t = Fa[e],
      l
    for (l in t) if (t.hasOwnProperty(l) && l in To) return (Nr[e] = t[l])
    return e
  }
  var Ro = xa('animationend'),
    Mo = xa('animationiteration'),
    zo = xa('animationstart'),
    vh = xa('transitionrun'),
    yh = xa('transitionstart'),
    gh = xa('transitioncancel'),
    Co = xa('transitionend'),
    Do = new Map(),
    Ur =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      )
  Ur.push('scrollEnd')
  function nl(e, t) {
    Do.set(e, t), xt(t, [e])
  }
  var _o = new WeakMap()
  function Zt(e, t) {
    if (typeof e == 'object' && e !== null) {
      var l = _o.get(e)
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: wn(t) }), _o.set(e, t), t)
    }
    return { value: e, source: t, stack: wn(t) }
  }
  var Qt = [],
    Pa = 0,
    jr = 0
  function ei() {
    for (var e = Pa, t = (jr = Pa = 0); t < e; ) {
      var l = Qt[t]
      Qt[t++] = null
      var a = Qt[t]
      Qt[t++] = null
      var n = Qt[t]
      Qt[t++] = null
      var u = Qt[t]
      if (((Qt[t++] = null), a !== null && n !== null)) {
        var c = a.pending
        c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)),
          (a.pending = n)
      }
      u !== 0 && Ao(l, n, u)
    }
  }
  function ti(e, t, l, a) {
    ;(Qt[Pa++] = e),
      (Qt[Pa++] = t),
      (Qt[Pa++] = l),
      (Qt[Pa++] = a),
      (jr |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a)
  }
  function Hr(e, t, l, a) {
    return ti(e, t, l, a), li(e)
  }
  function Ia(e, t) {
    return ti(e, null, null, t), li(e)
  }
  function Ao(e, t, l) {
    e.lanes |= l
    var a = e.alternate
    a !== null && (a.lanes |= l)
    for (var n = !1, u = e.return; u !== null; )
      (u.childLanes |= l),
        (a = u.alternate),
        a !== null && (a.childLanes |= l),
        u.tag === 22 &&
          ((e = u.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = u),
        (u = u.return)
    return e.tag === 3
      ? ((u = e.stateNode),
        n &&
          t !== null &&
          ((n = 31 - ht(l)),
          (e = u.hiddenUpdates),
          (a = e[n]),
          a === null ? (e[n] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        u)
      : null
  }
  function li(e) {
    if (50 < du) throw ((du = 0), (Vc = null), Error(o(185)))
    for (var t = e.return; t !== null; ) (e = t), (t = e.return)
    return e.tag === 3 ? e.stateNode : null
  }
  var en = {}
  function ph(e, t, l, a) {
    ;(this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null)
  }
  function Nt(e, t, l, a) {
    return new ph(e, t, l, a)
  }
  function Lr(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent)
  }
  function xl(e, t) {
    var l = e.alternate
    return (
      l === null
        ? ((l = Nt(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    )
  }
  function Oo(e, t) {
    e.flags &= 65011714
    var l = e.alternate
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    )
  }
  function ai(e, t, l, a, n, u) {
    var c = 0
    if (((a = e), typeof e == 'function')) Lr(e) && (c = 1)
    else if (typeof e == 'string')
      c = S3(e, l, le.current)
        ? 26
        : e === 'html' || e === 'head' || e === 'body'
        ? 27
        : 5
    else
      e: switch (e) {
        case ye:
          return (e = Nt(31, l, t, n)), (e.elementType = ye), (e.lanes = u), e
        case H:
          return Ta(l.children, n, u, t)
        case J:
          ;(c = 8), (n |= 24)
          break
        case $:
          return (
            (e = Nt(12, l, t, n | 2)), (e.elementType = $), (e.lanes = u), e
          )
        case F:
          return (e = Nt(13, l, t, n)), (e.elementType = F), (e.lanes = u), e
        case N:
          return (e = Nt(19, l, t, n)), (e.elementType = N), (e.lanes = u), e
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case q:
              case W:
                c = 10
                break e
              case re:
                c = 9
                break e
              case se:
                c = 11
                break e
              case pe:
                c = 14
                break e
              case Se:
                ;(c = 16), (a = null)
                break e
            }
          ;(c = 29),
            (l = Error(o(130, e === null ? 'null' : typeof e, ''))),
            (a = null)
      }
    return (
      (t = Nt(c, l, t, n)), (t.elementType = e), (t.type = a), (t.lanes = u), t
    )
  }
  function Ta(e, t, l, a) {
    return (e = Nt(7, e, a, t)), (e.lanes = l), e
  }
  function Br(e, t, l) {
    return (e = Nt(6, e, null, t)), (e.lanes = l), e
  }
  function qr(e, t, l) {
    return (
      (t = Nt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    )
  }
  var tn = [],
    ln = 0,
    ni = null,
    ui = 0,
    Kt = [],
    Jt = 0,
    Ra = null,
    Tl = 1,
    Rl = ''
  function Ma(e, t) {
    ;(tn[ln++] = ui), (tn[ln++] = ni), (ni = e), (ui = t)
  }
  function wo(e, t, l) {
    ;(Kt[Jt++] = Tl), (Kt[Jt++] = Rl), (Kt[Jt++] = Ra), (Ra = e)
    var a = Tl
    e = Rl
    var n = 32 - ht(a) - 1
    ;(a &= ~(1 << n)), (l += 1)
    var u = 32 - ht(t) + n
    if (30 < u) {
      var c = n - (n % 5)
      ;(u = (a & ((1 << c) - 1)).toString(32)),
        (a >>= c),
        (n -= c),
        (Tl = (1 << (32 - ht(t) + n)) | (l << n) | a),
        (Rl = u + e)
    } else (Tl = (1 << u) | (l << n) | a), (Rl = e)
  }
  function Yr(e) {
    e.return !== null && (Ma(e, 1), wo(e, 1, 0))
  }
  function Gr(e) {
    for (; e === ni; )
      (ni = tn[--ln]), (tn[ln] = null), (ui = tn[--ln]), (tn[ln] = null)
    for (; e === Ra; )
      (Ra = Kt[--Jt]),
        (Kt[Jt] = null),
        (Rl = Kt[--Jt]),
        (Kt[Jt] = null),
        (Tl = Kt[--Jt]),
        (Kt[Jt] = null)
  }
  var Tt = null,
    Ie = null,
    je = !1,
    za = null,
    ol = !1,
    Vr = Error(o(519))
  function Ca(e) {
    var t = Error(o(418, ''))
    throw (Zn(Zt(t, e)), Vr)
  }
  function No(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps
    switch (((t[X] = e), (t[Q] = a), l)) {
      case 'dialog':
        Ce('cancel', t), Ce('close', t)
        break
      case 'iframe':
      case 'object':
      case 'embed':
        Ce('load', t)
        break
      case 'video':
      case 'audio':
        for (l = 0; l < mu.length; l++) Ce(mu[l], t)
        break
      case 'source':
        Ce('error', t)
        break
      case 'img':
      case 'image':
      case 'link':
        Ce('error', t), Ce('load', t)
        break
      case 'details':
        Ce('toggle', t)
        break
      case 'input':
        Ce('invalid', t),
          Jf(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          Qu(t)
        break
      case 'select':
        Ce('invalid', t)
        break
      case 'textarea':
        Ce('invalid', t), $f(t, a.value, a.defaultValue, a.children), Qu(t)
    }
    ;(l = a.children),
      (typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') ||
      t.textContent === '' + l ||
      a.suppressHydrationWarning === !0 ||
      W0(t.textContent, l)
        ? (a.popover != null && (Ce('beforetoggle', t), Ce('toggle', t)),
          a.onScroll != null && Ce('scroll', t),
          a.onScrollEnd != null && Ce('scrollend', t),
          a.onClick != null && (t.onclick = qi),
          (t = !0))
        : (t = !1),
      t || Ca(e)
  }
  function Uo(e) {
    for (Tt = e.return; Tt; )
      switch (Tt.tag) {
        case 5:
        case 13:
          ol = !1
          return
        case 27:
        case 3:
          ol = !0
          return
        default:
          Tt = Tt.return
      }
  }
  function Vn(e) {
    if (e !== Tt) return !1
    if (!je) return Uo(e), (je = !0), !1
    var t = e.tag,
      l
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== 'form' && l !== 'button') || nf(e.type, e.memoizedProps))),
        (l = !l)),
      l && Ie && Ca(e),
      Uo(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317))
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((l = e.data), l === '/$')) {
              if (t === 0) {
                Ie = il(e.nextSibling)
                break e
              }
              t--
            } else (l !== '$' && l !== '$!' && l !== '$?') || t++
          e = e.nextSibling
        }
        Ie = null
      }
    } else
      t === 27
        ? ((t = Ie), na(e.type) ? ((e = ff), (ff = null), (Ie = e)) : (Ie = t))
        : (Ie = Tt ? il(e.stateNode.nextSibling) : null)
    return !0
  }
  function Xn() {
    ;(Ie = Tt = null), (je = !1)
  }
  function jo() {
    var e = za
    return (
      e !== null &&
        (At === null ? (At = e) : At.push.apply(At, e), (za = null)),
      e
    )
  }
  function Zn(e) {
    za === null ? (za = [e]) : za.push(e)
  }
  var Xr = G(null),
    Da = null,
    Ml = null
  function Xl(e, t, l) {
    Z(Xr, t._currentValue), (t._currentValue = l)
  }
  function zl(e) {
    ;(e._currentValue = Xr.current), k(Xr)
  }
  function Zr(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === l)
      )
        break
      e = e.return
    }
  }
  function Qr(e, t, l, a) {
    var n = e.child
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies
      if (u !== null) {
        var c = n.child
        u = u.firstContext
        e: for (; u !== null; ) {
          var d = u
          u = n
          for (var g = 0; g < t.length; g++)
            if (d.context === t[g]) {
              ;(u.lanes |= l),
                (d = u.alternate),
                d !== null && (d.lanes |= l),
                Zr(u.return, l, e),
                a || (c = null)
              break e
            }
          u = d.next
        }
      } else if (n.tag === 18) {
        if (((c = n.return), c === null)) throw Error(o(341))
        ;(c.lanes |= l),
          (u = c.alternate),
          u !== null && (u.lanes |= l),
          Zr(c, l, e),
          (c = null)
      } else c = n.child
      if (c !== null) c.return = n
      else
        for (c = n; c !== null; ) {
          if (c === e) {
            c = null
            break
          }
          if (((n = c.sibling), n !== null)) {
            ;(n.return = c.return), (c = n)
            break
          }
          c = c.return
        }
      n = c
    }
  }
  function Qn(e, t, l, a) {
    e = null
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0
        else if ((n.flags & 262144) !== 0) break
      }
      if (n.tag === 10) {
        var c = n.alternate
        if (c === null) throw Error(o(387))
        if (((c = c.memoizedProps), c !== null)) {
          var d = n.type
          wt(n.pendingProps.value, c.value) ||
            (e !== null ? e.push(d) : (e = [d]))
        }
      } else if (n === Et.current) {
        if (((c = n.alternate), c === null)) throw Error(o(387))
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(Su) : (e = [Su]))
      }
      n = n.return
    }
    e !== null && Qr(t, e, l, a), (t.flags |= 262144)
  }
  function ii(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!wt(e.context._currentValue, e.memoizedValue)) return !0
      e = e.next
    }
    return !1
  }
  function _a(e) {
    ;(Da = e),
      (Ml = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null)
  }
  function pt(e) {
    return Ho(Da, e)
  }
  function ri(e, t) {
    return Da === null && _a(e), Ho(e, t)
  }
  function Ho(e, t) {
    var l = t._currentValue
    if (((t = { context: t, memoizedValue: l, next: null }), Ml === null)) {
      if (e === null) throw Error(o(308))
      ;(Ml = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288)
    } else Ml = Ml.next = t
    return l
  }
  var bh =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  e.push(a)
                },
              })
            this.abort = function () {
              ;(t.aborted = !0),
                e.forEach(function (l) {
                  return l()
                })
            }
          },
    Sh = i.unstable_scheduleCallback,
    Eh = i.unstable_NormalPriority,
    ct = {
      $$typeof: W,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    }
  function Kr() {
    return { controller: new bh(), data: new Map(), refCount: 0 }
  }
  function Kn(e) {
    e.refCount--,
      e.refCount === 0 &&
        Sh(Eh, function () {
          e.controller.abort()
        })
  }
  var Jn = null,
    Jr = 0,
    an = 0,
    nn = null
  function xh(e, t) {
    if (Jn === null) {
      var l = (Jn = [])
      ;(Jr = 0),
        (an = $c()),
        (nn = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            l.push(a)
          },
        })
    }
    return Jr++, t.then(Lo, Lo), t
  }
  function Lo() {
    if (--Jr === 0 && Jn !== null) {
      nn !== null && (nn.status = 'fulfilled')
      var e = Jn
      ;(Jn = null), (an = 0), (nn = null)
      for (var t = 0; t < e.length; t++) (0, e[t])()
    }
  }
  function Th(e, t) {
    var l = [],
      a = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (n) {
          l.push(n)
        },
      }
    return (
      e.then(
        function () {
          ;(a.status = 'fulfilled'), (a.value = t)
          for (var n = 0; n < l.length; n++) (0, l[n])(t)
        },
        function (n) {
          for (a.status = 'rejected', a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0)
        }
      ),
      a
    )
  }
  var Bo = O.S
  O.S = function (e, t) {
    typeof t == 'object' &&
      t !== null &&
      typeof t.then == 'function' &&
      xh(e, t),
      Bo !== null && Bo(e, t)
  }
  var Aa = G(null)
  function kr() {
    var e = Aa.current
    return e !== null ? e : Xe.pooledCache
  }
  function ci(e, t) {
    t === null ? Z(Aa, Aa.current) : Z(Aa, t.pool)
  }
  function qo() {
    var e = kr()
    return e === null ? null : { parent: ct._currentValue, pool: e }
  }
  var kn = Error(o(460)),
    Yo = Error(o(474)),
    fi = Error(o(542)),
    $r = { then: function () {} }
  function Go(e) {
    return (e = e.status), e === 'fulfilled' || e === 'rejected'
  }
  function oi() {}
  function Vo(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(oi, oi), (t = l)),
      t.status)
    ) {
      case 'fulfilled':
        return t.value
      case 'rejected':
        throw ((e = t.reason), Zo(e), e)
      default:
        if (typeof t.status == 'string') t.then(oi, oi)
        else {
          if (((e = Xe), e !== null && 100 < e.shellSuspendCounter))
            throw Error(o(482))
          ;(e = t),
            (e.status = 'pending'),
            e.then(
              function (a) {
                if (t.status === 'pending') {
                  var n = t
                  ;(n.status = 'fulfilled'), (n.value = a)
                }
              },
              function (a) {
                if (t.status === 'pending') {
                  var n = t
                  ;(n.status = 'rejected'), (n.reason = a)
                }
              }
            )
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value
          case 'rejected':
            throw ((e = t.reason), Zo(e), e)
        }
        throw (($n = t), kn)
    }
  }
  var $n = null
  function Xo() {
    if ($n === null) throw Error(o(459))
    var e = $n
    return ($n = null), e
  }
  function Zo(e) {
    if (e === kn || e === fi) throw Error(o(483))
  }
  var Zl = !1
  function Wr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    }
  }
  function Fr(e, t) {
    ;(e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        })
  }
  function Ql(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null }
  }
  function Kl(e, t, l) {
    var a = e.updateQueue
    if (a === null) return null
    if (((a = a.shared), (He & 2) !== 0)) {
      var n = a.pending
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = li(e)),
        Ao(e, null, l),
        t
      )
    }
    return ti(e, a, t, l), li(e)
  }
  function Wn(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var a = t.lanes
      ;(a &= e.pendingLanes), (l |= a), (t.lanes = l), pa(e, l)
    }
  }
  function Pr(e, t) {
    var l = e.updateQueue,
      a = e.alternate
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var c = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          }
          u === null ? (n = u = c) : (u = u.next = c), (l = l.next)
        } while (l !== null)
        u === null ? (n = u = t) : (u = u.next = t)
      } else n = u = t
      ;(l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l)
      return
    }
    ;(e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t)
  }
  var Ir = !1
  function Fn() {
    if (Ir) {
      var e = nn
      if (e !== null) throw e
    }
  }
  function Pn(e, t, l, a) {
    Ir = !1
    var n = e.updateQueue
    Zl = !1
    var u = n.firstBaseUpdate,
      c = n.lastBaseUpdate,
      d = n.shared.pending
    if (d !== null) {
      n.shared.pending = null
      var g = d,
        C = g.next
      ;(g.next = null), c === null ? (u = C) : (c.next = C), (c = g)
      var L = e.alternate
      L !== null &&
        ((L = L.updateQueue),
        (d = L.lastBaseUpdate),
        d !== c &&
          (d === null ? (L.firstBaseUpdate = C) : (d.next = C),
          (L.lastBaseUpdate = g)))
    }
    if (u !== null) {
      var V = n.baseState
      ;(c = 0), (L = C = g = null), (d = u)
      do {
        var _ = d.lane & -536870913,
          A = _ !== d.lane
        if (A ? (Oe & _) === _ : (a & _) === _) {
          _ !== 0 && _ === an && (Ir = !0),
            L !== null &&
              (L = L.next =
                {
                  lane: 0,
                  tag: d.tag,
                  payload: d.payload,
                  callback: null,
                  next: null,
                })
          e: {
            var me = e,
              oe = d
            _ = t
            var Ye = l
            switch (oe.tag) {
              case 1:
                if (((me = oe.payload), typeof me == 'function')) {
                  V = me.call(Ye, V, _)
                  break e
                }
                V = me
                break e
              case 3:
                me.flags = (me.flags & -65537) | 128
              case 0:
                if (
                  ((me = oe.payload),
                  (_ = typeof me == 'function' ? me.call(Ye, V, _) : me),
                  _ == null)
                )
                  break e
                V = E({}, V, _)
                break e
              case 2:
                Zl = !0
            }
          }
          ;(_ = d.callback),
            _ !== null &&
              ((e.flags |= 64),
              A && (e.flags |= 8192),
              (A = n.callbacks),
              A === null ? (n.callbacks = [_]) : A.push(_))
        } else
          (A = {
            lane: _,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null,
          }),
            L === null ? ((C = L = A), (g = V)) : (L = L.next = A),
            (c |= _)
        if (((d = d.next), d === null)) {
          if (((d = n.shared.pending), d === null)) break
          ;(A = d),
            (d = A.next),
            (A.next = null),
            (n.lastBaseUpdate = A),
            (n.shared.pending = null)
        }
      } while (!0)
      L === null && (g = V),
        (n.baseState = g),
        (n.firstBaseUpdate = C),
        (n.lastBaseUpdate = L),
        u === null && (n.shared.lanes = 0),
        (ea |= c),
        (e.lanes = c),
        (e.memoizedState = V)
    }
  }
  function Qo(e, t) {
    if (typeof e != 'function') throw Error(o(191, e))
    e.call(t)
  }
  function Ko(e, t) {
    var l = e.callbacks
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) Qo(l[e], t)
  }
  var un = G(null),
    si = G(0)
  function Jo(e, t) {
    ;(e = Nl), Z(si, e), Z(un, t), (Nl = e | t.baseLanes)
  }
  function ec() {
    Z(si, Nl), Z(un, un.current)
  }
  function tc() {
    ;(Nl = si.current), k(un), k(si)
  }
  var Jl = 0,
    Ee = null,
    Be = null,
    ut = null,
    di = !1,
    rn = !1,
    Oa = !1,
    hi = 0,
    In = 0,
    cn = null,
    Rh = 0
  function lt() {
    throw Error(o(321))
  }
  function lc(e, t) {
    if (t === null) return !1
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!wt(e[l], t[l])) return !1
    return !0
  }
  function ac(e, t, l, a, n, u) {
    return (
      (Jl = u),
      (Ee = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (O.H = e === null || e.memoizedState === null ? As : Os),
      (Oa = !1),
      (u = l(a, n)),
      (Oa = !1),
      rn && (u = $o(t, l, a, n)),
      ko(e),
      u
    )
  }
  function ko(e) {
    O.H = bi
    var t = Be !== null && Be.next !== null
    if (((Jl = 0), (ut = Be = Ee = null), (di = !1), (In = 0), (cn = null), t))
      throw Error(o(300))
    e === null || ot || ((e = e.dependencies), e !== null && ii(e) && (ot = !0))
  }
  function $o(e, t, l, a) {
    Ee = e
    var n = 0
    do {
      if ((rn && (cn = null), (In = 0), (rn = !1), 25 <= n)) throw Error(o(301))
      if (((n += 1), (ut = Be = null), e.updateQueue != null)) {
        var u = e.updateQueue
        ;(u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0)
      }
      ;(O.H = Oh), (u = t(l, a))
    } while (rn)
    return u
  }
  function Mh() {
    var e = O.H,
      t = e.useState()[0]
    return (
      (t = typeof t.then == 'function' ? eu(t) : t),
      (e = e.useState()[0]),
      (Be !== null ? Be.memoizedState : null) !== e && (Ee.flags |= 1024),
      t
    )
  }
  function nc() {
    var e = hi !== 0
    return (hi = 0), e
  }
  function uc(e, t, l) {
    ;(t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l)
  }
  function ic(e) {
    if (di) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue
        t !== null && (t.pending = null), (e = e.next)
      }
      di = !1
    }
    ;(Jl = 0), (ut = Be = Ee = null), (rn = !1), (In = hi = 0), (cn = null)
  }
  function Dt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    }
    return ut === null ? (Ee.memoizedState = ut = e) : (ut = ut.next = e), ut
  }
  function it() {
    if (Be === null) {
      var e = Ee.alternate
      e = e !== null ? e.memoizedState : null
    } else e = Be.next
    var t = ut === null ? Ee.memoizedState : ut.next
    if (t !== null) (ut = t), (Be = e)
    else {
      if (e === null)
        throw Ee.alternate === null ? Error(o(467)) : Error(o(310))
      ;(Be = e),
        (e = {
          memoizedState: Be.memoizedState,
          baseState: Be.baseState,
          baseQueue: Be.baseQueue,
          queue: Be.queue,
          next: null,
        }),
        ut === null ? (Ee.memoizedState = ut = e) : (ut = ut.next = e)
    }
    return ut
  }
  function rc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null }
  }
  function eu(e) {
    var t = In
    return (
      (In += 1),
      cn === null && (cn = []),
      (e = Vo(cn, e, t)),
      (t = Ee),
      (ut === null ? t.memoizedState : ut.next) === null &&
        ((t = t.alternate),
        (O.H = t === null || t.memoizedState === null ? As : Os)),
      e
    )
  }
  function mi(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return eu(e)
      if (e.$$typeof === W) return pt(e)
    }
    throw Error(o(438, String(e)))
  }
  function cc(e) {
    var t = null,
      l = Ee.updateQueue
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = Ee.alternate
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice()
              }),
              index: 0,
            })))
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = rc()), (Ee.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = Ze
    return t.index++, l
  }
  function Cl(e, t) {
    return typeof t == 'function' ? t(e) : t
  }
  function vi(e) {
    var t = it()
    return fc(t, Be, e)
  }
  function fc(e, t, l) {
    var a = e.queue
    if (a === null) throw Error(o(311))
    a.lastRenderedReducer = l
    var n = e.baseQueue,
      u = a.pending
    if (u !== null) {
      if (n !== null) {
        var c = n.next
        ;(n.next = u.next), (u.next = c)
      }
      ;(t.baseQueue = n = u), (a.pending = null)
    }
    if (((u = e.baseState), n === null)) e.memoizedState = u
    else {
      t = n.next
      var d = (c = null),
        g = null,
        C = t,
        L = !1
      do {
        var V = C.lane & -536870913
        if (V !== C.lane ? (Oe & V) === V : (Jl & V) === V) {
          var _ = C.revertLane
          if (_ === 0)
            g !== null &&
              (g = g.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: C.action,
                  hasEagerState: C.hasEagerState,
                  eagerState: C.eagerState,
                  next: null,
                }),
              V === an && (L = !0)
          else if ((Jl & _) === _) {
            ;(C = C.next), _ === an && (L = !0)
            continue
          } else
            (V = {
              lane: 0,
              revertLane: C.revertLane,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null,
            }),
              g === null ? ((d = g = V), (c = u)) : (g = g.next = V),
              (Ee.lanes |= _),
              (ea |= _)
          ;(V = C.action),
            Oa && l(u, V),
            (u = C.hasEagerState ? C.eagerState : l(u, V))
        } else
          (_ = {
            lane: V,
            revertLane: C.revertLane,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null,
          }),
            g === null ? ((d = g = _), (c = u)) : (g = g.next = _),
            (Ee.lanes |= V),
            (ea |= V)
        C = C.next
      } while (C !== null && C !== t)
      if (
        (g === null ? (c = u) : (g.next = d),
        !wt(u, e.memoizedState) && ((ot = !0), L && ((l = nn), l !== null)))
      )
        throw l
      ;(e.memoizedState = u),
        (e.baseState = c),
        (e.baseQueue = g),
        (a.lastRenderedState = u)
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch]
  }
  function oc(e) {
    var t = it(),
      l = t.queue
    if (l === null) throw Error(o(311))
    l.lastRenderedReducer = e
    var a = l.dispatch,
      n = l.pending,
      u = t.memoizedState
    if (n !== null) {
      l.pending = null
      var c = (n = n.next)
      do (u = e(u, c.action)), (c = c.next)
      while (c !== n)
      wt(u, t.memoizedState) || (ot = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (l.lastRenderedState = u)
    }
    return [u, a]
  }
  function Wo(e, t, l) {
    var a = Ee,
      n = it(),
      u = je
    if (u) {
      if (l === void 0) throw Error(o(407))
      l = l()
    } else l = t()
    var c = !wt((Be || n).memoizedState, l)
    c && ((n.memoizedState = l), (ot = !0)), (n = n.queue)
    var d = Io.bind(null, a, n, e)
    if (
      (tu(2048, 8, d, [e]),
      n.getSnapshot !== t || c || (ut !== null && ut.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        fn(9, yi(), Po.bind(null, a, n, l, t), null),
        Xe === null)
      )
        throw Error(o(349))
      u || (Jl & 124) !== 0 || Fo(a, t, l)
    }
    return l
  }
  function Fo(e, t, l) {
    ;(e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = Ee.updateQueue),
      t === null
        ? ((t = rc()), (Ee.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e))
  }
  function Po(e, t, l, a) {
    ;(t.value = l), (t.getSnapshot = a), es(t) && ts(e)
  }
  function Io(e, t, l) {
    return l(function () {
      es(t) && ts(e)
    })
  }
  function es(e) {
    var t = e.getSnapshot
    e = e.value
    try {
      var l = t()
      return !wt(e, l)
    } catch {
      return !0
    }
  }
  function ts(e) {
    var t = Ia(e, 2)
    t !== null && Bt(t, e, 2)
  }
  function sc(e) {
    var t = Dt()
    if (typeof e == 'function') {
      var l = e
      if (((e = l()), Oa)) {
        tl(!0)
        try {
          l()
        } finally {
          tl(!1)
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Cl,
        lastRenderedState: e,
      }),
      t
    )
  }
  function ls(e, t, l, a) {
    return (e.baseState = l), fc(e, Be, typeof a == 'function' ? a : Cl)
  }
  function zh(e, t, l, a, n) {
    if (pi(e)) throw Error(o(485))
    if (((e = t.action), e !== null)) {
      var u = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          u.listeners.push(c)
        },
      }
      O.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = t.pending),
        l === null
          ? ((u.next = t.pending = u), as(t, u))
          : ((u.next = l.next), (t.pending = l.next = u))
    }
  }
  function as(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state
    if (t.isTransition) {
      var u = O.T,
        c = {}
      O.T = c
      try {
        var d = l(n, a),
          g = O.S
        g !== null && g(c, d), ns(e, t, d)
      } catch (C) {
        dc(e, t, C)
      } finally {
        O.T = u
      }
    } else
      try {
        ;(u = l(n, a)), ns(e, t, u)
      } catch (C) {
        dc(e, t, C)
      }
  }
  function ns(e, t, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function'
      ? l.then(
          function (a) {
            us(e, t, a)
          },
          function (a) {
            return dc(e, t, a)
          }
        )
      : us(e, t, l)
  }
  function us(e, t, l) {
    ;(t.status = 'fulfilled'),
      (t.value = l),
      is(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), as(e, l)))
  }
  function dc(e, t, l) {
    var a = e.pending
    if (((e.pending = null), a !== null)) {
      a = a.next
      do (t.status = 'rejected'), (t.reason = l), is(t), (t = t.next)
      while (t !== a)
    }
    e.action = null
  }
  function is(e) {
    e = e.listeners
    for (var t = 0; t < e.length; t++) (0, e[t])()
  }
  function rs(e, t) {
    return t
  }
  function cs(e, t) {
    if (je) {
      var l = Xe.formState
      if (l !== null) {
        e: {
          var a = Ee
          if (je) {
            if (Ie) {
              t: {
                for (var n = Ie, u = ol; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null
                    break t
                  }
                  if (((n = il(n.nextSibling)), n === null)) {
                    n = null
                    break t
                  }
                }
                ;(u = n.data), (n = u === 'F!' || u === 'F' ? n : null)
              }
              if (n) {
                ;(Ie = il(n.nextSibling)), (a = n.data === 'F!')
                break e
              }
            }
            Ca(a)
          }
          a = !1
        }
        a && (t = l[0])
      }
    }
    return (
      (l = Dt()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: rs,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = Cs.bind(null, Ee, a)),
      (a.dispatch = l),
      (a = sc(!1)),
      (u = gc.bind(null, Ee, !1, a.queue)),
      (a = Dt()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = n),
      (l = zh.bind(null, Ee, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    )
  }
  function fs(e) {
    var t = it()
    return os(t, Be, e)
  }
  function os(e, t, l) {
    if (
      ((t = fc(e, t, rs)[0]),
      (e = vi(Cl)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var a = eu(t)
      } catch (c) {
        throw c === kn ? fi : c
      }
    else a = t
    t = it()
    var n = t.queue,
      u = n.dispatch
    return (
      l !== t.memoizedState &&
        ((Ee.flags |= 2048), fn(9, yi(), Ch.bind(null, n, l), null)),
      [a, u, e]
    )
  }
  function Ch(e, t) {
    e.action = t
  }
  function ss(e) {
    var t = it(),
      l = Be
    if (l !== null) return os(t, l, e)
    it(), (t = t.memoizedState), (l = it())
    var a = l.queue.dispatch
    return (l.memoizedState = e), [t, a, !1]
  }
  function fn(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = Ee.updateQueue),
      t === null && ((t = rc()), (Ee.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    )
  }
  function yi() {
    return { destroy: void 0, resource: void 0 }
  }
  function ds() {
    return it().memoizedState
  }
  function gi(e, t, l, a) {
    var n = Dt()
    ;(a = a === void 0 ? null : a),
      (Ee.flags |= e),
      (n.memoizedState = fn(1 | t, yi(), l, a))
  }
  function tu(e, t, l, a) {
    var n = it()
    a = a === void 0 ? null : a
    var u = n.memoizedState.inst
    Be !== null && a !== null && lc(a, Be.memoizedState.deps)
      ? (n.memoizedState = fn(t, u, l, a))
      : ((Ee.flags |= e), (n.memoizedState = fn(1 | t, u, l, a)))
  }
  function hs(e, t) {
    gi(8390656, 8, e, t)
  }
  function ms(e, t) {
    tu(2048, 8, e, t)
  }
  function vs(e, t) {
    return tu(4, 2, e, t)
  }
  function ys(e, t) {
    return tu(4, 4, e, t)
  }
  function gs(e, t) {
    if (typeof t == 'function') {
      e = e()
      var l = t(e)
      return function () {
        typeof l == 'function' ? l() : t(null)
      }
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null
        }
      )
  }
  function ps(e, t, l) {
    ;(l = l != null ? l.concat([e]) : null), tu(4, 4, gs.bind(null, t, e), l)
  }
  function hc() {}
  function bs(e, t) {
    var l = it()
    t = t === void 0 ? null : t
    var a = l.memoizedState
    return t !== null && lc(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e)
  }
  function Ss(e, t) {
    var l = it()
    t = t === void 0 ? null : t
    var a = l.memoizedState
    if (t !== null && lc(t, a[1])) return a[0]
    if (((a = e()), Oa)) {
      tl(!0)
      try {
        e()
      } finally {
        tl(!1)
      }
    }
    return (l.memoizedState = [a, t]), a
  }
  function mc(e, t, l) {
    return l === void 0 || (Jl & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = T0()), (Ee.lanes |= e), (ea |= e), l)
  }
  function Es(e, t, l, a) {
    return wt(l, t)
      ? l
      : un.current !== null
      ? ((e = mc(e, l, a)), wt(e, t) || (ot = !0), e)
      : (Jl & 42) === 0
      ? ((ot = !0), (e.memoizedState = l))
      : ((e = T0()), (Ee.lanes |= e), (ea |= e), t)
  }
  function xs(e, t, l, a, n) {
    var u = K.p
    K.p = u !== 0 && 8 > u ? u : 8
    var c = O.T,
      d = {}
    ;(O.T = d), gc(e, !1, t, l)
    try {
      var g = n(),
        C = O.S
      if (
        (C !== null && C(d, g),
        g !== null && typeof g == 'object' && typeof g.then == 'function')
      ) {
        var L = Th(g, a)
        lu(e, t, L, Lt(e))
      } else lu(e, t, a, Lt(e))
    } catch (V) {
      lu(e, t, { then: function () {}, status: 'rejected', reason: V }, Lt())
    } finally {
      ;(K.p = u), (O.T = c)
    }
  }
  function Dh() {}
  function vc(e, t, l, a) {
    if (e.tag !== 5) throw Error(o(476))
    var n = Ts(e).queue
    xs(
      e,
      n,
      t,
      ee,
      l === null
        ? Dh
        : function () {
            return Rs(e), l(a)
          }
    )
  }
  function Ts(e) {
    var t = e.memoizedState
    if (t !== null) return t
    t = {
      memoizedState: ee,
      baseState: ee,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Cl,
        lastRenderedState: ee,
      },
      next: null,
    }
    var l = {}
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Cl,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    )
  }
  function Rs(e) {
    var t = Ts(e).next.queue
    lu(e, t, {}, Lt())
  }
  function yc() {
    return pt(Su)
  }
  function Ms() {
    return it().memoizedState
  }
  function zs() {
    return it().memoizedState
  }
  function _h(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Lt()
          e = Ql(l)
          var a = Kl(t, e, l)
          a !== null && (Bt(a, t, l), Wn(a, t, l)),
            (t = { cache: Kr() }),
            (e.payload = t)
          return
      }
      t = t.return
    }
  }
  function Ah(e, t, l) {
    var a = Lt()
    ;(l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      pi(e)
        ? Ds(t, l)
        : ((l = Hr(e, t, l, a)), l !== null && (Bt(l, e, a), _s(l, t, a)))
  }
  function Cs(e, t, l) {
    var a = Lt()
    lu(e, t, l, a)
  }
  function lu(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }
    if (pi(e)) Ds(t, n)
    else {
      var u = e.alternate
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var c = t.lastRenderedState,
            d = u(c, l)
          if (((n.hasEagerState = !0), (n.eagerState = d), wt(d, c)))
            return ti(e, t, n, 0), Xe === null && ei(), !1
        } catch {
        } finally {
        }
      if (((l = Hr(e, t, n, a)), l !== null))
        return Bt(l, e, a), _s(l, t, a), !0
    }
    return !1
  }
  function gc(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: $c(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      pi(e))
    ) {
      if (t) throw Error(o(479))
    } else (t = Hr(e, l, a, 2)), t !== null && Bt(t, e, 2)
  }
  function pi(e) {
    var t = e.alternate
    return e === Ee || (t !== null && t === Ee)
  }
  function Ds(e, t) {
    rn = di = !0
    var l = e.pending
    l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t)
  }
  function _s(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes
      ;(a &= e.pendingLanes), (l |= a), (t.lanes = l), pa(e, l)
    }
  }
  var bi = {
      readContext: pt,
      use: mi,
      useCallback: lt,
      useContext: lt,
      useEffect: lt,
      useImperativeHandle: lt,
      useLayoutEffect: lt,
      useInsertionEffect: lt,
      useMemo: lt,
      useReducer: lt,
      useRef: lt,
      useState: lt,
      useDebugValue: lt,
      useDeferredValue: lt,
      useTransition: lt,
      useSyncExternalStore: lt,
      useId: lt,
      useHostTransitionStatus: lt,
      useFormState: lt,
      useActionState: lt,
      useOptimistic: lt,
      useMemoCache: lt,
      useCacheRefresh: lt,
    },
    As = {
      readContext: pt,
      use: mi,
      useCallback: function (e, t) {
        return (Dt().memoizedState = [e, t === void 0 ? null : t]), e
      },
      useContext: pt,
      useEffect: hs,
      useImperativeHandle: function (e, t, l) {
        ;(l = l != null ? l.concat([e]) : null),
          gi(4194308, 4, gs.bind(null, t, e), l)
      },
      useLayoutEffect: function (e, t) {
        return gi(4194308, 4, e, t)
      },
      useInsertionEffect: function (e, t) {
        gi(4, 2, e, t)
      },
      useMemo: function (e, t) {
        var l = Dt()
        t = t === void 0 ? null : t
        var a = e()
        if (Oa) {
          tl(!0)
          try {
            e()
          } finally {
            tl(!1)
          }
        }
        return (l.memoizedState = [a, t]), a
      },
      useReducer: function (e, t, l) {
        var a = Dt()
        if (l !== void 0) {
          var n = l(t)
          if (Oa) {
            tl(!0)
            try {
              l(t)
            } finally {
              tl(!1)
            }
          }
        } else n = t
        return (
          (a.memoizedState = a.baseState = n),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (a.queue = e),
          (e = e.dispatch = Ah.bind(null, Ee, e)),
          [a.memoizedState, e]
        )
      },
      useRef: function (e) {
        var t = Dt()
        return (e = { current: e }), (t.memoizedState = e)
      },
      useState: function (e) {
        e = sc(e)
        var t = e.queue,
          l = Cs.bind(null, Ee, t)
        return (t.dispatch = l), [e.memoizedState, l]
      },
      useDebugValue: hc,
      useDeferredValue: function (e, t) {
        var l = Dt()
        return mc(l, e, t)
      },
      useTransition: function () {
        var e = sc(!1)
        return (
          (e = xs.bind(null, Ee, e.queue, !0, !1)),
          (Dt().memoizedState = e),
          [!1, e]
        )
      },
      useSyncExternalStore: function (e, t, l) {
        var a = Ee,
          n = Dt()
        if (je) {
          if (l === void 0) throw Error(o(407))
          l = l()
        } else {
          if (((l = t()), Xe === null)) throw Error(o(349))
          ;(Oe & 124) !== 0 || Fo(a, t, l)
        }
        n.memoizedState = l
        var u = { value: l, getSnapshot: t }
        return (
          (n.queue = u),
          hs(Io.bind(null, a, u, e), [e]),
          (a.flags |= 2048),
          fn(9, yi(), Po.bind(null, a, u, l, t), null),
          l
        )
      },
      useId: function () {
        var e = Dt(),
          t = Xe.identifierPrefix
        if (je) {
          var l = Rl,
            a = Tl
          ;(l = (a & ~(1 << (32 - ht(a) - 1))).toString(32) + l),
            (t = '«' + t + 'R' + l),
            (l = hi++),
            0 < l && (t += 'H' + l.toString(32)),
            (t += '»')
        } else (l = Rh++), (t = '«' + t + 'r' + l.toString(32) + '»')
        return (e.memoizedState = t)
      },
      useHostTransitionStatus: yc,
      useFormState: cs,
      useActionState: cs,
      useOptimistic: function (e) {
        var t = Dt()
        t.memoizedState = t.baseState = e
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        }
        return (
          (t.queue = l),
          (t = gc.bind(null, Ee, !0, l)),
          (l.dispatch = t),
          [e, t]
        )
      },
      useMemoCache: cc,
      useCacheRefresh: function () {
        return (Dt().memoizedState = _h.bind(null, Ee))
      },
    },
    Os = {
      readContext: pt,
      use: mi,
      useCallback: bs,
      useContext: pt,
      useEffect: ms,
      useImperativeHandle: ps,
      useInsertionEffect: vs,
      useLayoutEffect: ys,
      useMemo: Ss,
      useReducer: vi,
      useRef: ds,
      useState: function () {
        return vi(Cl)
      },
      useDebugValue: hc,
      useDeferredValue: function (e, t) {
        var l = it()
        return Es(l, Be.memoizedState, e, t)
      },
      useTransition: function () {
        var e = vi(Cl)[0],
          t = it().memoizedState
        return [typeof e == 'boolean' ? e : eu(e), t]
      },
      useSyncExternalStore: Wo,
      useId: Ms,
      useHostTransitionStatus: yc,
      useFormState: fs,
      useActionState: fs,
      useOptimistic: function (e, t) {
        var l = it()
        return ls(l, Be, e, t)
      },
      useMemoCache: cc,
      useCacheRefresh: zs,
    },
    Oh = {
      readContext: pt,
      use: mi,
      useCallback: bs,
      useContext: pt,
      useEffect: ms,
      useImperativeHandle: ps,
      useInsertionEffect: vs,
      useLayoutEffect: ys,
      useMemo: Ss,
      useReducer: oc,
      useRef: ds,
      useState: function () {
        return oc(Cl)
      },
      useDebugValue: hc,
      useDeferredValue: function (e, t) {
        var l = it()
        return Be === null ? mc(l, e, t) : Es(l, Be.memoizedState, e, t)
      },
      useTransition: function () {
        var e = oc(Cl)[0],
          t = it().memoizedState
        return [typeof e == 'boolean' ? e : eu(e), t]
      },
      useSyncExternalStore: Wo,
      useId: Ms,
      useHostTransitionStatus: yc,
      useFormState: ss,
      useActionState: ss,
      useOptimistic: function (e, t) {
        var l = it()
        return Be !== null
          ? ls(l, Be, e, t)
          : ((l.baseState = e), [e, l.queue.dispatch])
      },
      useMemoCache: cc,
      useCacheRefresh: zs,
    },
    on = null,
    au = 0
  function Si(e) {
    var t = au
    return (au += 1), on === null && (on = []), Vo(on, e, t)
  }
  function nu(e, t) {
    ;(t = t.props.ref), (e.ref = t !== void 0 ? t : null)
  }
  function Ei(e, t) {
    throw t.$$typeof === U
      ? Error(o(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          o(
            31,
            e === '[object Object]'
              ? 'object with keys {' + Object.keys(t).join(', ') + '}'
              : e
          )
        ))
  }
  function ws(e) {
    var t = e._init
    return t(e._payload)
  }
  function Ns(e) {
    function t(T, x) {
      if (e) {
        var z = T.deletions
        z === null ? ((T.deletions = [x]), (T.flags |= 16)) : z.push(x)
      }
    }
    function l(T, x) {
      if (!e) return null
      for (; x !== null; ) t(T, x), (x = x.sibling)
      return null
    }
    function a(T) {
      for (var x = new Map(); T !== null; )
        T.key !== null ? x.set(T.key, T) : x.set(T.index, T), (T = T.sibling)
      return x
    }
    function n(T, x) {
      return (T = xl(T, x)), (T.index = 0), (T.sibling = null), T
    }
    function u(T, x, z) {
      return (
        (T.index = z),
        e
          ? ((z = T.alternate),
            z !== null
              ? ((z = z.index), z < x ? ((T.flags |= 67108866), x) : z)
              : ((T.flags |= 67108866), x))
          : ((T.flags |= 1048576), x)
      )
    }
    function c(T) {
      return e && T.alternate === null && (T.flags |= 67108866), T
    }
    function d(T, x, z, Y) {
      return x === null || x.tag !== 6
        ? ((x = Br(z, T.mode, Y)), (x.return = T), x)
        : ((x = n(x, z)), (x.return = T), x)
    }
    function g(T, x, z, Y) {
      var I = z.type
      return I === H
        ? L(T, x, z.props.children, Y, z.key)
        : x !== null &&
          (x.elementType === I ||
            (typeof I == 'object' &&
              I !== null &&
              I.$$typeof === Se &&
              ws(I) === x.type))
        ? ((x = n(x, z.props)), nu(x, z), (x.return = T), x)
        : ((x = ai(z.type, z.key, z.props, null, T.mode, Y)),
          nu(x, z),
          (x.return = T),
          x)
    }
    function C(T, x, z, Y) {
      return x === null ||
        x.tag !== 4 ||
        x.stateNode.containerInfo !== z.containerInfo ||
        x.stateNode.implementation !== z.implementation
        ? ((x = qr(z, T.mode, Y)), (x.return = T), x)
        : ((x = n(x, z.children || [])), (x.return = T), x)
    }
    function L(T, x, z, Y, I) {
      return x === null || x.tag !== 7
        ? ((x = Ta(z, T.mode, Y, I)), (x.return = T), x)
        : ((x = n(x, z)), (x.return = T), x)
    }
    function V(T, x, z) {
      if (
        (typeof x == 'string' && x !== '') ||
        typeof x == 'number' ||
        typeof x == 'bigint'
      )
        return (x = Br('' + x, T.mode, z)), (x.return = T), x
      if (typeof x == 'object' && x !== null) {
        switch (x.$$typeof) {
          case M:
            return (
              (z = ai(x.type, x.key, x.props, null, T.mode, z)),
              nu(z, x),
              (z.return = T),
              z
            )
          case B:
            return (x = qr(x, T.mode, z)), (x.return = T), x
          case Se:
            var Y = x._init
            return (x = Y(x._payload)), V(T, x, z)
        }
        if (Re(x) || Ke(x))
          return (x = Ta(x, T.mode, z, null)), (x.return = T), x
        if (typeof x.then == 'function') return V(T, Si(x), z)
        if (x.$$typeof === W) return V(T, ri(T, x), z)
        Ei(T, x)
      }
      return null
    }
    function _(T, x, z, Y) {
      var I = x !== null ? x.key : null
      if (
        (typeof z == 'string' && z !== '') ||
        typeof z == 'number' ||
        typeof z == 'bigint'
      )
        return I !== null ? null : d(T, x, '' + z, Y)
      if (typeof z == 'object' && z !== null) {
        switch (z.$$typeof) {
          case M:
            return z.key === I ? g(T, x, z, Y) : null
          case B:
            return z.key === I ? C(T, x, z, Y) : null
          case Se:
            return (I = z._init), (z = I(z._payload)), _(T, x, z, Y)
        }
        if (Re(z) || Ke(z)) return I !== null ? null : L(T, x, z, Y, null)
        if (typeof z.then == 'function') return _(T, x, Si(z), Y)
        if (z.$$typeof === W) return _(T, x, ri(T, z), Y)
        Ei(T, z)
      }
      return null
    }
    function A(T, x, z, Y, I) {
      if (
        (typeof Y == 'string' && Y !== '') ||
        typeof Y == 'number' ||
        typeof Y == 'bigint'
      )
        return (T = T.get(z) || null), d(x, T, '' + Y, I)
      if (typeof Y == 'object' && Y !== null) {
        switch (Y.$$typeof) {
          case M:
            return (
              (T = T.get(Y.key === null ? z : Y.key) || null), g(x, T, Y, I)
            )
          case B:
            return (
              (T = T.get(Y.key === null ? z : Y.key) || null), C(x, T, Y, I)
            )
          case Se:
            var Te = Y._init
            return (Y = Te(Y._payload)), A(T, x, z, Y, I)
        }
        if (Re(Y) || Ke(Y)) return (T = T.get(z) || null), L(x, T, Y, I, null)
        if (typeof Y.then == 'function') return A(T, x, z, Si(Y), I)
        if (Y.$$typeof === W) return A(T, x, z, ri(x, Y), I)
        Ei(x, Y)
      }
      return null
    }
    function me(T, x, z, Y) {
      for (
        var I = null, Te = null, ne = x, de = (x = 0), dt = null;
        ne !== null && de < z.length;
        de++
      ) {
        ne.index > de ? ((dt = ne), (ne = null)) : (dt = ne.sibling)
        var Ue = _(T, ne, z[de], Y)
        if (Ue === null) {
          ne === null && (ne = dt)
          break
        }
        e && ne && Ue.alternate === null && t(T, ne),
          (x = u(Ue, x, de)),
          Te === null ? (I = Ue) : (Te.sibling = Ue),
          (Te = Ue),
          (ne = dt)
      }
      if (de === z.length) return l(T, ne), je && Ma(T, de), I
      if (ne === null) {
        for (; de < z.length; de++)
          (ne = V(T, z[de], Y)),
            ne !== null &&
              ((x = u(ne, x, de)),
              Te === null ? (I = ne) : (Te.sibling = ne),
              (Te = ne))
        return je && Ma(T, de), I
      }
      for (ne = a(ne); de < z.length; de++)
        (dt = A(ne, T, de, z[de], Y)),
          dt !== null &&
            (e &&
              dt.alternate !== null &&
              ne.delete(dt.key === null ? de : dt.key),
            (x = u(dt, x, de)),
            Te === null ? (I = dt) : (Te.sibling = dt),
            (Te = dt))
      return (
        e &&
          ne.forEach(function (fa) {
            return t(T, fa)
          }),
        je && Ma(T, de),
        I
      )
    }
    function oe(T, x, z, Y) {
      if (z == null) throw Error(o(151))
      for (
        var I = null, Te = null, ne = x, de = (x = 0), dt = null, Ue = z.next();
        ne !== null && !Ue.done;
        de++, Ue = z.next()
      ) {
        ne.index > de ? ((dt = ne), (ne = null)) : (dt = ne.sibling)
        var fa = _(T, ne, Ue.value, Y)
        if (fa === null) {
          ne === null && (ne = dt)
          break
        }
        e && ne && fa.alternate === null && t(T, ne),
          (x = u(fa, x, de)),
          Te === null ? (I = fa) : (Te.sibling = fa),
          (Te = fa),
          (ne = dt)
      }
      if (Ue.done) return l(T, ne), je && Ma(T, de), I
      if (ne === null) {
        for (; !Ue.done; de++, Ue = z.next())
          (Ue = V(T, Ue.value, Y)),
            Ue !== null &&
              ((x = u(Ue, x, de)),
              Te === null ? (I = Ue) : (Te.sibling = Ue),
              (Te = Ue))
        return je && Ma(T, de), I
      }
      for (ne = a(ne); !Ue.done; de++, Ue = z.next())
        (Ue = A(ne, T, de, Ue.value, Y)),
          Ue !== null &&
            (e &&
              Ue.alternate !== null &&
              ne.delete(Ue.key === null ? de : Ue.key),
            (x = u(Ue, x, de)),
            Te === null ? (I = Ue) : (Te.sibling = Ue),
            (Te = Ue))
      return (
        e &&
          ne.forEach(function (w3) {
            return t(T, w3)
          }),
        je && Ma(T, de),
        I
      )
    }
    function Ye(T, x, z, Y) {
      if (
        (typeof z == 'object' &&
          z !== null &&
          z.type === H &&
          z.key === null &&
          (z = z.props.children),
        typeof z == 'object' && z !== null)
      ) {
        switch (z.$$typeof) {
          case M:
            e: {
              for (var I = z.key; x !== null; ) {
                if (x.key === I) {
                  if (((I = z.type), I === H)) {
                    if (x.tag === 7) {
                      l(T, x.sibling),
                        (Y = n(x, z.props.children)),
                        (Y.return = T),
                        (T = Y)
                      break e
                    }
                  } else if (
                    x.elementType === I ||
                    (typeof I == 'object' &&
                      I !== null &&
                      I.$$typeof === Se &&
                      ws(I) === x.type)
                  ) {
                    l(T, x.sibling),
                      (Y = n(x, z.props)),
                      nu(Y, z),
                      (Y.return = T),
                      (T = Y)
                    break e
                  }
                  l(T, x)
                  break
                } else t(T, x)
                x = x.sibling
              }
              z.type === H
                ? ((Y = Ta(z.props.children, T.mode, Y, z.key)),
                  (Y.return = T),
                  (T = Y))
                : ((Y = ai(z.type, z.key, z.props, null, T.mode, Y)),
                  nu(Y, z),
                  (Y.return = T),
                  (T = Y))
            }
            return c(T)
          case B:
            e: {
              for (I = z.key; x !== null; ) {
                if (x.key === I)
                  if (
                    x.tag === 4 &&
                    x.stateNode.containerInfo === z.containerInfo &&
                    x.stateNode.implementation === z.implementation
                  ) {
                    l(T, x.sibling),
                      (Y = n(x, z.children || [])),
                      (Y.return = T),
                      (T = Y)
                    break e
                  } else {
                    l(T, x)
                    break
                  }
                else t(T, x)
                x = x.sibling
              }
              ;(Y = qr(z, T.mode, Y)), (Y.return = T), (T = Y)
            }
            return c(T)
          case Se:
            return (I = z._init), (z = I(z._payload)), Ye(T, x, z, Y)
        }
        if (Re(z)) return me(T, x, z, Y)
        if (Ke(z)) {
          if (((I = Ke(z)), typeof I != 'function')) throw Error(o(150))
          return (z = I.call(z)), oe(T, x, z, Y)
        }
        if (typeof z.then == 'function') return Ye(T, x, Si(z), Y)
        if (z.$$typeof === W) return Ye(T, x, ri(T, z), Y)
        Ei(T, z)
      }
      return (typeof z == 'string' && z !== '') ||
        typeof z == 'number' ||
        typeof z == 'bigint'
        ? ((z = '' + z),
          x !== null && x.tag === 6
            ? (l(T, x.sibling), (Y = n(x, z)), (Y.return = T), (T = Y))
            : (l(T, x), (Y = Br(z, T.mode, Y)), (Y.return = T), (T = Y)),
          c(T))
        : l(T, x)
    }
    return function (T, x, z, Y) {
      try {
        au = 0
        var I = Ye(T, x, z, Y)
        return (on = null), I
      } catch (ne) {
        if (ne === kn || ne === fi) throw ne
        var Te = Nt(29, ne, null, T.mode)
        return (Te.lanes = Y), (Te.return = T), Te
      } finally {
      }
    }
  }
  var sn = Ns(!0),
    Us = Ns(!1),
    kt = G(null),
    sl = null
  function kl(e) {
    var t = e.alternate
    Z(ft, ft.current & 1),
      Z(kt, e),
      sl === null &&
        (t === null || un.current !== null || t.memoizedState !== null) &&
        (sl = e)
  }
  function js(e) {
    if (e.tag === 22) {
      if ((Z(ft, ft.current), Z(kt, e), sl === null)) {
        var t = e.alternate
        t !== null && t.memoizedState !== null && (sl = e)
      }
    } else $l()
  }
  function $l() {
    Z(ft, ft.current), Z(kt, kt.current)
  }
  function Dl(e) {
    k(kt), sl === e && (sl = null), k(ft)
  }
  var ft = G(0)
  function xi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === '$?' || cf(l))
        )
          return t
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t
      } else if (t.child !== null) {
        ;(t.child.return = t), (t = t.child)
        continue
      }
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
    return null
  }
  function pc(e, t, l, a) {
    ;(t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : E({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l)
  }
  var bc = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals
      var a = Lt(),
        n = Ql(a)
      ;(n.payload = t),
        l != null && (n.callback = l),
        (t = Kl(e, n, a)),
        t !== null && (Bt(t, e, a), Wn(t, e, a))
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals
      var a = Lt(),
        n = Ql(a)
      ;(n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = Kl(e, n, a)),
        t !== null && (Bt(t, e, a), Wn(t, e, a))
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals
      var l = Lt(),
        a = Ql(l)
      ;(a.tag = 2),
        t != null && (a.callback = t),
        (t = Kl(e, a, l)),
        t !== null && (Bt(t, e, l), Wn(t, e, l))
    },
  }
  function Hs(e, t, l, a, n, u, c) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(a, u, c)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Yn(l, a) || !Yn(n, u)
        : !0
    )
  }
  function Ls(e, t, l, a) {
    ;(e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && bc.enqueueReplaceState(t, t.state, null)
  }
  function wa(e, t) {
    var l = t
    if ('ref' in t) {
      l = {}
      for (var a in t) a !== 'ref' && (l[a] = t[a])
    }
    if ((e = e.defaultProps)) {
      l === t && (l = E({}, l))
      for (var n in e) l[n] === void 0 && (l[n] = e[n])
    }
    return l
  }
  var Ti =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var t = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == 'object' &&
                e !== null &&
                typeof e.message == 'string'
                  ? String(e.message)
                  : String(e),
              error: e,
            })
            if (!window.dispatchEvent(t)) return
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', e)
            return
          }
          console.error(e)
        }
  function Bs(e) {
    Ti(e)
  }
  function qs(e) {
    console.error(e)
  }
  function Ys(e) {
    Ti(e)
  }
  function Ri(e, t) {
    try {
      var l = e.onUncaughtError
      l(t.value, { componentStack: t.stack })
    } catch (a) {
      setTimeout(function () {
        throw a
      })
    }
  }
  function Gs(e, t, l) {
    try {
      var a = e.onCaughtError
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      })
    } catch (n) {
      setTimeout(function () {
        throw n
      })
    }
  }
  function Sc(e, t, l) {
    return (
      (l = Ql(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Ri(e, t)
      }),
      l
    )
  }
  function Vs(e) {
    return (e = Ql(e)), (e.tag = 3), e
  }
  function Xs(e, t, l, a) {
    var n = l.type.getDerivedStateFromError
    if (typeof n == 'function') {
      var u = a.value
      ;(e.payload = function () {
        return n(u)
      }),
        (e.callback = function () {
          Gs(t, l, a)
        })
    }
    var c = l.stateNode
    c !== null &&
      typeof c.componentDidCatch == 'function' &&
      (e.callback = function () {
        Gs(t, l, a),
          typeof n != 'function' &&
            (ta === null ? (ta = new Set([this])) : ta.add(this))
        var d = a.stack
        this.componentDidCatch(a.value, { componentStack: d !== null ? d : '' })
      })
  }
  function wh(e, t, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == 'object' && typeof a.then == 'function')
    ) {
      if (
        ((t = l.alternate),
        t !== null && Qn(t, l, n, !0),
        (l = kt.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              sl === null ? Zc() : l.alternate === null && et === 0 && (et = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === $r
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  Kc(e, a, n)),
              !1
            )
          case 22:
            return (
              (l.flags |= 65536),
              a === $r
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                  Kc(e, a, n)),
              !1
            )
        }
        throw Error(o(435, l.tag))
      }
      return Kc(e, a, n), Zc(), !1
    }
    if (je)
      return (
        (t = kt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== Vr && ((e = Error(o(422), { cause: a })), Zn(Zt(e, l))))
          : (a !== Vr && ((t = Error(o(423), { cause: a })), Zn(Zt(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (a = Zt(a, l)),
            (n = Sc(e.stateNode, a, n)),
            Pr(e, n),
            et !== 4 && (et = 2)),
        !1
      )
    var u = Error(o(520), { cause: a })
    if (
      ((u = Zt(u, l)),
      su === null ? (su = [u]) : su.push(u),
      et !== 4 && (et = 2),
      t === null)
    )
      return !0
    ;(a = Zt(a, l)), (l = t)
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = n & -n),
            (l.lanes |= e),
            (e = Sc(l.stateNode, a, e)),
            Pr(l, e),
            !1
          )
        case 1:
          if (
            ((t = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (u !== null &&
                  typeof u.componentDidCatch == 'function' &&
                  (ta === null || !ta.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = Vs(n)),
              Xs(n, e, l, a),
              Pr(l, n),
              !1
            )
      }
      l = l.return
    } while (l !== null)
    return !1
  }
  var Zs = Error(o(461)),
    ot = !1
  function mt(e, t, l, a) {
    t.child = e === null ? Us(t, null, l, a) : sn(t, e.child, l, a)
  }
  function Qs(e, t, l, a, n) {
    l = l.render
    var u = t.ref
    if ('ref' in a) {
      var c = {}
      for (var d in a) d !== 'ref' && (c[d] = a[d])
    } else c = a
    return (
      _a(t),
      (a = ac(e, t, l, c, u, n)),
      (d = nc()),
      e !== null && !ot
        ? (uc(e, t, n), _l(e, t, n))
        : (je && d && Yr(t), (t.flags |= 1), mt(e, t, a, n), t.child)
    )
  }
  function Ks(e, t, l, a, n) {
    if (e === null) {
      var u = l.type
      return typeof u == 'function' &&
        !Lr(u) &&
        u.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = u), Js(e, t, u, a, n))
        : ((e = ai(l.type, null, a, t, t.mode, n)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e))
    }
    if (((u = e.child), !Dc(e, n))) {
      var c = u.memoizedProps
      if (
        ((l = l.compare), (l = l !== null ? l : Yn), l(c, a) && e.ref === t.ref)
      )
        return _l(e, t, n)
    }
    return (
      (t.flags |= 1),
      (e = xl(u, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    )
  }
  function Js(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps
      if (Yn(u, a) && e.ref === t.ref)
        if (((ot = !1), (t.pendingProps = a = u), Dc(e, n)))
          (e.flags & 131072) !== 0 && (ot = !0)
        else return (t.lanes = e.lanes), _l(e, t, n)
    }
    return Ec(e, t, l, a, n)
  }
  function ks(e, t, l) {
    var a = t.pendingProps,
      n = a.children,
      u = e !== null ? e.memoizedState : null
    if (a.mode === 'hidden') {
      if ((t.flags & 128) !== 0) {
        if (((a = u !== null ? u.baseLanes | l : l), e !== null)) {
          for (n = t.child = e.child, u = 0; n !== null; )
            (u = u | n.lanes | n.childLanes), (n = n.sibling)
          t.childLanes = u & ~a
        } else (t.childLanes = 0), (t.child = null)
        return $s(e, t, a, l)
      }
      if ((l & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && ci(t, u !== null ? u.cachePool : null),
          u !== null ? Jo(t, u) : ec(),
          js(t)
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          $s(e, t, u !== null ? u.baseLanes | l : l, l)
        )
    } else
      u !== null
        ? (ci(t, u.cachePool), Jo(t, u), $l(), (t.memoizedState = null))
        : (e !== null && ci(t, null), ec(), $l())
    return mt(e, t, n, l), t.child
  }
  function $s(e, t, l, a) {
    var n = kr()
    return (
      (n = n === null ? null : { parent: ct._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: l, cachePool: n }),
      e !== null && ci(t, null),
      ec(),
      js(t),
      e !== null && Qn(e, t, a, !0),
      null
    )
  }
  function Mi(e, t) {
    var l = t.ref
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816)
    else {
      if (typeof l != 'function' && typeof l != 'object') throw Error(o(284))
      ;(e === null || e.ref !== l) && (t.flags |= 4194816)
    }
  }
  function Ec(e, t, l, a, n) {
    return (
      _a(t),
      (l = ac(e, t, l, a, void 0, n)),
      (a = nc()),
      e !== null && !ot
        ? (uc(e, t, n), _l(e, t, n))
        : (je && a && Yr(t), (t.flags |= 1), mt(e, t, l, n), t.child)
    )
  }
  function Ws(e, t, l, a, n, u) {
    return (
      _a(t),
      (t.updateQueue = null),
      (l = $o(t, a, l, n)),
      ko(e),
      (a = nc()),
      e !== null && !ot
        ? (uc(e, t, u), _l(e, t, u))
        : (je && a && Yr(t), (t.flags |= 1), mt(e, t, l, u), t.child)
    )
  }
  function Fs(e, t, l, a, n) {
    if ((_a(t), t.stateNode === null)) {
      var u = en,
        c = l.contextType
      typeof c == 'object' && c !== null && (u = pt(c)),
        (u = new l(a, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = bc),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        Wr(t),
        (c = l.contextType),
        (u.context = typeof c == 'object' && c !== null ? pt(c) : en),
        (u.state = t.memoizedState),
        (c = l.getDerivedStateFromProps),
        typeof c == 'function' && (pc(t, l, c, a), (u.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((c = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' &&
            u.UNSAFE_componentWillMount(),
          c !== u.state && bc.enqueueReplaceState(u, u.state, null),
          Pn(t, a, u, n),
          Fn(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (a = !0)
    } else if (e === null) {
      u = t.stateNode
      var d = t.memoizedProps,
        g = wa(l, d)
      u.props = g
      var C = u.context,
        L = l.contextType
      ;(c = en), typeof L == 'object' && L !== null && (c = pt(L))
      var V = l.getDerivedStateFromProps
      ;(L =
        typeof V == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function'),
        (d = t.pendingProps !== d),
        L ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((d || C !== c) && Ls(t, u, a, c)),
        (Zl = !1)
      var _ = t.memoizedState
      ;(u.state = _),
        Pn(t, a, u, n),
        Fn(),
        (C = t.memoizedState),
        d || _ !== C || Zl
          ? (typeof V == 'function' && (pc(t, l, V, a), (C = t.memoizedState)),
            (g = Zl || Hs(t, l, g, a, _, C, c))
              ? (L ||
                  (typeof u.UNSAFE_componentWillMount != 'function' &&
                    typeof u.componentWillMount != 'function') ||
                  (typeof u.componentWillMount == 'function' &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = C)),
            (u.props = a),
            (u.state = C),
            (u.context = c),
            (a = g))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
            (a = !1))
    } else {
      ;(u = t.stateNode),
        Fr(e, t),
        (c = t.memoizedProps),
        (L = wa(l, c)),
        (u.props = L),
        (V = t.pendingProps),
        (_ = u.context),
        (C = l.contextType),
        (g = en),
        typeof C == 'object' && C !== null && (g = pt(C)),
        (d = l.getDerivedStateFromProps),
        (C =
          typeof d == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((c !== V || _ !== g) && Ls(t, u, a, g)),
        (Zl = !1),
        (_ = t.memoizedState),
        (u.state = _),
        Pn(t, a, u, n),
        Fn()
      var A = t.memoizedState
      c !== V ||
      _ !== A ||
      Zl ||
      (e !== null && e.dependencies !== null && ii(e.dependencies))
        ? (typeof d == 'function' && (pc(t, l, d, a), (A = t.memoizedState)),
          (L =
            Zl ||
            Hs(t, l, L, a, _, A, g) ||
            (e !== null && e.dependencies !== null && ii(e.dependencies)))
            ? (C ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' &&
                  u.componentWillUpdate(a, A, g),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(a, A, g)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (c === e.memoizedProps && _ === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (c === e.memoizedProps && _ === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = A)),
          (u.props = a),
          (u.state = A),
          (u.context = g),
          (a = L))
        : (typeof u.componentDidUpdate != 'function' ||
            (c === e.memoizedProps && _ === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (c === e.memoizedProps && _ === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1))
    }
    return (
      (u = a),
      Mi(e, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != 'function'
              ? null
              : u.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = sn(t, e.child, null, n)),
              (t.child = sn(t, null, l, n)))
            : mt(e, t, l, n),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = _l(e, t, n)),
      e
    )
  }
  function Ps(e, t, l, a) {
    return Xn(), (t.flags |= 256), mt(e, t, l, a), t.child
  }
  var xc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  }
  function Tc(e) {
    return { baseLanes: e, cachePool: qo() }
  }
  function Rc(e, t, l) {
    return (e = e !== null ? e.childLanes & ~l : 0), t && (e |= $t), e
  }
  function Is(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      u = (t.flags & 128) !== 0,
      c
    if (
      ((c = u) ||
        (c =
          e !== null && e.memoizedState === null ? !1 : (ft.current & 2) !== 0),
      c && ((n = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (je) {
        if ((n ? kl(t) : $l(), je)) {
          var d = Ie,
            g
          if ((g = d)) {
            e: {
              for (g = d, d = ol; g.nodeType !== 8; ) {
                if (!d) {
                  d = null
                  break e
                }
                if (((g = il(g.nextSibling)), g === null)) {
                  d = null
                  break e
                }
              }
              d = g
            }
            d !== null
              ? ((t.memoizedState = {
                  dehydrated: d,
                  treeContext: Ra !== null ? { id: Tl, overflow: Rl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (g = Nt(18, null, null, 0)),
                (g.stateNode = d),
                (g.return = t),
                (t.child = g),
                (Tt = t),
                (Ie = null),
                (g = !0))
              : (g = !1)
          }
          g || Ca(t)
        }
        if (
          ((d = t.memoizedState),
          d !== null && ((d = d.dehydrated), d !== null))
        )
          return cf(d) ? (t.lanes = 32) : (t.lanes = 536870912), null
        Dl(t)
      }
      return (
        (d = a.children),
        (a = a.fallback),
        n
          ? ($l(),
            (n = t.mode),
            (d = zi({ mode: 'hidden', children: d }, n)),
            (a = Ta(a, n, l, null)),
            (d.return = t),
            (a.return = t),
            (d.sibling = a),
            (t.child = d),
            (n = t.child),
            (n.memoizedState = Tc(l)),
            (n.childLanes = Rc(e, c, l)),
            (t.memoizedState = xc),
            a)
          : (kl(t), Mc(t, d))
      )
    }
    if (
      ((g = e.memoizedState), g !== null && ((d = g.dehydrated), d !== null))
    ) {
      if (u)
        t.flags & 256
          ? (kl(t), (t.flags &= -257), (t = zc(e, t, l)))
          : t.memoizedState !== null
          ? ($l(), (t.child = e.child), (t.flags |= 128), (t = null))
          : ($l(),
            (n = a.fallback),
            (d = t.mode),
            (a = zi({ mode: 'visible', children: a.children }, d)),
            (n = Ta(n, d, l, null)),
            (n.flags |= 2),
            (a.return = t),
            (n.return = t),
            (a.sibling = n),
            (t.child = a),
            sn(t, e.child, null, l),
            (a = t.child),
            (a.memoizedState = Tc(l)),
            (a.childLanes = Rc(e, c, l)),
            (t.memoizedState = xc),
            (t = n))
      else if ((kl(t), cf(d))) {
        if (((c = d.nextSibling && d.nextSibling.dataset), c)) var C = c.dgst
        ;(c = C),
          (a = Error(o(419))),
          (a.stack = ''),
          (a.digest = c),
          Zn({ value: a, source: null, stack: null }),
          (t = zc(e, t, l))
      } else if (
        (ot || Qn(e, t, l, !1), (c = (l & e.childLanes) !== 0), ot || c)
      ) {
        if (
          ((c = Xe),
          c !== null &&
            ((a = l & -l),
            (a = (a & 42) !== 0 ? 1 : _n(a)),
            (a = (a & (c.suspendedLanes | l)) !== 0 ? 0 : a),
            a !== 0 && a !== g.retryLane))
        )
          throw ((g.retryLane = a), Ia(e, a), Bt(c, e, a), Zs)
        d.data === '$?' || Zc(), (t = zc(e, t, l))
      } else
        d.data === '$?'
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = g.treeContext),
            (Ie = il(d.nextSibling)),
            (Tt = t),
            (je = !0),
            (za = null),
            (ol = !1),
            e !== null &&
              ((Kt[Jt++] = Tl),
              (Kt[Jt++] = Rl),
              (Kt[Jt++] = Ra),
              (Tl = e.id),
              (Rl = e.overflow),
              (Ra = t)),
            (t = Mc(t, a.children)),
            (t.flags |= 4096))
      return t
    }
    return n
      ? ($l(),
        (n = a.fallback),
        (d = t.mode),
        (g = e.child),
        (C = g.sibling),
        (a = xl(g, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = g.subtreeFlags & 65011712),
        C !== null ? (n = xl(C, n)) : ((n = Ta(n, d, l, null)), (n.flags |= 2)),
        (n.return = t),
        (a.return = t),
        (a.sibling = n),
        (t.child = a),
        (a = n),
        (n = t.child),
        (d = e.child.memoizedState),
        d === null
          ? (d = Tc(l))
          : ((g = d.cachePool),
            g !== null
              ? ((C = ct._currentValue),
                (g = g.parent !== C ? { parent: C, pool: C } : g))
              : (g = qo()),
            (d = { baseLanes: d.baseLanes | l, cachePool: g })),
        (n.memoizedState = d),
        (n.childLanes = Rc(e, c, l)),
        (t.memoizedState = xc),
        a)
      : (kl(t),
        (l = e.child),
        (e = l.sibling),
        (l = xl(l, { mode: 'visible', children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((c = t.deletions),
          c === null ? ((t.deletions = [e]), (t.flags |= 16)) : c.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l)
  }
  function Mc(e, t) {
    return (
      (t = zi({ mode: 'visible', children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    )
  }
  function zi(e, t) {
    return (
      (e = Nt(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    )
  }
  function zc(e, t, l) {
    return (
      sn(t, e.child, null, l),
      (e = Mc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    )
  }
  function e0(e, t, l) {
    e.lanes |= t
    var a = e.alternate
    a !== null && (a.lanes |= t), Zr(e.return, t, l)
  }
  function Cc(e, t, l, a, n) {
    var u = e.memoizedState
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = a),
        (u.tail = l),
        (u.tailMode = n))
  }
  function t0(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      u = a.tail
    if ((mt(e, t, a.children, l), (a = ft.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (t.flags |= 128)
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && e0(e, l, t)
          else if (e.tag === 19) e0(e, l, t)
          else if (e.child !== null) {
            ;(e.child.return = e), (e = e.child)
            continue
          }
          if (e === t) break e
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e
            e = e.return
          }
          ;(e.sibling.return = e.return), (e = e.sibling)
        }
      a &= 1
    }
    switch ((Z(ft, a), n)) {
      case 'forwards':
        for (l = t.child, n = null; l !== null; )
          (e = l.alternate),
            e !== null && xi(e) === null && (n = l),
            (l = l.sibling)
        ;(l = n),
          l === null
            ? ((n = t.child), (t.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          Cc(t, !1, n, l, u)
        break
      case 'backwards':
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && xi(e) === null)) {
            t.child = n
            break
          }
          ;(e = n.sibling), (n.sibling = l), (l = n), (n = e)
        }
        Cc(t, !0, l, null, u)
        break
      case 'together':
        Cc(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
    return t.child
  }
  function _l(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (ea |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Qn(e, t, l, !1), (l & t.childLanes) === 0)) return null
      } else return null
    if (e !== null && t.child !== e.child) throw Error(o(153))
    if (t.child !== null) {
      for (
        e = t.child, l = xl(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;

      )
        (e = e.sibling), (l = l.sibling = xl(e, e.pendingProps)), (l.return = t)
      l.sibling = null
    }
    return t.child
  }
  function Dc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && ii(e)))
  }
  function Nh(e, t, l) {
    switch (t.tag) {
      case 3:
        Ve(t, t.stateNode.containerInfo), Xl(t, ct, e.memoizedState.cache), Xn()
        break
      case 27:
      case 5:
        rt(t)
        break
      case 4:
        Ve(t, t.stateNode.containerInfo)
        break
      case 10:
        Xl(t, t.type, t.memoizedProps.value)
        break
      case 13:
        var a = t.memoizedState
        if (a !== null)
          return a.dehydrated !== null
            ? (kl(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
            ? Is(e, t, l)
            : (kl(t), (e = _l(e, t, l)), e !== null ? e.sibling : null)
        kl(t)
        break
      case 19:
        var n = (e.flags & 128) !== 0
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (Qn(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return t0(e, t, l)
          t.flags |= 128
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          Z(ft, ft.current),
          a)
        )
          break
        return null
      case 22:
      case 23:
        return (t.lanes = 0), ks(e, t, l)
      case 24:
        Xl(t, ct, e.memoizedState.cache)
    }
    return _l(e, t, l)
  }
  function l0(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) ot = !0
      else {
        if (!Dc(e, l) && (t.flags & 128) === 0) return (ot = !1), Nh(e, t, l)
        ot = (e.flags & 131072) !== 0
      }
    else (ot = !1), je && (t.flags & 1048576) !== 0 && wo(t, ui, t.index)
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps
          var a = t.elementType,
            n = a._init
          if (((a = n(a._payload)), (t.type = a), typeof a == 'function'))
            Lr(a)
              ? ((e = wa(a, e)), (t.tag = 1), (t = Fs(null, t, a, e, l)))
              : ((t.tag = 0), (t = Ec(null, t, a, e, l)))
          else {
            if (a != null) {
              if (((n = a.$$typeof), n === se)) {
                ;(t.tag = 11), (t = Qs(null, t, a, e, l))
                break e
              } else if (n === pe) {
                ;(t.tag = 14), (t = Ks(null, t, a, e, l))
                break e
              }
            }
            throw ((t = _e(a) || a), Error(o(306, t, '')))
          }
        }
        return t
      case 0:
        return Ec(e, t, t.type, t.pendingProps, l)
      case 1:
        return (a = t.type), (n = wa(a, t.pendingProps)), Fs(e, t, a, n, l)
      case 3:
        e: {
          if ((Ve(t, t.stateNode.containerInfo), e === null))
            throw Error(o(387))
          a = t.pendingProps
          var u = t.memoizedState
          ;(n = u.element), Fr(e, t), Pn(t, a, null, l)
          var c = t.memoizedState
          if (
            ((a = c.cache),
            Xl(t, ct, a),
            a !== u.cache && Qr(t, [ct], l, !0),
            Fn(),
            (a = c.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Ps(e, t, a, l)
              break e
            } else if (a !== n) {
              ;(n = Zt(Error(o(424)), t)), Zn(n), (t = Ps(e, t, a, l))
              break e
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body
                  break
                default:
                  e = e.nodeName === 'HTML' ? e.ownerDocument.body : e
              }
              for (
                Ie = il(e.firstChild),
                  Tt = t,
                  je = !0,
                  za = null,
                  ol = !0,
                  l = Us(t, null, a, l),
                  t.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling)
            }
          else {
            if ((Xn(), a === n)) {
              t = _l(e, t, l)
              break e
            }
            mt(e, t, a, l)
          }
          t = t.child
        }
        return t
      case 26:
        return (
          Mi(e, t),
          e === null
            ? (l = id(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : je ||
                ((l = t.type),
                (e = t.pendingProps),
                (a = Yi(ce.current).createElement(l)),
                (a[X] = t),
                (a[Q] = e),
                yt(a, l, e),
                Ne(a),
                (t.stateNode = a))
            : (t.memoizedState = id(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        )
      case 27:
        return (
          rt(t),
          e === null &&
            je &&
            ((a = t.stateNode = ad(t.type, t.pendingProps, ce.current)),
            (Tt = t),
            (ol = !0),
            (n = Ie),
            na(t.type) ? ((ff = n), (Ie = il(a.firstChild))) : (Ie = n)),
          mt(e, t, t.pendingProps.children, l),
          Mi(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        )
      case 5:
        return (
          e === null &&
            je &&
            ((n = a = Ie) &&
              ((a = r3(a, t.type, t.pendingProps, ol)),
              a !== null
                ? ((t.stateNode = a),
                  (Tt = t),
                  (Ie = il(a.firstChild)),
                  (ol = !1),
                  (n = !0))
                : (n = !1)),
            n || Ca(t)),
          rt(t),
          (n = t.type),
          (u = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (a = u.children),
          nf(n, u) ? (a = null) : c !== null && nf(n, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = ac(e, t, Mh, null, null, l)), (Su._currentValue = n)),
          Mi(e, t),
          mt(e, t, a, l),
          t.child
        )
      case 6:
        return (
          e === null &&
            je &&
            ((e = l = Ie) &&
              ((l = c3(l, t.pendingProps, ol)),
              l !== null
                ? ((t.stateNode = l), (Tt = t), (Ie = null), (e = !0))
                : (e = !1)),
            e || Ca(t)),
          null
        )
      case 13:
        return Is(e, t, l)
      case 4:
        return (
          Ve(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = sn(t, null, a, l)) : mt(e, t, a, l),
          t.child
        )
      case 11:
        return Qs(e, t, t.type, t.pendingProps, l)
      case 7:
        return mt(e, t, t.pendingProps, l), t.child
      case 8:
        return mt(e, t, t.pendingProps.children, l), t.child
      case 12:
        return mt(e, t, t.pendingProps.children, l), t.child
      case 10:
        return (
          (a = t.pendingProps),
          Xl(t, t.type, a.value),
          mt(e, t, a.children, l),
          t.child
        )
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          _a(t),
          (n = pt(n)),
          (a = a(n)),
          (t.flags |= 1),
          mt(e, t, a, l),
          t.child
        )
      case 14:
        return Ks(e, t, t.type, t.pendingProps, l)
      case 15:
        return Js(e, t, t.type, t.pendingProps, l)
      case 19:
        return t0(e, t, l)
      case 31:
        return (
          (a = t.pendingProps),
          (l = t.mode),
          (a = { mode: a.mode, children: a.children }),
          e === null
            ? ((l = zi(a, l)),
              (l.ref = t.ref),
              (t.child = l),
              (l.return = t),
              (t = l))
            : ((l = xl(e.child, a)),
              (l.ref = t.ref),
              (t.child = l),
              (l.return = t),
              (t = l)),
          t
        )
      case 22:
        return ks(e, t, l)
      case 24:
        return (
          _a(t),
          (a = pt(ct)),
          e === null
            ? ((n = kr()),
              n === null &&
                ((n = Xe),
                (u = Kr()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= l),
                (n = u)),
              (t.memoizedState = { parent: a, cache: n }),
              Wr(t),
              Xl(t, ct, n))
            : ((e.lanes & l) !== 0 && (Fr(e, t), Pn(t, null, null, l), Fn()),
              (n = e.memoizedState),
              (u = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  Xl(t, ct, a))
                : ((a = u.cache),
                  Xl(t, ct, a),
                  a !== n.cache && Qr(t, [ct], l, !0))),
          mt(e, t, t.pendingProps.children, l),
          t.child
        )
      case 29:
        throw t.pendingProps
    }
    throw Error(o(156, t.tag))
  }
  function Al(e) {
    e.flags |= 4
  }
  function a0(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0)
      e.flags &= -16777217
    else if (((e.flags |= 16777216), !sd(t))) {
      if (
        ((t = kt.current),
        t !== null &&
          ((Oe & 4194048) === Oe
            ? sl !== null
            : ((Oe & 62914560) !== Oe && (Oe & 536870912) === 0) || t !== sl))
      )
        throw (($n = $r), Yo)
      e.flags |= 8192
    }
  }
  function Ci(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Xu() : 536870912), (e.lanes |= t), (vn |= t))
  }
  function uu(e, t) {
    if (!je)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), (t = t.sibling)
          l === null ? (e.tail = null) : (l.sibling = null)
          break
        case 'collapsed':
          l = e.tail
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), (l = l.sibling)
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null)
      }
  }
  function Fe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0
    if (t)
      for (var n = e.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = e),
          (n = n.sibling)
    else
      for (n = e.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = e),
          (n = n.sibling)
    return (e.subtreeFlags |= a), (e.childLanes = l), t
  }
  function Uh(e, t, l) {
    var a = t.pendingProps
    switch ((Gr(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Fe(t), null
      case 1:
        return Fe(t), null
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          zl(ct),
          rl(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (Vn(t)
              ? Al(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), jo())),
          Fe(t),
          null
        )
      case 26:
        return (
          (l = t.memoizedState),
          e === null
            ? (Al(t),
              l !== null ? (Fe(t), a0(t, l)) : (Fe(t), (t.flags &= -16777217)))
            : l
            ? l !== e.memoizedState
              ? (Al(t), Fe(t), a0(t, l))
              : (Fe(t), (t.flags &= -16777217))
            : (e.memoizedProps !== a && Al(t), Fe(t), (t.flags &= -16777217)),
          null
        )
      case 27:
        It(t), (l = ce.current)
        var n = t.type
        if (e !== null && t.stateNode != null) e.memoizedProps !== a && Al(t)
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(o(166))
            return Fe(t), null
          }
          ;(e = le.current),
            Vn(t) ? No(t) : ((e = ad(n, a, l)), (t.stateNode = e), Al(t))
        }
        return Fe(t), null
      case 5:
        if ((It(t), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Al(t)
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(o(166))
            return Fe(t), null
          }
          if (((e = le.current), Vn(t))) No(t)
          else {
            switch (((n = Yi(ce.current)), e)) {
              case 1:
                e = n.createElementNS('http://www.w3.org/2000/svg', l)
                break
              case 2:
                e = n.createElementNS('http://www.w3.org/1998/Math/MathML', l)
                break
              default:
                switch (l) {
                  case 'svg':
                    e = n.createElementNS('http://www.w3.org/2000/svg', l)
                    break
                  case 'math':
                    e = n.createElementNS(
                      'http://www.w3.org/1998/Math/MathML',
                      l
                    )
                    break
                  case 'script':
                    ;(e = n.createElement('div')),
                      (e.innerHTML = '<script></script>'),
                      (e = e.removeChild(e.firstChild))
                    break
                  case 'select':
                    ;(e =
                      typeof a.is == 'string'
                        ? n.createElement('select', { is: a.is })
                        : n.createElement('select')),
                      a.multiple
                        ? (e.multiple = !0)
                        : a.size && (e.size = a.size)
                    break
                  default:
                    e =
                      typeof a.is == 'string'
                        ? n.createElement(l, { is: a.is })
                        : n.createElement(l)
                }
            }
            ;(e[X] = t), (e[Q] = a)
            e: for (n = t.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                ;(n.child.return = n), (n = n.child)
                continue
              }
              if (n === t) break e
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === t) break e
                n = n.return
              }
              ;(n.sibling.return = n.return), (n = n.sibling)
            }
            t.stateNode = e
            e: switch ((yt(e, l, a), l)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                e = !!a.autoFocus
                break e
              case 'img':
                e = !0
                break e
              default:
                e = !1
            }
            e && Al(t)
          }
        }
        return Fe(t), (t.flags &= -16777217), null
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && Al(t)
        else {
          if (typeof a != 'string' && t.stateNode === null) throw Error(o(166))
          if (((e = ce.current), Vn(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (a = null),
              (n = Tt),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps
              }
            ;(e[X] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                W0(e.nodeValue, l)
              )),
              e || Ca(t)
          } else (e = Yi(e).createTextNode(a)), (e[X] = t), (t.stateNode = e)
        }
        return Fe(t), null
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = Vn(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(o(318))
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(o(317))
              n[X] = t
            } else
              Xn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4)
            Fe(t), (n = !1)
          } else
            (n = jo()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (n = !0)
          if (!n) return t.flags & 256 ? (Dl(t), t) : (Dl(t), null)
        }
        if ((Dl(t), (t.flags & 128) !== 0)) return (t.lanes = l), t
        if (
          ((l = a !== null), (e = e !== null && e.memoizedState !== null), l)
        ) {
          ;(a = t.child),
            (n = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (n = a.alternate.memoizedState.cachePool.pool)
          var u = null
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (u = a.memoizedState.cachePool.pool),
            u !== n && (a.flags |= 2048)
        }
        return (
          l !== e && l && (t.child.flags |= 8192),
          Ci(t, t.updateQueue),
          Fe(t),
          null
        )
      case 4:
        return rl(), e === null && Ic(t.stateNode.containerInfo), Fe(t), null
      case 10:
        return zl(t.type), Fe(t), null
      case 19:
        if ((k(ft), (n = t.memoizedState), n === null)) return Fe(t), null
        if (((a = (t.flags & 128) !== 0), (u = n.rendering), u === null))
          if (a) uu(n, !1)
          else {
            if (et !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = xi(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      uu(n, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      Ci(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;

                  )
                    Oo(l, e), (l = l.sibling)
                  return Z(ft, (ft.current & 1) | 2), t.child
                }
                e = e.sibling
              }
            n.tail !== null &&
              Ot() > Ai &&
              ((t.flags |= 128), (a = !0), uu(n, !1), (t.lanes = 4194304))
          }
        else {
          if (!a)
            if (((e = xi(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Ci(t, e),
                uu(n, !0),
                n.tail === null &&
                  n.tailMode === 'hidden' &&
                  !u.alternate &&
                  !je)
              )
                return Fe(t), null
            } else
              2 * Ot() - n.renderingStartTime > Ai &&
                l !== 536870912 &&
                ((t.flags |= 128), (a = !0), uu(n, !1), (t.lanes = 4194304))
          n.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = n.last),
              e !== null ? (e.sibling = u) : (t.child = u),
              (n.last = u))
        }
        return n.tail !== null
          ? ((t = n.tail),
            (n.rendering = t),
            (n.tail = t.sibling),
            (n.renderingStartTime = Ot()),
            (t.sibling = null),
            (e = ft.current),
            Z(ft, a ? (e & 1) | 2 : e & 1),
            t)
          : (Fe(t), null)
      case 22:
      case 23:
        return (
          Dl(t),
          tc(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Fe(t),
          (l = t.updateQueue),
          l !== null && Ci(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && k(Aa),
          null
        )
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          zl(ct),
          Fe(t),
          null
        )
      case 25:
        return null
      case 30:
        return null
    }
    throw Error(o(156, t.tag))
  }
  function jh(e, t) {
    switch ((Gr(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 3:
        return (
          zl(ct),
          rl(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        )
      case 26:
      case 27:
      case 5:
        return It(t), null
      case 13:
        if (
          (Dl(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340))
          Xn()
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 19:
        return k(ft), null
      case 4:
        return rl(), null
      case 10:
        return zl(t.type), null
      case 22:
      case 23:
        return (
          Dl(t),
          tc(),
          e !== null && k(Aa),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 24:
        return zl(ct), null
      case 25:
        return null
      default:
        return null
    }
  }
  function n0(e, t) {
    switch ((Gr(t), t.tag)) {
      case 3:
        zl(ct), rl()
        break
      case 26:
      case 27:
      case 5:
        It(t)
        break
      case 4:
        rl()
        break
      case 13:
        Dl(t)
        break
      case 19:
        k(ft)
        break
      case 10:
        zl(t.type)
        break
      case 22:
      case 23:
        Dl(t), tc(), e !== null && k(Aa)
        break
      case 24:
        zl(ct)
    }
  }
  function iu(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null
      if (a !== null) {
        var n = a.next
        l = n
        do {
          if ((l.tag & e) === e) {
            a = void 0
            var u = l.create,
              c = l.inst
            ;(a = u()), (c.destroy = a)
          }
          l = l.next
        } while (l !== n)
      }
    } catch (d) {
      Ge(t, t.return, d)
    }
  }
  function Wl(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null
      if (n !== null) {
        var u = n.next
        a = u
        do {
          if ((a.tag & e) === e) {
            var c = a.inst,
              d = c.destroy
            if (d !== void 0) {
              ;(c.destroy = void 0), (n = t)
              var g = l,
                C = d
              try {
                C()
              } catch (L) {
                Ge(n, g, L)
              }
            }
          }
          a = a.next
        } while (a !== u)
      }
    } catch (L) {
      Ge(t, t.return, L)
    }
  }
  function u0(e) {
    var t = e.updateQueue
    if (t !== null) {
      var l = e.stateNode
      try {
        Ko(t, l)
      } catch (a) {
        Ge(e, e.return, a)
      }
    }
  }
  function i0(e, t, l) {
    ;(l.props = wa(e.type, e.memoizedProps)), (l.state = e.memoizedState)
    try {
      l.componentWillUnmount()
    } catch (a) {
      Ge(e, t, a)
    }
  }
  function ru(e, t) {
    try {
      var l = e.ref
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode
            break
          case 30:
            a = e.stateNode
            break
          default:
            a = e.stateNode
        }
        typeof l == 'function' ? (e.refCleanup = l(a)) : (l.current = a)
      }
    } catch (n) {
      Ge(e, t, n)
    }
  }
  function dl(e, t) {
    var l = e.ref,
      a = e.refCleanup
    if (l !== null)
      if (typeof a == 'function')
        try {
          a()
        } catch (n) {
          Ge(e, t, n)
        } finally {
          ;(e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null)
        }
      else if (typeof l == 'function')
        try {
          l(null)
        } catch (n) {
          Ge(e, t, n)
        }
      else l.current = null
  }
  function r0(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          l.autoFocus && a.focus()
          break e
        case 'img':
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet)
      }
    } catch (n) {
      Ge(e, e.return, n)
    }
  }
  function _c(e, t, l) {
    try {
      var a = e.stateNode
      l3(a, e.type, l, t), (a[Q] = t)
    } catch (n) {
      Ge(e, e.return, n)
    }
  }
  function c0(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && na(e.type)) ||
      e.tag === 4
    )
  }
  function Ac(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || c0(e.return)) return null
        e = e.return
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && na(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e
        ;(e.child.return = e), (e = e.child)
      }
      if (!(e.flags & 2)) return e.stateNode
    }
  }
  function Oc(e, t, l) {
    var a = e.tag
    if (a === 5 || a === 6)
      (e = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === 'HTML'
              ? l.ownerDocument.body
              : l
            ).insertBefore(e, t)
          : ((t =
              l.nodeType === 9
                ? l.body
                : l.nodeName === 'HTML'
                ? l.ownerDocument.body
                : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = qi))
    else if (
      a !== 4 &&
      (a === 27 && na(e.type) && ((l = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Oc(e, t, l), e = e.sibling; e !== null; )
        Oc(e, t, l), (e = e.sibling)
  }
  function Di(e, t, l) {
    var a = e.tag
    if (a === 5 || a === 6)
      (e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e)
    else if (
      a !== 4 &&
      (a === 27 && na(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (Di(e, t, l), e = e.sibling; e !== null; )
        Di(e, t, l), (e = e.sibling)
  }
  function f0(e) {
    var t = e.stateNode,
      l = e.memoizedProps
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0])
      yt(t, a, l), (t[X] = e), (t[Q] = l)
    } catch (u) {
      Ge(e, e.return, u)
    }
  }
  var Ol = !1,
    at = !1,
    wc = !1,
    o0 = typeof WeakSet == 'function' ? WeakSet : Set,
    st = null
  function Hh(e, t) {
    if (((e = e.containerInfo), (lf = Ki), (e = Eo(e)), Ar(e))) {
      if ('selectionStart' in e)
        var l = { start: e.selectionStart, end: e.selectionEnd }
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window
          var a = l.getSelection && l.getSelection()
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode
            var n = a.anchorOffset,
              u = a.focusNode
            a = a.focusOffset
            try {
              l.nodeType, u.nodeType
            } catch {
              l = null
              break e
            }
            var c = 0,
              d = -1,
              g = -1,
              C = 0,
              L = 0,
              V = e,
              _ = null
            t: for (;;) {
              for (
                var A;
                V !== l || (n !== 0 && V.nodeType !== 3) || (d = c + n),
                  V !== u || (a !== 0 && V.nodeType !== 3) || (g = c + a),
                  V.nodeType === 3 && (c += V.nodeValue.length),
                  (A = V.firstChild) !== null;

              )
                (_ = V), (V = A)
              for (;;) {
                if (V === e) break t
                if (
                  (_ === l && ++C === n && (d = c),
                  _ === u && ++L === a && (g = c),
                  (A = V.nextSibling) !== null)
                )
                  break
                ;(V = _), (_ = V.parentNode)
              }
              V = A
            }
            l = d === -1 || g === -1 ? null : { start: d, end: g }
          } else l = null
        }
      l = l || { start: 0, end: 0 }
    } else l = null
    for (
      af = { focusedElem: e, selectionRange: l }, Ki = !1, st = t;
      st !== null;

    )
      if (
        ((t = st), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = t), (st = e)
      else
        for (; st !== null; ) {
          switch (((t = st), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break
            case 11:
            case 15:
              break
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                ;(e = void 0),
                  (l = t),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = l.stateNode)
                try {
                  var me = wa(l.type, n, l.elementType === l.type)
                  ;(e = a.getSnapshotBeforeUpdate(me, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = e)
                } catch (oe) {
                  Ge(l, l.return, oe)
                }
              }
              break
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  rf(e)
                else if (l === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      rf(e)
                      break
                    default:
                      e.textContent = ''
                  }
              }
              break
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break
            default:
              if ((e & 1024) !== 0) throw Error(o(163))
          }
          if (((e = t.sibling), e !== null)) {
            ;(e.return = t.return), (st = e)
            break
          }
          st = t.return
        }
  }
  function s0(e, t, l) {
    var a = l.flags
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Fl(e, l), a & 4 && iu(5, l)
        break
      case 1:
        if ((Fl(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount()
            } catch (c) {
              Ge(l, l.return, c)
            }
          else {
            var n = wa(l.type, t.memoizedProps)
            t = t.memoizedState
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate)
            } catch (c) {
              Ge(l, l.return, c)
            }
          }
        a & 64 && u0(l), a & 512 && ru(l, l.return)
        break
      case 3:
        if ((Fl(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode
                break
              case 1:
                t = l.child.stateNode
            }
          try {
            Ko(e, t)
          } catch (c) {
            Ge(l, l.return, c)
          }
        }
        break
      case 27:
        t === null && a & 4 && f0(l)
      case 26:
      case 5:
        Fl(e, l), t === null && a & 4 && r0(l), a & 512 && ru(l, l.return)
        break
      case 12:
        Fl(e, l)
        break
      case 13:
        Fl(e, l),
          a & 4 && m0(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = Qh.bind(null, l)), f3(e, l))))
        break
      case 22:
        if (((a = l.memoizedState !== null || Ol), !a)) {
          ;(t = (t !== null && t.memoizedState !== null) || at), (n = Ol)
          var u = at
          ;(Ol = a),
            (at = t) && !u ? Pl(e, l, (l.subtreeFlags & 8772) !== 0) : Fl(e, l),
            (Ol = n),
            (at = u)
        }
        break
      case 30:
        break
      default:
        Fl(e, l)
    }
  }
  function d0(e) {
    var t = e.alternate
    t !== null && ((e.alternate = null), d0(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && ae(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null)
  }
  var ke = null,
    _t = !1
  function wl(e, t, l) {
    for (l = l.child; l !== null; ) h0(e, t, l), (l = l.sibling)
  }
  function h0(e, t, l) {
    if ($e && typeof $e.onCommitFiberUnmount == 'function')
      try {
        $e.onCommitFiberUnmount(Rt, l)
      } catch {}
    switch (l.tag) {
      case 26:
        at || dl(l, t),
          wl(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l))
        break
      case 27:
        at || dl(l, t)
        var a = ke,
          n = _t
        na(l.type) && ((ke = l.stateNode), (_t = !1)),
          wl(e, t, l),
          yu(l.stateNode),
          (ke = a),
          (_t = n)
        break
      case 5:
        at || dl(l, t)
      case 6:
        if (
          ((a = ke),
          (n = _t),
          (ke = null),
          wl(e, t, l),
          (ke = a),
          (_t = n),
          ke !== null)
        )
          if (_t)
            try {
              ;(ke.nodeType === 9
                ? ke.body
                : ke.nodeName === 'HTML'
                ? ke.ownerDocument.body
                : ke
              ).removeChild(l.stateNode)
            } catch (u) {
              Ge(l, t, u)
            }
          else
            try {
              ke.removeChild(l.stateNode)
            } catch (u) {
              Ge(l, t, u)
            }
        break
      case 18:
        ke !== null &&
          (_t
            ? ((e = ke),
              td(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === 'HTML'
                  ? e.ownerDocument.body
                  : e,
                l.stateNode
              ),
              Ru(e))
            : td(ke, l.stateNode))
        break
      case 4:
        ;(a = ke),
          (n = _t),
          (ke = l.stateNode.containerInfo),
          (_t = !0),
          wl(e, t, l),
          (ke = a),
          (_t = n)
        break
      case 0:
      case 11:
      case 14:
      case 15:
        at || Wl(2, l, t), at || Wl(4, l, t), wl(e, t, l)
        break
      case 1:
        at ||
          (dl(l, t),
          (a = l.stateNode),
          typeof a.componentWillUnmount == 'function' && i0(l, t, a)),
          wl(e, t, l)
        break
      case 21:
        wl(e, t, l)
        break
      case 22:
        ;(at = (a = at) || l.memoizedState !== null), wl(e, t, l), (at = a)
        break
      default:
        wl(e, t, l)
    }
  }
  function m0(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ru(e)
      } catch (l) {
        Ge(t, t.return, l)
      }
  }
  function Lh(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode
        return t === null && (t = e.stateNode = new o0()), t
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new o0()),
          t
        )
      default:
        throw Error(o(435, e.tag))
    }
  }
  function Nc(e, t) {
    var l = Lh(e)
    t.forEach(function (a) {
      var n = Kh.bind(null, e, a)
      l.has(a) || (l.add(a), a.then(n, n))
    })
  }
  function Ut(e, t) {
    var l = t.deletions
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          u = e,
          c = t,
          d = c
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (na(d.type)) {
                ;(ke = d.stateNode), (_t = !1)
                break e
              }
              break
            case 5:
              ;(ke = d.stateNode), (_t = !1)
              break e
            case 3:
            case 4:
              ;(ke = d.stateNode.containerInfo), (_t = !0)
              break e
          }
          d = d.return
        }
        if (ke === null) throw Error(o(160))
        h0(u, c, n),
          (ke = null),
          (_t = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null)
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) v0(t, e), (t = t.sibling)
  }
  var ul = null
  function v0(e, t) {
    var l = e.alternate,
      a = e.flags
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ut(t, e),
          jt(e),
          a & 4 && (Wl(3, e, e.return), iu(3, e), Wl(5, e, e.return))
        break
      case 1:
        Ut(t, e),
          jt(e),
          a & 512 && (at || l === null || dl(l, l.return)),
          a & 64 &&
            Ol &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a)))))
        break
      case 26:
        var n = ul
        if (
          (Ut(t, e),
          jt(e),
          a & 512 && (at || l === null || dl(l, l.return)),
          a & 4)
        ) {
          var u = l !== null ? l.memoizedState : null
          if (((a = e.memoizedState), l === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  ;(a = e.type),
                    (l = e.memoizedProps),
                    (n = n.ownerDocument || n)
                  t: switch (a) {
                    case 'title':
                      ;(u = n.getElementsByTagName('title')[0]),
                        (!u ||
                          u[he] ||
                          u[X] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector('head > title')
                          )),
                        yt(u, a, l),
                        (u[X] = e),
                        Ne(u),
                        (a = u)
                      break e
                    case 'link':
                      var c = fd('link', 'href', n).get(a + (l.href || ''))
                      if (c) {
                        for (var d = 0; d < c.length; d++)
                          if (
                            ((u = c[d]),
                            u.getAttribute('href') ===
                              (l.href == null || l.href === ''
                                ? null
                                : l.href) &&
                              u.getAttribute('rel') ===
                                (l.rel == null ? null : l.rel) &&
                              u.getAttribute('title') ===
                                (l.title == null ? null : l.title) &&
                              u.getAttribute('crossorigin') ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            c.splice(d, 1)
                            break t
                          }
                      }
                      ;(u = n.createElement(a)),
                        yt(u, a, l),
                        n.head.appendChild(u)
                      break
                    case 'meta':
                      if (
                        (c = fd('meta', 'content', n).get(
                          a + (l.content || '')
                        ))
                      ) {
                        for (d = 0; d < c.length; d++)
                          if (
                            ((u = c[d]),
                            u.getAttribute('content') ===
                              (l.content == null ? null : '' + l.content) &&
                              u.getAttribute('name') ===
                                (l.name == null ? null : l.name) &&
                              u.getAttribute('property') ===
                                (l.property == null ? null : l.property) &&
                              u.getAttribute('http-equiv') ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              u.getAttribute('charset') ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            c.splice(d, 1)
                            break t
                          }
                      }
                      ;(u = n.createElement(a)),
                        yt(u, a, l),
                        n.head.appendChild(u)
                      break
                    default:
                      throw Error(o(468, a))
                  }
                  ;(u[X] = e), Ne(u), (a = u)
                }
                e.stateNode = a
              } else od(n, e.type, e.stateNode)
            else e.stateNode = cd(n, a, e.memoizedProps)
          else
            u !== a
              ? (u === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : u.count--,
                a === null
                  ? od(n, e.type, e.stateNode)
                  : cd(n, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                _c(e, e.memoizedProps, l.memoizedProps)
        }
        break
      case 27:
        Ut(t, e),
          jt(e),
          a & 512 && (at || l === null || dl(l, l.return)),
          l !== null && a & 4 && _c(e, e.memoizedProps, l.memoizedProps)
        break
      case 5:
        if (
          (Ut(t, e),
          jt(e),
          a & 512 && (at || l === null || dl(l, l.return)),
          e.flags & 32)
        ) {
          n = e.stateNode
          try {
            Ka(n, '')
          } catch (A) {
            Ge(e, e.return, A)
          }
        }
        a & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), _c(e, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (wc = !0)
        break
      case 6:
        if ((Ut(t, e), jt(e), a & 4)) {
          if (e.stateNode === null) throw Error(o(162))
          ;(a = e.memoizedProps), (l = e.stateNode)
          try {
            l.nodeValue = a
          } catch (A) {
            Ge(e, e.return, A)
          }
        }
        break
      case 3:
        if (
          ((Xi = null),
          (n = ul),
          (ul = Gi(t.containerInfo)),
          Ut(t, e),
          (ul = n),
          jt(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Ru(t.containerInfo)
          } catch (A) {
            Ge(e, e.return, A)
          }
        wc && ((wc = !1), y0(e))
        break
      case 4:
        ;(a = ul),
          (ul = Gi(e.stateNode.containerInfo)),
          Ut(t, e),
          jt(e),
          (ul = a)
        break
      case 12:
        Ut(t, e), jt(e)
        break
      case 13:
        Ut(t, e),
          jt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (qc = Ot()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Nc(e, a)))
        break
      case 22:
        n = e.memoizedState !== null
        var g = l !== null && l.memoizedState !== null,
          C = Ol,
          L = at
        if (
          ((Ol = C || n),
          (at = L || g),
          Ut(t, e),
          (at = L),
          (Ol = C),
          jt(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (l === null || g || Ol || at || Na(e)),
              l = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                g = l = t
                try {
                  if (((u = g.stateNode), n))
                    (c = u.style),
                      typeof c.setProperty == 'function'
                        ? c.setProperty('display', 'none', 'important')
                        : (c.display = 'none')
                  else {
                    d = g.stateNode
                    var V = g.memoizedProps.style,
                      _ =
                        V != null && V.hasOwnProperty('display')
                          ? V.display
                          : null
                    d.style.display =
                      _ == null || typeof _ == 'boolean' ? '' : ('' + _).trim()
                  }
                } catch (A) {
                  Ge(g, g.return, A)
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                g = t
                try {
                  g.stateNode.nodeValue = n ? '' : g.memoizedProps
                } catch (A) {
                  Ge(g, g.return, A)
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ;(t.child.return = t), (t = t.child)
              continue
            }
            if (t === e) break e
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e
              l === t && (l = null), (t = t.return)
            }
            l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling)
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), Nc(e, l))))
        break
      case 19:
        Ut(t, e),
          jt(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Nc(e, a)))
        break
      case 30:
        break
      case 21:
        break
      default:
        Ut(t, e), jt(e)
    }
  }
  function jt(e) {
    var t = e.flags
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (c0(a)) {
            l = a
            break
          }
          a = a.return
        }
        if (l == null) throw Error(o(160))
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = Ac(e)
            Di(e, u, n)
            break
          case 5:
            var c = l.stateNode
            l.flags & 32 && (Ka(c, ''), (l.flags &= -33))
            var d = Ac(e)
            Di(e, d, c)
            break
          case 3:
          case 4:
            var g = l.stateNode.containerInfo,
              C = Ac(e)
            Oc(e, C, g)
            break
          default:
            throw Error(o(161))
        }
      } catch (L) {
        Ge(e, e.return, L)
      }
      e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
  }
  function y0(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e
        y0(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling)
      }
  }
  function Fl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) s0(e, t.alternate, t), (t = t.sibling)
  }
  function Na(e) {
    for (e = e.child; e !== null; ) {
      var t = e
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Wl(4, t, t.return), Na(t)
          break
        case 1:
          dl(t, t.return)
          var l = t.stateNode
          typeof l.componentWillUnmount == 'function' && i0(t, t.return, l),
            Na(t)
          break
        case 27:
          yu(t.stateNode)
        case 26:
        case 5:
          dl(t, t.return), Na(t)
          break
        case 22:
          t.memoizedState === null && Na(t)
          break
        case 30:
          Na(t)
          break
        default:
          Na(t)
      }
      e = e.sibling
    }
  }
  function Pl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = e,
        u = t,
        c = u.flags
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Pl(n, u, l), iu(4, u)
          break
        case 1:
          if (
            (Pl(n, u, l),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == 'function')
          )
            try {
              n.componentDidMount()
            } catch (C) {
              Ge(a, a.return, C)
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var d = a.stateNode
            try {
              var g = n.shared.hiddenCallbacks
              if (g !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < g.length; n++)
                  Qo(g[n], d)
            } catch (C) {
              Ge(a, a.return, C)
            }
          }
          l && c & 64 && u0(u), ru(u, u.return)
          break
        case 27:
          f0(u)
        case 26:
        case 5:
          Pl(n, u, l), l && a === null && c & 4 && r0(u), ru(u, u.return)
          break
        case 12:
          Pl(n, u, l)
          break
        case 13:
          Pl(n, u, l), l && c & 4 && m0(n, u)
          break
        case 22:
          u.memoizedState === null && Pl(n, u, l), ru(u, u.return)
          break
        case 30:
          break
        default:
          Pl(n, u, l)
      }
      t = t.sibling
    }
  }
  function Uc(e, t) {
    var l = null
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && Kn(l))
  }
  function jc(e, t) {
    ;(e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Kn(e))
  }
  function hl(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) g0(e, t, l, a), (t = t.sibling)
  }
  function g0(e, t, l, a) {
    var n = t.flags
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        hl(e, t, l, a), n & 2048 && iu(9, t)
        break
      case 1:
        hl(e, t, l, a)
        break
      case 3:
        hl(e, t, l, a),
          n & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Kn(e)))
        break
      case 12:
        if (n & 2048) {
          hl(e, t, l, a), (e = t.stateNode)
          try {
            var u = t.memoizedProps,
              c = u.id,
              d = u.onPostCommit
            typeof d == 'function' &&
              d(
                c,
                t.alternate === null ? 'mount' : 'update',
                e.passiveEffectDuration,
                -0
              )
          } catch (g) {
            Ge(t, t.return, g)
          }
        } else hl(e, t, l, a)
        break
      case 13:
        hl(e, t, l, a)
        break
      case 23:
        break
      case 22:
        ;(u = t.stateNode),
          (c = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? hl(e, t, l, a)
              : cu(e, t)
            : u._visibility & 2
            ? hl(e, t, l, a)
            : ((u._visibility |= 2),
              dn(e, t, l, a, (t.subtreeFlags & 10256) !== 0)),
          n & 2048 && Uc(c, t)
        break
      case 24:
        hl(e, t, l, a), n & 2048 && jc(t.alternate, t)
        break
      default:
        hl(e, t, l, a)
    }
  }
  function dn(e, t, l, a, n) {
    for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var u = e,
        c = t,
        d = l,
        g = a,
        C = c.flags
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          dn(u, c, d, g, n), iu(8, c)
          break
        case 23:
          break
        case 22:
          var L = c.stateNode
          c.memoizedState !== null
            ? L._visibility & 2
              ? dn(u, c, d, g, n)
              : cu(u, c)
            : ((L._visibility |= 2), dn(u, c, d, g, n)),
            n && C & 2048 && Uc(c.alternate, c)
          break
        case 24:
          dn(u, c, d, g, n), n && C & 2048 && jc(c.alternate, c)
          break
        default:
          dn(u, c, d, g, n)
      }
      t = t.sibling
    }
  }
  function cu(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          n = a.flags
        switch (a.tag) {
          case 22:
            cu(l, a), n & 2048 && Uc(a.alternate, a)
            break
          case 24:
            cu(l, a), n & 2048 && jc(a.alternate, a)
            break
          default:
            cu(l, a)
        }
        t = t.sibling
      }
  }
  var fu = 8192
  function hn(e) {
    if (e.subtreeFlags & fu)
      for (e = e.child; e !== null; ) p0(e), (e = e.sibling)
  }
  function p0(e) {
    switch (e.tag) {
      case 26:
        hn(e),
          e.flags & fu &&
            e.memoizedState !== null &&
            x3(ul, e.memoizedState, e.memoizedProps)
        break
      case 5:
        hn(e)
        break
      case 3:
      case 4:
        var t = ul
        ;(ul = Gi(e.stateNode.containerInfo)), hn(e), (ul = t)
        break
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = fu), (fu = 16777216), hn(e), (fu = t))
            : hn(e))
        break
      default:
        hn(e)
    }
  }
  function b0(e) {
    var t = e.alternate
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null
      do (t = e.sibling), (e.sibling = null), (e = t)
      while (e !== null)
    }
  }
  function ou(e) {
    var t = e.deletions
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l]
          ;(st = a), E0(a, e)
        }
      b0(e)
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) S0(e), (e = e.sibling)
  }
  function S0(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ou(e), e.flags & 2048 && Wl(9, e, e.return)
        break
      case 3:
        ou(e)
        break
      case 12:
        ou(e)
        break
      case 22:
        var t = e.stateNode
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), _i(e))
          : ou(e)
        break
      default:
        ou(e)
    }
  }
  function _i(e) {
    var t = e.deletions
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l]
          ;(st = a), E0(a, e)
        }
      b0(e)
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          Wl(8, t, t.return), _i(t)
          break
        case 22:
          ;(l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), _i(t))
          break
        default:
          _i(t)
      }
      e = e.sibling
    }
  }
  function E0(e, t) {
    for (; st !== null; ) {
      var l = st
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Wl(8, l, t)
          break
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool
            a != null && a.refCount++
          }
          break
        case 24:
          Kn(l.memoizedState.cache)
      }
      if (((a = l.child), a !== null)) (a.return = l), (st = a)
      else
        e: for (l = e; st !== null; ) {
          a = st
          var n = a.sibling,
            u = a.return
          if ((d0(a), a === l)) {
            st = null
            break e
          }
          if (n !== null) {
            ;(n.return = u), (st = n)
            break e
          }
          st = u
        }
    }
  }
  var Bh = {
      getCacheForType: function (e) {
        var t = pt(ct),
          l = t.data.get(e)
        return l === void 0 && ((l = e()), t.data.set(e, l)), l
      },
    },
    qh = typeof WeakMap == 'function' ? WeakMap : Map,
    He = 0,
    Xe = null,
    ze = null,
    Oe = 0,
    Le = 0,
    Ht = null,
    Il = !1,
    mn = !1,
    Hc = !1,
    Nl = 0,
    et = 0,
    ea = 0,
    Ua = 0,
    Lc = 0,
    $t = 0,
    vn = 0,
    su = null,
    At = null,
    Bc = !1,
    qc = 0,
    Ai = 1 / 0,
    Oi = null,
    ta = null,
    vt = 0,
    la = null,
    yn = null,
    gn = 0,
    Yc = 0,
    Gc = null,
    x0 = null,
    du = 0,
    Vc = null
  function Lt() {
    if ((He & 2) !== 0 && Oe !== 0) return Oe & -Oe
    if (O.T !== null) {
      var e = an
      return e !== 0 ? e : $c()
    }
    return S()
  }
  function T0() {
    $t === 0 && ($t = (Oe & 536870912) === 0 || je ? Xa() : 536870912)
    var e = kt.current
    return e !== null && (e.flags |= 32), $t
  }
  function Bt(e, t, l) {
    ;((e === Xe && (Le === 2 || Le === 9)) || e.cancelPendingCommit !== null) &&
      (pn(e, 0), aa(e, Oe, $t, !1)),
      ya(e, l),
      ((He & 2) === 0 || e !== Xe) &&
        (e === Xe &&
          ((He & 2) === 0 && (Ua |= l), et === 4 && aa(e, Oe, $t, !1)),
        ml(e))
  }
  function R0(e, t, l) {
    if ((He & 6) !== 0) throw Error(o(327))
    var a = (!l && (t & 124) === 0 && (t & e.expiredLanes) === 0) || fl(e, t),
      n = a ? Vh(e, t) : Qc(e, t, !0),
      u = a
    do {
      if (n === 0) {
        mn && !a && aa(e, t, 0, !1)
        break
      } else {
        if (((l = e.current.alternate), u && !Yh(l))) {
          ;(n = Qc(e, t, !1)), (u = !1)
          continue
        }
        if (n === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var c = 0
          else
            (c = e.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0)
          if (c !== 0) {
            t = c
            e: {
              var d = e
              n = su
              var g = d.current.memoizedState.isDehydrated
              if ((g && (pn(d, c).flags |= 256), (c = Qc(d, c, !1)), c !== 2)) {
                if (Hc && !g) {
                  ;(d.errorRecoveryDisabledLanes |= u), (Ua |= u), (n = 4)
                  break e
                }
                ;(u = At),
                  (At = n),
                  u !== null && (At === null ? (At = u) : At.push.apply(At, u))
              }
              n = c
            }
            if (((u = !1), n !== 2)) continue
          }
        }
        if (n === 1) {
          pn(e, 0), aa(e, t, 0, !0)
          break
        }
        e: {
          switch (((a = e), (u = n), u)) {
            case 0:
            case 1:
              throw Error(o(345))
            case 4:
              if ((t & 4194048) !== t) break
            case 6:
              aa(a, t, $t, !Il)
              break e
            case 2:
              At = null
              break
            case 3:
            case 5:
              break
            default:
              throw Error(o(329))
          }
          if ((t & 62914560) === t && ((n = qc + 300 - Ot()), 10 < n)) {
            if ((aa(a, t, $t, !Il), va(a, 0, !0) !== 0)) break e
            a.timeoutHandle = I0(
              M0.bind(null, a, l, At, Oi, Bc, t, $t, Ua, vn, Il, u, 2, -0, 0),
              n
            )
            break e
          }
          M0(a, l, At, Oi, Bc, t, $t, Ua, vn, Il, u, 0, -0, 0)
        }
      }
      break
    } while (!0)
    ml(e)
  }
  function M0(e, t, l, a, n, u, c, d, g, C, L, V, _, A) {
    if (
      ((e.timeoutHandle = -1),
      (V = t.subtreeFlags),
      (V & 8192 || (V & 16785408) === 16785408) &&
        ((bu = { stylesheets: null, count: 0, unsuspend: E3 }),
        p0(t),
        (V = T3()),
        V !== null))
    ) {
      ;(e.cancelPendingCommit = V(
        w0.bind(null, e, t, u, l, a, n, c, d, g, L, 1, _, A)
      )),
        aa(e, u, c, !C)
      return
    }
    w0(e, t, u, l, a, n, c, d, g)
  }
  function Yh(e) {
    for (var t = e; ; ) {
      var l = t.tag
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot
          n = n.value
          try {
            if (!wt(u(), n)) return !1
          } catch {
            return !1
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        (l.return = t), (t = l)
      else {
        if (t === e) break
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0
          t = t.return
        }
        ;(t.sibling.return = t.return), (t = t.sibling)
      }
    }
    return !0
  }
  function aa(e, t, l, a) {
    ;(t &= ~Lc),
      (t &= ~Ua),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes)
    for (var n = t; 0 < n; ) {
      var u = 31 - ht(n),
        c = 1 << u
      ;(a[u] = -1), (n &= ~c)
    }
    l !== 0 && ga(e, l, t)
  }
  function wi() {
    return (He & 6) === 0 ? (hu(0), !1) : !0
  }
  function Xc() {
    if (ze !== null) {
      if (Le === 0) var e = ze.return
      else (e = ze), (Ml = Da = null), ic(e), (on = null), (au = 0), (e = ze)
      for (; e !== null; ) n0(e.alternate, e), (e = e.return)
      ze = null
    }
  }
  function pn(e, t) {
    var l = e.timeoutHandle
    l !== -1 && ((e.timeoutHandle = -1), n3(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      Xc(),
      (Xe = e),
      (ze = l = xl(e.current, null)),
      (Oe = t),
      (Le = 0),
      (Ht = null),
      (Il = !1),
      (mn = fl(e, t)),
      (Hc = !1),
      (vn = $t = Lc = Ua = ea = et = 0),
      (At = su = null),
      (Bc = !1),
      (t & 8) !== 0 && (t |= t & 32)
    var a = e.entangledLanes
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - ht(a),
          u = 1 << n
        ;(t |= e[n]), (a &= ~u)
      }
    return (Nl = t), ei(), l
  }
  function z0(e, t) {
    ;(Ee = null),
      (O.H = bi),
      t === kn || t === fi
        ? ((t = Xo()), (Le = 3))
        : t === Yo
        ? ((t = Xo()), (Le = 4))
        : (Le =
            t === Zs
              ? 8
              : t !== null &&
                typeof t == 'object' &&
                typeof t.then == 'function'
              ? 6
              : 1),
      (Ht = t),
      ze === null && ((et = 1), Ri(e, Zt(t, e.current)))
  }
  function C0() {
    var e = O.H
    return (O.H = bi), e === null ? bi : e
  }
  function D0() {
    var e = O.A
    return (O.A = Bh), e
  }
  function Zc() {
    ;(et = 4),
      Il || ((Oe & 4194048) !== Oe && kt.current !== null) || (mn = !0),
      ((ea & 134217727) === 0 && (Ua & 134217727) === 0) ||
        Xe === null ||
        aa(Xe, Oe, $t, !1)
  }
  function Qc(e, t, l) {
    var a = He
    He |= 2
    var n = C0(),
      u = D0()
    ;(Xe !== e || Oe !== t) && ((Oi = null), pn(e, t)), (t = !1)
    var c = et
    e: do
      try {
        if (Le !== 0 && ze !== null) {
          var d = ze,
            g = Ht
          switch (Le) {
            case 8:
              Xc(), (c = 6)
              break e
            case 3:
            case 2:
            case 9:
            case 6:
              kt.current === null && (t = !0)
              var C = Le
              if (((Le = 0), (Ht = null), bn(e, d, g, C), l && mn)) {
                c = 0
                break e
              }
              break
            default:
              ;(C = Le), (Le = 0), (Ht = null), bn(e, d, g, C)
          }
        }
        Gh(), (c = et)
        break
      } catch (L) {
        z0(e, L)
      }
    while (!0)
    return (
      t && e.shellSuspendCounter++,
      (Ml = Da = null),
      (He = a),
      (O.H = n),
      (O.A = u),
      ze === null && ((Xe = null), (Oe = 0), ei()),
      c
    )
  }
  function Gh() {
    for (; ze !== null; ) _0(ze)
  }
  function Vh(e, t) {
    var l = He
    He |= 2
    var a = C0(),
      n = D0()
    Xe !== e || Oe !== t
      ? ((Oi = null), (Ai = Ot() + 500), pn(e, t))
      : (mn = fl(e, t))
    e: do
      try {
        if (Le !== 0 && ze !== null) {
          t = ze
          var u = Ht
          t: switch (Le) {
            case 1:
              ;(Le = 0), (Ht = null), bn(e, t, u, 1)
              break
            case 2:
            case 9:
              if (Go(u)) {
                ;(Le = 0), (Ht = null), A0(t)
                break
              }
              ;(t = function () {
                ;(Le !== 2 && Le !== 9) || Xe !== e || (Le = 7), ml(e)
              }),
                u.then(t, t)
              break e
            case 3:
              Le = 7
              break e
            case 4:
              Le = 5
              break e
            case 7:
              Go(u)
                ? ((Le = 0), (Ht = null), A0(t))
                : ((Le = 0), (Ht = null), bn(e, t, u, 7))
              break
            case 5:
              var c = null
              switch (ze.tag) {
                case 26:
                  c = ze.memoizedState
                case 5:
                case 27:
                  var d = ze
                  if (!c || sd(c)) {
                    ;(Le = 0), (Ht = null)
                    var g = d.sibling
                    if (g !== null) ze = g
                    else {
                      var C = d.return
                      C !== null ? ((ze = C), Ni(C)) : (ze = null)
                    }
                    break t
                  }
              }
              ;(Le = 0), (Ht = null), bn(e, t, u, 5)
              break
            case 6:
              ;(Le = 0), (Ht = null), bn(e, t, u, 6)
              break
            case 8:
              Xc(), (et = 6)
              break e
            default:
              throw Error(o(462))
          }
        }
        Xh()
        break
      } catch (L) {
        z0(e, L)
      }
    while (!0)
    return (
      (Ml = Da = null),
      (O.H = a),
      (O.A = n),
      (He = l),
      ze !== null ? 0 : ((Xe = null), (Oe = 0), ei(), et)
    )
  }
  function Xh() {
    for (; ze !== null && !sr(); ) _0(ze)
  }
  function _0(e) {
    var t = l0(e.alternate, e, Nl)
    ;(e.memoizedProps = e.pendingProps), t === null ? Ni(e) : (ze = t)
  }
  function A0(e) {
    var t = e,
      l = t.alternate
    switch (t.tag) {
      case 15:
      case 0:
        t = Ws(l, t, t.pendingProps, t.type, void 0, Oe)
        break
      case 11:
        t = Ws(l, t, t.pendingProps, t.type.render, t.ref, Oe)
        break
      case 5:
        ic(t)
      default:
        n0(l, t), (t = ze = Oo(t, Nl)), (t = l0(l, t, Nl))
    }
    ;(e.memoizedProps = e.pendingProps), t === null ? Ni(e) : (ze = t)
  }
  function bn(e, t, l, a) {
    ;(Ml = Da = null), ic(t), (on = null), (au = 0)
    var n = t.return
    try {
      if (wh(e, n, t, l, Oe)) {
        ;(et = 1), Ri(e, Zt(l, e.current)), (ze = null)
        return
      }
    } catch (u) {
      if (n !== null) throw ((ze = n), u)
      ;(et = 1), Ri(e, Zt(l, e.current)), (ze = null)
      return
    }
    t.flags & 32768
      ? (je || a === 1
          ? (e = !0)
          : mn || (Oe & 536870912) !== 0
          ? (e = !1)
          : ((Il = e = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = kt.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        O0(t, e))
      : Ni(t)
  }
  function Ni(e) {
    var t = e
    do {
      if ((t.flags & 32768) !== 0) {
        O0(t, Il)
        return
      }
      e = t.return
      var l = Uh(t.alternate, t, Nl)
      if (l !== null) {
        ze = l
        return
      }
      if (((t = t.sibling), t !== null)) {
        ze = t
        return
      }
      ze = t = e
    } while (t !== null)
    et === 0 && (et = 5)
  }
  function O0(e, t) {
    do {
      var l = jh(e.alternate, e)
      if (l !== null) {
        ;(l.flags &= 32767), (ze = l)
        return
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        ze = e
        return
      }
      ze = e = l
    } while (e !== null)
    ;(et = 6), (ze = null)
  }
  function w0(e, t, l, a, n, u, c, d, g) {
    e.cancelPendingCommit = null
    do Ui()
    while (vt !== 0)
    if ((He & 6) !== 0) throw Error(o(327))
    if (t !== null) {
      if (t === e.current) throw Error(o(177))
      if (
        ((u = t.lanes | t.childLanes),
        (u |= jr),
        Zu(e, l, u, c, d, g),
        e === Xe && ((ze = Xe = null), (Oe = 0)),
        (yn = t),
        (la = e),
        (gn = l),
        (Yc = u),
        (Gc = n),
        (x0 = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Jh(Va, function () {
              return L0(), null
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ;(a = O.T), (O.T = null), (n = K.p), (K.p = 2), (c = He), (He |= 4)
        try {
          Hh(e, t, l)
        } finally {
          ;(He = c), (K.p = n), (O.T = a)
        }
      }
      ;(vt = 1), N0(), U0(), j0()
    }
  }
  function N0() {
    if (vt === 1) {
      vt = 0
      var e = la,
        t = yn,
        l = (t.flags & 13878) !== 0
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        ;(l = O.T), (O.T = null)
        var a = K.p
        K.p = 2
        var n = He
        He |= 4
        try {
          v0(t, e)
          var u = af,
            c = Eo(e.containerInfo),
            d = u.focusedElem,
            g = u.selectionRange
          if (
            c !== d &&
            d &&
            d.ownerDocument &&
            So(d.ownerDocument.documentElement, d)
          ) {
            if (g !== null && Ar(d)) {
              var C = g.start,
                L = g.end
              if ((L === void 0 && (L = C), 'selectionStart' in d))
                (d.selectionStart = C),
                  (d.selectionEnd = Math.min(L, d.value.length))
              else {
                var V = d.ownerDocument || document,
                  _ = (V && V.defaultView) || window
                if (_.getSelection) {
                  var A = _.getSelection(),
                    me = d.textContent.length,
                    oe = Math.min(g.start, me),
                    Ye = g.end === void 0 ? oe : Math.min(g.end, me)
                  !A.extend && oe > Ye && ((c = Ye), (Ye = oe), (oe = c))
                  var T = bo(d, oe),
                    x = bo(d, Ye)
                  if (
                    T &&
                    x &&
                    (A.rangeCount !== 1 ||
                      A.anchorNode !== T.node ||
                      A.anchorOffset !== T.offset ||
                      A.focusNode !== x.node ||
                      A.focusOffset !== x.offset)
                  ) {
                    var z = V.createRange()
                    z.setStart(T.node, T.offset),
                      A.removeAllRanges(),
                      oe > Ye
                        ? (A.addRange(z), A.extend(x.node, x.offset))
                        : (z.setEnd(x.node, x.offset), A.addRange(z))
                  }
                }
              }
            }
            for (V = [], A = d; (A = A.parentNode); )
              A.nodeType === 1 &&
                V.push({ element: A, left: A.scrollLeft, top: A.scrollTop })
            for (
              typeof d.focus == 'function' && d.focus(), d = 0;
              d < V.length;
              d++
            ) {
              var Y = V[d]
              ;(Y.element.scrollLeft = Y.left), (Y.element.scrollTop = Y.top)
            }
          }
          ;(Ki = !!lf), (af = lf = null)
        } finally {
          ;(He = n), (K.p = a), (O.T = l)
        }
      }
      ;(e.current = t), (vt = 2)
    }
  }
  function U0() {
    if (vt === 2) {
      vt = 0
      var e = la,
        t = yn,
        l = (t.flags & 8772) !== 0
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        ;(l = O.T), (O.T = null)
        var a = K.p
        K.p = 2
        var n = He
        He |= 4
        try {
          s0(e, t.alternate, t)
        } finally {
          ;(He = n), (K.p = a), (O.T = l)
        }
      }
      vt = 3
    }
  }
  function j0() {
    if (vt === 4 || vt === 3) {
      ;(vt = 0), dr()
      var e = la,
        t = yn,
        l = gn,
        a = x0
      ;(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (vt = 5)
        : ((vt = 0), (yn = la = null), H0(e, e.pendingLanes))
      var n = e.pendingLanes
      if (
        (n === 0 && (ta = null),
        An(l),
        (t = t.stateNode),
        $e && typeof $e.onCommitFiberRoot == 'function')
      )
        try {
          $e.onCommitFiberRoot(Rt, t, void 0, (t.current.flags & 128) === 128)
        } catch {}
      if (a !== null) {
        ;(t = O.T), (n = K.p), (K.p = 2), (O.T = null)
        try {
          for (var u = e.onRecoverableError, c = 0; c < a.length; c++) {
            var d = a[c]
            u(d.value, { componentStack: d.stack })
          }
        } finally {
          ;(O.T = t), (K.p = n)
        }
      }
      ;(gn & 3) !== 0 && Ui(),
        ml(e),
        (n = e.pendingLanes),
        (l & 4194090) !== 0 && (n & 42) !== 0
          ? e === Vc
            ? du++
            : ((du = 0), (Vc = e))
          : (du = 0),
        hu(0)
    }
  }
  function H0(e, t) {
    ;(e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Kn(t)))
  }
  function Ui(e) {
    return N0(), U0(), j0(), L0()
  }
  function L0() {
    if (vt !== 5) return !1
    var e = la,
      t = Yc
    Yc = 0
    var l = An(gn),
      a = O.T,
      n = K.p
    try {
      ;(K.p = 32 > l ? 32 : l), (O.T = null), (l = Gc), (Gc = null)
      var u = la,
        c = gn
      if (((vt = 0), (yn = la = null), (gn = 0), (He & 6) !== 0))
        throw Error(o(331))
      var d = He
      if (
        ((He |= 4),
        S0(u.current),
        g0(u, u.current, c, l),
        (He = d),
        hu(0, !1),
        $e && typeof $e.onPostCommitFiberRoot == 'function')
      )
        try {
          $e.onPostCommitFiberRoot(Rt, u)
        } catch {}
      return !0
    } finally {
      ;(K.p = n), (O.T = a), H0(e, t)
    }
  }
  function B0(e, t, l) {
    ;(t = Zt(l, t)),
      (t = Sc(e.stateNode, t, 2)),
      (e = Kl(e, t, 2)),
      e !== null && (ya(e, 2), ml(e))
  }
  function Ge(e, t, l) {
    if (e.tag === 3) B0(e, e, l)
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          B0(t, e, l)
          break
        } else if (t.tag === 1) {
          var a = t.stateNode
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' &&
              (ta === null || !ta.has(a)))
          ) {
            ;(e = Zt(l, e)),
              (l = Vs(2)),
              (a = Kl(t, l, 2)),
              a !== null && (Xs(l, a, t, e), ya(a, 2), ml(a))
            break
          }
        }
        t = t.return
      }
  }
  function Kc(e, t, l) {
    var a = e.pingCache
    if (a === null) {
      a = e.pingCache = new qh()
      var n = new Set()
      a.set(t, n)
    } else (n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n))
    n.has(l) ||
      ((Hc = !0), n.add(l), (e = Zh.bind(null, e, t, l)), t.then(e, e))
  }
  function Zh(e, t, l) {
    var a = e.pingCache
    a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      Xe === e &&
        (Oe & l) === l &&
        (et === 4 || (et === 3 && (Oe & 62914560) === Oe && 300 > Ot() - qc)
          ? (He & 2) === 0 && pn(e, 0)
          : (Lc |= l),
        vn === Oe && (vn = 0)),
      ml(e)
  }
  function q0(e, t) {
    t === 0 && (t = Xu()), (e = Ia(e, t)), e !== null && (ya(e, t), ml(e))
  }
  function Qh(e) {
    var t = e.memoizedState,
      l = 0
    t !== null && (l = t.retryLane), q0(e, l)
  }
  function Kh(e, t) {
    var l = 0
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          n = e.memoizedState
        n !== null && (l = n.retryLane)
        break
      case 19:
        a = e.stateNode
        break
      case 22:
        a = e.stateNode._retryCache
        break
      default:
        throw Error(o(314))
    }
    a !== null && a.delete(t), q0(e, l)
  }
  function Jh(e, t) {
    return Cn(e, t)
  }
  var ji = null,
    Sn = null,
    Jc = !1,
    Hi = !1,
    kc = !1,
    ja = 0
  function ml(e) {
    e !== Sn &&
      e.next === null &&
      (Sn === null ? (ji = Sn = e) : (Sn = Sn.next = e)),
      (Hi = !0),
      Jc || ((Jc = !0), $h())
  }
  function hu(e, t) {
    if (!kc && Hi) {
      kc = !0
      do
        for (var l = !1, a = ji; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes
            if (n === 0) var u = 0
            else {
              var c = a.suspendedLanes,
                d = a.pingedLanes
              ;(u = (1 << (31 - ht(42 | e) + 1)) - 1),
                (u &= n & ~(c & ~d)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0)
            }
            u !== 0 && ((l = !0), X0(a, u))
          } else
            (u = Oe),
              (u = va(
                a,
                a === Xe ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || fl(a, u) || ((l = !0), X0(a, u))
          a = a.next
        }
      while (l)
      kc = !1
    }
  }
  function kh() {
    Y0()
  }
  function Y0() {
    Hi = Jc = !1
    var e = 0
    ja !== 0 && (a3() && (e = ja), (ja = 0))
    for (var t = Ot(), l = null, a = ji; a !== null; ) {
      var n = a.next,
        u = G0(a, t)
      u === 0
        ? ((a.next = null),
          l === null ? (ji = n) : (l.next = n),
          n === null && (Sn = l))
        : ((l = a), (e !== 0 || (u & 3) !== 0) && (Hi = !0)),
        (a = n)
    }
    hu(e)
  }
  function G0(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        n = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;

    ) {
      var c = 31 - ht(u),
        d = 1 << c,
        g = n[c]
      g === -1
        ? ((d & l) === 0 || (d & a) !== 0) && (n[c] = Vu(d, t))
        : g <= t && (e.expiredLanes |= d),
        (u &= ~d)
    }
    if (
      ((t = Xe),
      (l = Oe),
      (l = va(
        e,
        e === t ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (a = e.callbackNode),
      l === 0 ||
        (e === t && (Le === 2 || Le === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && el(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      )
    if ((l & 3) === 0 || fl(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t
      switch ((a !== null && el(a), An(l))) {
        case 2:
        case 8:
          l = qu
          break
        case 32:
          l = Va
          break
        case 268435456:
          l = Ll
          break
        default:
          l = Va
      }
      return (
        (a = V0.bind(null, e)),
        (l = Cn(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      )
    }
    return (
      a !== null && a !== null && el(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    )
  }
  function V0(e, t) {
    if (vt !== 0 && vt !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null
    var l = e.callbackNode
    if (Ui() && e.callbackNode !== l) return null
    var a = Oe
    return (
      (a = va(
        e,
        e === Xe ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (R0(e, a, t),
          G0(e, Ot()),
          e.callbackNode != null && e.callbackNode === l
            ? V0.bind(null, e)
            : null)
    )
  }
  function X0(e, t) {
    if (Ui()) return null
    R0(e, t, !0)
  }
  function $h() {
    u3(function () {
      ;(He & 6) !== 0 ? Cn(Bu, kh) : Y0()
    })
  }
  function $c() {
    return ja === 0 && (ja = Xa()), ja
  }
  function Z0(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
      ? e
      : Ju('' + e)
  }
  function Q0(e, t) {
    var l = t.ownerDocument.createElement('input')
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute('form', e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    )
  }
  function Wh(e, t, l, a, n) {
    if (t === 'submit' && l && l.stateNode === n) {
      var u = Z0((n[Q] || null).action),
        c = a.submitter
      c &&
        ((t = (t = c[Q] || null)
          ? Z0(t.formAction)
          : c.getAttribute('formAction')),
        t !== null && ((u = t), (c = null)))
      var d = new Fu('action', 'action', null, a, n)
      e.push({
        event: d,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (ja !== 0) {
                  var g = c ? Q0(n, c) : new FormData(n)
                  vc(
                    l,
                    { pending: !0, data: g, method: n.method, action: u },
                    null,
                    g
                  )
                }
              } else
                typeof u == 'function' &&
                  (d.preventDefault(),
                  (g = c ? Q0(n, c) : new FormData(n)),
                  vc(
                    l,
                    { pending: !0, data: g, method: n.method, action: u },
                    u,
                    g
                  ))
            },
            currentTarget: n,
          },
        ],
      })
    }
  }
  for (var Wc = 0; Wc < Ur.length; Wc++) {
    var Fc = Ur[Wc],
      Fh = Fc.toLowerCase(),
      Ph = Fc[0].toUpperCase() + Fc.slice(1)
    nl(Fh, 'on' + Ph)
  }
  nl(Ro, 'onAnimationEnd'),
    nl(Mo, 'onAnimationIteration'),
    nl(zo, 'onAnimationStart'),
    nl('dblclick', 'onDoubleClick'),
    nl('focusin', 'onFocus'),
    nl('focusout', 'onBlur'),
    nl(vh, 'onTransitionRun'),
    nl(yh, 'onTransitionStart'),
    nl(gh, 'onTransitionCancel'),
    nl(Co, 'onTransitionEnd'),
    Gt('onMouseEnter', ['mouseout', 'mouseover']),
    Gt('onMouseLeave', ['mouseout', 'mouseover']),
    Gt('onPointerEnter', ['pointerout', 'pointerover']),
    Gt('onPointerLeave', ['pointerout', 'pointerover']),
    xt(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
      )
    ),
    xt(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    xt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    xt(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' ')
    ),
    xt(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    xt(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    )
  var mu =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Ih = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(mu)
    )
  function K0(e, t) {
    t = (t & 4) !== 0
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event
      a = a.listeners
      e: {
        var u = void 0
        if (t)
          for (var c = a.length - 1; 0 <= c; c--) {
            var d = a[c],
              g = d.instance,
              C = d.currentTarget
            if (((d = d.listener), g !== u && n.isPropagationStopped())) break e
            ;(u = d), (n.currentTarget = C)
            try {
              u(n)
            } catch (L) {
              Ti(L)
            }
            ;(n.currentTarget = null), (u = g)
          }
        else
          for (c = 0; c < a.length; c++) {
            if (
              ((d = a[c]),
              (g = d.instance),
              (C = d.currentTarget),
              (d = d.listener),
              g !== u && n.isPropagationStopped())
            )
              break e
            ;(u = d), (n.currentTarget = C)
            try {
              u(n)
            } catch (L) {
              Ti(L)
            }
            ;(n.currentTarget = null), (u = g)
          }
      }
    }
  }
  function Ce(e, t) {
    var l = t[fe]
    l === void 0 && (l = t[fe] = new Set())
    var a = e + '__bubble'
    l.has(a) || (J0(t, e, 2, !1), l.add(a))
  }
  function Pc(e, t, l) {
    var a = 0
    t && (a |= 4), J0(l, e, a, t)
  }
  var Li = '_reactListening' + Math.random().toString(36).slice(2)
  function Ic(e) {
    if (!e[Li]) {
      ;(e[Li] = !0),
        Ae.forEach(function (l) {
          l !== 'selectionchange' && (Ih.has(l) || Pc(l, !1, e), Pc(l, !0, e))
        })
      var t = e.nodeType === 9 ? e : e.ownerDocument
      t === null || t[Li] || ((t[Li] = !0), Pc('selectionchange', !1, t))
    }
  }
  function J0(e, t, l, a) {
    switch (gd(t)) {
      case 2:
        var n = z3
        break
      case 8:
        n = C3
        break
      default:
        n = mf
    }
    ;(l = n.bind(null, t, l, e)),
      (n = void 0),
      !Er ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (n = !0),
      a
        ? n !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: n })
          : e.addEventListener(t, l, !0)
        : n !== void 0
        ? e.addEventListener(t, l, { passive: n })
        : e.addEventListener(t, l, !1)
  }
  function ef(e, t, l, a, n) {
    var u = a
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return
        var c = a.tag
        if (c === 3 || c === 4) {
          var d = a.stateNode.containerInfo
          if (d === n) break
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var g = c.tag
              if ((g === 3 || g === 4) && c.stateNode.containerInfo === n)
                return
              c = c.return
            }
          for (; d !== null; ) {
            if (((c = ve(d)), c === null)) return
            if (((g = c.tag), g === 5 || g === 6 || g === 26 || g === 27)) {
              a = u = c
              continue e
            }
            d = d.parentNode
          }
        }
        a = a.return
      }
    If(function () {
      var C = u,
        L = br(l),
        V = []
      e: {
        var _ = Do.get(e)
        if (_ !== void 0) {
          var A = Fu,
            me = e
          switch (e) {
            case 'keypress':
              if ($u(l) === 0) break e
            case 'keydown':
            case 'keyup':
              A = J2
              break
            case 'focusin':
              ;(me = 'focus'), (A = Mr)
              break
            case 'focusout':
              ;(me = 'blur'), (A = Mr)
              break
            case 'beforeblur':
            case 'afterblur':
              A = Mr
              break
            case 'click':
              if (l.button === 2) break e
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              A = lo
              break
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              A = j2
              break
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              A = W2
              break
            case Ro:
            case Mo:
            case zo:
              A = B2
              break
            case Co:
              A = P2
              break
            case 'scroll':
            case 'scrollend':
              A = N2
              break
            case 'wheel':
              A = eh
              break
            case 'copy':
            case 'cut':
            case 'paste':
              A = Y2
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              A = no
              break
            case 'toggle':
            case 'beforetoggle':
              A = lh
          }
          var oe = (t & 4) !== 0,
            Ye = !oe && (e === 'scroll' || e === 'scrollend'),
            T = oe ? (_ !== null ? _ + 'Capture' : null) : _
          oe = []
          for (var x = C, z; x !== null; ) {
            var Y = x
            if (
              ((z = Y.stateNode),
              (Y = Y.tag),
              (Y !== 5 && Y !== 26 && Y !== 27) ||
                z === null ||
                T === null ||
                ((Y = Nn(x, T)), Y != null && oe.push(vu(x, Y, z))),
              Ye)
            )
              break
            x = x.return
          }
          0 < oe.length &&
            ((_ = new A(_, me, null, l, L)),
            V.push({ event: _, listeners: oe }))
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((_ = e === 'mouseover' || e === 'pointerover'),
            (A = e === 'mouseout' || e === 'pointerout'),
            _ &&
              l !== pr &&
              (me = l.relatedTarget || l.fromElement) &&
              (ve(me) || me[te]))
          )
            break e
          if (
            (A || _) &&
            ((_ =
              L.window === L
                ? L
                : (_ = L.ownerDocument)
                ? _.defaultView || _.parentWindow
                : window),
            A
              ? ((me = l.relatedTarget || l.toElement),
                (A = C),
                (me = me ? ve(me) : null),
                me !== null &&
                  ((Ye = h(me)),
                  (oe = me.tag),
                  me !== Ye || (oe !== 5 && oe !== 27 && oe !== 6)) &&
                  (me = null))
              : ((A = null), (me = C)),
            A !== me)
          ) {
            if (
              ((oe = lo),
              (Y = 'onMouseLeave'),
              (T = 'onMouseEnter'),
              (x = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((oe = no),
                (Y = 'onPointerLeave'),
                (T = 'onPointerEnter'),
                (x = 'pointer')),
              (Ye = A == null ? _ : Qe(A)),
              (z = me == null ? _ : Qe(me)),
              (_ = new oe(Y, x + 'leave', A, l, L)),
              (_.target = Ye),
              (_.relatedTarget = z),
              (Y = null),
              ve(L) === C &&
                ((oe = new oe(T, x + 'enter', me, l, L)),
                (oe.target = z),
                (oe.relatedTarget = Ye),
                (Y = oe)),
              (Ye = Y),
              A && me)
            )
              t: {
                for (oe = A, T = me, x = 0, z = oe; z; z = En(z)) x++
                for (z = 0, Y = T; Y; Y = En(Y)) z++
                for (; 0 < x - z; ) (oe = En(oe)), x--
                for (; 0 < z - x; ) (T = En(T)), z--
                for (; x--; ) {
                  if (oe === T || (T !== null && oe === T.alternate)) break t
                  ;(oe = En(oe)), (T = En(T))
                }
                oe = null
              }
            else oe = null
            A !== null && k0(V, _, A, oe, !1),
              me !== null && Ye !== null && k0(V, Ye, me, oe, !0)
          }
        }
        e: {
          if (
            ((_ = C ? Qe(C) : window),
            (A = _.nodeName && _.nodeName.toLowerCase()),
            A === 'select' || (A === 'input' && _.type === 'file'))
          )
            var I = ho
          else if (oo(_))
            if (mo) I = dh
            else {
              I = oh
              var Te = fh
            }
          else
            (A = _.nodeName),
              !A ||
              A.toLowerCase() !== 'input' ||
              (_.type !== 'checkbox' && _.type !== 'radio')
                ? C && gr(C.elementType) && (I = ho)
                : (I = sh)
          if (I && (I = I(e, C))) {
            so(V, I, l, L)
            break e
          }
          Te && Te(e, _, C),
            e === 'focusout' &&
              C &&
              _.type === 'number' &&
              C.memoizedProps.value != null &&
              yr(_, 'number', _.value)
        }
        switch (((Te = C ? Qe(C) : window), e)) {
          case 'focusin':
            ;(oo(Te) || Te.contentEditable === 'true') &&
              ((Wa = Te), (Or = C), (Gn = null))
            break
          case 'focusout':
            Gn = Or = Wa = null
            break
          case 'mousedown':
            wr = !0
            break
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ;(wr = !1), xo(V, l, L)
            break
          case 'selectionchange':
            if (mh) break
          case 'keydown':
          case 'keyup':
            xo(V, l, L)
        }
        var ne
        if (Cr)
          e: {
            switch (e) {
              case 'compositionstart':
                var de = 'onCompositionStart'
                break e
              case 'compositionend':
                de = 'onCompositionEnd'
                break e
              case 'compositionupdate':
                de = 'onCompositionUpdate'
                break e
            }
            de = void 0
          }
        else
          $a
            ? co(e, l) && (de = 'onCompositionEnd')
            : e === 'keydown' &&
              l.keyCode === 229 &&
              (de = 'onCompositionStart')
        de &&
          (uo &&
            l.locale !== 'ko' &&
            ($a || de !== 'onCompositionStart'
              ? de === 'onCompositionEnd' && $a && (ne = eo())
              : ((Vl = L),
                (xr = 'value' in Vl ? Vl.value : Vl.textContent),
                ($a = !0))),
          (Te = Bi(C, de)),
          0 < Te.length &&
            ((de = new ao(de, e, null, l, L)),
            V.push({ event: de, listeners: Te }),
            ne
              ? (de.data = ne)
              : ((ne = fo(l)), ne !== null && (de.data = ne)))),
          (ne = nh ? uh(e, l) : ih(e, l)) &&
            ((de = Bi(C, 'onBeforeInput')),
            0 < de.length &&
              ((Te = new ao('onBeforeInput', 'beforeinput', null, l, L)),
              V.push({ event: Te, listeners: de }),
              (Te.data = ne))),
          Wh(V, e, C, l, L)
      }
      K0(V, t)
    })
  }
  function vu(e, t, l) {
    return { instance: e, listener: t, currentTarget: l }
  }
  function Bi(e, t) {
    for (var l = t + 'Capture', a = []; e !== null; ) {
      var n = e,
        u = n.stateNode
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = Nn(e, l)),
          n != null && a.unshift(vu(e, n, u)),
          (n = Nn(e, t)),
          n != null && a.push(vu(e, n, u))),
        e.tag === 3)
      )
        return a
      e = e.return
    }
    return []
  }
  function En(e) {
    if (e === null) return null
    do e = e.return
    while (e && e.tag !== 5 && e.tag !== 27)
    return e || null
  }
  function k0(e, t, l, a, n) {
    for (var u = t._reactName, c = []; l !== null && l !== a; ) {
      var d = l,
        g = d.alternate,
        C = d.stateNode
      if (((d = d.tag), g !== null && g === a)) break
      ;(d !== 5 && d !== 26 && d !== 27) ||
        C === null ||
        ((g = C),
        n
          ? ((C = Nn(l, u)), C != null && c.unshift(vu(l, C, g)))
          : n || ((C = Nn(l, u)), C != null && c.push(vu(l, C, g)))),
        (l = l.return)
    }
    c.length !== 0 && e.push({ event: t, listeners: c })
  }
  var e3 = /\r\n?/g,
    t3 = /\u0000|\uFFFD/g
  function $0(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        e3,
        `
`
      )
      .replace(t3, '')
  }
  function W0(e, t) {
    return (t = $0(t)), $0(e) === t
  }
  function qi() {}
  function qe(e, t, l, a, n, u) {
    switch (l) {
      case 'children':
        typeof a == 'string'
          ? t === 'body' || (t === 'textarea' && a === '') || Ka(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') &&
            t !== 'body' &&
            Ka(e, '' + a)
        break
      case 'className':
        Sl(e, 'class', a)
        break
      case 'tabIndex':
        Sl(e, 'tabindex', a)
        break
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Sl(e, l, a)
        break
      case 'style':
        Ff(e, a, u)
        break
      case 'data':
        if (t !== 'object') {
          Sl(e, 'data', a)
          break
        }
      case 'src':
      case 'href':
        if (a === '' && (t !== 'a' || l !== 'href')) {
          e.removeAttribute(l)
          break
        }
        if (
          a == null ||
          typeof a == 'function' ||
          typeof a == 'symbol' ||
          typeof a == 'boolean'
        ) {
          e.removeAttribute(l)
          break
        }
        ;(a = Ju('' + a)), e.setAttribute(l, a)
        break
      case 'action':
      case 'formAction':
        if (typeof a == 'function') {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          )
          break
        } else
          typeof u == 'function' &&
            (l === 'formAction'
              ? (t !== 'input' && qe(e, t, 'name', n.name, n, null),
                qe(e, t, 'formEncType', n.formEncType, n, null),
                qe(e, t, 'formMethod', n.formMethod, n, null),
                qe(e, t, 'formTarget', n.formTarget, n, null))
              : (qe(e, t, 'encType', n.encType, n, null),
                qe(e, t, 'method', n.method, n, null),
                qe(e, t, 'target', n.target, n, null)))
        if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
          e.removeAttribute(l)
          break
        }
        ;(a = Ju('' + a)), e.setAttribute(l, a)
        break
      case 'onClick':
        a != null && (e.onclick = qi)
        break
      case 'onScroll':
        a != null && Ce('scroll', e)
        break
      case 'onScrollEnd':
        a != null && Ce('scrollend', e)
        break
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(o(61))
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(o(60))
            e.innerHTML = l
          }
        }
        break
      case 'multiple':
        e.multiple = a && typeof a != 'function' && typeof a != 'symbol'
        break
      case 'muted':
        e.muted = a && typeof a != 'function' && typeof a != 'symbol'
        break
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break
      case 'autoFocus':
        break
      case 'xlinkHref':
        if (
          a == null ||
          typeof a == 'function' ||
          typeof a == 'boolean' ||
          typeof a == 'symbol'
        ) {
          e.removeAttribute('xlink:href')
          break
        }
        ;(l = Ju('' + a)),
          e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l)
        break
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        a != null && typeof a != 'function' && typeof a != 'symbol'
          ? e.setAttribute(l, '' + a)
          : e.removeAttribute(l)
        break
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        a && typeof a != 'function' && typeof a != 'symbol'
          ? e.setAttribute(l, '')
          : e.removeAttribute(l)
        break
      case 'capture':
      case 'download':
        a === !0
          ? e.setAttribute(l, '')
          : a !== !1 &&
            a != null &&
            typeof a != 'function' &&
            typeof a != 'symbol'
          ? e.setAttribute(l, a)
          : e.removeAttribute(l)
        break
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        a != null &&
        typeof a != 'function' &&
        typeof a != 'symbol' &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(l, a)
          : e.removeAttribute(l)
        break
      case 'rowSpan':
      case 'start':
        a == null || typeof a == 'function' || typeof a == 'symbol' || isNaN(a)
          ? e.removeAttribute(l)
          : e.setAttribute(l, a)
        break
      case 'popover':
        Ce('beforetoggle', e), Ce('toggle', e), Vt(e, 'popover', a)
        break
      case 'xlinkActuate':
        xe(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a)
        break
      case 'xlinkArcrole':
        xe(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a)
        break
      case 'xlinkRole':
        xe(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a)
        break
      case 'xlinkShow':
        xe(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a)
        break
      case 'xlinkTitle':
        xe(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a)
        break
      case 'xlinkType':
        xe(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a)
        break
      case 'xmlBase':
        xe(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a)
        break
      case 'xmlLang':
        xe(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a)
        break
      case 'xmlSpace':
        xe(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a)
        break
      case 'is':
        Vt(e, 'is', a)
        break
      case 'innerText':
      case 'textContent':
        break
      default:
        ;(!(2 < l.length) ||
          (l[0] !== 'o' && l[0] !== 'O') ||
          (l[1] !== 'n' && l[1] !== 'N')) &&
          ((l = O2.get(l) || l), Vt(e, l, a))
    }
  }
  function tf(e, t, l, a, n, u) {
    switch (l) {
      case 'style':
        Ff(e, a, u)
        break
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(o(61))
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(o(60))
            e.innerHTML = l
          }
        }
        break
      case 'children':
        typeof a == 'string'
          ? Ka(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && Ka(e, '' + a)
        break
      case 'onScroll':
        a != null && Ce('scroll', e)
        break
      case 'onScrollEnd':
        a != null && Ce('scrollend', e)
        break
      case 'onClick':
        a != null && (e.onclick = qi)
        break
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break
      case 'innerText':
      case 'textContent':
        break
      default:
        if (!Bl.hasOwnProperty(l))
          e: {
            if (
              l[0] === 'o' &&
              l[1] === 'n' &&
              ((n = l.endsWith('Capture')),
              (t = l.slice(2, n ? l.length - 7 : void 0)),
              (u = e[Q] || null),
              (u = u != null ? u[l] : null),
              typeof u == 'function' && e.removeEventListener(t, u, n),
              typeof a == 'function')
            ) {
              typeof u != 'function' &&
                u !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, a, n)
              break e
            }
            l in e ? (e[l] = a) : a === !0 ? e.setAttribute(l, '') : Vt(e, l, a)
          }
    }
  }
  function yt(e, t, l) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break
      case 'img':
        Ce('error', e), Ce('load', e)
        var a = !1,
          n = !1,
          u
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var c = l[u]
            if (c != null)
              switch (u) {
                case 'src':
                  a = !0
                  break
                case 'srcSet':
                  n = !0
                  break
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(o(137, t))
                default:
                  qe(e, t, u, c, l, null)
              }
          }
        n && qe(e, t, 'srcSet', l.srcSet, l, null),
          a && qe(e, t, 'src', l.src, l, null)
        return
      case 'input':
        Ce('invalid', e)
        var d = (u = c = n = null),
          g = null,
          C = null
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var L = l[a]
            if (L != null)
              switch (a) {
                case 'name':
                  n = L
                  break
                case 'type':
                  c = L
                  break
                case 'checked':
                  g = L
                  break
                case 'defaultChecked':
                  C = L
                  break
                case 'value':
                  u = L
                  break
                case 'defaultValue':
                  d = L
                  break
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (L != null) throw Error(o(137, t))
                  break
                default:
                  qe(e, t, a, L, l, null)
              }
          }
        Jf(e, u, d, g, C, c, n, !1), Qu(e)
        return
      case 'select':
        Ce('invalid', e), (a = c = u = null)
        for (n in l)
          if (l.hasOwnProperty(n) && ((d = l[n]), d != null))
            switch (n) {
              case 'value':
                u = d
                break
              case 'defaultValue':
                c = d
                break
              case 'multiple':
                a = d
              default:
                qe(e, t, n, d, l, null)
            }
        ;(t = u),
          (l = c),
          (e.multiple = !!a),
          t != null ? Qa(e, !!a, t, !1) : l != null && Qa(e, !!a, l, !0)
        return
      case 'textarea':
        Ce('invalid', e), (u = n = a = null)
        for (c in l)
          if (l.hasOwnProperty(c) && ((d = l[c]), d != null))
            switch (c) {
              case 'value':
                a = d
                break
              case 'defaultValue':
                n = d
                break
              case 'children':
                u = d
                break
              case 'dangerouslySetInnerHTML':
                if (d != null) throw Error(o(91))
                break
              default:
                qe(e, t, c, d, l, null)
            }
        $f(e, a, n, u), Qu(e)
        return
      case 'option':
        for (g in l)
          if (l.hasOwnProperty(g) && ((a = l[g]), a != null))
            switch (g) {
              case 'selected':
                e.selected = a && typeof a != 'function' && typeof a != 'symbol'
                break
              default:
                qe(e, t, g, a, l, null)
            }
        return
      case 'dialog':
        Ce('beforetoggle', e), Ce('toggle', e), Ce('cancel', e), Ce('close', e)
        break
      case 'iframe':
      case 'object':
        Ce('load', e)
        break
      case 'video':
      case 'audio':
        for (a = 0; a < mu.length; a++) Ce(mu[a], e)
        break
      case 'image':
        Ce('error', e), Ce('load', e)
        break
      case 'details':
        Ce('toggle', e)
        break
      case 'embed':
      case 'source':
      case 'link':
        Ce('error', e), Ce('load', e)
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (C in l)
          if (l.hasOwnProperty(C) && ((a = l[C]), a != null))
            switch (C) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(o(137, t))
              default:
                qe(e, t, C, a, l, null)
            }
        return
      default:
        if (gr(t)) {
          for (L in l)
            l.hasOwnProperty(L) &&
              ((a = l[L]), a !== void 0 && tf(e, t, L, a, l, void 0))
          return
        }
    }
    for (d in l)
      l.hasOwnProperty(d) && ((a = l[d]), a != null && qe(e, t, d, a, l, null))
  }
  function l3(e, t, l, a) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break
      case 'input':
        var n = null,
          u = null,
          c = null,
          d = null,
          g = null,
          C = null,
          L = null
        for (A in l) {
          var V = l[A]
          if (l.hasOwnProperty(A) && V != null)
            switch (A) {
              case 'checked':
                break
              case 'value':
                break
              case 'defaultValue':
                g = V
              default:
                a.hasOwnProperty(A) || qe(e, t, A, null, a, V)
            }
        }
        for (var _ in a) {
          var A = a[_]
          if (((V = l[_]), a.hasOwnProperty(_) && (A != null || V != null)))
            switch (_) {
              case 'type':
                u = A
                break
              case 'name':
                n = A
                break
              case 'checked':
                C = A
                break
              case 'defaultChecked':
                L = A
                break
              case 'value':
                c = A
                break
              case 'defaultValue':
                d = A
                break
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (A != null) throw Error(o(137, t))
                break
              default:
                A !== V && qe(e, t, _, A, a, V)
            }
        }
        vr(e, c, d, g, C, L, u, n)
        return
      case 'select':
        A = c = d = _ = null
        for (u in l)
          if (((g = l[u]), l.hasOwnProperty(u) && g != null))
            switch (u) {
              case 'value':
                break
              case 'multiple':
                A = g
              default:
                a.hasOwnProperty(u) || qe(e, t, u, null, a, g)
            }
        for (n in a)
          if (
            ((u = a[n]),
            (g = l[n]),
            a.hasOwnProperty(n) && (u != null || g != null))
          )
            switch (n) {
              case 'value':
                _ = u
                break
              case 'defaultValue':
                d = u
                break
              case 'multiple':
                c = u
              default:
                u !== g && qe(e, t, n, u, a, g)
            }
        ;(t = d),
          (l = c),
          (a = A),
          _ != null
            ? Qa(e, !!l, _, !1)
            : !!a != !!l &&
              (t != null ? Qa(e, !!l, t, !0) : Qa(e, !!l, l ? [] : '', !1))
        return
      case 'textarea':
        A = _ = null
        for (d in l)
          if (
            ((n = l[d]),
            l.hasOwnProperty(d) && n != null && !a.hasOwnProperty(d))
          )
            switch (d) {
              case 'value':
                break
              case 'children':
                break
              default:
                qe(e, t, d, null, a, n)
            }
        for (c in a)
          if (
            ((n = a[c]),
            (u = l[c]),
            a.hasOwnProperty(c) && (n != null || u != null))
          )
            switch (c) {
              case 'value':
                _ = n
                break
              case 'defaultValue':
                A = n
                break
              case 'children':
                break
              case 'dangerouslySetInnerHTML':
                if (n != null) throw Error(o(91))
                break
              default:
                n !== u && qe(e, t, c, n, a, u)
            }
        kf(e, _, A)
        return
      case 'option':
        for (var me in l)
          if (
            ((_ = l[me]),
            l.hasOwnProperty(me) && _ != null && !a.hasOwnProperty(me))
          )
            switch (me) {
              case 'selected':
                e.selected = !1
                break
              default:
                qe(e, t, me, null, a, _)
            }
        for (g in a)
          if (
            ((_ = a[g]),
            (A = l[g]),
            a.hasOwnProperty(g) && _ !== A && (_ != null || A != null))
          )
            switch (g) {
              case 'selected':
                e.selected = _ && typeof _ != 'function' && typeof _ != 'symbol'
                break
              default:
                qe(e, t, g, _, a, A)
            }
        return
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var oe in l)
          (_ = l[oe]),
            l.hasOwnProperty(oe) &&
              _ != null &&
              !a.hasOwnProperty(oe) &&
              qe(e, t, oe, null, a, _)
        for (C in a)
          if (
            ((_ = a[C]),
            (A = l[C]),
            a.hasOwnProperty(C) && _ !== A && (_ != null || A != null))
          )
            switch (C) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (_ != null) throw Error(o(137, t))
                break
              default:
                qe(e, t, C, _, a, A)
            }
        return
      default:
        if (gr(t)) {
          for (var Ye in l)
            (_ = l[Ye]),
              l.hasOwnProperty(Ye) &&
                _ !== void 0 &&
                !a.hasOwnProperty(Ye) &&
                tf(e, t, Ye, void 0, a, _)
          for (L in a)
            (_ = a[L]),
              (A = l[L]),
              !a.hasOwnProperty(L) ||
                _ === A ||
                (_ === void 0 && A === void 0) ||
                tf(e, t, L, _, a, A)
          return
        }
    }
    for (var T in l)
      (_ = l[T]),
        l.hasOwnProperty(T) &&
          _ != null &&
          !a.hasOwnProperty(T) &&
          qe(e, t, T, null, a, _)
    for (V in a)
      (_ = a[V]),
        (A = l[V]),
        !a.hasOwnProperty(V) ||
          _ === A ||
          (_ == null && A == null) ||
          qe(e, t, V, _, a, A)
  }
  var lf = null,
    af = null
  function Yi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument
  }
  function F0(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1
      case 'http://www.w3.org/1998/Math/MathML':
        return 2
      default:
        return 0
    }
  }
  function P0(e, t) {
    if (e === 0)
      switch (t) {
        case 'svg':
          return 1
        case 'math':
          return 2
        default:
          return 0
      }
    return e === 1 && t === 'foreignObject' ? 0 : e
  }
  function nf(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    )
  }
  var uf = null
  function a3() {
    var e = window.event
    return e && e.type === 'popstate'
      ? e === uf
        ? !1
        : ((uf = e), !0)
      : ((uf = null), !1)
  }
  var I0 = typeof setTimeout == 'function' ? setTimeout : void 0,
    n3 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    ed = typeof Promise == 'function' ? Promise : void 0,
    u3 =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof ed < 'u'
        ? function (e) {
            return ed.resolve(null).then(e).catch(i3)
          }
        : I0
  function i3(e) {
    setTimeout(function () {
      throw e
    })
  }
  function na(e) {
    return e === 'head'
  }
  function td(e, t) {
    var l = t,
      a = 0,
      n = 0
    do {
      var u = l.nextSibling
      if ((e.removeChild(l), u && u.nodeType === 8))
        if (((l = u.data), l === '/$')) {
          if (0 < a && 8 > a) {
            l = a
            var c = e.ownerDocument
            if ((l & 1 && yu(c.documentElement), l & 2 && yu(c.body), l & 4))
              for (l = c.head, yu(l), c = l.firstChild; c; ) {
                var d = c.nextSibling,
                  g = c.nodeName
                c[he] ||
                  g === 'SCRIPT' ||
                  g === 'STYLE' ||
                  (g === 'LINK' && c.rel.toLowerCase() === 'stylesheet') ||
                  l.removeChild(c),
                  (c = d)
              }
          }
          if (n === 0) {
            e.removeChild(u), Ru(t)
            return
          }
          n--
        } else
          l === '$' || l === '$?' || l === '$!'
            ? n++
            : (a = l.charCodeAt(0) - 48)
      else a = 0
      l = u
    } while (l)
    Ru(t)
  }
  function rf(e) {
    var t = e.firstChild
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t
      switch (((t = t.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          rf(l), ae(l)
          continue
        case 'SCRIPT':
        case 'STYLE':
          continue
        case 'LINK':
          if (l.rel.toLowerCase() === 'stylesheet') continue
      }
      e.removeChild(l)
    }
  }
  function r3(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break
      } else if (a) {
        if (!e[he])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break
              return e
            case 'link':
              if (
                ((u = e.getAttribute('rel')),
                u === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break
              if (
                u !== n.rel ||
                e.getAttribute('href') !==
                  (n.href == null || n.href === '' ? null : n.href) ||
                e.getAttribute('crossorigin') !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute('title') !== (n.title == null ? null : n.title)
              )
                break
              return e
            case 'style':
              if (e.hasAttribute('data-precedence')) break
              return e
            case 'script':
              if (
                ((u = e.getAttribute('src')),
                (u !== (n.src == null ? null : n.src) ||
                  e.getAttribute('type') !== (n.type == null ? null : n.type) ||
                  e.getAttribute('crossorigin') !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break
              return e
            default:
              return e
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var u = n.name == null ? null : '' + n.name
        if (n.type === 'hidden' && e.getAttribute('name') === u) return e
      } else return e
      if (((e = il(e.nextSibling)), e === null)) break
    }
    return null
  }
  function c3(e, t, l) {
    if (t === '') return null
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !l) ||
        ((e = il(e.nextSibling)), e === null)
      )
        return null
    return e
  }
  function cf(e) {
    return (
      e.data === '$!' ||
      (e.data === '$?' && e.ownerDocument.readyState === 'complete')
    )
  }
  function f3(e, t) {
    var l = e.ownerDocument
    if (e.data !== '$?' || l.readyState === 'complete') t()
    else {
      var a = function () {
        t(), l.removeEventListener('DOMContentLoaded', a)
      }
      l.addEventListener('DOMContentLoaded', a), (e._reactRetry = a)
    }
  }
  function il(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType
      if (t === 1 || t === 3) break
      if (t === 8) {
        if (
          ((t = e.data),
          t === '$' || t === '$!' || t === '$?' || t === 'F!' || t === 'F')
        )
          break
        if (t === '/$') return null
      }
    }
    return e
  }
  var ff = null
  function ld(e) {
    e = e.previousSibling
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data
        if (l === '$' || l === '$!' || l === '$?') {
          if (t === 0) return e
          t--
        } else l === '/$' && t++
      }
      e = e.previousSibling
    }
    return null
  }
  function ad(e, t, l) {
    switch (((t = Yi(l)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(o(452))
        return e
      case 'head':
        if (((e = t.head), !e)) throw Error(o(453))
        return e
      case 'body':
        if (((e = t.body), !e)) throw Error(o(454))
        return e
      default:
        throw Error(o(451))
    }
  }
  function yu(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0])
    ae(e)
  }
  var Wt = new Map(),
    nd = new Set()
  function Gi(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument
  }
  var Ul = K.d
  K.d = { f: o3, r: s3, D: d3, C: h3, L: m3, m: v3, X: g3, S: y3, M: p3 }
  function o3() {
    var e = Ul.f(),
      t = wi()
    return e || t
  }
  function s3(e) {
    var t = we(e)
    t !== null && t.tag === 5 && t.type === 'form' ? Rs(t) : Ul.r(e)
  }
  var xn = typeof document > 'u' ? null : document
  function ud(e, t, l) {
    var a = xn
    if (a && typeof t == 'string' && t) {
      var n = Xt(t)
      ;(n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof l == 'string' && (n += '[crossorigin="' + l + '"]'),
        nd.has(n) ||
          (nd.add(n),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement('link')),
            yt(t, 'link', e),
            Ne(t),
            a.head.appendChild(t)))
    }
  }
  function d3(e) {
    Ul.D(e), ud('dns-prefetch', e, null)
  }
  function h3(e, t) {
    Ul.C(e, t), ud('preconnect', e, t)
  }
  function m3(e, t, l) {
    Ul.L(e, t, l)
    var a = xn
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + Xt(t) + '"]'
      t === 'image' && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + Xt(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == 'string' &&
            (n += '[imagesizes="' + Xt(l.imageSizes) + '"]'))
        : (n += '[href="' + Xt(e) + '"]')
      var u = n
      switch (t) {
        case 'style':
          u = Tn(e)
          break
        case 'script':
          u = Rn(e)
      }
      Wt.has(u) ||
        ((e = E(
          {
            rel: 'preload',
            href: t === 'image' && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l
        )),
        Wt.set(u, e),
        a.querySelector(n) !== null ||
          (t === 'style' && a.querySelector(gu(u))) ||
          (t === 'script' && a.querySelector(pu(u))) ||
          ((t = a.createElement('link')),
          yt(t, 'link', e),
          Ne(t),
          a.head.appendChild(t)))
    }
  }
  function v3(e, t) {
    Ul.m(e, t)
    var l = xn
    if (l && e) {
      var a = t && typeof t.as == 'string' ? t.as : 'script',
        n =
          'link[rel="modulepreload"][as="' + Xt(a) + '"][href="' + Xt(e) + '"]',
        u = n
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = Rn(e)
      }
      if (
        !Wt.has(u) &&
        ((e = E({ rel: 'modulepreload', href: e }, t)),
        Wt.set(u, e),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (l.querySelector(pu(u))) return
        }
        ;(a = l.createElement('link')),
          yt(a, 'link', e),
          Ne(a),
          l.head.appendChild(a)
      }
    }
  }
  function y3(e, t, l) {
    Ul.S(e, t, l)
    var a = xn
    if (a && e) {
      var n = We(a).hoistableStyles,
        u = Tn(e)
      t = t || 'default'
      var c = n.get(u)
      if (!c) {
        var d = { loading: 0, preload: null }
        if ((c = a.querySelector(gu(u)))) d.loading = 5
        else {
          ;(e = E({ rel: 'stylesheet', href: e, 'data-precedence': t }, l)),
            (l = Wt.get(u)) && of(e, l)
          var g = (c = a.createElement('link'))
          Ne(g),
            yt(g, 'link', e),
            (g._p = new Promise(function (C, L) {
              ;(g.onload = C), (g.onerror = L)
            })),
            g.addEventListener('load', function () {
              d.loading |= 1
            }),
            g.addEventListener('error', function () {
              d.loading |= 2
            }),
            (d.loading |= 4),
            Vi(c, t, a)
        }
        ;(c = { type: 'stylesheet', instance: c, count: 1, state: d }),
          n.set(u, c)
      }
    }
  }
  function g3(e, t) {
    Ul.X(e, t)
    var l = xn
    if (l && e) {
      var a = We(l).hoistableScripts,
        n = Rn(e),
        u = a.get(n)
      u ||
        ((u = l.querySelector(pu(n))),
        u ||
          ((e = E({ src: e, async: !0 }, t)),
          (t = Wt.get(n)) && sf(e, t),
          (u = l.createElement('script')),
          Ne(u),
          yt(u, 'link', e),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(n, u))
    }
  }
  function p3(e, t) {
    Ul.M(e, t)
    var l = xn
    if (l && e) {
      var a = We(l).hoistableScripts,
        n = Rn(e),
        u = a.get(n)
      u ||
        ((u = l.querySelector(pu(n))),
        u ||
          ((e = E({ src: e, async: !0, type: 'module' }, t)),
          (t = Wt.get(n)) && sf(e, t),
          (u = l.createElement('script')),
          Ne(u),
          yt(u, 'link', e),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(n, u))
    }
  }
  function id(e, t, l, a) {
    var n = (n = ce.current) ? Gi(n) : null
    if (!n) throw Error(o(446))
    switch (e) {
      case 'meta':
      case 'title':
        return null
      case 'style':
        return typeof l.precedence == 'string' && typeof l.href == 'string'
          ? ((t = Tn(l.href)),
            (l = We(n).hoistableStyles),
            (a = l.get(t)),
            a ||
              ((a = { type: 'style', instance: null, count: 0, state: null }),
              l.set(t, a)),
            a)
          : { type: 'void', instance: null, count: 0, state: null }
      case 'link':
        if (
          l.rel === 'stylesheet' &&
          typeof l.href == 'string' &&
          typeof l.precedence == 'string'
        ) {
          e = Tn(l.href)
          var u = We(n).hoistableStyles,
            c = u.get(e)
          if (
            (c ||
              ((n = n.ownerDocument || n),
              (c = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, c),
              (u = n.querySelector(gu(e))) &&
                !u._p &&
                ((c.instance = u), (c.state.loading = 5)),
              Wt.has(e) ||
                ((l = {
                  rel: 'preload',
                  as: 'style',
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Wt.set(e, l),
                u || b3(n, e, l, c.state))),
            t && a === null)
          )
            throw Error(o(528, ''))
          return c
        }
        if (t && a !== null) throw Error(o(529, ''))
        return null
      case 'script':
        return (
          (t = l.async),
          (l = l.src),
          typeof l == 'string' &&
          t &&
          typeof t != 'function' &&
          typeof t != 'symbol'
            ? ((t = Rn(l)),
              (l = We(n).hoistableScripts),
              (a = l.get(t)),
              a ||
                ((a = {
                  type: 'script',
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(t, a)),
              a)
            : { type: 'void', instance: null, count: 0, state: null }
        )
      default:
        throw Error(o(444, e))
    }
  }
  function Tn(e) {
    return 'href="' + Xt(e) + '"'
  }
  function gu(e) {
    return 'link[rel="stylesheet"][' + e + ']'
  }
  function rd(e) {
    return E({}, e, { 'data-precedence': e.precedence, precedence: null })
  }
  function b3(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (a.loading = 1)
      : ((t = e.createElement('link')),
        (a.preload = t),
        t.addEventListener('load', function () {
          return (a.loading |= 1)
        }),
        t.addEventListener('error', function () {
          return (a.loading |= 2)
        }),
        yt(t, 'link', l),
        Ne(t),
        e.head.appendChild(t))
  }
  function Rn(e) {
    return '[src="' + Xt(e) + '"]'
  }
  function pu(e) {
    return 'script[async]' + e
  }
  function cd(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var a = e.querySelector('style[data-href~="' + Xt(l.href) + '"]')
          if (a) return (t.instance = a), Ne(a), a
          var n = E({}, l, {
            'data-href': l.href,
            'data-precedence': l.precedence,
            href: null,
            precedence: null,
          })
          return (
            (a = (e.ownerDocument || e).createElement('style')),
            Ne(a),
            yt(a, 'style', n),
            Vi(a, l.precedence, e),
            (t.instance = a)
          )
        case 'stylesheet':
          n = Tn(l.href)
          var u = e.querySelector(gu(n))
          if (u) return (t.state.loading |= 4), (t.instance = u), Ne(u), u
          ;(a = rd(l)),
            (n = Wt.get(n)) && of(a, n),
            (u = (e.ownerDocument || e).createElement('link')),
            Ne(u)
          var c = u
          return (
            (c._p = new Promise(function (d, g) {
              ;(c.onload = d), (c.onerror = g)
            })),
            yt(u, 'link', a),
            (t.state.loading |= 4),
            Vi(u, l.precedence, e),
            (t.instance = u)
          )
        case 'script':
          return (
            (u = Rn(l.src)),
            (n = e.querySelector(pu(u)))
              ? ((t.instance = n), Ne(n), n)
              : ((a = l),
                (n = Wt.get(u)) && ((a = E({}, l)), sf(a, n)),
                (e = e.ownerDocument || e),
                (n = e.createElement('script')),
                Ne(n),
                yt(n, 'link', a),
                e.head.appendChild(n),
                (t.instance = n))
          )
        case 'void':
          return null
        default:
          throw Error(o(443, t.type))
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Vi(a, l.precedence, e))
    return t.instance
  }
  function Vi(e, t, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        c = 0;
      c < a.length;
      c++
    ) {
      var d = a[c]
      if (d.dataset.precedence === t) u = d
      else if (u !== n) break
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild))
  }
  function of(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title)
  }
  function sf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity)
  }
  var Xi = null
  function fd(e, t, l) {
    if (Xi === null) {
      var a = new Map(),
        n = (Xi = new Map())
      n.set(l, a)
    } else (n = Xi), (a = n.get(l)), a || ((a = new Map()), n.set(l, a))
    if (a.has(e)) return a
    for (
      a.set(e, null), l = l.getElementsByTagName(e), n = 0;
      n < l.length;
      n++
    ) {
      var u = l[n]
      if (
        !(
          u[he] ||
          u[X] ||
          (e === 'link' && u.getAttribute('rel') === 'stylesheet')
        ) &&
        u.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var c = u.getAttribute(t) || ''
        c = e + c
        var d = a.get(c)
        d ? d.push(u) : a.set(c, [u])
      }
    }
    return a
  }
  function od(e, t, l) {
    ;(e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === 'title' ? e.querySelector('head > title') : null
      )
  }
  function S3(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1
    switch (e) {
      case 'meta':
      case 'title':
        return !0
      case 'style':
        if (
          typeof t.precedence != 'string' ||
          typeof t.href != 'string' ||
          t.href === ''
        )
          break
        return !0
      case 'link':
        if (
          typeof t.rel != 'string' ||
          typeof t.href != 'string' ||
          t.href === '' ||
          t.onLoad ||
          t.onError
        )
          break
        switch (t.rel) {
          case 'stylesheet':
            return (
              (e = t.disabled), typeof t.precedence == 'string' && e == null
            )
          default:
            return !0
        }
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0
    }
    return !1
  }
  function sd(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0)
  }
  var bu = null
  function E3() {}
  function x3(e, t, l) {
    if (bu === null) throw Error(o(475))
    var a = bu
    if (
      t.type === 'stylesheet' &&
      (typeof l.media != 'string' || matchMedia(l.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var n = Tn(l.href),
          u = e.querySelector(gu(n))
        if (u) {
          ;(e = u._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (a.count++, (a = Zi.bind(a)), e.then(a, a)),
            (t.state.loading |= 4),
            (t.instance = u),
            Ne(u)
          return
        }
        ;(u = e.ownerDocument || e),
          (l = rd(l)),
          (n = Wt.get(n)) && of(l, n),
          (u = u.createElement('link')),
          Ne(u)
        var c = u
        ;(c._p = new Promise(function (d, g) {
          ;(c.onload = d), (c.onerror = g)
        })),
          yt(u, 'link', l),
          (t.instance = u)
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (a.count++,
          (t = Zi.bind(a)),
          e.addEventListener('load', t),
          e.addEventListener('error', t))
    }
  }
  function T3() {
    if (bu === null) throw Error(o(475))
    var e = bu
    return (
      e.stylesheets && e.count === 0 && df(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var l = setTimeout(function () {
              if ((e.stylesheets && df(e, e.stylesheets), e.unsuspend)) {
                var a = e.unsuspend
                ;(e.unsuspend = null), a()
              }
            }, 6e4)
            return (
              (e.unsuspend = t),
              function () {
                ;(e.unsuspend = null), clearTimeout(l)
              }
            )
          }
        : null
    )
  }
  function Zi() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) df(this, this.stylesheets)
      else if (this.unsuspend) {
        var e = this.unsuspend
        ;(this.unsuspend = null), e()
      }
    }
  }
  var Qi = null
  function df(e, t) {
    ;(e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (Qi = new Map()), t.forEach(R3, e), (Qi = null), Zi.call(e))
  }
  function R3(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Qi.get(e)
      if (l) var a = l.get(null)
      else {
        ;(l = new Map()), Qi.set(e, l)
        for (
          var n = e.querySelectorAll(
              'link[data-precedence],style[data-precedence]'
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var c = n[u]
          ;(c.nodeName === 'LINK' || c.getAttribute('media') !== 'not all') &&
            (l.set(c.dataset.precedence, c), (a = c))
        }
        a && l.set(null, a)
      }
      ;(n = t.instance),
        (c = n.getAttribute('data-precedence')),
        (u = l.get(c) || a),
        u === a && l.set(null, n),
        l.set(c, n),
        this.count++,
        (a = Zi.bind(this)),
        n.addEventListener('load', a),
        n.addEventListener('error', a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4)
    }
  }
  var Su = {
    $$typeof: W,
    Provider: null,
    Consumer: null,
    _currentValue: ee,
    _currentValue2: ee,
    _threadCount: 0,
  }
  function M3(e, t, l, a, n, u, c, d) {
    ;(this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Za(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Za(0)),
      (this.hiddenUpdates = Za(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = d),
      (this.incompleteTransitions = new Map())
  }
  function dd(e, t, l, a, n, u, c, d, g, C, L, V) {
    return (
      (e = new M3(e, t, l, c, d, g, C, V)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = Nt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = Kr()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: t }),
      Wr(u),
      e
    )
  }
  function hd(e) {
    return e ? ((e = en), e) : en
  }
  function md(e, t, l, a, n, u) {
    ;(n = hd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = Ql(t)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = Kl(e, a, t)),
      l !== null && (Bt(l, e, t), Wn(l, e, t))
  }
  function vd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane
      e.retryLane = l !== 0 && l < t ? l : t
    }
  }
  function hf(e, t) {
    vd(e, t), (e = e.alternate) && vd(e, t)
  }
  function yd(e) {
    if (e.tag === 13) {
      var t = Ia(e, 67108864)
      t !== null && Bt(t, e, 67108864), hf(e, 67108864)
    }
  }
  var Ki = !0
  function z3(e, t, l, a) {
    var n = O.T
    O.T = null
    var u = K.p
    try {
      ;(K.p = 2), mf(e, t, l, a)
    } finally {
      ;(K.p = u), (O.T = n)
    }
  }
  function C3(e, t, l, a) {
    var n = O.T
    O.T = null
    var u = K.p
    try {
      ;(K.p = 8), mf(e, t, l, a)
    } finally {
      ;(K.p = u), (O.T = n)
    }
  }
  function mf(e, t, l, a) {
    if (Ki) {
      var n = vf(a)
      if (n === null) ef(e, t, a, Ji, l), pd(e, a)
      else if (_3(n, e, t, l, a)) a.stopPropagation()
      else if ((pd(e, a), t & 4 && -1 < D3.indexOf(e))) {
        for (; n !== null; ) {
          var u = we(n)
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var c = bl(u.pendingLanes)
                  if (c !== 0) {
                    var d = u
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; c; ) {
                      var g = 1 << (31 - ht(c))
                      ;(d.entanglements[1] |= g), (c &= ~g)
                    }
                    ml(u), (He & 6) === 0 && ((Ai = Ot() + 500), hu(0))
                  }
                }
                break
              case 13:
                ;(d = Ia(u, 2)), d !== null && Bt(d, u, 2), wi(), hf(u, 2)
            }
          if (((u = vf(a)), u === null && ef(e, t, a, Ji, l), u === n)) break
          n = u
        }
        n !== null && a.stopPropagation()
      } else ef(e, t, a, null, l)
    }
  }
  function vf(e) {
    return (e = br(e)), yf(e)
  }
  var Ji = null
  function yf(e) {
    if (((Ji = null), (e = ve(e)), e !== null)) {
      var t = h(e)
      if (t === null) e = null
      else {
        var l = t.tag
        if (l === 13) {
          if (((e = y(t)), e !== null)) return e
          e = null
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null
          e = null
        } else t !== e && (e = null)
      }
    }
    return (Ji = e), null
  }
  function gd(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8
      case 'message':
        switch (hr()) {
          case Bu:
            return 2
          case qu:
            return 8
          case Va:
          case pl:
            return 32
          case Ll:
            return 268435456
          default:
            return 32
        }
      default:
        return 32
    }
  }
  var gf = !1,
    ua = null,
    ia = null,
    ra = null,
    Eu = new Map(),
    xu = new Map(),
    ca = [],
    D3 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      )
  function pd(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        ua = null
        break
      case 'dragenter':
      case 'dragleave':
        ia = null
        break
      case 'mouseover':
      case 'mouseout':
        ra = null
        break
      case 'pointerover':
      case 'pointerout':
        Eu.delete(t.pointerId)
        break
      case 'gotpointercapture':
      case 'lostpointercapture':
        xu.delete(t.pointerId)
    }
  }
  function Tu(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        t !== null && ((t = we(t)), t !== null && yd(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e)
  }
  function _3(e, t, l, a, n) {
    switch (t) {
      case 'focusin':
        return (ua = Tu(ua, e, t, l, a, n)), !0
      case 'dragenter':
        return (ia = Tu(ia, e, t, l, a, n)), !0
      case 'mouseover':
        return (ra = Tu(ra, e, t, l, a, n)), !0
      case 'pointerover':
        var u = n.pointerId
        return Eu.set(u, Tu(Eu.get(u) || null, e, t, l, a, n)), !0
      case 'gotpointercapture':
        return (
          (u = n.pointerId), xu.set(u, Tu(xu.get(u) || null, e, t, l, a, n)), !0
        )
    }
    return !1
  }
  function bd(e) {
    var t = ve(e.target)
    if (t !== null) {
      var l = h(t)
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = y(l)), t !== null)) {
            ;(e.blockedOn = t),
              R(e.priority, function () {
                if (l.tag === 13) {
                  var a = Lt()
                  a = _n(a)
                  var n = Ia(l, a)
                  n !== null && Bt(n, l, a), hf(l, a)
                }
              })
            return
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null
          return
        }
      }
    }
    e.blockedOn = null
  }
  function ki(e) {
    if (e.blockedOn !== null) return !1
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = vf(e.nativeEvent)
      if (l === null) {
        l = e.nativeEvent
        var a = new l.constructor(l.type, l)
        ;(pr = a), l.target.dispatchEvent(a), (pr = null)
      } else return (t = we(l)), t !== null && yd(t), (e.blockedOn = l), !1
      t.shift()
    }
    return !0
  }
  function Sd(e, t, l) {
    ki(e) && l.delete(t)
  }
  function A3() {
    ;(gf = !1),
      ua !== null && ki(ua) && (ua = null),
      ia !== null && ki(ia) && (ia = null),
      ra !== null && ki(ra) && (ra = null),
      Eu.forEach(Sd),
      xu.forEach(Sd)
  }
  function $i(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      gf ||
        ((gf = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, A3)))
  }
  var Wi = null
  function Ed(e) {
    Wi !== e &&
      ((Wi = e),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        Wi === e && (Wi = null)
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            n = e[t + 2]
          if (typeof a != 'function') {
            if (yf(a || l) === null) continue
            break
          }
          var u = we(l)
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            vc(u, { pending: !0, data: n, method: l.method, action: a }, a, n))
        }
      }))
  }
  function Ru(e) {
    function t(g) {
      return $i(g, e)
    }
    ua !== null && $i(ua, e),
      ia !== null && $i(ia, e),
      ra !== null && $i(ra, e),
      Eu.forEach(t),
      xu.forEach(t)
    for (var l = 0; l < ca.length; l++) {
      var a = ca[l]
      a.blockedOn === e && (a.blockedOn = null)
    }
    for (; 0 < ca.length && ((l = ca[0]), l.blockedOn === null); )
      bd(l), l.blockedOn === null && ca.shift()
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          c = n[Q] || null
        if (typeof u == 'function') c || Ed(l)
        else if (c) {
          var d = null
          if (u && u.hasAttribute('formAction')) {
            if (((n = u), (c = u[Q] || null))) d = c.formAction
            else if (yf(n) !== null) continue
          } else d = c.action
          typeof d == 'function' ? (l[a + 1] = d) : (l.splice(a, 3), (a -= 3)),
            Ed(l)
        }
      }
  }
  function pf(e) {
    this._internalRoot = e
  }
  ;(Fi.prototype.render = pf.prototype.render =
    function (e) {
      var t = this._internalRoot
      if (t === null) throw Error(o(409))
      var l = t.current,
        a = Lt()
      md(l, a, e, t, null, null)
    }),
    (Fi.prototype.unmount = pf.prototype.unmount =
      function () {
        var e = this._internalRoot
        if (e !== null) {
          this._internalRoot = null
          var t = e.containerInfo
          md(e.current, 2, null, e, null, null), wi(), (t[te] = null)
        }
      })
  function Fi(e) {
    this._internalRoot = e
  }
  Fi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = S()
      e = { blockedOn: null, target: e, priority: t }
      for (var l = 0; l < ca.length && t !== 0 && t < ca[l].priority; l++);
      ca.splice(l, 0, e), l === 0 && bd(e)
    }
  }
  var xd = r.version
  if (xd !== '19.1.0') throw Error(o(527, xd, '19.1.0'))
  K.findDOMNode = function (e) {
    var t = e._reactInternals
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(o(188))
        : ((e = Object.keys(e).join(',')), Error(o(268, e)))
    return (
      (e = v(t)),
      (e = e !== null ? m(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    )
  }
  var O3 = {
    bundleType: 0,
    version: '19.1.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: O,
    reconcilerVersion: '19.1.0',
  }
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Pi = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!Pi.isDisabled && Pi.supportsFiber)
      try {
        ;(Rt = Pi.inject(O3)), ($e = Pi)
      } catch {}
  }
  return (
    (zu.createRoot = function (e, t) {
      if (!s(e)) throw Error(o(299))
      var l = !1,
        a = '',
        n = Bs,
        u = qs,
        c = Ys,
        d = null
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (d = t.unstable_transitionCallbacks)),
        (t = dd(e, 1, !1, null, null, l, a, n, u, c, d, null)),
        (e[te] = t.current),
        Ic(e),
        new pf(t)
      )
    }),
    (zu.hydrateRoot = function (e, t, l) {
      if (!s(e)) throw Error(o(299))
      var a = !1,
        n = '',
        u = Bs,
        c = qs,
        d = Ys,
        g = null,
        C = null
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (c = l.onCaughtError),
          l.onRecoverableError !== void 0 && (d = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (g = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (C = l.formState)),
        (t = dd(e, 1, !0, t, l ?? null, a, n, u, c, d, g, C)),
        (t.context = hd(null)),
        (l = t.current),
        (a = Lt()),
        (a = _n(a)),
        (n = Ql(a)),
        (n.callback = null),
        Kl(l, n, a),
        (l = a),
        (t.current.lanes = l),
        ya(t, l),
        ml(t),
        (e[te] = t.current),
        Ic(e),
        new Fi(t)
      )
    }),
    (zu.version = '19.1.0'),
    zu
  )
}
var wd
function G3() {
  if (wd) return Ef.exports
  wd = 1
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
      } catch (r) {
        console.error(r)
      }
  }
  return i(), (Ef.exports = Y3()), Ef.exports
}
var V3 = G3(),
  Cu = {},
  Nd
function X3() {
  if (Nd) return Cu
  ;(Nd = 1),
    Object.defineProperty(Cu, '__esModule', { value: !0 }),
    (Cu.parse = y),
    (Cu.serialize = m)
  const i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    r = /^[\u0021-\u003A\u003C-\u007E]*$/,
    f =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    o = /^[\u0020-\u003A\u003D-\u007E]*$/,
    s = Object.prototype.toString,
    h = (() => {
      const M = function () {}
      return (M.prototype = Object.create(null)), M
    })()
  function y(M, B) {
    const H = new h(),
      J = M.length
    if (J < 2) return H
    const $ = (B == null ? void 0 : B.decode) || E
    let q = 0
    do {
      const re = M.indexOf('=', q)
      if (re === -1) break
      const W = M.indexOf(';', q),
        se = W === -1 ? J : W
      if (re > se) {
        q = M.lastIndexOf(';', re - 1) + 1
        continue
      }
      const F = p(M, q, re),
        N = v(M, re, F),
        pe = M.slice(F, N)
      if (H[pe] === void 0) {
        let Se = p(M, re + 1, se),
          ye = v(M, se, Se)
        const Ze = $(M.slice(Se, ye))
        H[pe] = Ze
      }
      q = se + 1
    } while (q < J)
    return H
  }
  function p(M, B, H) {
    do {
      const J = M.charCodeAt(B)
      if (J !== 32 && J !== 9) return B
    } while (++B < H)
    return H
  }
  function v(M, B, H) {
    for (; B > H; ) {
      const J = M.charCodeAt(--B)
      if (J !== 32 && J !== 9) return B + 1
    }
    return H
  }
  function m(M, B, H) {
    const J = (H == null ? void 0 : H.encode) || encodeURIComponent
    if (!i.test(M)) throw new TypeError(`argument name is invalid: ${M}`)
    const $ = J(B)
    if (!r.test($)) throw new TypeError(`argument val is invalid: ${B}`)
    let q = M + '=' + $
    if (!H) return q
    if (H.maxAge !== void 0) {
      if (!Number.isInteger(H.maxAge))
        throw new TypeError(`option maxAge is invalid: ${H.maxAge}`)
      q += '; Max-Age=' + H.maxAge
    }
    if (H.domain) {
      if (!f.test(H.domain))
        throw new TypeError(`option domain is invalid: ${H.domain}`)
      q += '; Domain=' + H.domain
    }
    if (H.path) {
      if (!o.test(H.path))
        throw new TypeError(`option path is invalid: ${H.path}`)
      q += '; Path=' + H.path
    }
    if (H.expires) {
      if (!U(H.expires) || !Number.isFinite(H.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${H.expires}`)
      q += '; Expires=' + H.expires.toUTCString()
    }
    if (
      (H.httpOnly && (q += '; HttpOnly'),
      H.secure && (q += '; Secure'),
      H.partitioned && (q += '; Partitioned'),
      H.priority)
    )
      switch (
        typeof H.priority == 'string' ? H.priority.toLowerCase() : void 0
      ) {
        case 'low':
          q += '; Priority=Low'
          break
        case 'medium':
          q += '; Priority=Medium'
          break
        case 'high':
          q += '; Priority=High'
          break
        default:
          throw new TypeError(`option priority is invalid: ${H.priority}`)
      }
    if (H.sameSite)
      switch (
        typeof H.sameSite == 'string' ? H.sameSite.toLowerCase() : H.sameSite
      ) {
        case !0:
        case 'strict':
          q += '; SameSite=Strict'
          break
        case 'lax':
          q += '; SameSite=Lax'
          break
        case 'none':
          q += '; SameSite=None'
          break
        default:
          throw new TypeError(`option sameSite is invalid: ${H.sameSite}`)
      }
    return q
  }
  function E(M) {
    if (M.indexOf('%') === -1) return M
    try {
      return decodeURIComponent(M)
    } catch {
      return M
    }
  }
  function U(M) {
    return s.call(M) === '[object Date]'
  }
  return Cu
}
X3()
/**
 * react-router v7.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var l2 = (i) => {
    throw TypeError(i)
  },
  Z3 = (i, r, f) => r.has(i) || l2('Cannot ' + f),
  Mf = (i, r, f) => (
    Z3(i, r, 'read from private field'), f ? f.call(i) : r.get(i)
  ),
  Q3 = (i, r, f) =>
    r.has(i)
      ? l2('Cannot add the same private member more than once')
      : r instanceof WeakSet
      ? r.add(i)
      : r.set(i, f),
  Ud = 'popstate'
function K3(i = {}) {
  function r(s, h) {
    let {
      pathname: y = '/',
      search: p = '',
      hash: v = '',
    } = Hl(s.location.hash.substring(1))
    return (
      !y.startsWith('/') && !y.startsWith('.') && (y = '/' + y),
      Nu(
        '',
        { pathname: y, search: p, hash: v },
        (h.state && h.state.usr) || null,
        (h.state && h.state.key) || 'default'
      )
    )
  }
  function f(s, h) {
    let y = s.document.querySelector('base'),
      p = ''
    if (y && y.getAttribute('href')) {
      let v = s.location.href,
        m = v.indexOf('#')
      p = m === -1 ? v : v.slice(0, m)
    }
    return p + '#' + (typeof h == 'string' ? h : da(h))
  }
  function o(s, h) {
    nt(
      s.pathname.charAt(0) === '/',
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        h
      )})`
    )
  }
  return k3(r, f, o, i)
}
function De(i, r) {
  if (i === !1 || i === null || typeof i > 'u') throw new Error(r)
}
function nt(i, r) {
  if (!i) {
    typeof console < 'u' && console.warn(r)
    try {
      throw new Error(r)
    } catch {}
  }
}
function J3() {
  return Math.random().toString(36).substring(2, 10)
}
function jd(i, r) {
  return { usr: i.state, key: i.key, idx: r }
}
function Nu(i, r, f = null, o) {
  return {
    pathname: typeof i == 'string' ? i : i.pathname,
    search: '',
    hash: '',
    ...(typeof r == 'string' ? Hl(r) : r),
    state: f,
    key: (r && r.key) || o || J3(),
  }
}
function da({ pathname: i = '/', search: r = '', hash: f = '' }) {
  return (
    r && r !== '?' && (i += r.charAt(0) === '?' ? r : '?' + r),
    f && f !== '#' && (i += f.charAt(0) === '#' ? f : '#' + f),
    i
  )
}
function Hl(i) {
  let r = {}
  if (i) {
    let f = i.indexOf('#')
    f >= 0 && ((r.hash = i.substring(f)), (i = i.substring(0, f)))
    let o = i.indexOf('?')
    o >= 0 && ((r.search = i.substring(o)), (i = i.substring(0, o))),
      i && (r.pathname = i)
  }
  return r
}
function k3(i, r, f, o = {}) {
  let { window: s = document.defaultView, v5Compat: h = !1 } = o,
    y = s.history,
    p = 'POP',
    v = null,
    m = E()
  m == null && ((m = 0), y.replaceState({ ...y.state, idx: m }, ''))
  function E() {
    return (y.state || { idx: null }).idx
  }
  function U() {
    p = 'POP'
    let $ = E(),
      q = $ == null ? null : $ - m
    ;(m = $), v && v({ action: p, location: J.location, delta: q })
  }
  function M($, q) {
    p = 'PUSH'
    let re = Nu(J.location, $, q)
    f && f(re, $), (m = E() + 1)
    let W = jd(re, m),
      se = J.createHref(re)
    try {
      y.pushState(W, '', se)
    } catch (F) {
      if (F instanceof DOMException && F.name === 'DataCloneError') throw F
      s.location.assign(se)
    }
    h && v && v({ action: p, location: J.location, delta: 1 })
  }
  function B($, q) {
    p = 'REPLACE'
    let re = Nu(J.location, $, q)
    f && f(re, $), (m = E())
    let W = jd(re, m),
      se = J.createHref(re)
    y.replaceState(W, '', se),
      h && v && v({ action: p, location: J.location, delta: 0 })
  }
  function H($) {
    return a2($)
  }
  let J = {
    get action() {
      return p
    },
    get location() {
      return i(s, y)
    },
    listen($) {
      if (v) throw new Error('A history only accepts one active listener')
      return (
        s.addEventListener(Ud, U),
        (v = $),
        () => {
          s.removeEventListener(Ud, U), (v = null)
        }
      )
    },
    createHref($) {
      return r(s, $)
    },
    createURL: H,
    encodeLocation($) {
      let q = H($)
      return { pathname: q.pathname, search: q.search, hash: q.hash }
    },
    push: M,
    replace: B,
    go($) {
      return y.go($)
    },
  }
  return J
}
function a2(i, r = !1) {
  let f = 'http://localhost'
  typeof window < 'u' &&
    (f =
      window.location.origin !== 'null'
        ? window.location.origin
        : window.location.href),
    De(f, 'No window.location.(origin|href) available to create URL')
  let o = typeof i == 'string' ? i : da(i)
  return (
    (o = o.replace(/ $/, '%20')),
    !r && o.startsWith('//') && (o = f + o),
    new URL(o, f)
  )
}
var Ou,
  Hd = class {
    constructor(i) {
      if ((Q3(this, Ou, new Map()), i)) for (let [r, f] of i) this.set(r, f)
    }
    get(i) {
      if (Mf(this, Ou).has(i)) return Mf(this, Ou).get(i)
      if (i.defaultValue !== void 0) return i.defaultValue
      throw new Error('No value found for context')
    }
    set(i, r) {
      Mf(this, Ou).set(i, r)
    }
  }
Ou = new WeakMap()
var $3 = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children'])
function W3(i) {
  return $3.has(i)
}
var F3 = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'unstable_middleware',
  'children',
])
function P3(i) {
  return F3.has(i)
}
function I3(i) {
  return i.index === !0
}
function ur(i, r, f = [], o = {}) {
  return i.map((s, h) => {
    let y = [...f, String(h)],
      p = typeof s.id == 'string' ? s.id : y.join('-')
    if (
      (De(
        s.index !== !0 || !s.children,
        'Cannot specify children on an index route'
      ),
      De(
        !o[p],
        `Found a route id collision on id "${p}".  Route id's must be globally unique within Data Router usages`
      ),
      I3(s))
    ) {
      let v = { ...s, ...r(s), id: p }
      return (o[p] = v), v
    } else {
      let v = { ...s, ...r(s), id: p, children: void 0 }
      return (o[p] = v), s.children && (v.children = ur(s.children, r, y, o)), v
    }
  })
}
function sa(i, r, f = '/') {
  return tr(i, r, f, !1)
}
function tr(i, r, f, o) {
  let s = typeof r == 'string' ? Hl(r) : r,
    h = Pt(s.pathname || '/', f)
  if (h == null) return null
  let y = n2(i)
  t1(y)
  let p = null
  for (let v = 0; p == null && v < y.length; ++v) {
    let m = d1(h)
    p = o1(y[v], m, o)
  }
  return p
}
function e1(i, r) {
  let { route: f, pathname: o, params: s } = i
  return { id: f.id, pathname: o, params: s, data: r[f.id], handle: f.handle }
}
function n2(i, r = [], f = [], o = '') {
  let s = (h, y, p) => {
    let v = {
      relativePath: p === void 0 ? h.path || '' : p,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: y,
      route: h,
    }
    v.relativePath.startsWith('/') &&
      (De(
        v.relativePath.startsWith(o),
        `Absolute route path "${v.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (v.relativePath = v.relativePath.slice(o.length)))
    let m = vl([o, v.relativePath]),
      E = f.concat(v)
    h.children &&
      h.children.length > 0 &&
      (De(
        h.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`
      ),
      n2(h.children, r, E, m)),
      !(h.path == null && !h.index) &&
        r.push({ path: m, score: c1(m, h.index), routesMeta: E })
  }
  return (
    i.forEach((h, y) => {
      var p
      if (h.path === '' || !((p = h.path) != null && p.includes('?'))) s(h, y)
      else for (let v of u2(h.path)) s(h, y, v)
    }),
    r
  )
}
function u2(i) {
  let r = i.split('/')
  if (r.length === 0) return []
  let [f, ...o] = r,
    s = f.endsWith('?'),
    h = f.replace(/\?$/, '')
  if (o.length === 0) return s ? [h, ''] : [h]
  let y = u2(o.join('/')),
    p = []
  return (
    p.push(...y.map((v) => (v === '' ? h : [h, v].join('/')))),
    s && p.push(...y),
    p.map((v) => (i.startsWith('/') && v === '' ? '/' : v))
  )
}
function t1(i) {
  i.sort((r, f) =>
    r.score !== f.score
      ? f.score - r.score
      : f1(
          r.routesMeta.map((o) => o.childrenIndex),
          f.routesMeta.map((o) => o.childrenIndex)
        )
  )
}
var l1 = /^:[\w-]+$/,
  a1 = 3,
  n1 = 2,
  u1 = 1,
  i1 = 10,
  r1 = -2,
  Ld = (i) => i === '*'
function c1(i, r) {
  let f = i.split('/'),
    o = f.length
  return (
    f.some(Ld) && (o += r1),
    r && (o += n1),
    f
      .filter((s) => !Ld(s))
      .reduce((s, h) => s + (l1.test(h) ? a1 : h === '' ? u1 : i1), o)
  )
}
function f1(i, r) {
  return i.length === r.length && i.slice(0, -1).every((o, s) => o === r[s])
    ? i[i.length - 1] - r[r.length - 1]
    : 0
}
function o1(i, r, f = !1) {
  let { routesMeta: o } = i,
    s = {},
    h = '/',
    y = []
  for (let p = 0; p < o.length; ++p) {
    let v = o[p],
      m = p === o.length - 1,
      E = h === '/' ? r : r.slice(h.length) || '/',
      U = ir(
        { path: v.relativePath, caseSensitive: v.caseSensitive, end: m },
        E
      ),
      M = v.route
    if (
      (!U &&
        m &&
        f &&
        !o[o.length - 1].route.index &&
        (U = ir(
          { path: v.relativePath, caseSensitive: v.caseSensitive, end: !1 },
          E
        )),
      !U)
    )
      return null
    Object.assign(s, U.params),
      y.push({
        params: s,
        pathname: vl([h, U.pathname]),
        pathnameBase: v1(vl([h, U.pathnameBase])),
        route: M,
      }),
      U.pathnameBase !== '/' && (h = vl([h, U.pathnameBase]))
  }
  return y
}
function ir(i, r) {
  typeof i == 'string' && (i = { path: i, caseSensitive: !1, end: !0 })
  let [f, o] = s1(i.path, i.caseSensitive, i.end),
    s = r.match(f)
  if (!s) return null
  let h = s[0],
    y = h.replace(/(.)\/+$/, '$1'),
    p = s.slice(1)
  return {
    params: o.reduce((m, { paramName: E, isOptional: U }, M) => {
      if (E === '*') {
        let H = p[M] || ''
        y = h.slice(0, h.length - H.length).replace(/(.)\/+$/, '$1')
      }
      const B = p[M]
      return (
        U && !B ? (m[E] = void 0) : (m[E] = (B || '').replace(/%2F/g, '/')), m
      )
    }, {}),
    pathname: h,
    pathnameBase: y,
    pattern: i,
  }
}
function s1(i, r = !1, f = !0) {
  nt(
    i === '*' || !i.endsWith('*') || i.endsWith('/*'),
    `Route path "${i}" will be treated as if it were "${i.replace(
      /\*$/,
      '/*'
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(
      /\*$/,
      '/*'
    )}".`
  )
  let o = [],
    s =
      '^' +
      i
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (y, p, v) => (
            o.push({ paramName: p, isOptional: v != null }),
            v ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        )
  return (
    i.endsWith('*')
      ? (o.push({ paramName: '*' }),
        (s += i === '*' || i === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : f
      ? (s += '\\/*$')
      : i !== '' && i !== '/' && (s += '(?:(?=\\/|$))'),
    [new RegExp(s, r ? void 0 : 'i'), o]
  )
}
function d1(i) {
  try {
    return i
      .split('/')
      .map((r) => decodeURIComponent(r).replace(/\//g, '%2F'))
      .join('/')
  } catch (r) {
    return (
      nt(
        !1,
        `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
      ),
      i
    )
  }
}
function Pt(i, r) {
  if (r === '/') return i
  if (!i.toLowerCase().startsWith(r.toLowerCase())) return null
  let f = r.endsWith('/') ? r.length - 1 : r.length,
    o = i.charAt(f)
  return o && o !== '/' ? null : i.slice(f) || '/'
}
function h1(i, r = '/') {
  let {
    pathname: f,
    search: o = '',
    hash: s = '',
  } = typeof i == 'string' ? Hl(i) : i
  return {
    pathname: f ? (f.startsWith('/') ? f : m1(f, r)) : r,
    search: y1(o),
    hash: g1(s),
  }
}
function m1(i, r) {
  let f = r.replace(/\/+$/, '').split('/')
  return (
    i.split('/').forEach((s) => {
      s === '..' ? f.length > 1 && f.pop() : s !== '.' && f.push(s)
    }),
    f.length > 1 ? f.join('/') : '/'
  )
}
function zf(i, r, f, o) {
  return `Cannot include a '${i}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function i2(i) {
  return i.filter(
    (r, f) => f === 0 || (r.route.path && r.route.path.length > 0)
  )
}
function jf(i) {
  let r = i2(i)
  return r.map((f, o) => (o === r.length - 1 ? f.pathname : f.pathnameBase))
}
function Hf(i, r, f, o = !1) {
  let s
  typeof i == 'string'
    ? (s = Hl(i))
    : ((s = { ...i }),
      De(
        !s.pathname || !s.pathname.includes('?'),
        zf('?', 'pathname', 'search', s)
      ),
      De(
        !s.pathname || !s.pathname.includes('#'),
        zf('#', 'pathname', 'hash', s)
      ),
      De(!s.search || !s.search.includes('#'), zf('#', 'search', 'hash', s)))
  let h = i === '' || s.pathname === '',
    y = h ? '/' : s.pathname,
    p
  if (y == null) p = f
  else {
    let U = r.length - 1
    if (!o && y.startsWith('..')) {
      let M = y.split('/')
      for (; M[0] === '..'; ) M.shift(), (U -= 1)
      s.pathname = M.join('/')
    }
    p = U >= 0 ? r[U] : '/'
  }
  let v = h1(s, p),
    m = y && y !== '/' && y.endsWith('/'),
    E = (h || y === '.') && f.endsWith('/')
  return !v.pathname.endsWith('/') && (m || E) && (v.pathname += '/'), v
}
var vl = (i) => i.join('/').replace(/\/\/+/g, '/'),
  v1 = (i) => i.replace(/\/+$/, '').replace(/^\/*/, '/'),
  y1 = (i) => (!i || i === '?' ? '' : i.startsWith('?') ? i : '?' + i),
  g1 = (i) => (!i || i === '#' ? '' : i.startsWith('#') ? i : '#' + i),
  rr = class {
    constructor(i, r, f, o = !1) {
      ;(this.status = i),
        (this.statusText = r || ''),
        (this.internal = o),
        f instanceof Error
          ? ((this.data = f.toString()), (this.error = f))
          : (this.data = f)
    }
  }
function Uu(i) {
  return (
    i != null &&
    typeof i.status == 'number' &&
    typeof i.statusText == 'string' &&
    typeof i.internal == 'boolean' &&
    'data' in i
  )
}
var r2 = ['POST', 'PUT', 'PATCH', 'DELETE'],
  p1 = new Set(r2),
  b1 = ['GET', ...r2],
  S1 = new Set(b1),
  E1 = new Set([301, 302, 303, 307, 308]),
  x1 = new Set([307, 308]),
  Cf = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  T1 = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Du = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  Lf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  R1 = (i) => ({ hasErrorBoundary: !!i.hasErrorBoundary }),
  c2 = 'remix-router-transitions',
  f2 = Symbol('ResetLoaderData')
function M1(i) {
  const r = i.window ? i.window : typeof window < 'u' ? window : void 0,
    f =
      typeof r < 'u' &&
      typeof r.document < 'u' &&
      typeof r.document.createElement < 'u'
  De(
    i.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  )
  let o = i.hydrationRouteProperties || [],
    s = i.mapRouteProperties || R1,
    h = {},
    y = ur(i.routes, s, void 0, h),
    p,
    v = i.basename || '/',
    m = i.dataStrategy || A1,
    E = { unstable_middleware: !1, ...i.future },
    U = null,
    M = new Set(),
    B = null,
    H = null,
    J = null,
    $ = i.hydrationData != null,
    q = sa(y, i.history.location, v),
    re = !1,
    W = null,
    se
  if (q == null && !i.patchRoutesOnNavigation) {
    let S = Ft(404, { pathname: i.history.location.pathname }),
      { matches: R, route: w } = $d(y)
    ;(se = !0), (q = R), (W = { [w.id]: S })
  } else if (
    (q &&
      !i.hydrationData &&
      ga(q, y, i.history.location.pathname).active &&
      (q = null),
    q)
  )
    if (q.some((S) => S.route.lazy)) se = !1
    else if (!q.some((S) => S.route.loader)) se = !0
    else {
      let S = i.hydrationData ? i.hydrationData.loaderData : null,
        R = i.hydrationData ? i.hydrationData.errors : null
      if (R) {
        let w = q.findIndex((X) => R[X.route.id] !== void 0)
        se = q.slice(0, w + 1).every((X) => !Of(X.route, S, R))
      } else se = q.every((w) => !Of(w.route, S, R))
    }
  else {
    ;(se = !1), (q = [])
    let S = ga(null, y, i.history.location.pathname)
    S.active && S.matches && ((re = !0), (q = S.matches))
  }
  let F,
    N = {
      historyAction: i.history.action,
      location: i.history.location,
      matches: q,
      initialized: se,
      navigation: Cf,
      restoreScrollPosition: i.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (i.hydrationData && i.hydrationData.loaderData) || {},
      actionData: (i.hydrationData && i.hydrationData.actionData) || null,
      errors: (i.hydrationData && i.hydrationData.errors) || W,
      fetchers: new Map(),
      blockers: new Map(),
    },
    pe = 'POP',
    Se = !1,
    ye,
    Ze = !1,
    tt = new Map(),
    Ke = null,
    St = !1,
    _e = !1,
    Re = new Set(),
    O = new Map(),
    K = 0,
    ee = -1,
    ge = new Map(),
    b = new Set(),
    G = new Map(),
    k = new Map(),
    Z = new Set(),
    le = new Map(),
    Me,
    ce = null
  function Et() {
    if (
      ((U = i.history.listen(({ action: S, location: R, delta: w }) => {
        if (Me) {
          Me(), (Me = void 0)
          return
        }
        nt(
          le.size === 0 || w != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        )
        let X = Vu({
          currentLocation: N.location,
          nextLocation: R,
          historyAction: S,
        })
        if (X && w != null) {
          let Q = new Promise((te) => {
            Me = te
          })
          i.history.go(w * -1),
            fl(X, {
              state: 'blocked',
              location: R,
              proceed() {
                fl(X, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: R,
                }),
                  Q.then(() => i.history.go(w))
              },
              reset() {
                let te = new Map(N.blockers)
                te.set(X, Du), rt({ blockers: te })
              },
            })
          return
        }
        return el(S, R)
      })),
      f)
    ) {
      G1(r, tt)
      let S = () => V1(r, tt)
      r.addEventListener('pagehide', S),
        (Ke = () => r.removeEventListener('pagehide', S))
    }
    return N.initialized || el('POP', N.location, { initialHydration: !0 }), F
  }
  function Ve() {
    U && U(),
      Ke && Ke(),
      M.clear(),
      ye && ye.abort(),
      N.fetchers.forEach((S, R) => ht(R)),
      N.blockers.forEach((S, R) => va(R))
  }
  function rl(S) {
    return M.add(S), () => M.delete(S)
  }
  function rt(S, R = {}) {
    N = { ...N, ...S }
    let w = [],
      X = []
    N.fetchers.forEach((Q, te) => {
      Q.state === 'idle' && (Z.has(te) ? w.push(te) : X.push(te))
    }),
      Z.forEach((Q) => {
        !N.fetchers.has(Q) && !O.has(Q) && w.push(Q)
      }),
      [...M].forEach((Q) =>
        Q(N, {
          deletedFetchers: w,
          viewTransitionOpts: R.viewTransitionOpts,
          flushSync: R.flushSync === !0,
        })
      ),
      w.forEach((Q) => ht(Q)),
      X.forEach((Q) => N.fetchers.delete(Q))
  }
  function It(S, R, { flushSync: w } = {}) {
    var ie, he
    let X =
        N.actionData != null &&
        N.navigation.formMethod != null &&
        Yt(N.navigation.formMethod) &&
        N.navigation.state === 'loading' &&
        ((ie = S.state) == null ? void 0 : ie._isRedirect) !== !0,
      Q
    R.actionData
      ? Object.keys(R.actionData).length > 0
        ? (Q = R.actionData)
        : (Q = null)
      : X
      ? (Q = N.actionData)
      : (Q = null)
    let te = R.loaderData
        ? Jd(N.loaderData, R.loaderData, R.matches || [], R.errors)
        : N.loaderData,
      fe = N.blockers
    fe.size > 0 && ((fe = new Map(fe)), fe.forEach((ae, ve) => fe.set(ve, Du)))
    let P =
      Se === !0 ||
      (N.navigation.formMethod != null &&
        Yt(N.navigation.formMethod) &&
        ((he = S.state) == null ? void 0 : he._isRedirect) !== !0)
    p && ((y = p), (p = void 0)),
      St ||
        pe === 'POP' ||
        (pe === 'PUSH'
          ? i.history.push(S, S.state)
          : pe === 'REPLACE' && i.history.replace(S, S.state))
    let ue
    if (pe === 'POP') {
      let ae = tt.get(N.location.pathname)
      ae && ae.has(S.pathname)
        ? (ue = { currentLocation: N.location, nextLocation: S })
        : tt.has(S.pathname) &&
          (ue = { currentLocation: S, nextLocation: N.location })
    } else if (Ze) {
      let ae = tt.get(N.location.pathname)
      ae
        ? ae.add(S.pathname)
        : ((ae = new Set([S.pathname])), tt.set(N.location.pathname, ae)),
        (ue = { currentLocation: N.location, nextLocation: S })
    }
    rt(
      {
        ...R,
        actionData: Q,
        loaderData: te,
        historyAction: pe,
        location: S,
        initialized: !0,
        navigation: Cf,
        revalidation: 'idle',
        restoreScrollPosition: Zu(S, R.matches || N.matches),
        preventScrollReset: P,
        blockers: fe,
      },
      { viewTransitionOpts: ue, flushSync: w === !0 }
    ),
      (pe = 'POP'),
      (Se = !1),
      (Ze = !1),
      (St = !1),
      (_e = !1),
      ce == null || ce.resolve(),
      (ce = null)
  }
  async function Ga(S, R) {
    if (typeof S == 'number') {
      i.history.go(S)
      return
    }
    let w = Af(
        N.location,
        N.matches,
        v,
        S,
        R == null ? void 0 : R.fromRouteId,
        R == null ? void 0 : R.relative
      ),
      { path: X, submission: Q, error: te } = Bd(!1, w, R),
      fe = N.location,
      P = Nu(N.location, X, R && R.state)
    P = { ...P, ...i.history.encodeLocation(P) }
    let ue = R && R.replace != null ? R.replace : void 0,
      ie = 'PUSH'
    ue === !0
      ? (ie = 'REPLACE')
      : ue === !1 ||
        (Q != null &&
          Yt(Q.formMethod) &&
          Q.formAction === N.location.pathname + N.location.search &&
          (ie = 'REPLACE'))
    let he =
        R && 'preventScrollReset' in R ? R.preventScrollReset === !0 : void 0,
      ae = (R && R.flushSync) === !0,
      ve = Vu({ currentLocation: fe, nextLocation: P, historyAction: ie })
    if (ve) {
      fl(ve, {
        state: 'blocked',
        location: P,
        proceed() {
          fl(ve, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: P,
          }),
            Ga(S, R)
        },
        reset() {
          let we = new Map(N.blockers)
          we.set(ve, Du), rt({ blockers: we })
        },
      })
      return
    }
    await el(ie, P, {
      submission: Q,
      pendingError: te,
      preventScrollReset: he,
      replace: R && R.replace,
      enableViewTransition: R && R.viewTransition,
      flushSync: ae,
    })
  }
  function Cn() {
    ce || (ce = X1()), Dn(), rt({ revalidation: 'loading' })
    let S = ce.promise
    return N.navigation.state === 'submitting'
      ? S
      : N.navigation.state === 'idle'
      ? (el(N.historyAction, N.location, {
          startUninterruptedRevalidation: !0,
        }),
        S)
      : (el(pe || N.historyAction, N.navigation.location, {
          overrideNavigation: N.navigation,
          enableViewTransition: Ze === !0,
        }),
        S)
  }
  async function el(S, R, w) {
    ye && ye.abort(),
      (ye = null),
      (pe = S),
      (St = (w && w.startUninterruptedRevalidation) === !0),
      ya(N.location, N.matches),
      (Se = (w && w.preventScrollReset) === !0),
      (Ze = (w && w.enableViewTransition) === !0)
    let X = p || y,
      Q = w && w.overrideNavigation,
      te =
        w != null &&
        w.initialHydration &&
        N.matches &&
        N.matches.length > 0 &&
        !re
          ? N.matches
          : sa(X, R, v),
      fe = (w && w.flushSync) === !0
    if (
      te &&
      N.initialized &&
      !_e &&
      H1(N.location, R) &&
      !(w && w.submission && Yt(w.submission.formMethod))
    ) {
      It(R, { matches: te }, { flushSync: fe })
      return
    }
    let P = ga(te, X, R.pathname)
    if ((P.active && P.matches && (te = P.matches), !te)) {
      let { error: We, notFoundMatches: Ne, route: Ae } = Xa(R.pathname)
      It(
        R,
        { matches: Ne, loaderData: {}, errors: { [Ae.id]: We } },
        { flushSync: fe }
      )
      return
    }
    ye = new AbortController()
    let ue = Mn(i.history, R, ye.signal, w && w.submission),
      ie = new Hd(
        i.unstable_getContext ? await i.unstable_getContext() : void 0
      ),
      he
    if (w && w.pendingError)
      he = [La(te).route.id, { type: 'error', error: w.pendingError }]
    else if (w && w.submission && Yt(w.submission.formMethod)) {
      let We = await sr(
        ue,
        R,
        w.submission,
        te,
        ie,
        P.active,
        w && w.initialHydration === !0,
        { replace: w.replace, flushSync: fe }
      )
      if (We.shortCircuited) return
      if (We.pendingActionResult) {
        let [Ne, Ae] = We.pendingActionResult
        if (qt(Ae) && Uu(Ae.error) && Ae.error.status === 404) {
          ;(ye = null),
            It(R, {
              matches: We.matches,
              loaderData: {},
              errors: { [Ne]: Ae.error },
            })
          return
        }
      }
      ;(te = We.matches || te),
        (he = We.pendingActionResult),
        (Q = Df(R, w.submission)),
        (fe = !1),
        (P.active = !1),
        (ue = Mn(i.history, ue.url, ue.signal))
    }
    let {
      shortCircuited: ae,
      matches: ve,
      loaderData: we,
      errors: Qe,
    } = await dr(
      ue,
      R,
      te,
      ie,
      P.active,
      Q,
      w && w.submission,
      w && w.fetcherSubmission,
      w && w.replace,
      w && w.initialHydration === !0,
      fe,
      he
    )
    ae ||
      ((ye = null),
      It(R, { matches: ve || te, ...kd(he), loaderData: we, errors: Qe }))
  }
  async function sr(S, R, w, X, Q, te, fe, P = {}) {
    Dn()
    let ue = q1(R, w)
    if ((rt({ navigation: ue }, { flushSync: P.flushSync === !0 }), te)) {
      let ae = await pa(X, R.pathname, S.signal)
      if (ae.type === 'aborted') return { shortCircuited: !0 }
      if (ae.type === 'error') {
        let ve = La(ae.partialMatches).route.id
        return {
          matches: ae.partialMatches,
          pendingActionResult: [ve, { type: 'error', error: ae.error }],
        }
      } else if (ae.matches) X = ae.matches
      else {
        let { notFoundMatches: ve, error: we, route: Qe } = Xa(R.pathname)
        return {
          matches: ve,
          pendingActionResult: [Qe.id, { type: 'error', error: we }],
        }
      }
    }
    let ie,
      he = wu(X, R)
    if (!he.route.action && !he.route.lazy)
      ie = {
        type: 'error',
        error: Ft(405, {
          method: S.method,
          pathname: R.pathname,
          routeId: he.route.id,
        }),
      }
    else {
      let ae = zn(s, h, S, X, he, fe ? [] : o, Q),
        ve = await Ll(S, ae, Q, null)
      if (((ie = ve[he.route.id]), !ie)) {
        for (let we of X)
          if (ve[we.route.id]) {
            ie = ve[we.route.id]
            break
          }
      }
      if (S.signal.aborted) return { shortCircuited: !0 }
    }
    if (Ba(ie)) {
      let ae
      return (
        P && P.replace != null
          ? (ae = P.replace)
          : (ae =
              Zd(ie.response.headers.get('Location'), new URL(S.url), v) ===
              N.location.pathname + N.location.search),
        await pl(S, ie, !0, { submission: w, replace: ae }),
        { shortCircuited: !0 }
      )
    }
    if (qt(ie)) {
      let ae = La(X, he.route.id)
      return (
        (P && P.replace) !== !0 && (pe = 'PUSH'),
        { matches: X, pendingActionResult: [ae.route.id, ie, he.route.id] }
      )
    }
    return { matches: X, pendingActionResult: [he.route.id, ie] }
  }
  async function dr(S, R, w, X, Q, te, fe, P, ue, ie, he, ae) {
    let ve = te || Df(R, fe),
      we = fe || P || Fd(ve),
      Qe = !St && !ie
    if (Q) {
      if (Qe) {
        let gt = Ot(ae)
        rt(
          { navigation: ve, ...(gt !== void 0 ? { actionData: gt } : {}) },
          { flushSync: he }
        )
      }
      let xe = await pa(w, R.pathname, S.signal)
      if (xe.type === 'aborted') return { shortCircuited: !0 }
      if (xe.type === 'error') {
        let gt = La(xe.partialMatches).route.id
        return {
          matches: xe.partialMatches,
          loaderData: {},
          errors: { [gt]: xe.error },
        }
      } else if (xe.matches) w = xe.matches
      else {
        let { error: gt, notFoundMatches: ll, route: al } = Xa(R.pathname)
        return { matches: ll, loaderData: {}, errors: { [al.id]: gt } }
      }
    }
    let We = p || y,
      { dsMatches: Ne, revalidatingFetchers: Ae } = qd(
        S,
        X,
        s,
        h,
        i.history,
        N,
        w,
        we,
        R,
        ie ? [] : o,
        ie === !0,
        _e,
        Re,
        Z,
        G,
        b,
        We,
        v,
        i.patchRoutesOnNavigation != null,
        ae
      )
    if (
      ((ee = ++K),
      !i.dataStrategy && !Ne.some((xe) => xe.shouldLoad) && Ae.length === 0)
    ) {
      let xe = ha()
      return (
        It(
          R,
          {
            matches: w,
            loaderData: {},
            errors: ae && qt(ae[1]) ? { [ae[0]]: ae[1].error } : null,
            ...kd(ae),
            ...(xe ? { fetchers: new Map(N.fetchers) } : {}),
          },
          { flushSync: he }
        ),
        { shortCircuited: !0 }
      )
    }
    if (Qe) {
      let xe = {}
      if (!Q) {
        xe.navigation = ve
        let gt = Ot(ae)
        gt !== void 0 && (xe.actionData = gt)
      }
      Ae.length > 0 && (xe.fetchers = hr(Ae)), rt(xe, { flushSync: he })
    }
    Ae.forEach((xe) => {
      cl(xe.key), xe.controller && O.set(xe.key, xe.controller)
    })
    let Bl = () => Ae.forEach((xe) => cl(xe.key))
    ye && ye.signal.addEventListener('abort', Bl)
    let { loaderResults: xt, fetcherResults: Gt } = await Yu(Ne, Ae, S, X)
    if (S.signal.aborted) return { shortCircuited: !0 }
    ye && ye.signal.removeEventListener('abort', Bl),
      Ae.forEach((xe) => O.delete(xe.key))
    let Mt = Ii(xt)
    if (Mt)
      return await pl(S, Mt.result, !0, { replace: ue }), { shortCircuited: !0 }
    if (((Mt = Ii(Gt)), Mt))
      return (
        b.add(Mt.key),
        await pl(S, Mt.result, !0, { replace: ue }),
        { shortCircuited: !0 }
      )
    let { loaderData: ql, errors: Yl } = Kd(N, w, xt, ae, Ae, Gt)
    ie && N.errors && (Yl = { ...N.errors, ...Yl })
    let On = ha(),
      Vt = ma(ee),
      Sl = On || Vt || Ae.length > 0
    return {
      matches: w,
      loaderData: ql,
      errors: Yl,
      ...(Sl ? { fetchers: new Map(N.fetchers) } : {}),
    }
  }
  function Ot(S) {
    if (S && !qt(S[1])) return { [S[0]]: S[1].data }
    if (N.actionData)
      return Object.keys(N.actionData).length === 0 ? null : N.actionData
  }
  function hr(S) {
    return (
      S.forEach((R) => {
        let w = N.fetchers.get(R.key),
          X = _u(void 0, w ? w.data : void 0)
        N.fetchers.set(R.key, X)
      }),
      new Map(N.fetchers)
    )
  }
  async function Bu(S, R, w, X) {
    cl(S)
    let Q = (X && X.flushSync) === !0,
      te = p || y,
      fe = Af(N.location, N.matches, v, w, R, X == null ? void 0 : X.relative),
      P = sa(te, fe, v),
      ue = ga(P, te, fe)
    if ((ue.active && ue.matches && (P = ue.matches), !P)) {
      $e(S, R, Ft(404, { pathname: fe }), { flushSync: Q })
      return
    }
    let { path: ie, submission: he, error: ae } = Bd(!0, fe, X)
    if (ae) {
      $e(S, R, ae, { flushSync: Q })
      return
    }
    let ve = wu(P, ie),
      we = new Hd(
        i.unstable_getContext ? await i.unstable_getContext() : void 0
      ),
      Qe = (X && X.preventScrollReset) === !0
    if (he && Yt(he.formMethod)) {
      await qu(S, R, ie, ve, P, we, ue.active, Q, Qe, he)
      return
    }
    G.set(S, { routeId: R, path: ie }),
      await Va(S, R, ie, ve, P, we, ue.active, Q, Qe, he)
  }
  async function qu(S, R, w, X, Q, te, fe, P, ue, ie) {
    Dn(), G.delete(S)
    function he(Je) {
      if (!Je.route.action && !Je.route.lazy) {
        let Gl = Ft(405, { method: ie.formMethod, pathname: w, routeId: R })
        return $e(S, R, Gl, { flushSync: P }), !0
      }
      return !1
    }
    if (!fe && he(X)) return
    let ae = N.fetchers.get(S)
    Rt(S, Y1(ie, ae), { flushSync: P })
    let ve = new AbortController(),
      we = Mn(i.history, w, ve.signal, ie)
    if (fe) {
      let Je = await pa(Q, w, we.signal, S)
      if (Je.type === 'aborted') return
      if (Je.type === 'error') {
        $e(S, R, Je.error, { flushSync: P })
        return
      } else if (Je.matches) {
        if (((Q = Je.matches), (X = wu(Q, w)), he(X))) return
      } else {
        $e(S, R, Ft(404, { pathname: w }), { flushSync: P })
        return
      }
    }
    O.set(S, ve)
    let Qe = K,
      We = zn(s, h, we, Q, X, o, te),
      Ae = (await Ll(we, We, te, S))[X.route.id]
    if (we.signal.aborted) {
      O.get(S) === ve && O.delete(S)
      return
    }
    if (Z.has(S)) {
      if (Ba(Ae) || qt(Ae)) {
        Rt(S, oa(void 0))
        return
      }
    } else {
      if (Ba(Ae))
        if ((O.delete(S), ee > Qe)) {
          Rt(S, oa(void 0))
          return
        } else
          return (
            b.add(S),
            Rt(S, _u(ie)),
            pl(we, Ae, !1, { fetcherSubmission: ie, preventScrollReset: ue })
          )
      if (qt(Ae)) {
        $e(S, R, Ae.error)
        return
      }
    }
    let Bl = N.navigation.location || N.location,
      xt = Mn(i.history, Bl, ve.signal),
      Gt = p || y,
      Mt =
        N.navigation.state !== 'idle'
          ? sa(Gt, N.navigation.location, v)
          : N.matches
    De(Mt, "Didn't find any matches after fetcher action")
    let ql = ++K
    ge.set(S, ql)
    let Yl = _u(ie, Ae.data)
    N.fetchers.set(S, Yl)
    let { dsMatches: On, revalidatingFetchers: Vt } = qd(
      xt,
      te,
      s,
      h,
      i.history,
      N,
      Mt,
      ie,
      Bl,
      o,
      !1,
      _e,
      Re,
      Z,
      G,
      b,
      Gt,
      v,
      i.patchRoutesOnNavigation != null,
      [X.route.id, Ae]
    )
    Vt.filter((Je) => Je.key !== S).forEach((Je) => {
      let Gl = Je.key,
        wn = N.fetchers.get(Gl),
        zt = _u(void 0, wn ? wn.data : void 0)
      N.fetchers.set(Gl, zt), cl(Gl), Je.controller && O.set(Gl, Je.controller)
    }),
      rt({ fetchers: new Map(N.fetchers) })
    let Sl = () => Vt.forEach((Je) => cl(Je.key))
    ve.signal.addEventListener('abort', Sl)
    let { loaderResults: xe, fetcherResults: gt } = await Yu(On, Vt, xt, te)
    if (ve.signal.aborted) return
    if (
      (ve.signal.removeEventListener('abort', Sl),
      ge.delete(S),
      O.delete(S),
      Vt.forEach((Je) => O.delete(Je.key)),
      N.fetchers.has(S))
    ) {
      let Je = oa(Ae.data)
      N.fetchers.set(S, Je)
    }
    let ll = Ii(xe)
    if (ll) return pl(xt, ll.result, !1, { preventScrollReset: ue })
    if (((ll = Ii(gt)), ll))
      return b.add(ll.key), pl(xt, ll.result, !1, { preventScrollReset: ue })
    let { loaderData: al, errors: ba } = Kd(N, Mt, xe, void 0, Vt, gt)
    ma(ql),
      N.navigation.state === 'loading' && ql > ee
        ? (De(pe, 'Expected pending action'),
          ye && ye.abort(),
          It(N.navigation.location, {
            matches: Mt,
            loaderData: al,
            errors: ba,
            fetchers: new Map(N.fetchers),
          }))
        : (rt({
            errors: ba,
            loaderData: Jd(N.loaderData, al, Mt, ba),
            fetchers: new Map(N.fetchers),
          }),
          (_e = !1))
  }
  async function Va(S, R, w, X, Q, te, fe, P, ue, ie) {
    let he = N.fetchers.get(S)
    Rt(S, _u(ie, he ? he.data : void 0), { flushSync: P })
    let ae = new AbortController(),
      ve = Mn(i.history, w, ae.signal)
    if (fe) {
      let Ae = await pa(Q, w, ve.signal, S)
      if (Ae.type === 'aborted') return
      if (Ae.type === 'error') {
        $e(S, R, Ae.error, { flushSync: P })
        return
      } else if (Ae.matches) (Q = Ae.matches), (X = wu(Q, w))
      else {
        $e(S, R, Ft(404, { pathname: w }), { flushSync: P })
        return
      }
    }
    O.set(S, ae)
    let we = K,
      Qe = zn(s, h, ve, Q, X, o, te),
      Ne = (await Ll(ve, Qe, te, S))[X.route.id]
    if ((O.get(S) === ae && O.delete(S), !ve.signal.aborted)) {
      if (Z.has(S)) {
        Rt(S, oa(void 0))
        return
      }
      if (Ba(Ne))
        if (ee > we) {
          Rt(S, oa(void 0))
          return
        } else {
          b.add(S), await pl(ve, Ne, !1, { preventScrollReset: ue })
          return
        }
      if (qt(Ne)) {
        $e(S, R, Ne.error)
        return
      }
      Rt(S, oa(Ne.data))
    }
  }
  async function pl(
    S,
    R,
    w,
    {
      submission: X,
      fetcherSubmission: Q,
      preventScrollReset: te,
      replace: fe,
    } = {}
  ) {
    R.response.headers.has('X-Remix-Revalidate') && (_e = !0)
    let P = R.response.headers.get('Location')
    De(P, 'Expected a Location header on the redirect Response'),
      (P = Zd(P, new URL(S.url), v))
    let ue = Nu(N.location, P, { _isRedirect: !0 })
    if (f) {
      let Qe = !1
      if (R.response.headers.has('X-Remix-Reload-Document')) Qe = !0
      else if (Lf.test(P)) {
        const We = a2(P, !0)
        Qe = We.origin !== r.location.origin || Pt(We.pathname, v) == null
      }
      if (Qe) {
        fe ? r.location.replace(P) : r.location.assign(P)
        return
      }
    }
    ye = null
    let ie =
        fe === !0 || R.response.headers.has('X-Remix-Replace')
          ? 'REPLACE'
          : 'PUSH',
      { formMethod: he, formAction: ae, formEncType: ve } = N.navigation
    !X && !Q && he && ae && ve && (X = Fd(N.navigation))
    let we = X || Q
    if (x1.has(R.response.status) && we && Yt(we.formMethod))
      await el(ie, ue, {
        submission: { ...we, formAction: P },
        preventScrollReset: te || Se,
        enableViewTransition: w ? Ze : void 0,
      })
    else {
      let Qe = Df(ue, X)
      await el(ie, ue, {
        overrideNavigation: Qe,
        fetcherSubmission: Q,
        preventScrollReset: te || Se,
        enableViewTransition: w ? Ze : void 0,
      })
    }
  }
  async function Ll(S, R, w, X) {
    let Q,
      te = {}
    try {
      Q = await O1(m, S, R, X, w, !1)
    } catch (fe) {
      return (
        R.filter((P) => P.shouldLoad).forEach((P) => {
          te[P.route.id] = { type: 'error', error: fe }
        }),
        te
      )
    }
    if (S.signal.aborted) return te
    for (let [fe, P] of Object.entries(Q))
      if (L1(P)) {
        let ue = P.result
        te[fe] = { type: 'redirect', response: U1(ue, S, fe, R, v) }
      } else te[fe] = await N1(P)
    return te
  }
  async function Yu(S, R, w, X) {
    let Q = Ll(w, S, X, null),
      te = Promise.all(
        R.map(async (ue) => {
          if (ue.matches && ue.match && ue.request && ue.controller) {
            let he = (await Ll(ue.request, ue.matches, X, ue.key))[
              ue.match.route.id
            ]
            return { [ue.key]: he }
          } else
            return Promise.resolve({
              [ue.key]: {
                type: 'error',
                error: Ft(404, { pathname: ue.path }),
              },
            })
        })
      ),
      fe = await Q,
      P = (await te).reduce((ue, ie) => Object.assign(ue, ie), {})
    return { loaderResults: fe, fetcherResults: P }
  }
  function Dn() {
    ;(_e = !0),
      G.forEach((S, R) => {
        O.has(R) && Re.add(R), cl(R)
      })
  }
  function Rt(S, R, w = {}) {
    N.fetchers.set(S, R),
      rt(
        { fetchers: new Map(N.fetchers) },
        { flushSync: (w && w.flushSync) === !0 }
      )
  }
  function $e(S, R, w, X = {}) {
    let Q = La(N.matches, R)
    ht(S),
      rt(
        { errors: { [Q.route.id]: w }, fetchers: new Map(N.fetchers) },
        { flushSync: (X && X.flushSync) === !0 }
      )
  }
  function tl(S) {
    return (
      k.set(S, (k.get(S) || 0) + 1),
      Z.has(S) && Z.delete(S),
      N.fetchers.get(S) || T1
    )
  }
  function ht(S) {
    let R = N.fetchers.get(S)
    O.has(S) && !(R && R.state === 'loading' && ge.has(S)) && cl(S),
      G.delete(S),
      ge.delete(S),
      b.delete(S),
      Z.delete(S),
      Re.delete(S),
      N.fetchers.delete(S)
  }
  function mr(S) {
    let R = (k.get(S) || 0) - 1
    R <= 0 ? (k.delete(S), Z.add(S)) : k.set(S, R),
      rt({ fetchers: new Map(N.fetchers) })
  }
  function cl(S) {
    let R = O.get(S)
    R && (R.abort(), O.delete(S))
  }
  function Gu(S) {
    for (let R of S) {
      let w = tl(R),
        X = oa(w.data)
      N.fetchers.set(R, X)
    }
  }
  function ha() {
    let S = [],
      R = !1
    for (let w of b) {
      let X = N.fetchers.get(w)
      De(X, `Expected fetcher: ${w}`),
        X.state === 'loading' && (b.delete(w), S.push(w), (R = !0))
    }
    return Gu(S), R
  }
  function ma(S) {
    let R = []
    for (let [w, X] of ge)
      if (X < S) {
        let Q = N.fetchers.get(w)
        De(Q, `Expected fetcher: ${w}`),
          Q.state === 'loading' && (cl(w), ge.delete(w), R.push(w))
      }
    return Gu(R), R.length > 0
  }
  function bl(S, R) {
    let w = N.blockers.get(S) || Du
    return le.get(S) !== R && le.set(S, R), w
  }
  function va(S) {
    N.blockers.delete(S), le.delete(S)
  }
  function fl(S, R) {
    let w = N.blockers.get(S) || Du
    De(
      (w.state === 'unblocked' && R.state === 'blocked') ||
        (w.state === 'blocked' && R.state === 'blocked') ||
        (w.state === 'blocked' && R.state === 'proceeding') ||
        (w.state === 'blocked' && R.state === 'unblocked') ||
        (w.state === 'proceeding' && R.state === 'unblocked'),
      `Invalid blocker state transition: ${w.state} -> ${R.state}`
    )
    let X = new Map(N.blockers)
    X.set(S, R), rt({ blockers: X })
  }
  function Vu({ currentLocation: S, nextLocation: R, historyAction: w }) {
    if (le.size === 0) return
    le.size > 1 && nt(!1, 'A router only supports one blocker at a time')
    let X = Array.from(le.entries()),
      [Q, te] = X[X.length - 1],
      fe = N.blockers.get(Q)
    if (
      !(fe && fe.state === 'proceeding') &&
      te({ currentLocation: S, nextLocation: R, historyAction: w })
    )
      return Q
  }
  function Xa(S) {
    let R = Ft(404, { pathname: S }),
      w = p || y,
      { matches: X, route: Q } = $d(w)
    return { notFoundMatches: X, route: Q, error: R }
  }
  function Xu(S, R, w) {
    if (((B = S), (J = R), (H = w || null), !$ && N.navigation === Cf)) {
      $ = !0
      let X = Zu(N.location, N.matches)
      X != null && rt({ restoreScrollPosition: X })
    }
    return () => {
      ;(B = null), (J = null), (H = null)
    }
  }
  function Za(S, R) {
    return (
      (H &&
        H(
          S,
          R.map((X) => e1(X, N.loaderData))
        )) ||
      S.key
    )
  }
  function ya(S, R) {
    if (B && J) {
      let w = Za(S, R)
      B[w] = J()
    }
  }
  function Zu(S, R) {
    if (B) {
      let w = Za(S, R),
        X = B[w]
      if (typeof X == 'number') return X
    }
    return null
  }
  function ga(S, R, w) {
    if (i.patchRoutesOnNavigation)
      if (S) {
        if (Object.keys(S[0].params).length > 0)
          return { active: !0, matches: tr(R, w, v, !0) }
      } else return { active: !0, matches: tr(R, w, v, !0) || [] }
    return { active: !1, matches: null }
  }
  async function pa(S, R, w, X) {
    if (!i.patchRoutesOnNavigation) return { type: 'success', matches: S }
    let Q = S
    for (;;) {
      let te = p == null,
        fe = p || y,
        P = h
      try {
        await i.patchRoutesOnNavigation({
          signal: w,
          path: R,
          matches: Q,
          fetcherKey: X,
          patch: (he, ae) => {
            w.aborted || Yd(he, ae, fe, P, s)
          },
        })
      } catch (he) {
        return { type: 'error', error: he, partialMatches: Q }
      } finally {
        te && !w.aborted && (y = [...y])
      }
      if (w.aborted) return { type: 'aborted' }
      let ue = sa(fe, R, v)
      if (ue) return { type: 'success', matches: ue }
      let ie = tr(fe, R, v, !0)
      if (
        !ie ||
        (Q.length === ie.length &&
          Q.every((he, ae) => he.route.id === ie[ae].route.id))
      )
        return { type: 'success', matches: null }
      Q = ie
    }
  }
  function _n(S) {
    ;(h = {}), (p = ur(S, s, void 0, h))
  }
  function An(S, R) {
    let w = p == null
    Yd(S, R, p || y, h, s), w && ((y = [...y]), rt({}))
  }
  return (
    (F = {
      get basename() {
        return v
      },
      get future() {
        return E
      },
      get state() {
        return N
      },
      get routes() {
        return y
      },
      get window() {
        return r
      },
      initialize: Et,
      subscribe: rl,
      enableScrollRestoration: Xu,
      navigate: Ga,
      fetch: Bu,
      revalidate: Cn,
      createHref: (S) => i.history.createHref(S),
      encodeLocation: (S) => i.history.encodeLocation(S),
      getFetcher: tl,
      deleteFetcher: mr,
      dispose: Ve,
      getBlocker: bl,
      deleteBlocker: va,
      patchRoutes: An,
      _internalFetchControllers: O,
      _internalSetRoutes: _n,
    }),
    F
  )
}
function z1(i) {
  return (
    i != null &&
    (('formData' in i && i.formData != null) ||
      ('body' in i && i.body !== void 0))
  )
}
function Af(i, r, f, o, s, h) {
  let y, p
  if (s) {
    y = []
    for (let m of r)
      if ((y.push(m), m.route.id === s)) {
        p = m
        break
      }
  } else (y = r), (p = r[r.length - 1])
  let v = Hf(o || '.', jf(y), Pt(i.pathname, f) || i.pathname, h === 'path')
  if (
    (o == null && ((v.search = i.search), (v.hash = i.hash)),
    (o == null || o === '' || o === '.') && p)
  ) {
    let m = Bf(v.search)
    if (p.route.index && !m)
      v.search = v.search ? v.search.replace(/^\?/, '?index&') : '?index'
    else if (!p.route.index && m) {
      let E = new URLSearchParams(v.search),
        U = E.getAll('index')
      E.delete('index'), U.filter((B) => B).forEach((B) => E.append('index', B))
      let M = E.toString()
      v.search = M ? `?${M}` : ''
    }
  }
  return (
    f !== '/' && (v.pathname = v.pathname === '/' ? f : vl([f, v.pathname])),
    da(v)
  )
}
function Bd(i, r, f) {
  if (!f || !z1(f)) return { path: r }
  if (f.formMethod && !B1(f.formMethod))
    return { path: r, error: Ft(405, { method: f.formMethod }) }
  let o = () => ({ path: r, error: Ft(400, { type: 'invalid-body' }) }),
    h = (f.formMethod || 'get').toUpperCase(),
    y = v2(r)
  if (f.body !== void 0) {
    if (f.formEncType === 'text/plain') {
      if (!Yt(h)) return o()
      let U =
        typeof f.body == 'string'
          ? f.body
          : f.body instanceof FormData || f.body instanceof URLSearchParams
          ? Array.from(f.body.entries()).reduce(
              (M, [B, H]) => `${M}${B}=${H}
`,
              ''
            )
          : String(f.body)
      return {
        path: r,
        submission: {
          formMethod: h,
          formAction: y,
          formEncType: f.formEncType,
          formData: void 0,
          json: void 0,
          text: U,
        },
      }
    } else if (f.formEncType === 'application/json') {
      if (!Yt(h)) return o()
      try {
        let U = typeof f.body == 'string' ? JSON.parse(f.body) : f.body
        return {
          path: r,
          submission: {
            formMethod: h,
            formAction: y,
            formEncType: f.formEncType,
            formData: void 0,
            json: U,
            text: void 0,
          },
        }
      } catch {
        return o()
      }
    }
  }
  De(
    typeof FormData == 'function',
    'FormData is not available in this environment'
  )
  let p, v
  if (f.formData) (p = Nf(f.formData)), (v = f.formData)
  else if (f.body instanceof FormData) (p = Nf(f.body)), (v = f.body)
  else if (f.body instanceof URLSearchParams) (p = f.body), (v = Qd(p))
  else if (f.body == null) (p = new URLSearchParams()), (v = new FormData())
  else
    try {
      ;(p = new URLSearchParams(f.body)), (v = Qd(p))
    } catch {
      return o()
    }
  let m = {
    formMethod: h,
    formAction: y,
    formEncType: (f && f.formEncType) || 'application/x-www-form-urlencoded',
    formData: v,
    json: void 0,
    text: void 0,
  }
  if (Yt(m.formMethod)) return { path: r, submission: m }
  let E = Hl(r)
  return (
    i && E.search && Bf(E.search) && p.append('index', ''),
    (E.search = `?${p}`),
    { path: da(E), submission: m }
  )
}
function qd(i, r, f, o, s, h, y, p, v, m, E, U, M, B, H, J, $, q, re, W) {
  var St
  let se = W ? (qt(W[1]) ? W[1].error : W[1].data) : void 0,
    F = s.createURL(h.location),
    N = s.createURL(v),
    pe
  if (E && h.errors) {
    let _e = Object.keys(h.errors)[0]
    pe = y.findIndex((Re) => Re.route.id === _e)
  } else if (W && qt(W[1])) {
    let _e = W[0]
    pe = y.findIndex((Re) => Re.route.id === _e) - 1
  }
  let Se = W ? W[1].statusCode : void 0,
    ye = Se && Se >= 400,
    Ze = {
      currentUrl: F,
      currentParams: ((St = h.matches[0]) == null ? void 0 : St.params) || {},
      nextUrl: N,
      nextParams: y[0].params,
      ...p,
      actionResult: se,
      actionStatus: Se,
    },
    tt = y.map((_e, Re) => {
      let { route: O } = _e,
        K = null
      if (
        (pe != null && Re > pe
          ? (K = !1)
          : O.lazy
          ? (K = !0)
          : O.loader == null
          ? (K = !1)
          : E
          ? (K = Of(O, h.loaderData, h.errors))
          : C1(h.loaderData, h.matches[Re], _e) && (K = !0),
        K !== null)
      )
        return wf(f, o, i, _e, m, r, K)
      let ee = ye
          ? !1
          : U ||
            F.pathname + F.search === N.pathname + N.search ||
            F.search !== N.search ||
            D1(h.matches[Re], _e),
        ge = { ...Ze, defaultShouldRevalidate: ee },
        b = cr(_e, ge)
      return wf(f, o, i, _e, m, r, b, ge)
    }),
    Ke = []
  return (
    H.forEach((_e, Re) => {
      if (E || !y.some((Z) => Z.route.id === _e.routeId) || B.has(Re)) return
      let O = h.fetchers.get(Re),
        K = O && O.state !== 'idle' && O.data === void 0,
        ee = sa($, _e.path, q)
      if (!ee) {
        if (re && K) return
        Ke.push({
          key: Re,
          routeId: _e.routeId,
          path: _e.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        })
        return
      }
      if (J.has(Re)) return
      let ge = wu(ee, _e.path),
        b = new AbortController(),
        G = Mn(s, _e.path, b.signal),
        k = null
      if (M.has(Re)) M.delete(Re), (k = zn(f, o, G, ee, ge, m, r))
      else if (K) U && (k = zn(f, o, G, ee, ge, m, r))
      else {
        let Z = { ...Ze, defaultShouldRevalidate: ye ? !1 : U }
        cr(ge, Z) && (k = zn(f, o, G, ee, ge, m, r, Z))
      }
      k &&
        Ke.push({
          key: Re,
          routeId: _e.routeId,
          path: _e.path,
          matches: k,
          match: ge,
          request: G,
          controller: b,
        })
    }),
    { dsMatches: tt, revalidatingFetchers: Ke }
  )
}
function Of(i, r, f) {
  if (i.lazy) return !0
  if (!i.loader) return !1
  let o = r != null && i.id in r,
    s = f != null && f[i.id] !== void 0
  return !o && s
    ? !1
    : typeof i.loader == 'function' && i.loader.hydrate === !0
    ? !0
    : !o && !s
}
function C1(i, r, f) {
  let o = !r || f.route.id !== r.route.id,
    s = !i.hasOwnProperty(f.route.id)
  return o || s
}
function D1(i, r) {
  let f = i.route.path
  return (
    i.pathname !== r.pathname ||
    (f != null && f.endsWith('*') && i.params['*'] !== r.params['*'])
  )
}
function cr(i, r) {
  if (i.route.shouldRevalidate) {
    let f = i.route.shouldRevalidate(r)
    if (typeof f == 'boolean') return f
  }
  return r.defaultShouldRevalidate
}
function Yd(i, r, f, o, s) {
  let h
  if (i) {
    let v = o[i]
    De(v, `No route found to patch children into: routeId = ${i}`),
      v.children || (v.children = []),
      (h = v.children)
  } else h = f
  let y = r.filter((v) => !h.some((m) => o2(v, m))),
    p = ur(
      y,
      s,
      [i || '_', 'patch', String((h == null ? void 0 : h.length) || '0')],
      o
    )
  h.push(...p)
}
function o2(i, r) {
  return 'id' in i && 'id' in r && i.id === r.id
    ? !0
    : i.index === r.index &&
      i.path === r.path &&
      i.caseSensitive === r.caseSensitive
    ? (!i.children || i.children.length === 0) &&
      (!r.children || r.children.length === 0)
      ? !0
      : i.children.every((f, o) => {
          var s
          return (s = r.children) == null ? void 0 : s.some((h) => o2(f, h))
        })
    : !1
}
var Gd = new WeakMap(),
  s2 = ({ key: i, route: r, manifest: f, mapRouteProperties: o }) => {
    let s = f[r.id]
    if (
      (De(s, 'No route found in manifest'),
      !s.lazy || typeof s.lazy != 'object')
    )
      return
    let h = s.lazy[i]
    if (!h) return
    let y = Gd.get(s)
    y || ((y = {}), Gd.set(s, y))
    let p = y[i]
    if (p) return p
    let v = (async () => {
      let m = W3(i),
        U = s[i] !== void 0 && i !== 'hasErrorBoundary'
      if (m)
        nt(
          !m,
          'Route property ' +
            i +
            ' is not a supported lazy route property. This property will be ignored.'
        ),
          (y[i] = Promise.resolve())
      else if (U)
        nt(
          !1,
          `Route "${s.id}" has a static property "${i}" defined. The lazy property will be ignored.`
        )
      else {
        let M = await h()
        M != null && (Object.assign(s, { [i]: M }), Object.assign(s, o(s)))
      }
      typeof s.lazy == 'object' &&
        ((s.lazy[i] = void 0),
        Object.values(s.lazy).every((M) => M === void 0) && (s.lazy = void 0))
    })()
    return (y[i] = v), v
  },
  Vd = new WeakMap()
function _1(i, r, f, o, s) {
  let h = f[i.id]
  if ((De(h, 'No route found in manifest'), !i.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 }
  if (typeof i.lazy == 'function') {
    let E = Vd.get(h)
    if (E) return { lazyRoutePromise: E, lazyHandlerPromise: E }
    let U = (async () => {
      De(typeof i.lazy == 'function', 'No lazy route function found')
      let M = await i.lazy(),
        B = {}
      for (let H in M) {
        let J = M[H]
        if (J === void 0) continue
        let $ = P3(H),
          re = h[H] !== void 0 && H !== 'hasErrorBoundary'
        $
          ? nt(
              !$,
              'Route property ' +
                H +
                ' is not a supported property to be returned from a lazy route function. This property will be ignored.'
            )
          : re
          ? nt(
              !re,
              `Route "${h.id}" has a static property "${H}" defined but its lazy function is also returning a value for this property. The lazy route property "${H}" will be ignored.`
            )
          : (B[H] = J)
      }
      Object.assign(h, B), Object.assign(h, { ...o(h), lazy: void 0 })
    })()
    return (
      Vd.set(h, U),
      U.catch(() => {}),
      { lazyRoutePromise: U, lazyHandlerPromise: U }
    )
  }
  let y = Object.keys(i.lazy),
    p = [],
    v
  for (let E of y) {
    if (s && s.includes(E)) continue
    let U = s2({ key: E, route: i, manifest: f, mapRouteProperties: o })
    U && (p.push(U), E === r && (v = U))
  }
  let m = p.length > 0 ? Promise.all(p).then(() => {}) : void 0
  return (
    m == null || m.catch(() => {}),
    v == null || v.catch(() => {}),
    { lazyRoutePromise: m, lazyHandlerPromise: v }
  )
}
async function Xd(i) {
  let r = i.matches.filter((s) => s.shouldLoad),
    f = {}
  return (
    (await Promise.all(r.map((s) => s.resolve()))).forEach((s, h) => {
      f[r[h].route.id] = s
    }),
    f
  )
}
async function A1(i) {
  return i.matches.some((r) => r.route.unstable_middleware)
    ? d2(
        i,
        !1,
        () => Xd(i),
        (r, f) => ({ [f]: { type: 'error', result: r } })
      )
    : Xd(i)
}
async function d2(i, r, f, o) {
  let { matches: s, request: h, params: y, context: p } = i,
    v = { handlerResult: void 0 }
  try {
    let m = s.flatMap((U) =>
        U.route.unstable_middleware
          ? U.route.unstable_middleware.map((M) => [U.route.id, M])
          : []
      ),
      E = await h2({ request: h, params: y, context: p }, m, r, v, f)
    return r ? E : v.handlerResult
  } catch (m) {
    if (!v.middlewareError) throw m
    let E = await o(v.middlewareError.error, v.middlewareError.routeId)
    return v.handlerResult ? Object.assign(v.handlerResult, E) : E
  }
}
async function h2(i, r, f, o, s, h = 0) {
  let { request: y } = i
  if (y.signal.aborted)
    throw y.signal.reason
      ? y.signal.reason
      : new Error(
          `Request aborted without an \`AbortSignal.reason\`: ${y.method} ${y.url}`
        )
  let p = r[h]
  if (!p) return (o.handlerResult = await s()), o.handlerResult
  let [v, m] = p,
    E = !1,
    U,
    M = async () => {
      if (E) throw new Error('You may only call `next()` once per middleware')
      ;(E = !0), await h2(i, r, f, o, s, h + 1)
    }
  try {
    let B = await m(
      { request: i.request, params: i.params, context: i.context },
      M
    )
    return E ? (B === void 0 ? U : B) : M()
  } catch (B) {
    throw (
      (o.middlewareError
        ? o.middlewareError.error !== B &&
          (o.middlewareError = { routeId: v, error: B })
        : (o.middlewareError = { routeId: v, error: B }),
      B)
    )
  }
}
function m2(i, r, f, o, s) {
  let h = s2({
      key: 'unstable_middleware',
      route: o.route,
      manifest: r,
      mapRouteProperties: i,
    }),
    y = _1(o.route, Yt(f.method) ? 'action' : 'loader', r, i, s)
  return {
    middleware: h,
    route: y.lazyRoutePromise,
    handler: y.lazyHandlerPromise,
  }
}
function wf(i, r, f, o, s, h, y, p = null) {
  let v = !1,
    m = m2(i, r, f, o, s)
  return {
    ...o,
    _lazyPromises: m,
    shouldLoad: y,
    unstable_shouldRevalidateArgs: p,
    unstable_shouldCallHandler(E) {
      return (
        (v = !0),
        p
          ? typeof E == 'boolean'
            ? cr(o, { ...p, defaultShouldRevalidate: E })
            : cr(o, p)
          : y
      )
    },
    resolve(E) {
      return v ||
        y ||
        (E && f.method === 'GET' && (o.route.lazy || o.route.loader))
        ? w1({
            request: f,
            match: o,
            lazyHandlerPromise: m == null ? void 0 : m.handler,
            lazyRoutePromise: m == null ? void 0 : m.route,
            handlerOverride: E,
            scopedContext: h,
          })
        : Promise.resolve({ type: 'data', result: void 0 })
    },
  }
}
function zn(i, r, f, o, s, h, y, p = null) {
  return o.map((v) =>
    v.route.id !== s.route.id
      ? {
          ...v,
          shouldLoad: !1,
          unstable_shouldRevalidateArgs: p,
          unstable_shouldCallHandler: () => !1,
          _lazyPromises: m2(i, r, f, v, h),
          resolve: () => Promise.resolve({ type: 'data', result: void 0 }),
        }
      : wf(i, r, f, v, h, y, !0, p)
  )
}
async function O1(i, r, f, o, s, h) {
  f.some((m) => {
    var E
    return (E = m._lazyPromises) == null ? void 0 : E.middleware
  }) &&
    (await Promise.all(
      f.map((m) => {
        var E
        return (E = m._lazyPromises) == null ? void 0 : E.middleware
      })
    ))
  let y = { request: r, params: f[0].params, context: s, matches: f },
    v = await i({
      ...y,
      fetcherKey: o,
      unstable_runClientMiddleware: (m) => {
        let E = y
        return d2(
          E,
          !1,
          () =>
            m({
              ...E,
              fetcherKey: o,
              unstable_runClientMiddleware: () => {
                throw new Error(
                  'Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler'
                )
              },
            }),
          (U, M) => ({ [M]: { type: 'error', result: U } })
        )
      },
    })
  try {
    await Promise.all(
      f.flatMap((m) => {
        var E, U
        return [
          (E = m._lazyPromises) == null ? void 0 : E.handler,
          (U = m._lazyPromises) == null ? void 0 : U.route,
        ]
      })
    )
  } catch {}
  return v
}
async function w1({
  request: i,
  match: r,
  lazyHandlerPromise: f,
  lazyRoutePromise: o,
  handlerOverride: s,
  scopedContext: h,
}) {
  let y,
    p,
    v = Yt(i.method),
    m = v ? 'action' : 'loader',
    E = (U) => {
      let M,
        B = new Promise(($, q) => (M = q))
      ;(p = () => M()), i.signal.addEventListener('abort', p)
      let H = ($) =>
          typeof U != 'function'
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${m}" [routeId: ${r.route.id}]`
                )
              )
            : U(
                { request: i, params: r.params, context: h },
                ...($ !== void 0 ? [$] : [])
              ),
        J = (async () => {
          try {
            return { type: 'data', result: await (s ? s((q) => H(q)) : H()) }
          } catch ($) {
            return { type: 'error', result: $ }
          }
        })()
      return Promise.race([J, B])
    }
  try {
    let U = v ? r.route.action : r.route.loader
    if (f || o)
      if (U) {
        let M,
          [B] = await Promise.all([
            E(U).catch((H) => {
              M = H
            }),
            f,
            o,
          ])
        if (M !== void 0) throw M
        y = B
      } else {
        await f
        let M = v ? r.route.action : r.route.loader
        if (M) [y] = await Promise.all([E(M), o])
        else if (m === 'action') {
          let B = new URL(i.url),
            H = B.pathname + B.search
          throw Ft(405, { method: i.method, pathname: H, routeId: r.route.id })
        } else return { type: 'data', result: void 0 }
      }
    else if (U) y = await E(U)
    else {
      let M = new URL(i.url),
        B = M.pathname + M.search
      throw Ft(404, { pathname: B })
    }
  } catch (U) {
    return { type: 'error', result: U }
  } finally {
    p && i.signal.removeEventListener('abort', p)
  }
  return y
}
async function N1(i) {
  var o, s, h, y, p, v
  let { result: r, type: f } = i
  if (y2(r)) {
    let m
    try {
      let E = r.headers.get('Content-Type')
      E && /\bapplication\/json\b/.test(E)
        ? r.body == null
          ? (m = null)
          : (m = await r.json())
        : (m = await r.text())
    } catch (E) {
      return { type: 'error', error: E }
    }
    return f === 'error'
      ? {
          type: 'error',
          error: new rr(r.status, r.statusText, m),
          statusCode: r.status,
          headers: r.headers,
        }
      : { type: 'data', data: m, statusCode: r.status, headers: r.headers }
  }
  return f === 'error'
    ? Wd(r)
      ? r.data instanceof Error
        ? {
            type: 'error',
            error: r.data,
            statusCode: (o = r.init) == null ? void 0 : o.status,
            headers:
              (s = r.init) != null && s.headers
                ? new Headers(r.init.headers)
                : void 0,
          }
        : {
            type: 'error',
            error: new rr(
              ((h = r.init) == null ? void 0 : h.status) || 500,
              void 0,
              r.data
            ),
            statusCode: Uu(r) ? r.status : void 0,
            headers:
              (y = r.init) != null && y.headers
                ? new Headers(r.init.headers)
                : void 0,
          }
      : { type: 'error', error: r, statusCode: Uu(r) ? r.status : void 0 }
    : Wd(r)
    ? {
        type: 'data',
        data: r.data,
        statusCode: (p = r.init) == null ? void 0 : p.status,
        headers:
          (v = r.init) != null && v.headers
            ? new Headers(r.init.headers)
            : void 0,
      }
    : { type: 'data', data: r }
}
function U1(i, r, f, o, s) {
  let h = i.headers.get('Location')
  if (
    (De(
      h,
      'Redirects returned/thrown from loaders/actions must have a Location header'
    ),
    !Lf.test(h))
  ) {
    let y = o.slice(0, o.findIndex((p) => p.route.id === f) + 1)
    ;(h = Af(new URL(r.url), y, s, h)), i.headers.set('Location', h)
  }
  return i
}
function Zd(i, r, f) {
  if (Lf.test(i)) {
    let o = i,
      s = o.startsWith('//') ? new URL(r.protocol + o) : new URL(o),
      h = Pt(s.pathname, f) != null
    if (s.origin === r.origin && h) return s.pathname + s.search + s.hash
  }
  return i
}
function Mn(i, r, f, o) {
  let s = i.createURL(v2(r)).toString(),
    h = { signal: f }
  if (o && Yt(o.formMethod)) {
    let { formMethod: y, formEncType: p } = o
    ;(h.method = y.toUpperCase()),
      p === 'application/json'
        ? ((h.headers = new Headers({ 'Content-Type': p })),
          (h.body = JSON.stringify(o.json)))
        : p === 'text/plain'
        ? (h.body = o.text)
        : p === 'application/x-www-form-urlencoded' && o.formData
        ? (h.body = Nf(o.formData))
        : (h.body = o.formData)
  }
  return new Request(s, h)
}
function Nf(i) {
  let r = new URLSearchParams()
  for (let [f, o] of i.entries()) r.append(f, typeof o == 'string' ? o : o.name)
  return r
}
function Qd(i) {
  let r = new FormData()
  for (let [f, o] of i.entries()) r.append(f, o)
  return r
}
function j1(i, r, f, o = !1, s = !1) {
  let h = {},
    y = null,
    p,
    v = !1,
    m = {},
    E = f && qt(f[1]) ? f[1].error : void 0
  return (
    i.forEach((U) => {
      if (!(U.route.id in r)) return
      let M = U.route.id,
        B = r[M]
      if (
        (De(!Ba(B), 'Cannot handle redirect results in processLoaderData'),
        qt(B))
      ) {
        let H = B.error
        if ((E !== void 0 && ((H = E), (E = void 0)), (y = y || {}), s))
          y[M] = H
        else {
          let J = La(i, M)
          y[J.route.id] == null && (y[J.route.id] = H)
        }
        o || (h[M] = f2),
          v || ((v = !0), (p = Uu(B.error) ? B.error.status : 500)),
          B.headers && (m[M] = B.headers)
      } else
        (h[M] = B.data),
          B.statusCode && B.statusCode !== 200 && !v && (p = B.statusCode),
          B.headers && (m[M] = B.headers)
    }),
    E !== void 0 && f && ((y = { [f[0]]: E }), f[2] && (h[f[2]] = void 0)),
    { loaderData: h, errors: y, statusCode: p || 200, loaderHeaders: m }
  )
}
function Kd(i, r, f, o, s, h) {
  let { loaderData: y, errors: p } = j1(r, f, o)
  return (
    s
      .filter((v) => !v.matches || v.matches.some((m) => m.shouldLoad))
      .forEach((v) => {
        let { key: m, match: E, controller: U } = v,
          M = h[m]
        if (
          (De(M, 'Did not find corresponding fetcher result'),
          !(U && U.signal.aborted))
        )
          if (qt(M)) {
            let B = La(i.matches, E == null ? void 0 : E.route.id)
            ;(p && p[B.route.id]) || (p = { ...p, [B.route.id]: M.error }),
              i.fetchers.delete(m)
          } else if (Ba(M)) De(!1, 'Unhandled fetcher revalidation redirect')
          else {
            let B = oa(M.data)
            i.fetchers.set(m, B)
          }
      }),
    { loaderData: y, errors: p }
  )
}
function Jd(i, r, f, o) {
  let s = Object.entries(r)
    .filter(([, h]) => h !== f2)
    .reduce((h, [y, p]) => ((h[y] = p), h), {})
  for (let h of f) {
    let y = h.route.id
    if (
      (!r.hasOwnProperty(y) &&
        i.hasOwnProperty(y) &&
        h.route.loader &&
        (s[y] = i[y]),
      o && o.hasOwnProperty(y))
    )
      break
  }
  return s
}
function kd(i) {
  return i
    ? qt(i[1])
      ? { actionData: {} }
      : { actionData: { [i[0]]: i[1].data } }
    : {}
}
function La(i, r) {
  return (
    (r ? i.slice(0, i.findIndex((o) => o.route.id === r) + 1) : [...i])
      .reverse()
      .find((o) => o.route.hasErrorBoundary === !0) || i[0]
  )
}
function $d(i) {
  let r =
    i.length === 1
      ? i[0]
      : i.find((f) => f.index || !f.path || f.path === '/') || {
          id: '__shim-error-route__',
        }
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: r }],
    route: r,
  }
}
function Ft(
  i,
  { pathname: r, routeId: f, method: o, type: s, message: h } = {}
) {
  let y = 'Unknown Server Error',
    p = 'Unknown @remix-run/router error'
  return (
    i === 400
      ? ((y = 'Bad Request'),
        o && r && f
          ? (p = `You made a ${o} request to "${r}" but did not provide a \`loader\` for route "${f}", so there is no way to handle the request.`)
          : s === 'invalid-body' && (p = 'Unable to encode submission body'))
      : i === 403
      ? ((y = 'Forbidden'), (p = `Route "${f}" does not match URL "${r}"`))
      : i === 404
      ? ((y = 'Not Found'), (p = `No route matches URL "${r}"`))
      : i === 405 &&
        ((y = 'Method Not Allowed'),
        o && r && f
          ? (p = `You made a ${o.toUpperCase()} request to "${r}" but did not provide an \`action\` for route "${f}", so there is no way to handle the request.`)
          : o && (p = `Invalid request method "${o.toUpperCase()}"`)),
    new rr(i || 500, y, new Error(p), !0)
  )
}
function Ii(i) {
  let r = Object.entries(i)
  for (let f = r.length - 1; f >= 0; f--) {
    let [o, s] = r[f]
    if (Ba(s)) return { key: o, result: s }
  }
}
function v2(i) {
  let r = typeof i == 'string' ? Hl(i) : i
  return da({ ...r, hash: '' })
}
function H1(i, r) {
  return i.pathname !== r.pathname || i.search !== r.search
    ? !1
    : i.hash === ''
    ? r.hash !== ''
    : i.hash === r.hash
    ? !0
    : r.hash !== ''
}
function L1(i) {
  return y2(i.result) && E1.has(i.result.status)
}
function qt(i) {
  return i.type === 'error'
}
function Ba(i) {
  return (i && i.type) === 'redirect'
}
function Wd(i) {
  return (
    typeof i == 'object' &&
    i != null &&
    'type' in i &&
    'data' in i &&
    'init' in i &&
    i.type === 'DataWithResponseInit'
  )
}
function y2(i) {
  return (
    i != null &&
    typeof i.status == 'number' &&
    typeof i.statusText == 'string' &&
    typeof i.headers == 'object' &&
    typeof i.body < 'u'
  )
}
function B1(i) {
  return S1.has(i.toUpperCase())
}
function Yt(i) {
  return p1.has(i.toUpperCase())
}
function Bf(i) {
  return new URLSearchParams(i).getAll('index').some((r) => r === '')
}
function wu(i, r) {
  let f = typeof r == 'string' ? Hl(r).search : r.search
  if (i[i.length - 1].route.index && Bf(f || '')) return i[i.length - 1]
  let o = i2(i)
  return o[o.length - 1]
}
function Fd(i) {
  let {
    formMethod: r,
    formAction: f,
    formEncType: o,
    text: s,
    formData: h,
    json: y,
  } = i
  if (!(!r || !f || !o)) {
    if (s != null)
      return {
        formMethod: r,
        formAction: f,
        formEncType: o,
        formData: void 0,
        json: void 0,
        text: s,
      }
    if (h != null)
      return {
        formMethod: r,
        formAction: f,
        formEncType: o,
        formData: h,
        json: void 0,
        text: void 0,
      }
    if (y !== void 0)
      return {
        formMethod: r,
        formAction: f,
        formEncType: o,
        formData: void 0,
        json: y,
        text: void 0,
      }
  }
}
function Df(i, r) {
  return r
    ? {
        state: 'loading',
        location: i,
        formMethod: r.formMethod,
        formAction: r.formAction,
        formEncType: r.formEncType,
        formData: r.formData,
        json: r.json,
        text: r.text,
      }
    : {
        state: 'loading',
        location: i,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      }
}
function q1(i, r) {
  return {
    state: 'submitting',
    location: i,
    formMethod: r.formMethod,
    formAction: r.formAction,
    formEncType: r.formEncType,
    formData: r.formData,
    json: r.json,
    text: r.text,
  }
}
function _u(i, r) {
  return i
    ? {
        state: 'loading',
        formMethod: i.formMethod,
        formAction: i.formAction,
        formEncType: i.formEncType,
        formData: i.formData,
        json: i.json,
        text: i.text,
        data: r,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: r,
      }
}
function Y1(i, r) {
  return {
    state: 'submitting',
    formMethod: i.formMethod,
    formAction: i.formAction,
    formEncType: i.formEncType,
    formData: i.formData,
    json: i.json,
    text: i.text,
    data: r ? r.data : void 0,
  }
}
function oa(i) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: i,
  }
}
function G1(i, r) {
  try {
    let f = i.sessionStorage.getItem(c2)
    if (f) {
      let o = JSON.parse(f)
      for (let [s, h] of Object.entries(o || {}))
        h && Array.isArray(h) && r.set(s, new Set(h || []))
    }
  } catch {}
}
function V1(i, r) {
  if (r.size > 0) {
    let f = {}
    for (let [o, s] of r) f[o] = [...s]
    try {
      i.sessionStorage.setItem(c2, JSON.stringify(f))
    } catch (o) {
      nt(
        !1,
        `Failed to save applied view transitions in sessionStorage (${o}).`
      )
    }
  }
}
function X1() {
  let i,
    r,
    f = new Promise((o, s) => {
      ;(i = async (h) => {
        o(h)
        try {
          await f
        } catch {}
      }),
        (r = async (h) => {
          s(h)
          try {
            await f
          } catch {}
        })
    })
  return { promise: f, resolve: i, reject: r }
}
var qa = j.createContext(null)
qa.displayName = 'DataRouter'
var ju = j.createContext(null)
ju.displayName = 'DataRouterState'
var qf = j.createContext({ isTransitioning: !1 })
qf.displayName = 'ViewTransition'
var g2 = j.createContext(new Map())
g2.displayName = 'Fetchers'
var Z1 = j.createContext(null)
Z1.displayName = 'Await'
var yl = j.createContext(null)
yl.displayName = 'Navigation'
var fr = j.createContext(null)
fr.displayName = 'Location'
var gl = j.createContext({ outlet: null, matches: [], isDataRoute: !1 })
gl.displayName = 'Route'
var Yf = j.createContext(null)
Yf.displayName = 'RouteError'
function Q1(i, { relative: r } = {}) {
  De(Hu(), 'useHref() may be used only in the context of a <Router> component.')
  let { basename: f, navigator: o } = j.useContext(yl),
    { hash: s, pathname: h, search: y } = Lu(i, { relative: r }),
    p = h
  return (
    f !== '/' && (p = h === '/' ? f : vl([f, h])),
    o.createHref({ pathname: p, search: y, hash: s })
  )
}
function Hu() {
  return j.useContext(fr) != null
}
function Ya() {
  return (
    De(
      Hu(),
      'useLocation() may be used only in the context of a <Router> component.'
    ),
    j.useContext(fr).location
  )
}
var p2 =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.'
function b2(i) {
  j.useContext(yl).static || j.useLayoutEffect(i)
}
function K1() {
  let { isDataRoute: i } = j.useContext(gl)
  return i ? rm() : J1()
}
function J1() {
  De(
    Hu(),
    'useNavigate() may be used only in the context of a <Router> component.'
  )
  let i = j.useContext(qa),
    { basename: r, navigator: f } = j.useContext(yl),
    { matches: o } = j.useContext(gl),
    { pathname: s } = Ya(),
    h = JSON.stringify(jf(o)),
    y = j.useRef(!1)
  return (
    b2(() => {
      y.current = !0
    }),
    j.useCallback(
      (v, m = {}) => {
        if ((nt(y.current, p2), !y.current)) return
        if (typeof v == 'number') {
          f.go(v)
          return
        }
        let E = Hf(v, JSON.parse(h), s, m.relative === 'path')
        i == null &&
          r !== '/' &&
          (E.pathname = E.pathname === '/' ? r : vl([r, E.pathname])),
          (m.replace ? f.replace : f.push)(E, m.state, m)
      },
      [r, f, h, s, i]
    )
  )
}
var k1 = j.createContext(null)
function $1(i) {
  let r = j.useContext(gl).outlet
  return r && j.createElement(k1.Provider, { value: i }, r)
}
function Lu(i, { relative: r } = {}) {
  let { matches: f } = j.useContext(gl),
    { pathname: o } = Ya(),
    s = JSON.stringify(jf(f))
  return j.useMemo(() => Hf(i, JSON.parse(s), o, r === 'path'), [i, s, o, r])
}
function W1(i, r, f, o) {
  De(
    Hu(),
    'useRoutes() may be used only in the context of a <Router> component.'
  )
  let { navigator: s } = j.useContext(yl),
    { matches: h } = j.useContext(gl),
    y = h[h.length - 1],
    p = y ? y.params : {},
    v = y ? y.pathname : '/',
    m = y ? y.pathnameBase : '/',
    E = y && y.route
  {
    let q = (E && E.path) || ''
    S2(
      v,
      !E || q.endsWith('*') || q.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${
        q === '/' ? '*' : `${q}/*`
      }">.`
    )
  }
  let U = Ya(),
    M
  M = U
  let B = M.pathname || '/',
    H = B
  if (m !== '/') {
    let q = m.replace(/^\//, '').split('/')
    H = '/' + B.replace(/^\//, '').split('/').slice(q.length).join('/')
  }
  let J = sa(i, { pathname: H })
  return (
    nt(
      E || J != null,
      `No routes matched location "${M.pathname}${M.search}${M.hash}" `
    ),
    nt(
      J == null ||
        J[J.length - 1].route.element !== void 0 ||
        J[J.length - 1].route.Component !== void 0 ||
        J[J.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    tm(
      J &&
        J.map((q) =>
          Object.assign({}, q, {
            params: Object.assign({}, p, q.params),
            pathname: vl([
              m,
              s.encodeLocation
                ? s.encodeLocation(q.pathname).pathname
                : q.pathname,
            ]),
            pathnameBase:
              q.pathnameBase === '/'
                ? m
                : vl([
                    m,
                    s.encodeLocation
                      ? s.encodeLocation(q.pathnameBase).pathname
                      : q.pathnameBase,
                  ]),
          })
        ),
      h,
      f,
      o
    )
  )
}
function F1() {
  let i = im(),
    r = Uu(i)
      ? `${i.status} ${i.statusText}`
      : i instanceof Error
      ? i.message
      : JSON.stringify(i),
    f = i instanceof Error ? i.stack : null,
    o = 'rgba(200,200,200, 0.5)',
    s = { padding: '0.5rem', backgroundColor: o },
    h = { padding: '2px 4px', backgroundColor: o },
    y = null
  return (
    console.error('Error handled by React Router default ErrorBoundary:', i),
    (y = j.createElement(
      j.Fragment,
      null,
      j.createElement('p', null, '💿 Hey developer 👋'),
      j.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        j.createElement('code', { style: h }, 'ErrorBoundary'),
        ' or',
        ' ',
        j.createElement('code', { style: h }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    j.createElement(
      j.Fragment,
      null,
      j.createElement('h2', null, 'Unexpected Application Error!'),
      j.createElement('h3', { style: { fontStyle: 'italic' } }, r),
      f ? j.createElement('pre', { style: s }, f) : null,
      y
    )
  )
}
var P1 = j.createElement(F1, null),
  I1 = class extends j.Component {
    constructor(i) {
      super(i),
        (this.state = {
          location: i.location,
          revalidation: i.revalidation,
          error: i.error,
        })
    }
    static getDerivedStateFromError(i) {
      return { error: i }
    }
    static getDerivedStateFromProps(i, r) {
      return r.location !== i.location ||
        (r.revalidation !== 'idle' && i.revalidation === 'idle')
        ? { error: i.error, location: i.location, revalidation: i.revalidation }
        : {
            error: i.error !== void 0 ? i.error : r.error,
            location: r.location,
            revalidation: i.revalidation || r.revalidation,
          }
    }
    componentDidCatch(i, r) {
      console.error(
        'React Router caught the following error during render',
        i,
        r
      )
    }
    render() {
      return this.state.error !== void 0
        ? j.createElement(
            gl.Provider,
            { value: this.props.routeContext },
            j.createElement(Yf.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children
    }
  }
function em({ routeContext: i, match: r, children: f }) {
  let o = j.useContext(qa)
  return (
    o &&
      o.static &&
      o.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    j.createElement(gl.Provider, { value: i }, f)
  )
}
function tm(i, r = [], f = null, o = null) {
  if (i == null) {
    if (!f) return null
    if (f.errors) i = f.matches
    else if (r.length === 0 && !f.initialized && f.matches.length > 0)
      i = f.matches
    else return null
  }
  let s = i,
    h = f == null ? void 0 : f.errors
  if (h != null) {
    let v = s.findIndex(
      (m) => m.route.id && (h == null ? void 0 : h[m.route.id]) !== void 0
    )
    De(
      v >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        h
      ).join(',')}`
    ),
      (s = s.slice(0, Math.min(s.length, v + 1)))
  }
  let y = !1,
    p = -1
  if (f)
    for (let v = 0; v < s.length; v++) {
      let m = s[v]
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (p = v),
        m.route.id)
      ) {
        let { loaderData: E, errors: U } = f,
          M =
            m.route.loader &&
            !E.hasOwnProperty(m.route.id) &&
            (!U || U[m.route.id] === void 0)
        if (m.route.lazy || M) {
          ;(y = !0), p >= 0 ? (s = s.slice(0, p + 1)) : (s = [s[0]])
          break
        }
      }
    }
  return s.reduceRight((v, m, E) => {
    let U,
      M = !1,
      B = null,
      H = null
    f &&
      ((U = h && m.route.id ? h[m.route.id] : void 0),
      (B = m.route.errorElement || P1),
      y &&
        (p < 0 && E === 0
          ? (S2(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (M = !0),
            (H = null))
          : p === E &&
            ((M = !0), (H = m.route.hydrateFallbackElement || null))))
    let J = r.concat(s.slice(0, E + 1)),
      $ = () => {
        let q
        return (
          U
            ? (q = B)
            : M
            ? (q = H)
            : m.route.Component
            ? (q = j.createElement(m.route.Component, null))
            : m.route.element
            ? (q = m.route.element)
            : (q = v),
          j.createElement(em, {
            match: m,
            routeContext: { outlet: v, matches: J, isDataRoute: f != null },
            children: q,
          })
        )
      }
    return f && (m.route.ErrorBoundary || m.route.errorElement || E === 0)
      ? j.createElement(I1, {
          location: f.location,
          revalidation: f.revalidation,
          component: B,
          error: U,
          children: $(),
          routeContext: { outlet: null, matches: J, isDataRoute: !0 },
        })
      : $()
  }, null)
}
function Gf(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function lm(i) {
  let r = j.useContext(qa)
  return De(r, Gf(i)), r
}
function am(i) {
  let r = j.useContext(ju)
  return De(r, Gf(i)), r
}
function nm(i) {
  let r = j.useContext(gl)
  return De(r, Gf(i)), r
}
function Vf(i) {
  let r = nm(i),
    f = r.matches[r.matches.length - 1]
  return (
    De(
      f.route.id,
      `${i} can only be used on routes that contain a unique "id"`
    ),
    f.route.id
  )
}
function um() {
  return Vf('useRouteId')
}
function im() {
  var o
  let i = j.useContext(Yf),
    r = am('useRouteError'),
    f = Vf('useRouteError')
  return i !== void 0 ? i : (o = r.errors) == null ? void 0 : o[f]
}
function rm() {
  let { router: i } = lm('useNavigate'),
    r = Vf('useNavigate'),
    f = j.useRef(!1)
  return (
    b2(() => {
      f.current = !0
    }),
    j.useCallback(
      async (s, h = {}) => {
        nt(f.current, p2),
          f.current &&
            (typeof s == 'number'
              ? i.navigate(s)
              : await i.navigate(s, { fromRouteId: r, ...h }))
      },
      [i, r]
    )
  )
}
var Pd = {}
function S2(i, r, f) {
  !r && !Pd[i] && ((Pd[i] = !0), nt(!1, f))
}
var Id = {}
function e2(i, r) {
  !i && !Id[r] && ((Id[r] = !0), console.warn(r))
}
function cm(i) {
  let r = {
    hasErrorBoundary:
      i.hasErrorBoundary || i.ErrorBoundary != null || i.errorElement != null,
  }
  return (
    i.Component &&
      (i.element &&
        nt(
          !1,
          'You should not include both `Component` and `element` on your route - `Component` will be used.'
        ),
      Object.assign(r, {
        element: j.createElement(i.Component),
        Component: void 0,
      })),
    i.HydrateFallback &&
      (i.hydrateFallbackElement &&
        nt(
          !1,
          'You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.'
        ),
      Object.assign(r, {
        hydrateFallbackElement: j.createElement(i.HydrateFallback),
        HydrateFallback: void 0,
      })),
    i.ErrorBoundary &&
      (i.errorElement &&
        nt(
          !1,
          'You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.'
        ),
      Object.assign(r, {
        errorElement: j.createElement(i.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    r
  )
}
var fm = ['HydrateFallback', 'hydrateFallbackElement'],
  om = class {
    constructor() {
      ;(this.status = 'pending'),
        (this.promise = new Promise((i, r) => {
          ;(this.resolve = (f) => {
            this.status === 'pending' && ((this.status = 'resolved'), i(f))
          }),
            (this.reject = (f) => {
              this.status === 'pending' && ((this.status = 'rejected'), r(f))
            })
        }))
    }
  }
function sm({ router: i, flushSync: r }) {
  let [f, o] = j.useState(i.state),
    [s, h] = j.useState(),
    [y, p] = j.useState({ isTransitioning: !1 }),
    [v, m] = j.useState(),
    [E, U] = j.useState(),
    [M, B] = j.useState(),
    H = j.useRef(new Map()),
    J = j.useCallback(
      (W, { deletedFetchers: se, flushSync: F, viewTransitionOpts: N }) => {
        W.fetchers.forEach((Se, ye) => {
          Se.data !== void 0 && H.current.set(ye, Se.data)
        }),
          se.forEach((Se) => H.current.delete(Se)),
          e2(
            F === !1 || r != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
          )
        let pe =
          i.window != null &&
          i.window.document != null &&
          typeof i.window.document.startViewTransition == 'function'
        if (
          (e2(
            N == null || pe,
            'You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.'
          ),
          !N || !pe)
        ) {
          r && F ? r(() => o(W)) : j.startTransition(() => o(W))
          return
        }
        if (r && F) {
          r(() => {
            E && (v && v.resolve(), E.skipTransition()),
              p({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: N.currentLocation,
                nextLocation: N.nextLocation,
              })
          })
          let Se = i.window.document.startViewTransition(() => {
            r(() => o(W))
          })
          Se.finished.finally(() => {
            r(() => {
              m(void 0), U(void 0), h(void 0), p({ isTransitioning: !1 })
            })
          }),
            r(() => U(Se))
          return
        }
        E
          ? (v && v.resolve(),
            E.skipTransition(),
            B({
              state: W,
              currentLocation: N.currentLocation,
              nextLocation: N.nextLocation,
            }))
          : (h(W),
            p({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: N.currentLocation,
              nextLocation: N.nextLocation,
            }))
      },
      [i.window, r, E, v]
    )
  j.useLayoutEffect(() => i.subscribe(J), [i, J]),
    j.useEffect(() => {
      y.isTransitioning && !y.flushSync && m(new om())
    }, [y]),
    j.useEffect(() => {
      if (v && s && i.window) {
        let W = s,
          se = v.promise,
          F = i.window.document.startViewTransition(async () => {
            j.startTransition(() => o(W)), await se
          })
        F.finished.finally(() => {
          m(void 0), U(void 0), h(void 0), p({ isTransitioning: !1 })
        }),
          U(F)
      }
    }, [s, v, i.window]),
    j.useEffect(() => {
      v && s && f.location.key === s.location.key && v.resolve()
    }, [v, E, f.location, s]),
    j.useEffect(() => {
      !y.isTransitioning &&
        M &&
        (h(M.state),
        p({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: M.currentLocation,
          nextLocation: M.nextLocation,
        }),
        B(void 0))
    }, [y.isTransitioning, M])
  let $ = j.useMemo(
      () => ({
        createHref: i.createHref,
        encodeLocation: i.encodeLocation,
        go: (W) => i.navigate(W),
        push: (W, se, F) =>
          i.navigate(W, {
            state: se,
            preventScrollReset: F == null ? void 0 : F.preventScrollReset,
          }),
        replace: (W, se, F) =>
          i.navigate(W, {
            replace: !0,
            state: se,
            preventScrollReset: F == null ? void 0 : F.preventScrollReset,
          }),
      }),
      [i]
    ),
    q = i.basename || '/',
    re = j.useMemo(
      () => ({ router: i, navigator: $, static: !1, basename: q }),
      [i, $, q]
    )
  return j.createElement(
    j.Fragment,
    null,
    j.createElement(
      qa.Provider,
      { value: re },
      j.createElement(
        ju.Provider,
        { value: f },
        j.createElement(
          g2.Provider,
          { value: H.current },
          j.createElement(
            qf.Provider,
            { value: y },
            j.createElement(
              vm,
              {
                basename: q,
                location: f.location,
                navigationType: f.historyAction,
                navigator: $,
              },
              j.createElement(dm, {
                routes: i.routes,
                future: i.future,
                state: f,
              })
            )
          )
        )
      )
    ),
    null
  )
}
var dm = j.memo(hm)
function hm({ routes: i, future: r, state: f }) {
  return W1(i, void 0, f, r)
}
function mm(i) {
  return $1(i.context)
}
function vm({
  basename: i = '/',
  children: r = null,
  location: f,
  navigationType: o = 'POP',
  navigator: s,
  static: h = !1,
}) {
  De(
    !Hu(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  )
  let y = i.replace(/^\/*/, '/'),
    p = j.useMemo(
      () => ({ basename: y, navigator: s, static: h, future: {} }),
      [y, s, h]
    )
  typeof f == 'string' && (f = Hl(f))
  let {
      pathname: v = '/',
      search: m = '',
      hash: E = '',
      state: U = null,
      key: M = 'default',
    } = f,
    B = j.useMemo(() => {
      let H = Pt(v, y)
      return H == null
        ? null
        : {
            location: { pathname: H, search: m, hash: E, state: U, key: M },
            navigationType: o,
          }
    }, [y, v, m, E, U, M, o])
  return (
    nt(
      B != null,
      `<Router basename="${y}"> is not able to match the URL "${v}${m}${E}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    B == null
      ? null
      : j.createElement(
          yl.Provider,
          { value: p },
          j.createElement(fr.Provider, { children: r, value: B })
        )
  )
}
var lr = 'get',
  ar = 'application/x-www-form-urlencoded'
function or(i) {
  return i != null && typeof i.tagName == 'string'
}
function ym(i) {
  return or(i) && i.tagName.toLowerCase() === 'button'
}
function gm(i) {
  return or(i) && i.tagName.toLowerCase() === 'form'
}
function pm(i) {
  return or(i) && i.tagName.toLowerCase() === 'input'
}
function bm(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey)
}
function Sm(i, r) {
  return i.button === 0 && (!r || r === '_self') && !bm(i)
}
var er = null
function Em() {
  if (er === null)
    try {
      new FormData(document.createElement('form'), 0), (er = !1)
    } catch {
      er = !0
    }
  return er
}
var xm = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
])
function _f(i) {
  return i != null && !xm.has(i)
    ? (nt(
        !1,
        `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ar}"`
      ),
      null)
    : i
}
function Tm(i, r) {
  let f, o, s, h, y
  if (gm(i)) {
    let p = i.getAttribute('action')
    ;(o = p ? Pt(p, r) : null),
      (f = i.getAttribute('method') || lr),
      (s = _f(i.getAttribute('enctype')) || ar),
      (h = new FormData(i))
  } else if (ym(i) || (pm(i) && (i.type === 'submit' || i.type === 'image'))) {
    let p = i.form
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      )
    let v = i.getAttribute('formaction') || p.getAttribute('action')
    if (
      ((o = v ? Pt(v, r) : null),
      (f = i.getAttribute('formmethod') || p.getAttribute('method') || lr),
      (s =
        _f(i.getAttribute('formenctype')) ||
        _f(p.getAttribute('enctype')) ||
        ar),
      (h = new FormData(p, i)),
      !Em())
    ) {
      let { name: m, type: E, value: U } = i
      if (E === 'image') {
        let M = m ? `${m}.` : ''
        h.append(`${M}x`, '0'), h.append(`${M}y`, '0')
      } else m && h.append(m, U)
    }
  } else {
    if (or(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      )
    ;(f = lr), (o = null), (s = ar), (y = i)
  }
  return (
    h && s === 'text/plain' && ((y = h), (h = void 0)),
    { action: o, method: f.toLowerCase(), encType: s, formData: h, body: y }
  )
}
function Xf(i, r) {
  if (i === !1 || i === null || typeof i > 'u') throw new Error(r)
}
async function Rm(i, r) {
  if (i.id in r) return r[i.id]
  try {
    let f = await import(i.module)
    return (r[i.id] = f), f
  } catch (f) {
    return (
      console.error(
        `Error loading route module \`${i.module}\`, reloading page...`
      ),
      console.error(f),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    )
  }
}
function Mm(i) {
  return i == null
    ? !1
    : i.href == null
    ? i.rel === 'preload' &&
      typeof i.imageSrcSet == 'string' &&
      typeof i.imageSizes == 'string'
    : typeof i.rel == 'string' && typeof i.href == 'string'
}
async function zm(i, r, f) {
  let o = await Promise.all(
    i.map(async (s) => {
      let h = r.routes[s.route.id]
      if (h) {
        let y = await Rm(h, f)
        return y.links ? y.links() : []
      }
      return []
    })
  )
  return Am(
    o
      .flat(1)
      .filter(Mm)
      .filter((s) => s.rel === 'stylesheet' || s.rel === 'preload')
      .map((s) =>
        s.rel === 'stylesheet'
          ? { ...s, rel: 'prefetch', as: 'style' }
          : { ...s, rel: 'prefetch' }
      )
  )
}
function t2(i, r, f, o, s, h) {
  let y = (v, m) => (f[m] ? v.route.id !== f[m].route.id : !0),
    p = (v, m) => {
      var E
      return (
        f[m].pathname !== v.pathname ||
        (((E = f[m].route.path) == null ? void 0 : E.endsWith('*')) &&
          f[m].params['*'] !== v.params['*'])
      )
    }
  return h === 'assets'
    ? r.filter((v, m) => y(v, m) || p(v, m))
    : h === 'data'
    ? r.filter((v, m) => {
        var U
        let E = o.routes[v.route.id]
        if (!E || !E.hasLoader) return !1
        if (y(v, m) || p(v, m)) return !0
        if (v.route.shouldRevalidate) {
          let M = v.route.shouldRevalidate({
            currentUrl: new URL(s.pathname + s.search + s.hash, window.origin),
            currentParams: ((U = f[0]) == null ? void 0 : U.params) || {},
            nextUrl: new URL(i, window.origin),
            nextParams: v.params,
            defaultShouldRevalidate: !0,
          })
          if (typeof M == 'boolean') return M
        }
        return !0
      })
    : []
}
function Cm(i, r, { includeHydrateFallback: f } = {}) {
  return Dm(
    i
      .map((o) => {
        let s = r.routes[o.route.id]
        if (!s) return []
        let h = [s.module]
        return (
          s.clientActionModule && (h = h.concat(s.clientActionModule)),
          s.clientLoaderModule && (h = h.concat(s.clientLoaderModule)),
          f &&
            s.hydrateFallbackModule &&
            (h = h.concat(s.hydrateFallbackModule)),
          s.imports && (h = h.concat(s.imports)),
          h
        )
      })
      .flat(1)
  )
}
function Dm(i) {
  return [...new Set(i)]
}
function _m(i) {
  let r = {},
    f = Object.keys(i).sort()
  for (let o of f) r[o] = i[o]
  return r
}
function Am(i, r) {
  let f = new Set()
  return (
    new Set(r),
    i.reduce((o, s) => {
      let h = JSON.stringify(_m(s))
      return f.has(h) || (f.add(h), o.push({ key: h, link: s })), o
    }, [])
  )
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0')
var Om = new Set([100, 101, 204, 205])
function wm(i, r) {
  let f =
    typeof i == 'string'
      ? new URL(
          i,
          typeof window > 'u' ? 'server://singlefetch/' : window.location.origin
        )
      : i
  return (
    f.pathname === '/'
      ? (f.pathname = '_root.data')
      : r && Pt(f.pathname, r) === '/'
      ? (f.pathname = `${r.replace(/\/$/, '')}/_root.data`)
      : (f.pathname = `${f.pathname.replace(/\/$/, '')}.data`),
    f
  )
}
function E2() {
  let i = j.useContext(qa)
  return (
    Xf(
      i,
      'You must render this element inside a <DataRouterContext.Provider> element'
    ),
    i
  )
}
function Nm() {
  let i = j.useContext(ju)
  return (
    Xf(
      i,
      'You must render this element inside a <DataRouterStateContext.Provider> element'
    ),
    i
  )
}
var Zf = j.createContext(void 0)
Zf.displayName = 'FrameworkContext'
function x2() {
  let i = j.useContext(Zf)
  return (
    Xf(i, 'You must render this element inside a <HydratedRouter> element'), i
  )
}
function Um(i, r) {
  let f = j.useContext(Zf),
    [o, s] = j.useState(!1),
    [h, y] = j.useState(!1),
    {
      onFocus: p,
      onBlur: v,
      onMouseEnter: m,
      onMouseLeave: E,
      onTouchStart: U,
    } = r,
    M = j.useRef(null)
  j.useEffect(() => {
    if ((i === 'render' && y(!0), i === 'viewport')) {
      let J = (q) => {
          q.forEach((re) => {
            y(re.isIntersecting)
          })
        },
        $ = new IntersectionObserver(J, { threshold: 0.5 })
      return (
        M.current && $.observe(M.current),
        () => {
          $.disconnect()
        }
      )
    }
  }, [i]),
    j.useEffect(() => {
      if (o) {
        let J = setTimeout(() => {
          y(!0)
        }, 100)
        return () => {
          clearTimeout(J)
        }
      }
    }, [o])
  let B = () => {
      s(!0)
    },
    H = () => {
      s(!1), y(!1)
    }
  return f
    ? i !== 'intent'
      ? [h, M, {}]
      : [
          h,
          M,
          {
            onFocus: Au(p, B),
            onBlur: Au(v, H),
            onMouseEnter: Au(m, B),
            onMouseLeave: Au(E, H),
            onTouchStart: Au(U, B),
          },
        ]
    : [!1, M, {}]
}
function Au(i, r) {
  return (f) => {
    i && i(f), f.defaultPrevented || r(f)
  }
}
function jm({ page: i, ...r }) {
  let { router: f } = E2(),
    o = j.useMemo(() => sa(f.routes, i, f.basename), [f.routes, i, f.basename])
  return o ? j.createElement(Lm, { page: i, matches: o, ...r }) : null
}
function Hm(i) {
  let { manifest: r, routeModules: f } = x2(),
    [o, s] = j.useState([])
  return (
    j.useEffect(() => {
      let h = !1
      return (
        zm(i, r, f).then((y) => {
          h || s(y)
        }),
        () => {
          h = !0
        }
      )
    }, [i, r, f]),
    o
  )
}
function Lm({ page: i, matches: r, ...f }) {
  let o = Ya(),
    { manifest: s, routeModules: h } = x2(),
    { basename: y } = E2(),
    { loaderData: p, matches: v } = Nm(),
    m = j.useMemo(() => t2(i, r, v, s, o, 'data'), [i, r, v, s, o]),
    E = j.useMemo(() => t2(i, r, v, s, o, 'assets'), [i, r, v, s, o]),
    U = j.useMemo(() => {
      if (i === o.pathname + o.search + o.hash) return []
      let H = new Set(),
        J = !1
      if (
        (r.forEach((q) => {
          var W
          let re = s.routes[q.route.id]
          !re ||
            !re.hasLoader ||
            ((!m.some((se) => se.route.id === q.route.id) &&
              q.route.id in p &&
              (W = h[q.route.id]) != null &&
              W.shouldRevalidate) ||
            re.hasClientLoader
              ? (J = !0)
              : H.add(q.route.id))
        }),
        H.size === 0)
      )
        return []
      let $ = wm(i, y)
      return (
        J &&
          H.size > 0 &&
          $.searchParams.set(
            '_routes',
            r
              .filter((q) => H.has(q.route.id))
              .map((q) => q.route.id)
              .join(',')
          ),
        [$.pathname + $.search]
      )
    }, [y, p, o, s, m, r, i, h]),
    M = j.useMemo(() => Cm(E, s), [E, s]),
    B = Hm(E)
  return j.createElement(
    j.Fragment,
    null,
    U.map((H) =>
      j.createElement('link', {
        key: H,
        rel: 'prefetch',
        as: 'fetch',
        href: H,
        ...f,
      })
    ),
    M.map((H) =>
      j.createElement('link', { key: H, rel: 'modulepreload', href: H, ...f })
    ),
    B.map(({ key: H, link: J }) => j.createElement('link', { key: H, ...J }))
  )
}
function Bm(...i) {
  return (r) => {
    i.forEach((f) => {
      typeof f == 'function' ? f(r) : f != null && (f.current = r)
    })
  }
}
var T2 =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u'
try {
  T2 && (window.__reactRouterVersion = '7.6.1')
} catch {}
function qm(i, r) {
  return M1({
    basename: r == null ? void 0 : r.basename,
    unstable_getContext: r == null ? void 0 : r.unstable_getContext,
    future: r == null ? void 0 : r.future,
    history: K3({ window: r == null ? void 0 : r.window }),
    hydrationData: Ym(),
    routes: i,
    mapRouteProperties: cm,
    hydrationRouteProperties: fm,
    dataStrategy: r == null ? void 0 : r.dataStrategy,
    patchRoutesOnNavigation: r == null ? void 0 : r.patchRoutesOnNavigation,
    window: r == null ? void 0 : r.window,
  }).initialize()
}
function Ym() {
  let i = window == null ? void 0 : window.__staticRouterHydrationData
  return i && i.errors && (i = { ...i, errors: Gm(i.errors) }), i
}
function Gm(i) {
  if (!i) return null
  let r = Object.entries(i),
    f = {}
  for (let [o, s] of r)
    if (s && s.__type === 'RouteErrorResponse')
      f[o] = new rr(s.status, s.statusText, s.data, s.internal === !0)
    else if (s && s.__type === 'Error') {
      if (s.__subType) {
        let h = window[s.__subType]
        if (typeof h == 'function')
          try {
            let y = new h(s.message)
            ;(y.stack = ''), (f[o] = y)
          } catch {}
      }
      if (f[o] == null) {
        let h = new Error(s.message)
        ;(h.stack = ''), (f[o] = h)
      }
    } else f[o] = s
  return f
}
var R2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  M2 = j.forwardRef(function (
    {
      onClick: r,
      discover: f = 'render',
      prefetch: o = 'none',
      relative: s,
      reloadDocument: h,
      replace: y,
      state: p,
      target: v,
      to: m,
      preventScrollReset: E,
      viewTransition: U,
      ...M
    },
    B
  ) {
    let { basename: H } = j.useContext(yl),
      J = typeof m == 'string' && R2.test(m),
      $,
      q = !1
    if (typeof m == 'string' && J && (($ = m), T2))
      try {
        let ye = new URL(window.location.href),
          Ze = m.startsWith('//') ? new URL(ye.protocol + m) : new URL(m),
          tt = Pt(Ze.pathname, H)
        Ze.origin === ye.origin && tt != null
          ? (m = tt + Ze.search + Ze.hash)
          : (q = !0)
      } catch {
        nt(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        )
      }
    let re = Q1(m, { relative: s }),
      [W, se, F] = Um(o, M),
      N = Zm(m, {
        replace: y,
        state: p,
        target: v,
        preventScrollReset: E,
        relative: s,
        viewTransition: U,
      })
    function pe(ye) {
      r && r(ye), ye.defaultPrevented || N(ye)
    }
    let Se = j.createElement('a', {
      ...M,
      ...F,
      href: $ || re,
      onClick: q || h ? r : pe,
      ref: Bm(B, se),
      target: v,
      'data-discover': !J && f === 'render' ? 'true' : void 0,
    })
    return W && !J
      ? j.createElement(j.Fragment, null, Se, j.createElement(jm, { page: re }))
      : Se
  })
M2.displayName = 'Link'
var nr = j.forwardRef(function (
  {
    'aria-current': r = 'page',
    caseSensitive: f = !1,
    className: o = '',
    end: s = !1,
    style: h,
    to: y,
    viewTransition: p,
    children: v,
    ...m
  },
  E
) {
  let U = Lu(y, { relative: m.relative }),
    M = Ya(),
    B = j.useContext(ju),
    { navigator: H, basename: J } = j.useContext(yl),
    $ = B != null && $m(U) && p === !0,
    q = H.encodeLocation ? H.encodeLocation(U).pathname : U.pathname,
    re = M.pathname,
    W =
      B && B.navigation && B.navigation.location
        ? B.navigation.location.pathname
        : null
  f ||
    ((re = re.toLowerCase()),
    (W = W ? W.toLowerCase() : null),
    (q = q.toLowerCase())),
    W && J && (W = Pt(W, J) || W)
  const se = q !== '/' && q.endsWith('/') ? q.length - 1 : q.length
  let F = re === q || (!s && re.startsWith(q) && re.charAt(se) === '/'),
    N =
      W != null &&
      (W === q || (!s && W.startsWith(q) && W.charAt(q.length) === '/')),
    pe = { isActive: F, isPending: N, isTransitioning: $ },
    Se = F ? r : void 0,
    ye
  typeof o == 'function'
    ? (ye = o(pe))
    : (ye = [
        o,
        F ? 'active' : null,
        N ? 'pending' : null,
        $ ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '))
  let Ze = typeof h == 'function' ? h(pe) : h
  return j.createElement(
    M2,
    {
      ...m,
      'aria-current': Se,
      className: ye,
      ref: E,
      style: Ze,
      to: y,
      viewTransition: p,
    },
    typeof v == 'function' ? v(pe) : v
  )
})
nr.displayName = 'NavLink'
var Vm = j.forwardRef(
  (
    {
      discover: i = 'render',
      fetcherKey: r,
      navigate: f,
      reloadDocument: o,
      replace: s,
      state: h,
      method: y = lr,
      action: p,
      onSubmit: v,
      relative: m,
      preventScrollReset: E,
      viewTransition: U,
      ...M
    },
    B
  ) => {
    let H = Jm(),
      J = km(p, { relative: m }),
      $ = y.toLowerCase() === 'get' ? 'get' : 'post',
      q = typeof p == 'string' && R2.test(p),
      re = (W) => {
        if ((v && v(W), W.defaultPrevented)) return
        W.preventDefault()
        let se = W.nativeEvent.submitter,
          F = (se == null ? void 0 : se.getAttribute('formmethod')) || y
        H(se || W.currentTarget, {
          fetcherKey: r,
          method: F,
          navigate: f,
          replace: s,
          state: h,
          relative: m,
          preventScrollReset: E,
          viewTransition: U,
        })
      }
    return j.createElement('form', {
      ref: B,
      method: $,
      action: J,
      onSubmit: o ? v : re,
      ...M,
      'data-discover': !q && i === 'render' ? 'true' : void 0,
    })
  }
)
Vm.displayName = 'Form'
function Xm(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function z2(i) {
  let r = j.useContext(qa)
  return De(r, Xm(i)), r
}
function Zm(
  i,
  {
    target: r,
    replace: f,
    state: o,
    preventScrollReset: s,
    relative: h,
    viewTransition: y,
  } = {}
) {
  let p = K1(),
    v = Ya(),
    m = Lu(i, { relative: h })
  return j.useCallback(
    (E) => {
      if (Sm(E, r)) {
        E.preventDefault()
        let U = f !== void 0 ? f : da(v) === da(m)
        p(i, {
          replace: U,
          state: o,
          preventScrollReset: s,
          relative: h,
          viewTransition: y,
        })
      }
    },
    [v, p, m, f, o, r, i, s, h, y]
  )
}
var Qm = 0,
  Km = () => `__${String(++Qm)}__`
function Jm() {
  let { router: i } = z2('useSubmit'),
    { basename: r } = j.useContext(yl),
    f = um()
  return j.useCallback(
    async (o, s = {}) => {
      let { action: h, method: y, encType: p, formData: v, body: m } = Tm(o, r)
      if (s.navigate === !1) {
        let E = s.fetcherKey || Km()
        await i.fetch(E, f, s.action || h, {
          preventScrollReset: s.preventScrollReset,
          formData: v,
          body: m,
          formMethod: s.method || y,
          formEncType: s.encType || p,
          flushSync: s.flushSync,
        })
      } else
        await i.navigate(s.action || h, {
          preventScrollReset: s.preventScrollReset,
          formData: v,
          body: m,
          formMethod: s.method || y,
          formEncType: s.encType || p,
          replace: s.replace,
          state: s.state,
          fromRouteId: f,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition,
        })
    },
    [i, r, f]
  )
}
function km(i, { relative: r } = {}) {
  let { basename: f } = j.useContext(yl),
    o = j.useContext(gl)
  De(o, 'useFormAction must be used inside a RouteContext')
  let [s] = o.matches.slice(-1),
    h = { ...Lu(i || '.', { relative: r }) },
    y = Ya()
  if (i == null) {
    h.search = y.search
    let p = new URLSearchParams(h.search),
      v = p.getAll('index')
    if (v.some((E) => E === '')) {
      p.delete('index'), v.filter((U) => U).forEach((U) => p.append('index', U))
      let E = p.toString()
      h.search = E ? `?${E}` : ''
    }
  }
  return (
    (!i || i === '.') &&
      s.route.index &&
      (h.search = h.search ? h.search.replace(/^\?/, '?index&') : '?index'),
    f !== '/' && (h.pathname = h.pathname === '/' ? f : vl([f, h.pathname])),
    da(h)
  )
}
function $m(i, r = {}) {
  let f = j.useContext(qf)
  De(
    f != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  )
  let { basename: o } = z2('useViewTransitionState'),
    s = Lu(i, { relative: r.relative })
  if (!f.isTransitioning) return !1
  let h = Pt(f.currentLocation.pathname, o) || f.currentLocation.pathname,
    y = Pt(f.nextLocation.pathname, o) || f.nextLocation.pathname
  return ir(s.pathname, y) != null || ir(s.pathname, h) != null
}
;[...Om]
const Wm = '_nav_1khei_1',
  Fm = '_link_1khei_29',
  Pm = '_active_1khei_49',
  Ha = { nav: Wm, link: Fm, active: Pm },
  Im = () =>
    D.jsxs('nav', {
      className: Ha.nav,
      children: [
        D.jsx(nr, {
          to: '/',
          children: D.jsx('img', { src: './instalmetLogo.svg' }),
        }),
        D.jsxs('div', {
          children: [
            D.jsx(nr, {
              to: '/o-nas',
              className: ({ isActive: i }) =>
                i ? `${Ha.link} ${Ha.active}` : Ha.link,
              children: 'O NAS',
            }),
            D.jsx(nr, {
              to: '/kontakt',
              className: ({ isActive: i }) =>
                i ? `${Ha.link} ${Ha.active}` : Ha.link,
              children: 'KONTAKT',
            }),
          ],
        }),
      ],
    }),
  ev = '_facebook_eet87_27',
  tv = '_card_eet87_45',
  lv = '_hours_eet87_89',
  av = '_hour_eet87_89',
  nv = '_contact_eet87_109',
  uv = '_visitCard_eet87_113',
  iv = '_copyright_eet87_133',
  jl = {
    facebook: ev,
    card: tv,
    hours: lv,
    hour: av,
    contact: nv,
    visitCard: uv,
    copyright: iv,
  },
  rv =
    "data:image/svg+xml,%3csvg%20class='facebook'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.9%202H3.1C2.80826%202%202.52847%202.11589%202.32218%202.32218C2.11589%202.52847%202%202.80826%202%203.1V20.9C2%2021.1917%202.11589%2021.4715%202.32218%2021.6778C2.52847%2021.8841%202.80826%2022%203.1%2022H12.68V14.25H10.08V11.25H12.68V9C12.6261%208.47176%2012.6885%207.93813%2012.8627%207.43654C13.0369%206.93495%2013.3188%206.47755%2013.6885%206.09641C14.0582%205.71528%2014.5068%205.41964%2015.0028%205.23024C15.4989%205.04083%2016.0304%204.96225%2016.56%205C17.3383%204.99463%2018.1163%205.03469%2018.89%205.12V7.82H17.3C16.04%207.82%2015.8%208.42%2015.8%209.29V11.22H18.8L18.41%2014.22H15.8V22H20.9C21.0445%2022%2021.1875%2021.9715%2021.321%2021.9163C21.4544%2021.861%2021.5757%2021.78%2021.6778%2021.6778C21.78%2021.5757%2021.861%2021.4544%2021.9163%2021.321C21.9715%2021.1875%2022%2021.0445%2022%2020.9V3.1C22%202.95555%2021.9715%202.81251%2021.9163%202.67905C21.861%202.54559%2021.78%202.42433%2021.6778%202.32218C21.5757%202.22004%2021.4544%202.13901%2021.321%202.08373C21.1875%202.02845%2021.0445%202%2020.9%202Z'%20fill='%2331393C'/%3e%3c/svg%3e",
  cv = () =>
    D.jsxs('footer', {
      children: [
        D.jsxs('div', {
          children: [
            D.jsxs('div', {
              className: jl.visitCard,
              children: [
                D.jsxs('div', {
                  className: jl.card,
                  children: [
                    D.jsx('img', { src: './instalmetLogo.svg' }),
                    D.jsxs('div', {
                      children: [
                        D.jsx('h1', { children: 'INSTAL-MET' }),
                        D.jsxs('p', {
                          children: [
                            'Sprzedaż Artykułów ',
                            D.jsx('br', {}),
                            'Przemysłowych i Mechanicznych',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                D.jsx('a', {
                  className: jl.facebook,
                  href: 'https://www.facebook.com/profile.php?id=100064063835879&locale=pl_PL',
                  target: '_blank',
                  children: D.jsx('img', { src: rv }),
                }),
              ],
            }),
            D.jsxs('div', {
              className: jl.hours,
              children: [
                D.jsx('h2', { children: 'Godziny otwarcia' }),
                D.jsxs('div', {
                  children: [
                    D.jsx('p', { children: 'Poniedziałek - Piątek' }),
                    ' ',
                    D.jsx('p', {
                      className: jl.hour,
                      children: '8:00 - 17:00',
                    }),
                  ],
                }),
                D.jsxs('div', {
                  children: [
                    D.jsx('p', { children: 'Sobota' }),
                    ' ',
                    D.jsx('p', {
                      className: jl.hour,
                      children: '8:00 - 13:00',
                    }),
                  ],
                }),
                D.jsxs('div', {
                  children: [
                    D.jsx('p', { children: 'Niedziela' }),
                    ' ',
                    D.jsx('p', { className: jl.hour, children: 'Nieczynne' }),
                  ],
                }),
              ],
            }),
            D.jsxs('div', {
              className: jl.contact,
              children: [
                D.jsx('h2', { children: 'Kontakt' }),
                D.jsxs('p', {
                  children: [
                    'ul. Szkolna 3A ',
                    D.jsx('br', {}),
                    '63-040 Nowe Miasto nad Wartą',
                  ],
                }),
                D.jsxs('p', {
                  children: [
                    'tel. 061 287 44 55 ',
                    D.jsx('br', {}),
                    'tel. 513 153 353',
                  ],
                }),
                D.jsx('a', {
                  href: 'mailto:instalmet@post.pl',
                  children: 'instalmet@post.pl',
                }),
              ],
            }),
          ],
        }),
        D.jsx('p', {
          className: jl.copyright,
          children: '2025 © Kamila Matysiak',
        }),
      ],
    })
function fv() {
  return D.jsxs('div', {
    className: 'app',
    children: [
      D.jsx(Im, {}),
      D.jsx('div', { className: 'content', children: D.jsx(mm, {}) }),
      D.jsx(cv, {}),
    ],
  })
}
const ov = '_banner_1x9us_1',
  sv = '_bannerBox_1x9us_11',
  dv = '_bannerText_1x9us_31',
  hv = '_localBanner_1x9us_47',
  mv = '_smallText_1x9us_79',
  vv = '_img_1x9us_87',
  yv = '_orange_1x9us_123',
  gv = '_orangeTop_1x9us_139',
  pv = '_orangeBottom_1x9us_149',
  bv = '_galleryDot_1x9us_159',
  Sv = '_actual_1x9us_189',
  Ev = '_dots_1x9us_199',
  Pe = {
    banner: ov,
    bannerBox: sv,
    bannerText: dv,
    localBanner: hv,
    smallText: mv,
    img: vv,
    orange: yv,
    orangeTop: gv,
    orangeBottom: pv,
    galleryDot: bv,
    actual: Sv,
    dots: Ev,
  },
  xv = '_button_1i3ll_1',
  Tv = { button: xv },
  Rv = ({ children: i, link: r }) =>
    D.jsx('a', {
      href: r,
      target: '_blank',
      className: Tv.button,
      children: i,
    }),
  Mv = ({ promocje: i }) => {
    const [r, f] = j.useState(i[0]),
      [o, s] = j.useState(0)
    function h() {
      const y = o + 1 >= i.length ? 0 : o + 1
      s(y), f(i[y]), console.log(i[y])
    }
    return (
      j.useEffect(() => {
        if (i.length > 1) {
          const y = setInterval(() => h(), 15e3)
          return () => {
            clearInterval(y)
          }
        }
      }, [r]),
      D.jsx(D.Fragment, {
        children:
          r &&
          D.jsx('div', {
            className: Pe.banner,
            children: D.jsxs('div', {
              className: Pe.bannerBox,
              children: [
                D.jsxs('div', {
                  className: Pe.bannerText,
                  children: [
                    D.jsx('h1', { children: r == null ? void 0 : r.tytul }),
                    D.jsx('p', { children: r == null ? void 0 : r.tresc }),
                    (r == null ? void 0 : r.pokazDate) &&
                      D.jsxs('p', {
                        className: Pe.smallText,
                        children: [
                          'Oferta ważna od ',
                          r == null ? void 0 : r.data_od,
                          ' do ',
                          r == null ? void 0 : r.data_do,
                        ],
                      }),
                    D.jsx('div', {
                      className: Pe.dots,
                      children:
                        i.length > 1 &&
                        i.map(
                          (y, p) =>
                            y &&
                            D.jsx(
                              'div',
                              {
                                onClick: () => {
                                  f(i[p]), s(p)
                                },
                                className:
                                  p == o
                                    ? `${Pe.galleryDot} ${Pe.actual}`
                                    : `${Pe.galleryDot}`,
                              },
                              p
                            )
                        ),
                    }),
                  ],
                }),
                D.jsxs('div', {
                  className: Pe.img,
                  children: [
                    D.jsx('img', { src: r == null ? void 0 : r.zdj }),
                    D.jsx('div', { className: `${Pe.orange} ${Pe.orangeTop}` }),
                    D.jsx('div', {
                      className: `${Pe.orange} ${Pe.orangeBottom}`,
                    }),
                  ],
                }),
              ],
            }),
          }),
      })
    )
  },
  zv = () =>
    D.jsx('div', {
      className: Pe.banner,
      children: D.jsxs('div', {
        className: Pe.bannerBox,
        children: [
          D.jsxs('div', {
            className: Pe.img,
            children: [
              D.jsx('img', { src: './instal-met.jpg' }),
              D.jsx('div', { className: `${Pe.orange} ${Pe.orangeTop}` }),
              D.jsx('div', { className: `${Pe.orange} ${Pe.orangeBottom}` }),
            ],
          }),
          D.jsxs('div', {
            className: `${Pe.bannerText} ${Pe.localBanner}`,
            children: [
              D.jsx('h1', { children: 'Gdzie nas znaleźć?' }),
              D.jsxs('div', {
                children: [
                  D.jsx('p', {
                    style: { marginBottom: 0 },
                    children: 'ul. Szkolna 3A',
                  }),
                  D.jsx('p', {
                    className: Pe.smallText,
                    children: 'Nowe Miasto Nad Wartą',
                  }),
                ],
              }),
              D.jsx(Rv, {
                link: 'https://www.google.com/maps/dir//Instal-Met,+Szkolna,+Nowe+Miasto+nad+Wartą/@52.0877288,17.364837,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47051e2f62a26e99:0xc1cb89f82476a97!2m2!1d17.406122!2d52.087736?entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D',
                children: 'Sprawdź dojazd',
              }),
            ],
          }),
        ],
      }),
    }),
  Cv =
    "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.3333%2056C11.8667%2056%2010.6116%2055.4782%209.568%2054.4347C8.52444%2053.3911%208.00178%2052.1351%208%2050.6667V13.3333C8%2011.8667%208.52267%2010.6116%209.568%209.568C10.6133%208.52444%2011.8684%208.00178%2013.3333%208H50.6667C52.1333%208%2053.3893%208.52267%2054.4347%209.568C55.48%2010.6133%2056.0018%2011.8684%2056%2013.3333V50.6667C56%2052.1333%2055.4782%2053.3893%2054.4347%2054.4347C53.3911%2055.48%2052.1351%2056.0018%2050.6667%2056H13.3333ZM13.3333%2032V50.6667H50.6667V32H45.3333V45.3333H18.6667V32H13.3333ZM24%2040H40V32H24V40ZM13.3333%2026.6667H50.6667V13.3333H13.3333V26.6667ZM21.3333%2021.3333C20.5778%2021.3333%2019.9449%2021.0773%2019.4347%2020.5653C18.9244%2020.0533%2018.6684%2019.4204%2018.6667%2018.6667C18.6649%2017.9129%2018.9209%2017.28%2019.4347%2016.768C19.9484%2016.256%2020.5813%2016%2021.3333%2016C22.0853%2016%2022.7191%2016.256%2023.2347%2016.768C23.7502%2017.28%2024.0053%2017.9129%2024%2018.6667C23.9947%2019.4204%2023.7387%2020.0542%2023.232%2020.568C22.7253%2021.0818%2022.0924%2021.3369%2021.3333%2021.3333ZM32%2021.3333C31.2444%2021.3333%2030.6116%2021.0773%2030.1013%2020.5653C29.5911%2020.0533%2029.3351%2019.4204%2029.3333%2018.6667C29.3316%2017.9129%2029.5876%2017.28%2030.1013%2016.768C30.6151%2016.256%2031.248%2016%2032%2016C32.752%2016%2033.3858%2016.256%2033.9013%2016.768C34.4169%2017.28%2034.672%2017.9129%2034.6667%2018.6667C34.6613%2019.4204%2034.4053%2020.0542%2033.8987%2020.568C33.392%2021.0818%2032.7591%2021.3369%2032%2021.3333ZM42.6667%2021.3333C41.9111%2021.3333%2041.2782%2021.0773%2040.768%2020.5653C40.2578%2020.0533%2040.0018%2019.4204%2040%2018.6667C39.9982%2017.9129%2040.2542%2017.28%2040.768%2016.768C41.2818%2016.256%2041.9147%2016%2042.6667%2016C43.4187%2016%2044.0524%2016.256%2044.568%2016.768C45.0836%2017.28%2045.3387%2017.9129%2045.3333%2018.6667C45.328%2019.4204%2045.072%2020.0542%2044.5653%2020.568C44.0587%2021.0818%2043.4258%2021.3369%2042.6667%2021.3333Z'%20fill='%23F5841F'/%3e%3c/svg%3e",
  Dv =
    "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M40.2667%204.82666L32.72%2012.3733C30.6667%2014.4533%2030.6667%2017.84%2032.72%2019.92L36.48%2023.68L24.3467%2035.8133L16.8267%2028.2667L13.04%2032C-0.160003%2045.3333%209.33333%2054.6667%209.33333%2054.6667C9.33333%2054.6667%2018.6667%2064%2032%2050.9067L35.76%2047.1467L28.2933%2039.68L40.4%2027.5733L44.1067%2031.28C46.1867%2033.3333%2049.5733%2033.3333%2051.6533%2031.28L59.2%2023.7333L40.2667%204.82666ZM47.8133%2027.4133L44.1333%2023.7333L40.2933%2019.8933L36.56%2016.16L40.32%2012.4L51.6%2023.68L47.8133%2027.4133Z'%20fill='%23F5841F'/%3e%3c/svg%3e",
  _v =
    "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M24.8%2028.7333C24.8%2029.5778%2024.9448%2030.4%2025.2346%2031.2C25.5244%2032%2025.9351%2032.7333%2026.4666%2033.4C26.5555%2032.8666%2026.7333%2032.3449%2027%2031.8346C27.2666%2031.3244%2027.6%2030.8906%2028%2030.5333L32%2026.6666L35.9333%2030.6C36.3333%2030.9555%2036.6666%2031.3778%2036.9333%2031.8666C37.2%2032.3555%2037.3777%2032.8666%2037.4666%2033.4C37.9555%2032.7333%2038.3884%2032.0222%2038.7653%2031.2666C39.1422%2030.5111%2039.3315%2029.7111%2039.3333%2028.8666C39.3351%2028.0222%2039.2017%2027.2106%2038.9333%2026.432C38.6649%2025.6533%2038.2648%2024.9315%2037.7333%2024.2666C37.2444%2024.4889%2036.7449%2024.6666%2036.2346%2024.8C35.7244%2024.9333%2035.2017%2025%2034.6666%2025C33.3333%2025%2032.1111%2024.6222%2031%2023.8666C29.8888%2023.1111%2029.0444%2022.1111%2028.4666%2020.8666C27.9333%2021.4%2027.4444%2021.9662%2027%2022.5653C26.5555%2023.1644%2026.1671%2023.7982%2025.8346%2024.4666C25.5022%2025.1351%2025.2462%2025.824%2025.0666%2026.5333C24.8871%2027.2426%2024.7982%2027.976%2024.8%2028.7333ZM32%2032.2666L30.8666%2033.4C30.6888%2033.5778%2030.5671%2033.7555%2030.5013%2033.9333C30.4355%2034.1111%2030.4017%2034.3111%2030.4%2034.5333C30.4%2034.9778%2030.5555%2035.3333%2030.8666%2035.6C31.1777%2035.8666%2031.5555%2036%2032%2036C32.4444%2036%2032.8222%2035.8666%2033.1333%2035.6C33.4444%2035.3333%2033.6%2034.9778%2033.6%2034.5333C33.6%2034.3111%2033.5671%2034.1111%2033.5013%2033.9333C33.4355%2033.7555%2033.3128%2033.5778%2033.1333%2033.4L32%2032.2666ZM32%2013.3333V18.4C32%2019.1555%2032.2666%2019.7893%2032.8%2020.3013C33.3333%2020.8133%2033.9777%2021.0684%2034.7333%2021.0666C35.2222%2021.0666%2035.6666%2020.9226%2036.0666%2020.6346C36.4666%2020.3466%2036.8222%2020.0018%2037.1333%2019.6L37.6%2018.9333C39.4222%2019.9555%2040.8337%2021.3449%2041.8346%2023.1013C42.8355%2024.8578%2043.3351%2026.7795%2043.3333%2028.8666C43.3333%2031.9778%2042.2222%2034.6115%2040%2036.768C37.7777%2038.9244%2035.1111%2040.0018%2032%2040C28.8888%2039.9982%2026.2444%2038.9093%2024.0666%2036.7333C21.8888%2034.5573%2020.8%2031.9129%2020.8%2028.8C20.8%2025.3778%2021.8888%2022.3333%2024.0666%2019.6666C26.2444%2017%2028.8888%2014.8889%2032%2013.3333ZM16%2058.6666C14.5333%2058.6666%2013.2782%2058.1449%2012.2346%2057.1013C11.1911%2056.0578%2010.6684%2054.8018%2010.6666%2053.3333V16C10.6666%2013.0666%2011.7111%2010.5555%2013.8%208.46665C15.8888%206.37776%2018.4%205.33331%2021.3333%205.33331H42.6666C45.6%205.33331%2048.1111%206.37776%2050.2%208.46665C52.2889%2010.5555%2053.3333%2013.0666%2053.3333%2016V53.3333C53.3333%2054.8%2052.8115%2056.056%2051.768%2057.1013C50.7244%2058.1466%2049.4684%2058.6684%2048%2058.6666H16ZM16%2048V53.3333H48V48C46.6666%2048%2045.6%2048.4444%2044.8%2049.3333C44%2050.2222%2042.4%2050.6666%2040%2050.6666C37.6%2050.6666%2036.0329%2050.2222%2035.2986%2049.3333C34.5644%2048.4444%2033.4648%2048%2032%2048C30.5351%2048%2029.4355%2048.4444%2028.7013%2049.3333C27.9671%2050.2222%2026.4%2050.6666%2024%2050.6666C21.6%2050.6666%2020.0328%2050.2222%2019.2986%2049.3333C18.5644%2048.4444%2017.4648%2048%2016%2048ZM24%2045.3333C25.4666%2045.3333%2026.5671%2044.8889%2027.3013%2044C28.0355%2043.1111%2029.6017%2042.6666%2032%2042.6666C34.3982%2042.6666%2035.9982%2043.1111%2036.8%2044C37.6017%2044.8889%2038.6684%2045.3333%2040%2045.3333C41.3315%2045.3333%2042.3982%2044.8889%2043.2%2044C44.0017%2043.1111%2045.6017%2042.6666%2048%2042.6666V16C48%2014.5333%2047.4782%2013.2782%2046.4346%2012.2346C45.3911%2011.1911%2044.1351%2010.6684%2042.6666%2010.6666H21.3333C19.8666%2010.6666%2018.6115%2011.1893%2017.568%2012.2346C16.5244%2013.28%2016.0017%2014.5351%2016%2016V42.6666C18.4%2042.6666%2019.9671%2043.1111%2020.7013%2044C21.4355%2044.8889%2022.5351%2045.3333%2024%2045.3333Z'%20fill='%23F5841F'/%3e%3c/svg%3e",
  Av =
    "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M50.4%2056L35.8%2041.4L41.4%2035.8L56%2050.4L50.4%2056ZM13.6%2056L7.99996%2050.4L26.4%2032L21.8666%2027.4667L20%2029.3334L16.6%2025.9334V31.4L14.7333%2033.2667L6.66663%2025.2L8.53329%2023.3334H14L10.6666%2020L20.1333%2010.5334C21.0222%209.64446%2021.9777%209.00002%2023%208.60002C24.0222%208.20002%2025.0666%208.00002%2026.1333%208.00002C27.2%208.00002%2028.2444%208.20002%2029.2666%208.60002C30.2889%209.00002%2031.2444%209.64446%2032.1333%2010.5334L26%2016.6667L29.3333%2020L27.4666%2021.8667L32%2026.4L38%2020.4C37.8222%2019.9111%2037.6782%2019.4%2037.568%2018.8667C37.4577%2018.3334%2037.4017%2017.8%2037.4%2017.2667C37.4%2014.6445%2038.3004%2012.4329%2040.1013%2010.632C41.9022%208.83113%2044.1129%207.93157%2046.7333%207.93335C47.4%207.93335%2048.0337%208.00002%2048.6346%208.13335C49.2355%208.26669%2049.8462%208.46669%2050.4666%208.73335L43.8666%2015.3334L48.6666%2020.1334L55.2666%2013.5334C55.5777%2014.1556%2055.7893%2014.7662%2055.9013%2015.3654C56.0133%2015.9645%2056.0684%2016.5982%2056.0666%2017.2667C56.0666%2019.8889%2055.1671%2022.1005%2053.368%2023.9014C51.5689%2025.7022%2049.3573%2026.6018%2046.7333%2026.6C46.2%2026.6%2045.6666%2026.5556%2045.1333%2026.4667C44.6%2026.3778%2044.0889%2026.2222%2043.6%2026L13.6%2056Z'%20fill='%23F5841F'/%3e%3c/svg%3e",
  Ov =
    "data:image/svg+xml,%3csvg%20width='57'%20height='48'%20viewBox='0%200%2057%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.4667%2048C15.7778%2048%2014.3334%2047.3893%2013.1334%2046.168C11.9334%2044.9467%2011.3334%2043.4907%2011.3334%2041.8V17.0667L6.4667%205.33333H3.33336C2.57781%205.33333%201.94492%205.07733%201.4347%204.56533C0.924474%204.05333%200.668474%203.42044%200.666696%202.66667C0.664918%201.91289%200.920918%201.28%201.4347%200.768C1.94847%200.256%202.58136%200%203.33336%200H8.2667C8.80003%200%209.28892%200.155555%209.73336%200.466667C10.1778%200.777778%2010.5111%201.17778%2010.7334%201.66667L14.4667%2010.6667H53.8667C54.8889%2010.6667%2055.6667%2011.0889%2056.2%2011.9333C56.7334%2012.7778%2056.7556%2013.6444%2056.2667%2014.5333L48.6667%2029.4C50.9334%2029.7556%2052.8338%2030.8%2054.368%2032.5333C55.9023%2034.2667%2056.6685%2036.3111%2056.6667%2038.6667C56.6667%2041.2444%2055.7671%2043.4444%2053.968%2045.2667C52.1689%2047.0889%2049.9796%2048%2047.4%2048C44.7778%2048%2042.5671%2047.0889%2040.768%2045.2667C38.9689%2043.4444%2038.0685%2041.2444%2038.0667%2038.6667C38.0667%2037.7778%2038.1778%2036.9556%2038.4%2036.2C38.6223%2035.4444%2038.9334%2034.7111%2039.3334%2034L30.6%2033.2L22.6%2045.2C22.0223%2046.0889%2021.2783%2046.7778%2020.368%2047.2667C19.4578%2047.7556%2018.4907%2048%2017.4667%2048ZM42.9334%2029L49.5334%2016H16.6667L20%2024C20.3556%2024.8889%2020.9227%2025.6338%2021.7014%2026.2347C22.48%2026.8356%2023.3796%2027.1796%2024.4%2027.2667L42.9334%2029ZM17.5334%2042.6C17.6223%2042.6%2017.8223%2042.4889%2018.1334%2042.2667L24.6%2032.6667C22.4223%2032.4444%2020.7111%2031.9227%2019.4667%2031.1013C18.2223%2030.28%2017.2889%2029.424%2016.6667%2028.5333V41.8667C16.6667%2042.0889%2016.7556%2042.2667%2016.9334%2042.4C17.1111%2042.5333%2017.3111%2042.6%2017.5334%2042.6ZM47.3334%2042.6667C48.4889%2042.6667%2049.4445%2042.2782%2050.2%2041.5013C50.9556%2040.7244%2051.3334%2039.7796%2051.3334%2038.6667C51.3334%2037.5111%2050.9556%2036.5556%2050.2%2035.8C49.4445%2035.0444%2048.4889%2034.6667%2047.3334%2034.6667C46.2223%2034.6667%2045.2783%2035.0444%2044.5014%2035.8C43.7245%2036.5556%2043.3351%2037.5111%2043.3334%2038.6667C43.3334%2039.7778%2043.7227%2040.7227%2044.5014%2041.5013C45.28%2042.28%2046.224%2042.6684%2047.3334%2042.6667Z'%20fill='%23F5841F'/%3e%3c/svg%3e",
  wv =
    "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.33331%2058.6667V17.7334L42.4%202.66669L44.1333%207.06669L22.1333%2016H58.6666V58.6667H5.33331ZM10.6666%2053.3334H53.3333V34.6667H10.6666V53.3334ZM21.3333%2050.6667C23.2%2050.6667%2024.7778%2050.0222%2026.0666%2048.7334C27.3555%2047.4445%2028%2045.8667%2028%2044C28%2042.1334%2027.3555%2040.5556%2026.0666%2039.2667C24.7778%2037.9778%2023.2%2037.3334%2021.3333%2037.3334C19.4666%2037.3334%2017.8889%2037.9778%2016.6%2039.2667C15.3111%2040.5556%2014.6666%2042.1334%2014.6666%2044C14.6666%2045.8667%2015.3111%2047.4445%2016.6%2048.7334C17.8889%2050.0222%2019.4666%2050.6667%2021.3333%2050.6667ZM10.6666%2029.3334H42.6666V24H48V29.3334H53.3333V21.3334H10.6666V29.3334Z'%20fill='%23F5841F'/%3e%3c/svg%3e",
  Nv = '_offer_13ouv_1',
  Uv = '_tile_13ouv_43',
  C2 = { offer: Nv, tile: Uv },
  jv = () => {
    const i = [
      {
        text: `Artykuły 
budowlane`,
        img: Ov,
      },
      { text: 'Narzędzia', img: Av },
      {
        text: `Artykuły 
ogrodnicze`,
        img: Dv,
      },
      { text: 'Sprzęty RTV', img: wv },
      { text: 'Sprzęty AGD', img: Cv },
      { text: 'Kotły', img: _v },
    ]
    return D.jsxs('div', {
      className: C2.offer,
      children: [
        D.jsx('h1', { children: 'Nasza oferta' }),
        D.jsx('div', {
          children: i.map(
            (r, f) => r && D.jsx(Hv, { text: r.text, img: r.img }, f)
          ),
        }),
        D.jsx('p', { children: 'I wiele więcej...' }),
      ],
    })
  },
  Hv = ({ text: i, img: r }) =>
    D.jsxs('div', {
      className: C2.tile,
      children: [D.jsx('img', { src: r }), ' ', i],
    }),
  Lv = () => {
    const [i, r] = j.useState([])
    j.useEffect(() => {
      fetch('promocje/promocje.json')
        .then((o) => (console.log(o), o.json()))
        .then((o) => r(o.promocje))
    }, [])
    function f() {
      return i.filter(
        (o) =>
          Date.parse(o.data_do) >= Date.now() &&
          Date.now() >= Date.parse(o.data_od)
      )
    }
    return D.jsxs(D.Fragment, {
      children: [
        i.length > 0 && D.jsx(Mv, { promocje: f() }),
        D.jsx(jv, {}),
        D.jsx(zv, {}),
      ],
    })
  },
  Bv = () =>
    D.jsxs('div', {
      className: 'page',
      children: [
        D.jsxs('div', {
          className: 'text',
          children: [
            D.jsx('h1', { children: 'O NAS' }),
            D.jsxs('div', {
              className: 'line',
              style: { width: 120 },
              children: [
                D.jsx('div', { className: 'line-green' }),
                D.jsx('div', { className: 'line-orange' }),
              ],
            }),
            D.jsx('p', {
              style: { marginBottom: 8 },
              children:
                'Instal-Met to firma z ponad 30-letnim doświadczeniem w branży instalacyjnej i budowlanej. Działamy na terenie Nowego Miasta nad Wartą i okolic, oferując klientom sprawdzone materiały i akcesoria do instalacji wodno-kanalizacyjnych, grzewczych i sanitarnych – a także okazjonalnie świadcząc usługi montażowe, takie jak instalacja grzejników czy drobne prace techniczne.',
            }),
            D.jsx('p', {
              style: { marginBottom: 32 },
              children:
                'W naszej ofercie znajdziesz szeroki wybór produktów: od systemów grzewczych, rur, zaworów i armatury, po narzędzia, akcesoria łazienkowe i materiały wykończeniowe. Dbamy o to, by nasze towary były solidne, nowoczesne i dostępne w konkurencyjnych cenach.',
            }),
            D.jsx('h3', { children: 'Dlaczego Instal-Met?' }),
            D.jsxs('div', {
              className: 'line',
              style: { width: 200, height: 2 },
              children: [
                D.jsx('div', { className: 'line-green' }),
                D.jsx('div', { className: 'line-orange' }),
              ],
            }),
            D.jsxs('ul', {
              style: { marginLeft: 24 },
              children: [
                D.jsxs('li', {
                  children: [
                    D.jsx('b', { children: 'Ponad 30 lat doświadczenia' }),
                    ' - znamy potrzeby naszych klientów i branży.',
                  ],
                }),
                D.jsxs('li', {
                  children: [
                    D.jsx('b', { children: 'Indywidualne podejście' }),
                    ' – zawsze doradzimy i pomożemy w wyborze najlepszego rozwiązania.',
                  ],
                }),
                D.jsxs('li', {
                  children: [
                    D.jsx('b', { children: 'Szeroki asortyment' }),
                    ' – od podstawowych komponentów po specjalistyczne produkty instalacyjne.',
                  ],
                }),
                D.jsxs('li', {
                  children: [
                    D.jsx('b', { children: 'Usługi dodatkowe' }),
                    ' – oferujemy również montaż grzejników i drobne prace instalacyjne.',
                  ],
                }),
              ],
            }),
            D.jsxs('p', {
              style: { marginTop: 32 },
              children: [
                'Działamy lokalnie, ale myślimy szeroko – naszą siłą są dobre relacje, uczciwe podejście i pasja do tego, co robimy. Jeśli szukasz sprawdzonych materiałów remontowych i fachowej porady –',
                ' ',
                D.jsx('strong', { children: 'zapraszamy do Instal-Met.' }),
              ],
            }),
          ],
        }),
        D.jsx('div', {
          children: D.jsxs('div', {
            className: 'map',
            children: [
              D.jsx('img', {
                width: 508,
                height: 406,
                src: './instal-met.jpg',
              }),
              D.jsx('div', { className: 'orange orangeTop' }),
              D.jsx('div', { className: 'orange orangeBottom' }),
            ],
          }),
        }),
      ],
    }),
  qv = () =>
    D.jsxs('div', {
      className: 'page',
      children: [
        D.jsxs('div', {
          className: 'text',
          children: [
            D.jsx('h1', { children: 'Kontakt' }),
            D.jsxs('div', {
              className: 'line',
              children: [
                D.jsx('div', { className: 'line-green' }),
                D.jsx('div', { className: 'line-orange' }),
              ],
            }),
            D.jsx('h2', {
              children:
                'INSTAL-MET Sprzedaż Art. Przemysłowych i Mechanicznych',
            }),
            D.jsx('small', { children: 'Piotr Kurzawa' }),
            D.jsxs('p', {
              className: 'sectionText',
              children: [
                'ul. Szkolna 3A',
                D.jsx('br', {}),
                '63-040 Nowe Miasto nad Wartą',
              ],
            }),
            D.jsxs('p', {
              className: 'sectionText',
              children: [
                D.jsx('small', { children: 'tel. stacjonarny: ' }),
                D.jsx('b', { children: '061 287 44 55' }),
              ],
            }),
            D.jsxs('p', {
              children: [
                D.jsx('small', { children: 'tel. komórkowy: ' }),
                D.jsx('b', { children: '513 153 353' }),
              ],
            }),
            D.jsxs('p', {
              className: 'sectionText',
              children: [
                D.jsx('small', { children: 'email: ' }),
                ' ',
                D.jsx('a', {
                  href: 'mailto:instalmet@post.pl',
                  children: D.jsx('b', { children: 'instalmet@post.pl' }),
                }),
              ],
            }),
            D.jsxs('p', {
              className: 'sectionText',
              children: [
                D.jsx('small', { children: 'REGON: ' }),
                D.jsx('b', { children: '630498110' }),
              ],
            }),
            D.jsxs('p', {
              children: [
                D.jsx('small', { children: 'NIP: ' }),
                D.jsx('b', { children: '786-000-89-09' }),
              ],
            }),
            D.jsx('p', {
              className: 'sectionText',
              children: D.jsx('small', { children: 'Godziny otwarcia: ' }),
            }),
            D.jsxs('p', {
              children: [
                'Pon - pt: ',
                D.jsx('b', { children: '8:00 - 17:00' }),
              ],
            }),
            D.jsxs('p', {
              children: ['Sobota: ', D.jsx('b', { children: '8:00 - 13:00' })],
            }),
            D.jsx('p', {
              className: 'sectionText',
              children: D.jsx('small', { children: 'Konto bankowe:' }),
            }),
            D.jsxs('p', {
              children: [
                'BANK PEKAO S.A. Oddział Środa Wlkp.',
                D.jsx('br', {}),
                D.jsx('strong', {
                  children: '58 1020 4160 0000 2102 0006 4030',
                }),
              ],
            }),
          ],
        }),
        D.jsxs('div', {
          children: [
            D.jsxs('div', {
              className: 'map',
              children: [
                D.jsx('iframe', {
                  width: '500',
                  height: '400',
                  src: 'https://www.openstreetmap.org/export/embed.html?bbox=17.40392625331879%2C52.0869380126444%2C17.40829557180405%2C52.08843613199833&layer=mapnik&marker=52.087687902656384%2C17.40610957145691',
                }),
                D.jsx('div', { className: 'orange orangeTop' }),
                D.jsx('div', { className: 'orange orangeBottom' }),
              ],
            }),
            D.jsx('br', {}),
            D.jsx('small', {
              children: D.jsx('a', {
                href: 'https://www.openstreetmap.org/?mlat=52.087688&mlon=17.406110#map=19/52.087687/17.406111',
                children: 'Wyświetl większą mapę',
              }),
            }),
          ],
        }),
      ],
    }),
  Yv = qm([
    {
      path: '/instal-met/',
      Component: fv,
      children: [
        { index: !0, Component: Lv },
        { path: '/o-nas', Component: Bv },
        { path: '/kontakt', Component: qv },
      ],
    },
  ])
V3.createRoot(document.getElementById('root')).render(
  D.jsx(j.StrictMode, { children: D.jsx(sm, { router: Yv }) })
)
