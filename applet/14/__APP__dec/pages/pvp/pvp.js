(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/pvp/pvp" ], {
    /***/ 65: 
    /*!*************************************************************************************!*\
    !*** /Users/mike/Desktop/works/answers_uniapp/main.js?{"page":"pages%2Fpvp%2Fpvp"} ***!
    \*************************************************************************************/
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
            var _pvp = _interopRequireDefault(__webpack_require__(/*! ./pages/pvp/pvp.vue */ 66));
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            createPage(_pvp.default);
            /* WEBPACK VAR INJECTION */        }).call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]);
        /***/    },
    /***/ 66: 
    /*!******************************************************************!*\
    !*** /Users/mike/Desktop/works/answers_uniapp/pages/pvp/pvp.vue ***!
    \******************************************************************/
    /*! no static exports found */
    /***/ function _(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */        var _pvp_vue_vue_type_template_id_d3226848_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pvp.vue?vue&type=template&id=d3226848&scoped=true& */ 67);
        /* harmony import */        var _pvp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pvp.vue?vue&type=script&lang=js& */ 69);
        /* harmony reexport (unknown) */        for (var __WEBPACK_IMPORT_KEY__ in _pvp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) {
            if (__WEBPACK_IMPORT_KEY__ !== "default") (function(key) {
                __webpack_require__.d(__webpack_exports__, key, function() {
                    return _pvp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key];
                });
            })(__WEBPACK_IMPORT_KEY__);
        }
        /* harmony import */        var _pvp_vue_vue_type_style_index_0_id_d3226848_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pvp.vue?vue&type=style&index=0&id=d3226848&scoped=true&lang=scss& */ 71);
        /* harmony import */        var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);
        var renderjs;
        /* normalize component */        var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_pvp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _pvp_vue_vue_type_template_id_d3226848_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"], _pvp_vue_vue_type_template_id_d3226848_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, "d3226848", null, false, _pvp_vue_vue_type_template_id_d3226848_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"], renderjs);
        component.options.__file = "pages/pvp/pvp.vue";
        /* harmony default export */        __webpack_exports__["default"] = component.exports;
        /***/    },
    /***/ 67: 
    /*!*************************************************************************************************************!*\
    !*** /Users/mike/Desktop/works/answers_uniapp/pages/pvp/pvp.vue?vue&type=template&id=d3226848&scoped=true& ***!
    \*************************************************************************************************************/
    /*! exports provided: render, staticRenderFns, recyclableRender, components */
    /***/ function _(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */        var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pvp_vue_vue_type_template_id_d3226848_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./pvp.vue?vue&type=template&id=d3226848&scoped=true& */ 68);
        /* harmony reexport (safe) */        __webpack_require__.d(__webpack_exports__, "render", function() {
            return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pvp_vue_vue_type_template_id_d3226848_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"];
        });
        /* harmony reexport (safe) */        __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() {
            return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pvp_vue_vue_type_template_id_d3226848_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
        });
        /* harmony reexport (safe) */        __webpack_require__.d(__webpack_exports__, "recyclableRender", function() {
            return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pvp_vue_vue_type_template_id_d3226848_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"];
        });
        /* harmony reexport (safe) */        __webpack_require__.d(__webpack_exports__, "components", function() {
            return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pvp_vue_vue_type_template_id_d3226848_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"];
        });
        /***/    },
    /***/ 68: 
    /*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/mike/Desktop/works/answers_uniapp/pages/pvp/pvp.vue?vue&type=template&id=d3226848&scoped=true& ***!
    \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        var components;
        var render = function render() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
        };
        var recyclableRender = false;
        var staticRenderFns = [];
        render._withStripped = true;
        /***/    },
    /***/ 69: 
    /*!*******************************************************************************************!*\
    !*** /Users/mike/Desktop/works/answers_uniapp/pages/pvp/pvp.vue?vue&type=script&lang=js& ***!
    \*******************************************************************************************/
    /*! no static exports found */
    /***/ function _(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */        var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pvp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./pvp.vue?vue&type=script&lang=js& */ 70);
        /* harmony import */        var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pvp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /* */ __webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pvp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
        /* harmony reexport (unknown) */        for (var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pvp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) {
            if (__WEBPACK_IMPORT_KEY__ !== "default") (function(key) {
                __webpack_require__.d(__webpack_exports__, key, function() {
                    return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pvp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key];
                });
            })(__WEBPACK_IMPORT_KEY__);
        }
        /* harmony default export */        __webpack_exports__["default"] = _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pvp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a;
        /***/    },
    /***/ 70: 
    /*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/mike/Desktop/works/answers_uniapp/pages/pvp/pvp.vue?vue&type=script&lang=js& ***!
    \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
                        var app = getApp().globalData;
            var next_timer = null;
            var await_timer = null;
            var _default = {
                data: function data() {
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
                        isStart: false,
                        left_top: 0,
                        right_top: 0,
                        enter_type: "not_rank_quanzi",
                        //圈子页进入还是首页进入
                        type: ""
                    };
                },
                methods: {
                    next: function next() {
                        if (await_timer) {
                            clearTimeout(await_timer);
                            await_timer = null;
                        }
                        console.log(this.game_type);
                        uni.redirectTo({
                            url: "../answer/answer?type=" + this.game_type + "&pk_user_id=" + this.pk_user_id + "&enter_type=" + this.enter_type
                        });
                    },
                    pkNext: function pkNext(token) {
                        if (await_timer) {
                            clearTimeout(await_timer);
                            await_timer = null;
                        }
                        uni.redirectTo({
                            url: "../answer/answer?type=pk&token=".concat(token, "&pk_user_id=").concat(this.pk_user_id, "&enter_type=").concat(this.enter_type)
                        });
                    },
                    display_user: function display_user(user) {
                        var d = {
                            user_name: user.nickname,
                            user_lv: user.expInfo.lever,
                            user_g_name: user.expInfo.name,
                            user_exp: user.experience,
                            user_avatar: user.avatar
                        };
                        Object.assign(this.$data, d);
                    },
                    display_pk_user: function display_pk_user(pk_user) {
                        var d = {
                            pk_avatar: pk_user.avatar,
                            pk_name: pk_user.nickname,
                            pk_lv: pk_user.expInfo.lever,
                            pk_g_name: pk_user.expInfo.name,
                            pk_exp: pk_user.experience,
                            pk_user_id: pk_user.id
                        };
                        Object.assign(this.$data, d);
                    }
                },
                onShow: function onShow() {
                    uni.removeStorageSync("afterShare");
                },
                onUnload: function onUnload() {
                    console.log("pvp_onUnload");
                    if (!this.isStart) {
                        getApp().liveRoom(this.user_id, this.roomName);
                    }
                    if (next_timer) {
                        clearTimeout(next_timer);
                        next_timer = null;
                    }
                    if (await_timer) {
                        clearTimeout(await_timer);
                        await_timer = null;
                    }
                    var pages = getCurrentPages();
                    var page = pages[pages.length - 2];
                    var click_type = page.$vm.click_type;
                    if (click_type != "") {
                        page.$vm.click_type = "";
                    }
                    if (this.type == "pk") {
                        uni.hideLoading();
                        // 如果是好友赛进入在电脑端页面离开时loding框还在
                                        }
                },
                onLoad: function onLoad(options) {
                    var _this = this;
                    var that = this;
                    var my_info = that.shared.getUserInfo();
                    if (options.enter_type) {
                        that.enter_type = options.enter_type;
                    }
                    that.type = options.type;
                    // 自定义高度
                                        var screen_width = 750;
                    var rate = uni.getSystemInfoSync().screenHeight / uni.getSystemInfoSync().screenWidth;
                    that.left_top = screen_width * rate * .2;
                    that.right_top = screen_width * rate * .36;
                    if (app.timerPlay !== null) {
                        app.timerPlay.stop();
                    }
                    var user = uni.getStorageSync("userInfo");
                    console.log("userINfo", user);
                    if (typeof options.token !== "undefined") {
                        this.roomName = options.token;
                        this.user_id = user.id;
                        uni.setStorageSync("pk_token", options.token);
                    }
                    if (options.type == "pk") {
                        this.display_user(user);
                        var request_data = {
                            user_id: user.id,
                            token: options.token
                        };
                        if (that.enter_type == "rank_quanzi") {
                            request_data.rank_type = "rank_quanzi";
                            request_data.quanzi_num = my_info.quanzi_user.quanzi_num;
                        }
                        that.request(app.API.API_PK_WAITFORPKUSER, request_data, function(res) {
                            console.log("res:", res);
                            if (res.questions.length > 1) {
                                uni.setStorageSync("last_rt_questions", res.questions);
                                that.shared.setUserInfo(res.user);
                                uni.showLoading({
                                    title: "等待好友进入"
                                });
                            }
                        }, false, function(err) {
                            if (that.enter_type == "rank_quanzi") {
                                uni.navigateBack();
                            } else {
                                uni.reLaunch({
                                    url: "../index/index"
                                });
                            }
                        });
                        uni.$once("pk_join_room", function(res) {
                            var pk_user = res;
                            _this.display_pk_user(pk_user);
                            uni.setStorageSync("last_pk_user", pk_user);
                            uni.hideLoading();
                        });
                        uni.$once("start_game", function(res) {
                            uni.hideLoading();
                            _this.isStart = true;
                            _this.pkNext(options.token);
                        });
                        getApp().joinRoom(user.id, options.token);
                    } else if (options.type == "pk_share") {
                        this.display_user(user);
                        uni.$once("finished", function(res) {
                            uni.showModal({
                                title: "",
                                content: "游戏已开始或结束",
                                showCancel: false,
                                success: function success(ret) {
                                    if (ret.confirm) {
                                        uni.reLaunch({
                                            url: "../index/index"
                                        });
                                    }
                                }
                            });
                        });
                        var _request_data = {
                            user_id: user.id,
                            token: options.token,
                            type: "pk_share"
                        };
                        if (that.enter_type == "rank_quanzi") {
                            _request_data.rank_type = "rank_quanzi";
                            if (!my_info.quanzi_user) {
                                uni.showModal({
                                    title: "",
                                    content: "您暂未加入圈子",
                                    showCancel: false,
                                    success: function success(result) {
                                        uni.reLaunch({
                                            url: "../index/index"
                                        });
                                    }
                                });
                                return;
                            }
                            _request_data.quanzi_num = my_info.quanzi_user.quanzi_num;
                        }
                        that.request(app.API.API_PK_WAITFORPKUSER, _request_data, function(res) {
                            console.log("res:", res);
                            if (res.questions.length > 1) {
                                uni.setStorageSync("last_rt_questions", res.questions);
                                that.display_pk_user(res.share_user);
                                uni.setStorageSync("last_pk_user", res.share_user);
                                uni.$once("start_game", function(res) {
                                    _this.isStart = true;
                                    _this.pkNext(options.token);
                                });
                                getApp().joinRoom(user.id, options.token);
                            }
                        }, false, function(err) {
                            uni.reLaunch({
                                url: "../index/index"
                            });
                        });
                    } else {
                        var _request_data2 = {
                            user_id: user.id
                        };
                        if (options.type == "rank_team") {
                            _request_data2.type = options.type;
                            _request_data2.team_num = options.team_num;
                        }
                        if (that.enter_type == "rank_quanzi") {
                            _request_data2.type = "rank_quanzi";
                            _request_data2.quanzi_num = my_info.quanzi_user.quanzi_num;
                        }
                        that.request(app.API.API_CHOOSE_USER, _request_data2, function(res) {
                            //console.log("res API_CHOOSE_USER:",res)
                            var user = res.user;
                            var pk_user = res.pk_user;
                            console.log("********************************************************");
                            console.log(user, pk_user);
                            console.log("********************************************************");
                            var d = {
                                user_name: user.nickname,
                                user_lv: user.expInfo.lever,
                                user_g_name: user.expInfo.name,
                                user_exp: user.experience,
                                user_avatar: user.avatar,
                                pk_avatar: pk_user.avatar,
                                pk_name: pk_user.nickname,
                                pk_lv: pk_user.expInfo.lever,
                                pk_g_name: pk_user.expInfo.name,
                                pk_exp: pk_user.experience,
                                game_type: res.game_type,
                                pk_user_id: pk_user.id
                            };
                            uni.setStorageSync("last_pk_user", pk_user);
                            Object.assign(that.$data, d);
                            next_timer = setTimeout(function() {
                                that.next();
                            }, 1e3);
                        }, true, function(err) {
                            if (that.enter_type == "rank_quanzi") {
                                uni.navigateBack();
                            } else {
                                uni.reLaunch({
                                    url: "../index/index"
                                });
                            }
                        });
                    }
                    await_timer = setTimeout(function() {
                        if (that.enter_type == "rank_quanzi" && options.type != "pk_share") {
                            //好友接受挑战进入是从首页进入
                            uni.navigateBack();
                        } else {
                            uni.reLaunch({
                                url: "../index/index"
                            });
                        }
                    }, 1e3 * 60);
                }
            };
            exports.default = _default;
            /* WEBPACK VAR INJECTION */        }).call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]);
        /***/    },
    /***/ 71: 
    /*!****************************************************************************************************************************!*\
    !*** /Users/mike/Desktop/works/answers_uniapp/pages/pvp/pvp.vue?vue&type=style&index=0&id=d3226848&scoped=true&lang=scss& ***!
    \****************************************************************************************************************************/
    /*! no static exports found */
    /***/ function _(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */        var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pvp_vue_vue_type_style_index_0_id_d3226848_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./pvp.vue?vue&type=style&index=0&id=d3226848&scoped=true&lang=scss& */ 72);
        /* harmony import */        var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pvp_vue_vue_type_style_index_0_id_d3226848_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /* */ __webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pvp_vue_vue_type_style_index_0_id_d3226848_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
        /* harmony reexport (unknown) */        for (var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pvp_vue_vue_type_style_index_0_id_d3226848_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) {
            if (__WEBPACK_IMPORT_KEY__ !== "default") (function(key) {
                __webpack_require__.d(__webpack_exports__, key, function() {
                    return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pvp_vue_vue_type_style_index_0_id_d3226848_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
                });
            })(__WEBPACK_IMPORT_KEY__);
        }
        /* harmony default export */        __webpack_exports__["default"] = _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_pvp_vue_vue_type_style_index_0_id_d3226848_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a;
        /***/    },
    /***/ 72: 
    /*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/mike/Desktop/works/answers_uniapp/pages/pvp/pvp.vue?vue&type=style&index=0&id=d3226848&scoped=true&lang=scss& ***!
    \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ function _(module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        if (false) {
            var cssReload;
        }
        /***/    }
}, [ [ 65, "common/runtime", "common/vendor" ] ] ]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pvp/pvp.js.map