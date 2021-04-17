var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "common/vendor" ], [ 
/* 0 */
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ , function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.createApp = createApp;
    exports.createComponent = createComponent;
    exports.createPage = createPage;
    exports.createSubpackageApp = createSubpackageApp;
    exports.default = void 0;
    var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
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
    function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _iterableToArrayLimit(arr, i) {
        if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally {
            try {
                if (!_n && _i["return"] != null) _i["return"]();
            } finally {
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
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
    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }
    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    }
    var _toString = Object.prototype.toString;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function isFn(fn) {
        return typeof fn === "function";
    }
    function isStr(str) {
        return typeof str === "string";
    }
    function isPlainObject(obj) {
        return _toString.call(obj) === "[object Object]";
    }
    function hasOwn(obj, key) {
        return hasOwnProperty.call(obj, key);
    }
    function noop() {}
    /**
                      * Create a cached version of a pure function.
                      */    function cached(fn) {
        var cache = Object.create(null);
        return function cachedFn(str) {
            var hit = cache[str];
            return hit || (cache[str] = fn(str));
        };
    }
    /**
     * Camelize a hyphen-delimited string.
     */    var camelizeRE = /-(\w)/g;
    var camelize = cached(function(str) {
        return str.replace(camelizeRE, function(_, c) {
            return c ? c.toUpperCase() : "";
        });
    });
    var HOOKS = [ "invoke", "success", "fail", "complete", "returnValue" ];
    var globalInterceptors = {};
    var scopedInterceptors = {};
    function mergeHook(parentVal, childVal) {
        var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [ childVal ] : parentVal;
        return res ? dedupeHooks(res) : res;
    }
    function dedupeHooks(hooks) {
        var res = [];
        for (var i = 0; i < hooks.length; i++) {
            if (res.indexOf(hooks[i]) === -1) {
                res.push(hooks[i]);
            }
        }
        return res;
    }
    function removeHook(hooks, hook) {
        var index = hooks.indexOf(hook);
        if (index !== -1) {
            hooks.splice(index, 1);
        }
    }
    function mergeInterceptorHook(interceptor, option) {
        Object.keys(option).forEach(function(hook) {
            if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
                interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
            }
        });
    }
    function removeInterceptorHook(interceptor, option) {
        if (!interceptor || !option) {
            return;
        }
        Object.keys(option).forEach(function(hook) {
            if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
                removeHook(interceptor[hook], option[hook]);
            }
        });
    }
    function addInterceptor(method, option) {
        if (typeof method === "string" && isPlainObject(option)) {
            mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
        } else if (isPlainObject(method)) {
            mergeInterceptorHook(globalInterceptors, method);
        }
    }
    function removeInterceptor(method, option) {
        if (typeof method === "string") {
            if (isPlainObject(option)) {
                removeInterceptorHook(scopedInterceptors[method], option);
            } else {
                delete scopedInterceptors[method];
            }
        } else if (isPlainObject(method)) {
            removeInterceptorHook(globalInterceptors, method);
        }
    }
    function wrapperHook(hook) {
        return function(data) {
            return hook(data) || data;
        };
    }
    function isPromise(obj) {
        return !!obj && ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function") && typeof obj.then === "function";
    }
    function queue(hooks, data) {
        var promise = false;
        for (var i = 0; i < hooks.length; i++) {
            var hook = hooks[i];
            if (promise) {
                promise = Promise.resolve(wrapperHook(hook));
            } else {
                var res = hook(data);
                if (isPromise(res)) {
                    promise = Promise.resolve(res);
                }
                if (res === false) {
                    return {
                        then: function then() {}
                    };
                }
            }
        }
        return promise || {
            then: function then(callback) {
                return callback(data);
            }
        };
    }
    function wrapperOptions(interceptor) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        [ "success", "fail", "complete" ].forEach(function(name) {
            if (Array.isArray(interceptor[name])) {
                var oldCallback = options[name];
                options[name] = function callbackInterceptor(res) {
                    queue(interceptor[name], res).then(function(res) {
                        /* eslint-disable no-mixed-operators */
                        return isFn(oldCallback) && oldCallback(res) || res;
                    });
                };
            }
        });
        return options;
    }
    function wrapperReturnValue(method, returnValue) {
        var returnValueHooks = [];
        if (Array.isArray(globalInterceptors.returnValue)) {
            returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
        }
        var interceptor = scopedInterceptors[method];
        if (interceptor && Array.isArray(interceptor.returnValue)) {
            returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
        }
        returnValueHooks.forEach(function(hook) {
            returnValue = hook(returnValue) || returnValue;
        });
        return returnValue;
    }
    function getApiInterceptorHooks(method) {
        var interceptor = Object.create(null);
        Object.keys(globalInterceptors).forEach(function(hook) {
            if (hook !== "returnValue") {
                interceptor[hook] = globalInterceptors[hook].slice();
            }
        });
        var scopedInterceptor = scopedInterceptors[method];
        if (scopedInterceptor) {
            Object.keys(scopedInterceptor).forEach(function(hook) {
                if (hook !== "returnValue") {
                    interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
                }
            });
        }
        return interceptor;
    }
    function invokeApi(method, api, options) {
        for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
            params[_key - 3] = arguments[_key];
        }
        var interceptor = getApiInterceptorHooks(method);
        if (interceptor && Object.keys(interceptor).length) {
            if (Array.isArray(interceptor.invoke)) {
                var res = queue(interceptor.invoke, options);
                return res.then(function(options) {
                    return api.apply(void 0, [ wrapperOptions(interceptor, options) ].concat(params));
                });
            } else {
                return api.apply(void 0, [ wrapperOptions(interceptor, options) ].concat(params));
            }
        }
        return api.apply(void 0, [ options ].concat(params));
    }
    var promiseInterceptor = {
        returnValue: function returnValue(res) {
            if (!isPromise(res)) {
                return res;
            }
            return res.then(function(res) {
                return res[1];
            }).catch(function(res) {
                return res[0];
            });
        }
    };
    var SYNC_API_RE = /^\$|Window$|WindowStyle$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;
    var CONTEXT_API_RE = /^create|Manager$/;
    // Context例外情况
        var CONTEXT_API_RE_EXC = [ "createBLEConnection" ];
    // 同步例外情况
        var ASYNC_API = [ "createBLEConnection" ];
    var CALLBACK_API_RE = /^on|^off/;
    function isContextApi(name) {
        return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
    }
    function isSyncApi(name) {
        return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
    }
    function isCallbackApi(name) {
        return CALLBACK_API_RE.test(name) && name !== "onPush";
    }
    function handlePromise(promise) {
        return promise.then(function(data) {
            return [ null, data ];
        }).catch(function(err) {
            return [ err ];
        });
    }
    function shouldPromise(name) {
        if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
            return false;
        }
        return true;
    }
    /* eslint-disable no-extend-native */    if (!Promise.prototype.finally) {
        Promise.prototype.finally = function(callback) {
            var promise = this.constructor;
            return this.then(function(value) {
                return promise.resolve(callback()).then(function() {
                    return value;
                });
            }, function(reason) {
                return promise.resolve(callback()).then(function() {
                    throw reason;
                });
            });
        };
    }
    function promisify(name, api) {
        if (!shouldPromise(name)) {
            return api;
        }
        return function promiseApi() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                params[_key2 - 1] = arguments[_key2];
            }
            if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
                return wrapperReturnValue(name, invokeApi.apply(void 0, [ name, api, options ].concat(params)));
            }
            return wrapperReturnValue(name, handlePromise(new Promise(function(resolve, reject) {
                invokeApi.apply(void 0, [ name, api, Object.assign({}, options, {
                    success: resolve,
                    fail: reject
                }) ].concat(params));
            })));
        };
    }
    var EPS = 1e-4;
    var BASE_DEVICE_WIDTH = 750;
    var isIOS = false;
    var deviceWidth = 0;
    var deviceDPR = 0;
    function checkDeviceWidth() {
        var _wx$getSystemInfoSync = wx.getSystemInfoSync(), platform = _wx$getSystemInfoSync.platform, pixelRatio = _wx$getSystemInfoSync.pixelRatio, windowWidth = _wx$getSystemInfoSync.windowWidth;
        // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni
                deviceWidth = windowWidth;
        deviceDPR = pixelRatio;
        isIOS = platform === "ios";
    }
    function upx2px(number, newDeviceWidth) {
        if (deviceWidth === 0) {
            checkDeviceWidth();
        }
        number = Number(number);
        if (number === 0) {
            return 0;
        }
        var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
        if (result < 0) {
            result = -result;
        }
        result = Math.floor(result + EPS);
        if (result === 0) {
            if (deviceDPR === 1 || !isIOS) {
                result = 1;
            } else {
                result = .5;
            }
        }
        return number < 0 ? -result : result;
    }
    var interceptors = {
        promiseInterceptor: promiseInterceptor
    };
    var baseApi = /* */ Object.freeze({
        __proto__: null,
        upx2px: upx2px,
        addInterceptor: addInterceptor,
        removeInterceptor: removeInterceptor,
        interceptors: interceptors
    });
    function findExistsPageIndex(url) {
        var pages = getCurrentPages();
        var len = pages.length;
        while (len--) {
            var page = pages[len];
            if (page.$page && page.$page.fullPath === url) {
                return len;
            }
        }
        return -1;
    }
    var redirectTo = {
        name: function name(fromArgs) {
            if (fromArgs.exists === "back" && fromArgs.delta) {
                return "navigateBack";
            }
            return "redirectTo";
        },
        args: function args(fromArgs) {
            if (fromArgs.exists === "back" && fromArgs.url) {
                var existsPageIndex = findExistsPageIndex(fromArgs.url);
                if (existsPageIndex !== -1) {
                    var delta = getCurrentPages().length - 1 - existsPageIndex;
                    if (delta > 0) {
                        fromArgs.delta = delta;
                    }
                }
            }
        }
    };
    var previewImage = {
        args: function args(fromArgs) {
            var currentIndex = parseInt(fromArgs.current);
            if (isNaN(currentIndex)) {
                return;
            }
            var urls = fromArgs.urls;
            if (!Array.isArray(urls)) {
                return;
            }
            var len = urls.length;
            if (!len) {
                return;
            }
            if (currentIndex < 0) {
                currentIndex = 0;
            } else if (currentIndex >= len) {
                currentIndex = len - 1;
            }
            if (currentIndex > 0) {
                fromArgs.current = urls[currentIndex];
                fromArgs.urls = urls.filter(function(item, index) {
                    return index < currentIndex ? item !== urls[currentIndex] : true;
                });
            } else {
                fromArgs.current = urls[0];
            }
            return {
                indicator: false,
                loop: false
            };
        }
    };
    var UUID_KEY = "__DC_STAT_UUID";
    var deviceId;
    function addUuid(result) {
        deviceId = deviceId || wx.getStorageSync(UUID_KEY);
        if (!deviceId) {
            deviceId = Date.now() + "" + Math.floor(Math.random() * 1e7);
            wx.setStorage({
                key: UUID_KEY,
                data: deviceId
            });
        }
        result.deviceId = deviceId;
    }
    function addSafeAreaInsets(result) {
        if (result.safeArea) {
            var safeArea = result.safeArea;
            result.safeAreaInsets = {
                top: safeArea.top,
                left: safeArea.left,
                right: result.windowWidth - safeArea.right,
                bottom: result.windowHeight - safeArea.bottom
            };
        }
    }
    var getSystemInfo = {
        returnValue: function returnValue(result) {
            addUuid(result);
            addSafeAreaInsets(result);
        }
    };
    // import navigateTo from 'uni-helpers/navigate-to'
        var protocols = {
        redirectTo: redirectTo,
        // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
        previewImage: previewImage,
        getSystemInfo: getSystemInfo,
        getSystemInfoSync: getSystemInfo
    };
    var todos = [ "vibrate", "preloadPage", "unPreloadPage", "loadSubPackage" ];
    var canIUses = [];
    var CALLBACKS = [ "success", "fail", "cancel", "complete" ];
    function processCallback(methodName, method, returnValue) {
        return function(res) {
            return method(processReturnValue(methodName, res, returnValue));
        };
    }
    function processArgs(methodName, fromArgs) {
        var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
        if (isPlainObject(fromArgs)) {
            // 一般 api 的参数解析
            var toArgs = keepFromArgs === true ? fromArgs : {};
            // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
                        if (isFn(argsOption)) {
                argsOption = argsOption(fromArgs, toArgs) || {};
            }
            for (var key in fromArgs) {
                if (hasOwn(argsOption, key)) {
                    var keyOption = argsOption[key];
                    if (isFn(keyOption)) {
                        keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
                    }
                    if (!keyOption) {
                        // 不支持的参数
                        console.warn("The '".concat(methodName, "' method of platform '微信小程序' does not support option '").concat(key, "'"));
                    } else if (isStr(keyOption)) {
                        // 重写参数 key
                        toArgs[keyOption] = fromArgs[key];
                    } else if (isPlainObject(keyOption)) {
                        // {name:newName,value:value}可重新指定参数 key:value
                        toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
                    }
                } else if (CALLBACKS.indexOf(key) !== -1) {
                    if (isFn(fromArgs[key])) {
                        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
                    }
                } else {
                    if (!keepFromArgs) {
                        toArgs[key] = fromArgs[key];
                    }
                }
            }
            return toArgs;
        } else if (isFn(fromArgs)) {
            fromArgs = processCallback(methodName, fromArgs, returnValue);
        }
        return fromArgs;
    }
    function processReturnValue(methodName, res, returnValue) {
        var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (isFn(protocols.returnValue)) {
            // 处理通用 returnValue
            res = protocols.returnValue(methodName, res);
        }
        return processArgs(methodName, res, returnValue, {}, keepReturnValue);
    }
    function wrapper(methodName, method) {
        if (hasOwn(protocols, methodName)) {
            var protocol = protocols[methodName];
            if (!protocol) {
                // 暂不支持的 api
                return function() {
                    console.error("Platform '微信小程序' does not support '".concat(methodName, "'."));
                };
            }
            return function(arg1, arg2) {
                // 目前 api 最多两个参数
                var options = protocol;
                if (isFn(protocol)) {
                    options = protocol(arg1);
                }
                arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
                var args = [ arg1 ];
                if (typeof arg2 !== "undefined") {
                    args.push(arg2);
                }
                if (isFn(options.name)) {
                    methodName = options.name(arg1);
                } else if (isStr(options.name)) {
                    methodName = options.name;
                }
                var returnValue = wx[methodName].apply(wx, args);
                if (isSyncApi(methodName)) {
                    // 同步 api
                    return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
                }
                return returnValue;
            };
        }
        return method;
    }
    var todoApis = Object.create(null);
    var TODOS = [ "onTabBarMidButtonTap", "subscribePush", "unsubscribePush", "onPush", "offPush", "share" ];
    function createTodoApi(name) {
        return function todoApi(_ref) {
            var fail = _ref.fail, complete = _ref.complete;
            var res = {
                errMsg: "".concat(name, ":fail method '").concat(name, "' not supported")
            };
            isFn(fail) && fail(res);
            isFn(complete) && complete(res);
        };
    }
    TODOS.forEach(function(name) {
        todoApis[name] = createTodoApi(name);
    });
    var providers = {
        oauth: [ "weixin" ],
        share: [ "weixin" ],
        payment: [ "wxpay" ],
        push: [ "weixin" ]
    };
    function getProvider(_ref2) {
        var service = _ref2.service, success = _ref2.success, fail = _ref2.fail, complete = _ref2.complete;
        var res = false;
        if (providers[service]) {
            res = {
                errMsg: "getProvider:ok",
                service: service,
                provider: providers[service]
            };
            isFn(success) && success(res);
        } else {
            res = {
                errMsg: "getProvider:fail service not found"
            };
            isFn(fail) && fail(res);
        }
        isFn(complete) && complete(res);
    }
    var extraApi = /* */ Object.freeze({
        __proto__: null,
        getProvider: getProvider
    });
    var getEmitter = function() {
        var Emitter;
        return function getUniEmitter() {
            if (!Emitter) {
                Emitter = new _vue.default();
            }
            return Emitter;
        };
    }();
    function apply(ctx, method, args) {
        return ctx[method].apply(ctx, args);
    }
    function $on() {
        return apply(getEmitter(), "$on", Array.prototype.slice.call(arguments));
    }
    function $off() {
        return apply(getEmitter(), "$off", Array.prototype.slice.call(arguments));
    }
    function $once() {
        return apply(getEmitter(), "$once", Array.prototype.slice.call(arguments));
    }
    function $emit() {
        return apply(getEmitter(), "$emit", Array.prototype.slice.call(arguments));
    }
    var eventApi = /* */ Object.freeze({
        __proto__: null,
        $on: $on,
        $off: $off,
        $once: $once,
        $emit: $emit
    });
    var api = /* */ Object.freeze({
        __proto__: null
    });
    var MPPage = Page;
    var MPComponent = Component;
    var customizeRE = /:/g;
    var customize = cached(function(str) {
        return camelize(str.replace(customizeRE, "-"));
    });
    function initTriggerEvent(mpInstance) {
        {
            if (!wx.canIUse("nextTick")) {
                return;
            }
        }
        var oldTriggerEvent = mpInstance.triggerEvent;
        mpInstance.triggerEvent = function(event) {
            for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                args[_key3 - 1] = arguments[_key3];
            }
            return oldTriggerEvent.apply(mpInstance, [ customize(event) ].concat(args));
        };
    }
    function initHook(name, options) {
        var oldHook = options[name];
        if (!oldHook) {
            options[name] = function() {
                initTriggerEvent(this);
            };
        } else {
            options[name] = function() {
                initTriggerEvent(this);
                for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                    args[_key4] = arguments[_key4];
                }
                return oldHook.apply(this, args);
            };
        }
    }
    if (!MPPage.__$wrappered) {
        MPPage.__$wrappered = true;
        Page = function Page() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            initHook("onLoad", options);
            return MPPage(options);
        };
        Page.after = MPPage.after;
        Component = function Component() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            initHook("created", options);
            return MPComponent(options);
        };
    }
    var PAGE_EVENT_HOOKS = [ "onPullDownRefresh", "onReachBottom", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onPageScroll", "onResize", "onTabItemTap" ];
    function initMocks(vm, mocks) {
        var mpInstance = vm.$mp[vm.mpType];
        mocks.forEach(function(mock) {
            if (hasOwn(mpInstance, mock)) {
                vm[mock] = mpInstance[mock];
            }
        });
    }
    function hasHook(hook, vueOptions) {
        if (!vueOptions) {
            return true;
        }
        if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
            return true;
        }
        vueOptions = vueOptions.default || vueOptions;
        if (isFn(vueOptions)) {
            if (isFn(vueOptions.extendOptions[hook])) {
                return true;
            }
            if (vueOptions.super && vueOptions.super.options && Array.isArray(vueOptions.super.options[hook])) {
                return true;
            }
            return false;
        }
        if (isFn(vueOptions[hook])) {
            return true;
        }
        var mixins = vueOptions.mixins;
        if (Array.isArray(mixins)) {
            return !!mixins.find(function(mixin) {
                return hasHook(hook, mixin);
            });
        }
    }
    function initHooks(mpOptions, hooks, vueOptions) {
        hooks.forEach(function(hook) {
            if (hasHook(hook, vueOptions)) {
                mpOptions[hook] = function(args) {
                    return this.$vm && this.$vm.__call_hook(hook, args);
                };
            }
        });
    }
    function initVueComponent(Vue, vueOptions) {
        vueOptions = vueOptions.default || vueOptions;
        var VueComponent;
        if (isFn(vueOptions)) {
            VueComponent = vueOptions;
        } else {
            VueComponent = Vue.extend(vueOptions);
        }
        vueOptions = VueComponent.options;
        return [ VueComponent, vueOptions ];
    }
    function initSlots(vm, vueSlots) {
        if (Array.isArray(vueSlots) && vueSlots.length) {
            var $slots = Object.create(null);
            vueSlots.forEach(function(slotName) {
                $slots[slotName] = true;
            });
            vm.$scopedSlots = vm.$slots = $slots;
        }
    }
    function initVueIds(vueIds, mpInstance) {
        vueIds = (vueIds || "").split(",");
        var len = vueIds.length;
        if (len === 1) {
            mpInstance._$vueId = vueIds[0];
        } else if (len === 2) {
            mpInstance._$vueId = vueIds[0];
            mpInstance._$vuePid = vueIds[1];
        }
    }
    function initData(vueOptions, context) {
        var data = vueOptions.data || {};
        var methods = vueOptions.methods || {};
        if (typeof data === "function") {
            try {
                data = data.call(context);
                // 支持 Vue.prototype 上挂的数据
                        } catch (e) {
                if (Object({
                    NODE_ENV: "development",
                    VUE_APP_NAME: "answers_uniapp",
                    VUE_APP_PLATFORM: "mp-weixin",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                    console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。", data);
                }
            }
        } else {
            try {
                // 对 data 格式化
                data = JSON.parse(JSON.stringify(data));
            } catch (e) {}
        }
        if (!isPlainObject(data)) {
            data = {};
        }
        Object.keys(methods).forEach(function(methodName) {
            if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
                data[methodName] = methods[methodName];
            }
        });
        return data;
    }
    var PROP_TYPES = [ String, Number, Boolean, Object, Array, null ];
    function createObserver(name) {
        return function observer(newVal, oldVal) {
            if (this.$vm) {
                this.$vm[name] = newVal;
                // 为了触发其他非 render watcher
                        }
        };
    }
    function initBehaviors(vueOptions, initBehavior) {
        var vueBehaviors = vueOptions.behaviors;
        var vueExtends = vueOptions.extends;
        var vueMixins = vueOptions.mixins;
        var vueProps = vueOptions.props;
        if (!vueProps) {
            vueOptions.props = vueProps = [];
        }
        var behaviors = [];
        if (Array.isArray(vueBehaviors)) {
            vueBehaviors.forEach(function(behavior) {
                behaviors.push(behavior.replace("uni://", "wx".concat("://")));
                if (behavior === "uni://form-field") {
                    if (Array.isArray(vueProps)) {
                        vueProps.push("name");
                        vueProps.push("value");
                    } else {
                        vueProps.name = {
                            type: String,
                            default: ""
                        };
                        vueProps.value = {
                            type: [ String, Number, Boolean, Array, Object, Date ],
                            default: ""
                        };
                    }
                }
            });
        }
        if (isPlainObject(vueExtends) && vueExtends.props) {
            behaviors.push(initBehavior({
                properties: initProperties(vueExtends.props, true)
            }));
        }
        if (Array.isArray(vueMixins)) {
            vueMixins.forEach(function(vueMixin) {
                if (isPlainObject(vueMixin) && vueMixin.props) {
                    behaviors.push(initBehavior({
                        properties: initProperties(vueMixin.props, true)
                    }));
                }
            });
        }
        return behaviors;
    }
    function parsePropType(key, type, defaultValue, file) {
        // [String]=>String
        if (Array.isArray(type) && type.length === 1) {
            return type[0];
        }
        return type;
    }
    function initProperties(props) {
        var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        var properties = {};
        if (!isBehavior) {
            properties.vueId = {
                type: String,
                value: ""
            };
            // 用于字节跳动小程序模拟抽象节点
                        properties.generic = {
                type: Object,
                value: null
            };
            properties.vueSlots = {
                // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
                type: null,
                value: [],
                observer: function observer(newVal, oldVal) {
                    var $slots = Object.create(null);
                    newVal.forEach(function(slotName) {
                        $slots[slotName] = true;
                    });
                    this.setData({
                        $slots: $slots
                    });
                }
            };
        }
        if (Array.isArray(props)) {
            // ['title']
            props.forEach(function(key) {
                properties[key] = {
                    type: null,
                    observer: createObserver(key)
                };
            });
        } else if (isPlainObject(props)) {
            // {title:{type:String,default:''},content:String}
            Object.keys(props).forEach(function(key) {
                var opts = props[key];
                if (isPlainObject(opts)) {
                    // title:{type:String,default:''}
                    var value = opts.default;
                    if (isFn(value)) {
                        value = value();
                    }
                    opts.type = parsePropType(key, opts.type);
                    properties[key] = {
                        type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
                        value: value,
                        observer: createObserver(key)
                    };
                } else {
                    // content:String
                    var type = parsePropType(key, opts);
                    properties[key] = {
                        type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
                        observer: createObserver(key)
                    };
                }
            });
        }
        return properties;
    }
    function wrapper$1(event) {
        // TODO 又得兼容 mpvue 的 mp 对象
        try {
            event.mp = JSON.parse(JSON.stringify(event));
        } catch (e) {}
        event.stopPropagation = noop;
        event.preventDefault = noop;
        event.target = event.target || {};
        if (!hasOwn(event, "detail")) {
            event.detail = {};
        }
        if (hasOwn(event, "markerId")) {
            event.detail = _typeof(event.detail) === "object" ? event.detail : {};
            event.detail.markerId = event.markerId;
        }
        if (isPlainObject(event.detail)) {
            event.target = Object.assign({}, event.target, event.detail);
        }
        return event;
    }
    function getExtraValue(vm, dataPathsArray) {
        var context = vm;
        dataPathsArray.forEach(function(dataPathArray) {
            var dataPath = dataPathArray[0];
            var value = dataPathArray[2];
            if (dataPath || typeof value !== "undefined") {
                // ['','',index,'disable']
                var propPath = dataPathArray[1];
                var valuePath = dataPathArray[3];
                var vFor;
                if (Number.isInteger(dataPath)) {
                    vFor = dataPath;
                } else if (!dataPath) {
                    vFor = context;
                } else if (typeof dataPath === "string" && dataPath) {
                    if (dataPath.indexOf("#s#") === 0) {
                        vFor = dataPath.substr(3);
                    } else {
                        vFor = vm.__get_value(dataPath, context);
                    }
                }
                if (Number.isInteger(vFor)) {
                    context = value;
                } else if (!propPath) {
                    context = vFor[value];
                } else {
                    if (Array.isArray(vFor)) {
                        context = vFor.find(function(vForItem) {
                            return vm.__get_value(propPath, vForItem) === value;
                        });
                    } else if (isPlainObject(vFor)) {
                        context = Object.keys(vFor).find(function(vForKey) {
                            return vm.__get_value(propPath, vFor[vForKey]) === value;
                        });
                    } else {
                        console.error("v-for 暂不支持循环数据：", vFor);
                    }
                }
                if (valuePath) {
                    context = vm.__get_value(valuePath, context);
                }
            }
        });
        return context;
    }
    function processEventExtra(vm, extra, event) {
        var extraObj = {};
        if (Array.isArray(extra) && extra.length) {
            /**
                                                *[
                                                *    ['data.items', 'data.id', item.data.id],
                                                *    ['metas', 'id', meta.id]
                                                *],
                                                *[
                                                *    ['data.items', 'data.id', item.data.id],
                                                *    ['metas', 'id', meta.id]
                                                *],
                                                *'test'
                                                */
            extra.forEach(function(dataPath, index) {
                if (typeof dataPath === "string") {
                    if (!dataPath) {
                        // model,prop.sync
                        extraObj["$" + index] = vm;
                    } else {
                        if (dataPath === "$event") {
                            // $event
                            extraObj["$" + index] = event;
                        } else if (dataPath === "arguments") {
                            if (event.detail && event.detail.__args__) {
                                extraObj["$" + index] = event.detail.__args__;
                            } else {
                                extraObj["$" + index] = [ event ];
                            }
                        } else if (dataPath.indexOf("$event.") === 0) {
                            // $event.target.value
                            extraObj["$" + index] = vm.__get_value(dataPath.replace("$event.", ""), event);
                        } else {
                            extraObj["$" + index] = vm.__get_value(dataPath);
                        }
                    }
                } else {
                    extraObj["$" + index] = getExtraValue(vm, dataPath);
                }
            });
        }
        return extraObj;
    }
    function getObjByArray(arr) {
        var obj = {};
        for (var i = 1; i < arr.length; i++) {
            var element = arr[i];
            obj[element[0]] = element[1];
        }
        return obj;
    }
    function processEventArgs(vm, event) {
        var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
        var isCustom = arguments.length > 4 ? arguments[4] : undefined;
        var methodName = arguments.length > 5 ? arguments[5] : undefined;
        var isCustomMPEvent = false;
        // wxcomponent 组件，传递原始 event 对象
                if (isCustom) {
            // 自定义事件
            isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === "wx";
            if (!args.length) {
                // 无参数，直接传入 event 或 detail 数组
                if (isCustomMPEvent) {
                    return [ event ];
                }
                return event.detail.__args__ || event.detail;
            }
        }
        var extraObj = processEventExtra(vm, extra, event);
        var ret = [];
        args.forEach(function(arg) {
            if (arg === "$event") {
                if (methodName === "__set_model" && !isCustom) {
                    // input v-model value
                    ret.push(event.target.value);
                } else {
                    if (isCustom && !isCustomMPEvent) {
                        ret.push(event.detail.__args__[0]);
                    } else {
                        // wxcomponent 组件或内置组件
                        ret.push(event);
                    }
                }
            } else {
                if (Array.isArray(arg) && arg[0] === "o") {
                    ret.push(getObjByArray(arg));
                } else if (typeof arg === "string" && hasOwn(extraObj, arg)) {
                    ret.push(extraObj[arg]);
                } else {
                    ret.push(arg);
                }
            }
        });
        return ret;
    }
    var ONCE = "~";
    var CUSTOM = "^";
    function isMatchEventType(eventType, optType) {
        return eventType === optType || optType === "regionchange" && (eventType === "begin" || eventType === "end");
    }
    function getContextVm(vm) {
        var $parent = vm.$parent;
        // 父组件是 scoped slots 或者其他自定义组件时继续查找
                while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
            $parent = $parent.$parent;
        }
        return $parent && $parent.$parent;
    }
    function handleEvent(event) {
        var _this = this;
        event = wrapper$1(event);
        // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
                var dataset = (event.currentTarget || event.target).dataset;
        if (!dataset) {
            return console.warn("事件信息不存在");
        }
        var eventOpts = dataset.eventOpts || dataset["event-opts"];
        // 支付宝 web-view 组件 dataset 非驼峰
                if (!eventOpts) {
            return console.warn("事件信息不存在");
        }
        // [['handle',[1,2,a]],['handle1',[1,2,a]]]
                var eventType = event.type;
        var ret = [];
        eventOpts.forEach(function(eventOpt) {
            var type = eventOpt[0];
            var eventsArray = eventOpt[1];
            var isCustom = type.charAt(0) === CUSTOM;
            type = isCustom ? type.slice(1) : type;
            var isOnce = type.charAt(0) === ONCE;
            type = isOnce ? type.slice(1) : type;
            if (eventsArray && isMatchEventType(eventType, type)) {
                eventsArray.forEach(function(eventArray) {
                    var methodName = eventArray[0];
                    if (methodName) {
                        var handlerCtx = _this.$vm;
                        if (handlerCtx.$options.generic) {
                            // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
                            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
                        }
                        if (methodName === "$emit") {
                            handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
                            return;
                        }
                        var handler = handlerCtx[methodName];
                        if (!isFn(handler)) {
                            throw new Error(" _vm.".concat(methodName, " is not a function"));
                        }
                        if (isOnce) {
                            if (handler.once) {
                                return;
                            }
                            handler.once = true;
                        }
                        var params = processEventArgs(_this.$vm, event, eventArray[1], eventArray[2], isCustom, methodName);
                        params = Array.isArray(params) ? params : [];
                        // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
                                                if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
                            // eslint-disable-next-line no-sparse-arrays
                            params = params.concat([ , , , , , , , , , , event ]);
                        }
                        ret.push(handler.apply(handlerCtx, params));
                    }
                });
            }
        });
        if (eventType === "input" && ret.length === 1 && typeof ret[0] !== "undefined") {
            return ret[0];
        }
    }
    var eventChannels = {};
    var eventChannelStack = [];
    function getEventChannel(id) {
        if (id) {
            var eventChannel = eventChannels[id];
            delete eventChannels[id];
            return eventChannel;
        }
        return eventChannelStack.shift();
    }
    var hooks = [ "onShow", "onHide", "onError", "onPageNotFound", "onThemeChange", "onUnhandledRejection" ];
    function initEventChannel() {
        _vue.default.prototype.getOpenerEventChannel = function() {
            // 微信小程序使用自身getOpenerEventChannel
            {
                return this.$scope.getOpenerEventChannel();
            }
        };
        var callHook = _vue.default.prototype.__call_hook;
        _vue.default.prototype.__call_hook = function(hook, args) {
            if (hook === "onLoad" && args && args.__id__) {
                this.__eventChannel__ = getEventChannel(args.__id__);
                delete args.__id__;
            }
            return callHook.call(this, hook, args);
        };
    }
    function parseBaseApp(vm, _ref3) {
        var mocks = _ref3.mocks, initRefs = _ref3.initRefs;
        initEventChannel();
        if (vm.$options.store) {
            _vue.default.prototype.$store = vm.$options.store;
        }
        _vue.default.prototype.mpHost = "mp-weixin";
        _vue.default.mixin({
            beforeCreate: function beforeCreate() {
                if (!this.$options.mpType) {
                    return;
                }
                this.mpType = this.$options.mpType;
                this.$mp = _defineProperty({
                    data: {}
                }, this.mpType, this.$options.mpInstance);
                this.$scope = this.$options.mpInstance;
                delete this.$options.mpType;
                delete this.$options.mpInstance;
                if (this.mpType === "page") {
                    // hack vue-i18n
                    var app = getApp();
                    if (app.$vm && app.$vm.$i18n) {
                        this._i18n = app.$vm.$i18n;
                    }
                }
                if (this.mpType !== "app") {
                    initRefs(this);
                    initMocks(this, mocks);
                }
            }
        });
        var appOptions = {
            onLaunch: function onLaunch(args) {
                if (this.$vm) {
                    // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
                    return;
                }
                {
                    if (!wx.canIUse("nextTick")) {
                        // 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
                        console.error("当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上");
                    }
                }
                this.$vm = vm;
                this.$vm.$mp = {
                    app: this
                };
                this.$vm.$scope = this;
                // vm 上也挂载 globalData
                                this.$vm.globalData = this.globalData;
                this.$vm._isMounted = true;
                this.$vm.__call_hook("mounted", args);
                this.$vm.__call_hook("onLaunch", args);
            }
        };
        // 兼容旧版本 globalData
                appOptions.globalData = vm.$options.globalData || {};
        // 将 methods 中的方法挂在 getApp() 中
                var methods = vm.$options.methods;
        if (methods) {
            Object.keys(methods).forEach(function(name) {
                appOptions[name] = methods[name];
            });
        }
        initHooks(appOptions, hooks);
        return appOptions;
    }
    var mocks = [ "__route__", "__wxExparserNodeId__", "__wxWebviewId__" ];
    function findVmByVueId(vm, vuePid) {
        var $children = vm.$children;
        // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
                for (var i = $children.length - 1; i >= 0; i--) {
            var childVm = $children[i];
            if (childVm.$scope._$vueId === vuePid) {
                return childVm;
            }
        }
        // 反向递归查找
                var parentVm;
        for (var _i = $children.length - 1; _i >= 0; _i--) {
            parentVm = findVmByVueId($children[_i], vuePid);
            if (parentVm) {
                return parentVm;
            }
        }
    }
    function initBehavior(options) {
        return Behavior(options);
    }
    function isPage() {
        return !!this.route;
    }
    function initRelation(detail) {
        this.triggerEvent("__l", detail);
    }
    function selectAllComponents(mpInstance, selector, $refs) {
        var components = mpInstance.selectAllComponents(selector);
        components.forEach(function(component) {
            var ref = component.dataset.ref;
            $refs[ref] = component.$vm || component;
            {
                if (component.dataset.vueGeneric === "scoped") {
                    component.selectAllComponents(".scoped-ref").forEach(function(scopedComponent) {
                        selectAllComponents(scopedComponent, selector, $refs);
                    });
                }
            }
        });
    }
    function initRefs(vm) {
        var mpInstance = vm.$scope;
        Object.defineProperty(vm, "$refs", {
            get: function get() {
                var $refs = {};
                selectAllComponents(mpInstance, ".vue-ref", $refs);
                // TODO 暂不考虑 for 中的 scoped
                                var forComponents = mpInstance.selectAllComponents(".vue-ref-in-for");
                forComponents.forEach(function(component) {
                    var ref = component.dataset.ref;
                    if (!$refs[ref]) {
                        $refs[ref] = [];
                    }
                    $refs[ref].push(component.$vm || component);
                });
                return $refs;
            }
        });
    }
    function handleLink(event) {
        var _ref4 = event.detail || event.value, vuePid = _ref4.vuePid, vueOptions = _ref4.vueOptions;
        // detail 是微信,value 是百度(dipatch)
                var parentVm;
        if (vuePid) {
            parentVm = findVmByVueId(this.$vm, vuePid);
        }
        if (!parentVm) {
            parentVm = this.$vm;
        }
        vueOptions.parent = parentVm;
    }
    function parseApp(vm) {
        return parseBaseApp(vm, {
            mocks: mocks,
            initRefs: initRefs
        });
    }
    function createApp(vm) {
        App(parseApp(vm));
        return vm;
    }
    var encodeReserveRE = /[!'()*]/g;
    var encodeReserveReplacer = function encodeReserveReplacer(c) {
        return "%" + c.charCodeAt(0).toString(16);
    };
    var commaRE = /%2C/g;
    // fixed encodeURIComponent which is more conformant to RFC3986:
    // - escapes [!'()*]
    // - preserve commas
        var encode = function encode(str) {
        return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ",");
    };
    function stringifyQuery(obj) {
        var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
        var res = obj ? Object.keys(obj).map(function(key) {
            var val = obj[key];
            if (val === undefined) {
                return "";
            }
            if (val === null) {
                return encodeStr(key);
            }
            if (Array.isArray(val)) {
                var result = [];
                val.forEach(function(val2) {
                    if (val2 === undefined) {
                        return;
                    }
                    if (val2 === null) {
                        result.push(encodeStr(key));
                    } else {
                        result.push(encodeStr(key) + "=" + encodeStr(val2));
                    }
                });
                return result.join("&");
            }
            return encodeStr(key) + "=" + encodeStr(val);
        }).filter(function(x) {
            return x.length > 0;
        }).join("&") : null;
        return res ? "?".concat(res) : "";
    }
    function parseBaseComponent(vueComponentOptions) {
        var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, isPage = _ref5.isPage, initRelation = _ref5.initRelation;
        var _initVueComponent = initVueComponent(_vue.default, vueComponentOptions), _initVueComponent2 = _slicedToArray(_initVueComponent, 2), VueComponent = _initVueComponent2[0], vueOptions = _initVueComponent2[1];
        var options = _objectSpread({
            multipleSlots: true,
            addGlobalClass: true
        }, vueOptions.options || {});
        {
            // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
            if (vueOptions["mp-weixin"] && vueOptions["mp-weixin"].options) {
                Object.assign(options, vueOptions["mp-weixin"].options);
            }
        }
        var componentOptions = {
            options: options,
            data: initData(vueOptions, _vue.default.prototype),
            behaviors: initBehaviors(vueOptions, initBehavior),
            properties: initProperties(vueOptions.props, false, vueOptions.__file),
            lifetimes: {
                attached: function attached() {
                    var properties = this.properties;
                    var options = {
                        mpType: isPage.call(this) ? "page" : "component",
                        mpInstance: this,
                        propsData: properties
                    };
                    initVueIds(properties.vueId, this);
                    // 处理父子关系
                                        initRelation.call(this, {
                        vuePid: this._$vuePid,
                        vueOptions: options
                    });
                    // 初始化 vue 实例
                                        this.$vm = new VueComponent(options);
                    // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
                                        initSlots(this.$vm, properties.vueSlots);
                    // 触发首次 setData
                                        this.$vm.$mount();
                },
                ready: function ready() {
                    // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
                    // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
                    if (this.$vm) {
                        this.$vm._isMounted = true;
                        this.$vm.__call_hook("mounted");
                        this.$vm.__call_hook("onReady");
                    }
                },
                detached: function detached() {
                    this.$vm && this.$vm.$destroy();
                }
            },
            pageLifetimes: {
                show: function show(args) {
                    this.$vm && this.$vm.__call_hook("onPageShow", args);
                },
                hide: function hide() {
                    this.$vm && this.$vm.__call_hook("onPageHide");
                },
                resize: function resize(size) {
                    this.$vm && this.$vm.__call_hook("onPageResize", size);
                }
            },
            methods: {
                __l: handleLink,
                __e: handleEvent
            }
        };
        // externalClasses
                if (vueOptions.externalClasses) {
            componentOptions.externalClasses = vueOptions.externalClasses;
        }
        if (Array.isArray(vueOptions.wxsCallMethods)) {
            vueOptions.wxsCallMethods.forEach(function(callMethod) {
                componentOptions.methods[callMethod] = function(args) {
                    return this.$vm[callMethod](args);
                };
            });
        }
        if (isPage) {
            return componentOptions;
        }
        return [ componentOptions, VueComponent ];
    }
    function parseComponent(vueComponentOptions) {
        return parseBaseComponent(vueComponentOptions, {
            isPage: isPage,
            initRelation: initRelation
        });
    }
    var hooks$1 = [ "onShow", "onHide", "onUnload" ];
    hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);
    function parseBasePage(vuePageOptions, _ref6) {
        var isPage = _ref6.isPage, initRelation = _ref6.initRelation;
        var pageOptions = parseComponent(vuePageOptions);
        initHooks(pageOptions.methods, hooks$1, vuePageOptions);
        pageOptions.methods.onLoad = function(query) {
            this.options = query;
            var copyQuery = Object.assign({}, query);
            delete copyQuery.__id__;
            this.$page = {
                fullPath: "/" + (this.route || this.is) + stringifyQuery(copyQuery)
            };
            this.$vm.$mp.query = query;
            // 兼容 mpvue
                        this.$vm.__call_hook("onLoad", query);
        };
        return pageOptions;
    }
    function parsePage(vuePageOptions) {
        return parseBasePage(vuePageOptions, {
            isPage: isPage,
            initRelation: initRelation
        });
    }
    function createPage(vuePageOptions) {
        {
            return Component(parsePage(vuePageOptions));
        }
    }
    function createComponent(vueOptions) {
        {
            return Component(parseComponent(vueOptions));
        }
    }
    function createSubpackageApp(vm) {
        var appOptions = parseApp(vm);
        var app = getApp({
            allowDefault: true
        });
        var globalData = app.globalData;
        if (globalData) {
            Object.keys(appOptions.globalData).forEach(function(name) {
                if (!hasOwn(globalData, name)) {
                    globalData[name] = appOptions.globalData[name];
                }
            });
        }
        Object.keys(appOptions).forEach(function(name) {
            if (!hasOwn(app, name)) {
                app[name] = appOptions[name];
            }
        });
        if (isFn(appOptions.onShow) && wx.onAppShow) {
            wx.onAppShow(function() {
                for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                    args[_key5] = arguments[_key5];
                }
                appOptions.onShow.apply(app, args);
            });
        }
        if (isFn(appOptions.onHide) && wx.onAppHide) {
            wx.onAppHide(function() {
                for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                    args[_key6] = arguments[_key6];
                }
                appOptions.onHide.apply(app, args);
            });
        }
        if (isFn(appOptions.onLaunch)) {
            var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
            appOptions.onLaunch.call(app, args);
        }
        return vm;
    }
    todos.forEach(function(todoApi) {
        protocols[todoApi] = false;
    });
    canIUses.forEach(function(canIUseApi) {
        var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;
        if (!wx.canIUse(apiName)) {
            protocols[canIUseApi] = false;
        }
    });
    var uni = {};
    if (typeof Proxy !== "undefined" && "mp-weixin" !== "app-plus") {
        uni = new Proxy({}, {
            get: function get(target, name) {
                if (hasOwn(target, name)) {
                    return target[name];
                }
                if (baseApi[name]) {
                    return baseApi[name];
                }
                if (api[name]) {
                    return promisify(name, api[name]);
                }
                {
                    if (extraApi[name]) {
                        return promisify(name, extraApi[name]);
                    }
                    if (todoApis[name]) {
                        return promisify(name, todoApis[name]);
                    }
                }
                if (eventApi[name]) {
                    return eventApi[name];
                }
                if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
                    return;
                }
                return promisify(name, wrapper(name, wx[name]));
            },
            set: function set(target, name, value) {
                target[name] = value;
                return true;
            }
        });
    } else {
        Object.keys(baseApi).forEach(function(name) {
            uni[name] = baseApi[name];
        });
        {
            Object.keys(todoApis).forEach(function(name) {
                uni[name] = promisify(name, todoApis[name]);
            });
            Object.keys(extraApi).forEach(function(name) {
                uni[name] = promisify(name, todoApis[name]);
            });
        }
        Object.keys(eventApi).forEach(function(name) {
            uni[name] = eventApi[name];
        });
        Object.keys(api).forEach(function(name) {
            uni[name] = promisify(name, api[name]);
        });
        Object.keys(wx).forEach(function(name) {
            if (hasOwn(wx, name) || hasOwn(protocols, name)) {
                uni[name] = promisify(name, wrapper(name, wx[name]));
            }
        });
    }
    wx.createApp = createApp;
    wx.createPage = createPage;
    wx.createComponent = createComponent;
    wx.createSubpackageApp = createSubpackageApp;
    var uni$1 = uni;
    var _default = uni$1;
    exports.default = _default;
    /***/}, 
/* 2 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */    
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */ (function(global) {
        /*!
    * Vue.js v2.6.11
    * (c) 2014-2021 Evan You
    * Released under the MIT License.
    */
        /*  */
        var emptyObject = Object.freeze({});
        // These helpers produce better VM code in JS engines due to their
        // explicitness and function inlining.
                function isUndef(v) {
            return v === undefined || v === null;
        }
        function isDef(v) {
            return v !== undefined && v !== null;
        }
        function isTrue(v) {
            return v === true;
        }
        function isFalse(v) {
            return v === false;
        }
        /**
     * Check if value is primitive.
     */        function isPrimitive(value) {
            return typeof value === "string" || typeof value === "number" || 
            // $flow-disable-line
            (typeof value === "undefined" ? "undefined" : _typeof(value)) === "symbol" || typeof value === "boolean";
        }
        /**
     * Quick object check - this is primarily used to tell
     * Objects from primitive values when we know the value
     * is a JSON-compliant type.
     */        function isObject(obj) {
            return obj !== null && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object";
        }
        /**
     * Get the raw type string of a value, e.g., [object Object].
     */        var _toString = Object.prototype.toString;
        function toRawType(value) {
            return _toString.call(value).slice(8, -1);
        }
        /**
     * Strict object type check. Only returns true
     * for plain JavaScript objects.
     */        function isPlainObject(obj) {
            return _toString.call(obj) === "[object Object]";
        }
        function isRegExp(v) {
            return _toString.call(v) === "[object RegExp]";
        }
        /**
     * Check if val is a valid array index.
     */        function isValidArrayIndex(val) {
            var n = parseFloat(String(val));
            return n >= 0 && Math.floor(n) === n && isFinite(val);
        }
        function isPromise(val) {
            return isDef(val) && typeof val.then === "function" && typeof val.catch === "function";
        }
        /**
     * Convert a value to a string that is actually rendered.
     */        function toString(val) {
            return val == null ? "" : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
        }
        /**
     * Convert an input value to a number for persistence.
     * If the conversion fails, return original string.
     */        function toNumber(val) {
            var n = parseFloat(val);
            return isNaN(n) ? val : n;
        }
        /**
     * Make a map and return a function for checking if a key
     * is in that map.
     */        function makeMap(str, expectsLowerCase) {
            var map = Object.create(null);
            var list = str.split(",");
            for (var i = 0; i < list.length; i++) {
                map[list[i]] = true;
            }
            return expectsLowerCase ? function(val) {
                return map[val.toLowerCase()];
            } : function(val) {
                return map[val];
            };
        }
        /**
     * Check if a tag is a built-in tag.
     */        var isBuiltInTag = makeMap("slot,component", true);
        /**
     * Check if an attribute is a reserved attribute.
     */        var isReservedAttribute = makeMap("key,ref,slot,slot-scope,is");
        /**
     * Remove an item from an array.
     */        function remove(arr, item) {
            if (arr.length) {
                var index = arr.indexOf(item);
                if (index > -1) {
                    return arr.splice(index, 1);
                }
            }
        }
        /**
     * Check whether an object has the property.
     */        var hasOwnProperty = Object.prototype.hasOwnProperty;
        function hasOwn(obj, key) {
            return hasOwnProperty.call(obj, key);
        }
        /**
     * Create a cached version of a pure function.
     */        function cached(fn) {
            var cache = Object.create(null);
            return function cachedFn(str) {
                var hit = cache[str];
                return hit || (cache[str] = fn(str));
            };
        }
        /**
     * Camelize a hyphen-delimited string.
     */        var camelizeRE = /-(\w)/g;
        var camelize = cached(function(str) {
            return str.replace(camelizeRE, function(_, c) {
                return c ? c.toUpperCase() : "";
            });
        });
        /**
     * Capitalize a string.
     */        var capitalize = cached(function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        });
        /**
     * Hyphenate a camelCase string.
     */        var hyphenateRE = /\B([A-Z])/g;
        var hyphenate = cached(function(str) {
            return str.replace(hyphenateRE, "-$1").toLowerCase();
        });
        /**
     * Simple bind polyfill for environments that do not support it,
     * e.g., PhantomJS 1.x. Technically, we don't need this anymore
     * since native bind is now performant enough in most browsers.
     * But removing it would mean breaking code that was able to run in
     * PhantomJS 1.x, so this must be kept for backward compatibility.
     */
        /* istanbul ignore next */        function polyfillBind(fn, ctx) {
            function boundFn(a) {
                var l = arguments.length;
                return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
            }
            boundFn._length = fn.length;
            return boundFn;
        }
        function nativeBind(fn, ctx) {
            return fn.bind(ctx);
        }
        var bind = Function.prototype.bind ? nativeBind : polyfillBind;
        /**
     * Convert an Array-like object to a real Array.
     */        function toArray(list, start) {
            start = start || 0;
            var i = list.length - start;
            var ret = new Array(i);
            while (i--) {
                ret[i] = list[i + start];
            }
            return ret;
        }
        /**
     * Mix properties into target object.
     */        function extend(to, _from) {
            for (var key in _from) {
                to[key] = _from[key];
            }
            return to;
        }
        /**
     * Merge an Array of Objects into a single Object.
     */        function toObject(arr) {
            var res = {};
            for (var i = 0; i < arr.length; i++) {
                if (arr[i]) {
                    extend(res, arr[i]);
                }
            }
            return res;
        }
        /* eslint-disable no-unused-vars */
        /**
     * Perform no operation.
     * Stubbing args to make Flow happy without leaving useless transpiled code
     * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
     */        function noop(a, b, c) {}
        /**
     * Always return false.
     */        var no = function no(a, b, c) {
            return false;
        };
        /* eslint-enable no-unused-vars */
        /**
     * Return the same value.
     */        var identity = function identity(_) {
            return _;
        };
        /**
     * Check if two values are loosely equal - that is,
     * if they are plain objects, do they have the same shape?
     */        function looseEqual(a, b) {
            if (a === b) {
                return true;
            }
            var isObjectA = isObject(a);
            var isObjectB = isObject(b);
            if (isObjectA && isObjectB) {
                try {
                    var isArrayA = Array.isArray(a);
                    var isArrayB = Array.isArray(b);
                    if (isArrayA && isArrayB) {
                        return a.length === b.length && a.every(function(e, i) {
                            return looseEqual(e, b[i]);
                        });
                    } else if (a instanceof Date && b instanceof Date) {
                        return a.getTime() === b.getTime();
                    } else if (!isArrayA && !isArrayB) {
                        var keysA = Object.keys(a);
                        var keysB = Object.keys(b);
                        return keysA.length === keysB.length && keysA.every(function(key) {
                            return looseEqual(a[key], b[key]);
                        });
                    } else {
                        /* istanbul ignore next */
                        return false;
                    }
                } catch (e) {
                    /* istanbul ignore next */
                    return false;
                }
            } else if (!isObjectA && !isObjectB) {
                return String(a) === String(b);
            } else {
                return false;
            }
        }
        /**
     * Return the first index at which a loosely equal value can be
     * found in the array (if value is a plain object, the array must
     * contain an object of the same shape), or -1 if it is not present.
     */        function looseIndexOf(arr, val) {
            for (var i = 0; i < arr.length; i++) {
                if (looseEqual(arr[i], val)) {
                    return i;
                }
            }
            return -1;
        }
        /**
     * Ensure a function is called only once.
     */        function once(fn) {
            var called = false;
            return function() {
                if (!called) {
                    called = true;
                    fn.apply(this, arguments);
                }
            };
        }
        var ASSET_TYPES = [ "component", "directive", "filter" ];
        var LIFECYCLE_HOOKS = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch" ];
        /*  */        var config = {
            /**
       * Option merge strategies (used in core/util/options)
       */
            // $flow-disable-line
            optionMergeStrategies: Object.create(null),
            /**
       * Whether to suppress warnings.
       */
            silent: false,
            /**
       * Show production mode tip message on boot?
       */
            productionTip: "development" !== "production",
            /**
       * Whether to enable devtools
       */
            devtools: "development" !== "production",
            /**
       * Whether to record perf
       */
            performance: false,
            /**
       * Error handler for watcher errors
       */
            errorHandler: null,
            /**
       * Warn handler for watcher warns
       */
            warnHandler: null,
            /**
       * Ignore certain custom elements
       */
            ignoredElements: [],
            /**
       * Custom user key aliases for v-on
       */
            // $flow-disable-line
            keyCodes: Object.create(null),
            /**
       * Check if a tag is reserved so that it cannot be registered as a
       * component. This is platform-dependent and may be overwritten.
       */
            isReservedTag: no,
            /**
       * Check if an attribute is reserved so that it cannot be used as a component
       * prop. This is platform-dependent and may be overwritten.
       */
            isReservedAttr: no,
            /**
       * Check if a tag is an unknown element.
       * Platform-dependent.
       */
            isUnknownElement: no,
            /**
       * Get the namespace of an element
       */
            getTagNamespace: noop,
            /**
       * Parse the real tag name for the specific platform.
       */
            parsePlatformTagName: identity,
            /**
       * Check if an attribute must be bound using property, e.g. value
       * Platform-dependent.
       */
            mustUseProp: no,
            /**
       * Perform updates asynchronously. Intended to be used by Vue Test Utils
       * This will significantly reduce performance if set to false.
       */
            async: true,
            /**
       * Exposed for legacy reasons
       */
            _lifecycleHooks: LIFECYCLE_HOOKS
        };
        /*  */
        /**
     * unicode letters used for parsing html tags, component names and property paths.
     * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
     * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
     */        var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
        /**
     * Check if a string starts with $ or _
     */        function isReserved(str) {
            var c = (str + "").charCodeAt(0);
            return c === 36 || c === 95;
        }
        /**
     * Define a property.
     */        function def(obj, key, val, enumerable) {
            Object.defineProperty(obj, key, {
                value: val,
                enumerable: !!enumerable,
                writable: true,
                configurable: true
            });
        }
        /**
     * Parse simple path.
     */        var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");
        function parsePath(path) {
            if (bailRE.test(path)) {
                return;
            }
            var segments = path.split(".");
            return function(obj) {
                for (var i = 0; i < segments.length; i++) {
                    if (!obj) {
                        return;
                    }
                    obj = obj[segments[i]];
                }
                return obj;
            };
        }
        /*  */
        // can we use __proto__?
                var hasProto = "__proto__" in {};
        // Browser environment sniffing
                var inBrowser = typeof window !== "undefined";
        var inWeex = typeof WXEnvironment !== "undefined" && !!WXEnvironment.platform;
        var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
        var UA = inBrowser && window.navigator.userAgent.toLowerCase();
        var isIE = UA && /msie|trident/.test(UA);
        var isIE9 = UA && UA.indexOf("msie 9.0") > 0;
        var isEdge = UA && UA.indexOf("edge/") > 0;
        var isAndroid = UA && UA.indexOf("android") > 0 || weexPlatform === "android";
        var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === "ios";
        var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
        var isPhantomJS = UA && /phantomjs/.test(UA);
        var isFF = UA && UA.match(/firefox\/(\d+)/);
        // Firefox has a "watch" function on Object.prototype...
                var nativeWatch = {}.watch;
        if (inBrowser) {
            try {
                var opts = {};
                Object.defineProperty(opts, "passive", {
                    get: function get() {}
                });
                // https://github.com/facebook/flow/issues/285
                                window.addEventListener("test-passive", null, opts);
            } catch (e) {}
        }
        // this needs to be lazy-evaled because vue may be required before
        // vue-server-renderer can set VUE_ENV
                var _isServer;
        var isServerRendering = function isServerRendering() {
            if (_isServer === undefined) {
                /* istanbul ignore if */
                if (!inBrowser && !inWeex && typeof global !== "undefined") {
                    // detect presence of vue-server-renderer and avoid
                    // Webpack shimming the process
                    _isServer = global["process"] && global["process"].env.VUE_ENV === "server";
                } else {
                    _isServer = false;
                }
            }
            return _isServer;
        };
        // detect devtools
                var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        /* istanbul ignore next */        function isNative(Ctor) {
            return typeof Ctor === "function" && /native code/.test(Ctor.toString());
        }
        var hasSymbol = typeof Symbol !== "undefined" && isNative(Symbol) && typeof Reflect !== "undefined" && isNative(Reflect.ownKeys);
        var _Set;
        /* istanbul ignore if */ // $flow-disable-line
                if (typeof Set !== "undefined" && isNative(Set)) {
            // use native Set when available.
            _Set = Set;
        } else {
            // a non-standard Set polyfill that only works with primitive keys.
            _Set = /* */ function() {
                function Set() {
                    this.set = Object.create(null);
                }
                Set.prototype.has = function has(key) {
                    return this.set[key] === true;
                };
                Set.prototype.add = function add(key) {
                    this.set[key] = true;
                };
                Set.prototype.clear = function clear() {
                    this.set = Object.create(null);
                };
                return Set;
            }();
        }
        /*  */        var warn = noop;
        var tip = noop;
        var generateComponentTrace = noop;
        // work around flow check
                var formatComponentName = noop;
        if (true) {
            var hasConsole = typeof console !== "undefined";
            var classifyRE = /(?:^|[-_])(\w)/g;
            var classify = function classify(str) {
                return str.replace(classifyRE, function(c) {
                    return c.toUpperCase();
                }).replace(/[-_]/g, "");
            };
            warn = function warn(msg, vm) {
                var trace = vm ? generateComponentTrace(vm) : "";
                if (config.warnHandler) {
                    config.warnHandler.call(null, msg, vm, trace);
                } else if (hasConsole && !config.silent) {
                    console.error("[Vue warn]: " + msg + trace);
                }
            };
            tip = function tip(msg, vm) {
                if (hasConsole && !config.silent) {
                    console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ""));
                }
            };
            formatComponentName = function formatComponentName(vm, includeFile) {
                if (vm.$root === vm) {
                    if (vm.$options && vm.$options.__file) {
                        // fixed by xxxxxx
                        return "" + vm.$options.__file;
                    }
                    return "<Root>";
                }
                var options = typeof vm === "function" && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
                var name = options.name || options._componentTag;
                var file = options.__file;
                if (!name && file) {
                    var match = file.match(/([^/\\]+)\.vue$/);
                    name = match && match[1];
                }
                return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : "");
            };
            var repeat = function repeat(str, n) {
                var res = "";
                while (n) {
                    if (n % 2 === 1) {
                        res += str;
                    }
                    if (n > 1) {
                        str += str;
                    }
                    n >>= 1;
                }
                return res;
            };
            generateComponentTrace = function generateComponentTrace(vm) {
                if (vm._isVue && vm.$parent) {
                    var tree = [];
                    var currentRecursiveSequence = 0;
                    while (vm && vm.$options.name !== "PageBody") {
                        if (tree.length > 0) {
                            var last = tree[tree.length - 1];
                            if (last.constructor === vm.constructor) {
                                currentRecursiveSequence++;
                                vm = vm.$parent;
                                continue;
                            } else if (currentRecursiveSequence > 0) {
                                tree[tree.length - 1] = [ last, currentRecursiveSequence ];
                                currentRecursiveSequence = 0;
                            }
                        }
                        !vm.$options.isReserved && tree.push(vm);
                        vm = vm.$parent;
                    }
                    return "\n\nfound in\n\n" + tree.map(function(vm, i) {
                        return "" + (i === 0 ? "---\x3e " : repeat(" ", 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
                    }).join("\n");
                } else {
                    return "\n\n(found in " + formatComponentName(vm) + ")";
                }
            };
        }
        /*  */        var uid = 0;
        /**
     * A dep is an observable that can have multiple
     * directives subscribing to it.
     */        var Dep = function Dep() {
            this.id = uid++;
            this.subs = [];
        };
        Dep.prototype.addSub = function addSub(sub) {
            this.subs.push(sub);
        };
        Dep.prototype.removeSub = function removeSub(sub) {
            remove(this.subs, sub);
        };
        Dep.prototype.depend = function depend() {
            if (Dep.SharedObject.target) {
                Dep.SharedObject.target.addDep(this);
            }
        };
        Dep.prototype.notify = function notify() {
            // stabilize the subscriber list first
            var subs = this.subs.slice();
            if (true && !config.async) {
                // subs aren't sorted in scheduler if not running async
                // we need to sort them now to make sure they fire in correct
                // order
                subs.sort(function(a, b) {
                    return a.id - b.id;
                });
            }
            for (var i = 0, l = subs.length; i < l; i++) {
                subs[i].update();
            }
        };
        // The current target watcher being evaluated.
        // This is globally unique because only one watcher
        // can be evaluated at a time.
        // fixed by xxxxxx (nvue shared vuex)
        /* eslint-disable no-undef */        Dep.SharedObject = {};
        Dep.SharedObject.target = null;
        Dep.SharedObject.targetStack = [];
        function pushTarget(target) {
            Dep.SharedObject.targetStack.push(target);
            Dep.SharedObject.target = target;
            Dep.target = target;
        }
        function popTarget() {
            Dep.SharedObject.targetStack.pop();
            Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
            Dep.target = Dep.SharedObject.target;
        }
        /*  */        var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
            this.tag = tag;
            this.data = data;
            this.children = children;
            this.text = text;
            this.elm = elm;
            this.ns = undefined;
            this.context = context;
            this.fnContext = undefined;
            this.fnOptions = undefined;
            this.fnScopeId = undefined;
            this.key = data && data.key;
            this.componentOptions = componentOptions;
            this.componentInstance = undefined;
            this.parent = undefined;
            this.raw = false;
            this.isStatic = false;
            this.isRootInsert = true;
            this.isComment = false;
            this.isCloned = false;
            this.isOnce = false;
            this.asyncFactory = asyncFactory;
            this.asyncMeta = undefined;
            this.isAsyncPlaceholder = false;
        };
        var prototypeAccessors = {
            child: {
                configurable: true
            }
        };
        // DEPRECATED: alias for componentInstance for backwards compat.
        /* istanbul ignore next */        prototypeAccessors.child.get = function() {
            return this.componentInstance;
        };
        Object.defineProperties(VNode.prototype, prototypeAccessors);
        var createEmptyVNode = function createEmptyVNode(text) {
            if (text === void 0) text = "";
            var node = new VNode();
            node.text = text;
            node.isComment = true;
            return node;
        };
        function createTextVNode(val) {
            return new VNode(undefined, undefined, undefined, String(val));
        }
        // optimized shallow clone
        // used for static nodes and slot nodes because they may be reused across
        // multiple renders, cloning them avoids errors when DOM manipulations rely
        // on their elm reference.
                function cloneVNode(vnode) {
            var cloned = new VNode(vnode.tag, vnode.data, 
            // #7975
            // clone children array to avoid mutating original in case of cloning
            // a child.
            vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
            cloned.ns = vnode.ns;
            cloned.isStatic = vnode.isStatic;
            cloned.key = vnode.key;
            cloned.isComment = vnode.isComment;
            cloned.fnContext = vnode.fnContext;
            cloned.fnOptions = vnode.fnOptions;
            cloned.fnScopeId = vnode.fnScopeId;
            cloned.asyncMeta = vnode.asyncMeta;
            cloned.isCloned = true;
            return cloned;
        }
        /*
     * not type checking this file because flow doesn't play well with
     * dynamically accessing methods on Array prototype
     */        var arrayProto = Array.prototype;
        var arrayMethods = Object.create(arrayProto);
        var methodsToPatch = [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ];
        /**
     * Intercept mutating methods and emit events
     */        methodsToPatch.forEach(function(method) {
            // cache original method
            var original = arrayProto[method];
            def(arrayMethods, method, function mutator() {
                var args = [], len = arguments.length;
                while (len--) {
                    args[len] = arguments[len];
                }
                var result = original.apply(this, args);
                var ob = this.__ob__;
                var inserted;
                switch (method) {
                  case "push":
                  case "unshift":
                    inserted = args;
                    break;

                  case "splice":
                    inserted = args.slice(2);
                    break;
                }
                if (inserted) {
                    ob.observeArray(inserted);
                }
                // notify change
                                ob.dep.notify();
                return result;
            });
        });
        /*  */        var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
        /**
     * In some cases we may want to disable observation inside a component's
     * update computation.
     */        var shouldObserve = true;
        function toggleObserving(value) {
            shouldObserve = value;
        }
        /**
     * Observer class that is attached to each observed
     * object. Once attached, the observer converts the target
     * object's property keys into getter/setters that
     * collect dependencies and dispatch updates.
     */        var Observer = function Observer(value) {
            this.value = value;
            this.dep = new Dep();
            this.vmCount = 0;
            def(value, "__ob__", this);
            if (Array.isArray(value)) {
                if (hasProto) {
                    {
                        // fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
                        if (value.push !== value.__proto__.push) {
                            copyAugment(value, arrayMethods, arrayKeys);
                        } else {
                            protoAugment(value, arrayMethods);
                        }
                    }
                } else {
                    copyAugment(value, arrayMethods, arrayKeys);
                }
                this.observeArray(value);
            } else {
                this.walk(value);
            }
        };
        /**
     * Walk through all properties and convert them into
     * getter/setters. This method should only be called when
     * value type is Object.
     */        Observer.prototype.walk = function walk(obj) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length; i++) {
                defineReactive$$1(obj, keys[i]);
            }
        };
        /**
     * Observe a list of Array items.
     */        Observer.prototype.observeArray = function observeArray(items) {
            for (var i = 0, l = items.length; i < l; i++) {
                observe(items[i]);
            }
        };
        // helpers
        /**
     * Augment a target Object or Array by intercepting
     * the prototype chain using __proto__
     */        function protoAugment(target, src) {
            /* eslint-disable no-proto */
            target.__proto__ = src;
            /* eslint-enable no-proto */        }
        /**
     * Augment a target Object or Array by defining
     * hidden properties.
     */
        /* istanbul ignore next */        function copyAugment(target, src, keys) {
            for (var i = 0, l = keys.length; i < l; i++) {
                var key = keys[i];
                def(target, key, src[key]);
            }
        }
        /**
     * Attempt to create an observer instance for a value,
     * returns the new observer if successfully observed,
     * or the existing observer if the value already has one.
     */        function observe(value, asRootData) {
            if (!isObject(value) || value instanceof VNode) {
                return;
            }
            var ob;
            if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
                ob = value.__ob__;
            } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
                ob = new Observer(value);
            }
            if (asRootData && ob) {
                ob.vmCount++;
            }
            return ob;
        }
        /**
     * Define a reactive property on an Object.
     */        function defineReactive$$1(obj, key, val, customSetter, shallow) {
            var dep = new Dep();
            var property = Object.getOwnPropertyDescriptor(obj, key);
            if (property && property.configurable === false) {
                return;
            }
            // cater for pre-defined getter/setters
                        var getter = property && property.get;
            var setter = property && property.set;
            if ((!getter || setter) && arguments.length === 2) {
                val = obj[key];
            }
            var childOb = !shallow && observe(val);
            Object.defineProperty(obj, key, {
                enumerable: true,
                configurable: true,
                get: function reactiveGetter() {
                    var value = getter ? getter.call(obj) : val;
                    if (Dep.SharedObject.target) {
                        // fixed by xxxxxx
                        dep.depend();
                        if (childOb) {
                            childOb.dep.depend();
                            if (Array.isArray(value)) {
                                dependArray(value);
                            }
                        }
                    }
                    return value;
                },
                set: function reactiveSetter(newVal) {
                    var value = getter ? getter.call(obj) : val;
                    /* eslint-disable no-self-compare */                    if (newVal === value || newVal !== newVal && value !== value) {
                        return;
                    }
                    /* eslint-enable no-self-compare */                    if (true && customSetter) {
                        customSetter();
                    }
                    // #7981: for accessor properties without setter
                                        if (getter && !setter) {
                        return;
                    }
                    if (setter) {
                        setter.call(obj, newVal);
                    } else {
                        val = newVal;
                    }
                    childOb = !shallow && observe(newVal);
                    dep.notify();
                }
            });
        }
        /**
     * Set a property on an object. Adds the new property and
     * triggers change notification if the property doesn't
     * already exist.
     */        function set(target, key, val) {
            if (true && (isUndef(target) || isPrimitive(target))) {
                warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
            }
            if (Array.isArray(target) && isValidArrayIndex(key)) {
                target.length = Math.max(target.length, key);
                target.splice(key, 1, val);
                return val;
            }
            if (key in target && !(key in Object.prototype)) {
                target[key] = val;
                return val;
            }
            var ob = target.__ob__;
            if (target._isVue || ob && ob.vmCount) {
                true && warn("Avoid adding reactive properties to a Vue instance or its root $data " + "at runtime - declare it upfront in the data option.");
                return val;
            }
            if (!ob) {
                target[key] = val;
                return val;
            }
            defineReactive$$1(ob.value, key, val);
            ob.dep.notify();
            return val;
        }
        /**
     * Delete a property and trigger change if necessary.
     */        function del(target, key) {
            if (true && (isUndef(target) || isPrimitive(target))) {
                warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
            }
            if (Array.isArray(target) && isValidArrayIndex(key)) {
                target.splice(key, 1);
                return;
            }
            var ob = target.__ob__;
            if (target._isVue || ob && ob.vmCount) {
                true && warn("Avoid deleting properties on a Vue instance or its root $data " + "- just set it to null.");
                return;
            }
            if (!hasOwn(target, key)) {
                return;
            }
            delete target[key];
            if (!ob) {
                return;
            }
            ob.dep.notify();
        }
        /**
     * Collect dependencies on array elements when the array is touched, since
     * we cannot intercept array element access like property getters.
     */        function dependArray(value) {
            for (var e = void 0, i = 0, l = value.length; i < l; i++) {
                e = value[i];
                e && e.__ob__ && e.__ob__.dep.depend();
                if (Array.isArray(e)) {
                    dependArray(e);
                }
            }
        }
        /*  */
        /**
     * Option overwriting strategies are functions that handle
     * how to merge a parent option value and a child option
     * value into the final value.
     */        var strats = config.optionMergeStrategies;
        /**
     * Options with restrictions
     */        if (true) {
            strats.el = strats.propsData = function(parent, child, vm, key) {
                if (!vm) {
                    warn('option "' + key + '" can only be used during instance ' + "creation with the `new` keyword.");
                }
                return defaultStrat(parent, child);
            };
        }
        /**
     * Helper that recursively merges two data objects together.
     */        function mergeData(to, from) {
            if (!from) {
                return to;
            }
            var key, toVal, fromVal;
            var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);
            for (var i = 0; i < keys.length; i++) {
                key = keys[i];
                // in case the object is already observed...
                                if (key === "__ob__") {
                    continue;
                }
                toVal = to[key];
                fromVal = from[key];
                if (!hasOwn(to, key)) {
                    set(to, key, fromVal);
                } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
                    mergeData(toVal, fromVal);
                }
            }
            return to;
        }
        /**
     * Data
     */        function mergeDataOrFn(parentVal, childVal, vm) {
            if (!vm) {
                // in a Vue.extend merge, both should be functions
                if (!childVal) {
                    return parentVal;
                }
                if (!parentVal) {
                    return childVal;
                }
                // when parentVal & childVal are both present,
                // we need to return a function that returns the
                // merged result of both functions... no need to
                // check if parentVal is a function here because
                // it has to be a function to pass previous merges.
                                return function mergedDataFn() {
                    return mergeData(typeof childVal === "function" ? childVal.call(this, this) : childVal, typeof parentVal === "function" ? parentVal.call(this, this) : parentVal);
                };
            } else {
                return function mergedInstanceDataFn() {
                    // instance merge
                    var instanceData = typeof childVal === "function" ? childVal.call(vm, vm) : childVal;
                    var defaultData = typeof parentVal === "function" ? parentVal.call(vm, vm) : parentVal;
                    if (instanceData) {
                        return mergeData(instanceData, defaultData);
                    } else {
                        return defaultData;
                    }
                };
            }
        }
        strats.data = function(parentVal, childVal, vm) {
            if (!vm) {
                if (childVal && typeof childVal !== "function") {
                    true && warn('The "data" option should be a function ' + "that returns a per-instance value in component " + "definitions.", vm);
                    return parentVal;
                }
                return mergeDataOrFn(parentVal, childVal);
            }
            return mergeDataOrFn(parentVal, childVal, vm);
        };
        /**
     * Hooks and props are merged as arrays.
     */        function mergeHook(parentVal, childVal) {
            var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [ childVal ] : parentVal;
            return res ? dedupeHooks(res) : res;
        }
        function dedupeHooks(hooks) {
            var res = [];
            for (var i = 0; i < hooks.length; i++) {
                if (res.indexOf(hooks[i]) === -1) {
                    res.push(hooks[i]);
                }
            }
            return res;
        }
        LIFECYCLE_HOOKS.forEach(function(hook) {
            strats[hook] = mergeHook;
        });
        /**
     * Assets
     *
     * When a vm is present (instance creation), we need to do
     * a three-way merge between constructor options, instance
     * options and parent options.
     */        function mergeAssets(parentVal, childVal, vm, key) {
            var res = Object.create(parentVal || null);
            if (childVal) {
                true && assertObjectType(key, childVal, vm);
                return extend(res, childVal);
            } else {
                return res;
            }
        }
        ASSET_TYPES.forEach(function(type) {
            strats[type + "s"] = mergeAssets;
        });
        /**
     * Watchers.
     *
     * Watchers hashes should not overwrite one
     * another, so we merge them as arrays.
     */        strats.watch = function(parentVal, childVal, vm, key) {
            // work around Firefox's Object.prototype.watch...
            if (parentVal === nativeWatch) {
                parentVal = undefined;
            }
            if (childVal === nativeWatch) {
                childVal = undefined;
            }
            /* istanbul ignore if */            if (!childVal) {
                return Object.create(parentVal || null);
            }
            if (true) {
                assertObjectType(key, childVal, vm);
            }
            if (!parentVal) {
                return childVal;
            }
            var ret = {};
            extend(ret, parentVal);
            for (var key$1 in childVal) {
                var parent = ret[key$1];
                var child = childVal[key$1];
                if (parent && !Array.isArray(parent)) {
                    parent = [ parent ];
                }
                ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [ child ];
            }
            return ret;
        };
        /**
     * Other object hashes.
     */        strats.props = strats.methods = strats.inject = strats.computed = function(parentVal, childVal, vm, key) {
            if (childVal && "development" !== "production") {
                assertObjectType(key, childVal, vm);
            }
            if (!parentVal) {
                return childVal;
            }
            var ret = Object.create(null);
            extend(ret, parentVal);
            if (childVal) {
                extend(ret, childVal);
            }
            return ret;
        };
        strats.provide = mergeDataOrFn;
        /**
     * Default strategy.
     */        var defaultStrat = function defaultStrat(parentVal, childVal) {
            return childVal === undefined ? parentVal : childVal;
        };
        /**
     * Validate component names
     */        function checkComponents(options) {
            for (var key in options.components) {
                validateComponentName(key);
            }
        }
        function validateComponentName(name) {
            if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
                warn('Invalid component name: "' + name + '". Component names ' + "should conform to valid custom element name in html5 specification.");
            }
            if (isBuiltInTag(name) || config.isReservedTag(name)) {
                warn("Do not use built-in or reserved HTML elements as component " + "id: " + name);
            }
        }
        /**
     * Ensure all props option syntax are normalized into the
     * Object-based format.
     */        function normalizeProps(options, vm) {
            var props = options.props;
            if (!props) {
                return;
            }
            var res = {};
            var i, val, name;
            if (Array.isArray(props)) {
                i = props.length;
                while (i--) {
                    val = props[i];
                    if (typeof val === "string") {
                        name = camelize(val);
                        res[name] = {
                            type: null
                        };
                    } else if (true) {
                        warn("props must be strings when using array syntax.");
                    }
                }
            } else if (isPlainObject(props)) {
                for (var key in props) {
                    val = props[key];
                    name = camelize(key);
                    res[name] = isPlainObject(val) ? val : {
                        type: val
                    };
                }
            } else if (true) {
                warn('Invalid value for option "props": expected an Array or an Object, ' + "but got " + toRawType(props) + ".", vm);
            }
            options.props = res;
        }
        /**
     * Normalize all injections into Object-based format
     */        function normalizeInject(options, vm) {
            var inject = options.inject;
            if (!inject) {
                return;
            }
            var normalized = options.inject = {};
            if (Array.isArray(inject)) {
                for (var i = 0; i < inject.length; i++) {
                    normalized[inject[i]] = {
                        from: inject[i]
                    };
                }
            } else if (isPlainObject(inject)) {
                for (var key in inject) {
                    var val = inject[key];
                    normalized[key] = isPlainObject(val) ? extend({
                        from: key
                    }, val) : {
                        from: val
                    };
                }
            } else if (true) {
                warn('Invalid value for option "inject": expected an Array or an Object, ' + "but got " + toRawType(inject) + ".", vm);
            }
        }
        /**
     * Normalize raw function directives into object format.
     */        function normalizeDirectives(options) {
            var dirs = options.directives;
            if (dirs) {
                for (var key in dirs) {
                    var def$$1 = dirs[key];
                    if (typeof def$$1 === "function") {
                        dirs[key] = {
                            bind: def$$1,
                            update: def$$1
                        };
                    }
                }
            }
        }
        function assertObjectType(name, value, vm) {
            if (!isPlainObject(value)) {
                warn('Invalid value for option "' + name + '": expected an Object, ' + "but got " + toRawType(value) + ".", vm);
            }
        }
        /**
     * Merge two option objects into a new one.
     * Core utility used in both instantiation and inheritance.
     */        function mergeOptions(parent, child, vm) {
            if (true) {
                checkComponents(child);
            }
            if (typeof child === "function") {
                child = child.options;
            }
            normalizeProps(child, vm);
            normalizeInject(child, vm);
            normalizeDirectives(child);
            // Apply extends and mixins on the child options,
            // but only if it is a raw options object that isn't
            // the result of another mergeOptions call.
            // Only merged options has the _base property.
                        if (!child._base) {
                if (child.extends) {
                    parent = mergeOptions(parent, child.extends, vm);
                }
                if (child.mixins) {
                    for (var i = 0, l = child.mixins.length; i < l; i++) {
                        parent = mergeOptions(parent, child.mixins[i], vm);
                    }
                }
            }
            var options = {};
            var key;
            for (key in parent) {
                mergeField(key);
            }
            for (key in child) {
                if (!hasOwn(parent, key)) {
                    mergeField(key);
                }
            }
            function mergeField(key) {
                var strat = strats[key] || defaultStrat;
                options[key] = strat(parent[key], child[key], vm, key);
            }
            return options;
        }
        /**
     * Resolve an asset.
     * This function is used because child instances need access
     * to assets defined in its ancestor chain.
     */        function resolveAsset(options, type, id, warnMissing) {
            /* istanbul ignore if */
            if (typeof id !== "string") {
                return;
            }
            var assets = options[type];
            // check local registration variations first
                        if (hasOwn(assets, id)) {
                return assets[id];
            }
            var camelizedId = camelize(id);
            if (hasOwn(assets, camelizedId)) {
                return assets[camelizedId];
            }
            var PascalCaseId = capitalize(camelizedId);
            if (hasOwn(assets, PascalCaseId)) {
                return assets[PascalCaseId];
            }
            // fallback to prototype chain
                        var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
            if (true && warnMissing && !res) {
                warn("Failed to resolve " + type.slice(0, -1) + ": " + id, options);
            }
            return res;
        }
        /*  */        function validateProp(key, propOptions, propsData, vm) {
            var prop = propOptions[key];
            var absent = !hasOwn(propsData, key);
            var value = propsData[key];
            // boolean casting
                        var booleanIndex = getTypeIndex(Boolean, prop.type);
            if (booleanIndex > -1) {
                if (absent && !hasOwn(prop, "default")) {
                    value = false;
                } else if (value === "" || value === hyphenate(key)) {
                    // only cast empty string / same name to boolean if
                    // boolean has higher priority
                    var stringIndex = getTypeIndex(String, prop.type);
                    if (stringIndex < 0 || booleanIndex < stringIndex) {
                        value = true;
                    }
                }
            }
            // check default value
                        if (value === undefined) {
                value = getPropDefaultValue(vm, prop, key);
                // since the default value is a fresh copy,
                // make sure to observe it.
                                var prevShouldObserve = shouldObserve;
                toggleObserving(true);
                observe(value);
                toggleObserving(prevShouldObserve);
            }
            if (true) {
                assertProp(prop, key, value, vm, absent);
            }
            return value;
        }
        /**
     * Get the default value of a prop.
     */        function getPropDefaultValue(vm, prop, key) {
            // no default, return undefined
            if (!hasOwn(prop, "default")) {
                return undefined;
            }
            var def = prop.default;
            // warn against non-factory defaults for Object & Array
                        if (true && isObject(def)) {
                warn('Invalid default value for prop "' + key + '": ' + "Props with type Object/Array must use a factory function " + "to return the default value.", vm);
            }
            // the raw prop value was also undefined from previous render,
            // return previous default value to avoid unnecessary watcher trigger
                        if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
                return vm._props[key];
            }
            // call factory function for non-Function types
            // a value is Function if its prototype is function even across different execution context
                        return typeof def === "function" && getType(prop.type) !== "Function" ? def.call(vm) : def;
        }
        /**
     * Assert whether a prop is valid.
     */        function assertProp(prop, name, value, vm, absent) {
            if (prop.required && absent) {
                warn('Missing required prop: "' + name + '"', vm);
                return;
            }
            if (value == null && !prop.required) {
                return;
            }
            var type = prop.type;
            var valid = !type || type === true;
            var expectedTypes = [];
            if (type) {
                if (!Array.isArray(type)) {
                    type = [ type ];
                }
                for (var i = 0; i < type.length && !valid; i++) {
                    var assertedType = assertType(value, type[i]);
                    expectedTypes.push(assertedType.expectedType || "");
                    valid = assertedType.valid;
                }
            }
            if (!valid) {
                warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
                return;
            }
            var validator = prop.validator;
            if (validator) {
                if (!validator(value)) {
                    warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
                }
            }
        }
        var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;
        function assertType(value, type) {
            var valid;
            var expectedType = getType(type);
            if (simpleCheckRE.test(expectedType)) {
                var t = typeof value === "undefined" ? "undefined" : _typeof(value);
                valid = t === expectedType.toLowerCase();
                // for primitive wrapper objects
                                if (!valid && t === "object") {
                    valid = value instanceof type;
                }
            } else if (expectedType === "Object") {
                valid = isPlainObject(value);
            } else if (expectedType === "Array") {
                valid = Array.isArray(value);
            } else {
                valid = value instanceof type;
            }
            return {
                valid: valid,
                expectedType: expectedType
            };
        }
        /**
     * Use function string name to check built-in types,
     * because a simple equality check will fail when running
     * across different vms / iframes.
     */        function getType(fn) {
            var match = fn && fn.toString().match(/^\s*function (\w+)/);
            return match ? match[1] : "";
        }
        function isSameType(a, b) {
            return getType(a) === getType(b);
        }
        function getTypeIndex(type, expectedTypes) {
            if (!Array.isArray(expectedTypes)) {
                return isSameType(expectedTypes, type) ? 0 : -1;
            }
            for (var i = 0, len = expectedTypes.length; i < len; i++) {
                if (isSameType(expectedTypes[i], type)) {
                    return i;
                }
            }
            return -1;
        }
        function getInvalidTypeMessage(name, value, expectedTypes) {
            var message = 'Invalid prop: type check failed for prop "' + name + '".' + " Expected " + expectedTypes.map(capitalize).join(", ");
            var expectedType = expectedTypes[0];
            var receivedType = toRawType(value);
            var expectedValue = styleValue(value, expectedType);
            var receivedValue = styleValue(value, receivedType);
            // check if we need to specify expected value
                        if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
                message += " with value " + expectedValue;
            }
            message += ", got " + receivedType + " ";
            // check if we need to specify received value
                        if (isExplicable(receivedType)) {
                message += "with value " + receivedValue + ".";
            }
            return message;
        }
        function styleValue(value, type) {
            if (type === "String") {
                return '"' + value + '"';
            } else if (type === "Number") {
                return "" + Number(value);
            } else {
                return "" + value;
            }
        }
        function isExplicable(value) {
            var explicitTypes = [ "string", "number", "boolean" ];
            return explicitTypes.some(function(elem) {
                return value.toLowerCase() === elem;
            });
        }
        function isBoolean() {
            var args = [], len = arguments.length;
            while (len--) {
                args[len] = arguments[len];
            }
            return args.some(function(elem) {
                return elem.toLowerCase() === "boolean";
            });
        }
        /*  */        function handleError(err, vm, info) {
            // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
            // See: https://github.com/vuejs/vuex/issues/1505
            pushTarget();
            try {
                if (vm) {
                    var cur = vm;
                    while (cur = cur.$parent) {
                        var hooks = cur.$options.errorCaptured;
                        if (hooks) {
                            for (var i = 0; i < hooks.length; i++) {
                                try {
                                    var capture = hooks[i].call(cur, err, vm, info) === false;
                                    if (capture) {
                                        return;
                                    }
                                } catch (e) {
                                    globalHandleError(e, cur, "errorCaptured hook");
                                }
                            }
                        }
                    }
                }
                globalHandleError(err, vm, info);
            } finally {
                popTarget();
            }
        }
        function invokeWithErrorHandling(handler, context, args, vm, info) {
            var res;
            try {
                res = args ? handler.apply(context, args) : handler.call(context);
                if (res && !res._isVue && isPromise(res) && !res._handled) {
                    res.catch(function(e) {
                        return handleError(e, vm, info + " (Promise/async)");
                    });
                    // issue #9511
                    // avoid catch triggering multiple times when nested calls
                                        res._handled = true;
                }
            } catch (e) {
                handleError(e, vm, info);
            }
            return res;
        }
        function globalHandleError(err, vm, info) {
            if (config.errorHandler) {
                try {
                    return config.errorHandler.call(null, err, vm, info);
                } catch (e) {
                    // if the user intentionally throws the original error in the handler,
                    // do not log it twice
                    if (e !== err) {
                        logError(e, null, "config.errorHandler");
                    }
                }
            }
            logError(err, vm, info);
        }
        function logError(err, vm, info) {
            if (true) {
                warn("Error in " + info + ': "' + err.toString() + '"', vm);
            }
            /* istanbul ignore else */            if ((inBrowser || inWeex) && typeof console !== "undefined") {
                console.error(err);
            } else {
                throw err;
            }
        }
        /*  */        var callbacks = [];
        var pending = false;
        function flushCallbacks() {
            pending = false;
            var copies = callbacks.slice(0);
            callbacks.length = 0;
            for (var i = 0; i < copies.length; i++) {
                copies[i]();
            }
        }
        // Here we have async deferring wrappers using microtasks.
        // In 2.5 we used (macro) tasks (in combination with microtasks).
        // However, it has subtle problems when state is changed right before repaint
        // (e.g. #6813, out-in transitions).
        // Also, using (macro) tasks in event handler would cause some weird behaviors
        // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
        // So we now use microtasks everywhere, again.
        // A major drawback of this tradeoff is that there are some scenarios
        // where microtasks have too high a priority and fire in between supposedly
        // sequential events (e.g. #4521, #6690, which have workarounds)
        // or even between bubbling of the same event (#6566).
                var timerFunc;
        // The nextTick behavior leverages the microtask queue, which can be accessed
        // via either native Promise.then or MutationObserver.
        // MutationObserver has wider support, however it is seriously bugged in
        // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
        // completely stops working after triggering a few times... so, if native
        // Promise is available, we will use it:
        /* istanbul ignore next, $flow-disable-line */        if (typeof Promise !== "undefined" && isNative(Promise)) {
            var p = Promise.resolve();
            timerFunc = function timerFunc() {
                p.then(flushCallbacks);
                // In problematic UIWebViews, Promise.then doesn't completely break, but
                // it can get stuck in a weird state where callbacks are pushed into the
                // microtask queue but the queue isn't being flushed, until the browser
                // needs to do some other work, e.g. handle a timer. Therefore we can
                // "force" the microtask queue to be flushed by adding an empty timer.
                                if (isIOS) {
                    setTimeout(noop);
                }
            };
        } else if (!isIE && typeof MutationObserver !== "undefined" && (isNative(MutationObserver) || 
        // PhantomJS and iOS 7.x
        MutationObserver.toString() === "[object MutationObserverConstructor]")) {
            // Use MutationObserver where native Promise is not available,
            // e.g. PhantomJS, iOS7, Android 4.4
            // (#6466 MutationObserver is unreliable in IE11)
            var counter = 1;
            var observer = new MutationObserver(flushCallbacks);
            var textNode = document.createTextNode(String(counter));
            observer.observe(textNode, {
                characterData: true
            });
            timerFunc = function timerFunc() {
                counter = (counter + 1) % 2;
                textNode.data = String(counter);
            };
        } else if (typeof setImmediate !== "undefined" && isNative(setImmediate)) {
            // Fallback to setImmediate.
            // Technically it leverages the (macro) task queue,
            // but it is still a better choice than setTimeout.
            timerFunc = function timerFunc() {
                setImmediate(flushCallbacks);
            };
        } else {
            // Fallback to setTimeout.
            timerFunc = function timerFunc() {
                setTimeout(flushCallbacks, 0);
            };
        }
        function nextTick(cb, ctx) {
            var _resolve;
            callbacks.push(function() {
                if (cb) {
                    try {
                        cb.call(ctx);
                    } catch (e) {
                        handleError(e, ctx, "nextTick");
                    }
                } else if (_resolve) {
                    _resolve(ctx);
                }
            });
            if (!pending) {
                pending = true;
                timerFunc();
            }
            // $flow-disable-line
                        if (!cb && typeof Promise !== "undefined") {
                return new Promise(function(resolve) {
                    _resolve = resolve;
                });
            }
        }
        /*  */
        /* not type checking this file because flow doesn't play well with Proxy */        var initProxy;
        if (true) {
            var allowedGlobals = makeMap("Infinity,undefined,NaN,isFinite,isNaN," + "parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent," + "Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl," + "require");
            var warnNonPresent = function warnNonPresent(target, key) {
                warn('Property or method "' + key + '" is not defined on the instance but ' + "referenced during render. Make sure that this property is reactive, " + "either in the data option, or for class-based components, by " + "initializing the property. " + "See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.", target);
            };
            var warnReservedPrefix = function warnReservedPrefix(target, key) {
                warn('Property "' + key + '" must be accessed with "$data.' + key + '" because ' + 'properties starting with "$" or "_" are not proxied in the Vue instance to ' + "prevent conflicts with Vue internals. " + "See: https://vuejs.org/v2/api/#data", target);
            };
            var hasProxy = typeof Proxy !== "undefined" && isNative(Proxy);
            if (hasProxy) {
                var isBuiltInModifier = makeMap("stop,prevent,self,ctrl,shift,alt,meta,exact");
                config.keyCodes = new Proxy(config.keyCodes, {
                    set: function set(target, key, value) {
                        if (isBuiltInModifier(key)) {
                            warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
                            return false;
                        } else {
                            target[key] = value;
                            return true;
                        }
                    }
                });
            }
            var hasHandler = {
                has: function has(target, key) {
                    var has = key in target;
                    var isAllowed = allowedGlobals(key) || typeof key === "string" && key.charAt(0) === "_" && !(key in target.$data);
                    if (!has && !isAllowed) {
                        if (key in target.$data) {
                            warnReservedPrefix(target, key);
                        } else {
                            warnNonPresent(target, key);
                        }
                    }
                    return has || !isAllowed;
                }
            };
            var getHandler = {
                get: function get(target, key) {
                    if (typeof key === "string" && !(key in target)) {
                        if (key in target.$data) {
                            warnReservedPrefix(target, key);
                        } else {
                            warnNonPresent(target, key);
                        }
                    }
                    return target[key];
                }
            };
            initProxy = function initProxy(vm) {
                if (hasProxy) {
                    // determine which proxy handler to use
                    var options = vm.$options;
                    var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
                    vm._renderProxy = new Proxy(vm, handlers);
                } else {
                    vm._renderProxy = vm;
                }
            };
        }
        /*  */        var seenObjects = new _Set();
        /**
     * Recursively traverse an object to evoke all converted
     * getters, so that every nested property inside the object
     * is collected as a "deep" dependency.
     */        function traverse(val) {
            _traverse(val, seenObjects);
            seenObjects.clear();
        }
        function _traverse(val, seen) {
            var i, keys;
            var isA = Array.isArray(val);
            if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
                return;
            }
            if (val.__ob__) {
                var depId = val.__ob__.dep.id;
                if (seen.has(depId)) {
                    return;
                }
                seen.add(depId);
            }
            if (isA) {
                i = val.length;
                while (i--) {
                    _traverse(val[i], seen);
                }
            } else {
                keys = Object.keys(val);
                i = keys.length;
                while (i--) {
                    _traverse(val[keys[i]], seen);
                }
            }
        }
        var mark;
        var measure;
        if (true) {
            var perf = inBrowser && window.performance;
            /* istanbul ignore if */            if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
                mark = function mark(tag) {
                    return perf.mark(tag);
                };
                measure = function measure(name, startTag, endTag) {
                    perf.measure(name, startTag, endTag);
                    perf.clearMarks(startTag);
                    perf.clearMarks(endTag);
                    // perf.clearMeasures(name)
                                };
            }
        }
        /*  */        var normalizeEvent = cached(function(name) {
            var passive = name.charAt(0) === "&";
            name = passive ? name.slice(1) : name;
            var once$$1 = name.charAt(0) === "~";
            // Prefixed last, checked first
                        name = once$$1 ? name.slice(1) : name;
            var capture = name.charAt(0) === "!";
            name = capture ? name.slice(1) : name;
            return {
                name: name,
                once: once$$1,
                capture: capture,
                passive: passive
            };
        });
        function createFnInvoker(fns, vm) {
            function invoker() {
                var arguments$1 = arguments;
                var fns = invoker.fns;
                if (Array.isArray(fns)) {
                    var cloned = fns.slice();
                    for (var i = 0; i < cloned.length; i++) {
                        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
                    }
                } else {
                    // return handler return value for single handlers
                    return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
                }
            }
            invoker.fns = fns;
            return invoker;
        }
        function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
            var name, def$$1, cur, old, event;
            for (name in on) {
                def$$1 = cur = on[name];
                old = oldOn[name];
                event = normalizeEvent(name);
                if (isUndef(cur)) {
                    true && warn('Invalid handler for event "' + event.name + '": got ' + String(cur), vm);
                } else if (isUndef(old)) {
                    if (isUndef(cur.fns)) {
                        cur = on[name] = createFnInvoker(cur, vm);
                    }
                    if (isTrue(event.once)) {
                        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
                    }
                    add(event.name, cur, event.capture, event.passive, event.params);
                } else if (cur !== old) {
                    old.fns = cur;
                    on[name] = old;
                }
            }
            for (name in oldOn) {
                if (isUndef(on[name])) {
                    event = normalizeEvent(name);
                    remove$$1(event.name, oldOn[name], event.capture);
                }
            }
        }
        /*  */
        /*  */
        // fixed by xxxxxx (mp properties)
                function extractPropertiesFromVNodeData(data, Ctor, res, context) {
            var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
            if (isUndef(propOptions)) {
                return res;
            }
            var externalClasses = Ctor.options.mpOptions.externalClasses || [];
            var attrs = data.attrs;
            var props = data.props;
            if (isDef(attrs) || isDef(props)) {
                for (var key in propOptions) {
                    var altKey = hyphenate(key);
                    var result = checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
                    // externalClass
                                        if (result && res[key] && externalClasses.indexOf(altKey) !== -1 && context[camelize(res[key])]) {
                        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
                        res[key] = context[camelize(res[key])];
                    }
                }
            }
            return res;
        }
        function extractPropsFromVNodeData(data, Ctor, tag, context) {
            // we are only extracting raw values here.
            // validation and default values are handled in the child
            // component itself.
            var propOptions = Ctor.options.props;
            if (isUndef(propOptions)) {
                // fixed by xxxxxx
                return extractPropertiesFromVNodeData(data, Ctor, {}, context);
            }
            var res = {};
            var attrs = data.attrs;
            var props = data.props;
            if (isDef(attrs) || isDef(props)) {
                for (var key in propOptions) {
                    var altKey = hyphenate(key);
                    if (true) {
                        var keyInLowerCase = key.toLowerCase();
                        if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
                            tip('Prop "' + keyInLowerCase + '" is passed to component ' + formatComponentName(tag || Ctor) + ", but the declared prop name is" + ' "' + key + '". ' + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + 'templates. You should probably use "' + altKey + '" instead of "' + key + '".');
                        }
                    }
                    checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
                }
            }
            // fixed by xxxxxx
                        return extractPropertiesFromVNodeData(data, Ctor, res, context);
        }
        function checkProp(res, hash, key, altKey, preserve) {
            if (isDef(hash)) {
                if (hasOwn(hash, key)) {
                    res[key] = hash[key];
                    if (!preserve) {
                        delete hash[key];
                    }
                    return true;
                } else if (hasOwn(hash, altKey)) {
                    res[key] = hash[altKey];
                    if (!preserve) {
                        delete hash[altKey];
                    }
                    return true;
                }
            }
            return false;
        }
        /*  */
        // The template compiler attempts to minimize the need for normalization by
        // statically analyzing the template at compile time.
        //
        // For plain HTML markup, normalization can be completely skipped because the
        // generated render function is guaranteed to return Array<VNode>. There are
        // two cases where extra normalization is needed:
        // 1. When the children contains components - because a functional component
        // may return an Array instead of a single root. In this case, just a simple
        // normalization is needed - if any child is an Array, we flatten the whole
        // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
        // because functional components already normalize their own children.
                function simpleNormalizeChildren(children) {
            for (var i = 0; i < children.length; i++) {
                if (Array.isArray(children[i])) {
                    return Array.prototype.concat.apply([], children);
                }
            }
            return children;
        }
        // 2. When the children contains constructs that always generated nested Arrays,
        // e.g. <template>, <slot>, v-for, or when the children is provided by user
        // with hand-written render functions / JSX. In such cases a full normalization
        // is needed to cater to all possible types of children values.
                function normalizeChildren(children) {
            return isPrimitive(children) ? [ createTextVNode(children) ] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
        }
        function isTextNode(node) {
            return isDef(node) && isDef(node.text) && isFalse(node.isComment);
        }
        function normalizeArrayChildren(children, nestedIndex) {
            var res = [];
            var i, c, lastIndex, last;
            for (i = 0; i < children.length; i++) {
                c = children[i];
                if (isUndef(c) || typeof c === "boolean") {
                    continue;
                }
                lastIndex = res.length - 1;
                last = res[lastIndex];
                //  nested
                                if (Array.isArray(c)) {
                    if (c.length > 0) {
                        c = normalizeArrayChildren(c, (nestedIndex || "") + "_" + i);
                        // merge adjacent text nodes
                                                if (isTextNode(c[0]) && isTextNode(last)) {
                            res[lastIndex] = createTextVNode(last.text + c[0].text);
                            c.shift();
                        }
                        res.push.apply(res, c);
                    }
                } else if (isPrimitive(c)) {
                    if (isTextNode(last)) {
                        // merge adjacent text nodes
                        // this is necessary for SSR hydration because text nodes are
                        // essentially merged when rendered to HTML strings
                        res[lastIndex] = createTextVNode(last.text + c);
                    } else if (c !== "") {
                        // convert primitive to vnode
                        res.push(createTextVNode(c));
                    }
                } else {
                    if (isTextNode(c) && isTextNode(last)) {
                        // merge adjacent text nodes
                        res[lastIndex] = createTextVNode(last.text + c.text);
                    } else {
                        // default key for nested array children (likely generated by v-for)
                        if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
                            c.key = "__vlist" + nestedIndex + "_" + i + "__";
                        }
                        res.push(c);
                    }
                }
            }
            return res;
        }
        /*  */        function initProvide(vm) {
            var provide = vm.$options.provide;
            if (provide) {
                vm._provided = typeof provide === "function" ? provide.call(vm) : provide;
            }
        }
        function initInjections(vm) {
            var result = resolveInject(vm.$options.inject, vm);
            if (result) {
                toggleObserving(false);
                Object.keys(result).forEach(function(key) {
                    /* istanbul ignore else */
                    if (true) {
                        defineReactive$$1(vm, key, result[key], function() {
                            warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + 'injection being mutated: "' + key + '"', vm);
                        });
                    } else {}
                });
                toggleObserving(true);
            }
        }
        function resolveInject(inject, vm) {
            if (inject) {
                // inject is :any because flow is not smart enough to figure out cached
                var result = Object.create(null);
                var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    // #6574 in case the inject object is observed...
                                        if (key === "__ob__") {
                        continue;
                    }
                    var provideKey = inject[key].from;
                    var source = vm;
                    while (source) {
                        if (source._provided && hasOwn(source._provided, provideKey)) {
                            result[key] = source._provided[provideKey];
                            break;
                        }
                        source = source.$parent;
                    }
                    if (!source) {
                        if ("default" in inject[key]) {
                            var provideDefault = inject[key].default;
                            result[key] = typeof provideDefault === "function" ? provideDefault.call(vm) : provideDefault;
                        } else if (true) {
                            warn('Injection "' + key + '" not found', vm);
                        }
                    }
                }
                return result;
            }
        }
        /*  */
        /**
     * Runtime helper for resolving raw children VNodes into a slot object.
     */        function resolveSlots(children, context) {
            if (!children || !children.length) {
                return {};
            }
            var slots = {};
            for (var i = 0, l = children.length; i < l; i++) {
                var child = children[i];
                var data = child.data;
                // remove slot attribute if the node is resolved as a Vue slot node
                                if (data && data.attrs && data.attrs.slot) {
                    delete data.attrs.slot;
                }
                // named slots should only be respected if the vnode was rendered in the
                // same context.
                                if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
                    var name = data.slot;
                    var slot = slots[name] || (slots[name] = []);
                    if (child.tag === "template") {
                        slot.push.apply(slot, child.children || []);
                    } else {
                        slot.push(child);
                    }
                } else {
                    // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
                    if (child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === "page") {
                        (slots["page"] || (slots["page"] = [])).push(child);
                    } else {
                        (slots.default || (slots.default = [])).push(child);
                    }
                }
            }
            // ignore slots that contains only whitespace
                        for (var name$1 in slots) {
                if (slots[name$1].every(isWhitespace)) {
                    delete slots[name$1];
                }
            }
            return slots;
        }
        function isWhitespace(node) {
            return node.isComment && !node.asyncFactory || node.text === " ";
        }
        /*  */        function normalizeScopedSlots(slots, normalSlots, prevSlots) {
            var res;
            var hasNormalSlots = Object.keys(normalSlots).length > 0;
            var isStable = slots ? !!slots.$stable : !hasNormalSlots;
            var key = slots && slots.$key;
            if (!slots) {
                res = {};
            } else if (slots._normalized) {
                // fast path 1: child component re-render only, parent did not change
                return slots._normalized;
            } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
                // fast path 2: stable scoped slots w/ no normal slots to proxy,
                // only need to normalize once
                return prevSlots;
            } else {
                res = {};
                for (var key$1 in slots) {
                    if (slots[key$1] && key$1[0] !== "$") {
                        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
                    }
                }
            }
            // expose normal slots on scopedSlots
                        for (var key$2 in normalSlots) {
                if (!(key$2 in res)) {
                    res[key$2] = proxyNormalSlot(normalSlots, key$2);
                }
            }
            // avoriaz seems to mock a non-extensible $scopedSlots object
            // and when that is passed down this would cause an error
                        if (slots && Object.isExtensible(slots)) {
                slots._normalized = res;
            }
            def(res, "$stable", isStable);
            def(res, "$key", key);
            def(res, "$hasNormal", hasNormalSlots);
            return res;
        }
        function normalizeScopedSlot(normalSlots, key, fn) {
            var normalized = function normalized() {
                var res = arguments.length ? fn.apply(null, arguments) : fn({});
                res = res && (typeof res === "undefined" ? "undefined" : _typeof(res)) === "object" && !Array.isArray(res) ? [ res ] : normalizeChildren(res);
                return res && (res.length === 0 || res.length === 1 && res[0].isComment) ? undefined : res;
            };
            // this is a slot using the new v-slot syntax without scope. although it is
            // compiled as a scoped slot, render fn users would expect it to be present
            // on this.$slots because the usage is semantically a normal slot.
                        if (fn.proxy) {
                Object.defineProperty(normalSlots, key, {
                    get: normalized,
                    enumerable: true,
                    configurable: true
                });
            }
            return normalized;
        }
        function proxyNormalSlot(slots, key) {
            return function() {
                return slots[key];
            };
        }
        /*  */
        /**
     * Runtime helper for rendering v-for lists.
     */        function renderList(val, render) {
            var ret, i, l, keys, key;
            if (Array.isArray(val) || typeof val === "string") {
                ret = new Array(val.length);
                for (i = 0, l = val.length; i < l; i++) {
                    ret[i] = render(val[i], i, i, i);
                    // fixed by xxxxxx
                                }
            } else if (typeof val === "number") {
                ret = new Array(val);
                for (i = 0; i < val; i++) {
                    ret[i] = render(i + 1, i, i, i);
                    // fixed by xxxxxx
                                }
            } else if (isObject(val)) {
                if (hasSymbol && val[Symbol.iterator]) {
                    ret = [];
                    var iterator = val[Symbol.iterator]();
                    var result = iterator.next();
                    while (!result.done) {
                        ret.push(render(result.value, ret.length, i, i++));
                        // fixed by xxxxxx
                                                result = iterator.next();
                    }
                } else {
                    keys = Object.keys(val);
                    ret = new Array(keys.length);
                    for (i = 0, l = keys.length; i < l; i++) {
                        key = keys[i];
                        ret[i] = render(val[key], key, i, i);
                        // fixed by xxxxxx
                                        }
                }
            }
            if (!isDef(ret)) {
                ret = [];
            }
            ret._isVList = true;
            return ret;
        }
        /*  */
        /**
     * Runtime helper for rendering <slot>
     */        function renderSlot(name, fallback, props, bindObject) {
            var scopedSlotFn = this.$scopedSlots[name];
            var nodes;
            if (scopedSlotFn) {
                // scoped slot
                props = props || {};
                if (bindObject) {
                    if (true && !isObject(bindObject)) {
                        warn("slot v-bind without argument expects an Object", this);
                    }
                    props = extend(extend({}, bindObject), props);
                }
                // fixed by xxxxxx app-plus scopedSlot
                                nodes = scopedSlotFn(props, this, props._i) || fallback;
            } else {
                nodes = this.$slots[name] || fallback;
            }
            var target = props && props.slot;
            if (target) {
                return this.$createElement("template", {
                    slot: target
                }, nodes);
            } else {
                return nodes;
            }
        }
        /*  */
        /**
     * Runtime helper for resolving filters
     */        function resolveFilter(id) {
            return resolveAsset(this.$options, "filters", id, true) || identity;
        }
        /*  */        function isKeyNotMatch(expect, actual) {
            if (Array.isArray(expect)) {
                return expect.indexOf(actual) === -1;
            } else {
                return expect !== actual;
            }
        }
        /**
     * Runtime helper for checking keyCodes from config.
     * exposed as Vue.prototype._k
     * passing in eventKeyName as last argument separately for backwards compat
     */        function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
            var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
            if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
                return isKeyNotMatch(builtInKeyName, eventKeyName);
            } else if (mappedKeyCode) {
                return isKeyNotMatch(mappedKeyCode, eventKeyCode);
            } else if (eventKeyName) {
                return hyphenate(eventKeyName) !== key;
            }
        }
        /*  */
        /**
     * Runtime helper for merging v-bind="object" into a VNode's data.
     */        function bindObjectProps(data, tag, value, asProp, isSync) {
            if (value) {
                if (!isObject(value)) {
                    true && warn("v-bind without argument expects an Object or Array value", this);
                } else {
                    if (Array.isArray(value)) {
                        value = toObject(value);
                    }
                    var hash;
                    var loop = function loop(key) {
                        if (key === "class" || key === "style" || isReservedAttribute(key)) {
                            hash = data;
                        } else {
                            var type = data.attrs && data.attrs.type;
                            hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
                        }
                        var camelizedKey = camelize(key);
                        var hyphenatedKey = hyphenate(key);
                        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
                            hash[key] = value[key];
                            if (isSync) {
                                var on = data.on || (data.on = {});
                                on["update:" + key] = function($event) {
                                    value[key] = $event;
                                };
                            }
                        }
                    };
                    for (var key in value) {
                        loop(key);
                    }
                }
            }
            return data;
        }
        /*  */
        /**
     * Runtime helper for rendering static trees.
     */        function renderStatic(index, isInFor) {
            var cached = this._staticTrees || (this._staticTrees = []);
            var tree = cached[index];
            // if has already-rendered static tree and not inside v-for,
            // we can reuse the same tree.
                        if (tree && !isInFor) {
                return tree;
            }
            // otherwise, render a fresh tree.
                        tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this);
            markStatic(tree, "__static__" + index, false);
            return tree;
        }
        /**
     * Runtime helper for v-once.
     * Effectively it means marking the node as static with a unique key.
     */        function markOnce(tree, index, key) {
            markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
            return tree;
        }
        function markStatic(tree, key, isOnce) {
            if (Array.isArray(tree)) {
                for (var i = 0; i < tree.length; i++) {
                    if (tree[i] && typeof tree[i] !== "string") {
                        markStaticNode(tree[i], key + "_" + i, isOnce);
                    }
                }
            } else {
                markStaticNode(tree, key, isOnce);
            }
        }
        function markStaticNode(node, key, isOnce) {
            node.isStatic = true;
            node.key = key;
            node.isOnce = isOnce;
        }
        /*  */        function bindObjectListeners(data, value) {
            if (value) {
                if (!isPlainObject(value)) {
                    true && warn("v-on without argument expects an Object value", this);
                } else {
                    var on = data.on = data.on ? extend({}, data.on) : {};
                    for (var key in value) {
                        var existing = on[key];
                        var ours = value[key];
                        on[key] = existing ? [].concat(existing, ours) : ours;
                    }
                }
            }
            return data;
        }
        /*  */        function resolveScopedSlots(fns, // see flow/vnode
        res, 
        // the following are added in 2.6
        hasDynamicKeys, contentHashKey) {
            res = res || {
                $stable: !hasDynamicKeys
            };
            for (var i = 0; i < fns.length; i++) {
                var slot = fns[i];
                if (Array.isArray(slot)) {
                    resolveScopedSlots(slot, res, hasDynamicKeys);
                } else if (slot) {
                    // marker for reverse proxying v-slot without scope on this.$slots
                    if (slot.proxy) {
                        slot.fn.proxy = true;
                    }
                    res[slot.key] = slot.fn;
                }
            }
            if (contentHashKey) {
                res.$key = contentHashKey;
            }
            return res;
        }
        /*  */        function bindDynamicKeys(baseObj, values) {
            for (var i = 0; i < values.length; i += 2) {
                var key = values[i];
                if (typeof key === "string" && key) {
                    baseObj[values[i]] = values[i + 1];
                } else if (true && key !== "" && key !== null) {
                    // null is a special value for explicitly removing a binding
                    warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
                }
            }
            return baseObj;
        }
        // helper to dynamically append modifier runtime markers to event names.
        // ensure only append when value is already string, otherwise it will be cast
        // to string and cause the type check to miss.
                function prependModifier(value, symbol) {
            return typeof value === "string" ? symbol + value : value;
        }
        /*  */        function installRenderHelpers(target) {
            target._o = markOnce;
            target._n = toNumber;
            target._s = toString;
            target._l = renderList;
            target._t = renderSlot;
            target._q = looseEqual;
            target._i = looseIndexOf;
            target._m = renderStatic;
            target._f = resolveFilter;
            target._k = checkKeyCodes;
            target._b = bindObjectProps;
            target._v = createTextVNode;
            target._e = createEmptyVNode;
            target._u = resolveScopedSlots;
            target._g = bindObjectListeners;
            target._d = bindDynamicKeys;
            target._p = prependModifier;
        }
        /*  */        function FunctionalRenderContext(data, props, children, parent, Ctor) {
            var this$1 = this;
            var options = Ctor.options;
            // ensure the createElement function in functional components
            // gets a unique context - this is necessary for correct named slot check
                        var contextVm;
            if (hasOwn(parent, "_uid")) {
                contextVm = Object.create(parent);
                // $flow-disable-line
                                contextVm._original = parent;
            } else {
                // the context vm passed in is a functional context as well.
                // in this case we want to make sure we are able to get a hold to the
                // real context instance.
                contextVm = parent;
                // $flow-disable-line
                                parent = parent._original;
            }
            var isCompiled = isTrue(options._compiled);
            var needNormalization = !isCompiled;
            this.data = data;
            this.props = props;
            this.children = children;
            this.parent = parent;
            this.listeners = data.on || emptyObject;
            this.injections = resolveInject(options.inject, parent);
            this.slots = function() {
                if (!this$1.$slots) {
                    normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
                }
                return this$1.$slots;
            };
            Object.defineProperty(this, "scopedSlots", {
                enumerable: true,
                get: function get() {
                    return normalizeScopedSlots(data.scopedSlots, this.slots());
                }
            });
            // support for compiled functional template
                        if (isCompiled) {
                // exposing $options for renderStatic()
                this.$options = options;
                // pre-resolve slots for renderSlot()
                                this.$slots = this.slots();
                this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
            }
            if (options._scopeId) {
                this._c = function(a, b, c, d) {
                    var vnode = createElement(contextVm, a, b, c, d, needNormalization);
                    if (vnode && !Array.isArray(vnode)) {
                        vnode.fnScopeId = options._scopeId;
                        vnode.fnContext = parent;
                    }
                    return vnode;
                };
            } else {
                this._c = function(a, b, c, d) {
                    return createElement(contextVm, a, b, c, d, needNormalization);
                };
            }
        }
        installRenderHelpers(FunctionalRenderContext.prototype);
        function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
            var options = Ctor.options;
            var props = {};
            var propOptions = options.props;
            if (isDef(propOptions)) {
                for (var key in propOptions) {
                    props[key] = validateProp(key, propOptions, propsData || emptyObject);
                }
            } else {
                if (isDef(data.attrs)) {
                    mergeProps(props, data.attrs);
                }
                if (isDef(data.props)) {
                    mergeProps(props, data.props);
                }
            }
            var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
            var vnode = options.render.call(null, renderContext._c, renderContext);
            if (vnode instanceof VNode) {
                return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
            } else if (Array.isArray(vnode)) {
                var vnodes = normalizeChildren(vnode) || [];
                var res = new Array(vnodes.length);
                for (var i = 0; i < vnodes.length; i++) {
                    res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
                }
                return res;
            }
        }
        function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
            // #7817 clone node before setting fnContext, otherwise if the node is reused
            // (e.g. it was from a cached normal slot) the fnContext causes named slots
            // that should not be matched to match.
            var clone = cloneVNode(vnode);
            clone.fnContext = contextVm;
            clone.fnOptions = options;
            if (true) {
                (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
            }
            if (data.slot) {
                (clone.data || (clone.data = {})).slot = data.slot;
            }
            return clone;
        }
        function mergeProps(to, from) {
            for (var key in from) {
                to[camelize(key)] = from[key];
            }
        }
        /*  */
        /*  */
        /*  */
        /*  */
        // inline hooks to be invoked on component VNodes during patch
                var componentVNodeHooks = {
            init: function init(vnode, hydrating) {
                if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
                    // kept-alive components, treat as a patch
                    var mountedNode = vnode;
                    // work around flow
                                        componentVNodeHooks.prepatch(mountedNode, mountedNode);
                } else {
                    var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
                    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
                }
            },
            prepatch: function prepatch(oldVnode, vnode) {
                var options = vnode.componentOptions;
                var child = vnode.componentInstance = oldVnode.componentInstance;
                updateChildComponent(child, options.propsData, // updated props
                options.listeners, // updated listeners
                vnode, // new parent vnode
                options.children);
            },
            insert: function insert(vnode) {
                var context = vnode.context;
                var componentInstance = vnode.componentInstance;
                if (!componentInstance._isMounted) {
                    callHook(componentInstance, "onServiceCreated");
                    callHook(componentInstance, "onServiceAttached");
                    componentInstance._isMounted = true;
                    callHook(componentInstance, "mounted");
                }
                if (vnode.data.keepAlive) {
                    if (context._isMounted) {
                        // vue-router#1212
                        // During updates, a kept-alive component's child components may
                        // change, so directly walking the tree here may call activated hooks
                        // on incorrect children. Instead we push them into a queue which will
                        // be processed after the whole patch process ended.
                        queueActivatedComponent(componentInstance);
                    } else {
                        activateChildComponent(componentInstance, true /* direct */);
                    }
                }
            },
            destroy: function destroy(vnode) {
                var componentInstance = vnode.componentInstance;
                if (!componentInstance._isDestroyed) {
                    if (!vnode.data.keepAlive) {
                        componentInstance.$destroy();
                    } else {
                        deactivateChildComponent(componentInstance, true /* direct */);
                    }
                }
            }
        };
        var hooksToMerge = Object.keys(componentVNodeHooks);
        function createComponent(Ctor, data, context, children, tag) {
            if (isUndef(Ctor)) {
                return;
            }
            var baseCtor = context.$options._base;
            // plain options object: turn it into a constructor
                        if (isObject(Ctor)) {
                Ctor = baseCtor.extend(Ctor);
            }
            // if at this stage it's not a constructor or an async component factory,
            // reject.
                        if (typeof Ctor !== "function") {
                if (true) {
                    warn("Invalid Component definition: " + String(Ctor), context);
                }
                return;
            }
            // async component
                        var asyncFactory;
            if (isUndef(Ctor.cid)) {
                asyncFactory = Ctor;
                Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
                if (Ctor === undefined) {
                    // return a placeholder node for async component, which is rendered
                    // as a comment node but preserves all the raw information for the node.
                    // the information will be used for async server-rendering and hydration.
                    return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
                }
            }
            data = data || {};
            // resolve constructor options in case global mixins are applied after
            // component constructor creation
                        resolveConstructorOptions(Ctor);
            // transform component v-model data into props & events
                        if (isDef(data.model)) {
                transformModel(Ctor.options, data);
            }
            // extract props
                        var propsData = extractPropsFromVNodeData(data, Ctor, tag, context);
            // fixed by xxxxxx
            // functional component
                        if (isTrue(Ctor.options.functional)) {
                return createFunctionalComponent(Ctor, propsData, data, context, children);
            }
            // extract listeners, since these needs to be treated as
            // child component listeners instead of DOM listeners
                        var listeners = data.on;
            // replace with listeners with .native modifier
            // so it gets processed during parent component patch.
                        data.on = data.nativeOn;
            if (isTrue(Ctor.options.abstract)) {
                // abstract components do not keep anything
                // other than props & listeners & slot
                // work around flow
                var slot = data.slot;
                data = {};
                if (slot) {
                    data.slot = slot;
                }
            }
            // install component management hooks onto the placeholder node
                        installComponentHooks(data);
            // return a placeholder vnode
                        var name = Ctor.options.name || tag;
            var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ""), data, undefined, undefined, undefined, context, {
                Ctor: Ctor,
                propsData: propsData,
                listeners: listeners,
                tag: tag,
                children: children
            }, asyncFactory);
            return vnode;
        }
        function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
        parent) {
            var options = {
                _isComponent: true,
                _parentVnode: vnode,
                parent: parent
            };
            // check inline-template render functions
                        var inlineTemplate = vnode.data.inlineTemplate;
            if (isDef(inlineTemplate)) {
                options.render = inlineTemplate.render;
                options.staticRenderFns = inlineTemplate.staticRenderFns;
            }
            return new vnode.componentOptions.Ctor(options);
        }
        function installComponentHooks(data) {
            var hooks = data.hook || (data.hook = {});
            for (var i = 0; i < hooksToMerge.length; i++) {
                var key = hooksToMerge[i];
                var existing = hooks[key];
                var toMerge = componentVNodeHooks[key];
                if (existing !== toMerge && !(existing && existing._merged)) {
                    hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
                }
            }
        }
        function mergeHook$1(f1, f2) {
            var merged = function merged(a, b) {
                // flow complains about extra args which is why we use any
                f1(a, b);
                f2(a, b);
            };
            merged._merged = true;
            return merged;
        }
        // transform component v-model info (value and callback) into
        // prop and event handler respectively.
                function transformModel(options, data) {
            var prop = options.model && options.model.prop || "value";
            var event = options.model && options.model.event || "input";
            (data.attrs || (data.attrs = {}))[prop] = data.model.value;
            var on = data.on || (data.on = {});
            var existing = on[event];
            var callback = data.model.callback;
            if (isDef(existing)) {
                if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
                    on[event] = [ callback ].concat(existing);
                }
            } else {
                on[event] = callback;
            }
        }
        /*  */        var SIMPLE_NORMALIZE = 1;
        var ALWAYS_NORMALIZE = 2;
        // wrapper function for providing a more flexible interface
        // without getting yelled at by flow
                function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
            if (Array.isArray(data) || isPrimitive(data)) {
                normalizationType = children;
                children = data;
                data = undefined;
            }
            if (isTrue(alwaysNormalize)) {
                normalizationType = ALWAYS_NORMALIZE;
            }
            return _createElement(context, tag, data, children, normalizationType);
        }
        function _createElement(context, tag, data, children, normalizationType) {
            if (isDef(data) && isDef(data.__ob__)) {
                true && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + "Always create fresh vnode data objects in each render!", context);
                return createEmptyVNode();
            }
            // object syntax in v-bind
                        if (isDef(data) && isDef(data.is)) {
                tag = data.is;
            }
            if (!tag) {
                // in case of component :is set to falsy value
                return createEmptyVNode();
            }
            // warn against non-primitive key
                        if (true && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
                {
                    warn("Avoid using non-primitive value as key, " + "use string/number value instead.", context);
                }
            }
            // support single function children as default scoped slot
                        if (Array.isArray(children) && typeof children[0] === "function") {
                data = data || {};
                data.scopedSlots = {
                    default: children[0]
                };
                children.length = 0;
            }
            if (normalizationType === ALWAYS_NORMALIZE) {
                children = normalizeChildren(children);
            } else if (normalizationType === SIMPLE_NORMALIZE) {
                children = simpleNormalizeChildren(children);
            }
            var vnode, ns;
            if (typeof tag === "string") {
                var Ctor;
                ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);
                if (config.isReservedTag(tag)) {
                    // platform built-in elements
                    if (true && isDef(data) && isDef(data.nativeOn)) {
                        warn("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">.", context);
                    }
                    vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
                } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, "components", tag))) {
                    // component
                    vnode = createComponent(Ctor, data, context, children, tag);
                } else {
                    // unknown or unlisted namespaced elements
                    // check at runtime because it may get assigned a namespace when its
                    // parent normalizes children
                    vnode = new VNode(tag, data, children, undefined, undefined, context);
                }
            } else {
                // direct component options / constructor
                vnode = createComponent(tag, data, context, children);
            }
            if (Array.isArray(vnode)) {
                return vnode;
            } else if (isDef(vnode)) {
                if (isDef(ns)) {
                    applyNS(vnode, ns);
                }
                if (isDef(data)) {
                    registerDeepBindings(data);
                }
                return vnode;
            } else {
                return createEmptyVNode();
            }
        }
        function applyNS(vnode, ns, force) {
            vnode.ns = ns;
            if (vnode.tag === "foreignObject") {
                // use default namespace inside foreignObject
                ns = undefined;
                force = true;
            }
            if (isDef(vnode.children)) {
                for (var i = 0, l = vnode.children.length; i < l; i++) {
                    var child = vnode.children[i];
                    if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== "svg")) {
                        applyNS(child, ns, force);
                    }
                }
            }
        }
        // ref #5318
        // necessary to ensure parent re-render when deep bindings like :style and
        // :class are used on slot nodes
                function registerDeepBindings(data) {
            if (isObject(data.style)) {
                traverse(data.style);
            }
            if (isObject(data.class)) {
                traverse(data.class);
            }
        }
        /*  */        function initRender(vm) {
            vm._vnode = null;
            // the root of the child tree
                        vm._staticTrees = null;
            // v-once cached trees
                        var options = vm.$options;
            var parentVnode = vm.$vnode = options._parentVnode;
            // the placeholder node in parent tree
                        var renderContext = parentVnode && parentVnode.context;
            vm.$slots = resolveSlots(options._renderChildren, renderContext);
            vm.$scopedSlots = emptyObject;
            // bind the createElement fn to this instance
            // so that we get proper render context inside it.
            // args order: tag, data, children, normalizationType, alwaysNormalize
            // internal version is used by render functions compiled from templates
                        vm._c = function(a, b, c, d) {
                return createElement(vm, a, b, c, d, false);
            };
            // normalization is always applied for the public version, used in
            // user-written render functions.
                        vm.$createElement = function(a, b, c, d) {
                return createElement(vm, a, b, c, d, true);
            };
            // $attrs & $listeners are exposed for easier HOC creation.
            // they need to be reactive so that HOCs using them are always updated
                        var parentData = parentVnode && parentVnode.data;
            /* istanbul ignore else */            if (true) {
                defineReactive$$1(vm, "$attrs", parentData && parentData.attrs || emptyObject, function() {
                    !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
                }, true);
                defineReactive$$1(vm, "$listeners", options._parentListeners || emptyObject, function() {
                    !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
                }, true);
            } else {}
        }
        var currentRenderingInstance = null;
        function renderMixin(Vue) {
            // install runtime convenience helpers
            installRenderHelpers(Vue.prototype);
            Vue.prototype.$nextTick = function(fn) {
                return nextTick(fn, this);
            };
            Vue.prototype._render = function() {
                var vm = this;
                var ref = vm.$options;
                var render = ref.render;
                var _parentVnode = ref._parentVnode;
                if (_parentVnode) {
                    vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
                }
                // set parent vnode. this allows render functions to have access
                // to the data on the placeholder node.
                                vm.$vnode = _parentVnode;
                // render self
                                var vnode;
                try {
                    // There's no need to maintain a stack because all render fns are called
                    // separately from one another. Nested component's render fns are called
                    // when parent component is patched.
                    currentRenderingInstance = vm;
                    vnode = render.call(vm._renderProxy, vm.$createElement);
                } catch (e) {
                    handleError(e, vm, "render");
                    // return error render result,
                    // or previous vnode to prevent render error causing blank component
                    /* istanbul ignore else */                    if (true && vm.$options.renderError) {
                        try {
                            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
                        } catch (e) {
                            handleError(e, vm, "renderError");
                            vnode = vm._vnode;
                        }
                    } else {
                        vnode = vm._vnode;
                    }
                } finally {
                    currentRenderingInstance = null;
                }
                // if the returned array contains only a single node, allow it
                                if (Array.isArray(vnode) && vnode.length === 1) {
                    vnode = vnode[0];
                }
                // return empty vnode in case the render function errored out
                                if (!(vnode instanceof VNode)) {
                    if (true && Array.isArray(vnode)) {
                        warn("Multiple root nodes returned from render function. Render function " + "should return a single root node.", vm);
                    }
                    vnode = createEmptyVNode();
                }
                // set parent
                                vnode.parent = _parentVnode;
                return vnode;
            };
        }
        /*  */        function ensureCtor(comp, base) {
            if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === "Module") {
                comp = comp.default;
            }
            return isObject(comp) ? base.extend(comp) : comp;
        }
        function createAsyncPlaceholder(factory, data, context, children, tag) {
            var node = createEmptyVNode();
            node.asyncFactory = factory;
            node.asyncMeta = {
                data: data,
                context: context,
                children: children,
                tag: tag
            };
            return node;
        }
        function resolveAsyncComponent(factory, baseCtor) {
            if (isTrue(factory.error) && isDef(factory.errorComp)) {
                return factory.errorComp;
            }
            if (isDef(factory.resolved)) {
                return factory.resolved;
            }
            var owner = currentRenderingInstance;
            if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
                // already pending
                factory.owners.push(owner);
            }
            if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
                return factory.loadingComp;
            }
            if (owner && !isDef(factory.owners)) {
                var owners = factory.owners = [ owner ];
                var sync = true;
                var timerLoading = null;
                var timerTimeout = null;
                owner.$on("hook:destroyed", function() {
                    return remove(owners, owner);
                });
                var forceRender = function forceRender(renderCompleted) {
                    for (var i = 0, l = owners.length; i < l; i++) {
                        owners[i].$forceUpdate();
                    }
                    if (renderCompleted) {
                        owners.length = 0;
                        if (timerLoading !== null) {
                            clearTimeout(timerLoading);
                            timerLoading = null;
                        }
                        if (timerTimeout !== null) {
                            clearTimeout(timerTimeout);
                            timerTimeout = null;
                        }
                    }
                };
                var resolve = once(function(res) {
                    // cache resolved
                    factory.resolved = ensureCtor(res, baseCtor);
                    // invoke callbacks only if this is not a synchronous resolve
                    // (async resolves are shimmed as synchronous during SSR)
                                        if (!sync) {
                        forceRender(true);
                    } else {
                        owners.length = 0;
                    }
                });
                var reject = once(function(reason) {
                    true && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ""));
                    if (isDef(factory.errorComp)) {
                        factory.error = true;
                        forceRender(true);
                    }
                });
                var res = factory(resolve, reject);
                if (isObject(res)) {
                    if (isPromise(res)) {
                        // () => Promise
                        if (isUndef(factory.resolved)) {
                            res.then(resolve, reject);
                        }
                    } else if (isPromise(res.component)) {
                        res.component.then(resolve, reject);
                        if (isDef(res.error)) {
                            factory.errorComp = ensureCtor(res.error, baseCtor);
                        }
                        if (isDef(res.loading)) {
                            factory.loadingComp = ensureCtor(res.loading, baseCtor);
                            if (res.delay === 0) {
                                factory.loading = true;
                            } else {
                                timerLoading = setTimeout(function() {
                                    timerLoading = null;
                                    if (isUndef(factory.resolved) && isUndef(factory.error)) {
                                        factory.loading = true;
                                        forceRender(false);
                                    }
                                }, res.delay || 200);
                            }
                        }
                        if (isDef(res.timeout)) {
                            timerTimeout = setTimeout(function() {
                                timerTimeout = null;
                                if (isUndef(factory.resolved)) {
                                    reject(true ? "timeout (" + res.timeout + "ms)" : undefined);
                                }
                            }, res.timeout);
                        }
                    }
                }
                sync = false;
                // return in case resolved synchronously
                                return factory.loading ? factory.loadingComp : factory.resolved;
            }
        }
        /*  */        function isAsyncPlaceholder(node) {
            return node.isComment && node.asyncFactory;
        }
        /*  */        function getFirstComponentChild(children) {
            if (Array.isArray(children)) {
                for (var i = 0; i < children.length; i++) {
                    var c = children[i];
                    if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
                        return c;
                    }
                }
            }
        }
        /*  */
        /*  */        function initEvents(vm) {
            vm._events = Object.create(null);
            vm._hasHookEvent = false;
            // init parent attached events
                        var listeners = vm.$options._parentListeners;
            if (listeners) {
                updateComponentListeners(vm, listeners);
            }
        }
        var target;
        function add(event, fn) {
            target.$on(event, fn);
        }
        function remove$1(event, fn) {
            target.$off(event, fn);
        }
        function createOnceHandler(event, fn) {
            var _target = target;
            return function onceHandler() {
                var res = fn.apply(null, arguments);
                if (res !== null) {
                    _target.$off(event, onceHandler);
                }
            };
        }
        function updateComponentListeners(vm, listeners, oldListeners) {
            target = vm;
            updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
            target = undefined;
        }
        function eventsMixin(Vue) {
            var hookRE = /^hook:/;
            Vue.prototype.$on = function(event, fn) {
                var vm = this;
                if (Array.isArray(event)) {
                    for (var i = 0, l = event.length; i < l; i++) {
                        vm.$on(event[i], fn);
                    }
                } else {
                    (vm._events[event] || (vm._events[event] = [])).push(fn);
                    // optimize hook:event cost by using a boolean flag marked at registration
                    // instead of a hash lookup
                                        if (hookRE.test(event)) {
                        vm._hasHookEvent = true;
                    }
                }
                return vm;
            };
            Vue.prototype.$once = function(event, fn) {
                var vm = this;
                function on() {
                    vm.$off(event, on);
                    fn.apply(vm, arguments);
                }
                on.fn = fn;
                vm.$on(event, on);
                return vm;
            };
            Vue.prototype.$off = function(event, fn) {
                var vm = this;
                // all
                                if (!arguments.length) {
                    vm._events = Object.create(null);
                    return vm;
                }
                // array of events
                                if (Array.isArray(event)) {
                    for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
                        vm.$off(event[i$1], fn);
                    }
                    return vm;
                }
                // specific event
                                var cbs = vm._events[event];
                if (!cbs) {
                    return vm;
                }
                if (!fn) {
                    vm._events[event] = null;
                    return vm;
                }
                // specific handler
                                var cb;
                var i = cbs.length;
                while (i--) {
                    cb = cbs[i];
                    if (cb === fn || cb.fn === fn) {
                        cbs.splice(i, 1);
                        break;
                    }
                }
                return vm;
            };
            Vue.prototype.$emit = function(event) {
                var vm = this;
                if (true) {
                    var lowerCaseEvent = event.toLowerCase();
                    if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
                        tip('Event "' + lowerCaseEvent + '" is emitted in component ' + formatComponentName(vm) + ' but the handler is registered for "' + event + '". ' + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + 'You should probably use "' + hyphenate(event) + '" instead of "' + event + '".');
                    }
                }
                var cbs = vm._events[event];
                if (cbs) {
                    cbs = cbs.length > 1 ? toArray(cbs) : cbs;
                    var args = toArray(arguments, 1);
                    var info = 'event handler for "' + event + '"';
                    for (var i = 0, l = cbs.length; i < l; i++) {
                        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
                    }
                }
                return vm;
            };
        }
        /*  */        var activeInstance = null;
        var isUpdatingChildComponent = false;
        function setActiveInstance(vm) {
            var prevActiveInstance = activeInstance;
            activeInstance = vm;
            return function() {
                activeInstance = prevActiveInstance;
            };
        }
        function initLifecycle(vm) {
            var options = vm.$options;
            // locate first non-abstract parent
                        var parent = options.parent;
            if (parent && !options.abstract) {
                while (parent.$options.abstract && parent.$parent) {
                    parent = parent.$parent;
                }
                parent.$children.push(vm);
            }
            vm.$parent = parent;
            vm.$root = parent ? parent.$root : vm;
            vm.$children = [];
            vm.$refs = {};
            vm._watcher = null;
            vm._inactive = null;
            vm._directInactive = false;
            vm._isMounted = false;
            vm._isDestroyed = false;
            vm._isBeingDestroyed = false;
        }
        function lifecycleMixin(Vue) {
            Vue.prototype._update = function(vnode, hydrating) {
                var vm = this;
                var prevEl = vm.$el;
                var prevVnode = vm._vnode;
                var restoreActiveInstance = setActiveInstance(vm);
                vm._vnode = vnode;
                // Vue.prototype.__patch__ is injected in entry points
                // based on the rendering backend used.
                                if (!prevVnode) {
                    // initial render
                    vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
                } else {
                    // updates
                    vm.$el = vm.__patch__(prevVnode, vnode);
                }
                restoreActiveInstance();
                // update __vue__ reference
                                if (prevEl) {
                    prevEl.__vue__ = null;
                }
                if (vm.$el) {
                    vm.$el.__vue__ = vm;
                }
                // if parent is an HOC, update its $el as well
                                if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
                    vm.$parent.$el = vm.$el;
                }
                // updated hook is called by the scheduler to ensure that children are
                // updated in a parent's updated hook.
                        };
            Vue.prototype.$forceUpdate = function() {
                var vm = this;
                if (vm._watcher) {
                    vm._watcher.update();
                }
            };
            Vue.prototype.$destroy = function() {
                var vm = this;
                if (vm._isBeingDestroyed) {
                    return;
                }
                callHook(vm, "beforeDestroy");
                vm._isBeingDestroyed = true;
                // remove self from parent
                                var parent = vm.$parent;
                if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
                    remove(parent.$children, vm);
                }
                // teardown watchers
                                if (vm._watcher) {
                    vm._watcher.teardown();
                }
                var i = vm._watchers.length;
                while (i--) {
                    vm._watchers[i].teardown();
                }
                // remove reference from data ob
                // frozen object may not have observer.
                                if (vm._data.__ob__) {
                    vm._data.__ob__.vmCount--;
                }
                // call the last hook...
                                vm._isDestroyed = true;
                // invoke destroy hooks on current rendered tree
                                vm.__patch__(vm._vnode, null);
                // fire destroyed hook
                                callHook(vm, "destroyed");
                // turn off all instance listeners.
                                vm.$off();
                // remove __vue__ reference
                                if (vm.$el) {
                    vm.$el.__vue__ = null;
                }
                // release circular reference (#6759)
                                if (vm.$vnode) {
                    vm.$vnode.parent = null;
                }
            };
        }
        function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
            if (true) {
                isUpdatingChildComponent = true;
            }
            // determine whether component has slot children
            // we need to do this before overwriting $options._renderChildren.
            // check if there are dynamic scopedSlots (hand-written or compiled but with
            // dynamic slot names). Static scoped slots compiled from template has the
            // "$stable" marker.
                        var newScopedSlots = parentVnode.data.scopedSlots;
            var oldScopedSlots = vm.$scopedSlots;
            var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key);
            // Any static slot children from the parent may have changed during parent's
            // update. Dynamic scoped slots may also have changed. In such cases, a forced
            // update is necessary to ensure correctness.
                        var needsForceUpdate = !!(renderChildren || // has new static slots
            vm.$options._renderChildren || // has old static slots
            hasDynamicScopedSlot);
            vm.$options._parentVnode = parentVnode;
            vm.$vnode = parentVnode;
            // update vm's placeholder node without re-render
                        if (vm._vnode) {
                // update child tree's parent
                vm._vnode.parent = parentVnode;
            }
            vm.$options._renderChildren = renderChildren;
            // update $attrs and $listeners hash
            // these are also reactive so they may trigger child update if the child
            // used them during render
                        vm.$attrs = parentVnode.data.attrs || emptyObject;
            vm.$listeners = listeners || emptyObject;
            // update props
                        if (propsData && vm.$options.props) {
                toggleObserving(false);
                var props = vm._props;
                var propKeys = vm.$options._propKeys || [];
                for (var i = 0; i < propKeys.length; i++) {
                    var key = propKeys[i];
                    var propOptions = vm.$options.props;
                    // wtf flow?
                                        props[key] = validateProp(key, propOptions, propsData, vm);
                }
                toggleObserving(true);
                // keep a copy of raw propsData
                                vm.$options.propsData = propsData;
            }
            // fixed by xxxxxx update properties(mp runtime)
                        vm._$updateProperties && vm._$updateProperties(vm);
            // update listeners
                        listeners = listeners || emptyObject;
            var oldListeners = vm.$options._parentListeners;
            vm.$options._parentListeners = listeners;
            updateComponentListeners(vm, listeners, oldListeners);
            // resolve slots + force update if has children
                        if (needsForceUpdate) {
                vm.$slots = resolveSlots(renderChildren, parentVnode.context);
                vm.$forceUpdate();
            }
            if (true) {
                isUpdatingChildComponent = false;
            }
        }
        function isInInactiveTree(vm) {
            while (vm && (vm = vm.$parent)) {
                if (vm._inactive) {
                    return true;
                }
            }
            return false;
        }
        function activateChildComponent(vm, direct) {
            if (direct) {
                vm._directInactive = false;
                if (isInInactiveTree(vm)) {
                    return;
                }
            } else if (vm._directInactive) {
                return;
            }
            if (vm._inactive || vm._inactive === null) {
                vm._inactive = false;
                for (var i = 0; i < vm.$children.length; i++) {
                    activateChildComponent(vm.$children[i]);
                }
                callHook(vm, "activated");
            }
        }
        function deactivateChildComponent(vm, direct) {
            if (direct) {
                vm._directInactive = true;
                if (isInInactiveTree(vm)) {
                    return;
                }
            }
            if (!vm._inactive) {
                vm._inactive = true;
                for (var i = 0; i < vm.$children.length; i++) {
                    deactivateChildComponent(vm.$children[i]);
                }
                callHook(vm, "deactivated");
            }
        }
        function callHook(vm, hook) {
            // #7573 disable dep collection when invoking lifecycle hooks
            pushTarget();
            var handlers = vm.$options[hook];
            var info = hook + " hook";
            if (handlers) {
                for (var i = 0, j = handlers.length; i < j; i++) {
                    invokeWithErrorHandling(handlers[i], vm, null, vm, info);
                }
            }
            if (vm._hasHookEvent) {
                vm.$emit("hook:" + hook);
            }
            popTarget();
        }
        /*  */        var MAX_UPDATE_COUNT = 100;
        var queue = [];
        var activatedChildren = [];
        var has = {};
        var circular = {};
        var waiting = false;
        var flushing = false;
        var index = 0;
        /**
     * Reset the scheduler's state.
     */        function resetSchedulerState() {
            index = queue.length = activatedChildren.length = 0;
            has = {};
            if (true) {
                circular = {};
            }
            waiting = flushing = false;
        }
        // Async edge case #6566 requires saving the timestamp when event listeners are
        // attached. However, calling performance.now() has a perf overhead especially
        // if the page has thousands of event listeners. Instead, we take a timestamp
        // every time the scheduler flushes and use that for all event listeners
        // attached during that flush.
                var currentFlushTimestamp = 0;
        // Async edge case fix requires storing an event listener's attach timestamp.
                var getNow = Date.now;
        // Determine what event timestamp the browser is using. Annoyingly, the
        // timestamp can either be hi-res (relative to page load) or low-res
        // (relative to UNIX epoch), so in order to compare time we have to use the
        // same timestamp type when saving the flush timestamp.
        // All IE versions use low-res event timestamps, and have problematic clock
        // implementations (#9632)
                if (inBrowser && !isIE) {
            var performance = window.performance;
            if (performance && typeof performance.now === "function" && getNow() > document.createEvent("Event").timeStamp) {
                // if the event timestamp, although evaluated AFTER the Date.now(), is
                // smaller than it, it means the event is using a hi-res timestamp,
                // and we need to use the hi-res version for event listener timestamps as
                // well.
                getNow = function getNow() {
                    return performance.now();
                };
            }
        }
        /**
     * Flush both queues and run the watchers.
     */        function flushSchedulerQueue() {
            currentFlushTimestamp = getNow();
            flushing = true;
            var watcher, id;
            // Sort queue before flush.
            // This ensures that:
            // 1. Components are updated from parent to child. (because parent is always
            //    created before the child)
            // 2. A component's user watchers are run before its render watcher (because
            //    user watchers are created before the render watcher)
            // 3. If a component is destroyed during a parent component's watcher run,
            //    its watchers can be skipped.
                        queue.sort(function(a, b) {
                return a.id - b.id;
            });
            // do not cache length because more watchers might be pushed
            // as we run existing watchers
                        for (index = 0; index < queue.length; index++) {
                watcher = queue[index];
                if (watcher.before) {
                    watcher.before();
                }
                id = watcher.id;
                has[id] = null;
                watcher.run();
                // in dev build, check and stop circular updates.
                                if (true && has[id] != null) {
                    circular[id] = (circular[id] || 0) + 1;
                    if (circular[id] > MAX_UPDATE_COUNT) {
                        warn("You may have an infinite update loop " + (watcher.user ? 'in watcher with expression "' + watcher.expression + '"' : "in a component render function."), watcher.vm);
                        break;
                    }
                }
            }
            // keep copies of post queues before resetting state
                        var activatedQueue = activatedChildren.slice();
            var updatedQueue = queue.slice();
            resetSchedulerState();
            // call component updated and activated hooks
                        callActivatedHooks(activatedQueue);
            callUpdatedHooks(updatedQueue);
            // devtool hook
            /* istanbul ignore if */            if (devtools && config.devtools) {
                devtools.emit("flush");
            }
        }
        function callUpdatedHooks(queue) {
            var i = queue.length;
            while (i--) {
                var watcher = queue[i];
                var vm = watcher.vm;
                if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
                    callHook(vm, "updated");
                }
            }
        }
        /**
     * Queue a kept-alive component that was activated during patch.
     * The queue will be processed after the entire tree has been patched.
     */        function queueActivatedComponent(vm) {
            // setting _inactive to false here so that a render function can
            // rely on checking whether it's in an inactive tree (e.g. router-view)
            vm._inactive = false;
            activatedChildren.push(vm);
        }
        function callActivatedHooks(queue) {
            for (var i = 0; i < queue.length; i++) {
                queue[i]._inactive = true;
                activateChildComponent(queue[i], true /* true */);
            }
        }
        /**
     * Push a watcher into the watcher queue.
     * Jobs with duplicate IDs will be skipped unless it's
     * pushed when the queue is being flushed.
     */        function queueWatcher(watcher) {
            var id = watcher.id;
            if (has[id] == null) {
                has[id] = true;
                if (!flushing) {
                    queue.push(watcher);
                } else {
                    // if already flushing, splice the watcher based on its id
                    // if already past its id, it will be run next immediately.
                    var i = queue.length - 1;
                    while (i > index && queue[i].id > watcher.id) {
                        i--;
                    }
                    queue.splice(i + 1, 0, watcher);
                }
                // queue the flush
                                if (!waiting) {
                    waiting = true;
                    if (true && !config.async) {
                        flushSchedulerQueue();
                        return;
                    }
                    nextTick(flushSchedulerQueue);
                }
            }
        }
        /*  */        var uid$2 = 0;
        /**
     * A watcher parses an expression, collects dependencies,
     * and fires callback when the expression value changes.
     * This is used for both the $watch() api and directives.
     */        var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
            this.vm = vm;
            if (isRenderWatcher) {
                vm._watcher = this;
            }
            vm._watchers.push(this);
            // options
                        if (options) {
                this.deep = !!options.deep;
                this.user = !!options.user;
                this.lazy = !!options.lazy;
                this.sync = !!options.sync;
                this.before = options.before;
            } else {
                this.deep = this.user = this.lazy = this.sync = false;
            }
            this.cb = cb;
            this.id = ++uid$2;
            // uid for batching
                        this.active = true;
            this.dirty = this.lazy;
            // for lazy watchers
                        this.deps = [];
            this.newDeps = [];
            this.depIds = new _Set();
            this.newDepIds = new _Set();
            this.expression = true ? expOrFn.toString() : undefined;
            // parse expression for getter
                        if (typeof expOrFn === "function") {
                this.getter = expOrFn;
            } else {
                this.getter = parsePath(expOrFn);
                if (!this.getter) {
                    this.getter = noop;
                    true && warn('Failed watching path: "' + expOrFn + '" ' + "Watcher only accepts simple dot-delimited paths. " + "For full control, use a function instead.", vm);
                }
            }
            this.value = this.lazy ? undefined : this.get();
        };
        /**
     * Evaluate the getter, and re-collect dependencies.
     */        Watcher.prototype.get = function get() {
            pushTarget(this);
            var value;
            var vm = this.vm;
            try {
                value = this.getter.call(vm, vm);
            } catch (e) {
                if (this.user) {
                    handleError(e, vm, 'getter for watcher "' + this.expression + '"');
                } else {
                    throw e;
                }
            } finally {
                // "touch" every property so they are all tracked as
                // dependencies for deep watching
                if (this.deep) {
                    traverse(value);
                }
                popTarget();
                this.cleanupDeps();
            }
            return value;
        };
        /**
     * Add a dependency to this directive.
     */        Watcher.prototype.addDep = function addDep(dep) {
            var id = dep.id;
            if (!this.newDepIds.has(id)) {
                this.newDepIds.add(id);
                this.newDeps.push(dep);
                if (!this.depIds.has(id)) {
                    dep.addSub(this);
                }
            }
        };
        /**
     * Clean up for dependency collection.
     */        Watcher.prototype.cleanupDeps = function cleanupDeps() {
            var i = this.deps.length;
            while (i--) {
                var dep = this.deps[i];
                if (!this.newDepIds.has(dep.id)) {
                    dep.removeSub(this);
                }
            }
            var tmp = this.depIds;
            this.depIds = this.newDepIds;
            this.newDepIds = tmp;
            this.newDepIds.clear();
            tmp = this.deps;
            this.deps = this.newDeps;
            this.newDeps = tmp;
            this.newDeps.length = 0;
        };
        /**
     * Subscriber interface.
     * Will be called when a dependency changes.
     */        Watcher.prototype.update = function update() {
            /* istanbul ignore else */
            if (this.lazy) {
                this.dirty = true;
            } else if (this.sync) {
                this.run();
            } else {
                queueWatcher(this);
            }
        };
        /**
     * Scheduler job interface.
     * Will be called by the scheduler.
     */        Watcher.prototype.run = function run() {
            if (this.active) {
                var value = this.get();
                if (value !== this.value || 
                // Deep watchers and watchers on Object/Arrays should fire even
                // when the value is the same, because the value may
                // have mutated.
                isObject(value) || this.deep) {
                    // set new value
                    var oldValue = this.value;
                    this.value = value;
                    if (this.user) {
                        try {
                            this.cb.call(this.vm, value, oldValue);
                        } catch (e) {
                            handleError(e, this.vm, 'callback for watcher "' + this.expression + '"');
                        }
                    } else {
                        this.cb.call(this.vm, value, oldValue);
                    }
                }
            }
        };
        /**
     * Evaluate the value of the watcher.
     * This only gets called for lazy watchers.
     */        Watcher.prototype.evaluate = function evaluate() {
            this.value = this.get();
            this.dirty = false;
        };
        /**
     * Depend on all deps collected by this watcher.
     */        Watcher.prototype.depend = function depend() {
            var i = this.deps.length;
            while (i--) {
                this.deps[i].depend();
            }
        };
        /**
     * Remove self from all dependencies' subscriber list.
     */        Watcher.prototype.teardown = function teardown() {
            if (this.active) {
                // remove self from vm's watcher list
                // this is a somewhat expensive operation so we skip it
                // if the vm is being destroyed.
                if (!this.vm._isBeingDestroyed) {
                    remove(this.vm._watchers, this);
                }
                var i = this.deps.length;
                while (i--) {
                    this.deps[i].removeSub(this);
                }
                this.active = false;
            }
        };
        /*  */        var sharedPropertyDefinition = {
            enumerable: true,
            configurable: true,
            get: noop,
            set: noop
        };
        function proxy(target, sourceKey, key) {
            sharedPropertyDefinition.get = function proxyGetter() {
                return this[sourceKey][key];
            };
            sharedPropertyDefinition.set = function proxySetter(val) {
                this[sourceKey][key] = val;
            };
            Object.defineProperty(target, key, sharedPropertyDefinition);
        }
        function initState(vm) {
            vm._watchers = [];
            var opts = vm.$options;
            if (opts.props) {
                initProps(vm, opts.props);
            }
            if (opts.methods) {
                initMethods(vm, opts.methods);
            }
            if (opts.data) {
                initData(vm);
            } else {
                observe(vm._data = {}, true /* asRootData */);
            }
            if (opts.computed) {
                initComputed(vm, opts.computed);
            }
            if (opts.watch && opts.watch !== nativeWatch) {
                initWatch(vm, opts.watch);
            }
        }
        function initProps(vm, propsOptions) {
            var propsData = vm.$options.propsData || {};
            var props = vm._props = {};
            // cache prop keys so that future props updates can iterate using Array
            // instead of dynamic object key enumeration.
                        var keys = vm.$options._propKeys = [];
            var isRoot = !vm.$parent;
            // root instance props should be converted
                        if (!isRoot) {
                toggleObserving(false);
            }
            var loop = function loop(key) {
                keys.push(key);
                var value = validateProp(key, propsOptions, propsData, vm);
                /* istanbul ignore else */                if (true) {
                    var hyphenatedKey = hyphenate(key);
                    if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
                        warn('"' + hyphenatedKey + '" is a reserved attribute and cannot be used as component prop.', vm);
                    }
                    defineReactive$$1(props, key, value, function() {
                        if (!isRoot && !isUpdatingChildComponent) {
                            {
                                if (vm.mpHost === "mp-baidu") {
                                    //百度 observer 在 setData callback 之后触发，直接忽略该 warn
                                    return;
                                }
                                //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
                                                                if (key === "value" && Array.isArray(vm.$options.behaviors) && vm.$options.behaviors.indexOf("uni://form-field") !== -1) {
                                    return;
                                }
                                if (vm._getFormData) {
                                    return;
                                }
                                var $parent = vm.$parent;
                                while ($parent) {
                                    if ($parent.__next_tick_pending) {
                                        return;
                                    }
                                    $parent = $parent.$parent;
                                }
                            }
                            warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + 'value. Prop being mutated: "' + key + '"', vm);
                        }
                    });
                } else {}
                // static props are already proxied on the component's prototype
                // during Vue.extend(). We only need to proxy props defined at
                // instantiation here.
                                if (!(key in vm)) {
                    proxy(vm, "_props", key);
                }
            };
            for (var key in propsOptions) {
                loop(key);
            }
            toggleObserving(true);
        }
        function initData(vm) {
            var data = vm.$options.data;
            data = vm._data = typeof data === "function" ? getData(data, vm) : data || {};
            if (!isPlainObject(data)) {
                data = {};
                true && warn("data functions should return an object:\n" + "https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function", vm);
            }
            // proxy data on instance
                        var keys = Object.keys(data);
            var props = vm.$options.props;
            var methods = vm.$options.methods;
            var i = keys.length;
            while (i--) {
                var key = keys[i];
                if (true) {
                    if (methods && hasOwn(methods, key)) {
                        warn('Method "' + key + '" has already been defined as a data property.', vm);
                    }
                }
                if (props && hasOwn(props, key)) {
                    true && warn('The data property "' + key + '" is already declared as a prop. ' + "Use prop default value instead.", vm);
                } else if (!isReserved(key)) {
                    proxy(vm, "_data", key);
                }
            }
            // observe data
                        observe(data, true /* asRootData */);
        }
        function getData(data, vm) {
            // #7573 disable dep collection when invoking data getters
            pushTarget();
            try {
                return data.call(vm, vm);
            } catch (e) {
                handleError(e, vm, "data()");
                return {};
            } finally {
                popTarget();
            }
        }
        var computedWatcherOptions = {
            lazy: true
        };
        function initComputed(vm, computed) {
            // $flow-disable-line
            var watchers = vm._computedWatchers = Object.create(null);
            // computed properties are just getters during SSR
                        var isSSR = isServerRendering();
            for (var key in computed) {
                var userDef = computed[key];
                var getter = typeof userDef === "function" ? userDef : userDef.get;
                if (true && getter == null) {
                    warn('Getter is missing for computed property "' + key + '".', vm);
                }
                if (!isSSR) {
                    // create internal watcher for the computed property.
                    watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
                }
                // component-defined computed properties are already defined on the
                // component prototype. We only need to define computed properties defined
                // at instantiation here.
                                if (!(key in vm)) {
                    defineComputed(vm, key, userDef);
                } else if (true) {
                    if (key in vm.$data) {
                        warn('The computed property "' + key + '" is already defined in data.', vm);
                    } else if (vm.$options.props && key in vm.$options.props) {
                        warn('The computed property "' + key + '" is already defined as a prop.', vm);
                    }
                }
            }
        }
        function defineComputed(target, key, userDef) {
            var shouldCache = !isServerRendering();
            if (typeof userDef === "function") {
                sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
                sharedPropertyDefinition.set = noop;
            } else {
                sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
                sharedPropertyDefinition.set = userDef.set || noop;
            }
            if (true && sharedPropertyDefinition.set === noop) {
                sharedPropertyDefinition.set = function() {
                    warn('Computed property "' + key + '" was assigned to but it has no setter.', this);
                };
            }
            Object.defineProperty(target, key, sharedPropertyDefinition);
        }
        function createComputedGetter(key) {
            return function computedGetter() {
                var watcher = this._computedWatchers && this._computedWatchers[key];
                if (watcher) {
                    if (watcher.dirty) {
                        watcher.evaluate();
                    }
                    if (Dep.SharedObject.target) {
                        // fixed by xxxxxx
                        watcher.depend();
                    }
                    return watcher.value;
                }
            };
        }
        function createGetterInvoker(fn) {
            return function computedGetter() {
                return fn.call(this, this);
            };
        }
        function initMethods(vm, methods) {
            var props = vm.$options.props;
            for (var key in methods) {
                if (true) {
                    if (typeof methods[key] !== "function") {
                        warn('Method "' + key + '" has type "' + _typeof(methods[key]) + '" in the component definition. ' + "Did you reference the function correctly?", vm);
                    }
                    if (props && hasOwn(props, key)) {
                        warn('Method "' + key + '" has already been defined as a prop.', vm);
                    }
                    if (key in vm && isReserved(key)) {
                        warn('Method "' + key + '" conflicts with an existing Vue instance method. ' + "Avoid defining component methods that start with _ or $.");
                    }
                }
                vm[key] = typeof methods[key] !== "function" ? noop : bind(methods[key], vm);
            }
        }
        function initWatch(vm, watch) {
            for (var key in watch) {
                var handler = watch[key];
                if (Array.isArray(handler)) {
                    for (var i = 0; i < handler.length; i++) {
                        createWatcher(vm, key, handler[i]);
                    }
                } else {
                    createWatcher(vm, key, handler);
                }
            }
        }
        function createWatcher(vm, expOrFn, handler, options) {
            if (isPlainObject(handler)) {
                options = handler;
                handler = handler.handler;
            }
            if (typeof handler === "string") {
                handler = vm[handler];
            }
            return vm.$watch(expOrFn, handler, options);
        }
        function stateMixin(Vue) {
            // flow somehow has problems with directly declared definition object
            // when using Object.defineProperty, so we have to procedurally build up
            // the object here.
            var dataDef = {};
            dataDef.get = function() {
                return this._data;
            };
            var propsDef = {};
            propsDef.get = function() {
                return this._props;
            };
            if (true) {
                dataDef.set = function() {
                    warn("Avoid replacing instance root $data. " + "Use nested data properties instead.", this);
                };
                propsDef.set = function() {
                    warn("$props is readonly.", this);
                };
            }
            Object.defineProperty(Vue.prototype, "$data", dataDef);
            Object.defineProperty(Vue.prototype, "$props", propsDef);
            Vue.prototype.$set = set;
            Vue.prototype.$delete = del;
            Vue.prototype.$watch = function(expOrFn, cb, options) {
                var vm = this;
                if (isPlainObject(cb)) {
                    return createWatcher(vm, expOrFn, cb, options);
                }
                options = options || {};
                options.user = true;
                var watcher = new Watcher(vm, expOrFn, cb, options);
                if (options.immediate) {
                    try {
                        cb.call(vm, watcher.value);
                    } catch (error) {
                        handleError(error, vm, 'callback for immediate watcher "' + watcher.expression + '"');
                    }
                }
                return function unwatchFn() {
                    watcher.teardown();
                };
            };
        }
        /*  */        var uid$3 = 0;
        function initMixin(Vue) {
            Vue.prototype._init = function(options) {
                var vm = this;
                // a uid
                                vm._uid = uid$3++;
                var startTag, endTag;
                /* istanbul ignore if */                if (true && config.performance && mark) {
                    startTag = "vue-perf-start:" + vm._uid;
                    endTag = "vue-perf-end:" + vm._uid;
                    mark(startTag);
                }
                // a flag to avoid this being observed
                                vm._isVue = true;
                // merge options
                                if (options && options._isComponent) {
                    // optimize internal component instantiation
                    // since dynamic options merging is pretty slow, and none of the
                    // internal component options needs special treatment.
                    initInternalComponent(vm, options);
                } else {
                    vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
                }
                /* istanbul ignore else */                if (true) {
                    initProxy(vm);
                } else {}
                // expose real self
                                vm._self = vm;
                initLifecycle(vm);
                initEvents(vm);
                initRender(vm);
                callHook(vm, "beforeCreate");
                !vm._$fallback && initInjections(vm);
                // resolve injections before data/props  
                                initState(vm);
                !vm._$fallback && initProvide(vm);
                // resolve provide after data/props
                                !vm._$fallback && callHook(vm, "created");
                /* istanbul ignore if */                if (true && config.performance && mark) {
                    vm._name = formatComponentName(vm, false);
                    mark(endTag);
                    measure("vue " + vm._name + " init", startTag, endTag);
                }
                if (vm.$options.el) {
                    vm.$mount(vm.$options.el);
                }
            };
        }
        function initInternalComponent(vm, options) {
            var opts = vm.$options = Object.create(vm.constructor.options);
            // doing this because it's faster than dynamic enumeration.
                        var parentVnode = options._parentVnode;
            opts.parent = options.parent;
            opts._parentVnode = parentVnode;
            var vnodeComponentOptions = parentVnode.componentOptions;
            opts.propsData = vnodeComponentOptions.propsData;
            opts._parentListeners = vnodeComponentOptions.listeners;
            opts._renderChildren = vnodeComponentOptions.children;
            opts._componentTag = vnodeComponentOptions.tag;
            if (options.render) {
                opts.render = options.render;
                opts.staticRenderFns = options.staticRenderFns;
            }
        }
        function resolveConstructorOptions(Ctor) {
            var options = Ctor.options;
            if (Ctor.super) {
                var superOptions = resolveConstructorOptions(Ctor.super);
                var cachedSuperOptions = Ctor.superOptions;
                if (superOptions !== cachedSuperOptions) {
                    // super option changed,
                    // need to resolve new options.
                    Ctor.superOptions = superOptions;
                    // check if there are any late-modified/attached options (#4976)
                                        var modifiedOptions = resolveModifiedOptions(Ctor);
                    // update base extend options
                                        if (modifiedOptions) {
                        extend(Ctor.extendOptions, modifiedOptions);
                    }
                    options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
                    if (options.name) {
                        options.components[options.name] = Ctor;
                    }
                }
            }
            return options;
        }
        function resolveModifiedOptions(Ctor) {
            var modified;
            var latest = Ctor.options;
            var sealed = Ctor.sealedOptions;
            for (var key in latest) {
                if (latest[key] !== sealed[key]) {
                    if (!modified) {
                        modified = {};
                    }
                    modified[key] = latest[key];
                }
            }
            return modified;
        }
        function Vue(options) {
            if (true && !(this instanceof Vue)) {
                warn("Vue is a constructor and should be called with the `new` keyword");
            }
            this._init(options);
        }
        initMixin(Vue);
        stateMixin(Vue);
        eventsMixin(Vue);
        lifecycleMixin(Vue);
        renderMixin(Vue);
        /*  */        function initUse(Vue) {
            Vue.use = function(plugin) {
                var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
                if (installedPlugins.indexOf(plugin) > -1) {
                    return this;
                }
                // additional parameters
                                var args = toArray(arguments, 1);
                args.unshift(this);
                if (typeof plugin.install === "function") {
                    plugin.install.apply(plugin, args);
                } else if (typeof plugin === "function") {
                    plugin.apply(null, args);
                }
                installedPlugins.push(plugin);
                return this;
            };
        }
        /*  */        function initMixin$1(Vue) {
            Vue.mixin = function(mixin) {
                this.options = mergeOptions(this.options, mixin);
                return this;
            };
        }
        /*  */        function initExtend(Vue) {
            /**
       * Each instance constructor, including Vue, has a unique
       * cid. This enables us to create wrapped "child
       * constructors" for prototypal inheritance and cache them.
       */
            Vue.cid = 0;
            var cid = 1;
            /**
       * Class inheritance
       */            Vue.extend = function(extendOptions) {
                extendOptions = extendOptions || {};
                var Super = this;
                var SuperId = Super.cid;
                var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
                if (cachedCtors[SuperId]) {
                    return cachedCtors[SuperId];
                }
                var name = extendOptions.name || Super.options.name;
                if (true && name) {
                    validateComponentName(name);
                }
                var Sub = function VueComponent(options) {
                    this._init(options);
                };
                Sub.prototype = Object.create(Super.prototype);
                Sub.prototype.constructor = Sub;
                Sub.cid = cid++;
                Sub.options = mergeOptions(Super.options, extendOptions);
                Sub["super"] = Super;
                // For props and computed properties, we define the proxy getters on
                // the Vue instances at extension time, on the extended prototype. This
                // avoids Object.defineProperty calls for each instance created.
                                if (Sub.options.props) {
                    initProps$1(Sub);
                }
                if (Sub.options.computed) {
                    initComputed$1(Sub);
                }
                // allow further extension/mixin/plugin usage
                                Sub.extend = Super.extend;
                Sub.mixin = Super.mixin;
                Sub.use = Super.use;
                // create asset registers, so extended classes
                // can have their private assets too.
                                ASSET_TYPES.forEach(function(type) {
                    Sub[type] = Super[type];
                });
                // enable recursive self-lookup
                                if (name) {
                    Sub.options.components[name] = Sub;
                }
                // keep a reference to the super options at extension time.
                // later at instantiation we can check if Super's options have
                // been updated.
                                Sub.superOptions = Super.options;
                Sub.extendOptions = extendOptions;
                Sub.sealedOptions = extend({}, Sub.options);
                // cache constructor
                                cachedCtors[SuperId] = Sub;
                return Sub;
            };
        }
        function initProps$1(Comp) {
            var props = Comp.options.props;
            for (var key in props) {
                proxy(Comp.prototype, "_props", key);
            }
        }
        function initComputed$1(Comp) {
            var computed = Comp.options.computed;
            for (var key in computed) {
                defineComputed(Comp.prototype, key, computed[key]);
            }
        }
        /*  */        function initAssetRegisters(Vue) {
            /**
       * Create asset registration methods.
       */
            ASSET_TYPES.forEach(function(type) {
                Vue[type] = function(id, definition) {
                    if (!definition) {
                        return this.options[type + "s"][id];
                    } else {
                        /* istanbul ignore if */
                        if (true && type === "component") {
                            validateComponentName(id);
                        }
                        if (type === "component" && isPlainObject(definition)) {
                            definition.name = definition.name || id;
                            definition = this.options._base.extend(definition);
                        }
                        if (type === "directive" && typeof definition === "function") {
                            definition = {
                                bind: definition,
                                update: definition
                            };
                        }
                        this.options[type + "s"][id] = definition;
                        return definition;
                    }
                };
            });
        }
        /*  */        function getComponentName(opts) {
            return opts && (opts.Ctor.options.name || opts.tag);
        }
        function matches(pattern, name) {
            if (Array.isArray(pattern)) {
                return pattern.indexOf(name) > -1;
            } else if (typeof pattern === "string") {
                return pattern.split(",").indexOf(name) > -1;
            } else if (isRegExp(pattern)) {
                return pattern.test(name);
            }
            /* istanbul ignore next */            return false;
        }
        function pruneCache(keepAliveInstance, filter) {
            var cache = keepAliveInstance.cache;
            var keys = keepAliveInstance.keys;
            var _vnode = keepAliveInstance._vnode;
            for (var key in cache) {
                var cachedNode = cache[key];
                if (cachedNode) {
                    var name = getComponentName(cachedNode.componentOptions);
                    if (name && !filter(name)) {
                        pruneCacheEntry(cache, key, keys, _vnode);
                    }
                }
            }
        }
        function pruneCacheEntry(cache, key, keys, current) {
            var cached$$1 = cache[key];
            if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
                cached$$1.componentInstance.$destroy();
            }
            cache[key] = null;
            remove(keys, key);
        }
        var patternTypes = [ String, RegExp, Array ];
        var KeepAlive = {
            name: "keep-alive",
            abstract: true,
            props: {
                include: patternTypes,
                exclude: patternTypes,
                max: [ String, Number ]
            },
            created: function created() {
                this.cache = Object.create(null);
                this.keys = [];
            },
            destroyed: function destroyed() {
                for (var key in this.cache) {
                    pruneCacheEntry(this.cache, key, this.keys);
                }
            },
            mounted: function mounted() {
                var this$1 = this;
                this.$watch("include", function(val) {
                    pruneCache(this$1, function(name) {
                        return matches(val, name);
                    });
                });
                this.$watch("exclude", function(val) {
                    pruneCache(this$1, function(name) {
                        return !matches(val, name);
                    });
                });
            },
            render: function render() {
                var slot = this.$slots.default;
                var vnode = getFirstComponentChild(slot);
                var componentOptions = vnode && vnode.componentOptions;
                if (componentOptions) {
                    // check pattern
                    var name = getComponentName(componentOptions);
                    var ref = this;
                    var include = ref.include;
                    var exclude = ref.exclude;
                    if (
                    // not included
                    include && (!name || !matches(include, name)) || 
                    // excluded
                    exclude && name && matches(exclude, name)) {
                        return vnode;
                    }
                    var ref$1 = this;
                    var cache = ref$1.cache;
                    var keys = ref$1.keys;
                    var key = vnode.key == null ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : "") : vnode.key;
                    if (cache[key]) {
                        vnode.componentInstance = cache[key].componentInstance;
                        // make current key freshest
                                                remove(keys, key);
                        keys.push(key);
                    } else {
                        cache[key] = vnode;
                        keys.push(key);
                        // prune oldest entry
                                                if (this.max && keys.length > parseInt(this.max)) {
                            pruneCacheEntry(cache, keys[0], keys, this._vnode);
                        }
                    }
                    vnode.data.keepAlive = true;
                }
                return vnode || slot && slot[0];
            }
        };
        var builtInComponents = {
            KeepAlive: KeepAlive
        };
        /*  */        function initGlobalAPI(Vue) {
            // config
            var configDef = {};
            configDef.get = function() {
                return config;
            };
            if (true) {
                configDef.set = function() {
                    warn("Do not replace the Vue.config object, set individual fields instead.");
                };
            }
            Object.defineProperty(Vue, "config", configDef);
            // exposed util methods.
            // NOTE: these are not considered part of the public API - avoid relying on
            // them unless you are aware of the risk.
                        Vue.util = {
                warn: warn,
                extend: extend,
                mergeOptions: mergeOptions,
                defineReactive: defineReactive$$1
            };
            Vue.set = set;
            Vue.delete = del;
            Vue.nextTick = nextTick;
            // 2.6 explicit observable API
                        Vue.observable = function(obj) {
                observe(obj);
                return obj;
            };
            Vue.options = Object.create(null);
            ASSET_TYPES.forEach(function(type) {
                Vue.options[type + "s"] = Object.create(null);
            });
            // this is used to identify the "base" constructor to extend all plain-object
            // components with in Weex's multi-instance scenarios.
                        Vue.options._base = Vue;
            extend(Vue.options.components, builtInComponents);
            initUse(Vue);
            initMixin$1(Vue);
            initExtend(Vue);
            initAssetRegisters(Vue);
        }
        initGlobalAPI(Vue);
        Object.defineProperty(Vue.prototype, "$isServer", {
            get: isServerRendering
        });
        Object.defineProperty(Vue.prototype, "$ssrContext", {
            get: function get() {
                /* istanbul ignore next */
                return this.$vnode && this.$vnode.ssrContext;
            }
        });
        // expose FunctionalRenderContext for ssr runtime helper installation
                Object.defineProperty(Vue, "FunctionalRenderContext", {
            value: FunctionalRenderContext
        });
        Vue.version = "2.6.11";
        /**
     * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
     */        var ARRAYTYPE = "[object Array]";
        var OBJECTTYPE = "[object Object]";
        // const FUNCTIONTYPE = '[object Function]'
                function diff(current, pre) {
            var result = {};
            syncKeys(current, pre);
            _diff(current, pre, "", result);
            return result;
        }
        function syncKeys(current, pre) {
            if (current === pre) {
                return;
            }
            var rootCurrentType = type(current);
            var rootPreType = type(pre);
            if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
                if (Object.keys(current).length >= Object.keys(pre).length) {
                    for (var key in pre) {
                        var currentValue = current[key];
                        if (currentValue === undefined) {
                            current[key] = null;
                        } else {
                            syncKeys(currentValue, pre[key]);
                        }
                    }
                }
            } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
                if (current.length >= pre.length) {
                    pre.forEach(function(item, index) {
                        syncKeys(current[index], item);
                    });
                }
            }
        }
        function _diff(current, pre, path, result) {
            if (current === pre) {
                return;
            }
            var rootCurrentType = type(current);
            var rootPreType = type(pre);
            if (rootCurrentType == OBJECTTYPE) {
                if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
                    setResult(result, path, current);
                } else {
                    var loop = function loop(key) {
                        var currentValue = current[key];
                        var preValue = pre[key];
                        var currentType = type(currentValue);
                        var preType = type(preValue);
                        if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                            if (currentValue != pre[key]) {
                                setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
                            }
                        } else if (currentType == ARRAYTYPE) {
                            if (preType != ARRAYTYPE) {
                                setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
                            } else {
                                if (currentValue.length < preValue.length) {
                                    setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
                                } else {
                                    currentValue.forEach(function(item, index) {
                                        _diff(item, preValue[index], (path == "" ? "" : path + ".") + key + "[" + index + "]", result);
                                    });
                                }
                            }
                        } else if (currentType == OBJECTTYPE) {
                            if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                                setResult(result, (path == "" ? "" : path + ".") + key, currentValue);
                            } else {
                                for (var subKey in currentValue) {
                                    _diff(currentValue[subKey], preValue[subKey], (path == "" ? "" : path + ".") + key + "." + subKey, result);
                                }
                            }
                        }
                    };
                    for (var key in current) {
                        loop(key);
                    }
                }
            } else if (rootCurrentType == ARRAYTYPE) {
                if (rootPreType != ARRAYTYPE) {
                    setResult(result, path, current);
                } else {
                    if (current.length < pre.length) {
                        setResult(result, path, current);
                    } else {
                        current.forEach(function(item, index) {
                            _diff(item, pre[index], path + "[" + index + "]", result);
                        });
                    }
                }
            } else {
                setResult(result, path, current);
            }
        }
        function setResult(result, k, v) {
            // if (type(v) != FUNCTIONTYPE) {
            result[k] = v;
            // }
                }
        function type(obj) {
            return Object.prototype.toString.call(obj);
        }
        /*  */        function flushCallbacks$1(vm) {
            if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
                if (Object({
                    NODE_ENV: "development",
                    VUE_APP_NAME: "answers_uniapp",
                    VUE_APP_PLATFORM: "mp-weixin",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                    var mpInstance = vm.$scope;
                    console.log("[" + +new Date() + "][" + (mpInstance.is || mpInstance.route) + "][" + vm._uid + "]:flushCallbacks[" + vm.__next_tick_callbacks.length + "]");
                }
                var copies = vm.__next_tick_callbacks.slice(0);
                vm.__next_tick_callbacks.length = 0;
                for (var i = 0; i < copies.length; i++) {
                    copies[i]();
                }
            }
        }
        function hasRenderWatcher(vm) {
            return queue.find(function(watcher) {
                return vm._watcher === watcher;
            });
        }
        function nextTick$1(vm, cb) {
            //1.nextTick 之前 已 setData 且 setData 还未回调完成
            //2.nextTick 之前存在 render watcher
            if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
                if (Object({
                    NODE_ENV: "development",
                    VUE_APP_NAME: "answers_uniapp",
                    VUE_APP_PLATFORM: "mp-weixin",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                    var mpInstance = vm.$scope;
                    console.log("[" + +new Date() + "][" + (mpInstance.is || mpInstance.route) + "][" + vm._uid + "]:nextVueTick");
                }
                return nextTick(cb, vm);
            } else {
                if (Object({
                    NODE_ENV: "development",
                    VUE_APP_NAME: "answers_uniapp",
                    VUE_APP_PLATFORM: "mp-weixin",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                    var mpInstance$1 = vm.$scope;
                    console.log("[" + +new Date() + "][" + (mpInstance$1.is || mpInstance$1.route) + "][" + vm._uid + "]:nextMPTick");
                }
            }
            var _resolve;
            if (!vm.__next_tick_callbacks) {
                vm.__next_tick_callbacks = [];
            }
            vm.__next_tick_callbacks.push(function() {
                if (cb) {
                    try {
                        cb.call(vm);
                    } catch (e) {
                        handleError(e, vm, "nextTick");
                    }
                } else if (_resolve) {
                    _resolve(vm);
                }
            });
            // $flow-disable-line
                        if (!cb && typeof Promise !== "undefined") {
                return new Promise(function(resolve) {
                    _resolve = resolve;
                });
            }
        }
        /*  */        function cloneWithData(vm) {
            // 确保当前 vm 所有数据被同步
            var ret = Object.create(null);
            var dataKeys = [].concat(Object.keys(vm._data || {}), Object.keys(vm._computedWatchers || {}));
            dataKeys.reduce(function(ret, key) {
                ret[key] = vm[key];
                return ret;
            }, ret);
            // vue-composition-api
                        var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
            var rawBindings = compositionApiState && compositionApiState.rawBindings;
            if (rawBindings) {
                Object.keys(rawBindings).forEach(function(key) {
                    ret[key] = vm[key];
                });
            }
            //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
                        Object.assign(ret, vm.$mp.data || {});
            if (Array.isArray(vm.$options.behaviors) && vm.$options.behaviors.indexOf("uni://form-field") !== -1) {
                //form-field
                ret["name"] = vm.name;
                ret["value"] = vm.value;
            }
            return JSON.parse(JSON.stringify(ret));
        }
        var patch = function patch(oldVnode, vnode) {
            var this$1 = this;
            if (vnode === null) {
                //destroy
                return;
            }
            if (this.mpType === "page" || this.mpType === "component") {
                var mpInstance = this.$scope;
                var data = Object.create(null);
                try {
                    data = cloneWithData(this);
                } catch (err) {
                    console.error(err);
                }
                data.__webviewId__ = mpInstance.data.__webviewId__;
                var mpData = Object.create(null);
                Object.keys(data).forEach(function(key) {
                    //仅同步 data 中有的数据
                    mpData[key] = mpInstance.data[key];
                });
                var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
                if (Object.keys(diffData).length) {
                    if (Object({
                        NODE_ENV: "development",
                        VUE_APP_NAME: "answers_uniapp",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                        console.log("[" + +new Date() + "][" + (mpInstance.is || mpInstance.route) + "][" + this._uid + "]差量更新", JSON.stringify(diffData));
                    }
                    this.__next_tick_pending = true;
                    mpInstance.setData(diffData, function() {
                        this$1.__next_tick_pending = false;
                        flushCallbacks$1(this$1);
                    });
                } else {
                    flushCallbacks$1(this);
                }
            }
        };
        /*  */        function createEmptyRender() {}
        function mountComponent$1(vm, el, hydrating) {
            if (!vm.mpType) {
                //main.js 中的 new Vue
                return vm;
            }
            if (vm.mpType === "app") {
                vm.$options.render = createEmptyRender;
            }
            if (!vm.$options.render) {
                vm.$options.render = createEmptyRender;
                if (true) {
                    /* istanbul ignore if */
                    if (vm.$options.template && vm.$options.template.charAt(0) !== "#" || vm.$options.el || el) {
                        warn("You are using the runtime-only build of Vue where the template " + "compiler is not available. Either pre-compile the templates into " + "render functions, or use the compiler-included build.", vm);
                    } else {
                        warn("Failed to mount component: template or render function not defined.", vm);
                    }
                }
            }
            !vm._$fallback && callHook(vm, "beforeMount");
            var updateComponent = function updateComponent() {
                vm._update(vm._render(), hydrating);
            };
            // we set this to vm._watcher inside the watcher's constructor
            // since the watcher's initial patch may call $forceUpdate (e.g. inside child
            // component's mounted hook), which relies on vm._watcher being already defined
                        new Watcher(vm, updateComponent, noop, {
                before: function before() {
                    if (vm._isMounted && !vm._isDestroyed) {
                        callHook(vm, "beforeUpdate");
                    }
                }
            }, true /* isRenderWatcher */);
            hydrating = false;
            return vm;
        }
        /*  */        function renderClass(staticClass, dynamicClass) {
            if (isDef(staticClass) || isDef(dynamicClass)) {
                return concat(staticClass, stringifyClass(dynamicClass));
            }
            /* istanbul ignore next */            return "";
        }
        function concat(a, b) {
            return a ? b ? a + " " + b : a : b || "";
        }
        function stringifyClass(value) {
            if (Array.isArray(value)) {
                return stringifyArray(value);
            }
            if (isObject(value)) {
                return stringifyObject(value);
            }
            if (typeof value === "string") {
                return value;
            }
            /* istanbul ignore next */            return "";
        }
        function stringifyArray(value) {
            var res = "";
            var stringified;
            for (var i = 0, l = value.length; i < l; i++) {
                if (isDef(stringified = stringifyClass(value[i])) && stringified !== "") {
                    if (res) {
                        res += " ";
                    }
                    res += stringified;
                }
            }
            return res;
        }
        function stringifyObject(value) {
            var res = "";
            for (var key in value) {
                if (value[key]) {
                    if (res) {
                        res += " ";
                    }
                    res += key;
                }
            }
            return res;
        }
        /*  */        var parseStyleText = cached(function(cssText) {
            var res = {};
            var listDelimiter = /;(?![^(]*\))/g;
            var propertyDelimiter = /:(.+)/;
            cssText.split(listDelimiter).forEach(function(item) {
                if (item) {
                    var tmp = item.split(propertyDelimiter);
                    tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
                }
            });
            return res;
        });
        // normalize possible array / string values into Object
                function normalizeStyleBinding(bindingStyle) {
            if (Array.isArray(bindingStyle)) {
                return toObject(bindingStyle);
            }
            if (typeof bindingStyle === "string") {
                return parseStyleText(bindingStyle);
            }
            return bindingStyle;
        }
        /*  */        var MP_METHODS = [ "createSelectorQuery", "createIntersectionObserver", "selectAllComponents", "selectComponent" ];
        function getTarget(obj, path) {
            var parts = path.split(".");
            var key = parts[0];
            if (key.indexOf("__$n") === 0) {
                //number index
                key = parseInt(key.replace("__$n", ""));
            }
            if (parts.length === 1) {
                return obj[key];
            }
            return getTarget(obj[key], parts.slice(1).join("."));
        }
        function internalMixin(Vue) {
            Vue.config.errorHandler = function(err, vm, info) {
                Vue.util.warn("Error in " + info + ': "' + err.toString() + '"', vm);
                console.error(err);
                /* eslint-disable no-undef */                var app = getApp();
                if (app && app.onError) {
                    app.onError(err);
                }
            };
            var oldEmit = Vue.prototype.$emit;
            Vue.prototype.$emit = function(event) {
                if (this.$scope && event) {
                    this.$scope["triggerEvent"](event, {
                        __args__: toArray(arguments, 1)
                    });
                }
                return oldEmit.apply(this, arguments);
            };
            Vue.prototype.$nextTick = function(fn) {
                return nextTick$1(this, fn);
            };
            MP_METHODS.forEach(function(method) {
                Vue.prototype[method] = function(args) {
                    if (this.$scope && this.$scope[method]) {
                        return this.$scope[method](args);
                    }
                    // mp-alipay
                                        if (typeof my === "undefined") {
                        return;
                    }
                    if (method === "createSelectorQuery") {
                        /* eslint-disable no-undef */
                        return my.createSelectorQuery(args);
                    } else if (method === "createIntersectionObserver") {
                        /* eslint-disable no-undef */
                        return my.createIntersectionObserver(args);
                    }
                    // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
                                };
            });
            Vue.prototype.__init_provide = initProvide;
            Vue.prototype.__init_injections = initInjections;
            Vue.prototype.__call_hook = function(hook, args) {
                var vm = this;
                // #7573 disable dep collection when invoking lifecycle hooks
                                pushTarget();
                var handlers = vm.$options[hook];
                var info = hook + " hook";
                var ret;
                if (handlers) {
                    for (var i = 0, j = handlers.length; i < j; i++) {
                        ret = invokeWithErrorHandling(handlers[i], vm, args ? [ args ] : null, vm, info);
                    }
                }
                if (vm._hasHookEvent) {
                    vm.$emit("hook:" + hook, args);
                }
                popTarget();
                return ret;
            };
            Vue.prototype.__set_model = function(target, key, value, modifiers) {
                if (Array.isArray(modifiers)) {
                    if (modifiers.indexOf("trim") !== -1) {
                        value = value.trim();
                    }
                    if (modifiers.indexOf("number") !== -1) {
                        value = this._n(value);
                    }
                }
                if (!target) {
                    target = this;
                }
                target[key] = value;
            };
            Vue.prototype.__set_sync = function(target, key, value) {
                if (!target) {
                    target = this;
                }
                target[key] = value;
            };
            Vue.prototype.__get_orig = function(item) {
                if (isPlainObject(item)) {
                    return item["$orig"] || item;
                }
                return item;
            };
            Vue.prototype.__get_value = function(dataPath, target) {
                return getTarget(target || this, dataPath);
            };
            Vue.prototype.__get_class = function(dynamicClass, staticClass) {
                return renderClass(staticClass, dynamicClass);
            };
            Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
                if (!dynamicStyle && !staticStyle) {
                    return "";
                }
                var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
                var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
                return Object.keys(styleObj).map(function(name) {
                    return hyphenate(name) + ":" + styleObj[name];
                }).join(";");
            };
            Vue.prototype.__map = function(val, iteratee) {
                //TODO 暂不考虑 string
                var ret, i, l, keys, key;
                if (Array.isArray(val)) {
                    ret = new Array(val.length);
                    for (i = 0, l = val.length; i < l; i++) {
                        ret[i] = iteratee(val[i], i);
                    }
                    return ret;
                } else if (isObject(val)) {
                    keys = Object.keys(val);
                    ret = Object.create(null);
                    for (i = 0, l = keys.length; i < l; i++) {
                        key = keys[i];
                        ret[key] = iteratee(val[key], key, i);
                    }
                    return ret;
                } else if (typeof val === "number") {
                    ret = new Array(val);
                    for (i = 0, l = val; i < l; i++) {
                        // 第一个参数暂时仍和小程序一致
                        ret[i] = iteratee(i, i);
                    }
                    return ret;
                }
                return [];
            };
        }
        /*  */        var LIFECYCLE_HOOKS$1 = [ 
        //App
        "onLaunch", "onShow", "onHide", "onUniNViewMessage", "onPageNotFound", "onThemeChange", "onError", "onUnhandledRejection", 
        //Page
        "onInit", "onLoad", 
        // 'onShow',
        "onReady", 
        // 'onHide',
        "onUnload", "onPullDownRefresh", "onReachBottom", "onTabItemTap", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onResize", "onPageScroll", "onNavigationBarButtonTap", "onBackPress", "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputClicked", 
        //Component
        // 'onReady', // 兼容旧版本，应该移除该事件
        "onPageShow", "onPageHide", "onPageResize" ];
        function lifecycleMixin$1(Vue) {
            //fixed vue-class-component
            var oldExtend = Vue.extend;
            Vue.extend = function(extendOptions) {
                extendOptions = extendOptions || {};
                var methods = extendOptions.methods;
                if (methods) {
                    Object.keys(methods).forEach(function(methodName) {
                        if (LIFECYCLE_HOOKS$1.indexOf(methodName) !== -1) {
                            extendOptions[methodName] = methods[methodName];
                            delete methods[methodName];
                        }
                    });
                }
                return oldExtend.call(this, extendOptions);
            };
            var strategies = Vue.config.optionMergeStrategies;
            var mergeHook = strategies.created;
            LIFECYCLE_HOOKS$1.forEach(function(hook) {
                strategies[hook] = mergeHook;
            });
            Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
        }
        /*  */
        // install platform patch function
                Vue.prototype.__patch__ = patch;
        // public mount method
                Vue.prototype.$mount = function(el, hydrating) {
            return mountComponent$1(this, el, hydrating);
        };
        lifecycleMixin$1(Vue);
        internalMixin(Vue);
        /*  */
        /* harmony default export */        __webpack_exports__["default"] = Vue;
        /* WEBPACK VAR INJECTION */    }).call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3));
    /***/}, 
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ function(module, exports) {
    var g;
    // This works in non-strict mode
        g = function() {
        return this;
    }();
    try {
        // This works if eval is allowed (see CSP)
        g = g || new Function("return this")();
    } catch (e) {
        // This works if the window reference is available
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
    }
    // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}
        module.exports = g;
    /***/}, 
/* 4 */
/*!***********************************************************!*\
  !*** /Users/mike/Desktop/works/answers_uniapp/pages.json ***!
  \***********************************************************/
/*! no static exports found */
/***/ function(module, exports) {
    /***/}, , 
/* 5 */
/* 6 */
/* 7 */
/* 8 */
/*!****************************************************************************************************!*\
  !*** /Users/mike/Desktop/works/answers_uniapp/js_sdk/huzhen555-uniappsocketio/uniapp.socket.io.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ , , function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */ (function(uni) {
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
        }
        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function");
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o, p) {
            _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
            };
            return _setPrototypeOf(o, p);
        }
        function _createSuper(Derived) {
            var hasNativeReflectConstruct = _isNativeReflectConstruct();
            return function _createSuperInternal() {
                var Super = _getPrototypeOf(Derived), result;
                if (hasNativeReflectConstruct) {
                    var NewTarget = _getPrototypeOf(this).constructor;
                    result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                    result = Super.apply(this, arguments);
                }
                return _possibleConstructorReturn(this, result);
            };
        }
        function _possibleConstructorReturn(self, call) {
            if (call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function")) {
                return call;
            }
            return _assertThisInitialized(self);
        }
        function _assertThisInitialized(self) {
            if (self === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return self;
        }
        function _isNativeReflectConstruct() {
            if (typeof Reflect === "undefined" || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if (typeof Proxy === "function") return true;
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                return true;
            } catch (e) {
                return false;
            }
        }
        function _getPrototypeOf(o) {
            _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
            };
            return _getPrototypeOf(o);
        }
        !function(t, e) {
            if (true) module.exports = e(); else {
                var n, r;
            }
        }(window, function() {
            return function(t) {
                var e = {};
                function r(n) {
                    if (e[n]) return e[n].exports;
                    var o = e[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
                }
                return r.m = t, r.c = e, r.d = function(t, e, n) {
                    r.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: n
                    });
                }, r.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                }, r.t = function(t, e) {
                    if (1 & e && (t = r(t)), 8 & e) return t;
                    if (4 & e && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t && t.__esModule) return t;
                    var n = Object.create(null);
                    if (r.r(n), Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t) for (var o in t) {
                        r.d(n, o, function(e) {
                            return t[e];
                        }.bind(null, o));
                    }
                    return n;
                }, r.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default;
                    } : function() {
                        return t;
                    };
                    return r.d(e, "a", e), e;
                }, r.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }, r.p = "", r(r.s = 18);
            }([ function(t, e) {
                t.exports = function() {
                    return function() {};
                };
            }, function(t, e, r) {
                function n(t) {
                    if (t) return function(t) {
                        for (var e in n.prototype) {
                            t[e] = n.prototype[e];
                        }
                        return t;
                    }(t);
                }
                t.exports = n, n.prototype.on = n.prototype.addEventListener = function(t, e) {
                    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), 
                    this;
                }, n.prototype.once = function(t, e) {
                    function r() {
                        this.off(t, r), e.apply(this, arguments);
                    }
                    return r.fn = e, this.on(t, r), this;
                }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(t, e) {
                    if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, 
                    this;
                    var r, n = this._callbacks["$" + t];
                    if (!n) return this;
                    if (1 == arguments.length) return delete this._callbacks["$" + t], this;
                    for (var o = 0; o < n.length; o++) {
                        if ((r = n[o]) === e || r.fn === e) {
                            n.splice(o, 1);
                            break;
                        }
                    }
                    return this;
                }, n.prototype.emit = function(t) {
                    this._callbacks = this._callbacks || {};
                    var e = [].slice.call(arguments, 1), r = this._callbacks["$" + t];
                    if (r) for (var n = 0, o = (r = r.slice(0)).length; n < o; ++n) {
                        r[n].apply(this, e);
                    }
                    return this;
                }, n.prototype.listeners = function(t) {
                    return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
                }, n.prototype.hasListeners = function(t) {
                    return !!this.listeners(t).length;
                };
            }, function(t, e, r) {
                var n, o = r(28), i = r(13), s = r(30), a = r(31), c = r(32);
                "undefined" != typeof ArrayBuffer && (n = r(33));
                var u = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent), h = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent), f = u || h;
                e.protocol = 3;
                var p = e.packets = {
                    open: 0,
                    close: 1,
                    ping: 2,
                    pong: 3,
                    message: 4,
                    upgrade: 5,
                    noop: 6
                }, l = o(p), d = {
                    type: "error",
                    data: "parser error"
                }, y = r(34);
                function g(t, e, r) {
                    for (var n = new Array(t.length), o = a(t.length, r), i = function i(t, r, o) {
                        e(r, function(e, r) {
                            n[t] = r, o(e, n);
                        });
                    }, s = 0; s < t.length; s++) {
                        i(s, t[s], o);
                    }
                }
                e.encodePacket = function(t, r, n, o) {
                    "function" == typeof r && (o = r, r = !1), "function" == typeof n && (o = n, n = null);
                    var i = void 0 === t.data ? void 0 : t.data.buffer || t.data;
                    if ("undefined" != typeof ArrayBuffer && i instanceof ArrayBuffer) return function(t, r, n) {
                        if (!r) return e.encodeBase64Packet(t, n);
                        var o = t.data, i = new Uint8Array(o), s = new Uint8Array(1 + o.byteLength);
                        s[0] = p[t.type];
                        for (var a = 0; a < i.length; a++) {
                            s[a + 1] = i[a];
                        }
                        return n(s.buffer);
                    }(t, r, o);
                    if (void 0 !== y && i instanceof y) return function(t, r, n) {
                        if (!r) return e.encodeBase64Packet(t, n);
                        if (f) return function(t, r, n) {
                            if (!r) return e.encodeBase64Packet(t, n);
                            var o = new FileReader();
                            return o.onload = function() {
                                e.encodePacket({
                                    type: t.type,
                                    data: o.result
                                }, r, !0, n);
                            }, o.readAsArrayBuffer(t.data);
                        }(t, r, n);
                        var o = new Uint8Array(1);
                        o[0] = p[t.type];
                        var i = new y([ o.buffer, t.data ]);
                        return n(i);
                    }(t, r, o);
                    if (i && i.base64) return function(t, r) {
                        var n = "b" + e.packets[t.type] + t.data.data;
                        return r(n);
                    }(t, o);
                    var s = p[t.type];
                    return void 0 !== t.data && (s += n ? c.encode(String(t.data), {
                        strict: !1
                    }) : String(t.data)), o("" + s);
                }, e.encodeBase64Packet = function(t, r) {
                    var n, o = "b" + e.packets[t.type];
                    if (void 0 !== y && t.data instanceof y) {
                        var i = new FileReader();
                        return i.onload = function() {
                            var t = i.result.split(",")[1];
                            r(o + t);
                        }, i.readAsDataURL(t.data);
                    }
                    try {
                        n = String.fromCharCode.apply(null, new Uint8Array(t.data));
                    } catch (e) {
                        for (var s = new Uint8Array(t.data), a = new Array(s.length), c = 0; c < s.length; c++) {
                            a[c] = s[c];
                        }
                        n = String.fromCharCode.apply(null, a);
                    }
                    return o += btoa(n), r(o);
                }, e.decodePacket = function(t, r, n) {
                    if (void 0 === t) return d;
                    if ("string" == typeof t) {
                        if ("b" === t.charAt(0)) return e.decodeBase64Packet(t.substr(1), r);
                        if (n && !1 === (t = function(t) {
                            try {
                                t = c.decode(t, {
                                    strict: !1
                                });
                            } catch (t) {
                                return !1;
                            }
                            return t;
                        }(t))) return d;
                        var o = t.charAt(0);
                        return Number(o) == o && l[o] ? t.length > 1 ? {
                            type: l[o],
                            data: t.substring(1)
                        } : {
                            type: l[o]
                        } : d;
                    }
                    o = new Uint8Array(t)[0];
                    var i = s(t, 1);
                    return y && "blob" === r && (i = new y([ i ])), {
                        type: l[o],
                        data: i
                    };
                }, e.decodeBase64Packet = function(t, e) {
                    var r = l[t.charAt(0)];
                    if (!n) return {
                        type: r,
                        data: {
                            base64: !0,
                            data: t.substr(1)
                        }
                    };
                    var o = n.decode(t.substr(1));
                    return "blob" === e && y && (o = new y([ o ])), {
                        type: r,
                        data: o
                    };
                }, e.encodePayload = function(t, r, n) {
                    "function" == typeof r && (n = r, r = null);
                    var o = i(t);
                    if (r && o) return y && !f ? e.encodePayloadAsBlob(t, n) : e.encodePayloadAsArrayBuffer(t, n);
                    if (!t.length) return n("0:");
                    g(t, function(t, n) {
                        e.encodePacket(t, !!o && r, !1, function(t) {
                            n(null, function(t) {
                                return t.length + ":" + t;
                            }(t));
                        });
                    }, function(t, e) {
                        return n(e.join(""));
                    });
                }, e.decodePayload = function(t, r, n) {
                    if ("string" != typeof t) return e.decodePayloadAsBinary(t, r, n);
                    var o;
                    if ("function" == typeof r && (n = r, r = null), "" === t) return n(d, 0, 1);
                    for (var i, s, a = "", c = 0, u = t.length; c < u; c++) {
                        var h = t.charAt(c);
                        if (":" === h) {
                            if ("" === a || a != (i = Number(a))) return n(d, 0, 1);
                            if (a != (s = t.substr(c + 1, i)).length) return n(d, 0, 1);
                            if (s.length) {
                                if (o = e.decodePacket(s, r, !1), d.type === o.type && d.data === o.data) return n(d, 0, 1);
                                if (!1 === n(o, c + i, u)) return;
                            }
                            c += i, a = "";
                        } else a += h;
                    }
                    return "" !== a ? n(d, 0, 1) : void 0;
                }, e.encodePayloadAsArrayBuffer = function(t, r) {
                    if (!t.length) return r(new ArrayBuffer(0));
                    g(t, function(t, r) {
                        e.encodePacket(t, !0, !0, function(t) {
                            return r(null, t);
                        });
                    }, function(t, e) {
                        var n = e.reduce(function(t, e) {
                            var r;
                            return t + (r = "string" == typeof e ? e.length : e.byteLength).toString().length + r + 2;
                        }, 0), o = new Uint8Array(n), i = 0;
                        return e.forEach(function(t) {
                            var e = "string" == typeof t, r = t;
                            if (e) {
                                for (var n = new Uint8Array(t.length), s = 0; s < t.length; s++) {
                                    n[s] = t.charCodeAt(s);
                                }
                                r = n.buffer;
                            }
                            o[i++] = e ? 0 : 1;
                            var a = r.byteLength.toString();
                            for (s = 0; s < a.length; s++) {
                                o[i++] = parseInt(a[s]);
                            }
                            o[i++] = 255;
                            for (n = new Uint8Array(r), s = 0; s < n.length; s++) {
                                o[i++] = n[s];
                            }
                        }), r(o.buffer);
                    });
                }, e.encodePayloadAsBlob = function(t, r) {
                    g(t, function(t, r) {
                        e.encodePacket(t, !0, !0, function(t) {
                            var e = new Uint8Array(1);
                            if (e[0] = 1, "string" == typeof t) {
                                for (var n = new Uint8Array(t.length), o = 0; o < t.length; o++) {
                                    n[o] = t.charCodeAt(o);
                                }
                                t = n.buffer, e[0] = 0;
                            }
                            var i = (t instanceof ArrayBuffer ? t.byteLength : t.size).toString(), s = new Uint8Array(i.length + 1);
                            for (o = 0; o < i.length; o++) {
                                s[o] = parseInt(i[o]);
                            }
                            if (s[i.length] = 255, y) {
                                var a = new y([ e.buffer, s.buffer, t ]);
                                r(null, a);
                            }
                        });
                    }, function(t, e) {
                        return r(new y(e));
                    });
                }, e.decodePayloadAsBinary = function(t, r, n) {
                    "function" == typeof r && (n = r, r = null);
                    for (var o = t, i = []; o.byteLength > 0; ) {
                        for (var a = new Uint8Array(o), c = 0 === a[0], u = "", h = 1; 255 !== a[h]; h++) {
                            if (u.length > 310) return n(d, 0, 1);
                            u += a[h];
                        }
                        o = s(o, 2 + u.length), u = parseInt(u);
                        var f = s(o, 0, u);
                        if (c) try {
                            f = String.fromCharCode.apply(null, new Uint8Array(f));
                        } catch (t) {
                            var p = new Uint8Array(f);
                            f = "";
                            for (h = 0; h < p.length; h++) {
                                f += String.fromCharCode(p[h]);
                            }
                        }
                        i.push(f), o = s(o, u);
                    }
                    var l = i.length;
                    i.forEach(function(t, o) {
                        n(e.decodePacket(t, r, !0), o, l);
                    });
                };
            }, function(t, e, r) {
                var n = r(0)("socket.io-parser"), o = r(1), i = r(21), s = r(7), a = r(8);
                function c() {}
                e.protocol = 4, e.types = [ "CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK" ], 
                e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, 
                e.BINARY_ACK = 6, e.Encoder = c, e.Decoder = f;
                var u = e.ERROR + '"encode error"';
                function h(t) {
                    var r = "" + t.type;
                    if (e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type || (r += t.attachments + "-"), 
                    t.nsp && "/" !== t.nsp && (r += t.nsp + ","), null != t.id && (r += t.id), null != t.data) {
                        var o = function(t) {
                            try {
                                return JSON.stringify(t);
                            } catch (t) {
                                return !1;
                            }
                        }(t.data);
                        if (!1 === o) return u;
                        r += o;
                    }
                    return n("encoded %j as %s", t, r), r;
                }
                function f() {
                    this.reconstructor = null;
                }
                function p(t) {
                    this.reconPack = t, this.buffers = [];
                }
                function l(t) {
                    return {
                        type: e.ERROR,
                        data: "parser error: " + t
                    };
                }
                c.prototype.encode = function(t, r) {
                    (n("encoding packet %j", t), e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type) ? function(t, e) {
                        i.removeBlobs(t, function(t) {
                            var r = i.deconstructPacket(t), n = h(r.packet), o = r.buffers;
                            o.unshift(n), e(o);
                        });
                    }(t, r) : r([ h(t) ]);
                }, o(f.prototype), f.prototype.add = function(t) {
                    var r;
                    if ("string" == typeof t) r = function(t) {
                        var r = 0, o = {
                            type: Number(t.charAt(0))
                        };
                        if (null == e.types[o.type]) return l("unknown packet type " + o.type);
                        if (e.BINARY_EVENT === o.type || e.BINARY_ACK === o.type) {
                            for (var i = ""; "-" !== t.charAt(++r) && (i += t.charAt(r), r != t.length); ) {}
                            if (i != Number(i) || "-" !== t.charAt(r)) throw new Error("Illegal attachments");
                            o.attachments = Number(i);
                        }
                        if ("/" === t.charAt(r + 1)) for (o.nsp = ""; ++r; ) {
                            if ("," === (c = t.charAt(r))) break;
                            if (o.nsp += c, r === t.length) break;
                        } else o.nsp = "/";
                        var a = t.charAt(r + 1);
                        if ("" !== a && Number(a) == a) {
                            for (o.id = ""; ++r; ) {
                                var c;
                                if (null == (c = t.charAt(r)) || Number(c) != c) {
                                    --r;
                                    break;
                                }
                                if (o.id += t.charAt(r), r === t.length) break;
                            }
                            o.id = Number(o.id);
                        }
                        if (t.charAt(++r)) {
                            var u = function(t) {
                                try {
                                    return JSON.parse(t);
                                } catch (t) {
                                    return !1;
                                }
                            }(t.substr(r));
                            if (!(!1 !== u && (o.type === e.ERROR || s(u)))) return l("invalid payload");
                            o.data = u;
                        }
                        return n("decoded %s as %j", t, o), o;
                    }(t), e.BINARY_EVENT === r.type || e.BINARY_ACK === r.type ? (this.reconstructor = new p(r), 
                    0 === this.reconstructor.reconPack.attachments && this.emit("decoded", r)) : this.emit("decoded", r); else {
                        if (!a(t) && !t.base64) throw new Error("Unknown type: " + t);
                        if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                        (r = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, this.emit("decoded", r));
                    }
                }, f.prototype.destroy = function() {
                    this.reconstructor && this.reconstructor.finishedReconstruction();
                }, p.prototype.takeBinaryData = function(t) {
                    if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
                        var e = i.reconstructPacket(this.reconPack, this.buffers);
                        return this.finishedReconstruction(), e;
                    }
                    return null;
                }, p.prototype.finishedReconstruction = function() {
                    this.reconPack = null, this.buffers = [];
                };
            }, function(t, e) {
                var r;
                r = function() {
                    return this;
                }();
                try {
                    r = r || new Function("return this")();
                } catch (t) {
                    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (r = window);
                }
                t.exports = r;
            }, function(t, e) {
                e.encode = function(t) {
                    var e = "";
                    for (var r in t) {
                        t.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
                    }
                    return e;
                }, e.decode = function(t) {
                    for (var e = {}, r = t.split("&"), n = 0, o = r.length; n < o; n++) {
                        var i = r[n].split("=");
                        e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
                    }
                    return e;
                };
            }, function(t, e) {
                var r = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, n = [ "source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor" ];
                t.exports = function(t) {
                    var e = t, o = t.indexOf("["), i = t.indexOf("]");
                    -1 != o && -1 != i && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(i, t.length));
                    for (var s = r.exec(t || ""), a = {}, c = 14; c--; ) {
                        a[n[c]] = s[c] || "";
                    }
                    return -1 != o && -1 != i && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), 
                    a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), 
                    a.ipv6uri = !0), a;
                };
            }, function(t, e) {
                var r = {}.toString;
                t.exports = Array.isArray || function(t) {
                    return "[object Array]" == r.call(t);
                };
            }, function(t, e, r) {
                (function(e) {
                    t.exports = function(t) {
                        return r && e.isBuffer(t) || n && (t instanceof ArrayBuffer || o(t));
                    };
                    var r = "function" == typeof e && "function" == typeof e.isBuffer, n = "function" == typeof ArrayBuffer, o = function o(t) {
                        return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer;
                    };
                }).call(this, r(9).Buffer);
            }, function(t, e, r) {
                "use strict";
                (function(t) {
                    /*!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * The buffer module from node.js, for the browser.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @author   Feross Aboukhadijeh <http://feross.org>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @license  MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */
                    var n = r(22), o = r(23), i = r(24);
                    function s() {
                        return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
                    }
                    function a(t, e) {
                        if (s() < e) throw new RangeError("Invalid typed array length");
                        return c.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = c.prototype : (null === t && (t = new c(e)), 
                        t.length = e), t;
                    }
                    function c(t, e, r) {
                        if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(t, e, r);
                        if ("number" == typeof t) {
                            if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                            return f(this, t);
                        }
                        return u(this, t, e, r);
                    }
                    function u(t, e, r, n) {
                        if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, r, n) {
                            if (e.byteLength, r < 0 || e.byteLength < r) throw new RangeError("'offset' is out of bounds");
                            if (e.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                            e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n);
                            c.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = c.prototype : t = p(t, e);
                            return t;
                        }(t, e, r, n) : "string" == typeof e ? function(t, e, r) {
                            "string" == typeof r && "" !== r || (r = "utf8");
                            if (!c.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                            var n = 0 | d(e, r), o = (t = a(t, n)).write(e, r);
                            o !== n && (t = t.slice(0, o));
                            return t;
                        }(t, e, r) : function(t, e) {
                            if (c.isBuffer(e)) {
                                var r = 0 | l(e.length);
                                return 0 === (t = a(t, r)).length ? t : (e.copy(t, 0, 0, r), t);
                            }
                            if (e) {
                                if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (n = e.length) != n ? a(t, 0) : p(t, e);
                                if ("Buffer" === e.type && i(e.data)) return p(t, e.data);
                            }
                            var n;
                            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
                        }(t, e);
                    }
                    function h(t) {
                        if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                        if (t < 0) throw new RangeError('"size" argument must not be negative');
                    }
                    function f(t, e) {
                        if (h(e), t = a(t, e < 0 ? 0 : 0 | l(e)), !c.TYPED_ARRAY_SUPPORT) for (var r = 0; r < e; ++r) {
                            t[r] = 0;
                        }
                        return t;
                    }
                    function p(t, e) {
                        var r = e.length < 0 ? 0 : 0 | l(e.length);
                        t = a(t, r);
                        for (var n = 0; n < r; n += 1) {
                            t[n] = 255 & e[n];
                        }
                        return t;
                    }
                    function l(t) {
                        if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
                        return 0 | t;
                    }
                    function d(t, e) {
                        if (c.isBuffer(t)) return t.length;
                        if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                        "string" != typeof t && (t = "" + t);
                        var r = t.length;
                        if (0 === r) return 0;
                        for (var n = !1; ;) {
                            switch (e) {
                              case "ascii":
                              case "latin1":
                              case "binary":
                                return r;

                              case "utf8":
                              case "utf-8":
                              case void 0:
                                return q(t).length;

                              case "ucs2":
                              case "ucs-2":
                              case "utf16le":
                              case "utf-16le":
                                return 2 * r;

                              case "hex":
                                return r >>> 1;

                              case "base64":
                                return F(t).length;

                              default:
                                if (n) return q(t).length;
                                e = ("" + e).toLowerCase(), n = !0;
                            }
                        }
                    }
                    function y(t, e, r) {
                        var n = !1;
                        if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                        if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                        if ((r >>>= 0) <= (e >>>= 0)) return "";
                        for (t || (t = "utf8"); ;) {
                            switch (t) {
                              case "hex":
                                return C(this, e, r);

                              case "utf8":
                              case "utf-8":
                                return S(this, e, r);

                              case "ascii":
                                return P(this, e, r);

                              case "latin1":
                              case "binary":
                                return T(this, e, r);

                              case "base64":
                                return B(this, e, r);

                              case "ucs2":
                              case "ucs-2":
                              case "utf16le":
                              case "utf-16le":
                                return O(this, e, r);

                              default:
                                if (n) throw new TypeError("Unknown encoding: " + t);
                                t = (t + "").toLowerCase(), n = !0;
                            }
                        }
                    }
                    function g(t, e, r) {
                        var n = t[e];
                        t[e] = t[r], t[r] = n;
                    }
                    function v(t, e, r, n, o) {
                        if (0 === t.length) return -1;
                        if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), 
                        r = +r, isNaN(r) && (r = o ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                            if (o) return -1;
                            r = t.length - 1;
                        } else if (r < 0) {
                            if (!o) return -1;
                            r = 0;
                        }
                        if ("string" == typeof e && (e = c.from(e, n)), c.isBuffer(e)) return 0 === e.length ? -1 : m(t, e, r, n, o);
                        if ("number" == typeof e) return e &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : m(t, [ e ], r, n, o);
                        throw new TypeError("val must be string, number or Buffer");
                    }
                    function m(t, e, r, n, o) {
                        var i, s = 1, a = t.length, c = e.length;
                        if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                            if (t.length < 2 || e.length < 2) return -1;
                            s = 2, a /= 2, c /= 2, r /= 2;
                        }
                        function u(t, e) {
                            return 1 === s ? t[e] : t.readUInt16BE(e * s);
                        }
                        if (o) {
                            var h = -1;
                            for (i = r; i < a; i++) {
                                if (u(t, i) === u(e, -1 === h ? 0 : i - h)) {
                                    if (-1 === h && (h = i), i - h + 1 === c) return h * s;
                                } else -1 !== h && (i -= i - h), h = -1;
                            }
                        } else for (r + c > a && (r = a - c), i = r; i >= 0; i--) {
                            for (var f = !0, p = 0; p < c; p++) {
                                if (u(t, i + p) !== u(e, p)) {
                                    f = !1;
                                    break;
                                }
                            }
                            if (f) return i;
                        }
                        return -1;
                    }
                    function b(t, e, r, n) {
                        r = Number(r) || 0;
                        var o = t.length - r;
                        n ? (n = Number(n)) > o && (n = o) : n = o;
                        var i = e.length;
                        if (i % 2 != 0) throw new TypeError("Invalid hex string");
                        n > i / 2 && (n = i / 2);
                        for (var s = 0; s < n; ++s) {
                            var a = parseInt(e.substr(2 * s, 2), 16);
                            if (isNaN(a)) return s;
                            t[r + s] = a;
                        }
                        return s;
                    }
                    function w(t, e, r, n) {
                        return z(q(e, t.length - r), t, r, n);
                    }
                    function A(t, e, r, n) {
                        return z(function(t) {
                            for (var e = [], r = 0; r < t.length; ++r) {
                                e.push(255 & t.charCodeAt(r));
                            }
                            return e;
                        }(e), t, r, n);
                    }
                    function k(t, e, r, n) {
                        return A(t, e, r, n);
                    }
                    function E(t, e, r, n) {
                        return z(F(e), t, r, n);
                    }
                    function _(t, e, r, n) {
                        return z(function(t, e) {
                            for (var r, n, o, i = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) {
                                r = t.charCodeAt(s), n = r >> 8, o = r % 256, i.push(o), i.push(n);
                            }
                            return i;
                        }(e, t.length - r), t, r, n);
                    }
                    function B(t, e, r) {
                        return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r));
                    }
                    function S(t, e, r) {
                        r = Math.min(t.length, r);
                        for (var n = [], o = e; o < r; ) {
                            var i, s, a, c, u = t[o], h = null, f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                            if (o + f <= r) switch (f) {
                              case 1:
                                u < 128 && (h = u);
                                break;

                              case 2:
                                128 == (192 & (i = t[o + 1])) && (c = (31 & u) << 6 | 63 & i) > 127 && (h = c);
                                break;

                              case 3:
                                i = t[o + 1], s = t[o + 2], 128 == (192 & i) && 128 == (192 & s) && (c = (15 & u) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (c < 55296 || c > 57343) && (h = c);
                                break;

                              case 4:
                                i = t[o + 1], s = t[o + 2], a = t[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (c = (15 & u) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && c < 1114112 && (h = c);
                            }
                            null === h ? (h = 65533, f = 1) : h > 65535 && (h -= 65536, n.push(h >>> 10 & 1023 | 55296), 
                            h = 56320 | 1023 & h), n.push(h), o += f;
                        }
                        return function(t) {
                            var e = t.length;
                            if (e <= R) return String.fromCharCode.apply(String, t);
                            var r = "", n = 0;
                            for (;n < e; ) {
                                r += String.fromCharCode.apply(String, t.slice(n, n += R));
                            }
                            return r;
                        }(n);
                    }
                    e.Buffer = c, e.SlowBuffer = function(t) {
                        +t != t && (t = 0);
                        return c.alloc(+t);
                    }, e.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
                        try {
                            var t = new Uint8Array(1);
                            return t.__proto__ = {
                                __proto__: Uint8Array.prototype,
                                foo: function foo() {
                                    return 42;
                                }
                            }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
                        } catch (t) {
                            return !1;
                        }
                    }(), e.kMaxLength = s(), c.poolSize = 8192, c._augment = function(t) {
                        return t.__proto__ = c.prototype, t;
                    }, c.from = function(t, e, r) {
                        return u(null, t, e, r);
                    }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, 
                    "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
                        value: null,
                        configurable: !0
                    })), c.alloc = function(t, e, r) {
                        return function(t, e, r, n) {
                            return h(e), e <= 0 ? a(t, e) : void 0 !== r ? "string" == typeof n ? a(t, e).fill(r, n) : a(t, e).fill(r) : a(t, e);
                        }(null, t, e, r);
                    }, c.allocUnsafe = function(t) {
                        return f(null, t);
                    }, c.allocUnsafeSlow = function(t) {
                        return f(null, t);
                    }, c.isBuffer = function(t) {
                        return !(null == t || !t._isBuffer);
                    }, c.compare = function(t, e) {
                        if (!c.isBuffer(t) || !c.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                        if (t === e) return 0;
                        for (var r = t.length, n = e.length, o = 0, i = Math.min(r, n); o < i; ++o) {
                            if (t[o] !== e[o]) {
                                r = t[o], n = e[o];
                                break;
                            }
                        }
                        return r < n ? -1 : n < r ? 1 : 0;
                    }, c.isEncoding = function(t) {
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
                    }, c.concat = function(t, e) {
                        if (!i(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === t.length) return c.alloc(0);
                        var r;
                        if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) {
                            e += t[r].length;
                        }
                        var n = c.allocUnsafe(e), o = 0;
                        for (r = 0; r < t.length; ++r) {
                            var s = t[r];
                            if (!c.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                            s.copy(n, o), o += s.length;
                        }
                        return n;
                    }, c.byteLength = d, c.prototype._isBuffer = !0, c.prototype.swap16 = function() {
                        var t = this.length;
                        if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                        for (var e = 0; e < t; e += 2) {
                            g(this, e, e + 1);
                        }
                        return this;
                    }, c.prototype.swap32 = function() {
                        var t = this.length;
                        if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                        for (var e = 0; e < t; e += 4) {
                            g(this, e, e + 3), g(this, e + 1, e + 2);
                        }
                        return this;
                    }, c.prototype.swap64 = function() {
                        var t = this.length;
                        if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                        for (var e = 0; e < t; e += 8) {
                            g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e + 3, e + 4);
                        }
                        return this;
                    }, c.prototype.toString = function() {
                        var t = 0 | this.length;
                        return 0 === t ? "" : 0 === arguments.length ? S(this, 0, t) : y.apply(this, arguments);
                    }, c.prototype.equals = function(t) {
                        if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                        return this === t || 0 === c.compare(this, t);
                    }, c.prototype.inspect = function() {
                        var t = "", r = e.INSPECT_MAX_BYTES;
                        return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), 
                        this.length > r && (t += " ... ")), "<Buffer " + t + ">";
                    }, c.prototype.compare = function(t, e, r, n, o) {
                        if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                        if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), 
                        void 0 === o && (o = this.length), e < 0 || r > t.length || n < 0 || o > this.length) throw new RangeError("out of range index");
                        if (n >= o && e >= r) return 0;
                        if (n >= o) return -1;
                        if (e >= r) return 1;
                        if (this === t) return 0;
                        for (var i = (o >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (e >>>= 0), a = Math.min(i, s), u = this.slice(n, o), h = t.slice(e, r), f = 0; f < a; ++f) {
                            if (u[f] !== h[f]) {
                                i = u[f], s = h[f];
                                break;
                            }
                        }
                        return i < s ? -1 : s < i ? 1 : 0;
                    }, c.prototype.includes = function(t, e, r) {
                        return -1 !== this.indexOf(t, e, r);
                    }, c.prototype.indexOf = function(t, e, r) {
                        return v(this, t, e, r, !0);
                    }, c.prototype.lastIndexOf = function(t, e, r) {
                        return v(this, t, e, r, !1);
                    }, c.prototype.write = function(t, e, r, n) {
                        if (void 0 === e) n = "utf8", r = this.length, e = 0; else if (void 0 === r && "string" == typeof e) n = e, 
                        r = this.length, e = 0; else {
                            if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            e |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
                        }
                        var o = this.length - e;
                        if ((void 0 === r || r > o) && (r = o), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                        n || (n = "utf8");
                        for (var i = !1; ;) {
                            switch (n) {
                              case "hex":
                                return b(this, t, e, r);

                              case "utf8":
                              case "utf-8":
                                return w(this, t, e, r);

                              case "ascii":
                                return A(this, t, e, r);

                              case "latin1":
                              case "binary":
                                return k(this, t, e, r);

                              case "base64":
                                return E(this, t, e, r);

                              case "ucs2":
                              case "ucs-2":
                              case "utf16le":
                              case "utf-16le":
                                return _(this, t, e, r);

                              default:
                                if (i) throw new TypeError("Unknown encoding: " + n);
                                n = ("" + n).toLowerCase(), i = !0;
                            }
                        }
                    }, c.prototype.toJSON = function() {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(this._arr || this, 0)
                        };
                    };
                    var R = 4096;
                    function P(t, e, r) {
                        var n = "";
                        r = Math.min(t.length, r);
                        for (var o = e; o < r; ++o) {
                            n += String.fromCharCode(127 & t[o]);
                        }
                        return n;
                    }
                    function T(t, e, r) {
                        var n = "";
                        r = Math.min(t.length, r);
                        for (var o = e; o < r; ++o) {
                            n += String.fromCharCode(t[o]);
                        }
                        return n;
                    }
                    function C(t, e, r) {
                        var n = t.length;
                        (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                        for (var o = "", i = e; i < r; ++i) {
                            o += Y(t[i]);
                        }
                        return o;
                    }
                    function O(t, e, r) {
                        for (var n = t.slice(e, r), o = "", i = 0; i < n.length; i += 2) {
                            o += String.fromCharCode(n[i] + 256 * n[i + 1]);
                        }
                        return o;
                    }
                    function x(t, e, r) {
                        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                        if (t + e > r) throw new RangeError("Trying to access beyond buffer length");
                    }
                    function L(t, e, r, n, o, i) {
                        if (!c.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                        if (e > o || e < i) throw new RangeError('"value" argument is out of bounds');
                        if (r + n > t.length) throw new RangeError("Index out of range");
                    }
                    function N(t, e, r, n) {
                        e < 0 && (e = 65535 + e + 1);
                        for (var o = 0, i = Math.min(t.length - r, 2); o < i; ++o) {
                            t[r + o] = (e & 255 << 8 * (n ? o : 1 - o)) >>> 8 * (n ? o : 1 - o);
                        }
                    }
                    function U(t, e, r, n) {
                        e < 0 && (e = 4294967295 + e + 1);
                        for (var o = 0, i = Math.min(t.length - r, 4); o < i; ++o) {
                            t[r + o] = e >>> 8 * (n ? o : 3 - o) & 255;
                        }
                    }
                    function I(t, e, r, n, o, i) {
                        if (r + n > t.length) throw new RangeError("Index out of range");
                        if (r < 0) throw new RangeError("Index out of range");
                    }
                    function j(t, e, r, n, i) {
                        return i || I(t, 0, r, 4), o.write(t, e, r, n, 23, 4), r + 4;
                    }
                    function M(t, e, r, n, i) {
                        return i || I(t, 0, r, 8), o.write(t, e, r, n, 52, 8), r + 8;
                    }
                    c.prototype.slice = function(t, e) {
                        var r, n = this.length;
                        if ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), 
                        e < t && (e = t), c.TYPED_ARRAY_SUPPORT) (r = this.subarray(t, e)).__proto__ = c.prototype; else {
                            var o = e - t;
                            r = new c(o, void 0);
                            for (var i = 0; i < o; ++i) {
                                r[i] = this[i + t];
                            }
                        }
                        return r;
                    }, c.prototype.readUIntLE = function(t, e, r) {
                        t |= 0, e |= 0, r || x(t, e, this.length);
                        for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256); ) {
                            n += this[t + i] * o;
                        }
                        return n;
                    }, c.prototype.readUIntBE = function(t, e, r) {
                        t |= 0, e |= 0, r || x(t, e, this.length);
                        for (var n = this[t + --e], o = 1; e > 0 && (o *= 256); ) {
                            n += this[t + --e] * o;
                        }
                        return n;
                    }, c.prototype.readUInt8 = function(t, e) {
                        return e || x(t, 1, this.length), this[t];
                    }, c.prototype.readUInt16LE = function(t, e) {
                        return e || x(t, 2, this.length), this[t] | this[t + 1] << 8;
                    }, c.prototype.readUInt16BE = function(t, e) {
                        return e || x(t, 2, this.length), this[t] << 8 | this[t + 1];
                    }, c.prototype.readUInt32LE = function(t, e) {
                        return e || x(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
                    }, c.prototype.readUInt32BE = function(t, e) {
                        return e || x(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
                    }, c.prototype.readIntLE = function(t, e, r) {
                        t |= 0, e |= 0, r || x(t, e, this.length);
                        for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256); ) {
                            n += this[t + i] * o;
                        }
                        return n >= (o *= 128) && (n -= Math.pow(2, 8 * e)), n;
                    }, c.prototype.readIntBE = function(t, e, r) {
                        t |= 0, e |= 0, r || x(t, e, this.length);
                        for (var n = e, o = 1, i = this[t + --n]; n > 0 && (o *= 256); ) {
                            i += this[t + --n] * o;
                        }
                        return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i;
                    }, c.prototype.readInt8 = function(t, e) {
                        return e || x(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
                    }, c.prototype.readInt16LE = function(t, e) {
                        e || x(t, 2, this.length);
                        var r = this[t] | this[t + 1] << 8;
                        return 32768 & r ? 4294901760 | r : r;
                    }, c.prototype.readInt16BE = function(t, e) {
                        e || x(t, 2, this.length);
                        var r = this[t + 1] | this[t] << 8;
                        return 32768 & r ? 4294901760 | r : r;
                    }, c.prototype.readInt32LE = function(t, e) {
                        return e || x(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
                    }, c.prototype.readInt32BE = function(t, e) {
                        return e || x(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
                    }, c.prototype.readFloatLE = function(t, e) {
                        return e || x(t, 4, this.length), o.read(this, t, !0, 23, 4);
                    }, c.prototype.readFloatBE = function(t, e) {
                        return e || x(t, 4, this.length), o.read(this, t, !1, 23, 4);
                    }, c.prototype.readDoubleLE = function(t, e) {
                        return e || x(t, 8, this.length), o.read(this, t, !0, 52, 8);
                    }, c.prototype.readDoubleBE = function(t, e) {
                        return e || x(t, 8, this.length), o.read(this, t, !1, 52, 8);
                    }, c.prototype.writeUIntLE = function(t, e, r, n) {
                        (t = +t, e |= 0, r |= 0, n) || L(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                        var o = 1, i = 0;
                        for (this[e] = 255 & t; ++i < r && (o *= 256); ) {
                            this[e + i] = t / o & 255;
                        }
                        return e + r;
                    }, c.prototype.writeUIntBE = function(t, e, r, n) {
                        (t = +t, e |= 0, r |= 0, n) || L(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                        var o = r - 1, i = 1;
                        for (this[e + o] = 255 & t; --o >= 0 && (i *= 256); ) {
                            this[e + o] = t / i & 255;
                        }
                        return e + r;
                    }, c.prototype.writeUInt8 = function(t, e, r) {
                        return t = +t, e |= 0, r || L(this, t, e, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 
                        this[e] = 255 & t, e + 1;
                    }, c.prototype.writeUInt16LE = function(t, e, r) {
                        return t = +t, e |= 0, r || L(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, 
                        this[e + 1] = t >>> 8) : N(this, t, e, !0), e + 2;
                    }, c.prototype.writeUInt16BE = function(t, e, r) {
                        return t = +t, e |= 0, r || L(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, 
                        this[e + 1] = 255 & t) : N(this, t, e, !1), e + 2;
                    }, c.prototype.writeUInt32LE = function(t, e, r) {
                        return t = +t, e |= 0, r || L(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, 
                        this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : U(this, t, e, !0), 
                        e + 4;
                    }, c.prototype.writeUInt32BE = function(t, e, r) {
                        return t = +t, e |= 0, r || L(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, 
                        this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : U(this, t, e, !1), 
                        e + 4;
                    }, c.prototype.writeIntLE = function(t, e, r, n) {
                        if (t = +t, e |= 0, !n) {
                            var o = Math.pow(2, 8 * r - 1);
                            L(this, t, e, r, o - 1, -o);
                        }
                        var i = 0, s = 1, a = 0;
                        for (this[e] = 255 & t; ++i < r && (s *= 256); ) {
                            t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1), this[e + i] = (t / s >> 0) - a & 255;
                        }
                        return e + r;
                    }, c.prototype.writeIntBE = function(t, e, r, n) {
                        if (t = +t, e |= 0, !n) {
                            var o = Math.pow(2, 8 * r - 1);
                            L(this, t, e, r, o - 1, -o);
                        }
                        var i = r - 1, s = 1, a = 0;
                        for (this[e + i] = 255 & t; --i >= 0 && (s *= 256); ) {
                            t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1), this[e + i] = (t / s >> 0) - a & 255;
                        }
                        return e + r;
                    }, c.prototype.writeInt8 = function(t, e, r) {
                        return t = +t, e |= 0, r || L(this, t, e, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 
                        t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
                    }, c.prototype.writeInt16LE = function(t, e, r) {
                        return t = +t, e |= 0, r || L(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, 
                        this[e + 1] = t >>> 8) : N(this, t, e, !0), e + 2;
                    }, c.prototype.writeInt16BE = function(t, e, r) {
                        return t = +t, e |= 0, r || L(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, 
                        this[e + 1] = 255 & t) : N(this, t, e, !1), e + 2;
                    }, c.prototype.writeInt32LE = function(t, e, r) {
                        return t = +t, e |= 0, r || L(this, t, e, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, 
                        this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : U(this, t, e, !0), 
                        e + 4;
                    }, c.prototype.writeInt32BE = function(t, e, r) {
                        return t = +t, e |= 0, r || L(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), 
                        c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, 
                        this[e + 3] = 255 & t) : U(this, t, e, !1), e + 4;
                    }, c.prototype.writeFloatLE = function(t, e, r) {
                        return j(this, t, e, !0, r);
                    }, c.prototype.writeFloatBE = function(t, e, r) {
                        return j(this, t, e, !1, r);
                    }, c.prototype.writeDoubleLE = function(t, e, r) {
                        return M(this, t, e, !0, r);
                    }, c.prototype.writeDoubleBE = function(t, e, r) {
                        return M(this, t, e, !1, r);
                    }, c.prototype.copy = function(t, e, r, n) {
                        if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), 
                        e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
                        if (0 === t.length || 0 === this.length) return 0;
                        if (e < 0) throw new RangeError("targetStart out of bounds");
                        if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
                        if (n < 0) throw new RangeError("sourceEnd out of bounds");
                        n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                        var o, i = n - r;
                        if (this === t && r < e && e < n) for (o = i - 1; o >= 0; --o) {
                            t[o + e] = this[o + r];
                        } else if (i < 1e3 || !c.TYPED_ARRAY_SUPPORT) for (o = 0; o < i; ++o) {
                            t[o + e] = this[o + r];
                        } else Uint8Array.prototype.set.call(t, this.subarray(r, r + i), e);
                        return i;
                    }, c.prototype.fill = function(t, e, r, n) {
                        if ("string" == typeof t) {
                            if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, 
                            r = this.length), 1 === t.length) {
                                var o = t.charCodeAt(0);
                                o < 256 && (t = o);
                            }
                            if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                            if ("string" == typeof n && !c.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                        } else "number" == typeof t && (t &= 255);
                        if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
                        if (r <= e) return this;
                        var i;
                        if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t) for (i = e; i < r; ++i) {
                            this[i] = t;
                        } else {
                            var s = c.isBuffer(t) ? t : q(new c(t, n).toString()), a = s.length;
                            for (i = 0; i < r - e; ++i) {
                                this[i + e] = s[i % a];
                            }
                        }
                        return this;
                    };
                    var D = /[^+\/0-9A-Za-z-_]/g;
                    function Y(t) {
                        return t < 16 ? "0" + t.toString(16) : t.toString(16);
                    }
                    function q(t, e) {
                        var r;
                        e = e || 1 / 0;
                        for (var n = t.length, o = null, i = [], s = 0; s < n; ++s) {
                            if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
                                if (!o) {
                                    if (r > 56319) {
                                        (e -= 3) > -1 && i.push(239, 191, 189);
                                        continue;
                                    }
                                    if (s + 1 === n) {
                                        (e -= 3) > -1 && i.push(239, 191, 189);
                                        continue;
                                    }
                                    o = r;
                                    continue;
                                }
                                if (r < 56320) {
                                    (e -= 3) > -1 && i.push(239, 191, 189), o = r;
                                    continue;
                                }
                                r = 65536 + (o - 55296 << 10 | r - 56320);
                            } else o && (e -= 3) > -1 && i.push(239, 191, 189);
                            if (o = null, r < 128) {
                                if ((e -= 1) < 0) break;
                                i.push(r);
                            } else if (r < 2048) {
                                if ((e -= 2) < 0) break;
                                i.push(r >> 6 | 192, 63 & r | 128);
                            } else if (r < 65536) {
                                if ((e -= 3) < 0) break;
                                i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
                            } else {
                                if (!(r < 1114112)) throw new Error("Invalid code point");
                                if ((e -= 4) < 0) break;
                                i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
                            }
                        }
                        return i;
                    }
                    function F(t) {
                        return n.toByteArray(function(t) {
                            if ((t = function(t) {
                                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
                            }(t).replace(D, "")).length < 2) return "";
                            for (;t.length % 4 != 0; ) {
                                t += "=";
                            }
                            return t;
                        }(t));
                    }
                    function z(t, e, r, n) {
                        for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o) {
                            e[o + r] = t[o];
                        }
                        return o;
                    }
                }).call(this, r(4));
            }, function(t, e, r) {
                var n = r(25), o = r(15), i = r(1), s = r(3), a = r(16), c = r(17), u = r(0)("socket.io-client:manager"), h = r(14), f = r(41), p = Object.prototype.hasOwnProperty;
                function l(t, e) {
                    if (!(this instanceof l)) return new l(t, e);
                    t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (e = t, 
                    t = void 0), (e = e || {}).path = e.path || "/socket.io", this.nsps = {}, this.subs = [], 
                    this.opts = e, this.reconnection(!1 !== e.reconnection), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), 
                    this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), 
                    this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new f({
                        min: this.reconnectionDelay(),
                        max: this.reconnectionDelayMax(),
                        jitter: this.randomizationFactor()
                    }), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", 
                    this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
                    var r = e.parser || s;
                    this.encoder = new r.Encoder(), this.decoder = new r.Decoder(), this.autoConnect = !1 !== e.autoConnect, 
                    this.autoConnect && this.open();
                }
                t.exports = l, l.prototype.emitAll = function() {
                    for (var t in this.emit.apply(this, arguments), this.nsps) {
                        p.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments);
                    }
                }, l.prototype.updateSocketIds = function() {
                    for (var t in this.nsps) {
                        p.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t));
                    }
                }, l.prototype.generateId = function(t) {
                    return ("/" === t ? "" : t + "#") + this.engine.id;
                }, i(l.prototype), l.prototype.reconnection = function(t) {
                    return arguments.length ? (this._reconnection = !!t, this) : this._reconnection;
                }, l.prototype.reconnectionAttempts = function(t) {
                    return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts;
                }, l.prototype.reconnectionDelay = function(t) {
                    return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), 
                    this) : this._reconnectionDelay;
                }, l.prototype.randomizationFactor = function(t) {
                    return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), 
                    this) : this._randomizationFactor;
                }, l.prototype.reconnectionDelayMax = function(t) {
                    return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), 
                    this) : this._reconnectionDelayMax;
                }, l.prototype.timeout = function(t) {
                    return arguments.length ? (this._timeout = t, this) : this._timeout;
                }, l.prototype.maybeReconnectOnOpen = function() {
                    !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
                }, l.prototype.open = l.prototype.connect = function(t, e) {
                    if (u("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
                    u("opening %s", this.uri), this.engine = n(this.uri, this.opts);
                    var r = this.engine, o = this;
                    this.readyState = "opening", this.skipReconnect = !1;
                    var i = a(r, "open", function() {
                        o.onopen(), t && t();
                    }), s = a(r, "error", function(e) {
                        if (u("connect_error"), o.cleanup(), o.readyState = "closed", o.emitAll("connect_error", e), 
                        t) {
                            var r = new Error("Connection error");
                            r.data = e, t(r);
                        } else o.maybeReconnectOnOpen();
                    });
                    if (!1 !== this._timeout) {
                        var c = this._timeout;
                        u("connect attempt will timeout after %d", c);
                        var h = setTimeout(function() {
                            u("connect attempt timed out after %d", c), i.destroy(), r.close(), r.emit("error", "timeout"), 
                            o.emitAll("connect_timeout", c);
                        }, c);
                        this.subs.push({
                            destroy: function destroy() {
                                clearTimeout(h);
                            }
                        });
                    }
                    return this.subs.push(i), this.subs.push(s), this;
                }, l.prototype.onopen = function() {
                    u("open"), this.cleanup(), this.readyState = "open", this.emit("open");
                    var t = this.engine;
                    this.subs.push(a(t, "data", c(this, "ondata"))), this.subs.push(a(t, "ping", c(this, "onping"))), 
                    this.subs.push(a(t, "pong", c(this, "onpong"))), this.subs.push(a(t, "error", c(this, "onerror"))), 
                    this.subs.push(a(t, "close", c(this, "onclose"))), this.subs.push(a(this.decoder, "decoded", c(this, "ondecoded")));
                }, l.prototype.onping = function() {
                    this.lastPing = new Date(), this.emitAll("ping");
                }, l.prototype.onpong = function() {
                    this.emitAll("pong", new Date() - this.lastPing);
                }, l.prototype.ondata = function(t) {
                    this.decoder.add(t);
                }, l.prototype.ondecoded = function(t) {
                    this.emit("packet", t);
                }, l.prototype.onerror = function(t) {
                    u("error", t), this.emitAll("error", t);
                }, l.prototype.socket = function(t, e) {
                    var r = this.nsps[t];
                    if (!r) {
                        r = new o(this, t, e), this.nsps[t] = r;
                        var n = this;
                        r.on("connecting", i), r.on("connect", function() {
                            r.id = n.generateId(t);
                        }), this.autoConnect && i();
                    }
                    function i() {
                        ~h(n.connecting, r) || n.connecting.push(r);
                    }
                    return r;
                }, l.prototype.destroy = function(t) {
                    var e = h(this.connecting, t);
                    ~e && this.connecting.splice(e, 1), this.connecting.length || this.close();
                }, l.prototype.packet = function(t) {
                    u("writing packet %j", t);
                    var e = this;
                    t.query && 0 === t.type && (t.nsp += "?" + t.query), e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, 
                    this.encoder.encode(t, function(r) {
                        for (var n = 0; n < r.length; n++) {
                            e.engine.write(r[n], t.options);
                        }
                        e.encoding = !1, e.processPacketQueue();
                    }));
                }, l.prototype.processPacketQueue = function() {
                    if (this.packetBuffer.length > 0 && !this.encoding) {
                        var t = this.packetBuffer.shift();
                        this.packet(t);
                    }
                }, l.prototype.cleanup = function() {
                    u("cleanup");
                    for (var t = this.subs.length, e = 0; e < t; e++) {
                        this.subs.shift().destroy();
                    }
                    this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy();
                }, l.prototype.close = l.prototype.disconnect = function() {
                    u("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), 
                    this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close();
                }, l.prototype.onclose = function(t) {
                    u("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", 
                    this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect();
                }, l.prototype.reconnect = function() {
                    if (this.reconnecting || this.skipReconnect) return this;
                    var t = this;
                    if (this.backoff.attempts >= this._reconnectionAttempts) u("reconnect failed"), 
                    this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1; else {
                        var e = this.backoff.duration();
                        u("will wait %dms before reconnect attempt", e), this.reconnecting = !0;
                        var r = setTimeout(function() {
                            t.skipReconnect || (u("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), 
                            t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open(function(e) {
                                e ? (u("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (u("reconnect success"), 
                                t.onreconnect());
                            }));
                        }, e);
                        this.subs.push({
                            destroy: function destroy() {
                                clearTimeout(r);
                            }
                        });
                    }
                }, l.prototype.onreconnect = function() {
                    var t = this.backoff.attempts;
                    this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t);
                };
            }, function(t, e, r) {
                var n = r(27);
                e.websocket = n;
            }, function(t, e, r) {
                var n = r(2), o = r(1);
                function i(t) {
                    this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, 
                    this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, 
                    this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, 
                    this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, 
                    this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, 
                    this.forceNode = t.forceNode, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress;
                }
                t.exports = i, o(i.prototype), i.prototype.onError = function(t, e) {
                    var r = new Error(t);
                    return r.type = "TransportError", r.description = e, this.emit("error", r), this;
                }, i.prototype.open = function() {
                    return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", 
                    this.doOpen()), this;
                }, i.prototype.close = function() {
                    return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), 
                    this.onClose()), this;
                }, i.prototype.send = function(t) {
                    if ("open" !== this.readyState) throw new Error("Transport not open");
                    this.write(t);
                }, i.prototype.onOpen = function() {
                    this.readyState = "open", this.writable = !0, this.emit("open");
                }, i.prototype.onData = function(t) {
                    var e = n.decodePacket(t, this.socket.binaryType);
                    this.onPacket(e);
                }, i.prototype.onPacket = function(t) {
                    this.emit("packet", t);
                }, i.prototype.onClose = function() {
                    this.readyState = "closed", this.emit("close");
                };
            }, function(t, e, r) {
                (function(e) {
                    var n = r(29), o = Object.prototype.toString, i = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === o.call(Blob), s = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === o.call(File);
                    t.exports = function t(r) {
                        if (!r || "object" != (typeof r === "undefined" ? "undefined" : _typeof(r))) return !1;
                        if (n(r)) {
                            for (var o = 0, a = r.length; o < a; o++) {
                                if (t(r[o])) return !0;
                            }
                            return !1;
                        }
                        if ("function" == typeof e && e.isBuffer && e.isBuffer(r) || "function" == typeof ArrayBuffer && r instanceof ArrayBuffer || i && r instanceof Blob || s && r instanceof File) return !0;
                        if (r.toJSON && "function" == typeof r.toJSON && 1 === arguments.length) return t(r.toJSON(), !0);
                        for (var c in r) {
                            if (Object.prototype.hasOwnProperty.call(r, c) && t(r[c])) return !0;
                        }
                        return !1;
                    };
                }).call(this, r(9).Buffer);
            }, function(t, e) {
                var r = [].indexOf;
                t.exports = function(t, e) {
                    if (r) return t.indexOf(e);
                    for (var n = 0; n < t.length; ++n) {
                        if (t[n] === e) return n;
                    }
                    return -1;
                };
            }, function(t, e, r) {
                var n = r(3), o = r(1), i = r(40), s = r(16), a = r(17), c = r(0)("socket.io-client:socket"), u = r(5), h = r(13);
                t.exports = l;
                var f = {
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
                }, p = o.prototype.emit;
                function l(t, e, r) {
                    this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], 
                    this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, 
                    r && r.query && (this.query = r.query), this.io.autoConnect && this.open();
                }
                o(l.prototype), l.prototype.subEvents = function() {
                    if (!this.subs) {
                        var t = this.io;
                        this.subs = [ s(t, "open", a(this, "onopen")), s(t, "packet", a(this, "onpacket")), s(t, "close", a(this, "onclose")) ];
                    }
                }, l.prototype.open = l.prototype.connect = function() {
                    return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), 
                    this.emit("connecting"), this);
                }, l.prototype.send = function() {
                    var t = i(arguments);
                    return t.unshift("message"), this.emit.apply(this, t), this;
                }, l.prototype.emit = function(t) {
                    if (f.hasOwnProperty(t)) return p.apply(this, arguments), this;
                    var e = i(arguments), r = {
                        type: (void 0 !== this.flags.binary ? this.flags.binary : h(e)) ? n.BINARY_EVENT : n.EVENT,
                        data: e,
                        options: {}
                    };
                    return r.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (c("emitting packet with ack id %d", this.ids), 
                    this.acks[this.ids] = e.pop(), r.id = this.ids++), this.connected ? this.packet(r) : this.sendBuffer.push(r), 
                    this.flags = {}, this;
                }, l.prototype.packet = function(t) {
                    t.nsp = this.nsp, this.io.packet(t);
                }, l.prototype.onopen = function() {
                    if (c("transport is open - connecting"), "/" !== this.nsp) if (this.query) {
                        var t = "object" == _typeof(this.query) ? u.encode(this.query) : this.query;
                        c("sending connect packet with query %s", t), this.packet({
                            type: n.CONNECT,
                            query: t
                        });
                    } else this.packet({
                        type: n.CONNECT
                    });
                }, l.prototype.onclose = function(t) {
                    c("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, 
                    this.emit("disconnect", t);
                }, l.prototype.onpacket = function(t) {
                    var e = t.nsp === this.nsp, r = t.type === n.ERROR && "/" === t.nsp;
                    if (e || r) switch (t.type) {
                      case n.CONNECT:
                        this.onconnect();
                        break;

                      case n.EVENT:
                      case n.BINARY_EVENT:
                        this.onevent(t);
                        break;

                      case n.ACK:
                      case n.BINARY_ACK:
                        this.onack(t);
                        break;

                      case n.DISCONNECT:
                        this.ondisconnect();
                        break;

                      case n.ERROR:
                        this.emit("error", t.data);
                    }
                }, l.prototype.onevent = function(t) {
                    var e = t.data || [];
                    c("emitting event %j", e), null != t.id && (c("attaching ack callback to event"), 
                    e.push(this.ack(t.id))), this.connected ? p.apply(this, e) : this.receiveBuffer.push(e);
                }, l.prototype.ack = function(t) {
                    var e = this, r = !1;
                    return function() {
                        if (!r) {
                            r = !0;
                            var o = i(arguments);
                            c("sending ack %j", o), e.packet({
                                type: h(o) ? n.BINARY_ACK : n.ACK,
                                id: t,
                                data: o
                            });
                        }
                    };
                }, l.prototype.onack = function(t) {
                    var e = this.acks[t.id];
                    "function" == typeof e ? (c("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), 
                    delete this.acks[t.id]) : c("bad ack %s", t.id);
                }, l.prototype.onconnect = function() {
                    this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered();
                }, l.prototype.emitBuffered = function() {
                    var t;
                    for (t = 0; t < this.receiveBuffer.length; t++) {
                        p.apply(this, this.receiveBuffer[t]);
                    }
                    for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) {
                        this.packet(this.sendBuffer[t]);
                    }
                    this.sendBuffer = [];
                }, l.prototype.ondisconnect = function() {
                    c("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect");
                }, l.prototype.destroy = function() {
                    if (this.subs) {
                        for (var t = 0; t < this.subs.length; t++) {
                            this.subs[t].destroy();
                        }
                        this.subs = null;
                    }
                    this.io.destroy(this);
                }, l.prototype.close = l.prototype.disconnect = function() {
                    return this.connected && (c("performing disconnect (%s)", this.nsp), this.packet({
                        type: n.DISCONNECT
                    })), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
                }, l.prototype.compress = function(t) {
                    return this.flags.compress = t, this;
                }, l.prototype.binary = function(t) {
                    return this.flags.binary = t, this;
                };
            }, function(t, e) {
                t.exports = function(t, e, r) {
                    return t.on(e, r), {
                        destroy: function destroy() {
                            t.removeListener(e, r);
                        }
                    };
                };
            }, function(t, e) {
                var r = [].slice;
                t.exports = function(t, e) {
                    if ("string" == typeof e && (e = t[e]), "function" != typeof e) throw new Error("bind() requires a function");
                    var n = r.call(arguments, 2);
                    return function() {
                        return e.apply(t, n.concat(r.call(arguments)));
                    };
                };
            }, function(t, e, r) {
                t.exports = r(19);
            }, function(t, e, r) {
                var n = r(20), o = r(3), i = r(10), s = r(0)("socket.io-client");
                t.exports = e = c;
                var a = e.managers = {};
                function c(t, e) {
                    "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (e = t, t = void 0), 
                    e = e || {};
                    var r, o = n(t), c = o.source, u = o.id, h = o.path, f = a[u] && h in a[u].nsps;
                    return e.forceNew || e["force new connection"] || !1 === e.multiplex || f ? (s("ignoring socket cache for %s", c), 
                    r = i(c, e)) : (a[u] || (s("new io instance for %s", c), a[u] = i(c, e)), r = a[u]), 
                    o.query && !e.query && (e.query = o.query), r.socket(o.path, e);
                }
                e.protocol = o.protocol, e.connect = c, e.Manager = r(10), e.Socket = r(15);
            }, function(t, e, r) {
                var n = r(6), o = r(0)("socket.io-client:url");
                t.exports = function(t, e) {
                    var r = t;
                    e = e || "undefined" != typeof location && location, null == t && (t = e.protocol + "//" + e.host);
                    "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t), 
                    /^(https?|wss?):\/\//.test(t) || (o("protocol-less url %s", t), t = void 0 !== e ? e.protocol + "//" + t : "https://" + t), 
                    o("parse %s", t), r = n(t));
                    r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443"));
                    r.path = r.path || "/";
                    var i = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
                    return r.id = r.protocol + "://" + i + ":" + r.port, r.href = r.protocol + "://" + i + (e && e.port === r.port ? "" : ":" + r.port), 
                    r;
                };
            }, function(t, e, r) {
                var n = r(7), o = r(8), i = Object.prototype.toString, s = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === i.call(Blob), a = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === i.call(File);
                e.deconstructPacket = function(t) {
                    var e = [], r = t.data, i = t;
                    return i.data = function t(e, r) {
                        if (!e) return e;
                        if (o(e)) {
                            var i = {
                                _placeholder: !0,
                                num: r.length
                            };
                            return r.push(e), i;
                        }
                        if (n(e)) {
                            for (var s = new Array(e.length), a = 0; a < e.length; a++) {
                                s[a] = t(e[a], r);
                            }
                            return s;
                        }
                        if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && !(e instanceof Date)) {
                            s = {};
                            for (var c in e) {
                                s[c] = t(e[c], r);
                            }
                            return s;
                        }
                        return e;
                    }(r, e), i.attachments = e.length, {
                        packet: i,
                        buffers: e
                    };
                }, e.reconstructPacket = function(t, e) {
                    return t.data = function t(e, r) {
                        if (!e) return e;
                        if (e && e._placeholder) return r[e.num];
                        if (n(e)) for (var o = 0; o < e.length; o++) {
                            e[o] = t(e[o], r);
                        } else if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) for (var i in e) {
                            e[i] = t(e[i], r);
                        }
                        return e;
                    }(t.data, e), t.attachments = void 0, t;
                }, e.removeBlobs = function(t, e) {
                    var r = 0, i = t;
                    !function t(c, u, h) {
                        if (!c) return c;
                        if (s && c instanceof Blob || a && c instanceof File) {
                            r++;
                            var f = new FileReader();
                            f.onload = function() {
                                h ? h[u] = this.result : i = this.result, --r || e(i);
                            }, f.readAsArrayBuffer(c);
                        } else if (n(c)) for (var p = 0; p < c.length; p++) {
                            t(c[p], p, c);
                        } else if ("object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && !o(c)) for (var l in c) {
                            t(c[l], l, c);
                        }
                    }(i), r || e(i);
                };
            }, function(t, e, r) {
                "use strict";
                e.byteLength = function(t) {
                    var e = u(t), r = e[0], n = e[1];
                    return 3 * (r + n) / 4 - n;
                }, e.toByteArray = function(t) {
                    var e, r, n = u(t), s = n[0], a = n[1], c = new i(function(t, e, r) {
                        return 3 * (e + r) / 4 - r;
                    }(0, s, a)), h = 0, f = a > 0 ? s - 4 : s;
                    for (r = 0; r < f; r += 4) {
                        e = o[t.charCodeAt(r)] << 18 | o[t.charCodeAt(r + 1)] << 12 | o[t.charCodeAt(r + 2)] << 6 | o[t.charCodeAt(r + 3)], 
                        c[h++] = e >> 16 & 255, c[h++] = e >> 8 & 255, c[h++] = 255 & e;
                    }
                    2 === a && (e = o[t.charCodeAt(r)] << 2 | o[t.charCodeAt(r + 1)] >> 4, c[h++] = 255 & e);
                    1 === a && (e = o[t.charCodeAt(r)] << 10 | o[t.charCodeAt(r + 1)] << 4 | o[t.charCodeAt(r + 2)] >> 2, 
                    c[h++] = e >> 8 & 255, c[h++] = 255 & e);
                    return c;
                }, e.fromByteArray = function(t) {
                    for (var e, r = t.length, o = r % 3, i = [], s = 0, a = r - o; s < a; s += 16383) {
                        i.push(h(t, s, s + 16383 > a ? a : s + 16383));
                    }
                    1 === o ? (e = t[r - 1], i.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 === o && (e = (t[r - 2] << 8) + t[r - 1], 
                    i.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "="));
                    return i.join("");
                };
                for (var n = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, c = s.length; a < c; ++a) {
                    n[a] = s[a], o[s.charCodeAt(a)] = a;
                }
                function u(t) {
                    var e = t.length;
                    if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                    var r = t.indexOf("=");
                    return -1 === r && (r = e), [ r, r === e ? 0 : 4 - r % 4 ];
                }
                function h(t, e, r) {
                    for (var o, i, s = [], a = e; a < r; a += 3) {
                        o = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(n[(i = o) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);
                    }
                    return s.join("");
                }
                o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63;
            }, function(t, e) {
                e.read = function(t, e, r, n, o) {
                    var i, s, a = 8 * o - n - 1, c = (1 << a) - 1, u = c >> 1, h = -7, f = r ? o - 1 : 0, p = r ? -1 : 1, l = t[e + f];
                    for (f += p, i = l & (1 << -h) - 1, l >>= -h, h += a; h > 0; i = 256 * i + t[e + f], 
                    f += p, h -= 8) {}
                    for (s = i & (1 << -h) - 1, i >>= -h, h += n; h > 0; s = 256 * s + t[e + f], f += p, 
                    h -= 8) {}
                    if (0 === i) i = 1 - u; else {
                        if (i === c) return s ? NaN : 1 / 0 * (l ? -1 : 1);
                        s += Math.pow(2, n), i -= u;
                    }
                    return (l ? -1 : 1) * s * Math.pow(2, i - n);
                }, e.write = function(t, e, r, n, o, i) {
                    var s, a, c, u = 8 * i - o - 1, h = (1 << u) - 1, f = h >> 1, p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, l = n ? 0 : i - 1, d = n ? 1 : -1, y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = h) : (s = Math.floor(Math.log(e) / Math.LN2), 
                    e * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), (e += s + f >= 1 ? p / c : p * Math.pow(2, 1 - f)) * c >= 2 && (s++, 
                    c /= 2), s + f >= h ? (a = 0, s = h) : s + f >= 1 ? (a = (e * c - 1) * Math.pow(2, o), 
                    s += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, o), s = 0)); o >= 8; t[r + l] = 255 & a, 
                    l += d, a /= 256, o -= 8) {}
                    for (s = s << o | a, u += o; u > 0; t[r + l] = 255 & s, l += d, s /= 256, u -= 8) {}
                    t[r + l - d] |= 128 * y;
                };
            }, function(t, e) {
                var r = {}.toString;
                t.exports = Array.isArray || function(t) {
                    return "[object Array]" == r.call(t);
                };
            }, function(t, e, r) {
                t.exports = r(26), t.exports.parser = r(2);
            }, function(t, e, r) {
                (function(e) {
                    var n = r(11), o = r(1), i = r(0)("engine.io-client:socket"), s = r(14), a = r(2), c = r(6), u = r(5);
                    function h(t, r) {
                        if (!(this instanceof h)) return new h(t, r);
                        r = r || {}, t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (r = t, 
                        t = null), t ? (t = c(t), r.hostname = t.host, r.secure = "https" === t.protocol || "wss" === t.protocol, 
                        r.port = t.port, t.query && (r.query = t.query)) : r.host && (r.hostname = c(r.host).host), 
                        this.secure = null != r.secure ? r.secure : e.location && "https:" === location.protocol, 
                        r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.agent = r.agent || !1, 
                        this.hostname = r.hostname || (e.location ? location.hostname : "localhost"), this.port = r.port || (e.location && location.port ? location.port : this.secure ? 443 : 80), 
                        this.query = r.query || {}, "string" == typeof this.query && (this.query = u.decode(this.query)), 
                        this.upgrade = !1 !== r.upgrade, this.path = (r.path || "/engine.io").replace(/\/$/, "") + "/", 
                        this.forceJSONP = !!r.forceJSONP, this.jsonp = !1 !== r.jsonp, this.forceBase64 = !!r.forceBase64, 
                        this.enablesXDR = !!r.enablesXDR, this.timestampParam = r.timestampParam || "t", 
                        this.timestampRequests = r.timestampRequests, this.transports = r.transports || [ "websocket" ], 
                        this.transportOptions = r.transportOptions || {}, this.readyState = "", this.writeBuffer = [], 
                        this.prevBufferLen = 0, this.policyPort = r.policyPort || 843, this.rememberUpgrade = r.rememberUpgrade || !1, 
                        this.binaryType = null, this.onlyBinaryUpgrades = r.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== r.perMessageDeflate && (r.perMessageDeflate || {}), 
                        !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), 
                        this.pfx = r.pfx || null, this.key = r.key || null, this.passphrase = r.passphrase || null, 
                        this.cert = r.cert || null, this.ca = r.ca || null, this.ciphers = r.ciphers || null, 
                        this.rejectUnauthorized = void 0 === r.rejectUnauthorized || r.rejectUnauthorized, 
                        this.forceNode = !!r.forceNode;
                        var n = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e;
                        n.global === n && (r.extraHeaders && Object.keys(r.extraHeaders).length > 0 && (this.extraHeaders = r.extraHeaders), 
                        r.localAddress && (this.localAddress = r.localAddress)), this.id = null, this.upgrades = null, 
                        this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, 
                        this.pingTimeoutTimer = null, this.open();
                    }
                    t.exports = h, h.priorWebsocketSuccess = !1, o(h.prototype), h.protocol = a.protocol, 
                    h.Socket = h, h.Transport = r(12), h.transports = r(11), h.parser = r(2), h.prototype.createTransport = function(t) {
                        i('creating transport "%s"', t);
                        var e = function(t) {
                            var e = {};
                            for (var r in t) {
                                t.hasOwnProperty(r) && (e[r] = t[r]);
                            }
                            return e;
                        }(this.query);
                        e.EIO = a.protocol, e.transport = t;
                        var r = this.transportOptions[t] || {};
                        this.id && (e.sid = this.id);
                        var o = new n[t]({
                            query: e,
                            socket: this,
                            agent: r.agent || this.agent,
                            hostname: r.hostname || this.hostname,
                            port: r.port || this.port,
                            secure: r.secure || this.secure,
                            path: r.path || this.path,
                            forceJSONP: r.forceJSONP || this.forceJSONP,
                            jsonp: r.jsonp || this.jsonp,
                            forceBase64: r.forceBase64 || this.forceBase64,
                            enablesXDR: r.enablesXDR || this.enablesXDR,
                            timestampRequests: r.timestampRequests || this.timestampRequests,
                            timestampParam: r.timestampParam || this.timestampParam,
                            policyPort: r.policyPort || this.policyPort,
                            pfx: r.pfx || this.pfx,
                            key: r.key || this.key,
                            passphrase: r.passphrase || this.passphrase,
                            cert: r.cert || this.cert,
                            ca: r.ca || this.ca,
                            ciphers: r.ciphers || this.ciphers,
                            rejectUnauthorized: r.rejectUnauthorized || this.rejectUnauthorized,
                            perMessageDeflate: r.perMessageDeflate || this.perMessageDeflate,
                            extraHeaders: r.extraHeaders || this.extraHeaders,
                            forceNode: r.forceNode || this.forceNode,
                            localAddress: r.localAddress || this.localAddress,
                            requestTimeout: r.requestTimeout || this.requestTimeout,
                            protocols: r.protocols || void 0
                        });
                        return i("transport: ", o), o;
                    }, h.prototype.open = function() {
                        var t;
                        if (this.rememberUpgrade && h.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket"; else {
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
                    }, h.prototype.setTransport = function(t) {
                        i("setting transport %s", t.name);
                        var e = this;
                        this.transport && (i("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), 
                        this.transport = t, t.on("drain", function() {
                            e.onDrain();
                        }).on("packet", function(t) {
                            e.onPacket(t);
                        }).on("error", function(t) {
                            e.onError(t);
                        }).on("close", function() {
                            e.onClose("transport close");
                        });
                    }, h.prototype.probe = function(t) {
                        i('probing transport "%s"', t);
                        var e = this.createTransport(t, {
                            probe: 1
                        }), r = !1, n = this;
                        function o() {
                            if (n.onlyBinaryUpgrades) {
                                var o = !this.supportsBinary && n.transport.supportsBinary;
                                r = r || o;
                            }
                            r || (i('probe transport "%s" opened', t), e.send([ {
                                type: "ping",
                                data: "probe"
                            } ]), e.once("packet", function(o) {
                                if (!r) if ("pong" === o.type && "probe" === o.data) {
                                    if (i('probe transport "%s" pong', t), n.upgrading = !0, n.emit("upgrading", e), 
                                    !e) return;
                                    h.priorWebsocketSuccess = "websocket" === e.name, i('pausing current transport "%s"', n.transport.name), 
                                    n.transport.pause(function() {
                                        r || "closed" !== n.readyState && (i("changing transport and sending upgrade packet"), 
                                        p(), n.setTransport(e), e.send([ {
                                            type: "upgrade"
                                        } ]), n.emit("upgrade", e), e = null, n.upgrading = !1, n.flush());
                                    });
                                } else {
                                    i('probe transport "%s" failed', t);
                                    var s = new Error("probe error");
                                    s.transport = e.name, n.emit("upgradeError", s);
                                }
                            }));
                        }
                        function s() {
                            r || (r = !0, p(), e.close(), e = null);
                        }
                        function a(r) {
                            var o = new Error("probe error: " + r);
                            o.transport = e.name, s(), i('probe transport "%s" failed because of error: %s', t, r), 
                            n.emit("upgradeError", o);
                        }
                        function c() {
                            a("transport closed");
                        }
                        function u() {
                            a("socket closed");
                        }
                        function f(t) {
                            e && t.name !== e.name && (i('"%s" works - aborting "%s"', t.name, e.name), s());
                        }
                        function p() {
                            e.removeListener("open", o), e.removeListener("error", a), e.removeListener("close", c), 
                            n.removeListener("close", u), n.removeListener("upgrading", f);
                        }
                        h.priorWebsocketSuccess = !1, e.once("open", o), e.once("error", a), e.once("close", c), 
                        this.once("close", u), this.once("upgrading", f), e.open();
                    }, h.prototype.onOpen = function() {
                        if (i("socket open"), this.readyState = "open", h.priorWebsocketSuccess = "websocket" === this.transport.name, 
                        this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
                            i("starting upgrade probes");
                            for (var t = 0, e = this.upgrades.length; t < e; t++) {
                                this.probe(this.upgrades[t]);
                            }
                        }
                    }, h.prototype.onPacket = function(t) {
                        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (i('socket receive: type "%s", data "%s"', t.type, t.data), 
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
                        } else i('packet received with socket readyState "%s"', this.readyState);
                    }, h.prototype.onHandshake = function(t) {
                        this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), 
                        this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), 
                        "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), 
                        this.on("heartbeat", this.onHeartbeat));
                    }, h.prototype.onHeartbeat = function(t) {
                        clearTimeout(this.pingTimeoutTimer);
                        var e = this;
                        e.pingTimeoutTimer = setTimeout(function() {
                            "closed" !== e.readyState && e.onClose("ping timeout");
                        }, t || e.pingInterval + e.pingTimeout);
                    }, h.prototype.setPing = function() {
                        var t = this;
                        clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout(function() {
                            i("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), 
                            t.onHeartbeat(t.pingTimeout);
                        }, t.pingInterval);
                    }, h.prototype.ping = function() {
                        var t = this;
                        this.sendPacket("ping", function() {
                            t.emit("ping");
                        });
                    }, h.prototype.onDrain = function() {
                        this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
                    }, h.prototype.flush = function() {
                        "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (i("flushing %d packets in socket", this.writeBuffer.length), 
                        this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, 
                        this.emit("flush"));
                    }, h.prototype.write = h.prototype.send = function(t, e, r) {
                        return this.sendPacket("message", t, e, r), this;
                    }, h.prototype.sendPacket = function(t, e, r, n) {
                        if ("function" == typeof e && (n = e, e = void 0), "function" == typeof r && (n = r, 
                        r = null), "closing" !== this.readyState && "closed" !== this.readyState) {
                            (r = r || {}).compress = !1 !== r.compress;
                            var o = {
                                type: t,
                                data: e,
                                options: r
                            };
                            this.emit("packetCreate", o), this.writeBuffer.push(o), n && this.once("flush", n), 
                            this.flush();
                        }
                    }, h.prototype.close = function() {
                        if ("opening" === this.readyState || "open" === this.readyState) {
                            this.readyState = "closing";
                            var t = this;
                            this.writeBuffer.length ? this.once("drain", function() {
                                this.upgrading ? n() : e();
                            }) : this.upgrading ? n() : e();
                        }
                        function e() {
                            t.onClose("forced close"), i("socket closing - telling transport to close"), t.transport.close();
                        }
                        function r() {
                            t.removeListener("upgrade", r), t.removeListener("upgradeError", r), e();
                        }
                        function n() {
                            t.once("upgrade", r), t.once("upgradeError", r);
                        }
                        return this;
                    }, h.prototype.onError = function(t) {
                        i("socket error %j", t), h.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t);
                    }, h.prototype.onClose = function(t, e) {
                        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                            i('socket close with reason: "%s"', t);
                            clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), 
                            this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", 
                            this.id = null, this.emit("close", t, e), this.writeBuffer = [], this.prevBufferLen = 0;
                        }
                    }, h.prototype.filterUpgrades = function(t) {
                        for (var e = [], r = 0, n = t.length; r < n; r++) {
                            ~s(this.transports, t[r]) && e.push(t[r]);
                        }
                        return e;
                    };
                }).call(this, r(4));
            }, function(t, e, r) {
                (function(e) {
                    var n, o = r(12), i = r(2), s = r(5), a = r(35), c = r(36), u = r(0)("engine.io-client:websocket"), h = e.WebSocket || e.MozWebSocket;
                    if ("undefined" == typeof window) try {
                        n = r(37);
                    } catch (t) {
                        u("require error: ", t);
                    }
                    var f = h;
                    function p(t) {
                        t && t.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, 
                        this.usingBrowserWebSocket = h && !t.forceNode, this.protocols = t.protocols, this.usingBrowserWebSocket || (f = n), 
                        o.call(this, t);
                    }
                    f || "undefined" != typeof window || (f = n), t.exports = p, a(p, o), p.prototype.name = "websocket", 
                    p.prototype.supportsBinary = !0, p.prototype.doOpen = function() {
                        if (u("wesocket do open: ", this.protocols), this.check()) {
                            var t = this.uri(), e = this.protocols, r = {
                                agent: this.agent,
                                perMessageDeflate: this.perMessageDeflate
                            };
                            r.pfx = this.pfx, r.key = this.key, r.passphrase = this.passphrase, r.cert = this.cert, 
                            r.ca = this.ca, r.ciphers = this.ciphers, r.rejectUnauthorized = this.rejectUnauthorized, 
                            this.extraHeaders && (r.headers = this.extraHeaders), this.localAddress && (r.localAddress = this.localAddress);
                            try {
                                this.ws = this.usingBrowserWebSocket ? e ? new f(t, e) : new f(t) : new f(t, e, r);
                            } catch (t) {
                                return this.emit("error", t);
                            }
                            void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, 
                            this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();
                        }
                    }, p.prototype.addEventListeners = function() {
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
                    }, p.prototype.write = function(t) {
                        var e = this;
                        this.writable = !1;
                        for (var r, n = t.length, o = 0, s = n; o < s; o++) {
                            r = t[o], i.encodePacket(r, e.supportsBinary, function(t) {
                                try {
                                    e.ws.send(t);
                                } catch (t) {}
                                --n || a();
                            });
                        }
                        function a() {
                            e.emit("flush"), setTimeout(function() {
                                e.writable = !0, e.emit("drain");
                            }, 0);
                        }
                    }, p.prototype.onClose = function() {
                        o.prototype.onClose.call(this);
                    }, p.prototype.doClose = function() {
                        void 0 !== this.ws && this.ws.close();
                    }, p.prototype.uri = function() {
                        var t = this.query || {}, e = this.secure ? "wss" : "ws", r = "";
                        return this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (r = ":" + this.port), 
                        this.timestampRequests && (t[this.timestampParam] = c()), this.supportsBinary || (t.b64 = 1), 
                        (t = s.encode(t)).length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + r + this.path + t;
                    }, p.prototype.check = function() {
                        return !(!f || "__initialize" in f && this.name === p.prototype.name);
                    };
                }).call(this, r(4));
            }, function(t, e) {
                t.exports = Object.keys || function(t) {
                    var e = [], r = Object.prototype.hasOwnProperty;
                    for (var n in t) {
                        r.call(t, n) && e.push(n);
                    }
                    return e;
                };
            }, function(t, e) {
                var r = {}.toString;
                t.exports = Array.isArray || function(t) {
                    return "[object Array]" == r.call(t);
                };
            }, function(t, e) {
                t.exports = function(t, e, r) {
                    var n = t.byteLength;
                    if (e = e || 0, r = r || n, t.slice) return t.slice(e, r);
                    if (e < 0 && (e += n), r < 0 && (r += n), r > n && (r = n), e >= n || e >= r || 0 === n) return new ArrayBuffer(0);
                    for (var o = new Uint8Array(t), i = new Uint8Array(r - e), s = e, a = 0; s < r; s++, 
                    a++) {
                        i[a] = o[s];
                    }
                    return i.buffer;
                };
            }, function(t, e) {
                function r() {}
                t.exports = function(t, e, n) {
                    var o = !1;
                    return n = n || r, i.count = t, 0 === t ? e() : i;
                    function i(t, r) {
                        if (i.count <= 0) throw new Error("after called too many times");
                        --i.count, t ? (o = !0, e(t), e = n) : 0 !== i.count || o || e(null, r);
                    }
                };
            }, function(t, e) {
                /*! https://mths.be/utf8js v2.1.2 by @mathias */
                var r, n, o, i = String.fromCharCode;
                function s(t) {
                    for (var e, r, n = [], o = 0, i = t.length; o < i; ) {
                        (e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < i ? 56320 == (64512 & (r = t.charCodeAt(o++))) ? n.push(((1023 & e) << 10) + (1023 & r) + 65536) : (n.push(e), 
                        o--) : n.push(e);
                    }
                    return n;
                }
                function a(t, e) {
                    if (t >= 55296 && t <= 57343) {
                        if (e) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
                        return !1;
                    }
                    return !0;
                }
                function c(t, e) {
                    return i(t >> e & 63 | 128);
                }
                function u(t, e) {
                    if (0 == (4294967168 & t)) return i(t);
                    var r = "";
                    return 0 == (4294965248 & t) ? r = i(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (a(t, e) || (t = 65533), 
                    r = i(t >> 12 & 15 | 224), r += c(t, 6)) : 0 == (4292870144 & t) && (r = i(t >> 18 & 7 | 240), 
                    r += c(t, 12), r += c(t, 6)), r += i(63 & t | 128);
                }
                function h() {
                    if (o >= n) throw Error("Invalid byte index");
                    var t = 255 & r[o];
                    if (o++, 128 == (192 & t)) return 63 & t;
                    throw Error("Invalid continuation byte");
                }
                function f(t) {
                    var e, i;
                    if (o > n) throw Error("Invalid byte index");
                    if (o == n) return !1;
                    if (e = 255 & r[o], o++, 0 == (128 & e)) return e;
                    if (192 == (224 & e)) {
                        if ((i = (31 & e) << 6 | h()) >= 128) return i;
                        throw Error("Invalid continuation byte");
                    }
                    if (224 == (240 & e)) {
                        if ((i = (15 & e) << 12 | h() << 6 | h()) >= 2048) return a(i, t) ? i : 65533;
                        throw Error("Invalid continuation byte");
                    }
                    if (240 == (248 & e) && (i = (7 & e) << 18 | h() << 12 | h() << 6 | h()) >= 65536 && i <= 1114111) return i;
                    throw Error("Invalid UTF-8 detected");
                }
                t.exports = {
                    version: "2.1.2",
                    encode: function encode(t, e) {
                        for (var r = !1 !== (e = e || {}).strict, n = s(t), o = n.length, i = -1, a = ""; ++i < o; ) {
                            a += u(n[i], r);
                        }
                        return a;
                    },
                    decode: function decode(t, e) {
                        var a = !1 !== (e = e || {}).strict;
                        r = s(t), n = r.length, o = 0;
                        for (var c, u = []; !1 !== (c = f(a)); ) {
                            u.push(c);
                        }
                        return function(t) {
                            for (var e, r = t.length, n = -1, o = ""; ++n < r; ) {
                                (e = t[n]) > 65535 && (o += i((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), 
                                o += i(e);
                            }
                            return o;
                        }(u);
                    }
                };
            }, function(t, e) {
                !function() {
                    "use strict";
                    for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = new Uint8Array(256), n = 0; n < t.length; n++) {
                        r[t.charCodeAt(n)] = n;
                    }
                    e.encode = function(e) {
                        var r, n = new Uint8Array(e), o = n.length, i = "";
                        for (r = 0; r < o; r += 3) {
                            i += t[n[r] >> 2], i += t[(3 & n[r]) << 4 | n[r + 1] >> 4], i += t[(15 & n[r + 1]) << 2 | n[r + 2] >> 6], 
                            i += t[63 & n[r + 2]];
                        }
                        return o % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), 
                        i;
                    }, e.decode = function(t) {
                        var e, n, o, i, s, a = .75 * t.length, c = t.length, u = 0;
                        "=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);
                        var h = new ArrayBuffer(a), f = new Uint8Array(h);
                        for (e = 0; e < c; e += 4) {
                            n = r[t.charCodeAt(e)], o = r[t.charCodeAt(e + 1)], i = r[t.charCodeAt(e + 2)], 
                            s = r[t.charCodeAt(e + 3)], f[u++] = n << 2 | o >> 4, f[u++] = (15 & o) << 4 | i >> 2, 
                            f[u++] = (3 & i) << 6 | 63 & s;
                        }
                        return h;
                    };
                }();
            }, function(t, e) {
                var r = void 0 !== r ? r : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder, n = function() {
                    try {
                        return 2 === new Blob([ "hi" ]).size;
                    } catch (t) {
                        return !1;
                    }
                }(), o = n && function() {
                    try {
                        return 2 === new Blob([ new Uint8Array([ 1, 2 ]) ]).size;
                    } catch (t) {
                        return !1;
                    }
                }(), i = r && r.prototype.append && r.prototype.getBlob;
                function s(t) {
                    return t.map(function(t) {
                        if (t.buffer instanceof ArrayBuffer) {
                            var e = t.buffer;
                            if (t.byteLength !== e.byteLength) {
                                var r = new Uint8Array(t.byteLength);
                                r.set(new Uint8Array(e, t.byteOffset, t.byteLength)), e = r.buffer;
                            }
                            return e;
                        }
                        return t;
                    });
                }
                function a(t, e) {
                    e = e || {};
                    var n = new r();
                    return s(t).forEach(function(t) {
                        n.append(t);
                    }), e.type ? n.getBlob(e.type) : n.getBlob();
                }
                function c(t, e) {
                    return new Blob(s(t), e || {});
                }
                "undefined" != typeof Blob && (a.prototype = Blob.prototype, c.prototype = Blob.prototype), 
                t.exports = n ? o ? Blob : c : i ? a : void 0;
            }, function(t, e) {
                t.exports = function(t, e) {
                    var r = function r() {};
                    r.prototype = e.prototype, t.prototype = new r(), t.prototype.constructor = t;
                };
            }, function(t, e, r) {
                "use strict";
                var n, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), i = 64, s = {}, a = 0, c = 0;
                function u(t) {
                    var e = "";
                    do {
                        e = o[t % i] + e, t = Math.floor(t / i);
                    } while (t > 0);
                    return e;
                }
                function h() {
                    var t = u(+new Date());
                    return t !== n ? (a = 0, n = t) : t + "." + u(a++);
                }
                for (;c < i; c++) {
                    s[o[c]] = c;
                }
                h.encode = u, h.decode = function(t) {
                    var e = 0;
                    for (c = 0; c < t.length; c++) {
                        e = e * i + s[t.charAt(c)];
                    }
                    return e;
                }, t.exports = h;
            }, function(t, e, r) {
                var n = r(38), o = r(39), i = r(0)("weapp-socket:"), s = [ "CONNECTING", "OPEN", "CLOSING", "CLOSED" ];
                var a = /* */ function(_n) {
                    "use strict";
                    _inherits(a, _n);
                    var _super = _createSuper(a);
                    function a(t, e, r) {
                        var _this;
                        _classCallCheck(this, a);
                        _this = _super.call(this), _this.readyState = a.CONNECTING, _this.protocol = "", 
                        _this._socket = null, null !== t && (Array.isArray(e) ? e = e.join(", ") : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null !== e && (r = e, 
                        e = void 0), c.call(_assertThisInitialized(_this), t, e, r));
                        return _this;
                    }
                    _createClass(a, [ {
                        key: "addSocketEventListeners",
                        value: function addSocketEventListeners() {
                            var _this2 = this;
                            this._socket.onOpen(function() {
                                _this2.readyState = a.OPEN, _this2.onopen();
                            }), this._socket.onClose(function(t) {
                                i("onclose: ", t), _this2.readyState = a.CLOSED, _this2.onclose(t.code, t.reason);
                            }), this._socket.onError(function(t) {
                                i("onerror: ", t), _this2.onerror(t);
                            }), this._socket.onMessage(function(t) {
                                setTimeout(function() {
                                    _this2.onmessage(t);
                                }, 0);
                            });
                        }
                    }, {
                        key: "send",
                        value: function send(t) {
                            i("send data: ", t, this.readyState), this.readyState === a.OPEN && this._socket.send({
                                data: t
                            });
                        }
                    }, {
                        key: "close",
                        value: function close(t, e) {
                            i("close socket: ", t, e), this.readyState = a.CLOSING, this._socket.close({
                                code: t,
                                reason: e
                            });
                        }
                    }, {
                        key: "CONNECTING",
                        get: function get() {
                            return a.CONNECTING;
                        }
                    }, {
                        key: "CLOSING",
                        get: function get() {
                            return a.CLOSING;
                        }
                    }, {
                        key: "CLOSED",
                        get: function get() {
                            return a.CLOSED;
                        }
                    }, {
                        key: "OPEN",
                        get: function get() {
                            return a.OPEN;
                        }
                    } ]);
                    return a;
                }(n);
                function c(t, e, r) {
                    Object.assign(r, {
                        url: t,
                        header: {
                            "content-type": "application/json"
                        },
                        protocols: e,
                        method: "GET"
                    }), this._socket = function(t) {
                        t.success = function() {};
                        var e = uni.connectSocket(t);
                        if (i("socketTask: ", e), e) return e;
                        return {
                            onClose: uni.onSocketClose,
                            onOpen: uni.onSocketOpen,
                            onError: uni.onSocketError,
                            onMessage: uni.onSocketMessage,
                            send: uni.sendSocketMessage,
                            close: uni.closeSocket
                        };
                    }(r), this.addSocketEventListeners();
                }
                s.forEach(function(t, e) {
                    a[s[e]] = e;
                });
                [ "open", "error", "close", "message" ].forEach(function(t) {
                    Object.defineProperty(a.prototype, "on".concat(t), {
                        get: function get() {
                            var e = this.listeners(t);
                            for (var r = 0; r < e.length; r++) {
                                if (e[r]._listener) return e[r]._listener;
                            }
                        },
                        set: function set(e) {
                            var r = this.listeners(t);
                            for (var n = 0; n < r.length; n++) {
                                r[n]._listener && this.removeListener(t, r[n]);
                            }
                            this.addEventListener(t, e);
                        }
                    });
                }), a.prototype.addEventListener = o.addEventListener, a.prototype.removeEventListener = o.removeEventListener, 
                t.exports = a;
            }, function(t, e, r) {
                "use strict";
                var n, o = "object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) ? Reflect : null, i = o && "function" == typeof o.apply ? o.apply : function(t, e, r) {
                    return Function.prototype.apply.call(t, e, r);
                };
                n = o && "function" == typeof o.ownKeys ? o.ownKeys : Object.getOwnPropertySymbols ? function(t) {
                    return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
                } : function(t) {
                    return Object.getOwnPropertyNames(t);
                };
                var s = Number.isNaN || function(t) {
                    return t != t;
                };
                function a() {
                    a.init.call(this);
                }
                t.exports = a, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, 
                a.prototype._maxListeners = void 0;
                var c = 10;
                function u(t) {
                    return void 0 === t._maxListeners ? a.defaultMaxListeners : t._maxListeners;
                }
                function h(t, e, r, n) {
                    var o, i, s, a;
                    if ("function" != typeof r) throw new TypeError('The "listener" argument must be of type Function. Received type ' + (typeof r === "undefined" ? "undefined" : _typeof(r)));
                    if (void 0 === (i = t._events) ? (i = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== i.newListener && (t.emit("newListener", e, r.listener ? r.listener : r), 
                    i = t._events), s = i[e]), void 0 === s) s = i[e] = r, ++t._eventsCount; else if ("function" == typeof s ? s = i[e] = n ? [ r, s ] : [ s, r ] : n ? s.unshift(r) : s.push(r), 
                    (o = u(t)) > 0 && s.length > o && !s.warned) {
                        s.warned = !0;
                        var c = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                        c.name = "MaxListenersExceededWarning", c.emitter = t, c.type = e, c.count = s.length, 
                        a = c, console && console.warn && console.warn(a);
                    }
                    return t;
                }
                function f() {
                    for (var t = [], e = 0; e < arguments.length; e++) {
                        t.push(arguments[e]);
                    }
                    this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 
                    i(this.listener, this.target, t));
                }
                function p(t, e, r) {
                    var n = {
                        fired: !1,
                        wrapFn: void 0,
                        target: t,
                        type: e,
                        listener: r
                    }, o = f.bind(n);
                    return o.listener = r, n.wrapFn = o, o;
                }
                function l(t, e, r) {
                    var n = t._events;
                    if (void 0 === n) return [];
                    var o = n[e];
                    return void 0 === o ? [] : "function" == typeof o ? r ? [ o.listener || o ] : [ o ] : r ? function(t) {
                        for (var e = new Array(t.length), r = 0; r < e.length; ++r) {
                            e[r] = t[r].listener || t[r];
                        }
                        return e;
                    }(o) : y(o, o.length);
                }
                function d(t) {
                    var e = this._events;
                    if (void 0 !== e) {
                        var r = e[t];
                        if ("function" == typeof r) return 1;
                        if (void 0 !== r) return r.length;
                    }
                    return 0;
                }
                function y(t, e) {
                    for (var r = new Array(e), n = 0; n < e; ++n) {
                        r[n] = t[n];
                    }
                    return r;
                }
                Object.defineProperty(a, "defaultMaxListeners", {
                    enumerable: !0,
                    get: function get() {
                        return c;
                    },
                    set: function set(t) {
                        if ("number" != typeof t || t < 0 || s(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                        c = t;
                    }
                }), a.init = function() {
                    void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), 
                    this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
                }, a.prototype.setMaxListeners = function(t) {
                    if ("number" != typeof t || t < 0 || s(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
                    return this._maxListeners = t, this;
                }, a.prototype.getMaxListeners = function() {
                    return u(this);
                }, a.prototype.emit = function(t) {
                    for (var e = [], r = 1; r < arguments.length; r++) {
                        e.push(arguments[r]);
                    }
                    var n = "error" === t, o = this._events;
                    if (void 0 !== o) n = n && void 0 === o.error; else if (!n) return !1;
                    if (n) {
                        var s;
                        if (e.length > 0 && (s = e[0]), s instanceof Error) throw s;
                        var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                        throw a.context = s, a;
                    }
                    var c = o[t];
                    if (void 0 === c) return !1;
                    if ("function" == typeof c) i(c, this, e); else {
                        var u = c.length, h = y(c, u);
                        for (r = 0; r < u; ++r) {
                            i(h[r], this, e);
                        }
                    }
                    return !0;
                }, a.prototype.addListener = function(t, e) {
                    return h(this, t, e, !1);
                }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function(t, e) {
                    return h(this, t, e, !0);
                }, a.prototype.once = function(t, e) {
                    if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + (typeof e === "undefined" ? "undefined" : _typeof(e)));
                    return this.on(t, p(this, t, e)), this;
                }, a.prototype.prependOnceListener = function(t, e) {
                    if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + (typeof e === "undefined" ? "undefined" : _typeof(e)));
                    return this.prependListener(t, p(this, t, e)), this;
                }, a.prototype.removeListener = function(t, e) {
                    var r, n, o, i, s;
                    if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + (typeof e === "undefined" ? "undefined" : _typeof(e)));
                    if (void 0 === (n = this._events)) return this;
                    if (void 0 === (r = n[t])) return this;
                    if (r === e || r.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[t], 
                    n.removeListener && this.emit("removeListener", t, r.listener || e)); else if ("function" != typeof r) {
                        for (o = -1, i = r.length - 1; i >= 0; i--) {
                            if (r[i] === e || r[i].listener === e) {
                                s = r[i].listener, o = i;
                                break;
                            }
                        }
                        if (o < 0) return this;
                        0 === o ? r.shift() : function(t, e) {
                            for (;e + 1 < t.length; e++) {
                                t[e] = t[e + 1];
                            }
                            t.pop();
                        }(r, o), 1 === r.length && (n[t] = r[0]), void 0 !== n.removeListener && this.emit("removeListener", t, s || e);
                    }
                    return this;
                }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function(t) {
                    var e, r, n;
                    if (void 0 === (r = this._events)) return this;
                    if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), 
                    this._eventsCount = 0) : void 0 !== r[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[t]), 
                    this;
                    if (0 === arguments.length) {
                        var o, i = Object.keys(r);
                        for (n = 0; n < i.length; ++n) {
                            "removeListener" !== (o = i[n]) && this.removeAllListeners(o);
                        }
                        return this.removeAllListeners("removeListener"), this._events = Object.create(null), 
                        this._eventsCount = 0, this;
                    }
                    if ("function" == typeof (e = r[t])) this.removeListener(t, e); else if (void 0 !== e) for (n = e.length - 1; n >= 0; n--) {
                        this.removeListener(t, e[n]);
                    }
                    return this;
                }, a.prototype.listeners = function(t) {
                    return l(this, t, !0);
                }, a.prototype.rawListeners = function(t) {
                    return l(this, t, !1);
                }, a.listenerCount = function(t, e) {
                    return "function" == typeof t.listenerCount ? t.listenerCount(e) : d.call(t, e);
                }, a.prototype.listenerCount = d, a.prototype.eventNames = function() {
                    return this._eventsCount > 0 ? n(this._events) : [];
                };
            }, function(t, e, r) {
                "use strict";
                var n = function n(t, e) {
                    _classCallCheck(this, n);
                    this.target = e, this.type = t;
                };
                var o = /* */ function(_n2) {
                    _inherits(o, _n2);
                    var _super2 = _createSuper(o);
                    function o(t, e) {
                        var _this3;
                        _classCallCheck(this, o);
                        _this3 = _super2.call(this, "message", e), _this3.data = t;
                        return _this3;
                    }
                    return o;
                }(n);
                var i = /* */ function(_n3) {
                    _inherits(i, _n3);
                    var _super3 = _createSuper(i);
                    function i(t, e, r) {
                        var _this4;
                        _classCallCheck(this, i);
                        _this4 = _super3.call(this, "close", r), _this4.wasClean = r._closeFrameReceived && r._closeFrameSent, 
                        _this4.reason = e, _this4.code = t;
                        return _this4;
                    }
                    return i;
                }(n);
                var s = /* */ function(_n4) {
                    _inherits(s, _n4);
                    var _super4 = _createSuper(s);
                    function s(t) {
                        _classCallCheck(this, s);
                        return _super4.call(this, "open", t);
                    }
                    return s;
                }(n);
                var a = /* */ function(_n5) {
                    _inherits(a, _n5);
                    var _super5 = _createSuper(a);
                    function a(t, e) {
                        var _this5;
                        _classCallCheck(this, a);
                        _this5 = _super5.call(this, "error", e), _this5.message = t.message, _this5.error = t;
                        return _this5;
                    }
                    return a;
                }(n);
                var c = {
                    addEventListener: function addEventListener(t, e) {
                        function r(t) {
                            e.call(this, new o(t, this));
                        }
                        function n(t, r) {
                            e.call(this, new i(t, r, this));
                        }
                        function c(t) {
                            e.call(this, new a(t, this));
                        }
                        function u() {
                            e.call(this, new s(this));
                        }
                        "function" == typeof e && ("message" === t ? (r._listener = e, this.on(t, r)) : "close" === t ? (n._listener = e, 
                        this.on(t, n)) : "error" === t ? (c._listener = e, this.on(t, c)) : "open" === t ? (u._listener = e, 
                        this.on(t, u)) : this.on(t, e));
                    },
                    removeEventListener: function removeEventListener(t, e) {
                        var r = this.listeners(t);
                        for (var n = 0; n < r.length; n++) {
                            r[n] !== e && r[n]._listener !== e || this.removeListener(t, r[n]);
                        }
                    }
                };
                t.exports = c;
            }, function(t, e) {
                t.exports = function(t, e) {
                    for (var r = [], n = (e = e || 0) || 0; n < t.length; n++) {
                        r[n - e] = t[n];
                    }
                    return r;
                };
            }, function(t, e) {
                function r(t) {
                    t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, 
                    this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
                }
                t.exports = r, r.prototype.duration = function() {
                    var t = this.ms * Math.pow(this.factor, this.attempts++);
                    if (this.jitter) {
                        var e = Math.random(), r = Math.floor(e * this.jitter * t);
                        t = 0 == (1 & Math.floor(10 * e)) ? t - r : t + r;
                    }
                    return 0 | Math.min(t, this.max);
                }, r.prototype.reset = function() {
                    this.attempts = 0;
                }, r.prototype.setMin = function(t) {
                    this.ms = t;
                }, r.prototype.setMax = function(t) {
                    this.max = t;
                }, r.prototype.setJitter = function(t) {
                    this.jitter = t;
                };
            } ]);
        });
        /* WEBPACK VAR INJECTION */    }).call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]);
    /***/}, 
/* 9 */
/*!***************************************************************!*\
  !*** /Users/mike/Desktop/works/answers_uniapp/commons/api.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.API_QUANZI_MEMBERS = exports.API_QUANZI_UPDATENAME = exports.API_QUANZI_QUIT = exports.API_DANWEI_GONGGAO = exports.API_DANWEI_DETAIL = exports.API_QUANZI_DETAIL = exports.API_RANK_DANWEIMEMBER = exports.API_RANK_DANWEI = exports.API_RANK_QUANZI = exports.API_QUANZI_CREATE = exports.API_QUANZI_JOIN = exports.API_QUANZIS = exports.API_DANWEIS = exports.API_TEAM_UPDATENAME = exports.API_TEAM_SWITCHJOIN = exports.API_TEAM_MEMBERS = exports.API_TEAM_INFO = exports.API_TEAM_QUIT = exports.API_TEAM_JOIN = exports.API_TEAM_CREATE = exports.API_EXAMFRIEND_RECORDS = exports.API_EXAMFRIEND_ANSWERALL = exports.API_EXAMFRIEND_EXAMQUESTIONS = exports.API_EXAMFRIEND_SUBMITQUESTIONS = exports.API_EXAMFRIEND_GETQUESTIONS = exports.API_FINISHVIDEO = exports.API_GETVIDEOLIST = exports.API_RANK_TEAMBYMONTH = exports.API_RANK_TEAM = exports.API_RANKBYMONTH = exports.API_RANK = exports.API_USER_BEYOND = exports.API_USER_DETAIL = exports.API_PKRESULT = exports.API_UPDATEINFO = exports.API_PK_WAITFORPKUSER = exports.API_ANSWER_SUBMITALL = exports.API_WRONGQUESTION_SUBMIT = exports.API_UPDATEUSERINFO = exports.API_WRONGQUESTION_LIST = exports.API_GAME_START = exports.API_CHOOSE_USER = exports.API_WXLOGIN = exports.DEVSOCKETURL = exports.DEVAUDIOURL = exports.SOCKETURL = exports.AUDIOURL = exports.DEVURL = exports.PRODURL = exports.VERSION = exports.DEV = void 0;
    var DEV = "prod";
    // dev 测试 | prod 正式
        exports.DEV = DEV;
    var VERSION = "2.0.6";
    // 版本号
        exports.VERSION = VERSION;
    var PRODURL = "https://xds.guanhaihk.com";
    // 正式服请求地址
    // export const DEVURL = 'http://192.168.1.29:9510'; // 测试服请求地址
    // export const DEVURL = 'http://192.168.1.29:9501'; // 测试服请求地址
        exports.PRODURL = PRODURL;
    var DEVURL = "https://answerapi.lanzulive.com";
    // 测试服请求地址
    // 正式服
        exports.DEVURL = DEVURL;
    var AUDIOURL = "https://cos.guanhaihk.com/quiz/mp3/";
    // 音频地址前缀
        exports.AUDIOURL = AUDIOURL;
    var SOCKETURL = "wss://xds.guanhaihk.com/pk";
    // socket 正式
    // 测试服
        exports.SOCKETURL = SOCKETURL;
    var DEVAUDIOURL = "https://answerapi.lanzulive.com/mp3/";
    // 音频地址前缀
        exports.DEVAUDIOURL = DEVAUDIOURL;
    var DEVSOCKETURL = "wss://answerpk.lanzulive.com/pk";
    // socket
    // appId: 正式 wx6e24c691f9a50e44 | 测试 wxb35ef055a4dd8ad4
    /* 首页相关接口 */    exports.DEVSOCKETURL = DEVSOCKETURL;
    var API_WXLOGIN = "/api/wxlogin";
    // 首页登录
        exports.API_WXLOGIN = API_WXLOGIN;
    var API_CHOOSE_USER = "/api/game/choose_user";
    // 选择pk对象
        exports.API_CHOOSE_USER = API_CHOOSE_USER;
    var API_GAME_START = "/api/game/start";
    // 比赛开始
        exports.API_GAME_START = API_GAME_START;
    var API_WRONGQUESTION_LIST = "/api/wrongQuestion/list";
    // 错题本
        exports.API_WRONGQUESTION_LIST = API_WRONGQUESTION_LIST;
    var API_UPDATEUSERINFO = "/api/updateUserInfo";
    // 首页更新用户信息
        exports.API_UPDATEUSERINFO = API_UPDATEUSERINFO;
    var API_WRONGQUESTION_SUBMIT = "/api/wrongQuestion/submit";
    // 每题答题
        exports.API_WRONGQUESTION_SUBMIT = API_WRONGQUESTION_SUBMIT;
    var API_ANSWER_SUBMITALL = "/api/answer/submit_all";
    // 结果页提交对战情况
        exports.API_ANSWER_SUBMITALL = API_ANSWER_SUBMITALL;
    var API_PK_WAITFORPKUSER = "/api/waitForPkUser";
    // 好友对战
        exports.API_PK_WAITFORPKUSER = API_PK_WAITFORPKUSER;
    var API_UPDATEINFO = "/api/updateInfo";
    // 获取当前版本更新内容信息
        exports.API_UPDATEINFO = API_UPDATEINFO;
    var API_PKRESULT = "/api/pkResult";
    // 结算页获取对方信息
    /* 个人信息页相关接口 */    exports.API_PKRESULT = API_PKRESULT;
    var API_USER_DETAIL = "/api/user/detail";
    // 获取个人信息
        exports.API_USER_DETAIL = API_USER_DETAIL;
    var API_USER_BEYOND = "/api/user/beyond";
    // 获取用户超越了多少人（%）接口
    /* 排行页 */    exports.API_USER_BEYOND = API_USER_BEYOND;
    var API_RANK = "/api/rank";
    // 获取用户排行(总榜)
        exports.API_RANK = API_RANK;
    var API_RANKBYMONTH = "/api/rankByMonth";
    // 获取用户排行(月榜)
        exports.API_RANKBYMONTH = API_RANKBYMONTH;
    var API_RANK_TEAM = "/api/rank/team";
    // 团队总榜排行榜
        exports.API_RANK_TEAM = API_RANK_TEAM;
    var API_RANK_TEAMBYMONTH = "/api/rank/teamByMonth";
    // 团队月榜排行榜
    /* 视频相关 */    exports.API_RANK_TEAMBYMONTH = API_RANK_TEAMBYMONTH;
    var API_GETVIDEOLIST = "/api/getVideoList";
    // 获取视频链接列表接口
        exports.API_GETVIDEOLIST = API_GETVIDEOLIST;
    var API_FINISHVIDEO = "/api/finishVideo";
    // 看完视频增加用户经验接口
    /* 考朋友相关接口 */    exports.API_FINISHVIDEO = API_FINISHVIDEO;
    var API_EXAMFRIEND_GETQUESTIONS = "/api/exam_friend/get_questions";
    // 出题方获取考朋友50道题目
        exports.API_EXAMFRIEND_GETQUESTIONS = API_EXAMFRIEND_GETQUESTIONS;
    var API_EXAMFRIEND_SUBMITQUESTIONS = "/api/exam_friend/submit_questions";
    // 出题方提交题目列表
        exports.API_EXAMFRIEND_SUBMITQUESTIONS = API_EXAMFRIEND_SUBMITQUESTIONS;
    var API_EXAMFRIEND_EXAMQUESTIONS = "/api/exam_friend/exam_questions";
    // 答题方获取题目
        exports.API_EXAMFRIEND_EXAMQUESTIONS = API_EXAMFRIEND_EXAMQUESTIONS;
    var API_EXAMFRIEND_ANSWERALL = "/api/exam_friend/answer_all";
    // 答题方提交答案
        exports.API_EXAMFRIEND_ANSWERALL = API_EXAMFRIEND_ANSWERALL;
    var API_EXAMFRIEND_RECORDS = "/api/exam_friend/records";
    // 出题方的考朋友结果列表
    // 团队相关接口
        exports.API_EXAMFRIEND_RECORDS = API_EXAMFRIEND_RECORDS;
    var API_TEAM_CREATE = "/api/team/create";
    // 创建团队
        exports.API_TEAM_CREATE = API_TEAM_CREATE;
    var API_TEAM_JOIN = "/api/team/join";
    // 加入团队
        exports.API_TEAM_JOIN = API_TEAM_JOIN;
    var API_TEAM_QUIT = "/api/team/quit";
    // 退出/删除成员
        exports.API_TEAM_QUIT = API_TEAM_QUIT;
    var API_TEAM_INFO = "/api/team/info";
    // 获取团队信息
        exports.API_TEAM_INFO = API_TEAM_INFO;
    var API_TEAM_MEMBERS = "/api/team/members";
    // 获取团队成员信息
        exports.API_TEAM_MEMBERS = API_TEAM_MEMBERS;
    var API_TEAM_SWITCHJOIN = "/api/team/switchJoin";
    // 开关加入
        exports.API_TEAM_SWITCHJOIN = API_TEAM_SWITCHJOIN;
    var API_TEAM_UPDATENAME = "/api/team/updateName";
    // 更改团队名
    //圈子相关接口
        exports.API_TEAM_UPDATENAME = API_TEAM_UPDATENAME;
    var API_DANWEIS = "/api/danweis";
    // 获取一级/二级单位
        exports.API_DANWEIS = API_DANWEIS;
    var API_QUANZIS = "/api/quanzis";
    // 获取圈子(即三级单位)
        exports.API_QUANZIS = API_QUANZIS;
    var API_QUANZI_JOIN = "/api/quanzi/join";
    // 加入圈子
        exports.API_QUANZI_JOIN = API_QUANZI_JOIN;
    var API_QUANZI_CREATE = "/api/quanzi/create";
    // 创建圈子
        exports.API_QUANZI_CREATE = API_QUANZI_CREATE;
    var API_RANK_QUANZI = "/api/rank/quanzi";
    // 单位圈子榜
        exports.API_RANK_QUANZI = API_RANK_QUANZI;
    var API_RANK_DANWEI = "/api/rank/danwei";
    // 单位单位榜
        exports.API_RANK_DANWEI = API_RANK_DANWEI;
    var API_RANK_DANWEIMEMBER = "/api/rank/danweiMember";
    // 个人单位榜
        exports.API_RANK_DANWEIMEMBER = API_RANK_DANWEIMEMBER;
    var API_QUANZI_DETAIL = "/api/quanzi/detail";
    // 获取圈子信息
        exports.API_QUANZI_DETAIL = API_QUANZI_DETAIL;
    var API_DANWEI_DETAIL = "/api/danwei/detail";
    // 一级单位详情
        exports.API_DANWEI_DETAIL = API_DANWEI_DETAIL;
    var API_DANWEI_GONGGAO = "/api/danwei/gonggao";
    // 获取单位公告
        exports.API_DANWEI_GONGGAO = API_DANWEI_GONGGAO;
    var API_QUANZI_QUIT = "/api/quanzi/quit";
    // 退出圈子
        exports.API_QUANZI_QUIT = API_QUANZI_QUIT;
    var API_QUANZI_UPDATENAME = "/api/quanzi/updateName";
    // 修改圈子名
        exports.API_QUANZI_UPDATENAME = API_QUANZI_UPDATENAME;
    var API_QUANZI_MEMBERS = "/api/quanzi/members";
    // 获取圈子成员列表
        exports.API_QUANZI_MEMBERS = API_QUANZI_MEMBERS;
    /***/}, 
/* 10 */
/* 11 */
/* 12 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ , , function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */    __webpack_require__.d(__webpack_exports__, "default", function() {
        return normalizeComponent;
    });
    /* globals __VUE_SSR_CONTEXT__ */
    // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
    // This module is a runtime utility for cleaner component module output and will
    // be included in the final webpack user bundle.
        function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, /* server only */
    shadowMode, /* vue-cli only */
    components, // fixed by xxxxxx auto components
    renderjs) {
        // Vue.extend constructor export interop
        var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
        // fixed by xxxxxx auto components
                if (components) {
            if (!options.components) {
                options.components = {};
            }
            var hasOwn = Object.prototype.hasOwnProperty;
            for (var name in components) {
                if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
                    options.components[name] = components[name];
                }
            }
        }
        // fixed by xxxxxx renderjs
                if (renderjs) {
            (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
                this[renderjs.__module] = this;
            });
            (options.mixins || (options.mixins = [])).push(renderjs);
        }
        // render functions
                if (render) {
            options.render = render;
            options.staticRenderFns = staticRenderFns;
            options._compiled = true;
        }
        // functional template
                if (functionalTemplate) {
            options.functional = true;
        }
        // scopedId
                if (scopeId) {
            options._scopeId = "data-v-" + scopeId;
        }
        var hook;
        if (moduleIdentifier) {
            // server build
            hook = function hook(context) {
                // 2.3 injection
                context = context || // cached call
                this.$vnode && this.$vnode.ssrContext || // stateful
                this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
                // functional
                // 2.2 with runInNewContext: true
                                if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
                    context = __VUE_SSR_CONTEXT__;
                }
                // inject component styles
                                if (injectStyles) {
                    injectStyles.call(this, context);
                }
                // register component module identifier for async chunk inferrence
                                if (context && context._registeredComponents) {
                    context._registeredComponents.add(moduleIdentifier);
                }
            };
            // used by ssr in case component is cached and beforeCreate
            // never gets called
                        options._ssrRegister = hook;
        } else if (injectStyles) {
            hook = shadowMode ? function() {
                injectStyles.call(this, this.$root.$options.shadowRoot);
            } : injectStyles;
        }
        if (hook) {
            if (options.functional) {
                // for template-only hot-reload because in that case the render fn doesn't
                // go through the normalizer
                options._injectStyles = hook;
                // register for functioal component in vue file
                                var originalRender = options.render;
                options.render = function renderWithStyleInjection(h, context) {
                    hook.call(context);
                    return originalRender(h, context);
                };
            } else {
                // inject component registration as beforeCreate hook
                var existing = options.beforeCreate;
                options.beforeCreate = existing ? [].concat(existing, hook) : [ hook ];
            }
        }
        return {
            exports: scriptExports,
            options: options
        };
    }
    /***/}, 
/* 13 */
/*!***************************************************************!*\
  !*** /Users/mike/Desktop/works/answers_uniapp/store/index.js ***!
  \***************************************************************/
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
        var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
        var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 14));
        var _shared = _interopRequireDefault(__webpack_require__(/*! ../commons/shared.js */ 15));
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        _vue.default.use(_vuex.default);
        var state = {
            userInfo: {
                id: -1,
                // 用户信息
                token: null
            },
            backgroundSound: "background.mp3",
            //背景音乐文件名
            timerSound: "timer.mp3"
        };
        var mutations = {
            // 修改用户信息
            setUserInfo: function setUserInfo(state, data) {
                uni.setStorageSync("userInfo", data);
                state.userInfo = data;
            },
            setBackgroundSound: function setBackgroundSound(state, data) {
                state.backgroundSound = data;
            },
            setTimerSound: function setTimerSound(state, data) {
                state.timerSound = data;
            }
        };
        var actions = {};
        var getters = {
            userInfo: function userInfo(state) {
                return state.userInfo;
            },
            backgroundSound: function backgroundSound(state) {
                return state.backgroundSound;
            },
            timerSound: function timerSound(state) {
                return state.timerSound;
            }
        };
        var _default = new _vuex.default.Store({
            state: state,
            mutations: mutations,
            actions: actions,
            getters: getters
        });
        /*
                           	getters：可以认为是 store 的计算属性，然后在组件的计算属性中使用：...mapGetters([])
                           	mutations: 修改state的值，调用：store.commit('test', 'hello')
                           	actions: 异步提交mutations
                           	module：区分模块，每个模块都有自己的 state、mutation、action、getter、甚至是嵌套子模块(项目大时可能需要用到)
                           */        exports.default = _default;
        /* WEBPACK VAR INJECTION */    }).call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]);
    /***/}, 
/* 14 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */    
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */ (function(global) {
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() {
            return Store;
        });
        /* harmony export (binding) */        __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() {
            return createNamespacedHelpers;
        });
        /* harmony export (binding) */        __webpack_require__.d(__webpack_exports__, "install", function() {
            return install;
        });
        /* harmony export (binding) */        __webpack_require__.d(__webpack_exports__, "mapActions", function() {
            return mapActions;
        });
        /* harmony export (binding) */        __webpack_require__.d(__webpack_exports__, "mapGetters", function() {
            return mapGetters;
        });
        /* harmony export (binding) */        __webpack_require__.d(__webpack_exports__, "mapMutations", function() {
            return mapMutations;
        });
        /* harmony export (binding) */        __webpack_require__.d(__webpack_exports__, "mapState", function() {
            return mapState;
        });
        /*!
     * vuex v3.4.0
     * (c) 2020 Evan You
     * @license MIT
     */        function applyMixin(Vue) {
            var version = Number(Vue.version.split(".")[0]);
            if (version >= 2) {
                Vue.mixin({
                    beforeCreate: vuexInit
                });
            } else {
                // override init and inject vuex init procedure
                // for 1.x backwards compatibility.
                var _init = Vue.prototype._init;
                Vue.prototype._init = function(options) {
                    if (options === void 0) options = {};
                    options.init = options.init ? [ vuexInit ].concat(options.init) : vuexInit;
                    _init.call(this, options);
                };
            }
            /**
       * Vuex init hook, injected into each instances init hooks list.
       */            function vuexInit() {
                var options = this.$options;
                // store injection
                                if (options.store) {
                    this.$store = typeof options.store === "function" ? options.store() : options.store;
                } else if (options.parent && options.parent.$store) {
                    this.$store = options.parent.$store;
                }
            }
        }
        var target = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
        var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        function devtoolPlugin(store) {
            if (!devtoolHook) {
                return;
            }
            store._devtoolHook = devtoolHook;
            devtoolHook.emit("vuex:init", store);
            devtoolHook.on("vuex:travel-to-state", function(targetState) {
                store.replaceState(targetState);
            });
            store.subscribe(function(mutation, state) {
                devtoolHook.emit("vuex:mutation", mutation, state);
            }, {
                prepend: true
            });
            store.subscribeAction(function(action, state) {
                devtoolHook.emit("vuex:action", action, state);
            }, {
                prepend: true
            });
        }
        /**
     * Get the first item that pass the test
     * by second argument function
     *
     * @param {Array} list
     * @param {Function} f
     * @return {*}
     */
        /**
     * forEach for object
     */        function forEachValue(obj, fn) {
            Object.keys(obj).forEach(function(key) {
                return fn(obj[key], key);
            });
        }
        function isObject(obj) {
            return obj !== null && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object";
        }
        function isPromise(val) {
            return val && typeof val.then === "function";
        }
        function assert(condition, msg) {
            if (!condition) {
                throw new Error("[vuex] " + msg);
            }
        }
        function partial(fn, arg) {
            return function() {
                return fn(arg);
            };
        }
        // Base data struct for store's module, package with some attribute and method
                var Module = function Module(rawModule, runtime) {
            this.runtime = runtime;
            // Store some children item
                        this._children = Object.create(null);
            // Store the origin module object which passed by programmer
                        this._rawModule = rawModule;
            var rawState = rawModule.state;
            // Store the origin module's state
                        this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
        };
        var prototypeAccessors = {
            namespaced: {
                configurable: true
            }
        };
        prototypeAccessors.namespaced.get = function() {
            return !!this._rawModule.namespaced;
        };
        Module.prototype.addChild = function addChild(key, module) {
            this._children[key] = module;
        };
        Module.prototype.removeChild = function removeChild(key) {
            delete this._children[key];
        };
        Module.prototype.getChild = function getChild(key) {
            return this._children[key];
        };
        Module.prototype.hasChild = function hasChild(key) {
            return key in this._children;
        };
        Module.prototype.update = function update(rawModule) {
            this._rawModule.namespaced = rawModule.namespaced;
            if (rawModule.actions) {
                this._rawModule.actions = rawModule.actions;
            }
            if (rawModule.mutations) {
                this._rawModule.mutations = rawModule.mutations;
            }
            if (rawModule.getters) {
                this._rawModule.getters = rawModule.getters;
            }
        };
        Module.prototype.forEachChild = function forEachChild(fn) {
            forEachValue(this._children, fn);
        };
        Module.prototype.forEachGetter = function forEachGetter(fn) {
            if (this._rawModule.getters) {
                forEachValue(this._rawModule.getters, fn);
            }
        };
        Module.prototype.forEachAction = function forEachAction(fn) {
            if (this._rawModule.actions) {
                forEachValue(this._rawModule.actions, fn);
            }
        };
        Module.prototype.forEachMutation = function forEachMutation(fn) {
            if (this._rawModule.mutations) {
                forEachValue(this._rawModule.mutations, fn);
            }
        };
        Object.defineProperties(Module.prototype, prototypeAccessors);
        var ModuleCollection = function ModuleCollection(rawRootModule) {
            // register root module (Vuex.Store options)
            this.register([], rawRootModule, false);
        };
        ModuleCollection.prototype.get = function get(path) {
            return path.reduce(function(module, key) {
                return module.getChild(key);
            }, this.root);
        };
        ModuleCollection.prototype.getNamespace = function getNamespace(path) {
            var module = this.root;
            return path.reduce(function(namespace, key) {
                module = module.getChild(key);
                return namespace + (module.namespaced ? key + "/" : "");
            }, "");
        };
        ModuleCollection.prototype.update = function update$1(rawRootModule) {
            update([], this.root, rawRootModule);
        };
        ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
            var this$1 = this;
            if (runtime === void 0) runtime = true;
            if (true) {
                assertRawModule(path, rawModule);
            }
            var newModule = new Module(rawModule, runtime);
            if (path.length === 0) {
                this.root = newModule;
            } else {
                var parent = this.get(path.slice(0, -1));
                parent.addChild(path[path.length - 1], newModule);
            }
            // register nested modules
                        if (rawModule.modules) {
                forEachValue(rawModule.modules, function(rawChildModule, key) {
                    this$1.register(path.concat(key), rawChildModule, runtime);
                });
            }
        };
        ModuleCollection.prototype.unregister = function unregister(path) {
            var parent = this.get(path.slice(0, -1));
            var key = path[path.length - 1];
            if (!parent.getChild(key).runtime) {
                return;
            }
            parent.removeChild(key);
        };
        ModuleCollection.prototype.isRegistered = function isRegistered(path) {
            var parent = this.get(path.slice(0, -1));
            var key = path[path.length - 1];
            return parent.hasChild(key);
        };
        function update(path, targetModule, newModule) {
            if (true) {
                assertRawModule(path, newModule);
            }
            // update target module
                        targetModule.update(newModule);
            // update nested modules
                        if (newModule.modules) {
                for (var key in newModule.modules) {
                    if (!targetModule.getChild(key)) {
                        if (true) {
                            console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, " + "manual reload is needed");
                        }
                        return;
                    }
                    update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
                }
            }
        }
        var functionAssert = {
            assert: function assert(value) {
                return typeof value === "function";
            },
            expected: "function"
        };
        var objectAssert = {
            assert: function assert(value) {
                return typeof value === "function" || (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && typeof value.handler === "function";
            },
            expected: 'function or object with "handler" function'
        };
        var assertTypes = {
            getters: functionAssert,
            mutations: functionAssert,
            actions: objectAssert
        };
        function assertRawModule(path, rawModule) {
            Object.keys(assertTypes).forEach(function(key) {
                if (!rawModule[key]) {
                    return;
                }
                var assertOptions = assertTypes[key];
                forEachValue(rawModule[key], function(value, type) {
                    assert(assertOptions.assert(value), makeAssertionMessage(path, key, type, value, assertOptions.expected));
                });
            });
        }
        function makeAssertionMessage(path, key, type, value, expected) {
            var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
            if (path.length > 0) {
                buf += ' in module "' + path.join(".") + '"';
            }
            buf += " is " + JSON.stringify(value) + ".";
            return buf;
        }
        var Vue;
        // bind on install
                var Store = function Store(options) {
            var this$1 = this;
            if (options === void 0) options = {};
            // Auto install if it is not done yet and `window` has `Vue`.
            // To allow users to avoid auto-installation in some cases,
            // this code should be placed here. See #731
                        if (!Vue && typeof window !== "undefined" && window.Vue) {
                install(window.Vue);
            }
            if (true) {
                assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
                assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
                assert(this instanceof Store, "store must be called with the new operator.");
            }
            var plugins = options.plugins;
            if (plugins === void 0) plugins = [];
            var strict = options.strict;
            if (strict === void 0) strict = false;
            // store internal state
                        this._committing = false;
            this._actions = Object.create(null);
            this._actionSubscribers = [];
            this._mutations = Object.create(null);
            this._wrappedGetters = Object.create(null);
            this._modules = new ModuleCollection(options);
            this._modulesNamespaceMap = Object.create(null);
            this._subscribers = [];
            this._watcherVM = new Vue();
            this._makeLocalGettersCache = Object.create(null);
            // bind commit and dispatch to self
                        var store = this;
            var ref = this;
            var dispatch = ref.dispatch;
            var commit = ref.commit;
            this.dispatch = function boundDispatch(type, payload) {
                return dispatch.call(store, type, payload);
            };
            this.commit = function boundCommit(type, payload, options) {
                return commit.call(store, type, payload, options);
            };
            // strict mode
                        this.strict = strict;
            var state = this._modules.root.state;
            // init root module.
            // this also recursively registers all sub-modules
            // and collects all module getters inside this._wrappedGetters
                        installModule(this, state, [], this._modules.root);
            // initialize the store vm, which is responsible for the reactivity
            // (also registers _wrappedGetters as computed properties)
                        resetStoreVM(this, state);
            // apply plugins
                        plugins.forEach(function(plugin) {
                return plugin(this$1);
            });
            var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
            if (useDevtools) {
                devtoolPlugin(this);
            }
        };
        var prototypeAccessors$1 = {
            state: {
                configurable: true
            }
        };
        prototypeAccessors$1.state.get = function() {
            return this._vm._data.$$state;
        };
        prototypeAccessors$1.state.set = function(v) {
            if (true) {
                assert(false, "use store.replaceState() to explicit replace store state.");
            }
        };
        Store.prototype.commit = function commit(_type, _payload, _options) {
            var this$1 = this;
            // check object-style commit
                        var ref = unifyObjectStyle(_type, _payload, _options);
            var type = ref.type;
            var payload = ref.payload;
            var options = ref.options;
            var mutation = {
                type: type,
                payload: payload
            };
            var entry = this._mutations[type];
            if (!entry) {
                if (true) {
                    console.error("[vuex] unknown mutation type: " + type);
                }
                return;
            }
            this._withCommit(function() {
                entry.forEach(function commitIterator(handler) {
                    handler(payload);
                });
            });
            this._subscribers.slice().forEach(function(sub) {
                return sub(mutation, this$1.state);
            });
            if (true && options && options.silent) {
                console.warn("[vuex] mutation type: " + type + ". Silent option has been removed. " + "Use the filter functionality in the vue-devtools");
            }
        };
        Store.prototype.dispatch = function dispatch(_type, _payload) {
            var this$1 = this;
            // check object-style dispatch
                        var ref = unifyObjectStyle(_type, _payload);
            var type = ref.type;
            var payload = ref.payload;
            var action = {
                type: type,
                payload: payload
            };
            var entry = this._actions[type];
            if (!entry) {
                if (true) {
                    console.error("[vuex] unknown action type: " + type);
                }
                return;
            }
            try {
                this._actionSubscribers.slice().filter(function(sub) {
                    return sub.before;
                }).forEach(function(sub) {
                    return sub.before(action, this$1.state);
                });
            } catch (e) {
                if (true) {
                    console.warn("[vuex] error in before action subscribers: ");
                    console.error(e);
                }
            }
            var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
                return handler(payload);
            })) : entry[0](payload);
            return new Promise(function(resolve, reject) {
                result.then(function(res) {
                    try {
                        this$1._actionSubscribers.filter(function(sub) {
                            return sub.after;
                        }).forEach(function(sub) {
                            return sub.after(action, this$1.state);
                        });
                    } catch (e) {
                        if (true) {
                            console.warn("[vuex] error in after action subscribers: ");
                            console.error(e);
                        }
                    }
                    resolve(res);
                }, function(error) {
                    try {
                        this$1._actionSubscribers.filter(function(sub) {
                            return sub.error;
                        }).forEach(function(sub) {
                            return sub.error(action, this$1.state, error);
                        });
                    } catch (e) {
                        if (true) {
                            console.warn("[vuex] error in error action subscribers: ");
                            console.error(e);
                        }
                    }
                    reject(error);
                });
            });
        };
        Store.prototype.subscribe = function subscribe(fn, options) {
            return genericSubscribe(fn, this._subscribers, options);
        };
        Store.prototype.subscribeAction = function subscribeAction(fn, options) {
            var subs = typeof fn === "function" ? {
                before: fn
            } : fn;
            return genericSubscribe(subs, this._actionSubscribers, options);
        };
        Store.prototype.watch = function watch(getter, cb, options) {
            var this$1 = this;
            if (true) {
                assert(typeof getter === "function", "store.watch only accepts a function.");
            }
            return this._watcherVM.$watch(function() {
                return getter(this$1.state, this$1.getters);
            }, cb, options);
        };
        Store.prototype.replaceState = function replaceState(state) {
            var this$1 = this;
            this._withCommit(function() {
                this$1._vm._data.$$state = state;
            });
        };
        Store.prototype.registerModule = function registerModule(path, rawModule, options) {
            if (options === void 0) options = {};
            if (typeof path === "string") {
                path = [ path ];
            }
            if (true) {
                assert(Array.isArray(path), "module path must be a string or an Array.");
                assert(path.length > 0, "cannot register the root module by using registerModule.");
            }
            this._modules.register(path, rawModule);
            installModule(this, this.state, path, this._modules.get(path), options.preserveState);
            // reset store to update getters...
                        resetStoreVM(this, this.state);
        };
        Store.prototype.unregisterModule = function unregisterModule(path) {
            var this$1 = this;
            if (typeof path === "string") {
                path = [ path ];
            }
            if (true) {
                assert(Array.isArray(path), "module path must be a string or an Array.");
            }
            this._modules.unregister(path);
            this._withCommit(function() {
                var parentState = getNestedState(this$1.state, path.slice(0, -1));
                Vue.delete(parentState, path[path.length - 1]);
            });
            resetStore(this);
        };
        Store.prototype.hasModule = function hasModule(path) {
            if (typeof path === "string") {
                path = [ path ];
            }
            if (true) {
                assert(Array.isArray(path), "module path must be a string or an Array.");
            }
            return this._modules.isRegistered(path);
        };
        Store.prototype.hotUpdate = function hotUpdate(newOptions) {
            this._modules.update(newOptions);
            resetStore(this, true);
        };
        Store.prototype._withCommit = function _withCommit(fn) {
            var committing = this._committing;
            this._committing = true;
            fn();
            this._committing = committing;
        };
        Object.defineProperties(Store.prototype, prototypeAccessors$1);
        function genericSubscribe(fn, subs, options) {
            if (subs.indexOf(fn) < 0) {
                options && options.prepend ? subs.unshift(fn) : subs.push(fn);
            }
            return function() {
                var i = subs.indexOf(fn);
                if (i > -1) {
                    subs.splice(i, 1);
                }
            };
        }
        function resetStore(store, hot) {
            store._actions = Object.create(null);
            store._mutations = Object.create(null);
            store._wrappedGetters = Object.create(null);
            store._modulesNamespaceMap = Object.create(null);
            var state = store.state;
            // init all modules
                        installModule(store, state, [], store._modules.root, true);
            // reset vm
                        resetStoreVM(store, state, hot);
        }
        function resetStoreVM(store, state, hot) {
            var oldVm = store._vm;
            // bind store public getters
                        store.getters = {};
            // reset local getters cache
                        store._makeLocalGettersCache = Object.create(null);
            var wrappedGetters = store._wrappedGetters;
            var computed = {};
            forEachValue(wrappedGetters, function(fn, key) {
                // use computed to leverage its lazy-caching mechanism
                // direct inline function use will lead to closure preserving oldVm.
                // using partial to return function with only arguments preserved in closure environment.
                computed[key] = partial(fn, store);
                Object.defineProperty(store.getters, key, {
                    get: function get() {
                        return store._vm[key];
                    },
                    enumerable: true
                });
            });
            // use a Vue instance to store the state tree
            // suppress warnings just in case the user has added
            // some funky global mixins
                        var silent = Vue.config.silent;
            Vue.config.silent = true;
            store._vm = new Vue({
                data: {
                    $$state: state
                },
                computed: computed
            });
            Vue.config.silent = silent;
            // enable strict mode for new vm
                        if (store.strict) {
                enableStrictMode(store);
            }
            if (oldVm) {
                if (hot) {
                    // dispatch changes in all subscribed watchers
                    // to force getter re-evaluation for hot reloading.
                    store._withCommit(function() {
                        oldVm._data.$$state = null;
                    });
                }
                Vue.nextTick(function() {
                    return oldVm.$destroy();
                });
            }
        }
        function installModule(store, rootState, path, module, hot) {
            var isRoot = !path.length;
            var namespace = store._modules.getNamespace(path);
            // register in namespace map
                        if (module.namespaced) {
                if (store._modulesNamespaceMap[namespace] && "development" !== "production") {
                    console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
                }
                store._modulesNamespaceMap[namespace] = module;
            }
            // set state
                        if (!isRoot && !hot) {
                var parentState = getNestedState(rootState, path.slice(0, -1));
                var moduleName = path[path.length - 1];
                store._withCommit(function() {
                    if (true) {
                        if (moduleName in parentState) {
                            console.warn('[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"');
                        }
                    }
                    Vue.set(parentState, moduleName, module.state);
                });
            }
            var local = module.context = makeLocalContext(store, namespace, path);
            module.forEachMutation(function(mutation, key) {
                var namespacedType = namespace + key;
                registerMutation(store, namespacedType, mutation, local);
            });
            module.forEachAction(function(action, key) {
                var type = action.root ? key : namespace + key;
                var handler = action.handler || action;
                registerAction(store, type, handler, local);
            });
            module.forEachGetter(function(getter, key) {
                var namespacedType = namespace + key;
                registerGetter(store, namespacedType, getter, local);
            });
            module.forEachChild(function(child, key) {
                installModule(store, rootState, path.concat(key), child, hot);
            });
        }
        /**
     * make localized dispatch, commit, getters and state
     * if there is no namespace, just use root ones
     */        function makeLocalContext(store, namespace, path) {
            var noNamespace = namespace === "";
            var local = {
                dispatch: noNamespace ? store.dispatch : function(_type, _payload, _options) {
                    var args = unifyObjectStyle(_type, _payload, _options);
                    var payload = args.payload;
                    var options = args.options;
                    var type = args.type;
                    if (!options || !options.root) {
                        type = namespace + type;
                        if (true && !store._actions[type]) {
                            console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
                            return;
                        }
                    }
                    return store.dispatch(type, payload);
                },
                commit: noNamespace ? store.commit : function(_type, _payload, _options) {
                    var args = unifyObjectStyle(_type, _payload, _options);
                    var payload = args.payload;
                    var options = args.options;
                    var type = args.type;
                    if (!options || !options.root) {
                        type = namespace + type;
                        if (true && !store._mutations[type]) {
                            console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
                            return;
                        }
                    }
                    store.commit(type, payload, options);
                }
            };
            // getters and state object must be gotten lazily
            // because they will be changed by vm update
                        Object.defineProperties(local, {
                getters: {
                    get: noNamespace ? function() {
                        return store.getters;
                    } : function() {
                        return makeLocalGetters(store, namespace);
                    }
                },
                state: {
                    get: function get() {
                        return getNestedState(store.state, path);
                    }
                }
            });
            return local;
        }
        function makeLocalGetters(store, namespace) {
            if (!store._makeLocalGettersCache[namespace]) {
                var gettersProxy = {};
                var splitPos = namespace.length;
                Object.keys(store.getters).forEach(function(type) {
                    // skip if the target getter is not match this namespace
                    if (type.slice(0, splitPos) !== namespace) {
                        return;
                    }
                    // extract local getter type
                                        var localType = type.slice(splitPos);
                    // Add a port to the getters proxy.
                    // Define as getter property because
                    // we do not want to evaluate the getters in this time.
                                        Object.defineProperty(gettersProxy, localType, {
                        get: function get() {
                            return store.getters[type];
                        },
                        enumerable: true
                    });
                });
                store._makeLocalGettersCache[namespace] = gettersProxy;
            }
            return store._makeLocalGettersCache[namespace];
        }
        function registerMutation(store, type, handler, local) {
            var entry = store._mutations[type] || (store._mutations[type] = []);
            entry.push(function wrappedMutationHandler(payload) {
                handler.call(store, local.state, payload);
            });
        }
        function registerAction(store, type, handler, local) {
            var entry = store._actions[type] || (store._actions[type] = []);
            entry.push(function wrappedActionHandler(payload) {
                var res = handler.call(store, {
                    dispatch: local.dispatch,
                    commit: local.commit,
                    getters: local.getters,
                    state: local.state,
                    rootGetters: store.getters,
                    rootState: store.state
                }, payload);
                if (!isPromise(res)) {
                    res = Promise.resolve(res);
                }
                if (store._devtoolHook) {
                    return res.catch(function(err) {
                        store._devtoolHook.emit("vuex:error", err);
                        throw err;
                    });
                } else {
                    return res;
                }
            });
        }
        function registerGetter(store, type, rawGetter, local) {
            if (store._wrappedGetters[type]) {
                if (true) {
                    console.error("[vuex] duplicate getter key: " + type);
                }
                return;
            }
            store._wrappedGetters[type] = function wrappedGetter(store) {
                return rawGetter(local.state, // local state
                local.getters, // local getters
                store.state, // root state
                store.getters);
            };
        }
        function enableStrictMode(store) {
            store._vm.$watch(function() {
                return this._data.$$state;
            }, function() {
                if (true) {
                    assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
                }
            }, {
                deep: true,
                sync: true
            });
        }
        function getNestedState(state, path) {
            return path.reduce(function(state, key) {
                return state[key];
            }, state);
        }
        function unifyObjectStyle(type, payload, options) {
            if (isObject(type) && type.type) {
                options = payload;
                payload = type;
                type = type.type;
            }
            if (true) {
                assert(typeof type === "string", "expects string as the type, but found " + (typeof type === "undefined" ? "undefined" : _typeof(type)) + ".");
            }
            return {
                type: type,
                payload: payload,
                options: options
            };
        }
        function install(_Vue) {
            if (Vue && _Vue === Vue) {
                if (true) {
                    console.error("[vuex] already installed. Vue.use(Vuex) should be called only once.");
                }
                return;
            }
            Vue = _Vue;
            applyMixin(Vue);
        }
        /**
     * Reduce the code which written in Vue.js for getting the state.
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
     * @param {Object}
     */        var mapState = normalizeNamespace(function(namespace, states) {
            var res = {};
            if (true && !isValidMap(states)) {
                console.error("[vuex] mapState: mapper parameter must be either an Array or an Object");
            }
            normalizeMap(states).forEach(function(ref) {
                var key = ref.key;
                var val = ref.val;
                res[key] = function mappedState() {
                    var state = this.$store.state;
                    var getters = this.$store.getters;
                    if (namespace) {
                        var module = getModuleByNamespace(this.$store, "mapState", namespace);
                        if (!module) {
                            return;
                        }
                        state = module.context.state;
                        getters = module.context.getters;
                    }
                    return typeof val === "function" ? val.call(this, state, getters) : state[val];
                };
                // mark vuex getter for devtools
                                res[key].vuex = true;
            });
            return res;
        });
        /**
     * Reduce the code which written in Vue.js for committing the mutation
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */        var mapMutations = normalizeNamespace(function(namespace, mutations) {
            var res = {};
            if (true && !isValidMap(mutations)) {
                console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object");
            }
            normalizeMap(mutations).forEach(function(ref) {
                var key = ref.key;
                var val = ref.val;
                res[key] = function mappedMutation() {
                    var args = [], len = arguments.length;
                    while (len--) {
                        args[len] = arguments[len];
                    }
                    // Get the commit method from store
                                        var commit = this.$store.commit;
                    if (namespace) {
                        var module = getModuleByNamespace(this.$store, "mapMutations", namespace);
                        if (!module) {
                            return;
                        }
                        commit = module.context.commit;
                    }
                    return typeof val === "function" ? val.apply(this, [ commit ].concat(args)) : commit.apply(this.$store, [ val ].concat(args));
                };
            });
            return res;
        });
        /**
     * Reduce the code which written in Vue.js for getting the getters
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} getters
     * @return {Object}
     */        var mapGetters = normalizeNamespace(function(namespace, getters) {
            var res = {};
            if (true && !isValidMap(getters)) {
                console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object");
            }
            normalizeMap(getters).forEach(function(ref) {
                var key = ref.key;
                var val = ref.val;
                // The namespace has been mutated by normalizeNamespace
                                val = namespace + val;
                res[key] = function mappedGetter() {
                    if (namespace && !getModuleByNamespace(this.$store, "mapGetters", namespace)) {
                        return;
                    }
                    if (true && !(val in this.$store.getters)) {
                        console.error("[vuex] unknown getter: " + val);
                        return;
                    }
                    return this.$store.getters[val];
                };
                // mark vuex getter for devtools
                                res[key].vuex = true;
            });
            return res;
        });
        /**
     * Reduce the code which written in Vue.js for dispatch the action
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */        var mapActions = normalizeNamespace(function(namespace, actions) {
            var res = {};
            if (true && !isValidMap(actions)) {
                console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object");
            }
            normalizeMap(actions).forEach(function(ref) {
                var key = ref.key;
                var val = ref.val;
                res[key] = function mappedAction() {
                    var args = [], len = arguments.length;
                    while (len--) {
                        args[len] = arguments[len];
                    }
                    // get dispatch function from store
                                        var dispatch = this.$store.dispatch;
                    if (namespace) {
                        var module = getModuleByNamespace(this.$store, "mapActions", namespace);
                        if (!module) {
                            return;
                        }
                        dispatch = module.context.dispatch;
                    }
                    return typeof val === "function" ? val.apply(this, [ dispatch ].concat(args)) : dispatch.apply(this.$store, [ val ].concat(args));
                };
            });
            return res;
        });
        /**
     * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
     * @param {String} namespace
     * @return {Object}
     */        var createNamespacedHelpers = function createNamespacedHelpers(namespace) {
            return {
                mapState: mapState.bind(null, namespace),
                mapGetters: mapGetters.bind(null, namespace),
                mapMutations: mapMutations.bind(null, namespace),
                mapActions: mapActions.bind(null, namespace)
            };
        };
        /**
     * Normalize the map
     * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
     * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
     * @param {Array|Object} map
     * @return {Object}
     */        function normalizeMap(map) {
            if (!isValidMap(map)) {
                return [];
            }
            return Array.isArray(map) ? map.map(function(key) {
                return {
                    key: key,
                    val: key
                };
            }) : Object.keys(map).map(function(key) {
                return {
                    key: key,
                    val: map[key]
                };
            });
        }
        /**
     * Validate whether given map is valid or not
     * @param {*} map
     * @return {Boolean}
     */        function isValidMap(map) {
            return Array.isArray(map) || isObject(map);
        }
        /**
     * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
     * @param {Function} fn
     * @return {Function}
     */        function normalizeNamespace(fn) {
            return function(namespace, map) {
                if (typeof namespace !== "string") {
                    map = namespace;
                    namespace = "";
                } else if (namespace.charAt(namespace.length - 1) !== "/") {
                    namespace += "/";
                }
                return fn(namespace, map);
            };
        }
        /**
     * Search a special module from store by namespace. if module not exist, print error message.
     * @param {Object} store
     * @param {String} helper
     * @param {String} namespace
     * @return {Object}
     */        function getModuleByNamespace(store, helper, namespace) {
            var module = store._modulesNamespaceMap[namespace];
            if (true && !module) {
                console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
            }
            return module;
        }
        var index = {
            Store: Store,
            install: install,
            version: "3.4.0",
            mapState: mapState,
            mapMutations: mapMutations,
            mapGetters: mapGetters,
            mapActions: mapActions,
            createNamespacedHelpers: createNamespacedHelpers
        };
        /* harmony default export */        __webpack_exports__["default"] = index;
        /* WEBPACK VAR INJECTION */    }).call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 3));
    /***/}, 
/* 15 */
/*!******************************************************************!*\
  !*** /Users/mike/Desktop/works/answers_uniapp/commons/shared.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */    
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */
    (function(uni) {
        var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        /* 全局共享函数方法 */        var wm = new _vue.default();
        var API = __webpack_require__(/*! ./api.js */ 9);
        var SparkMD5 = __webpack_require__(/*! ./SparkMD5.js */ 16);
        // 获取用户信息
                function getUserInfo() {
            var userInfo = {
                id: -1,
                token: null
            };
            var userInfoObj = uni.getStorageSync("userInfo");
            console.log("userInfoObj", userInfoObj);
            if (userInfoObj) {
                if (typeof userInfoObj.id == "number") {
                    return userInfoObj;
                } else {
                    uni.removeStorageSync("userInfo");
                }
            }
            return userInfo;
        }
        // 更新用户信息
                function setUserInfo(data) {
            console.log("-----gengxin1y用户信息");
            console.log(data);
            uni.setStorageSync("userInfo", data);
        }
        // 对象转数组，原本已经是数组时返回原数组，如果是非对象或非数组时返回false
                function objectConversion(data) {
            if ((typeof data === "undefined" ? "undefined" : _typeof(data)) != "object") {
                return false;
            }
            if (Array.isArray(data)) {
                return data;
            }
            var arr = [];
            for (var i in data) {
                arr.push(data[i]);
            }
            return arr;
        }
        // 判断对错/是否显示，万能校验 
                function isRight(obj) {
            if (typeof obj === "string") {
                obj = obj.trim();
                if (obj === "null" || obj === "undefined") {
                    return false;
                }
            } else if (typeof obj === "number" && typeof obj === "number" && !isNaN(obj) && obj !== 0) {
                return true;
            }
            for (var key in obj) {
                return true;
            }
            return false;
        }
        // 解析路由地址和参数，支持hash模式(后边带#/符号)，返回一个对象
                function parsingRoadKing(scene, expand) {
            if (!isRight(scene)) return {};
            var res = {};
            var distinguish = scene.split("?");
            if (distinguish[1]) {
                var params = distinguish[1].split("&");
                params.forEach(function(item) {
                    var pram = item.split("=");
                    if (pram[1].indexOf("#/") >= 0) {
                        res[pram[0]] = pram[1].substr(0, pram[1].length - 2);
                    } else {
                        res[pram[0]] = pram[1];
                    }
                });
            }
            if (expand) {
                res.webview_url = distinguish[0];
            } else {
                res.baseurl = distinguish[0];
            }
            return res;
        }
        // 调起登录
                function wxlogin(callback) {
            var scopes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "auth_base";
            uni.login({
                scopes: scopes,
                success: function success(res) {
                    console.log("-----wxlogin---getcode");
                    wm.request(API.API_WXLOGIN, {
                        code: res.code
                    }, function(res2) {
                        console.log("-----wxlogin---getuserinfo");
                        console.log(res2, "测试登录");
                        setUserInfo(res2);
                        //更新用户信息
                                                if (typeof callback == "function") {
                            callback(res2);
                        }
                    }, false);
                },
                fail: function fail(err) {
                    uni.showModal({
                        title: "提示",
                        content: "调取微信登录失败",
                        confirmColor: "#30B6F9"
                    });
                }
            });
        }
        // 判断用户登录(如userInfo、userInfo.id等于undefined或userInfo.id === -1的情况，后期可能还有登录过期判断)
                function islogin(userInfo) {
            if (typeof userInfo != "undefined") {
                if (typeof userInfo.id == "undefined" || userInfo.id == -1) {
                    return true;
                    // 如果为真则可调登录
                                } else {
                    return false;
                }
            } else {
                return true;
            }
        }
        // 生成随机唯一token
                function createToken() {
            var date = new Date();
            // 获取时间对象
                        var fullYear = date.getFullYear();
            // 年
                        var month = String(date.getMonth() + 1);
            // 月
                        month = fillZero(month);
            var getdate = String(date.getDate());
            // 日
                        getdate = fillZero(getdate);
            var hours = String(date.getHours());
            // 时
                        hours = fillZero(hours);
            var minutes = String(date.getMinutes());
            // 分
                        minutes = fillZero(minutes);
            var seconds = String(date.getSeconds());
            // 秒
                        seconds = fillZero(seconds);
            // seconds = String(date.getSeconds()).padStart(2, 0);
                        var user_id = wm.$store.state.userInfo.id;
            // 用户id
                        var tmp = "".concat(fullYear, "/").concat(month, "/").concat(getdate, " ").concat(hours, ":").concat(minutes, ":").concat(seconds, " ").concat(user_id);
            var token = SparkMD5.hash(tmp);
            return token;
        }
        //不足2位补0
                function fillZero(time) {
            if (time <= 9) {
                time = "0" + time;
            }
            return time;
        }
        // Date 转换 字符串 yyyy-MM-dd HH:mm:ss
                function formatDate(date, type) {
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            m = m < 10 ? "0" + m : m;
            var d = date.getDate();
            d = d < 10 ? "0" + d : d;
            var h = date.getHours();
            h = h < 10 ? "0" + h : h;
            var minute = date.getMinutes();
            minute = minute < 10 ? "0" + minute : minute;
            var second = date.getSeconds();
            second = minute < 10 ? "0" + second : second;
            if (type == "ymd") {
                return y + "-" + m + "-" + d;
            } else if (type == "hms") {
                return h + ":" + minute + ":" + second;
            } else if (type == "ymdh") {
                return y + "-" + m + "-" + d + " " + h;
            } else if (type == "ymdhm") {
                return y + "-" + m + "-" + d + " " + h + ":" + minute;
            } else {
                return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
            }
        }
        // Date间隔天数
                function dayInterval(startDate, endDate) {
            var start_time = Date.parse(startDate);
            var end_time = Date.parse(endDate);
            var date_span = end_time - start_time;
            date_span = Math.abs(date_span);
            var i_days = Math.floor(date_span / (24 * 3600 * 1e3));
            return i_days;
        }
        //时间转时间戳
                function dateToTimestamp(date) {
            var new_date = new Date(date);
            return new_date.getTime();
        }
        // 比较ab大小
                function compareAmount(a, b) {
            a = isRight(a) ? a : 0;
            b = isRight(b) ? b : 0;
            if (Number(a) < Number(b)) {
                return true;
            }
            return false;
        }
        // 获取当前零点时间戳
                function getZeroTimestamp() {
            var timestamp = new Date(new Date(new Date().toLocaleDateString()).getTime()).getTime() / 1e3;
            return timestamp;
        }
        // 获取7天后零点时间戳
                function getDaysLaterZeroTimestamp() {
            var day = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
            var timestamp = new Date(new Date(new Date().toLocaleDateString()).getTime() + day * 24 * 3600 * 1e3).getTime() / 1e3;
            return timestamp;
        }
        // 判断一个值所属的类型，返回一个字符串
                function isValueType(value) {
            var str = Object.prototype.toString.call(value);
            return str.match(/\[object (.*?)\]/)[1].toLowerCase();
        }
        // 订阅消息
                function subscribeMessage() {
            var for_user_type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "user";
            var data = {
                for_user_type: for_user_type
            };
            // 获取订阅消息模板IDs接口
                        wm.request(API.V3_SUBSCRIBEMSG_GETTEMPLATES, data, function(res) {
                console.log(res);
                var templates = isRight(res.templates) ? res.templates : [];
                if (templates && Array.isArray(templates)) {
                    var tmpl_ids = [];
                    templates.forEach(function(item, index) {
                        tmpl_ids.push(item.template_id);
                    });
                    // 调起订阅消息授权
                                        uni.requestSubscribeMessage({
                        tmplIds: tmpl_ids,
                        success: function success(res2) {
                            console.log(res2);
                            if (res2 && res2.errMsg == "requestSubscribeMessage:ok") {
                                // 订阅或不订阅
                            }
                        },
                        fail: function fail(err) {
                            console.log(err);
                        }
                    });
                }
            }, false);
        }
        // 校验图片格式
                function checkImgInfo(tempFilePath, suc) {
            uni.getImageInfo({
                src: tempFilePath,
                success: function success(res) {
                    var type = res.type;
                    console.log("checkImgInfo...", type);
                    if (type == "png" || type == "jpeg" || type == "jpg") {
                        suc && suc(true);
                    } else {
                        suc && suc(false);
                    }
                },
                fail: function fail(err) {
                    suc && suc(false);
                }
            });
        }
        module.exports = {
            objectConversion: objectConversion,
            parsingRoadKing: parsingRoadKing,
            wxlogin: wxlogin,
            createToken: createToken,
            isRight: isRight,
            formatDate: formatDate,
            dateToTimestamp: dateToTimestamp,
            compareAmount: compareAmount,
            getZeroTimestamp: getZeroTimestamp,
            getDaysLaterZeroTimestamp: getDaysLaterZeroTimestamp,
            islogin: islogin,
            isValueType: isValueType,
            fillZero: fillZero,
            subscribeMessage: subscribeMessage,
            dayInterval: dayInterval,
            checkImgInfo: checkImgInfo,
            getUserInfo: getUserInfo,
            setUserInfo: setUserInfo
        };
        /* WEBPACK VAR INJECTION */    }).call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]);
    /***/}, 
/* 16 */
/*!********************************************************************!*\
  !*** /Users/mike/Desktop/works/answers_uniapp/commons/SparkMD5.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    (function(factory) {
        if (true) {
            module.exports = factory();
        } else {
            var glob;
        }
    })(function(undefined) {
        "use strict";
        var add32 = function add32(a, b) {
            return a + b & 4294967295;
        }, hex_chr = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" ];
        function cmn(q, a, b, x, s, t) {
            a = add32(add32(a, q), add32(x, t));
            return add32(a << s | a >>> 32 - s, b);
        }
        function md5cycle(x, k) {
            var a = x[0], b = x[1], c = x[2], d = x[3];
            a += (b & c | ~b & d) + k[0] - 680876936 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[1] - 389564586 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[2] + 606105819 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & c | ~b & d) + k[4] - 176418897 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[7] - 45705983 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[10] - 42063 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[13] - 40341101 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & d | c & ~d) + k[1] - 165796510 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[11] + 643717713 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[0] - 373897302 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b & d | c & ~d) + k[5] - 701558691 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[10] + 38016083 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[15] - 660478335 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[4] - 405537848 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b & d | c & ~d) + k[9] + 568446438 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[3] - 187363961 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[2] - 51403784 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b ^ c ^ d) + k[5] - 378558 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[14] - 35309556 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[7] - 155497632 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (b ^ c ^ d) + k[13] + 681279174 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[0] - 358537222 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[3] - 722521979 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[6] + 76029189 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (b ^ c ^ d) + k[9] - 640364487 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[12] - 421815835 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[15] + 530742520 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[2] - 995338651 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            x[0] = a + x[0] | 0;
            x[1] = b + x[1] | 0;
            x[2] = c + x[2] | 0;
            x[3] = d + x[3] | 0;
        }
        function md5blk(s) {
            var md5blks = [], i;
            for (i = 0; i < 64; i += 4) {
                md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
            }
            return md5blks;
        }
        function md5blk_array(a) {
            var md5blks = [], i;
            for (i = 0; i < 64; i += 4) {
                md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
            }
            return md5blks;
        }
        function md51(s) {
            var n = s.length, state = [ 1732584193, -271733879, -1732584194, 271733878 ], i, length, tail, tmp, lo, hi;
            for (i = 64; i <= n; i += 64) {
                md5cycle(state, md5blk(s.substring(i - 64, i)));
            }
            s = s.substring(i - 64);
            length = s.length;
            tail = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
            for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
            }
            tail[i >> 2] |= 128 << (i % 4 << 3);
            if (i > 55) {
                md5cycle(state, tail);
                for (i = 0; i < 16; i += 1) {
                    tail[i] = 0;
                }
            }
            tmp = n * 8;
            tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
            lo = parseInt(tmp[2], 16);
            hi = parseInt(tmp[1], 16) || 0;
            tail[14] = lo;
            tail[15] = hi;
            md5cycle(state, tail);
            return state;
        }
        function md51_array(a) {
            var n = a.length, state = [ 1732584193, -271733879, -1732584194, 271733878 ], i, length, tail, tmp, lo, hi;
            for (i = 64; i <= n; i += 64) {
                md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
            }
            a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
            length = a.length;
            tail = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
            for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= a[i] << (i % 4 << 3);
            }
            tail[i >> 2] |= 128 << (i % 4 << 3);
            if (i > 55) {
                md5cycle(state, tail);
                for (i = 0; i < 16; i += 1) {
                    tail[i] = 0;
                }
            }
            tmp = n * 8;
            tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
            lo = parseInt(tmp[2], 16);
            hi = parseInt(tmp[1], 16) || 0;
            tail[14] = lo;
            tail[15] = hi;
            md5cycle(state, tail);
            return state;
        }
        function rhex(n) {
            var s = "", j;
            for (j = 0; j < 4; j += 1) {
                s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
            }
            return s;
        }
        function hex(x) {
            var i;
            for (i = 0; i < x.length; i += 1) {
                x[i] = rhex(x[i]);
            }
            return x.join("");
        }
        if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
            add32 = function add32(x, y) {
                var lsw = (x & 65535) + (y & 65535), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
                return msw << 16 | lsw & 65535;
            };
        }
        if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
            (function() {
                function clamp(val, length) {
                    val = val | 0 || 0;
                    if (val < 0) {
                        return Math.max(val + length, 0);
                    }
                    return Math.min(val, length);
                }
                ArrayBuffer.prototype.slice = function(from, to) {
                    var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray, sourceArray;
                    if (to !== undefined) {
                        end = clamp(to, length);
                    }
                    if (begin > end) {
                        return new ArrayBuffer(0);
                    }
                    num = end - begin;
                    target = new ArrayBuffer(num);
                    targetArray = new Uint8Array(target);
                    sourceArray = new Uint8Array(this, begin, num);
                    targetArray.set(sourceArray);
                    return target;
                };
            })();
        }
        function toUtf8(str) {
            if (/[\u0080-\uFFFF]/.test(str)) {
                str = unescape(encodeURIComponent(str));
            }
            return str;
        }
        function utf8Str2ArrayBuffer(str, returnUInt8Array) {
            var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
            for (i = 0; i < length; i += 1) {
                arr[i] = str.charCodeAt(i);
            }
            return returnUInt8Array ? arr : buff;
        }
        function arrayBuffer2Utf8Str(buff) {
            return String.fromCharCode.apply(null, new Uint8Array(buff));
        }
        function concatenateArrayBuffers(first, second, returnUInt8Array) {
            var result = new Uint8Array(first.byteLength + second.byteLength);
            result.set(new Uint8Array(first));
            result.set(new Uint8Array(second), first.byteLength);
            return returnUInt8Array ? result : result.buffer;
        }
        function hexToBinaryString(hex) {
            var bytes = [], length = hex.length, x;
            for (x = 0; x < length - 1; x += 2) {
                bytes.push(parseInt(hex.substr(x, 2), 16));
            }
            return String.fromCharCode.apply(String, bytes);
        }
        function SparkMD5() {
            this.reset();
        }
        SparkMD5.prototype.append = function(str) {
            this.appendBinary(toUtf8(str));
            return this;
        };
        SparkMD5.prototype.appendBinary = function(contents) {
            this._buff += contents;
            this._length += contents.length;
            var length = this._buff.length, i;
            for (i = 64; i <= length; i += 64) {
                md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
            }
            this._buff = this._buff.substring(i - 64);
            return this;
        };
        SparkMD5.prototype.end = function(raw) {
            var buff = this._buff, length = buff.length, i, tail = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], ret;
            for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
            }
            this._finish(tail, length);
            ret = hex(this._hash);
            if (raw) {
                ret = hexToBinaryString(ret);
            }
            this.reset();
            return ret;
        };
        SparkMD5.prototype.reset = function() {
            this._buff = "";
            this._length = 0;
            this._hash = [ 1732584193, -271733879, -1732584194, 271733878 ];
            return this;
        };
        SparkMD5.prototype.getState = function() {
            return {
                buff: this._buff,
                length: this._length,
                hash: this._hash
            };
        };
        SparkMD5.prototype.setState = function(state) {
            this._buff = state.buff;
            this._length = state.length;
            this._hash = state.hash;
            return this;
        };
        SparkMD5.prototype.destroy = function() {
            delete this._hash;
            delete this._buff;
            delete this._length;
        };
        SparkMD5.prototype._finish = function(tail, length) {
            var i = length, tmp, lo, hi;
            tail[i >> 2] |= 128 << (i % 4 << 3);
            if (i > 55) {
                md5cycle(this._hash, tail);
                for (i = 0; i < 16; i += 1) {
                    tail[i] = 0;
                }
            }
            tmp = this._length * 8;
            tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
            lo = parseInt(tmp[2], 16);
            hi = parseInt(tmp[1], 16) || 0;
            tail[14] = lo;
            tail[15] = hi;
            md5cycle(this._hash, tail);
        };
        SparkMD5.hash = function(str, raw) {
            return SparkMD5.hashBinary(toUtf8(str), raw);
        };
        SparkMD5.hashBinary = function(content, raw) {
            var hash = md51(content), ret = hex(hash);
            return raw ? hexToBinaryString(ret) : ret;
        };
        SparkMD5.ArrayBuffer = function() {
            this.reset();
        };
        SparkMD5.ArrayBuffer.prototype.append = function(arr) {
            var buff = concatenateArrayBuffers(this._buff.buffer, arr, true), length = buff.length, i;
            this._length += arr.byteLength;
            for (i = 64; i <= length; i += 64) {
                md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
            }
            this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
            return this;
        };
        SparkMD5.ArrayBuffer.prototype.end = function(raw) {
            var buff = this._buff, length = buff.length, tail = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], i, ret;
            for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= buff[i] << (i % 4 << 3);
            }
            this._finish(tail, length);
            ret = hex(this._hash);
            if (raw) {
                ret = hexToBinaryString(ret);
            }
            this.reset();
            return ret;
        };
        SparkMD5.ArrayBuffer.prototype.reset = function() {
            this._buff = new Uint8Array(0);
            this._length = 0;
            this._hash = [ 1732584193, -271733879, -1732584194, 271733878 ];
            return this;
        };
        SparkMD5.ArrayBuffer.prototype.getState = function() {
            var state = SparkMD5.prototype.getState.call(this);
            state.buff = arrayBuffer2Utf8Str(state.buff);
            return state;
        };
        SparkMD5.ArrayBuffer.prototype.setState = function(state) {
            state.buff = utf8Str2ArrayBuffer(state.buff, true);
            return SparkMD5.prototype.setState.call(this, state);
        };
        SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
        SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
        SparkMD5.ArrayBuffer.hash = function(arr, raw) {
            var hash = md51_array(new Uint8Array(arr)), ret = hex(hash);
            return raw ? hexToBinaryString(ret) : ret;
        };
        return SparkMD5;
    });
    /***/}, 
/* 17 */
/*!***************************************************************************!*\
  !*** /Users/mike/Desktop/works/answers_uniapp/commons/mergeParamMixin.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    var _default = {
        install: function install(Vue) {
            Vue.mixin({
                data: function data() {
                    return {
                        _mergeParam: {}
                    };
                },
                onLoad: function onLoad(option) {
                    if (option) {
                        this._mergeParam = option;
                    }
                }
            });
        }
    };
    // import mixin from "commons/mergeParamMixin.js"
    // Vue.use(mixin)
        exports.default = _default;
    /***/}, 
/* 18 */
/*!****************************************************************!*\
  !*** /Users/mike/Desktop/works/answers_uniapp/commons/util.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */    
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */
    (function(uni) {
        var _shared = _interopRequireDefault(__webpack_require__(/*! ./shared.js */ 15));
        var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var util = {};
        var sha1 = __webpack_require__(/*! ./sha1.min.js */ 19), SparkMD5 = __webpack_require__(/*! ./SparkMD5.js */ 16);
        // 签名加密js文件
                var timer = null;
        // 定时器，在一个周期内只弹出一个错误提示框
                function getsign2(params) {
            var s_data = "";
            var keys = [];
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    var value = params[key];
                    keys.push(key);
                }
            }
            var arr = [];
            keys.sort();
            for (var i = 0; i < keys.length; i++) {
                var k = keys[i];
                var v = params[k];
                arr.push(k + "=" + v);
            }
            s_data = arr.join("&");
            var sign = sha1(SparkMD5.hash(s_data) + "lanzu@123");
            params.sign = sign;
            return params;
        }
        // 重新登录
                util.reLogin = function reLogin(a, data, success, needloading, callback) {
            var that = this;
            _shared.default.wxlogin(function() {
                util.request(a, data, success, needloading, callback);
            });
        };
        util.request = function(a, data, _success, needloading, callback) {
            var app = getApp().globalData;
            var url = getApp().globalData.API.DEVURL;
            var pages = getCurrentPages();
            data.create_page = pages[pages.length - 1].route;
            var that = this;
            if (getApp().globalData.API.DEV == "prod") {
                url = getApp().globalData.API.PRODURL;
            }
            // 公共参数
                        var userInfo = _shared.default.getUserInfo();
            var token = 0;
            if (userInfo.token) {
                token = userInfo.token;
            }
            var authorization = "Bearer " + token;
            //token
                        if (!data.timestamp) {
                data.timestamp = Math.round(new Date().getTime() / 1e3);
            }
            if (!data.rand) {
                data.rand = Math.round(Math.random() * 1e6);
            }
            if (!data.user_id) {
                data.user_id = userInfo.id || -1;
                // 以防id没有报错(出现人数为50/112)
                        }
            data.platform = "wxmini";
            data.version = getApp().globalData.API.VERSION;
            var sysInfo = uni.getSystemInfoSync();
            console.log("-----sysinfo----");
            console.log(sysInfo);
            if (sysInfo) {
                data.device_info = JSON.stringify(sysInfo);
            }
            var _mergeParam = that._mergeParam;
            for (var _keyVar in _mergeParam) {
                var _k = _keyVar;
                if (data[_k]) {
                    _k = "_" + _k;
                }
                data[_k] = _mergeParam[_keyVar];
            }
            getsign2(data);
            console.log(a + "-------传参传参------------");
            console.log(data);
            console.log(a + "-------userInfo------------");
            var request = function request() {
                if (needloading) {
                    uni.showLoading({
                        title: "加载中"
                    });
                }
                uni.request({
                    url: url + a,
                    data: data,
                    method: "POST",
                    timeout: 3e4,
                    header: {
                        "content-type": "application/x-www-form-urlencoded",
                        Authorization: authorization,
                        Accept: "application/json"
                    },
                    success: function success(res) {
                        console.log(a + "----res----");
                        console.log(res);
                        if (res.statusCode == 200) {
                            var msg = res.data.msg;
                            if (res.data.code != 0) {
                                // 后端登录过期的处理
                                if (res.data.code != 0 && a == app.API.API_UPDATEUSERINFO || res.data.status == 401) {
                                    console.log("------ddddd22");
                                    msg = "验证信息过期，请重新登录";
                                    _shared.default.wxlogin(function(res2) {
                                        if (needloading) {
                                            uni.hideLoading();
                                        }
                                        uni.showModal({
                                            title: "",
                                            content: msg,
                                            confirmColor: "#61C3D0",
                                            showCancel: false,
                                            success: function success(res1) {
                                                if (res1.confirm) {
                                                    if (typeof callback == "function") {
                                                        callback(res.data);
                                                    }
                                                }
                                            }
                                        });
                                    });
                                } else {
                                    if (needloading) {
                                        uni.hideLoading();
                                    }
                                    uni.showModal({
                                        title: "",
                                        content: msg,
                                        confirmColor: "#61C3D0",
                                        showCancel: false,
                                        success: function success(res1) {
                                            if (res1.confirm) {
                                                if (typeof callback == "function") {
                                                    callback(res.data);
                                                }
                                            }
                                        }
                                    });
                                }
                            } else {
                                if (needloading) {
                                    uni.hideLoading();
                                }
                                _success && _success(res.data.data);
                            }
                        } else {
                            if (needloading) {
                                uni.hideLoading();
                            }
                            if (timer) {
                                return;
                            }
                            timer = setTimeout(function() {
                                clearTimeout(timer);
                                timer = null;
                            }, 800);
                            var logStr = "_prot_".concat(a, "_data_").concat(JSON.stringify(data), "_error_").concat(JSON.stringify(res));
                            that.$log.error(logStr);
                            // 错误日志打印
                            // 发送消息api错误，直接返回
                                                        if (app.API.API_SENDCHAR == a) {
                                callback();
                                return;
                            }
                            uni.showModal({
                                title: "",
                                content: "网络繁忙，请稍后再试！",
                                showCancel: false,
                                confirmColor: "#61C3D0",
                                success: function success(res) {
                                    console.log(res, "网络繁忙");
                                    if (res.confirm) {
                                        //跳回首页
                                        if (pages.length > 1) {
                                            // uni.navigateBack({
                                            // 	delta: 1
                                            // });
                                        }
                                    }
                                }
                            });
                        }
                    },
                    fail: function fail(err) {
                        console.log("----err----");
                        console.log(err);
                        if (needloading) {
                            uni.hideLoading();
                        }
                        if (timer) {
                            return;
                        }
                        timer = setTimeout(function() {
                            clearTimeout(timer);
                            timer = null;
                        }, 800);
                        var logStr = "_prot_".concat(a, "_data_").concat(JSON.stringify(data), "_error2_").concat(JSON.stringify(err));
                        that.$log.error(logStr);
                        // 错误日志打印
                                                var message = "网络繁忙，请稍后再试！";
                        if (err.errMsg === "request:fail -109:net::ERR_ADDRESS_UNREACHABLE") {
                            message = "您的手机网络环境异常";
                        }
                        // 发送消息api错误，直接返回
                                                if (app.API.API_SENDCHAR == a) {
                            callback();
                            return;
                        }
                        uni.showModal({
                            title: "",
                            content: message,
                            showCancel: false,
                            confirmColor: "#61C3D0",
                            success: function success(res) {
                                console.log(err, message);
                                if (res.confirm) {
                                    // uni.navigateBack({
                                    // 	delta: 1
                                    // });
                                }
                            }
                        });
                    }
                });
            };
            request();
        };
        module.exports = {
            request: util.request,
            reLogin: util.reLogin
        };
        /* WEBPACK VAR INJECTION */    }).call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]);
    /***/}, 
/* 19 */
/*!********************************************************************!*\
  !*** /Users/mike/Desktop/works/answers_uniapp/commons/sha1.min.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */ (function(process, global) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
        /*
                                       * [js-sha1]{@link https://github.com/emn178/js-sha1}
                                       *
                                       * @version 0.6.0
                                       * @author Chen, Yi-Cyuan [emn178@gmail.com]
                                       * @copyright Chen, Yi-Cyuan 2014-2017
                                       * @license MIT 
                                       */        !function() {
            "use strict";
            function t(t) {
                t ? (f[0] = f[16] = f[1] = f[2] = f[3] = f[4] = f[5] = f[6] = f[7] = f[8] = f[9] = f[10] = f[11] = f[12] = f[13] = f[14] = f[15] = 0, 
                this.blocks = f) : this.blocks = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 
                this.h0 = 1732584193, this.h1 = 4023233417, this.h2 = 2562383102, this.h3 = 271733878, 
                this.h4 = 3285377520, this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, 
                this.first = !0;
            }
            var h = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) ? window : {}, s = !h.JS_SHA1_NO_NODE_JS && "object" == (typeof process === "undefined" ? "undefined" : _typeof(process)) && process.versions && process.versions.node;
            s && (h = global);
            var i = !h.JS_SHA1_NO_COMMON_JS && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports, e = true && __webpack_require__(/*! !webpack amd options */ 22), r = "0123456789abcdef".split(""), o = [ -2147483648, 8388608, 32768, 128 ], n = [ 24, 16, 8, 0 ], a = [ "hex", "array", "digest", "arrayBuffer" ], f = [], u = function u(h) {
                return function(s) {
                    return new t(!0).update(s)[h]();
                };
            }, c = function c() {
                var h = u("hex");
                s && (h = p(h)), h.create = function() {
                    return new t();
                }, h.update = function(t) {
                    return h.create().update(t);
                };
                for (var i = 0; i < a.length; ++i) {
                    var e = a[i];
                    h[e] = u(e);
                }
                return h;
            }, p = function p(t) {
                var h = eval("require('crypto')"), s = eval("require('buffer').Buffer"), i = function i(_i) {
                    if ("string" == typeof _i) return h.createHash("sha1").update(_i, "utf8").digest("hex");
                    if (_i.constructor === ArrayBuffer) _i = new Uint8Array(_i); else if (void 0 === _i.length) return t(_i);
                    return h.createHash("sha1").update(new s(_i)).digest("hex");
                };
                return i;
            };
            t.prototype.update = function(t) {
                if (!this.finalized) {
                    var s = "string" != typeof t;
                    s && t.constructor === h.ArrayBuffer && (t = new Uint8Array(t));
                    for (var i, e, r = 0, o = t.length || 0, a = this.blocks; r < o; ) {
                        if (this.hashed && (this.hashed = !1, a[0] = this.block, a[16] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] = a[15] = 0), 
                        s) for (e = this.start; r < o && e < 64; ++r) {
                            a[e >> 2] |= t[r] << n[3 & e++];
                        } else for (e = this.start; r < o && e < 64; ++r) {
                            (i = t.charCodeAt(r)) < 128 ? a[e >> 2] |= i << n[3 & e++] : i < 2048 ? (a[e >> 2] |= (192 | i >> 6) << n[3 & e++], 
                            a[e >> 2] |= (128 | 63 & i) << n[3 & e++]) : i < 55296 || i >= 57344 ? (a[e >> 2] |= (224 | i >> 12) << n[3 & e++], 
                            a[e >> 2] |= (128 | i >> 6 & 63) << n[3 & e++], a[e >> 2] |= (128 | 63 & i) << n[3 & e++]) : (i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(++r)), 
                            a[e >> 2] |= (240 | i >> 18) << n[3 & e++], a[e >> 2] |= (128 | i >> 12 & 63) << n[3 & e++], 
                            a[e >> 2] |= (128 | i >> 6 & 63) << n[3 & e++], a[e >> 2] |= (128 | 63 & i) << n[3 & e++]);
                        }
                        this.lastByteIndex = e, this.bytes += e - this.start, e >= 64 ? (this.block = a[16], 
                        this.start = e - 64, this.hash(), this.hashed = !0) : this.start = e;
                    }
                    return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, 
                    this.bytes = this.bytes % 4294967296), this;
                }
            }, t.prototype.finalize = function() {
                if (!this.finalized) {
                    this.finalized = !0;
                    var t = this.blocks, h = this.lastByteIndex;
                    t[16] = this.block, t[h >> 2] |= o[3 & h], this.block = t[16], h >= 56 && (this.hashed || this.hash(), 
                    t[0] = this.block, t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), 
                    t[14] = this.hBytes << 3 | this.bytes >>> 29, t[15] = this.bytes << 3, this.hash();
                }
            }, t.prototype.hash = function() {
                var t, h, s = this.h0, i = this.h1, e = this.h2, r = this.h3, o = this.h4, n = this.blocks;
                for (t = 16; t < 80; ++t) {
                    h = n[t - 3] ^ n[t - 8] ^ n[t - 14] ^ n[t - 16], n[t] = h << 1 | h >>> 31;
                }
                for (t = 0; t < 20; t += 5) {
                    s = (h = (i = (h = (e = (h = (r = (h = (o = (h = s << 5 | s >>> 27) + (i & e | ~i & r) + o + 1518500249 + n[t] << 0) << 5 | o >>> 27) + (s & (i = i << 30 | i >>> 2) | ~s & e) + r + 1518500249 + n[t + 1] << 0) << 5 | r >>> 27) + (o & (s = s << 30 | s >>> 2) | ~o & i) + e + 1518500249 + n[t + 2] << 0) << 5 | e >>> 27) + (r & (o = o << 30 | o >>> 2) | ~r & s) + i + 1518500249 + n[t + 3] << 0) << 5 | i >>> 27) + (e & (r = r << 30 | r >>> 2) | ~e & o) + s + 1518500249 + n[t + 4] << 0, 
                    e = e << 30 | e >>> 2;
                }
                for (;t < 40; t += 5) {
                    s = (h = (i = (h = (e = (h = (r = (h = (o = (h = s << 5 | s >>> 27) + (i ^ e ^ r) + o + 1859775393 + n[t] << 0) << 5 | o >>> 27) + (s ^ (i = i << 30 | i >>> 2) ^ e) + r + 1859775393 + n[t + 1] << 0) << 5 | r >>> 27) + (o ^ (s = s << 30 | s >>> 2) ^ i) + e + 1859775393 + n[t + 2] << 0) << 5 | e >>> 27) + (r ^ (o = o << 30 | o >>> 2) ^ s) + i + 1859775393 + n[t + 3] << 0) << 5 | i >>> 27) + (e ^ (r = r << 30 | r >>> 2) ^ o) + s + 1859775393 + n[t + 4] << 0, 
                    e = e << 30 | e >>> 2;
                }
                for (;t < 60; t += 5) {
                    s = (h = (i = (h = (e = (h = (r = (h = (o = (h = s << 5 | s >>> 27) + (i & e | i & r | e & r) + o - 1894007588 + n[t] << 0) << 5 | o >>> 27) + (s & (i = i << 30 | i >>> 2) | s & e | i & e) + r - 1894007588 + n[t + 1] << 0) << 5 | r >>> 27) + (o & (s = s << 30 | s >>> 2) | o & i | s & i) + e - 1894007588 + n[t + 2] << 0) << 5 | e >>> 27) + (r & (o = o << 30 | o >>> 2) | r & s | o & s) + i - 1894007588 + n[t + 3] << 0) << 5 | i >>> 27) + (e & (r = r << 30 | r >>> 2) | e & o | r & o) + s - 1894007588 + n[t + 4] << 0, 
                    e = e << 30 | e >>> 2;
                }
                for (;t < 80; t += 5) {
                    s = (h = (i = (h = (e = (h = (r = (h = (o = (h = s << 5 | s >>> 27) + (i ^ e ^ r) + o - 899497514 + n[t] << 0) << 5 | o >>> 27) + (s ^ (i = i << 30 | i >>> 2) ^ e) + r - 899497514 + n[t + 1] << 0) << 5 | r >>> 27) + (o ^ (s = s << 30 | s >>> 2) ^ i) + e - 899497514 + n[t + 2] << 0) << 5 | e >>> 27) + (r ^ (o = o << 30 | o >>> 2) ^ s) + i - 899497514 + n[t + 3] << 0) << 5 | i >>> 27) + (e ^ (r = r << 30 | r >>> 2) ^ o) + s - 899497514 + n[t + 4] << 0, 
                    e = e << 30 | e >>> 2;
                }
                this.h0 = this.h0 + s << 0, this.h1 = this.h1 + i << 0, this.h2 = this.h2 + e << 0, 
                this.h3 = this.h3 + r << 0, this.h4 = this.h4 + o << 0;
            }, t.prototype.hex = function() {
                this.finalize();
                var t = this.h0, h = this.h1, s = this.h2, i = this.h3, e = this.h4;
                return r[t >> 28 & 15] + r[t >> 24 & 15] + r[t >> 20 & 15] + r[t >> 16 & 15] + r[t >> 12 & 15] + r[t >> 8 & 15] + r[t >> 4 & 15] + r[15 & t] + r[h >> 28 & 15] + r[h >> 24 & 15] + r[h >> 20 & 15] + r[h >> 16 & 15] + r[h >> 12 & 15] + r[h >> 8 & 15] + r[h >> 4 & 15] + r[15 & h] + r[s >> 28 & 15] + r[s >> 24 & 15] + r[s >> 20 & 15] + r[s >> 16 & 15] + r[s >> 12 & 15] + r[s >> 8 & 15] + r[s >> 4 & 15] + r[15 & s] + r[i >> 28 & 15] + r[i >> 24 & 15] + r[i >> 20 & 15] + r[i >> 16 & 15] + r[i >> 12 & 15] + r[i >> 8 & 15] + r[i >> 4 & 15] + r[15 & i] + r[e >> 28 & 15] + r[e >> 24 & 15] + r[e >> 20 & 15] + r[e >> 16 & 15] + r[e >> 12 & 15] + r[e >> 8 & 15] + r[e >> 4 & 15] + r[15 & e];
            }, t.prototype.toString = t.prototype.hex, t.prototype.digest = function() {
                this.finalize();
                var t = this.h0, h = this.h1, s = this.h2, i = this.h3, e = this.h4;
                return [ t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, h >> 24 & 255, h >> 16 & 255, h >> 8 & 255, 255 & h, s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e ];
            }, t.prototype.array = t.prototype.digest, t.prototype.arrayBuffer = function() {
                this.finalize();
                var t = new ArrayBuffer(20), h = new DataView(t);
                return h.setUint32(0, this.h0), h.setUint32(4, this.h1), h.setUint32(8, this.h2), 
                h.setUint32(12, this.h3), h.setUint32(16, this.h4), t;
            };
            var y = c();
            i ? module.exports = y : (h.sha1 = y, e && !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return y;
            }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));
        }();
        /* WEBPACK VAR INJECTION */    }).call(this, __webpack_require__(/*! ./../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/node-libs-browser/mock/process.js */ 20), __webpack_require__(/*! ./../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/global.js */ 3));
    /***/}, 
/* 20 */
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    exports.nextTick = function nextTick(fn) {
        var args = Array.prototype.slice.call(arguments);
        args.shift();
        setTimeout(function() {
            fn.apply(null, args);
        }, 0);
    };
    exports.platform = exports.arch = exports.execPath = exports.title = "browser";
    exports.pid = 1;
    exports.browser = true;
    exports.env = {};
    exports.argv = [];
    exports.binding = function(name) {
        throw new Error("No such module. (Possibly not yet loaded)");
    };
    (function() {
        var cwd = "/";
        var path;
        exports.cwd = function() {
            return cwd;
        };
        exports.chdir = function(dir) {
            if (!path) path = __webpack_require__(/*! path */ 21);
            cwd = path.resolve(dir, cwd);
        };
    })();
    exports.exit = exports.kill = exports.umask = exports.dlopen = exports.uptime = exports.memoryUsage = exports.uvCounters = function() {};
    exports.features = {};
    /***/}, 
/* 21 */
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */ (function(process) {
        // .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
        // backported and transplited with Babel, with backwards-compat fixes
        // Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.
        // resolves . and .. elements in a path array with directory names there
        // must be no slashes, empty elements, or device names (c:\) in the array
        // (so also no leading and trailing slashes - it does not distinguish
        // relative and absolute paths)
        function normalizeArray(parts, allowAboveRoot) {
            // if the path tries to go above the root, `up` ends up > 0
            var up = 0;
            for (var i = parts.length - 1; i >= 0; i--) {
                var last = parts[i];
                if (last === ".") {
                    parts.splice(i, 1);
                } else if (last === "..") {
                    parts.splice(i, 1);
                    up++;
                } else if (up) {
                    parts.splice(i, 1);
                    up--;
                }
            }
            // if the path is allowed to go above the root, restore leading ..s
                        if (allowAboveRoot) {
                for (;up--; up) {
                    parts.unshift("..");
                }
            }
            return parts;
        }
        // path.resolve([from ...], to)
        // posix version
                exports.resolve = function() {
            var resolvedPath = "", resolvedAbsolute = false;
            for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
                var path = i >= 0 ? arguments[i] : process.cwd();
                // Skip empty and invalid entries
                                if (typeof path !== "string") {
                    throw new TypeError("Arguments to path.resolve must be strings");
                } else if (!path) {
                    continue;
                }
                resolvedPath = path + "/" + resolvedPath;
                resolvedAbsolute = path.charAt(0) === "/";
            }
            // At this point the path should be resolved to a full absolute path, but
            // handle relative paths to be safe (might happen when process.cwd() fails)
            // Normalize the path
                        resolvedPath = normalizeArray(filter(resolvedPath.split("/"), function(p) {
                return !!p;
            }), !resolvedAbsolute).join("/");
            return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
        };
        // path.normalize(path)
        // posix version
                exports.normalize = function(path) {
            var isAbsolute = exports.isAbsolute(path), trailingSlash = substr(path, -1) === "/";
            // Normalize the path
                        path = normalizeArray(filter(path.split("/"), function(p) {
                return !!p;
            }), !isAbsolute).join("/");
            if (!path && !isAbsolute) {
                path = ".";
            }
            if (path && trailingSlash) {
                path += "/";
            }
            return (isAbsolute ? "/" : "") + path;
        };
        // posix version
                exports.isAbsolute = function(path) {
            return path.charAt(0) === "/";
        };
        // posix version
                exports.join = function() {
            var paths = Array.prototype.slice.call(arguments, 0);
            return exports.normalize(filter(paths, function(p, index) {
                if (typeof p !== "string") {
                    throw new TypeError("Arguments to path.join must be strings");
                }
                return p;
            }).join("/"));
        };
        // path.relative(from, to)
        // posix version
                exports.relative = function(from, to) {
            from = exports.resolve(from).substr(1);
            to = exports.resolve(to).substr(1);
            function trim(arr) {
                var start = 0;
                for (;start < arr.length; start++) {
                    if (arr[start] !== "") break;
                }
                var end = arr.length - 1;
                for (;end >= 0; end--) {
                    if (arr[end] !== "") break;
                }
                if (start > end) return [];
                return arr.slice(start, end - start + 1);
            }
            var fromParts = trim(from.split("/"));
            var toParts = trim(to.split("/"));
            var length = Math.min(fromParts.length, toParts.length);
            var samePartsLength = length;
            for (var i = 0; i < length; i++) {
                if (fromParts[i] !== toParts[i]) {
                    samePartsLength = i;
                    break;
                }
            }
            var outputParts = [];
            for (var i = samePartsLength; i < fromParts.length; i++) {
                outputParts.push("..");
            }
            outputParts = outputParts.concat(toParts.slice(samePartsLength));
            return outputParts.join("/");
        };
        exports.sep = "/";
        exports.delimiter = ":";
        exports.dirname = function(path) {
            if (typeof path !== "string") path = path + "";
            if (path.length === 0) return ".";
            var code = path.charCodeAt(0);
            var hasRoot = code === 47 /*/*/;
            var end = -1;
            var matchedSlash = true;
            for (var i = path.length - 1; i >= 1; --i) {
                code = path.charCodeAt(i);
                if (code === 47 /*/*/) {
                    if (!matchedSlash) {
                        end = i;
                        break;
                    }
                } else {
                    // We saw the first non-path separator
                    matchedSlash = false;
                }
            }
            if (end === -1) return hasRoot ? "/" : ".";
            if (hasRoot && end === 1) {
                // return '//';
                // Backwards-compat fix:
                return "/";
            }
            return path.slice(0, end);
        };
        function basename(path) {
            if (typeof path !== "string") path = path + "";
            var start = 0;
            var end = -1;
            var matchedSlash = true;
            var i;
            for (i = path.length - 1; i >= 0; --i) {
                if (path.charCodeAt(i) === 47 /*/*/) {
                    // If we reached a path separator that was not part of a set of path
                    // separators at the end of the string, stop now
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) return "";
            return path.slice(start, end);
        }
        // Uses a mixed approach for backwards-compatibility, as ext behavior changed
        // in new Node.js versions, so only basename() above is backported here
                exports.basename = function(path, ext) {
            var f = basename(path);
            if (ext && f.substr(-1 * ext.length) === ext) {
                f = f.substr(0, f.length - ext.length);
            }
            return f;
        };
        exports.extname = function(path) {
            if (typeof path !== "string") path = path + "";
            var startDot = -1;
            var startPart = 0;
            var end = -1;
            var matchedSlash = true;
            // Track the state of characters (if any) we see before our first dot and
            // after any path separator we find
                        var preDotState = 0;
            for (var i = path.length - 1; i >= 0; --i) {
                var code = path.charCodeAt(i);
                if (code === 47 /*/*/) {
                    // If we reached a path separator that was not part of a set of path
                    // separators at the end of the string, stop now
                    if (!matchedSlash) {
                        startPart = i + 1;
                        break;
                    }
                    continue;
                }
                if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // extension
                    matchedSlash = false;
                    end = i + 1;
                }
                if (code === 46 /*.*/) {
                    // If this is our first dot, mark it as the start of our extension
                    if (startDot === -1) startDot = i; else if (preDotState !== 1) preDotState = 1;
                } else if (startDot !== -1) {
                    // We saw a non-dot and non-path separator before our dot, so we should
                    // have a good chance at having a non-empty extension
                    preDotState = -1;
                }
            }
            if (startDot === -1 || end === -1 || 
            // We saw a non-dot character immediately before the dot
            preDotState === 0 || 
            // The (right-most) trimmed path component is exactly '..'
            preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
                return "";
            }
            return path.slice(startDot, end);
        };
        function filter(xs, f) {
            if (xs.filter) return xs.filter(f);
            var res = [];
            for (var i = 0; i < xs.length; i++) {
                if (f(xs[i], i, xs)) res.push(xs[i]);
            }
            return res;
        }
        // String.prototype.substr - negative index don't work in IE8
                var substr = "ab".substr(-1) === "b" ? function(str, start, len) {
            return str.substr(start, len);
        } : function(str, start, len) {
            if (start < 0) start = str.length + start;
            return str.substr(start, len);
        };
        /* WEBPACK VAR INJECTION */    }).call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 20));
    /***/}, 
/* 22 */
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ function(module, exports) {
    /* WEBPACK VAR INJECTION */ (function(__webpack_amd_options__) {
        /* globals __webpack_amd_options__ */
        module.exports = __webpack_amd_options__;
        /* WEBPACK VAR INJECTION */    }).call(this, {});
    /***/}, 
/* 23 */
/*!***************************************************************!*\
  !*** /Users/mike/Desktop/works/answers_uniapp/commons/log.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ function(module, exports) {
    var log = wx.getRealtimeLogManager ? wx.getRealtimeLogManager() : null;
    module.exports = {
        info: function info() {
            if (!log) return;
            // log.info.apply(log, arguments)
                },
        warn: function warn() {
            if (!log) return;
            // log.warn.apply(log, arguments)
                },
        error: function error() {
            if (!log) return;
            // log.error.apply(log, arguments)
                },
        setFilterMsg: function setFilterMsg(msg) {
            // 从基础库2.7.3开始支持
            if (!log || !log.setFilterMsg) return;
            if (typeof msg !== "string") return;
            log.setFilterMsg(msg);
        },
        addFilterMsg: function addFilterMsg(msg) {
            // 从基础库2.8.1开始支持
            if (!log || !log.addFilterMsg) return;
            if (typeof msg !== "string") return;
            log.addFilterMsg(msg);
        }
    };
    /***/}, 
/* 24 */
/*!**********************************************************************!*\
  !*** /Users/mike/Desktop/works/answers_uniapp/commons/statistics.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */ (function(uni) {
        module.exports = {
            report: function report(eventId) {
                var eventValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default";
                if (typeof uni.report === "function") {
                    uni.report(eventId, eventValue);
                }
            }
        };
        /* WEBPACK VAR INJECTION */    }).call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]);
    /***/}, 
/* 25 */
/*!*****************************************************************!*\
  !*** /Users/mike/Desktop/works/answers_uniapp/commons/music.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ function(module, exports, __webpack_require__) {
    "use strict";
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */    
    /* WEBPACK VAR INJECTION */
    /* WEBPACK VAR INJECTION */
    (function(uni) {
        var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var wm = new _vue.default();
        var backgroundMusic = uni.createInnerAudioContext();
        function music(fileName, loop) {
            var AppMusic = uni.createInnerAudioContext();
            if (typeof loop !== "undefined") {
                AppMusic.loop = loop;
            }
            var audio_url = wm.API.DEVAUDIOURL;
            if (wm.API.DEV == "prod") {
                audio_url = wm.API.AUDIOURL;
            }
            AppMusic.src = audio_url + fileName;
            AppMusic.play();
        }
        // 首页背景音
                function backgroundSound() {
            backgroundMusic.loop = true;
            var audio_url = wm.API.DEVAUDIOURL;
            if (wm.API.DEV == "prod") {
                audio_url = wm.API.AUDIOURL;
            }
            console.log("------9999");
            console.log(audio_url);
            backgroundMusic.src = audio_url + "background.mp3";
            backgroundMusic.play();
        }
        // 停止首页背景音
                function stopBGSound() {
            backgroundMusic.stop();
        }
        // 点击按钮
                function clickButton() {
            music("button.mp3");
        }
        // 回答错误
                function answerWrong() {
            music("answer_wrong.mp3");
        }
        // 回答正确
                function answerCorrect() {
            music("answer_correct.mp3");
        }
        // 倒计时
                function timer() {
            music("timer.mp3");
        }
        // 数字滚动
                function turnNumbers() {
            music("turn_numbers.mp3");
        }
        // 纸张
                function turnPaper() {
            music("turn_paper.mp3");
        }
        // 挑战失败
                function gameFailure() {
            music("game_failure.mp3");
        }
        // 挑战成功
                function gameWin() {
            music("game_win.mp3");
        }
        // 页面中调用 this.music.*
                module.exports = {
            backgroundSound: backgroundSound,
            stopBGSound: stopBGSound,
            clickButton: clickButton,
            answerWrong: answerWrong,
            answerCorrect: answerCorrect,
            timer: timer,
            turnNumbers: turnNumbers,
            turnPaper: turnPaper,
            gameFailure: gameFailure,
            gameWin: gameWin
        };
        /* WEBPACK VAR INJECTION */    }).call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]);
    /***/}, , , , , , , , , , , , , , , , , , , , , , , 
/* 26 */
/* 27 */
/* 28 */
/* 29 */
/* 30 */
/* 31 */
/* 32 */
/* 33 */
/* 34 */
/* 35 */
/* 36 */
/* 37 */
/* 38 */
/* 39 */
/* 40 */
/* 41 */
/* 42 */
/* 43 */
/* 44 */
/* 45 */
/* 46 */
/* 47 */
/* 48 */
/* 49 */
/* 50 */
/*!******************************************************************!*\
  !*** /Users/mike/Desktop/works/answers_uniapp/commons/hashid.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ , , function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(t, e) {
        if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ exports ], __WEBPACK_AMD_DEFINE_FACTORY__ = e, 
        __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); else {
            var n;
        }
    }("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : this, function(t) {
        "use strict";
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
            for (var n = 0, r = new Array(e); n < e; n++) {
                r[n] = t[n];
            }
            return r;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.onlyChars = t.withoutChars = t.keepUnique = t.default = void 0;
        var i = function() {
            function t(t, n, r, i) {
                if (void 0 === t && (t = ""), void 0 === n && (n = 0), void 0 === r && (r = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"), 
                void 0 === i && (i = "cfhistuCFHISTU"), this.minLength = n, "number" != typeof n) throw new TypeError("Hashids: Provided 'minLength' has to be a number (is " + (typeof n === "undefined" ? "undefined" : _typeof(n)) + ")");
                if ("string" != typeof t) throw new TypeError("Hashids: Provided 'salt' has to be a string (is " + (typeof t === "undefined" ? "undefined" : _typeof(t)) + ")");
                if ("string" != typeof r) throw new TypeError("Hashids: Provided alphabet has to be a string (is " + (typeof r === "undefined" ? "undefined" : _typeof(r)) + ")");
                var f = Array.from(t), c = Array.from(r), d = Array.from(i);
                this.salt = f;
                var g = h(c);
                if (g.length < o) throw new Error("Hashids: alphabet must contain at least " + o + " unique characters, provided: " + g.join(""));
                this.alphabet = u(g, d);
                var b, y, v, I = l(d, g);
                (this.seps = p(I, f), 0 === this.seps.length || this.alphabet.length / this.seps.length > s) && (b = Math.ceil(this.alphabet.length / s)) > this.seps.length && (y = b - this.seps.length, 
                (v = this.seps).push.apply(v, e(this.alphabet.slice(0, y))), this.alphabet = this.alphabet.slice(y));
                this.alphabet = p(this.alphabet, f);
                var A = Math.ceil(this.alphabet.length / a);
                this.alphabet.length < 3 ? (this.guards = this.seps.slice(0, A), this.seps = this.seps.slice(A)) : (this.guards = this.alphabet.slice(0, A), 
                this.alphabet = this.alphabet.slice(A)), this.guardsRegExp = m(this.guards), this.sepsRegExp = m(this.seps), 
                this.allowedCharsRegExp = w([].concat(e(this.alphabet), e(this.guards), e(this.seps)));
            }
            var r = t.prototype;
            return r.encode = function(t) {
                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) {
                    r[i - 1] = arguments[i];
                }
                var o = "";
                return (r = Array.isArray(t) ? t : [].concat(e(null != t ? [ t ] : []), e(r))).length ? (r.every(f) || (r = r.map(function(t) {
                    return "bigint" == typeof t || "number" == typeof t ? t : y(String(t));
                })), r.every(c) ? this._encode(r).join("") : o) : o;
            }, r.decode = function(t) {
                return t && "string" == typeof t && 0 !== t.length ? this._decode(t) : [];
            }, r.encodeHex = function(t) {
                switch (typeof t === "undefined" ? "undefined" : _typeof(t)) {
                  case "bigint":
                    t = t.toString(16);
                    break;

                  case "string":
                    if (!/^[0-9a-fA-F]+$/.test(t)) return "";
                    break;

                  default:
                    throw new Error("Hashids: The provided value is neither a string, nor a BigInt (got: " + (typeof t === "undefined" ? "undefined" : _typeof(t)) + ")");
                }
                var e = v(t, 12, function(t) {
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
                }, 0), o = [ r[i % r.length] ], s = o.slice(), a = this.seps, h = this.guards;
                if (t.forEach(function(i, h) {
                    var u, l = s.concat(n.salt, r);
                    r = p(r, l);
                    var f = d(i, r);
                    if ((u = o).push.apply(u, e(f)), h + 1 < t.length) {
                        var c = f[0].codePointAt(0) + h, g = "bigint" == typeof i ? Number(i % BigInt(c)) : i % c;
                        o.push(a[g % a.length]);
                    }
                }), o.length < this.minLength) {
                    var u = (i + o[0].codePointAt(0)) % h.length;
                    if (o.unshift(h[u]), o.length < this.minLength) {
                        var l = (i + o[2].codePointAt(0)) % h.length;
                        o.push(h[l]);
                    }
                }
                for (var f = Math.floor(r.length / 2); o.length < this.minLength; ) {
                    var c, g;
                    r = p(r, r), (c = o).unshift.apply(c, e(r.slice(f))), (g = o).push.apply(g, e(r.slice(0, f)));
                    var b = o.length - this.minLength;
                    if (b > 0) {
                        var y = b / 2;
                        o = o.slice(y, y + this.minLength);
                    }
                }
                return o;
            }, r.isValidId = function(t) {
                return this.allowedCharsRegExp.test(t);
            }, r._decode = function(t) {
                if (!this.isValidId(t)) throw new Error("The provided ID (" + t + ") is invalid, as it contains characters that do not exist in the alphabet (" + this.guards.join("") + this.seps.join("") + this.alphabet.join("") + ")");
                var r = t.split(this.guardsRegExp), i = r[3 === r.length || 2 === r.length ? 1 : 0];
                if (0 === i.length) return [];
                for (var o, s = i[Symbol.iterator]().next().value, a = i.slice(s.length).split(this.sepsRegExp), h = this.alphabet, u = [], l = function(t, e) {
                    var r;
                    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                        if (Array.isArray(t) || (r = n(t)) || e && t && "number" == typeof t.length) {
                            r && (t = r);
                            var i = 0;
                            return function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                };
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    return (r = t[Symbol.iterator]()).next.bind(r);
                }(a); !(o = l()).done; ) {
                    var f = o.value, c = p(h, [ s ].concat(e(this.salt), e(h)).slice(0, h.length));
                    u.push(g(Array.from(f), c)), h = c;
                }
                return this._encode(u).join("") !== t ? [] : u;
            }, t;
        }();
        t.default = i;
        var o = 16, s = 3.5, a = 12, h = function h(t) {
            return Array.from(new Set(t));
        };
        t.keepUnique = h;
        var u = function u(t, e) {
            return t.filter(function(t) {
                return !e.includes(t);
            });
        };
        t.withoutChars = u;
        var l = function l(t, e) {
            return t.filter(function(t) {
                return e.includes(t);
            });
        };
        t.onlyChars = l;
        var f = function f(t) {
            return "bigint" == typeof t || !Number.isNaN(Number(t)) && Math.floor(Number(t)) === t;
        }, c = function c(t) {
            return "bigint" == typeof t || t >= 0 && Number.isSafeInteger(t);
        };
        function p(t, e) {
            if (0 === e.length) return t;
            for (var n, r = t.slice(), i = r.length - 1, o = 0, s = 0; i > 0; i--, o++) {
                s += n = e[o %= e.length].codePointAt(0);
                var a = (n + o + s) % i, h = r[i], u = r[a];
                r[a] = h, r[i] = u;
            }
            return r;
        }
        var d = function d(t, e) {
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
        }, g = function g(t, e) {
            return t.reduce(function(n, r) {
                var i = e.indexOf(r);
                if (-1 === i) throw new Error("The provided ID (" + t.join("") + ") is invalid, as it contains characters that do not exist in the alphabet (" + e.join("") + ")");
                if ("bigint" == typeof n) return n * BigInt(e.length) + BigInt(i);
                var o = n * e.length + i;
                if (Number.isSafeInteger(o)) return o;
                if ("function" == typeof BigInt) return BigInt(n) * BigInt(e.length) + BigInt(i);
                throw new Error("Unable to decode the provided string, due to lack of support for BigInt numbers in the current environment");
            }, 0);
        }, b = /^\+?[0-9]+$/, y = function y(t) {
            return b.test(t) ? parseInt(t, 10) : NaN;
        }, v = function v(t, e, n) {
            return Array.from({
                length: Math.ceil(t.length / e)
            }, function(r, i) {
                return n(t.slice(i * e, (i + 1) * e));
            });
        }, m = function m(t) {
            return new RegExp(t.map(function(t) {
                return I(t);
            }).sort(function(t, e) {
                return e.length - t.length;
            }).join("|"));
        }, w = function w(t) {
            return new RegExp("^[" + t.map(function(t) {
                return I(t);
            }).sort(function(t, e) {
                return e.length - t.length;
            }).join("") + "]+$");
        }, I = function I(t) {
            return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        };
    });
    /***/} ] ]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map