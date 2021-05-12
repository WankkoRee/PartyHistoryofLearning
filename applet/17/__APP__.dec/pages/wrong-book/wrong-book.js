(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/wrong-book/wrong-book" ], {
    55: function(n, t, e) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e(4);
            t(e(2));
            n(t(e(56)).default);
        }).call(this, e(1).createPage);
    },
    56: function(n, t, e) {
        e.r(t);
        var o = e(57), r = e(59);
        for (var i in r) "default" !== i && function(n) {
            e.d(t, n, function() {
                return r[n];
            });
        }(i);
        e(61), e(63);
        var a = e(12), u = Object(a.default)(r.default, o.render, o.staticRenderFns, !1, null, "0bdea0b4", null, !1, o.components, void 0);
        u.options.__file = "pages/wrong-book/wrong-book.vue", t.default = u.exports;
    },
    57: function(n, t, e) {
        e.r(t);
        var o = e(58);
        e.d(t, "render", function() {
            return o.render;
        }), e.d(t, "staticRenderFns", function() {
            return o.staticRenderFns;
        }), e.d(t, "recyclableRender", function() {
            return o.recyclableRender;
        }), e.d(t, "components", function() {
            return o.components;
        });
    },
    58: function(n, t, e) {
        e.r(t), e.d(t, "render", function() {
            return r;
        }), e.d(t, "staticRenderFns", function() {
            return a;
        }), e.d(t, "recyclableRender", function() {
            return i;
        }), e.d(t, "components", function() {
            return o;
        });
        var o, r = function() {
            var n = this, t = n.$createElement, e = (n._self._c, n.no_data ? null : n.isRight(n.wrong_book.question_info)), o = n.no_data ? null : n.isRight(n.wrong_book.question_info), r = n.no_data ? null : n.isRight(n.wrong_book.question_info.options);
            n.$mp.data = Object.assign({}, {
                $root: {
                    m0: e,
                    m1: o,
                    m2: r
                }
            });
        }, i = !1, a = [];
        r._withStripped = !0;
    },
    59: function(n, t, e) {
        e.r(t);
        var o = e(60), r = e.n(o);
        for (var i in o) "default" !== i && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(i);
        t.default = r.a;
    },
    60: function(n, t, e) {
        (function(n) {
            function o(n) {
                return u(n) || a(n) || i(n) || r();
            }
            function r() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function i(n, t) {
                if (n) {
                    if ("string" == typeof n) return s(n, t);
                    var e = Object.prototype.toString.call(n).slice(8, -1);
                    return "Object" === e && n.constructor && (e = n.constructor.name), "Map" === e || "Set" === e ? Array.from(n) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? s(n, t) : void 0;
                }
            }
            function a(n) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(n)) return Array.from(n);
            }
            function u(n) {
                if (Array.isArray(n)) return s(n);
            }
            function s(n, t) {
                (null == t || t > n.length) && (t = n.length);
                for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
                return o;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            e(14);
            var c = getApp().globalData, l = {
                computed: {
                    isRight: function() {
                        return function(n) {
                            return this.shared.isRight(n);
                        };
                    }
                },
                data: function() {
                    return {
                        data_list: [],
                        wrong_book: {},
                        total: 0,
                        current_index: 0,
                        page: 1,
                        pagesize: 10,
                        next_page_url: "",
                        no_data: !0,
                        no_data_text: "",
                        special_id: null
                    };
                },
                onLoad: function(n) {
                    this.userInfo = this.shared.getUserInfo(), console.log(this.userInfo), n.special_id && (this.special_id = n.special_id), 
                    this.getWrongBook();
                },
                methods: {
                    onPreviousQuestion: function() {
                        this.music.clickButton();
                        var n = this;
                        if (0 != n.data_list.length && (console.log("that.current_index 555555...", n.current_index), 
                        n.current_index > 0)) {
                            if (n.is_next) return;
                            n.is_next = !0, n.current_index--, console.log("that.current_index...", n.current_index), 
                            n.wrong_book = n.data_list[n.current_index], setTimeout(function() {
                                n.is_next = !1;
                            }, 100);
                        }
                    },
                    onNextQuestion: function() {
                        this.music.clickButton();
                        var t = this;
                        if (0 != t.data_list.length && !t.is_next) {
                            t.is_next = !0, t.current_index++, console.log("that.current_index...", t.current_index);
                            var e = Number(t.data_list.length - 1);
                            if (e >= t.current_index) t.wrong_book = t.data_list[t.current_index], t.is_next = !1, 
                            e - 1 == t.current_index && (t.page += 1, t.next_page_url && t.getWrongBook()); else {
                                if (!t.next_page_url) return n.showToast({
                                    title: "已经没有下一题了哦~",
                                    icon: "none"
                                }), t.is_next = !1, void t.current_index--;
                                t.page += 1, t.getWrongBook();
                            }
                        }
                    },
                    getWrongBook: function() {
                        var n = this, t = {
                            user_id: n.userInfo.id,
                            page: n.page,
                            pagesize: n.pagesize
                        };
                        this.special_id && (t.special_id = this.special_id), n.request(c.API.API_WRONGQUESTION_LIST, t, function(t) {
                            console.log("getWrongBook...", t), n.is_next = !1;
                            var e = t;
                            if (n.shared.isRight(e)) {
                                n.next_page_url = n.shared.isRight(e.next_page_url) ? e.next_page_url : "", n.total = n.shared.isRight(e.total) ? e.total : 0;
                                var r = n.shared.isRight(e.data) ? e.data : [];
                                r.length > 0 && (n.data_list = [].concat(o(n.data_list), o(r)), 1 == n.page && (n.wrong_book = r[0], 
                                n.no_loading = !0));
                            }
                            0 == n.data_list.length ? (n.no_data = !0, n.no_data_text = "您还没有错题哦~") : n.no_data = !1;
                        }, !n.no_loading);
                    }
                },
                onShareAppMessage: function() {
                    return this.music.clickButton(), {
                        title: c.shareTitle,
                        path: "/pages/index/index",
                        success: function(n) {
                            console.log("转发成功", n);
                        },
                        fail: function(n) {
                            console.log("转发失败", n);
                        }
                    };
                }
            };
            t.default = l;
        }).call(this, e(1).default);
    },
    61: function(n, t, e) {
        e.r(t);
        var o = e(62), r = e.n(o);
        for (var i in o) "default" !== i && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(i);
        t.default = r.a;
    },
    62: function(n, t, e) {},
    63: function(n, t, e) {
        e.r(t);
        var o = e(64), r = e.n(o);
        for (var i in o) "default" !== i && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(i);
        t.default = r.a;
    },
    64: function(n, t, e) {}
}, [ [ 55, "common/runtime", "common/vendor" ] ] ]);