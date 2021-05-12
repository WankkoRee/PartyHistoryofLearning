var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "common/main" ], [ 
/* 0 */
/*!******************************************************************************************!*\
  !*** D:/program files/WeChat_tools/project/开发资料/lingfengyuanhang/answers_uniapp/main.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */    
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */
    (function(createApp) {
        __webpack_require__(/*! uni-pages */ 4);
        var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
        var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 5));
        var _index = _interopRequireDefault(__webpack_require__(/*! ./store/index.js */ 13));
        var _shared = _interopRequireDefault(__webpack_require__(/*! ./commons/shared.js */ 15));
        var _mergeParamMixin = _interopRequireDefault(__webpack_require__(/*! ./commons/mergeParamMixin.js */ 17));
        var _util = __webpack_require__(/*! ./commons/util.js */ 18);
        var _log = _interopRequireDefault(__webpack_require__(/*! ./commons/log.js */ 23));
        var _statistics = __webpack_require__(/*! ./commons/statistics.js */ 24);
        var _music = _interopRequireDefault(__webpack_require__(/*! ./commons/music.js */ 25));
        var API = _interopRequireWildcard(__webpack_require__(/*! ./commons/api.js */ 9));
        function _getRequireWildcardCache() {
            if (typeof WeakMap !== "function") return null;
            var cache = new WeakMap();
            _getRequireWildcardCache = function _getRequireWildcardCache() {
                return cache;
            };
            return cache;
        }
        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
                return obj;
            }
            if (obj === null || (typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== "object" && typeof obj !== "function") {
                return {
                    default: obj
                };
            }
            var cache = _getRequireWildcardCache();
            if (cache && cache.has(obj)) {
                return cache.get(obj);
            }
            var newObj = {};
            var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                    if (desc && (desc.get || desc.set)) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
            newObj.default = obj;
            if (cache) {
                cache.set(obj, newObj);
            }
            return newObj;
        }
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                if (enumerableOnly) symbols = symbols.filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                });
                keys.push.apply(keys, symbols);
            }
            return keys;
        }
        function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i] != null ? arguments[i] : {};
                if (i % 2) {
                    ownKeys(Object(source), true).forEach(function(key) {
                        _defineProperty(target, key, source[key]);
                    });
                } else if (Object.getOwnPropertyDescriptors) {
                    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
                } else {
                    ownKeys(Object(source)).forEach(function(key) {
                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                    });
                }
            }
            return target;
        }
        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
            return obj;
        }
        _vue.default.config.productionTip = false;
        _vue.default.prototype.$store = _index.default;
        _vue.default.prototype.shared = _shared.default;
        _vue.default.prototype.request = _util.request;
        _vue.default.prototype.$log = _log.default;
        _vue.default.prototype.$report = _statistics.report;
        _vue.default.prototype.music = _music.default;
        _vue.default.prototype.API = API;
        _vue.default.use(_mergeParamMixin.default);
        // 上线时打开
                if (API.DEV === "prod") {
            console.log = function() {};
        }
        _App.default.mpType = "app";
        var app = new _vue.default(_objectSpread({}, _App.default, {
            store: _index.default
        }));
        createApp(app).$mount();
        /* WEBPACK VAR INJECTION */    }).call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createApp"]);
    /***/}, , , 
/* 1 */
/* 2 */
/* 3 */
/* 4 */
/* 5 */
/*!******************************************************************************************!*\
  !*** D:/program files/WeChat_tools/project/开发资料/lingfengyuanhang/answers_uniapp/App.vue ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ , , function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */    var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 6);
    /* harmony reexport (unknown) */    for (var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) {
        if (__WEBPACK_IMPORT_KEY__ !== "default") (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
                return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key];
            });
        })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony import */    var _App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ 10);
    /* harmony import */    var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);
    var render, staticRenderFns, recyclableRender, components;
    var renderjs;
    /* normalize component */    var component = Object(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"], render, staticRenderFns, false, null, null, null, false, components, renderjs);
    component.options.__file = "App.vue";
    /* harmony default export */    __webpack_exports__["default"] = component.exports;
    /***/}, 
