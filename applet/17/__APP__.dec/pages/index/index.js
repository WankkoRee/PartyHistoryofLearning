(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/index" ], {
    26: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n(4);
            t(n(2));
            e(t(n(27)).default);
        }).call(this, n(1).createPage);
    },
    27: function(e, t, n) {
        n.r(t);
        var i = n(28), s = n(30);
        for (var o in s) "default" !== o && function(e) {
            n.d(t, e, function() {
                return s[e];
            });
        }(o);
        n(32);
        var a = n(12), r = Object(a.default)(s.default, i.render, i.staticRenderFns, !1, null, "57280228", null, !1, i.components, void 0);
        r.options.__file = "pages/index/index.vue", t.default = r.exports;
    },
    28: function(e, t, n) {
        n.r(t);
        var i = n(29);
        n.d(t, "render", function() {
            return i.render;
        }), n.d(t, "staticRenderFns", function() {
            return i.staticRenderFns;
        }), n.d(t, "recyclableRender", function() {
            return i.recyclableRender;
        }), n.d(t, "components", function() {
            return i.components;
        });
    },
    29: function(e, t, n) {
        n.r(t), n.d(t, "render", function() {
            return s;
        }), n.d(t, "staticRenderFns", function() {
            return a;
        }), n.d(t, "recyclableRender", function() {
            return o;
        }), n.d(t, "components", function() {
            return i;
        });
        var i, s = function() {
            var e = this, t = e.$createElement;
            e._self._c;
        }, o = !1, a = [];
        s._withStripped = !0;
    },
    30: function(e, t, n) {
        n.r(t);
        var i = n(31), s = n.n(i);
        for (var o in i) "default" !== o && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(o);
        t.default = s.a;
    },
    31: function(e, t, n) {
        (function(e) {
            function i() {
                return Math.round(new Date().getTime() / 1e3);
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            n(19);
            var s = n(16), o = getApp().globalData, a = {
                data: function() {
                    return {
                        has_login: !1,
                        show_home_menus: !1,
                        userInfo: {},
                        shareToken: "",
                        click_type: "",
                        click_token: "",
                        enter_type: "department",
                        qr_id: "",
                        isUserProfileAPI: null,
                        isMusic: !0,
                        isShowTopicHot: !0,
                        share_special_id: "",
                        is_show_update_modal: !1,
                        update_contents: []
                    };
                },
                computed: {
                    isRight: function() {
                        return function(e) {
                            return this.shared.isRight(e);
                        };
                    }
                },
                onLoad: function(t) {
                    console.log("------onLoad"), console.log(this.show_home_menus), console.log(t);
                    var n = e.canIUse("getUserProfile");
                    if (this.isUserProfileAPI = n, this.click_type = t.type, this.click_token = t.token, 
                    t.enter_type && (this.enter_type = t.enter_type), t.special_id && (this.share_special_id = t.special_id), 
                    t.scene) {
                        var i = decodeURIComponent(t.scene), s = this.parseData(i);
                        "de_qr" == s.type ? (this.click_type = "department_qr", this.qr_id = s.first_id) : "sp_qr" == s.type && (this.click_type = "special_qr", 
                        this.qr_id = s.special_id);
                    }
                    e.showShareMenu({
                        withShareTicket: !0
                    }), this.getUpdateInfo();
                },
                onHide: function() {
                    this.music.stopBGSound();
                },
                onShow: function() {
                    console.log("------onshow"), console.log(this.show_home_menus), this.userInfo = this.shared.getUserInfo(), 
                    o.isBGMusic && this.music.backgroundSound(), this.isMusic = o.isBGMusic, this.isShowTopicHot = o.isShowTopicHot;
                    e.getStorageSync("hasSetMyinfo");
                    if (this.shared.isRight(this.userInfo) && this.shared.isRight(this.userInfo.nickname)) {
                        var t = this.checkOrganizationFun();
                        console.log("-------checkOrganization:", t), t && (this.userInfo.organization, this.toSharePage(), 
                        this.show_home_menus = !0, this.has_login = !0);
                    } else this.show_home_menus = !1, this.checkLogin();
                    console.log(this.userInfo);
                    var n = e.getStorageSync("afterShare");
                    if (console.log("afterShare：", n), n) e.navigateTo({
                        url: "../pvp/pvp?type=pk&token=" + this.shareToken
                    }); else {
                        var a = Math.random().toString(36) + i(), r = s.hash(a);
                        console.log("tokenStr:", r), this.shareToken = r;
                    }
                    null !== o.timerPlay && o.timerPlay.stop();
                },
                methods: {
                    checkLogin: function() {
                        var t = this;
                        t.shared.islogin(t.userInfo) ? t.shared.wxlogin(function(e) {
                            t.userInfo = e, t.checkNickName();
                        }) : e.checkSession({
                            success: function(e) {
                                console.log("-----checkSession----suss"), t.has_login = !1;
                            },
                            fail: function(e) {
                                console.log("---checkSession--err"), t.shared.wxlogin(function(e) {
                                    t.has_login = !1;
                                });
                            }
                        });
                    },
                    checkNickName: function() {
                        var e = this;
                        if (e.shared.isRight(e.userInfo.nickname)) {
                            var t = this.checkOrganizationFun();
                            console.log("-------checkOrganization:", t), t && (e.toSharePage(), e.has_login = !0);
                        } else e.has_login = !1;
                    },
                    toLogin: function() {
                        var t = this;
                        this.music.clickButton(), e.checkSession({
                            success: function(e) {
                                console.log("---checkSession--success"), t.show_home_menus = !1;
                            },
                            fail: function(e) {
                                console.log("---checkSession--err"), t.shared.wxlogin(function(e) {
                                    t.show_home_menus = !1;
                                });
                            }
                        });
                    },
                    notReady: function() {
                        this.music.clickButton(), e.removeStorageSync("afterShare"), this.show_home_menus = !0;
                    },
                    newGetUserInfo: function() {
                        this.music.clickButton();
                        var t = this;
                        e.getUserProfile({
                            lang: "zh_CN",
                            desc: "用于展示于个人信息中",
                            success: function(e) {
                                console.log("-----uni.getUserProfile-----------------", e), t.shared.islogin(t.userInfo) ? t.shared.wxlogin(function(n) {
                                    t.userInfo = n, t.newupdateInfo(e);
                                }) : t.newupdateInfo(e);
                            },
                            fail: function(e) {
                                t.has_login = !1, t.show_home_menus = !1;
                            }
                        });
                    },
                    bindGetUserInfo: function(e) {
                        this.music.clickButton();
                        var t = this;
                        console.log(e), t.shared.islogin(t.userInfo) ? t.shared.wxlogin(function(n) {
                            t.userInfo = n, t.updateInfo(e);
                        }) : t.updateInfo(e);
                    },
                    newupdateInfo: function(e) {
                        var t = this;
                        t.request(t.API.API_UPDATEUSERINFO, {
                            user_id: t.userInfo.id,
                            encrypted_data: e.encryptedData,
                            iv: e.iv
                        }, function(e) {
                            t.shared.setUserInfo(e);
                            var n = t.checkOrganizationFun();
                            console.log("-------checkOrganization:", n), n && (t.toSharePage(), setTimeout(function() {
                                t.has_login = !0, t.show_home_menus = !0, t.userInfo = t.shared.getUserInfo();
                            }, 50));
                        }, !0);
                    },
                    updateInfo: function(e) {
                        var t = this;
                        if ("getUserInfo:ok" == e.detail.errMsg) {
                            var n = e.detail;
                            t.request(t.API.API_UPDATEUSERINFO, {
                                user_id: t.userInfo.id,
                                encrypted_data: n.encryptedData,
                                iv: n.iv
                            }, function(e) {
                                t.shared.setUserInfo(e);
                                var n = t.checkOrganizationFun();
                                console.log("-------checkOrganization:", n), n && (t.toSharePage(), setTimeout(function() {
                                    t.has_login = !0, t.show_home_menus = !0, t.userInfo = t.shared.getUserInfo();
                                }, 50));
                            }, !0);
                        } else t.has_login = !1, t.show_home_menus = !1;
                    },
                    isAddGroup: function(t) {
                        var n = this;
                        if (this.music.clickButton(), this.has_login) {
                            var i = "rank_user", s = "获取团队信息";
                            "department" == t && (i = "rank_quanzi", s = "获取信息中"), e.showLoading({
                                title: s
                            }), this.request(this.API.API_USER_DETAIL, {
                                user_id: this.userInfo.id,
                                type: i
                            }, function(i) {
                                console.log("66666", i);
                                var s = i.user || {};
                                n.shared.setUserInfo(s), e.hideLoading(), "department" == t ? void 0 === s.quanzi_user || null === s.quanzi_user ? e.navigateTo({
                                    url: "../../packageA/pages/first-department/first-department"
                                }) : e.navigateTo({
                                    url: "../../packageA/pages/department-index/department-index"
                                }) : void 0 === s.team_user || null === s.team_user ? e.navigateTo({
                                    url: "../../packageA/pages/create-group/create-group"
                                }) : e.navigateTo({
                                    url: "../../packageA/pages/group/group"
                                });
                            }), setTimeout(function() {
                                e.hideLoading();
                            }, 3e3);
                        } else e.showModal({
                            title: "提示",
                            content: "您未登录",
                            showCancel: !1
                        });
                    },
                    toOtherPage: function(t) {
                        this.music.clickButton();
                        this.userInfo;
                        this.has_login ? e.navigateTo({
                            url: t
                        }) : e.showModal({
                            title: "提示",
                            content: "您未登录",
                            showCancel: !1
                        });
                    },
                    flushUserInfo: function() {
                        var e = this;
                        e.request(e.API.API_USER_DETAIL, {
                            user_id: e.userInfo.id,
                            type: "rank_user"
                        }, function(t) {
                            var n = t.user || {};
                            e.shared.setUserInfo(n);
                        }, !1);
                    },
                    toSharePage: function() {
                        var t = this;
                        if ("pk_share" == this.click_type) {
                            var n = "../pvp/pvp?type=pk_share&token=" + this.click_token;
                            "rank_quanzi" === this.enter_type && (n += "&enter_type=rank_quanzi"), e.navigateTo({
                                url: n
                            });
                        } else if ("examfriend_share" == this.click_type) e.navigateTo({
                            url: "../answer/answer?type=rank_bot&pk_user_id=1&is_exam_friend=true&token=" + this.click_token
                        }); else if ("team_share" == this.click_type) this.request(this.API.API_USER_DETAIL, {
                            user_id: this.userInfo.id,
                            type: "rank_user"
                        }, function(n) {
                            var i = n.user || {};
                            t.shared.setUserInfo(i), void 0 === i.team_user || null === i.team_user ? e.navigateTo({
                                url: "../../packageA/pages/create-group/create-group?team_num=" + t.click_token
                            }) : e.navigateTo({
                                url: "../../packageA/pages/group/group?is_team=1"
                            });
                        }); else if ("department_share" == this.click_type) this.request(this.API.API_USER_DETAIL, {
                            user_id: this.userInfo.id,
                            type: "rank_quanzi"
                        }, function(n) {
                            console.log("66666", n);
                            var i = n.user || {};
                            t.shared.setUserInfo(i), e.navigateTo({
                                url: "../../packageA/pages/department-index/department-index?quanzi_num=" + t.click_token
                            });
                        }); else if ("department_qr" == this.click_type) this.request(this.API.API_USER_DETAIL, {
                            user_id: this.userInfo.id,
                            type: "rank_quanzi"
                        }, function(n) {
                            console.log("66666", n);
                            var i = n.user || {};
                            t.shared.setUserInfo(i), i.quanzi_user ? e.navigateTo({
                                url: "../../packageA/pages/department-index/department-index",
                                success: function(e) {
                                    t.click_type = "";
                                }
                            }) : e.navigateTo({
                                url: "../../packageA/pages/select-department/select-department?first_id=" + t.qr_id
                            });
                        }); else if ("special_share" == this.click_type) e.navigateTo({
                            url: "../../packageB/pages/reading-day/reading-day?special_id=" + this.click_token,
                            success: function() {
                                t.click_type = "";
                            }
                        }); else if ("special_pk_share" == this.click_type) {
                            var i = "../pvp/pvp?type=special_pk_share&token=" + this.click_token;
                            "" != this.share_special_id && (i += "&special_id=" + this.share_special_id), e.navigateTo({
                                url: i
                            });
                        } else "special_qr" == this.click_type && e.navigateTo({
                            url: "../../packageB/pages/reading-day/reading-day?special_id=" + this.qr_id,
                            success: function() {
                                t.click_type = "";
                            }
                        });
                    },
                    parseData: function(e) {
                        var t = {};
                        return e.split("&").map(function(e) {
                            var n = e.split("=");
                            t[n[0]] = n[1];
                        }), t;
                    },
                    musicSwitch: function() {
                        this.music.clickButton();
                        var t = "背景音乐已关闭";
                        o.isBGMusic ? this.music.stopBGSound() : (t = "背景音乐已打开", this.music.backgroundSound()), 
                        o.isBGMusic = !o.isBGMusic, this.isMusic = o.isBGMusic, e.showToast({
                            title: t,
                            icon: "none"
                        });
                    },
                    getUpdateInfo: function() {
                        var t = this;
                        this.request(this.API.API_UPDATEINFO, {
                            version: this.API.VERSION
                        }, function(n) {
                            var i = n.version_tips || [], s = n.configs || {};
                            e.setStorageSync("configs", s), i.length > 0 && (t.update_contents = i, t.is_show_update_modal = !0);
                        }, !1);
                    },
                    clickTopic: function() {
                        o.isShowTopicHot && (o.isShowTopicHot = !1, this.isShowTopicHot = o.isShowTopicHot), 
                        this.toOtherPage("../../packageB/pages/special-competition/special-competition");
                    },
                    checkOrganizationFun: function() {
                        return !0;
                    },
                    closeUpdateModal: function() {
                        this.music.clickButton(), this.is_show_update_modal = !1;
                    }
                },
                onShareAppMessage: function(t) {
                    console.log(t), this.music.clickButton();
                    var n = !1, i = o.shareTitle;
                    return console.log(i), "" != this.click_type && (this.click_type = ""), "button" == t.from && (n = !0, 
                    i = o.shareTitle2, e.setStorageSync("afterShare", !0)), console.log("----this.shareToken:", this.shareToken), 
                    {
                        title: i,
                        path: n ? "pages/index/index?type=pk_share&token=" + this.shareToken : "pages/index/index?type=share",
                        success: function(e) {
                            console.log("转发成功", e);
                        },
                        fail: function(e) {
                            console.log("转发失败", e);
                        }
                    };
                }
            };
            t.default = a;
        }).call(this, n(1).default);
    },
    32: function(e, t, n) {
        n.r(t);
        var i = n(33), s = n.n(i);
        for (var o in i) "default" !== o && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(o);
        t.default = s.a;
    },
    33: function(e, t, n) {}
}, [ [ 26, "common/runtime", "common/vendor" ] ] ]);