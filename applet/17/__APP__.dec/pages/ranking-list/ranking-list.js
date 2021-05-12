(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/ranking-list/ranking-list" ], {
    34: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n(4);
            e(n(2));
            t(e(n(35)).default);
        }).call(this, n(1).createPage);
    },
    35: function(t, e, n) {
        n.r(e);
        var i = n(36), r = n(38);
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        n(40), n(42);
        var s = n(12), o = Object(s.default)(r.default, i.render, i.staticRenderFns, !1, null, "a1de6bb4", null, !1, i.components, void 0);
        o.options.__file = "pages/ranking-list/ranking-list.vue", e.default = o.exports;
    },
    36: function(t, e, n) {
        n.r(e);
        var i = n(37);
        n.d(e, "render", function() {
            return i.render;
        }), n.d(e, "staticRenderFns", function() {
            return i.staticRenderFns;
        }), n.d(e, "recyclableRender", function() {
            return i.recyclableRender;
        }), n.d(e, "components", function() {
            return i.components;
        });
    },
    37: function(t, e, n) {
        n.r(e), n.d(e, "render", function() {
            return r;
        }), n.d(e, "staticRenderFns", function() {
            return s;
        }), n.d(e, "recyclableRender", function() {
            return a;
        }), n.d(e, "components", function() {
            return i;
        });
        var i, r = function() {
            var t = this, e = t.$createElement, n = (t._self._c, t.isRight(t.pk_user_count)), i = t.__map(t.tabelles, function(e, n) {
                return {
                    $orig: t.__get_orig(e),
                    m1: t.currentIndex === n ? t.isActiveTimeTab(e.tab_name, 0) : null,
                    m2: t.currentIndex === n ? t.isActiveTimeTab(e.tab_name, 1) : null
                };
            });
            t.$mp.data = Object.assign({}, {
                $root: {
                    m0: n,
                    l0: i
                }
            });
        }, a = !1, s = [];
        r._withStripped = !0;
    },
    38: function(t, e, n) {
        n.r(e);
        var i = n(39), r = n.n(i);
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        e.default = r.a;
    },
    39: function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = getApp().globalData, i = {
                data: function() {
                    return {
                        list_height: "0rpx",
                        list_maxheight: "0rpx",
                        tabelles: [ {
                            name: "个人",
                            tab_name: "personal_timeTabIndex"
                        }, {
                            name: "团队",
                            tab_name: "group_timeTabIndex"
                        } ],
                        currentIndex: 0,
                        personal_timeTabIndex: 0,
                        group_timeTabIndex: 0,
                        college_timeTabIndex: 0,
                        enterprise_timeTabIndex: 0,
                        region_timeTabIndex: 0,
                        rankList: [ {
                            totalList: {
                                user: {},
                                data: []
                            },
                            monthList: {
                                user: {},
                                data: []
                            }
                        }, {
                            totalList: {
                                user: {},
                                data: []
                            },
                            monthList: {
                                user: {},
                                data: []
                            }
                        }, {
                            totalList: {
                                user: {},
                                data: []
                            },
                            monthList: {
                                user: {},
                                data: []
                            }
                        }, {
                            totalList: {
                                user: {},
                                data: []
                            },
                            monthList: {
                                user: {},
                                data: []
                            }
                        }, {
                            totalList: {
                                user: {},
                                data: []
                            },
                            monthList: {
                                user: {},
                                data: []
                            }
                        } ],
                        pk_user_count: "",
                        pk_group_count: "",
                        userInfo: {}
                    };
                },
                onLoad: function(e) {
                    var n = t.getSystemInfoSync(), i = this.shared.getUserInfo();
                    console.log(n), this.userInfo = i, this.list_height = n.windowHeight - 200 + "px", 
                    this.list_maxheight = n.windowHeight - 243 + "px", this.toggleTimeTabIndex("personal_timeTabIndex", 1);
                },
                computed: {
                    isRight: function() {
                        return function(t) {
                            return this.shared.isRight(t);
                        };
                    },
                    tips: function() {
                        var t = "";
                        switch (this.currentIndex) {
                          case 0:
                            t = this.pk_user_count;
                            break;

                          case 1:
                            t = this.pk_group_count;
                        }
                        return t;
                    },
                    isActiveTimeTab: function() {
                        return function(t, e) {
                            return this[t] == e;
                        };
                    },
                    auto_list_height: function() {
                        var t = this.list_height, e = this.currentIndex, n = parseInt(t);
                        return 0 == e || 1 == e ? n + "px" : n + 60 + "px";
                    },
                    auto_scroll_height: function() {
                        var t = this.list_height, e = this.currentIndex, n = parseInt(t);
                        return 0 == e || 1 == e ? n - 50 + "px" : n + "px";
                    },
                    getSelfObj: function() {
                        var t = 0 == this[[ "personal", "group", "college", "enterprise", "region" ][this.currentIndex] + "_timeTabIndex"] ? "totalList" : "monthList";
                        return this.rankList[this.currentIndex][t];
                    },
                    user_rank_list: function(t) {
                        return t.getSelfObj.data;
                    },
                    user: function(t) {
                        return t.getSelfObj.user;
                    }
                },
                methods: {
                    getPersonRankByTotal: function() {
                        var t = this;
                        this.request(this.API.API_RANK, {
                            user_id: this.userInfo.id
                        }, function(e) {
                            var n = e.user || {}, i = e.user_info || [], r = t.rankList, a = t.currentIndex;
                            r[a].totalList.user = n, r[a].totalList.data = i, t.rankList = r, t.pk_user_count = e.pk_user_count;
                        }, !0);
                    },
                    getPersonRankByMonth: function() {
                        var t = this;
                        this.request(this.API.API_RANKBYMONTH, {
                            user_id: this.userInfo.id
                        }, function(e) {
                            var n = e.user || {}, i = e.user_info || [], r = t.rankList, a = t.currentIndex;
                            r[a].monthList.user = n, r[a].monthList.data = i, t.rankList = r, t.pk_user_count = e.pk_user_count;
                        }, !0);
                    },
                    getTeamRankByTotal: function() {
                        var t = this, e = 0;
                        this.userInfo.team_user && (e = this.userInfo.team_user.team_num), this.request(this.API.API_RANK_TEAM, {
                            user_id: this.userInfo.id,
                            team_num: e
                        }, function(e) {
                            var n = e.team || {};
                            n.avatar = t.userInfo.avatar;
                            var i = e.team_info || [], r = t.rankList, a = t.currentIndex;
                            r[a].totalList.user = n, r[a].totalList.data = i, t.rankList = r, t.pk_group_count = e.pk_group_count_tips;
                        }, !0);
                    },
                    getTeamRankByMonth: function() {
                        var t = this, e = 0;
                        this.userInfo.team_user && (e = this.userInfo.team_user.team_num), this.request(this.API.API_RANK_TEAMBYMONTH, {
                            user_id: this.userInfo.id,
                            team_num: e
                        }, function(e) {
                            console.log(e, "getRankTeamByMonth");
                            var n = e.team || {};
                            n.avatar = t.userInfo.avatar;
                            var i = e.team_info || [], r = t.rankList, a = t.currentIndex;
                            r[a].monthList.user = n, r[a].monthList.data = i, t.rankList = r;
                        }, !0);
                    },
                    getTotalRank: function(t) {
                        var e = this;
                        this.request(this.API.API_TOTAL_RANK, {
                            user_id: this.userInfo.id,
                            rank_type: t
                        }, function(n) {
                            var i = n.ranking_list || [], r = e.rankList, a = e.currentIndex;
                            t.indexOf("_month") >= 0 ? r[a].monthList.data = i : r[a].totalList.data = i, e.rankList = r;
                        }, !0);
                    },
                    toggleCurrentIndex: function(t, e) {
                        if (e && this.music.clickButton(), this.currentIndex = t, this.user_rank_list.length <= 0) if (0 == t) switch (this.personal_timeTabIndex) {
                          case 0:
                            this.getPersonRankByTotal();
                            break;

                          case 1:
                            this.getPersonRankByMonth();
                        } else if (1 == t) switch (this.group_timeTabIndex) {
                          case 0:
                            this.getTeamRankByTotal();
                            break;

                          case 1:
                            this.getTeamRankByMonth();
                        } else if (2 == t) switch (this.college_timeTabIndex) {
                          case 0:
                            this.getTotalRank("total_school");
                            break;

                          case 1:
                            this.getTotalRank("total_school_month");
                        } else if (3 == t) switch (this.enterprise_timeTabIndex) {
                          case 0:
                            this.getTotalRank("total_company");
                            break;

                          case 1:
                            this.getTotalRank("total_company_month");
                        } else if (4 == t) switch (this.region_timeTabIndex) {
                          case 0:
                            this.getTotalRank("total_area");
                            break;

                          case 1:
                            this.getTotalRank("total_area_month");
                        }
                    },
                    toggleTimeTabIndex: function(t, e, n) {
                        n && this.music.clickButton();
                        var i = this.user_rank_list.length;
                        this[t] == e && i > 0 || (this[t] = e, this.toggleCurrentIndex(this.currentIndex));
                    }
                },
                onShareAppMessage: function() {
                    return this.music.clickButton(), {
                        title: n.shareTitle,
                        path: "/pages/index/index",
                        success: function(t) {
                            console.log("转发成功", t);
                        },
                        fail: function(t) {
                            console.log("转发失败", t);
                        }
                    };
                }
            };
            e.default = i;
        }).call(this, n(1).default);
    },
    40: function(t, e, n) {
        n.r(e);
        var i = n(41), r = n.n(i);
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        e.default = r.a;
    },
    41: function(t, e, n) {},
    42: function(t, e, n) {
        n.r(e);
        var i = n(43), r = n.n(i);
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        e.default = r.a;
    },
    43: function(t, e, n) {}
}, [ [ 34, "common/runtime", "common/vendor" ] ] ]);