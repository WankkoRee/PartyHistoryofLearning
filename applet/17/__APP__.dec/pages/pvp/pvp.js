(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/pvp/pvp" ], {
    65: function(e, n, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t(4);
            n(t(2));
            e(n(t(66)).default);
        }).call(this, t(1).createPage);
    },
    66: function(e, n, t) {
        t.r(n);
        var a = t(67), r = t(69);
        for (var i in r) "default" !== i && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(i);
        t(71);
        var o = t(12), s = Object(o.default)(r.default, a.render, a.staticRenderFns, !1, null, "d3226848", null, !1, a.components, void 0);
        s.options.__file = "pages/pvp/pvp.vue", n.default = s.exports;
    },
    67: function(e, n, t) {
        t.r(n);
        var a = t(68);
        t.d(n, "render", function() {
            return a.render;
        }), t.d(n, "staticRenderFns", function() {
            return a.staticRenderFns;
        }), t.d(n, "recyclableRender", function() {
            return a.recyclableRender;
        }), t.d(n, "components", function() {
            return a.components;
        });
    },
    68: function(e, n, t) {
        t.r(n), t.d(n, "render", function() {
            return r;
        }), t.d(n, "staticRenderFns", function() {
            return o;
        }), t.d(n, "recyclableRender", function() {
            return i;
        }), t.d(n, "components", function() {
            return a;
        });
        var a, r = function() {
            var e = this, n = e.$createElement;
            e._self._c;
        }, i = !1, o = [];
        r._withStripped = !0;
    },
    69: function(e, n, t) {
        t.r(n);
        var a = t(70), r = t.n(a);
        for (var i in a) "default" !== i && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(i);
        n.default = r.a;
    },
    70: function(e, n, t) {
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t = getApp().globalData, a = null, r = null, i = {
                data: function() {
                    return {
                        user_name: "",
                        user_avatar: "",
                        user_lv: "",
                        user_g_name: "",
                        user_exp: "",
                        pk_avatar: "",
                        pk_name: "",
                        pk_lv: "",
                        pk_g_name: "",
                        pk_exp: "",
                        game_type: "",
                        pk_user_id: 1,
                        roomName: "",
                        user_id: "",
                        isStart: !1,
                        left_top: 0,
                        right_top: 0,
                        enter_type: "not_rank_quanzi",
                        type: "",
                        special_id: null
                    };
                },
                methods: {
                    next: function() {
                        r && (clearTimeout(r), r = null), console.log(this.game_type);
                        var n = "../answer/answer?type=" + this.game_type + "&pk_user_id=" + this.pk_user_id + "&enter_type=" + this.enter_type;
                        "special_bot" != this.type && "special_self" != this.type || (n += "&special_id=" + this.special_id), 
                        console.log("-------url"), console.log(n), e.redirectTo({
                            url: n
                        });
                    },
                    pkNext: function(n) {
                        r && (clearTimeout(r), r = null);
                        var t = "../answer/answer?type=pk&token=".concat(n, "&pk_user_id=").concat(this.pk_user_id, "&enter_type=").concat(this.enter_type);
                        console.log("-----this.type"), console.log(this.type), "special_pk" != this.type && "special_pk_share" != this.type || (t = "../answer/answer?type=special_pk&token=".concat(n, "&pk_user_id=").concat(this.pk_user_id, "&enter_type=").concat(this.enter_type, "&special_id=").concat(this.special_id)), 
                        console.log("-------url"), console.log(t), e.redirectTo({
                            url: t
                        });
                    },
                    display_user: function(e) {
                        var n = {
                            user_name: e.nickname,
                            user_lv: e.expInfo.lever,
                            user_g_name: e.expInfo.name,
                            user_exp: e.experience,
                            user_avatar: e.avatar
                        };
                        Object.assign(this.$data, n);
                    },
                    display_pk_user: function(e) {
                        var n = {
                            pk_avatar: e.avatar,
                            pk_name: e.nickname,
                            pk_lv: e.expInfo.lever,
                            pk_g_name: e.expInfo.name,
                            pk_exp: e.experience,
                            pk_user_id: e.id
                        };
                        Object.assign(this.$data, n);
                    }
                },
                onShow: function() {
                    e.removeStorageSync("afterShare");
                },
                onUnload: function() {
                    console.log("pvp_onUnload"), this.isStart || getApp().liveRoom(this.user_id, this.roomName), 
                    a && (clearTimeout(a), a = null), r && (clearTimeout(r), r = null);
                    var n = getCurrentPages(), t = n[n.length - 2];
                    "" != t.$vm.click_type && (t.$vm.click_type = ""), "pk" != this.type && "special_pk" != this.type || e.hideLoading();
                },
                onLoad: function(n) {
                    var i = this;
                    console.log("-----pvpoptions:"), console.log(n);
                    var o = this, s = o.shared.getUserInfo();
                    n.special_id && (o.special_id = n.special_id), n.enter_type && (o.enter_type = n.enter_type), 
                    o.type = n.type, console.log("-----that.type"), console.log(o.type);
                    var p = e.getSystemInfoSync().screenHeight / e.getSystemInfoSync().screenWidth;
                    o.left_top = 750 * p * .2, o.right_top = 750 * p * .36, null !== t.timerPlay && t.timerPlay.stop();
                    var u = e.getStorageSync("userInfo");
                    if (console.log("userINfo", u), void 0 !== n.token && (this.roomName = n.token, 
                    this.user_id = u.id, e.setStorageSync("pk_token", n.token)), "pk" == n.type || "special_pk" == n.type) {
                        this.display_user(u);
                        var c = {
                            user_id: u.id,
                            token: n.token,
                            enter_type: o.enter_type
                        };
                        "rank_quanzi" == o.enter_type && (c.rank_type = "rank_quanzi", c.quanzi_num = s.quanzi_user.quanzi_num), 
                        "special_pk" == n.type && (c.special_id = o.special_id), o.request(t.API.API_PK_WAITFORPKUSER, c, function(n) {
                            console.log("res:", n), n.questions.length > 1 && (e.setStorageSync("last_rt_questions", n.questions), 
                            o.shared.setUserInfo(n.user), n.extra_score ? e.setStorageSync("extraScore", n.extra_score) : e.setStorageSync("extraScore", 0), 
                            e.showLoading({
                                title: "等待好友进入"
                            }));
                        }, !1, function(n) {
                            "rank_quanzi" == o.enter_type ? e.navigateBack() : e.reLaunch({
                                url: "../index/index"
                            });
                        }), e.$once("pk_join_room", function(n) {
                            var t = n;
                            i.display_pk_user(t), e.setStorageSync("last_pk_user", t), e.hideLoading();
                        }), e.$once("start_game", function(t) {
                            e.hideLoading(), i.isStart = !0, i.pkNext(n.token);
                        }), getApp().joinRoom(u.id, n.token);
                    } else if ("pk_share" == n.type || "special_pk_share" == n.type) {
                        this.display_user(u), e.$once("finished", function(n) {
                            e.showModal({
                                title: "",
                                content: "游戏已开始或结束",
                                showCancel: !1,
                                success: function(n) {
                                    n.confirm && e.reLaunch({
                                        url: "../index/index"
                                    });
                                }
                            });
                        });
                        var _ = {
                            user_id: u.id,
                            token: n.token,
                            type: n.type,
                            enter_type: o.enter_type
                        };
                        if ("rank_quanzi" == o.enter_type) {
                            if (_.rank_type = "rank_quanzi", !s.quanzi_user) return void e.showModal({
                                title: "",
                                content: "您暂未加入圈子",
                                showCancel: !1,
                                success: function(n) {
                                    e.reLaunch({
                                        url: "../index/index"
                                    });
                                }
                            });
                            _.quanzi_num = s.quanzi_user.quanzi_num;
                        }
                        "special_pk_share" == o.type && (_.special_id = o.special_id), o.request(t.API.API_PK_WAITFORPKUSER, _, function(t) {
                            console.log("res:", t), t.questions.length > 1 && (e.setStorageSync("last_rt_questions", t.questions), 
                            o.display_pk_user(t.share_user), e.setStorageSync("last_pk_user", t.share_user), 
                            t.extra_score ? e.setStorageSync("extraScore", t.extra_score) : e.setStorageSync("extraScore", 0), 
                            e.$once("start_game", function(e) {
                                i.isStart = !0, i.pkNext(n.token);
                            }), getApp().joinRoom(u.id, n.token));
                        }, !1, function(n) {
                            e.reLaunch({
                                url: "../index/index"
                            });
                        });
                    } else {
                        var l = {
                            user_id: u.id
                        };
                        "rank_team" == n.type && (l.type = n.type, l.team_num = n.team_num), "rank_quanzi" == o.enter_type && (l.type = "rank_quanzi", 
                        l.quanzi_num = s.quanzi_user.quanzi_num), "special_bot" != n.type && "special_self" != n.type || (l.type = n.type, 
                        l.special_id = o.special_id), o.request(t.API.API_CHOOSE_USER, l, function(n) {
                            var t = n.user, r = n.pk_user;
                            console.log("********************************************************"), console.log(t, r), 
                            console.log("********************************************************");
                            var i = {
                                user_name: t.nickname,
                                user_lv: t.expInfo.lever,
                                user_g_name: t.expInfo.name,
                                user_exp: t.experience,
                                user_avatar: t.avatar,
                                pk_avatar: r.avatar,
                                pk_name: r.nickname,
                                pk_lv: r.expInfo.lever,
                                pk_g_name: r.expInfo.name,
                                pk_exp: r.experience,
                                game_type: n.game_type,
                                pk_user_id: r.id
                            };
                            e.setStorageSync("last_pk_user", r), Object.assign(o.$data, i), a = setTimeout(function() {
                                o.next();
                            }, 1e3);
                        }, !0, function(n) {
                            "rank_quanzi" == o.enter_type ? e.navigateBack() : e.reLaunch({
                                url: "../index/index"
                            });
                        });
                    }
                    r = setTimeout(function() {
                        "rank_quanzi" == o.enter_type && "pk_share" != n.type && "special_pk_share" != n.type ? e.navigateBack() : e.reLaunch({
                            url: "../index/index"
                        });
                    }, 6e4);
                }
            };
            n.default = i;
        }).call(this, t(1).default);
    },
    71: function(e, n, t) {
        t.r(n);
        var a = t(72), r = t.n(a);
        for (var i in a) "default" !== i && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(i);
        n.default = r.a;
    },
    72: function(e, n, t) {}
}, [ [ 65, "common/runtime", "common/vendor" ] ] ]);