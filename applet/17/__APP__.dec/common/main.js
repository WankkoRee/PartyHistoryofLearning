var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
};

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], [ function(e, t, n) {
    (function(e) {
        function t() {
            if ("function" != typeof WeakMap) return null;
            var o = new WeakMap();
            return t = function() {
                return o;
            }, o;
        }
        function r(o) {
            return o && o.__esModule ? o : {
                default: o
            };
        }
        function l(o, e) {
            var t = Object.keys(o);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(o);
                e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                })), t.push.apply(t, n);
            }
            return t;
        }
        function c(o) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? l(Object(t), !0).forEach(function(e) {
                    i(o, e, t[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(e) {
                    Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(t, e));
                });
            }
            return o;
        }
        function i(o, e, t) {
            return e in o ? Object.defineProperty(o, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : o[e] = t, o;
        }
        n(4);
        var a = r(n(2)), u = r(n(5)), f = r(n(13)), s = r(n(15)), p = r(n(17)), d = n(18), m = r(n(23)), g = n(24), y = r(n(25)), b = function(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" !== (void 0 === e ? "undefined" : o(e)) && "function" != typeof e) return {
                default: e
            };
            var n = t();
            if (n && n.has(e)) return n.get(e);
            var r = {}, l = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var c in e) if (Object.prototype.hasOwnProperty.call(e, c)) {
                var i = l ? Object.getOwnPropertyDescriptor(e, c) : null;
                i && (i.get || i.set) ? Object.defineProperty(r, c, i) : r[c] = e[c];
            }
            return r.default = e, n && n.set(e, r), r;
        }(n(9));
        a.default.config.productionTip = !1, a.default.prototype.$store = f.default, a.default.prototype.shared = s.default, 
        a.default.prototype.request = d.request, a.default.prototype.$log = m.default, a.default.prototype.$report = g.report, 
        a.default.prototype.music = y.default, a.default.prototype.API = b, a.default.use(p.default), 
        "prod" === b.DEV && (console.log = function() {}), u.default.mpType = "app", e(new a.default(c(c({}, u.default), {}, {
            store: f.default
        }))).$mount();
    }).call(this, n(1).createApp);
}, , , , , function(o, e, t) {
    t.r(e);
    var n = t(6);
    for (var r in n) "default" !== r && function(o) {
        t.d(e, o, function() {
            return n[o];
        });
    }(r);
    t(10);
    var l = t(12), c = Object(l.default)(n.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
    c.options.__file = "App.vue", e.default = c.exports;
}, function(o, e, t) {
    t.r(e);
    var n = t(7), r = t.n(n);
    for (var l in n) "default" !== l && function(o) {
        t.d(e, o, function() {
            return n[o];
        });
    }(l);
    e.default = r.a;
}, function(o, e, t) {
    (function(o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = t(8), r = null, l = {
            globalData: {
                API: t(9),
                isIphoneX: !1,
                userInfo: {
                    id: -1,
                    token: null
                },
                shareTitle: "同学，一起学党史闯关答题，你敢挑战吗？",
                shareTitle2: "同学，一起学党史闯关答题，你敢挑战吗？",
                showOfficialAccount: !1,
                musicPlay: !1,
                timerPlay: null,
                isBGMusic: !0,
                isShowTopicHot: !0
            },
            methods: {
                liveRoom: function(o, e) {
                    if (console.log("liveRoom....."), r) {
                        var t = {
                            user_id: o,
                            room_name: e
                        };
                        t = JSON.stringify(t), r.emit("leave-room", t, function(o) {
                            console.log("leave-room:", o);
                        }), r.disconnect(), r = null, console.log("liveRoom.socket", r);
                    }
                },
                joinRoom: function(e, t) {
                    r && (r.disconnect(), r = null), console.log("-----socket_url"), console.log(this.globalData.API);
                    var l = this.globalData.API.DEVSOCKETURL;
                    "prod" == this.globalData.API.DEV && (l = this.globalData.API.SOCKETURL), console.log("-----socket_url"), 
                    console.log(l), r = n(l), console.log("joinRoom:", {
                        user_id: e,
                        roomName: t
                    }), r.on("connect", function() {
                        console.log("connect...", r.connected);
                        var o = {
                            user_id: e,
                            room_name: t
                        };
                        o = JSON.stringify(o), r.emit("join-room", o, function(o) {
                            console.log("join-room:", o);
                        });
                    }), r.on("pk", function(e) {
                        if (e.length > 1) {
                            console.log("ps...", e), console.log("msg...", JSON.parse(e));
                            var t = JSON.parse(e);
                            "1006" == t.code && o.$emit("pk_join_room", t.data.pk_user), "1007" == t.code && o.$emit("start_game", ""), 
                            "1008" == t.code && o.$emit("finished", ""), "2000" == t.code && o.$emit("pk_submit", t);
                        }
                    }), r.on("disconnect", function(o) {
                        console.log("disconnect...", o);
                    });
                }
            },
            onLaunch: function(e) {
                var t = this, n = o.getStorageSync("userInfo");
                console.log(n, "用户信息"), n && (void 0 === n.force_update ? o.removeStorageSync("userInfo") : n.force_update ? o.removeStorageSync("userInfo") : n.nickname || o.removeStorageSync("userInfo"));
                var r = o.createInnerAudioContext(), l = this.API.DEVAUDIOURL;
                "prod" == this.API.DEV && (l = this.API.AUDIOURL), console.log(l), r.src = l + "timer.mp3", 
                this.globalData.timerPlay = r, console.log("------ononLaunch-----"), console.log(e.scene), 
                1047 != e.scene && 1124 != e.scene && 1089 != e.scene && 1038 != e.scene && 1011 != e.scene || (console.log("-------kkkkk"), 
                this.globalData.showOfficialAccount = !0, console.log(this.globalData.showOfficialAccount)), 
                console.log(e), o.getSystemInfo({
                    success: function(o) {
                        -1 != o.model.search("iPhone X") && (t.globalData.isIphoneX = !0);
                    }
                });
            },
            onShow: function() {
                console.log("------onshow-----");
                var e = o.getUpdateManager();
                e.onCheckForUpdate(function(t) {
                    t.hasUpdate && e.onUpdateReady(function(t) {
                        o.showModal({
                            title: "更新提示",
                            content: "发现新版本，是否重启应用?",
                            confirmColor: "#ff7b2e",
                            showCancel: !1,
                            success: function(o) {
                                o.confirm && e.applyUpdate();
                            }
                        });
                    });
                }), e.onUpdateFailed(function(t) {
                    o.showModal({
                        title: "提示",
                        content: "检查到有新版本，但下载失败，请检查网络设置",
                        confirmColor: "#ff7b2e",
                        success: function(o) {
                            o.confirm && e.applyUpdate();
                        }
                    });
                });
            },
            onHide: function() {
                console.log("小程序切后台");
            }
        };
        e.default = l;
    }).call(this, t(1).default);
}, , , function(o, e, t) {
    t.r(e);
    var n = t(11), r = t.n(n);
    for (var l in n) "default" !== l && function(o) {
        t.d(e, o, function() {
            return n[o];
        });
    }(l);
    e.default = r.a;
}, function(o, e, t) {} ], [ [ 0, "common/runtime", "common/vendor" ] ] ]);