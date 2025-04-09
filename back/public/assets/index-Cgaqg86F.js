var Gv = (O, B) => () => (
  B || O((B = { exports: {} }).exports, B), B.exports
);
var yh = Gv((gh, Bu) => {
  (function () {
    const B = document.createElement('link').relList;
    if (B && B.supports && B.supports('modulepreload')) return;
    for (const Y of document.querySelectorAll(
      'link[rel="modulepreload"]'
    ))
      d(Y);
    new MutationObserver((Y) => {
      for (const G of Y)
        if (G.type === 'childList')
          for (const q of G.addedNodes)
            q.tagName === 'LINK' && q.rel === 'modulepreload' && d(q);
    }).observe(document, { childList: !0, subtree: !0 });
    function Q(Y) {
      const G = {};
      return (
        Y.integrity && (G.integrity = Y.integrity),
        Y.referrerPolicy && (G.referrerPolicy = Y.referrerPolicy),
        Y.crossOrigin === 'use-credentials'
          ? (G.credentials = 'include')
          : Y.crossOrigin === 'anonymous'
          ? (G.credentials = 'omit')
          : (G.credentials = 'same-origin'),
        G
      );
    }
    function d(Y) {
      if (Y.ep) return;
      Y.ep = !0;
      const G = Q(Y);
      fetch(Y.href, G);
    }
  })();
  function Xv(O) {
    return O &&
      O.__esModule &&
      Object.prototype.hasOwnProperty.call(O, 'default')
      ? O.default
      : O;
  }
  function Qv(O) {
    if (Object.prototype.hasOwnProperty.call(O, '__esModule'))
      return O;
    var B = O.default;
    if (typeof B == 'function') {
      var Q = function d() {
        return this instanceof d
          ? Reflect.construct(B, arguments, this.constructor)
          : B.apply(this, arguments);
      };
      Q.prototype = B.prototype;
    } else Q = {};
    return (
      Object.defineProperty(Q, '__esModule', { value: !0 }),
      Object.keys(O).forEach(function (d) {
        var Y = Object.getOwnPropertyDescriptor(O, d);
        Object.defineProperty(
          Q,
          d,
          Y.get
            ? Y
            : {
                enumerable: !0,
                get: function () {
                  return O[d];
                },
              }
        );
      }),
      Q
    );
  }
  var yi = { exports: {} },
    ju = {};
  /**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var od;
  function Zv() {
    if (od) return ju;
    od = 1;
    var O = Symbol.for('react.transitional.element'),
      B = Symbol.for('react.fragment');
    function Q(d, Y, G) {
      var q = null;
      if (
        (G !== void 0 && (q = '' + G),
        Y.key !== void 0 && (q = '' + Y.key),
        'key' in Y)
      ) {
        G = {};
        for (var Z in Y) Z !== 'key' && (G[Z] = Y[Z]);
      } else G = Y;
      return (
        (Y = G.ref),
        {
          $$typeof: O,
          type: d,
          key: q,
          ref: Y !== void 0 ? Y : null,
          props: G,
        }
      );
    }
    return (ju.Fragment = B), (ju.jsx = Q), (ju.jsxs = Q), ju;
  }
  var dd;
  function Lv() {
    return dd || ((dd = 1), (yi.exports = Zv())), yi.exports;
  }
  var F = Lv(),
    mi = { exports: {} },
    I = {};
  /**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var vd;
  function Vv() {
    if (vd) return I;
    vd = 1;
    var O = Symbol.for('react.transitional.element'),
      B = Symbol.for('react.portal'),
      Q = Symbol.for('react.fragment'),
      d = Symbol.for('react.strict_mode'),
      Y = Symbol.for('react.profiler'),
      G = Symbol.for('react.consumer'),
      q = Symbol.for('react.context'),
      Z = Symbol.for('react.forward_ref'),
      z = Symbol.for('react.suspense'),
      b = Symbol.for('react.memo'),
      U = Symbol.for('react.lazy'),
      S = Symbol.iterator;
    function x(i) {
      return i === null || typeof i != 'object'
        ? null
        : ((i = (S && i[S]) || i['@@iterator']),
          typeof i == 'function' ? i : null);
    }
    var N = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      j = Object.assign,
      R = {};
    function L(i, r, E) {
      (this.props = i),
        (this.context = r),
        (this.refs = R),
        (this.updater = E || N);
    }
    (L.prototype.isReactComponent = {}),
      (L.prototype.setState = function (i, r) {
        if (
          typeof i != 'object' &&
          typeof i != 'function' &&
          i != null
        )
          throw Error(
            'takes an object of state variables to update or a function which returns an object of state variables.'
          );
        this.updater.enqueueSetState(this, i, r, 'setState');
      }),
      (L.prototype.forceUpdate = function (i) {
        this.updater.enqueueForceUpdate(this, i, 'forceUpdate');
      });
    function cl() {}
    cl.prototype = L.prototype;
    function sl(i, r, E) {
      (this.props = i),
        (this.context = r),
        (this.refs = R),
        (this.updater = E || N);
    }
    var al = (sl.prototype = new cl());
    (al.constructor = sl),
      j(al, L.prototype),
      (al.isPureReactComponent = !0);
    var Tl = Array.isArray,
      fl = { H: null, A: null, T: null, S: null, V: null },
      Ul = Object.prototype.hasOwnProperty;
    function wl(i, r, E, _, D, X) {
      return (
        (E = X.ref),
        {
          $$typeof: O,
          type: i,
          key: r,
          ref: E !== void 0 ? E : null,
          props: X,
        }
      );
    }
    function tt(i, r) {
      return wl(i.type, r, void 0, void 0, void 0, i.props);
    }
    function St(i) {
      return typeof i == 'object' && i !== null && i.$$typeof === O;
    }
    function na(i) {
      var r = { '=': '=0', ':': '=2' };
      return (
        '$' +
        i.replace(/[=:]/g, function (E) {
          return r[E];
        })
      );
    }
    var Ut = /\/+/g;
    function Gl(i, r) {
      return typeof i == 'object' && i !== null && i.key != null
        ? na('' + i.key)
        : r.toString(36);
    }
    function Lt() {}
    function qt(i) {
      switch (i.status) {
        case 'fulfilled':
          return i.value;
        case 'rejected':
          throw i.reason;
        default:
          switch (
            (typeof i.status == 'string'
              ? i.then(Lt, Lt)
              : ((i.status = 'pending'),
                i.then(
                  function (r) {
                    i.status === 'pending' &&
                      ((i.status = 'fulfilled'), (i.value = r));
                  },
                  function (r) {
                    i.status === 'pending' &&
                      ((i.status = 'rejected'), (i.reason = r));
                  }
                )),
            i.status)
          ) {
            case 'fulfilled':
              return i.value;
            case 'rejected':
              throw i.reason;
          }
      }
      throw i;
    }
    function jl(i, r, E, _, D) {
      var X = typeof i;
      (X === 'undefined' || X === 'boolean') && (i = null);
      var H = !1;
      if (i === null) H = !0;
      else
        switch (X) {
          case 'bigint':
          case 'string':
          case 'number':
            H = !0;
            break;
          case 'object':
            switch (i.$$typeof) {
              case O:
              case B:
                H = !0;
                break;
              case U:
                return (H = i._init), jl(H(i._payload), r, E, _, D);
            }
        }
      if (H)
        return (
          (D = D(i)),
          (H = _ === '' ? '.' + Gl(i, 0) : _),
          Tl(D)
            ? ((E = ''),
              H != null && (E = H.replace(Ut, '$&/') + '/'),
              jl(D, r, E, '', function (il) {
                return il;
              }))
            : D != null &&
              (St(D) &&
                (D = tt(
                  D,
                  E +
                    (D.key == null || (i && i.key === D.key)
                      ? ''
                      : ('' + D.key).replace(Ut, '$&/') + '/') +
                    H
                )),
              r.push(D)),
          1
        );
      H = 0;
      var w = _ === '' ? '.' : _ + ':';
      if (Tl(i))
        for (var K = 0; K < i.length; K++)
          (_ = i[K]), (X = w + Gl(_, K)), (H += jl(_, r, E, X, D));
      else if (((K = x(i)), typeof K == 'function'))
        for (i = K.call(i), K = 0; !(_ = i.next()).done; )
          (_ = _.value),
            (X = w + Gl(_, K++)),
            (H += jl(_, r, E, X, D));
      else if (X === 'object') {
        if (typeof i.then == 'function') return jl(qt(i), r, E, _, D);
        throw (
          ((r = String(i)),
          Error(
            'Objects are not valid as a React child (found: ' +
              (r === '[object Object]'
                ? 'object with keys {' +
                  Object.keys(i).join(', ') +
                  '}'
                : r) +
              '). If you meant to render a collection of children, use an array instead.'
          ))
        );
      }
      return H;
    }
    function p(i, r, E) {
      if (i == null) return i;
      var _ = [],
        D = 0;
      return (
        jl(i, _, '', '', function (X) {
          return r.call(E, X, D++);
        }),
        _
      );
    }
    function C(i) {
      if (i._status === -1) {
        var r = i._result;
        (r = r()),
          r.then(
            function (E) {
              (i._status === 0 || i._status === -1) &&
                ((i._status = 1), (i._result = E));
            },
            function (E) {
              (i._status === 0 || i._status === -1) &&
                ((i._status = 2), (i._result = E));
            }
          ),
          i._status === -1 && ((i._status = 0), (i._result = r));
      }
      if (i._status === 1) return i._result.default;
      throw i._result;
    }
    var W =
      typeof reportError == 'function'
        ? reportError
        : function (i) {
            if (
              typeof window == 'object' &&
              typeof window.ErrorEvent == 'function'
            ) {
              var r = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof i == 'object' &&
                  i !== null &&
                  typeof i.message == 'string'
                    ? String(i.message)
                    : String(i),
                error: i,
              });
              if (!window.dispatchEvent(r)) return;
            } else if (
              typeof process == 'object' &&
              typeof process.emit == 'function'
            ) {
              process.emit('uncaughtException', i);
              return;
            }
            console.error(i);
          };
    function hl() {}
    return (
      (I.Children = {
        map: p,
        forEach: function (i, r, E) {
          p(
            i,
            function () {
              r.apply(this, arguments);
            },
            E
          );
        },
        count: function (i) {
          var r = 0;
          return (
            p(i, function () {
              r++;
            }),
            r
          );
        },
        toArray: function (i) {
          return (
            p(i, function (r) {
              return r;
            }) || []
          );
        },
        only: function (i) {
          if (!St(i))
            throw Error(
              'React.Children.only expected to receive a single React element child.'
            );
          return i;
        },
      }),
      (I.Component = L),
      (I.Fragment = Q),
      (I.Profiler = Y),
      (I.PureComponent = sl),
      (I.StrictMode = d),
      (I.Suspense = z),
      (I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
        fl),
      (I.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (i) {
          return fl.H.useMemoCache(i);
        },
      }),
      (I.cache = function (i) {
        return function () {
          return i.apply(null, arguments);
        };
      }),
      (I.cloneElement = function (i, r, E) {
        if (i == null)
          throw Error(
            'The argument must be a React element, but you passed ' +
              i +
              '.'
          );
        var _ = j({}, i.props),
          D = i.key,
          X = void 0;
        if (r != null)
          for (H in (r.ref !== void 0 && (X = void 0),
          r.key !== void 0 && (D = '' + r.key),
          r))
            !Ul.call(r, H) ||
              H === 'key' ||
              H === '__self' ||
              H === '__source' ||
              (H === 'ref' && r.ref === void 0) ||
              (_[H] = r[H]);
        var H = arguments.length - 2;
        if (H === 1) _.children = E;
        else if (1 < H) {
          for (var w = Array(H), K = 0; K < H; K++)
            w[K] = arguments[K + 2];
          _.children = w;
        }
        return wl(i.type, D, void 0, void 0, X, _);
      }),
      (I.createContext = function (i) {
        return (
          (i = {
            $$typeof: q,
            _currentValue: i,
            _currentValue2: i,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (i.Provider = i),
          (i.Consumer = { $$typeof: G, _context: i }),
          i
        );
      }),
      (I.createElement = function (i, r, E) {
        var _,
          D = {},
          X = null;
        if (r != null)
          for (_ in (r.key !== void 0 && (X = '' + r.key), r))
            Ul.call(r, _) &&
              _ !== 'key' &&
              _ !== '__self' &&
              _ !== '__source' &&
              (D[_] = r[_]);
        var H = arguments.length - 2;
        if (H === 1) D.children = E;
        else if (1 < H) {
          for (var w = Array(H), K = 0; K < H; K++)
            w[K] = arguments[K + 2];
          D.children = w;
        }
        if (i && i.defaultProps)
          for (_ in ((H = i.defaultProps), H))
            D[_] === void 0 && (D[_] = H[_]);
        return wl(i, X, void 0, void 0, null, D);
      }),
      (I.createRef = function () {
        return { current: null };
      }),
      (I.forwardRef = function (i) {
        return { $$typeof: Z, render: i };
      }),
      (I.isValidElement = St),
      (I.lazy = function (i) {
        return {
          $$typeof: U,
          _payload: { _status: -1, _result: i },
          _init: C,
        };
      }),
      (I.memo = function (i, r) {
        return {
          $$typeof: b,
          type: i,
          compare: r === void 0 ? null : r,
        };
      }),
      (I.startTransition = function (i) {
        var r = fl.T,
          E = {};
        fl.T = E;
        try {
          var _ = i(),
            D = fl.S;
          D !== null && D(E, _),
            typeof _ == 'object' &&
              _ !== null &&
              typeof _.then == 'function' &&
              _.then(hl, W);
        } catch (X) {
          W(X);
        } finally {
          fl.T = r;
        }
      }),
      (I.unstable_useCacheRefresh = function () {
        return fl.H.useCacheRefresh();
      }),
      (I.use = function (i) {
        return fl.H.use(i);
      }),
      (I.useActionState = function (i, r, E) {
        return fl.H.useActionState(i, r, E);
      }),
      (I.useCallback = function (i, r) {
        return fl.H.useCallback(i, r);
      }),
      (I.useContext = function (i) {
        return fl.H.useContext(i);
      }),
      (I.useDebugValue = function () {}),
      (I.useDeferredValue = function (i, r) {
        return fl.H.useDeferredValue(i, r);
      }),
      (I.useEffect = function (i, r, E) {
        var _ = fl.H;
        if (typeof E == 'function')
          throw Error(
            'useEffect CRUD overload is not enabled in this build of React.'
          );
        return _.useEffect(i, r);
      }),
      (I.useId = function () {
        return fl.H.useId();
      }),
      (I.useImperativeHandle = function (i, r, E) {
        return fl.H.useImperativeHandle(i, r, E);
      }),
      (I.useInsertionEffect = function (i, r) {
        return fl.H.useInsertionEffect(i, r);
      }),
      (I.useLayoutEffect = function (i, r) {
        return fl.H.useLayoutEffect(i, r);
      }),
      (I.useMemo = function (i, r) {
        return fl.H.useMemo(i, r);
      }),
      (I.useOptimistic = function (i, r) {
        return fl.H.useOptimistic(i, r);
      }),
      (I.useReducer = function (i, r, E) {
        return fl.H.useReducer(i, r, E);
      }),
      (I.useRef = function (i) {
        return fl.H.useRef(i);
      }),
      (I.useState = function (i) {
        return fl.H.useState(i);
      }),
      (I.useSyncExternalStore = function (i, r, E) {
        return fl.H.useSyncExternalStore(i, r, E);
      }),
      (I.useTransition = function () {
        return fl.H.useTransition();
      }),
      (I.version = '19.1.0'),
      I
    );
  }
  var hd;
  function Be() {
    return hd || ((hd = 1), (mi.exports = Vv())), mi.exports;
  }
  var lt = Be(),
    gi = { exports: {} },
    qu = {},
    bi = { exports: {} },
    Si = {};
  /**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var yd;
  function wv() {
    return (
      yd ||
        ((yd = 1),
        (function (O) {
          function B(p, C) {
            var W = p.length;
            p.push(C);
            l: for (; 0 < W; ) {
              var hl = (W - 1) >>> 1,
                i = p[hl];
              if (0 < Y(i, C)) (p[hl] = C), (p[W] = i), (W = hl);
              else break l;
            }
          }
          function Q(p) {
            return p.length === 0 ? null : p[0];
          }
          function d(p) {
            if (p.length === 0) return null;
            var C = p[0],
              W = p.pop();
            if (W !== C) {
              p[0] = W;
              l: for (
                var hl = 0, i = p.length, r = i >>> 1;
                hl < r;

              ) {
                var E = 2 * (hl + 1) - 1,
                  _ = p[E],
                  D = E + 1,
                  X = p[D];
                if (0 > Y(_, W))
                  D < i && 0 > Y(X, _)
                    ? ((p[hl] = X), (p[D] = W), (hl = D))
                    : ((p[hl] = _), (p[E] = W), (hl = E));
                else if (D < i && 0 > Y(X, W))
                  (p[hl] = X), (p[D] = W), (hl = D);
                else break l;
              }
            }
            return C;
          }
          function Y(p, C) {
            var W = p.sortIndex - C.sortIndex;
            return W !== 0 ? W : p.id - C.id;
          }
          if (
            ((O.unstable_now = void 0),
            typeof performance == 'object' &&
              typeof performance.now == 'function')
          ) {
            var G = performance;
            O.unstable_now = function () {
              return G.now();
            };
          } else {
            var q = Date,
              Z = q.now();
            O.unstable_now = function () {
              return q.now() - Z;
            };
          }
          var z = [],
            b = [],
            U = 1,
            S = null,
            x = 3,
            N = !1,
            j = !1,
            R = !1,
            L = !1,
            cl = typeof setTimeout == 'function' ? setTimeout : null,
            sl =
              typeof clearTimeout == 'function' ? clearTimeout : null,
            al = typeof setImmediate < 'u' ? setImmediate : null;
          function Tl(p) {
            for (var C = Q(b); C !== null; ) {
              if (C.callback === null) d(b);
              else if (C.startTime <= p)
                d(b), (C.sortIndex = C.expirationTime), B(z, C);
              else break;
              C = Q(b);
            }
          }
          function fl(p) {
            if (((R = !1), Tl(p), !j))
              if (Q(z) !== null) (j = !0), Ul || ((Ul = !0), Gl());
              else {
                var C = Q(b);
                C !== null && jl(fl, C.startTime - p);
              }
          }
          var Ul = !1,
            wl = -1,
            tt = 5,
            St = -1;
          function na() {
            return L ? !0 : !(O.unstable_now() - St < tt);
          }
          function Ut() {
            if (((L = !1), Ul)) {
              var p = O.unstable_now();
              St = p;
              var C = !0;
              try {
                l: {
                  (j = !1),
                    R && ((R = !1), sl(wl), (wl = -1)),
                    (N = !0);
                  var W = x;
                  try {
                    t: {
                      for (
                        Tl(p), S = Q(z);
                        S !== null && !(S.expirationTime > p && na());

                      ) {
                        var hl = S.callback;
                        if (typeof hl == 'function') {
                          (S.callback = null), (x = S.priorityLevel);
                          var i = hl(S.expirationTime <= p);
                          if (
                            ((p = O.unstable_now()),
                            typeof i == 'function')
                          ) {
                            (S.callback = i), Tl(p), (C = !0);
                            break t;
                          }
                          S === Q(z) && d(z), Tl(p);
                        } else d(z);
                        S = Q(z);
                      }
                      if (S !== null) C = !0;
                      else {
                        var r = Q(b);
                        r !== null && jl(fl, r.startTime - p),
                          (C = !1);
                      }
                    }
                    break l;
                  } finally {
                    (S = null), (x = W), (N = !1);
                  }
                  C = void 0;
                }
              } finally {
                C ? Gl() : (Ul = !1);
              }
            }
          }
          var Gl;
          if (typeof al == 'function')
            Gl = function () {
              al(Ut);
            };
          else if (typeof MessageChannel < 'u') {
            var Lt = new MessageChannel(),
              qt = Lt.port2;
            (Lt.port1.onmessage = Ut),
              (Gl = function () {
                qt.postMessage(null);
              });
          } else
            Gl = function () {
              cl(Ut, 0);
            };
          function jl(p, C) {
            wl = cl(function () {
              p(O.unstable_now());
            }, C);
          }
          (O.unstable_IdlePriority = 5),
            (O.unstable_ImmediatePriority = 1),
            (O.unstable_LowPriority = 4),
            (O.unstable_NormalPriority = 3),
            (O.unstable_Profiling = null),
            (O.unstable_UserBlockingPriority = 2),
            (O.unstable_cancelCallback = function (p) {
              p.callback = null;
            }),
            (O.unstable_forceFrameRate = function (p) {
              0 > p || 125 < p
                ? console.error(
                    'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                  )
                : (tt = 0 < p ? Math.floor(1e3 / p) : 5);
            }),
            (O.unstable_getCurrentPriorityLevel = function () {
              return x;
            }),
            (O.unstable_next = function (p) {
              switch (x) {
                case 1:
                case 2:
                case 3:
                  var C = 3;
                  break;
                default:
                  C = x;
              }
              var W = x;
              x = C;
              try {
                return p();
              } finally {
                x = W;
              }
            }),
            (O.unstable_requestPaint = function () {
              L = !0;
            }),
            (O.unstable_runWithPriority = function (p, C) {
              switch (p) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                  break;
                default:
                  p = 3;
              }
              var W = x;
              x = p;
              try {
                return C();
              } finally {
                x = W;
              }
            }),
            (O.unstable_scheduleCallback = function (p, C, W) {
              var hl = O.unstable_now();
              switch (
                (typeof W == 'object' && W !== null
                  ? ((W = W.delay),
                    (W = typeof W == 'number' && 0 < W ? hl + W : hl))
                  : (W = hl),
                p)
              ) {
                case 1:
                  var i = -1;
                  break;
                case 2:
                  i = 250;
                  break;
                case 5:
                  i = 1073741823;
                  break;
                case 4:
                  i = 1e4;
                  break;
                default:
                  i = 5e3;
              }
              return (
                (i = W + i),
                (p = {
                  id: U++,
                  callback: C,
                  priorityLevel: p,
                  startTime: W,
                  expirationTime: i,
                  sortIndex: -1,
                }),
                W > hl
                  ? ((p.sortIndex = W),
                    B(b, p),
                    Q(z) === null &&
                      p === Q(b) &&
                      (R ? (sl(wl), (wl = -1)) : (R = !0),
                      jl(fl, W - hl)))
                  : ((p.sortIndex = i),
                    B(z, p),
                    j || N || ((j = !0), Ul || ((Ul = !0), Gl()))),
                p
              );
            }),
            (O.unstable_shouldYield = na),
            (O.unstable_wrapCallback = function (p) {
              var C = x;
              return function () {
                var W = x;
                x = C;
                try {
                  return p.apply(this, arguments);
                } finally {
                  x = W;
                }
              };
            });
        })(Si)),
      Si
    );
  }
  var md;
  function Kv() {
    return md || ((md = 1), (bi.exports = wv())), bi.exports;
  }
  var pi = { exports: {} },
    Il = {};
  /**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var gd;
  function Jv() {
    if (gd) return Il;
    gd = 1;
    var O = Be();
    function B(z) {
      var b = 'https://react.dev/errors/' + z;
      if (1 < arguments.length) {
        b += '?args[]=' + encodeURIComponent(arguments[1]);
        for (var U = 2; U < arguments.length; U++)
          b += '&args[]=' + encodeURIComponent(arguments[U]);
      }
      return (
        'Minified React error #' +
        z +
        '; visit ' +
        b +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
      );
    }
    function Q() {}
    var d = {
        d: {
          f: Q,
          r: function () {
            throw Error(B(522));
          },
          D: Q,
          C: Q,
          L: Q,
          m: Q,
          X: Q,
          S: Q,
          M: Q,
        },
        p: 0,
        findDOMNode: null,
      },
      Y = Symbol.for('react.portal');
    function G(z, b, U) {
      var S =
        3 < arguments.length && arguments[3] !== void 0
          ? arguments[3]
          : null;
      return {
        $$typeof: Y,
        key: S == null ? null : '' + S,
        children: z,
        containerInfo: b,
        implementation: U,
      };
    }
    var q =
      O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function Z(z, b) {
      if (z === 'font') return '';
      if (typeof b == 'string')
        return b === 'use-credentials' ? b : '';
    }
    return (
      (Il.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
        d),
      (Il.createPortal = function (z, b) {
        var U =
          2 < arguments.length && arguments[2] !== void 0
            ? arguments[2]
            : null;
        if (
          !b ||
          (b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11)
        )
          throw Error(B(299));
        return G(z, b, null, U);
      }),
      (Il.flushSync = function (z) {
        var b = q.T,
          U = d.p;
        try {
          if (((q.T = null), (d.p = 2), z)) return z();
        } finally {
          (q.T = b), (d.p = U), d.d.f();
        }
      }),
      (Il.preconnect = function (z, b) {
        typeof z == 'string' &&
          (b
            ? ((b = b.crossOrigin),
              (b =
                typeof b == 'string'
                  ? b === 'use-credentials'
                    ? b
                    : ''
                  : void 0))
            : (b = null),
          d.d.C(z, b));
      }),
      (Il.prefetchDNS = function (z) {
        typeof z == 'string' && d.d.D(z);
      }),
      (Il.preinit = function (z, b) {
        if (typeof z == 'string' && b && typeof b.as == 'string') {
          var U = b.as,
            S = Z(U, b.crossOrigin),
            x = typeof b.integrity == 'string' ? b.integrity : void 0,
            N =
              typeof b.fetchPriority == 'string'
                ? b.fetchPriority
                : void 0;
          U === 'style'
            ? d.d.S(
                z,
                typeof b.precedence == 'string'
                  ? b.precedence
                  : void 0,
                { crossOrigin: S, integrity: x, fetchPriority: N }
              )
            : U === 'script' &&
              d.d.X(z, {
                crossOrigin: S,
                integrity: x,
                fetchPriority: N,
                nonce: typeof b.nonce == 'string' ? b.nonce : void 0,
              });
        }
      }),
      (Il.preinitModule = function (z, b) {
        if (typeof z == 'string')
          if (typeof b == 'object' && b !== null) {
            if (b.as == null || b.as === 'script') {
              var U = Z(b.as, b.crossOrigin);
              d.d.M(z, {
                crossOrigin: U,
                integrity:
                  typeof b.integrity == 'string'
                    ? b.integrity
                    : void 0,
                nonce: typeof b.nonce == 'string' ? b.nonce : void 0,
              });
            }
          } else b == null && d.d.M(z);
      }),
      (Il.preload = function (z, b) {
        if (
          typeof z == 'string' &&
          typeof b == 'object' &&
          b !== null &&
          typeof b.as == 'string'
        ) {
          var U = b.as,
            S = Z(U, b.crossOrigin);
          d.d.L(z, U, {
            crossOrigin: S,
            integrity:
              typeof b.integrity == 'string' ? b.integrity : void 0,
            nonce: typeof b.nonce == 'string' ? b.nonce : void 0,
            type: typeof b.type == 'string' ? b.type : void 0,
            fetchPriority:
              typeof b.fetchPriority == 'string'
                ? b.fetchPriority
                : void 0,
            referrerPolicy:
              typeof b.referrerPolicy == 'string'
                ? b.referrerPolicy
                : void 0,
            imageSrcSet:
              typeof b.imageSrcSet == 'string'
                ? b.imageSrcSet
                : void 0,
            imageSizes:
              typeof b.imageSizes == 'string' ? b.imageSizes : void 0,
            media: typeof b.media == 'string' ? b.media : void 0,
          });
        }
      }),
      (Il.preloadModule = function (z, b) {
        if (typeof z == 'string')
          if (b) {
            var U = Z(b.as, b.crossOrigin);
            d.d.m(z, {
              as:
                typeof b.as == 'string' && b.as !== 'script'
                  ? b.as
                  : void 0,
              crossOrigin: U,
              integrity:
                typeof b.integrity == 'string' ? b.integrity : void 0,
            });
          } else d.d.m(z);
      }),
      (Il.requestFormReset = function (z) {
        d.d.r(z);
      }),
      (Il.unstable_batchedUpdates = function (z, b) {
        return z(b);
      }),
      (Il.useFormState = function (z, b, U) {
        return q.H.useFormState(z, b, U);
      }),
      (Il.useFormStatus = function () {
        return q.H.useHostTransitionStatus();
      }),
      (Il.version = '19.1.0'),
      Il
    );
  }
  var bd;
  function Wv() {
    if (bd) return pi.exports;
    bd = 1;
    function O() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
        } catch (B) {
          console.error(B);
        }
    }
    return O(), (pi.exports = Jv()), pi.exports;
  }
  /**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Sd;
  function kv() {
    if (Sd) return qu;
    Sd = 1;
    var O = Kv(),
      B = Be(),
      Q = Wv();
    function d(l) {
      var t = 'https://react.dev/errors/' + l;
      if (1 < arguments.length) {
        t += '?args[]=' + encodeURIComponent(arguments[1]);
        for (var a = 2; a < arguments.length; a++)
          t += '&args[]=' + encodeURIComponent(arguments[a]);
      }
      return (
        'Minified React error #' +
        l +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
      );
    }
    function Y(l) {
      return !(
        !l ||
        (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
      );
    }
    function G(l) {
      var t = l,
        a = l;
      if (l.alternate) for (; t.return; ) t = t.return;
      else {
        l = t;
        do
          (t = l),
            (t.flags & 4098) !== 0 && (a = t.return),
            (l = t.return);
        while (l);
      }
      return t.tag === 3 ? a : null;
    }
    function q(l) {
      if (l.tag === 13) {
        var t = l.memoizedState;
        if (
          (t === null &&
            ((l = l.alternate), l !== null && (t = l.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function Z(l) {
      if (G(l) !== l) throw Error(d(188));
    }
    function z(l) {
      var t = l.alternate;
      if (!t) {
        if (((t = G(l)), t === null)) throw Error(d(188));
        return t !== l ? null : l;
      }
      for (var a = l, e = t; ; ) {
        var u = a.return;
        if (u === null) break;
        var n = u.alternate;
        if (n === null) {
          if (((e = u.return), e !== null)) {
            a = e;
            continue;
          }
          break;
        }
        if (u.child === n.child) {
          for (n = u.child; n; ) {
            if (n === a) return Z(u), l;
            if (n === e) return Z(u), t;
            n = n.sibling;
          }
          throw Error(d(188));
        }
        if (a.return !== e.return) (a = u), (e = n);
        else {
          for (var c = !1, f = u.child; f; ) {
            if (f === a) {
              (c = !0), (a = u), (e = n);
              break;
            }
            if (f === e) {
              (c = !0), (e = u), (a = n);
              break;
            }
            f = f.sibling;
          }
          if (!c) {
            for (f = n.child; f; ) {
              if (f === a) {
                (c = !0), (a = n), (e = u);
                break;
              }
              if (f === e) {
                (c = !0), (e = n), (a = u);
                break;
              }
              f = f.sibling;
            }
            if (!c) throw Error(d(189));
          }
        }
        if (a.alternate !== e) throw Error(d(190));
      }
      if (a.tag !== 3) throw Error(d(188));
      return a.stateNode.current === a ? l : t;
    }
    function b(l) {
      var t = l.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return l;
      for (l = l.child; l !== null; ) {
        if (((t = b(l)), t !== null)) return t;
        l = l.sibling;
      }
      return null;
    }
    var U = Object.assign,
      S = Symbol.for('react.element'),
      x = Symbol.for('react.transitional.element'),
      N = Symbol.for('react.portal'),
      j = Symbol.for('react.fragment'),
      R = Symbol.for('react.strict_mode'),
      L = Symbol.for('react.profiler'),
      cl = Symbol.for('react.provider'),
      sl = Symbol.for('react.consumer'),
      al = Symbol.for('react.context'),
      Tl = Symbol.for('react.forward_ref'),
      fl = Symbol.for('react.suspense'),
      Ul = Symbol.for('react.suspense_list'),
      wl = Symbol.for('react.memo'),
      tt = Symbol.for('react.lazy'),
      St = Symbol.for('react.activity'),
      na = Symbol.for('react.memo_cache_sentinel'),
      Ut = Symbol.iterator;
    function Gl(l) {
      return l === null || typeof l != 'object'
        ? null
        : ((l = (Ut && l[Ut]) || l['@@iterator']),
          typeof l == 'function' ? l : null);
    }
    var Lt = Symbol.for('react.client.reference');
    function qt(l) {
      if (l == null) return null;
      if (typeof l == 'function')
        return l.$$typeof === Lt
          ? null
          : l.displayName || l.name || null;
      if (typeof l == 'string') return l;
      switch (l) {
        case j:
          return 'Fragment';
        case L:
          return 'Profiler';
        case R:
          return 'StrictMode';
        case fl:
          return 'Suspense';
        case Ul:
          return 'SuspenseList';
        case St:
          return 'Activity';
      }
      if (typeof l == 'object')
        switch (l.$$typeof) {
          case N:
            return 'Portal';
          case al:
            return (l.displayName || 'Context') + '.Provider';
          case sl:
            return (
              (l._context.displayName || 'Context') + '.Consumer'
            );
          case Tl:
            var t = l.render;
            return (
              (l = l.displayName),
              l ||
                ((l = t.displayName || t.name || ''),
                (l =
                  l !== '' ? 'ForwardRef(' + l + ')' : 'ForwardRef')),
              l
            );
          case wl:
            return (
              (t = l.displayName || null),
              t !== null ? t : qt(l.type) || 'Memo'
            );
          case tt:
            (t = l._payload), (l = l._init);
            try {
              return qt(l(t));
            } catch {}
        }
      return null;
    }
    var jl = Array.isArray,
      p =
        B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      C =
        Q.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      W = { pending: !1, data: null, method: null, action: null },
      hl = [],
      i = -1;
    function r(l) {
      return { current: l };
    }
    function E(l) {
      0 > i || ((l.current = hl[i]), (hl[i] = null), i--);
    }
    function _(l, t) {
      i++, (hl[i] = l.current), (l.current = t);
    }
    var D = r(null),
      X = r(null),
      H = r(null),
      w = r(null);
    function K(l, t) {
      switch ((_(H, t), _(X, l), _(D, null), t.nodeType)) {
        case 9:
        case 11:
          l =
            (l = t.documentElement) && (l = l.namespaceURI)
              ? Go(l)
              : 0;
          break;
        default:
          if (((l = t.tagName), (t = t.namespaceURI)))
            (t = Go(t)), (l = Xo(t, l));
          else
            switch (l) {
              case 'svg':
                l = 1;
                break;
              case 'math':
                l = 2;
                break;
              default:
                l = 0;
            }
      }
      E(D), _(D, l);
    }
    function il() {
      E(D), E(X), E(H);
    }
    function El(l) {
      l.memoizedState !== null && _(w, l);
      var t = D.current,
        a = Xo(t, l.type);
      t !== a && (_(X, l), _(D, a));
    }
    function vl(l) {
      X.current === l && (E(D), E(X)),
        w.current === l && (E(w), (Ru._currentValue = W));
    }
    var _l = Object.prototype.hasOwnProperty,
      xl = O.unstable_scheduleCallback,
      el = O.unstable_cancelCallback,
      kl = O.unstable_shouldYield,
      st = O.unstable_requestPaint,
      zl = O.unstable_now,
      xt = O.unstable_getCurrentPriorityLevel,
      Bt = O.unstable_ImmediatePriority,
      ot = O.unstable_UserBlockingPriority,
      ka = O.unstable_NormalPriority,
      lc = O.unstable_LowPriority,
      Cu = O.unstable_IdlePriority,
      Yu = O.log,
      tc = O.unstable_setDisableYieldValue,
      ca = null,
      at = null;
    function Ct(l) {
      if (
        (typeof Yu == 'function' && tc(l),
        at && typeof at.setStrictMode == 'function')
      )
        try {
          at.setStrictMode(ca, l);
        } catch {}
    }
    var $l = Math.clz32 ? Math.clz32 : ac,
      Gu = Math.log,
      Ce = Math.LN2;
    function ac(l) {
      return (l >>>= 0), l === 0 ? 32 : (31 - ((Gu(l) / Ce) | 0)) | 0;
    }
    var $a = 256,
      Xu = 4194304;
    function xa(l) {
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
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return l & 4194048;
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
          return l;
      }
    }
    function Qu(l, t, a) {
      var e = l.pendingLanes;
      if (e === 0) return 0;
      var u = 0,
        n = l.suspendedLanes,
        c = l.pingedLanes;
      l = l.warmLanes;
      var f = e & 134217727;
      return (
        f !== 0
          ? ((e = f & ~n),
            e !== 0
              ? (u = xa(e))
              : ((c &= f),
                c !== 0
                  ? (u = xa(c))
                  : a || ((a = f & ~l), a !== 0 && (u = xa(a)))))
          : ((f = e & ~n),
            f !== 0
              ? (u = xa(f))
              : c !== 0
              ? (u = xa(c))
              : a || ((a = e & ~l), a !== 0 && (u = xa(a)))),
        u === 0
          ? 0
          : t !== 0 &&
            t !== u &&
            (t & n) === 0 &&
            ((n = u & -u),
            (a = t & -t),
            n >= a || (n === 32 && (a & 4194048) !== 0))
          ? t
          : u
      );
    }
    function Ye(l, t) {
      return (
        (l.pendingLanes &
          ~(l.suspendedLanes & ~l.pingedLanes) &
          t) ===
        0
      );
    }
    function Ad(l, t) {
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
          return -1;
      }
    }
    function Ti() {
      var l = $a;
      return ($a <<= 1), ($a & 4194048) === 0 && ($a = 256), l;
    }
    function Ei() {
      var l = Xu;
      return (Xu <<= 1), (Xu & 62914560) === 0 && (Xu = 4194304), l;
    }
    function ec(l) {
      for (var t = [], a = 0; 31 > a; a++) t.push(l);
      return t;
    }
    function Ge(l, t) {
      (l.pendingLanes |= t),
        t !== 268435456 &&
          ((l.suspendedLanes = 0),
          (l.pingedLanes = 0),
          (l.warmLanes = 0));
    }
    function zd(l, t, a, e, u, n) {
      var c = l.pendingLanes;
      (l.pendingLanes = a),
        (l.suspendedLanes = 0),
        (l.pingedLanes = 0),
        (l.warmLanes = 0),
        (l.expiredLanes &= a),
        (l.entangledLanes &= a),
        (l.errorRecoveryDisabledLanes &= a),
        (l.shellSuspendCounter = 0);
      var f = l.entanglements,
        s = l.expirationTimes,
        y = l.hiddenUpdates;
      for (a = c & ~a; 0 < a; ) {
        var T = 31 - $l(a),
          A = 1 << T;
        (f[T] = 0), (s[T] = -1);
        var m = y[T];
        if (m !== null)
          for (y[T] = null, T = 0; T < m.length; T++) {
            var g = m[T];
            g !== null && (g.lane &= -536870913);
          }
        a &= ~A;
      }
      e !== 0 && _i(l, e, 0),
        n !== 0 &&
          u === 0 &&
          l.tag !== 0 &&
          (l.suspendedLanes |= n & ~(c & ~t));
    }
    function _i(l, t, a) {
      (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
      var e = 31 - $l(t);
      (l.entangledLanes |= t),
        (l.entanglements[e] =
          l.entanglements[e] | 1073741824 | (a & 4194090));
    }
    function Mi(l, t) {
      var a = (l.entangledLanes |= t);
      for (l = l.entanglements; a; ) {
        var e = 31 - $l(a),
          u = 1 << e;
        (u & t) | (l[e] & t) && (l[e] |= t), (a &= ~u);
      }
    }
    function uc(l) {
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
          l = 0;
      }
      return l;
    }
    function nc(l) {
      return (
        (l &= -l),
        2 < l
          ? 8 < l
            ? (l & 134217727) !== 0
              ? 32
              : 268435456
            : 8
          : 2
      );
    }
    function Oi() {
      var l = C.p;
      return l !== 0
        ? l
        : ((l = window.event), l === void 0 ? 32 : nd(l.type));
    }
    function Dd(l, t) {
      var a = C.p;
      try {
        return (C.p = l), t();
      } finally {
        C.p = a;
      }
    }
    var fa = Math.random().toString(36).slice(2),
      Fl = '__reactFiber$' + fa,
      ut = '__reactProps$' + fa,
      Fa = '__reactContainer$' + fa,
      cc = '__reactEvents$' + fa,
      Rd = '__reactListeners$' + fa,
      Ud = '__reactHandles$' + fa,
      Ai = '__reactResources$' + fa,
      Xe = '__reactMarker$' + fa;
    function fc(l) {
      delete l[Fl],
        delete l[ut],
        delete l[cc],
        delete l[Rd],
        delete l[Ud];
    }
    function Pa(l) {
      var t = l[Fl];
      if (t) return t;
      for (var a = l.parentNode; a; ) {
        if ((t = a[Fa] || a[Fl])) {
          if (
            ((a = t.alternate),
            t.child !== null || (a !== null && a.child !== null))
          )
            for (l = Vo(l); l !== null; ) {
              if ((a = l[Fl])) return a;
              l = Vo(l);
            }
          return t;
        }
        (l = a), (a = l.parentNode);
      }
      return null;
    }
    function Ia(l) {
      if ((l = l[Fl] || l[Fa])) {
        var t = l.tag;
        if (
          t === 5 ||
          t === 6 ||
          t === 13 ||
          t === 26 ||
          t === 27 ||
          t === 3
        )
          return l;
      }
      return null;
    }
    function Qe(l) {
      var t = l.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return l.stateNode;
      throw Error(d(33));
    }
    function le(l) {
      var t = l[Ai];
      return (
        t ||
          (t = l[Ai] =
            {
              hoistableStyles: new Map(),
              hoistableScripts: new Map(),
            }),
        t
      );
    }
    function Xl(l) {
      l[Xe] = !0;
    }
    var zi = new Set(),
      Di = {};
    function Na(l, t) {
      te(l, t), te(l + 'Capture', t);
    }
    function te(l, t) {
      for (Di[l] = t, l = 0; l < t.length; l++) zi.add(t[l]);
    }
    var xd = RegExp(
        '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
      ),
      Ri = {},
      Ui = {};
    function Nd(l) {
      return _l.call(Ui, l)
        ? !0
        : _l.call(Ri, l)
        ? !1
        : xd.test(l)
        ? (Ui[l] = !0)
        : ((Ri[l] = !0), !1);
    }
    function Zu(l, t, a) {
      if (Nd(t))
        if (a === null) l.removeAttribute(t);
        else {
          switch (typeof a) {
            case 'undefined':
            case 'function':
            case 'symbol':
              l.removeAttribute(t);
              return;
            case 'boolean':
              var e = t.toLowerCase().slice(0, 5);
              if (e !== 'data-' && e !== 'aria-') {
                l.removeAttribute(t);
                return;
              }
          }
          l.setAttribute(t, '' + a);
        }
    }
    function Lu(l, t, a) {
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case 'undefined':
          case 'function':
          case 'symbol':
          case 'boolean':
            l.removeAttribute(t);
            return;
        }
        l.setAttribute(t, '' + a);
      }
    }
    function Vt(l, t, a, e) {
      if (e === null) l.removeAttribute(a);
      else {
        switch (typeof e) {
          case 'undefined':
          case 'function':
          case 'symbol':
          case 'boolean':
            l.removeAttribute(a);
            return;
        }
        l.setAttributeNS(t, a, '' + e);
      }
    }
    var ic, xi;
    function ae(l) {
      if (ic === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          (ic = (t && t[1]) || ''),
            (xi =
              -1 <
              a.stack.indexOf(`
    at`)
                ? ' (<anonymous>)'
                : -1 < a.stack.indexOf('@')
                ? '@unknown:0:0'
                : '');
        }
      return (
        `
` +
        ic +
        l +
        xi
      );
    }
    var rc = !1;
    function sc(l, t) {
      if (!l || rc) return '';
      rc = !0;
      var a = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var e = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var A = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(A.prototype, 'props', {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == 'object' && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(A, []);
                  } catch (g) {
                    var m = g;
                  }
                  Reflect.construct(l, [], A);
                } else {
                  try {
                    A.call();
                  } catch (g) {
                    m = g;
                  }
                  l.call(A.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (g) {
                  m = g;
                }
                (A = l()) &&
                  typeof A.catch == 'function' &&
                  A.catch(function () {});
              }
            } catch (g) {
              if (g && m && typeof g.stack == 'string')
                return [g.stack, m.stack];
            }
            return [null, null];
          },
        };
        e.DetermineComponentFrameRoot.displayName =
          'DetermineComponentFrameRoot';
        var u = Object.getOwnPropertyDescriptor(
          e.DetermineComponentFrameRoot,
          'name'
        );
        u &&
          u.configurable &&
          Object.defineProperty(
            e.DetermineComponentFrameRoot,
            'name',
            { value: 'DetermineComponentFrameRoot' }
          );
        var n = e.DetermineComponentFrameRoot(),
          c = n[0],
          f = n[1];
        if (c && f) {
          var s = c.split(`
`),
            y = f.split(`
`);
          for (
            u = e = 0;
            e < s.length &&
            !s[e].includes('DetermineComponentFrameRoot');

          )
            e++;
          for (
            ;
            u < y.length &&
            !y[u].includes('DetermineComponentFrameRoot');

          )
            u++;
          if (e === s.length || u === y.length)
            for (
              e = s.length - 1, u = y.length - 1;
              1 <= e && 0 <= u && s[e] !== y[u];

            )
              u--;
          for (; 1 <= e && 0 <= u; e--, u--)
            if (s[e] !== y[u]) {
              if (e !== 1 || u !== 1)
                do
                  if ((e--, u--, 0 > u || s[e] !== y[u])) {
                    var T =
                      `
` + s[e].replace(' at new ', ' at ');
                    return (
                      l.displayName &&
                        T.includes('<anonymous>') &&
                        (T = T.replace('<anonymous>', l.displayName)),
                      T
                    );
                  }
                while (1 <= e && 0 <= u);
              break;
            }
        }
      } finally {
        (rc = !1), (Error.prepareStackTrace = a);
      }
      return (a = l ? l.displayName || l.name : '') ? ae(a) : '';
    }
    function Hd(l) {
      switch (l.tag) {
        case 26:
        case 27:
        case 5:
          return ae(l.type);
        case 16:
          return ae('Lazy');
        case 13:
          return ae('Suspense');
        case 19:
          return ae('SuspenseList');
        case 0:
        case 15:
          return sc(l.type, !1);
        case 11:
          return sc(l.type.render, !1);
        case 1:
          return sc(l.type, !0);
        case 31:
          return ae('Activity');
        default:
          return '';
      }
    }
    function Ni(l) {
      try {
        var t = '';
        do (t += Hd(l)), (l = l.return);
        while (l);
        return t;
      } catch (a) {
        return (
          `
Error generating stack: ` +
          a.message +
          `
` +
          a.stack
        );
      }
    }
    function pt(l) {
      switch (typeof l) {
        case 'bigint':
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
          return l;
        case 'object':
          return l;
        default:
          return '';
      }
    }
    function Hi(l) {
      var t = l.type;
      return (
        (l = l.nodeName) &&
        l.toLowerCase() === 'input' &&
        (t === 'checkbox' || t === 'radio')
      );
    }
    function jd(l) {
      var t = Hi(l) ? 'checked' : 'value',
        a = Object.getOwnPropertyDescriptor(
          l.constructor.prototype,
          t
        ),
        e = '' + l[t];
      if (
        !l.hasOwnProperty(t) &&
        typeof a < 'u' &&
        typeof a.get == 'function' &&
        typeof a.set == 'function'
      ) {
        var u = a.get,
          n = a.set;
        return (
          Object.defineProperty(l, t, {
            configurable: !0,
            get: function () {
              return u.call(this);
            },
            set: function (c) {
              (e = '' + c), n.call(this, c);
            },
          }),
          Object.defineProperty(l, t, { enumerable: a.enumerable }),
          {
            getValue: function () {
              return e;
            },
            setValue: function (c) {
              e = '' + c;
            },
            stopTracking: function () {
              (l._valueTracker = null), delete l[t];
            },
          }
        );
      }
    }
    function Vu(l) {
      l._valueTracker || (l._valueTracker = jd(l));
    }
    function ji(l) {
      if (!l) return !1;
      var t = l._valueTracker;
      if (!t) return !0;
      var a = t.getValue(),
        e = '';
      return (
        l && (e = Hi(l) ? (l.checked ? 'true' : 'false') : l.value),
        (l = e),
        l !== a ? (t.setValue(l), !0) : !1
      );
    }
    function wu(l) {
      if (
        ((l = l || (typeof document < 'u' ? document : void 0)),
        typeof l > 'u')
      )
        return null;
      try {
        return l.activeElement || l.body;
      } catch {
        return l.body;
      }
    }
    var qd = /[\n"\\]/g;
    function Tt(l) {
      return l.replace(qd, function (t) {
        return '\\' + t.charCodeAt(0).toString(16) + ' ';
      });
    }
    function oc(l, t, a, e, u, n, c, f) {
      (l.name = ''),
        c != null &&
        typeof c != 'function' &&
        typeof c != 'symbol' &&
        typeof c != 'boolean'
          ? (l.type = c)
          : l.removeAttribute('type'),
        t != null
          ? c === 'number'
            ? ((t === 0 && l.value === '') || l.value != t) &&
              (l.value = '' + pt(t))
            : l.value !== '' + pt(t) && (l.value = '' + pt(t))
          : (c !== 'submit' && c !== 'reset') ||
            l.removeAttribute('value'),
        t != null
          ? dc(l, c, pt(t))
          : a != null
          ? dc(l, c, pt(a))
          : e != null && l.removeAttribute('value'),
        u == null && n != null && (l.defaultChecked = !!n),
        u != null &&
          (l.checked =
            u && typeof u != 'function' && typeof u != 'symbol'),
        f != null &&
        typeof f != 'function' &&
        typeof f != 'symbol' &&
        typeof f != 'boolean'
          ? (l.name = '' + pt(f))
          : l.removeAttribute('name');
    }
    function qi(l, t, a, e, u, n, c, f) {
      if (
        (n != null &&
          typeof n != 'function' &&
          typeof n != 'symbol' &&
          typeof n != 'boolean' &&
          (l.type = n),
        t != null || a != null)
      ) {
        if (!((n !== 'submit' && n !== 'reset') || t != null)) return;
        (a = a != null ? '' + pt(a) : ''),
          (t = t != null ? '' + pt(t) : a),
          f || t === l.value || (l.value = t),
          (l.defaultValue = t);
      }
      (e = e ?? u),
        (e = typeof e != 'function' && typeof e != 'symbol' && !!e),
        (l.checked = f ? l.checked : !!e),
        (l.defaultChecked = !!e),
        c != null &&
          typeof c != 'function' &&
          typeof c != 'symbol' &&
          typeof c != 'boolean' &&
          (l.name = c);
    }
    function dc(l, t, a) {
      (t === 'number' && wu(l.ownerDocument) === l) ||
        l.defaultValue === '' + a ||
        (l.defaultValue = '' + a);
    }
    function ee(l, t, a, e) {
      if (((l = l.options), t)) {
        t = {};
        for (var u = 0; u < a.length; u++) t['$' + a[u]] = !0;
        for (a = 0; a < l.length; a++)
          (u = t.hasOwnProperty('$' + l[a].value)),
            l[a].selected !== u && (l[a].selected = u),
            u && e && (l[a].defaultSelected = !0);
      } else {
        for (a = '' + pt(a), t = null, u = 0; u < l.length; u++) {
          if (l[u].value === a) {
            (l[u].selected = !0), e && (l[u].defaultSelected = !0);
            return;
          }
          t !== null || l[u].disabled || (t = l[u]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Bi(l, t, a) {
      if (
        t != null &&
        ((t = '' + pt(t)), t !== l.value && (l.value = t), a == null)
      ) {
        l.defaultValue !== t && (l.defaultValue = t);
        return;
      }
      l.defaultValue = a != null ? '' + pt(a) : '';
    }
    function Ci(l, t, a, e) {
      if (t == null) {
        if (e != null) {
          if (a != null) throw Error(d(92));
          if (jl(e)) {
            if (1 < e.length) throw Error(d(93));
            e = e[0];
          }
          a = e;
        }
        a == null && (a = ''), (t = a);
      }
      (a = pt(t)),
        (l.defaultValue = a),
        (e = l.textContent),
        e === a && e !== '' && e !== null && (l.value = e);
    }
    function ue(l, t) {
      if (t) {
        var a = l.firstChild;
        if (a && a === l.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      l.textContent = t;
    }
    var Bd = new Set(
      'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
        ' '
      )
    );
    function Yi(l, t, a) {
      var e = t.indexOf('--') === 0;
      a == null || typeof a == 'boolean' || a === ''
        ? e
          ? l.setProperty(t, '')
          : t === 'float'
          ? (l.cssFloat = '')
          : (l[t] = '')
        : e
        ? l.setProperty(t, a)
        : typeof a != 'number' || a === 0 || Bd.has(t)
        ? t === 'float'
          ? (l.cssFloat = a)
          : (l[t] = ('' + a).trim())
        : (l[t] = a + 'px');
    }
    function Gi(l, t, a) {
      if (t != null && typeof t != 'object') throw Error(d(62));
      if (((l = l.style), a != null)) {
        for (var e in a)
          !a.hasOwnProperty(e) ||
            (t != null && t.hasOwnProperty(e)) ||
            (e.indexOf('--') === 0
              ? l.setProperty(e, '')
              : e === 'float'
              ? (l.cssFloat = '')
              : (l[e] = ''));
        for (var u in t)
          (e = t[u]),
            t.hasOwnProperty(u) && a[u] !== e && Yi(l, u, e);
      } else for (var n in t) t.hasOwnProperty(n) && Yi(l, n, t[n]);
    }
    function vc(l) {
      if (l.indexOf('-') === -1) return !1;
      switch (l) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
          return !1;
        default:
          return !0;
      }
    }
    var Cd = new Map([
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
        [
          'glyphOrientationHorizontal',
          'glyph-orientation-horizontal',
        ],
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
      Yd =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Ku(l) {
      return Yd.test('' + l)
        ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
        : l;
    }
    var hc = null;
    function yc(l) {
      return (
        (l = l.target || l.srcElement || window),
        l.correspondingUseElement && (l = l.correspondingUseElement),
        l.nodeType === 3 ? l.parentNode : l
      );
    }
    var ne = null,
      ce = null;
    function Xi(l) {
      var t = Ia(l);
      if (t && (l = t.stateNode)) {
        var a = l[ut] || null;
        l: switch (((l = t.stateNode), t.type)) {
          case 'input':
            if (
              (oc(
                l,
                a.value,
                a.defaultValue,
                a.defaultValue,
                a.checked,
                a.defaultChecked,
                a.type,
                a.name
              ),
              (t = a.name),
              a.type === 'radio' && t != null)
            ) {
              for (a = l; a.parentNode; ) a = a.parentNode;
              for (
                a = a.querySelectorAll(
                  'input[name="' + Tt('' + t) + '"][type="radio"]'
                ),
                  t = 0;
                t < a.length;
                t++
              ) {
                var e = a[t];
                if (e !== l && e.form === l.form) {
                  var u = e[ut] || null;
                  if (!u) throw Error(d(90));
                  oc(
                    e,
                    u.value,
                    u.defaultValue,
                    u.defaultValue,
                    u.checked,
                    u.defaultChecked,
                    u.type,
                    u.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                (e = a[t]), e.form === l.form && ji(e);
            }
            break l;
          case 'textarea':
            Bi(l, a.value, a.defaultValue);
            break l;
          case 'select':
            (t = a.value), t != null && ee(l, !!a.multiple, t, !1);
        }
      }
    }
    var mc = !1;
    function Qi(l, t, a) {
      if (mc) return l(t, a);
      mc = !0;
      try {
        var e = l(t);
        return e;
      } finally {
        if (
          ((mc = !1),
          (ne !== null || ce !== null) &&
            (Nn(),
            ne && ((t = ne), (l = ce), (ce = ne = null), Xi(t), l)))
        )
          for (t = 0; t < l.length; t++) Xi(l[t]);
      }
    }
    function Ze(l, t) {
      var a = l.stateNode;
      if (a === null) return null;
      var e = a[ut] || null;
      if (e === null) return null;
      a = e[t];
      l: switch (t) {
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
          (e = !e.disabled) ||
            ((l = l.type),
            (e = !(
              l === 'button' ||
              l === 'input' ||
              l === 'select' ||
              l === 'textarea'
            ))),
            (l = !e);
          break l;
        default:
          l = !1;
      }
      if (l) return null;
      if (a && typeof a != 'function')
        throw Error(d(231, t, typeof a));
      return a;
    }
    var wt = !(
        typeof window > 'u' ||
        typeof window.document > 'u' ||
        typeof window.document.createElement > 'u'
      ),
      gc = !1;
    if (wt)
      try {
        var Le = {};
        Object.defineProperty(Le, 'passive', {
          get: function () {
            gc = !0;
          },
        }),
          window.addEventListener('test', Le, Le),
          window.removeEventListener('test', Le, Le);
      } catch {
        gc = !1;
      }
    var ia = null,
      bc = null,
      Ju = null;
    function Zi() {
      if (Ju) return Ju;
      var l,
        t = bc,
        a = t.length,
        e,
        u = 'value' in ia ? ia.value : ia.textContent,
        n = u.length;
      for (l = 0; l < a && t[l] === u[l]; l++);
      var c = a - l;
      for (e = 1; e <= c && t[a - e] === u[n - e]; e++);
      return (Ju = u.slice(l, 1 < e ? 1 - e : void 0));
    }
    function Wu(l) {
      var t = l.keyCode;
      return (
        'charCode' in l
          ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
          : (l = t),
        l === 10 && (l = 13),
        32 <= l || l === 13 ? l : 0
      );
    }
    function ku() {
      return !0;
    }
    function Li() {
      return !1;
    }
    function nt(l) {
      function t(a, e, u, n, c) {
        (this._reactName = a),
          (this._targetInst = u),
          (this.type = e),
          (this.nativeEvent = n),
          (this.target = c),
          (this.currentTarget = null);
        for (var f in l)
          l.hasOwnProperty(f) &&
            ((a = l[f]), (this[f] = a ? a(n) : n[f]));
        return (
          (this.isDefaultPrevented = (
            n.defaultPrevented != null
              ? n.defaultPrevented
              : n.returnValue === !1
          )
            ? ku
            : Li),
          (this.isPropagationStopped = Li),
          this
        );
      }
      return (
        U(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var a = this.nativeEvent;
            a &&
              (a.preventDefault
                ? a.preventDefault()
                : typeof a.returnValue != 'unknown' &&
                  (a.returnValue = !1),
              (this.isDefaultPrevented = ku));
          },
          stopPropagation: function () {
            var a = this.nativeEvent;
            a &&
              (a.stopPropagation
                ? a.stopPropagation()
                : typeof a.cancelBubble != 'unknown' &&
                  (a.cancelBubble = !0),
              (this.isPropagationStopped = ku));
          },
          persist: function () {},
          isPersistent: ku,
        }),
        t
      );
    }
    var Ha = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (l) {
          return l.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      $u = nt(Ha),
      Ve = U({}, Ha, { view: 0, detail: 0 }),
      Gd = nt(Ve),
      Sc,
      pc,
      we,
      Fu = U({}, Ve, {
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
        getModifierState: Ec,
        button: 0,
        buttons: 0,
        relatedTarget: function (l) {
          return l.relatedTarget === void 0
            ? l.fromElement === l.srcElement
              ? l.toElement
              : l.fromElement
            : l.relatedTarget;
        },
        movementX: function (l) {
          return 'movementX' in l
            ? l.movementX
            : (l !== we &&
                (we && l.type === 'mousemove'
                  ? ((Sc = l.screenX - we.screenX),
                    (pc = l.screenY - we.screenY))
                  : (pc = Sc = 0),
                (we = l)),
              Sc);
        },
        movementY: function (l) {
          return 'movementY' in l ? l.movementY : pc;
        },
      }),
      Vi = nt(Fu),
      Xd = U({}, Fu, { dataTransfer: 0 }),
      Qd = nt(Xd),
      Zd = U({}, Ve, { relatedTarget: 0 }),
      Tc = nt(Zd),
      Ld = U({}, Ha, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0,
      }),
      Vd = nt(Ld),
      wd = U({}, Ha, {
        clipboardData: function (l) {
          return 'clipboardData' in l
            ? l.clipboardData
            : window.clipboardData;
        },
      }),
      Kd = nt(wd),
      Jd = U({}, Ha, { data: 0 }),
      wi = nt(Jd),
      Wd = {
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
      kd = {
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
      $d = {
        Alt: 'altKey',
        Control: 'ctrlKey',
        Meta: 'metaKey',
        Shift: 'shiftKey',
      };
    function Fd(l) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(l)
        : (l = $d[l])
        ? !!t[l]
        : !1;
    }
    function Ec() {
      return Fd;
    }
    var Pd = U({}, Ve, {
        key: function (l) {
          if (l.key) {
            var t = Wd[l.key] || l.key;
            if (t !== 'Unidentified') return t;
          }
          return l.type === 'keypress'
            ? ((l = Wu(l)),
              l === 13 ? 'Enter' : String.fromCharCode(l))
            : l.type === 'keydown' || l.type === 'keyup'
            ? kd[l.keyCode] || 'Unidentified'
            : '';
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ec,
        charCode: function (l) {
          return l.type === 'keypress' ? Wu(l) : 0;
        },
        keyCode: function (l) {
          return l.type === 'keydown' || l.type === 'keyup'
            ? l.keyCode
            : 0;
        },
        which: function (l) {
          return l.type === 'keypress'
            ? Wu(l)
            : l.type === 'keydown' || l.type === 'keyup'
            ? l.keyCode
            : 0;
        },
      }),
      Id = nt(Pd),
      l0 = U({}, Fu, {
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
      Ki = nt(l0),
      t0 = U({}, Ve, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ec,
      }),
      a0 = nt(t0),
      e0 = U({}, Ha, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0,
      }),
      u0 = nt(e0),
      n0 = U({}, Fu, {
        deltaX: function (l) {
          return 'deltaX' in l
            ? l.deltaX
            : 'wheelDeltaX' in l
            ? -l.wheelDeltaX
            : 0;
        },
        deltaY: function (l) {
          return 'deltaY' in l
            ? l.deltaY
            : 'wheelDeltaY' in l
            ? -l.wheelDeltaY
            : 'wheelDelta' in l
            ? -l.wheelDelta
            : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      c0 = nt(n0),
      f0 = U({}, Ha, { newState: 0, oldState: 0 }),
      i0 = nt(f0),
      r0 = [9, 13, 27, 32],
      _c = wt && 'CompositionEvent' in window,
      Ke = null;
    wt && 'documentMode' in document && (Ke = document.documentMode);
    var s0 = wt && 'TextEvent' in window && !Ke,
      Ji = wt && (!_c || (Ke && 8 < Ke && 11 >= Ke)),
      Wi = ' ',
      ki = !1;
    function $i(l, t) {
      switch (l) {
        case 'keyup':
          return r0.indexOf(t.keyCode) !== -1;
        case 'keydown':
          return t.keyCode !== 229;
        case 'keypress':
        case 'mousedown':
        case 'focusout':
          return !0;
        default:
          return !1;
      }
    }
    function Fi(l) {
      return (
        (l = l.detail),
        typeof l == 'object' && 'data' in l ? l.data : null
      );
    }
    var fe = !1;
    function o0(l, t) {
      switch (l) {
        case 'compositionend':
          return Fi(t);
        case 'keypress':
          return t.which !== 32 ? null : ((ki = !0), Wi);
        case 'textInput':
          return (l = t.data), l === Wi && ki ? null : l;
        default:
          return null;
      }
    }
    function d0(l, t) {
      if (fe)
        return l === 'compositionend' || (!_c && $i(l, t))
          ? ((l = Zi()), (Ju = bc = ia = null), (fe = !1), l)
          : null;
      switch (l) {
        case 'paste':
          return null;
        case 'keypress':
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case 'compositionend':
          return Ji && t.locale !== 'ko' ? null : t.data;
        default:
          return null;
      }
    }
    var v0 = {
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
    };
    function Pi(l) {
      var t = l && l.nodeName && l.nodeName.toLowerCase();
      return t === 'input' ? !!v0[l.type] : t === 'textarea';
    }
    function Ii(l, t, a, e) {
      ne ? (ce ? ce.push(e) : (ce = [e])) : (ne = e),
        (t = Yn(t, 'onChange')),
        0 < t.length &&
          ((a = new $u('onChange', 'change', null, a, e)),
          l.push({ event: a, listeners: t }));
    }
    var Je = null,
      We = null;
    function h0(l) {
      jo(l, 0);
    }
    function Pu(l) {
      var t = Qe(l);
      if (ji(t)) return l;
    }
    function lr(l, t) {
      if (l === 'change') return t;
    }
    var tr = !1;
    if (wt) {
      var Mc;
      if (wt) {
        var Oc = 'oninput' in document;
        if (!Oc) {
          var ar = document.createElement('div');
          ar.setAttribute('oninput', 'return;'),
            (Oc = typeof ar.oninput == 'function');
        }
        Mc = Oc;
      } else Mc = !1;
      tr =
        Mc && (!document.documentMode || 9 < document.documentMode);
    }
    function er() {
      Je &&
        (Je.detachEvent('onpropertychange', ur), (We = Je = null));
    }
    function ur(l) {
      if (l.propertyName === 'value' && Pu(We)) {
        var t = [];
        Ii(t, We, l, yc(l)), Qi(h0, t);
      }
    }
    function y0(l, t, a) {
      l === 'focusin'
        ? (er(),
          (Je = t),
          (We = a),
          Je.attachEvent('onpropertychange', ur))
        : l === 'focusout' && er();
    }
    function m0(l) {
      if (l === 'selectionchange' || l === 'keyup' || l === 'keydown')
        return Pu(We);
    }
    function g0(l, t) {
      if (l === 'click') return Pu(t);
    }
    function b0(l, t) {
      if (l === 'input' || l === 'change') return Pu(t);
    }
    function S0(l, t) {
      return (
        (l === t && (l !== 0 || 1 / l === 1 / t)) ||
        (l !== l && t !== t)
      );
    }
    var dt = typeof Object.is == 'function' ? Object.is : S0;
    function ke(l, t) {
      if (dt(l, t)) return !0;
      if (
        typeof l != 'object' ||
        l === null ||
        typeof t != 'object' ||
        t === null
      )
        return !1;
      var a = Object.keys(l),
        e = Object.keys(t);
      if (a.length !== e.length) return !1;
      for (e = 0; e < a.length; e++) {
        var u = a[e];
        if (!_l.call(t, u) || !dt(l[u], t[u])) return !1;
      }
      return !0;
    }
    function nr(l) {
      for (; l && l.firstChild; ) l = l.firstChild;
      return l;
    }
    function cr(l, t) {
      var a = nr(l);
      l = 0;
      for (var e; a; ) {
        if (a.nodeType === 3) {
          if (((e = l + a.textContent.length), l <= t && e >= t))
            return { node: a, offset: t - l };
          l = e;
        }
        l: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break l;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = nr(a);
      }
    }
    function fr(l, t) {
      return l && t
        ? l === t
          ? !0
          : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
          ? fr(l, t.parentNode)
          : 'contains' in l
          ? l.contains(t)
          : l.compareDocumentPosition
          ? !!(l.compareDocumentPosition(t) & 16)
          : !1
        : !1;
    }
    function ir(l) {
      l =
        l != null &&
        l.ownerDocument != null &&
        l.ownerDocument.defaultView != null
          ? l.ownerDocument.defaultView
          : window;
      for (
        var t = wu(l.document);
        t instanceof l.HTMLIFrameElement;

      ) {
        try {
          var a = typeof t.contentWindow.location.href == 'string';
        } catch {
          a = !1;
        }
        if (a) l = t.contentWindow;
        else break;
        t = wu(l.document);
      }
      return t;
    }
    function Ac(l) {
      var t = l && l.nodeName && l.nodeName.toLowerCase();
      return (
        t &&
        ((t === 'input' &&
          (l.type === 'text' ||
            l.type === 'search' ||
            l.type === 'tel' ||
            l.type === 'url' ||
            l.type === 'password')) ||
          t === 'textarea' ||
          l.contentEditable === 'true')
      );
    }
    var p0 =
        wt &&
        'documentMode' in document &&
        11 >= document.documentMode,
      ie = null,
      zc = null,
      $e = null,
      Dc = !1;
    function rr(l, t, a) {
      var e =
        a.window === a
          ? a.document
          : a.nodeType === 9
          ? a
          : a.ownerDocument;
      Dc ||
        ie == null ||
        ie !== wu(e) ||
        ((e = ie),
        'selectionStart' in e && Ac(e)
          ? (e = { start: e.selectionStart, end: e.selectionEnd })
          : ((e = (
              (e.ownerDocument && e.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (e = {
              anchorNode: e.anchorNode,
              anchorOffset: e.anchorOffset,
              focusNode: e.focusNode,
              focusOffset: e.focusOffset,
            })),
        ($e && ke($e, e)) ||
          (($e = e),
          (e = Yn(zc, 'onSelect')),
          0 < e.length &&
            ((t = new $u('onSelect', 'select', null, t, a)),
            l.push({ event: t, listeners: e }),
            (t.target = ie))));
    }
    function ja(l, t) {
      var a = {};
      return (
        (a[l.toLowerCase()] = t.toLowerCase()),
        (a['Webkit' + l] = 'webkit' + t),
        (a['Moz' + l] = 'moz' + t),
        a
      );
    }
    var re = {
        animationend: ja('Animation', 'AnimationEnd'),
        animationiteration: ja('Animation', 'AnimationIteration'),
        animationstart: ja('Animation', 'AnimationStart'),
        transitionrun: ja('Transition', 'TransitionRun'),
        transitionstart: ja('Transition', 'TransitionStart'),
        transitioncancel: ja('Transition', 'TransitionCancel'),
        transitionend: ja('Transition', 'TransitionEnd'),
      },
      Rc = {},
      sr = {};
    wt &&
      ((sr = document.createElement('div').style),
      'AnimationEvent' in window ||
        (delete re.animationend.animation,
        delete re.animationiteration.animation,
        delete re.animationstart.animation),
      'TransitionEvent' in window ||
        delete re.transitionend.transition);
    function qa(l) {
      if (Rc[l]) return Rc[l];
      if (!re[l]) return l;
      var t = re[l],
        a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in sr) return (Rc[l] = t[a]);
      return l;
    }
    var or = qa('animationend'),
      dr = qa('animationiteration'),
      vr = qa('animationstart'),
      T0 = qa('transitionrun'),
      E0 = qa('transitionstart'),
      _0 = qa('transitioncancel'),
      hr = qa('transitionend'),
      yr = new Map(),
      Uc =
        'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
          ' '
        );
    Uc.push('scrollEnd');
    function Nt(l, t) {
      yr.set(l, t), Na(t, [l]);
    }
    var mr = new WeakMap();
    function Et(l, t) {
      if (typeof l == 'object' && l !== null) {
        var a = mr.get(l);
        return a !== void 0
          ? a
          : ((t = { value: l, source: t, stack: Ni(t) }),
            mr.set(l, t),
            t);
      }
      return { value: l, source: t, stack: Ni(t) };
    }
    var _t = [],
      se = 0,
      xc = 0;
    function Iu() {
      for (var l = se, t = (xc = se = 0); t < l; ) {
        var a = _t[t];
        _t[t++] = null;
        var e = _t[t];
        _t[t++] = null;
        var u = _t[t];
        _t[t++] = null;
        var n = _t[t];
        if (((_t[t++] = null), e !== null && u !== null)) {
          var c = e.pending;
          c === null
            ? (u.next = u)
            : ((u.next = c.next), (c.next = u)),
            (e.pending = u);
        }
        n !== 0 && gr(a, u, n);
      }
    }
    function ln(l, t, a, e) {
      (_t[se++] = l),
        (_t[se++] = t),
        (_t[se++] = a),
        (_t[se++] = e),
        (xc |= e),
        (l.lanes |= e),
        (l = l.alternate),
        l !== null && (l.lanes |= e);
    }
    function Nc(l, t, a, e) {
      return ln(l, t, a, e), tn(l);
    }
    function oe(l, t) {
      return ln(l, null, null, t), tn(l);
    }
    function gr(l, t, a) {
      l.lanes |= a;
      var e = l.alternate;
      e !== null && (e.lanes |= a);
      for (var u = !1, n = l.return; n !== null; )
        (n.childLanes |= a),
          (e = n.alternate),
          e !== null && (e.childLanes |= a),
          n.tag === 22 &&
            ((l = n.stateNode),
            l === null || l._visibility & 1 || (u = !0)),
          (l = n),
          (n = n.return);
      return l.tag === 3
        ? ((n = l.stateNode),
          u &&
            t !== null &&
            ((u = 31 - $l(a)),
            (l = n.hiddenUpdates),
            (e = l[u]),
            e === null ? (l[u] = [t]) : e.push(t),
            (t.lane = a | 536870912)),
          n)
        : null;
    }
    function tn(l) {
      if (50 < Tu) throw ((Tu = 0), (Gf = null), Error(d(185)));
      for (var t = l.return; t !== null; ) (l = t), (t = l.return);
      return l.tag === 3 ? l.stateNode : null;
    }
    var de = {};
    function M0(l, t, a, e) {
      (this.tag = l),
        (this.key = a),
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
        (this.mode = e),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function vt(l, t, a, e) {
      return new M0(l, t, a, e);
    }
    function Hc(l) {
      return (l = l.prototype), !(!l || !l.isReactComponent);
    }
    function Kt(l, t) {
      var a = l.alternate;
      return (
        a === null
          ? ((a = vt(l.tag, t, l.key, l.mode)),
            (a.elementType = l.elementType),
            (a.type = l.type),
            (a.stateNode = l.stateNode),
            (a.alternate = l),
            (l.alternate = a))
          : ((a.pendingProps = t),
            (a.type = l.type),
            (a.flags = 0),
            (a.subtreeFlags = 0),
            (a.deletions = null)),
        (a.flags = l.flags & 65011712),
        (a.childLanes = l.childLanes),
        (a.lanes = l.lanes),
        (a.child = l.child),
        (a.memoizedProps = l.memoizedProps),
        (a.memoizedState = l.memoizedState),
        (a.updateQueue = l.updateQueue),
        (t = l.dependencies),
        (a.dependencies =
          t === null
            ? null
            : { lanes: t.lanes, firstContext: t.firstContext }),
        (a.sibling = l.sibling),
        (a.index = l.index),
        (a.ref = l.ref),
        (a.refCleanup = l.refCleanup),
        a
      );
    }
    function br(l, t) {
      l.flags &= 65011714;
      var a = l.alternate;
      return (
        a === null
          ? ((l.childLanes = 0),
            (l.lanes = t),
            (l.child = null),
            (l.subtreeFlags = 0),
            (l.memoizedProps = null),
            (l.memoizedState = null),
            (l.updateQueue = null),
            (l.dependencies = null),
            (l.stateNode = null))
          : ((l.childLanes = a.childLanes),
            (l.lanes = a.lanes),
            (l.child = a.child),
            (l.subtreeFlags = 0),
            (l.deletions = null),
            (l.memoizedProps = a.memoizedProps),
            (l.memoizedState = a.memoizedState),
            (l.updateQueue = a.updateQueue),
            (l.type = a.type),
            (t = a.dependencies),
            (l.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        l
      );
    }
    function an(l, t, a, e, u, n) {
      var c = 0;
      if (((e = l), typeof l == 'function')) Hc(l) && (c = 1);
      else if (typeof l == 'string')
        c = Av(l, a, D.current)
          ? 26
          : l === 'html' || l === 'head' || l === 'body'
          ? 27
          : 5;
      else
        l: switch (l) {
          case St:
            return (
              (l = vt(31, a, t, u)),
              (l.elementType = St),
              (l.lanes = n),
              l
            );
          case j:
            return Ba(a.children, u, n, t);
          case R:
            (c = 8), (u |= 24);
            break;
          case L:
            return (
              (l = vt(12, a, t, u | 2)),
              (l.elementType = L),
              (l.lanes = n),
              l
            );
          case fl:
            return (
              (l = vt(13, a, t, u)),
              (l.elementType = fl),
              (l.lanes = n),
              l
            );
          case Ul:
            return (
              (l = vt(19, a, t, u)),
              (l.elementType = Ul),
              (l.lanes = n),
              l
            );
          default:
            if (typeof l == 'object' && l !== null)
              switch (l.$$typeof) {
                case cl:
                case al:
                  c = 10;
                  break l;
                case sl:
                  c = 9;
                  break l;
                case Tl:
                  c = 11;
                  break l;
                case wl:
                  c = 14;
                  break l;
                case tt:
                  (c = 16), (e = null);
                  break l;
              }
            (c = 29),
              (a = Error(d(130, l === null ? 'null' : typeof l, ''))),
              (e = null);
        }
      return (
        (t = vt(c, a, t, u)),
        (t.elementType = l),
        (t.type = e),
        (t.lanes = n),
        t
      );
    }
    function Ba(l, t, a, e) {
      return (l = vt(7, l, e, t)), (l.lanes = a), l;
    }
    function jc(l, t, a) {
      return (l = vt(6, l, null, t)), (l.lanes = a), l;
    }
    function qc(l, t, a) {
      return (
        (t = vt(4, l.children !== null ? l.children : [], l.key, t)),
        (t.lanes = a),
        (t.stateNode = {
          containerInfo: l.containerInfo,
          pendingChildren: null,
          implementation: l.implementation,
        }),
        t
      );
    }
    var ve = [],
      he = 0,
      en = null,
      un = 0,
      Mt = [],
      Ot = 0,
      Ca = null,
      Jt = 1,
      Wt = '';
    function Ya(l, t) {
      (ve[he++] = un), (ve[he++] = en), (en = l), (un = t);
    }
    function Sr(l, t, a) {
      (Mt[Ot++] = Jt), (Mt[Ot++] = Wt), (Mt[Ot++] = Ca), (Ca = l);
      var e = Jt;
      l = Wt;
      var u = 32 - $l(e) - 1;
      (e &= ~(1 << u)), (a += 1);
      var n = 32 - $l(t) + u;
      if (30 < n) {
        var c = u - (u % 5);
        (n = (e & ((1 << c) - 1)).toString(32)),
          (e >>= c),
          (u -= c),
          (Jt = (1 << (32 - $l(t) + u)) | (a << u) | e),
          (Wt = n + l);
      } else (Jt = (1 << n) | (a << u) | e), (Wt = l);
    }
    function Bc(l) {
      l.return !== null && (Ya(l, 1), Sr(l, 1, 0));
    }
    function Cc(l) {
      for (; l === en; )
        (en = ve[--he]),
          (ve[he] = null),
          (un = ve[--he]),
          (ve[he] = null);
      for (; l === Ca; )
        (Ca = Mt[--Ot]),
          (Mt[Ot] = null),
          (Wt = Mt[--Ot]),
          (Mt[Ot] = null),
          (Jt = Mt[--Ot]),
          (Mt[Ot] = null);
    }
    var et = null,
      Dl = null,
      dl = !1,
      Ga = null,
      Yt = !1,
      Yc = Error(d(519));
    function Xa(l) {
      var t = Error(d(418, ''));
      throw (Ie(Et(t, l)), Yc);
    }
    function pr(l) {
      var t = l.stateNode,
        a = l.type,
        e = l.memoizedProps;
      switch (((t[Fl] = l), (t[ut] = e), a)) {
        case 'dialog':
          nl('cancel', t), nl('close', t);
          break;
        case 'iframe':
        case 'object':
        case 'embed':
          nl('load', t);
          break;
        case 'video':
        case 'audio':
          for (a = 0; a < _u.length; a++) nl(_u[a], t);
          break;
        case 'source':
          nl('error', t);
          break;
        case 'img':
        case 'image':
        case 'link':
          nl('error', t), nl('load', t);
          break;
        case 'details':
          nl('toggle', t);
          break;
        case 'input':
          nl('invalid', t),
            qi(
              t,
              e.value,
              e.defaultValue,
              e.checked,
              e.defaultChecked,
              e.type,
              e.name,
              !0
            ),
            Vu(t);
          break;
        case 'select':
          nl('invalid', t);
          break;
        case 'textarea':
          nl('invalid', t),
            Ci(t, e.value, e.defaultValue, e.children),
            Vu(t);
      }
      (a = e.children),
        (typeof a != 'string' &&
          typeof a != 'number' &&
          typeof a != 'bigint') ||
        t.textContent === '' + a ||
        e.suppressHydrationWarning === !0 ||
        Yo(t.textContent, a)
          ? (e.popover != null &&
              (nl('beforetoggle', t), nl('toggle', t)),
            e.onScroll != null && nl('scroll', t),
            e.onScrollEnd != null && nl('scrollend', t),
            e.onClick != null && (t.onclick = Gn),
            (t = !0))
          : (t = !1),
        t || Xa(l);
    }
    function Tr(l) {
      for (et = l.return; et; )
        switch (et.tag) {
          case 5:
          case 13:
            Yt = !1;
            return;
          case 27:
          case 3:
            Yt = !0;
            return;
          default:
            et = et.return;
        }
    }
    function Fe(l) {
      if (l !== et) return !1;
      if (!dl) return Tr(l), (dl = !0), !1;
      var t = l.tag,
        a;
      if (
        ((a = t !== 3 && t !== 27) &&
          ((a = t === 5) &&
            ((a = l.type),
            (a =
              !(a !== 'form' && a !== 'button') ||
              ti(l.type, l.memoizedProps))),
          (a = !a)),
        a && Dl && Xa(l),
        Tr(l),
        t === 13)
      ) {
        if (
          ((l = l.memoizedState),
          (l = l !== null ? l.dehydrated : null),
          !l)
        )
          throw Error(d(317));
        l: {
          for (l = l.nextSibling, t = 0; l; ) {
            if (l.nodeType === 8)
              if (((a = l.data), a === '/$')) {
                if (t === 0) {
                  Dl = jt(l.nextSibling);
                  break l;
                }
                t--;
              } else (a !== '$' && a !== '$!' && a !== '$?') || t++;
            l = l.nextSibling;
          }
          Dl = null;
        }
      } else
        t === 27
          ? ((t = Dl),
            Ma(l.type) ? ((l = ni), (ni = null), (Dl = l)) : (Dl = t))
          : (Dl = et ? jt(l.stateNode.nextSibling) : null);
      return !0;
    }
    function Pe() {
      (Dl = et = null), (dl = !1);
    }
    function Er() {
      var l = Ga;
      return (
        l !== null &&
          (it === null ? (it = l) : it.push.apply(it, l),
          (Ga = null)),
        l
      );
    }
    function Ie(l) {
      Ga === null ? (Ga = [l]) : Ga.push(l);
    }
    var Gc = r(null),
      Qa = null,
      kt = null;
    function ra(l, t, a) {
      _(Gc, t._currentValue), (t._currentValue = a);
    }
    function $t(l) {
      (l._currentValue = Gc.current), E(Gc);
    }
    function Xc(l, t, a) {
      for (; l !== null; ) {
        var e = l.alternate;
        if (
          ((l.childLanes & t) !== t
            ? ((l.childLanes |= t), e !== null && (e.childLanes |= t))
            : e !== null &&
              (e.childLanes & t) !== t &&
              (e.childLanes |= t),
          l === a)
        )
          break;
        l = l.return;
      }
    }
    function Qc(l, t, a, e) {
      var u = l.child;
      for (u !== null && (u.return = l); u !== null; ) {
        var n = u.dependencies;
        if (n !== null) {
          var c = u.child;
          n = n.firstContext;
          l: for (; n !== null; ) {
            var f = n;
            n = u;
            for (var s = 0; s < t.length; s++)
              if (f.context === t[s]) {
                (n.lanes |= a),
                  (f = n.alternate),
                  f !== null && (f.lanes |= a),
                  Xc(n.return, a, l),
                  e || (c = null);
                break l;
              }
            n = f.next;
          }
        } else if (u.tag === 18) {
          if (((c = u.return), c === null)) throw Error(d(341));
          (c.lanes |= a),
            (n = c.alternate),
            n !== null && (n.lanes |= a),
            Xc(c, a, l),
            (c = null);
        } else c = u.child;
        if (c !== null) c.return = u;
        else
          for (c = u; c !== null; ) {
            if (c === l) {
              c = null;
              break;
            }
            if (((u = c.sibling), u !== null)) {
              (u.return = c.return), (c = u);
              break;
            }
            c = c.return;
          }
        u = c;
      }
    }
    function lu(l, t, a, e) {
      l = null;
      for (var u = t, n = !1; u !== null; ) {
        if (!n) {
          if ((u.flags & 524288) !== 0) n = !0;
          else if ((u.flags & 262144) !== 0) break;
        }
        if (u.tag === 10) {
          var c = u.alternate;
          if (c === null) throw Error(d(387));
          if (((c = c.memoizedProps), c !== null)) {
            var f = u.type;
            dt(u.pendingProps.value, c.value) ||
              (l !== null ? l.push(f) : (l = [f]));
          }
        } else if (u === w.current) {
          if (((c = u.alternate), c === null)) throw Error(d(387));
          c.memoizedState.memoizedState !==
            u.memoizedState.memoizedState &&
            (l !== null ? l.push(Ru) : (l = [Ru]));
        }
        u = u.return;
      }
      l !== null && Qc(t, l, a, e), (t.flags |= 262144);
    }
    function nn(l) {
      for (l = l.firstContext; l !== null; ) {
        if (!dt(l.context._currentValue, l.memoizedValue)) return !0;
        l = l.next;
      }
      return !1;
    }
    function Za(l) {
      (Qa = l),
        (kt = null),
        (l = l.dependencies),
        l !== null && (l.firstContext = null);
    }
    function Pl(l) {
      return _r(Qa, l);
    }
    function cn(l, t) {
      return Qa === null && Za(l), _r(l, t);
    }
    function _r(l, t) {
      var a = t._currentValue;
      if (
        ((t = { context: t, memoizedValue: a, next: null }),
        kt === null)
      ) {
        if (l === null) throw Error(d(308));
        (kt = t),
          (l.dependencies = { lanes: 0, firstContext: t }),
          (l.flags |= 524288);
      } else kt = kt.next = t;
      return a;
    }
    var O0 =
        typeof AbortController < 'u'
          ? AbortController
          : function () {
              var l = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (a, e) {
                    l.push(e);
                  },
                });
              this.abort = function () {
                (t.aborted = !0),
                  l.forEach(function (a) {
                    return a();
                  });
              };
            },
      A0 = O.unstable_scheduleCallback,
      z0 = O.unstable_NormalPriority,
      Cl = {
        $$typeof: al,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function Zc() {
      return { controller: new O0(), data: new Map(), refCount: 0 };
    }
    function tu(l) {
      l.refCount--,
        l.refCount === 0 &&
          A0(z0, function () {
            l.controller.abort();
          });
    }
    var au = null,
      Lc = 0,
      ye = 0,
      me = null;
    function D0(l, t) {
      if (au === null) {
        var a = (au = []);
        (Lc = 0),
          (ye = Kf()),
          (me = {
            status: 'pending',
            value: void 0,
            then: function (e) {
              a.push(e);
            },
          });
      }
      return Lc++, t.then(Mr, Mr), t;
    }
    function Mr() {
      if (--Lc === 0 && au !== null) {
        me !== null && (me.status = 'fulfilled');
        var l = au;
        (au = null), (ye = 0), (me = null);
        for (var t = 0; t < l.length; t++) (0, l[t])();
      }
    }
    function R0(l, t) {
      var a = [],
        e = {
          status: 'pending',
          value: null,
          reason: null,
          then: function (u) {
            a.push(u);
          },
        };
      return (
        l.then(
          function () {
            (e.status = 'fulfilled'), (e.value = t);
            for (var u = 0; u < a.length; u++) (0, a[u])(t);
          },
          function (u) {
            for (
              e.status = 'rejected', e.reason = u, u = 0;
              u < a.length;
              u++
            )
              (0, a[u])(void 0);
          }
        ),
        e
      );
    }
    var Or = p.S;
    p.S = function (l, t) {
      typeof t == 'object' &&
        t !== null &&
        typeof t.then == 'function' &&
        D0(l, t),
        Or !== null && Or(l, t);
    };
    var La = r(null);
    function Vc() {
      var l = La.current;
      return l !== null ? l : Ml.pooledCache;
    }
    function fn(l, t) {
      t === null ? _(La, La.current) : _(La, t.pool);
    }
    function Ar() {
      var l = Vc();
      return l === null
        ? null
        : { parent: Cl._currentValue, pool: l };
    }
    var eu = Error(d(460)),
      zr = Error(d(474)),
      rn = Error(d(542)),
      wc = { then: function () {} };
    function Dr(l) {
      return (l = l.status), l === 'fulfilled' || l === 'rejected';
    }
    function sn() {}
    function Rr(l, t, a) {
      switch (
        ((a = l[a]),
        a === void 0
          ? l.push(t)
          : a !== t && (t.then(sn, sn), (t = a)),
        t.status)
      ) {
        case 'fulfilled':
          return t.value;
        case 'rejected':
          throw ((l = t.reason), xr(l), l);
        default:
          if (typeof t.status == 'string') t.then(sn, sn);
          else {
            if (((l = Ml), l !== null && 100 < l.shellSuspendCounter))
              throw Error(d(482));
            (l = t),
              (l.status = 'pending'),
              l.then(
                function (e) {
                  if (t.status === 'pending') {
                    var u = t;
                    (u.status = 'fulfilled'), (u.value = e);
                  }
                },
                function (e) {
                  if (t.status === 'pending') {
                    var u = t;
                    (u.status = 'rejected'), (u.reason = e);
                  }
                }
              );
          }
          switch (t.status) {
            case 'fulfilled':
              return t.value;
            case 'rejected':
              throw ((l = t.reason), xr(l), l);
          }
          throw ((uu = t), eu);
      }
    }
    var uu = null;
    function Ur() {
      if (uu === null) throw Error(d(459));
      var l = uu;
      return (uu = null), l;
    }
    function xr(l) {
      if (l === eu || l === rn) throw Error(d(483));
    }
    var sa = !1;
    function Kc(l) {
      l.updateQueue = {
        baseState: l.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function Jc(l, t) {
      (l = l.updateQueue),
        t.updateQueue === l &&
          (t.updateQueue = {
            baseState: l.baseState,
            firstBaseUpdate: l.firstBaseUpdate,
            lastBaseUpdate: l.lastBaseUpdate,
            shared: l.shared,
            callbacks: null,
          });
    }
    function oa(l) {
      return {
        lane: l,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function da(l, t, a) {
      var e = l.updateQueue;
      if (e === null) return null;
      if (((e = e.shared), (yl & 2) !== 0)) {
        var u = e.pending;
        return (
          u === null
            ? (t.next = t)
            : ((t.next = u.next), (u.next = t)),
          (e.pending = t),
          (t = tn(l)),
          gr(l, null, a),
          t
        );
      }
      return ln(l, e, t, a), tn(l);
    }
    function nu(l, t, a) {
      if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (a & 4194048) !== 0))
      ) {
        var e = t.lanes;
        (e &= l.pendingLanes), (a |= e), (t.lanes = a), Mi(l, a);
      }
    }
    function Wc(l, t) {
      var a = l.updateQueue,
        e = l.alternate;
      if (e !== null && ((e = e.updateQueue), a === e)) {
        var u = null,
          n = null;
        if (((a = a.firstBaseUpdate), a !== null)) {
          do {
            var c = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null,
            };
            n === null ? (u = n = c) : (n = n.next = c), (a = a.next);
          } while (a !== null);
          n === null ? (u = n = t) : (n = n.next = t);
        } else u = n = t;
        (a = {
          baseState: e.baseState,
          firstBaseUpdate: u,
          lastBaseUpdate: n,
          shared: e.shared,
          callbacks: e.callbacks,
        }),
          (l.updateQueue = a);
        return;
      }
      (l = a.lastBaseUpdate),
        l === null ? (a.firstBaseUpdate = t) : (l.next = t),
        (a.lastBaseUpdate = t);
    }
    var kc = !1;
    function cu() {
      if (kc) {
        var l = me;
        if (l !== null) throw l;
      }
    }
    function fu(l, t, a, e) {
      kc = !1;
      var u = l.updateQueue;
      sa = !1;
      var n = u.firstBaseUpdate,
        c = u.lastBaseUpdate,
        f = u.shared.pending;
      if (f !== null) {
        u.shared.pending = null;
        var s = f,
          y = s.next;
        (s.next = null), c === null ? (n = y) : (c.next = y), (c = s);
        var T = l.alternate;
        T !== null &&
          ((T = T.updateQueue),
          (f = T.lastBaseUpdate),
          f !== c &&
            (f === null ? (T.firstBaseUpdate = y) : (f.next = y),
            (T.lastBaseUpdate = s)));
      }
      if (n !== null) {
        var A = u.baseState;
        (c = 0), (T = y = s = null), (f = n);
        do {
          var m = f.lane & -536870913,
            g = m !== f.lane;
          if (g ? (rl & m) === m : (e & m) === m) {
            m !== 0 && m === ye && (kc = !0),
              T !== null &&
                (T = T.next =
                  {
                    lane: 0,
                    tag: f.tag,
                    payload: f.payload,
                    callback: null,
                    next: null,
                  });
            l: {
              var P = l,
                k = f;
              m = t;
              var Sl = a;
              switch (k.tag) {
                case 1:
                  if (((P = k.payload), typeof P == 'function')) {
                    A = P.call(Sl, A, m);
                    break l;
                  }
                  A = P;
                  break l;
                case 3:
                  P.flags = (P.flags & -65537) | 128;
                case 0:
                  if (
                    ((P = k.payload),
                    (m =
                      typeof P == 'function' ? P.call(Sl, A, m) : P),
                    m == null)
                  )
                    break l;
                  A = U({}, A, m);
                  break l;
                case 2:
                  sa = !0;
              }
            }
            (m = f.callback),
              m !== null &&
                ((l.flags |= 64),
                g && (l.flags |= 8192),
                (g = u.callbacks),
                g === null ? (u.callbacks = [m]) : g.push(m));
          } else
            (g = {
              lane: m,
              tag: f.tag,
              payload: f.payload,
              callback: f.callback,
              next: null,
            }),
              T === null ? ((y = T = g), (s = A)) : (T = T.next = g),
              (c |= m);
          if (((f = f.next), f === null)) {
            if (((f = u.shared.pending), f === null)) break;
            (g = f),
              (f = g.next),
              (g.next = null),
              (u.lastBaseUpdate = g),
              (u.shared.pending = null);
          }
        } while (!0);
        T === null && (s = A),
          (u.baseState = s),
          (u.firstBaseUpdate = y),
          (u.lastBaseUpdate = T),
          n === null && (u.shared.lanes = 0),
          (pa |= c),
          (l.lanes = c),
          (l.memoizedState = A);
      }
    }
    function Nr(l, t) {
      if (typeof l != 'function') throw Error(d(191, l));
      l.call(t);
    }
    function Hr(l, t) {
      var a = l.callbacks;
      if (a !== null)
        for (l.callbacks = null, l = 0; l < a.length; l++)
          Nr(a[l], t);
    }
    var ge = r(null),
      on = r(0);
    function jr(l, t) {
      (l = ea), _(on, l), _(ge, t), (ea = l | t.baseLanes);
    }
    function $c() {
      _(on, ea), _(ge, ge.current);
    }
    function Fc() {
      (ea = on.current), E(ge), E(on);
    }
    var va = 0,
      ll = null,
      gl = null,
      ql = null,
      dn = !1,
      be = !1,
      Va = !1,
      vn = 0,
      iu = 0,
      Se = null,
      U0 = 0;
    function Nl() {
      throw Error(d(321));
    }
    function Pc(l, t) {
      if (t === null) return !1;
      for (var a = 0; a < t.length && a < l.length; a++)
        if (!dt(l[a], t[a])) return !1;
      return !0;
    }
    function Ic(l, t, a, e, u, n) {
      return (
        (va = n),
        (ll = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (p.H = l === null || l.memoizedState === null ? gs : bs),
        (Va = !1),
        (n = a(e, u)),
        (Va = !1),
        be && (n = Br(t, a, e, u)),
        qr(l),
        n
      );
    }
    function qr(l) {
      p.H = Sn;
      var t = gl !== null && gl.next !== null;
      if (
        ((va = 0),
        (ql = gl = ll = null),
        (dn = !1),
        (iu = 0),
        (Se = null),
        t)
      )
        throw Error(d(300));
      l === null ||
        Ql ||
        ((l = l.dependencies), l !== null && nn(l) && (Ql = !0));
    }
    function Br(l, t, a, e) {
      ll = l;
      var u = 0;
      do {
        if ((be && (Se = null), (iu = 0), (be = !1), 25 <= u))
          throw Error(d(301));
        if (((u += 1), (ql = gl = null), l.updateQueue != null)) {
          var n = l.updateQueue;
          (n.lastEffect = null),
            (n.events = null),
            (n.stores = null),
            n.memoCache != null && (n.memoCache.index = 0);
        }
        (p.H = C0), (n = t(a, e));
      } while (be);
      return n;
    }
    function x0() {
      var l = p.H,
        t = l.useState()[0];
      return (
        (t = typeof t.then == 'function' ? ru(t) : t),
        (l = l.useState()[0]),
        (gl !== null ? gl.memoizedState : null) !== l &&
          (ll.flags |= 1024),
        t
      );
    }
    function lf() {
      var l = vn !== 0;
      return (vn = 0), l;
    }
    function tf(l, t, a) {
      (t.updateQueue = l.updateQueue),
        (t.flags &= -2053),
        (l.lanes &= ~a);
    }
    function af(l) {
      if (dn) {
        for (l = l.memoizedState; l !== null; ) {
          var t = l.queue;
          t !== null && (t.pending = null), (l = l.next);
        }
        dn = !1;
      }
      (va = 0),
        (ql = gl = ll = null),
        (be = !1),
        (iu = vn = 0),
        (Se = null);
    }
    function ct() {
      var l = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (
        ql === null
          ? (ll.memoizedState = ql = l)
          : (ql = ql.next = l),
        ql
      );
    }
    function Bl() {
      if (gl === null) {
        var l = ll.alternate;
        l = l !== null ? l.memoizedState : null;
      } else l = gl.next;
      var t = ql === null ? ll.memoizedState : ql.next;
      if (t !== null) (ql = t), (gl = l);
      else {
        if (l === null)
          throw ll.alternate === null ? Error(d(467)) : Error(d(310));
        (gl = l),
          (l = {
            memoizedState: gl.memoizedState,
            baseState: gl.baseState,
            baseQueue: gl.baseQueue,
            queue: gl.queue,
            next: null,
          }),
          ql === null
            ? (ll.memoizedState = ql = l)
            : (ql = ql.next = l);
      }
      return ql;
    }
    function ef() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null,
      };
    }
    function ru(l) {
      var t = iu;
      return (
        (iu += 1),
        Se === null && (Se = []),
        (l = Rr(Se, l, t)),
        (t = ll),
        (ql === null ? t.memoizedState : ql.next) === null &&
          ((t = t.alternate),
          (p.H = t === null || t.memoizedState === null ? gs : bs)),
        l
      );
    }
    function hn(l) {
      if (l !== null && typeof l == 'object') {
        if (typeof l.then == 'function') return ru(l);
        if (l.$$typeof === al) return Pl(l);
      }
      throw Error(d(438, String(l)));
    }
    function uf(l) {
      var t = null,
        a = ll.updateQueue;
      if ((a !== null && (t = a.memoCache), t == null)) {
        var e = ll.alternate;
        e !== null &&
          ((e = e.updateQueue),
          e !== null &&
            ((e = e.memoCache),
            e != null &&
              (t = {
                data: e.data.map(function (u) {
                  return u.slice();
                }),
                index: 0,
              })));
      }
      if (
        (t == null && (t = { data: [], index: 0 }),
        a === null && ((a = ef()), (ll.updateQueue = a)),
        (a.memoCache = t),
        (a = t.data[t.index]),
        a === void 0)
      )
        for (a = t.data[t.index] = Array(l), e = 0; e < l; e++)
          a[e] = na;
      return t.index++, a;
    }
    function Ft(l, t) {
      return typeof t == 'function' ? t(l) : t;
    }
    function yn(l) {
      var t = Bl();
      return nf(t, gl, l);
    }
    function nf(l, t, a) {
      var e = l.queue;
      if (e === null) throw Error(d(311));
      e.lastRenderedReducer = a;
      var u = l.baseQueue,
        n = e.pending;
      if (n !== null) {
        if (u !== null) {
          var c = u.next;
          (u.next = n.next), (n.next = c);
        }
        (t.baseQueue = u = n), (e.pending = null);
      }
      if (((n = l.baseState), u === null)) l.memoizedState = n;
      else {
        t = u.next;
        var f = (c = null),
          s = null,
          y = t,
          T = !1;
        do {
          var A = y.lane & -536870913;
          if (A !== y.lane ? (rl & A) === A : (va & A) === A) {
            var m = y.revertLane;
            if (m === 0)
              s !== null &&
                (s = s.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    action: y.action,
                    hasEagerState: y.hasEagerState,
                    eagerState: y.eagerState,
                    next: null,
                  }),
                A === ye && (T = !0);
            else if ((va & m) === m) {
              (y = y.next), m === ye && (T = !0);
              continue;
            } else
              (A = {
                lane: 0,
                revertLane: y.revertLane,
                action: y.action,
                hasEagerState: y.hasEagerState,
                eagerState: y.eagerState,
                next: null,
              }),
                s === null
                  ? ((f = s = A), (c = n))
                  : (s = s.next = A),
                (ll.lanes |= m),
                (pa |= m);
            (A = y.action),
              Va && a(n, A),
              (n = y.hasEagerState ? y.eagerState : a(n, A));
          } else
            (m = {
              lane: A,
              revertLane: y.revertLane,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null,
            }),
              s === null ? ((f = s = m), (c = n)) : (s = s.next = m),
              (ll.lanes |= A),
              (pa |= A);
          y = y.next;
        } while (y !== null && y !== t);
        if (
          (s === null ? (c = n) : (s.next = f),
          !dt(n, l.memoizedState) &&
            ((Ql = !0), T && ((a = me), a !== null)))
        )
          throw a;
        (l.memoizedState = n),
          (l.baseState = c),
          (l.baseQueue = s),
          (e.lastRenderedState = n);
      }
      return (
        u === null && (e.lanes = 0), [l.memoizedState, e.dispatch]
      );
    }
    function cf(l) {
      var t = Bl(),
        a = t.queue;
      if (a === null) throw Error(d(311));
      a.lastRenderedReducer = l;
      var e = a.dispatch,
        u = a.pending,
        n = t.memoizedState;
      if (u !== null) {
        a.pending = null;
        var c = (u = u.next);
        do (n = l(n, c.action)), (c = c.next);
        while (c !== u);
        dt(n, t.memoizedState) || (Ql = !0),
          (t.memoizedState = n),
          t.baseQueue === null && (t.baseState = n),
          (a.lastRenderedState = n);
      }
      return [n, e];
    }
    function Cr(l, t, a) {
      var e = ll,
        u = Bl(),
        n = dl;
      if (n) {
        if (a === void 0) throw Error(d(407));
        a = a();
      } else a = t();
      var c = !dt((gl || u).memoizedState, a);
      c && ((u.memoizedState = a), (Ql = !0)), (u = u.queue);
      var f = Xr.bind(null, e, u, l);
      if (
        (su(2048, 8, f, [l]),
        u.getSnapshot !== t ||
          c ||
          (ql !== null && ql.memoizedState.tag & 1))
      ) {
        if (
          ((e.flags |= 2048),
          pe(9, mn(), Gr.bind(null, e, u, a, t), null),
          Ml === null)
        )
          throw Error(d(349));
        n || (va & 124) !== 0 || Yr(e, t, a);
      }
      return a;
    }
    function Yr(l, t, a) {
      (l.flags |= 16384),
        (l = { getSnapshot: t, value: a }),
        (t = ll.updateQueue),
        t === null
          ? ((t = ef()), (ll.updateQueue = t), (t.stores = [l]))
          : ((a = t.stores),
            a === null ? (t.stores = [l]) : a.push(l));
    }
    function Gr(l, t, a, e) {
      (t.value = a), (t.getSnapshot = e), Qr(t) && Zr(l);
    }
    function Xr(l, t, a) {
      return a(function () {
        Qr(t) && Zr(l);
      });
    }
    function Qr(l) {
      var t = l.getSnapshot;
      l = l.value;
      try {
        var a = t();
        return !dt(l, a);
      } catch {
        return !0;
      }
    }
    function Zr(l) {
      var t = oe(l, 2);
      t !== null && bt(t, l, 2);
    }
    function ff(l) {
      var t = ct();
      if (typeof l == 'function') {
        var a = l;
        if (((l = a()), Va)) {
          Ct(!0);
          try {
            a();
          } finally {
            Ct(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = l),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ft,
          lastRenderedState: l,
        }),
        t
      );
    }
    function Lr(l, t, a, e) {
      return (
        (l.baseState = a), nf(l, gl, typeof e == 'function' ? e : Ft)
      );
    }
    function N0(l, t, a, e, u) {
      if (bn(l)) throw Error(d(485));
      if (((l = t.action), l !== null)) {
        var n = {
          payload: u,
          action: l,
          next: null,
          isTransition: !0,
          status: 'pending',
          value: null,
          reason: null,
          listeners: [],
          then: function (c) {
            n.listeners.push(c);
          },
        };
        p.T !== null ? a(!0) : (n.isTransition = !1),
          e(n),
          (a = t.pending),
          a === null
            ? ((n.next = t.pending = n), Vr(t, n))
            : ((n.next = a.next), (t.pending = a.next = n));
      }
    }
    function Vr(l, t) {
      var a = t.action,
        e = t.payload,
        u = l.state;
      if (t.isTransition) {
        var n = p.T,
          c = {};
        p.T = c;
        try {
          var f = a(u, e),
            s = p.S;
          s !== null && s(c, f), wr(l, t, f);
        } catch (y) {
          rf(l, t, y);
        } finally {
          p.T = n;
        }
      } else
        try {
          (n = a(u, e)), wr(l, t, n);
        } catch (y) {
          rf(l, t, y);
        }
    }
    function wr(l, t, a) {
      a !== null &&
      typeof a == 'object' &&
      typeof a.then == 'function'
        ? a.then(
            function (e) {
              Kr(l, t, e);
            },
            function (e) {
              return rf(l, t, e);
            }
          )
        : Kr(l, t, a);
    }
    function Kr(l, t, a) {
      (t.status = 'fulfilled'),
        (t.value = a),
        Jr(t),
        (l.state = a),
        (t = l.pending),
        t !== null &&
          ((a = t.next),
          a === t
            ? (l.pending = null)
            : ((a = a.next), (t.next = a), Vr(l, a)));
    }
    function rf(l, t, a) {
      var e = l.pending;
      if (((l.pending = null), e !== null)) {
        e = e.next;
        do
          (t.status = 'rejected'),
            (t.reason = a),
            Jr(t),
            (t = t.next);
        while (t !== e);
      }
      l.action = null;
    }
    function Jr(l) {
      l = l.listeners;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
    function Wr(l, t) {
      return t;
    }
    function kr(l, t) {
      if (dl) {
        var a = Ml.formState;
        if (a !== null) {
          l: {
            var e = ll;
            if (dl) {
              if (Dl) {
                t: {
                  for (var u = Dl, n = Yt; u.nodeType !== 8; ) {
                    if (!n) {
                      u = null;
                      break t;
                    }
                    if (((u = jt(u.nextSibling)), u === null)) {
                      u = null;
                      break t;
                    }
                  }
                  (n = u.data),
                    (u = n === 'F!' || n === 'F' ? u : null);
                }
                if (u) {
                  (Dl = jt(u.nextSibling)), (e = u.data === 'F!');
                  break l;
                }
              }
              Xa(e);
            }
            e = !1;
          }
          e && (t = a[0]);
        }
      }
      return (
        (a = ct()),
        (a.memoizedState = a.baseState = t),
        (e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Wr,
          lastRenderedState: t,
        }),
        (a.queue = e),
        (a = hs.bind(null, ll, e)),
        (e.dispatch = a),
        (e = ff(!1)),
        (n = hf.bind(null, ll, !1, e.queue)),
        (e = ct()),
        (u = { state: t, dispatch: null, action: l, pending: null }),
        (e.queue = u),
        (a = N0.bind(null, ll, u, n, a)),
        (u.dispatch = a),
        (e.memoizedState = l),
        [t, a, !1]
      );
    }
    function $r(l) {
      var t = Bl();
      return Fr(t, gl, l);
    }
    function Fr(l, t, a) {
      if (
        ((t = nf(l, t, Wr)[0]),
        (l = yn(Ft)[0]),
        typeof t == 'object' &&
          t !== null &&
          typeof t.then == 'function')
      )
        try {
          var e = ru(t);
        } catch (c) {
          throw c === eu ? rn : c;
        }
      else e = t;
      t = Bl();
      var u = t.queue,
        n = u.dispatch;
      return (
        a !== t.memoizedState &&
          ((ll.flags |= 2048),
          pe(9, mn(), H0.bind(null, u, a), null)),
        [e, n, l]
      );
    }
    function H0(l, t) {
      l.action = t;
    }
    function Pr(l) {
      var t = Bl(),
        a = gl;
      if (a !== null) return Fr(t, a, l);
      Bl(), (t = t.memoizedState), (a = Bl());
      var e = a.queue.dispatch;
      return (a.memoizedState = l), [t, e, !1];
    }
    function pe(l, t, a, e) {
      return (
        (l = { tag: l, create: a, deps: e, inst: t, next: null }),
        (t = ll.updateQueue),
        t === null && ((t = ef()), (ll.updateQueue = t)),
        (a = t.lastEffect),
        a === null
          ? (t.lastEffect = l.next = l)
          : ((e = a.next),
            (a.next = l),
            (l.next = e),
            (t.lastEffect = l)),
        l
      );
    }
    function mn() {
      return { destroy: void 0, resource: void 0 };
    }
    function Ir() {
      return Bl().memoizedState;
    }
    function gn(l, t, a, e) {
      var u = ct();
      (e = e === void 0 ? null : e),
        (ll.flags |= l),
        (u.memoizedState = pe(1 | t, mn(), a, e));
    }
    function su(l, t, a, e) {
      var u = Bl();
      e = e === void 0 ? null : e;
      var n = u.memoizedState.inst;
      gl !== null && e !== null && Pc(e, gl.memoizedState.deps)
        ? (u.memoizedState = pe(t, n, a, e))
        : ((ll.flags |= l), (u.memoizedState = pe(1 | t, n, a, e)));
    }
    function ls(l, t) {
      gn(8390656, 8, l, t);
    }
    function ts(l, t) {
      su(2048, 8, l, t);
    }
    function as(l, t) {
      return su(4, 2, l, t);
    }
    function es(l, t) {
      return su(4, 4, l, t);
    }
    function us(l, t) {
      if (typeof t == 'function') {
        l = l();
        var a = t(l);
        return function () {
          typeof a == 'function' ? a() : t(null);
        };
      }
      if (t != null)
        return (
          (l = l()),
          (t.current = l),
          function () {
            t.current = null;
          }
        );
    }
    function ns(l, t, a) {
      (a = a != null ? a.concat([l]) : null),
        su(4, 4, us.bind(null, t, l), a);
    }
    function sf() {}
    function cs(l, t) {
      var a = Bl();
      t = t === void 0 ? null : t;
      var e = a.memoizedState;
      return t !== null && Pc(t, e[1])
        ? e[0]
        : ((a.memoizedState = [l, t]), l);
    }
    function fs(l, t) {
      var a = Bl();
      t = t === void 0 ? null : t;
      var e = a.memoizedState;
      if (t !== null && Pc(t, e[1])) return e[0];
      if (((e = l()), Va)) {
        Ct(!0);
        try {
          l();
        } finally {
          Ct(!1);
        }
      }
      return (a.memoizedState = [e, t]), e;
    }
    function of(l, t, a) {
      return a === void 0 || (va & 1073741824) !== 0
        ? (l.memoizedState = t)
        : ((l.memoizedState = a),
          (l = so()),
          (ll.lanes |= l),
          (pa |= l),
          a);
    }
    function is(l, t, a, e) {
      return dt(a, t)
        ? a
        : ge.current !== null
        ? ((l = of(l, a, e)), dt(l, t) || (Ql = !0), l)
        : (va & 42) === 0
        ? ((Ql = !0), (l.memoizedState = a))
        : ((l = so()), (ll.lanes |= l), (pa |= l), t);
    }
    function rs(l, t, a, e, u) {
      var n = C.p;
      C.p = n !== 0 && 8 > n ? n : 8;
      var c = p.T,
        f = {};
      (p.T = f), hf(l, !1, t, a);
      try {
        var s = u(),
          y = p.S;
        if (
          (y !== null && y(f, s),
          s !== null &&
            typeof s == 'object' &&
            typeof s.then == 'function')
        ) {
          var T = R0(s, e);
          ou(l, t, T, gt(l));
        } else ou(l, t, e, gt(l));
      } catch (A) {
        ou(
          l,
          t,
          { then: function () {}, status: 'rejected', reason: A },
          gt()
        );
      } finally {
        (C.p = n), (p.T = c);
      }
    }
    function j0() {}
    function df(l, t, a, e) {
      if (l.tag !== 5) throw Error(d(476));
      var u = ss(l).queue;
      rs(
        l,
        u,
        t,
        W,
        a === null
          ? j0
          : function () {
              return os(l), a(e);
            }
      );
    }
    function ss(l) {
      var t = l.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: W,
        baseState: W,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ft,
          lastRenderedState: W,
        },
        next: null,
      };
      var a = {};
      return (
        (t.next = {
          memoizedState: a,
          baseState: a,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ft,
            lastRenderedState: a,
          },
          next: null,
        }),
        (l.memoizedState = t),
        (l = l.alternate),
        l !== null && (l.memoizedState = t),
        t
      );
    }
    function os(l) {
      var t = ss(l).next.queue;
      ou(l, t, {}, gt());
    }
    function vf() {
      return Pl(Ru);
    }
    function ds() {
      return Bl().memoizedState;
    }
    function vs() {
      return Bl().memoizedState;
    }
    function q0(l) {
      for (var t = l.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var a = gt();
            l = oa(a);
            var e = da(t, l, a);
            e !== null && (bt(e, t, a), nu(e, t, a)),
              (t = { cache: Zc() }),
              (l.payload = t);
            return;
        }
        t = t.return;
      }
    }
    function B0(l, t, a) {
      var e = gt();
      (a = {
        lane: e,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        bn(l)
          ? ys(t, a)
          : ((a = Nc(l, t, a, e)),
            a !== null && (bt(a, l, e), ms(a, t, e)));
    }
    function hs(l, t, a) {
      var e = gt();
      ou(l, t, a, e);
    }
    function ou(l, t, a, e) {
      var u = {
        lane: e,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (bn(l)) ys(t, u);
      else {
        var n = l.alternate;
        if (
          l.lanes === 0 &&
          (n === null || n.lanes === 0) &&
          ((n = t.lastRenderedReducer), n !== null)
        )
          try {
            var c = t.lastRenderedState,
              f = n(c, a);
            if (
              ((u.hasEagerState = !0), (u.eagerState = f), dt(f, c))
            )
              return ln(l, t, u, 0), Ml === null && Iu(), !1;
          } catch {
          } finally {
          }
        if (((a = Nc(l, t, u, e)), a !== null))
          return bt(a, l, e), ms(a, t, e), !0;
      }
      return !1;
    }
    function hf(l, t, a, e) {
      if (
        ((e = {
          lane: 2,
          revertLane: Kf(),
          action: e,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        bn(l))
      ) {
        if (t) throw Error(d(479));
      } else (t = Nc(l, a, e, 2)), t !== null && bt(t, l, 2);
    }
    function bn(l) {
      var t = l.alternate;
      return l === ll || (t !== null && t === ll);
    }
    function ys(l, t) {
      be = dn = !0;
      var a = l.pending;
      a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (l.pending = t);
    }
    function ms(l, t, a) {
      if ((a & 4194048) !== 0) {
        var e = t.lanes;
        (e &= l.pendingLanes), (a |= e), (t.lanes = a), Mi(l, a);
      }
    }
    var Sn = {
        readContext: Pl,
        use: hn,
        useCallback: Nl,
        useContext: Nl,
        useEffect: Nl,
        useImperativeHandle: Nl,
        useLayoutEffect: Nl,
        useInsertionEffect: Nl,
        useMemo: Nl,
        useReducer: Nl,
        useRef: Nl,
        useState: Nl,
        useDebugValue: Nl,
        useDeferredValue: Nl,
        useTransition: Nl,
        useSyncExternalStore: Nl,
        useId: Nl,
        useHostTransitionStatus: Nl,
        useFormState: Nl,
        useActionState: Nl,
        useOptimistic: Nl,
        useMemoCache: Nl,
        useCacheRefresh: Nl,
      },
      gs = {
        readContext: Pl,
        use: hn,
        useCallback: function (l, t) {
          return (
            (ct().memoizedState = [l, t === void 0 ? null : t]), l
          );
        },
        useContext: Pl,
        useEffect: ls,
        useImperativeHandle: function (l, t, a) {
          (a = a != null ? a.concat([l]) : null),
            gn(4194308, 4, us.bind(null, t, l), a);
        },
        useLayoutEffect: function (l, t) {
          return gn(4194308, 4, l, t);
        },
        useInsertionEffect: function (l, t) {
          gn(4, 2, l, t);
        },
        useMemo: function (l, t) {
          var a = ct();
          t = t === void 0 ? null : t;
          var e = l();
          if (Va) {
            Ct(!0);
            try {
              l();
            } finally {
              Ct(!1);
            }
          }
          return (a.memoizedState = [e, t]), e;
        },
        useReducer: function (l, t, a) {
          var e = ct();
          if (a !== void 0) {
            var u = a(t);
            if (Va) {
              Ct(!0);
              try {
                a(t);
              } finally {
                Ct(!1);
              }
            }
          } else u = t;
          return (
            (e.memoizedState = e.baseState = u),
            (l = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: l,
              lastRenderedState: u,
            }),
            (e.queue = l),
            (l = l.dispatch = B0.bind(null, ll, l)),
            [e.memoizedState, l]
          );
        },
        useRef: function (l) {
          var t = ct();
          return (l = { current: l }), (t.memoizedState = l);
        },
        useState: function (l) {
          l = ff(l);
          var t = l.queue,
            a = hs.bind(null, ll, t);
          return (t.dispatch = a), [l.memoizedState, a];
        },
        useDebugValue: sf,
        useDeferredValue: function (l, t) {
          var a = ct();
          return of(a, l, t);
        },
        useTransition: function () {
          var l = ff(!1);
          return (
            (l = rs.bind(null, ll, l.queue, !0, !1)),
            (ct().memoizedState = l),
            [!1, l]
          );
        },
        useSyncExternalStore: function (l, t, a) {
          var e = ll,
            u = ct();
          if (dl) {
            if (a === void 0) throw Error(d(407));
            a = a();
          } else {
            if (((a = t()), Ml === null)) throw Error(d(349));
            (rl & 124) !== 0 || Yr(e, t, a);
          }
          u.memoizedState = a;
          var n = { value: a, getSnapshot: t };
          return (
            (u.queue = n),
            ls(Xr.bind(null, e, n, l), [l]),
            (e.flags |= 2048),
            pe(9, mn(), Gr.bind(null, e, n, a, t), null),
            a
          );
        },
        useId: function () {
          var l = ct(),
            t = Ml.identifierPrefix;
          if (dl) {
            var a = Wt,
              e = Jt;
            (a = (e & ~(1 << (32 - $l(e) - 1))).toString(32) + a),
              (t = '«' + t + 'R' + a),
              (a = vn++),
              0 < a && (t += 'H' + a.toString(32)),
              (t += '»');
          } else
            (a = U0++), (t = '«' + t + 'r' + a.toString(32) + '»');
          return (l.memoizedState = t);
        },
        useHostTransitionStatus: vf,
        useFormState: kr,
        useActionState: kr,
        useOptimistic: function (l) {
          var t = ct();
          t.memoizedState = t.baseState = l;
          var a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = a),
            (t = hf.bind(null, ll, !0, a)),
            (a.dispatch = t),
            [l, t]
          );
        },
        useMemoCache: uf,
        useCacheRefresh: function () {
          return (ct().memoizedState = q0.bind(null, ll));
        },
      },
      bs = {
        readContext: Pl,
        use: hn,
        useCallback: cs,
        useContext: Pl,
        useEffect: ts,
        useImperativeHandle: ns,
        useInsertionEffect: as,
        useLayoutEffect: es,
        useMemo: fs,
        useReducer: yn,
        useRef: Ir,
        useState: function () {
          return yn(Ft);
        },
        useDebugValue: sf,
        useDeferredValue: function (l, t) {
          var a = Bl();
          return is(a, gl.memoizedState, l, t);
        },
        useTransition: function () {
          var l = yn(Ft)[0],
            t = Bl().memoizedState;
          return [typeof l == 'boolean' ? l : ru(l), t];
        },
        useSyncExternalStore: Cr,
        useId: ds,
        useHostTransitionStatus: vf,
        useFormState: $r,
        useActionState: $r,
        useOptimistic: function (l, t) {
          var a = Bl();
          return Lr(a, gl, l, t);
        },
        useMemoCache: uf,
        useCacheRefresh: vs,
      },
      C0 = {
        readContext: Pl,
        use: hn,
        useCallback: cs,
        useContext: Pl,
        useEffect: ts,
        useImperativeHandle: ns,
        useInsertionEffect: as,
        useLayoutEffect: es,
        useMemo: fs,
        useReducer: cf,
        useRef: Ir,
        useState: function () {
          return cf(Ft);
        },
        useDebugValue: sf,
        useDeferredValue: function (l, t) {
          var a = Bl();
          return gl === null
            ? of(a, l, t)
            : is(a, gl.memoizedState, l, t);
        },
        useTransition: function () {
          var l = cf(Ft)[0],
            t = Bl().memoizedState;
          return [typeof l == 'boolean' ? l : ru(l), t];
        },
        useSyncExternalStore: Cr,
        useId: ds,
        useHostTransitionStatus: vf,
        useFormState: Pr,
        useActionState: Pr,
        useOptimistic: function (l, t) {
          var a = Bl();
          return gl !== null
            ? Lr(a, gl, l, t)
            : ((a.baseState = l), [l, a.queue.dispatch]);
        },
        useMemoCache: uf,
        useCacheRefresh: vs,
      },
      Te = null,
      du = 0;
    function pn(l) {
      var t = du;
      return (du += 1), Te === null && (Te = []), Rr(Te, l, t);
    }
    function vu(l, t) {
      (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
    }
    function Tn(l, t) {
      throw t.$$typeof === S
        ? Error(d(525))
        : ((l = Object.prototype.toString.call(t)),
          Error(
            d(
              31,
              l === '[object Object]'
                ? 'object with keys {' +
                    Object.keys(t).join(', ') +
                    '}'
                : l
            )
          ));
    }
    function Ss(l) {
      var t = l._init;
      return t(l._payload);
    }
    function ps(l) {
      function t(v, o) {
        if (l) {
          var h = v.deletions;
          h === null
            ? ((v.deletions = [o]), (v.flags |= 16))
            : h.push(o);
        }
      }
      function a(v, o) {
        if (!l) return null;
        for (; o !== null; ) t(v, o), (o = o.sibling);
        return null;
      }
      function e(v) {
        for (var o = new Map(); v !== null; )
          v.key !== null ? o.set(v.key, v) : o.set(v.index, v),
            (v = v.sibling);
        return o;
      }
      function u(v, o) {
        return (v = Kt(v, o)), (v.index = 0), (v.sibling = null), v;
      }
      function n(v, o, h) {
        return (
          (v.index = h),
          l
            ? ((h = v.alternate),
              h !== null
                ? ((h = h.index),
                  h < o ? ((v.flags |= 67108866), o) : h)
                : ((v.flags |= 67108866), o))
            : ((v.flags |= 1048576), o)
        );
      }
      function c(v) {
        return l && v.alternate === null && (v.flags |= 67108866), v;
      }
      function f(v, o, h, M) {
        return o === null || o.tag !== 6
          ? ((o = jc(h, v.mode, M)), (o.return = v), o)
          : ((o = u(o, h)), (o.return = v), o);
      }
      function s(v, o, h, M) {
        var V = h.type;
        return V === j
          ? T(v, o, h.props.children, M, h.key)
          : o !== null &&
            (o.elementType === V ||
              (typeof V == 'object' &&
                V !== null &&
                V.$$typeof === tt &&
                Ss(V) === o.type))
          ? ((o = u(o, h.props)), vu(o, h), (o.return = v), o)
          : ((o = an(h.type, h.key, h.props, null, v.mode, M)),
            vu(o, h),
            (o.return = v),
            o);
      }
      function y(v, o, h, M) {
        return o === null ||
          o.tag !== 4 ||
          o.stateNode.containerInfo !== h.containerInfo ||
          o.stateNode.implementation !== h.implementation
          ? ((o = qc(h, v.mode, M)), (o.return = v), o)
          : ((o = u(o, h.children || [])), (o.return = v), o);
      }
      function T(v, o, h, M, V) {
        return o === null || o.tag !== 7
          ? ((o = Ba(h, v.mode, M, V)), (o.return = v), o)
          : ((o = u(o, h)), (o.return = v), o);
      }
      function A(v, o, h) {
        if (
          (typeof o == 'string' && o !== '') ||
          typeof o == 'number' ||
          typeof o == 'bigint'
        )
          return (o = jc('' + o, v.mode, h)), (o.return = v), o;
        if (typeof o == 'object' && o !== null) {
          switch (o.$$typeof) {
            case x:
              return (
                (h = an(o.type, o.key, o.props, null, v.mode, h)),
                vu(h, o),
                (h.return = v),
                h
              );
            case N:
              return (o = qc(o, v.mode, h)), (o.return = v), o;
            case tt:
              var M = o._init;
              return (o = M(o._payload)), A(v, o, h);
          }
          if (jl(o) || Gl(o))
            return (o = Ba(o, v.mode, h, null)), (o.return = v), o;
          if (typeof o.then == 'function') return A(v, pn(o), h);
          if (o.$$typeof === al) return A(v, cn(v, o), h);
          Tn(v, o);
        }
        return null;
      }
      function m(v, o, h, M) {
        var V = o !== null ? o.key : null;
        if (
          (typeof h == 'string' && h !== '') ||
          typeof h == 'number' ||
          typeof h == 'bigint'
        )
          return V !== null ? null : f(v, o, '' + h, M);
        if (typeof h == 'object' && h !== null) {
          switch (h.$$typeof) {
            case x:
              return h.key === V ? s(v, o, h, M) : null;
            case N:
              return h.key === V ? y(v, o, h, M) : null;
            case tt:
              return (
                (V = h._init), (h = V(h._payload)), m(v, o, h, M)
              );
          }
          if (jl(h) || Gl(h))
            return V !== null ? null : T(v, o, h, M, null);
          if (typeof h.then == 'function') return m(v, o, pn(h), M);
          if (h.$$typeof === al) return m(v, o, cn(v, h), M);
          Tn(v, h);
        }
        return null;
      }
      function g(v, o, h, M, V) {
        if (
          (typeof M == 'string' && M !== '') ||
          typeof M == 'number' ||
          typeof M == 'bigint'
        )
          return (v = v.get(h) || null), f(o, v, '' + M, V);
        if (typeof M == 'object' && M !== null) {
          switch (M.$$typeof) {
            case x:
              return (
                (v = v.get(M.key === null ? h : M.key) || null),
                s(o, v, M, V)
              );
            case N:
              return (
                (v = v.get(M.key === null ? h : M.key) || null),
                y(o, v, M, V)
              );
            case tt:
              var tl = M._init;
              return (M = tl(M._payload)), g(v, o, h, M, V);
          }
          if (jl(M) || Gl(M))
            return (v = v.get(h) || null), T(o, v, M, V, null);
          if (typeof M.then == 'function')
            return g(v, o, h, pn(M), V);
          if (M.$$typeof === al) return g(v, o, h, cn(o, M), V);
          Tn(o, M);
        }
        return null;
      }
      function P(v, o, h, M) {
        for (
          var V = null, tl = null, J = o, $ = (o = 0), Ll = null;
          J !== null && $ < h.length;
          $++
        ) {
          J.index > $ ? ((Ll = J), (J = null)) : (Ll = J.sibling);
          var ol = m(v, J, h[$], M);
          if (ol === null) {
            J === null && (J = Ll);
            break;
          }
          l && J && ol.alternate === null && t(v, J),
            (o = n(ol, o, $)),
            tl === null ? (V = ol) : (tl.sibling = ol),
            (tl = ol),
            (J = Ll);
        }
        if ($ === h.length) return a(v, J), dl && Ya(v, $), V;
        if (J === null) {
          for (; $ < h.length; $++)
            (J = A(v, h[$], M)),
              J !== null &&
                ((o = n(J, o, $)),
                tl === null ? (V = J) : (tl.sibling = J),
                (tl = J));
          return dl && Ya(v, $), V;
        }
        for (J = e(J); $ < h.length; $++)
          (Ll = g(J, v, $, h[$], M)),
            Ll !== null &&
              (l &&
                Ll.alternate !== null &&
                J.delete(Ll.key === null ? $ : Ll.key),
              (o = n(Ll, o, $)),
              tl === null ? (V = Ll) : (tl.sibling = Ll),
              (tl = Ll));
        return (
          l &&
            J.forEach(function (Ra) {
              return t(v, Ra);
            }),
          dl && Ya(v, $),
          V
        );
      }
      function k(v, o, h, M) {
        if (h == null) throw Error(d(151));
        for (
          var V = null,
            tl = null,
            J = o,
            $ = (o = 0),
            Ll = null,
            ol = h.next();
          J !== null && !ol.done;
          $++, ol = h.next()
        ) {
          J.index > $ ? ((Ll = J), (J = null)) : (Ll = J.sibling);
          var Ra = m(v, J, ol.value, M);
          if (Ra === null) {
            J === null && (J = Ll);
            break;
          }
          l && J && Ra.alternate === null && t(v, J),
            (o = n(Ra, o, $)),
            tl === null ? (V = Ra) : (tl.sibling = Ra),
            (tl = Ra),
            (J = Ll);
        }
        if (ol.done) return a(v, J), dl && Ya(v, $), V;
        if (J === null) {
          for (; !ol.done; $++, ol = h.next())
            (ol = A(v, ol.value, M)),
              ol !== null &&
                ((o = n(ol, o, $)),
                tl === null ? (V = ol) : (tl.sibling = ol),
                (tl = ol));
          return dl && Ya(v, $), V;
        }
        for (J = e(J); !ol.done; $++, ol = h.next())
          (ol = g(J, v, $, ol.value, M)),
            ol !== null &&
              (l &&
                ol.alternate !== null &&
                J.delete(ol.key === null ? $ : ol.key),
              (o = n(ol, o, $)),
              tl === null ? (V = ol) : (tl.sibling = ol),
              (tl = ol));
        return (
          l &&
            J.forEach(function (Yv) {
              return t(v, Yv);
            }),
          dl && Ya(v, $),
          V
        );
      }
      function Sl(v, o, h, M) {
        if (
          (typeof h == 'object' &&
            h !== null &&
            h.type === j &&
            h.key === null &&
            (h = h.props.children),
          typeof h == 'object' && h !== null)
        ) {
          switch (h.$$typeof) {
            case x:
              l: {
                for (var V = h.key; o !== null; ) {
                  if (o.key === V) {
                    if (((V = h.type), V === j)) {
                      if (o.tag === 7) {
                        a(v, o.sibling),
                          (M = u(o, h.props.children)),
                          (M.return = v),
                          (v = M);
                        break l;
                      }
                    } else if (
                      o.elementType === V ||
                      (typeof V == 'object' &&
                        V !== null &&
                        V.$$typeof === tt &&
                        Ss(V) === o.type)
                    ) {
                      a(v, o.sibling),
                        (M = u(o, h.props)),
                        vu(M, h),
                        (M.return = v),
                        (v = M);
                      break l;
                    }
                    a(v, o);
                    break;
                  } else t(v, o);
                  o = o.sibling;
                }
                h.type === j
                  ? ((M = Ba(h.props.children, v.mode, M, h.key)),
                    (M.return = v),
                    (v = M))
                  : ((M = an(
                      h.type,
                      h.key,
                      h.props,
                      null,
                      v.mode,
                      M
                    )),
                    vu(M, h),
                    (M.return = v),
                    (v = M));
              }
              return c(v);
            case N:
              l: {
                for (V = h.key; o !== null; ) {
                  if (o.key === V)
                    if (
                      o.tag === 4 &&
                      o.stateNode.containerInfo === h.containerInfo &&
                      o.stateNode.implementation === h.implementation
                    ) {
                      a(v, o.sibling),
                        (M = u(o, h.children || [])),
                        (M.return = v),
                        (v = M);
                      break l;
                    } else {
                      a(v, o);
                      break;
                    }
                  else t(v, o);
                  o = o.sibling;
                }
                (M = qc(h, v.mode, M)), (M.return = v), (v = M);
              }
              return c(v);
            case tt:
              return (
                (V = h._init), (h = V(h._payload)), Sl(v, o, h, M)
              );
          }
          if (jl(h)) return P(v, o, h, M);
          if (Gl(h)) {
            if (((V = Gl(h)), typeof V != 'function'))
              throw Error(d(150));
            return (h = V.call(h)), k(v, o, h, M);
          }
          if (typeof h.then == 'function') return Sl(v, o, pn(h), M);
          if (h.$$typeof === al) return Sl(v, o, cn(v, h), M);
          Tn(v, h);
        }
        return (typeof h == 'string' && h !== '') ||
          typeof h == 'number' ||
          typeof h == 'bigint'
          ? ((h = '' + h),
            o !== null && o.tag === 6
              ? (a(v, o.sibling),
                (M = u(o, h)),
                (M.return = v),
                (v = M))
              : (a(v, o),
                (M = jc(h, v.mode, M)),
                (M.return = v),
                (v = M)),
            c(v))
          : a(v, o);
      }
      return function (v, o, h, M) {
        try {
          du = 0;
          var V = Sl(v, o, h, M);
          return (Te = null), V;
        } catch (J) {
          if (J === eu || J === rn) throw J;
          var tl = vt(29, J, null, v.mode);
          return (tl.lanes = M), (tl.return = v), tl;
        } finally {
        }
      };
    }
    var Ee = ps(!0),
      Ts = ps(!1),
      At = r(null),
      Gt = null;
    function ha(l) {
      var t = l.alternate;
      _(Yl, Yl.current & 1),
        _(At, l),
        Gt === null &&
          (t === null ||
            ge.current !== null ||
            t.memoizedState !== null) &&
          (Gt = l);
    }
    function Es(l) {
      if (l.tag === 22) {
        if ((_(Yl, Yl.current), _(At, l), Gt === null)) {
          var t = l.alternate;
          t !== null && t.memoizedState !== null && (Gt = l);
        }
      } else ya();
    }
    function ya() {
      _(Yl, Yl.current), _(At, At.current);
    }
    function Pt(l) {
      E(At), Gt === l && (Gt = null), E(Yl);
    }
    var Yl = r(0);
    function En(l) {
      for (var t = l; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (
            a !== null &&
            ((a = a.dehydrated),
            a === null || a.data === '$?' || ui(a))
          )
            return t;
        } else if (
          t.tag === 19 &&
          t.memoizedProps.revealOrder !== void 0
        ) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    function yf(l, t, a, e) {
      (t = l.memoizedState),
        (a = a(e, t)),
        (a = a == null ? t : U({}, t, a)),
        (l.memoizedState = a),
        l.lanes === 0 && (l.updateQueue.baseState = a);
    }
    var mf = {
      enqueueSetState: function (l, t, a) {
        l = l._reactInternals;
        var e = gt(),
          u = oa(e);
        (u.payload = t),
          a != null && (u.callback = a),
          (t = da(l, u, e)),
          t !== null && (bt(t, l, e), nu(t, l, e));
      },
      enqueueReplaceState: function (l, t, a) {
        l = l._reactInternals;
        var e = gt(),
          u = oa(e);
        (u.tag = 1),
          (u.payload = t),
          a != null && (u.callback = a),
          (t = da(l, u, e)),
          t !== null && (bt(t, l, e), nu(t, l, e));
      },
      enqueueForceUpdate: function (l, t) {
        l = l._reactInternals;
        var a = gt(),
          e = oa(a);
        (e.tag = 2),
          t != null && (e.callback = t),
          (t = da(l, e, a)),
          t !== null && (bt(t, l, a), nu(t, l, a));
      },
    };
    function _s(l, t, a, e, u, n, c) {
      return (
        (l = l.stateNode),
        typeof l.shouldComponentUpdate == 'function'
          ? l.shouldComponentUpdate(e, n, c)
          : t.prototype && t.prototype.isPureReactComponent
          ? !ke(a, e) || !ke(u, n)
          : !0
      );
    }
    function Ms(l, t, a, e) {
      (l = t.state),
        typeof t.componentWillReceiveProps == 'function' &&
          t.componentWillReceiveProps(a, e),
        typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
          t.UNSAFE_componentWillReceiveProps(a, e),
        t.state !== l && mf.enqueueReplaceState(t, t.state, null);
    }
    function wa(l, t) {
      var a = t;
      if ('ref' in t) {
        a = {};
        for (var e in t) e !== 'ref' && (a[e] = t[e]);
      }
      if ((l = l.defaultProps)) {
        a === t && (a = U({}, a));
        for (var u in l) a[u] === void 0 && (a[u] = l[u]);
      }
      return a;
    }
    var _n =
      typeof reportError == 'function'
        ? reportError
        : function (l) {
            if (
              typeof window == 'object' &&
              typeof window.ErrorEvent == 'function'
            ) {
              var t = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == 'object' &&
                  l !== null &&
                  typeof l.message == 'string'
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == 'object' &&
              typeof process.emit == 'function'
            ) {
              process.emit('uncaughtException', l);
              return;
            }
            console.error(l);
          };
    function Os(l) {
      _n(l);
    }
    function As(l) {
      console.error(l);
    }
    function zs(l) {
      _n(l);
    }
    function Mn(l, t) {
      try {
        var a = l.onUncaughtError;
        a(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Ds(l, t, a) {
      try {
        var e = l.onCaughtError;
        e(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        });
      } catch (u) {
        setTimeout(function () {
          throw u;
        });
      }
    }
    function gf(l, t, a) {
      return (
        (a = oa(a)),
        (a.tag = 3),
        (a.payload = { element: null }),
        (a.callback = function () {
          Mn(l, t);
        }),
        a
      );
    }
    function Rs(l) {
      return (l = oa(l)), (l.tag = 3), l;
    }
    function Us(l, t, a, e) {
      var u = a.type.getDerivedStateFromError;
      if (typeof u == 'function') {
        var n = e.value;
        (l.payload = function () {
          return u(n);
        }),
          (l.callback = function () {
            Ds(t, a, e);
          });
      }
      var c = a.stateNode;
      c !== null &&
        typeof c.componentDidCatch == 'function' &&
        (l.callback = function () {
          Ds(t, a, e),
            typeof u != 'function' &&
              (Ta === null ? (Ta = new Set([this])) : Ta.add(this));
          var f = e.stack;
          this.componentDidCatch(e.value, {
            componentStack: f !== null ? f : '',
          });
        });
    }
    function Y0(l, t, a, e, u) {
      if (
        ((a.flags |= 32768),
        e !== null &&
          typeof e == 'object' &&
          typeof e.then == 'function')
      ) {
        if (
          ((t = a.alternate),
          t !== null && lu(t, a, u, !0),
          (a = At.current),
          a !== null)
        ) {
          switch (a.tag) {
            case 13:
              return (
                Gt === null
                  ? Qf()
                  : a.alternate === null && Rl === 0 && (Rl = 3),
                (a.flags &= -257),
                (a.flags |= 65536),
                (a.lanes = u),
                e === wc
                  ? (a.flags |= 16384)
                  : ((t = a.updateQueue),
                    t === null
                      ? (a.updateQueue = new Set([e]))
                      : t.add(e),
                    Lf(l, e, u)),
                !1
              );
            case 22:
              return (
                (a.flags |= 65536),
                e === wc
                  ? (a.flags |= 16384)
                  : ((t = a.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([e]),
                        }),
                        (a.updateQueue = t))
                      : ((a = t.retryQueue),
                        a === null
                          ? (t.retryQueue = new Set([e]))
                          : a.add(e)),
                    Lf(l, e, u)),
                !1
              );
          }
          throw Error(d(435, a.tag));
        }
        return Lf(l, e, u), Qf(), !1;
      }
      if (dl)
        return (
          (t = At.current),
          t !== null
            ? ((t.flags & 65536) === 0 && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = u),
              e !== Yc &&
                ((l = Error(d(422), { cause: e })), Ie(Et(l, a))))
            : (e !== Yc &&
                ((t = Error(d(423), { cause: e })), Ie(Et(t, a))),
              (l = l.current.alternate),
              (l.flags |= 65536),
              (u &= -u),
              (l.lanes |= u),
              (e = Et(e, a)),
              (u = gf(l.stateNode, e, u)),
              Wc(l, u),
              Rl !== 4 && (Rl = 2)),
          !1
        );
      var n = Error(d(520), { cause: e });
      if (
        ((n = Et(n, a)),
        pu === null ? (pu = [n]) : pu.push(n),
        Rl !== 4 && (Rl = 2),
        t === null)
      )
        return !0;
      (e = Et(e, a)), (a = t);
      do {
        switch (a.tag) {
          case 3:
            return (
              (a.flags |= 65536),
              (l = u & -u),
              (a.lanes |= l),
              (l = gf(a.stateNode, e, l)),
              Wc(a, l),
              !1
            );
          case 1:
            if (
              ((t = a.type),
              (n = a.stateNode),
              (a.flags & 128) === 0 &&
                (typeof t.getDerivedStateFromError == 'function' ||
                  (n !== null &&
                    typeof n.componentDidCatch == 'function' &&
                    (Ta === null || !Ta.has(n)))))
            )
              return (
                (a.flags |= 65536),
                (u &= -u),
                (a.lanes |= u),
                (u = Rs(u)),
                Us(u, l, a, e),
                Wc(a, u),
                !1
              );
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    var xs = Error(d(461)),
      Ql = !1;
    function Kl(l, t, a, e) {
      t.child = l === null ? Ts(t, null, a, e) : Ee(t, l.child, a, e);
    }
    function Ns(l, t, a, e, u) {
      a = a.render;
      var n = t.ref;
      if ('ref' in e) {
        var c = {};
        for (var f in e) f !== 'ref' && (c[f] = e[f]);
      } else c = e;
      return (
        Za(t),
        (e = Ic(l, t, a, c, n, u)),
        (f = lf()),
        l !== null && !Ql
          ? (tf(l, t, u), It(l, t, u))
          : (dl && f && Bc(t),
            (t.flags |= 1),
            Kl(l, t, e, u),
            t.child)
      );
    }
    function Hs(l, t, a, e, u) {
      if (l === null) {
        var n = a.type;
        return typeof n == 'function' &&
          !Hc(n) &&
          n.defaultProps === void 0 &&
          a.compare === null
          ? ((t.tag = 15), (t.type = n), js(l, t, n, e, u))
          : ((l = an(a.type, null, e, t, t.mode, u)),
            (l.ref = t.ref),
            (l.return = t),
            (t.child = l));
      }
      if (((n = l.child), !Of(l, u))) {
        var c = n.memoizedProps;
        if (
          ((a = a.compare),
          (a = a !== null ? a : ke),
          a(c, e) && l.ref === t.ref)
        )
          return It(l, t, u);
      }
      return (
        (t.flags |= 1),
        (l = Kt(n, e)),
        (l.ref = t.ref),
        (l.return = t),
        (t.child = l)
      );
    }
    function js(l, t, a, e, u) {
      if (l !== null) {
        var n = l.memoizedProps;
        if (ke(n, e) && l.ref === t.ref)
          if (((Ql = !1), (t.pendingProps = e = n), Of(l, u)))
            (l.flags & 131072) !== 0 && (Ql = !0);
          else return (t.lanes = l.lanes), It(l, t, u);
      }
      return bf(l, t, a, e, u);
    }
    function qs(l, t, a) {
      var e = t.pendingProps,
        u = e.children,
        n = l !== null ? l.memoizedState : null;
      if (e.mode === 'hidden') {
        if ((t.flags & 128) !== 0) {
          if (((e = n !== null ? n.baseLanes | a : a), l !== null)) {
            for (u = t.child = l.child, n = 0; u !== null; )
              (n = n | u.lanes | u.childLanes), (u = u.sibling);
            t.childLanes = n & ~e;
          } else (t.childLanes = 0), (t.child = null);
          return Bs(l, t, e, a);
        }
        if ((a & 536870912) !== 0)
          (t.memoizedState = { baseLanes: 0, cachePool: null }),
            l !== null && fn(t, n !== null ? n.cachePool : null),
            n !== null ? jr(t, n) : $c(),
            Es(t);
        else
          return (
            (t.lanes = t.childLanes = 536870912),
            Bs(l, t, n !== null ? n.baseLanes | a : a, a)
          );
      } else
        n !== null
          ? (fn(t, n.cachePool),
            jr(t, n),
            ya(),
            (t.memoizedState = null))
          : (l !== null && fn(t, null), $c(), ya());
      return Kl(l, t, u, a), t.child;
    }
    function Bs(l, t, a, e) {
      var u = Vc();
      return (
        (u =
          u === null ? null : { parent: Cl._currentValue, pool: u }),
        (t.memoizedState = { baseLanes: a, cachePool: u }),
        l !== null && fn(t, null),
        $c(),
        Es(t),
        l !== null && lu(l, t, e, !0),
        null
      );
    }
    function On(l, t) {
      var a = t.ref;
      if (a === null)
        l !== null && l.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != 'function' && typeof a != 'object')
          throw Error(d(284));
        (l === null || l.ref !== a) && (t.flags |= 4194816);
      }
    }
    function bf(l, t, a, e, u) {
      return (
        Za(t),
        (a = Ic(l, t, a, e, void 0, u)),
        (e = lf()),
        l !== null && !Ql
          ? (tf(l, t, u), It(l, t, u))
          : (dl && e && Bc(t),
            (t.flags |= 1),
            Kl(l, t, a, u),
            t.child)
      );
    }
    function Cs(l, t, a, e, u, n) {
      return (
        Za(t),
        (t.updateQueue = null),
        (a = Br(t, e, a, u)),
        qr(l),
        (e = lf()),
        l !== null && !Ql
          ? (tf(l, t, n), It(l, t, n))
          : (dl && e && Bc(t),
            (t.flags |= 1),
            Kl(l, t, a, n),
            t.child)
      );
    }
    function Ys(l, t, a, e, u) {
      if ((Za(t), t.stateNode === null)) {
        var n = de,
          c = a.contextType;
        typeof c == 'object' && c !== null && (n = Pl(c)),
          (n = new a(e, n)),
          (t.memoizedState =
            n.state !== null && n.state !== void 0 ? n.state : null),
          (n.updater = mf),
          (t.stateNode = n),
          (n._reactInternals = t),
          (n = t.stateNode),
          (n.props = e),
          (n.state = t.memoizedState),
          (n.refs = {}),
          Kc(t),
          (c = a.contextType),
          (n.context =
            typeof c == 'object' && c !== null ? Pl(c) : de),
          (n.state = t.memoizedState),
          (c = a.getDerivedStateFromProps),
          typeof c == 'function' &&
            (yf(t, a, c, e), (n.state = t.memoizedState)),
          typeof a.getDerivedStateFromProps == 'function' ||
            typeof n.getSnapshotBeforeUpdate == 'function' ||
            (typeof n.UNSAFE_componentWillMount != 'function' &&
              typeof n.componentWillMount != 'function') ||
            ((c = n.state),
            typeof n.componentWillMount == 'function' &&
              n.componentWillMount(),
            typeof n.UNSAFE_componentWillMount == 'function' &&
              n.UNSAFE_componentWillMount(),
            c !== n.state && mf.enqueueReplaceState(n, n.state, null),
            fu(t, e, n, u),
            cu(),
            (n.state = t.memoizedState)),
          typeof n.componentDidMount == 'function' &&
            (t.flags |= 4194308),
          (e = !0);
      } else if (l === null) {
        n = t.stateNode;
        var f = t.memoizedProps,
          s = wa(a, f);
        n.props = s;
        var y = n.context,
          T = a.contextType;
        (c = de), typeof T == 'object' && T !== null && (c = Pl(T));
        var A = a.getDerivedStateFromProps;
        (T =
          typeof A == 'function' ||
          typeof n.getSnapshotBeforeUpdate == 'function'),
          (f = t.pendingProps !== f),
          T ||
            (typeof n.UNSAFE_componentWillReceiveProps !=
              'function' &&
              typeof n.componentWillReceiveProps != 'function') ||
            ((f || y !== c) && Ms(t, n, e, c)),
          (sa = !1);
        var m = t.memoizedState;
        (n.state = m),
          fu(t, e, n, u),
          cu(),
          (y = t.memoizedState),
          f || m !== y || sa
            ? (typeof A == 'function' &&
                (yf(t, a, A, e), (y = t.memoizedState)),
              (s = sa || _s(t, a, s, e, m, y, c))
                ? (T ||
                    (typeof n.UNSAFE_componentWillMount !=
                      'function' &&
                      typeof n.componentWillMount != 'function') ||
                    (typeof n.componentWillMount == 'function' &&
                      n.componentWillMount(),
                    typeof n.UNSAFE_componentWillMount ==
                      'function' && n.UNSAFE_componentWillMount()),
                  typeof n.componentDidMount == 'function' &&
                    (t.flags |= 4194308))
                : (typeof n.componentDidMount == 'function' &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = e),
                  (t.memoizedState = y)),
              (n.props = e),
              (n.state = y),
              (n.context = c),
              (e = s))
            : (typeof n.componentDidMount == 'function' &&
                (t.flags |= 4194308),
              (e = !1));
      } else {
        (n = t.stateNode),
          Jc(l, t),
          (c = t.memoizedProps),
          (T = wa(a, c)),
          (n.props = T),
          (A = t.pendingProps),
          (m = n.context),
          (y = a.contextType),
          (s = de),
          typeof y == 'object' && y !== null && (s = Pl(y)),
          (f = a.getDerivedStateFromProps),
          (y =
            typeof f == 'function' ||
            typeof n.getSnapshotBeforeUpdate == 'function') ||
            (typeof n.UNSAFE_componentWillReceiveProps !=
              'function' &&
              typeof n.componentWillReceiveProps != 'function') ||
            ((c !== A || m !== s) && Ms(t, n, e, s)),
          (sa = !1),
          (m = t.memoizedState),
          (n.state = m),
          fu(t, e, n, u),
          cu();
        var g = t.memoizedState;
        c !== A ||
        m !== g ||
        sa ||
        (l !== null && l.dependencies !== null && nn(l.dependencies))
          ? (typeof f == 'function' &&
              (yf(t, a, f, e), (g = t.memoizedState)),
            (T =
              sa ||
              _s(t, a, T, e, m, g, s) ||
              (l !== null &&
                l.dependencies !== null &&
                nn(l.dependencies)))
              ? (y ||
                  (typeof n.UNSAFE_componentWillUpdate !=
                    'function' &&
                    typeof n.componentWillUpdate != 'function') ||
                  (typeof n.componentWillUpdate == 'function' &&
                    n.componentWillUpdate(e, g, s),
                  typeof n.UNSAFE_componentWillUpdate == 'function' &&
                    n.UNSAFE_componentWillUpdate(e, g, s)),
                typeof n.componentDidUpdate == 'function' &&
                  (t.flags |= 4),
                typeof n.getSnapshotBeforeUpdate == 'function' &&
                  (t.flags |= 1024))
              : (typeof n.componentDidUpdate != 'function' ||
                  (c === l.memoizedProps && m === l.memoizedState) ||
                  (t.flags |= 4),
                typeof n.getSnapshotBeforeUpdate != 'function' ||
                  (c === l.memoizedProps && m === l.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = e),
                (t.memoizedState = g)),
            (n.props = e),
            (n.state = g),
            (n.context = s),
            (e = T))
          : (typeof n.componentDidUpdate != 'function' ||
              (c === l.memoizedProps && m === l.memoizedState) ||
              (t.flags |= 4),
            typeof n.getSnapshotBeforeUpdate != 'function' ||
              (c === l.memoizedProps && m === l.memoizedState) ||
              (t.flags |= 1024),
            (e = !1));
      }
      return (
        (n = e),
        On(l, t),
        (e = (t.flags & 128) !== 0),
        n || e
          ? ((n = t.stateNode),
            (a =
              e && typeof a.getDerivedStateFromError != 'function'
                ? null
                : n.render()),
            (t.flags |= 1),
            l !== null && e
              ? ((t.child = Ee(t, l.child, null, u)),
                (t.child = Ee(t, null, a, u)))
              : Kl(l, t, a, u),
            (t.memoizedState = n.state),
            (l = t.child))
          : (l = It(l, t, u)),
        l
      );
    }
    function Gs(l, t, a, e) {
      return Pe(), (t.flags |= 256), Kl(l, t, a, e), t.child;
    }
    var Sf = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function pf(l) {
      return { baseLanes: l, cachePool: Ar() };
    }
    function Tf(l, t, a) {
      return (
        (l = l !== null ? l.childLanes & ~a : 0), t && (l |= zt), l
      );
    }
    function Xs(l, t, a) {
      var e = t.pendingProps,
        u = !1,
        n = (t.flags & 128) !== 0,
        c;
      if (
        ((c = n) ||
          (c =
            l !== null && l.memoizedState === null
              ? !1
              : (Yl.current & 2) !== 0),
        c && ((u = !0), (t.flags &= -129)),
        (c = (t.flags & 32) !== 0),
        (t.flags &= -33),
        l === null)
      ) {
        if (dl) {
          if ((u ? ha(t) : ya(), dl)) {
            var f = Dl,
              s;
            if ((s = f)) {
              l: {
                for (s = f, f = Yt; s.nodeType !== 8; ) {
                  if (!f) {
                    f = null;
                    break l;
                  }
                  if (((s = jt(s.nextSibling)), s === null)) {
                    f = null;
                    break l;
                  }
                }
                f = s;
              }
              f !== null
                ? ((t.memoizedState = {
                    dehydrated: f,
                    treeContext:
                      Ca !== null ? { id: Jt, overflow: Wt } : null,
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (s = vt(18, null, null, 0)),
                  (s.stateNode = f),
                  (s.return = t),
                  (t.child = s),
                  (et = t),
                  (Dl = null),
                  (s = !0))
                : (s = !1);
            }
            s || Xa(t);
          }
          if (
            ((f = t.memoizedState),
            f !== null && ((f = f.dehydrated), f !== null))
          )
            return (
              ui(f) ? (t.lanes = 32) : (t.lanes = 536870912), null
            );
          Pt(t);
        }
        return (
          (f = e.children),
          (e = e.fallback),
          u
            ? (ya(),
              (u = t.mode),
              (f = An({ mode: 'hidden', children: f }, u)),
              (e = Ba(e, u, a, null)),
              (f.return = t),
              (e.return = t),
              (f.sibling = e),
              (t.child = f),
              (u = t.child),
              (u.memoizedState = pf(a)),
              (u.childLanes = Tf(l, c, a)),
              (t.memoizedState = Sf),
              e)
            : (ha(t), Ef(t, f))
        );
      }
      if (
        ((s = l.memoizedState),
        s !== null && ((f = s.dehydrated), f !== null))
      ) {
        if (n)
          t.flags & 256
            ? (ha(t), (t.flags &= -257), (t = _f(l, t, a)))
            : t.memoizedState !== null
            ? (ya(),
              (t.child = l.child),
              (t.flags |= 128),
              (t = null))
            : (ya(),
              (u = e.fallback),
              (f = t.mode),
              (e = An({ mode: 'visible', children: e.children }, f)),
              (u = Ba(u, f, a, null)),
              (u.flags |= 2),
              (e.return = t),
              (u.return = t),
              (e.sibling = u),
              (t.child = e),
              Ee(t, l.child, null, a),
              (e = t.child),
              (e.memoizedState = pf(a)),
              (e.childLanes = Tf(l, c, a)),
              (t.memoizedState = Sf),
              (t = u));
        else if ((ha(t), ui(f))) {
          if (((c = f.nextSibling && f.nextSibling.dataset), c))
            var y = c.dgst;
          (c = y),
            (e = Error(d(419))),
            (e.stack = ''),
            (e.digest = c),
            Ie({ value: e, source: null, stack: null }),
            (t = _f(l, t, a));
        } else if (
          (Ql || lu(l, t, a, !1),
          (c = (a & l.childLanes) !== 0),
          Ql || c)
        ) {
          if (
            ((c = Ml),
            c !== null &&
              ((e = a & -a),
              (e = (e & 42) !== 0 ? 1 : uc(e)),
              (e = (e & (c.suspendedLanes | a)) !== 0 ? 0 : e),
              e !== 0 && e !== s.retryLane))
          )
            throw ((s.retryLane = e), oe(l, e), bt(c, l, e), xs);
          f.data === '$?' || Qf(), (t = _f(l, t, a));
        } else
          f.data === '$?'
            ? ((t.flags |= 192), (t.child = l.child), (t = null))
            : ((l = s.treeContext),
              (Dl = jt(f.nextSibling)),
              (et = t),
              (dl = !0),
              (Ga = null),
              (Yt = !1),
              l !== null &&
                ((Mt[Ot++] = Jt),
                (Mt[Ot++] = Wt),
                (Mt[Ot++] = Ca),
                (Jt = l.id),
                (Wt = l.overflow),
                (Ca = t)),
              (t = Ef(t, e.children)),
              (t.flags |= 4096));
        return t;
      }
      return u
        ? (ya(),
          (u = e.fallback),
          (f = t.mode),
          (s = l.child),
          (y = s.sibling),
          (e = Kt(s, { mode: 'hidden', children: e.children })),
          (e.subtreeFlags = s.subtreeFlags & 65011712),
          y !== null
            ? (u = Kt(y, u))
            : ((u = Ba(u, f, a, null)), (u.flags |= 2)),
          (u.return = t),
          (e.return = t),
          (e.sibling = u),
          (t.child = e),
          (e = u),
          (u = t.child),
          (f = l.child.memoizedState),
          f === null
            ? (f = pf(a))
            : ((s = f.cachePool),
              s !== null
                ? ((y = Cl._currentValue),
                  (s = s.parent !== y ? { parent: y, pool: y } : s))
                : (s = Ar()),
              (f = { baseLanes: f.baseLanes | a, cachePool: s })),
          (u.memoizedState = f),
          (u.childLanes = Tf(l, c, a)),
          (t.memoizedState = Sf),
          e)
        : (ha(t),
          (a = l.child),
          (l = a.sibling),
          (a = Kt(a, { mode: 'visible', children: e.children })),
          (a.return = t),
          (a.sibling = null),
          l !== null &&
            ((c = t.deletions),
            c === null
              ? ((t.deletions = [l]), (t.flags |= 16))
              : c.push(l)),
          (t.child = a),
          (t.memoizedState = null),
          a);
    }
    function Ef(l, t) {
      return (
        (t = An({ mode: 'visible', children: t }, l.mode)),
        (t.return = l),
        (l.child = t)
      );
    }
    function An(l, t) {
      return (
        (l = vt(22, l, null, t)),
        (l.lanes = 0),
        (l.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
        l
      );
    }
    function _f(l, t, a) {
      return (
        Ee(t, l.child, null, a),
        (l = Ef(t, t.pendingProps.children)),
        (l.flags |= 2),
        (t.memoizedState = null),
        l
      );
    }
    function Qs(l, t, a) {
      l.lanes |= t;
      var e = l.alternate;
      e !== null && (e.lanes |= t), Xc(l.return, t, a);
    }
    function Mf(l, t, a, e, u) {
      var n = l.memoizedState;
      n === null
        ? (l.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: e,
            tail: a,
            tailMode: u,
          })
        : ((n.isBackwards = t),
          (n.rendering = null),
          (n.renderingStartTime = 0),
          (n.last = e),
          (n.tail = a),
          (n.tailMode = u));
    }
    function Zs(l, t, a) {
      var e = t.pendingProps,
        u = e.revealOrder,
        n = e.tail;
      if ((Kl(l, t, e.children, a), (e = Yl.current), (e & 2) !== 0))
        (e = (e & 1) | 2), (t.flags |= 128);
      else {
        if (l !== null && (l.flags & 128) !== 0)
          l: for (l = t.child; l !== null; ) {
            if (l.tag === 13) l.memoizedState !== null && Qs(l, a, t);
            else if (l.tag === 19) Qs(l, a, t);
            else if (l.child !== null) {
              (l.child.return = l), (l = l.child);
              continue;
            }
            if (l === t) break l;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break l;
              l = l.return;
            }
            (l.sibling.return = l.return), (l = l.sibling);
          }
        e &= 1;
      }
      switch ((_(Yl, e), u)) {
        case 'forwards':
          for (a = t.child, u = null; a !== null; )
            (l = a.alternate),
              l !== null && En(l) === null && (u = a),
              (a = a.sibling);
          (a = u),
            a === null
              ? ((u = t.child), (t.child = null))
              : ((u = a.sibling), (a.sibling = null)),
            Mf(t, !1, u, a, n);
          break;
        case 'backwards':
          for (a = null, u = t.child, t.child = null; u !== null; ) {
            if (((l = u.alternate), l !== null && En(l) === null)) {
              t.child = u;
              break;
            }
            (l = u.sibling), (u.sibling = a), (a = u), (u = l);
          }
          Mf(t, !0, a, null, n);
          break;
        case 'together':
          Mf(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function It(l, t, a) {
      if (
        (l !== null && (t.dependencies = l.dependencies),
        (pa |= t.lanes),
        (a & t.childLanes) === 0)
      )
        if (l !== null) {
          if ((lu(l, t, a, !1), (a & t.childLanes) === 0))
            return null;
        } else return null;
      if (l !== null && t.child !== l.child) throw Error(d(153));
      if (t.child !== null) {
        for (
          l = t.child,
            a = Kt(l, l.pendingProps),
            t.child = a,
            a.return = t;
          l.sibling !== null;

        )
          (l = l.sibling),
            (a = a.sibling = Kt(l, l.pendingProps)),
            (a.return = t);
        a.sibling = null;
      }
      return t.child;
    }
    function Of(l, t) {
      return (l.lanes & t) !== 0
        ? !0
        : ((l = l.dependencies), !!(l !== null && nn(l)));
    }
    function G0(l, t, a) {
      switch (t.tag) {
        case 3:
          K(t, t.stateNode.containerInfo),
            ra(t, Cl, l.memoizedState.cache),
            Pe();
          break;
        case 27:
        case 5:
          El(t);
          break;
        case 4:
          K(t, t.stateNode.containerInfo);
          break;
        case 10:
          ra(t, t.type, t.memoizedProps.value);
          break;
        case 13:
          var e = t.memoizedState;
          if (e !== null)
            return e.dehydrated !== null
              ? (ha(t), (t.flags |= 128), null)
              : (a & t.child.childLanes) !== 0
              ? Xs(l, t, a)
              : (ha(t),
                (l = It(l, t, a)),
                l !== null ? l.sibling : null);
          ha(t);
          break;
        case 19:
          var u = (l.flags & 128) !== 0;
          if (
            ((e = (a & t.childLanes) !== 0),
            e || (lu(l, t, a, !1), (e = (a & t.childLanes) !== 0)),
            u)
          ) {
            if (e) return Zs(l, t, a);
            t.flags |= 128;
          }
          if (
            ((u = t.memoizedState),
            u !== null &&
              ((u.rendering = null),
              (u.tail = null),
              (u.lastEffect = null)),
            _(Yl, Yl.current),
            e)
          )
            break;
          return null;
        case 22:
        case 23:
          return (t.lanes = 0), qs(l, t, a);
        case 24:
          ra(t, Cl, l.memoizedState.cache);
      }
      return It(l, t, a);
    }
    function Ls(l, t, a) {
      if (l !== null)
        if (l.memoizedProps !== t.pendingProps) Ql = !0;
        else {
          if (!Of(l, a) && (t.flags & 128) === 0)
            return (Ql = !1), G0(l, t, a);
          Ql = (l.flags & 131072) !== 0;
        }
      else
        (Ql = !1),
          dl && (t.flags & 1048576) !== 0 && Sr(t, un, t.index);
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          l: {
            l = t.pendingProps;
            var e = t.elementType,
              u = e._init;
            if (
              ((e = u(e._payload)),
              (t.type = e),
              typeof e == 'function')
            )
              Hc(e)
                ? ((l = wa(e, l)),
                  (t.tag = 1),
                  (t = Ys(null, t, e, l, a)))
                : ((t.tag = 0), (t = bf(null, t, e, l, a)));
            else {
              if (e != null) {
                if (((u = e.$$typeof), u === Tl)) {
                  (t.tag = 11), (t = Ns(null, t, e, l, a));
                  break l;
                } else if (u === wl) {
                  (t.tag = 14), (t = Hs(null, t, e, l, a));
                  break l;
                }
              }
              throw ((t = qt(e) || e), Error(d(306, t, '')));
            }
          }
          return t;
        case 0:
          return bf(l, t, t.type, t.pendingProps, a);
        case 1:
          return (
            (e = t.type),
            (u = wa(e, t.pendingProps)),
            Ys(l, t, e, u, a)
          );
        case 3:
          l: {
            if ((K(t, t.stateNode.containerInfo), l === null))
              throw Error(d(387));
            e = t.pendingProps;
            var n = t.memoizedState;
            (u = n.element), Jc(l, t), fu(t, e, null, a);
            var c = t.memoizedState;
            if (
              ((e = c.cache),
              ra(t, Cl, e),
              e !== n.cache && Qc(t, [Cl], a, !0),
              cu(),
              (e = c.element),
              n.isDehydrated)
            )
              if (
                ((n = {
                  element: e,
                  isDehydrated: !1,
                  cache: c.cache,
                }),
                (t.updateQueue.baseState = n),
                (t.memoizedState = n),
                t.flags & 256)
              ) {
                t = Gs(l, t, e, a);
                break l;
              } else if (e !== u) {
                (u = Et(Error(d(424)), t)),
                  Ie(u),
                  (t = Gs(l, t, e, a));
                break l;
              } else {
                switch (
                  ((l = t.stateNode.containerInfo), l.nodeType)
                ) {
                  case 9:
                    l = l.body;
                    break;
                  default:
                    l =
                      l.nodeName === 'HTML'
                        ? l.ownerDocument.body
                        : l;
                }
                for (
                  Dl = jt(l.firstChild),
                    et = t,
                    dl = !0,
                    Ga = null,
                    Yt = !0,
                    a = Ts(t, null, e, a),
                    t.child = a;
                  a;

                )
                  (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
              }
            else {
              if ((Pe(), e === u)) {
                t = It(l, t, a);
                break l;
              }
              Kl(l, t, e, a);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            On(l, t),
            l === null
              ? (a = Wo(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = a)
                : dl ||
                  ((a = t.type),
                  (l = t.pendingProps),
                  (e = Xn(H.current).createElement(a)),
                  (e[Fl] = t),
                  (e[ut] = l),
                  Wl(e, a, l),
                  Xl(e),
                  (t.stateNode = e))
              : (t.memoizedState = Wo(
                  t.type,
                  l.memoizedProps,
                  t.pendingProps,
                  l.memoizedState
                )),
            null
          );
        case 27:
          return (
            El(t),
            l === null &&
              dl &&
              ((e = t.stateNode =
                wo(t.type, t.pendingProps, H.current)),
              (et = t),
              (Yt = !0),
              (u = Dl),
              Ma(t.type)
                ? ((ni = u), (Dl = jt(e.firstChild)))
                : (Dl = u)),
            Kl(l, t, t.pendingProps.children, a),
            On(l, t),
            l === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            l === null &&
              dl &&
              ((u = e = Dl) &&
                ((e = vv(e, t.type, t.pendingProps, Yt)),
                e !== null
                  ? ((t.stateNode = e),
                    (et = t),
                    (Dl = jt(e.firstChild)),
                    (Yt = !1),
                    (u = !0))
                  : (u = !1)),
              u || Xa(t)),
            El(t),
            (u = t.type),
            (n = t.pendingProps),
            (c = l !== null ? l.memoizedProps : null),
            (e = n.children),
            ti(u, n)
              ? (e = null)
              : c !== null && ti(u, c) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((u = Ic(l, t, x0, null, null, a)),
              (Ru._currentValue = u)),
            On(l, t),
            Kl(l, t, e, a),
            t.child
          );
        case 6:
          return (
            l === null &&
              dl &&
              ((l = a = Dl) &&
                ((a = hv(a, t.pendingProps, Yt)),
                a !== null
                  ? ((t.stateNode = a),
                    (et = t),
                    (Dl = null),
                    (l = !0))
                  : (l = !1)),
              l || Xa(t)),
            null
          );
        case 13:
          return Xs(l, t, a);
        case 4:
          return (
            K(t, t.stateNode.containerInfo),
            (e = t.pendingProps),
            l === null
              ? (t.child = Ee(t, null, e, a))
              : Kl(l, t, e, a),
            t.child
          );
        case 11:
          return Ns(l, t, t.type, t.pendingProps, a);
        case 7:
          return Kl(l, t, t.pendingProps, a), t.child;
        case 8:
          return Kl(l, t, t.pendingProps.children, a), t.child;
        case 12:
          return Kl(l, t, t.pendingProps.children, a), t.child;
        case 10:
          return (
            (e = t.pendingProps),
            ra(t, t.type, e.value),
            Kl(l, t, e.children, a),
            t.child
          );
        case 9:
          return (
            (u = t.type._context),
            (e = t.pendingProps.children),
            Za(t),
            (u = Pl(u)),
            (e = e(u)),
            (t.flags |= 1),
            Kl(l, t, e, a),
            t.child
          );
        case 14:
          return Hs(l, t, t.type, t.pendingProps, a);
        case 15:
          return js(l, t, t.type, t.pendingProps, a);
        case 19:
          return Zs(l, t, a);
        case 31:
          return (
            (e = t.pendingProps),
            (a = t.mode),
            (e = { mode: e.mode, children: e.children }),
            l === null
              ? ((a = An(e, a)),
                (a.ref = t.ref),
                (t.child = a),
                (a.return = t),
                (t = a))
              : ((a = Kt(l.child, e)),
                (a.ref = t.ref),
                (t.child = a),
                (a.return = t),
                (t = a)),
            t
          );
        case 22:
          return qs(l, t, a);
        case 24:
          return (
            Za(t),
            (e = Pl(Cl)),
            l === null
              ? ((u = Vc()),
                u === null &&
                  ((u = Ml),
                  (n = Zc()),
                  (u.pooledCache = n),
                  n.refCount++,
                  n !== null && (u.pooledCacheLanes |= a),
                  (u = n)),
                (t.memoizedState = { parent: e, cache: u }),
                Kc(t),
                ra(t, Cl, u))
              : ((l.lanes & a) !== 0 &&
                  (Jc(l, t), fu(t, null, null, a), cu()),
                (u = l.memoizedState),
                (n = t.memoizedState),
                u.parent !== e
                  ? ((u = { parent: e, cache: e }),
                    (t.memoizedState = u),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = u),
                    ra(t, Cl, e))
                  : ((e = n.cache),
                    ra(t, Cl, e),
                    e !== u.cache && Qc(t, [Cl], a, !0))),
            Kl(l, t, t.pendingProps.children, a),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(d(156, t.tag));
    }
    function la(l) {
      l.flags |= 4;
    }
    function Vs(l, t) {
      if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0)
        l.flags &= -16777217;
      else if (((l.flags |= 16777216), !Io(t))) {
        if (
          ((t = At.current),
          t !== null &&
            ((rl & 4194048) === rl
              ? Gt !== null
              : ((rl & 62914560) !== rl && (rl & 536870912) === 0) ||
                t !== Gt))
        )
          throw ((uu = wc), zr);
        l.flags |= 8192;
      }
    }
    function zn(l, t) {
      t !== null && (l.flags |= 4),
        l.flags & 16384 &&
          ((t = l.tag !== 22 ? Ei() : 536870912),
          (l.lanes |= t),
          (Ae |= t));
    }
    function hu(l, t) {
      if (!dl)
        switch (l.tailMode) {
          case 'hidden':
            t = l.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), (t = t.sibling);
            a === null ? (l.tail = null) : (a.sibling = null);
            break;
          case 'collapsed':
            a = l.tail;
            for (var e = null; a !== null; )
              a.alternate !== null && (e = a), (a = a.sibling);
            e === null
              ? t || l.tail === null
                ? (l.tail = null)
                : (l.tail.sibling = null)
              : (e.sibling = null);
        }
    }
    function Al(l) {
      var t = l.alternate !== null && l.alternate.child === l.child,
        a = 0,
        e = 0;
      if (t)
        for (var u = l.child; u !== null; )
          (a |= u.lanes | u.childLanes),
            (e |= u.subtreeFlags & 65011712),
            (e |= u.flags & 65011712),
            (u.return = l),
            (u = u.sibling);
      else
        for (u = l.child; u !== null; )
          (a |= u.lanes | u.childLanes),
            (e |= u.subtreeFlags),
            (e |= u.flags),
            (u.return = l),
            (u = u.sibling);
      return (l.subtreeFlags |= e), (l.childLanes = a), t;
    }
    function X0(l, t, a) {
      var e = t.pendingProps;
      switch ((Cc(t), t.tag)) {
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
          return Al(t), null;
        case 1:
          return Al(t), null;
        case 3:
          return (
            (a = t.stateNode),
            (e = null),
            l !== null && (e = l.memoizedState.cache),
            t.memoizedState.cache !== e && (t.flags |= 2048),
            $t(Cl),
            il(),
            a.pendingContext &&
              ((a.context = a.pendingContext),
              (a.pendingContext = null)),
            (l === null || l.child === null) &&
              (Fe(t)
                ? la(t)
                : l === null ||
                  (l.memoizedState.isDehydrated &&
                    (t.flags & 256) === 0) ||
                  ((t.flags |= 1024), Er())),
            Al(t),
            null
          );
        case 26:
          return (
            (a = t.memoizedState),
            l === null
              ? (la(t),
                a !== null
                  ? (Al(t), Vs(t, a))
                  : (Al(t), (t.flags &= -16777217)))
              : a
              ? a !== l.memoizedState
                ? (la(t), Al(t), Vs(t, a))
                : (Al(t), (t.flags &= -16777217))
              : (l.memoizedProps !== e && la(t),
                Al(t),
                (t.flags &= -16777217)),
            null
          );
        case 27:
          vl(t), (a = H.current);
          var u = t.type;
          if (l !== null && t.stateNode != null)
            l.memoizedProps !== e && la(t);
          else {
            if (!e) {
              if (t.stateNode === null) throw Error(d(166));
              return Al(t), null;
            }
            (l = D.current),
              Fe(t)
                ? pr(t)
                : ((l = wo(u, e, a)), (t.stateNode = l), la(t));
          }
          return Al(t), null;
        case 5:
          if (
            (vl(t), (a = t.type), l !== null && t.stateNode != null)
          )
            l.memoizedProps !== e && la(t);
          else {
            if (!e) {
              if (t.stateNode === null) throw Error(d(166));
              return Al(t), null;
            }
            if (((l = D.current), Fe(t))) pr(t);
            else {
              switch (((u = Xn(H.current)), l)) {
                case 1:
                  l = u.createElementNS(
                    'http://www.w3.org/2000/svg',
                    a
                  );
                  break;
                case 2:
                  l = u.createElementNS(
                    'http://www.w3.org/1998/Math/MathML',
                    a
                  );
                  break;
                default:
                  switch (a) {
                    case 'svg':
                      l = u.createElementNS(
                        'http://www.w3.org/2000/svg',
                        a
                      );
                      break;
                    case 'math':
                      l = u.createElementNS(
                        'http://www.w3.org/1998/Math/MathML',
                        a
                      );
                      break;
                    case 'script':
                      (l = u.createElement('div')),
                        (l.innerHTML = '<script></script>'),
                        (l = l.removeChild(l.firstChild));
                      break;
                    case 'select':
                      (l =
                        typeof e.is == 'string'
                          ? u.createElement('select', { is: e.is })
                          : u.createElement('select')),
                        e.multiple
                          ? (l.multiple = !0)
                          : e.size && (l.size = e.size);
                      break;
                    default:
                      l =
                        typeof e.is == 'string'
                          ? u.createElement(a, { is: e.is })
                          : u.createElement(a);
                  }
              }
              (l[Fl] = t), (l[ut] = e);
              l: for (u = t.child; u !== null; ) {
                if (u.tag === 5 || u.tag === 6)
                  l.appendChild(u.stateNode);
                else if (
                  u.tag !== 4 &&
                  u.tag !== 27 &&
                  u.child !== null
                ) {
                  (u.child.return = u), (u = u.child);
                  continue;
                }
                if (u === t) break l;
                for (; u.sibling === null; ) {
                  if (u.return === null || u.return === t) break l;
                  u = u.return;
                }
                (u.sibling.return = u.return), (u = u.sibling);
              }
              t.stateNode = l;
              l: switch ((Wl(l, a, e), a)) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  l = !!e.autoFocus;
                  break l;
                case 'img':
                  l = !0;
                  break l;
                default:
                  l = !1;
              }
              l && la(t);
            }
          }
          return Al(t), (t.flags &= -16777217), null;
        case 6:
          if (l && t.stateNode != null)
            l.memoizedProps !== e && la(t);
          else {
            if (typeof e != 'string' && t.stateNode === null)
              throw Error(d(166));
            if (((l = H.current), Fe(t))) {
              if (
                ((l = t.stateNode),
                (a = t.memoizedProps),
                (e = null),
                (u = et),
                u !== null)
              )
                switch (u.tag) {
                  case 27:
                  case 5:
                    e = u.memoizedProps;
                }
              (l[Fl] = t),
                (l = !!(
                  l.nodeValue === a ||
                  (e !== null && e.suppressHydrationWarning === !0) ||
                  Yo(l.nodeValue, a)
                )),
                l || Xa(t);
            } else
              (l = Xn(l).createTextNode(e)),
                (l[Fl] = t),
                (t.stateNode = l);
          }
          return Al(t), null;
        case 13:
          if (
            ((e = t.memoizedState),
            l === null ||
              (l.memoizedState !== null &&
                l.memoizedState.dehydrated !== null))
          ) {
            if (((u = Fe(t)), e !== null && e.dehydrated !== null)) {
              if (l === null) {
                if (!u) throw Error(d(318));
                if (
                  ((u = t.memoizedState),
                  (u = u !== null ? u.dehydrated : null),
                  !u)
                )
                  throw Error(d(317));
                u[Fl] = t;
              } else
                Pe(),
                  (t.flags & 128) === 0 && (t.memoizedState = null),
                  (t.flags |= 4);
              Al(t), (u = !1);
            } else
              (u = Er()),
                l !== null &&
                  l.memoizedState !== null &&
                  (l.memoizedState.hydrationErrors = u),
                (u = !0);
            if (!u) return t.flags & 256 ? (Pt(t), t) : (Pt(t), null);
          }
          if ((Pt(t), (t.flags & 128) !== 0)) return (t.lanes = a), t;
          if (
            ((a = e !== null),
            (l = l !== null && l.memoizedState !== null),
            a)
          ) {
            (e = t.child),
              (u = null),
              e.alternate !== null &&
                e.alternate.memoizedState !== null &&
                e.alternate.memoizedState.cachePool !== null &&
                (u = e.alternate.memoizedState.cachePool.pool);
            var n = null;
            e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
              n !== u && (e.flags |= 2048);
          }
          return (
            a !== l && a && (t.child.flags |= 8192),
            zn(t, t.updateQueue),
            Al(t),
            null
          );
        case 4:
          return (
            il(),
            l === null && $f(t.stateNode.containerInfo),
            Al(t),
            null
          );
        case 10:
          return $t(t.type), Al(t), null;
        case 19:
          if ((E(Yl), (u = t.memoizedState), u === null))
            return Al(t), null;
          if (
            ((e = (t.flags & 128) !== 0),
            (n = u.rendering),
            n === null)
          )
            if (e) hu(u, !1);
            else {
              if (Rl !== 0 || (l !== null && (l.flags & 128) !== 0))
                for (l = t.child; l !== null; ) {
                  if (((n = En(l)), n !== null)) {
                    for (
                      t.flags |= 128,
                        hu(u, !1),
                        l = n.updateQueue,
                        t.updateQueue = l,
                        zn(t, l),
                        t.subtreeFlags = 0,
                        l = a,
                        a = t.child;
                      a !== null;

                    )
                      br(a, l), (a = a.sibling);
                    return _(Yl, (Yl.current & 1) | 2), t.child;
                  }
                  l = l.sibling;
                }
              u.tail !== null &&
                zl() > Un &&
                ((t.flags |= 128),
                (e = !0),
                hu(u, !1),
                (t.lanes = 4194304));
            }
          else {
            if (!e)
              if (((l = En(n)), l !== null)) {
                if (
                  ((t.flags |= 128),
                  (e = !0),
                  (l = l.updateQueue),
                  (t.updateQueue = l),
                  zn(t, l),
                  hu(u, !0),
                  u.tail === null &&
                    u.tailMode === 'hidden' &&
                    !n.alternate &&
                    !dl)
                )
                  return Al(t), null;
              } else
                2 * zl() - u.renderingStartTime > Un &&
                  a !== 536870912 &&
                  ((t.flags |= 128),
                  (e = !0),
                  hu(u, !1),
                  (t.lanes = 4194304));
            u.isBackwards
              ? ((n.sibling = t.child), (t.child = n))
              : ((l = u.last),
                l !== null ? (l.sibling = n) : (t.child = n),
                (u.last = n));
          }
          return u.tail !== null
            ? ((t = u.tail),
              (u.rendering = t),
              (u.tail = t.sibling),
              (u.renderingStartTime = zl()),
              (t.sibling = null),
              (l = Yl.current),
              _(Yl, e ? (l & 1) | 2 : l & 1),
              t)
            : (Al(t), null);
        case 22:
        case 23:
          return (
            Pt(t),
            Fc(),
            (e = t.memoizedState !== null),
            l !== null
              ? (l.memoizedState !== null) !== e && (t.flags |= 8192)
              : e && (t.flags |= 8192),
            e
              ? (a & 536870912) !== 0 &&
                (t.flags & 128) === 0 &&
                (Al(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : Al(t),
            (a = t.updateQueue),
            a !== null && zn(t, a.retryQueue),
            (a = null),
            l !== null &&
              l.memoizedState !== null &&
              l.memoizedState.cachePool !== null &&
              (a = l.memoizedState.cachePool.pool),
            (e = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (e = t.memoizedState.cachePool.pool),
            e !== a && (t.flags |= 2048),
            l !== null && E(La),
            null
          );
        case 24:
          return (
            (a = null),
            l !== null && (a = l.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            $t(Cl),
            Al(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(d(156, t.tag));
    }
    function Q0(l, t) {
      switch ((Cc(t), t.tag)) {
        case 1:
          return (
            (l = t.flags),
            l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
          );
        case 3:
          return (
            $t(Cl),
            il(),
            (l = t.flags),
            (l & 65536) !== 0 && (l & 128) === 0
              ? ((t.flags = (l & -65537) | 128), t)
              : null
          );
        case 26:
        case 27:
        case 5:
          return vl(t), null;
        case 13:
          if (
            (Pt(t),
            (l = t.memoizedState),
            l !== null && l.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(d(340));
            Pe();
          }
          return (
            (l = t.flags),
            l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
          );
        case 19:
          return E(Yl), null;
        case 4:
          return il(), null;
        case 10:
          return $t(t.type), null;
        case 22:
        case 23:
          return (
            Pt(t),
            Fc(),
            l !== null && E(La),
            (l = t.flags),
            l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
          );
        case 24:
          return $t(Cl), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function ws(l, t) {
      switch ((Cc(t), t.tag)) {
        case 3:
          $t(Cl), il();
          break;
        case 26:
        case 27:
        case 5:
          vl(t);
          break;
        case 4:
          il();
          break;
        case 13:
          Pt(t);
          break;
        case 19:
          E(Yl);
          break;
        case 10:
          $t(t.type);
          break;
        case 22:
        case 23:
          Pt(t), Fc(), l !== null && E(La);
          break;
        case 24:
          $t(Cl);
      }
    }
    function yu(l, t) {
      try {
        var a = t.updateQueue,
          e = a !== null ? a.lastEffect : null;
        if (e !== null) {
          var u = e.next;
          a = u;
          do {
            if ((a.tag & l) === l) {
              e = void 0;
              var n = a.create,
                c = a.inst;
              (e = n()), (c.destroy = e);
            }
            a = a.next;
          } while (a !== u);
        }
      } catch (f) {
        pl(t, t.return, f);
      }
    }
    function ma(l, t, a) {
      try {
        var e = t.updateQueue,
          u = e !== null ? e.lastEffect : null;
        if (u !== null) {
          var n = u.next;
          e = n;
          do {
            if ((e.tag & l) === l) {
              var c = e.inst,
                f = c.destroy;
              if (f !== void 0) {
                (c.destroy = void 0), (u = t);
                var s = a,
                  y = f;
                try {
                  y();
                } catch (T) {
                  pl(u, s, T);
                }
              }
            }
            e = e.next;
          } while (e !== n);
        }
      } catch (T) {
        pl(t, t.return, T);
      }
    }
    function Ks(l) {
      var t = l.updateQueue;
      if (t !== null) {
        var a = l.stateNode;
        try {
          Hr(t, a);
        } catch (e) {
          pl(l, l.return, e);
        }
      }
    }
    function Js(l, t, a) {
      (a.props = wa(l.type, l.memoizedProps)),
        (a.state = l.memoizedState);
      try {
        a.componentWillUnmount();
      } catch (e) {
        pl(l, t, e);
      }
    }
    function mu(l, t) {
      try {
        var a = l.ref;
        if (a !== null) {
          switch (l.tag) {
            case 26:
            case 27:
            case 5:
              var e = l.stateNode;
              break;
            case 30:
              e = l.stateNode;
              break;
            default:
              e = l.stateNode;
          }
          typeof a == 'function'
            ? (l.refCleanup = a(e))
            : (a.current = e);
        }
      } catch (u) {
        pl(l, t, u);
      }
    }
    function Xt(l, t) {
      var a = l.ref,
        e = l.refCleanup;
      if (a !== null)
        if (typeof e == 'function')
          try {
            e();
          } catch (u) {
            pl(l, t, u);
          } finally {
            (l.refCleanup = null),
              (l = l.alternate),
              l != null && (l.refCleanup = null);
          }
        else if (typeof a == 'function')
          try {
            a(null);
          } catch (u) {
            pl(l, t, u);
          }
        else a.current = null;
    }
    function Ws(l) {
      var t = l.type,
        a = l.memoizedProps,
        e = l.stateNode;
      try {
        l: switch (t) {
          case 'button':
          case 'input':
          case 'select':
          case 'textarea':
            a.autoFocus && e.focus();
            break l;
          case 'img':
            a.src
              ? (e.src = a.src)
              : a.srcSet && (e.srcset = a.srcSet);
        }
      } catch (u) {
        pl(l, l.return, u);
      }
    }
    function Af(l, t, a) {
      try {
        var e = l.stateNode;
        iv(e, l.type, a, t), (e[ut] = t);
      } catch (u) {
        pl(l, l.return, u);
      }
    }
    function ks(l) {
      return (
        l.tag === 5 ||
        l.tag === 3 ||
        l.tag === 26 ||
        (l.tag === 27 && Ma(l.type)) ||
        l.tag === 4
      );
    }
    function zf(l) {
      l: for (;;) {
        for (; l.sibling === null; ) {
          if (l.return === null || ks(l.return)) return null;
          l = l.return;
        }
        for (
          l.sibling.return = l.return, l = l.sibling;
          l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

        ) {
          if (
            (l.tag === 27 && Ma(l.type)) ||
            l.flags & 2 ||
            l.child === null ||
            l.tag === 4
          )
            continue l;
          (l.child.return = l), (l = l.child);
        }
        if (!(l.flags & 2)) return l.stateNode;
      }
    }
    function Df(l, t, a) {
      var e = l.tag;
      if (e === 5 || e === 6)
        (l = l.stateNode),
          t
            ? (a.nodeType === 9
                ? a.body
                : a.nodeName === 'HTML'
                ? a.ownerDocument.body
                : a
              ).insertBefore(l, t)
            : ((t =
                a.nodeType === 9
                  ? a.body
                  : a.nodeName === 'HTML'
                  ? a.ownerDocument.body
                  : a),
              t.appendChild(l),
              (a = a._reactRootContainer),
              a != null || t.onclick !== null || (t.onclick = Gn));
      else if (
        e !== 4 &&
        (e === 27 && Ma(l.type) && ((a = l.stateNode), (t = null)),
        (l = l.child),
        l !== null)
      )
        for (Df(l, t, a), l = l.sibling; l !== null; )
          Df(l, t, a), (l = l.sibling);
    }
    function Dn(l, t, a) {
      var e = l.tag;
      if (e === 5 || e === 6)
        (l = l.stateNode),
          t ? a.insertBefore(l, t) : a.appendChild(l);
      else if (
        e !== 4 &&
        (e === 27 && Ma(l.type) && (a = l.stateNode),
        (l = l.child),
        l !== null)
      )
        for (Dn(l, t, a), l = l.sibling; l !== null; )
          Dn(l, t, a), (l = l.sibling);
    }
    function $s(l) {
      var t = l.stateNode,
        a = l.memoizedProps;
      try {
        for (var e = l.type, u = t.attributes; u.length; )
          t.removeAttributeNode(u[0]);
        Wl(t, e, a), (t[Fl] = l), (t[ut] = a);
      } catch (n) {
        pl(l, l.return, n);
      }
    }
    var ta = !1,
      Hl = !1,
      Rf = !1,
      Fs = typeof WeakSet == 'function' ? WeakSet : Set,
      Zl = null;
    function Z0(l, t) {
      if (((l = l.containerInfo), (If = Kn), (l = ir(l)), Ac(l))) {
        if ('selectionStart' in l)
          var a = { start: l.selectionStart, end: l.selectionEnd };
        else
          l: {
            a = ((a = l.ownerDocument) && a.defaultView) || window;
            var e = a.getSelection && a.getSelection();
            if (e && e.rangeCount !== 0) {
              a = e.anchorNode;
              var u = e.anchorOffset,
                n = e.focusNode;
              e = e.focusOffset;
              try {
                a.nodeType, n.nodeType;
              } catch {
                a = null;
                break l;
              }
              var c = 0,
                f = -1,
                s = -1,
                y = 0,
                T = 0,
                A = l,
                m = null;
              t: for (;;) {
                for (
                  var g;
                  A !== a ||
                    (u !== 0 && A.nodeType !== 3) ||
                    (f = c + u),
                    A !== n ||
                      (e !== 0 && A.nodeType !== 3) ||
                      (s = c + e),
                    A.nodeType === 3 && (c += A.nodeValue.length),
                    (g = A.firstChild) !== null;

                )
                  (m = A), (A = g);
                for (;;) {
                  if (A === l) break t;
                  if (
                    (m === a && ++y === u && (f = c),
                    m === n && ++T === e && (s = c),
                    (g = A.nextSibling) !== null)
                  )
                    break;
                  (A = m), (m = A.parentNode);
                }
                A = g;
              }
              a = f === -1 || s === -1 ? null : { start: f, end: s };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (
        li = { focusedElem: l, selectionRange: a }, Kn = !1, Zl = t;
        Zl !== null;

      )
        if (
          ((t = Zl),
          (l = t.child),
          (t.subtreeFlags & 1024) !== 0 && l !== null)
        )
          (l.return = t), (Zl = l);
        else
          for (; Zl !== null; ) {
            switch (
              ((t = Zl), (n = t.alternate), (l = t.flags), t.tag)
            ) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                if ((l & 1024) !== 0 && n !== null) {
                  (l = void 0),
                    (a = t),
                    (u = n.memoizedProps),
                    (n = n.memoizedState),
                    (e = a.stateNode);
                  try {
                    var P = wa(a.type, u, a.elementType === a.type);
                    (l = e.getSnapshotBeforeUpdate(P, n)),
                      (e.__reactInternalSnapshotBeforeUpdate = l);
                  } catch (k) {
                    pl(a, a.return, k);
                  }
                }
                break;
              case 3:
                if ((l & 1024) !== 0) {
                  if (
                    ((l = t.stateNode.containerInfo),
                    (a = l.nodeType),
                    a === 9)
                  )
                    ei(l);
                  else if (a === 1)
                    switch (l.nodeName) {
                      case 'HEAD':
                      case 'HTML':
                      case 'BODY':
                        ei(l);
                        break;
                      default:
                        l.textContent = '';
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
                if ((l & 1024) !== 0) throw Error(d(163));
            }
            if (((l = t.sibling), l !== null)) {
              (l.return = t.return), (Zl = l);
              break;
            }
            Zl = t.return;
          }
    }
    function Ps(l, t, a) {
      var e = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ga(l, a), e & 4 && yu(5, a);
          break;
        case 1:
          if ((ga(l, a), e & 4))
            if (((l = a.stateNode), t === null))
              try {
                l.componentDidMount();
              } catch (c) {
                pl(a, a.return, c);
              }
            else {
              var u = wa(a.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                l.componentDidUpdate(
                  u,
                  t,
                  l.__reactInternalSnapshotBeforeUpdate
                );
              } catch (c) {
                pl(a, a.return, c);
              }
            }
          e & 64 && Ks(a), e & 512 && mu(a, a.return);
          break;
        case 3:
          if (
            (ga(l, a), e & 64 && ((l = a.updateQueue), l !== null))
          ) {
            if (((t = null), a.child !== null))
              switch (a.child.tag) {
                case 27:
                case 5:
                  t = a.child.stateNode;
                  break;
                case 1:
                  t = a.child.stateNode;
              }
            try {
              Hr(l, t);
            } catch (c) {
              pl(a, a.return, c);
            }
          }
          break;
        case 27:
          t === null && e & 4 && $s(a);
        case 26:
        case 5:
          ga(l, a),
            t === null && e & 4 && Ws(a),
            e & 512 && mu(a, a.return);
          break;
        case 12:
          ga(l, a);
          break;
        case 13:
          ga(l, a),
            e & 4 && to(l, a),
            e & 64 &&
              ((l = a.memoizedState),
              l !== null &&
                ((l = l.dehydrated),
                l !== null && ((a = F0.bind(null, a)), yv(l, a))));
          break;
        case 22:
          if (((e = a.memoizedState !== null || ta), !e)) {
            (t = (t !== null && t.memoizedState !== null) || Hl),
              (u = ta);
            var n = Hl;
            (ta = e),
              (Hl = t) && !n
                ? ba(l, a, (a.subtreeFlags & 8772) !== 0)
                : ga(l, a),
              (ta = u),
              (Hl = n);
          }
          break;
        case 30:
          break;
        default:
          ga(l, a);
      }
    }
    function Is(l) {
      var t = l.alternate;
      t !== null && ((l.alternate = null), Is(t)),
        (l.child = null),
        (l.deletions = null),
        (l.sibling = null),
        l.tag === 5 && ((t = l.stateNode), t !== null && fc(t)),
        (l.stateNode = null),
        (l.return = null),
        (l.dependencies = null),
        (l.memoizedProps = null),
        (l.memoizedState = null),
        (l.pendingProps = null),
        (l.stateNode = null),
        (l.updateQueue = null);
    }
    var Ol = null,
      ft = !1;
    function aa(l, t, a) {
      for (a = a.child; a !== null; ) lo(l, t, a), (a = a.sibling);
    }
    function lo(l, t, a) {
      if (at && typeof at.onCommitFiberUnmount == 'function')
        try {
          at.onCommitFiberUnmount(ca, a);
        } catch {}
      switch (a.tag) {
        case 26:
          Hl || Xt(a, t),
            aa(l, t, a),
            a.memoizedState
              ? a.memoizedState.count--
              : a.stateNode &&
                ((a = a.stateNode), a.parentNode.removeChild(a));
          break;
        case 27:
          Hl || Xt(a, t);
          var e = Ol,
            u = ft;
          Ma(a.type) && ((Ol = a.stateNode), (ft = !1)),
            aa(l, t, a),
            Ou(a.stateNode),
            (Ol = e),
            (ft = u);
          break;
        case 5:
          Hl || Xt(a, t);
        case 6:
          if (
            ((e = Ol),
            (u = ft),
            (Ol = null),
            aa(l, t, a),
            (Ol = e),
            (ft = u),
            Ol !== null)
          )
            if (ft)
              try {
                (Ol.nodeType === 9
                  ? Ol.body
                  : Ol.nodeName === 'HTML'
                  ? Ol.ownerDocument.body
                  : Ol
                ).removeChild(a.stateNode);
              } catch (n) {
                pl(a, t, n);
              }
            else
              try {
                Ol.removeChild(a.stateNode);
              } catch (n) {
                pl(a, t, n);
              }
          break;
        case 18:
          Ol !== null &&
            (ft
              ? ((l = Ol),
                Lo(
                  l.nodeType === 9
                    ? l.body
                    : l.nodeName === 'HTML'
                    ? l.ownerDocument.body
                    : l,
                  a.stateNode
                ),
                Hu(l))
              : Lo(Ol, a.stateNode));
          break;
        case 4:
          (e = Ol),
            (u = ft),
            (Ol = a.stateNode.containerInfo),
            (ft = !0),
            aa(l, t, a),
            (Ol = e),
            (ft = u);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Hl || ma(2, a, t), Hl || ma(4, a, t), aa(l, t, a);
          break;
        case 1:
          Hl ||
            (Xt(a, t),
            (e = a.stateNode),
            typeof e.componentWillUnmount == 'function' &&
              Js(a, t, e)),
            aa(l, t, a);
          break;
        case 21:
          aa(l, t, a);
          break;
        case 22:
          (Hl = (e = Hl) || a.memoizedState !== null),
            aa(l, t, a),
            (Hl = e);
          break;
        default:
          aa(l, t, a);
      }
    }
    function to(l, t) {
      if (
        t.memoizedState === null &&
        ((l = t.alternate),
        l !== null &&
          ((l = l.memoizedState),
          l !== null && ((l = l.dehydrated), l !== null)))
      )
        try {
          Hu(l);
        } catch (a) {
          pl(t, t.return, a);
        }
    }
    function L0(l) {
      switch (l.tag) {
        case 13:
        case 19:
          var t = l.stateNode;
          return t === null && (t = l.stateNode = new Fs()), t;
        case 22:
          return (
            (l = l.stateNode),
            (t = l._retryCache),
            t === null && (t = l._retryCache = new Fs()),
            t
          );
        default:
          throw Error(d(435, l.tag));
      }
    }
    function Uf(l, t) {
      var a = L0(l);
      t.forEach(function (e) {
        var u = P0.bind(null, l, e);
        a.has(e) || (a.add(e), e.then(u, u));
      });
    }
    function ht(l, t) {
      var a = t.deletions;
      if (a !== null)
        for (var e = 0; e < a.length; e++) {
          var u = a[e],
            n = l,
            c = t,
            f = c;
          l: for (; f !== null; ) {
            switch (f.tag) {
              case 27:
                if (Ma(f.type)) {
                  (Ol = f.stateNode), (ft = !1);
                  break l;
                }
                break;
              case 5:
                (Ol = f.stateNode), (ft = !1);
                break l;
              case 3:
              case 4:
                (Ol = f.stateNode.containerInfo), (ft = !0);
                break l;
            }
            f = f.return;
          }
          if (Ol === null) throw Error(d(160));
          lo(n, c, u),
            (Ol = null),
            (ft = !1),
            (n = u.alternate),
            n !== null && (n.return = null),
            (u.return = null);
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; ) ao(t, l), (t = t.sibling);
    }
    var Ht = null;
    function ao(l, t) {
      var a = l.alternate,
        e = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ht(t, l),
            yt(l),
            e & 4 &&
              (ma(3, l, l.return), yu(3, l), ma(5, l, l.return));
          break;
        case 1:
          ht(t, l),
            yt(l),
            e & 512 && (Hl || a === null || Xt(a, a.return)),
            e & 64 &&
              ta &&
              ((l = l.updateQueue),
              l !== null &&
                ((e = l.callbacks),
                e !== null &&
                  ((a = l.shared.hiddenCallbacks),
                  (l.shared.hiddenCallbacks =
                    a === null ? e : a.concat(e)))));
          break;
        case 26:
          var u = Ht;
          if (
            (ht(t, l),
            yt(l),
            e & 512 && (Hl || a === null || Xt(a, a.return)),
            e & 4)
          ) {
            var n = a !== null ? a.memoizedState : null;
            if (((e = l.memoizedState), a === null))
              if (e === null)
                if (l.stateNode === null) {
                  l: {
                    (e = l.type),
                      (a = l.memoizedProps),
                      (u = u.ownerDocument || u);
                    t: switch (e) {
                      case 'title':
                        (n = u.getElementsByTagName('title')[0]),
                          (!n ||
                            n[Xe] ||
                            n[Fl] ||
                            n.namespaceURI ===
                              'http://www.w3.org/2000/svg' ||
                            n.hasAttribute('itemprop')) &&
                            ((n = u.createElement(e)),
                            u.head.insertBefore(
                              n,
                              u.querySelector('head > title')
                            )),
                          Wl(n, e, a),
                          (n[Fl] = l),
                          Xl(n),
                          (e = n);
                        break l;
                      case 'link':
                        var c = Fo('link', 'href', u).get(
                          e + (a.href || '')
                        );
                        if (c) {
                          for (var f = 0; f < c.length; f++)
                            if (
                              ((n = c[f]),
                              n.getAttribute('href') ===
                                (a.href == null || a.href === ''
                                  ? null
                                  : a.href) &&
                                n.getAttribute('rel') ===
                                  (a.rel == null ? null : a.rel) &&
                                n.getAttribute('title') ===
                                  (a.title == null
                                    ? null
                                    : a.title) &&
                                n.getAttribute('crossorigin') ===
                                  (a.crossOrigin == null
                                    ? null
                                    : a.crossOrigin))
                            ) {
                              c.splice(f, 1);
                              break t;
                            }
                        }
                        (n = u.createElement(e)),
                          Wl(n, e, a),
                          u.head.appendChild(n);
                        break;
                      case 'meta':
                        if (
                          (c = Fo('meta', 'content', u).get(
                            e + (a.content || '')
                          ))
                        ) {
                          for (f = 0; f < c.length; f++)
                            if (
                              ((n = c[f]),
                              n.getAttribute('content') ===
                                (a.content == null
                                  ? null
                                  : '' + a.content) &&
                                n.getAttribute('name') ===
                                  (a.name == null ? null : a.name) &&
                                n.getAttribute('property') ===
                                  (a.property == null
                                    ? null
                                    : a.property) &&
                                n.getAttribute('http-equiv') ===
                                  (a.httpEquiv == null
                                    ? null
                                    : a.httpEquiv) &&
                                n.getAttribute('charset') ===
                                  (a.charSet == null
                                    ? null
                                    : a.charSet))
                            ) {
                              c.splice(f, 1);
                              break t;
                            }
                        }
                        (n = u.createElement(e)),
                          Wl(n, e, a),
                          u.head.appendChild(n);
                        break;
                      default:
                        throw Error(d(468, e));
                    }
                    (n[Fl] = l), Xl(n), (e = n);
                  }
                  l.stateNode = e;
                } else Po(u, l.type, l.stateNode);
              else l.stateNode = $o(u, e, l.memoizedProps);
            else
              n !== e
                ? (n === null
                    ? a.stateNode !== null &&
                      ((a = a.stateNode), a.parentNode.removeChild(a))
                    : n.count--,
                  e === null
                    ? Po(u, l.type, l.stateNode)
                    : $o(u, e, l.memoizedProps))
                : e === null &&
                  l.stateNode !== null &&
                  Af(l, l.memoizedProps, a.memoizedProps);
          }
          break;
        case 27:
          ht(t, l),
            yt(l),
            e & 512 && (Hl || a === null || Xt(a, a.return)),
            a !== null &&
              e & 4 &&
              Af(l, l.memoizedProps, a.memoizedProps);
          break;
        case 5:
          if (
            (ht(t, l),
            yt(l),
            e & 512 && (Hl || a === null || Xt(a, a.return)),
            l.flags & 32)
          ) {
            u = l.stateNode;
            try {
              ue(u, '');
            } catch (g) {
              pl(l, l.return, g);
            }
          }
          e & 4 &&
            l.stateNode != null &&
            ((u = l.memoizedProps),
            Af(l, u, a !== null ? a.memoizedProps : u)),
            e & 1024 && (Rf = !0);
          break;
        case 6:
          if ((ht(t, l), yt(l), e & 4)) {
            if (l.stateNode === null) throw Error(d(162));
            (e = l.memoizedProps), (a = l.stateNode);
            try {
              a.nodeValue = e;
            } catch (g) {
              pl(l, l.return, g);
            }
          }
          break;
        case 3:
          if (
            ((Ln = null),
            (u = Ht),
            (Ht = Qn(t.containerInfo)),
            ht(t, l),
            (Ht = u),
            yt(l),
            e & 4 && a !== null && a.memoizedState.isDehydrated)
          )
            try {
              Hu(t.containerInfo);
            } catch (g) {
              pl(l, l.return, g);
            }
          Rf && ((Rf = !1), eo(l));
          break;
        case 4:
          (e = Ht),
            (Ht = Qn(l.stateNode.containerInfo)),
            ht(t, l),
            yt(l),
            (Ht = e);
          break;
        case 12:
          ht(t, l), yt(l);
          break;
        case 13:
          ht(t, l),
            yt(l),
            l.child.flags & 8192 &&
              (l.memoizedState !== null) !=
                (a !== null && a.memoizedState !== null) &&
              (Bf = zl()),
            e & 4 &&
              ((e = l.updateQueue),
              e !== null && ((l.updateQueue = null), Uf(l, e)));
          break;
        case 22:
          u = l.memoizedState !== null;
          var s = a !== null && a.memoizedState !== null,
            y = ta,
            T = Hl;
          if (
            ((ta = y || u),
            (Hl = T || s),
            ht(t, l),
            (Hl = T),
            (ta = y),
            yt(l),
            e & 8192)
          )
            l: for (
              t = l.stateNode,
                t._visibility = u
                  ? t._visibility & -2
                  : t._visibility | 1,
                u && (a === null || s || ta || Hl || Ka(l)),
                a = null,
                t = l;
              ;

            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (a === null) {
                  s = a = t;
                  try {
                    if (((n = s.stateNode), u))
                      (c = n.style),
                        typeof c.setProperty == 'function'
                          ? c.setProperty(
                              'display',
                              'none',
                              'important'
                            )
                          : (c.display = 'none');
                    else {
                      f = s.stateNode;
                      var A = s.memoizedProps.style,
                        m =
                          A != null && A.hasOwnProperty('display')
                            ? A.display
                            : null;
                      f.style.display =
                        m == null || typeof m == 'boolean'
                          ? ''
                          : ('' + m).trim();
                    }
                  } catch (g) {
                    pl(s, s.return, g);
                  }
                }
              } else if (t.tag === 6) {
                if (a === null) {
                  s = t;
                  try {
                    s.stateNode.nodeValue = u ? '' : s.memoizedProps;
                  } catch (g) {
                    pl(s, s.return, g);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) ||
                  t.memoizedState === null ||
                  t === l) &&
                t.child !== null
              ) {
                (t.child.return = t), (t = t.child);
                continue;
              }
              if (t === l) break l;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === l) break l;
                a === t && (a = null), (t = t.return);
              }
              a === t && (a = null),
                (t.sibling.return = t.return),
                (t = t.sibling);
            }
          e & 4 &&
            ((e = l.updateQueue),
            e !== null &&
              ((a = e.retryQueue),
              a !== null && ((e.retryQueue = null), Uf(l, a))));
          break;
        case 19:
          ht(t, l),
            yt(l),
            e & 4 &&
              ((e = l.updateQueue),
              e !== null && ((l.updateQueue = null), Uf(l, e)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          ht(t, l), yt(l);
      }
    }
    function yt(l) {
      var t = l.flags;
      if (t & 2) {
        try {
          for (var a, e = l.return; e !== null; ) {
            if (ks(e)) {
              a = e;
              break;
            }
            e = e.return;
          }
          if (a == null) throw Error(d(160));
          switch (a.tag) {
            case 27:
              var u = a.stateNode,
                n = zf(l);
              Dn(l, n, u);
              break;
            case 5:
              var c = a.stateNode;
              a.flags & 32 && (ue(c, ''), (a.flags &= -33));
              var f = zf(l);
              Dn(l, f, c);
              break;
            case 3:
            case 4:
              var s = a.stateNode.containerInfo,
                y = zf(l);
              Df(l, y, s);
              break;
            default:
              throw Error(d(161));
          }
        } catch (T) {
          pl(l, l.return, T);
        }
        l.flags &= -3;
      }
      t & 4096 && (l.flags &= -4097);
    }
    function eo(l) {
      if (l.subtreeFlags & 1024)
        for (l = l.child; l !== null; ) {
          var t = l;
          eo(t),
            t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
            (l = l.sibling);
        }
    }
    function ga(l, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          Ps(l, t.alternate, t), (t = t.sibling);
    }
    function Ka(l) {
      for (l = l.child; l !== null; ) {
        var t = l;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ma(4, t, t.return), Ka(t);
            break;
          case 1:
            Xt(t, t.return);
            var a = t.stateNode;
            typeof a.componentWillUnmount == 'function' &&
              Js(t, t.return, a),
              Ka(t);
            break;
          case 27:
            Ou(t.stateNode);
          case 26:
          case 5:
            Xt(t, t.return), Ka(t);
            break;
          case 22:
            t.memoizedState === null && Ka(t);
            break;
          case 30:
            Ka(t);
            break;
          default:
            Ka(t);
        }
        l = l.sibling;
      }
    }
    function ba(l, t, a) {
      for (
        a = a && (t.subtreeFlags & 8772) !== 0, t = t.child;
        t !== null;

      ) {
        var e = t.alternate,
          u = l,
          n = t,
          c = n.flags;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            ba(u, n, a), yu(4, n);
            break;
          case 1:
            if (
              (ba(u, n, a),
              (e = n),
              (u = e.stateNode),
              typeof u.componentDidMount == 'function')
            )
              try {
                u.componentDidMount();
              } catch (y) {
                pl(e, e.return, y);
              }
            if (((e = n), (u = e.updateQueue), u !== null)) {
              var f = e.stateNode;
              try {
                var s = u.shared.hiddenCallbacks;
                if (s !== null)
                  for (
                    u.shared.hiddenCallbacks = null, u = 0;
                    u < s.length;
                    u++
                  )
                    Nr(s[u], f);
              } catch (y) {
                pl(e, e.return, y);
              }
            }
            a && c & 64 && Ks(n), mu(n, n.return);
            break;
          case 27:
            $s(n);
          case 26:
          case 5:
            ba(u, n, a),
              a && e === null && c & 4 && Ws(n),
              mu(n, n.return);
            break;
          case 12:
            ba(u, n, a);
            break;
          case 13:
            ba(u, n, a), a && c & 4 && to(u, n);
            break;
          case 22:
            n.memoizedState === null && ba(u, n, a), mu(n, n.return);
            break;
          case 30:
            break;
          default:
            ba(u, n, a);
        }
        t = t.sibling;
      }
    }
    function xf(l, t) {
      var a = null;
      l !== null &&
        l.memoizedState !== null &&
        l.memoizedState.cachePool !== null &&
        (a = l.memoizedState.cachePool.pool),
        (l = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (l = t.memoizedState.cachePool.pool),
        l !== a && (l != null && l.refCount++, a != null && tu(a));
    }
    function Nf(l, t) {
      (l = null),
        t.alternate !== null && (l = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== l && (t.refCount++, l != null && tu(l));
    }
    function Qt(l, t, a, e) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          uo(l, t, a, e), (t = t.sibling);
    }
    function uo(l, t, a, e) {
      var u = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Qt(l, t, a, e), u & 2048 && yu(9, t);
          break;
        case 1:
          Qt(l, t, a, e);
          break;
        case 3:
          Qt(l, t, a, e),
            u & 2048 &&
              ((l = null),
              t.alternate !== null &&
                (l = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== l && (t.refCount++, l != null && tu(l)));
          break;
        case 12:
          if (u & 2048) {
            Qt(l, t, a, e), (l = t.stateNode);
            try {
              var n = t.memoizedProps,
                c = n.id,
                f = n.onPostCommit;
              typeof f == 'function' &&
                f(
                  c,
                  t.alternate === null ? 'mount' : 'update',
                  l.passiveEffectDuration,
                  -0
                );
            } catch (s) {
              pl(t, t.return, s);
            }
          } else Qt(l, t, a, e);
          break;
        case 13:
          Qt(l, t, a, e);
          break;
        case 23:
          break;
        case 22:
          (n = t.stateNode),
            (c = t.alternate),
            t.memoizedState !== null
              ? n._visibility & 2
                ? Qt(l, t, a, e)
                : gu(l, t)
              : n._visibility & 2
              ? Qt(l, t, a, e)
              : ((n._visibility |= 2),
                _e(l, t, a, e, (t.subtreeFlags & 10256) !== 0)),
            u & 2048 && xf(c, t);
          break;
        case 24:
          Qt(l, t, a, e), u & 2048 && Nf(t.alternate, t);
          break;
        default:
          Qt(l, t, a, e);
      }
    }
    function _e(l, t, a, e, u) {
      for (
        u = u && (t.subtreeFlags & 10256) !== 0, t = t.child;
        t !== null;

      ) {
        var n = l,
          c = t,
          f = a,
          s = e,
          y = c.flags;
        switch (c.tag) {
          case 0:
          case 11:
          case 15:
            _e(n, c, f, s, u), yu(8, c);
            break;
          case 23:
            break;
          case 22:
            var T = c.stateNode;
            c.memoizedState !== null
              ? T._visibility & 2
                ? _e(n, c, f, s, u)
                : gu(n, c)
              : ((T._visibility |= 2), _e(n, c, f, s, u)),
              u && y & 2048 && xf(c.alternate, c);
            break;
          case 24:
            _e(n, c, f, s, u), u && y & 2048 && Nf(c.alternate, c);
            break;
          default:
            _e(n, c, f, s, u);
        }
        t = t.sibling;
      }
    }
    function gu(l, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var a = l,
            e = t,
            u = e.flags;
          switch (e.tag) {
            case 22:
              gu(a, e), u & 2048 && xf(e.alternate, e);
              break;
            case 24:
              gu(a, e), u & 2048 && Nf(e.alternate, e);
              break;
            default:
              gu(a, e);
          }
          t = t.sibling;
        }
    }
    var bu = 8192;
    function Me(l) {
      if (l.subtreeFlags & bu)
        for (l = l.child; l !== null; ) no(l), (l = l.sibling);
    }
    function no(l) {
      switch (l.tag) {
        case 26:
          Me(l),
            l.flags & bu &&
              l.memoizedState !== null &&
              Dv(Ht, l.memoizedState, l.memoizedProps);
          break;
        case 5:
          Me(l);
          break;
        case 3:
        case 4:
          var t = Ht;
          (Ht = Qn(l.stateNode.containerInfo)), Me(l), (Ht = t);
          break;
        case 22:
          l.memoizedState === null &&
            ((t = l.alternate),
            t !== null && t.memoizedState !== null
              ? ((t = bu), (bu = 16777216), Me(l), (bu = t))
              : Me(l));
          break;
        default:
          Me(l);
      }
    }
    function co(l) {
      var t = l.alternate;
      if (t !== null && ((l = t.child), l !== null)) {
        t.child = null;
        do (t = l.sibling), (l.sibling = null), (l = t);
        while (l !== null);
      }
    }
    function Su(l) {
      var t = l.deletions;
      if ((l.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var e = t[a];
            (Zl = e), io(e, l);
          }
        co(l);
      }
      if (l.subtreeFlags & 10256)
        for (l = l.child; l !== null; ) fo(l), (l = l.sibling);
    }
    function fo(l) {
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Su(l), l.flags & 2048 && ma(9, l, l.return);
          break;
        case 3:
          Su(l);
          break;
        case 12:
          Su(l);
          break;
        case 22:
          var t = l.stateNode;
          l.memoizedState !== null &&
          t._visibility & 2 &&
          (l.return === null || l.return.tag !== 13)
            ? ((t._visibility &= -3), Rn(l))
            : Su(l);
          break;
        default:
          Su(l);
      }
    }
    function Rn(l) {
      var t = l.deletions;
      if ((l.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var e = t[a];
            (Zl = e), io(e, l);
          }
        co(l);
      }
      for (l = l.child; l !== null; ) {
        switch (((t = l), t.tag)) {
          case 0:
          case 11:
          case 15:
            ma(8, t, t.return), Rn(t);
            break;
          case 22:
            (a = t.stateNode),
              a._visibility & 2 && ((a._visibility &= -3), Rn(t));
            break;
          default:
            Rn(t);
        }
        l = l.sibling;
      }
    }
    function io(l, t) {
      for (; Zl !== null; ) {
        var a = Zl;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            ma(8, a, t);
            break;
          case 23:
          case 22:
            if (
              a.memoizedState !== null &&
              a.memoizedState.cachePool !== null
            ) {
              var e = a.memoizedState.cachePool.pool;
              e != null && e.refCount++;
            }
            break;
          case 24:
            tu(a.memoizedState.cache);
        }
        if (((e = a.child), e !== null)) (e.return = a), (Zl = e);
        else
          l: for (a = l; Zl !== null; ) {
            e = Zl;
            var u = e.sibling,
              n = e.return;
            if ((Is(e), e === a)) {
              Zl = null;
              break l;
            }
            if (u !== null) {
              (u.return = n), (Zl = u);
              break l;
            }
            Zl = n;
          }
      }
    }
    var V0 = {
        getCacheForType: function (l) {
          var t = Pl(Cl),
            a = t.data.get(l);
          return a === void 0 && ((a = l()), t.data.set(l, a)), a;
        },
      },
      w0 = typeof WeakMap == 'function' ? WeakMap : Map,
      yl = 0,
      Ml = null,
      ul = null,
      rl = 0,
      ml = 0,
      mt = null,
      Sa = !1,
      Oe = !1,
      Hf = !1,
      ea = 0,
      Rl = 0,
      pa = 0,
      Ja = 0,
      jf = 0,
      zt = 0,
      Ae = 0,
      pu = null,
      it = null,
      qf = !1,
      Bf = 0,
      Un = 1 / 0,
      xn = null,
      Ta = null,
      Jl = 0,
      Ea = null,
      ze = null,
      De = 0,
      Cf = 0,
      Yf = null,
      ro = null,
      Tu = 0,
      Gf = null;
    function gt() {
      if ((yl & 2) !== 0 && rl !== 0) return rl & -rl;
      if (p.T !== null) {
        var l = ye;
        return l !== 0 ? l : Kf();
      }
      return Oi();
    }
    function so() {
      zt === 0 &&
        (zt = (rl & 536870912) === 0 || dl ? Ti() : 536870912);
      var l = At.current;
      return l !== null && (l.flags |= 32), zt;
    }
    function bt(l, t, a) {
      ((l === Ml && (ml === 2 || ml === 9)) ||
        l.cancelPendingCommit !== null) &&
        (Re(l, 0), _a(l, rl, zt, !1)),
        Ge(l, a),
        ((yl & 2) === 0 || l !== Ml) &&
          (l === Ml &&
            ((yl & 2) === 0 && (Ja |= a),
            Rl === 4 && _a(l, rl, zt, !1)),
          Zt(l));
    }
    function oo(l, t, a) {
      if ((yl & 6) !== 0) throw Error(d(327));
      var e =
          (!a && (t & 124) === 0 && (t & l.expiredLanes) === 0) ||
          Ye(l, t),
        u = e ? W0(l, t) : Zf(l, t, !0),
        n = e;
      do {
        if (u === 0) {
          Oe && !e && _a(l, t, 0, !1);
          break;
        } else {
          if (((a = l.current.alternate), n && !K0(a))) {
            (u = Zf(l, t, !1)), (n = !1);
            continue;
          }
          if (u === 2) {
            if (((n = t), l.errorRecoveryDisabledLanes & n))
              var c = 0;
            else
              (c = l.pendingLanes & -536870913),
                (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
            if (c !== 0) {
              t = c;
              l: {
                var f = l;
                u = pu;
                var s = f.current.memoizedState.isDehydrated;
                if (
                  (s && (Re(f, c).flags |= 256),
                  (c = Zf(f, c, !1)),
                  c !== 2)
                ) {
                  if (Hf && !s) {
                    (f.errorRecoveryDisabledLanes |= n),
                      (Ja |= n),
                      (u = 4);
                    break l;
                  }
                  (n = it),
                    (it = u),
                    n !== null &&
                      (it === null ? (it = n) : it.push.apply(it, n));
                }
                u = c;
              }
              if (((n = !1), u !== 2)) continue;
            }
          }
          if (u === 1) {
            Re(l, 0), _a(l, t, 0, !0);
            break;
          }
          l: {
            switch (((e = l), (n = u), n)) {
              case 0:
              case 1:
                throw Error(d(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                _a(e, t, zt, !Sa);
                break l;
              case 2:
                it = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(d(329));
            }
            if (
              (t & 62914560) === t &&
              ((u = Bf + 300 - zl()), 10 < u)
            ) {
              if ((_a(e, t, zt, !Sa), Qu(e, 0, !0) !== 0)) break l;
              e.timeoutHandle = Qo(
                vo.bind(
                  null,
                  e,
                  a,
                  it,
                  xn,
                  qf,
                  t,
                  zt,
                  Ja,
                  Ae,
                  Sa,
                  n,
                  2,
                  -0,
                  0
                ),
                u
              );
              break l;
            }
            vo(e, a, it, xn, qf, t, zt, Ja, Ae, Sa, n, 0, -0, 0);
          }
        }
        break;
      } while (!0);
      Zt(l);
    }
    function vo(l, t, a, e, u, n, c, f, s, y, T, A, m, g) {
      if (
        ((l.timeoutHandle = -1),
        (A = t.subtreeFlags),
        (A & 8192 || (A & 16785408) === 16785408) &&
          ((Du = { stylesheets: null, count: 0, unsuspend: zv }),
          no(t),
          (A = Rv()),
          A !== null))
      ) {
        (l.cancelPendingCommit = A(
          po.bind(null, l, t, n, a, e, u, c, f, s, T, 1, m, g)
        )),
          _a(l, n, c, !y);
        return;
      }
      po(l, t, n, a, e, u, c, f, s);
    }
    function K0(l) {
      for (var t = l; ; ) {
        var a = t.tag;
        if (
          (a === 0 || a === 11 || a === 15) &&
          t.flags & 16384 &&
          ((a = t.updateQueue),
          a !== null && ((a = a.stores), a !== null))
        )
          for (var e = 0; e < a.length; e++) {
            var u = a[e],
              n = u.getSnapshot;
            u = u.value;
            try {
              if (!dt(n(), u)) return !1;
            } catch {
              return !1;
            }
          }
        if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
          (a.return = t), (t = a);
        else {
          if (t === l) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l) return !0;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return !0;
    }
    function _a(l, t, a, e) {
      (t &= ~jf),
        (t &= ~Ja),
        (l.suspendedLanes |= t),
        (l.pingedLanes &= ~t),
        e && (l.warmLanes |= t),
        (e = l.expirationTimes);
      for (var u = t; 0 < u; ) {
        var n = 31 - $l(u),
          c = 1 << n;
        (e[n] = -1), (u &= ~c);
      }
      a !== 0 && _i(l, a, t);
    }
    function Nn() {
      return (yl & 6) === 0 ? (Eu(0), !1) : !0;
    }
    function Xf() {
      if (ul !== null) {
        if (ml === 0) var l = ul.return;
        else
          (l = ul),
            (kt = Qa = null),
            af(l),
            (Te = null),
            (du = 0),
            (l = ul);
        for (; l !== null; ) ws(l.alternate, l), (l = l.return);
        ul = null;
      }
    }
    function Re(l, t) {
      var a = l.timeoutHandle;
      a !== -1 && ((l.timeoutHandle = -1), sv(a)),
        (a = l.cancelPendingCommit),
        a !== null && ((l.cancelPendingCommit = null), a()),
        Xf(),
        (Ml = l),
        (ul = a = Kt(l.current, null)),
        (rl = t),
        (ml = 0),
        (mt = null),
        (Sa = !1),
        (Oe = Ye(l, t)),
        (Hf = !1),
        (Ae = zt = jf = Ja = pa = Rl = 0),
        (it = pu = null),
        (qf = !1),
        (t & 8) !== 0 && (t |= t & 32);
      var e = l.entangledLanes;
      if (e !== 0)
        for (l = l.entanglements, e &= t; 0 < e; ) {
          var u = 31 - $l(e),
            n = 1 << u;
          (t |= l[u]), (e &= ~n);
        }
      return (ea = t), Iu(), a;
    }
    function ho(l, t) {
      (ll = null),
        (p.H = Sn),
        t === eu || t === rn
          ? ((t = Ur()), (ml = 3))
          : t === zr
          ? ((t = Ur()), (ml = 4))
          : (ml =
              t === xs
                ? 8
                : t !== null &&
                  typeof t == 'object' &&
                  typeof t.then == 'function'
                ? 6
                : 1),
        (mt = t),
        ul === null && ((Rl = 1), Mn(l, Et(t, l.current)));
    }
    function yo() {
      var l = p.H;
      return (p.H = Sn), l === null ? Sn : l;
    }
    function mo() {
      var l = p.A;
      return (p.A = V0), l;
    }
    function Qf() {
      (Rl = 4),
        Sa ||
          ((rl & 4194048) !== rl && At.current !== null) ||
          (Oe = !0),
        ((pa & 134217727) === 0 && (Ja & 134217727) === 0) ||
          Ml === null ||
          _a(Ml, rl, zt, !1);
    }
    function Zf(l, t, a) {
      var e = yl;
      yl |= 2;
      var u = yo(),
        n = mo();
      (Ml !== l || rl !== t) && ((xn = null), Re(l, t)), (t = !1);
      var c = Rl;
      l: do
        try {
          if (ml !== 0 && ul !== null) {
            var f = ul,
              s = mt;
            switch (ml) {
              case 8:
                Xf(), (c = 6);
                break l;
              case 3:
              case 2:
              case 9:
              case 6:
                At.current === null && (t = !0);
                var y = ml;
                if (
                  ((ml = 0), (mt = null), Ue(l, f, s, y), a && Oe)
                ) {
                  c = 0;
                  break l;
                }
                break;
              default:
                (y = ml), (ml = 0), (mt = null), Ue(l, f, s, y);
            }
          }
          J0(), (c = Rl);
          break;
        } catch (T) {
          ho(l, T);
        }
      while (!0);
      return (
        t && l.shellSuspendCounter++,
        (kt = Qa = null),
        (yl = e),
        (p.H = u),
        (p.A = n),
        ul === null && ((Ml = null), (rl = 0), Iu()),
        c
      );
    }
    function J0() {
      for (; ul !== null; ) go(ul);
    }
    function W0(l, t) {
      var a = yl;
      yl |= 2;
      var e = yo(),
        u = mo();
      Ml !== l || rl !== t
        ? ((xn = null), (Un = zl() + 500), Re(l, t))
        : (Oe = Ye(l, t));
      l: do
        try {
          if (ml !== 0 && ul !== null) {
            t = ul;
            var n = mt;
            t: switch (ml) {
              case 1:
                (ml = 0), (mt = null), Ue(l, t, n, 1);
                break;
              case 2:
              case 9:
                if (Dr(n)) {
                  (ml = 0), (mt = null), bo(t);
                  break;
                }
                (t = function () {
                  (ml !== 2 && ml !== 9) || Ml !== l || (ml = 7),
                    Zt(l);
                }),
                  n.then(t, t);
                break l;
              case 3:
                ml = 7;
                break l;
              case 4:
                ml = 5;
                break l;
              case 7:
                Dr(n)
                  ? ((ml = 0), (mt = null), bo(t))
                  : ((ml = 0), (mt = null), Ue(l, t, n, 7));
                break;
              case 5:
                var c = null;
                switch (ul.tag) {
                  case 26:
                    c = ul.memoizedState;
                  case 5:
                  case 27:
                    var f = ul;
                    if (!c || Io(c)) {
                      (ml = 0), (mt = null);
                      var s = f.sibling;
                      if (s !== null) ul = s;
                      else {
                        var y = f.return;
                        y !== null ? ((ul = y), Hn(y)) : (ul = null);
                      }
                      break t;
                    }
                }
                (ml = 0), (mt = null), Ue(l, t, n, 5);
                break;
              case 6:
                (ml = 0), (mt = null), Ue(l, t, n, 6);
                break;
              case 8:
                Xf(), (Rl = 6);
                break l;
              default:
                throw Error(d(462));
            }
          }
          k0();
          break;
        } catch (T) {
          ho(l, T);
        }
      while (!0);
      return (
        (kt = Qa = null),
        (p.H = e),
        (p.A = u),
        (yl = a),
        ul !== null ? 0 : ((Ml = null), (rl = 0), Iu(), Rl)
      );
    }
    function k0() {
      for (; ul !== null && !kl(); ) go(ul);
    }
    function go(l) {
      var t = Ls(l.alternate, l, ea);
      (l.memoizedProps = l.pendingProps),
        t === null ? Hn(l) : (ul = t);
    }
    function bo(l) {
      var t = l,
        a = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = Cs(a, t, t.pendingProps, t.type, void 0, rl);
          break;
        case 11:
          t = Cs(a, t, t.pendingProps, t.type.render, t.ref, rl);
          break;
        case 5:
          af(t);
        default:
          ws(a, t), (t = ul = br(t, ea)), (t = Ls(a, t, ea));
      }
      (l.memoizedProps = l.pendingProps),
        t === null ? Hn(l) : (ul = t);
    }
    function Ue(l, t, a, e) {
      (kt = Qa = null), af(t), (Te = null), (du = 0);
      var u = t.return;
      try {
        if (Y0(l, u, t, a, rl)) {
          (Rl = 1), Mn(l, Et(a, l.current)), (ul = null);
          return;
        }
      } catch (n) {
        if (u !== null) throw ((ul = u), n);
        (Rl = 1), Mn(l, Et(a, l.current)), (ul = null);
        return;
      }
      t.flags & 32768
        ? (dl || e === 1
            ? (l = !0)
            : Oe || (rl & 536870912) !== 0
            ? (l = !1)
            : ((Sa = l = !0),
              (e === 2 || e === 9 || e === 3 || e === 6) &&
                ((e = At.current),
                e !== null && e.tag === 13 && (e.flags |= 16384))),
          So(t, l))
        : Hn(t);
    }
    function Hn(l) {
      var t = l;
      do {
        if ((t.flags & 32768) !== 0) {
          So(t, Sa);
          return;
        }
        l = t.return;
        var a = X0(t.alternate, t, ea);
        if (a !== null) {
          ul = a;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          ul = t;
          return;
        }
        ul = t = l;
      } while (t !== null);
      Rl === 0 && (Rl = 5);
    }
    function So(l, t) {
      do {
        var a = Q0(l.alternate, l);
        if (a !== null) {
          (a.flags &= 32767), (ul = a);
          return;
        }
        if (
          ((a = l.return),
          a !== null &&
            ((a.flags |= 32768),
            (a.subtreeFlags = 0),
            (a.deletions = null)),
          !t && ((l = l.sibling), l !== null))
        ) {
          ul = l;
          return;
        }
        ul = l = a;
      } while (l !== null);
      (Rl = 6), (ul = null);
    }
    function po(l, t, a, e, u, n, c, f, s) {
      l.cancelPendingCommit = null;
      do jn();
      while (Jl !== 0);
      if ((yl & 6) !== 0) throw Error(d(327));
      if (t !== null) {
        if (t === l.current) throw Error(d(177));
        if (
          ((n = t.lanes | t.childLanes),
          (n |= xc),
          zd(l, a, n, c, f, s),
          l === Ml && ((ul = Ml = null), (rl = 0)),
          (ze = t),
          (Ea = l),
          (De = a),
          (Cf = n),
          (Yf = u),
          (ro = e),
          (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
            ? ((l.callbackNode = null),
              (l.callbackPriority = 0),
              I0(ka, function () {
                return Oo(), null;
              }))
            : ((l.callbackNode = null), (l.callbackPriority = 0)),
          (e = (t.flags & 13878) !== 0),
          (t.subtreeFlags & 13878) !== 0 || e)
        ) {
          (e = p.T),
            (p.T = null),
            (u = C.p),
            (C.p = 2),
            (c = yl),
            (yl |= 4);
          try {
            Z0(l, t, a);
          } finally {
            (yl = c), (C.p = u), (p.T = e);
          }
        }
        (Jl = 1), To(), Eo(), _o();
      }
    }
    function To() {
      if (Jl === 1) {
        Jl = 0;
        var l = Ea,
          t = ze,
          a = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || a) {
          (a = p.T), (p.T = null);
          var e = C.p;
          C.p = 2;
          var u = yl;
          yl |= 4;
          try {
            ao(t, l);
            var n = li,
              c = ir(l.containerInfo),
              f = n.focusedElem,
              s = n.selectionRange;
            if (
              c !== f &&
              f &&
              f.ownerDocument &&
              fr(f.ownerDocument.documentElement, f)
            ) {
              if (s !== null && Ac(f)) {
                var y = s.start,
                  T = s.end;
                if ((T === void 0 && (T = y), 'selectionStart' in f))
                  (f.selectionStart = y),
                    (f.selectionEnd = Math.min(T, f.value.length));
                else {
                  var A = f.ownerDocument || document,
                    m = (A && A.defaultView) || window;
                  if (m.getSelection) {
                    var g = m.getSelection(),
                      P = f.textContent.length,
                      k = Math.min(s.start, P),
                      Sl = s.end === void 0 ? k : Math.min(s.end, P);
                    !g.extend &&
                      k > Sl &&
                      ((c = Sl), (Sl = k), (k = c));
                    var v = cr(f, k),
                      o = cr(f, Sl);
                    if (
                      v &&
                      o &&
                      (g.rangeCount !== 1 ||
                        g.anchorNode !== v.node ||
                        g.anchorOffset !== v.offset ||
                        g.focusNode !== o.node ||
                        g.focusOffset !== o.offset)
                    ) {
                      var h = A.createRange();
                      h.setStart(v.node, v.offset),
                        g.removeAllRanges(),
                        k > Sl
                          ? (g.addRange(h),
                            g.extend(o.node, o.offset))
                          : (h.setEnd(o.node, o.offset),
                            g.addRange(h));
                    }
                  }
                }
              }
              for (A = [], g = f; (g = g.parentNode); )
                g.nodeType === 1 &&
                  A.push({
                    element: g,
                    left: g.scrollLeft,
                    top: g.scrollTop,
                  });
              for (
                typeof f.focus == 'function' && f.focus(), f = 0;
                f < A.length;
                f++
              ) {
                var M = A[f];
                (M.element.scrollLeft = M.left),
                  (M.element.scrollTop = M.top);
              }
            }
            (Kn = !!If), (li = If = null);
          } finally {
            (yl = u), (C.p = e), (p.T = a);
          }
        }
        (l.current = t), (Jl = 2);
      }
    }
    function Eo() {
      if (Jl === 2) {
        Jl = 0;
        var l = Ea,
          t = ze,
          a = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || a) {
          (a = p.T), (p.T = null);
          var e = C.p;
          C.p = 2;
          var u = yl;
          yl |= 4;
          try {
            Ps(l, t.alternate, t);
          } finally {
            (yl = u), (C.p = e), (p.T = a);
          }
        }
        Jl = 3;
      }
    }
    function _o() {
      if (Jl === 4 || Jl === 3) {
        (Jl = 0), st();
        var l = Ea,
          t = ze,
          a = De,
          e = ro;
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? (Jl = 5)
          : ((Jl = 0), (ze = Ea = null), Mo(l, l.pendingLanes));
        var u = l.pendingLanes;
        if (
          (u === 0 && (Ta = null),
          nc(a),
          (t = t.stateNode),
          at && typeof at.onCommitFiberRoot == 'function')
        )
          try {
            at.onCommitFiberRoot(
              ca,
              t,
              void 0,
              (t.current.flags & 128) === 128
            );
          } catch {}
        if (e !== null) {
          (t = p.T), (u = C.p), (C.p = 2), (p.T = null);
          try {
            for (
              var n = l.onRecoverableError, c = 0;
              c < e.length;
              c++
            ) {
              var f = e[c];
              n(f.value, { componentStack: f.stack });
            }
          } finally {
            (p.T = t), (C.p = u);
          }
        }
        (De & 3) !== 0 && jn(),
          Zt(l),
          (u = l.pendingLanes),
          (a & 4194090) !== 0 && (u & 42) !== 0
            ? l === Gf
              ? Tu++
              : ((Tu = 0), (Gf = l))
            : (Tu = 0),
          Eu(0);
      }
    }
    function Mo(l, t) {
      (l.pooledCacheLanes &= t) === 0 &&
        ((t = l.pooledCache),
        t != null && ((l.pooledCache = null), tu(t)));
    }
    function jn(l) {
      return To(), Eo(), _o(), Oo();
    }
    function Oo() {
      if (Jl !== 5) return !1;
      var l = Ea,
        t = Cf;
      Cf = 0;
      var a = nc(De),
        e = p.T,
        u = C.p;
      try {
        (C.p = 32 > a ? 32 : a), (p.T = null), (a = Yf), (Yf = null);
        var n = Ea,
          c = De;
        if (((Jl = 0), (ze = Ea = null), (De = 0), (yl & 6) !== 0))
          throw Error(d(331));
        var f = yl;
        if (
          ((yl |= 4),
          fo(n.current),
          uo(n, n.current, c, a),
          (yl = f),
          Eu(0, !1),
          at && typeof at.onPostCommitFiberRoot == 'function')
        )
          try {
            at.onPostCommitFiberRoot(ca, n);
          } catch {}
        return !0;
      } finally {
        (C.p = u), (p.T = e), Mo(l, t);
      }
    }
    function Ao(l, t, a) {
      (t = Et(a, t)),
        (t = gf(l.stateNode, t, 2)),
        (l = da(l, t, 2)),
        l !== null && (Ge(l, 2), Zt(l));
    }
    function pl(l, t, a) {
      if (l.tag === 3) Ao(l, l, a);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            Ao(t, l, a);
            break;
          } else if (t.tag === 1) {
            var e = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == 'function' ||
              (typeof e.componentDidCatch == 'function' &&
                (Ta === null || !Ta.has(e)))
            ) {
              (l = Et(a, l)),
                (a = Rs(2)),
                (e = da(t, a, 2)),
                e !== null && (Us(a, e, t, l), Ge(e, 2), Zt(e));
              break;
            }
          }
          t = t.return;
        }
    }
    function Lf(l, t, a) {
      var e = l.pingCache;
      if (e === null) {
        e = l.pingCache = new w0();
        var u = new Set();
        e.set(t, u);
      } else
        (u = e.get(t)),
          u === void 0 && ((u = new Set()), e.set(t, u));
      u.has(a) ||
        ((Hf = !0),
        u.add(a),
        (l = $0.bind(null, l, t, a)),
        t.then(l, l));
    }
    function $0(l, t, a) {
      var e = l.pingCache;
      e !== null && e.delete(t),
        (l.pingedLanes |= l.suspendedLanes & a),
        (l.warmLanes &= ~a),
        Ml === l &&
          (rl & a) === a &&
          (Rl === 4 ||
          (Rl === 3 && (rl & 62914560) === rl && 300 > zl() - Bf)
            ? (yl & 2) === 0 && Re(l, 0)
            : (jf |= a),
          Ae === rl && (Ae = 0)),
        Zt(l);
    }
    function zo(l, t) {
      t === 0 && (t = Ei()),
        (l = oe(l, t)),
        l !== null && (Ge(l, t), Zt(l));
    }
    function F0(l) {
      var t = l.memoizedState,
        a = 0;
      t !== null && (a = t.retryLane), zo(l, a);
    }
    function P0(l, t) {
      var a = 0;
      switch (l.tag) {
        case 13:
          var e = l.stateNode,
            u = l.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case 19:
          e = l.stateNode;
          break;
        case 22:
          e = l.stateNode._retryCache;
          break;
        default:
          throw Error(d(314));
      }
      e !== null && e.delete(t), zo(l, a);
    }
    function I0(l, t) {
      return xl(l, t);
    }
    var qn = null,
      xe = null,
      Vf = !1,
      Bn = !1,
      wf = !1,
      Wa = 0;
    function Zt(l) {
      l !== xe &&
        l.next === null &&
        (xe === null ? (qn = xe = l) : (xe = xe.next = l)),
        (Bn = !0),
        Vf || ((Vf = !0), tv());
    }
    function Eu(l, t) {
      if (!wf && Bn) {
        wf = !0;
        do
          for (var a = !1, e = qn; e !== null; ) {
            if (l !== 0) {
              var u = e.pendingLanes;
              if (u === 0) var n = 0;
              else {
                var c = e.suspendedLanes,
                  f = e.pingedLanes;
                (n = (1 << (31 - $l(42 | l) + 1)) - 1),
                  (n &= u & ~(c & ~f)),
                  (n =
                    n & 201326741
                      ? (n & 201326741) | 1
                      : n
                      ? n | 2
                      : 0);
              }
              n !== 0 && ((a = !0), xo(e, n));
            } else
              (n = rl),
                (n = Qu(
                  e,
                  e === Ml ? n : 0,
                  e.cancelPendingCommit !== null ||
                    e.timeoutHandle !== -1
                )),
                (n & 3) === 0 || Ye(e, n) || ((a = !0), xo(e, n));
            e = e.next;
          }
        while (a);
        wf = !1;
      }
    }
    function lv() {
      Do();
    }
    function Do() {
      Bn = Vf = !1;
      var l = 0;
      Wa !== 0 && (rv() && (l = Wa), (Wa = 0));
      for (var t = zl(), a = null, e = qn; e !== null; ) {
        var u = e.next,
          n = Ro(e, t);
        n === 0
          ? ((e.next = null),
            a === null ? (qn = u) : (a.next = u),
            u === null && (xe = a))
          : ((a = e), (l !== 0 || (n & 3) !== 0) && (Bn = !0)),
          (e = u);
      }
      Eu(l);
    }
    function Ro(l, t) {
      for (
        var a = l.suspendedLanes,
          e = l.pingedLanes,
          u = l.expirationTimes,
          n = l.pendingLanes & -62914561;
        0 < n;

      ) {
        var c = 31 - $l(n),
          f = 1 << c,
          s = u[c];
        s === -1
          ? ((f & a) === 0 || (f & e) !== 0) && (u[c] = Ad(f, t))
          : s <= t && (l.expiredLanes |= f),
          (n &= ~f);
      }
      if (
        ((t = Ml),
        (a = rl),
        (a = Qu(
          l,
          l === t ? a : 0,
          l.cancelPendingCommit !== null || l.timeoutHandle !== -1
        )),
        (e = l.callbackNode),
        a === 0 ||
          (l === t && (ml === 2 || ml === 9)) ||
          l.cancelPendingCommit !== null)
      )
        return (
          e !== null && e !== null && el(e),
          (l.callbackNode = null),
          (l.callbackPriority = 0)
        );
      if ((a & 3) === 0 || Ye(l, a)) {
        if (((t = a & -a), t === l.callbackPriority)) return t;
        switch ((e !== null && el(e), nc(a))) {
          case 2:
          case 8:
            a = ot;
            break;
          case 32:
            a = ka;
            break;
          case 268435456:
            a = Cu;
            break;
          default:
            a = ka;
        }
        return (
          (e = Uo.bind(null, l)),
          (a = xl(a, e)),
          (l.callbackPriority = t),
          (l.callbackNode = a),
          t
        );
      }
      return (
        e !== null && e !== null && el(e),
        (l.callbackPriority = 2),
        (l.callbackNode = null),
        2
      );
    }
    function Uo(l, t) {
      if (Jl !== 0 && Jl !== 5)
        return (
          (l.callbackNode = null), (l.callbackPriority = 0), null
        );
      var a = l.callbackNode;
      if (jn() && l.callbackNode !== a) return null;
      var e = rl;
      return (
        (e = Qu(
          l,
          l === Ml ? e : 0,
          l.cancelPendingCommit !== null || l.timeoutHandle !== -1
        )),
        e === 0
          ? null
          : (oo(l, e, t),
            Ro(l, zl()),
            l.callbackNode != null && l.callbackNode === a
              ? Uo.bind(null, l)
              : null)
      );
    }
    function xo(l, t) {
      if (jn()) return null;
      oo(l, t, !0);
    }
    function tv() {
      ov(function () {
        (yl & 6) !== 0 ? xl(Bt, lv) : Do();
      });
    }
    function Kf() {
      return Wa === 0 && (Wa = Ti()), Wa;
    }
    function No(l) {
      return l == null ||
        typeof l == 'symbol' ||
        typeof l == 'boolean'
        ? null
        : typeof l == 'function'
        ? l
        : Ku('' + l);
    }
    function Ho(l, t) {
      var a = t.ownerDocument.createElement('input');
      return (
        (a.name = t.name),
        (a.value = t.value),
        l.id && a.setAttribute('form', l.id),
        t.parentNode.insertBefore(a, t),
        (l = new FormData(l)),
        a.parentNode.removeChild(a),
        l
      );
    }
    function av(l, t, a, e, u) {
      if (t === 'submit' && a && a.stateNode === u) {
        var n = No((u[ut] || null).action),
          c = e.submitter;
        c &&
          ((t = (t = c[ut] || null)
            ? No(t.formAction)
            : c.getAttribute('formAction')),
          t !== null && ((n = t), (c = null)));
        var f = new $u('action', 'action', null, e, u);
        l.push({
          event: f,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (e.defaultPrevented) {
                  if (Wa !== 0) {
                    var s = c ? Ho(u, c) : new FormData(u);
                    df(
                      a,
                      {
                        pending: !0,
                        data: s,
                        method: u.method,
                        action: n,
                      },
                      null,
                      s
                    );
                  }
                } else
                  typeof n == 'function' &&
                    (f.preventDefault(),
                    (s = c ? Ho(u, c) : new FormData(u)),
                    df(
                      a,
                      {
                        pending: !0,
                        data: s,
                        method: u.method,
                        action: n,
                      },
                      n,
                      s
                    ));
              },
              currentTarget: u,
            },
          ],
        });
      }
    }
    for (var Jf = 0; Jf < Uc.length; Jf++) {
      var Wf = Uc[Jf],
        ev = Wf.toLowerCase(),
        uv = Wf[0].toUpperCase() + Wf.slice(1);
      Nt(ev, 'on' + uv);
    }
    Nt(or, 'onAnimationEnd'),
      Nt(dr, 'onAnimationIteration'),
      Nt(vr, 'onAnimationStart'),
      Nt('dblclick', 'onDoubleClick'),
      Nt('focusin', 'onFocus'),
      Nt('focusout', 'onBlur'),
      Nt(T0, 'onTransitionRun'),
      Nt(E0, 'onTransitionStart'),
      Nt(_0, 'onTransitionCancel'),
      Nt(hr, 'onTransitionEnd'),
      te('onMouseEnter', ['mouseout', 'mouseover']),
      te('onMouseLeave', ['mouseout', 'mouseover']),
      te('onPointerEnter', ['pointerout', 'pointerover']),
      te('onPointerLeave', ['pointerout', 'pointerover']),
      Na(
        'onChange',
        'change click focusin focusout input keydown keyup selectionchange'.split(
          ' '
        )
      ),
      Na(
        'onSelect',
        'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
          ' '
        )
      ),
      Na('onBeforeInput', [
        'compositionend',
        'keypress',
        'textInput',
        'paste',
      ]),
      Na(
        'onCompositionEnd',
        'compositionend focusout keydown keypress keyup mousedown'.split(
          ' '
        )
      ),
      Na(
        'onCompositionStart',
        'compositionstart focusout keydown keypress keyup mousedown'.split(
          ' '
        )
      ),
      Na(
        'onCompositionUpdate',
        'compositionupdate focusout keydown keypress keyup mousedown'.split(
          ' '
        )
      );
    var _u =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
          ' '
        ),
      nv = new Set(
        'beforetoggle cancel close invalid load scroll scrollend toggle'
          .split(' ')
          .concat(_u)
      );
    function jo(l, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < l.length; a++) {
        var e = l[a],
          u = e.event;
        e = e.listeners;
        l: {
          var n = void 0;
          if (t)
            for (var c = e.length - 1; 0 <= c; c--) {
              var f = e[c],
                s = f.instance,
                y = f.currentTarget;
              if (
                ((f = f.listener),
                s !== n && u.isPropagationStopped())
              )
                break l;
              (n = f), (u.currentTarget = y);
              try {
                n(u);
              } catch (T) {
                _n(T);
              }
              (u.currentTarget = null), (n = s);
            }
          else
            for (c = 0; c < e.length; c++) {
              if (
                ((f = e[c]),
                (s = f.instance),
                (y = f.currentTarget),
                (f = f.listener),
                s !== n && u.isPropagationStopped())
              )
                break l;
              (n = f), (u.currentTarget = y);
              try {
                n(u);
              } catch (T) {
                _n(T);
              }
              (u.currentTarget = null), (n = s);
            }
        }
      }
    }
    function nl(l, t) {
      var a = t[cc];
      a === void 0 && (a = t[cc] = new Set());
      var e = l + '__bubble';
      a.has(e) || (qo(t, l, 2, !1), a.add(e));
    }
    function kf(l, t, a) {
      var e = 0;
      t && (e |= 4), qo(a, l, e, t);
    }
    var Cn = '_reactListening' + Math.random().toString(36).slice(2);
    function $f(l) {
      if (!l[Cn]) {
        (l[Cn] = !0),
          zi.forEach(function (a) {
            a !== 'selectionchange' &&
              (nv.has(a) || kf(a, !1, l), kf(a, !0, l));
          });
        var t = l.nodeType === 9 ? l : l.ownerDocument;
        t === null ||
          t[Cn] ||
          ((t[Cn] = !0), kf('selectionchange', !1, t));
      }
    }
    function qo(l, t, a, e) {
      switch (nd(t)) {
        case 2:
          var u = Nv;
          break;
        case 8:
          u = Hv;
          break;
        default:
          u = si;
      }
      (a = u.bind(null, t, a, l)),
        (u = void 0),
        !gc ||
          (t !== 'touchstart' &&
            t !== 'touchmove' &&
            t !== 'wheel') ||
          (u = !0),
        e
          ? u !== void 0
            ? l.addEventListener(t, a, { capture: !0, passive: u })
            : l.addEventListener(t, a, !0)
          : u !== void 0
          ? l.addEventListener(t, a, { passive: u })
          : l.addEventListener(t, a, !1);
    }
    function Ff(l, t, a, e, u) {
      var n = e;
      if ((t & 1) === 0 && (t & 2) === 0 && e !== null)
        l: for (;;) {
          if (e === null) return;
          var c = e.tag;
          if (c === 3 || c === 4) {
            var f = e.stateNode.containerInfo;
            if (f === u) break;
            if (c === 4)
              for (c = e.return; c !== null; ) {
                var s = c.tag;
                if (
                  (s === 3 || s === 4) &&
                  c.stateNode.containerInfo === u
                )
                  return;
                c = c.return;
              }
            for (; f !== null; ) {
              if (((c = Pa(f)), c === null)) return;
              if (
                ((s = c.tag),
                s === 5 || s === 6 || s === 26 || s === 27)
              ) {
                e = n = c;
                continue l;
              }
              f = f.parentNode;
            }
          }
          e = e.return;
        }
      Qi(function () {
        var y = n,
          T = yc(a),
          A = [];
        l: {
          var m = yr.get(l);
          if (m !== void 0) {
            var g = $u,
              P = l;
            switch (l) {
              case 'keypress':
                if (Wu(a) === 0) break l;
              case 'keydown':
              case 'keyup':
                g = Id;
                break;
              case 'focusin':
                (P = 'focus'), (g = Tc);
                break;
              case 'focusout':
                (P = 'blur'), (g = Tc);
                break;
              case 'beforeblur':
              case 'afterblur':
                g = Tc;
                break;
              case 'click':
                if (a.button === 2) break l;
              case 'auxclick':
              case 'dblclick':
              case 'mousedown':
              case 'mousemove':
              case 'mouseup':
              case 'mouseout':
              case 'mouseover':
              case 'contextmenu':
                g = Vi;
                break;
              case 'drag':
              case 'dragend':
              case 'dragenter':
              case 'dragexit':
              case 'dragleave':
              case 'dragover':
              case 'dragstart':
              case 'drop':
                g = Qd;
                break;
              case 'touchcancel':
              case 'touchend':
              case 'touchmove':
              case 'touchstart':
                g = a0;
                break;
              case or:
              case dr:
              case vr:
                g = Vd;
                break;
              case hr:
                g = u0;
                break;
              case 'scroll':
              case 'scrollend':
                g = Gd;
                break;
              case 'wheel':
                g = c0;
                break;
              case 'copy':
              case 'cut':
              case 'paste':
                g = Kd;
                break;
              case 'gotpointercapture':
              case 'lostpointercapture':
              case 'pointercancel':
              case 'pointerdown':
              case 'pointermove':
              case 'pointerout':
              case 'pointerover':
              case 'pointerup':
                g = Ki;
                break;
              case 'toggle':
              case 'beforetoggle':
                g = i0;
            }
            var k = (t & 4) !== 0,
              Sl = !k && (l === 'scroll' || l === 'scrollend'),
              v = k ? (m !== null ? m + 'Capture' : null) : m;
            k = [];
            for (var o = y, h; o !== null; ) {
              var M = o;
              if (
                ((h = M.stateNode),
                (M = M.tag),
                (M !== 5 && M !== 26 && M !== 27) ||
                  h === null ||
                  v === null ||
                  ((M = Ze(o, v)), M != null && k.push(Mu(o, M, h))),
                Sl)
              )
                break;
              o = o.return;
            }
            0 < k.length &&
              ((m = new g(m, P, null, a, T)),
              A.push({ event: m, listeners: k }));
          }
        }
        if ((t & 7) === 0) {
          l: {
            if (
              ((m = l === 'mouseover' || l === 'pointerover'),
              (g = l === 'mouseout' || l === 'pointerout'),
              m &&
                a !== hc &&
                (P = a.relatedTarget || a.fromElement) &&
                (Pa(P) || P[Fa]))
            )
              break l;
            if (
              (g || m) &&
              ((m =
                T.window === T
                  ? T
                  : (m = T.ownerDocument)
                  ? m.defaultView || m.parentWindow
                  : window),
              g
                ? ((P = a.relatedTarget || a.toElement),
                  (g = y),
                  (P = P ? Pa(P) : null),
                  P !== null &&
                    ((Sl = G(P)),
                    (k = P.tag),
                    P !== Sl || (k !== 5 && k !== 27 && k !== 6)) &&
                    (P = null))
                : ((g = null), (P = y)),
              g !== P)
            ) {
              if (
                ((k = Vi),
                (M = 'onMouseLeave'),
                (v = 'onMouseEnter'),
                (o = 'mouse'),
                (l === 'pointerout' || l === 'pointerover') &&
                  ((k = Ki),
                  (M = 'onPointerLeave'),
                  (v = 'onPointerEnter'),
                  (o = 'pointer')),
                (Sl = g == null ? m : Qe(g)),
                (h = P == null ? m : Qe(P)),
                (m = new k(M, o + 'leave', g, a, T)),
                (m.target = Sl),
                (m.relatedTarget = h),
                (M = null),
                Pa(T) === y &&
                  ((k = new k(v, o + 'enter', P, a, T)),
                  (k.target = h),
                  (k.relatedTarget = Sl),
                  (M = k)),
                (Sl = M),
                g && P)
              )
                t: {
                  for (k = g, v = P, o = 0, h = k; h; h = Ne(h)) o++;
                  for (h = 0, M = v; M; M = Ne(M)) h++;
                  for (; 0 < o - h; ) (k = Ne(k)), o--;
                  for (; 0 < h - o; ) (v = Ne(v)), h--;
                  for (; o--; ) {
                    if (k === v || (v !== null && k === v.alternate))
                      break t;
                    (k = Ne(k)), (v = Ne(v));
                  }
                  k = null;
                }
              else k = null;
              g !== null && Bo(A, m, g, k, !1),
                P !== null && Sl !== null && Bo(A, Sl, P, k, !0);
            }
          }
          l: {
            if (
              ((m = y ? Qe(y) : window),
              (g = m.nodeName && m.nodeName.toLowerCase()),
              g === 'select' || (g === 'input' && m.type === 'file'))
            )
              var V = lr;
            else if (Pi(m))
              if (tr) V = b0;
              else {
                V = m0;
                var tl = y0;
              }
            else
              (g = m.nodeName),
                !g ||
                g.toLowerCase() !== 'input' ||
                (m.type !== 'checkbox' && m.type !== 'radio')
                  ? y && vc(y.elementType) && (V = lr)
                  : (V = g0);
            if (V && (V = V(l, y))) {
              Ii(A, V, a, T);
              break l;
            }
            tl && tl(l, m, y),
              l === 'focusout' &&
                y &&
                m.type === 'number' &&
                y.memoizedProps.value != null &&
                dc(m, 'number', m.value);
          }
          switch (((tl = y ? Qe(y) : window), l)) {
            case 'focusin':
              (Pi(tl) || tl.contentEditable === 'true') &&
                ((ie = tl), (zc = y), ($e = null));
              break;
            case 'focusout':
              $e = zc = ie = null;
              break;
            case 'mousedown':
              Dc = !0;
              break;
            case 'contextmenu':
            case 'mouseup':
            case 'dragend':
              (Dc = !1), rr(A, a, T);
              break;
            case 'selectionchange':
              if (p0) break;
            case 'keydown':
            case 'keyup':
              rr(A, a, T);
          }
          var J;
          if (_c)
            l: {
              switch (l) {
                case 'compositionstart':
                  var $ = 'onCompositionStart';
                  break l;
                case 'compositionend':
                  $ = 'onCompositionEnd';
                  break l;
                case 'compositionupdate':
                  $ = 'onCompositionUpdate';
                  break l;
              }
              $ = void 0;
            }
          else
            fe
              ? $i(l, a) && ($ = 'onCompositionEnd')
              : l === 'keydown' &&
                a.keyCode === 229 &&
                ($ = 'onCompositionStart');
          $ &&
            (Ji &&
              a.locale !== 'ko' &&
              (fe || $ !== 'onCompositionStart'
                ? $ === 'onCompositionEnd' && fe && (J = Zi())
                : ((ia = T),
                  (bc = 'value' in ia ? ia.value : ia.textContent),
                  (fe = !0))),
            (tl = Yn(y, $)),
            0 < tl.length &&
              (($ = new wi($, l, null, a, T)),
              A.push({ event: $, listeners: tl }),
              J
                ? ($.data = J)
                : ((J = Fi(a)), J !== null && ($.data = J)))),
            (J = s0 ? o0(l, a) : d0(l, a)) &&
              (($ = Yn(y, 'onBeforeInput')),
              0 < $.length &&
                ((tl = new wi(
                  'onBeforeInput',
                  'beforeinput',
                  null,
                  a,
                  T
                )),
                A.push({ event: tl, listeners: $ }),
                (tl.data = J))),
            av(A, l, y, a, T);
        }
        jo(A, t);
      });
    }
    function Mu(l, t, a) {
      return { instance: l, listener: t, currentTarget: a };
    }
    function Yn(l, t) {
      for (var a = t + 'Capture', e = []; l !== null; ) {
        var u = l,
          n = u.stateNode;
        if (
          ((u = u.tag),
          (u !== 5 && u !== 26 && u !== 27) ||
            n === null ||
            ((u = Ze(l, a)),
            u != null && e.unshift(Mu(l, u, n)),
            (u = Ze(l, t)),
            u != null && e.push(Mu(l, u, n))),
          l.tag === 3)
        )
          return e;
        l = l.return;
      }
      return [];
    }
    function Ne(l) {
      if (l === null) return null;
      do l = l.return;
      while (l && l.tag !== 5 && l.tag !== 27);
      return l || null;
    }
    function Bo(l, t, a, e, u) {
      for (var n = t._reactName, c = []; a !== null && a !== e; ) {
        var f = a,
          s = f.alternate,
          y = f.stateNode;
        if (((f = f.tag), s !== null && s === e)) break;
        (f !== 5 && f !== 26 && f !== 27) ||
          y === null ||
          ((s = y),
          u
            ? ((y = Ze(a, n)), y != null && c.unshift(Mu(a, y, s)))
            : u ||
              ((y = Ze(a, n)), y != null && c.push(Mu(a, y, s)))),
          (a = a.return);
      }
      c.length !== 0 && l.push({ event: t, listeners: c });
    }
    var cv = /\r\n?/g,
      fv = /\u0000|\uFFFD/g;
    function Co(l) {
      return (typeof l == 'string' ? l : '' + l)
        .replace(
          cv,
          `
`
        )
        .replace(fv, '');
    }
    function Yo(l, t) {
      return (t = Co(t)), Co(l) === t;
    }
    function Gn() {}
    function bl(l, t, a, e, u, n) {
      switch (a) {
        case 'children':
          typeof e == 'string'
            ? t === 'body' ||
              (t === 'textarea' && e === '') ||
              ue(l, e)
            : (typeof e == 'number' || typeof e == 'bigint') &&
              t !== 'body' &&
              ue(l, '' + e);
          break;
        case 'className':
          Lu(l, 'class', e);
          break;
        case 'tabIndex':
          Lu(l, 'tabindex', e);
          break;
        case 'dir':
        case 'role':
        case 'viewBox':
        case 'width':
        case 'height':
          Lu(l, a, e);
          break;
        case 'style':
          Gi(l, e, n);
          break;
        case 'data':
          if (t !== 'object') {
            Lu(l, 'data', e);
            break;
          }
        case 'src':
        case 'href':
          if (e === '' && (t !== 'a' || a !== 'href')) {
            l.removeAttribute(a);
            break;
          }
          if (
            e == null ||
            typeof e == 'function' ||
            typeof e == 'symbol' ||
            typeof e == 'boolean'
          ) {
            l.removeAttribute(a);
            break;
          }
          (e = Ku('' + e)), l.setAttribute(a, e);
          break;
        case 'action':
        case 'formAction':
          if (typeof e == 'function') {
            l.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof n == 'function' &&
              (a === 'formAction'
                ? (t !== 'input' && bl(l, t, 'name', u.name, u, null),
                  bl(l, t, 'formEncType', u.formEncType, u, null),
                  bl(l, t, 'formMethod', u.formMethod, u, null),
                  bl(l, t, 'formTarget', u.formTarget, u, null))
                : (bl(l, t, 'encType', u.encType, u, null),
                  bl(l, t, 'method', u.method, u, null),
                  bl(l, t, 'target', u.target, u, null)));
          if (
            e == null ||
            typeof e == 'symbol' ||
            typeof e == 'boolean'
          ) {
            l.removeAttribute(a);
            break;
          }
          (e = Ku('' + e)), l.setAttribute(a, e);
          break;
        case 'onClick':
          e != null && (l.onclick = Gn);
          break;
        case 'onScroll':
          e != null && nl('scroll', l);
          break;
        case 'onScrollEnd':
          e != null && nl('scrollend', l);
          break;
        case 'dangerouslySetInnerHTML':
          if (e != null) {
            if (typeof e != 'object' || !('__html' in e))
              throw Error(d(61));
            if (((a = e.__html), a != null)) {
              if (u.children != null) throw Error(d(60));
              l.innerHTML = a;
            }
          }
          break;
        case 'multiple':
          l.multiple =
            e && typeof e != 'function' && typeof e != 'symbol';
          break;
        case 'muted':
          l.muted =
            e && typeof e != 'function' && typeof e != 'symbol';
          break;
        case 'suppressContentEditableWarning':
        case 'suppressHydrationWarning':
        case 'defaultValue':
        case 'defaultChecked':
        case 'innerHTML':
        case 'ref':
          break;
        case 'autoFocus':
          break;
        case 'xlinkHref':
          if (
            e == null ||
            typeof e == 'function' ||
            typeof e == 'boolean' ||
            typeof e == 'symbol'
          ) {
            l.removeAttribute('xlink:href');
            break;
          }
          (a = Ku('' + e)),
            l.setAttributeNS(
              'http://www.w3.org/1999/xlink',
              'xlink:href',
              a
            );
          break;
        case 'contentEditable':
        case 'spellCheck':
        case 'draggable':
        case 'value':
        case 'autoReverse':
        case 'externalResourcesRequired':
        case 'focusable':
        case 'preserveAlpha':
          e != null && typeof e != 'function' && typeof e != 'symbol'
            ? l.setAttribute(a, '' + e)
            : l.removeAttribute(a);
          break;
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
          e && typeof e != 'function' && typeof e != 'symbol'
            ? l.setAttribute(a, '')
            : l.removeAttribute(a);
          break;
        case 'capture':
        case 'download':
          e === !0
            ? l.setAttribute(a, '')
            : e !== !1 &&
              e != null &&
              typeof e != 'function' &&
              typeof e != 'symbol'
            ? l.setAttribute(a, e)
            : l.removeAttribute(a);
          break;
        case 'cols':
        case 'rows':
        case 'size':
        case 'span':
          e != null &&
          typeof e != 'function' &&
          typeof e != 'symbol' &&
          !isNaN(e) &&
          1 <= e
            ? l.setAttribute(a, e)
            : l.removeAttribute(a);
          break;
        case 'rowSpan':
        case 'start':
          e == null ||
          typeof e == 'function' ||
          typeof e == 'symbol' ||
          isNaN(e)
            ? l.removeAttribute(a)
            : l.setAttribute(a, e);
          break;
        case 'popover':
          nl('beforetoggle', l), nl('toggle', l), Zu(l, 'popover', e);
          break;
        case 'xlinkActuate':
          Vt(l, 'http://www.w3.org/1999/xlink', 'xlink:actuate', e);
          break;
        case 'xlinkArcrole':
          Vt(l, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', e);
          break;
        case 'xlinkRole':
          Vt(l, 'http://www.w3.org/1999/xlink', 'xlink:role', e);
          break;
        case 'xlinkShow':
          Vt(l, 'http://www.w3.org/1999/xlink', 'xlink:show', e);
          break;
        case 'xlinkTitle':
          Vt(l, 'http://www.w3.org/1999/xlink', 'xlink:title', e);
          break;
        case 'xlinkType':
          Vt(l, 'http://www.w3.org/1999/xlink', 'xlink:type', e);
          break;
        case 'xmlBase':
          Vt(
            l,
            'http://www.w3.org/XML/1998/namespace',
            'xml:base',
            e
          );
          break;
        case 'xmlLang':
          Vt(
            l,
            'http://www.w3.org/XML/1998/namespace',
            'xml:lang',
            e
          );
          break;
        case 'xmlSpace':
          Vt(
            l,
            'http://www.w3.org/XML/1998/namespace',
            'xml:space',
            e
          );
          break;
        case 'is':
          Zu(l, 'is', e);
          break;
        case 'innerText':
        case 'textContent':
          break;
        default:
          (!(2 < a.length) ||
            (a[0] !== 'o' && a[0] !== 'O') ||
            (a[1] !== 'n' && a[1] !== 'N')) &&
            ((a = Cd.get(a) || a), Zu(l, a, e));
      }
    }
    function Pf(l, t, a, e, u, n) {
      switch (a) {
        case 'style':
          Gi(l, e, n);
          break;
        case 'dangerouslySetInnerHTML':
          if (e != null) {
            if (typeof e != 'object' || !('__html' in e))
              throw Error(d(61));
            if (((a = e.__html), a != null)) {
              if (u.children != null) throw Error(d(60));
              l.innerHTML = a;
            }
          }
          break;
        case 'children':
          typeof e == 'string'
            ? ue(l, e)
            : (typeof e == 'number' || typeof e == 'bigint') &&
              ue(l, '' + e);
          break;
        case 'onScroll':
          e != null && nl('scroll', l);
          break;
        case 'onScrollEnd':
          e != null && nl('scrollend', l);
          break;
        case 'onClick':
          e != null && (l.onclick = Gn);
          break;
        case 'suppressContentEditableWarning':
        case 'suppressHydrationWarning':
        case 'innerHTML':
        case 'ref':
          break;
        case 'innerText':
        case 'textContent':
          break;
        default:
          if (!Di.hasOwnProperty(a))
            l: {
              if (
                a[0] === 'o' &&
                a[1] === 'n' &&
                ((u = a.endsWith('Capture')),
                (t = a.slice(2, u ? a.length - 7 : void 0)),
                (n = l[ut] || null),
                (n = n != null ? n[a] : null),
                typeof n == 'function' &&
                  l.removeEventListener(t, n, u),
                typeof e == 'function')
              ) {
                typeof n != 'function' &&
                  n !== null &&
                  (a in l
                    ? (l[a] = null)
                    : l.hasAttribute(a) && l.removeAttribute(a)),
                  l.addEventListener(t, e, u);
                break l;
              }
              a in l
                ? (l[a] = e)
                : e === !0
                ? l.setAttribute(a, '')
                : Zu(l, a, e);
            }
      }
    }
    function Wl(l, t, a) {
      switch (t) {
        case 'div':
        case 'span':
        case 'svg':
        case 'path':
        case 'a':
        case 'g':
        case 'p':
        case 'li':
          break;
        case 'img':
          nl('error', l), nl('load', l);
          var e = !1,
            u = !1,
            n;
          for (n in a)
            if (a.hasOwnProperty(n)) {
              var c = a[n];
              if (c != null)
                switch (n) {
                  case 'src':
                    e = !0;
                    break;
                  case 'srcSet':
                    u = !0;
                    break;
                  case 'children':
                  case 'dangerouslySetInnerHTML':
                    throw Error(d(137, t));
                  default:
                    bl(l, t, n, c, a, null);
                }
            }
          u && bl(l, t, 'srcSet', a.srcSet, a, null),
            e && bl(l, t, 'src', a.src, a, null);
          return;
        case 'input':
          nl('invalid', l);
          var f = (n = c = u = null),
            s = null,
            y = null;
          for (e in a)
            if (a.hasOwnProperty(e)) {
              var T = a[e];
              if (T != null)
                switch (e) {
                  case 'name':
                    u = T;
                    break;
                  case 'type':
                    c = T;
                    break;
                  case 'checked':
                    s = T;
                    break;
                  case 'defaultChecked':
                    y = T;
                    break;
                  case 'value':
                    n = T;
                    break;
                  case 'defaultValue':
                    f = T;
                    break;
                  case 'children':
                  case 'dangerouslySetInnerHTML':
                    if (T != null) throw Error(d(137, t));
                    break;
                  default:
                    bl(l, t, e, T, a, null);
                }
            }
          qi(l, n, f, s, y, c, u, !1), Vu(l);
          return;
        case 'select':
          nl('invalid', l), (e = c = n = null);
          for (u in a)
            if (a.hasOwnProperty(u) && ((f = a[u]), f != null))
              switch (u) {
                case 'value':
                  n = f;
                  break;
                case 'defaultValue':
                  c = f;
                  break;
                case 'multiple':
                  e = f;
                default:
                  bl(l, t, u, f, a, null);
              }
          (t = n),
            (a = c),
            (l.multiple = !!e),
            t != null
              ? ee(l, !!e, t, !1)
              : a != null && ee(l, !!e, a, !0);
          return;
        case 'textarea':
          nl('invalid', l), (n = u = e = null);
          for (c in a)
            if (a.hasOwnProperty(c) && ((f = a[c]), f != null))
              switch (c) {
                case 'value':
                  e = f;
                  break;
                case 'defaultValue':
                  u = f;
                  break;
                case 'children':
                  n = f;
                  break;
                case 'dangerouslySetInnerHTML':
                  if (f != null) throw Error(d(91));
                  break;
                default:
                  bl(l, t, c, f, a, null);
              }
          Ci(l, e, u, n), Vu(l);
          return;
        case 'option':
          for (s in a)
            if (a.hasOwnProperty(s) && ((e = a[s]), e != null))
              switch (s) {
                case 'selected':
                  l.selected =
                    e &&
                    typeof e != 'function' &&
                    typeof e != 'symbol';
                  break;
                default:
                  bl(l, t, s, e, a, null);
              }
          return;
        case 'dialog':
          nl('beforetoggle', l),
            nl('toggle', l),
            nl('cancel', l),
            nl('close', l);
          break;
        case 'iframe':
        case 'object':
          nl('load', l);
          break;
        case 'video':
        case 'audio':
          for (e = 0; e < _u.length; e++) nl(_u[e], l);
          break;
        case 'image':
          nl('error', l), nl('load', l);
          break;
        case 'details':
          nl('toggle', l);
          break;
        case 'embed':
        case 'source':
        case 'link':
          nl('error', l), nl('load', l);
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
          for (y in a)
            if (a.hasOwnProperty(y) && ((e = a[y]), e != null))
              switch (y) {
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(d(137, t));
                default:
                  bl(l, t, y, e, a, null);
              }
          return;
        default:
          if (vc(t)) {
            for (T in a)
              a.hasOwnProperty(T) &&
                ((e = a[T]),
                e !== void 0 && Pf(l, t, T, e, a, void 0));
            return;
          }
      }
      for (f in a)
        a.hasOwnProperty(f) &&
          ((e = a[f]), e != null && bl(l, t, f, e, a, null));
    }
    function iv(l, t, a, e) {
      switch (t) {
        case 'div':
        case 'span':
        case 'svg':
        case 'path':
        case 'a':
        case 'g':
        case 'p':
        case 'li':
          break;
        case 'input':
          var u = null,
            n = null,
            c = null,
            f = null,
            s = null,
            y = null,
            T = null;
          for (g in a) {
            var A = a[g];
            if (a.hasOwnProperty(g) && A != null)
              switch (g) {
                case 'checked':
                  break;
                case 'value':
                  break;
                case 'defaultValue':
                  s = A;
                default:
                  e.hasOwnProperty(g) || bl(l, t, g, null, e, A);
              }
          }
          for (var m in e) {
            var g = e[m];
            if (
              ((A = a[m]),
              e.hasOwnProperty(m) && (g != null || A != null))
            )
              switch (m) {
                case 'type':
                  n = g;
                  break;
                case 'name':
                  u = g;
                  break;
                case 'checked':
                  y = g;
                  break;
                case 'defaultChecked':
                  T = g;
                  break;
                case 'value':
                  c = g;
                  break;
                case 'defaultValue':
                  f = g;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (g != null) throw Error(d(137, t));
                  break;
                default:
                  g !== A && bl(l, t, m, g, e, A);
              }
          }
          oc(l, c, f, s, y, T, n, u);
          return;
        case 'select':
          g = c = f = m = null;
          for (n in a)
            if (((s = a[n]), a.hasOwnProperty(n) && s != null))
              switch (n) {
                case 'value':
                  break;
                case 'multiple':
                  g = s;
                default:
                  e.hasOwnProperty(n) || bl(l, t, n, null, e, s);
              }
          for (u in e)
            if (
              ((n = e[u]),
              (s = a[u]),
              e.hasOwnProperty(u) && (n != null || s != null))
            )
              switch (u) {
                case 'value':
                  m = n;
                  break;
                case 'defaultValue':
                  f = n;
                  break;
                case 'multiple':
                  c = n;
                default:
                  n !== s && bl(l, t, u, n, e, s);
              }
          (t = f),
            (a = c),
            (e = g),
            m != null
              ? ee(l, !!a, m, !1)
              : !!e != !!a &&
                (t != null
                  ? ee(l, !!a, t, !0)
                  : ee(l, !!a, a ? [] : '', !1));
          return;
        case 'textarea':
          g = m = null;
          for (f in a)
            if (
              ((u = a[f]),
              a.hasOwnProperty(f) &&
                u != null &&
                !e.hasOwnProperty(f))
            )
              switch (f) {
                case 'value':
                  break;
                case 'children':
                  break;
                default:
                  bl(l, t, f, null, e, u);
              }
          for (c in e)
            if (
              ((u = e[c]),
              (n = a[c]),
              e.hasOwnProperty(c) && (u != null || n != null))
            )
              switch (c) {
                case 'value':
                  m = u;
                  break;
                case 'defaultValue':
                  g = u;
                  break;
                case 'children':
                  break;
                case 'dangerouslySetInnerHTML':
                  if (u != null) throw Error(d(91));
                  break;
                default:
                  u !== n && bl(l, t, c, u, e, n);
              }
          Bi(l, m, g);
          return;
        case 'option':
          for (var P in a)
            if (
              ((m = a[P]),
              a.hasOwnProperty(P) &&
                m != null &&
                !e.hasOwnProperty(P))
            )
              switch (P) {
                case 'selected':
                  l.selected = !1;
                  break;
                default:
                  bl(l, t, P, null, e, m);
              }
          for (s in e)
            if (
              ((m = e[s]),
              (g = a[s]),
              e.hasOwnProperty(s) &&
                m !== g &&
                (m != null || g != null))
            )
              switch (s) {
                case 'selected':
                  l.selected =
                    m &&
                    typeof m != 'function' &&
                    typeof m != 'symbol';
                  break;
                default:
                  bl(l, t, s, m, e, g);
              }
          return;
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
          for (var k in a)
            (m = a[k]),
              a.hasOwnProperty(k) &&
                m != null &&
                !e.hasOwnProperty(k) &&
                bl(l, t, k, null, e, m);
          for (y in e)
            if (
              ((m = e[y]),
              (g = a[y]),
              e.hasOwnProperty(y) &&
                m !== g &&
                (m != null || g != null))
            )
              switch (y) {
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (m != null) throw Error(d(137, t));
                  break;
                default:
                  bl(l, t, y, m, e, g);
              }
          return;
        default:
          if (vc(t)) {
            for (var Sl in a)
              (m = a[Sl]),
                a.hasOwnProperty(Sl) &&
                  m !== void 0 &&
                  !e.hasOwnProperty(Sl) &&
                  Pf(l, t, Sl, void 0, e, m);
            for (T in e)
              (m = e[T]),
                (g = a[T]),
                !e.hasOwnProperty(T) ||
                  m === g ||
                  (m === void 0 && g === void 0) ||
                  Pf(l, t, T, m, e, g);
            return;
          }
      }
      for (var v in a)
        (m = a[v]),
          a.hasOwnProperty(v) &&
            m != null &&
            !e.hasOwnProperty(v) &&
            bl(l, t, v, null, e, m);
      for (A in e)
        (m = e[A]),
          (g = a[A]),
          !e.hasOwnProperty(A) ||
            m === g ||
            (m == null && g == null) ||
            bl(l, t, A, m, e, g);
    }
    var If = null,
      li = null;
    function Xn(l) {
      return l.nodeType === 9 ? l : l.ownerDocument;
    }
    function Go(l) {
      switch (l) {
        case 'http://www.w3.org/2000/svg':
          return 1;
        case 'http://www.w3.org/1998/Math/MathML':
          return 2;
        default:
          return 0;
      }
    }
    function Xo(l, t) {
      if (l === 0)
        switch (t) {
          case 'svg':
            return 1;
          case 'math':
            return 2;
          default:
            return 0;
        }
      return l === 1 && t === 'foreignObject' ? 0 : l;
    }
    function ti(l, t) {
      return (
        l === 'textarea' ||
        l === 'noscript' ||
        typeof t.children == 'string' ||
        typeof t.children == 'number' ||
        typeof t.children == 'bigint' ||
        (typeof t.dangerouslySetInnerHTML == 'object' &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var ai = null;
    function rv() {
      var l = window.event;
      return l && l.type === 'popstate'
        ? l === ai
          ? !1
          : ((ai = l), !0)
        : ((ai = null), !1);
    }
    var Qo = typeof setTimeout == 'function' ? setTimeout : void 0,
      sv = typeof clearTimeout == 'function' ? clearTimeout : void 0,
      Zo = typeof Promise == 'function' ? Promise : void 0,
      ov =
        typeof queueMicrotask == 'function'
          ? queueMicrotask
          : typeof Zo < 'u'
          ? function (l) {
              return Zo.resolve(null).then(l).catch(dv);
            }
          : Qo;
    function dv(l) {
      setTimeout(function () {
        throw l;
      });
    }
    function Ma(l) {
      return l === 'head';
    }
    function Lo(l, t) {
      var a = t,
        e = 0,
        u = 0;
      do {
        var n = a.nextSibling;
        if ((l.removeChild(a), n && n.nodeType === 8))
          if (((a = n.data), a === '/$')) {
            if (0 < e && 8 > e) {
              a = e;
              var c = l.ownerDocument;
              if (
                (a & 1 && Ou(c.documentElement),
                a & 2 && Ou(c.body),
                a & 4)
              )
                for (a = c.head, Ou(a), c = a.firstChild; c; ) {
                  var f = c.nextSibling,
                    s = c.nodeName;
                  c[Xe] ||
                    s === 'SCRIPT' ||
                    s === 'STYLE' ||
                    (s === 'LINK' &&
                      c.rel.toLowerCase() === 'stylesheet') ||
                    a.removeChild(c),
                    (c = f);
                }
            }
            if (u === 0) {
              l.removeChild(n), Hu(t);
              return;
            }
            u--;
          } else
            a === '$' || a === '$?' || a === '$!'
              ? u++
              : (e = a.charCodeAt(0) - 48);
        else e = 0;
        a = n;
      } while (a);
      Hu(t);
    }
    function ei(l) {
      var t = l.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (((t = t.nextSibling), a.nodeName)) {
          case 'HTML':
          case 'HEAD':
          case 'BODY':
            ei(a), fc(a);
            continue;
          case 'SCRIPT':
          case 'STYLE':
            continue;
          case 'LINK':
            if (a.rel.toLowerCase() === 'stylesheet') continue;
        }
        l.removeChild(a);
      }
    }
    function vv(l, t, a, e) {
      for (; l.nodeType === 1; ) {
        var u = a;
        if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!e && (l.nodeName !== 'INPUT' || l.type !== 'hidden'))
            break;
        } else if (e) {
          if (!l[Xe])
            switch (t) {
              case 'meta':
                if (!l.hasAttribute('itemprop')) break;
                return l;
              case 'link':
                if (
                  ((n = l.getAttribute('rel')),
                  n === 'stylesheet' &&
                    l.hasAttribute('data-precedence'))
                )
                  break;
                if (
                  n !== u.rel ||
                  l.getAttribute('href') !==
                    (u.href == null || u.href === ''
                      ? null
                      : u.href) ||
                  l.getAttribute('crossorigin') !==
                    (u.crossOrigin == null ? null : u.crossOrigin) ||
                  l.getAttribute('title') !==
                    (u.title == null ? null : u.title)
                )
                  break;
                return l;
              case 'style':
                if (l.hasAttribute('data-precedence')) break;
                return l;
              case 'script':
                if (
                  ((n = l.getAttribute('src')),
                  (n !== (u.src == null ? null : u.src) ||
                    l.getAttribute('type') !==
                      (u.type == null ? null : u.type) ||
                    l.getAttribute('crossorigin') !==
                      (u.crossOrigin == null
                        ? null
                        : u.crossOrigin)) &&
                    n &&
                    l.hasAttribute('async') &&
                    !l.hasAttribute('itemprop'))
                )
                  break;
                return l;
              default:
                return l;
            }
        } else if (t === 'input' && l.type === 'hidden') {
          var n = u.name == null ? null : '' + u.name;
          if (u.type === 'hidden' && l.getAttribute('name') === n)
            return l;
        } else return l;
        if (((l = jt(l.nextSibling)), l === null)) break;
      }
      return null;
    }
    function hv(l, t, a) {
      if (t === '') return null;
      for (; l.nodeType !== 3; )
        if (
          ((l.nodeType !== 1 ||
            l.nodeName !== 'INPUT' ||
            l.type !== 'hidden') &&
            !a) ||
          ((l = jt(l.nextSibling)), l === null)
        )
          return null;
      return l;
    }
    function ui(l) {
      return (
        l.data === '$!' ||
        (l.data === '$?' && l.ownerDocument.readyState === 'complete')
      );
    }
    function yv(l, t) {
      var a = l.ownerDocument;
      if (l.data !== '$?' || a.readyState === 'complete') t();
      else {
        var e = function () {
          t(), a.removeEventListener('DOMContentLoaded', e);
        };
        a.addEventListener('DOMContentLoaded', e),
          (l._reactRetry = e);
      }
    }
    function jt(l) {
      for (; l != null; l = l.nextSibling) {
        var t = l.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = l.data),
            t === '$' ||
              t === '$!' ||
              t === '$?' ||
              t === 'F!' ||
              t === 'F')
          )
            break;
          if (t === '/$') return null;
        }
      }
      return l;
    }
    var ni = null;
    function Vo(l) {
      l = l.previousSibling;
      for (var t = 0; l; ) {
        if (l.nodeType === 8) {
          var a = l.data;
          if (a === '$' || a === '$!' || a === '$?') {
            if (t === 0) return l;
            t--;
          } else a === '/$' && t++;
        }
        l = l.previousSibling;
      }
      return null;
    }
    function wo(l, t, a) {
      switch (((t = Xn(a)), l)) {
        case 'html':
          if (((l = t.documentElement), !l)) throw Error(d(452));
          return l;
        case 'head':
          if (((l = t.head), !l)) throw Error(d(453));
          return l;
        case 'body':
          if (((l = t.body), !l)) throw Error(d(454));
          return l;
        default:
          throw Error(d(451));
      }
    }
    function Ou(l) {
      for (var t = l.attributes; t.length; )
        l.removeAttributeNode(t[0]);
      fc(l);
    }
    var Dt = new Map(),
      Ko = new Set();
    function Qn(l) {
      return typeof l.getRootNode == 'function'
        ? l.getRootNode()
        : l.nodeType === 9
        ? l
        : l.ownerDocument;
    }
    var ua = C.d;
    C.d = {
      f: mv,
      r: gv,
      D: bv,
      C: Sv,
      L: pv,
      m: Tv,
      X: _v,
      S: Ev,
      M: Mv,
    };
    function mv() {
      var l = ua.f(),
        t = Nn();
      return l || t;
    }
    function gv(l) {
      var t = Ia(l);
      t !== null && t.tag === 5 && t.type === 'form'
        ? os(t)
        : ua.r(l);
    }
    var He = typeof document > 'u' ? null : document;
    function Jo(l, t, a) {
      var e = He;
      if (e && typeof t == 'string' && t) {
        var u = Tt(t);
        (u = 'link[rel="' + l + '"][href="' + u + '"]'),
          typeof a == 'string' && (u += '[crossorigin="' + a + '"]'),
          Ko.has(u) ||
            (Ko.add(u),
            (l = { rel: l, crossOrigin: a, href: t }),
            e.querySelector(u) === null &&
              ((t = e.createElement('link')),
              Wl(t, 'link', l),
              Xl(t),
              e.head.appendChild(t)));
      }
    }
    function bv(l) {
      ua.D(l), Jo('dns-prefetch', l, null);
    }
    function Sv(l, t) {
      ua.C(l, t), Jo('preconnect', l, t);
    }
    function pv(l, t, a) {
      ua.L(l, t, a);
      var e = He;
      if (e && l && t) {
        var u = 'link[rel="preload"][as="' + Tt(t) + '"]';
        t === 'image' && a && a.imageSrcSet
          ? ((u += '[imagesrcset="' + Tt(a.imageSrcSet) + '"]'),
            typeof a.imageSizes == 'string' &&
              (u += '[imagesizes="' + Tt(a.imageSizes) + '"]'))
          : (u += '[href="' + Tt(l) + '"]');
        var n = u;
        switch (t) {
          case 'style':
            n = je(l);
            break;
          case 'script':
            n = qe(l);
        }
        Dt.has(n) ||
          ((l = U(
            {
              rel: 'preload',
              href: t === 'image' && a && a.imageSrcSet ? void 0 : l,
              as: t,
            },
            a
          )),
          Dt.set(n, l),
          e.querySelector(u) !== null ||
            (t === 'style' && e.querySelector(Au(n))) ||
            (t === 'script' && e.querySelector(zu(n))) ||
            ((t = e.createElement('link')),
            Wl(t, 'link', l),
            Xl(t),
            e.head.appendChild(t)));
      }
    }
    function Tv(l, t) {
      ua.m(l, t);
      var a = He;
      if (a && l) {
        var e = t && typeof t.as == 'string' ? t.as : 'script',
          u =
            'link[rel="modulepreload"][as="' +
            Tt(e) +
            '"][href="' +
            Tt(l) +
            '"]',
          n = u;
        switch (e) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            n = qe(l);
        }
        if (
          !Dt.has(n) &&
          ((l = U({ rel: 'modulepreload', href: l }, t)),
          Dt.set(n, l),
          a.querySelector(u) === null)
        ) {
          switch (e) {
            case 'audioworklet':
            case 'paintworklet':
            case 'serviceworker':
            case 'sharedworker':
            case 'worker':
            case 'script':
              if (a.querySelector(zu(n))) return;
          }
          (e = a.createElement('link')),
            Wl(e, 'link', l),
            Xl(e),
            a.head.appendChild(e);
        }
      }
    }
    function Ev(l, t, a) {
      ua.S(l, t, a);
      var e = He;
      if (e && l) {
        var u = le(e).hoistableStyles,
          n = je(l);
        t = t || 'default';
        var c = u.get(n);
        if (!c) {
          var f = { loading: 0, preload: null };
          if ((c = e.querySelector(Au(n)))) f.loading = 5;
          else {
            (l = U(
              { rel: 'stylesheet', href: l, 'data-precedence': t },
              a
            )),
              (a = Dt.get(n)) && ci(l, a);
            var s = (c = e.createElement('link'));
            Xl(s),
              Wl(s, 'link', l),
              (s._p = new Promise(function (y, T) {
                (s.onload = y), (s.onerror = T);
              })),
              s.addEventListener('load', function () {
                f.loading |= 1;
              }),
              s.addEventListener('error', function () {
                f.loading |= 2;
              }),
              (f.loading |= 4),
              Zn(c, t, e);
          }
          (c = {
            type: 'stylesheet',
            instance: c,
            count: 1,
            state: f,
          }),
            u.set(n, c);
        }
      }
    }
    function _v(l, t) {
      ua.X(l, t);
      var a = He;
      if (a && l) {
        var e = le(a).hoistableScripts,
          u = qe(l),
          n = e.get(u);
        n ||
          ((n = a.querySelector(zu(u))),
          n ||
            ((l = U({ src: l, async: !0 }, t)),
            (t = Dt.get(u)) && fi(l, t),
            (n = a.createElement('script')),
            Xl(n),
            Wl(n, 'link', l),
            a.head.appendChild(n)),
          (n = {
            type: 'script',
            instance: n,
            count: 1,
            state: null,
          }),
          e.set(u, n));
      }
    }
    function Mv(l, t) {
      ua.M(l, t);
      var a = He;
      if (a && l) {
        var e = le(a).hoistableScripts,
          u = qe(l),
          n = e.get(u);
        n ||
          ((n = a.querySelector(zu(u))),
          n ||
            ((l = U({ src: l, async: !0, type: 'module' }, t)),
            (t = Dt.get(u)) && fi(l, t),
            (n = a.createElement('script')),
            Xl(n),
            Wl(n, 'link', l),
            a.head.appendChild(n)),
          (n = {
            type: 'script',
            instance: n,
            count: 1,
            state: null,
          }),
          e.set(u, n));
      }
    }
    function Wo(l, t, a, e) {
      var u = (u = H.current) ? Qn(u) : null;
      if (!u) throw Error(d(446));
      switch (l) {
        case 'meta':
        case 'title':
          return null;
        case 'style':
          return typeof a.precedence == 'string' &&
            typeof a.href == 'string'
            ? ((t = je(a.href)),
              (a = le(u).hoistableStyles),
              (e = a.get(t)),
              e ||
                ((e = {
                  type: 'style',
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, e)),
              e)
            : { type: 'void', instance: null, count: 0, state: null };
        case 'link':
          if (
            a.rel === 'stylesheet' &&
            typeof a.href == 'string' &&
            typeof a.precedence == 'string'
          ) {
            l = je(a.href);
            var n = le(u).hoistableStyles,
              c = n.get(l);
            if (
              (c ||
                ((u = u.ownerDocument || u),
                (c = {
                  type: 'stylesheet',
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                n.set(l, c),
                (n = u.querySelector(Au(l))) &&
                  !n._p &&
                  ((c.instance = n), (c.state.loading = 5)),
                Dt.has(l) ||
                  ((a = {
                    rel: 'preload',
                    as: 'style',
                    href: a.href,
                    crossOrigin: a.crossOrigin,
                    integrity: a.integrity,
                    media: a.media,
                    hrefLang: a.hrefLang,
                    referrerPolicy: a.referrerPolicy,
                  }),
                  Dt.set(l, a),
                  n || Ov(u, l, a, c.state))),
              t && e === null)
            )
              throw Error(d(528, ''));
            return c;
          }
          if (t && e !== null) throw Error(d(529, ''));
          return null;
        case 'script':
          return (
            (t = a.async),
            (a = a.src),
            typeof a == 'string' &&
            t &&
            typeof t != 'function' &&
            typeof t != 'symbol'
              ? ((t = qe(a)),
                (a = le(u).hoistableScripts),
                (e = a.get(t)),
                e ||
                  ((e = {
                    type: 'script',
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  a.set(t, e)),
                e)
              : {
                  type: 'void',
                  instance: null,
                  count: 0,
                  state: null,
                }
          );
        default:
          throw Error(d(444, l));
      }
    }
    function je(l) {
      return 'href="' + Tt(l) + '"';
    }
    function Au(l) {
      return 'link[rel="stylesheet"][' + l + ']';
    }
    function ko(l) {
      return U({}, l, {
        'data-precedence': l.precedence,
        precedence: null,
      });
    }
    function Ov(l, t, a, e) {
      l.querySelector('link[rel="preload"][as="style"][' + t + ']')
        ? (e.loading = 1)
        : ((t = l.createElement('link')),
          (e.preload = t),
          t.addEventListener('load', function () {
            return (e.loading |= 1);
          }),
          t.addEventListener('error', function () {
            return (e.loading |= 2);
          }),
          Wl(t, 'link', a),
          Xl(t),
          l.head.appendChild(t));
    }
    function qe(l) {
      return '[src="' + Tt(l) + '"]';
    }
    function zu(l) {
      return 'script[async]' + l;
    }
    function $o(l, t, a) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case 'style':
            var e = l.querySelector(
              'style[data-href~="' + Tt(a.href) + '"]'
            );
            if (e) return (t.instance = e), Xl(e), e;
            var u = U({}, a, {
              'data-href': a.href,
              'data-precedence': a.precedence,
              href: null,
              precedence: null,
            });
            return (
              (e = (l.ownerDocument || l).createElement('style')),
              Xl(e),
              Wl(e, 'style', u),
              Zn(e, a.precedence, l),
              (t.instance = e)
            );
          case 'stylesheet':
            u = je(a.href);
            var n = l.querySelector(Au(u));
            if (n)
              return (
                (t.state.loading |= 4), (t.instance = n), Xl(n), n
              );
            (e = ko(a)),
              (u = Dt.get(u)) && ci(e, u),
              (n = (l.ownerDocument || l).createElement('link')),
              Xl(n);
            var c = n;
            return (
              (c._p = new Promise(function (f, s) {
                (c.onload = f), (c.onerror = s);
              })),
              Wl(n, 'link', e),
              (t.state.loading |= 4),
              Zn(n, a.precedence, l),
              (t.instance = n)
            );
          case 'script':
            return (
              (n = qe(a.src)),
              (u = l.querySelector(zu(n)))
                ? ((t.instance = u), Xl(u), u)
                : ((e = a),
                  (u = Dt.get(n)) && ((e = U({}, a)), fi(e, u)),
                  (l = l.ownerDocument || l),
                  (u = l.createElement('script')),
                  Xl(u),
                  Wl(u, 'link', e),
                  l.head.appendChild(u),
                  (t.instance = u))
            );
          case 'void':
            return null;
          default:
            throw Error(d(443, t.type));
        }
      else
        t.type === 'stylesheet' &&
          (t.state.loading & 4) === 0 &&
          ((e = t.instance),
          (t.state.loading |= 4),
          Zn(e, a.precedence, l));
      return t.instance;
    }
    function Zn(l, t, a) {
      for (
        var e = a.querySelectorAll(
            'link[rel="stylesheet"][data-precedence],style[data-precedence]'
          ),
          u = e.length ? e[e.length - 1] : null,
          n = u,
          c = 0;
        c < e.length;
        c++
      ) {
        var f = e[c];
        if (f.dataset.precedence === t) n = f;
        else if (n !== u) break;
      }
      n
        ? n.parentNode.insertBefore(l, n.nextSibling)
        : ((t = a.nodeType === 9 ? a.head : a),
          t.insertBefore(l, t.firstChild));
    }
    function ci(l, t) {
      l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
        l.referrerPolicy == null &&
          (l.referrerPolicy = t.referrerPolicy),
        l.title == null && (l.title = t.title);
    }
    function fi(l, t) {
      l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
        l.referrerPolicy == null &&
          (l.referrerPolicy = t.referrerPolicy),
        l.integrity == null && (l.integrity = t.integrity);
    }
    var Ln = null;
    function Fo(l, t, a) {
      if (Ln === null) {
        var e = new Map(),
          u = (Ln = new Map());
        u.set(a, e);
      } else
        (u = Ln), (e = u.get(a)), e || ((e = new Map()), u.set(a, e));
      if (e.has(l)) return e;
      for (
        e.set(l, null), a = a.getElementsByTagName(l), u = 0;
        u < a.length;
        u++
      ) {
        var n = a[u];
        if (
          !(
            n[Xe] ||
            n[Fl] ||
            (l === 'link' && n.getAttribute('rel') === 'stylesheet')
          ) &&
          n.namespaceURI !== 'http://www.w3.org/2000/svg'
        ) {
          var c = n.getAttribute(t) || '';
          c = l + c;
          var f = e.get(c);
          f ? f.push(n) : e.set(c, [n]);
        }
      }
      return e;
    }
    function Po(l, t, a) {
      (l = l.ownerDocument || l),
        l.head.insertBefore(
          a,
          t === 'title' ? l.querySelector('head > title') : null
        );
    }
    function Av(l, t, a) {
      if (a === 1 || t.itemProp != null) return !1;
      switch (l) {
        case 'meta':
        case 'title':
          return !0;
        case 'style':
          if (
            typeof t.precedence != 'string' ||
            typeof t.href != 'string' ||
            t.href === ''
          )
            break;
          return !0;
        case 'link':
          if (
            typeof t.rel != 'string' ||
            typeof t.href != 'string' ||
            t.href === '' ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case 'stylesheet':
              return (
                (l = t.disabled),
                typeof t.precedence == 'string' && l == null
              );
            default:
              return !0;
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
            return !0;
      }
      return !1;
    }
    function Io(l) {
      return !(
        l.type === 'stylesheet' && (l.state.loading & 3) === 0
      );
    }
    var Du = null;
    function zv() {}
    function Dv(l, t, a) {
      if (Du === null) throw Error(d(475));
      var e = Du;
      if (
        t.type === 'stylesheet' &&
        (typeof a.media != 'string' ||
          matchMedia(a.media).matches !== !1) &&
        (t.state.loading & 4) === 0
      ) {
        if (t.instance === null) {
          var u = je(a.href),
            n = l.querySelector(Au(u));
          if (n) {
            (l = n._p),
              l !== null &&
                typeof l == 'object' &&
                typeof l.then == 'function' &&
                (e.count++, (e = Vn.bind(e)), l.then(e, e)),
              (t.state.loading |= 4),
              (t.instance = n),
              Xl(n);
            return;
          }
          (n = l.ownerDocument || l),
            (a = ko(a)),
            (u = Dt.get(u)) && ci(a, u),
            (n = n.createElement('link')),
            Xl(n);
          var c = n;
          (c._p = new Promise(function (f, s) {
            (c.onload = f), (c.onerror = s);
          })),
            Wl(n, 'link', a),
            (t.instance = n);
        }
        e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(t, l),
          (l = t.state.preload) &&
            (t.state.loading & 3) === 0 &&
            (e.count++,
            (t = Vn.bind(e)),
            l.addEventListener('load', t),
            l.addEventListener('error', t));
      }
    }
    function Rv() {
      if (Du === null) throw Error(d(475));
      var l = Du;
      return (
        l.stylesheets && l.count === 0 && ii(l, l.stylesheets),
        0 < l.count
          ? function (t) {
              var a = setTimeout(function () {
                if (
                  (l.stylesheets && ii(l, l.stylesheets), l.unsuspend)
                ) {
                  var e = l.unsuspend;
                  (l.unsuspend = null), e();
                }
              }, 6e4);
              return (
                (l.unsuspend = t),
                function () {
                  (l.unsuspend = null), clearTimeout(a);
                }
              );
            }
          : null
      );
    }
    function Vn() {
      if ((this.count--, this.count === 0)) {
        if (this.stylesheets) ii(this, this.stylesheets);
        else if (this.unsuspend) {
          var l = this.unsuspend;
          (this.unsuspend = null), l();
        }
      }
    }
    var wn = null;
    function ii(l, t) {
      (l.stylesheets = null),
        l.unsuspend !== null &&
          (l.count++,
          (wn = new Map()),
          t.forEach(Uv, l),
          (wn = null),
          Vn.call(l));
    }
    function Uv(l, t) {
      if (!(t.state.loading & 4)) {
        var a = wn.get(l);
        if (a) var e = a.get(null);
        else {
          (a = new Map()), wn.set(l, a);
          for (
            var u = l.querySelectorAll(
                'link[data-precedence],style[data-precedence]'
              ),
              n = 0;
            n < u.length;
            n++
          ) {
            var c = u[n];
            (c.nodeName === 'LINK' ||
              c.getAttribute('media') !== 'not all') &&
              (a.set(c.dataset.precedence, c), (e = c));
          }
          e && a.set(null, e);
        }
        (u = t.instance),
          (c = u.getAttribute('data-precedence')),
          (n = a.get(c) || e),
          n === e && a.set(null, u),
          a.set(c, u),
          this.count++,
          (e = Vn.bind(this)),
          u.addEventListener('load', e),
          u.addEventListener('error', e),
          n
            ? n.parentNode.insertBefore(u, n.nextSibling)
            : ((l = l.nodeType === 9 ? l.head : l),
              l.insertBefore(u, l.firstChild)),
          (t.state.loading |= 4);
      }
    }
    var Ru = {
      $$typeof: al,
      Provider: null,
      Consumer: null,
      _currentValue: W,
      _currentValue2: W,
      _threadCount: 0,
    };
    function xv(l, t, a, e, u, n, c, f) {
      (this.tag = 1),
        (this.containerInfo = l),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = ec(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = ec(0)),
        (this.hiddenUpdates = ec(null)),
        (this.identifierPrefix = e),
        (this.onUncaughtError = u),
        (this.onCaughtError = n),
        (this.onRecoverableError = c),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = f),
        (this.incompleteTransitions = new Map());
    }
    function ld(l, t, a, e, u, n, c, f, s, y, T, A) {
      return (
        (l = new xv(l, t, a, c, f, s, y, A)),
        (t = 1),
        n === !0 && (t |= 24),
        (n = vt(3, null, null, t)),
        (l.current = n),
        (n.stateNode = l),
        (t = Zc()),
        t.refCount++,
        (l.pooledCache = t),
        t.refCount++,
        (n.memoizedState = { element: e, isDehydrated: a, cache: t }),
        Kc(n),
        l
      );
    }
    function td(l) {
      return l ? ((l = de), l) : de;
    }
    function ad(l, t, a, e, u, n) {
      (u = td(u)),
        e.context === null ? (e.context = u) : (e.pendingContext = u),
        (e = oa(t)),
        (e.payload = { element: a }),
        (n = n === void 0 ? null : n),
        n !== null && (e.callback = n),
        (a = da(l, e, t)),
        a !== null && (bt(a, l, t), nu(a, l, t));
    }
    function ed(l, t) {
      if (
        ((l = l.memoizedState), l !== null && l.dehydrated !== null)
      ) {
        var a = l.retryLane;
        l.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function ri(l, t) {
      ed(l, t), (l = l.alternate) && ed(l, t);
    }
    function ud(l) {
      if (l.tag === 13) {
        var t = oe(l, 67108864);
        t !== null && bt(t, l, 67108864), ri(l, 67108864);
      }
    }
    var Kn = !0;
    function Nv(l, t, a, e) {
      var u = p.T;
      p.T = null;
      var n = C.p;
      try {
        (C.p = 2), si(l, t, a, e);
      } finally {
        (C.p = n), (p.T = u);
      }
    }
    function Hv(l, t, a, e) {
      var u = p.T;
      p.T = null;
      var n = C.p;
      try {
        (C.p = 8), si(l, t, a, e);
      } finally {
        (C.p = n), (p.T = u);
      }
    }
    function si(l, t, a, e) {
      if (Kn) {
        var u = oi(e);
        if (u === null) Ff(l, t, e, Jn, a), cd(l, e);
        else if (qv(u, l, t, a, e)) e.stopPropagation();
        else if ((cd(l, e), t & 4 && -1 < jv.indexOf(l))) {
          for (; u !== null; ) {
            var n = Ia(u);
            if (n !== null)
              switch (n.tag) {
                case 3:
                  if (
                    ((n = n.stateNode),
                    n.current.memoizedState.isDehydrated)
                  ) {
                    var c = xa(n.pendingLanes);
                    if (c !== 0) {
                      var f = n;
                      for (
                        f.pendingLanes |= 2, f.entangledLanes |= 2;
                        c;

                      ) {
                        var s = 1 << (31 - $l(c));
                        (f.entanglements[1] |= s), (c &= ~s);
                      }
                      Zt(n),
                        (yl & 6) === 0 && ((Un = zl() + 500), Eu(0));
                    }
                  }
                  break;
                case 13:
                  (f = oe(n, 2)),
                    f !== null && bt(f, n, 2),
                    Nn(),
                    ri(n, 2);
              }
            if (
              ((n = oi(e)), n === null && Ff(l, t, e, Jn, a), n === u)
            )
              break;
            u = n;
          }
          u !== null && e.stopPropagation();
        } else Ff(l, t, e, null, a);
      }
    }
    function oi(l) {
      return (l = yc(l)), di(l);
    }
    var Jn = null;
    function di(l) {
      if (((Jn = null), (l = Pa(l)), l !== null)) {
        var t = G(l);
        if (t === null) l = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (((l = q(t)), l !== null)) return l;
            l = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            l = null;
          } else t !== l && (l = null);
        }
      }
      return (Jn = l), null;
    }
    function nd(l) {
      switch (l) {
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
          return 2;
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
          return 8;
        case 'message':
          switch (xt()) {
            case Bt:
              return 2;
            case ot:
              return 8;
            case ka:
            case lc:
              return 32;
            case Cu:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var vi = !1,
      Oa = null,
      Aa = null,
      za = null,
      Uu = new Map(),
      xu = new Map(),
      Da = [],
      jv =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
          ' '
        );
    function cd(l, t) {
      switch (l) {
        case 'focusin':
        case 'focusout':
          Oa = null;
          break;
        case 'dragenter':
        case 'dragleave':
          Aa = null;
          break;
        case 'mouseover':
        case 'mouseout':
          za = null;
          break;
        case 'pointerover':
        case 'pointerout':
          Uu.delete(t.pointerId);
          break;
        case 'gotpointercapture':
        case 'lostpointercapture':
          xu.delete(t.pointerId);
      }
    }
    function Nu(l, t, a, e, u, n) {
      return l === null || l.nativeEvent !== n
        ? ((l = {
            blockedOn: t,
            domEventName: a,
            eventSystemFlags: e,
            nativeEvent: n,
            targetContainers: [u],
          }),
          t !== null && ((t = Ia(t)), t !== null && ud(t)),
          l)
        : ((l.eventSystemFlags |= e),
          (t = l.targetContainers),
          u !== null && t.indexOf(u) === -1 && t.push(u),
          l);
    }
    function qv(l, t, a, e, u) {
      switch (t) {
        case 'focusin':
          return (Oa = Nu(Oa, l, t, a, e, u)), !0;
        case 'dragenter':
          return (Aa = Nu(Aa, l, t, a, e, u)), !0;
        case 'mouseover':
          return (za = Nu(za, l, t, a, e, u)), !0;
        case 'pointerover':
          var n = u.pointerId;
          return Uu.set(n, Nu(Uu.get(n) || null, l, t, a, e, u)), !0;
        case 'gotpointercapture':
          return (
            (n = u.pointerId),
            xu.set(n, Nu(xu.get(n) || null, l, t, a, e, u)),
            !0
          );
      }
      return !1;
    }
    function fd(l) {
      var t = Pa(l.target);
      if (t !== null) {
        var a = G(t);
        if (a !== null) {
          if (((t = a.tag), t === 13)) {
            if (((t = q(a)), t !== null)) {
              (l.blockedOn = t),
                Dd(l.priority, function () {
                  if (a.tag === 13) {
                    var e = gt();
                    e = uc(e);
                    var u = oe(a, e);
                    u !== null && bt(u, a, e), ri(a, e);
                  }
                });
              return;
            }
          } else if (
            t === 3 &&
            a.stateNode.current.memoizedState.isDehydrated
          ) {
            l.blockedOn =
              a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      l.blockedOn = null;
    }
    function Wn(l) {
      if (l.blockedOn !== null) return !1;
      for (var t = l.targetContainers; 0 < t.length; ) {
        var a = oi(l.nativeEvent);
        if (a === null) {
          a = l.nativeEvent;
          var e = new a.constructor(a.type, a);
          (hc = e), a.target.dispatchEvent(e), (hc = null);
        } else
          return (
            (t = Ia(a)), t !== null && ud(t), (l.blockedOn = a), !1
          );
        t.shift();
      }
      return !0;
    }
    function id(l, t, a) {
      Wn(l) && a.delete(t);
    }
    function Bv() {
      (vi = !1),
        Oa !== null && Wn(Oa) && (Oa = null),
        Aa !== null && Wn(Aa) && (Aa = null),
        za !== null && Wn(za) && (za = null),
        Uu.forEach(id),
        xu.forEach(id);
    }
    function kn(l, t) {
      l.blockedOn === t &&
        ((l.blockedOn = null),
        vi ||
          ((vi = !0),
          O.unstable_scheduleCallback(
            O.unstable_NormalPriority,
            Bv
          )));
    }
    var $n = null;
    function rd(l) {
      $n !== l &&
        (($n = l),
        O.unstable_scheduleCallback(
          O.unstable_NormalPriority,
          function () {
            $n === l && ($n = null);
            for (var t = 0; t < l.length; t += 3) {
              var a = l[t],
                e = l[t + 1],
                u = l[t + 2];
              if (typeof e != 'function') {
                if (di(e || a) === null) continue;
                break;
              }
              var n = Ia(a);
              n !== null &&
                (l.splice(t, 3),
                (t -= 3),
                df(
                  n,
                  {
                    pending: !0,
                    data: u,
                    method: a.method,
                    action: e,
                  },
                  e,
                  u
                ));
            }
          }
        ));
    }
    function Hu(l) {
      function t(s) {
        return kn(s, l);
      }
      Oa !== null && kn(Oa, l),
        Aa !== null && kn(Aa, l),
        za !== null && kn(za, l),
        Uu.forEach(t),
        xu.forEach(t);
      for (var a = 0; a < Da.length; a++) {
        var e = Da[a];
        e.blockedOn === l && (e.blockedOn = null);
      }
      for (; 0 < Da.length && ((a = Da[0]), a.blockedOn === null); )
        fd(a), a.blockedOn === null && Da.shift();
      if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
        for (e = 0; e < a.length; e += 3) {
          var u = a[e],
            n = a[e + 1],
            c = u[ut] || null;
          if (typeof n == 'function') c || rd(a);
          else if (c) {
            var f = null;
            if (n && n.hasAttribute('formAction')) {
              if (((u = n), (c = n[ut] || null))) f = c.formAction;
              else if (di(u) !== null) continue;
            } else f = c.action;
            typeof f == 'function'
              ? (a[e + 1] = f)
              : (a.splice(e, 3), (e -= 3)),
              rd(a);
          }
        }
    }
    function hi(l) {
      this._internalRoot = l;
    }
    (Fn.prototype.render = hi.prototype.render =
      function (l) {
        var t = this._internalRoot;
        if (t === null) throw Error(d(409));
        var a = t.current,
          e = gt();
        ad(a, e, l, t, null, null);
      }),
      (Fn.prototype.unmount = hi.prototype.unmount =
        function () {
          var l = this._internalRoot;
          if (l !== null) {
            this._internalRoot = null;
            var t = l.containerInfo;
            ad(l.current, 2, null, l, null, null),
              Nn(),
              (t[Fa] = null);
          }
        });
    function Fn(l) {
      this._internalRoot = l;
    }
    Fn.prototype.unstable_scheduleHydration = function (l) {
      if (l) {
        var t = Oi();
        l = { blockedOn: null, target: l, priority: t };
        for (
          var a = 0;
          a < Da.length && t !== 0 && t < Da[a].priority;
          a++
        );
        Da.splice(a, 0, l), a === 0 && fd(l);
      }
    };
    var sd = B.version;
    if (sd !== '19.1.0') throw Error(d(527, sd, '19.1.0'));
    C.findDOMNode = function (l) {
      var t = l._reactInternals;
      if (t === void 0)
        throw typeof l.render == 'function'
          ? Error(d(188))
          : ((l = Object.keys(l).join(',')), Error(d(268, l)));
      return (
        (l = z(t)),
        (l = l !== null ? b(l) : null),
        (l = l === null ? null : l.stateNode),
        l
      );
    };
    var Cv = {
      bundleType: 0,
      version: '19.1.0',
      rendererPackageName: 'react-dom',
      currentDispatcherRef: p,
      reconcilerVersion: '19.1.0',
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
      var Pn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Pn.isDisabled && Pn.supportsFiber)
        try {
          (ca = Pn.inject(Cv)), (at = Pn);
        } catch {}
    }
    return (
      (qu.createRoot = function (l, t) {
        if (!Y(l)) throw Error(d(299));
        var a = !1,
          e = '',
          u = Os,
          n = As,
          c = zs,
          f = null;
        return (
          t != null &&
            (t.unstable_strictMode === !0 && (a = !0),
            t.identifierPrefix !== void 0 && (e = t.identifierPrefix),
            t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
            t.onCaughtError !== void 0 && (n = t.onCaughtError),
            t.onRecoverableError !== void 0 &&
              (c = t.onRecoverableError),
            t.unstable_transitionCallbacks !== void 0 &&
              (f = t.unstable_transitionCallbacks)),
          (t = ld(l, 1, !1, null, null, a, e, u, n, c, f, null)),
          (l[Fa] = t.current),
          $f(l),
          new hi(t)
        );
      }),
      (qu.hydrateRoot = function (l, t, a) {
        if (!Y(l)) throw Error(d(299));
        var e = !1,
          u = '',
          n = Os,
          c = As,
          f = zs,
          s = null,
          y = null;
        return (
          a != null &&
            (a.unstable_strictMode === !0 && (e = !0),
            a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
            a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
            a.onCaughtError !== void 0 && (c = a.onCaughtError),
            a.onRecoverableError !== void 0 &&
              (f = a.onRecoverableError),
            a.unstable_transitionCallbacks !== void 0 &&
              (s = a.unstable_transitionCallbacks),
            a.formState !== void 0 && (y = a.formState)),
          (t = ld(l, 1, !0, t, a ?? null, e, u, n, c, f, s, y)),
          (t.context = td(null)),
          (a = t.current),
          (e = gt()),
          (e = uc(e)),
          (u = oa(e)),
          (u.callback = null),
          da(a, u, e),
          (a = e),
          (t.current.lanes = a),
          Ge(t, a),
          Zt(t),
          (l[Fa] = t.current),
          $f(l),
          new Fn(t)
        );
      }),
      (qu.version = '19.1.0'),
      qu
    );
  }
  var pd;
  function $v() {
    if (pd) return gi.exports;
    pd = 1;
    function O() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
        } catch (B) {
          console.error(B);
        }
    }
    return O(), (gi.exports = kv()), gi.exports;
  }
  var Fv = $v();
  function Pv({ onLogin: O }) {
    const [B, Q] = lt.useState(''),
      [d, Y] = lt.useState(''),
      G = () => {
        fetch('/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ email: B, username: d }),
        })
          .then((q) => q.json())
          .then((q) => O(q));
      };
    return F.jsxs('div', {
      className:
        'flex flex-col gap-2 border border-yellow-700 rounded p-4',
      children: [
        F.jsx('h2', {
          className: 'text-2xl font-bold text-yellow-400',
          children: 'Logg inn for å delta!',
        }),
        F.jsx('input', {
          placeholder: 'E-post',
          value: B,
          className:
            'bg-yellow-800 text-yellow-400 px-4 py-2 rounded text-xl',
          onChange: (q) => Q(q.target.value),
        }),
        F.jsx('input', {
          placeholder: 'Brukernavn',
          value: d,
          className:
            'bg-yellow-800 px-4 text-yellow-400 py-2 rounded text-xl',
          onChange: (q) => Y(q.target.value),
        }),
        F.jsx('button', {
          onClick: G,
          className:
            'border border-yellow-600 text-yellow-600 px-4 py-2 rounded text-xl hover:bg-yellow-700 hover:text-yellow-300 cursor-pointer',
          children: 'Start konkurranse',
        }),
      ],
    });
  }
  var Ua = {},
    Rt = {},
    In = {},
    Td;
  function Iv() {
    if (Td) return In;
    (Td = 1), Object.defineProperty(In, '__esModule', { value: !0 });
    var O = (function () {
      function B(Q) {
        var d = Q.confetti,
          Y = Q.decorateOptions,
          G = this;
        (this.interval = null),
          (this.shoot = function () {
            return G.tickAnimation();
          }),
          (this.run = function (q) {
            var Z = q.speed,
              z = q.delay,
              b = z === void 0 ? 0 : z,
              U = q.duration;
            G.interval ||
              setTimeout(function () {
                G.shoot(),
                  (G.interval = setInterval(
                    G.shoot,
                    1e3 / Math.min(Z, 1e3)
                  )),
                  U && setTimeout(G.pause, U);
              }, b);
          }),
          (this.pause = function () {
            clearInterval(G.interval), (G.interval = null);
          }),
          (this.stop = function () {
            G.pause(), G.confetti.reset();
          }),
          (this.confetti = d),
          (this.decorateOptions = Y);
      }
      return B;
    })();
    return (In.default = O), In;
  }
  var Ed;
  function lh() {
    if (Ed) return Rt;
    Ed = 1;
    var O =
        (Rt && Rt.__extends) ||
        (function () {
          var q = function (Z, z) {
            return (
              (q =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (b, U) {
                    b.__proto__ = U;
                  }) ||
                function (b, U) {
                  for (var S in U)
                    Object.prototype.hasOwnProperty.call(U, S) &&
                      (b[S] = U[S]);
                }),
              q(Z, z)
            );
          };
          return function (Z, z) {
            if (typeof z != 'function' && z !== null)
              throw new TypeError(
                'Class extends value ' +
                  String(z) +
                  ' is not a constructor or null'
              );
            q(Z, z);
            function b() {
              this.constructor = Z;
            }
            Z.prototype =
              z === null
                ? Object.create(z)
                : ((b.prototype = z.prototype), new b());
          };
        })(),
      B =
        (Rt && Rt.__read) ||
        function (q, Z) {
          var z = typeof Symbol == 'function' && q[Symbol.iterator];
          if (!z) return q;
          var b = z.call(q),
            U,
            S = [],
            x;
          try {
            for (
              ;
              (Z === void 0 || Z-- > 0) && !(U = b.next()).done;

            )
              S.push(U.value);
          } catch (N) {
            x = { error: N };
          } finally {
            try {
              U && !U.done && (z = b.return) && z.call(b);
            } finally {
              if (x) throw x.error;
            }
          }
          return S;
        },
      Q =
        (Rt && Rt.__spreadArray) ||
        function (q, Z, z) {
          if (z || arguments.length === 2)
            for (var b = 0, U = Z.length, S; b < U; b++)
              (S || !(b in Z)) &&
                (S || (S = Array.prototype.slice.call(Z, 0, b)),
                (S[b] = Z[b]));
          return q.concat(S || Array.prototype.slice.call(Z));
        },
      d =
        (Rt && Rt.__importDefault) ||
        function (q) {
          return q && q.__esModule ? q : { default: q };
        };
    Object.defineProperty(Rt, '__esModule', { value: !0 });
    var Y = d(Iv()),
      G = (function (q) {
        O(Z, q);
        function Z() {
          var z = q.apply(this, Q([], B(arguments), !1)) || this;
          return (
            (z.tickAnimation = function () {
              z.confetti(
                z.decorateOptions({
                  spread: 360,
                  ticks: 50,
                  gravity: 0,
                  decay: 0.94,
                  startVelocity: 30,
                  colors: [
                    'FFE400',
                    'FFBD00',
                    'E89400',
                    'FFCA6C',
                    'FDFFB8',
                  ],
                  particleCount: 40,
                  scalar: 1.2,
                  shapes: ['star'],
                })
              ),
                z.confetti(
                  z.decorateOptions({
                    spread: 360,
                    ticks: 50,
                    gravity: 0,
                    decay: 0.94,
                    startVelocity: 30,
                    colors: [
                      'FFE400',
                      'FFBD00',
                      'E89400',
                      'FFCA6C',
                      'FDFFB8',
                    ],
                    particleCount: 10,
                    scalar: 0.75,
                    shapes: ['circle'],
                  })
                );
            }),
            z
          );
        }
        return Z;
      })(Y.default);
    return (Rt.default = G), Rt;
  }
  var Vl = {},
    rt = {},
    Bu = {};
  (function O(B, Q, d, Y) {
    var G = !!(
        B.Worker &&
        B.Blob &&
        B.Promise &&
        B.OffscreenCanvas &&
        B.OffscreenCanvasRenderingContext2D &&
        B.HTMLCanvasElement &&
        B.HTMLCanvasElement.prototype.transferControlToOffscreen &&
        B.URL &&
        B.URL.createObjectURL
      ),
      q =
        typeof Path2D == 'function' && typeof DOMMatrix == 'function',
      Z = (function () {
        if (!B.OffscreenCanvas) return !1;
        var i = new OffscreenCanvas(1, 1),
          r = i.getContext('2d');
        r.fillRect(0, 0, 1, 1);
        var E = i.transferToImageBitmap();
        try {
          r.createPattern(E, 'no-repeat');
        } catch {
          return !1;
        }
        return !0;
      })();
    function z() {}
    function b(i) {
      var r = Q.exports.Promise,
        E = r !== void 0 ? r : B.Promise;
      return typeof E == 'function' ? new E(i) : (i(z, z), null);
    }
    var U = (function (i, r) {
        return {
          transform: function (E) {
            if (i) return E;
            if (r.has(E)) return r.get(E);
            var _ = new OffscreenCanvas(E.width, E.height),
              D = _.getContext('2d');
            return D.drawImage(E, 0, 0), r.set(E, _), _;
          },
          clear: function () {
            r.clear();
          },
        };
      })(Z, new Map()),
      S = (function () {
        var i = Math.floor(16.666666666666668),
          r,
          E,
          _ = {},
          D = 0;
        return (
          typeof requestAnimationFrame == 'function' &&
          typeof cancelAnimationFrame == 'function'
            ? ((r = function (X) {
                var H = Math.random();
                return (
                  (_[H] = requestAnimationFrame(function w(K) {
                    D === K || D + i - 1 < K
                      ? ((D = K), delete _[H], X())
                      : (_[H] = requestAnimationFrame(w));
                  })),
                  H
                );
              }),
              (E = function (X) {
                _[X] && cancelAnimationFrame(_[X]);
              }))
            : ((r = function (X) {
                return setTimeout(X, i);
              }),
              (E = function (X) {
                return clearTimeout(X);
              })),
          { frame: r, cancel: E }
        );
      })(),
      x = (function () {
        var i,
          r,
          E = {};
        function _(D) {
          function X(H, w) {
            D.postMessage({ options: H || {}, callback: w });
          }
          (D.init = function (w) {
            var K = w.transferControlToOffscreen();
            D.postMessage({ canvas: K }, [K]);
          }),
            (D.fire = function (w, K, il) {
              if (r) return X(w, null), r;
              var El = Math.random().toString(36).slice(2);
              return (
                (r = b(function (vl) {
                  function _l(xl) {
                    xl.data.callback === El &&
                      (delete E[El],
                      D.removeEventListener('message', _l),
                      (r = null),
                      U.clear(),
                      il(),
                      vl());
                  }
                  D.addEventListener('message', _l),
                    X(w, El),
                    (E[El] = _l.bind(null, {
                      data: { callback: El },
                    }));
                })),
                r
              );
            }),
            (D.reset = function () {
              D.postMessage({ reset: !0 });
              for (var w in E) E[w](), delete E[w];
            });
        }
        return function () {
          if (i) return i;
          if (!d && G) {
            var D = [
              'var CONFETTI, SIZE = {}, module = {};',
              '(' + O.toString() + ')(this, module, true, SIZE);',
              'onmessage = function(msg) {',
              '  if (msg.data.options) {',
              '    CONFETTI(msg.data.options).then(function () {',
              '      if (msg.data.callback) {',
              '        postMessage({ callback: msg.data.callback });',
              '      }',
              '    });',
              '  } else if (msg.data.reset) {',
              '    CONFETTI && CONFETTI.reset();',
              '  } else if (msg.data.resize) {',
              '    SIZE.width = msg.data.resize.width;',
              '    SIZE.height = msg.data.resize.height;',
              '  } else if (msg.data.canvas) {',
              '    SIZE.width = msg.data.canvas.width;',
              '    SIZE.height = msg.data.canvas.height;',
              '    CONFETTI = module.exports.create(msg.data.canvas);',
              '  }',
              '}',
            ].join(`
`);
            try {
              i = new Worker(URL.createObjectURL(new Blob([D])));
            } catch (X) {
              return (
                typeof console !== void 0 &&
                  typeof console.warn == 'function' &&
                  console.warn('🎊 Could not load worker', X),
                null
              );
            }
            _(i);
          }
          return i;
        };
      })(),
      N = {
        particleCount: 50,
        angle: 90,
        spread: 45,
        startVelocity: 45,
        decay: 0.9,
        gravity: 1,
        drift: 0,
        ticks: 200,
        x: 0.5,
        y: 0.5,
        shapes: ['square', 'circle'],
        zIndex: 100,
        colors: [
          '#26ccff',
          '#a25afd',
          '#ff5e7e',
          '#88ff5a',
          '#fcff42',
          '#ffa62d',
          '#ff36ff',
        ],
        disableForReducedMotion: !1,
        scalar: 1,
      };
    function j(i, r) {
      return r ? r(i) : i;
    }
    function R(i) {
      return i != null;
    }
    function L(i, r, E) {
      return j(i && R(i[r]) ? i[r] : N[r], E);
    }
    function cl(i) {
      return i < 0 ? 0 : Math.floor(i);
    }
    function sl(i, r) {
      return Math.floor(Math.random() * (r - i)) + i;
    }
    function al(i) {
      return parseInt(i, 16);
    }
    function Tl(i) {
      return i.map(fl);
    }
    function fl(i) {
      var r = String(i).replace(/[^0-9a-f]/gi, '');
      return (
        r.length < 6 && (r = r[0] + r[0] + r[1] + r[1] + r[2] + r[2]),
        {
          r: al(r.substring(0, 2)),
          g: al(r.substring(2, 4)),
          b: al(r.substring(4, 6)),
        }
      );
    }
    function Ul(i) {
      var r = L(i, 'origin', Object);
      return (r.x = L(r, 'x', Number)), (r.y = L(r, 'y', Number)), r;
    }
    function wl(i) {
      (i.width = document.documentElement.clientWidth),
        (i.height = document.documentElement.clientHeight);
    }
    function tt(i) {
      var r = i.getBoundingClientRect();
      (i.width = r.width), (i.height = r.height);
    }
    function St(i) {
      var r = document.createElement('canvas');
      return (
        (r.style.position = 'fixed'),
        (r.style.top = '0px'),
        (r.style.left = '0px'),
        (r.style.pointerEvents = 'none'),
        (r.style.zIndex = i),
        r
      );
    }
    function na(i, r, E, _, D, X, H, w, K) {
      i.save(),
        i.translate(r, E),
        i.rotate(X),
        i.scale(_, D),
        i.arc(0, 0, 1, H, w, K),
        i.restore();
    }
    function Ut(i) {
      var r = i.angle * (Math.PI / 180),
        E = i.spread * (Math.PI / 180);
      return {
        x: i.x,
        y: i.y,
        wobble: Math.random() * 10,
        wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
        velocity:
          i.startVelocity * 0.5 + Math.random() * i.startVelocity,
        angle2D: -r + (0.5 * E - Math.random() * E),
        tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
        color: i.color,
        shape: i.shape,
        tick: 0,
        totalTicks: i.ticks,
        decay: i.decay,
        drift: i.drift,
        random: Math.random() + 2,
        tiltSin: 0,
        tiltCos: 0,
        wobbleX: 0,
        wobbleY: 0,
        gravity: i.gravity * 3,
        ovalScalar: 0.6,
        scalar: i.scalar,
        flat: i.flat,
      };
    }
    function Gl(i, r) {
      (r.x += Math.cos(r.angle2D) * r.velocity + r.drift),
        (r.y += Math.sin(r.angle2D) * r.velocity + r.gravity),
        (r.velocity *= r.decay),
        r.flat
          ? ((r.wobble = 0),
            (r.wobbleX = r.x + 10 * r.scalar),
            (r.wobbleY = r.y + 10 * r.scalar),
            (r.tiltSin = 0),
            (r.tiltCos = 0),
            (r.random = 1))
          : ((r.wobble += r.wobbleSpeed),
            (r.wobbleX = r.x + 10 * r.scalar * Math.cos(r.wobble)),
            (r.wobbleY = r.y + 10 * r.scalar * Math.sin(r.wobble)),
            (r.tiltAngle += 0.1),
            (r.tiltSin = Math.sin(r.tiltAngle)),
            (r.tiltCos = Math.cos(r.tiltAngle)),
            (r.random = Math.random() + 2));
      var E = r.tick++ / r.totalTicks,
        _ = r.x + r.random * r.tiltCos,
        D = r.y + r.random * r.tiltSin,
        X = r.wobbleX + r.random * r.tiltCos,
        H = r.wobbleY + r.random * r.tiltSin;
      if (
        ((i.fillStyle =
          'rgba(' +
          r.color.r +
          ', ' +
          r.color.g +
          ', ' +
          r.color.b +
          ', ' +
          (1 - E) +
          ')'),
        i.beginPath(),
        q &&
          r.shape.type === 'path' &&
          typeof r.shape.path == 'string' &&
          Array.isArray(r.shape.matrix))
      )
        i.fill(
          C(
            r.shape.path,
            r.shape.matrix,
            r.x,
            r.y,
            Math.abs(X - _) * 0.1,
            Math.abs(H - D) * 0.1,
            (Math.PI / 10) * r.wobble
          )
        );
      else if (r.shape.type === 'bitmap') {
        var w = (Math.PI / 10) * r.wobble,
          K = Math.abs(X - _) * 0.1,
          il = Math.abs(H - D) * 0.1,
          El = r.shape.bitmap.width * r.scalar,
          vl = r.shape.bitmap.height * r.scalar,
          _l = new DOMMatrix([
            Math.cos(w) * K,
            Math.sin(w) * K,
            -Math.sin(w) * il,
            Math.cos(w) * il,
            r.x,
            r.y,
          ]);
        _l.multiplySelf(new DOMMatrix(r.shape.matrix));
        var xl = i.createPattern(
          U.transform(r.shape.bitmap),
          'no-repeat'
        );
        xl.setTransform(_l),
          (i.globalAlpha = 1 - E),
          (i.fillStyle = xl),
          i.fillRect(r.x - El / 2, r.y - vl / 2, El, vl),
          (i.globalAlpha = 1);
      } else if (r.shape === 'circle')
        i.ellipse
          ? i.ellipse(
              r.x,
              r.y,
              Math.abs(X - _) * r.ovalScalar,
              Math.abs(H - D) * r.ovalScalar,
              (Math.PI / 10) * r.wobble,
              0,
              2 * Math.PI
            )
          : na(
              i,
              r.x,
              r.y,
              Math.abs(X - _) * r.ovalScalar,
              Math.abs(H - D) * r.ovalScalar,
              (Math.PI / 10) * r.wobble,
              0,
              2 * Math.PI
            );
      else if (r.shape === 'star')
        for (
          var el = (Math.PI / 2) * 3,
            kl = 4 * r.scalar,
            st = 8 * r.scalar,
            zl = r.x,
            xt = r.y,
            Bt = 5,
            ot = Math.PI / Bt;
          Bt--;

        )
          (zl = r.x + Math.cos(el) * st),
            (xt = r.y + Math.sin(el) * st),
            i.lineTo(zl, xt),
            (el += ot),
            (zl = r.x + Math.cos(el) * kl),
            (xt = r.y + Math.sin(el) * kl),
            i.lineTo(zl, xt),
            (el += ot);
      else
        i.moveTo(Math.floor(r.x), Math.floor(r.y)),
          i.lineTo(Math.floor(r.wobbleX), Math.floor(D)),
          i.lineTo(Math.floor(X), Math.floor(H)),
          i.lineTo(Math.floor(_), Math.floor(r.wobbleY));
      return i.closePath(), i.fill(), r.tick < r.totalTicks;
    }
    function Lt(i, r, E, _, D) {
      var X = r.slice(),
        H = i.getContext('2d'),
        w,
        K,
        il = b(function (El) {
          function vl() {
            (w = K = null),
              H.clearRect(0, 0, _.width, _.height),
              U.clear(),
              D(),
              El();
          }
          function _l() {
            d &&
              !(_.width === Y.width && _.height === Y.height) &&
              ((_.width = i.width = Y.width),
              (_.height = i.height = Y.height)),
              !_.width &&
                !_.height &&
                (E(i), (_.width = i.width), (_.height = i.height)),
              H.clearRect(0, 0, _.width, _.height),
              (X = X.filter(function (xl) {
                return Gl(H, xl);
              })),
              X.length ? (w = S.frame(_l)) : vl();
          }
          (w = S.frame(_l)), (K = vl);
        });
      return {
        addFettis: function (El) {
          return (X = X.concat(El)), il;
        },
        canvas: i,
        promise: il,
        reset: function () {
          w && S.cancel(w), K && K();
        },
      };
    }
    function qt(i, r) {
      var E = !i,
        _ = !!L(r || {}, 'resize'),
        D = !1,
        X = L(r, 'disableForReducedMotion', Boolean),
        H = G && !!L(r || {}, 'useWorker'),
        w = H ? x() : null,
        K = E ? wl : tt,
        il = i && w ? !!i.__confetti_initialized : !1,
        El =
          typeof matchMedia == 'function' &&
          matchMedia('(prefers-reduced-motion)').matches,
        vl;
      function _l(el, kl, st) {
        for (
          var zl = L(el, 'particleCount', cl),
            xt = L(el, 'angle', Number),
            Bt = L(el, 'spread', Number),
            ot = L(el, 'startVelocity', Number),
            ka = L(el, 'decay', Number),
            lc = L(el, 'gravity', Number),
            Cu = L(el, 'drift', Number),
            Yu = L(el, 'colors', Tl),
            tc = L(el, 'ticks', Number),
            ca = L(el, 'shapes'),
            at = L(el, 'scalar'),
            Ct = !!L(el, 'flat'),
            $l = Ul(el),
            Gu = zl,
            Ce = [],
            ac = i.width * $l.x,
            $a = i.height * $l.y;
          Gu--;

        )
          Ce.push(
            Ut({
              x: ac,
              y: $a,
              angle: xt,
              spread: Bt,
              startVelocity: ot,
              color: Yu[Gu % Yu.length],
              shape: ca[sl(0, ca.length)],
              ticks: tc,
              decay: ka,
              gravity: lc,
              drift: Cu,
              scalar: at,
              flat: Ct,
            })
          );
        return vl
          ? vl.addFettis(Ce)
          : ((vl = Lt(i, Ce, K, kl, st)), vl.promise);
      }
      function xl(el) {
        var kl = X || L(el, 'disableForReducedMotion', Boolean),
          st = L(el, 'zIndex', Number);
        if (kl && El)
          return b(function (ot) {
            ot();
          });
        E && vl
          ? (i = vl.canvas)
          : E && !i && ((i = St(st)), document.body.appendChild(i)),
          _ && !il && K(i);
        var zl = { width: i.width, height: i.height };
        w && !il && w.init(i),
          (il = !0),
          w && (i.__confetti_initialized = !0);
        function xt() {
          if (w) {
            var ot = {
              getBoundingClientRect: function () {
                if (!E) return i.getBoundingClientRect();
              },
            };
            K(ot),
              w.postMessage({
                resize: { width: ot.width, height: ot.height },
              });
            return;
          }
          zl.width = zl.height = null;
        }
        function Bt() {
          (vl = null),
            _ && ((D = !1), B.removeEventListener('resize', xt)),
            E &&
              i &&
              (document.body.contains(i) &&
                document.body.removeChild(i),
              (i = null),
              (il = !1));
        }
        return (
          _ && !D && ((D = !0), B.addEventListener('resize', xt, !1)),
          w ? w.fire(el, zl, Bt) : _l(el, zl, Bt)
        );
      }
      return (
        (xl.reset = function () {
          w && w.reset(), vl && vl.reset();
        }),
        xl
      );
    }
    var jl;
    function p() {
      return jl || (jl = qt(null, { useWorker: !0, resize: !0 })), jl;
    }
    function C(i, r, E, _, D, X, H) {
      var w = new Path2D(i),
        K = new Path2D();
      K.addPath(w, new DOMMatrix(r));
      var il = new Path2D();
      return (
        il.addPath(
          K,
          new DOMMatrix([
            Math.cos(H) * D,
            Math.sin(H) * D,
            -Math.sin(H) * X,
            Math.cos(H) * X,
            E,
            _,
          ])
        ),
        il
      );
    }
    function W(i) {
      if (!q)
        throw new Error(
          'path confetti are not supported in this browser'
        );
      var r, E;
      typeof i == 'string' ? (r = i) : ((r = i.path), (E = i.matrix));
      var _ = new Path2D(r),
        D = document.createElement('canvas'),
        X = D.getContext('2d');
      if (!E) {
        for (
          var H = 1e3, w = H, K = H, il = 0, El = 0, vl, _l, xl = 0;
          xl < H;
          xl += 2
        )
          for (var el = 0; el < H; el += 2)
            X.isPointInPath(_, xl, el, 'nonzero') &&
              ((w = Math.min(w, xl)),
              (K = Math.min(K, el)),
              (il = Math.max(il, xl)),
              (El = Math.max(El, el)));
        (vl = il - w), (_l = El - K);
        var kl = 10,
          st = Math.min(kl / vl, kl / _l);
        E = [
          st,
          0,
          0,
          st,
          -Math.round(vl / 2 + w) * st,
          -Math.round(_l / 2 + K) * st,
        ];
      }
      return { type: 'path', path: r, matrix: E };
    }
    function hl(i) {
      var r,
        E = 1,
        _ = '#000000',
        D =
          '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
      typeof i == 'string'
        ? (r = i)
        : ((r = i.text),
          (E = 'scalar' in i ? i.scalar : E),
          (D = 'fontFamily' in i ? i.fontFamily : D),
          (_ = 'color' in i ? i.color : _));
      var X = 10 * E,
        H = '' + X + 'px ' + D,
        w = new OffscreenCanvas(X, X),
        K = w.getContext('2d');
      K.font = H;
      var il = K.measureText(r),
        El = Math.ceil(
          il.actualBoundingBoxRight + il.actualBoundingBoxLeft
        ),
        vl = Math.ceil(
          il.actualBoundingBoxAscent + il.actualBoundingBoxDescent
        ),
        _l = 2,
        xl = il.actualBoundingBoxLeft + _l,
        el = il.actualBoundingBoxAscent + _l;
      (El += _l + _l),
        (vl += _l + _l),
        (w = new OffscreenCanvas(El, vl)),
        (K = w.getContext('2d')),
        (K.font = H),
        (K.fillStyle = _),
        K.fillText(r, xl, el);
      var kl = 1 / E;
      return {
        type: 'bitmap',
        bitmap: w.transferToImageBitmap(),
        matrix: [kl, 0, 0, kl, (-El * kl) / 2, (-vl * kl) / 2],
      };
    }
    (Q.exports = function () {
      return p().apply(this, arguments);
    }),
      (Q.exports.reset = function () {
        p().reset();
      }),
      (Q.exports.create = qt),
      (Q.exports.shapeFromPath = W),
      (Q.exports.shapeFromText = hl);
  })(
    (function () {
      return typeof window < 'u'
        ? window
        : typeof self < 'u'
        ? self
        : this || {};
    })(),
    Bu,
    !1
  );
  const th = Bu.exports;
  var ah = Bu.exports.create;
  const eh = Object.freeze(
      Object.defineProperty(
        { __proto__: null, create: ah, default: th },
        Symbol.toStringTag,
        { value: 'Module' }
      )
    ),
    uh = Qv(eh);
  var _d;
  function nh() {
    if (_d) return rt;
    _d = 1;
    var O =
        (rt && rt.__assign) ||
        function () {
          return (
            (O =
              Object.assign ||
              function (S) {
                for (var x, N = 1, j = arguments.length; N < j; N++) {
                  x = arguments[N];
                  for (var R in x)
                    Object.prototype.hasOwnProperty.call(x, R) &&
                      (S[R] = x[R]);
                }
                return S;
              }),
            O.apply(this, arguments)
          );
        },
      B =
        (rt && rt.__createBinding) ||
        (Object.create
          ? function (S, x, N, j) {
              j === void 0 && (j = N);
              var R = Object.getOwnPropertyDescriptor(x, N);
              (!R ||
                ('get' in R
                  ? !x.__esModule
                  : R.writable || R.configurable)) &&
                (R = {
                  enumerable: !0,
                  get: function () {
                    return x[N];
                  },
                }),
                Object.defineProperty(S, j, R);
            }
          : function (S, x, N, j) {
              j === void 0 && (j = N), (S[j] = x[N]);
            }),
      Q =
        (rt && rt.__setModuleDefault) ||
        (Object.create
          ? function (S, x) {
              Object.defineProperty(S, 'default', {
                enumerable: !0,
                value: x,
              });
            }
          : function (S, x) {
              S.default = x;
            }),
      d =
        (rt && rt.__importStar) ||
        function (S) {
          if (S && S.__esModule) return S;
          var x = {};
          if (S != null)
            for (var N in S)
              N !== 'default' &&
                Object.prototype.hasOwnProperty.call(S, N) &&
                B(x, S, N);
          return Q(x, S), x;
        },
      Y =
        (rt && rt.__importDefault) ||
        function (S) {
          return S && S.__esModule ? S : { default: S };
        };
    Object.defineProperty(rt, '__esModule', { value: !0 });
    var G = d(Be()),
      q = Y(uh),
      Z = { resize: !0, useWorker: !1 },
      z = {
        position: 'fixed',
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
      };
    function b(S, x) {
      return !S && !x ? z : S;
    }
    function U(S) {
      var x = S.style,
        N = S.className,
        j = S.width,
        R = S.height,
        L = S.globalOptions,
        cl = S.onInit,
        sl = (0, G.useRef)(null),
        al = (0, G.useRef)(null);
      return (
        (0, G.useEffect)(function () {
          if (sl.current)
            return (
              (al.current = q.default.create(
                sl.current,
                O(O({}, Z), L)
              )),
              cl == null || cl({ confetti: al.current }),
              function () {
                var Tl;
                (Tl = al.current) === null ||
                  Tl === void 0 ||
                  Tl.reset();
              }
            );
        }, []),
        G.default.createElement('canvas', {
          ref: sl,
          style: b(x, N),
          className: N,
          width: j,
          height: R,
        })
      );
    }
    return (rt.default = U), rt;
  }
  var Md;
  function ch() {
    if (Md) return Vl;
    Md = 1;
    var O =
        (Vl && Vl.__assign) ||
        function () {
          return (
            (O =
              Object.assign ||
              function (S) {
                for (var x, N = 1, j = arguments.length; N < j; N++) {
                  x = arguments[N];
                  for (var R in x)
                    Object.prototype.hasOwnProperty.call(x, R) &&
                      (S[R] = x[R]);
                }
                return S;
              }),
            O.apply(this, arguments)
          );
        },
      B =
        (Vl && Vl.__createBinding) ||
        (Object.create
          ? function (S, x, N, j) {
              j === void 0 && (j = N);
              var R = Object.getOwnPropertyDescriptor(x, N);
              (!R ||
                ('get' in R
                  ? !x.__esModule
                  : R.writable || R.configurable)) &&
                (R = {
                  enumerable: !0,
                  get: function () {
                    return x[N];
                  },
                }),
                Object.defineProperty(S, j, R);
            }
          : function (S, x, N, j) {
              j === void 0 && (j = N), (S[j] = x[N]);
            }),
      Q =
        (Vl && Vl.__setModuleDefault) ||
        (Object.create
          ? function (S, x) {
              Object.defineProperty(S, 'default', {
                enumerable: !0,
                value: x,
              });
            }
          : function (S, x) {
              S.default = x;
            }),
      d =
        (Vl && Vl.__importStar) ||
        function (S) {
          if (S && S.__esModule) return S;
          var x = {};
          if (S != null)
            for (var N in S)
              N !== 'default' &&
                Object.prototype.hasOwnProperty.call(S, N) &&
                B(x, S, N);
          return Q(x, S), x;
        },
      Y =
        (Vl && Vl.__rest) ||
        function (S, x) {
          var N = {};
          for (var j in S)
            Object.prototype.hasOwnProperty.call(S, j) &&
              x.indexOf(j) < 0 &&
              (N[j] = S[j]);
          if (
            S != null &&
            typeof Object.getOwnPropertySymbols == 'function'
          )
            for (
              var R = 0, j = Object.getOwnPropertySymbols(S);
              R < j.length;
              R++
            )
              x.indexOf(j[R]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(S, j[R]) &&
                (N[j[R]] = S[j[R]]);
          return N;
        },
      G =
        (Vl && Vl.__read) ||
        function (S, x) {
          var N = typeof Symbol == 'function' && S[Symbol.iterator];
          if (!N) return S;
          var j = N.call(S),
            R,
            L = [],
            cl;
          try {
            for (
              ;
              (x === void 0 || x-- > 0) && !(R = j.next()).done;

            )
              L.push(R.value);
          } catch (sl) {
            cl = { error: sl };
          } finally {
            try {
              R && !R.done && (N = j.return) && N.call(j);
            } finally {
              if (cl) throw cl.error;
            }
          }
          return L;
        },
      q =
        (Vl && Vl.__importDefault) ||
        function (S) {
          return S && S.__esModule ? S : { default: S };
        };
    Object.defineProperty(Vl, '__esModule', { value: !0 });
    var Z = d(Be()),
      z = q(nh()),
      b = function (S) {
        return S;
      };
    function U(S) {
      var x = S.decorateOptions,
        N = x === void 0 ? b : x,
        j = S.Conductor,
        R = S.autorun,
        L = S.onInit,
        cl = Y(S, [
          'decorateOptions',
          'Conductor',
          'autorun',
          'onInit',
        ]),
        sl = G((0, Z.useState)(), 2),
        al = sl[0],
        Tl = sl[1],
        fl = (0, Z.useCallback)(function (Ul) {
          var wl = Ul.confetti;
          Tl(function () {
            return wl;
          });
        }, []);
      return (
        (0, Z.useEffect)(
          function () {
            if (al) {
              var Ul = new j({ confetti: al, decorateOptions: N });
              return (
                R && Ul.run(R),
                L == null || L({ confetti: al, conductor: Ul }),
                Ul.stop
              );
            }
          },
          [al]
        ),
        Z.default.createElement(z.default, O({ onInit: fl }, cl))
      );
    }
    return (Vl.default = U), Vl;
  }
  var Od;
  function fh() {
    if (Od) return Ua;
    Od = 1;
    var O =
        (Ua && Ua.__assign) ||
        function () {
          return (
            (O =
              Object.assign ||
              function (q) {
                for (var Z, z = 1, b = arguments.length; z < b; z++) {
                  Z = arguments[z];
                  for (var U in Z)
                    Object.prototype.hasOwnProperty.call(Z, U) &&
                      (q[U] = Z[U]);
                }
                return q;
              }),
            O.apply(this, arguments)
          );
        },
      B =
        (Ua && Ua.__importDefault) ||
        function (q) {
          return q && q.__esModule ? q : { default: q };
        };
    Object.defineProperty(Ua, '__esModule', { value: !0 });
    var Q = B(Be()),
      d = B(lh()),
      Y = B(ch());
    function G(q) {
      return Q.default.createElement(
        Y.default,
        O({ Conductor: d.default }, q)
      );
    }
    return (Ua.default = G), Ua;
  }
  var ih = fh();
  const rh = Xv(ih);
  function sh({
    progress: O,
    setProgress: B,
    user: Q,
    hoveredTask: d,
  }) {
    const [Y, G] = lt.useState([
        [0, 0, 0, 0, '', '', '', '', '', 0],
        [0, 0, 0, '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', 0, 0],
        [0, '', '', '', '', 0, 0, 0, 0, 0],
        ['', '', '', '', '', '', 0, 0, 0, 0],
        [0, '', '', '', '', '', '', 0, 0, 0],
        [0, 0, '', '', '', '', '', 0, 0, 0],
        [0, '', '', '', '', '', '', 0, 0, 0],
      ]),
      [q, Z] = lt.useState([!1, !1, !1, !1, !1, !1, !1, !1]),
      [z, b] = lt.useState([!1, !1, !1, !1, !1, !1, !1, !1]);
    lt.useEffect(() => {
      if (O.length) {
        let N = [...z];
        O.forEach((j) => {
          N[j.word_index] = U(j.word, j.word_index);
        }),
          b(N);
      }
    }, [O]);
    const U = (N, j) => {
        let R = Y[j],
          L = N.split('');
        return (R == null ? void 0 : R.length) > 0
          ? ((R = R.map((cl) => (cl !== 0 && (cl = L.shift()), cl))),
            R)
          : !1;
      },
      S = (N, j, R) => {
        const L = [...Y];
        (L[N][R] = j), G(L), x(L);
      },
      x = (N) => {
        N.find((j, R) => {
          const L = j.join('');
          L.length === 10 &&
            fetch('/submit-word', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              credentials: 'include',
              body: JSON.stringify({
                word: L.replaceAll('0', ''),
                wordIndex: R,
              }),
            })
              .then((cl) => cl.json())
              .then((cl) => {
                if (cl.correct) {
                  const sl = [
                    ...O,
                    { word_index: R, word: L.replaceAll('0', '') },
                  ];
                  B(sl),
                    Z((al) => {
                      const Tl = [...al];
                      return (Tl[R] = !0), Tl;
                    });
                } else
                  alert('Feil, prøv igjen.'),
                    G((sl) => {
                      const al = [...sl];
                      return (
                        (al[R] = al[R].map((Tl) =>
                          Tl !== 0 ? '' : 0
                        )),
                        al
                      );
                    });
              });
        });
      };
    return (
      console.log(d),
      F.jsx('div', {
        className: 'flex flex-col items-center',
        children: F.jsx('div', {
          className: 'w-full',
          children: Y.map((N, j) => {
            const R = z[j];
            return (
              R && (N = R),
              F.jsxs(
                'div',
                {
                  className: `${
                    d === j
                      ? 'scale-110 transition-all shadow brightness-160'
                      : ''
                  } grid grid-cols-10`,
                  children: [
                    q[j] &&
                      F.jsx(rh, {
                        autorun: { speed: 0.3, duration: 1e3 },
                      }),
                    N.map((L, cl) =>
                      F.jsx(
                        'input',
                        {
                          className: `
                  ${
                    L !== 0 &&
                    cl !== 4 &&
                    !R &&
                    'bg-yellow-800 border-yellow-700 text-yellow-200'
                  }
                  ${L === 0 ? 'bg-transparent border-0' : ''}
                  ${cl === 4 && 'bg-yellow-400 border-yellow-800'}
                    'bg-yellow-600 border-yellow-800'
                  ${R && L !== 0 && 'bg-yellow-100 '}

                } w-full text-center border font-mono p-2 text-4xl uppercase`,
                          value: L === 0 ? '' : L,
                          onChange: (sl) =>
                            S(j, sl.target.value.slice(-1), cl),
                          onBlur: (sl) => {
                            sl.target.value = sl.target.value.slice(
                              0,
                              1
                            );
                          },
                          disabled: L === 0 || R || !Q,
                          placeholder: L === 0 ? ' ' : '',
                        },
                        cl
                      )
                    ),
                  ],
                },
                j
              )
            );
          }),
        }),
      })
    );
  }
  const oh = ({ user: O, progress: B, setHoveredTask: Q }) =>
    F.jsxs('div', {
      className:
        'flex flex-col gap-4 bg-yellow-800 p-2 rounded border border-yellow-700',
      children: [
        F.jsxs('h2', {
          className: 'text-4xl font-bold text-yellow-400',
          children: ['Sjallabais, ', O.username],
        }),
        F.jsx('h3', {
          className: 'text-2xl text-yellow-400',
          children: 'Riktige gjettinger:',
        }),
        F.jsxs('p', {
          className: 'bg-yellow-100 p-2 rounded',
          children: [
            ' ',
            'Du må løse dagens rebus på samme dag den blir lagt ut for å være med i trekning av dagspremien, som er kodekopp!',
          ],
        }),
        F.jsxs('ul', {
          className: 'flex flex-col gap-4 w-full',
          children: [
            B.map((d) =>
              F.jsxs(
                'li',
                {
                  className:
                    'flex gap-2 items-center w-full justify-between bg-yellow-700 rounded p-2 hover:brightness-120 hover:scale-105 transition-all',
                  onMouseEnter: () => Q(d.word_index),
                  onMouseLeave: () => Q(null),
                  children: [
                    F.jsxs('div', {
                      children: [
                        F.jsxs('span', {
                          className: 'font-bold text-yellow-300',
                          children: [d.word_index + 1, ':'],
                        }),
                        ' ',
                        F.jsx('span', {
                          className: 'text-yellow-100',
                          children: d.word,
                        }),
                        ' ',
                      ],
                    }),
                    d.isCorrectDate &&
                      F.jsx('span', {
                        className:
                          'bg-yellow-400 rounded p-1 text-sm',
                        children: 'Med i trekning',
                      }),
                    !d.isCorrectDate &&
                      F.jsx('span', {
                        className: 'bg-red-400 rounded p-1 text-sm',
                        children: 'Svarte for seint',
                      }),
                  ],
                },
                d.word_index
              )
            ),
            B.length === 8 &&
              B.filter((d) => d.isCorrectDate).length === B.length &&
              F.jsxs('p', {
                className: 'bg-yellow-100 p-2 rounded',
                children: [
                  ' ',
                  'Du har løst alle oppgavene innenfor tidsfristen! Gratulerer! Du er med i trekning av hovedpremien.',
                ],
              }),
            B.length === 8 &&
              B.filter((d) => d.isCorrectDate).length !== B.length &&
              F.jsxs('p', {
                className: 'bg-red-100 p-2 rounded',
                children: [
                  ' ',
                  'Du har løst alle oppgavene! Gratulerer! Men du har dessverre ikke løst dem innenfor tidsfristen, så du er ikke med i hovedpremie-trekkingen.',
                ],
              }),
          ],
        }),
      ],
    });
  function dh({ tasks: O, progress: B, setHoveredTask: Q }) {
    return F.jsxs('div', {
      children: [
        F.jsx('h1', {
          className:
            'text-yellow-400 text-4xl font-bold text-center p-4',
          children: 'Rebusoppgaver',
        }),
        F.jsxs('div', {
          className: 'grid grid-cols-4 gap-4',
          children: [
            O.map((d, Y) =>
              F.jsxs(
                'div',
                {
                  className:
                    'border border-yellow-700 rounded shadow bg-yellow-800 hover:brightness-120 hover:scale-105 transition-all',
                  onMouseEnter: () => Q(Y),
                  onMouseLeave: () => Q(null),
                  children: [
                    F.jsx('h2', {
                      className: 'bg-yellow-400 p-2',
                      children: d.date,
                    }),
                    F.jsx('div', {
                      className: 'p-2',
                      children: d.task.map((G, q) =>
                        F.jsx(
                          'p',
                          {
                            className:
                              'text-yellow-200 wrap-break-word',
                            children: G,
                          },
                          q
                        )
                      ),
                    }),
                  ],
                },
                Y
              )
            ),
            O.length < 8 &&
              F.jsxs('div', {
                className:
                  'border border-teal-700 rounded shadow bg-teal-800',
                children: [
                  F.jsx('h2', {
                    className: 'bg-teal-700 px-2',
                    children: 'KOMMER I MORGEN',
                  }),
                  F.jsx('p', {
                    className: 'text-teal-200 px-2 wrap-break-word',
                    children:
                      'Neste oppgave kommer i morgen. Husk å svare på oppgaven på samme dag for å være med i trekningen.',
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  }
  const vh = ({ speed: O }) => {
    const B = lt.useRef(),
      Q = lt.useRef([]),
      d = 250;
    return (
      lt.useEffect(() => {
        const Y = B.current,
          G = Y.getContext('2d');
        let q,
          Z = (Y.width = window.innerWidth),
          z = (Y.height = window.innerHeight);
        const b = ['🐣', '🥚', '🌷', '🐰', '🌼'],
          U = () => {
            Q.current = Array.from({ length: d }, () => ({
              x: Math.random() * Z - Z / 2,
              y: Math.random() * z - z / 2,
              z: Math.random() * Z,
              emoji: b[Math.floor(Math.random() * b.length)],
              twinkleOffset: Math.random() * 100,
            }));
          },
          S = () => {
            for (let R of Q.current)
              (R.z -= O),
                (R.x += 0.2 * O),
                (R.y += 0.1 * O),
                (R.z <= 1 || R.x > Z / 2 || R.y > z / 2) &&
                  ((R.x = Math.random() * Z - Z / 2),
                  (R.y = Math.random() * z - z / 2),
                  (R.z = Z));
          },
          x = () => {
            (G.fillStyle = 'black'), G.fillRect(0, 0, Z, z);
            for (let R of Q.current) {
              const L = 128 / R.z,
                cl = R.x * L + Z / 2,
                sl = R.y * L + z / 2 - z * 0.15;
              if (cl >= 0 && cl < Z && sl >= 0 && sl < z) {
                const al = (1 - R.z / Z) * 24;
                G.font = `${Math.max(12, al)}px Arial`;
                const Tl = Math.max(0, Math.min(1, 1 - R.z / Z));
                (G.globalAlpha = Tl), G.fillText(R.emoji, cl, sl);
              }
            }
            G.globalAlpha = 1;
          },
          N = () => {
            S(), x(), (q = requestAnimationFrame(N));
          },
          j = () => {
            (Z = Y.width = window.innerWidth),
              (z = Y.height = window.innerHeight),
              U();
          };
        return (
          window.addEventListener('resize', j),
          U(),
          N(),
          () => {
            cancelAnimationFrame(q),
              window.removeEventListener('resize', j);
          }
        );
      }, [O]),
      F.jsx('canvas', {
        ref: B,
        style: {
          display: 'block',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 0,
        },
      })
    );
  };
  function hh() {
    const [O, B] = lt.useState(null),
      [Q, d] = lt.useState([]),
      [Y, G] = lt.useState([]),
      [q, Z] = lt.useState(0.5),
      [z, b] = lt.useState(null);
    lt.useEffect(() => {
      (async () => {
        const j = await (
          await fetch('/tasks', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
          })
        ).json();
        G(j);
      })(),
        (async () => {
          const N = await fetch('/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              credentials: 'include',
            }),
            j = await N.json();
          j && N.ok && U(j);
        })();
    }, []);
    const U = async (S) => {
      B(S);
      const N = await (
        await fetch('/progress', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        })
      ).json();
      d(N);
    };
    return F.jsxs('div', {
      className: 'App p-8',
      children: [
        F.jsx(vh, { speed: q }),
        F.jsxs('div', {
          className:
            'grid grid-cols-6 gap-8 max-w-6xl mx-auto relative',
          children: [
            F.jsx('h1', {
              className:
                'text-7xl uppercase relative col-span-6 text-yellow-200 font-bold text-center shadow-lg glow',
              children: '🐣kode24s påskerebus🐣',
            }),
            F.jsxs('p', {
              className:
                'text-yellow-400 text-center col-span-6 mb-10',
              children: [
                'Levert, kodet, skrevet, og rebuset av de flinke folka i',
                ' ',
                F.jsx('a', {
                  href: 'https://www.tomsconsult.no',
                  className: 'underline',
                  children: 'Toms Consult',
                }),
              ],
            }),
            F.jsx('div', {
              className: 'col-span-4',
              children: F.jsx(sh, {
                progress: Q,
                setProgress: d,
                hoveredTask: z,
                user: O,
              }),
            }),
            F.jsx('div', {
              className: 'col-span-2',
              children: O
                ? F.jsx(oh, {
                    user: O,
                    progress: Q,
                    setHoveredTask: b,
                  })
                : F.jsx(Pv, { onLogin: U }),
            }),
            F.jsx('div', {
              className: 'col-span-6',
              children: F.jsx(dh, {
                tasks: Y,
                progress: Q,
                setHoveredTask: b,
              }),
            }),
          ],
        }),
      ],
    });
  }
  Fv.createRoot(document.getElementById('root')).render(
    F.jsx(lt.StrictMode, { children: F.jsx(hh, {}) })
  );
});
export default yh();
