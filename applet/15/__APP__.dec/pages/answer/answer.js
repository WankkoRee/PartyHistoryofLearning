(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/answer/answer" ], {
    /***/ 44: 
    /*!*****************************************************************************************************************************!*\
    !*** D:/program files/WeChat_tools/project/开发资料/lingfengyuanhang/answers_uniapp/main.js?{"page":"pages%2Fanswer%2Fanswer"} ***!
    \*****************************************************************************************************************************/
    /*! no static exports found */
    /***/ function _(module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */
        /* WEBPACK VAR INJECTION */        
        /* WEBPACK VAR INJECTION */
        /* WEBPACK VAR INJECTION */
        (function(createPage) {
            __webpack_require__(/*! uni-pages */ 4);
            var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
            var _answer = _interopRequireDefault(__webpack_require__(/*! ./pages/answer/answer.vue */ 45));
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            createPage(_answer.default);
            /* WEBPACK VAR INJECTION */        }).call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]);
        /***/    },
    /***/ 45: 
    /*!**********************************************************************************************************!*\
    !*** D:/program files/WeChat_tools/project/开发资料/lingfengyuanhang/answers_uniapp/pages/answer/answer.vue ***!
    \**********************************************************************************************************/
    /*! no static exports found */
    /***/ function _(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */        var _answer_vue_vue_type_template_id_514287f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./answer.vue?vue&type=template&id=514287f4&scoped=true& */ 46);
        /* harmony import */        var _answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./answer.vue?vue&type=script&lang=js& */ 48);
        /* harmony reexport (unknown) */        for (var __WEBPACK_IMPORT_KEY__ in _answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) {
            if (__WEBPACK_IMPORT_KEY__ !== "default") (function(key) {
                __webpack_require__.d(__webpack_exports__, key, function() {
                    return _answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key];
                });
            })(__WEBPACK_IMPORT_KEY__);
        }
        /* harmony import */        var _answer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./answer.vue?vue&type=style&index=0&lang=css& */ 51);
        /* harmony import */        var _answer_vue_vue_type_style_index_1_id_514287f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./answer.vue?vue&type=style&index=1&id=514287f4&lang=scss&scoped=true& */ 53);
        /* harmony import */        var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);
        var renderjs;
        /* normalize component */        var component = Object(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _answer_vue_vue_type_template_id_514287f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"], _answer_vue_vue_type_template_id_514287f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, "514287f4", null, false, _answer_vue_vue_type_template_id_514287f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"], renderjs);
        component.options.__file = "pages/answer/answer.vue";
        /* harmony default export */        __webpack_exports__["default"] = component.exports;
        /***/    },
    /***/ 46: 
    /*!*****************************************************************************************************************************************************!*\
    !*** D:/program files/WeChat_tools/project/开发资料/lingfengyuanhang/answers_uniapp/pages/answer/answer.vue?vue&type=template&id=514287f4&scoped=true& ***!
    \*****************************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns, recyclableRender, components */
    /***/ function _(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */        var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_template_id_514287f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./answer.vue?vue&type=template&id=514287f4&scoped=true& */ 47);
        /* harmony reexport (safe) */        __webpack_require__.d(__webpack_exports__, "render", function() {
            return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_template_id_514287f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"];
        });
        /* harmony reexport (safe) */        __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() {
            return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_template_id_514287f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
        });
        /* harmony reexport (safe) */        __webpack_require__.d(__webpack_exports__, "recyclableRender", function() {
            return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_template_id_514287f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"];
        });
        /* harmony reexport (safe) */        __webpack_require__.d(__webpack_exports__, "components", function() {
            return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_template_id_514287f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"];
        });
        /***/    },
    /***/ 47: 
    /*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/program files/WeChat_tools/project/开发资料/lingfengyuanhang/answers_uniapp/pages/answer/answer.vue?vue&type=template&id=514287f4&scoped=true& ***!
    \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns, recyclableRender, components */
    /***/ function _(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */        __webpack_require__.d(__webpack_exports__, "render", function() {
            return render;
        });
        /* harmony export (binding) */        __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() {
            return staticRenderFns;
        });
        /* harmony export (binding) */        __webpack_require__.d(__webpack_exports__, "recyclableRender", function() {
            return recyclableRender;
        });
        /* harmony export (binding) */        __webpack_require__.d(__webpack_exports__, "components", function() {
            return components;
        });
        var components = {
            studyRoomCard: function studyRoomCard() {
                return __webpack_require__.e(/*! import() | components/study-room-card/study-room-card */ "components/study-room-card/study-room-card").then(__webpack_require__.bind(null, /*! @/components/study-room-card/study-room-card.vue */ 195));
            }
        };
        var render = function render() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            var m0 = _vm.ourScore();
            var m1 = _vm.enemyScore();
            _vm.$mp.data = Object.assign({}, {
                $root: {
                    m0: m0,
                    m1: m1
                }
            });
        };
        var recyclableRender = false;
        var staticRenderFns = [];
        render._withStripped = true;
        /***/    },
    /***/ 48: 
    /*!***********************************************************************************************************************************!*\
    !*** D:/program files/WeChat_tools/project/开发资料/lingfengyuanhang/answers_uniapp/pages/answer/answer.vue?vue&type=script&lang=js& ***!
    \***********************************************************************************************************************************/
    /*! no static exports found */
    /***/ function _(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */        var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./answer.vue?vue&type=script&lang=js& */ 49);
        /* harmony import */        var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /* */ __webpack_require__.n(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
        /* harmony reexport (unknown) */        for (var __WEBPACK_IMPORT_KEY__ in _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) {
            if (__WEBPACK_IMPORT_KEY__ !== "default") (function(key) {
                __webpack_require__.d(__webpack_exports__, key, function() {
                    return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key];
                });
            })(__WEBPACK_IMPORT_KEY__);
        }
        /* harmony default export */        __webpack_exports__["default"] = _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a;
        /***/    },
    /***/ 49: 
    /*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/program files/WeChat_tools/project/开发资料/lingfengyuanhang/answers_uniapp/pages/answer/answer.vue?vue&type=script&lang=js& ***!
    \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ function _(module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */
        /* WEBPACK VAR INJECTION */        
        /* WEBPACK VAR INJECTION */
        /* WEBPACK VAR INJECTION */
        (function(uni) {
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _hashid = _interopRequireDefault(__webpack_require__(/*! ../../commons/hashid.js */ 50));
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            var studyRoomCard = function studyRoomCard() {
                __webpack_require__.e(/*! require.ensure | components/study-room-card/study-room-card */ "components/study-room-card/study-room-card").then(function() {
                    return resolve(__webpack_require__(/*! ../../components/study-room-card/study-room-card.vue */ 195));
                }.bind(null, __webpack_require__)).catch(__webpack_require__.oe);
            };
            var h = new _hashid.default("leadfyy!gogogo");
            var app = getApp().globalData;
            var sec = 10;
            var loopTimer = null;
            var offsetTime = 5;
            var disable = true;
            var readChatCount = 10;
            var clickTimer = null;
            var resetTimer = null;
            function getUnixTime() {
                return Math.round(new Date().getTime() / 1e3);
            }
            var _default = {
                components: {
                    studyRoomCard: studyRoomCard
                },
                computed: {
                    hoverCheck: function hoverCheck() {
                        return this.disable ? "" : "white";
                    },
                    ourPercent: function ourPercent(self) {
                        return (this.ourScore() / 470 * 100).toFixed(2);
                    },
                    enemyPercent: function enemyPercent(self) {
                        return (this.enemyScore() / 470 * 100).toFixed(2);
                    }
                },
                data: function data() {
                    return {
                        isStudyRoom: false,
                        // 是否是自习室
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
                        disable: false,
                        rightCount: 0,
                        selfStudyModal: false,
                        // 自习答题完毕模态框
                        pk_user_info: {},
                        pk_info: {},
                        user_info: {},
                        experience: 0,
                        type: "",
                        isPageHide: false,
                        pk_scoreResult: [],
                        // pk每题得分
                        is_pk_click: false,
                        is_pk_user_click: false,
                        upgrade: false,
                        //是否已升级
                        max_right_count: 0,
                        // 最大连续答对数
                        selectIndex: null,
                        //选中的答案
                        paddingRight: "20rpx",
                        //选对的右边距
                        isRight: false,
                        //是否选对
                        isExamFriend: false,
                        //是否是考朋友
                        exam_token: "",
                        //考朋友的token
                        exam_friend_id: null,
                        //考朋友出题方的id
                        exp_data: {},
                        //考朋友答题奖惩规则
                        complete_title: "自习",
                        //完成时弹框的文字
                        isAnswerFinish: false,
                        enter_type: "not_rank_quanzi"
                    };
                },
                onHide: function onHide() {
                    this.isPageHide = true;
                    app.timerPlay.stop();
                },
                onShow: function onShow() {
                    var that = this;
                    if (that.isPageHide) {
                        if (loopTimer != null) {
                            clearInterval(loopTimer);
                            loopTimer = null;
                        }
                        if (that.isAnswerFinish) {
                            return;
                            // 答题完成就不会再弹了
                                                }
                        uni.showModal({
                            title: "",
                            content: "您已退出挑战界面，挑战结束",
                            showCancel: false,
                            success: function success(res) {
                                if (res.confirm) {
                                    var pages = getCurrentPages();
                                    console.log(that.enter_type);
                                    if (that.enter_type == "rank_quanzi" && pages.length > 1) {
                                        uni.navigateBack();
                                    } else {
                                        uni.reLaunch({
                                            url: "../index/index"
                                        });
                                    }
                                }
                            }
                        });
                    } else {
                        uni.removeStorageSync("afterShare");
                    }
                },
                onUnload: function onUnload() {
                    var last_result = uni.getStorageSync("lastResult");
                    //我方成绩
                                        console.log("=================22222222", last_result);
                    if (loopTimer != null) {
                        clearInterval(loopTimer);
                        loopTimer = null;
                    }
                    if (resetTimer) {
                        clearTimeout(resetTimer);
                    }
                    if (this.isStudyRoom || this.isExamFriend) {
                        uni.removeStorageSync("lastResult");
                    }
                    var pk_token = uni.getStorageSync("pk_token");
                    getApp().liveRoom(this.user_info.id, pk_token);
                    // uni.removeStorageSync('pk_user_info');
                    // uni.removeStorageSync('last_rt_questions');
                                        app.timerPlay.stop();
                    if (this.isExamFriend) {
                        var pages = getCurrentPages();
                        var page = pages[pages.length - 2];
                        console.log(page);
                        page.$vm.click_type = "";
                    }
                    console.log("=================33333333333333", last_result);
                },
                onLoad: function onLoad(options) {
                    var _this = this;
                    disable = false;
                    var that = this;
                    that.music.stopBGSound();
                    console.log("-----options.type----");
                    console.log(options.type);
                    if (options.enter_type) {
                        that.enter_type = options.enter_type;
                    }
                    if (typeof options.is_study_room !== "undefined") {
                        console.log("-------自习");
                        that.isStudyRoom = true;
                        that.complete_title = "自习";
                    }
                    if (typeof options.is_exam_friend !== "undefined") {
                        console.log("-------考朋友");
                        that.isExamFriend = true;
                        that.exam_token = options.token;
                        that.complete_title = "挑战";
                    }
                    that.type = options.type || "";
                    that.isAnswerFinish = false;
                    that.user_info = that.shared.getUserInfo();
                    if (options.type == "rank_bot" || options.type == "rank_user" || options.type == "rank_team" || options.type == "rank_quanzi") {
                        if (that.isExamFriend) {
                            that.request(app.API.API_EXAMFRIEND_EXAMQUESTIONS, {
                                user_id: that.user_info.id,
                                share_token: that.exam_token
                            }, function(res) {
                                console.log("res API_EXAMFRIEND_EXAMQUESTIONS:", res);
                                that.currentQuestions = res.questions;
                                var q = that.currentQuestions[that.currentIndex];
                                that.pk_user_info = res.pk_datas.pk_user;
                                that.pk_info = res.pk_datas.pk_info;
                                that.exam_friend_id = res.exam_friend_id;
                                that.exp_data = res.exp_data;
                                console.log(that.pk_info, "......that.pk_info");
                                that.next(q);
                            }, true, function(callback) {
                                if (callback.code != 0) {
                                    uni.navigateBack();
                                }
                            });
                        } else {
                            var requestData = {
                                type: options.type,
                                pk_user_id: options.pk_user_id
                            };
                            if (options.type == "rank_team") {
                                requestData.team_num = that.user_info.team_user && that.user_info.team_user.team_num;
                            }
                            that.request(app.API.API_GAME_START, requestData, function(res) {
                                console.log("res API_GAME_START:", res);
                                that.currentQuestions = res.questions;
                                var q = that.currentQuestions[that.currentIndex];
                                that.pk_user_info = res.pk_datas.pk_user;
                                that.pk_info = res.pk_datas.pk_info;
                                that.shared.setUserInfo(res.user);
                                console.log(that.pk_info, "......that.pk_info");
                                that.next(q);
                            }, true);
                        }
                    } else if (options.type == "pk") {
                        var token = options.token;
                        var questions = uni.getStorageSync("last_rt_questions");
                        that.currentQuestions = questions;
                        var q = that.currentQuestions[that.currentIndex];
                        that.pk_user_info = uni.getStorageSync("last_pk_user");
                        uni.$on("pk_submit", function(res) {
                            if (res.data.user_id != _this.user_info.id) {
                                var _q = that.currentQuestions[that.currentIndex];
                                var score = parseInt(res.data.score);
                                _this.pk_scoreResult = [ score ];
                                if (_q.id == res.data.question_id) {
                                    if (_this.is_pk_click) {
                                        console.log("res.data.question_id:", res.data.question_id);
                                        console.log("_q.id:", _q.id);
                                        console.log("_q.id==:", _q.id == res.data.question_id);
                                    }
                                    _this.is_pk_user_click = true;
                                }
                            }
                            console.log("pk_submit res:", res);
                            // console.log("res.user_id != this.user_info.id:", res.user_id != this.user_info.id);
                            // console.log("res.user_id:", res.user_id );
                            // console.log("this.user_info.id:", this.user_info.id );
                            // console.log("this.is_pk_click:", this.is_pk_click );
                                                });
                        that.next(q);
                        // getApp().joinRoom(1,token);
                                        }
                },
                methods: {
                    fuckFaker: function fuckFaker(item) {
                        var ret = h.decode(item.is_answer);
                        // 解码
                                                console.log("fuckFaker:", ret);
                        return ret[2];
                    },
                    // 我方得分
                    ourScore: function ourScore() {
                        var score = 0;
                        if (this.scoreResult.length > 0) {
                            score = parseInt(this.scoreResult.reduce(function(a, b) {
                                return Number(a) + Number(b);
                            }));
                        }
                        return score;
                    },
                    // 敌方得分
                    enemyScore: function enemyScore() {
                        var score = 0;
                        if (this.type != "pk") {
                            if (this.pk_scoreResult.length > 0) {
                                score = parseInt(this.pk_scoreResult.reduce(function(a, b) {
                                    return Number(a) + Number(b);
                                }));
                            }
                        } else {
                            if (this.pk_scoreResult.length > 0) {
                                score = parseInt(this.pk_scoreResult[0]);
                            }
                        }
                        return score;
                    },
                    // 重置
                    reset: function reset() {
                        var _this2 = this;
                        var that = this;
                        if (loopTimer != null) {
                            app.timerPlay.stop();
                            clearInterval(loopTimer);
                            loopTimer = null;
                        }
                        sec = 10;
                        // console.log("offsetTime setTimeout:",offsetTime)
                        //this.disable = true
                                                this.optionsStyles = this.defaultOptions().map(function() {
                            return "result-disable";
                        });
                        resetTimer = setTimeout(function() {
                            // console.log("------------------------------reset.setTimeout", offsetTime * 1000)
                            //this.disable = false
                            _this2.optionsStyles = _this2.defaultOptions().map(function() {
                                return "";
                            });
                            _this2.startTime = getUnixTime();
                            if (loopTimer != null) {
                                app.timerPlay.stop();
                                clearInterval(loopTimer);
                                loopTimer = null;
                            }
                            app.timerPlay.play();
                            disable = false;
                            loopTimer = setInterval(function() {
                                // console.log("-------------------------reset.setInterval.loopTimer", loopTimer);
                                that.tick();
                            }, 1e3);
                        }, offsetTime * 1e3);
                    },
                    // 下一题
                    next: function next(q) {
                        disable = true;
                        offsetTime = Math.floor(q.content.length / readChatCount);
                        // console.log("q.length:",q.content.length)
                        // console.log("offsetTime:",offsetTime)
                                                this.content = q.content;
                        this.options = q.options;
                        this.secTxt = 10;
                        this.isRight = false;
                        this.reset();
                    },
                    // 答题完成(每一题)
                    finishOne: function finishOne() {
                        //this.disable = false;
                        this.is_pk_click = false;
                        this.is_pk_user_click = false;
                        this.currentIndex++;
                        console.log("finishOne_currentIndex", this.currentIndex);
                        if (this.currentIndex >= 5) {
                            this.finishAll();
                            return;
                        }
                        var defaultStyle = this.defaultOptions().map(function() {
                            return "";
                        });
                        this.optionsStyles = defaultStyle;
                        var nextQ = this.currentQuestions[this.currentIndex];
                        // console.log("nextQ:",nextQ)
                                                this.next(nextQ);
                    },
                    // 所有题都答完了
                    finishAll: function finishAll() {
                        var _this3 = this;
                        if (loopTimer != null) {
                            app.timerPlay.stop();
                            clearInterval(loopTimer);
                            loopTimer = null;
                        }
                        this.currentIndex = 4;
                        this.isAnswerFinish = true;
                        //保存结果
                                                var lastResult = {};
                        // lastResult.rightCount = this.rightCount
                                                lastResult.rightCount = this.max_right_count;
                        lastResult.scoreResult = this.scoreResult;
                        lastResult.passTimeResult = this.passTimeResult;
                        lastResult.answerIds = this.answerIds;
                        lastResult.type = this.type || "";
                        lastResult.question_ids = this.currentQuestions.map(function(item) {
                            return item.id;
                        });
                        uni.setStorageSync("lastResult", lastResult);
                        console.log("=================1111111", lastResult);
                        // pk对战信息
                                                var last_pk_result = {};
                        last_pk_result.is_win = this.pk_info.is_win;
                        last_pk_result.rightCount = this.pk_info.right_counts;
                        last_pk_result.score = this.pk_info.score;
                        last_pk_result.experience = this.pk_info.experience;
                        uni.setStorageSync("last_pk_result", last_pk_result);
                        if (!this.isStudyRoom && !this.isExamFriend) {
                            uni.redirectTo({
                                url: "../../packageA/pages/closing/closing?enter_type=" + this.enter_type
                            });
                        } else {
                            var total = 0;
                            var correct_num = 0;
                            lastResult.scoreResult.forEach(function(item) {
                                if (Number(item) > 0) {
                                    correct_num += 1;
                                }
                                total += parseInt(item);
                            });
                            var rightScore = 0;
                            var rightCounts = lastResult.rightCount;
                            if (rightCounts == 2) {
                                rightScore = 1;
                            }
                            if (rightCounts == 3) {
                                rightScore = 2;
                            }
                            if (rightCounts == 4) {
                                rightScore = 3;
                            }
                            if (rightCounts == 5) {
                                rightScore = 4;
                            }
                            var win = 5;
                            var s = parseInt(total * .1 + rightScore + win);
                            if (this.isExamFriend) {
                                console.log(rightScore);
                                console.log(total);
                                console.log(correct_num);
                                if (correct_num > 2) {
                                    s = parseInt(total * .1 + rightScore + Number(this.exp_data.award));
                                } else {
                                    s = parseInt(total * .1 + rightScore - Number(this.exp_data.deduct));
                                }
                            } else {
                                s = 0;
                            }
                            this.experience = s;
                            var new_data = {
                                question_ids: lastResult.question_ids,
                                times: lastResult.passTimeResult,
                                score: total,
                                score_ids: lastResult.scoreResult,
                                experience: s,
                                is_win: 0,
                                answer_ids: lastResult.answerIds,
                                right_counts: rightCounts,
                                user_id: this.user_info.id
                            };
                            if (this.isExamFriend) {
                                new_data.exam_friend_id = this.exam_friend_id;
                                new_data.is_good = 0;
                                if (correct_num > 2) {
                                    new_data.is_good = 1;
                                }
                                this.request(this.API.API_EXAMFRIEND_ANSWERALL, new_data, function(res) {
                                    console.log(res);
                                    _this3.selfStudyModal = true;
                                    _this3.user_info = res.user;
                                    _this3.shared.setUserInfo(res.user);
                                    if (_this3.isExamFriend && res.is_rise) {
                                        uni.navigateTo({
                                            url: "../../packageA/pages/update/update?lead_percent=" + res.lead_percent + "&win_percent=" + res.win_percent
                                        });
                                    }
                                }, false);
                            } else {
                                this.request(this.API.API_ANSWER_SUBMITALL, new_data, function(res) {
                                    console.log(res);
                                    _this3.selfStudyModal = true;
                                    _this3.user_info = res.user;
                                    _this3.shared.setUserInfo(res.user);
                                    if (_this3.isStudyRoom && res.is_rise) {
                                        uni.navigateTo({
                                            url: "../../packageA/pages/update/update?lead_percent=" + res.lead_percent + "&win_percent=" + res.win_percent
                                        });
                                    }
                                }, false);
                            }
                        }
                    },
                    // 获取每题的选项
                    defaultOptions: function defaultOptions() {
                        return this.currentQuestions[this.currentIndex].options;
                    },
                    // 选择
                    selectOne: function selectOne(index) {
                        var _this4 = this;
                        this.selectIndex = index;
                        // if(this.disable){
                        // 	return
                        // }
                        // this.disable= true;
                                                if (disable) {
                            return;
                        }
                        disable = true;
                        this.music.clickButton();
                        // if(clickTimer){
                        // 	return;
                        // }
                        // clickTimer = setTimeout(() => {
                        // 	clearTimeout(clickTimer);
                        // 	clickTimer = null
                        // }, 1000);
                                                var defaultStyle = this.defaultOptions().map(function() {
                            return "";
                        });
                        var q = this.currentQuestions[this.currentIndex];
                        var item = q.options[index];
                        var that = this;
                        var now = getUnixTime();
                        q.options.forEach(function(item, oIndex) {
                            if (_this4.fuckFaker(item)) {
                                defaultStyle[oIndex] = "light-green";
                            }
                        });
                        if (!this.fuckFaker(item)) {
                            this.isRight = false;
                            this.music.answerWrong();
                            defaultStyle[index] = "red";
                            this.rightCount = 0;
                        } else {
                            this.isRight = true;
                            if (item.content.length > 20) {
                                this.paddingRight = "60rpx";
                            } else {
                                this.paddingRight = "20rpx";
                            }
                            this.music.answerCorrect();
                            this.rightCount++;
                            if (this.rightCount > this.max_right_count) {
                                this.max_right_count = this.rightCount;
                            }
                        }
                        console.log("=================", this.rightCount);
                        /************************ pk*****************  */                        if (this.type !== "pk" && this.pk_info.score_ids) {
                            // TODO 判断？？？
                            var score_id = this.pk_info.score_ids.split(",")[this.currentIndex];
                            this.pk_scoreResult.push(Number(score_id));
                        }
                        if (this.startTime == 0) {
                            this.startTime = now;
                        }
                        var passTime = now - this.startTime;
                        var preScore = 80;
                        if (this.currentIndex == 4) {
                            preScore = 150;
                        }
                        if (!this.fuckFaker(item)) {
                            preScore = 0;
                        }
                        preScore = (10 - passTime) * .1 * preScore;
                        this.passTimeResult.push(passTime);
                        this.scoreResult.push(preScore);
                        this.answerIds.push(item.id);
                        this.optionsStyles = defaultStyle;
                        /************************ pk*****************  */                        var pk_token = uni.getStorageSync("pk_token");
                        var requestData = {
                            user_id: this.user_info.id,
                            question_id: q.id,
                            is_right: this.fuckFaker(item),
                            score: that.ourScore(),
                            rightCount: this.max_right_count
                        };
                        if (pk_token) {
                            requestData.room_name = pk_token;
                        }
                        that.request(app.API.API_WRONGQUESTION_SUBMIT, requestData, function(res) {
                            console.log("res API_WRONGQUESTION_SUBMIT:", res);
                        }, false);
                        if (this.type !== "pk") {
                            // this.finishOne()
                            setTimeout(function() {
                                _this4.finishOne();
                            }, 1e3);
                        } else {
                            this.is_pk_click = true;
                            if (this.is_pk_user_click && this.is_pk_click) {}
                        }
                    },
                    // 计时器
                    tick: function tick() {
                        sec--;
                        this.secTxt = sec;
                        if (sec == 0) {
                            // if(disable == true){
                            // 	disable = true
                            // 	this.is_pk_click = false;
                            // 	this.is_pk_user_click = false;
                            // 	if(loopTimer!=null){
                            // 		app.timerPlay.stop();
                            // 		clearInterval(loopTimer);
                            // 		loopTimer = null;
                            // 	}
                            // 	return
                            // }
                            if (this.type == "pk") {
                                if (disable) {
                                    disable = true;
                                    this.is_pk_click = false;
                                    this.is_pk_user_click = false;
                                    if (loopTimer != null) {
                                        app.timerPlay.stop();
                                        clearInterval(loopTimer);
                                        loopTimer = null;
                                    }
                                    this.finishOne();
                                    return;
                                }
                                disable = true;
                                this.is_pk_click = false;
                                this.is_pk_user_click = false;
                                if (loopTimer != null) {
                                    app.timerPlay.stop();
                                    clearInterval(loopTimer);
                                    loopTimer = null;
                                }
                                var now = getUnixTime();
                                if (this.startTime == 0) {
                                    this.startTime = now;
                                }
                                var passTime = now - this.startTime;
                                var preScore = 0;
                                preScore = (10 - passTime) * .1 * preScore;
                                this.passTimeResult.push(passTime);
                                this.scoreResult.push(preScore);
                                this.answerIds.push(-1);
                                this.rightCount = 0;
                                console.log("this.rightCount = 0", loopTimer);
                                this.finishOne();
                            } else {
                                if (this.type !== "pk" && this.pk_info.score_ids && this.currentIndex > this.pk_scoreResult.length - 1) {
                                    var score_id = this.pk_info.score_ids.split(",")[this.currentIndex];
                                    this.pk_scoreResult.push(Number(score_id));
                                }
                                this.is_pk_click = false;
                                this.is_pk_user_click = false;
                                if (loopTimer != null) {
                                    app.timerPlay.stop();
                                    clearInterval(loopTimer);
                                    loopTimer = null;
                                }
                                if (!disable) {
                                    disable = true;
                                    var _now = getUnixTime();
                                    if (this.startTime == 0) {
                                        this.startTime = _now;
                                    }
                                    var _passTime = _now - this.startTime;
                                    var _preScore = 0;
                                    _preScore = (10 - _passTime) * .1 * _preScore;
                                    this.passTimeResult.push(_passTime);
                                    this.scoreResult.push(_preScore);
                                    this.answerIds.push(-1);
                                    this.rightCount = 0;
                                    console.log("this.rightCount = 0", loopTimer);
                                    this.finishOne();
                                }
                            }
                        }
                    },
                    // 点击关闭自习室弹框，并返回首页
                    onCloseStudyRoomCard: function onCloseStudyRoomCard() {
                        this.selfStudyModal = false;
                        var pages = getCurrentPages();
                        console.log(this.enter_type);
                        if (this.enter_type == "rank_quanzi" && pages.length > 1) {
                            uni.navigateBack();
                        } else {
                            uni.reLaunch({
                                url: "../index/index"
                            });
                        }
                    },
                    //关闭升级弹框
                    closeModel: function closeModel() {
                        this.music.clickButton();
                        this.upgrade = false;
                    }
                },
                // 转发
                onShareAppMessage: function onShareAppMessage() {
                    return {
                        title: app.shareTitle,
                        path: "/pages/index/index",
                        success: function success(res) {
                            console.log("转发成功", res);
                        },
                        fail: function fail(res) {
                            console.log("转发失败", res);
                        }
                    };
                }
            };
            exports.default = _default;
            /* WEBPACK VAR INJECTION */        }).call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]);
        /***/    },
    /***/ 51: 
    /*!*******************************************************************************************************************************************!*\
    !*** D:/program files/WeChat_tools/project/开发资料/lingfengyuanhang/answers_uniapp/pages/answer/answer.vue?vue&type=style&index=0&lang=css& ***!
    \*******************************************************************************************************************************************/
    /*! no static exports found */
    /***/ function _(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */        var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./answer.vue?vue&type=style&index=0&lang=css& */ 52);
        /* harmony import */        var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /* */ __webpack_require__.n(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
        /* harmony reexport (unknown) */        for (var __WEBPACK_IMPORT_KEY__ in _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) {
            if (__WEBPACK_IMPORT_KEY__ !== "default") (function(key) {
                __webpack_require__.d(__webpack_exports__, key, function() {
                    return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
                });
            })(__WEBPACK_IMPORT_KEY__);
        }
        /* harmony default export */        __webpack_exports__["default"] = _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a;
        /***/    },
    /***/ 52: 
    /*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/program files/WeChat_tools/project/开发资料/lingfengyuanhang/answers_uniapp/pages/answer/answer.vue?vue&type=style&index=0&lang=css& ***!
    \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ function _(module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        if (false) {
            var cssReload;
        }
        /***/    },
    /***/ 53: 
    /*!********************************************************************************************************************************************************************!*\
    !*** D:/program files/WeChat_tools/project/开发资料/lingfengyuanhang/answers_uniapp/pages/answer/answer.vue?vue&type=style&index=1&id=514287f4&lang=scss&scoped=true& ***!
    \********************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ function _(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */        var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_style_index_1_id_514287f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./answer.vue?vue&type=style&index=1&id=514287f4&lang=scss&scoped=true& */ 54);
        /* harmony import */        var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_style_index_1_id_514287f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /* */ __webpack_require__.n(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_style_index_1_id_514287f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
        /* harmony reexport (unknown) */        for (var __WEBPACK_IMPORT_KEY__ in _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_style_index_1_id_514287f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) {
            if (__WEBPACK_IMPORT_KEY__ !== "default") (function(key) {
                __webpack_require__.d(__webpack_exports__, key, function() {
                    return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_style_index_1_id_514287f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key];
                });
            })(__WEBPACK_IMPORT_KEY__);
        }
        /* harmony default export */        __webpack_exports__["default"] = _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_answer_vue_vue_type_style_index_1_id_514287f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a;
        /***/    },
    /***/ 54: 
    /*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/program files/WeChat_tools/project/开发资料/lingfengyuanhang/answers_uniapp/pages/answer/answer.vue?vue&type=style&index=1&id=514287f4&lang=scss&scoped=true& ***!
    \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ function _(module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        if (false) {
            var cssReload;
        }
        /***/    }
}, [ [ 44, "common/runtime", "common/vendor" ] ] ]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/answer/answer.js.map