var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/vendor" ], [ , function(t, e, n) {
    function r(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })), n.push.apply(n, r);
        }
        return n;
    }
    function o(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? r(Object(n), !0).forEach(function(e) {
                c(t, e, n[e]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
        }
        return t;
    }
    function i(t, e) {
        return u(t) || a(t, e) || h(t, e) || s();
    }
    function s() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function a(t, e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), 
                !e || n.length !== e); r = !0) ;
            } catch (t) {
                o = !0, i = t;
            } finally {
                try {
                    r || null == a.return || a.return();
                } finally {
                    if (o) throw i;
                }
            }
            return n;
        }
    }
    function u(t) {
        if (Array.isArray(t)) return t;
    }
    function c(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t;
    }
    function f(t) {
        return d(t) || l(t) || h(t) || p();
    }
    function p() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function h(t, e) {
        if (t) {
            if ("string" == typeof t) return y(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(t, e) : void 0;
        }
    }
    function l(t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
    }
    function d(t) {
        if (Array.isArray(t)) return y(t);
    }
    function y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
    }
    function v(t) {
        return "function" == typeof t;
    }
    function g(t) {
        return "string" == typeof t;
    }
    function m(t) {
        return "[object Object]" === Dt.call(t);
    }
    function _(t, e) {
        return Ut.call(t, e);
    }
    function b() {}
    function A(t) {
        var e = Object.create(null);
        return function(n) {
            return e[n] || (e[n] = t(n));
        };
    }
    function w(t, e) {
        var n = e ? t ? t.concat(e) : Array.isArray(e) ? e : [ e ] : t;
        return n ? E(n) : n;
    }
    function E(t) {
        for (var e = [], n = 0; n < t.length; n++) -1 === e.indexOf(t[n]) && e.push(t[n]);
        return e;
    }
    function O(t, e) {
        var n = t.indexOf(e);
        -1 !== n && t.splice(n, 1);
    }
    function S(t, e) {
        Object.keys(e).forEach(function(n) {
            -1 !== Vt.indexOf(n) && v(e[n]) && (t[n] = w(t[n], e[n]));
        });
    }
    function I(t, e) {
        t && e && Object.keys(e).forEach(function(n) {
            -1 !== Vt.indexOf(n) && v(e[n]) && O(t[n], e[n]);
        });
    }
    function k(t) {
        return function(e) {
            return t(e) || e;
        };
    }
    function P(t) {
        return !!t && ("object" === (void 0 === t ? "undefined" : _typeof(t)) || "function" == typeof t) && "function" == typeof t.then;
    }
    function x(t, e) {
        for (var n = !1, r = 0; r < t.length; r++) {
            var o = t[r];
            if (n) n = Promise.resolve(k(o)); else {
                var i = o(e);
                if (P(i) && (n = Promise.resolve(i)), !1 === i) return {
                    then: function() {}
                };
            }
        }
        return n || {
            then: function(t) {
                return t(e);
            }
        };
    }
    function T(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return [ "success", "fail", "complete" ].forEach(function(n) {
            if (Array.isArray(t[n])) {
                var r = e[n];
                e[n] = function(e) {
                    x(t[n], e).then(function(t) {
                        return v(r) && r(t) || t;
                    });
                };
            }
        }), e;
    }
    function C(t, e) {
        var n = [];
        Array.isArray(qt.returnValue) && n.push.apply(n, f(qt.returnValue));
        var r = Ht[t];
        return r && Array.isArray(r.returnValue) && n.push.apply(n, f(r.returnValue)), n.forEach(function(t) {
            e = t(e) || e;
        }), e;
    }
    function $(t) {
        var e = Object.create(null);
        Object.keys(qt).forEach(function(t) {
            "returnValue" !== t && (e[t] = qt[t].slice());
        });
        var n = Ht[t];
        return n && Object.keys(n).forEach(function(t) {
            "returnValue" !== t && (e[t] = (e[t] || []).concat(n[t]));
        }), e;
    }
    function R(t, e, n) {
        for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), i = 3; i < r; i++) o[i - 3] = arguments[i];
        var s = $(t);
        return s && Object.keys(s).length ? Array.isArray(s.invoke) ? x(s.invoke, n).then(function(t) {
            return e.apply(void 0, [ T(s, t) ].concat(o));
        }) : e.apply(void 0, [ T(s, n) ].concat(o)) : e.apply(void 0, [ n ].concat(o));
    }
    function j(t) {
        return Gt.test(t) && -1 === Kt.indexOf(t);
    }
    function N(t) {
        return Yt.test(t) && -1 === Wt.indexOf(t);
    }
    function B(t) {
        return Jt.test(t) && "onPush" !== t;
    }
    function M(t) {
        return t.then(function(t) {
            return [ null, t ];
        }).catch(function(t) {
            return [ t ];
        });
    }
    function D(t) {
        return !(j(t) || N(t) || B(t));
    }
    function U(t, e) {
        return D(t) ? function() {
            for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
            return v(n.success) || v(n.fail) || v(n.complete) ? C(t, R.apply(void 0, [ t, e, n ].concat(o))) : C(t, M(new Promise(function(r, i) {
                R.apply(void 0, [ t, e, Object.assign({}, n, {
                    success: r,
                    fail: i
                }) ].concat(o));
            })));
        } : e;
    }
    function L() {
        var t = wx.getSystemInfoSync(), e = t.platform, n = t.pixelRatio, r = t.windowWidth;
        ee = r, ne = n, te = "ios" === e;
    }
    function F(t) {
        for (var e = getCurrentPages(), n = e.length; n--; ) {
            var r = e[n];
            if (r.$page && r.$page.fullPath === t) return n;
        }
        return -1;
    }
    function V(t) {
        (Qt = Qt || wx.getStorageSync(ie)) || (Qt = Date.now() + "" + Math.floor(1e7 * Math.random()), 
        wx.setStorage({
            key: ie,
            data: Qt
        })), t.deviceId = Qt;
    }
    function q(t) {
        if (t.safeArea) {
            var e = t.safeArea;
            t.safeAreaInsets = {
                top: e.top,
                left: e.left,
                right: t.windowWidth - e.right,
                bottom: t.windowHeight - e.bottom
            };
        }
    }
    function H(t, e, n) {
        return function(r) {
            return e(Y(t, r, n));
        };
    }
    function z(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (m(e)) {
            var i = !0 === o ? e : {};
            v(n) && (n = n(e, i) || {});
            for (var s in e) if (_(n, s)) {
                var a = n[s];
                v(a) && (a = a(e[s], e, i)), a ? g(a) ? i[a] = e[s] : m(a) && (i[a.name ? a.name : s] = a.value) : console.warn("微信小程序 ".concat(t, "暂不支持").concat(s));
            } else -1 !== fe.indexOf(s) ? v(e[s]) && (i[s] = H(t, e[s], r)) : o || (i[s] = e[s]);
            return i;
        }
        return v(e) && (e = H(t, e, r)), e;
    }
    function Y(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return v(ae.returnValue) && (e = ae.returnValue(t, e)), z(t, e, n, {}, r);
    }
    function G(t, e) {
        if (_(ae, t)) {
            var n = ae[t];
            return n ? function(e, r) {
                var o = n;
                v(n) && (o = n(e));
                var i = [ e = z(t, e, o.args, o.returnValue) ];
                void 0 !== r && i.push(r), v(o.name) ? t = o.name(e) : g(o.name) && (t = o.name);
                var s = wx[t].apply(wx, i);
                return N(t) ? Y(t, s, o.returnValue, j(t)) : s;
            } : function() {
                console.error("微信小程序 暂不支持".concat(t));
            };
        }
        return e;
    }
    function K(t) {
        return function(e) {
            var n = e.fail, r = e.complete, o = {
                errMsg: "".concat(t, ":fail:暂不支持 ").concat(t, " 方法")
            };
            v(n) && n(o), v(r) && r(o);
        };
    }
    function W(t, e, n) {
        return t[e].apply(t, n);
    }
    function J(t) {
        if (wx.canIUse("nextTick")) {
            var e = t.triggerEvent;
            t.triggerEvent = function(n) {
                for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
                return e.apply(t, [ be(n) ].concat(o));
            };
        }
    }
    function Q(t, e) {
        var n = e[t];
        e[t] = n ? function() {
            J(this);
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            return n.apply(this, e);
        } : function() {
            J(this);
        };
    }
    function X(t, e) {
        var n = t.$mp[t.mpType];
        e.forEach(function(e) {
            _(n, e) && (t[e] = n[e]);
        });
    }
    function Z(t, e) {
        if (!e) return !0;
        if (Mt.default.options && Array.isArray(Mt.default.options[t])) return !0;
        if (e = e.default || e, v(e)) return !!v(e.extendOptions[t]) || !!(e.super && e.super.options && Array.isArray(e.super.options[t]));
        if (v(e[t])) return !0;
        var n = e.mixins;
        return Array.isArray(n) ? !!n.find(function(e) {
            return Z(t, e);
        }) : void 0;
    }
    function tt(t, e, n) {
        e.forEach(function(e) {
            Z(e, n) && (t[e] = function(t) {
                return this.$vm && this.$vm.__call_hook(e, t);
            });
        });
    }
    function et(t, e) {
        var n;
        return n = v(e = e.default || e) ? e : t.extend(e), e = n.options, [ n, e ];
    }
    function nt(t, e) {
        if (Array.isArray(e) && e.length) {
            var n = Object.create(null);
            e.forEach(function(t) {
                n[t] = !0;
            }), t.$scopedSlots = t.$slots = n;
        }
    }
    function rt(t, e) {
        var n = (t = (t || "").split(",")).length;
        1 === n ? e._$vueId = t[0] : 2 === n && (e._$vueId = t[0], e._$vuePid = t[1]);
    }
    function ot(t, e) {
        var n = t.data || {}, r = t.methods || {};
        if ("function" == typeof n) try {
            n = n.call(e);
        } catch (t) {
            Object({
                NODE_ENV: "development",
                VUE_APP_NAME: "answers_uniapp",
                VUE_APP_PLATFORM: "mp-weixin",
                BASE_URL: "/"
            }).VUE_APP_DEBUG && console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。", n);
        } else try {
            n = JSON.parse(JSON.stringify(n));
        } catch (t) {}
        return m(n) || (n = {}), Object.keys(r).forEach(function(t) {
            -1 !== e.__lifecycle_hooks__.indexOf(t) || _(n, t) || (n[t] = r[t]);
        }), n;
    }
    function it(t) {
        return function(e, n) {
            this.$vm && (this.$vm[t] = e);
        };
    }
    function st(t, e) {
        var n = t.behaviors, r = t.extends, o = t.mixins, i = t.props;
        i || (t.props = i = []);
        var s = [];
        return Array.isArray(n) && n.forEach(function(t) {
            s.push(t.replace("uni://", "wx".concat("://"))), "uni://form-field" === t && (Array.isArray(i) ? (i.push("name"), 
            i.push("value")) : (i.name = {
                type: String,
                default: ""
            }, i.value = {
                type: [ String, Number, Boolean, Array, Object, Date ],
                default: ""
            }));
        }), m(r) && r.props && s.push(e({
            properties: ut(r.props, !0)
        })), Array.isArray(o) && o.forEach(function(t) {
            m(t) && t.props && s.push(e({
                properties: ut(t.props, !0)
            }));
        }), s;
    }
    function at(t, e, n, r) {
        return Array.isArray(e) && 1 === e.length ? e[0] : e;
    }
    function ut(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], 
        {});
        return e || (n.vueId = {
            type: String,
            value: ""
        }, n.generic = {
            type: Object,
            value: null
        }, n.vueSlots = {
            type: null,
            value: [],
            observer: function(t, e) {
                var n = Object.create(null);
                t.forEach(function(t) {
                    n[t] = !0;
                }), this.setData({
                    $slots: n
                });
            }
        }), Array.isArray(t) ? t.forEach(function(t) {
            n[t] = {
                type: null,
                observer: it(t)
            };
        }) : m(t) && Object.keys(t).forEach(function(e) {
            var r = t[e];
            if (m(r)) {
                var o = r.default;
                v(o) && (o = o()), r.type = at(e, r.type), n[e] = {
                    type: -1 !== we.indexOf(r.type) ? r.type : null,
                    value: o,
                    observer: it(e)
                };
            } else {
                var i = at(e, r);
                n[e] = {
                    type: -1 !== we.indexOf(i) ? i : null,
                    observer: it(e)
                };
            }
        }), n;
    }
    function ct(t) {
        try {
            t.mp = JSON.parse(JSON.stringify(t));
        } catch (t) {}
        return t.stopPropagation = b, t.preventDefault = b, t.target = t.target || {}, _(t, "detail") || (t.detail = {}), 
        _(t, "markerId") && (t.detail = "object" === _typeof(t.detail) ? t.detail : {}, 
        t.detail.markerId = t.markerId), m(t.detail) && (t.target = Object.assign({}, t.target, t.detail)), 
        t;
    }
    function ft(t, e) {
        var n = t;
        return e.forEach(function(e) {
            var r = e[0], o = e[2];
            if (r || void 0 !== o) {
                var i, s = e[1], a = e[3];
                Number.isInteger(r) ? i = r : r ? "string" == typeof r && r && (i = 0 === r.indexOf("#s#") ? r.substr(3) : t.__get_value(r, n)) : i = n, 
                Number.isInteger(i) ? n = o : s ? Array.isArray(i) ? n = i.find(function(e) {
                    return t.__get_value(s, e) === o;
                }) : m(i) ? n = Object.keys(i).find(function(e) {
                    return t.__get_value(s, i[e]) === o;
                }) : console.error("v-for 暂不支持循环数据：", i) : n = i[o], a && (n = t.__get_value(a, n));
            }
        }), n;
    }
    function pt(t, e, n) {
        var r = {};
        return Array.isArray(e) && e.length && e.forEach(function(e, o) {
            "string" == typeof e ? e ? "$event" === e ? r["$" + o] = n : "arguments" === e ? n.detail && n.detail.__args__ ? r["$" + o] = n.detail.__args__ : r["$" + o] = [ n ] : 0 === e.indexOf("$event.") ? r["$" + o] = t.__get_value(e.replace("$event.", ""), n) : r["$" + o] = t.__get_value(e) : r["$" + o] = t : r["$" + o] = ft(t, e);
        }), r;
    }
    function ht(t) {
        for (var e = {}, n = 1; n < t.length; n++) {
            var r = t[n];
            e[r[0]] = r[1];
        }
        return e;
    }
    function lt(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], o = arguments.length > 4 ? arguments[4] : void 0, i = arguments.length > 5 ? arguments[5] : void 0, s = !1;
        if (o && (s = e.currentTarget && e.currentTarget.dataset && "wx" === e.currentTarget.dataset.comType, 
        !n.length)) return s ? [ e ] : e.detail.__args__ || e.detail;
        var a = pt(t, r, e), u = [];
        return n.forEach(function(t) {
            "$event" === t ? "__set_model" !== i || o ? o && !s ? u.push(e.detail.__args__[0]) : u.push(e) : u.push(e.target.value) : Array.isArray(t) && "o" === t[0] ? u.push(ht(t)) : "string" == typeof t && _(a, t) ? u.push(a[t]) : u.push(t);
        }), u;
    }
    function dt(t, e) {
        return t === e || "regionchange" === e && ("begin" === t || "end" === t);
    }
    function yt(t) {
        for (var e = t.$parent; e && e.$parent && (e.$options.generic || e.$parent.$options.generic || e.$scope._$vuePid); ) e = e.$parent;
        return e && e.$parent;
    }
    function vt(t) {
        var e = this, n = ((t = ct(t)).currentTarget || t.target).dataset;
        if (!n) return console.warn("事件信息不存在");
        var r = n.eventOpts || n["event-opts"];
        if (!r) return console.warn("事件信息不存在");
        var o = t.type, i = [];
        return r.forEach(function(n) {
            var r = n[0], s = n[1], a = r.charAt(0) === Oe, u = (r = a ? r.slice(1) : r).charAt(0) === Ee;
            r = u ? r.slice(1) : r, s && dt(o, r) && s.forEach(function(n) {
                var r = n[0];
                if (r) {
                    var o = e.$vm;
                    if (o.$options.generic && (o = yt(o) || o), "$emit" === r) return void o.$emit.apply(o, lt(e.$vm, t, n[1], n[2], a, r));
                    var s = o[r];
                    if (!v(s)) throw new Error(" _vm.".concat(r, " is not a function"));
                    if (u) {
                        if (s.once) return;
                        s.once = !0;
                    }
                    var c = lt(e.$vm, t, n[1], n[2], a, r);
                    c = Array.isArray(c) ? c : [], /=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(s.toString()) && (c = c.concat([ , , , , , , , , , , t ])), 
                    i.push(s.apply(o, c));
                }
            });
        }), "input" === o && 1 === i.length && void 0 !== i[0] ? i[0] : void 0;
    }
    function gt(t) {
        if (t) {
            var e = Se[t];
            return delete Se[t], e;
        }
        return Ie.shift();
    }
    function mt() {
        Mt.default.prototype.getOpenerEventChannel = function() {
            return this.$scope.getOpenerEventChannel();
        };
        var t = Mt.default.prototype.__call_hook;
        Mt.default.prototype.__call_hook = function(e, n) {
            return "onLoad" === e && n && n.__id__ && (this.__eventChannel__ = gt(n.__id__), 
            delete n.__id__), t.call(this, e, n);
        };
    }
    function _t(t, e) {
        var n = e.mocks, r = e.initRefs;
        mt(), t.$options.store && (Mt.default.prototype.$store = t.$options.store), Mt.default.prototype.mpHost = "mp-weixin", 
        Mt.default.mixin({
            beforeCreate: function() {
                this.$options.mpType && (this.mpType = this.$options.mpType, this.$mp = c({
                    data: {}
                }, this.mpType, this.$options.mpInstance), this.$scope = this.$options.mpInstance, 
                delete this.$options.mpType, delete this.$options.mpInstance, "app" !== this.mpType && (r(this), 
                X(this, n)));
            }
        });
        var o = {
            onLaunch: function(e) {
                this.$vm || (wx.canIUse("nextTick") || console.error("当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上"), 
                this.$vm = t, this.$vm.$mp = {
                    app: this
                }, this.$vm.$scope = this, this.$vm.globalData = this.globalData, this.$vm._isMounted = !0, 
                this.$vm.__call_hook("mounted", e), this.$vm.__call_hook("onLaunch", e));
            }
        };
        o.globalData = t.$options.globalData || {};
        var i = t.$options.methods;
        return i && Object.keys(i).forEach(function(t) {
            o[t] = i[t];
        }), tt(o, ke), o;
    }
    function bt(t, e) {
        for (var n = t.$children, r = n.length - 1; r >= 0; r--) {
            var o = n[r];
            if (o.$scope._$vueId === e) return o;
        }
        for (var i, s = n.length - 1; s >= 0; s--) if (i = bt(n[s], e)) return i;
    }
    function At(t) {
        return Behavior(t);
    }
    function wt() {
        return !!this.route;
    }
    function Et(t) {
        this.triggerEvent("__l", t);
    }
    function Ot(t, e, n) {
        t.selectAllComponents(e).forEach(function(t) {
            var r = t.dataset.ref;
            n[r] = t.$vm || t, "scoped" === t.dataset.vueGeneric && t.selectAllComponents(".scoped-ref").forEach(function(t) {
                Ot(t, e, n);
            });
        });
    }
    function St(t) {
        var e = t.$scope;
        Object.defineProperty(t, "$refs", {
            get: function() {
                var t = {};
                return Ot(e, ".vue-ref", t), e.selectAllComponents(".vue-ref-in-for").forEach(function(e) {
                    var n = e.dataset.ref;
                    t[n] || (t[n] = []), t[n].push(e.$vm || e);
                }), t;
            }
        });
    }
    function It(t) {
        var e, n = t.detail || t.value, r = n.vuePid, o = n.vueOptions;
        r && (e = bt(this.$vm, r)), e || (e = this.$vm), o.parent = e;
    }
    function kt(t) {
        return _t(t, {
            mocks: Pe,
            initRefs: St
        });
    }
    function Pt(t) {
        return App(kt(t)), t;
    }
    function xt(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $e, n = t ? Object.keys(t).map(function(n) {
            var r = t[n];
            if (void 0 === r) return "";
            if (null === r) return e(n);
            if (Array.isArray(r)) {
                var o = [];
                return r.forEach(function(t) {
                    void 0 !== t && (null === t ? o.push(e(n)) : o.push(e(n) + "=" + e(t)));
                }), o.join("&");
            }
            return e(n) + "=" + e(r);
        }).filter(function(t) {
            return t.length > 0;
        }).join("&") : null;
        return n ? "?".concat(n) : "";
    }
    function Tt(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.isPage, r = e.initRelation, s = i(et(Mt.default, t), 2), a = s[0], u = s[1], c = o({
            multipleSlots: !0,
            addGlobalClass: !0
        }, u.options || {});
        u["mp-weixin"] && u["mp-weixin"].options && Object.assign(c, u["mp-weixin"].options);
        var f = {
            options: c,
            data: ot(u, Mt.default.prototype),
            behaviors: st(u, At),
            properties: ut(u.props, !1, u.__file),
            lifetimes: {
                attached: function() {
                    var t = this.properties, e = {
                        mpType: n.call(this) ? "page" : "component",
                        mpInstance: this,
                        propsData: t
                    };
                    rt(t.vueId, this), r.call(this, {
                        vuePid: this._$vuePid,
                        vueOptions: e
                    }), this.$vm = new a(e), nt(this.$vm, t.vueSlots), this.$vm.$mount();
                },
                ready: function() {
                    this.$vm && (this.$vm._isMounted = !0, this.$vm.__call_hook("mounted"), this.$vm.__call_hook("onReady"));
                },
                detached: function() {
                    this.$vm && this.$vm.$destroy();
                }
            },
            pageLifetimes: {
                show: function(t) {
                    this.$vm && this.$vm.__call_hook("onPageShow", t);
                },
                hide: function() {
                    this.$vm && this.$vm.__call_hook("onPageHide");
                },
                resize: function(t) {
                    this.$vm && this.$vm.__call_hook("onPageResize", t);
                }
            },
            methods: {
                __l: It,
                __e: vt
            }
        };
        return u.externalClasses && (f.externalClasses = u.externalClasses), Array.isArray(u.wxsCallMethods) && u.wxsCallMethods.forEach(function(t) {
            f.methods[t] = function(e) {
                return this.$vm[t](e);
            };
        }), n ? f : [ f, a ];
    }
    function Ct(t) {
        return Tt(t, {
            isPage: wt,
            initRelation: Et
        });
    }
    function $t(t, e) {
        e.isPage, e.initRelation;
        var n = Ct(t);
        return tt(n.methods, Re, t), n.methods.onLoad = function(t) {
            this.options = t;
            var e = Object.assign({}, t);
            delete e.__id__, this.$page = {
                fullPath: "/" + (this.route || this.is) + xt(e)
            }, this.$vm.$mp.query = t, this.$vm.__call_hook("onLoad", t);
        }, n;
    }
    function Rt(t) {
        return $t(t, {
            isPage: wt,
            initRelation: Et
        });
    }
    function jt(t) {
        return Component(Rt(t));
    }
    function Nt(t) {
        return Component(Ct(t));
    }
    function Bt(t) {
        var e = kt(t), n = getApp({
            allowDefault: !0
        }), r = n.globalData;
        if (r && Object.keys(e.globalData).forEach(function(t) {
            _(r, t) || (r[t] = e.globalData[t]);
        }), Object.keys(e).forEach(function(t) {
            _(n, t) || (n[t] = e[t]);
        }), v(e.onShow) && wx.onAppShow && wx.onAppShow(function() {
            for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
            e.onShow.apply(n, r);
        }), v(e.onHide) && wx.onAppHide && wx.onAppHide(function() {
            for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
            e.onHide.apply(n, r);
        }), v(e.onLaunch)) {
            var o = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
            e.onLaunch.call(n, o);
        }
        return t;
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.createApp = Pt, e.createComponent = Nt, e.createPage = jt, e.createSubpackageApp = Bt, 
    e.default = void 0;
    var Mt = function(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }(n(2)), Dt = Object.prototype.toString, Ut = Object.prototype.hasOwnProperty, Lt = /-(\w)/g, Ft = A(function(t) {
        return t.replace(Lt, function(t, e) {
            return e ? e.toUpperCase() : "";
        });
    }), Vt = [ "invoke", "success", "fail", "complete", "returnValue" ], qt = {}, Ht = {}, zt = {
        returnValue: function(t) {
            return P(t) ? t.then(function(t) {
                return t[1];
            }).catch(function(t) {
                return t[0];
            }) : t;
        }
    }, Yt = /^\$|Window$|WindowStyle$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/, Gt = /^create|Manager$/, Kt = [ "createBLEConnection" ], Wt = [ "createBLEConnection" ], Jt = /^on|^off/;
    Promise.prototype.finally || (Promise.prototype.finally = function(t) {
        var e = this.constructor;
        return this.then(function(n) {
            return e.resolve(t()).then(function() {
                return n;
            });
        }, function(n) {
            return e.resolve(t()).then(function() {
                throw n;
            });
        });
    });
    var Qt, Xt = 1e-4, Zt = 750, te = !1, ee = 0, ne = 0, re = {
        promiseInterceptor: zt
    }, oe = Object.freeze({
        __proto__: null,
        upx2px: function(t, e) {
            if (0 === ee && L(), 0 === (t = Number(t))) return 0;
            var n = t / Zt * (e || ee);
            return n < 0 && (n = -n), 0 === (n = Math.floor(n + Xt)) && (n = 1 !== ne && te ? .5 : 1), 
            t < 0 ? -n : n;
        },
        addInterceptor: function(t, e) {
            "string" == typeof t && m(e) ? S(Ht[t] || (Ht[t] = {}), e) : m(t) && S(qt, t);
        },
        removeInterceptor: function(t, e) {
            "string" == typeof t ? m(e) ? I(Ht[t], e) : delete Ht[t] : m(t) && I(qt, t);
        },
        interceptors: re
    }), ie = "__DC_STAT_UUID", se = {
        returnValue: function(t) {
            V(t), q(t);
        }
    }, ae = {
        redirectTo: {
            name: function(t) {
                return "back" === t.exists && t.delta ? "navigateBack" : "redirectTo";
            },
            args: function(t) {
                if ("back" === t.exists && t.url) {
                    var e = F(t.url);
                    if (-1 !== e) {
                        var n = getCurrentPages().length - 1 - e;
                        n > 0 && (t.delta = n);
                    }
                }
            }
        },
        previewImage: {
            args: function(t) {
                var e = parseInt(t.current);
                if (!isNaN(e)) {
                    var n = t.urls;
                    if (Array.isArray(n)) {
                        var r = n.length;
                        if (r) return e < 0 ? e = 0 : e >= r && (e = r - 1), e > 0 ? (t.current = n[e], 
                        t.urls = n.filter(function(t, r) {
                            return !(r < e) || t !== n[e];
                        })) : t.current = n[0], {
                            indicator: !1,
                            loop: !1
                        };
                    }
                }
            }
        },
        getSystemInfo: se,
        getSystemInfoSync: se
    }, ue = [ "vibrate", "preloadPage", "unPreloadPage", "loadSubPackage" ], ce = [], fe = [ "success", "fail", "cancel", "complete" ], pe = Object.create(null);
    [ "onTabBarMidButtonTap", "subscribePush", "unsubscribePush", "onPush", "offPush", "share" ].forEach(function(t) {
        pe[t] = K(t);
    });
    var he = {
        oauth: [ "weixin" ],
        share: [ "weixin" ],
        payment: [ "wxpay" ],
        push: [ "weixin" ]
    }, le = Object.freeze({
        __proto__: null,
        getProvider: function(t) {
            var e = t.service, n = t.success, r = t.fail, o = t.complete, i = !1;
            he[e] ? (i = {
                errMsg: "getProvider:ok",
                service: e,
                provider: he[e]
            }, v(n) && n(i)) : (i = {
                errMsg: "getProvider:fail:服务[" + e + "]不存在"
            }, v(r) && r(i)), v(o) && o(i);
        }
    }), de = function() {
        var t;
        return function() {
            return t || (t = new Mt.default()), t;
        };
    }(), ye = Object.freeze({
        __proto__: null,
        $on: function() {
            return W(de(), "$on", Array.prototype.slice.call(arguments));
        },
        $off: function() {
            return W(de(), "$off", Array.prototype.slice.call(arguments));
        },
        $once: function() {
            return W(de(), "$once", Array.prototype.slice.call(arguments));
        },
        $emit: function() {
            return W(de(), "$emit", Array.prototype.slice.call(arguments));
        }
    }), ve = Object.freeze({
        __proto__: null
    }), ge = Page, me = Component, _e = /:/g, be = A(function(t) {
        return Ft(t.replace(_e, "-"));
    });
    ge.__$wrappered || (ge.__$wrappered = !0, Page = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Q("onLoad", t), ge(t);
    }, Page.after = ge.after, Component = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Q("created", t), me(t);
    });
    var Ae = [ "onPullDownRefresh", "onReachBottom", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onPageScroll", "onResize", "onTabItemTap" ], we = [ String, Number, Boolean, Object, Array, null ], Ee = "~", Oe = "^", Se = {}, Ie = [], ke = [ "onShow", "onHide", "onError", "onPageNotFound", "onThemeChange", "onUnhandledRejection" ], Pe = [ "__route__", "__wxExparserNodeId__", "__wxWebviewId__" ], xe = /[!'()*]/g, Te = function(t) {
        return "%" + t.charCodeAt(0).toString(16);
    }, Ce = /%2C/g, $e = function(t) {
        return encodeURIComponent(t).replace(xe, Te).replace(Ce, ",");
    }, Re = [ "onShow", "onHide", "onUnload" ];
    Re.push.apply(Re, Ae), ue.forEach(function(t) {
        ae[t] = !1;
    }), ce.forEach(function(t) {
        var e = ae[t] && ae[t].name ? ae[t].name : t;
        wx.canIUse(e) || (ae[t] = !1);
    });
    var je = {};
    "undefined" != typeof Proxy ? je = new Proxy({}, {
        get: function(t, e) {
            if (_(t, e)) return t[e];
            if (oe[e]) return oe[e];
            if (ve[e]) return U(e, ve[e]);
            if (le[e]) return U(e, le[e]);
            if (pe[e]) return U(e, pe[e]);
            if (ye[e]) return ye[e];
            if (_(wx, e) || _(ae, e)) return U(e, G(e, wx[e]));
        },
        set: function(t, e, n) {
            return t[e] = n, !0;
        }
    }) : (Object.keys(oe).forEach(function(t) {
        je[t] = oe[t];
    }), Object.keys(pe).forEach(function(t) {
        je[t] = U(t, pe[t]);
    }), Object.keys(le).forEach(function(t) {
        je[t] = U(t, pe[t]);
    }), Object.keys(ye).forEach(function(t) {
        je[t] = ye[t];
    }), Object.keys(ve).forEach(function(t) {
        je[t] = U(t, ve[t]);
    }), Object.keys(wx).forEach(function(t) {
        (_(wx, t) || _(ae, t)) && (je[t] = U(t, G(t, wx[t])));
    })), wx.createApp = Pt, wx.createPage = jt, wx.createComponent = Nt, wx.createSubpackageApp = Bt;
    var Ne = je;
    e.default = Ne;
}, function(t, e, n) {
    n.r(e), function(t) {
        function n(t) {
            return void 0 === t || null === t;
        }
        function r(t) {
            return void 0 !== t && null !== t;
        }
        function o(t) {
            return !0 === t;
        }
        function i(t) {
            return !1 === t;
        }
        function s(t) {
            return "string" == typeof t || "number" == typeof t || "symbol" === (void 0 === t ? "undefined" : _typeof(t)) || "boolean" == typeof t;
        }
        function a(t) {
            return null !== t && "object" === (void 0 === t ? "undefined" : _typeof(t));
        }
        function u(t) {
            return kn.call(t).slice(8, -1);
        }
        function c(t) {
            return "[object Object]" === kn.call(t);
        }
        function f(t) {
            return "[object RegExp]" === kn.call(t);
        }
        function p(t) {
            var e = parseFloat(String(t));
            return e >= 0 && Math.floor(e) === e && isFinite(t);
        }
        function h(t) {
            return r(t) && "function" == typeof t.then && "function" == typeof t.catch;
        }
        function l(t) {
            return null == t ? "" : Array.isArray(t) || c(t) && t.toString === kn ? JSON.stringify(t, null, 2) : String(t);
        }
        function d(t) {
            var e = parseFloat(t);
            return isNaN(e) ? t : e;
        }
        function y(t, e) {
            for (var n = Object.create(null), r = t.split(","), o = 0; o < r.length; o++) n[r[o]] = !0;
            return e ? function(t) {
                return n[t.toLowerCase()];
            } : function(t) {
                return n[t];
            };
        }
        function v(t, e) {
            if (t.length) {
                var n = t.indexOf(e);
                if (n > -1) return t.splice(n, 1);
            }
        }
        function g(t, e) {
            return Tn.call(t, e);
        }
        function m(t) {
            var e = Object.create(null);
            return function(n) {
                return e[n] || (e[n] = t(n));
            };
        }
        function _(t, e) {
            e = e || 0;
            for (var n = t.length - e, r = new Array(n); n--; ) r[n] = t[n + e];
            return r;
        }
        function b(t, e) {
            for (var n in e) t[n] = e[n];
            return t;
        }
        function A(t) {
            for (var e = {}, n = 0; n < t.length; n++) t[n] && b(e, t[n]);
            return e;
        }
        function w(t, e, n) {}
        function E(t, e) {
            if (t === e) return !0;
            var n = a(t), r = a(e);
            if (!n || !r) return !n && !r && String(t) === String(e);
            try {
                var o = Array.isArray(t), i = Array.isArray(e);
                if (o && i) return t.length === e.length && t.every(function(t, n) {
                    return E(t, e[n]);
                });
                if (t instanceof Date && e instanceof Date) return t.getTime() === e.getTime();
                if (o || i) return !1;
                var s = Object.keys(t), u = Object.keys(e);
                return s.length === u.length && s.every(function(n) {
                    return E(t[n], e[n]);
                });
            } catch (t) {
                return !1;
            }
        }
        function O(t, e) {
            for (var n = 0; n < t.length; n++) if (E(t[n], e)) return n;
            return -1;
        }
        function S(t) {
            var e = !1;
            return function() {
                e || (e = !0, t.apply(this, arguments));
            };
        }
        function I(t) {
            var e = (t + "").charCodeAt(0);
            return 36 === e || 95 === e;
        }
        function k(t, e, n, r) {
            Object.defineProperty(t, e, {
                value: n,
                enumerable: !!r,
                writable: !0,
                configurable: !0
            });
        }
        function P(t) {
            if (!qn.test(t)) {
                var e = t.split(".");
                return function(t) {
                    for (var n = 0; n < e.length; n++) {
                        if (!t) return;
                        t = t[e[n]];
                    }
                    return t;
                };
            }
        }
        function x(t) {
            return "function" == typeof t && /native code/.test(t.toString());
        }
        function T(t) {
            dr.SharedObject.targetStack.push(t), dr.SharedObject.target = t, dr.target = t;
        }
        function C() {
            dr.SharedObject.targetStack.pop(), dr.SharedObject.target = dr.SharedObject.targetStack[dr.SharedObject.targetStack.length - 1], 
            dr.target = dr.SharedObject.target;
        }
        function $(t) {
            return new yr(void 0, void 0, void 0, String(t));
        }
        function R(t) {
            var e = new yr(t.tag, t.data, t.children && t.children.slice(), t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
            return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, 
            e.fnContext = t.fnContext, e.fnOptions = t.fnOptions, e.fnScopeId = t.fnScopeId, 
            e.asyncMeta = t.asyncMeta, e.isCloned = !0, e;
        }
        function j(t) {
            Ar = t;
        }
        function N(t, e) {
            t.__proto__ = e;
        }
        function B(t, e, n) {
            for (var r = 0, o = n.length; r < o; r++) {
                var i = n[r];
                k(t, i, e[i]);
            }
        }
        function M(t, e) {
            if (a(t) && !(t instanceof yr)) {
                var n;
                return g(t, "__ob__") && t.__ob__ instanceof wr ? n = t.__ob__ : Ar && !nr() && (Array.isArray(t) || c(t)) && Object.isExtensible(t) && !t._isVue && (n = new wr(t)), 
                e && n && n.vmCount++, n;
            }
        }
        function D(t, e, n, r, o) {
            var i = new dr(), s = Object.getOwnPropertyDescriptor(t, e);
            if (!s || !1 !== s.configurable) {
                var a = s && s.get, u = s && s.set;
                a && !u || 2 !== arguments.length || (n = t[e]);
                var c = !o && M(n);
                Object.defineProperty(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: function() {
                        var e = a ? a.call(t) : n;
                        return dr.SharedObject.target && (i.depend(), c && (c.dep.depend(), Array.isArray(e) && F(e))), 
                        e;
                    },
                    set: function(e) {
                        var s = a ? a.call(t) : n;
                        e === s || e !== e && s !== s || (r && r(), a && !u || (u ? u.call(t, e) : n = e, 
                        c = !o && M(e), i.notify()));
                    }
                });
            }
        }
        function U(t, e, r) {
            if ((n(t) || s(t)) && ir("Cannot set reactive property on undefined, null, or primitive value: " + t), 
            Array.isArray(t) && p(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, r), 
            r;
            if (e in t && !(e in Object.prototype)) return t[e] = r, r;
            var o = t.__ob__;
            return t._isVue || o && o.vmCount ? (ir("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."), 
            r) : o ? (D(o.value, e, r), o.dep.notify(), r) : (t[e] = r, r);
        }
        function L(t, e) {
            if ((n(t) || s(t)) && ir("Cannot delete reactive property on undefined, null, or primitive value: " + t), 
            Array.isArray(t) && p(e)) t.splice(e, 1); else {
                var r = t.__ob__;
                t._isVue || r && r.vmCount ? ir("Avoid deleting properties on a Vue instance or its root $data - just set it to null.") : g(t, e) && (delete t[e], 
                r && r.dep.notify());
            }
        }
        function F(t) {
            for (var e = void 0, n = 0, r = t.length; n < r; n++) (e = t[n]) && e.__ob__ && e.__ob__.dep.depend(), 
            Array.isArray(e) && F(e);
        }
        function V(t, e) {
            if (!e) return t;
            for (var n, r, o, i = or ? Reflect.ownKeys(e) : Object.keys(e), s = 0; s < i.length; s++) "__ob__" !== (n = i[s]) && (r = t[n], 
            o = e[n], g(t, n) ? r !== o && c(r) && c(o) && V(r, o) : U(t, n, o));
            return t;
        }
        function q(t, e, n) {
            return n ? function() {
                var r = "function" == typeof e ? e.call(n, n) : e, o = "function" == typeof t ? t.call(n, n) : t;
                return r ? V(r, o) : o;
            } : e ? t ? function() {
                return V("function" == typeof e ? e.call(this, this) : e, "function" == typeof t ? t.call(this, this) : t);
            } : e : t;
        }
        function H(t, e) {
            var n = e ? t ? t.concat(e) : Array.isArray(e) ? e : [ e ] : t;
            return n ? z(n) : n;
        }
        function z(t) {
            for (var e = [], n = 0; n < t.length; n++) -1 === e.indexOf(t[n]) && e.push(t[n]);
            return e;
        }
        function Y(t, e, n, r) {
            var o = Object.create(t || null);
            return e ? (X(r, e, n), b(o, e)) : o;
        }
        function G(t) {
            for (var e in t.components) K(e);
        }
        function K(t) {
            new RegExp("^[a-zA-Z][\\-\\.0-9_" + Vn.source + "]*$").test(t) || ir('Invalid component name: "' + t + '". Component names should conform to valid custom element name in html5 specification.'), 
            (Pn(t) || Fn.isReservedTag(t)) && ir("Do not use built-in or reserved HTML elements as component id: " + t);
        }
        function W(t, e) {
            var n = t.props;
            if (n) {
                var r, o, i = {};
                if (Array.isArray(n)) for (r = n.length; r--; ) "string" == typeof (o = n[r]) ? i[$n(o)] = {
                    type: null
                } : ir("props must be strings when using array syntax."); else if (c(n)) for (var s in n) o = n[s], 
                i[$n(s)] = c(o) ? o : {
                    type: o
                }; else ir('Invalid value for option "props": expected an Array or an Object, but got ' + u(n) + ".", e);
                t.props = i;
            }
        }
        function J(t, e) {
            var n = t.inject;
            if (n) {
                var r = t.inject = {};
                if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r[n[o]] = {
                    from: n[o]
                }; else if (c(n)) for (var i in n) {
                    var s = n[i];
                    r[i] = c(s) ? b({
                        from: i
                    }, s) : {
                        from: s
                    };
                } else ir('Invalid value for option "inject": expected an Array or an Object, but got ' + u(n) + ".", e);
            }
        }
        function Q(t) {
            var e = t.directives;
            if (e) for (var n in e) {
                var r = e[n];
                "function" == typeof r && (e[n] = {
                    bind: r,
                    update: r
                });
            }
        }
        function X(t, e, n) {
            c(e) || ir('Invalid value for option "' + t + '": expected an Object, but got ' + u(e) + ".", n);
        }
        function Z(t, e, n) {
            function r(r) {
                var o = Er[r] || Sr;
                a[r] = o(t[r], e[r], n, r);
            }
            if (G(e), "function" == typeof e && (e = e.options), W(e, n), J(e, n), Q(e), !e._base && (e.extends && (t = Z(t, e.extends, n)), 
            e.mixins)) for (var o = 0, i = e.mixins.length; o < i; o++) t = Z(t, e.mixins[o], n);
            var s, a = {};
            for (s in t) r(s);
            for (s in e) g(t, s) || r(s);
            return a;
        }
        function tt(t, e, n, r) {
            if ("string" == typeof n) {
                var o = t[e];
                if (g(o, n)) return o[n];
                var i = $n(n);
                if (g(o, i)) return o[i];
                var s = Rn(i);
                if (g(o, s)) return o[s];
                var a = o[n] || o[i] || o[s];
                return r && !a && ir("Failed to resolve " + e.slice(0, -1) + ": " + n, t), a;
            }
        }
        function et(t, e, n, r) {
            var o = e[t], i = !g(n, t), s = n[t], a = at(Boolean, o.type);
            if (a > -1) if (i && !g(o, "default")) s = !1; else if ("" === s || s === Nn(t)) {
                var u = at(String, o.type);
                (u < 0 || a < u) && (s = !0);
            }
            if (void 0 === s) {
                s = nt(r, o, t);
                var c = Ar;
                j(!0), M(s), j(c);
            }
            return rt(o, t, s, r, i), s;
        }
        function nt(t, e, n) {
            if (g(e, "default")) {
                var r = e.default;
                return a(r) && ir('Invalid default value for prop "' + n + '": Props with type Object/Array must use a factory function to return the default value.', t), 
                t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n] ? t._props[n] : "function" == typeof r && "Function" !== it(e.type) ? r.call(t) : r;
            }
        }
        function rt(t, e, n, r, o) {
            if (t.required && o) ir('Missing required prop: "' + e + '"', r); else if (null != n || t.required) {
                var i = t.type, s = !i || !0 === i, a = [];
                if (i) {
                    Array.isArray(i) || (i = [ i ]);
                    for (var u = 0; u < i.length && !s; u++) {
                        var c = ot(n, i[u]);
                        a.push(c.expectedType || ""), s = c.valid;
                    }
                }
                if (s) {
                    var f = t.validator;
                    f && (f(n) || ir('Invalid prop: custom validator check failed for prop "' + e + '".', r));
                } else ir(ut(e, n, a), r);
            }
        }
        function ot(t, e) {
            var n, r = it(e);
            if (Ir.test(r)) {
                var o = void 0 === t ? "undefined" : _typeof(t);
                (n = o === r.toLowerCase()) || "object" !== o || (n = t instanceof e);
            } else n = "Object" === r ? c(t) : "Array" === r ? Array.isArray(t) : t instanceof e;
            return {
                valid: n,
                expectedType: r
            };
        }
        function it(t) {
            var e = t && t.toString().match(/^\s*function (\w+)/);
            return e ? e[1] : "";
        }
        function st(t, e) {
            return it(t) === it(e);
        }
        function at(t, e) {
            if (!Array.isArray(e)) return st(e, t) ? 0 : -1;
            for (var n = 0, r = e.length; n < r; n++) if (st(e[n], t)) return n;
            return -1;
        }
        function ut(t, e, n) {
            var r = 'Invalid prop: type check failed for prop "' + t + '". Expected ' + n.map(Rn).join(", "), o = n[0], i = u(e), s = ct(e, o), a = ct(e, i);
            return 1 === n.length && ft(o) && !pt(o, i) && (r += " with value " + s), r += ", got " + i + " ", 
            ft(i) && (r += "with value " + a + "."), r;
        }
        function ct(t, e) {
            return "String" === e ? '"' + t + '"' : "Number" === e ? "" + Number(t) : "" + t;
        }
        function ft(t) {
            return [ "string", "number", "boolean" ].some(function(e) {
                return t.toLowerCase() === e;
            });
        }
        function pt() {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return t.some(function(t) {
                return "boolean" === t.toLowerCase();
            });
        }
        function ht(t, e, n) {
            T();
            try {
                if (e) for (var r = e; r = r.$parent; ) {
                    var o = r.$options.errorCaptured;
                    if (o) for (var i = 0; i < o.length; i++) try {
                        if (!1 === o[i].call(r, t, e, n)) return;
                    } catch (t) {
                        dt(t, r, "errorCaptured hook");
                    }
                }
                dt(t, e, n);
            } finally {
                C();
            }
        }
        function lt(t, e, n, r, o) {
            var i;
            try {
                (i = n ? t.apply(e, n) : t.call(e)) && !i._isVue && h(i) && !i._handled && (i.catch(function(t) {
                    return ht(t, r, o + " (Promise/async)");
                }), i._handled = !0);
            } catch (t) {
                ht(t, r, o);
            }
            return i;
        }
        function dt(t, e, n) {
            if (Fn.errorHandler) try {
                return Fn.errorHandler.call(null, t, e, n);
            } catch (e) {
                e !== t && yt(e, null, "config.errorHandler");
            }
            yt(t, e, n);
        }
        function yt(t, e, n) {
            if (ir("Error in " + n + ': "' + t.toString() + '"', e), !zn && !Yn || "undefined" == typeof console) throw t;
            console.error(t);
        }
        function vt() {
            Pr = !1;
            var t = kr.slice(0);
            kr.length = 0;
            for (var e = 0; e < t.length; e++) t[e]();
        }
        function gt(t, e) {
            var n;
            if (kr.push(function() {
                if (t) try {
                    t.call(e);
                } catch (t) {
                    ht(t, e, "nextTick");
                } else n && n(e);
            }), Pr || (Pr = !0, Or()), !t && "undefined" != typeof Promise) return new Promise(function(t) {
                n = t;
            });
        }
        function mt(t) {
            _t(t, qr), qr.clear();
        }
        function _t(t, e) {
            var n, r, o = Array.isArray(t);
            if (!(!o && !a(t) || Object.isFrozen(t) || t instanceof yr)) {
                if (t.__ob__) {
                    var i = t.__ob__.dep.id;
                    if (e.has(i)) return;
                    e.add(i);
                }
                if (o) for (n = t.length; n--; ) _t(t[n], e); else for (n = (r = Object.keys(t)).length; n--; ) _t(t[r[n]], e);
            }
        }
        function bt(t, e) {
            function n() {
                var t = arguments, r = n.fns;
                if (!Array.isArray(r)) return lt(r, null, arguments, e, "v-on handler");
                for (var o = r.slice(), i = 0; i < o.length; i++) lt(o[i], null, t, e, "v-on handler");
            }
            return n.fns = t, n;
        }
        function At(t, e, r, i, s, a) {
            var u, c, f, p;
            for (u in t) c = t[u], f = e[u], p = zr(u), n(c) ? ir('Invalid handler for event "' + p.name + '": got ' + String(c), a) : n(f) ? (n(c.fns) && (c = t[u] = bt(c, a)), 
            o(p.once) && (c = t[u] = s(p.name, c, p.capture)), r(p.name, c, p.capture, p.passive, p.params)) : c !== f && (f.fns = c, 
            t[u] = f);
            for (u in e) n(t[u]) && i((p = zr(u)).name, e[u], p.capture);
        }
        function wt(t, e, o, i) {
            var s = e.options.mpOptions && e.options.mpOptions.properties;
            if (n(s)) return o;
            var a = e.options.mpOptions.externalClasses || [], u = t.attrs, c = t.props;
            if (r(u) || r(c)) for (var f in s) {
                var p = Nn(f);
                (Ot(o, c, f, p, !0) || Ot(o, u, f, p, !1)) && o[f] && -1 !== a.indexOf(p) && i[$n(o[f])] && (o[f] = i[$n(o[f])]);
            }
            return o;
        }
        function Et(t, e, o, i) {
            var s = e.options.props;
            if (n(s)) return wt(t, e, {}, i);
            var a = {}, u = t.attrs, c = t.props;
            if (r(u) || r(c)) for (var f in s) {
                var p = Nn(f), h = f.toLowerCase();
                f !== h && u && g(u, h) && sr('Prop "' + h + '" is passed to component ' + ur(o || e) + ', but the declared prop name is "' + f + '". Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "' + p + '" instead of "' + f + '".'), 
                Ot(a, c, f, p, !0) || Ot(a, u, f, p, !1);
            }
            return wt(t, e, a, i);
        }
        function Ot(t, e, n, o, i) {
            if (r(e)) {
                if (g(e, n)) return t[n] = e[n], i || delete e[n], !0;
                if (g(e, o)) return t[n] = e[o], i || delete e[o], !0;
            }
            return !1;
        }
        function St(t) {
            for (var e = 0; e < t.length; e++) if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
            return t;
        }
        function It(t) {
            return s(t) ? [ $(t) ] : Array.isArray(t) ? Pt(t) : void 0;
        }
        function kt(t) {
            return r(t) && r(t.text) && i(t.isComment);
        }
        function Pt(t, e) {
            var i, a, u, c, f = [];
            for (i = 0; i < t.length; i++) n(a = t[i]) || "boolean" == typeof a || (c = f[u = f.length - 1], 
            Array.isArray(a) ? a.length > 0 && (kt((a = Pt(a, (e || "") + "_" + i))[0]) && kt(c) && (f[u] = $(c.text + a[0].text), 
            a.shift()), f.push.apply(f, a)) : s(a) ? kt(c) ? f[u] = $(c.text + a) : "" !== a && f.push($(a)) : kt(a) && kt(c) ? f[u] = $(c.text + a.text) : (o(t._isVList) && r(a.tag) && n(a.key) && r(e) && (a.key = "__vlist" + e + "_" + i + "__"), 
            f.push(a)));
            return f;
        }
        function xt(t) {
            var e = t.$options.provide;
            e && (t._provided = "function" == typeof e ? e.call(t) : e);
        }
        function Tt(t) {
            var e = Ct(t.$options.inject, t);
            e && (j(!1), Object.keys(e).forEach(function(n) {
                D(t, n, e[n], function() {
                    ir('Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. injection being mutated: "' + n + '"', t);
                });
            }), j(!0));
        }
        function Ct(t, e) {
            if (t) {
                for (var n = Object.create(null), r = or ? Reflect.ownKeys(t) : Object.keys(t), o = 0; o < r.length; o++) {
                    var i = r[o];
                    if ("__ob__" !== i) {
                        for (var s = t[i].from, a = e; a; ) {
                            if (a._provided && g(a._provided, s)) {
                                n[i] = a._provided[s];
                                break;
                            }
                            a = a.$parent;
                        }
                        if (!a) if ("default" in t[i]) {
                            var u = t[i].default;
                            n[i] = "function" == typeof u ? u.call(e) : u;
                        } else ir('Injection "' + i + '" not found', e);
                    }
                }
                return n;
            }
        }
        function $t(t, e) {
            if (!t || !t.length) return {};
            for (var n = {}, r = 0, o = t.length; r < o; r++) {
                var i = t[r], s = i.data;
                if (s && s.attrs && s.attrs.slot && delete s.attrs.slot, i.context !== e && i.fnContext !== e || !s || null == s.slot) i.asyncMeta && i.asyncMeta.data && "page" === i.asyncMeta.data.slot ? (n.page || (n.page = [])).push(i) : (n.default || (n.default = [])).push(i); else {
                    var a = s.slot, u = n[a] || (n[a] = []);
                    "template" === i.tag ? u.push.apply(u, i.children || []) : u.push(i);
                }
            }
            for (var c in n) n[c].every(Rt) && delete n[c];
            return n;
        }
        function Rt(t) {
            return t.isComment && !t.asyncFactory || " " === t.text;
        }
        function jt(t, e, n) {
            var r, o = Object.keys(e).length > 0, i = t ? !!t.$stable : !o, s = t && t.$key;
            if (t) {
                if (t._normalized) return t._normalized;
                if (i && n && n !== In && s === n.$key && !o && !n.$hasNormal) return n;
                r = {};
                for (var a in t) t[a] && "$" !== a[0] && (r[a] = Nt(e, a, t[a]));
            } else r = {};
            for (var u in e) u in r || (r[u] = Bt(e, u));
            return t && Object.isExtensible(t) && (t._normalized = r), k(r, "$stable", i), k(r, "$key", s), 
            k(r, "$hasNormal", o), r;
        }
        function Nt(t, e, n) {
            var r = function() {
                var t = arguments.length ? n.apply(null, arguments) : n({});
                return (t = t && "object" === (void 0 === t ? "undefined" : _typeof(t)) && !Array.isArray(t) ? [ t ] : It(t)) && (0 === t.length || 1 === t.length && t[0].isComment) ? void 0 : t;
            };
            return n.proxy && Object.defineProperty(t, e, {
                get: r,
                enumerable: !0,
                configurable: !0
            }), r;
        }
        function Bt(t, e) {
            return function() {
                return t[e];
            };
        }
        function Mt(t, e) {
            var n, o, i, s, u;
            if (Array.isArray(t) || "string" == typeof t) for (n = new Array(t.length), o = 0, 
            i = t.length; o < i; o++) n[o] = e(t[o], o, o, o); else if ("number" == typeof t) for (n = new Array(t), 
            o = 0; o < t; o++) n[o] = e(o + 1, o, o, o); else if (a(t)) if (or && t[Symbol.iterator]) {
                n = [];
                for (var c = t[Symbol.iterator](), f = c.next(); !f.done; ) n.push(e(f.value, n.length, o, o++)), 
                f = c.next();
            } else for (s = Object.keys(t), n = new Array(s.length), o = 0, i = s.length; o < i; o++) u = s[o], 
            n[o] = e(t[u], u, o, o);
            return r(n) || (n = []), n._isVList = !0, n;
        }
        function Dt(t, e, n, r) {
            var o, i = this.$scopedSlots[t];
            i ? (n = n || {}, r && (a(r) || ir("slot v-bind without argument expects an Object", this), 
            n = b(b({}, r), n)), o = i(n, this, n._i) || e) : o = this.$slots[t] || e;
            var s = n && n.slot;
            return s ? this.$createElement("template", {
                slot: s
            }, o) : o;
        }
        function Ut(t) {
            return tt(this.$options, "filters", t, !0) || Dn;
        }
        function Lt(t, e) {
            return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e;
        }
        function Ft(t, e, n, r, o) {
            var i = Fn.keyCodes[e] || n;
            return o && r && !Fn.keyCodes[e] ? Lt(o, r) : i ? Lt(i, t) : r ? Nn(r) !== e : void 0;
        }
        function Vt(t, e, n, r, o) {
            if (n) if (a(n)) {
                Array.isArray(n) && (n = A(n));
                var i;
                for (var s in n) !function(s) {
                    if ("class" === s || "style" === s || xn(s)) i = t; else {
                        var a = t.attrs && t.attrs.type;
                        i = r || Fn.mustUseProp(e, a, s) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
                    }
                    var u = $n(s), c = Nn(s);
                    u in i || c in i || (i[s] = n[s], o && ((t.on || (t.on = {}))["update:" + s] = function(t) {
                        n[s] = t;
                    }));
                }(s);
            } else ir("v-bind without argument expects an Object or Array value", this);
            return t;
        }
        function qt(t, e) {
            var n = this._staticTrees || (this._staticTrees = []), r = n[t];
            return r && !e ? r : (r = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), 
            zt(r, "__static__" + t, !1), r);
        }
        function Ht(t, e, n) {
            return zt(t, "__once__" + e + (n ? "_" + n : ""), !0), t;
        }
        function zt(t, e, n) {
            if (Array.isArray(t)) for (var r = 0; r < t.length; r++) t[r] && "string" != typeof t[r] && Yt(t[r], e + "_" + r, n); else Yt(t, e, n);
        }
        function Yt(t, e, n) {
            t.isStatic = !0, t.key = e, t.isOnce = n;
        }
        function Gt(t, e) {
            if (e) if (c(e)) {
                var n = t.on = t.on ? b({}, t.on) : {};
                for (var r in e) {
                    var o = n[r], i = e[r];
                    n[r] = o ? [].concat(o, i) : i;
                }
            } else ir("v-on without argument expects an Object value", this);
            return t;
        }
        function Kt(t, e, n, r) {
            e = e || {
                $stable: !n
            };
            for (var o = 0; o < t.length; o++) {
                var i = t[o];
                Array.isArray(i) ? Kt(i, e, n) : i && (i.proxy && (i.fn.proxy = !0), e[i.key] = i.fn);
            }
            return r && (e.$key = r), e;
        }
        function Wt(t, e) {
            for (var n = 0; n < e.length; n += 2) {
                var r = e[n];
                "string" == typeof r && r ? t[e[n]] = e[n + 1] : "" !== r && null !== r && ir("Invalid value for dynamic directive argument (expected string or null): " + r, this);
            }
            return t;
        }
        function Jt(t, e) {
            return "string" == typeof t ? e + t : t;
        }
        function Qt(t) {
            t._o = Ht, t._n = d, t._s = l, t._l = Mt, t._t = Dt, t._q = E, t._i = O, t._m = qt, 
            t._f = Ut, t._k = Ft, t._b = Vt, t._v = $, t._e = gr, t._u = Kt, t._g = Gt, t._d = Wt, 
            t._p = Jt;
        }
        function Xt(t, e, n, r, i) {
            var s, a = this, u = i.options;
            g(r, "_uid") ? (s = Object.create(r))._original = r : (s = r, r = r._original);
            var c = o(u._compiled), f = !c;
            this.data = t, this.props = e, this.children = n, this.parent = r, this.listeners = t.on || In, 
            this.injections = Ct(u.inject, r), this.slots = function() {
                return a.$slots || jt(t.scopedSlots, a.$slots = $t(n, r)), a.$slots;
            }, Object.defineProperty(this, "scopedSlots", {
                enumerable: !0,
                get: function() {
                    return jt(t.scopedSlots, this.slots());
                }
            }), c && (this.$options = u, this.$slots = this.slots(), this.$scopedSlots = jt(t.scopedSlots, this.$slots)), 
            u._scopeId ? this._c = function(t, e, n, o) {
                var i = ae(s, t, e, n, o, f);
                return i && !Array.isArray(i) && (i.fnScopeId = u._scopeId, i.fnContext = r), i;
            } : this._c = function(t, e, n, r) {
                return ae(s, t, e, n, r, f);
            };
        }
        function Zt(t, e, n, o, i) {
            var s = t.options, a = {}, u = s.props;
            if (r(u)) for (var c in u) a[c] = et(c, u, e || In); else r(n.attrs) && ee(a, n.attrs), 
            r(n.props) && ee(a, n.props);
            var f = new Xt(n, a, i, o, t), p = s.render.call(null, f._c, f);
            if (p instanceof yr) return te(p, n, f.parent, s, f);
            if (Array.isArray(p)) {
                for (var h = It(p) || [], l = new Array(h.length), d = 0; d < h.length; d++) l[d] = te(h[d], n, f.parent, s, f);
                return l;
            }
        }
        function te(t, e, n, r, o) {
            var i = R(t);
            return i.fnContext = n, i.fnOptions = r, (i.devtoolsMeta = i.devtoolsMeta || {}).renderContext = o, 
            e.slot && ((i.data || (i.data = {})).slot = e.slot), i;
        }
        function ee(t, e) {
            for (var n in e) t[$n(n)] = e[n];
        }
        function ne(t, e, i, s, u) {
            if (!n(t)) {
                var c = i.$options._base;
                if (a(t) && (t = c.extend(t)), "function" == typeof t) {
                    var f;
                    if (n(t.cid) && (f = t, void 0 === (t = de(f, c)))) return le(f, e, i, s, u);
                    e = e || {}, Ke(t), r(e.model) && se(t.options, e);
                    var p = Et(e, t, u, i);
                    if (o(t.options.functional)) return Zt(t, p, e, i, s);
                    var h = e.on;
                    if (e.on = e.nativeOn, o(t.options.abstract)) {
                        var l = e.slot;
                        e = {}, l && (e.slot = l);
                    }
                    oe(e);
                    var d = t.options.name || u;
                    return new yr("vue-component-" + t.cid + (d ? "-" + d : ""), e, void 0, void 0, void 0, i, {
                        Ctor: t,
                        propsData: p,
                        listeners: h,
                        tag: u,
                        children: s
                    }, f);
                }
                ir("Invalid Component definition: " + String(t), i);
            }
        }
        function re(t, e) {
            var n = {
                _isComponent: !0,
                _parentVnode: t,
                parent: e
            }, o = t.data.inlineTemplate;
            return r(o) && (n.render = o.render, n.staticRenderFns = o.staticRenderFns), new t.componentOptions.Ctor(n);
        }
        function oe(t) {
            for (var e = t.hook || (t.hook = {}), n = 0; n < Kr.length; n++) {
                var r = Kr[n], o = e[r], i = Gr[r];
                o === i || o && o._merged || (e[r] = o ? ie(i, o) : i);
            }
        }
        function ie(t, e) {
            var n = function(n, r) {
                t(n, r), e(n, r);
            };
            return n._merged = !0, n;
        }
        function se(t, e) {
            var n = t.model && t.model.prop || "value", o = t.model && t.model.event || "input";
            (e.attrs || (e.attrs = {}))[n] = e.model.value;
            var i = e.on || (e.on = {}), s = i[o], a = e.model.callback;
            r(s) ? (Array.isArray(s) ? -1 === s.indexOf(a) : s !== a) && (i[o] = [ a ].concat(s)) : i[o] = a;
        }
        function ae(t, e, n, r, i, a) {
            return (Array.isArray(n) || s(n)) && (i = r, r = n, n = void 0), o(a) && (i = Jr), 
            ue(t, e, n, r, i);
        }
        function ue(t, e, n, o, i) {
            if (r(n) && r(n.__ob__)) return ir("Avoid using observed data object as vnode data: " + JSON.stringify(n) + "\nAlways create fresh vnode data objects in each render!", t), 
            gr();
            if (r(n) && r(n.is) && (e = n.is), !e) return gr();
            r(n) && r(n.key) && !s(n.key) && ir("Avoid using non-primitive value as key, use string/number value instead.", t), 
            Array.isArray(o) && "function" == typeof o[0] && ((n = n || {}).scopedSlots = {
                default: o[0]
            }, o.length = 0), i === Jr ? o = It(o) : i === Wr && (o = St(o));
            var a, u;
            if ("string" == typeof e) {
                var c;
                u = t.$vnode && t.$vnode.ns || Fn.getTagNamespace(e), Fn.isReservedTag(e) ? (r(n) && r(n.nativeOn) && ir("The .native modifier for v-on is only valid on components but it was used on <" + e + ">.", t), 
                a = new yr(Fn.parsePlatformTagName(e), n, o, void 0, void 0, t)) : a = n && n.pre || !r(c = tt(t.$options, "components", e)) ? new yr(e, n, o, void 0, void 0, t) : ne(c, n, t, o, e);
            } else a = ne(e, n, t, o);
            return Array.isArray(a) ? a : r(a) ? (r(u) && ce(a, u), r(n) && fe(n), a) : gr();
        }
        function ce(t, e, i) {
            if (t.ns = e, "foreignObject" === t.tag && (e = void 0, i = !0), r(t.children)) for (var s = 0, a = t.children.length; s < a; s++) {
                var u = t.children[s];
                r(u.tag) && (n(u.ns) || o(i) && "svg" !== u.tag) && ce(u, e, i);
            }
        }
        function fe(t) {
            a(t.style) && mt(t.style), a(t.class) && mt(t.class);
        }
        function pe(t) {
            t._vnode = null, t._staticTrees = null;
            var e = t.$options, n = t.$vnode = e._parentVnode, r = n && n.context;
            t.$slots = $t(e._renderChildren, r), t.$scopedSlots = In, t._c = function(e, n, r, o) {
                return ae(t, e, n, r, o, !1);
            }, t.$createElement = function(e, n, r, o) {
                return ae(t, e, n, r, o, !0);
            };
            var o = n && n.data;
            D(t, "$attrs", o && o.attrs || In, function() {
                !Zr && ir("$attrs is readonly.", t);
            }, !0), D(t, "$listeners", e._parentListeners || In, function() {
                !Zr && ir("$listeners is readonly.", t);
            }, !0);
        }
        function he(t, e) {
            return (t.__esModule || or && "Module" === t[Symbol.toStringTag]) && (t = t.default), 
            a(t) ? e.extend(t) : t;
        }
        function le(t, e, n, r, o) {
            var i = gr();
            return i.asyncFactory = t, i.asyncMeta = {
                data: e,
                context: n,
                children: r,
                tag: o
            }, i;
        }
        function de(t, e) {
            if (o(t.error) && r(t.errorComp)) return t.errorComp;
            if (r(t.resolved)) return t.resolved;
            var i = Qr;
            if (i && r(t.owners) && -1 === t.owners.indexOf(i) && t.owners.push(i), o(t.loading) && r(t.loadingComp)) return t.loadingComp;
            if (i && !r(t.owners)) {
                var s = t.owners = [ i ], u = !0, c = null, f = null;
                i.$on("hook:destroyed", function() {
                    return v(s, i);
                });
                var p = function(t) {
                    for (var e = 0, n = s.length; e < n; e++) s[e].$forceUpdate();
                    t && (s.length = 0, null !== c && (clearTimeout(c), c = null), null !== f && (clearTimeout(f), 
                    f = null));
                }, l = S(function(n) {
                    t.resolved = he(n, e), u ? s.length = 0 : p(!0);
                }), d = S(function(e) {
                    ir("Failed to resolve async component: " + String(t) + (e ? "\nReason: " + e : "")), 
                    r(t.errorComp) && (t.error = !0, p(!0));
                }), y = t(l, d);
                return a(y) && (h(y) ? n(t.resolved) && y.then(l, d) : h(y.component) && (y.component.then(l, d), 
                r(y.error) && (t.errorComp = he(y.error, e)), r(y.loading) && (t.loadingComp = he(y.loading, e), 
                0 === y.delay ? t.loading = !0 : c = setTimeout(function() {
                    c = null, n(t.resolved) && n(t.error) && (t.loading = !0, p(!1));
                }, y.delay || 200)), r(y.timeout) && (f = setTimeout(function() {
                    f = null, n(t.resolved) && d("timeout (" + y.timeout + "ms)");
                }, y.timeout)))), u = !1, t.loading ? t.loadingComp : t.resolved;
            }
        }
        function ye(t) {
            return t.isComment && t.asyncFactory;
        }
        function ve(t) {
            if (Array.isArray(t)) for (var e = 0; e < t.length; e++) {
                var n = t[e];
                if (r(n) && (r(n.componentOptions) || ye(n))) return n;
            }
        }
        function ge(t) {
            t._events = Object.create(null), t._hasHookEvent = !1;
            var e = t.$options._parentListeners;
            e && Ae(t, e);
        }
        function me(t, e) {
            Yr.$on(t, e);
        }
        function _e(t, e) {
            Yr.$off(t, e);
        }
        function be(t, e) {
            var n = Yr;
            return function r() {
                null !== e.apply(null, arguments) && n.$off(t, r);
            };
        }
        function Ae(t, e, n) {
            Yr = t, At(e, n || {}, me, _e, be, t), Yr = void 0;
        }
        function we(t) {
            var e = Xr;
            return Xr = t, function() {
                Xr = e;
            };
        }
        function Ee(t) {
            var e = t.$options, n = e.parent;
            if (n && !e.abstract) {
                for (;n.$options.abstract && n.$parent; ) n = n.$parent;
                n.$children.push(t);
            }
            t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, 
            t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, 
            t._isBeingDestroyed = !1;
        }
        function Oe(t, e, n, r, o) {
            Zr = !0;
            var i = r.data.scopedSlots, s = t.$scopedSlots, a = !!(i && !i.$stable || s !== In && !s.$stable || i && t.$scopedSlots.$key !== i.$key), u = !!(o || t.$options._renderChildren || a);
            if (t.$options._parentVnode = r, t.$vnode = r, t._vnode && (t._vnode.parent = r), 
            t.$options._renderChildren = o, t.$attrs = r.data.attrs || In, t.$listeners = n || In, 
            e && t.$options.props) {
                j(!1);
                for (var c = t._props, f = t.$options._propKeys || [], p = 0; p < f.length; p++) {
                    var h = f[p], l = t.$options.props;
                    c[h] = et(h, l, e, t);
                }
                j(!0), t.$options.propsData = e;
            }
            t._$updateProperties && t._$updateProperties(t), n = n || In;
            var d = t.$options._parentListeners;
            t.$options._parentListeners = n, Ae(t, n, d), u && (t.$slots = $t(o, r.context), 
            t.$forceUpdate()), Zr = !1;
        }
        function Se(t) {
            for (;t && (t = t.$parent); ) if (t._inactive) return !0;
            return !1;
        }
        function Ie(t, e) {
            if (e) {
                if (t._directInactive = !1, Se(t)) return;
            } else if (t._directInactive) return;
            if (t._inactive || null === t._inactive) {
                t._inactive = !1;
                for (var n = 0; n < t.$children.length; n++) Ie(t.$children[n]);
                Pe(t, "activated");
            }
        }
        function ke(t, e) {
            if (!(e && (t._directInactive = !0, Se(t)) || t._inactive)) {
                t._inactive = !0;
                for (var n = 0; n < t.$children.length; n++) ke(t.$children[n]);
                Pe(t, "deactivated");
            }
        }
        function Pe(t, e) {
            T();
            var n = t.$options[e], r = e + " hook";
            if (n) for (var o = 0, i = n.length; o < i; o++) lt(n[o], t, null, t, r);
            t._hasHookEvent && t.$emit("hook:" + e), C();
        }
        function xe() {
            ao = eo.length = no.length = 0, ro = {}, oo = {}, io = so = !1;
        }
        function Te() {
            uo = co(), so = !0;
            var t, e;
            for (eo.sort(function(t, e) {
                return t.id - e.id;
            }), ao = 0; ao < eo.length; ao++) if ((t = eo[ao]).before && t.before(), e = t.id, 
            ro[e] = null, t.run(), null != ro[e] && (oo[e] = (oo[e] || 0) + 1, oo[e] > to)) {
                ir("You may have an infinite update loop " + (t.user ? 'in watcher with expression "' + t.expression + '"' : "in a component render function."), t.vm);
                break;
            }
            var n = no.slice(), r = eo.slice();
            xe(), Re(n), Ce(r), rr && Fn.devtools && rr.emit("flush");
        }
        function Ce(t) {
            for (var e = t.length; e--; ) {
                var n = t[e], r = n.vm;
                r._watcher === n && r._isMounted && !r._isDestroyed && Pe(r, "updated");
            }
        }
        function $e(t) {
            t._inactive = !1, no.push(t);
        }
        function Re(t) {
            for (var e = 0; e < t.length; e++) t[e]._inactive = !0, Ie(t[e], !0);
        }
        function je(t) {
            var e = t.id;
            if (null == ro[e]) {
                if (ro[e] = !0, so) {
                    for (var n = eo.length - 1; n > ao && eo[n].id > t.id; ) n--;
                    eo.splice(n + 1, 0, t);
                } else eo.push(t);
                if (!io) {
                    if (io = !0, !Fn.async) return void Te();
                    gt(Te);
                }
            }
        }
        function Ne(t, e, n) {
            lo.get = function() {
                return this[e][n];
            }, lo.set = function(t) {
                this[e][n] = t;
            }, Object.defineProperty(t, n, lo);
        }
        function Be(t) {
            t._watchers = [];
            var e = t.$options;
            e.props && Me(t, e.props), e.methods && He(t, e.methods), e.data ? De(t) : M(t._data = {}, !0), 
            e.computed && Le(t, e.computed), e.watch && e.watch !== Xn && ze(t, e.watch);
        }
        function Me(t, e) {
            var n = t.$options.propsData || {}, r = t._props = {}, o = t.$options._propKeys = [], i = !t.$parent;
            i || j(!1);
            for (var s in e) !function(s) {
                o.push(s);
                var a = et(s, e, n, t), u = Nn(s);
                (xn(u) || Fn.isReservedAttr(u)) && ir('"' + u + '" is a reserved attribute and cannot be used as component prop.', t), 
                D(r, s, a, function() {
                    if (!i && !Zr) {
                        if ("mp-baidu" === t.mpHost) return;
                        if ("value" === s && Array.isArray(t.$options.behaviors) && -1 !== t.$options.behaviors.indexOf("uni://form-field")) return;
                        if (t._getFormData) return;
                        for (var e = t.$parent; e; ) {
                            if (e.__next_tick_pending) return;
                            e = e.$parent;
                        }
                        ir("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: \"" + s + '"', t);
                    }
                }), s in t || Ne(t, "_props", s);
            }(s);
            j(!0);
        }
        function De(t) {
            var e = t.$options.data;
            c(e = t._data = "function" == typeof e ? Ue(e, t) : e || {}) || (e = {}, ir("data functions should return an object:\nhttps://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function", t));
            for (var n = Object.keys(e), r = t.$options.props, o = t.$options.methods, i = n.length; i--; ) {
                var s = n[i];
                o && g(o, s) && ir('Method "' + s + '" has already been defined as a data property.', t), 
                r && g(r, s) ? ir('The data property "' + s + '" is already declared as a prop. Use prop default value instead.', t) : I(s) || Ne(t, "_data", s);
            }
            M(e, !0);
        }
        function Ue(t, e) {
            T();
            try {
                return t.call(e, e);
            } catch (t) {
                return ht(t, e, "data()"), {};
            } finally {
                C();
            }
        }
        function Le(t, e) {
            var n = t._computedWatchers = Object.create(null), r = nr();
            for (var o in e) {
                var i = e[o], s = "function" == typeof i ? i : i.get;
                null == s && ir('Getter is missing for computed property "' + o + '".', t), r || (n[o] = new ho(t, s || w, w, yo)), 
                o in t ? o in t.$data ? ir('The computed property "' + o + '" is already defined in data.', t) : t.$options.props && o in t.$options.props && ir('The computed property "' + o + '" is already defined as a prop.', t) : Fe(t, o, i);
            }
        }
        function Fe(t, e, n) {
            var r = !nr();
            "function" == typeof n ? (lo.get = r ? Ve(e) : qe(n), lo.set = w) : (lo.get = n.get ? r && !1 !== n.cache ? Ve(e) : qe(n.get) : w, 
            lo.set = n.set || w), lo.set === w && (lo.set = function() {
                ir('Computed property "' + e + '" was assigned to but it has no setter.', this);
            }), Object.defineProperty(t, e, lo);
        }
        function Ve(t) {
            return function() {
                var e = this._computedWatchers && this._computedWatchers[t];
                if (e) return e.dirty && e.evaluate(), dr.SharedObject.target && e.depend(), e.value;
            };
        }
        function qe(t) {
            return function() {
                return t.call(this, this);
            };
        }
        function He(t, e) {
            var n = t.$options.props;
            for (var r in e) "function" != typeof e[r] && ir('Method "' + r + '" has type "' + _typeof(e[r]) + '" in the component definition. Did you reference the function correctly?', t), 
            n && g(n, r) && ir('Method "' + r + '" has already been defined as a prop.', t), 
            r in t && I(r) && ir('Method "' + r + '" conflicts with an existing Vue instance method. Avoid defining component methods that start with _ or $.'), 
            t[r] = "function" != typeof e[r] ? w : Bn(e[r], t);
        }
        function ze(t, e) {
            for (var n in e) {
                var r = e[n];
                if (Array.isArray(r)) for (var o = 0; o < r.length; o++) Ye(t, n, r[o]); else Ye(t, n, r);
            }
        }
        function Ye(t, e, n, r) {
            return c(n) && (r = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, r);
        }
        function Ge(t, e) {
            var n = t.$options = Object.create(t.constructor.options), r = e._parentVnode;
            n.parent = e.parent, n._parentVnode = r;
            var o = r.componentOptions;
            n.propsData = o.propsData, n._parentListeners = o.listeners, n._renderChildren = o.children, 
            n._componentTag = o.tag, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns);
        }
        function Ke(t) {
            var e = t.options;
            if (t.super) {
                var n = Ke(t.super);
                if (n !== t.superOptions) {
                    t.superOptions = n;
                    var r = We(t);
                    r && b(t.extendOptions, r), (e = t.options = Z(n, t.extendOptions)).name && (e.components[e.name] = t);
                }
            }
            return e;
        }
        function We(t) {
            var e, n = t.options, r = t.sealedOptions;
            for (var o in n) n[o] !== r[o] && (e || (e = {}), e[o] = n[o]);
            return e;
        }
        function Je(t) {
            this instanceof Je || ir("Vue is a constructor and should be called with the `new` keyword"), 
            this._init(t);
        }
        function Qe(t) {
            t.use = function(t) {
                var e = this._installedPlugins || (this._installedPlugins = []);
                if (e.indexOf(t) > -1) return this;
                var n = _(arguments, 1);
                return n.unshift(this), "function" == typeof t.install ? t.install.apply(t, n) : "function" == typeof t && t.apply(null, n), 
                e.push(t), this;
            };
        }
        function Xe(t) {
            t.mixin = function(t) {
                return this.options = Z(this.options, t), this;
            };
        }
        function Ze(t) {
            t.cid = 0;
            var e = 1;
            t.extend = function(t) {
                t = t || {};
                var n = this, r = n.cid, o = t._Ctor || (t._Ctor = {});
                if (o[r]) return o[r];
                var i = t.name || n.options.name;
                i && K(i);
                var s = function(t) {
                    this._init(t);
                };
                return s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.cid = e++, 
                s.options = Z(n.options, t), s.super = n, s.options.props && tn(s), s.options.computed && en(s), 
                s.extend = n.extend, s.mixin = n.mixin, s.use = n.use, Un.forEach(function(t) {
                    s[t] = n[t];
                }), i && (s.options.components[i] = s), s.superOptions = n.options, s.extendOptions = t, 
                s.sealedOptions = b({}, s.options), o[r] = s, s;
            };
        }
        function tn(t) {
            var e = t.options.props;
            for (var n in e) Ne(t.prototype, "_props", n);
        }
        function en(t) {
            var e = t.options.computed;
            for (var n in e) Fe(t.prototype, n, e[n]);
        }
        function nn(t) {
            Un.forEach(function(e) {
                t[e] = function(t, n) {
                    return n ? ("component" === e && K(t), "component" === e && c(n) && (n.name = n.name || t, 
                    n = this.options._base.extend(n)), "directive" === e && "function" == typeof n && (n = {
                        bind: n,
                        update: n
                    }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t];
                };
            });
        }
        function rn(t) {
            return t && (t.Ctor.options.name || t.tag);
        }
        function on(t, e) {
            return Array.isArray(t) ? t.indexOf(e) > -1 : "string" == typeof t ? t.split(",").indexOf(e) > -1 : !!f(t) && t.test(e);
        }
        function sn(t, e) {
            var n = t.cache, r = t.keys, o = t._vnode;
            for (var i in n) {
                var s = n[i];
                if (s) {
                    var a = rn(s.componentOptions);
                    a && !e(a) && an(n, i, r, o);
                }
            }
        }
        function an(t, e, n, r) {
            var o = t[e];
            !o || r && o.tag === r.tag || o.componentInstance.$destroy(), t[e] = null, v(n, e);
        }
        function un(t, e) {
            var n = {};
            return cn(t, e), fn(t, e, "", n), n;
        }
        function cn(t, e) {
            if (t !== e) {
                var n = hn(t), r = hn(e);
                if (n == bo && r == bo) {
                    if (Object.keys(t).length >= Object.keys(e).length) for (var o in e) {
                        var i = t[o];
                        void 0 === i ? t[o] = null : cn(i, e[o]);
                    }
                } else n == _o && r == _o && t.length >= e.length && e.forEach(function(e, n) {
                    cn(t[n], e);
                });
            }
        }
        function fn(t, e, n, r) {
            if (t !== e) {
                var o = hn(t), i = hn(e);
                if (o == bo) if (i != bo || Object.keys(t).length < Object.keys(e).length) pn(r, n, t); else {
                    for (var s in t) !function(o) {
                        var i = t[o], s = e[o], a = hn(i), u = hn(s);
                        if (a != _o && a != bo) i != e[o] && pn(r, ("" == n ? "" : n + ".") + o, i); else if (a == _o) u != _o ? pn(r, ("" == n ? "" : n + ".") + o, i) : i.length < s.length ? pn(r, ("" == n ? "" : n + ".") + o, i) : i.forEach(function(t, e) {
                            fn(t, s[e], ("" == n ? "" : n + ".") + o + "[" + e + "]", r);
                        }); else if (a == bo) if (u != bo || Object.keys(i).length < Object.keys(s).length) pn(r, ("" == n ? "" : n + ".") + o, i); else for (var c in i) fn(i[c], s[c], ("" == n ? "" : n + ".") + o + "." + c, r);
                    }(s);
                } else o == _o ? i != _o ? pn(r, n, t) : t.length < e.length ? pn(r, n, t) : t.forEach(function(t, o) {
                    fn(t, e[o], n + "[" + o + "]", r);
                }) : pn(r, n, t);
            }
        }
        function pn(t, e, n) {
            t[e] = n;
        }
        function hn(t) {
            return Object.prototype.toString.call(t);
        }
        function ln(t) {
            if (t.__next_tick_callbacks && t.__next_tick_callbacks.length) {
                if (Object({
                    NODE_ENV: "development",
                    VUE_APP_NAME: "answers_uniapp",
                    VUE_APP_PLATFORM: "mp-weixin",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                    var e = t.$scope;
                    console.log("[" + +new Date() + "][" + (e.is || e.route) + "][" + t._uid + "]:flushCallbacks[" + t.__next_tick_callbacks.length + "]");
                }
                var n = t.__next_tick_callbacks.slice(0);
                t.__next_tick_callbacks.length = 0;
                for (var r = 0; r < n.length; r++) n[r]();
            }
        }
        function dn(t) {
            return eo.find(function(e) {
                return t._watcher === e;
            });
        }
        function yn(t, e) {
            if (!t.__next_tick_pending && !dn(t)) {
                if (Object({
                    NODE_ENV: "development",
                    VUE_APP_NAME: "answers_uniapp",
                    VUE_APP_PLATFORM: "mp-weixin",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                    var n = t.$scope;
                    console.log("[" + +new Date() + "][" + (n.is || n.route) + "][" + t._uid + "]:nextVueTick");
                }
                return gt(e, t);
            }
            if (Object({
                NODE_ENV: "development",
                VUE_APP_NAME: "answers_uniapp",
                VUE_APP_PLATFORM: "mp-weixin",
                BASE_URL: "/"
            }).VUE_APP_DEBUG) {
                var r = t.$scope;
                console.log("[" + +new Date() + "][" + (r.is || r.route) + "][" + t._uid + "]:nextMPTick");
            }
            var o;
            if (t.__next_tick_callbacks || (t.__next_tick_callbacks = []), t.__next_tick_callbacks.push(function() {
                if (e) try {
                    e.call(t);
                } catch (e) {
                    ht(e, t, "nextTick");
                } else o && o(t);
            }), !e && "undefined" != typeof Promise) return new Promise(function(t) {
                o = t;
            });
        }
        function vn(t) {
            var e = Object.create(null);
            [].concat(Object.keys(t._data || {}), Object.keys(t._computedWatchers || {})).reduce(function(e, n) {
                return e[n] = t[n], e;
            }, e);
            var n = t.__composition_api_state__ || t.__secret_vfa_state__, r = n && n.rawBindings;
            return r && Object.keys(r).forEach(function(n) {
                e[n] = t[n];
            }), Object.assign(e, t.$mp.data || {}), Array.isArray(t.$options.behaviors) && -1 !== t.$options.behaviors.indexOf("uni://form-field") && (e.name = t.name, 
            e.value = t.value), JSON.parse(JSON.stringify(e));
        }
        function gn() {}
        function mn(t, e, n) {
            if (!t.mpType) return t;
            "app" === t.mpType && (t.$options.render = gn), t.$options.render || (t.$options.render = gn, 
            t.$options.template && "#" !== t.$options.template.charAt(0) || t.$options.el || e ? ir("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.", t) : ir("Failed to mount component: template or render function not defined.", t)), 
            !t._$fallback && Pe(t, "beforeMount");
            return new ho(t, function() {
                t._update(t._render(), n);
            }, w, {
                before: function() {
                    t._isMounted && !t._isDestroyed && Pe(t, "beforeUpdate");
                }
            }, !0), n = !1, t;
        }
        function _n(t, e) {
            return r(t) || r(e) ? bn(t, An(e)) : "";
        }
        function bn(t, e) {
            return t ? e ? t + " " + e : t : e || "";
        }
        function An(t) {
            return Array.isArray(t) ? wn(t) : a(t) ? En(t) : "string" == typeof t ? t : "";
        }
        function wn(t) {
            for (var e, n = "", o = 0, i = t.length; o < i; o++) r(e = An(t[o])) && "" !== e && (n && (n += " "), 
            n += e);
            return n;
        }
        function En(t) {
            var e = "";
            for (var n in t) t[n] && (e && (e += " "), e += n);
            return e;
        }
        function On(t) {
            return Array.isArray(t) ? A(t) : "string" == typeof t ? Ao(t) : t;
        }
        function Sn(t, e) {
            var n = e.split("."), r = n[0];
            return 0 === r.indexOf("__$n") && (r = parseInt(r.replace("__$n", ""))), 1 === n.length ? t[r] : Sn(t[r], n.slice(1).join("."));
        }
        var In = Object.freeze({}), kn = Object.prototype.toString, Pn = y("slot,component", !0), xn = y("key,ref,slot,slot-scope,is"), Tn = Object.prototype.hasOwnProperty, Cn = /-(\w)/g, $n = m(function(t) {
            return t.replace(Cn, function(t, e) {
                return e ? e.toUpperCase() : "";
            });
        }), Rn = m(function(t) {
            return t.charAt(0).toUpperCase() + t.slice(1);
        }), jn = /\B([A-Z])/g, Nn = m(function(t) {
            return t.replace(jn, "-$1").toLowerCase();
        }), Bn = Function.prototype.bind ? function(t, e) {
            return t.bind(e);
        } : function(t, e) {
            function n(n) {
                var r = arguments.length;
                return r ? r > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e);
            }
            return n._length = t.length, n;
        }, Mn = function(t, e, n) {
            return !1;
        }, Dn = function(t) {
            return t;
        }, Un = [ "component", "directive", "filter" ], Ln = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch" ], Fn = {
            optionMergeStrategies: Object.create(null),
            silent: !1,
            productionTip: !0,
            devtools: !0,
            performance: !1,
            errorHandler: null,
            warnHandler: null,
            ignoredElements: [],
            keyCodes: Object.create(null),
            isReservedTag: Mn,
            isReservedAttr: Mn,
            isUnknownElement: Mn,
            getTagNamespace: w,
            parsePlatformTagName: Dn,
            mustUseProp: Mn,
            async: !0,
            _lifecycleHooks: Ln
        }, Vn = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/, qn = new RegExp("[^" + Vn.source + ".$_\\d]"), Hn = "__proto__" in {}, zn = "undefined" != typeof window, Yn = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform, Gn = Yn && WXEnvironment.platform.toLowerCase(), Kn = zn && window.navigator.userAgent.toLowerCase(), Wn = Kn && /msie|trident/.test(Kn), Jn = (Kn && Kn.indexOf("msie 9.0"), 
        Kn && Kn.indexOf("edge/") > 0), Qn = (Kn && Kn.indexOf("android"), Kn && /iphone|ipad|ipod|ios/.test(Kn) || "ios" === Gn), Xn = (Kn && /chrome\/\d+/.test(Kn), 
        Kn && /phantomjs/.test(Kn), Kn && Kn.match(/firefox\/(\d+)/), {}.watch);
        if (zn) try {
            var Zn = {};
            Object.defineProperty(Zn, "passive", {
                get: function() {}
            }), window.addEventListener("test-passive", null, Zn);
        } catch (t) {}
        var tr, er, nr = function() {
            return void 0 === tr && (tr = !zn && !Yn && void 0 !== t && (t.process && "server" === t.process.env.VUE_ENV)), 
            tr;
        }, rr = zn && window.__VUE_DEVTOOLS_GLOBAL_HOOK__, or = "undefined" != typeof Symbol && x(Symbol) && "undefined" != typeof Reflect && x(Reflect.ownKeys);
        er = "undefined" != typeof Set && x(Set) ? Set : function() {
            function t() {
                this.set = Object.create(null);
            }
            return t.prototype.has = function(t) {
                return !0 === this.set[t];
            }, t.prototype.add = function(t) {
                this.set[t] = !0;
            }, t.prototype.clear = function() {
                this.set = Object.create(null);
            }, t;
        }();
        var ir = w, sr = w, ar = w, ur = w, cr = "undefined" != typeof console, fr = /(?:^|[-_])(\w)/g, pr = function(t) {
            return t.replace(fr, function(t) {
                return t.toUpperCase();
            }).replace(/[-_]/g, "");
        };
        ir = function(t, e) {
            var n = e ? ar(e) : "";
            Fn.warnHandler ? Fn.warnHandler.call(null, t, e, n) : cr && !Fn.silent && console.error("[Vue warn]: " + t + n);
        }, sr = function(t, e) {
            cr && !Fn.silent && console.warn("[Vue tip]: " + t + (e ? ar(e) : ""));
        }, ur = function(t, e) {
            if (t.$root === t) return t.$options && t.$options.__file ? "" + t.$options.__file : "<Root>";
            var n = "function" == typeof t && null != t.cid ? t.options : t._isVue ? t.$options || t.constructor.options : t, r = n.name || n._componentTag, o = n.__file;
            if (!r && o) {
                var i = o.match(/([^/\\]+)\.vue$/);
                r = i && i[1];
            }
            return (r ? "<" + pr(r) + ">" : "<Anonymous>") + (o && !1 !== e ? " at " + o : "");
        };
        var hr = function(t, e) {
            for (var n = ""; e; ) e % 2 == 1 && (n += t), e > 1 && (t += t), e >>= 1;
            return n;
        };
        ar = function(t) {
            if (t._isVue && t.$parent) {
                for (var e = [], n = 0; t && "PageBody" !== t.$options.name; ) {
                    if (e.length > 0) {
                        var r = e[e.length - 1];
                        if (r.constructor === t.constructor) {
                            n++, t = t.$parent;
                            continue;
                        }
                        n > 0 && (e[e.length - 1] = [ r, n ], n = 0);
                    }
                    !t.$options.isReserved && e.push(t), t = t.$parent;
                }
                return "\n\nfound in\n\n" + e.map(function(t, e) {
                    return "" + (0 === e ? "---\x3e " : hr(" ", 5 + 2 * e)) + (Array.isArray(t) ? ur(t[0]) + "... (" + t[1] + " recursive calls)" : ur(t));
                }).join("\n");
            }
            return "\n\n(found in " + ur(t) + ")";
        };
        var lr = 0, dr = function() {
            this.id = lr++, this.subs = [];
        };
        dr.prototype.addSub = function(t) {
            this.subs.push(t);
        }, dr.prototype.removeSub = function(t) {
            v(this.subs, t);
        }, dr.prototype.depend = function() {
            dr.SharedObject.target && dr.SharedObject.target.addDep(this);
        }, dr.prototype.notify = function() {
            var t = this.subs.slice();
            Fn.async || t.sort(function(t, e) {
                return t.id - e.id;
            });
            for (var e = 0, n = t.length; e < n; e++) t[e].update();
        }, dr.SharedObject = {}, dr.SharedObject.target = null, dr.SharedObject.targetStack = [];
        var yr = function(t, e, n, r, o, i, s, a) {
            this.tag = t, this.data = e, this.children = n, this.text = r, this.elm = o, this.ns = void 0, 
            this.context = i, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, 
            this.key = e && e.key, this.componentOptions = s, this.componentInstance = void 0, 
            this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, 
            this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = a, 
            this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
        }, vr = {
            child: {
                configurable: !0
            }
        };
        vr.child.get = function() {
            return this.componentInstance;
        }, Object.defineProperties(yr.prototype, vr);
        var gr = function(t) {
            void 0 === t && (t = "");
            var e = new yr();
            return e.text = t, e.isComment = !0, e;
        }, mr = Array.prototype, _r = Object.create(mr);
        [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(t) {
            var e = mr[t];
            k(_r, t, function() {
                for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
                var o, i = e.apply(this, n), s = this.__ob__;
                switch (t) {
                  case "push":
                  case "unshift":
                    o = n;
                    break;

                  case "splice":
                    o = n.slice(2);
                }
                return o && s.observeArray(o), s.dep.notify(), i;
            });
        });
        var br = Object.getOwnPropertyNames(_r), Ar = !0, wr = function(t) {
            this.value = t, this.dep = new dr(), this.vmCount = 0, k(t, "__ob__", this), Array.isArray(t) ? (Hn ? t.push !== t.__proto__.push ? B(t, _r, br) : N(t, _r) : B(t, _r, br), 
            this.observeArray(t)) : this.walk(t);
        };
        wr.prototype.walk = function(t) {
            for (var e = Object.keys(t), n = 0; n < e.length; n++) D(t, e[n]);
        }, wr.prototype.observeArray = function(t) {
            for (var e = 0, n = t.length; e < n; e++) M(t[e]);
        };
        var Er = Fn.optionMergeStrategies;
        Er.el = Er.propsData = function(t, e, n, r) {
            return n || ir('option "' + r + '" can only be used during instance creation with the `new` keyword.'), 
            Sr(t, e);
        }, Er.data = function(t, e, n) {
            return n ? q(t, e, n) : e && "function" != typeof e ? (ir('The "data" option should be a function that returns a per-instance value in component definitions.', n), 
            t) : q(t, e);
        }, Ln.forEach(function(t) {
            Er[t] = H;
        }), Un.forEach(function(t) {
            Er[t + "s"] = Y;
        }), Er.watch = function(t, e, n, r) {
            if (t === Xn && (t = void 0), e === Xn && (e = void 0), !e) return Object.create(t || null);
            if (X(r, e, n), !t) return e;
            var o = {};
            b(o, t);
            for (var i in e) {
                var s = o[i], a = e[i];
                s && !Array.isArray(s) && (s = [ s ]), o[i] = s ? s.concat(a) : Array.isArray(a) ? a : [ a ];
            }
            return o;
        }, Er.props = Er.methods = Er.inject = Er.computed = function(t, e, n, r) {
            if (e && X(r, e, n), !t) return e;
            var o = Object.create(null);
            return b(o, t), e && b(o, e), o;
        }, Er.provide = q;
        var Or, Sr = function(t, e) {
            return void 0 === e ? t : e;
        }, Ir = /^(String|Number|Boolean|Function|Symbol)$/, kr = [], Pr = !1;
        if ("undefined" != typeof Promise && x(Promise)) {
            var xr = Promise.resolve();
            Or = function() {
                xr.then(vt), Qn && setTimeout(w);
            };
        } else if (Wn || "undefined" == typeof MutationObserver || !x(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Or = "undefined" != typeof setImmediate && x(setImmediate) ? function() {
            setImmediate(vt);
        } : function() {
            setTimeout(vt, 0);
        }; else {
            var Tr = 1, Cr = new MutationObserver(vt), $r = document.createTextNode(String(Tr));
            Cr.observe($r, {
                characterData: !0
            }), Or = function() {
                Tr = (Tr + 1) % 2, $r.data = String(Tr);
            };
        }
        var Rr, jr = y("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,require"), Nr = function(t, e) {
            ir('Property or method "' + e + '" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', t);
        }, Br = function(t, e) {
            ir('Property "' + e + '" must be accessed with "$data.' + e + '" because properties starting with "$" or "_" are not proxied in the Vue instance to prevent conflicts with Vue internals. See: https://vuejs.org/v2/api/#data', t);
        }, Mr = "undefined" != typeof Proxy && x(Proxy);
        if (Mr) {
            var Dr = y("stop,prevent,self,ctrl,shift,alt,meta,exact");
            Fn.keyCodes = new Proxy(Fn.keyCodes, {
                set: function(t, e, n) {
                    return Dr(e) ? (ir("Avoid overwriting built-in modifier in config.keyCodes: ." + e), 
                    !1) : (t[e] = n, !0);
                }
            });
        }
        var Ur = {
            has: function(t, e) {
                var n = e in t, r = jr(e) || "string" == typeof e && "_" === e.charAt(0) && !(e in t.$data);
                return n || r || (e in t.$data ? Br(t, e) : Nr(t, e)), n || !r;
            }
        }, Lr = {
            get: function(t, e) {
                return "string" != typeof e || e in t || (e in t.$data ? Br(t, e) : Nr(t, e)), t[e];
            }
        };
        Rr = function(t) {
            if (Mr) {
                var e = t.$options, n = e.render && e.render._withStripped ? Lr : Ur;
                t._renderProxy = new Proxy(t, n);
            } else t._renderProxy = t;
        };
        var Fr, Vr, qr = new er(), Hr = zn && window.performance;
        Hr && Hr.mark && Hr.measure && Hr.clearMarks && Hr.clearMeasures && (Fr = function(t) {
            return Hr.mark(t);
        }, Vr = function(t, e, n) {
            Hr.measure(t, e, n), Hr.clearMarks(e), Hr.clearMarks(n);
        });
        var zr = m(function(t) {
            var e = "&" === t.charAt(0), n = "~" === (t = e ? t.slice(1) : t).charAt(0), r = "!" === (t = n ? t.slice(1) : t).charAt(0);
            return t = r ? t.slice(1) : t, {
                name: t,
                once: n,
                capture: r,
                passive: e
            };
        });
        Qt(Xt.prototype);
        var Yr, Gr = {
            init: function(t, e) {
                if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
                    var n = t;
                    Gr.prepatch(n, n);
                } else (t.componentInstance = re(t, Xr)).$mount(e ? t.elm : void 0, e);
            },
            prepatch: function(t, e) {
                var n = e.componentOptions;
                Oe(e.componentInstance = t.componentInstance, n.propsData, n.listeners, e, n.children);
            },
            insert: function(t) {
                var e = t.context, n = t.componentInstance;
                n._isMounted || (Pe(n, "onServiceCreated"), Pe(n, "onServiceAttached"), n._isMounted = !0, 
                Pe(n, "mounted")), t.data.keepAlive && (e._isMounted ? $e(n) : Ie(n, !0));
            },
            destroy: function(t) {
                var e = t.componentInstance;
                e._isDestroyed || (t.data.keepAlive ? ke(e, !0) : e.$destroy());
            }
        }, Kr = Object.keys(Gr), Wr = 1, Jr = 2, Qr = null, Xr = null, Zr = !1, to = 100, eo = [], no = [], ro = {}, oo = {}, io = !1, so = !1, ao = 0, uo = 0, co = Date.now;
        if (zn && !Wn) {
            var fo = window.performance;
            fo && "function" == typeof fo.now && co() > document.createEvent("Event").timeStamp && (co = function() {
                return fo.now();
            });
        }
        var po = 0, ho = function(t, e, n, r, o) {
            this.vm = t, o && (t._watcher = this), t._watchers.push(this), r ? (this.deep = !!r.deep, 
            this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, 
            this.cb = n, this.id = ++po, this.active = !0, this.dirty = this.lazy, this.deps = [], 
            this.newDeps = [], this.depIds = new er(), this.newDepIds = new er(), this.expression = e.toString(), 
            "function" == typeof e ? this.getter = e : (this.getter = P(e), this.getter || (this.getter = w, 
            ir('Failed watching path: "' + e + '" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.', t))), 
            this.value = this.lazy ? void 0 : this.get();
        };
        ho.prototype.get = function() {
            T(this);
            var t, e = this.vm;
            try {
                t = this.getter.call(e, e);
            } catch (t) {
                if (!this.user) throw t;
                ht(t, e, 'getter for watcher "' + this.expression + '"');
            } finally {
                this.deep && mt(t), C(), this.cleanupDeps();
            }
            return t;
        }, ho.prototype.addDep = function(t) {
            var e = t.id;
            this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
        }, ho.prototype.cleanupDeps = function() {
            for (var t = this.deps.length; t--; ) {
                var e = this.deps[t];
                this.newDepIds.has(e.id) || e.removeSub(this);
            }
            var n = this.depIds;
            this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, 
            this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
        }, ho.prototype.update = function() {
            this.lazy ? this.dirty = !0 : this.sync ? this.run() : je(this);
        }, ho.prototype.run = function() {
            if (this.active) {
                var t = this.get();
                if (t !== this.value || a(t) || this.deep) {
                    var e = this.value;
                    if (this.value = t, this.user) try {
                        this.cb.call(this.vm, t, e);
                    } catch (t) {
                        ht(t, this.vm, 'callback for watcher "' + this.expression + '"');
                    } else this.cb.call(this.vm, t, e);
                }
            }
        }, ho.prototype.evaluate = function() {
            this.value = this.get(), this.dirty = !1;
        }, ho.prototype.depend = function() {
            for (var t = this.deps.length; t--; ) this.deps[t].depend();
        }, ho.prototype.teardown = function() {
            if (this.active) {
                this.vm._isBeingDestroyed || v(this.vm._watchers, this);
                for (var t = this.deps.length; t--; ) this.deps[t].removeSub(this);
                this.active = !1;
            }
        };
        var lo = {
            enumerable: !0,
            configurable: !0,
            get: w,
            set: w
        }, yo = {
            lazy: !0
        }, vo = 0;
        !function(t) {
            t.prototype._init = function(t) {
                var e = this;
                e._uid = vo++;
                var n, r;
                Fn.performance && Fr && (n = "vue-perf-start:" + e._uid, r = "vue-perf-end:" + e._uid, 
                Fr(n)), e._isVue = !0, t && t._isComponent ? Ge(e, t) : e.$options = Z(Ke(e.constructor), t || {}, e), 
                Rr(e), e._self = e, Ee(e), ge(e), pe(e), Pe(e, "beforeCreate"), !e._$fallback && Tt(e), 
                Be(e), !e._$fallback && xt(e), !e._$fallback && Pe(e, "created"), Fn.performance && Fr && (e._name = ur(e, !1), 
                Fr(r), Vr("vue " + e._name + " init", n, r)), e.$options.el && e.$mount(e.$options.el);
            };
        }(Je), function(t) {
            var e = {};
            e.get = function() {
                return this._data;
            };
            var n = {};
            n.get = function() {
                return this._props;
            }, e.set = function() {
                ir("Avoid replacing instance root $data. Use nested data properties instead.", this);
            }, n.set = function() {
                ir("$props is readonly.", this);
            }, Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", n), 
            t.prototype.$set = U, t.prototype.$delete = L, t.prototype.$watch = function(t, e, n) {
                var r = this;
                if (c(e)) return Ye(r, t, e, n);
                (n = n || {}).user = !0;
                var o = new ho(r, t, e, n);
                if (n.immediate) try {
                    e.call(r, o.value);
                } catch (t) {
                    ht(t, r, 'callback for immediate watcher "' + o.expression + '"');
                }
                return function() {
                    o.teardown();
                };
            };
        }(Je), function(t) {
            var e = /^hook:/;
            t.prototype.$on = function(t, n) {
                var r = this;
                if (Array.isArray(t)) for (var o = 0, i = t.length; o < i; o++) r.$on(t[o], n); else (r._events[t] || (r._events[t] = [])).push(n), 
                e.test(t) && (r._hasHookEvent = !0);
                return r;
            }, t.prototype.$once = function(t, e) {
                function n() {
                    r.$off(t, n), e.apply(r, arguments);
                }
                var r = this;
                return n.fn = e, r.$on(t, n), r;
            }, t.prototype.$off = function(t, e) {
                var n = this;
                if (!arguments.length) return n._events = Object.create(null), n;
                if (Array.isArray(t)) {
                    for (var r = 0, o = t.length; r < o; r++) n.$off(t[r], e);
                    return n;
                }
                var i = n._events[t];
                if (!i) return n;
                if (!e) return n._events[t] = null, n;
                for (var s, a = i.length; a--; ) if ((s = i[a]) === e || s.fn === e) {
                    i.splice(a, 1);
                    break;
                }
                return n;
            }, t.prototype.$emit = function(t) {
                var e = this, n = t.toLowerCase();
                n !== t && e._events[n] && sr('Event "' + n + '" is emitted in component ' + ur(e) + ' but the handler is registered for "' + t + '". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "' + Nn(t) + '" instead of "' + t + '".');
                var r = e._events[t];
                if (r) {
                    r = r.length > 1 ? _(r) : r;
                    for (var o = _(arguments, 1), i = 'event handler for "' + t + '"', s = 0, a = r.length; s < a; s++) lt(r[s], e, o, e, i);
                }
                return e;
            };
        }(Je), function(t) {
            t.prototype._update = function(t, e) {
                var n = this, r = n.$el, o = n._vnode, i = we(n);
                n._vnode = t, n.$el = o ? n.__patch__(o, t) : n.__patch__(n.$el, t, e, !1), i(), 
                r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
            }, t.prototype.$forceUpdate = function() {
                var t = this;
                t._watcher && t._watcher.update();
            }, t.prototype.$destroy = function() {
                var t = this;
                if (!t._isBeingDestroyed) {
                    Pe(t, "beforeDestroy"), t._isBeingDestroyed = !0;
                    var e = t.$parent;
                    !e || e._isBeingDestroyed || t.$options.abstract || v(e.$children, t), t._watcher && t._watcher.teardown();
                    for (var n = t._watchers.length; n--; ) t._watchers[n].teardown();
                    t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), 
                    Pe(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null);
                }
            };
        }(Je), function(t) {
            Qt(t.prototype), t.prototype.$nextTick = function(t) {
                return gt(t, this);
            }, t.prototype._render = function() {
                var t = this, e = t.$options, n = e.render, r = e._parentVnode;
                r && (t.$scopedSlots = jt(r.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = r;
                var o;
                try {
                    Qr = t, o = n.call(t._renderProxy, t.$createElement);
                } catch (e) {
                    if (ht(e, t, "render"), t.$options.renderError) try {
                        o = t.$options.renderError.call(t._renderProxy, t.$createElement, e);
                    } catch (e) {
                        ht(e, t, "renderError"), o = t._vnode;
                    } else o = t._vnode;
                } finally {
                    Qr = null;
                }
                return Array.isArray(o) && 1 === o.length && (o = o[0]), o instanceof yr || (Array.isArray(o) && ir("Multiple root nodes returned from render function. Render function should return a single root node.", t), 
                o = gr()), o.parent = r, o;
            };
        }(Je);
        var go = [ String, RegExp, Array ], mo = {
            KeepAlive: {
                name: "keep-alive",
                abstract: !0,
                props: {
                    include: go,
                    exclude: go,
                    max: [ String, Number ]
                },
                created: function() {
                    this.cache = Object.create(null), this.keys = [];
                },
                destroyed: function() {
                    for (var t in this.cache) an(this.cache, t, this.keys);
                },
                mounted: function() {
                    var t = this;
                    this.$watch("include", function(e) {
                        sn(t, function(t) {
                            return on(e, t);
                        });
                    }), this.$watch("exclude", function(e) {
                        sn(t, function(t) {
                            return !on(e, t);
                        });
                    });
                },
                render: function() {
                    var t = this.$slots.default, e = ve(t), n = e && e.componentOptions;
                    if (n) {
                        var r = rn(n), o = this, i = o.include, s = o.exclude;
                        if (i && (!r || !on(i, r)) || s && r && on(s, r)) return e;
                        var a = this, u = a.cache, c = a.keys, f = null == e.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : e.key;
                        u[f] ? (e.componentInstance = u[f].componentInstance, v(c, f), c.push(f)) : (u[f] = e, 
                        c.push(f), this.max && c.length > parseInt(this.max) && an(u, c[0], c, this._vnode)), 
                        e.data.keepAlive = !0;
                    }
                    return e || t && t[0];
                }
            }
        };
        !function(t) {
            var e = {};
            e.get = function() {
                return Fn;
            }, e.set = function() {
                ir("Do not replace the Vue.config object, set individual fields instead.");
            }, Object.defineProperty(t, "config", e), t.util = {
                warn: ir,
                extend: b,
                mergeOptions: Z,
                defineReactive: D
            }, t.set = U, t.delete = L, t.nextTick = gt, t.observable = function(t) {
                return M(t), t;
            }, t.options = Object.create(null), Un.forEach(function(e) {
                t.options[e + "s"] = Object.create(null);
            }), t.options._base = t, b(t.options.components, mo), Qe(t), Xe(t), Ze(t), nn(t);
        }(Je), Object.defineProperty(Je.prototype, "$isServer", {
            get: nr
        }), Object.defineProperty(Je.prototype, "$ssrContext", {
            get: function() {
                return this.$vnode && this.$vnode.ssrContext;
            }
        }), Object.defineProperty(Je, "FunctionalRenderContext", {
            value: Xt
        }), Je.version = "2.6.11";
        var _o = "[object Array]", bo = "[object Object]", Ao = m(function(t) {
            var e = {}, n = /;(?![^(]*\))/g, r = /:(.+)/;
            return t.split(n).forEach(function(t) {
                if (t) {
                    var n = t.split(r);
                    n.length > 1 && (e[n[0].trim()] = n[1].trim());
                }
            }), e;
        }), wo = [ "createSelectorQuery", "createIntersectionObserver", "selectAllComponents", "selectComponent" ], Eo = [ "onLaunch", "onShow", "onHide", "onUniNViewMessage", "onPageNotFound", "onThemeChange", "onError", "onUnhandledRejection", "onInit", "onLoad", "onReady", "onUnload", "onPullDownRefresh", "onReachBottom", "onTabItemTap", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onResize", "onPageScroll", "onNavigationBarButtonTap", "onBackPress", "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputClicked", "onPageShow", "onPageHide", "onPageResize" ];
        Je.prototype.__patch__ = function(t, e) {
            var n = this;
            if (null !== e && ("page" === this.mpType || "component" === this.mpType)) {
                var r = this.$scope, o = Object.create(null);
                try {
                    o = vn(this);
                } catch (t) {
                    console.error(t);
                }
                o.__webviewId__ = r.data.__webviewId__;
                var i = Object.create(null);
                Object.keys(o).forEach(function(t) {
                    i[t] = r.data[t];
                });
                var s = !1 === this.$shouldDiffData ? o : un(o, i);
                Object.keys(s).length ? (Object({
                    NODE_ENV: "development",
                    VUE_APP_NAME: "answers_uniapp",
                    VUE_APP_PLATFORM: "mp-weixin",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG && console.log("[" + +new Date() + "][" + (r.is || r.route) + "][" + this._uid + "]差量更新", JSON.stringify(s)), 
                this.__next_tick_pending = !0, r.setData(s, function() {
                    n.__next_tick_pending = !1, ln(n);
                })) : ln(this);
            }
        }, Je.prototype.$mount = function(t, e) {
            return mn(this, t, e);
        }, function(t) {
            var e = t.extend;
            t.extend = function(t) {
                var n = (t = t || {}).methods;
                return n && Object.keys(n).forEach(function(e) {
                    -1 !== Eo.indexOf(e) && (t[e] = n[e], delete n[e]);
                }), e.call(this, t);
            };
            var n = t.config.optionMergeStrategies, r = n.created;
            Eo.forEach(function(t) {
                n[t] = r;
            }), t.prototype.__lifecycle_hooks__ = Eo;
        }(Je), function(t) {
            t.config.errorHandler = function(e, n, r) {
                t.util.warn("Error in " + r + ': "' + e.toString() + '"', n), console.error(e);
                var o = getApp();
                o && o.onError && o.onError(e);
            };
            var e = t.prototype.$emit;
            t.prototype.$emit = function(t) {
                return this.$scope && t && this.$scope.triggerEvent(t, {
                    __args__: _(arguments, 1)
                }), e.apply(this, arguments);
            }, t.prototype.$nextTick = function(t) {
                return yn(this, t);
            }, wo.forEach(function(e) {
                t.prototype[e] = function(t) {
                    return this.$scope && this.$scope[e] ? this.$scope[e](t) : "undefined" != typeof my ? "createSelectorQuery" === e ? my.createSelectorQuery(t) : "createIntersectionObserver" === e ? my.createIntersectionObserver(t) : void 0 : void 0;
                };
            }), t.prototype.__init_provide = xt, t.prototype.__init_injections = Tt, t.prototype.__call_hook = function(t, e) {
                var n = this;
                T();
                var r, o = n.$options[t], i = t + " hook";
                if (o) for (var s = 0, a = o.length; s < a; s++) r = lt(o[s], n, e ? [ e ] : null, n, i);
                return n._hasHookEvent && n.$emit("hook:" + t, e), C(), r;
            }, t.prototype.__set_model = function(t, e, n, r) {
                Array.isArray(r) && (-1 !== r.indexOf("trim") && (n = n.trim()), -1 !== r.indexOf("number") && (n = this._n(n))), 
                t || (t = this), t[e] = n;
            }, t.prototype.__set_sync = function(t, e, n) {
                t || (t = this), t[e] = n;
            }, t.prototype.__get_orig = function(t) {
                return c(t) ? t.$orig || t : t;
            }, t.prototype.__get_value = function(t, e) {
                return Sn(e || this, t);
            }, t.prototype.__get_class = function(t, e) {
                return _n(e, t);
            }, t.prototype.__get_style = function(t, e) {
                if (!t && !e) return "";
                var n = On(t), r = e ? b(e, n) : n;
                return Object.keys(r).map(function(t) {
                    return Nn(t) + ":" + r[t];
                }).join(";");
            }, t.prototype.__map = function(t, e) {
                var n, r, o, i, s;
                if (Array.isArray(t)) {
                    for (n = new Array(t.length), r = 0, o = t.length; r < o; r++) n[r] = e(t[r], r);
                    return n;
                }
                if (a(t)) {
                    for (i = Object.keys(t), n = Object.create(null), r = 0, o = i.length; r < o; r++) n[s = i[r]] = e(t[s], s, r);
                    return n;
                }
                if ("number" == typeof t) {
                    for (n = new Array(t), r = 0, o = t; r < o; r++) n[r] = e(r, r);
                    return n;
                }
                return [];
            };
        }(Je), e.default = Je;
    }.call(this, n(3));
}, function(t, e) {
    var n;
    n = function() {
        return this;
    }();
    try {
        n = n || new Function("return this")();
    } catch (t) {
        "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) && (n = window);
    }
    t.exports = n;
}, function(t, e) {}, , , , function(t, e, n) {
    (function(e) {
        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function r(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(t, r.key, r);
            }
        }
        function o(t, e, n) {
            return e && r(t.prototype, e), n && r(t, n), t;
        }
        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && s(t, e);
        }
        function s(t, e) {
            return (s = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t;
            })(t, e);
        }
        function a(t) {
            var e = f();
            return function() {
                var n, r = p(t);
                if (e) {
                    var o = p(this).constructor;
                    n = Reflect.construct(r, arguments, o);
                } else n = r.apply(this, arguments);
                return u(this, n);
            };
        }
        function u(t, e) {
            return !e || "object" !== (void 0 === e ? "undefined" : _typeof(e)) && "function" != typeof e ? c(t) : e;
        }
        function c(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
        }
        function f() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (t) {
                return !1;
            }
        }
        function p(t) {
            return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
        }
        !function(e, n) {
            t.exports = n();
        }(window, function() {
            return function(t) {
                function e(r) {
                    if (n[r]) return n[r].exports;
                    var o = n[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
                }
                var n = {};
                return e.m = t, e.c = n, e.d = function(t, n, r) {
                    e.o(t, n) || Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: r
                    });
                }, e.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                }, e.t = function(t, n) {
                    if (1 & n && (t = e(t)), 8 & n) return t;
                    if (4 & n && "object" == (void 0 === t ? "undefined" : _typeof(t)) && t && t.__esModule) return t;
                    var r = Object.create(null);
                    if (e.r(r), Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & n && "string" != typeof t) for (var o in t) e.d(r, o, function(e) {
                        return t[e];
                    }.bind(null, o));
                    return r;
                }, e.n = function(t) {
                    var n = t && t.__esModule ? function() {
                        return t.default;
                    } : function() {
                        return t;
                    };
                    return e.d(n, "a", n), n;
                }, e.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }, e.p = "", e(e.s = 18);
            }([ function(t, e) {
                t.exports = function() {
                    return function() {};
                };
            }, function(t, e, n) {
                function r(t) {
                    if (t) return function(t) {
                        for (var e in r.prototype) t[e] = r.prototype[e];
                        return t;
                    }(t);
                }
                t.exports = r, r.prototype.on = r.prototype.addEventListener = function(t, e) {
                    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), 
                    this;
                }, r.prototype.once = function(t, e) {
                    function n() {
                        this.off(t, n), e.apply(this, arguments);
                    }
                    return n.fn = e, this.on(t, n), this;
                }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t, e) {
                    if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, 
                    this;
                    var n, r = this._callbacks["$" + t];
                    if (!r) return this;
                    if (1 == arguments.length) return delete this._callbacks["$" + t], this;
                    for (var o = 0; o < r.length; o++) if ((n = r[o]) === e || n.fn === e) {
                        r.splice(o, 1);
                        break;
                    }
                    return this;
                }, r.prototype.emit = function(t) {
                    this._callbacks = this._callbacks || {};
                    var e = [].slice.call(arguments, 1), n = this._callbacks["$" + t];
                    if (n) for (var r = 0, o = (n = n.slice(0)).length; r < o; ++r) n[r].apply(this, e);
                    return this;
                }, r.prototype.listeners = function(t) {
                    return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
                }, r.prototype.hasListeners = function(t) {
                    return !!this.listeners(t).length;
                };
            }, function(t, e, n) {
                function r(t, e, n) {
                    for (var r = new Array(t.length), o = u(t.length, n), i = 0; i < t.length; i++) !function(t, n, o) {
                        e(n, function(e, n) {
                            r[t] = n, o(e, r);
                        });
                    }(i, t[i], o);
                }
                var o, i = n(28), s = n(13), a = n(30), u = n(31), c = n(32);
                "undefined" != typeof ArrayBuffer && (o = n(33));
                var f = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent), p = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent), h = f || p;
                e.protocol = 3;
                var l = e.packets = {
                    open: 0,
                    close: 1,
                    ping: 2,
                    pong: 3,
                    message: 4,
                    upgrade: 5,
                    noop: 6
                }, d = i(l), y = {
                    type: "error",
                    data: "parser error"
                }, v = n(34);
                e.encodePacket = function(t, n, r, o) {
                    "function" == typeof n && (o = n, n = !1), "function" == typeof r && (o = r, r = null);
                    var i = void 0 === t.data ? void 0 : t.data.buffer || t.data;
                    if ("undefined" != typeof ArrayBuffer && i instanceof ArrayBuffer) return function(t, n, r) {
                        if (!n) return e.encodeBase64Packet(t, r);
                        var o = t.data, i = new Uint8Array(o), s = new Uint8Array(1 + o.byteLength);
                        s[0] = l[t.type];
                        for (var a = 0; a < i.length; a++) s[a + 1] = i[a];
                        return r(s.buffer);
                    }(t, n, o);
                    if (void 0 !== v && i instanceof v) return function(t, n, r) {
                        if (!n) return e.encodeBase64Packet(t, r);
                        if (h) return function(t, n, r) {
                            if (!n) return e.encodeBase64Packet(t, r);
                            var o = new FileReader();
                            return o.onload = function() {
                                e.encodePacket({
                                    type: t.type,
                                    data: o.result
                                }, n, !0, r);
                            }, o.readAsArrayBuffer(t.data);
                        }(t, n, r);
                        var o = new Uint8Array(1);
                        return o[0] = l[t.type], r(new v([ o.buffer, t.data ]));
                    }(t, n, o);
                    if (i && i.base64) return function(t, n) {
                        return o("b" + e.packets[t.type] + t.data.data);
                    }(t);
                    var s = l[t.type];
                    return void 0 !== t.data && (s += r ? c.encode(String(t.data), {
                        strict: !1
                    }) : String(t.data)), o("" + s);
                }, e.encodeBase64Packet = function(t, n) {
                    var r, o = "b" + e.packets[t.type];
                    if (void 0 !== v && t.data instanceof v) {
                        var i = new FileReader();
                        return i.onload = function() {
                            var t = i.result.split(",")[1];
                            n(o + t);
                        }, i.readAsDataURL(t.data);
                    }
                    try {
                        r = String.fromCharCode.apply(null, new Uint8Array(t.data));
                    } catch (e) {
                        for (var s = new Uint8Array(t.data), a = new Array(s.length), u = 0; u < s.length; u++) a[u] = s[u];
                        r = String.fromCharCode.apply(null, a);
                    }
                    return o += btoa(r), n(o);
                }, e.decodePacket = function(t, n, r) {
                    if (void 0 === t) return y;
                    if ("string" == typeof t) {
                        if ("b" === t.charAt(0)) return e.decodeBase64Packet(t.substr(1), n);
                        if (r && !1 === (t = function(t) {
                            try {
                                t = c.decode(t, {
                                    strict: !1
                                });
                            } catch (t) {
                                return !1;
                            }
                            return t;
                        }(t))) return y;
                        var o = t.charAt(0);
                        return Number(o) == o && d[o] ? t.length > 1 ? {
                            type: d[o],
                            data: t.substring(1)
                        } : {
                            type: d[o]
                        } : y;
                    }
                    o = new Uint8Array(t)[0];
                    var i = a(t, 1);
                    return v && "blob" === n && (i = new v([ i ])), {
                        type: d[o],
                        data: i
                    };
                }, e.decodeBase64Packet = function(t, e) {
                    var n = d[t.charAt(0)];
                    if (!o) return {
                        type: n,
                        data: {
                            base64: !0,
                            data: t.substr(1)
                        }
                    };
                    var r = o.decode(t.substr(1));
                    return "blob" === e && v && (r = new v([ r ])), {
                        type: n,
                        data: r
                    };
                }, e.encodePayload = function(t, n, o) {
                    "function" == typeof n && (o = n, n = null);
                    var i = s(t);
                    return n && i ? v && !h ? e.encodePayloadAsBlob(t, o) : e.encodePayloadAsArrayBuffer(t, o) : t.length ? void r(t, function(t, r) {
                        e.encodePacket(t, !!i && n, !1, function(t) {
                            r(null, function(t) {
                                return t.length + ":" + t;
                            }(t));
                        });
                    }, function(t, e) {
                        return o(e.join(""));
                    }) : o("0:");
                }, e.decodePayload = function(t, n, r) {
                    if ("string" != typeof t) return e.decodePayloadAsBinary(t, n, r);
                    var o;
                    if ("function" == typeof n && (r = n, n = null), "" === t) return r(y, 0, 1);
                    for (var i, s, a = "", u = 0, c = t.length; u < c; u++) {
                        var f = t.charAt(u);
                        if (":" === f) {
                            if ("" === a || a != (i = Number(a))) return r(y, 0, 1);
                            if (a != (s = t.substr(u + 1, i)).length) return r(y, 0, 1);
                            if (s.length) {
                                if (o = e.decodePacket(s, n, !1), y.type === o.type && y.data === o.data) return r(y, 0, 1);
                                if (!1 === r(o, u + i, c)) return;
                            }
                            u += i, a = "";
                        } else a += f;
                    }
                    return "" !== a ? r(y, 0, 1) : void 0;
                }, e.encodePayloadAsArrayBuffer = function(t, n) {
                    if (!t.length) return n(new ArrayBuffer(0));
                    r(t, function(t, n) {
                        e.encodePacket(t, !0, !0, function(t) {
                            return n(null, t);
                        });
                    }, function(t, e) {
                        var r = e.reduce(function(t, e) {
                            var n;
                            return t + (n = "string" == typeof e ? e.length : e.byteLength).toString().length + n + 2;
                        }, 0), o = new Uint8Array(r), i = 0;
                        return e.forEach(function(t) {
                            var e = "string" == typeof t, n = t;
                            if (e) {
                                for (var r = new Uint8Array(t.length), s = 0; s < t.length; s++) r[s] = t.charCodeAt(s);
                                n = r.buffer;
                            }
                            o[i++] = e ? 0 : 1;
                            var a = n.byteLength.toString();
                            for (s = 0; s < a.length; s++) o[i++] = parseInt(a[s]);
                            for (o[i++] = 255, r = new Uint8Array(n), s = 0; s < r.length; s++) o[i++] = r[s];
                        }), n(o.buffer);
                    });
                }, e.encodePayloadAsBlob = function(t, n) {
                    r(t, function(t, n) {
                        e.encodePacket(t, !0, !0, function(t) {
                            var e = new Uint8Array(1);
                            if (e[0] = 1, "string" == typeof t) {
                                for (var r = new Uint8Array(t.length), o = 0; o < t.length; o++) r[o] = t.charCodeAt(o);
                                t = r.buffer, e[0] = 0;
                            }
                            var i = (t instanceof ArrayBuffer ? t.byteLength : t.size).toString(), s = new Uint8Array(i.length + 1);
                            for (o = 0; o < i.length; o++) s[o] = parseInt(i[o]);
                            if (s[i.length] = 255, v) {
                                var a = new v([ e.buffer, s.buffer, t ]);
                                n(null, a);
                            }
                        });
                    }, function(t, e) {
                        return n(new v(e));
                    });
                }, e.decodePayloadAsBinary = function(t, n, r) {
                    "function" == typeof n && (r = n, n = null);
                    for (var o = t, i = []; o.byteLength > 0; ) {
                        for (var s = new Uint8Array(o), u = 0 === s[0], c = "", f = 1; 255 !== s[f]; f++) {
                            if (c.length > 310) return r(y, 0, 1);
                            c += s[f];
                        }
                        o = a(o, 2 + c.length), c = parseInt(c);
                        var p = a(o, 0, c);
                        if (u) try {
                            p = String.fromCharCode.apply(null, new Uint8Array(p));
                        } catch (t) {
                            var h = new Uint8Array(p);
                            for (p = "", f = 0; f < h.length; f++) p += String.fromCharCode(h[f]);
                        }
                        i.push(p), o = a(o, c);
                    }
                    var l = i.length;
                    i.forEach(function(t, o) {
                        r(e.decodePacket(t, n, !0), o, l);
                    });
                };
            }, function(t, e, n) {
                function r() {}
                function o(t) {
                    var n = "" + t.type;
                    if (e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type || (n += t.attachments + "-"), 
                    t.nsp && "/" !== t.nsp && (n += t.nsp + ","), null != t.id && (n += t.id), null != t.data) {
                        var r = function(t) {
                            try {
                                return JSON.stringify(t);
                            } catch (t) {
                                return !1;
                            }
                        }(t.data);
                        if (!1 === r) return l;
                        n += r;
                    }
                    return u("encoded %j as %s", t, n), n;
                }
                function i() {
                    this.reconstructor = null;
                }
                function s(t) {
                    this.reconPack = t, this.buffers = [];
                }
                function a(t) {
                    return {
                        type: e.ERROR,
                        data: "parser error: " + t
                    };
                }
                var u = n(0)("socket.io-parser"), c = n(1), f = n(21), p = n(7), h = n(8);
                e.protocol = 4, e.types = [ "CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK" ], 
                e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, 
                e.BINARY_ACK = 6, e.Encoder = r, e.Decoder = i;
                var l = e.ERROR + '"encode error"';
                r.prototype.encode = function(t, n) {
                    u("encoding packet %j", t), e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type ? function(t, e) {
                        f.removeBlobs(t, function(t) {
                            var n = f.deconstructPacket(t), r = o(n.packet), i = n.buffers;
                            i.unshift(r), e(i);
                        });
                    }(t, n) : n([ o(t) ]);
                }, c(i.prototype), i.prototype.add = function(t) {
                    var n;
                    if ("string" == typeof t) n = function(t) {
                        var n = 0, r = {
                            type: Number(t.charAt(0))
                        };
                        if (null == e.types[r.type]) return a("unknown packet type " + r.type);
                        if (e.BINARY_EVENT === r.type || e.BINARY_ACK === r.type) {
                            for (var o = ""; "-" !== t.charAt(++n) && (o += t.charAt(n), n != t.length); ) ;
                            if (o != Number(o) || "-" !== t.charAt(n)) throw new Error("Illegal attachments");
                            r.attachments = Number(o);
                        }
                        if ("/" === t.charAt(n + 1)) for (r.nsp = ""; ++n && "," !== (s = t.charAt(n)) && (r.nsp += s, 
                        n !== t.length); ) ; else r.nsp = "/";
                        var i = t.charAt(n + 1);
                        if ("" !== i && Number(i) == i) {
                            for (r.id = ""; ++n; ) {
                                var s;
                                if (null == (s = t.charAt(n)) || Number(s) != s) {
                                    --n;
                                    break;
                                }
                                if (r.id += t.charAt(n), n === t.length) break;
                            }
                            r.id = Number(r.id);
                        }
                        if (t.charAt(++n)) {
                            var c = function(t) {
                                try {
                                    return JSON.parse(t);
                                } catch (t) {
                                    return !1;
                                }
                            }(t.substr(n));
                            if (!1 === c || r.type !== e.ERROR && !p(c)) return a("invalid payload");
                            r.data = c;
                        }
                        return u("decoded %s as %j", t, r), r;
                    }(t), e.BINARY_EVENT === n.type || e.BINARY_ACK === n.type ? (this.reconstructor = new s(n), 
                    0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n); else {
                        if (!h(t) && !t.base64) throw new Error("Unknown type: " + t);
                        if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                        (n = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, this.emit("decoded", n));
                    }
                }, i.prototype.destroy = function() {
                    this.reconstructor && this.reconstructor.finishedReconstruction();
                }, s.prototype.takeBinaryData = function(t) {
                    if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
                        var e = f.reconstructPacket(this.reconPack, this.buffers);
                        return this.finishedReconstruction(), e;
                    }
                    return null;
                }, s.prototype.finishedReconstruction = function() {
                    this.reconPack = null, this.buffers = [];
                };
            }, function(t, e) {
                var n;
                n = function() {
                    return this;
                }();
                try {
                    n = n || new Function("return this")();
                } catch (t) {
                    "object" == ("undefined" == typeof window ? "undefined" : _typeof(window)) && (n = window);
                }
                t.exports = n;
            }, function(t, e) {
                e.encode = function(t) {
                    var e = "";
                    for (var n in t) t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
                    return e;
                }, e.decode = function(t) {
                    for (var e = {}, n = t.split("&"), r = 0, o = n.length; r < o; r++) {
                        var i = n[r].split("=");
                        e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
                    }
                    return e;
                };
            }, function(t, e) {
                var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, r = [ "source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor" ];
                t.exports = function(t) {
                    var e = t, o = t.indexOf("["), i = t.indexOf("]");
                    -1 != o && -1 != i && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(i, t.length));
                    for (var s = n.exec(t || ""), a = {}, u = 14; u--; ) a[r[u]] = s[u] || "";
                    return -1 != o && -1 != i && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), 
                    a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), 
                    a.ipv6uri = !0), a;
                };
            }, function(t, e) {
                var n = {}.toString;
                t.exports = Array.isArray || function(t) {
                    return "[object Array]" == n.call(t);
                };
            }, function(t, e, n) {
                (function(e) {
                    t.exports = function(t) {
                        return n && e.isBuffer(t) || r && (t instanceof ArrayBuffer || o(t));
                    };
                    var n = "function" == typeof e && "function" == typeof e.isBuffer, r = "function" == typeof ArrayBuffer, o = function(t) {
                        return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer;
                    };
                }).call(this, n(9).Buffer);
            }, function(t, e, n) {
                (function(t) {
                    function r() {
                        return i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
                    }
                    function o(t, e) {
                        if (r() < e) throw new RangeError("Invalid typed array length");
                        return i.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = i.prototype : (null === t && (t = new i(e)), 
                        t.length = e), t;
                    }
                    function i(t, e, n) {
                        if (!(i.TYPED_ARRAY_SUPPORT || this instanceof i)) return new i(t, e, n);
                        if ("number" == typeof t) {
                            if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                            return u(this, t);
                        }
                        return s(this, t, e, n);
                    }
                    function s(t, e, n, r) {
                        if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, n, r) {
                            if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                            if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                            return e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r), 
                            i.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = i.prototype : t = c(t, e), t;
                        }(t, e, n, r) : "string" == typeof e ? function(t, e, n) {
                            if ("string" == typeof n && "" !== n || (n = "utf8"), !i.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                            var r = 0 | p(e, n), s = (t = o(t, r)).write(e, n);
                            return s !== r && (t = t.slice(0, s)), t;
                        }(t, e, n) : function(t, e) {
                            if (i.isBuffer(e)) {
                                var n = 0 | f(e.length);
                                return 0 === (t = o(t, n)).length ? t : (e.copy(t, 0, 0, n), t);
                            }
                            if (e) {
                                if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (r = e.length) != r ? o(t, 0) : c(t, e);
                                if ("Buffer" === e.type && F(e.data)) return c(t, e.data);
                            }
                            var r;
                            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
                        }(t, e);
                    }
                    function a(t) {
                        if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                        if (t < 0) throw new RangeError('"size" argument must not be negative');
                    }
                    function u(t, e) {
                        if (a(e), t = o(t, e < 0 ? 0 : 0 | f(e)), !i.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) t[n] = 0;
                        return t;
                    }
                    function c(t, e) {
                        var n = e.length < 0 ? 0 : 0 | f(e.length);
                        t = o(t, n);
                        for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
                        return t;
                    }
                    function f(t) {
                        if (t >= r()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r().toString(16) + " bytes");
                        return 0 | t;
                    }
                    function p(t, e) {
                        if (i.isBuffer(t)) return t.length;
                        if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                        "string" != typeof t && (t = "" + t);
                        var n = t.length;
                        if (0 === n) return 0;
                        for (var r = !1; ;) switch (e) {
                          case "ascii":
                          case "latin1":
                          case "binary":
                            return n;

                          case "utf8":
                          case "utf-8":
                          case void 0:
                            return B(t).length;

                          case "ucs2":
                          case "ucs-2":
                          case "utf16le":
                          case "utf-16le":
                            return 2 * n;

                          case "hex":
                            return n >>> 1;

                          case "base64":
                            return M(t).length;

                          default:
                            if (r) return B(t).length;
                            e = ("" + e).toLowerCase(), r = !0;
                        }
                    }
                    function h(t, e, n) {
                        var r = !1;
                        if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                        if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                        if ((n >>>= 0) <= (e >>>= 0)) return "";
                        for (t || (t = "utf8"); ;) switch (t) {
                          case "hex":
                            return I(this, e, n);

                          case "utf8":
                          case "utf-8":
                            return E(this, e, n);

                          case "ascii":
                            return O(this, e, n);

                          case "latin1":
                          case "binary":
                            return S(this, e, n);

                          case "base64":
                            return w(this, e, n);

                          case "ucs2":
                          case "ucs-2":
                          case "utf16le":
                          case "utf-16le":
                            return k(this, e, n);

                          default:
                            if (r) throw new TypeError("Unknown encoding: " + t);
                            t = (t + "").toLowerCase(), r = !0;
                        }
                    }
                    function l(t, e, n) {
                        var r = t[e];
                        t[e] = t[n], t[n] = r;
                    }
                    function d(t, e, n, r, o) {
                        if (0 === t.length) return -1;
                        if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), 
                        n = +n, isNaN(n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                            if (o) return -1;
                            n = t.length - 1;
                        } else if (n < 0) {
                            if (!o) return -1;
                            n = 0;
                        }
                        if ("string" == typeof e && (e = i.from(e, r)), i.isBuffer(e)) return 0 === e.length ? -1 : y(t, e, n, r, o);
                        if ("number" == typeof e) return e &= 255, i.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : y(t, [ e ], n, r, o);
                        throw new TypeError("val must be string, number or Buffer");
                    }
                    function y(t, e, n, r, o) {
                        function i(t, e) {
                            return 1 === a ? t[e] : t.readUInt16BE(e * a);
                        }
                        var s, a = 1, u = t.length, c = e.length;
                        if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                            if (t.length < 2 || e.length < 2) return -1;
                            a = 2, u /= 2, c /= 2, n /= 2;
                        }
                        if (o) {
                            var f = -1;
                            for (s = n; s < u; s++) if (i(t, s) === i(e, -1 === f ? 0 : s - f)) {
                                if (-1 === f && (f = s), s - f + 1 === c) return f * a;
                            } else -1 !== f && (s -= s - f), f = -1;
                        } else for (n + c > u && (n = u - c), s = n; s >= 0; s--) {
                            for (var p = !0, h = 0; h < c; h++) if (i(t, s + h) !== i(e, h)) {
                                p = !1;
                                break;
                            }
                            if (p) return s;
                        }
                        return -1;
                    }
                    function v(t, e, n, r) {
                        n = Number(n) || 0;
                        var o = t.length - n;
                        r ? (r = Number(r)) > o && (r = o) : r = o;
                        var i = e.length;
                        if (i % 2 != 0) throw new TypeError("Invalid hex string");
                        r > i / 2 && (r = i / 2);
                        for (var s = 0; s < r; ++s) {
                            var a = parseInt(e.substr(2 * s, 2), 16);
                            if (isNaN(a)) return s;
                            t[n + s] = a;
                        }
                        return s;
                    }
                    function g(t, e, n, r) {
                        return D(B(e, t.length - n), t, n, r);
                    }
                    function m(t, e, n, r) {
                        return D(function(t) {
                            for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                            return e;
                        }(e), t, n, r);
                    }
                    function _(t, e, n, r) {
                        return m(t, e, n, r);
                    }
                    function b(t, e, n, r) {
                        return D(M(e), t, n, r);
                    }
                    function A(t, e, n, r) {
                        return D(function(t, e) {
                            for (var n, r, o, i = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) r = (n = t.charCodeAt(s)) >> 8, 
                            o = n % 256, i.push(o), i.push(r);
                            return i;
                        }(e, t.length - n), t, n, r);
                    }
                    function w(t, e, n) {
                        return 0 === e && n === t.length ? U.fromByteArray(t) : U.fromByteArray(t.slice(e, n));
                    }
                    function E(t, e, n) {
                        n = Math.min(t.length, n);
                        for (var r = [], o = e; o < n; ) {
                            var i, s, a, u, c = t[o], f = null, p = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                            if (o + p <= n) switch (p) {
                              case 1:
                                c < 128 && (f = c);
                                break;

                              case 2:
                                128 == (192 & (i = t[o + 1])) && (u = (31 & c) << 6 | 63 & i) > 127 && (f = u);
                                break;

                              case 3:
                                i = t[o + 1], s = t[o + 2], 128 == (192 & i) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (f = u);
                                break;

                              case 4:
                                i = t[o + 1], s = t[o + 2], a = t[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (f = u);
                            }
                            null === f ? (f = 65533, p = 1) : f > 65535 && (f -= 65536, r.push(f >>> 10 & 1023 | 55296), 
                            f = 56320 | 1023 & f), r.push(f), o += p;
                        }
                        return function(t) {
                            var e = t.length;
                            if (e <= V) return String.fromCharCode.apply(String, t);
                            for (var n = "", r = 0; r < e; ) n += String.fromCharCode.apply(String, t.slice(r, r += V));
                            return n;
                        }(r);
                    }
                    function O(t, e, n) {
                        var r = "";
                        n = Math.min(t.length, n);
                        for (var o = e; o < n; ++o) r += String.fromCharCode(127 & t[o]);
                        return r;
                    }
                    function S(t, e, n) {
                        var r = "";
                        n = Math.min(t.length, n);
                        for (var o = e; o < n; ++o) r += String.fromCharCode(t[o]);
                        return r;
                    }
                    function I(t, e, n) {
                        var r = t.length;
                        (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
                        for (var o = "", i = e; i < n; ++i) o += N(t[i]);
                        return o;
                    }
                    function k(t, e, n) {
                        for (var r = t.slice(e, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
                        return o;
                    }
                    function P(t, e, n) {
                        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                        if (t + e > n) throw new RangeError("Trying to access beyond buffer length");
                    }
                    function x(t, e, n, r, o, s) {
                        if (!i.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                        if (e > o || e < s) throw new RangeError('"value" argument is out of bounds');
                        if (n + r > t.length) throw new RangeError("Index out of range");
                    }
                    function T(t, e, n, r) {
                        e < 0 && (e = 65535 + e + 1);
                        for (var o = 0, i = Math.min(t.length - n, 2); o < i; ++o) t[n + o] = (e & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o);
                    }
                    function C(t, e, n, r) {
                        e < 0 && (e = 4294967295 + e + 1);
                        for (var o = 0, i = Math.min(t.length - n, 4); o < i; ++o) t[n + o] = e >>> 8 * (r ? o : 3 - o) & 255;
                    }
                    function $(t, e, n, r, o, i) {
                        if (n + r > t.length) throw new RangeError("Index out of range");
                        if (n < 0) throw new RangeError("Index out of range");
                    }
                    function R(t, e, n, r, o) {
                        return o || $(t, 0, n, 4), L.write(t, e, n, r, 23, 4), n + 4;
                    }
                    function j(t, e, n, r, o) {
                        return o || $(t, 0, n, 8), L.write(t, e, n, r, 52, 8), n + 8;
                    }
                    function N(t) {
                        return t < 16 ? "0" + t.toString(16) : t.toString(16);
                    }
                    function B(t, e) {
                        var n;
                        e = e || 1 / 0;
                        for (var r = t.length, o = null, i = [], s = 0; s < r; ++s) {
                            if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
                                if (!o) {
                                    if (n > 56319) {
                                        (e -= 3) > -1 && i.push(239, 191, 189);
                                        continue;
                                    }
                                    if (s + 1 === r) {
                                        (e -= 3) > -1 && i.push(239, 191, 189);
                                        continue;
                                    }
                                    o = n;
                                    continue;
                                }
                                if (n < 56320) {
                                    (e -= 3) > -1 && i.push(239, 191, 189), o = n;
                                    continue;
                                }
                                n = 65536 + (o - 55296 << 10 | n - 56320);
                            } else o && (e -= 3) > -1 && i.push(239, 191, 189);
                            if (o = null, n < 128) {
                                if ((e -= 1) < 0) break;
                                i.push(n);
                            } else if (n < 2048) {
                                if ((e -= 2) < 0) break;
                                i.push(n >> 6 | 192, 63 & n | 128);
                            } else if (n < 65536) {
                                if ((e -= 3) < 0) break;
                                i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
                            } else {
                                if (!(n < 1114112)) throw new Error("Invalid code point");
                                if ((e -= 4) < 0) break;
                                i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
                            }
                        }
                        return i;
                    }
                    function M(t) {
                        return U.toByteArray(function(t) {
                            if ((t = function(t) {
                                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
                            }(t).replace(q, "")).length < 2) return "";
                            for (;t.length % 4 != 0; ) t += "=";
                            return t;
                        }(t));
                    }
                    function D(t, e, n, r) {
                        for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o];
                        return o;
                    }
                    var U = n(22), L = n(23), F = n(24);
                    e.Buffer = i, e.SlowBuffer = function(t) {
                        return +t != t && (t = 0), i.alloc(+t);
                    }, e.INSPECT_MAX_BYTES = 50, i.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
                        try {
                            var t = new Uint8Array(1);
                            return t.__proto__ = {
                                __proto__: Uint8Array.prototype,
                                foo: function() {
                                    return 42;
                                }
                            }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
                        } catch (t) {
                            return !1;
                        }
                    }(), e.kMaxLength = r(), i.poolSize = 8192, i._augment = function(t) {
                        return t.__proto__ = i.prototype, t;
                    }, i.from = function(t, e, n) {
                        return s(null, t, e, n);
                    }, i.TYPED_ARRAY_SUPPORT && (i.prototype.__proto__ = Uint8Array.prototype, i.__proto__ = Uint8Array, 
                    "undefined" != typeof Symbol && Symbol.species && i[Symbol.species] === i && Object.defineProperty(i, Symbol.species, {
                        value: null,
                        configurable: !0
                    })), i.alloc = function(t, e, n) {
                        return function(t, e, n, r) {
                            return a(e), e <= 0 ? o(t, e) : void 0 !== n ? "string" == typeof r ? o(t, e).fill(n, r) : o(t, e).fill(n) : o(t, e);
                        }(null, t, e, n);
                    }, i.allocUnsafe = function(t) {
                        return u(null, t);
                    }, i.allocUnsafeSlow = function(t) {
                        return u(null, t);
                    }, i.isBuffer = function(t) {
                        return !(null == t || !t._isBuffer);
                    }, i.compare = function(t, e) {
                        if (!i.isBuffer(t) || !i.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                        if (t === e) return 0;
                        for (var n = t.length, r = e.length, o = 0, s = Math.min(n, r); o < s; ++o) if (t[o] !== e[o]) {
                            n = t[o], r = e[o];
                            break;
                        }
                        return n < r ? -1 : r < n ? 1 : 0;
                    }, i.isEncoding = function(t) {
                        switch (String(t).toLowerCase()) {
                          case "hex":
                          case "utf8":
                          case "utf-8":
                          case "ascii":
                          case "latin1":
                          case "binary":
                          case "base64":
                          case "ucs2":
                          case "ucs-2":
                          case "utf16le":
                          case "utf-16le":
                            return !0;

                          default:
                            return !1;
                        }
                    }, i.concat = function(t, e) {
                        if (!F(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === t.length) return i.alloc(0);
                        var n;
                        if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
                        var r = i.allocUnsafe(e), o = 0;
                        for (n = 0; n < t.length; ++n) {
                            var s = t[n];
                            if (!i.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                            s.copy(r, o), o += s.length;
                        }
                        return r;
                    }, i.byteLength = p, i.prototype._isBuffer = !0, i.prototype.swap16 = function() {
                        var t = this.length;
                        if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                        for (var e = 0; e < t; e += 2) l(this, e, e + 1);
                        return this;
                    }, i.prototype.swap32 = function() {
                        var t = this.length;
                        if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                        for (var e = 0; e < t; e += 4) l(this, e, e + 3), l(this, e + 1, e + 2);
                        return this;
                    }, i.prototype.swap64 = function() {
                        var t = this.length;
                        if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                        for (var e = 0; e < t; e += 8) l(this, e, e + 7), l(this, e + 1, e + 6), l(this, e + 2, e + 5), 
                        l(this, e + 3, e + 4);
                        return this;
                    }, i.prototype.toString = function() {
                        var t = 0 | this.length;
                        return 0 === t ? "" : 0 === arguments.length ? E(this, 0, t) : h.apply(this, arguments);
                    }, i.prototype.equals = function(t) {
                        if (!i.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                        return this === t || 0 === i.compare(this, t);
                    }, i.prototype.inspect = function() {
                        var t = "", n = e.INSPECT_MAX_BYTES;
                        return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), 
                        this.length > n && (t += " ... ")), "<Buffer " + t + ">";
                    }, i.prototype.compare = function(t, e, n, r, o) {
                        if (!i.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                        if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), 
                        void 0 === o && (o = this.length), e < 0 || n > t.length || r < 0 || o > this.length) throw new RangeError("out of range index");
                        if (r >= o && e >= n) return 0;
                        if (r >= o) return -1;
                        if (e >= n) return 1;
                        if (this === t) return 0;
                        for (var s = (o >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (e >>>= 0), u = Math.min(s, a), c = this.slice(r, o), f = t.slice(e, n), p = 0; p < u; ++p) if (c[p] !== f[p]) {
                            s = c[p], a = f[p];
                            break;
                        }
                        return s < a ? -1 : a < s ? 1 : 0;
                    }, i.prototype.includes = function(t, e, n) {
                        return -1 !== this.indexOf(t, e, n);
                    }, i.prototype.indexOf = function(t, e, n) {
                        return d(this, t, e, n, !0);
                    }, i.prototype.lastIndexOf = function(t, e, n) {
                        return d(this, t, e, n, !1);
                    }, i.prototype.write = function(t, e, n, r) {
                        if (void 0 === e) r = "utf8", n = this.length, e = 0; else if (void 0 === n && "string" == typeof e) r = e, 
                        n = this.length, e = 0; else {
                            if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
                        }
                        var o = this.length - e;
                        if ((void 0 === n || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                        r || (r = "utf8");
                        for (var i = !1; ;) switch (r) {
                          case "hex":
                            return v(this, t, e, n);

                          case "utf8":
                          case "utf-8":
                            return g(this, t, e, n);

                          case "ascii":
                            return m(this, t, e, n);

                          case "latin1":
                          case "binary":
                            return _(this, t, e, n);

                          case "base64":
                            return b(this, t, e, n);

                          case "ucs2":
                          case "ucs-2":
                          case "utf16le":
                          case "utf-16le":
                            return A(this, t, e, n);

                          default:
                            if (i) throw new TypeError("Unknown encoding: " + r);
                            r = ("" + r).toLowerCase(), i = !0;
                        }
                    }, i.prototype.toJSON = function() {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(this._arr || this, 0)
                        };
                    };
                    var V = 4096;
                    i.prototype.slice = function(t, e) {
                        var n, r = this.length;
                        if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), 
                        e < t && (e = t), i.TYPED_ARRAY_SUPPORT) (n = this.subarray(t, e)).__proto__ = i.prototype; else {
                            var o = e - t;
                            n = new i(o, void 0);
                            for (var s = 0; s < o; ++s) n[s] = this[s + t];
                        }
                        return n;
                    }, i.prototype.readUIntLE = function(t, e, n) {
                        t |= 0, e |= 0, n || P(t, e, this.length);
                        for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256); ) r += this[t + i] * o;
                        return r;
                    }, i.prototype.readUIntBE = function(t, e, n) {
                        t |= 0, e |= 0, n || P(t, e, this.length);
                        for (var r = this[t + --e], o = 1; e > 0 && (o *= 256); ) r += this[t + --e] * o;
                        return r;
                    }, i.prototype.readUInt8 = function(t, e) {
                        return e || P(t, 1, this.length), this[t];
                    }, i.prototype.readUInt16LE = function(t, e) {
                        return e || P(t, 2, this.length), this[t] | this[t + 1] << 8;
                    }, i.prototype.readUInt16BE = function(t, e) {
                        return e || P(t, 2, this.length), this[t] << 8 | this[t + 1];
                    }, i.prototype.readUInt32LE = function(t, e) {
                        return e || P(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
                    }, i.prototype.readUInt32BE = function(t, e) {
                        return e || P(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
                    }, i.prototype.readIntLE = function(t, e, n) {
                        t |= 0, e |= 0, n || P(t, e, this.length);
                        for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256); ) r += this[t + i] * o;
                        return r >= (o *= 128) && (r -= Math.pow(2, 8 * e)), r;
                    }, i.prototype.readIntBE = function(t, e, n) {
                        t |= 0, e |= 0, n || P(t, e, this.length);
                        for (var r = e, o = 1, i = this[t + --r]; r > 0 && (o *= 256); ) i += this[t + --r] * o;
                        return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i;
                    }, i.prototype.readInt8 = function(t, e) {
                        return e || P(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
                    }, i.prototype.readInt16LE = function(t, e) {
                        e || P(t, 2, this.length);
                        var n = this[t] | this[t + 1] << 8;
                        return 32768 & n ? 4294901760 | n : n;
                    }, i.prototype.readInt16BE = function(t, e) {
                        e || P(t, 2, this.length);
                        var n = this[t + 1] | this[t] << 8;
                        return 32768 & n ? 4294901760 | n : n;
                    }, i.prototype.readInt32LE = function(t, e) {
                        return e || P(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
                    }, i.prototype.readInt32BE = function(t, e) {
                        return e || P(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
                    }, i.prototype.readFloatLE = function(t, e) {
                        return e || P(t, 4, this.length), L.read(this, t, !0, 23, 4);
                    }, i.prototype.readFloatBE = function(t, e) {
                        return e || P(t, 4, this.length), L.read(this, t, !1, 23, 4);
                    }, i.prototype.readDoubleLE = function(t, e) {
                        return e || P(t, 8, this.length), L.read(this, t, !0, 52, 8);
                    }, i.prototype.readDoubleBE = function(t, e) {
                        return e || P(t, 8, this.length), L.read(this, t, !1, 52, 8);
                    }, i.prototype.writeUIntLE = function(t, e, n, r) {
                        t = +t, e |= 0, n |= 0, r || x(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                        var o = 1, i = 0;
                        for (this[e] = 255 & t; ++i < n && (o *= 256); ) this[e + i] = t / o & 255;
                        return e + n;
                    }, i.prototype.writeUIntBE = function(t, e, n, r) {
                        t = +t, e |= 0, n |= 0, r || x(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                        var o = n - 1, i = 1;
                        for (this[e + o] = 255 & t; --o >= 0 && (i *= 256); ) this[e + o] = t / i & 255;
                        return e + n;
                    }, i.prototype.writeUInt8 = function(t, e, n) {
                        return t = +t, e |= 0, n || x(this, t, e, 1, 255, 0), i.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 
                        this[e] = 255 & t, e + 1;
                    }, i.prototype.writeUInt16LE = function(t, e, n) {
                        return t = +t, e |= 0, n || x(this, t, e, 2, 65535, 0), i.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, 
                        this[e + 1] = t >>> 8) : T(this, t, e, !0), e + 2;
                    }, i.prototype.writeUInt16BE = function(t, e, n) {
                        return t = +t, e |= 0, n || x(this, t, e, 2, 65535, 0), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, 
                        this[e + 1] = 255 & t) : T(this, t, e, !1), e + 2;
                    }, i.prototype.writeUInt32LE = function(t, e, n) {
                        return t = +t, e |= 0, n || x(this, t, e, 4, 4294967295, 0), i.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, 
                        this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : C(this, t, e, !0), 
                        e + 4;
                    }, i.prototype.writeUInt32BE = function(t, e, n) {
                        return t = +t, e |= 0, n || x(this, t, e, 4, 4294967295, 0), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, 
                        this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : C(this, t, e, !1), 
                        e + 4;
                    }, i.prototype.writeIntLE = function(t, e, n, r) {
                        if (t = +t, e |= 0, !r) {
                            var o = Math.pow(2, 8 * n - 1);
                            x(this, t, e, n, o - 1, -o);
                        }
                        var i = 0, s = 1, a = 0;
                        for (this[e] = 255 & t; ++i < n && (s *= 256); ) t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1), 
                        this[e + i] = (t / s >> 0) - a & 255;
                        return e + n;
                    }, i.prototype.writeIntBE = function(t, e, n, r) {
                        if (t = +t, e |= 0, !r) {
                            var o = Math.pow(2, 8 * n - 1);
                            x(this, t, e, n, o - 1, -o);
                        }
                        var i = n - 1, s = 1, a = 0;
                        for (this[e + i] = 255 & t; --i >= 0 && (s *= 256); ) t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1), 
                        this[e + i] = (t / s >> 0) - a & 255;
                        return e + n;
                    }, i.prototype.writeInt8 = function(t, e, n) {
                        return t = +t, e |= 0, n || x(this, t, e, 1, 127, -128), i.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 
                        t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
                    }, i.prototype.writeInt16LE = function(t, e, n) {
                        return t = +t, e |= 0, n || x(this, t, e, 2, 32767, -32768), i.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, 
                        this[e + 1] = t >>> 8) : T(this, t, e, !0), e + 2;
                    }, i.prototype.writeInt16BE = function(t, e, n) {
                        return t = +t, e |= 0, n || x(this, t, e, 2, 32767, -32768), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, 
                        this[e + 1] = 255 & t) : T(this, t, e, !1), e + 2;
                    }, i.prototype.writeInt32LE = function(t, e, n) {
                        return t = +t, e |= 0, n || x(this, t, e, 4, 2147483647, -2147483648), i.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, 
                        this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : C(this, t, e, !0), 
                        e + 4;
                    }, i.prototype.writeInt32BE = function(t, e, n) {
                        return t = +t, e |= 0, n || x(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), 
                        i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, 
                        this[e + 3] = 255 & t) : C(this, t, e, !1), e + 4;
                    }, i.prototype.writeFloatLE = function(t, e, n) {
                        return R(this, t, e, !0, n);
                    }, i.prototype.writeFloatBE = function(t, e, n) {
                        return R(this, t, e, !1, n);
                    }, i.prototype.writeDoubleLE = function(t, e, n) {
                        return j(this, t, e, !0, n);
                    }, i.prototype.writeDoubleBE = function(t, e, n) {
                        return j(this, t, e, !1, n);
                    }, i.prototype.copy = function(t, e, n, r) {
                        if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), 
                        e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
                        if (0 === t.length || 0 === this.length) return 0;
                        if (e < 0) throw new RangeError("targetStart out of bounds");
                        if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                        if (r < 0) throw new RangeError("sourceEnd out of bounds");
                        r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                        var o, s = r - n;
                        if (this === t && n < e && e < r) for (o = s - 1; o >= 0; --o) t[o + e] = this[o + n]; else if (s < 1e3 || !i.TYPED_ARRAY_SUPPORT) for (o = 0; o < s; ++o) t[o + e] = this[o + n]; else Uint8Array.prototype.set.call(t, this.subarray(n, n + s), e);
                        return s;
                    }, i.prototype.fill = function(t, e, n, r) {
                        if ("string" == typeof t) {
                            if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, 
                            n = this.length), 1 === t.length) {
                                var o = t.charCodeAt(0);
                                o < 256 && (t = o);
                            }
                            if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                            if ("string" == typeof r && !i.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
                        } else "number" == typeof t && (t &= 255);
                        if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
                        if (n <= e) return this;
                        var s;
                        if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t) for (s = e; s < n; ++s) this[s] = t; else {
                            var a = i.isBuffer(t) ? t : B(new i(t, r).toString()), u = a.length;
                            for (s = 0; s < n - e; ++s) this[s + e] = a[s % u];
                        }
                        return this;
                    };
                    var q = /[^+\/0-9A-Za-z-_]/g;
                }).call(this, n(4));
            }, function(t, e, n) {
                function r(t, e) {
                    if (!(this instanceof r)) return new r(t, e);
                    t && "object" == (void 0 === t ? "undefined" : _typeof(t)) && (e = t, t = void 0), 
                    (e = e || {}).path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, 
                    this.reconnection(!1 !== e.reconnection), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), 
                    this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), 
                    this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new h({
                        min: this.reconnectionDelay(),
                        max: this.reconnectionDelayMax(),
                        jitter: this.randomizationFactor()
                    }), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", 
                    this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
                    var n = e.parser || a;
                    this.encoder = new n.Encoder(), this.decoder = new n.Decoder(), this.autoConnect = !1 !== e.autoConnect, 
                    this.autoConnect && this.open();
                }
                var o = n(25), i = n(15), s = n(1), a = n(3), u = n(16), c = n(17), f = n(0)("socket.io-client:manager"), p = n(14), h = n(41), l = Object.prototype.hasOwnProperty;
                t.exports = r, r.prototype.emitAll = function() {
                    for (var t in this.emit.apply(this, arguments), this.nsps) l.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments);
                }, r.prototype.updateSocketIds = function() {
                    for (var t in this.nsps) l.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t));
                }, r.prototype.generateId = function(t) {
                    return ("/" === t ? "" : t + "#") + this.engine.id;
                }, s(r.prototype), r.prototype.reconnection = function(t) {
                    return arguments.length ? (this._reconnection = !!t, this) : this._reconnection;
                }, r.prototype.reconnectionAttempts = function(t) {
                    return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts;
                }, r.prototype.reconnectionDelay = function(t) {
                    return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), 
                    this) : this._reconnectionDelay;
                }, r.prototype.randomizationFactor = function(t) {
                    return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), 
                    this) : this._randomizationFactor;
                }, r.prototype.reconnectionDelayMax = function(t) {
                    return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), 
                    this) : this._reconnectionDelayMax;
                }, r.prototype.timeout = function(t) {
                    return arguments.length ? (this._timeout = t, this) : this._timeout;
                }, r.prototype.maybeReconnectOnOpen = function() {
                    !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
                }, r.prototype.open = r.prototype.connect = function(t, e) {
                    if (f("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
                    f("opening %s", this.uri), this.engine = o(this.uri, this.opts);
                    var n = this.engine, r = this;
                    this.readyState = "opening", this.skipReconnect = !1;
                    var i = u(n, "open", function() {
                        r.onopen(), t && t();
                    }), s = u(n, "error", function(e) {
                        if (f("connect_error"), r.cleanup(), r.readyState = "closed", r.emitAll("connect_error", e), 
                        t) {
                            var n = new Error("Connection error");
                            n.data = e, t(n);
                        } else r.maybeReconnectOnOpen();
                    });
                    if (!1 !== this._timeout) {
                        var a = this._timeout;
                        f("connect attempt will timeout after %d", a);
                        var c = setTimeout(function() {
                            f("connect attempt timed out after %d", a), i.destroy(), n.close(), n.emit("error", "timeout"), 
                            r.emitAll("connect_timeout", a);
                        }, a);
                        this.subs.push({
                            destroy: function() {
                                clearTimeout(c);
                            }
                        });
                    }
                    return this.subs.push(i), this.subs.push(s), this;
                }, r.prototype.onopen = function() {
                    f("open"), this.cleanup(), this.readyState = "open", this.emit("open");
                    var t = this.engine;
                    this.subs.push(u(t, "data", c(this, "ondata"))), this.subs.push(u(t, "ping", c(this, "onping"))), 
                    this.subs.push(u(t, "pong", c(this, "onpong"))), this.subs.push(u(t, "error", c(this, "onerror"))), 
                    this.subs.push(u(t, "close", c(this, "onclose"))), this.subs.push(u(this.decoder, "decoded", c(this, "ondecoded")));
                }, r.prototype.onping = function() {
                    this.lastPing = new Date(), this.emitAll("ping");
                }, r.prototype.onpong = function() {
                    this.emitAll("pong", new Date() - this.lastPing);
                }, r.prototype.ondata = function(t) {
                    this.decoder.add(t);
                }, r.prototype.ondecoded = function(t) {
                    this.emit("packet", t);
                }, r.prototype.onerror = function(t) {
                    f("error", t), this.emitAll("error", t);
                }, r.prototype.socket = function(t, e) {
                    function n() {
                        ~p(o.connecting, r) || o.connecting.push(r);
                    }
                    var r = this.nsps[t];
                    if (!r) {
                        r = new i(this, t, e), this.nsps[t] = r;
                        var o = this;
                        r.on("connecting", n), r.on("connect", function() {
                            r.id = o.generateId(t);
                        }), this.autoConnect && n();
                    }
                    return r;
                }, r.prototype.destroy = function(t) {
                    var e = p(this.connecting, t);
                    ~e && this.connecting.splice(e, 1), this.connecting.length || this.close();
                }, r.prototype.packet = function(t) {
                    f("writing packet %j", t);
                    var e = this;
                    t.query && 0 === t.type && (t.nsp += "?" + t.query), e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, 
                    this.encoder.encode(t, function(n) {
                        for (var r = 0; r < n.length; r++) e.engine.write(n[r], t.options);
                        e.encoding = !1, e.processPacketQueue();
                    }));
                }, r.prototype.processPacketQueue = function() {
                    if (this.packetBuffer.length > 0 && !this.encoding) {
                        var t = this.packetBuffer.shift();
                        this.packet(t);
                    }
                }, r.prototype.cleanup = function() {
                    f("cleanup");
                    for (var t = this.subs.length, e = 0; e < t; e++) this.subs.shift().destroy();
                    this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy();
                }, r.prototype.close = r.prototype.disconnect = function() {
                    f("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), 
                    this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close();
                }, r.prototype.onclose = function(t) {
                    f("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", 
                    this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect();
                }, r.prototype.reconnect = function() {
                    if (this.reconnecting || this.skipReconnect) return this;
                    var t = this;
                    if (this.backoff.attempts >= this._reconnectionAttempts) f("reconnect failed"), 
                    this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1; else {
                        var e = this.backoff.duration();
                        f("will wait %dms before reconnect attempt", e), this.reconnecting = !0;
                        var n = setTimeout(function() {
                            t.skipReconnect || (f("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), 
                            t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open(function(e) {
                                e ? (f("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (f("reconnect success"), 
                                t.onreconnect());
                            }));
                        }, e);
                        this.subs.push({
                            destroy: function() {
                                clearTimeout(n);
                            }
                        });
                    }
                }, r.prototype.onreconnect = function() {
                    var t = this.backoff.attempts;
                    this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t);
                };
            }, function(t, e, n) {
                var r = n(27);
                e.websocket = r;
            }, function(t, e, n) {
                function r(t) {
                    this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, 
                    this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, 
                    this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, 
                    this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, 
                    this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, 
                    this.forceNode = t.forceNode, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress;
                }
                var o = n(2), i = n(1);
                t.exports = r, i(r.prototype), r.prototype.onError = function(t, e) {
                    var n = new Error(t);
                    return n.type = "TransportError", n.description = e, this.emit("error", n), this;
                }, r.prototype.open = function() {
                    return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", 
                    this.doOpen()), this;
                }, r.prototype.close = function() {
                    return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), 
                    this.onClose()), this;
                }, r.prototype.send = function(t) {
                    if ("open" !== this.readyState) throw new Error("Transport not open");
                    this.write(t);
                }, r.prototype.onOpen = function() {
                    this.readyState = "open", this.writable = !0, this.emit("open");
                }, r.prototype.onData = function(t) {
                    var e = o.decodePacket(t, this.socket.binaryType);
                    this.onPacket(e);
                }, r.prototype.onPacket = function(t) {
                    this.emit("packet", t);
                }, r.prototype.onClose = function() {
                    this.readyState = "closed", this.emit("close");
                };
            }, function(t, e, n) {
                (function(e) {
                    var r = n(29), o = Object.prototype.toString, i = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === o.call(Blob), s = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === o.call(File);
                    t.exports = function t(n) {
                        if (!n || "object" != (void 0 === n ? "undefined" : _typeof(n))) return !1;
                        if (r(n)) {
                            for (var o = 0, a = n.length; o < a; o++) if (t(n[o])) return !0;
                            return !1;
                        }
                        if ("function" == typeof e && e.isBuffer && e.isBuffer(n) || "function" == typeof ArrayBuffer && n instanceof ArrayBuffer || i && n instanceof Blob || s && n instanceof File) return !0;
                        if (n.toJSON && "function" == typeof n.toJSON && 1 === arguments.length) return t(n.toJSON(), !0);
                        for (var u in n) if (Object.prototype.hasOwnProperty.call(n, u) && t(n[u])) return !0;
                        return !1;
                    };
                }).call(this, n(9).Buffer);
            }, function(t, e) {
                var n = [].indexOf;
                t.exports = function(t, e) {
                    if (n) return t.indexOf(e);
                    for (var r = 0; r < t.length; ++r) if (t[r] === e) return r;
                    return -1;
                };
            }, function(t, e, n) {
                function r(t, e, n) {
                    this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], 
                    this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, 
                    n && n.query && (this.query = n.query), this.io.autoConnect && this.open();
                }
                var o = n(3), i = n(1), s = n(40), a = n(16), u = n(17), c = n(0)("socket.io-client:socket"), f = n(5), p = n(13);
                t.exports = r;
                var h = {
                    connect: 1,
                    connect_error: 1,
                    connect_timeout: 1,
                    connecting: 1,
                    disconnect: 1,
                    error: 1,
                    reconnect: 1,
                    reconnect_attempt: 1,
                    reconnect_failed: 1,
                    reconnect_error: 1,
                    reconnecting: 1,
                    ping: 1,
                    pong: 1
                }, l = i.prototype.emit;
                i(r.prototype), r.prototype.subEvents = function() {
                    if (!this.subs) {
                        var t = this.io;
                        this.subs = [ a(t, "open", u(this, "onopen")), a(t, "packet", u(this, "onpacket")), a(t, "close", u(this, "onclose")) ];
                    }
                }, r.prototype.open = r.prototype.connect = function() {
                    return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), 
                    this.emit("connecting"), this);
                }, r.prototype.send = function() {
                    var t = s(arguments);
                    return t.unshift("message"), this.emit.apply(this, t), this;
                }, r.prototype.emit = function(t) {
                    if (h.hasOwnProperty(t)) return l.apply(this, arguments), this;
                    var e = s(arguments), n = {
                        type: (void 0 !== this.flags.binary ? this.flags.binary : p(e)) ? o.BINARY_EVENT : o.EVENT,
                        data: e,
                        options: {}
                    };
                    return n.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (c("emitting packet with ack id %d", this.ids), 
                    this.acks[this.ids] = e.pop(), n.id = this.ids++), this.connected ? this.packet(n) : this.sendBuffer.push(n), 
                    this.flags = {}, this;
                }, r.prototype.packet = function(t) {
                    t.nsp = this.nsp, this.io.packet(t);
                }, r.prototype.onopen = function() {
                    if (c("transport is open - connecting"), "/" !== this.nsp) if (this.query) {
                        var t = "object" == _typeof(this.query) ? f.encode(this.query) : this.query;
                        c("sending connect packet with query %s", t), this.packet({
                            type: o.CONNECT,
                            query: t
                        });
                    } else this.packet({
                        type: o.CONNECT
                    });
                }, r.prototype.onclose = function(t) {
                    c("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, 
                    this.emit("disconnect", t);
                }, r.prototype.onpacket = function(t) {
                    var e = t.nsp === this.nsp, n = t.type === o.ERROR && "/" === t.nsp;
                    if (e || n) switch (t.type) {
                      case o.CONNECT:
                        this.onconnect();
                        break;

                      case o.EVENT:
                      case o.BINARY_EVENT:
                        this.onevent(t);
                        break;

                      case o.ACK:
                      case o.BINARY_ACK:
                        this.onack(t);
                        break;

                      case o.DISCONNECT:
                        this.ondisconnect();
                        break;

                      case o.ERROR:
                        this.emit("error", t.data);
                    }
                }, r.prototype.onevent = function(t) {
                    var e = t.data || [];
                    c("emitting event %j", e), null != t.id && (c("attaching ack callback to event"), 
                    e.push(this.ack(t.id))), this.connected ? l.apply(this, e) : this.receiveBuffer.push(e);
                }, r.prototype.ack = function(t) {
                    var e = this, n = !1;
                    return function() {
                        if (!n) {
                            n = !0;
                            var r = s(arguments);
                            c("sending ack %j", r), e.packet({
                                type: p(r) ? o.BINARY_ACK : o.ACK,
                                id: t,
                                data: r
                            });
                        }
                    };
                }, r.prototype.onack = function(t) {
                    var e = this.acks[t.id];
                    "function" == typeof e ? (c("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), 
                    delete this.acks[t.id]) : c("bad ack %s", t.id);
                }, r.prototype.onconnect = function() {
                    this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered();
                }, r.prototype.emitBuffered = function() {
                    var t;
                    for (t = 0; t < this.receiveBuffer.length; t++) l.apply(this, this.receiveBuffer[t]);
                    for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) this.packet(this.sendBuffer[t]);
                    this.sendBuffer = [];
                }, r.prototype.ondisconnect = function() {
                    c("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect");
                }, r.prototype.destroy = function() {
                    if (this.subs) {
                        for (var t = 0; t < this.subs.length; t++) this.subs[t].destroy();
                        this.subs = null;
                    }
                    this.io.destroy(this);
                }, r.prototype.close = r.prototype.disconnect = function() {
                    return this.connected && (c("performing disconnect (%s)", this.nsp), this.packet({
                        type: o.DISCONNECT
                    })), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
                }, r.prototype.compress = function(t) {
                    return this.flags.compress = t, this;
                }, r.prototype.binary = function(t) {
                    return this.flags.binary = t, this;
                };
            }, function(t, e) {
                t.exports = function(t, e, n) {
                    return t.on(e, n), {
                        destroy: function() {
                            t.removeListener(e, n);
                        }
                    };
                };
            }, function(t, e) {
                var n = [].slice;
                t.exports = function(t, e) {
                    if ("string" == typeof e && (e = t[e]), "function" != typeof e) throw new Error("bind() requires a function");
                    var r = n.call(arguments, 2);
                    return function() {
                        return e.apply(t, r.concat(n.call(arguments)));
                    };
                };
            }, function(t, e, n) {
                t.exports = n(19);
            }, function(t, e, n) {
                function r(t, e) {
                    "object" == (void 0 === t ? "undefined" : _typeof(t)) && (e = t, t = void 0), e = e || {};
                    var n, r = o(t), i = r.source, c = r.id, f = r.path, p = u[c] && f in u[c].nsps;
                    return e.forceNew || e["force new connection"] || !1 === e.multiplex || p ? (a("ignoring socket cache for %s", i), 
                    n = s(i, e)) : (u[c] || (a("new io instance for %s", i), u[c] = s(i, e)), n = u[c]), 
                    r.query && !e.query && (e.query = r.query), n.socket(r.path, e);
                }
                var o = n(20), i = n(3), s = n(10), a = n(0)("socket.io-client");
                t.exports = e = r;
                var u = e.managers = {};
                e.protocol = i.protocol, e.connect = r, e.Manager = n(10), e.Socket = n(15);
            }, function(t, e, n) {
                var r = n(6), o = n(0)("socket.io-client:url");
                t.exports = function(t, e) {
                    var n = t;
                    e = e || "undefined" != typeof location && location, null == t && (t = e.protocol + "//" + e.host), 
                    "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t), 
                    /^(https?|wss?):\/\//.test(t) || (o("protocol-less url %s", t), t = void 0 !== e ? e.protocol + "//" + t : "https://" + t), 
                    o("parse %s", t), n = r(t)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), 
                    n.path = n.path || "/";
                    var i = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host;
                    return n.id = n.protocol + "://" + i + ":" + n.port, n.href = n.protocol + "://" + i + (e && e.port === n.port ? "" : ":" + n.port), 
                    n;
                };
            }, function(t, e, n) {
                var r = n(7), o = n(8), i = Object.prototype.toString, s = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === i.call(Blob), a = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === i.call(File);
                e.deconstructPacket = function(t) {
                    var e = [], n = t.data, i = t;
                    return i.data = function t(e, n) {
                        if (!e) return e;
                        if (o(e)) {
                            var i = {
                                _placeholder: !0,
                                num: n.length
                            };
                            return n.push(e), i;
                        }
                        if (r(e)) {
                            for (var s = new Array(e.length), a = 0; a < e.length; a++) s[a] = t(e[a], n);
                            return s;
                        }
                        if ("object" == (void 0 === e ? "undefined" : _typeof(e)) && !(e instanceof Date)) {
                            s = {};
                            for (var u in e) s[u] = t(e[u], n);
                            return s;
                        }
                        return e;
                    }(n, e), i.attachments = e.length, {
                        packet: i,
                        buffers: e
                    };
                }, e.reconstructPacket = function(t, e) {
                    return t.data = function t(e, n) {
                        if (!e) return e;
                        if (e && e._placeholder) return n[e.num];
                        if (r(e)) for (var o = 0; o < e.length; o++) e[o] = t(e[o], n); else if ("object" == (void 0 === e ? "undefined" : _typeof(e))) for (var i in e) e[i] = t(e[i], n);
                        return e;
                    }(t.data, e), t.attachments = void 0, t;
                }, e.removeBlobs = function(t, e) {
                    var n = 0, i = t;
                    !function t(u, c, f) {
                        if (!u) return u;
                        if (s && u instanceof Blob || a && u instanceof File) {
                            n++;
                            var p = new FileReader();
                            p.onload = function() {
                                f ? f[c] = this.result : i = this.result, --n || e(i);
                            }, p.readAsArrayBuffer(u);
                        } else if (r(u)) for (var h = 0; h < u.length; h++) t(u[h], h, u); else if ("object" == (void 0 === u ? "undefined" : _typeof(u)) && !o(u)) for (var l in u) t(u[l], l, u);
                    }(i), n || e(i);
                };
            }, function(t, e, n) {
                function r(t) {
                    var e = t.length;
                    if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                    var n = t.indexOf("=");
                    return -1 === n && (n = e), [ n, n === e ? 0 : 4 - n % 4 ];
                }
                function o(t, e, n) {
                    for (var r, o, s = [], a = e; a < n; a += 3) r = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), 
                    s.push(i[(o = r) >> 18 & 63] + i[o >> 12 & 63] + i[o >> 6 & 63] + i[63 & o]);
                    return s.join("");
                }
                e.byteLength = function(t) {
                    var e = r(t), n = e[0], o = e[1];
                    return 3 * (n + o) / 4 - o;
                }, e.toByteArray = function(t) {
                    var e, n, o = r(t), i = o[0], u = o[1], c = new a(function(t, e, n) {
                        return 3 * (i + n) / 4 - n;
                    }(0, 0, u)), f = 0, p = u > 0 ? i - 4 : i;
                    for (n = 0; n < p; n += 4) e = s[t.charCodeAt(n)] << 18 | s[t.charCodeAt(n + 1)] << 12 | s[t.charCodeAt(n + 2)] << 6 | s[t.charCodeAt(n + 3)], 
                    c[f++] = e >> 16 & 255, c[f++] = e >> 8 & 255, c[f++] = 255 & e;
                    return 2 === u && (e = s[t.charCodeAt(n)] << 2 | s[t.charCodeAt(n + 1)] >> 4, c[f++] = 255 & e), 
                    1 === u && (e = s[t.charCodeAt(n)] << 10 | s[t.charCodeAt(n + 1)] << 4 | s[t.charCodeAt(n + 2)] >> 2, 
                    c[f++] = e >> 8 & 255, c[f++] = 255 & e), c;
                }, e.fromByteArray = function(t) {
                    for (var e, n = t.length, r = n % 3, s = [], a = 0, u = n - r; a < u; a += 16383) s.push(o(t, a, a + 16383 > u ? u : a + 16383));
                    return 1 === r ? (e = t[n - 1], s.push(i[e >> 2] + i[e << 4 & 63] + "==")) : 2 === r && (e = (t[n - 2] << 8) + t[n - 1], 
                    s.push(i[e >> 10] + i[e >> 4 & 63] + i[e << 2 & 63] + "=")), s.join("");
                };
                for (var i = [], s = [], a = "undefined" != typeof Uint8Array ? Uint8Array : Array, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = 0, f = u.length; c < f; ++c) i[c] = u[c], 
                s[u.charCodeAt(c)] = c;
                s["-".charCodeAt(0)] = 62, s["_".charCodeAt(0)] = 63;
            }, function(t, e) {
                e.read = function(t, e, n, r, o) {
                    var i, s, a = 8 * o - r - 1, u = (1 << a) - 1, c = u >> 1, f = -7, p = n ? o - 1 : 0, h = n ? -1 : 1, l = t[e + p];
                    for (p += h, i = l & (1 << -f) - 1, l >>= -f, f += a; f > 0; i = 256 * i + t[e + p], 
                    p += h, f -= 8) ;
                    for (s = i & (1 << -f) - 1, i >>= -f, f += r; f > 0; s = 256 * s + t[e + p], p += h, 
                    f -= 8) ;
                    if (0 === i) i = 1 - c; else {
                        if (i === u) return s ? NaN : 1 / 0 * (l ? -1 : 1);
                        s += Math.pow(2, r), i -= c;
                    }
                    return (l ? -1 : 1) * s * Math.pow(2, i - r);
                }, e.write = function(t, e, n, r, o, i) {
                    var s, a, u, c = 8 * i - o - 1, f = (1 << c) - 1, p = f >> 1, h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, l = r ? 0 : i - 1, d = r ? 1 : -1, y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = f) : (s = Math.floor(Math.log(e) / Math.LN2), 
                    e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + p >= 1 ? h / u : h * Math.pow(2, 1 - p)) * u >= 2 && (s++, 
                    u /= 2), s + p >= f ? (a = 0, s = f) : s + p >= 1 ? (a = (e * u - 1) * Math.pow(2, o), 
                    s += p) : (a = e * Math.pow(2, p - 1) * Math.pow(2, o), s = 0)); o >= 8; t[n + l] = 255 & a, 
                    l += d, a /= 256, o -= 8) ;
                    for (s = s << o | a, c += o; c > 0; t[n + l] = 255 & s, l += d, s /= 256, c -= 8) ;
                    t[n + l - d] |= 128 * y;
                };
            }, function(t, e) {
                var n = {}.toString;
                t.exports = Array.isArray || function(t) {
                    return "[object Array]" == n.call(t);
                };
            }, function(t, e, n) {
                t.exports = n(26), t.exports.parser = n(2);
            }, function(t, e, n) {
                (function(e) {
                    function r(t, n) {
                        if (!(this instanceof r)) return new r(t, n);
                        n = n || {}, t && "object" == (void 0 === t ? "undefined" : _typeof(t)) && (n = t, 
                        t = null), t ? (t = c(t), n.hostname = t.host, n.secure = "https" === t.protocol || "wss" === t.protocol, 
                        n.port = t.port, t.query && (n.query = t.query)) : n.host && (n.hostname = c(n.host).host), 
                        this.secure = null != n.secure ? n.secure : e.location && "https:" === location.protocol, 
                        n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.agent = n.agent || !1, 
                        this.hostname = n.hostname || (e.location ? location.hostname : "localhost"), this.port = n.port || (e.location && location.port ? location.port : this.secure ? 443 : 80), 
                        this.query = n.query || {}, "string" == typeof this.query && (this.query = f.decode(this.query)), 
                        this.upgrade = !1 !== n.upgrade, this.path = (n.path || "/engine.io").replace(/\/$/, "") + "/", 
                        this.forceJSONP = !!n.forceJSONP, this.jsonp = !1 !== n.jsonp, this.forceBase64 = !!n.forceBase64, 
                        this.enablesXDR = !!n.enablesXDR, this.timestampParam = n.timestampParam || "t", 
                        this.timestampRequests = n.timestampRequests, this.transports = n.transports || [ "websocket" ], 
                        this.transportOptions = n.transportOptions || {}, this.readyState = "", this.writeBuffer = [], 
                        this.prevBufferLen = 0, this.policyPort = n.policyPort || 843, this.rememberUpgrade = n.rememberUpgrade || !1, 
                        this.binaryType = null, this.onlyBinaryUpgrades = n.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== n.perMessageDeflate && (n.perMessageDeflate || {}), 
                        !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), 
                        this.pfx = n.pfx || null, this.key = n.key || null, this.passphrase = n.passphrase || null, 
                        this.cert = n.cert || null, this.ca = n.ca || null, this.ciphers = n.ciphers || null, 
                        this.rejectUnauthorized = void 0 === n.rejectUnauthorized || n.rejectUnauthorized, 
                        this.forceNode = !!n.forceNode;
                        var o = "object" == (void 0 === e ? "undefined" : _typeof(e)) && e;
                        o.global === o && (n.extraHeaders && Object.keys(n.extraHeaders).length > 0 && (this.extraHeaders = n.extraHeaders), 
                        n.localAddress && (this.localAddress = n.localAddress)), this.id = null, this.upgrades = null, 
                        this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, 
                        this.pingTimeoutTimer = null, this.open();
                    }
                    var o = n(11), i = n(1), s = n(0)("engine.io-client:socket"), a = n(14), u = n(2), c = n(6), f = n(5);
                    t.exports = r, r.priorWebsocketSuccess = !1, i(r.prototype), r.protocol = u.protocol, 
                    r.Socket = r, r.Transport = n(12), r.transports = n(11), r.parser = n(2), r.prototype.createTransport = function(t) {
                        s('creating transport "%s"', t);
                        var e = function(t) {
                            var e = {};
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                            return e;
                        }(this.query);
                        e.EIO = u.protocol, e.transport = t;
                        var n = this.transportOptions[t] || {};
                        this.id && (e.sid = this.id);
                        var r = new o[t]({
                            query: e,
                            socket: this,
                            agent: n.agent || this.agent,
                            hostname: n.hostname || this.hostname,
                            port: n.port || this.port,
                            secure: n.secure || this.secure,
                            path: n.path || this.path,
                            forceJSONP: n.forceJSONP || this.forceJSONP,
                            jsonp: n.jsonp || this.jsonp,
                            forceBase64: n.forceBase64 || this.forceBase64,
                            enablesXDR: n.enablesXDR || this.enablesXDR,
                            timestampRequests: n.timestampRequests || this.timestampRequests,
                            timestampParam: n.timestampParam || this.timestampParam,
                            policyPort: n.policyPort || this.policyPort,
                            pfx: n.pfx || this.pfx,
                            key: n.key || this.key,
                            passphrase: n.passphrase || this.passphrase,
                            cert: n.cert || this.cert,
                            ca: n.ca || this.ca,
                            ciphers: n.ciphers || this.ciphers,
                            rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
                            perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
                            extraHeaders: n.extraHeaders || this.extraHeaders,
                            forceNode: n.forceNode || this.forceNode,
                            localAddress: n.localAddress || this.localAddress,
                            requestTimeout: n.requestTimeout || this.requestTimeout,
                            protocols: n.protocols || void 0
                        });
                        return s("transport: ", r), r;
                    }, r.prototype.open = function() {
                        var t;
                        if (this.rememberUpgrade && r.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket"; else {
                            if (0 === this.transports.length) {
                                var e = this;
                                return void setTimeout(function() {
                                    e.emit("error", "No transports available");
                                }, 0);
                            }
                            t = this.transports[0];
                        }
                        this.readyState = "opening";
                        try {
                            t = this.createTransport(t);
                        } catch (t) {
                            return this.transports.shift(), void this.open();
                        }
                        t.open(), this.setTransport(t);
                    }, r.prototype.setTransport = function(t) {
                        s("setting transport %s", t.name);
                        var e = this;
                        this.transport && (s("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), 
                        this.transport = t, t.on("drain", function() {
                            e.onDrain();
                        }).on("packet", function(t) {
                            e.onPacket(t);
                        }).on("error", function(t) {
                            e.onError(t);
                        }).on("close", function() {
                            e.onClose("transport close");
                        });
                    }, r.prototype.probe = function(t) {
                        function e() {
                            if (h.onlyBinaryUpgrades) {
                                var e = !this.supportsBinary && h.transport.supportsBinary;
                                p = p || e;
                            }
                            p || (s('probe transport "%s" opened', t), f.send([ {
                                type: "ping",
                                data: "probe"
                            } ]), f.once("packet", function(e) {
                                if (!p) if ("pong" === e.type && "probe" === e.data) {
                                    if (s('probe transport "%s" pong', t), h.upgrading = !0, h.emit("upgrading", f), 
                                    !f) return;
                                    r.priorWebsocketSuccess = "websocket" === f.name, s('pausing current transport "%s"', h.transport.name), 
                                    h.transport.pause(function() {
                                        p || "closed" !== h.readyState && (s("changing transport and sending upgrade packet"), 
                                        c(), h.setTransport(f), f.send([ {
                                            type: "upgrade"
                                        } ]), h.emit("upgrade", f), f = null, h.upgrading = !1, h.flush());
                                    });
                                } else {
                                    s('probe transport "%s" failed', t);
                                    var n = new Error("probe error");
                                    n.transport = f.name, h.emit("upgradeError", n);
                                }
                            }));
                        }
                        function n() {
                            p || (p = !0, c(), f.close(), f = null);
                        }
                        function o(e) {
                            var r = new Error("probe error: " + e);
                            r.transport = f.name, n(), s('probe transport "%s" failed because of error: %s', t, e), 
                            h.emit("upgradeError", r);
                        }
                        function i() {
                            o("transport closed");
                        }
                        function a() {
                            o("socket closed");
                        }
                        function u(t) {
                            f && t.name !== f.name && (s('"%s" works - aborting "%s"', t.name, f.name), n());
                        }
                        function c() {
                            f.removeListener("open", e), f.removeListener("error", o), f.removeListener("close", i), 
                            h.removeListener("close", a), h.removeListener("upgrading", u);
                        }
                        s('probing transport "%s"', t);
                        var f = this.createTransport(t, {
                            probe: 1
                        }), p = !1, h = this;
                        r.priorWebsocketSuccess = !1, f.once("open", e), f.once("error", o), f.once("close", i), 
                        this.once("close", a), this.once("upgrading", u), f.open();
                    }, r.prototype.onOpen = function() {
                        if (s("socket open"), this.readyState = "open", r.priorWebsocketSuccess = "websocket" === this.transport.name, 
                        this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
                            s("starting upgrade probes");
                            for (var t = 0, e = this.upgrades.length; t < e; t++) this.probe(this.upgrades[t]);
                        }
                    }, r.prototype.onPacket = function(t) {
                        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (s('socket receive: type "%s", data "%s"', t.type, t.data), 
                        this.emit("packet", t), this.emit("heartbeat"), t.type) {
                          case "open":
                            this.onHandshake(JSON.parse(t.data));
                            break;

                          case "pong":
                            this.setPing(), this.emit("pong");
                            break;

                          case "error":
                            var e = new Error("server error");
                            e.code = t.data, this.onError(e);
                            break;

                          case "message":
                            this.emit("data", t.data), this.emit("message", t.data);
                        } else s('packet received with socket readyState "%s"', this.readyState);
                    }, r.prototype.onHandshake = function(t) {
                        this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), 
                        this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), 
                        "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), 
                        this.on("heartbeat", this.onHeartbeat));
                    }, r.prototype.onHeartbeat = function(t) {
                        clearTimeout(this.pingTimeoutTimer);
                        var e = this;
                        e.pingTimeoutTimer = setTimeout(function() {
                            "closed" !== e.readyState && e.onClose("ping timeout");
                        }, t || e.pingInterval + e.pingTimeout);
                    }, r.prototype.setPing = function() {
                        var t = this;
                        clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout(function() {
                            s("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), 
                            t.onHeartbeat(t.pingTimeout);
                        }, t.pingInterval);
                    }, r.prototype.ping = function() {
                        var t = this;
                        this.sendPacket("ping", function() {
                            t.emit("ping");
                        });
                    }, r.prototype.onDrain = function() {
                        this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
                    }, r.prototype.flush = function() {
                        "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (s("flushing %d packets in socket", this.writeBuffer.length), 
                        this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, 
                        this.emit("flush"));
                    }, r.prototype.write = r.prototype.send = function(t, e, n) {
                        return this.sendPacket("message", t, e, n), this;
                    }, r.prototype.sendPacket = function(t, e, n, r) {
                        if ("function" == typeof e && (r = e, e = void 0), "function" == typeof n && (r = n, 
                        n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
                            (n = n || {}).compress = !1 !== n.compress;
                            var o = {
                                type: t,
                                data: e,
                                options: n
                            };
                            this.emit("packetCreate", o), this.writeBuffer.push(o), r && this.once("flush", r), 
                            this.flush();
                        }
                    }, r.prototype.close = function() {
                        function t() {
                            r.onClose("forced close"), s("socket closing - telling transport to close"), r.transport.close();
                        }
                        function e() {
                            r.removeListener("upgrade", e), r.removeListener("upgradeError", e), t();
                        }
                        function n() {
                            r.once("upgrade", e), r.once("upgradeError", e);
                        }
                        if ("opening" === this.readyState || "open" === this.readyState) {
                            this.readyState = "closing";
                            var r = this;
                            this.writeBuffer.length ? this.once("drain", function() {
                                this.upgrading ? n() : t();
                            }) : this.upgrading ? n() : t();
                        }
                        return this;
                    }, r.prototype.onError = function(t) {
                        s("socket error %j", t), r.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t);
                    }, r.prototype.onClose = function(t, e) {
                        "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (s('socket close with reason: "%s"', t), 
                        clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), 
                        this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", 
                        this.id = null, this.emit("close", t, e), this.writeBuffer = [], this.prevBufferLen = 0);
                    }, r.prototype.filterUpgrades = function(t) {
                        for (var e = [], n = 0, r = t.length; n < r; n++) ~a(this.transports, t[n]) && e.push(t[n]);
                        return e;
                    };
                }).call(this, n(4));
            }, function(t, e, n) {
                (function(e) {
                    function r(t) {
                        t && t.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, 
                        this.usingBrowserWebSocket = p && !t.forceNode, this.protocols = t.protocols, this.usingBrowserWebSocket || (h = o), 
                        i.call(this, t);
                    }
                    var o, i = n(12), s = n(2), a = n(5), u = n(35), c = n(36), f = n(0)("engine.io-client:websocket"), p = e.WebSocket || e.MozWebSocket;
                    if ("undefined" == typeof window) try {
                        o = n(37);
                    } catch (t) {
                        f("require error: ", t);
                    }
                    var h = p;
                    h || "undefined" != typeof window || (h = o), t.exports = r, u(r, i), r.prototype.name = "websocket", 
                    r.prototype.supportsBinary = !0, r.prototype.doOpen = function() {
                        if (f("wesocket do open: ", this.protocols), this.check()) {
                            var t = this.uri(), e = this.protocols, n = {
                                agent: this.agent,
                                perMessageDeflate: this.perMessageDeflate
                            };
                            n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, 
                            n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized, 
                            this.extraHeaders && (n.headers = this.extraHeaders), this.localAddress && (n.localAddress = this.localAddress);
                            try {
                                this.ws = this.usingBrowserWebSocket ? e ? new h(t, e) : new h(t) : new h(t, e, n);
                            } catch (t) {
                                return this.emit("error", t);
                            }
                            void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, 
                            this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();
                        }
                    }, r.prototype.addEventListeners = function() {
                        var t = this;
                        this.ws.onopen = function() {
                            t.onOpen();
                        }, this.ws.onclose = function() {
                            t.onClose();
                        }, this.ws.onmessage = function(e) {
                            t.onData(e.data);
                        }, this.ws.onerror = function(e) {
                            t.onError("websocket error", e);
                        };
                    }, r.prototype.write = function(t) {
                        function e() {
                            n.emit("flush"), setTimeout(function() {
                                n.writable = !0, n.emit("drain");
                            }, 0);
                        }
                        var n = this;
                        this.writable = !1;
                        for (var r, o = t.length, i = 0, a = o; i < a; i++) r = t[i], s.encodePacket(r, n.supportsBinary, function(t) {
                            try {
                                n.ws.send(t);
                            } catch (t) {}
                            --o || e();
                        });
                    }, r.prototype.onClose = function() {
                        i.prototype.onClose.call(this);
                    }, r.prototype.doClose = function() {
                        void 0 !== this.ws && this.ws.close();
                    }, r.prototype.uri = function() {
                        var t = this.query || {}, e = this.secure ? "wss" : "ws", n = "";
                        return this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (n = ":" + this.port), 
                        this.timestampRequests && (t[this.timestampParam] = c()), this.supportsBinary || (t.b64 = 1), 
                        (t = a.encode(t)).length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t;
                    }, r.prototype.check = function() {
                        return !(!h || "__initialize" in h && this.name === r.prototype.name);
                    };
                }).call(this, n(4));
            }, function(t, e) {
                t.exports = Object.keys || function(t) {
                    var e = [], n = Object.prototype.hasOwnProperty;
                    for (var r in t) n.call(t, r) && e.push(r);
                    return e;
                };
            }, function(t, e) {
                var n = {}.toString;
                t.exports = Array.isArray || function(t) {
                    return "[object Array]" == n.call(t);
                };
            }, function(t, e) {
                t.exports = function(t, e, n) {
                    var r = t.byteLength;
                    if (e = e || 0, n = n || r, t.slice) return t.slice(e, n);
                    if (e < 0 && (e += r), n < 0 && (n += r), n > r && (n = r), e >= r || e >= n || 0 === r) return new ArrayBuffer(0);
                    for (var o = new Uint8Array(t), i = new Uint8Array(n - e), s = e, a = 0; s < n; s++, 
                    a++) i[a] = o[s];
                    return i.buffer;
                };
            }, function(t, e) {
                function n() {}
                t.exports = function(t, e, r) {
                    function o(t, n) {
                        if (o.count <= 0) throw new Error("after called too many times");
                        --o.count, t ? (i = !0, e(t), e = r) : 0 !== o.count || i || e(null, n);
                    }
                    var i = !1;
                    return r = r || n, o.count = t, 0 === t ? e() : o;
                };
            }, function(t, e) {
                function n(t) {
                    for (var e, n, r = [], o = 0, i = t.length; o < i; ) (e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < i ? 56320 == (64512 & (n = t.charCodeAt(o++))) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), 
                    o--) : r.push(e);
                    return r;
                }
                function r(t, e) {
                    if (t >= 55296 && t <= 57343) {
                        if (e) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
                        return !1;
                    }
                    return !0;
                }
                function o(t, e) {
                    return p(t >> e & 63 | 128);
                }
                function i(t, e) {
                    if (0 == (4294967168 & t)) return p(t);
                    var n = "";
                    return 0 == (4294965248 & t) ? n = p(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (r(t, e) || (t = 65533), 
                    n = p(t >> 12 & 15 | 224), n += o(t, 6)) : 0 == (4292870144 & t) && (n = p(t >> 18 & 7 | 240), 
                    n += o(t, 12), n += o(t, 6)), n += p(63 & t | 128);
                }
                function s() {
                    if (f >= c) throw Error("Invalid byte index");
                    var t = 255 & u[f];
                    if (f++, 128 == (192 & t)) return 63 & t;
                    throw Error("Invalid continuation byte");
                }
                function a(t) {
                    var e, n;
                    if (f > c) throw Error("Invalid byte index");
                    if (f == c) return !1;
                    if (e = 255 & u[f], f++, 0 == (128 & e)) return e;
                    if (192 == (224 & e)) {
                        if ((n = (31 & e) << 6 | s()) >= 128) return n;
                        throw Error("Invalid continuation byte");
                    }
                    if (224 == (240 & e)) {
                        if ((n = (15 & e) << 12 | s() << 6 | s()) >= 2048) return r(n, t) ? n : 65533;
                        throw Error("Invalid continuation byte");
                    }
                    if (240 == (248 & e) && (n = (7 & e) << 18 | s() << 12 | s() << 6 | s()) >= 65536 && n <= 1114111) return n;
                    throw Error("Invalid UTF-8 detected");
                }
                var u, c, f, p = String.fromCharCode;
                t.exports = {
                    version: "2.1.2",
                    encode: function(t, e) {
                        for (var r = !1 !== (e = e || {}).strict, o = n(t), s = o.length, a = -1, u = ""; ++a < s; ) u += i(o[a], r);
                        return u;
                    },
                    decode: function(t, e) {
                        var r = !1 !== (e = e || {}).strict;
                        u = n(t), c = u.length, f = 0;
                        for (var o, i = []; !1 !== (o = a(r)); ) i.push(o);
                        return function(t) {
                            for (var e, n = t.length, r = -1, o = ""; ++r < n; ) (e = t[r]) > 65535 && (o += p((e -= 65536) >>> 10 & 1023 | 55296), 
                            e = 56320 | 1023 & e), o += p(e);
                            return o;
                        }(i);
                    }
                };
            }, function(t, e) {
                !function() {
                    for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(256), r = 0; r < t.length; r++) n[t.charCodeAt(r)] = r;
                    e.encode = function(e) {
                        var n, r = new Uint8Array(e), o = r.length, i = "";
                        for (n = 0; n < o; n += 3) i += t[r[n] >> 2], i += t[(3 & r[n]) << 4 | r[n + 1] >> 4], 
                        i += t[(15 & r[n + 1]) << 2 | r[n + 2] >> 6], i += t[63 & r[n + 2]];
                        return o % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), 
                        i;
                    }, e.decode = function(t) {
                        var e, r, o, i, s, a = .75 * t.length, u = t.length, c = 0;
                        "=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);
                        var f = new ArrayBuffer(a), p = new Uint8Array(f);
                        for (e = 0; e < u; e += 4) r = n[t.charCodeAt(e)], o = n[t.charCodeAt(e + 1)], i = n[t.charCodeAt(e + 2)], 
                        s = n[t.charCodeAt(e + 3)], p[c++] = r << 2 | o >> 4, p[c++] = (15 & o) << 4 | i >> 2, 
                        p[c++] = (3 & i) << 6 | 63 & s;
                        return f;
                    };
                }();
            }, function(t, e) {
                function n(t) {
                    return t.map(function(t) {
                        if (t.buffer instanceof ArrayBuffer) {
                            var e = t.buffer;
                            if (t.byteLength !== e.byteLength) {
                                var n = new Uint8Array(t.byteLength);
                                n.set(new Uint8Array(e, t.byteOffset, t.byteLength)), e = n.buffer;
                            }
                            return e;
                        }
                        return t;
                    });
                }
                function r(t, e) {
                    e = e || {};
                    var r = new i();
                    return n(t).forEach(function(t) {
                        r.append(t);
                    }), e.type ? r.getBlob(e.type) : r.getBlob();
                }
                function o(t, e) {
                    return new Blob(n(t), e || {});
                }
                var i = void 0 !== i ? i : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder, s = function() {
                    try {
                        return 2 === new Blob([ "hi" ]).size;
                    } catch (t) {
                        return !1;
                    }
                }(), a = s && function() {
                    try {
                        return 2 === new Blob([ new Uint8Array([ 1, 2 ]) ]).size;
                    } catch (t) {
                        return !1;
                    }
                }(), u = i && i.prototype.append && i.prototype.getBlob;
                "undefined" != typeof Blob && (r.prototype = Blob.prototype, o.prototype = Blob.prototype), 
                t.exports = s ? a ? Blob : o : u ? r : void 0;
            }, function(t, e) {
                t.exports = function(t, e) {
                    var n = function() {};
                    n.prototype = e.prototype, t.prototype = new n(), t.prototype.constructor = t;
                };
            }, function(t, e, n) {
                function r(t) {
                    var e = "";
                    do {
                        e = s[t % a] + e, t = Math.floor(t / a);
                    } while (t > 0);
                    return e;
                }
                function o() {
                    var t = r(+new Date());
                    return t !== i ? (c = 0, i = t) : t + "." + r(c++);
                }
                for (var i, s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), a = 64, u = {}, c = 0, f = 0; f < a; f++) u[s[f]] = f;
                o.encode = r, o.decode = function(t) {
                    var e = 0;
                    for (f = 0; f < t.length; f++) e = e * a + u[t.charAt(f)];
                    return e;
                }, t.exports = o;
            }, function(t, r, s) {
                function u(t, n, r) {
                    Object.assign(r, {
                        url: t,
                        header: {
                            "content-type": "application/json"
                        },
                        protocols: n,
                        method: "GET"
                    }), this._socket = function(t) {
                        t.success = function() {};
                        var n = e.connectSocket(t);
                        return h("socketTask: ", n), n || {
                            onClose: e.onSocketClose,
                            onOpen: e.onSocketOpen,
                            onError: e.onSocketError,
                            onMessage: e.onSocketMessage,
                            send: e.sendSocketMessage,
                            close: e.closeSocket
                        };
                    }(r), this.addSocketEventListeners();
                }
                var f = s(38), p = s(39), h = s(0)("weapp-socket:"), l = [ "CONNECTING", "OPEN", "CLOSING", "CLOSED" ], d = function(t) {
                    function e(t, o, i) {
                        var s;
                        return n(this, e), s = r.call(this), s.readyState = e.CONNECTING, s.protocol = "", 
                        s._socket = null, null !== t && (Array.isArray(o) ? o = o.join(", ") : "object" == (void 0 === o ? "undefined" : _typeof(o)) && null !== o && (i = o, 
                        o = void 0), u.call(c(s), t, o, i)), s;
                    }
                    i(e, f);
                    var r = a(e);
                    return o(e, [ {
                        key: "addSocketEventListeners",
                        value: function() {
                            var t = this;
                            this._socket.onOpen(function() {
                                t.readyState = e.OPEN, t.onopen();
                            }), this._socket.onClose(function(n) {
                                h("onclose: ", n), t.readyState = e.CLOSED, t.onclose(n.code, n.reason);
                            }), this._socket.onError(function(e) {
                                h("onerror: ", e), t.onerror(e);
                            }), this._socket.onMessage(function(e) {
                                setTimeout(function() {
                                    t.onmessage(e);
                                }, 0);
                            });
                        }
                    }, {
                        key: "send",
                        value: function(t) {
                            h("send data: ", t, this.readyState), this.readyState === e.OPEN && this._socket.send({
                                data: t
                            });
                        }
                    }, {
                        key: "close",
                        value: function(t, n) {
                            h("close socket: ", t, n), this.readyState = e.CLOSING, this._socket.close({
                                code: t,
                                reason: n
                            });
                        }
                    }, {
                        key: "CONNECTING",
                        get: function() {
                            return e.CONNECTING;
                        }
                    }, {
                        key: "CLOSING",
                        get: function() {
                            return e.CLOSING;
                        }
                    }, {
                        key: "CLOSED",
                        get: function() {
                            return e.CLOSED;
                        }
                    }, {
                        key: "OPEN",
                        get: function() {
                            return e.OPEN;
                        }
                    } ]), e;
                }();
                l.forEach(function(t, e) {
                    d[l[e]] = e;
                }), [ "open", "error", "close", "message" ].forEach(function(t) {
                    Object.defineProperty(d.prototype, "on".concat(t), {
                        get: function() {
                            for (var e = this.listeners(t), n = 0; n < e.length; n++) if (e[n]._listener) return e[n]._listener;
                        },
                        set: function(e) {
                            for (var n = this.listeners(t), r = 0; r < n.length; r++) n[r]._listener && this.removeListener(t, n[r]);
                            this.addEventListener(t, e);
                        }
                    });
                }), d.prototype.addEventListener = p.addEventListener, d.prototype.removeEventListener = p.removeEventListener, 
                t.exports = d;
            }, function(t, e, n) {
                function r() {
                    r.init.call(this);
                }
                function o(t) {
                    return void 0 === t._maxListeners ? r.defaultMaxListeners : t._maxListeners;
                }
                function i(t, e, n, r) {
                    var i, s, a, u;
                    if ("function" != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + (void 0 === n ? "undefined" : _typeof(n)));
                    if (void 0 === (s = t._events) ? (s = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== s.newListener && (t.emit("newListener", e, n.listener ? n.listener : n), 
                    s = t._events), a = s[e]), void 0 === a) a = s[e] = n, ++t._eventsCount; else if ("function" == typeof a ? a = s[e] = r ? [ n, a ] : [ a, n ] : r ? a.unshift(n) : a.push(n), 
                    (i = o(t)) > 0 && a.length > i && !a.warned) {
                        a.warned = !0;
                        var c = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                        c.name = "MaxListenersExceededWarning", c.emitter = t, c.type = e, c.count = a.length, 
                        u = c, console && console.warn && console.warn(u);
                    }
                    return t;
                }
                function s() {
                    for (var t = [], e = 0; e < arguments.length; e++) t.push(arguments[e]);
                    this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 
                    l(this.listener, this.target, t));
                }
                function a(t, e, n) {
                    var r = {
                        fired: !1,
                        wrapFn: void 0,
                        target: t,
                        type: e,
                        listener: n
                    }, o = s.bind(r);
                    return o.listener = n, r.wrapFn = o, o;
                }
                function u(t, e, n) {
                    var r = t._events;
                    if (void 0 === r) return [];
                    var o = r[e];
                    return void 0 === o ? [] : "function" == typeof o ? n ? [ o.listener || o ] : [ o ] : n ? function(t) {
                        for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
                        return e;
                    }(o) : f(o, o.length);
                }
                function c(t) {
                    var e = this._events;
                    if (void 0 !== e) {
                        var n = e[t];
                        if ("function" == typeof n) return 1;
                        if (void 0 !== n) return n.length;
                    }
                    return 0;
                }
                function f(t, e) {
                    for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t[r];
                    return n;
                }
                var p, h = "object" == ("undefined" == typeof Reflect ? "undefined" : _typeof(Reflect)) ? Reflect : null, l = h && "function" == typeof h.apply ? h.apply : function(t, e, n) {
                    return Function.prototype.apply.call(t, e, n);
                };
                p = h && "function" == typeof h.ownKeys ? h.ownKeys : Object.getOwnPropertySymbols ? function(t) {
                    return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
                } : function(t) {
                    return Object.getOwnPropertyNames(t);
                };
                var d = Number.isNaN || function(t) {
                    return t != t;
                };
                t.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._eventsCount = 0, 
                r.prototype._maxListeners = void 0;
                var y = 10;
                Object.defineProperty(r, "defaultMaxListeners", {
                    enumerable: !0,
                    get: function() {
                        return y;
                    },
                    set: function(t) {
                        if ("number" != typeof t || t < 0 || d(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                        y = t;
                    }
                }), r.init = function() {
                    void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), 
                    this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
                }, r.prototype.setMaxListeners = function(t) {
                    if ("number" != typeof t || t < 0 || d(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
                    return this._maxListeners = t, this;
                }, r.prototype.getMaxListeners = function() {
                    return o(this);
                }, r.prototype.emit = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e.push(arguments[n]);
                    var r = "error" === t, o = this._events;
                    if (void 0 !== o) r = r && void 0 === o.error; else if (!r) return !1;
                    if (r) {
                        var i;
                        if (e.length > 0 && (i = e[0]), i instanceof Error) throw i;
                        var s = new Error("Unhandled error." + (i ? " (" + i.message + ")" : ""));
                        throw s.context = i, s;
                    }
                    var a = o[t];
                    if (void 0 === a) return !1;
                    if ("function" == typeof a) l(a, this, e); else {
                        var u = a.length, c = f(a, u);
                        for (n = 0; n < u; ++n) l(c[n], this, e);
                    }
                    return !0;
                }, r.prototype.addListener = function(t, e) {
                    return i(this, t, e, !1);
                }, r.prototype.on = r.prototype.addListener, r.prototype.prependListener = function(t, e) {
                    return i(this, t, e, !0);
                }, r.prototype.once = function(t, e) {
                    if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + (void 0 === e ? "undefined" : _typeof(e)));
                    return this.on(t, a(this, t, e)), this;
                }, r.prototype.prependOnceListener = function(t, e) {
                    if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + (void 0 === e ? "undefined" : _typeof(e)));
                    return this.prependListener(t, a(this, t, e)), this;
                }, r.prototype.removeListener = function(t, e) {
                    var n, r, o, i, s;
                    if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + (void 0 === e ? "undefined" : _typeof(e)));
                    if (void 0 === (r = this._events)) return this;
                    if (void 0 === (n = r[t])) return this;
                    if (n === e || n.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[t], 
                    r.removeListener && this.emit("removeListener", t, n.listener || e)); else if ("function" != typeof n) {
                        for (o = -1, i = n.length - 1; i >= 0; i--) if (n[i] === e || n[i].listener === e) {
                            s = n[i].listener, o = i;
                            break;
                        }
                        if (o < 0) return this;
                        0 === o ? n.shift() : function(t, e) {
                            for (;e + 1 < t.length; e++) t[e] = t[e + 1];
                            t.pop();
                        }(n, o), 1 === n.length && (r[t] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", t, s || e);
                    }
                    return this;
                }, r.prototype.off = r.prototype.removeListener, r.prototype.removeAllListeners = function(t) {
                    var e, n, r;
                    if (void 0 === (n = this._events)) return this;
                    if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), 
                    this._eventsCount = 0) : void 0 !== n[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[t]), 
                    this;
                    if (0 === arguments.length) {
                        var o, i = Object.keys(n);
                        for (r = 0; r < i.length; ++r) "removeListener" !== (o = i[r]) && this.removeAllListeners(o);
                        return this.removeAllListeners("removeListener"), this._events = Object.create(null), 
                        this._eventsCount = 0, this;
                    }
                    if ("function" == typeof (e = n[t])) this.removeListener(t, e); else if (void 0 !== e) for (r = e.length - 1; r >= 0; r--) this.removeListener(t, e[r]);
                    return this;
                }, r.prototype.listeners = function(t) {
                    return u(this, t, !0);
                }, r.prototype.rawListeners = function(t) {
                    return u(this, t, !1);
                }, r.listenerCount = function(t, e) {
                    return "function" == typeof t.listenerCount ? t.listenerCount(e) : c.call(t, e);
                }, r.prototype.listenerCount = c, r.prototype.eventNames = function() {
                    return this._eventsCount > 0 ? p(this._events) : [];
                };
            }, function(t, e, r) {
                var o = function t(e, r) {
                    n(this, t), this.target = r, this.type = e;
                }, s = function(t) {
                    function e(t, o) {
                        var i;
                        return n(this, e), i = r.call(this, "message", o), i.data = t, i;
                    }
                    i(e, o);
                    var r = a(e);
                    return e;
                }(), u = function(t) {
                    function e(t, o, i) {
                        var s;
                        return n(this, e), s = r.call(this, "close", i), s.wasClean = i._closeFrameReceived && i._closeFrameSent, 
                        s.reason = o, s.code = t, s;
                    }
                    i(e, o);
                    var r = a(e);
                    return e;
                }(), c = function(t) {
                    function e(t) {
                        return n(this, e), r.call(this, "open", t);
                    }
                    i(e, o);
                    var r = a(e);
                    return e;
                }(), f = function(t) {
                    function e(t, o) {
                        var i;
                        return n(this, e), i = r.call(this, "error", o), i.message = t.message, i.error = t, 
                        i;
                    }
                    i(e, o);
                    var r = a(e);
                    return e;
                }(), p = {
                    addEventListener: function(t, e) {
                        function n(t) {
                            e.call(this, new s(t, this));
                        }
                        function r(t, n) {
                            e.call(this, new u(t, n, this));
                        }
                        function o(t) {
                            e.call(this, new f(t, this));
                        }
                        function i() {
                            e.call(this, new c(this));
                        }
                        "function" == typeof e && ("message" === t ? (n._listener = e, this.on(t, n)) : "close" === t ? (r._listener = e, 
                        this.on(t, r)) : "error" === t ? (o._listener = e, this.on(t, o)) : "open" === t ? (i._listener = e, 
                        this.on(t, i)) : this.on(t, e));
                    },
                    removeEventListener: function(t, e) {
                        for (var n = this.listeners(t), r = 0; r < n.length; r++) n[r] !== e && n[r]._listener !== e || this.removeListener(t, n[r]);
                    }
                };
                t.exports = p;
            }, function(t, e) {
                t.exports = function(t, e) {
                    for (var n = [], r = (e = e || 0) || 0; r < t.length; r++) n[r - e] = t[r];
                    return n;
                };
            }, function(t, e) {
                function n(t) {
                    t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, 
                    this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
                }
                t.exports = n, n.prototype.duration = function() {
                    var t = this.ms * Math.pow(this.factor, this.attempts++);
                    if (this.jitter) {
                        var e = Math.random(), n = Math.floor(e * this.jitter * t);
                        t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n;
                    }
                    return 0 | Math.min(t, this.max);
                }, n.prototype.reset = function() {
                    this.attempts = 0;
                }, n.prototype.setMin = function(t) {
                    this.ms = t;
                }, n.prototype.setMax = function(t) {
                    this.max = t;
                }, n.prototype.setJitter = function(t) {
                    this.jitter = t;
                };
            } ]);
        });
    }).call(this, n(1).default);
}, function(t, e, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.API_SPECIAL_DETAIL = e.API_SPECIAL_LIST = e.API_ORGANIZATION_JOIN = e.API_ENTERPRISE_LIST = e.API_SCHOOL_LIST = e.API_ENTERPRISE_PROVINCESLIST = e.API_SCHOOL_PROVINCESLIST = e.API_PROVINCESLIST = e.API_QUANZI_MEMBERS = e.API_QUANZI_UPDATENAME = e.API_QUANZI_QUIT = e.API_DANWEI_GONGGAO = e.API_DANWEI_DETAIL = e.API_QUANZI_DETAIL = e.API_RANK_DANWEIMEMBER = e.API_RANK_DANWEI = e.API_RANK_QUANZI = e.API_QUANZI_CREATE = e.API_QUANZI_JOIN = e.API_QUANZIS = e.API_DANWEIS = e.API_TEAM_UPDATENAME = e.API_TEAM_SWITCHJOIN = e.API_TEAM_MEMBERS = e.API_TEAM_INFO = e.API_TEAM_QUIT = e.API_TEAM_JOIN = e.API_TEAM_CREATE = e.API_EXAMFRIEND_RECORDS = e.API_EXAMFRIEND_ANSWERALL = e.API_EXAMFRIEND_EXAMQUESTIONS = e.API_EXAMFRIEND_SUBMITQUESTIONS = e.API_EXAMFRIEND_GETQUESTIONS = e.API_FINISHVIDEO = e.API_GETVIDEOLIST = e.API_TOTAL_RANK = e.API_SPECIAL_RANK = e.API_RANK_TEAMBYMONTH = e.API_RANK_TEAM = e.API_RANKBYMONTH = e.API_RANK = e.API_USER_BEYOND = e.API_USER_DETAIL = e.API_PKRESULT = e.API_UPDATEINFO = e.API_PK_WAITFORPKUSER = e.API_ANSWER_SUBMITALL = e.API_WRONGQUESTION_SUBMIT = e.API_UPDATEUSERINFO = e.API_WRONGQUESTION_LIST = e.API_GAME_START = e.API_CHOOSE_USER = e.API_WXLOGIN = e.DEVSOCKETURL = e.DEVAUDIOURL = e.SOCKETURL = e.AUDIOURL = e.DEVURL = e.PRODURL = e.VERSION = e.DEV = void 0;
    e.DEV = "prod";
    e.VERSION = "2.0.9";
    e.PRODURL = "https://xds.guanhaihk.com";
    e.DEVURL = "https://answerapi.lanzulive.com";
    e.AUDIOURL = "https://cos.guanhaihk.com/quiz/mp3/";
    e.SOCKETURL = "wss://xds.guanhaihk.com/pk";
    e.DEVAUDIOURL = "https://answerapi.lanzulive.com/mp3/";
    e.DEVSOCKETURL = "wss://answerpk.lanzulive.com/pk";
    e.API_WXLOGIN = "/api/wxlogin";
    e.API_CHOOSE_USER = "/api/game/choose_user";
    e.API_GAME_START = "/api/game/start";
    e.API_WRONGQUESTION_LIST = "/api/wrongQuestion/list";
    e.API_UPDATEUSERINFO = "/api/updateUserInfo";
    e.API_WRONGQUESTION_SUBMIT = "/api/wrongQuestion/submit";
    e.API_ANSWER_SUBMITALL = "/api/answer/submit_all";
    e.API_PK_WAITFORPKUSER = "/api/waitForPkUser";
    e.API_UPDATEINFO = "/api/updateInfo";
    e.API_PKRESULT = "/api/pkResult";
    e.API_USER_DETAIL = "/api/user/detail";
    e.API_USER_BEYOND = "/api/user/beyond";
    e.API_RANK = "/api/rank";
    e.API_RANKBYMONTH = "/api/rankByMonth";
    e.API_RANK_TEAM = "/api/rank/team";
    e.API_RANK_TEAMBYMONTH = "/api/rank/teamByMonth";
    e.API_SPECIAL_RANK = "/api/special/rank";
    e.API_TOTAL_RANK = "/api/total/rank";
    e.API_GETVIDEOLIST = "/api/getVideoList";
    e.API_FINISHVIDEO = "/api/finishVideo";
    e.API_EXAMFRIEND_GETQUESTIONS = "/api/exam_friend/get_questions";
    e.API_EXAMFRIEND_SUBMITQUESTIONS = "/api/exam_friend/submit_questions";
    e.API_EXAMFRIEND_EXAMQUESTIONS = "/api/exam_friend/exam_questions";
    e.API_EXAMFRIEND_ANSWERALL = "/api/exam_friend/answer_all";
    e.API_EXAMFRIEND_RECORDS = "/api/exam_friend/records";
    e.API_TEAM_CREATE = "/api/team/create";
    e.API_TEAM_JOIN = "/api/team/join";
    e.API_TEAM_QUIT = "/api/team/quit";
    e.API_TEAM_INFO = "/api/team/info";
    e.API_TEAM_MEMBERS = "/api/team/members";
    e.API_TEAM_SWITCHJOIN = "/api/team/switchJoin";
    e.API_TEAM_UPDATENAME = "/api/team/updateName";
    e.API_DANWEIS = "/api/danweis";
    e.API_QUANZIS = "/api/quanzis";
    e.API_QUANZI_JOIN = "/api/quanzi/join";
    e.API_QUANZI_CREATE = "/api/quanzi/create";
    e.API_RANK_QUANZI = "/api/rank/quanzi";
    e.API_RANK_DANWEI = "/api/rank/danwei";
    e.API_RANK_DANWEIMEMBER = "/api/rank/danweiMember";
    e.API_QUANZI_DETAIL = "/api/quanzi/detail";
    e.API_DANWEI_DETAIL = "/api/danwei/detail";
    e.API_DANWEI_GONGGAO = "/api/danwei/gonggao";
    e.API_QUANZI_QUIT = "/api/quanzi/quit";
    e.API_QUANZI_UPDATENAME = "/api/quanzi/updateName";
    e.API_QUANZI_MEMBERS = "/api/quanzi/members";
    e.API_PROVINCESLIST = "/api/provincesList";
    e.API_SCHOOL_PROVINCESLIST = "/api/school/provincesList";
    e.API_ENTERPRISE_PROVINCESLIST = "/api/enterprise/provincesList";
    e.API_SCHOOL_LIST = "/api/school/list";
    e.API_ENTERPRISE_LIST = "/api/enterprise/list";
    e.API_ORGANIZATION_JOIN = "/api/organization/join";
    e.API_SPECIAL_LIST = "/api/special/list";
    e.API_SPECIAL_DETAIL = "/api/special/detail";
}, , , function(t, e, n) {
    function r(t, e, n, r, o, i, s, a, u, c) {
        var f = "function" == typeof t ? t.options : t;
        if (u) {
            f.components || (f.components = {});
            var p = Object.prototype.hasOwnProperty;
            for (var h in u) p.call(u, h) && !p.call(f.components, h) && (f.components[h] = u[h]);
        }
        c && ((c.beforeCreate || (c.beforeCreate = [])).unshift(function() {
            this[c.__module] = this;
        }), (f.mixins || (f.mixins = [])).push(c)), e && (f.render = e, f.staticRenderFns = n, 
        f._compiled = !0), r && (f.functional = !0), i && (f._scopeId = "data-v-" + i);
        var l;
        if (s ? (l = function(t) {
            (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), 
            o && o.call(this, t), t && t._registeredComponents && t._registeredComponents.add(s);
        }, f._ssrRegister = l) : o && (l = a ? function() {
            o.call(this, this.$root.$options.shadowRoot);
        } : o), l) if (f.functional) {
            f._injectStyles = l;
            var d = f.render;
            f.render = function(t, e) {
                return l.call(e), d(t, e);
            };
        } else {
            var y = f.beforeCreate;
            f.beforeCreate = y ? [].concat(y, l) : [ l ];
        }
        return {
            exports: t,
            options: f
        };
    }
    n.r(e), n.d(e, "default", function() {
        return r;
    });
}, function(t, e, n) {
    (function(t) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = r(n(2)), i = r(n(14));
        r(n(15));
        o.default.use(i.default);
        var s = {
            userInfo: {
                id: -1,
                token: null
            },
            backgroundSound: "background.mp3",
            timerSound: "timer.mp3"
        }, a = {
            setUserInfo: function(e, n) {
                t.setStorageSync("userInfo", n), e.userInfo = n;
            },
            setBackgroundSound: function(t, e) {
                t.backgroundSound = e;
            },
            setTimerSound: function(t, e) {
                t.timerSound = e;
            }
        }, u = {}, c = {
            userInfo: function(t) {
                return t.userInfo;
            },
            backgroundSound: function(t) {
                return t.backgroundSound;
            },
            timerSound: function(t) {
                return t.timerSound;
            }
        }, f = new i.default.Store({
            state: s,
            mutations: a,
            actions: u,
            getters: c
        });
        e.default = f;
    }).call(this, n(1).default);
}, function(t, e, n) {
    n.r(e), function(t) {
        function r(t) {
            function e() {
                var t = this.$options;
                t.store ? this.$store = "function" == typeof t.store ? t.store() : t.store : t.parent && t.parent.$store && (this.$store = t.parent.$store);
            }
            if (Number(t.version.split(".")[0]) >= 2) t.mixin({
                beforeCreate: e
            }); else {
                var n = t.prototype._init;
                t.prototype._init = function(t) {
                    void 0 === t && (t = {}), t.init = t.init ? [ e ].concat(t.init) : e, n.call(this, t);
                };
            }
        }
        function o(t) {
            T && (t._devtoolHook = T, T.emit("vuex:init", t), T.on("vuex:travel-to-state", function(e) {
                t.replaceState(e);
            }), t.subscribe(function(t, e) {
                T.emit("vuex:mutation", t, e);
            }, {
                prepend: !0
            }), t.subscribeAction(function(t, e) {
                T.emit("vuex:action", t, e);
            }, {
                prepend: !0
            }));
        }
        function i(t, e) {
            Object.keys(t).forEach(function(n) {
                return e(t[n], n);
            });
        }
        function s(t) {
            return null !== t && "object" === (void 0 === t ? "undefined" : _typeof(t));
        }
        function a(t) {
            return t && "function" == typeof t.then;
        }
        function u(t, e) {
            if (!t) throw new Error("[vuex] " + e);
        }
        function c(t, e) {
            return function() {
                return t(e);
            };
        }
        function f(t, e, n) {
            if (p(t, n), e.update(n), n.modules) for (var r in n.modules) {
                if (!e.getChild(r)) return void console.warn("[vuex] trying to add a new module '" + r + "' on hot reloading, manual reload is needed");
                f(t.concat(r), e.getChild(r), n.modules[r]);
            }
        }
        function p(t, e) {
            Object.keys(B).forEach(function(n) {
                if (e[n]) {
                    var r = B[n];
                    i(e[n], function(e, o) {
                        u(r.assert(e), h(t, n, o, e, r.expected));
                    });
                }
            });
        }
        function h(t, e, n, r, o) {
            var i = e + " should be " + o + ' but "' + e + "." + n + '"';
            return t.length > 0 && (i += ' in module "' + t.join(".") + '"'), i += " is " + JSON.stringify(r) + ".";
        }
        function l(t, e, n) {
            return e.indexOf(t) < 0 && (n && n.prepend ? e.unshift(t) : e.push(t)), function() {
                var n = e.indexOf(t);
                n > -1 && e.splice(n, 1);
            };
        }
        function d(t, e) {
            t._actions = Object.create(null), t._mutations = Object.create(null), t._wrappedGetters = Object.create(null), 
            t._modulesNamespaceMap = Object.create(null);
            var n = t.state;
            v(t, n, [], t._modules.root, !0), y(t, n, e);
        }
        function y(t, e, n) {
            var r = t._vm;
            t.getters = {}, t._makeLocalGettersCache = Object.create(null);
            var o = {};
            i(t._wrappedGetters, function(e, n) {
                o[n] = c(e, t), Object.defineProperty(t.getters, n, {
                    get: function() {
                        return t._vm[n];
                    },
                    enumerable: !0
                });
            });
            var s = j.config.silent;
            j.config.silent = !0, t._vm = new j({
                data: {
                    $$state: e
                },
                computed: o
            }), j.config.silent = s, t.strict && w(t), r && (n && t._withCommit(function() {
                r._data.$$state = null;
            }), j.nextTick(function() {
                return r.$destroy();
            }));
        }
        function v(t, e, n, r, o) {
            var i = !n.length, s = t._modules.getNamespace(n);
            if (r.namespaced && (t._modulesNamespaceMap[s] && console.error("[vuex] duplicate namespace " + s + " for the namespaced module " + n.join("/")), 
            t._modulesNamespaceMap[s] = r), !i && !o) {
                var a = E(e, n.slice(0, -1)), u = n[n.length - 1];
                t._withCommit(function() {
                    u in a && console.warn('[vuex] state field "' + u + '" was overridden by a module with the same name at "' + n.join(".") + '"'), 
                    j.set(a, u, r.state);
                });
            }
            var c = r.context = g(t, s, n);
            r.forEachMutation(function(e, n) {
                _(t, s + n, e, c);
            }), r.forEachAction(function(e, n) {
                var r = e.root ? n : s + n, o = e.handler || e;
                b(t, r, o, c);
            }), r.forEachGetter(function(e, n) {
                A(t, s + n, e, c);
            }), r.forEachChild(function(r, i) {
                v(t, e, n.concat(i), r, o);
            });
        }
        function g(t, e, n) {
            var r = "" === e, o = {
                dispatch: r ? t.dispatch : function(n, r, o) {
                    var i = O(n, r, o), s = i.payload, a = i.options, u = i.type;
                    if (a && a.root || (u = e + u, t._actions[u])) return t.dispatch(u, s);
                    console.error("[vuex] unknown local action type: " + i.type + ", global type: " + u);
                },
                commit: r ? t.commit : function(n, r, o) {
                    var i = O(n, r, o), s = i.payload, a = i.options, u = i.type;
                    a && a.root || (u = e + u, t._mutations[u]) ? t.commit(u, s, a) : console.error("[vuex] unknown local mutation type: " + i.type + ", global type: " + u);
                }
            };
            return Object.defineProperties(o, {
                getters: {
                    get: r ? function() {
                        return t.getters;
                    } : function() {
                        return m(t, e);
                    }
                },
                state: {
                    get: function() {
                        return E(t.state, n);
                    }
                }
            }), o;
        }
        function m(t, e) {
            if (!t._makeLocalGettersCache[e]) {
                var n = {}, r = e.length;
                Object.keys(t.getters).forEach(function(o) {
                    if (o.slice(0, r) === e) {
                        var i = o.slice(r);
                        Object.defineProperty(n, i, {
                            get: function() {
                                return t.getters[o];
                            },
                            enumerable: !0
                        });
                    }
                }), t._makeLocalGettersCache[e] = n;
            }
            return t._makeLocalGettersCache[e];
        }
        function _(t, e, n, r) {
            (t._mutations[e] || (t._mutations[e] = [])).push(function(e) {
                n.call(t, r.state, e);
            });
        }
        function b(t, e, n, r) {
            (t._actions[e] || (t._actions[e] = [])).push(function(e) {
                var o = n.call(t, {
                    dispatch: r.dispatch,
                    commit: r.commit,
                    getters: r.getters,
                    state: r.state,
                    rootGetters: t.getters,
                    rootState: t.state
                }, e);
                return a(o) || (o = Promise.resolve(o)), t._devtoolHook ? o.catch(function(e) {
                    throw t._devtoolHook.emit("vuex:error", e), e;
                }) : o;
            });
        }
        function A(t, e, n, r) {
            t._wrappedGetters[e] ? console.error("[vuex] duplicate getter key: " + e) : t._wrappedGetters[e] = function(t) {
                return n(r.state, r.getters, t.state, t.getters);
            };
        }
        function w(t) {
            t._vm.$watch(function() {
                return this._data.$$state;
            }, function() {
                u(t._committing, "do not mutate vuex store state outside mutation handlers.");
            }, {
                deep: !0,
                sync: !0
            });
        }
        function E(t, e) {
            return e.reduce(function(t, e) {
                return t[e];
            }, t);
        }
        function O(t, e, n) {
            return s(t) && t.type && (n = e, e = t, t = t.type), u("string" == typeof t, "expects string as the type, but found " + (void 0 === t ? "undefined" : _typeof(t)) + "."), 
            {
                type: t,
                payload: e,
                options: n
            };
        }
        function S(t) {
            j && t === j ? console.error("[vuex] already installed. Vue.use(Vuex) should be called only once.") : r(j = t);
        }
        function I(t) {
            return k(t) ? Array.isArray(t) ? t.map(function(t) {
                return {
                    key: t,
                    val: t
                };
            }) : Object.keys(t).map(function(e) {
                return {
                    key: e,
                    val: t[e]
                };
            }) : [];
        }
        function k(t) {
            return Array.isArray(t) || s(t);
        }
        function P(t) {
            return function(e, n) {
                return "string" != typeof e ? (n = e, e = "") : "/" !== e.charAt(e.length - 1) && (e += "/"), 
                t(e, n);
            };
        }
        function x(t, e, n) {
            var r = t._modulesNamespaceMap[n];
            return r || console.error("[vuex] module namespace not found in " + e + "(): " + n), 
            r;
        }
        n.d(e, "Store", function() {
            return M;
        }), n.d(e, "createNamespacedHelpers", function() {
            return q;
        }), n.d(e, "install", function() {
            return S;
        }), n.d(e, "mapActions", function() {
            return V;
        }), n.d(e, "mapGetters", function() {
            return F;
        }), n.d(e, "mapMutations", function() {
            return L;
        }), n.d(e, "mapState", function() {
            return U;
        });
        var T = ("undefined" != typeof window ? window : void 0 !== t ? t : {}).__VUE_DEVTOOLS_GLOBAL_HOOK__, C = function(t, e) {
            this.runtime = e, this._children = Object.create(null), this._rawModule = t;
            var n = t.state;
            this.state = ("function" == typeof n ? n() : n) || {};
        }, $ = {
            namespaced: {
                configurable: !0
            }
        };
        $.namespaced.get = function() {
            return !!this._rawModule.namespaced;
        }, C.prototype.addChild = function(t, e) {
            this._children[t] = e;
        }, C.prototype.removeChild = function(t) {
            delete this._children[t];
        }, C.prototype.getChild = function(t) {
            return this._children[t];
        }, C.prototype.hasChild = function(t) {
            return t in this._children;
        }, C.prototype.update = function(t) {
            this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), 
            t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters);
        }, C.prototype.forEachChild = function(t) {
            i(this._children, t);
        }, C.prototype.forEachGetter = function(t) {
            this._rawModule.getters && i(this._rawModule.getters, t);
        }, C.prototype.forEachAction = function(t) {
            this._rawModule.actions && i(this._rawModule.actions, t);
        }, C.prototype.forEachMutation = function(t) {
            this._rawModule.mutations && i(this._rawModule.mutations, t);
        }, Object.defineProperties(C.prototype, $);
        var R = function(t) {
            this.register([], t, !1);
        };
        R.prototype.get = function(t) {
            return t.reduce(function(t, e) {
                return t.getChild(e);
            }, this.root);
        }, R.prototype.getNamespace = function(t) {
            var e = this.root;
            return t.reduce(function(t, n) {
                return e = e.getChild(n), t + (e.namespaced ? n + "/" : "");
            }, "");
        }, R.prototype.update = function(t) {
            f([], this.root, t);
        }, R.prototype.register = function(t, e, n) {
            var r = this;
            void 0 === n && (n = !0), p(t, e);
            var o = new C(e, n);
            0 === t.length ? this.root = o : this.get(t.slice(0, -1)).addChild(t[t.length - 1], o), 
            e.modules && i(e.modules, function(e, o) {
                r.register(t.concat(o), e, n);
            });
        }, R.prototype.unregister = function(t) {
            var e = this.get(t.slice(0, -1)), n = t[t.length - 1];
            e.getChild(n).runtime && e.removeChild(n);
        }, R.prototype.isRegistered = function(t) {
            var e = this.get(t.slice(0, -1)), n = t[t.length - 1];
            return e.hasChild(n);
        };
        var j, N = {
            assert: function(t) {
                return "function" == typeof t;
            },
            expected: "function"
        }, B = {
            getters: N,
            mutations: N,
            actions: {
                assert: function(t) {
                    return "function" == typeof t || "object" === (void 0 === t ? "undefined" : _typeof(t)) && "function" == typeof t.handler;
                },
                expected: 'function or object with "handler" function'
            }
        }, M = function t(e) {
            var n = this;
            void 0 === e && (e = {}), !j && "undefined" != typeof window && window.Vue && S(window.Vue), 
            u(j, "must call Vue.use(Vuex) before creating a store instance."), u("undefined" != typeof Promise, "vuex requires a Promise polyfill in this browser."), 
            u(this instanceof t, "store must be called with the new operator.");
            var r = e.plugins;
            void 0 === r && (r = []);
            var i = e.strict;
            void 0 === i && (i = !1), this._committing = !1, this._actions = Object.create(null), 
            this._actionSubscribers = [], this._mutations = Object.create(null), this._wrappedGetters = Object.create(null), 
            this._modules = new R(e), this._modulesNamespaceMap = Object.create(null), this._subscribers = [], 
            this._watcherVM = new j(), this._makeLocalGettersCache = Object.create(null);
            var s = this, a = this, c = a.dispatch, f = a.commit;
            this.dispatch = function(t, e) {
                return c.call(s, t, e);
            }, this.commit = function(t, e, n) {
                return f.call(s, t, e, n);
            }, this.strict = i;
            var p = this._modules.root.state;
            v(this, p, [], this._modules.root), y(this, p), r.forEach(function(t) {
                return t(n);
            }), (void 0 !== e.devtools ? e.devtools : j.config.devtools) && o(this);
        }, D = {
            state: {
                configurable: !0
            }
        };
        D.state.get = function() {
            return this._vm._data.$$state;
        }, D.state.set = function(t) {
            u(!1, "use store.replaceState() to explicit replace store state.");
        }, M.prototype.commit = function(t, e, n) {
            var r = this, o = O(t, e, n), i = o.type, s = o.payload, a = o.options, u = {
                type: i,
                payload: s
            }, c = this._mutations[i];
            c ? (this._withCommit(function() {
                c.forEach(function(t) {
                    t(s);
                });
            }), this._subscribers.slice().forEach(function(t) {
                return t(u, r.state);
            }), a && a.silent && console.warn("[vuex] mutation type: " + i + ". Silent option has been removed. Use the filter functionality in the vue-devtools")) : console.error("[vuex] unknown mutation type: " + i);
        }, M.prototype.dispatch = function(t, e) {
            var n = this, r = O(t, e), o = r.type, i = r.payload, s = {
                type: o,
                payload: i
            }, a = this._actions[o];
            if (a) {
                try {
                    this._actionSubscribers.slice().filter(function(t) {
                        return t.before;
                    }).forEach(function(t) {
                        return t.before(s, n.state);
                    });
                } catch (t) {
                    console.warn("[vuex] error in before action subscribers: "), console.error(t);
                }
                var u = a.length > 1 ? Promise.all(a.map(function(t) {
                    return t(i);
                })) : a[0](i);
                return new Promise(function(t, e) {
                    u.then(function(e) {
                        try {
                            n._actionSubscribers.filter(function(t) {
                                return t.after;
                            }).forEach(function(t) {
                                return t.after(s, n.state);
                            });
                        } catch (t) {
                            console.warn("[vuex] error in after action subscribers: "), console.error(t);
                        }
                        t(e);
                    }, function(t) {
                        try {
                            n._actionSubscribers.filter(function(t) {
                                return t.error;
                            }).forEach(function(e) {
                                return e.error(s, n.state, t);
                            });
                        } catch (t) {
                            console.warn("[vuex] error in error action subscribers: "), console.error(t);
                        }
                        e(t);
                    });
                });
            }
            console.error("[vuex] unknown action type: " + o);
        }, M.prototype.subscribe = function(t, e) {
            return l(t, this._subscribers, e);
        }, M.prototype.subscribeAction = function(t, e) {
            return l("function" == typeof t ? {
                before: t
            } : t, this._actionSubscribers, e);
        }, M.prototype.watch = function(t, e, n) {
            var r = this;
            return u("function" == typeof t, "store.watch only accepts a function."), this._watcherVM.$watch(function() {
                return t(r.state, r.getters);
            }, e, n);
        }, M.prototype.replaceState = function(t) {
            var e = this;
            this._withCommit(function() {
                e._vm._data.$$state = t;
            });
        }, M.prototype.registerModule = function(t, e, n) {
            void 0 === n && (n = {}), "string" == typeof t && (t = [ t ]), u(Array.isArray(t), "module path must be a string or an Array."), 
            u(t.length > 0, "cannot register the root module by using registerModule."), this._modules.register(t, e), 
            v(this, this.state, t, this._modules.get(t), n.preserveState), y(this, this.state);
        }, M.prototype.unregisterModule = function(t) {
            var e = this;
            "string" == typeof t && (t = [ t ]), u(Array.isArray(t), "module path must be a string or an Array."), 
            this._modules.unregister(t), this._withCommit(function() {
                var n = E(e.state, t.slice(0, -1));
                j.delete(n, t[t.length - 1]);
            }), d(this);
        }, M.prototype.hasModule = function(t) {
            return "string" == typeof t && (t = [ t ]), u(Array.isArray(t), "module path must be a string or an Array."), 
            this._modules.isRegistered(t);
        }, M.prototype.hotUpdate = function(t) {
            this._modules.update(t), d(this, !0);
        }, M.prototype._withCommit = function(t) {
            var e = this._committing;
            this._committing = !0, t(), this._committing = e;
        }, Object.defineProperties(M.prototype, D);
        var U = P(function(t, e) {
            var n = {};
            return k(e) || console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"), 
            I(e).forEach(function(e) {
                var r = e.key, o = e.val;
                n[r] = function() {
                    var e = this.$store.state, n = this.$store.getters;
                    if (t) {
                        var r = x(this.$store, "mapState", t);
                        if (!r) return;
                        e = r.context.state, n = r.context.getters;
                    }
                    return "function" == typeof o ? o.call(this, e, n) : e[o];
                }, n[r].vuex = !0;
            }), n;
        }), L = P(function(t, e) {
            var n = {};
            return k(e) || console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"), 
            I(e).forEach(function(e) {
                var r = e.key, o = e.val;
                n[r] = function() {
                    for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                    var r = this.$store.commit;
                    if (t) {
                        var i = x(this.$store, "mapMutations", t);
                        if (!i) return;
                        r = i.context.commit;
                    }
                    return "function" == typeof o ? o.apply(this, [ r ].concat(e)) : r.apply(this.$store, [ o ].concat(e));
                };
            }), n;
        }), F = P(function(t, e) {
            var n = {};
            return k(e) || console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"), 
            I(e).forEach(function(e) {
                var r = e.key, o = e.val;
                o = t + o, n[r] = function() {
                    if (!t || x(this.$store, "mapGetters", t)) {
                        if (o in this.$store.getters) return this.$store.getters[o];
                        console.error("[vuex] unknown getter: " + o);
                    }
                }, n[r].vuex = !0;
            }), n;
        }), V = P(function(t, e) {
            var n = {};
            return k(e) || console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"), 
            I(e).forEach(function(e) {
                var r = e.key, o = e.val;
                n[r] = function() {
                    for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                    var r = this.$store.dispatch;
                    if (t) {
                        var i = x(this.$store, "mapActions", t);
                        if (!i) return;
                        r = i.context.dispatch;
                    }
                    return "function" == typeof o ? o.apply(this, [ r ].concat(e)) : r.apply(this.$store, [ o ].concat(e));
                };
            }), n;
        }), q = function(t) {
            return {
                mapState: U.bind(null, t),
                mapGetters: F.bind(null, t),
                mapMutations: L.bind(null, t),
                mapActions: V.bind(null, t)
            };
        }, H = {
            Store: M,
            install: S,
            version: "3.4.0",
            mapState: U,
            mapMutations: L,
            mapGetters: F,
            mapActions: V,
            createNamespacedHelpers: q
        };
        e.default = H;
    }.call(this, n(3));
}, function(t, e, n) {
    (function(e) {
        function r(t) {
            console.log("-----gengxin1y用户信息"), console.log(t), e.setStorageSync("userInfo", t);
        }
        function o(t) {
            if ("string" == typeof t) {
                if ("null" === (t = t.trim()) || "undefined" === t) return !1;
            } else if ("number" == typeof t && "number" == typeof t && !isNaN(t) && 0 !== t) return !0;
            for (var e in t) return !0;
            return !1;
        }
        function i(t) {
            return t <= 9 && (t = "0" + t), t;
        }
        var s = new (function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n(2)).default)(), a = n(9), u = n(16);
        t.exports = {
            objectConversion: function(t) {
                if ("object" != (void 0 === t ? "undefined" : _typeof(t))) return !1;
                if (Array.isArray(t)) return t;
                var e = [];
                for (var n in t) e.push(t[n]);
                return e;
            },
            parsingRoadKing: function(t, e) {
                if (!o(t)) return {};
                var n = {}, r = t.split("?");
                return r[1] && r[1].split("&").forEach(function(t) {
                    var e = t.split("=");
                    e[1].indexOf("#/") >= 0 ? n[e[0]] = e[1].substr(0, e[1].length - 2) : n[e[0]] = e[1];
                }), e ? n.webview_url = r[0] : n.baseurl = r[0], n;
            },
            wxlogin: function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "auth_base";
                e.login({
                    scopes: n,
                    success: function(e) {
                        console.log("-----wxlogin---getcode"), s.request(a.API_WXLOGIN, {
                            code: e.code
                        }, function(e) {
                            console.log("-----wxlogin---getuserinfo"), console.log(e, "测试登录"), r(e), "function" == typeof t && t(e);
                        }, !1);
                    },
                    fail: function(t) {
                        e.showModal({
                            title: "提示",
                            content: "调取微信登录失败",
                            confirmColor: "#30B6F9"
                        });
                    }
                });
            },
            createToken: function() {
                var t = new Date(), e = t.getFullYear(), n = String(t.getMonth() + 1);
                n = i(n);
                var r = String(t.getDate());
                r = i(r);
                var o = String(t.getHours());
                o = i(o);
                var a = String(t.getMinutes());
                a = i(a);
                var c = String(t.getSeconds());
                c = i(c);
                var f = s.$store.state.userInfo.id, p = "".concat(e, "/").concat(n, "/").concat(r, " ").concat(o, ":").concat(a, ":").concat(c, " ").concat(f);
                return u.hash(p);
            },
            isRight: o,
            formatDate: function(t, e) {
                var n = t.getFullYear(), r = t.getMonth() + 1;
                r = r < 10 ? "0" + r : r;
                var o = t.getDate();
                o = o < 10 ? "0" + o : o;
                var i = t.getHours();
                i = i < 10 ? "0" + i : i;
                var s = t.getMinutes();
                s = s < 10 ? "0" + s : s;
                var a = t.getSeconds();
                return a = s < 10 ? "0" + a : a, "ymd" == e ? n + "-" + r + "-" + o : "hms" == e ? i + ":" + s + ":" + a : "ymdh" == e ? n + "-" + r + "-" + o + " " + i : "ymdhm" == e ? n + "-" + r + "-" + o + " " + i + ":" + s : n + "-" + r + "-" + o + " " + i + ":" + s + ":" + a;
            },
            dateToTimestamp: function(t) {
                return new Date(t).getTime();
            },
            compareAmount: function(t, e) {
                return t = o(t) ? t : 0, e = o(e) ? e : 0, Number(t) < Number(e);
            },
            getZeroTimestamp: function() {
                return new Date(new Date(new Date().toLocaleDateString()).getTime()).getTime() / 1e3;
            },
            getDaysLaterZeroTimestamp: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 7;
                return new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * t * 3600 * 1e3).getTime() / 1e3;
            },
            islogin: function(t) {
                return void 0 === t || void 0 === t.id || -1 == t.id;
            },
            isValueType: function(t) {
                return Object.prototype.toString.call(t).match(/\[object (.*?)\]/)[1].toLowerCase();
            },
            fillZero: i,
            subscribeMessage: function() {
                var t = {
                    for_user_type: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "user"
                };
                s.request(a.V3_SUBSCRIBEMSG_GETTEMPLATES, t, function(t) {
                    console.log(t);
                    var n = o(t.templates) ? t.templates : [];
                    if (n && Array.isArray(n)) {
                        var r = [];
                        n.forEach(function(t, e) {
                            r.push(t.template_id);
                        }), e.requestSubscribeMessage({
                            tmplIds: r,
                            success: function(t) {
                                console.log(t), t && t.errMsg;
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        });
                    }
                }, !1);
            },
            dayInterval: function(t, e) {
                var n = Date.parse(t), r = Date.parse(e) - n;
                return r = Math.abs(r), Math.floor(r / 864e5);
            },
            checkImgInfo: function(t, n) {
                e.getImageInfo({
                    src: t,
                    success: function(t) {
                        var e = t.type;
                        console.log("checkImgInfo...", e), "png" == e || "jpeg" == e || "jpg" == e ? n && n(!0) : n && n(!1);
                    },
                    fail: function(t) {
                        n && n(!1);
                    }
                });
            },
            getUserInfo: function() {
                var t = {
                    id: -1,
                    token: null
                }, n = e.getStorageSync("userInfo");
                if (console.log("userInfoObj", n), n) {
                    if ("number" == typeof n.id) return n;
                    e.removeStorageSync("userInfo");
                }
                return t;
            },
            setUserInfo: r
        };
    }).call(this, n(1).default);
}, function(t, e, n) {
    !function(e) {
        t.exports = e();
    }(function(t) {
        function e(t, e) {
            var n = t[0], r = t[1], o = t[2], i = t[3];
            r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + e[0] - 680876936 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + e[1] - 389564586 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + e[2] + 606105819 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + e[3] - 1044525330 | 0) << 22 | r >>> 10) + o | 0, 
            r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + e[4] - 176418897 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + e[5] + 1200080426 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + e[6] - 1473231341 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + e[7] - 45705983 | 0) << 22 | r >>> 10) + o | 0, 
            r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + e[8] + 1770035416 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + e[9] - 1958414417 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + e[10] - 42063 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + e[11] - 1990404162 | 0) << 22 | r >>> 10) + o | 0, 
            r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + e[12] + 1804603682 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + e[13] - 40341101 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + e[14] - 1502002290 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + e[15] + 1236535329 | 0) << 22 | r >>> 10) + o | 0, 
            r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + e[1] - 165796510 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + e[6] - 1069501632 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + e[11] + 643717713 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + e[0] - 373897302 | 0) << 20 | r >>> 12) + o | 0, 
            r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + e[5] - 701558691 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + e[10] + 38016083 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + e[15] - 660478335 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + e[4] - 405537848 | 0) << 20 | r >>> 12) + o | 0, 
            r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + e[9] + 568446438 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + e[14] - 1019803690 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + e[3] - 187363961 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + e[8] + 1163531501 | 0) << 20 | r >>> 12) + o | 0, 
            r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + e[13] - 1444681467 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + e[2] - 51403784 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + e[7] + 1735328473 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + e[12] - 1926607734 | 0) << 20 | r >>> 12) + o | 0, 
            r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + e[5] - 378558 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + e[8] - 2022574463 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + e[11] + 1839030562 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + e[14] - 35309556 | 0) << 23 | r >>> 9) + o | 0, 
            r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + e[1] - 1530992060 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + e[4] + 1272893353 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + e[7] - 155497632 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + e[10] - 1094730640 | 0) << 23 | r >>> 9) + o | 0, 
            r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + e[13] + 681279174 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + e[0] - 358537222 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + e[3] - 722521979 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + e[6] + 76029189 | 0) << 23 | r >>> 9) + o | 0, 
            r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + e[9] - 640364487 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + e[12] - 421815835 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + e[15] + 530742520 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + e[2] - 995338651 | 0) << 23 | r >>> 9) + o | 0, 
            r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + e[0] - 198630844 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + e[7] + 1126891415 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + e[14] - 1416354905 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + e[5] - 57434055 | 0) << 21 | r >>> 11) + o | 0, 
            r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + e[12] + 1700485571 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + e[3] - 1894986606 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + e[10] - 1051523 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + e[1] - 2054922799 | 0) << 21 | r >>> 11) + o | 0, 
            r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + e[8] + 1873313359 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + e[15] - 30611744 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + e[6] - 1560198380 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + e[13] + 1309151649 | 0) << 21 | r >>> 11) + o | 0, 
            r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + e[4] - 145523070 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + e[11] - 1120210379 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + e[2] + 718787259 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + e[9] - 343485551 | 0) << 21 | r >>> 11) + o | 0, 
            t[0] = n + t[0] | 0, t[1] = r + t[1] | 0, t[2] = o + t[2] | 0, t[3] = i + t[3] | 0;
        }
        function n(t) {
            var e, n = [];
            for (e = 0; e < 64; e += 4) n[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(e + 2) << 16) + (t.charCodeAt(e + 3) << 24);
            return n;
        }
        function r(t) {
            var e, n = [];
            for (e = 0; e < 64; e += 4) n[e >> 2] = t[e] + (t[e + 1] << 8) + (t[e + 2] << 16) + (t[e + 3] << 24);
            return n;
        }
        function o(t) {
            var r, o, i, s, a, u, c = t.length, f = [ 1732584193, -271733879, -1732584194, 271733878 ];
            for (r = 64; r <= c; r += 64) e(f, n(t.substring(r - 64, r)));
            for (o = (t = t.substring(r - 64)).length, i = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 
            r = 0; r < o; r += 1) i[r >> 2] |= t.charCodeAt(r) << (r % 4 << 3);
            if (i[r >> 2] |= 128 << (r % 4 << 3), r > 55) for (e(f, i), r = 0; r < 16; r += 1) i[r] = 0;
            return s = 8 * c, s = s.toString(16).match(/(.*?)(.{0,8})$/), a = parseInt(s[2], 16), 
            u = parseInt(s[1], 16) || 0, i[14] = a, i[15] = u, e(f, i), f;
        }
        function i(t) {
            var n, o, i, s, a, u, c = t.length, f = [ 1732584193, -271733879, -1732584194, 271733878 ];
            for (n = 64; n <= c; n += 64) e(f, r(t.subarray(n - 64, n)));
            for (o = (t = n - 64 < c ? t.subarray(n - 64) : new Uint8Array(0)).length, i = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 
            n = 0; n < o; n += 1) i[n >> 2] |= t[n] << (n % 4 << 3);
            if (i[n >> 2] |= 128 << (n % 4 << 3), n > 55) for (e(f, i), n = 0; n < 16; n += 1) i[n] = 0;
            return s = 8 * c, s = s.toString(16).match(/(.*?)(.{0,8})$/), a = parseInt(s[2], 16), 
            u = parseInt(s[1], 16) || 0, i[14] = a, i[15] = u, e(f, i), f;
        }
        function s(t) {
            var e, n = "";
            for (e = 0; e < 4; e += 1) n += d[t >> 8 * e + 4 & 15] + d[t >> 8 * e & 15];
            return n;
        }
        function a(t) {
            var e;
            for (e = 0; e < t.length; e += 1) t[e] = s(t[e]);
            return t.join("");
        }
        function u(t) {
            return /[\u0080-\uFFFF]/.test(t) && (t = unescape(encodeURIComponent(t))), t;
        }
        function c(t, e) {
            var n, r = t.length, o = new ArrayBuffer(r), i = new Uint8Array(o);
            for (n = 0; n < r; n += 1) i[n] = t.charCodeAt(n);
            return e ? i : o;
        }
        function f(t) {
            return String.fromCharCode.apply(null, new Uint8Array(t));
        }
        function p(t, e, n) {
            var r = new Uint8Array(t.byteLength + e.byteLength);
            return r.set(new Uint8Array(t)), r.set(new Uint8Array(e), t.byteLength), n ? r : r.buffer;
        }
        function h(t) {
            var e, n = [], r = t.length;
            for (e = 0; e < r - 1; e += 2) n.push(parseInt(t.substr(e, 2), 16));
            return String.fromCharCode.apply(String, n);
        }
        function l() {
            this.reset();
        }
        var d = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" ];
        return "5d41402abc4b2a76b9719d911017c592" !== a(o("hello")) && function(t, e) {
            var n = (65535 & t) + (65535 & e);
            return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n;
        }, "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || function() {
            function e(t, e) {
                return (t = 0 | t || 0) < 0 ? Math.max(t + e, 0) : Math.min(t, e);
            }
            ArrayBuffer.prototype.slice = function(n, r) {
                var o, i, s, a, u = this.byteLength, c = e(n, u), f = u;
                return r !== t && (f = e(r, u)), c > f ? new ArrayBuffer(0) : (o = f - c, i = new ArrayBuffer(o), 
                s = new Uint8Array(i), a = new Uint8Array(this, c, o), s.set(a), i);
            };
        }(), l.prototype.append = function(t) {
            return this.appendBinary(u(t)), this;
        }, l.prototype.appendBinary = function(t) {
            this._buff += t, this._length += t.length;
            var r, o = this._buff.length;
            for (r = 64; r <= o; r += 64) e(this._hash, n(this._buff.substring(r - 64, r)));
            return this._buff = this._buff.substring(r - 64), this;
        }, l.prototype.end = function(t) {
            var e, n, r = this._buff, o = r.length, i = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
            for (e = 0; e < o; e += 1) i[e >> 2] |= r.charCodeAt(e) << (e % 4 << 3);
            return this._finish(i, o), n = a(this._hash), t && (n = h(n)), this.reset(), n;
        }, l.prototype.reset = function() {
            return this._buff = "", this._length = 0, this._hash = [ 1732584193, -271733879, -1732584194, 271733878 ], 
            this;
        }, l.prototype.getState = function() {
            return {
                buff: this._buff,
                length: this._length,
                hash: this._hash
            };
        }, l.prototype.setState = function(t) {
            return this._buff = t.buff, this._length = t.length, this._hash = t.hash, this;
        }, l.prototype.destroy = function() {
            delete this._hash, delete this._buff, delete this._length;
        }, l.prototype._finish = function(t, n) {
            var r, o, i, s = n;
            if (t[s >> 2] |= 128 << (s % 4 << 3), s > 55) for (e(this._hash, t), s = 0; s < 16; s += 1) t[s] = 0;
            r = (r = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/), o = parseInt(r[2], 16), 
            i = parseInt(r[1], 16) || 0, t[14] = o, t[15] = i, e(this._hash, t);
        }, l.hash = function(t, e) {
            return l.hashBinary(u(t), e);
        }, l.hashBinary = function(t, e) {
            var n = a(o(t));
            return e ? h(n) : n;
        }, l.ArrayBuffer = function() {
            this.reset();
        }, l.ArrayBuffer.prototype.append = function(t) {
            var n, o = p(this._buff.buffer, t, !0), i = o.length;
            for (this._length += t.byteLength, n = 64; n <= i; n += 64) e(this._hash, r(o.subarray(n - 64, n)));
            return this._buff = n - 64 < i ? new Uint8Array(o.buffer.slice(n - 64)) : new Uint8Array(0), 
            this;
        }, l.ArrayBuffer.prototype.end = function(t) {
            var e, n, r = this._buff, o = r.length, i = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
            for (e = 0; e < o; e += 1) i[e >> 2] |= r[e] << (e % 4 << 3);
            return this._finish(i, o), n = a(this._hash), t && (n = h(n)), this.reset(), n;
        }, l.ArrayBuffer.prototype.reset = function() {
            return this._buff = new Uint8Array(0), this._length = 0, this._hash = [ 1732584193, -271733879, -1732584194, 271733878 ], 
            this;
        }, l.ArrayBuffer.prototype.getState = function() {
            var t = l.prototype.getState.call(this);
            return t.buff = f(t.buff), t;
        }, l.ArrayBuffer.prototype.setState = function(t) {
            return t.buff = c(t.buff, !0), l.prototype.setState.call(this, t);
        }, l.ArrayBuffer.prototype.destroy = l.prototype.destroy, l.ArrayBuffer.prototype._finish = l.prototype._finish, 
        l.ArrayBuffer.hash = function(t, e) {
            var n = a(i(new Uint8Array(t)));
            return e ? h(n) : n;
        }, l;
    });
}, function(t, e, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var r = {
        install: function(t) {
            t.mixin({
                data: function() {
                    return {
                        _mergeParam: {}
                    };
                },
                onLoad: function(t) {
                    t && (this._mergeParam = t);
                }
            });
        }
    };
    e.default = r;
}, function(t, e, n) {
    (function(e) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function o(t) {
            var e = "", n = [];
            for (var r in t) if (t.hasOwnProperty(r)) {
                t[r];
                n.push(r);
            }
            var o = [];
            n.sort();
            for (var i = 0; i < n.length; i++) {
                var s = n[i], c = t[s];
                o.push(s + "=" + c);
            }
            e = o.join("&");
            var f = a(u.hash(e) + "lanzu@123");
            return t.sign = f, t;
        }
        var i = r(n(15)), s = (r(n(2)), {}), a = n(19), u = n(16), c = null;
        s.reLogin = function(t, e, n, r, o) {
            i.default.wxlogin(function() {
                s.request(t, e, n, r, o);
            });
        }, s.request = function(t, n, r, s, a) {
            var f = getApp().globalData, p = getApp().globalData.API.DEVURL, h = getCurrentPages();
            n.create_page = h[h.length - 1].route;
            var l = this;
            "prod" == getApp().globalData.API.DEV && (p = getApp().globalData.API.PRODURL);
            var d = i.default.getUserInfo(), y = 0;
            d.token && (y = d.token);
            var v = "Bearer " + y;
            n.timestamp || (n.timestamp = Math.round(new Date().getTime() / 1e3)), n.rand || (n.rand = Math.round(1e6 * Math.random())), 
            n.user_id || (n.user_id = d.id || -1), n.platform = "wxmini", n.version = getApp().globalData.API.VERSION;
            var g = e.getSystemInfoSync();
            if (console.log("-----sysinfo----"), console.log(g), void 0 === g.deviceId) {
                var m = e.getStorageSync("deviceId");
                if (m) g.deviceId = m; else {
                    var _ = String(new Date().getTime()), b = u.hash(_);
                    e.setStorageSync("deviceId", b), g.deviceId = b;
                }
            }
            g && (n.device_info = JSON.stringify(g));
            var A = l._mergeParam;
            for (var w in A) {
                var E = w;
                n[E] && (E = "_" + E), n[E] = A[w];
            }
            o(n), console.log(t + "-------传参传参------------"), console.log(n), console.log(t + "-------userInfo------------");
            s && e.showLoading({
                title: "加载中"
            }), e.request({
                url: p + t,
                data: n,
                method: "POST",
                timeout: 3e4,
                header: {
                    "content-type": "application/x-www-form-urlencoded",
                    Authorization: v,
                    Accept: "application/json"
                },
                success: function(o) {
                    if (console.log(t + "----res----"), console.log(o), 200 == o.statusCode) {
                        var u = o.data.msg;
                        0 != o.data.code ? 0 != o.data.code && t == f.API.API_UPDATEUSERINFO || 401 == o.data.status ? (console.log("------ddddd22"), 
                        u = "验证信息过期，请重新登录", i.default.wxlogin(function(t) {
                            s && e.hideLoading(), e.showModal({
                                title: "",
                                content: u,
                                confirmColor: "#61C3D0",
                                showCancel: !1,
                                success: function(t) {
                                    t.confirm && "function" == typeof a && a(o.data);
                                }
                            });
                        })) : (s && e.hideLoading(), e.showModal({
                            title: "",
                            content: u,
                            confirmColor: "#61C3D0",
                            showCancel: !1,
                            success: function(t) {
                                t.confirm && "function" == typeof a && a(o.data);
                            }
                        })) : (s && e.hideLoading(), r && r(o.data.data));
                    } else {
                        if (s && e.hideLoading(), c) return;
                        c = setTimeout(function() {
                            clearTimeout(c), c = null;
                        }, 800);
                        var p = "_prot_".concat(t, "_data_").concat(JSON.stringify(n), "_error_").concat(JSON.stringify(o));
                        if (l.$log.error(p), f.API.API_SENDCHAR == t) return void a();
                        e.showModal({
                            title: "",
                            content: "网络繁忙，请稍后再试！",
                            showCancel: !1,
                            confirmColor: "#61C3D0",
                            success: function(t) {
                                console.log(t, "网络繁忙"), t.confirm && h.length;
                            }
                        });
                    }
                },
                fail: function(r) {
                    if (console.log("----err----"), console.log(r), s && e.hideLoading(), !c) {
                        c = setTimeout(function() {
                            clearTimeout(c), c = null;
                        }, 800);
                        var o = "_prot_".concat(t, "_data_").concat(JSON.stringify(n), "_error2_").concat(JSON.stringify(r));
                        l.$log.error(o);
                        var i = "网络繁忙，请稍后再试！";
                        "request:fail -109:net::ERR_ADDRESS_UNREACHABLE" === r.errMsg && (i = "您的手机网络环境异常"), 
                        f.API.API_SENDCHAR != t ? e.showModal({
                            title: "",
                            content: i,
                            showCancel: !1,
                            confirmColor: "#61C3D0",
                            success: function(t) {
                                console.log(r, i), t.confirm;
                            }
                        }) : a();
                    }
                }
            });
        }, t.exports = {
            request: s.request,
            reLogin: s.reLogin
        };
    }).call(this, n(1).default);
}, function(module, exports, __webpack_require__) {
    (function(process, global) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
        !function() {
            function t(t) {
                t ? (f[0] = f[16] = f[1] = f[2] = f[3] = f[4] = f[5] = f[6] = f[7] = f[8] = f[9] = f[10] = f[11] = f[12] = f[13] = f[14] = f[15] = 0, 
                this.blocks = f) : this.blocks = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 
                this.h0 = 1732584193, this.h1 = 4023233417, this.h2 = 2562383102, this.h3 = 271733878, 
                this.h4 = 3285377520, this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, 
                this.first = !0;
            }
            var h = "object" == ("undefined" == typeof window ? "undefined" : _typeof(window)) ? window : {}, s = !h.JS_SHA1_NO_NODE_JS && "object" == (void 0 === process ? "undefined" : _typeof(process)) && process.versions && process.versions.node;
            s && (h = global);
            var i = !h.JS_SHA1_NO_COMMON_JS && "object" == (void 0 === module ? "undefined" : _typeof(module)) && module.exports, e = __webpack_require__(22), r = "0123456789abcdef".split(""), o = [ -2147483648, 8388608, 32768, 128 ], n = [ 24, 16, 8, 0 ], a = [ "hex", "array", "digest", "arrayBuffer" ], f = [], u = function(e) {
                return function(n) {
                    return new t(!0).update(n)[e]();
                };
            }, c = function() {
                var e = u("hex");
                s && (e = p(e)), e.create = function() {
                    return new t();
                }, e.update = function(t) {
                    return e.create().update(t);
                };
                for (var n = 0; n < a.length; ++n) {
                    var r = a[n];
                    e[r] = u(r);
                }
                return e;
            }, p = function p(t) {
                var h = eval("require('crypto')"), s = eval("require('buffer').Buffer"), i = function(e) {
                    if ("string" == typeof e) return h.createHash("sha1").update(e, "utf8").digest("hex");
                    if (e.constructor === ArrayBuffer) e = new Uint8Array(e); else if (void 0 === e.length) return t(e);
                    return h.createHash("sha1").update(new s(e)).digest("hex");
                };
                return i;
            };
            t.prototype.update = function(t) {
                if (!this.finalized) {
                    var e = "string" != typeof t;
                    e && t.constructor === h.ArrayBuffer && (t = new Uint8Array(t));
                    for (var r, o, i = 0, s = t.length || 0, a = this.blocks; i < s; ) {
                        if (this.hashed && (this.hashed = !1, a[0] = this.block, a[16] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] = a[15] = 0), 
                        e) for (o = this.start; i < s && o < 64; ++i) a[o >> 2] |= t[i] << n[3 & o++]; else for (o = this.start; i < s && o < 64; ++i) (r = t.charCodeAt(i)) < 128 ? a[o >> 2] |= r << n[3 & o++] : r < 2048 ? (a[o >> 2] |= (192 | r >> 6) << n[3 & o++], 
                        a[o >> 2] |= (128 | 63 & r) << n[3 & o++]) : r < 55296 || r >= 57344 ? (a[o >> 2] |= (224 | r >> 12) << n[3 & o++], 
                        a[o >> 2] |= (128 | r >> 6 & 63) << n[3 & o++], a[o >> 2] |= (128 | 63 & r) << n[3 & o++]) : (r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(++i)), 
                        a[o >> 2] |= (240 | r >> 18) << n[3 & o++], a[o >> 2] |= (128 | r >> 12 & 63) << n[3 & o++], 
                        a[o >> 2] |= (128 | r >> 6 & 63) << n[3 & o++], a[o >> 2] |= (128 | 63 & r) << n[3 & o++]);
                        this.lastByteIndex = o, this.bytes += o - this.start, o >= 64 ? (this.block = a[16], 
                        this.start = o - 64, this.hash(), this.hashed = !0) : this.start = o;
                    }
                    return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, 
                    this.bytes = this.bytes % 4294967296), this;
                }
            }, t.prototype.finalize = function() {
                if (!this.finalized) {
                    this.finalized = !0;
                    var t = this.blocks, e = this.lastByteIndex;
                    t[16] = this.block, t[e >> 2] |= o[3 & e], this.block = t[16], e >= 56 && (this.hashed || this.hash(), 
                    t[0] = this.block, t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), 
                    t[14] = this.hBytes << 3 | this.bytes >>> 29, t[15] = this.bytes << 3, this.hash();
                }
            }, t.prototype.hash = function() {
                var t, e, n = this.h0, r = this.h1, o = this.h2, i = this.h3, s = this.h4, a = this.blocks;
                for (t = 16; t < 80; ++t) e = a[t - 3] ^ a[t - 8] ^ a[t - 14] ^ a[t - 16], a[t] = e << 1 | e >>> 31;
                for (t = 0; t < 20; t += 5) n = (e = (r = (e = (o = (e = (i = (e = (s = (e = n << 5 | n >>> 27) + (r & o | ~r & i) + s + 1518500249 + a[t] << 0) << 5 | s >>> 27) + (n & (r = r << 30 | r >>> 2) | ~n & o) + i + 1518500249 + a[t + 1] << 0) << 5 | i >>> 27) + (s & (n = n << 30 | n >>> 2) | ~s & r) + o + 1518500249 + a[t + 2] << 0) << 5 | o >>> 27) + (i & (s = s << 30 | s >>> 2) | ~i & n) + r + 1518500249 + a[t + 3] << 0) << 5 | r >>> 27) + (o & (i = i << 30 | i >>> 2) | ~o & s) + n + 1518500249 + a[t + 4] << 0, 
                o = o << 30 | o >>> 2;
                for (;t < 40; t += 5) n = (e = (r = (e = (o = (e = (i = (e = (s = (e = n << 5 | n >>> 27) + (r ^ o ^ i) + s + 1859775393 + a[t] << 0) << 5 | s >>> 27) + (n ^ (r = r << 30 | r >>> 2) ^ o) + i + 1859775393 + a[t + 1] << 0) << 5 | i >>> 27) + (s ^ (n = n << 30 | n >>> 2) ^ r) + o + 1859775393 + a[t + 2] << 0) << 5 | o >>> 27) + (i ^ (s = s << 30 | s >>> 2) ^ n) + r + 1859775393 + a[t + 3] << 0) << 5 | r >>> 27) + (o ^ (i = i << 30 | i >>> 2) ^ s) + n + 1859775393 + a[t + 4] << 0, 
                o = o << 30 | o >>> 2;
                for (;t < 60; t += 5) n = (e = (r = (e = (o = (e = (i = (e = (s = (e = n << 5 | n >>> 27) + (r & o | r & i | o & i) + s - 1894007588 + a[t] << 0) << 5 | s >>> 27) + (n & (r = r << 30 | r >>> 2) | n & o | r & o) + i - 1894007588 + a[t + 1] << 0) << 5 | i >>> 27) + (s & (n = n << 30 | n >>> 2) | s & r | n & r) + o - 1894007588 + a[t + 2] << 0) << 5 | o >>> 27) + (i & (s = s << 30 | s >>> 2) | i & n | s & n) + r - 1894007588 + a[t + 3] << 0) << 5 | r >>> 27) + (o & (i = i << 30 | i >>> 2) | o & s | i & s) + n - 1894007588 + a[t + 4] << 0, 
                o = o << 30 | o >>> 2;
                for (;t < 80; t += 5) n = (e = (r = (e = (o = (e = (i = (e = (s = (e = n << 5 | n >>> 27) + (r ^ o ^ i) + s - 899497514 + a[t] << 0) << 5 | s >>> 27) + (n ^ (r = r << 30 | r >>> 2) ^ o) + i - 899497514 + a[t + 1] << 0) << 5 | i >>> 27) + (s ^ (n = n << 30 | n >>> 2) ^ r) + o - 899497514 + a[t + 2] << 0) << 5 | o >>> 27) + (i ^ (s = s << 30 | s >>> 2) ^ n) + r - 899497514 + a[t + 3] << 0) << 5 | r >>> 27) + (o ^ (i = i << 30 | i >>> 2) ^ s) + n - 899497514 + a[t + 4] << 0, 
                o = o << 30 | o >>> 2;
                this.h0 = this.h0 + n << 0, this.h1 = this.h1 + r << 0, this.h2 = this.h2 + o << 0, 
                this.h3 = this.h3 + i << 0, this.h4 = this.h4 + s << 0;
            }, t.prototype.hex = function() {
                this.finalize();
                var t = this.h0, e = this.h1, n = this.h2, o = this.h3, i = this.h4;
                return r[t >> 28 & 15] + r[t >> 24 & 15] + r[t >> 20 & 15] + r[t >> 16 & 15] + r[t >> 12 & 15] + r[t >> 8 & 15] + r[t >> 4 & 15] + r[15 & t] + r[e >> 28 & 15] + r[e >> 24 & 15] + r[e >> 20 & 15] + r[e >> 16 & 15] + r[e >> 12 & 15] + r[e >> 8 & 15] + r[e >> 4 & 15] + r[15 & e] + r[n >> 28 & 15] + r[n >> 24 & 15] + r[n >> 20 & 15] + r[n >> 16 & 15] + r[n >> 12 & 15] + r[n >> 8 & 15] + r[n >> 4 & 15] + r[15 & n] + r[o >> 28 & 15] + r[o >> 24 & 15] + r[o >> 20 & 15] + r[o >> 16 & 15] + r[o >> 12 & 15] + r[o >> 8 & 15] + r[o >> 4 & 15] + r[15 & o] + r[i >> 28 & 15] + r[i >> 24 & 15] + r[i >> 20 & 15] + r[i >> 16 & 15] + r[i >> 12 & 15] + r[i >> 8 & 15] + r[i >> 4 & 15] + r[15 & i];
            }, t.prototype.toString = t.prototype.hex, t.prototype.digest = function() {
                this.finalize();
                var t = this.h0, e = this.h1, n = this.h2, r = this.h3, o = this.h4;
                return [ t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o ];
            }, t.prototype.array = t.prototype.digest, t.prototype.arrayBuffer = function() {
                this.finalize();
                var t = new ArrayBuffer(20), e = new DataView(t);
                return e.setUint32(0, this.h0), e.setUint32(4, this.h1), e.setUint32(8, this.h2), 
                e.setUint32(12, this.h3), e.setUint32(16, this.h4), t;
            };
            var y = c();
            i ? module.exports = y : (h.sha1 = y, e && void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return y;
            }.call(exports, __webpack_require__, exports, module)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        }();
    }).call(this, __webpack_require__(20), __webpack_require__(3));
}, function(t, e, n) {
    e.nextTick = function(t) {
        var e = Array.prototype.slice.call(arguments);
        e.shift(), setTimeout(function() {
            t.apply(null, e);
        }, 0);
    }, e.platform = e.arch = e.execPath = e.title = "browser", e.pid = 1, e.browser = !0, 
    e.env = {}, e.argv = [], e.binding = function(t) {
        throw new Error("No such module. (Possibly not yet loaded)");
    }, function() {
        var t, r = "/";
        e.cwd = function() {
            return r;
        }, e.chdir = function(e) {
            t || (t = n(21)), r = t.resolve(e, r);
        };
    }(), e.exit = e.kill = e.umask = e.dlopen = e.uptime = e.memoryUsage = e.uvCounters = function() {}, 
    e.features = {};
}, function(t, e, n) {
    (function(t) {
        function n(t, e) {
            for (var n = 0, r = t.length - 1; r >= 0; r--) {
                var o = t[r];
                "." === o ? t.splice(r, 1) : ".." === o ? (t.splice(r, 1), n++) : n && (t.splice(r, 1), 
                n--);
            }
            if (e) for (;n--; n) t.unshift("..");
            return t;
        }
        function r(t) {
            "string" != typeof t && (t += "");
            var e, n = 0, r = -1, o = !0;
            for (e = t.length - 1; e >= 0; --e) if (47 === t.charCodeAt(e)) {
                if (!o) {
                    n = e + 1;
                    break;
                }
            } else -1 === r && (o = !1, r = e + 1);
            return -1 === r ? "" : t.slice(n, r);
        }
        function o(t, e) {
            if (t.filter) return t.filter(e);
            for (var n = [], r = 0; r < t.length; r++) e(t[r], r, t) && n.push(t[r]);
            return n;
        }
        e.resolve = function() {
            for (var e = "", r = !1, i = arguments.length - 1; i >= -1 && !r; i--) {
                var s = i >= 0 ? arguments[i] : t.cwd();
                if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");
                s && (e = s + "/" + e, r = "/" === s.charAt(0));
            }
            return e = n(o(e.split("/"), function(t) {
                return !!t;
            }), !r).join("/"), (r ? "/" : "") + e || ".";
        }, e.normalize = function(t) {
            var r = e.isAbsolute(t), s = "/" === i(t, -1);
            return (t = n(o(t.split("/"), function(t) {
                return !!t;
            }), !r).join("/")) || r || (t = "."), t && s && (t += "/"), (r ? "/" : "") + t;
        }, e.isAbsolute = function(t) {
            return "/" === t.charAt(0);
        }, e.join = function() {
            var t = Array.prototype.slice.call(arguments, 0);
            return e.normalize(o(t, function(t, e) {
                if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
                return t;
            }).join("/"));
        }, e.relative = function(t, n) {
            function r(t) {
                for (var e = 0; e < t.length && "" === t[e]; e++) ;
                for (var n = t.length - 1; n >= 0 && "" === t[n]; n--) ;
                return e > n ? [] : t.slice(e, n - e + 1);
            }
            t = e.resolve(t).substr(1), n = e.resolve(n).substr(1);
            for (var o = r(t.split("/")), i = r(n.split("/")), s = Math.min(o.length, i.length), a = s, u = 0; u < s; u++) if (o[u] !== i[u]) {
                a = u;
                break;
            }
            for (var c = [], u = a; u < o.length; u++) c.push("..");
            return (c = c.concat(i.slice(a))).join("/");
        }, e.sep = "/", e.delimiter = ":", e.dirname = function(t) {
            if ("string" != typeof t && (t += ""), 0 === t.length) return ".";
            for (var e = t.charCodeAt(0), n = 47 === e, r = -1, o = !0, i = t.length - 1; i >= 1; --i) if (47 === (e = t.charCodeAt(i))) {
                if (!o) {
                    r = i;
                    break;
                }
            } else o = !1;
            return -1 === r ? n ? "/" : "." : n && 1 === r ? "/" : t.slice(0, r);
        }, e.basename = function(t, e) {
            var n = r(t);
            return e && n.substr(-1 * e.length) === e && (n = n.substr(0, n.length - e.length)), 
            n;
        }, e.extname = function(t) {
            "string" != typeof t && (t += "");
            for (var e = -1, n = 0, r = -1, o = !0, i = 0, s = t.length - 1; s >= 0; --s) {
                var a = t.charCodeAt(s);
                if (47 !== a) -1 === r && (o = !1, r = s + 1), 46 === a ? -1 === e ? e = s : 1 !== i && (i = 1) : -1 !== e && (i = -1); else if (!o) {
                    n = s + 1;
                    break;
                }
            }
            return -1 === e || -1 === r || 0 === i || 1 === i && e === r - 1 && e === n + 1 ? "" : t.slice(e, r);
        };
        var i = "b" === "ab".substr(-1) ? function(t, e, n) {
            return t.substr(e, n);
        } : function(t, e, n) {
            return e < 0 && (e = t.length + e), t.substr(e, n);
        };
    }).call(this, n(20));
}, function(t, e) {
    (function(e) {
        t.exports = e;
    }).call(this, {});
}, function(t, e) {
    var n = wx.getRealtimeLogManager ? wx.getRealtimeLogManager() : null;
    t.exports = {
        info: function() {},
        warn: function() {},
        error: function() {},
        setFilterMsg: function(t) {
            n && n.setFilterMsg && "string" == typeof t && n.setFilterMsg(t);
        },
        addFilterMsg: function(t) {
            n && n.addFilterMsg && "string" == typeof t && n.addFilterMsg(t);
        }
    };
}, function(t, e, n) {
    (function(e) {
        t.exports = {
            report: function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
                "function" == typeof e.report && e.report(t, n);
            }
        };
    }).call(this, n(1).default);
}, function(t, e, n) {
    (function(e) {
        function r(t, n) {
            var r = e.createInnerAudioContext();
            void 0 !== n && (r.loop = n);
            var i = o.API.DEVAUDIOURL;
            "prod" == o.API.DEV && (i = o.API.AUDIOURL), r.src = i + t, r.play();
        }
        var o = new (function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n(2)).default)(), i = e.createInnerAudioContext();
        t.exports = {
            backgroundSound: function() {
                i.loop = !0;
                var t = o.API.DEVAUDIOURL;
                "prod" == o.API.DEV && (t = o.API.AUDIOURL), console.log("------9999"), console.log(t), 
                i.src = t + "background.mp3", i.play();
            },
            stopBGSound: function() {
                i.stop();
            },
            clickButton: function() {
                r("button.mp3");
            },
            answerWrong: function() {
                r("answer_wrong.mp3");
            },
            answerCorrect: function() {
                r("answer_correct.mp3");
            },
            timer: function() {
                r("timer.mp3");
            },
            turnNumbers: function() {
                r("turn_numbers.mp3");
            },
            turnPaper: function() {
                r("turn_paper.mp3");
            },
            gameFailure: function() {
                r("game_failure.mp3");
            },
            gameWin: function() {
                r("game_win.mp3");
            }
        };
    }).call(this, n(1).default);
}, , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    var r, o, i;
    !function(n, s) {
        o = [ e ], void 0 !== (i = "function" == typeof (r = s) ? r.apply(e, o) : r) && (t.exports = i);
    }("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, function(t) {
        function e(t) {
            return function(t) {
                if (Array.isArray(t)) return r(t);
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
            }(t) || n(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function n(t, e) {
            if (t) {
                if ("string" == typeof t) return r(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0;
            }
        }
        function r(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
        }
        function o(t, e) {
            if (0 === e.length) return t;
            for (var n, r = t.slice(), o = r.length - 1, i = 0, s = 0; o > 0; o--, i++) {
                s += n = e[i %= e.length].codePointAt(0);
                var a = (n + i + s) % o, u = r[o], c = r[a];
                r[a] = u, r[o] = c;
            }
            return r;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.onlyChars = t.withoutChars = t.keepUnique = t.default = void 0;
        var i = function() {
            function t(t, n, r, i) {
                if (void 0 === t && (t = ""), void 0 === n && (n = 0), void 0 === r && (r = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"), 
                void 0 === i && (i = "cfhistuCFHISTU"), this.minLength = n, "number" != typeof n) throw new TypeError("Hashids: Provided 'minLength' has to be a number (is " + (void 0 === n ? "undefined" : _typeof(n)) + ")");
                if ("string" != typeof t) throw new TypeError("Hashids: Provided 'salt' has to be a string (is " + (void 0 === t ? "undefined" : _typeof(t)) + ")");
                if ("string" != typeof r) throw new TypeError("Hashids: Provided alphabet has to be a string (is " + (void 0 === r ? "undefined" : _typeof(r)) + ")");
                var h = Array.from(t), l = Array.from(r), d = Array.from(i);
                this.salt = h;
                var y = c(l);
                if (y.length < s) throw new Error("Hashids: alphabet must contain at least " + s + " unique characters, provided: " + y.join(""));
                this.alphabet = f(y, d);
                var v, g, m, A = p(d, y);
                this.seps = o(A, h), (0 === this.seps.length || this.alphabet.length / this.seps.length > a) && (v = Math.ceil(this.alphabet.length / a)) > this.seps.length && (g = v - this.seps.length, 
                (m = this.seps).push.apply(m, e(this.alphabet.slice(0, g))), this.alphabet = this.alphabet.slice(g)), 
                this.alphabet = o(this.alphabet, h);
                var w = Math.ceil(this.alphabet.length / u);
                this.alphabet.length < 3 ? (this.guards = this.seps.slice(0, w), this.seps = this.seps.slice(w)) : (this.guards = this.alphabet.slice(0, w), 
                this.alphabet = this.alphabet.slice(w)), this.guardsRegExp = _(this.guards), this.sepsRegExp = _(this.seps), 
                this.allowedCharsRegExp = b([].concat(e(this.alphabet), e(this.guards), e(this.seps)));
            }
            var r = t.prototype;
            return r.encode = function(t) {
                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                return (r = Array.isArray(t) ? t : [].concat(e(null != t ? [ t ] : []), e(r))).length ? (r.every(h) || (r = r.map(function(t) {
                    return "bigint" == typeof t || "number" == typeof t ? t : g(String(t));
                })), r.every(l) ? this._encode(r).join("") : "") : "";
            }, r.decode = function(t) {
                return t && "string" == typeof t && 0 !== t.length ? this._decode(t) : [];
            }, r.encodeHex = function(t) {
                switch (void 0 === t ? "undefined" : _typeof(t)) {
                  case "bigint":
                    t = t.toString(16);
                    break;

                  case "string":
                    if (!/^[0-9a-fA-F]+$/.test(t)) return "";
                    break;

                  default:
                    throw new Error("Hashids: The provided value is neither a string, nor a BigInt (got: " + (void 0 === t ? "undefined" : _typeof(t)) + ")");
                }
                var e = m(t, 12, function(t) {
                    return parseInt("1" + t, 16);
                });
                return this.encode(e);
            }, r.decodeHex = function(t) {
                return this.decode(t).map(function(t) {
                    return t.toString(16).slice(1);
                }).join("");
            }, r._encode = function(t) {
                var n = this, r = this.alphabet, i = t.reduce(function(t, e, n) {
                    return t + ("bigint" == typeof e ? Number(e % BigInt(n + 100)) : e % (n + 100));
                }, 0), s = [ r[i % r.length] ], a = s.slice(), u = this.seps, c = this.guards;
                if (t.forEach(function(i, c) {
                    var f, p = a.concat(n.salt, r);
                    r = o(r, p);
                    var h = d(i, r);
                    if ((f = s).push.apply(f, e(h)), c + 1 < t.length) {
                        var l = h[0].codePointAt(0) + c, y = "bigint" == typeof i ? Number(i % BigInt(l)) : i % l;
                        s.push(u[y % u.length]);
                    }
                }), s.length < this.minLength) {
                    var f = (i + s[0].codePointAt(0)) % c.length;
                    if (s.unshift(c[f]), s.length < this.minLength) {
                        var p = (i + s[2].codePointAt(0)) % c.length;
                        s.push(c[p]);
                    }
                }
                for (var h = Math.floor(r.length / 2); s.length < this.minLength; ) {
                    var l, y;
                    r = o(r, r), (l = s).unshift.apply(l, e(r.slice(h))), (y = s).push.apply(y, e(r.slice(0, h)));
                    var v = s.length - this.minLength;
                    if (v > 0) {
                        var g = v / 2;
                        s = s.slice(g, g + this.minLength);
                    }
                }
                return s;
            }, r.isValidId = function(t) {
                return this.allowedCharsRegExp.test(t);
            }, r._decode = function(t) {
                if (!this.isValidId(t)) throw new Error("The provided ID (" + t + ") is invalid, as it contains characters that do not exist in the alphabet (" + this.guards.join("") + this.seps.join("") + this.alphabet.join("") + ")");
                var r = t.split(this.guardsRegExp), i = r[3 === r.length || 2 === r.length ? 1 : 0];
                if (0 === i.length) return [];
                for (var s, a = i[Symbol.iterator]().next().value, u = i.slice(a.length).split(this.sepsRegExp), c = this.alphabet, f = [], p = function(t, e) {
                    var r;
                    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                        if (Array.isArray(t) || (r = n(t))) {
                            r && (t = r);
                            var o = 0;
                            return function() {
                                return o >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[o++]
                                };
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    return (r = t[Symbol.iterator]()).next.bind(r);
                }(u); !(s = p()).done; ) {
                    var h = s.value, l = o(c, [ a ].concat(e(this.salt), e(c)).slice(0, c.length));
                    f.push(y(Array.from(h), l)), c = l;
                }
                return this._encode(f).join("") !== t ? [] : f;
            }, t;
        }();
        t.default = i;
        var s = 16, a = 3.5, u = 12, c = function(t) {
            return Array.from(new Set(t));
        };
        t.keepUnique = c;
        var f = function(t, e) {
            return t.filter(function(t) {
                return !e.includes(t);
            });
        };
        t.withoutChars = f;
        var p = function(t, e) {
            return t.filter(function(t) {
                return e.includes(t);
            });
        };
        t.onlyChars = p;
        var h = function(t) {
            return "bigint" == typeof t || !Number.isNaN(Number(t)) && Math.floor(Number(t)) === t;
        }, l = function(t) {
            return "bigint" == typeof t || t >= 0 && Number.isSafeInteger(t);
        }, d = function(t, e) {
            var n = [];
            if ("bigint" == typeof t) {
                var r = BigInt(e.length);
                do {
                    n.unshift(e[Number(t % r)]), t /= r;
                } while (t > BigInt(0));
            } else do {
                n.unshift(e[t % e.length]), t = Math.floor(t / e.length);
            } while (t > 0);
            return n;
        }, y = function(t, e) {
            return t.reduce(function(n, r) {
                var o = e.indexOf(r);
                if (-1 === o) throw new Error("The provided ID (" + t.join("") + ") is invalid, as it contains characters that do not exist in the alphabet (" + e.join("") + ")");
                if ("bigint" == typeof n) return n * BigInt(e.length) + BigInt(o);
                var i = n * e.length + o;
                if (Number.isSafeInteger(i)) return i;
                if ("function" == typeof BigInt) return BigInt(n) * BigInt(e.length) + BigInt(o);
                throw new Error("Unable to decode the provided string, due to lack of support for BigInt numbers in the current environment");
            }, 0);
        }, v = /^\+?[0-9]+$/, g = function(t) {
            return v.test(t) ? parseInt(t, 10) : NaN;
        }, m = function(t, e, n) {
            return Array.from({
                length: Math.ceil(t.length / e)
            }, function(r, o) {
                return n(t.slice(o * e, (o + 1) * e));
            });
        }, _ = function(t) {
            return new RegExp(t.map(function(t) {
                return A(t);
            }).sort(function(t, e) {
                return e.length - t.length;
            }).join("|"));
        }, b = function(t) {
            return new RegExp("^[" + t.map(function(t) {
                return A(t);
            }).sort(function(t, e) {
                return e.length - t.length;
            }).join("") + "]+$");
        }, A = function(t) {
            return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        };
    });
} ] ]);