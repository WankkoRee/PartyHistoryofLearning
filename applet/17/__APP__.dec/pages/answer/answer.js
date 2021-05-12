(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/answer/answer" ], {
    44: function(e, t, s) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            s(4);
            t(s(2));
            e(t(s(45)).default);
        }).call(this, s(1).createPage);
    },
    45: function(e, t, s) {
        s.r(t);
        var i = s(46), n = s(48);
        for (var r in n) "default" !== r && function(e) {
            s.d(t, e, function() {
                return n[e];
            });
        }(r);
        s(51), s(53);
        var o = s(12), u = Object(o.default)(n.default, i.render, i.staticRenderFns, !1, null, "514287f4", null, !1, i.components, void 0);
        u.options.__file = "pages/answer/answer.vue", t.default = u.exports;
    },
    46: function(e, t, s) {
        s.r(t);
        var i = s(47);
        s.d(t, "render", function() {
            return i.render;
        }), s.d(t, "staticRenderFns", function() {
            return i.staticRenderFns;
        }), s.d(t, "recyclableRender", function() {
            return i.recyclableRender;
        }), s.d(t, "components", function() {
            return i.components;
        });
    },
    47: function(e, t, s) {
        s.r(t), s.d(t, "render", function() {
            return n;
        }), s.d(t, "staticRenderFns", function() {
            return o;
        }), s.d(t, "recyclableRender", function() {
            return r;
        }), s.d(t, "components", function() {
            return i;
        });
        var i;
        try {
            i = {
                studyRoomCard: function() {
                    return s.e("components/study-room-card/study-room-card").then(s.bind(null, 233));
                }
            };
        } catch (e) {
            if (-1 === e.message.indexOf("Cannot find module") || -1 === e.message.indexOf(".vue")) throw e;
            console.error(e.message), console.error("1. 排查组件名称拼写是否正确"), console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"), 
            console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件");
        }
        var n = function() {
            var e = this, t = e.$createElement, s = (e._self._c, e.ourScore()), i = e.isStudyRoom || e.isExamFriend ? null : e.enemyScore();
            e.$mp.data = Object.assign({}, {
                $root: {
                    m0: s,
                    m1: i
                }
            });
        }, r = !1, o = [];
        n._withStripped = !0;
    },
    48: function(e, t, s) {
        s.r(t);
        var i = s(49), n = s.n(i);
        for (var r in i) "default" !== r && function(e) {
            s.d(t, e, function() {
                return i[e];
            });
        }(r);
        t.default = n.a;
    },
    49: function(e, t, s) {
        (function(e) {
            function i() {
                return Math.round(new Date().getTime() / 1e3);
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = new (function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(s(50)).default)("leadfyy!gogogo"), r = getApp().globalData, o = 10, u = null, a = 5, c = !0, l = null, p = {
                components: {
                    studyRoomCard: function() {
                        s.e("components/study-room-card/study-room-card").then(function() {
                            return resolve(s(233));
                        }.bind(null, s)).catch(s.oe);
                    }
                },
                computed: {
                    hoverCheck: function() {
                        return this.disable ? "" : "white";
                    },
                    ourPercent: function(e) {
                        return (this.ourScore() / 470 * 100).toFixed(2);
                    },
                    enemyPercent: function(e) {
                        return (this.enemyScore() / 470 * 100).toFixed(2);
                    }
                },
                data: function() {
                    return {
                        isStudyRoom: !1,
                        secTxt: 10,
                        content: "",
                        options: [],
                        currentQuestions: [],
                        currentIndex: 0,
                        optionsStyles: [ "", "", "", "" ],
                        passTimeResult: [],
                        scoreResult: [],
                        answerIds: [],
                        startTime: 0,
                        disable: !1,
                        rightCount: 0,
                        selfStudyModal: !1,
                        pk_user_info: {},
                        pk_info: {},
                        user_info: {},
                        experience: 0,
                        type: "",
                        isPageHide: !1,
                        pk_scoreResult: [],
                        is_pk_click: !1,
                        is_pk_user_click: !1,
                        upgrade: !1,
                        max_right_count: 0,
                        selectIndex: null,
                        paddingRight: "20rpx",
                        isRight: !1,
                        isExamFriend: !1,
                        exam_token: "",
                        exam_friend_id: null,
                        exp_data: {},
                        complete_title: "自习",
                        isAnswerFinish: !1,
                        enter_type: "not_rank_quanzi",
                        special_id: null
                    };
                },
                onHide: function() {
                    this.isPageHide = !0, r.timerPlay.stop();
                },
                onShow: function() {
                    var t = this;
                    if (t.isPageHide) {
                        if (null != u && (clearInterval(u), u = null), t.isAnswerFinish) return;
                        e.showModal({
                            title: "",
                            content: "您已退出挑战界面，挑战结束",
                            showCancel: !1,
                            success: function(s) {
                                if (s.confirm) {
                                    var i = getCurrentPages();
                                    console.log(t.enter_type), "rank_quanzi" == t.enter_type && i.length > 1 ? e.navigateBack() : e.reLaunch({
                                        url: "../index/index"
                                    });
                                }
                            }
                        });
                    } else e.removeStorageSync("afterShare");
                },
                onUnload: function() {
                    var t = e.getStorageSync("lastResult");
                    console.log("=================22222222", t), null != u && (clearInterval(u), u = null), 
                    l && clearTimeout(l), (this.isStudyRoom || this.isExamFriend) && e.removeStorageSync("lastResult");
                    var s = e.getStorageSync("pk_token");
                    if (getApp().liveRoom(this.user_info.id, s), r.timerPlay.stop(), this.isExamFriend) {
                        var i = getCurrentPages(), n = i[i.length - 2];
                        console.log(n), n.$vm.click_type = "";
                    }
                    console.log("=================33333333333333", t);
                },
                onLoad: function(t) {
                    var s = this;
                    c = !1;
                    var i = this;
                    if (i.music.stopBGSound(), console.log("-----options.type----"), console.log(t.type), 
                    t.special_id && (i.special_id = t.special_id), t.enter_type && (i.enter_type = t.enter_type), 
                    void 0 !== t.is_study_room && (console.log("-------自习"), i.isStudyRoom = !0, i.complete_title = "自习"), 
                    void 0 !== t.is_exam_friend && (console.log("-------考朋友"), i.isExamFriend = !0, 
                    i.exam_token = t.token, i.complete_title = "挑战"), i.type = t.type || "", i.isAnswerFinish = !1, 
                    i.user_info = i.shared.getUserInfo(), "pk" == t.type || "special_pk" == t.type) {
                        t.token;
                        var n = e.getStorageSync("last_rt_questions");
                        i.currentQuestions = n;
                        var o = i.currentQuestions[i.currentIndex];
                        i.pk_user_info = e.getStorageSync("last_pk_user"), e.$on("pk_submit", function(e) {
                            if (e.data.user_id != s.user_info.id) {
                                var t = i.currentQuestions[i.currentIndex], n = parseInt(e.data.score);
                                s.pk_scoreResult = [ n ], t.id == e.data.question_id && (s.is_pk_click && (console.log("res.data.question_id:", e.data.question_id), 
                                console.log("_q.id:", t.id), console.log("_q.id==:", t.id == e.data.question_id)), 
                                s.is_pk_user_click = !0);
                            }
                            console.log("pk_submit res:", e);
                        }), i.next(o);
                    } else if (i.isExamFriend) i.request(r.API.API_EXAMFRIEND_EXAMQUESTIONS, {
                        user_id: i.user_info.id,
                        share_token: i.exam_token
                    }, function(e) {
                        console.log("res API_EXAMFRIEND_EXAMQUESTIONS:", e), i.currentQuestions = e.questions;
                        var t = i.currentQuestions[i.currentIndex];
                        i.pk_user_info = e.pk_datas.pk_user, i.pk_info = e.pk_datas.pk_info, i.exam_friend_id = e.exam_friend_id, 
                        i.exp_data = e.exp_data, console.log(i.pk_info, "......that.pk_info"), i.next(t);
                    }, !0, function(t) {
                        0 != t.code && e.navigateBack();
                    }); else {
                        var u = {
                            type: t.type,
                            pk_user_id: t.pk_user_id,
                            enter_type: i.enter_type
                        };
                        "rank_team" == t.type && (u.team_num = i.user_info.team_user && i.user_info.team_user.team_num), 
                        i.special_id && (u.special_id = i.special_id), "rank_quanzi" == i.enter_type && (u.quanzi_num = i.user_info.quanzi_user.quanzi_num), 
                        i.request(r.API.API_GAME_START, u, function(t) {
                            console.log("res API_GAME_START:", t), i.currentQuestions = t.questions;
                            var s = i.currentQuestions[i.currentIndex];
                            i.pk_user_info = t.pk_datas.pk_user, i.pk_info = t.pk_datas.pk_info, i.shared.setUserInfo(t.user), 
                            t.extra_score ? e.setStorageSync("extraScore", t.extra_score) : e.setStorageSync("extraScore", 0), 
                            console.log(i.pk_info, "......that.pk_info"), i.next(s);
                        }, !0);
                    }
                },
                methods: {
                    fuckFaker: function(e) {
                        var t = n.decode(e.is_answer);
                        return console.log("fuckFaker:", t), t[2];
                    },
                    ourScore: function() {
                        var e = 0;
                        return this.scoreResult.length > 0 && (e = parseInt(this.scoreResult.reduce(function(e, t) {
                            return Number(e) + Number(t);
                        }))), e;
                    },
                    enemyScore: function() {
                        var e = 0;
                        return "pk" != this.type && "special_pk" != this.type ? this.pk_scoreResult.length > 0 && (e = parseInt(this.pk_scoreResult.reduce(function(e, t) {
                            return Number(e) + Number(t);
                        }))) : this.pk_scoreResult.length > 0 && (e = parseInt(this.pk_scoreResult[0])), 
                        e;
                    },
                    reset: function() {
                        var e = this, t = this;
                        null != u && (r.timerPlay.stop(), clearInterval(u), u = null), o = 10, this.optionsStyles = this.defaultOptions().map(function() {
                            return "result-disable";
                        }), l = setTimeout(function() {
                            e.optionsStyles = e.defaultOptions().map(function() {
                                return "";
                            }), e.startTime = i(), null != u && (r.timerPlay.stop(), clearInterval(u), u = null), 
                            r.timerPlay.play(), c = !1, u = setInterval(function() {
                                t.tick();
                            }, 1e3);
                        }, 1e3 * a);
                    },
                    next: function(e) {
                        c = !0, a = Math.floor(e.content.length / 10), this.content = e.content, this.options = e.options, 
                        this.secTxt = 10, this.isRight = !1, this.reset();
                    },
                    finishOne: function() {
                        if (this.is_pk_click = !1, this.is_pk_user_click = !1, this.currentIndex++, console.log("finishOne_currentIndex", this.currentIndex), 
                        this.currentIndex >= 5) this.finishAll(); else {
                            var e = this.defaultOptions().map(function() {
                                return "";
                            });
                            this.optionsStyles = e;
                            var t = this.currentQuestions[this.currentIndex];
                            this.next(t);
                        }
                    },
                    finishAll: function() {
                        var t = this;
                        null != u && (r.timerPlay.stop(), clearInterval(u), u = null), this.currentIndex = 4, 
                        this.isAnswerFinish = !0;
                        var s = {};
                        s.rightCount = this.max_right_count, s.scoreResult = this.scoreResult, s.passTimeResult = this.passTimeResult, 
                        s.answerIds = this.answerIds, s.type = this.type || "", s.question_ids = this.currentQuestions.map(function(e) {
                            return e.id;
                        }), e.setStorageSync("lastResult", s), console.log("=================1111111", s);
                        var i = {};
                        if (i.is_win = this.pk_info.is_win, i.rightCount = this.pk_info.right_counts, i.score = this.pk_info.score, 
                        i.experience = this.pk_info.experience, e.setStorageSync("last_pk_result", i), this.isStudyRoom || this.isExamFriend) {
                            var n = 0, o = 0;
                            s.scoreResult.forEach(function(e) {
                                Number(e) > 0 && (o += 1), n += parseInt(e);
                            });
                            var a = 0, c = s.rightCount;
                            2 == c && (a = 1), 3 == c && (a = 2), 4 == c && (a = 3), 5 == c && (a = 4);
                            var l = parseInt(.1 * n + a + 5);
                            this.isExamFriend ? (console.log(a), console.log(n), console.log(o), l = o > 2 ? parseInt(.1 * n + a + Number(this.exp_data.award)) : parseInt(.1 * n + a - Number(this.exp_data.deduct))) : l = 0, 
                            this.experience = l;
                            var p = {
                                question_ids: s.question_ids,
                                times: s.passTimeResult,
                                score: n,
                                score_ids: s.scoreResult,
                                experience: l,
                                is_win: 0,
                                answer_ids: s.answerIds,
                                right_counts: c,
                                user_id: this.user_info.id,
                                type: this.type
                            };
                            this.isExamFriend ? (p.exam_friend_id = this.exam_friend_id, p.is_good = 0, o > 2 && (p.is_good = 1), 
                            this.request(this.API.API_EXAMFRIEND_ANSWERALL, p, function(s) {
                                console.log(s), t.selfStudyModal = !0, t.user_info = s.user, t.shared.setUserInfo(s.user), 
                                t.isExamFriend && s.is_rise && e.navigateTo({
                                    url: "../../packageA/pages/update/update?lead_percent=" + s.lead_percent + "&win_percent=" + s.win_percent
                                });
                            }, !1)) : (this.special_id && (p.special_id = this.special_id), this.request(this.API.API_ANSWER_SUBMITALL, p, function(s) {
                                console.log(s), t.selfStudyModal = !0, t.user_info = s.user, t.shared.setUserInfo(s.user), 
                                t.isStudyRoom && s.is_rise && e.navigateTo({
                                    url: "../../packageA/pages/update/update?lead_percent=" + s.lead_percent + "&win_percent=" + s.win_percent
                                });
                            }, !1));
                        } else {
                            var d = "../../packageA/pages/closing/closing?enter_type=" + this.enter_type;
                            this.special_id && (d += "&special_id=" + this.special_id), e.redirectTo({
                                url: d
                            });
                        }
                    },
                    defaultOptions: function() {
                        return this.currentQuestions[this.currentIndex].options;
                    },
                    selectOne: function(t) {
                        var s = this;
                        if (this.selectIndex = t, !c) {
                            c = !0, this.music.clickButton();
                            var n = this.defaultOptions().map(function() {
                                return "";
                            }), o = this.currentQuestions[this.currentIndex], u = o.options[t], a = this, l = i();
                            if (o.options.forEach(function(e, t) {
                                s.fuckFaker(e) && (n[t] = "light-green");
                            }), this.fuckFaker(u) ? (this.isRight = !0, u.content.length > 20 ? this.paddingRight = "60rpx" : this.paddingRight = "20rpx", 
                            this.music.answerCorrect(), ++this.rightCount > this.max_right_count && (this.max_right_count = this.rightCount)) : (this.isRight = !1, 
                            this.music.answerWrong(), n[t] = "red", this.rightCount = 0), console.log("=================", this.rightCount), 
                            "pk" !== this.type && "special_pk" !== this.type && this.pk_info.score_ids) {
                                var p = this.pk_info.score_ids.split(",")[this.currentIndex];
                                this.pk_scoreResult.push(Number(p));
                            }
                            0 == this.startTime && (this.startTime = l);
                            var d = l - this.startTime, _ = 80;
                            4 == this.currentIndex && (_ = 150), this.fuckFaker(u) || (_ = 0), _ *= .1 * (10 - d), 
                            this.passTimeResult.push(d), this.scoreResult.push(_), this.answerIds.push(u.id), 
                            this.optionsStyles = n;
                            var h = e.getStorageSync("pk_token"), f = {
                                user_id: this.user_info.id,
                                question_id: o.id,
                                is_right: this.fuckFaker(u),
                                score: a.ourScore(),
                                rightCount: this.max_right_count,
                                type: this.type,
                                answer_id: u.id
                            };
                            h && (f.room_name = h), this.special_id && (f.special_id = this.special_id), a.request(r.API.API_WRONGQUESTION_SUBMIT, f, function(e) {
                                console.log("res API_WRONGQUESTION_SUBMIT:", e);
                            }, !1), "pk" !== this.type && "special_pk" !== this.type ? setTimeout(function() {
                                s.finishOne();
                            }, 1e3) : (this.is_pk_click = !0, this.is_pk_user_click && this.is_pk_click);
                        }
                    },
                    tick: function() {
                        if (o--, this.secTxt = o, 0 == o) if ("pk" == this.type || "special_pk" == this.type) {
                            if (c) return c = !0, this.is_pk_click = !1, this.is_pk_user_click = !1, null != u && (r.timerPlay.stop(), 
                            clearInterval(u), u = null), void this.finishOne();
                            c = !0, this.is_pk_click = !1, this.is_pk_user_click = !1, null != u && (r.timerPlay.stop(), 
                            clearInterval(u), u = null);
                            var e = i();
                            0 == this.startTime && (this.startTime = e);
                            var t = e - this.startTime, s = 0;
                            s *= .1 * (10 - t), this.passTimeResult.push(t), this.scoreResult.push(s), this.answerIds.push(-1), 
                            this.rightCount = 0, console.log("this.rightCount = 0", u), this.finishOne();
                        } else {
                            if ("pk" !== this.type && "special_pk" !== this.type && this.pk_info.score_ids && this.currentIndex > this.pk_scoreResult.length - 1) {
                                var n = this.pk_info.score_ids.split(",")[this.currentIndex];
                                this.pk_scoreResult.push(Number(n));
                            }
                            if (this.is_pk_click = !1, this.is_pk_user_click = !1, null != u && (r.timerPlay.stop(), 
                            clearInterval(u), u = null), !c) {
                                c = !0;
                                var a = i();
                                0 == this.startTime && (this.startTime = a);
                                var l = a - this.startTime, p = 0;
                                p *= .1 * (10 - l), this.passTimeResult.push(l), this.scoreResult.push(p), this.answerIds.push(-1), 
                                this.rightCount = 0, console.log("this.rightCount = 0", u), this.finishOne();
                            }
                        }
                    },
                    onCloseStudyRoomCard: function() {
                        this.selfStudyModal = !1;
                        var t = getCurrentPages();
                        console.log(this.enter_type), ("rank_quanzi" == this.enter_type || "special_self" == this.type) && t.length > 1 ? e.navigateBack() : e.reLaunch({
                            url: "../index/index"
                        });
                    },
                    closeModel: function() {
                        this.music.clickButton(), this.upgrade = !1;
                    }
                },
                onShareAppMessage: function() {
                    return this.music.clickButton(), {
                        title: r.shareTitle,
                        path: "/pages/index/index",
                        success: function(e) {
                            console.log("转发成功", e);
                        },
                        fail: function(e) {
                            console.log("转发失败", e);
                        }
                    };
                }
            };
            t.default = p;
        }).call(this, s(1).default);
    },
    51: function(e, t, s) {
        s.r(t);
        var i = s(52), n = s.n(i);
        for (var r in i) "default" !== r && function(e) {
            s.d(t, e, function() {
                return i[e];
            });
        }(r);
        t.default = n.a;
    },
    52: function(e, t, s) {},
    53: function(e, t, s) {
        s.r(t);
        var i = s(54), n = s.n(i);
        for (var r in i) "default" !== r && function(e) {
            s.d(t, e, function() {
                return i[e];
            });
        }(r);
        t.default = n.a;
    },
    54: function(e, t, s) {}
}, [ [ 44, "common/runtime", "common/vendor" ] ] ]);