/* 6 */
/*!*******************************************************************************************************************!*\
  !*** D:/program files/WeChat_tools/project/开发资料/lingfengyuanhang/answers_uniapp/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */    var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 7);
    /* harmony import */    var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /* */ __webpack_require__.n(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */    for (var __WEBPACK_IMPORT_KEY__ in _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) {
        if (__WEBPACK_IMPORT_KEY__ !== "default") (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
                return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key];
            });
        })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony default export */    __webpack_exports__["default"] = _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a;
    /***/}, 
/* 7 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/program files/WeChat_tools/project/开发资料/lingfengyuanhang/answers_uniapp/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
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
        /* 注意：本项目不使用NVUE */        var io = __webpack_require__(/*! js_sdk/huzhen555-uniappsocketio/uniapp.socket.io.js */ 8);
        var socket = null;
        var _default = {
            globalData: {
                API: __webpack_require__(/*! commons/api.js */ 9),
                isIphoneX: false,
                userInfo: {
                    id: -1,
                    // 用户信息
                    token: null
                },
                shareTitle: "同学，一起学党史闯关答题，你敢挑战吗？",
                shareTitle2: "同学，一起学党史闯关答题，你敢挑战吗？",
                showOfficialAccount: false,
                //是否显示公众号组件
                musicPlay: false,
                //音乐是否在播放
                timerPlay: null,
                isBGMusic: true
            },
            methods: {
                liveRoom: function liveRoom(user_id, roomName) {
                    console.log("liveRoom.....");
                    if (socket) {
                        var data = {
                            user_id: user_id,
                            room_name: roomName
                        };
                        data = JSON.stringify(data);
                        socket.emit("leave-room", data, function(res) {
                            console.log("leave-room:", res);
                        });
                        socket.disconnect();
                        socket = null;
                        console.log("liveRoom.socket", socket);
                    }
                },
                joinRoom: function joinRoom(user_id, roomName) {
                    if (socket) {
                        socket.disconnect();
                        socket = null;
                    }
                    console.log("-----socket_url");
                    console.log(this.globalData.API);
                    var socket_url = this.globalData.API.DEVSOCKETURL;
                    if (this.globalData.API.DEV == "prod") {
                        socket_url = this.globalData.API.SOCKETURL;
                    }
                    console.log("-----socket_url");
                    console.log(socket_url);
                    socket = io(socket_url);
                    //链接域名
                                        console.log("joinRoom:", {
                        user_id: user_id,
                        roomName: roomName
                    });
                    socket.on("connect", function() {
                        console.log("connect...", socket.connected);
                        // true
                                                var data = {
                            user_id: user_id,
                            room_name: roomName
                        };
                        data = JSON.stringify(data);
                        socket.emit("join-room", data, function(res) {
                            console.log("join-room:", res);
                        });
                    });
                    socket.on("pk", function(res) {
                        if (res.length > 1) {
                            console.log("ps...", res);
                            console.log("msg...", JSON.parse(res));
                            var ret = JSON.parse(res);
                            if (ret.code == "1006") {
                                uni.$emit("pk_join_room", ret.data.pk_user);
                            }
                            if (ret.code == "1007") {
                                uni.$emit("start_game", "");
                            }
                            if (ret.code == "1008") {
                                uni.$emit("finished", "");
                            }
                            if (ret.code == "2000") {
                                uni.$emit("pk_submit", ret);
                            }
                            // TODO 3003 退出比赛处理 pvp
                                                }
                    });
                    socket.on("disconnect", function(res) {
                        console.log("disconnect...", res);
                    });
                }
            },
            onLaunch: function onLaunch(options) {
                var _this = this;
                //用户信息
                                var userInfo = uni.getStorageSync("userInfo");
                console.log(userInfo, "用户信息");
                if (userInfo) {
                    if (typeof userInfo.force_update === "undefined") {
                        uni.removeStorageSync("userInfo");
                    } else if (userInfo.force_update) {
                        uni.removeStorageSync("userInfo");
                    } else if (!userInfo.nickname) {
                        uni.removeStorageSync("userInfo");
                    }
                }
                var AppMusic = uni.createInnerAudioContext();
                var url = this.API.DEVAUDIOURL;
                if (this.API.DEV == "prod") {
                    url = this.API.AUDIOURL;
                }
                console.log(url);
                AppMusic.src = url + "timer.mp3";
                this.globalData.timerPlay = AppMusic;
                console.log("------ononLaunch-----");
                console.log(options.scene);
                //是否显示公众号组件
                                if (options.scene == 1047 || options.scene == 1124 || options.scene == 1089 || options.scene == 1038 || options.scene == 1011) {
                    console.log("-------kkkkk");
                    this.globalData.showOfficialAccount = true;
                    console.log(this.globalData.showOfficialAccount);
                }
                console.log(options);
                // this.globalData.sceneId = options.scene;
                // sdk.setLoginUrl(config.service.loginUrl)
                // sdk.clearSession();
                // sdk.clearUUID();
                // 判断iPhone X
                                uni.getSystemInfo({
                    success: function success(res) {
                        var modelmes = res.model;
                        if (modelmes.search("iPhone X") != -1) {
                            _this.globalData.isIphoneX = true;
                        }
                    }
                });
            },
            onShow: function onShow() {
                console.log("------onshow-----");
                // 版本跌打更新
                                var updateManager = uni.getUpdateManager();
                // 获取版本更新管理器对象
                                updateManager.onCheckForUpdate(function(res) {
                    // 请求完新版本信息的回调
                    if (res.hasUpdate) {
                        updateManager.onUpdateReady(function(res2) {
                            uni.showModal({
                                title: "更新提示",
                                content: "发现新版本，是否重启应用?",
                                confirmColor: "#ff7b2e",
                                showCancel: false,
                                success: function success(res2) {
                                    if (res2.confirm) {
                                        // 新的版本已经下载好，调用applyUpdate应用新版本并重启
                                        updateManager.applyUpdate();
                                    }
                                }
                            });
                        });
                    }
                });
                updateManager.onUpdateFailed(function(res) {
                    // 新的版本下载失败
                    uni.showModal({
                        title: "提示",
                        content: "检查到有新版本，但下载失败，请检查网络设置",
                        confirmColor: "#ff7b2e",
                        success: function success(res) {
                            if (res.confirm) {
                                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                                updateManager.applyUpdate();
                            }
                        }
                    });
                });
            },
            onHide: function onHide() {
                console.log("小程序切后台");
            }
        };
        exports.default = _default;
        /* WEBPACK VAR INJECTION */    }).call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]);
    /***/}, 
/* 8 */
/* 9 */
/* 10 */
/*!****************************************************************************************************************************!*\
  !*** D:/program files/WeChat_tools/project/开发资料/lingfengyuanhang/answers_uniapp/App.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ , , function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */    var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilder/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=scss& */ 11);
    /* harmony import */    var _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /* */ __webpack_require__.n(_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */    for (var __WEBPACK_IMPORT_KEY__ in _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) {
        if (__WEBPACK_IMPORT_KEY__ !== "default") (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
                return _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
            });
        })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony default export */    __webpack_exports__["default"] = _HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a;
    /***/}, 
/* 11 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/program files/WeChat_tools/project/开发资料/lingfengyuanhang/answers_uniapp/App.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    // extracted by mini-css-extract-plugin
    if (false) {
        var cssReload;
    }
    /***/} ], [ [ 0, "common/runtime", "common/vendor" ] ] ]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map