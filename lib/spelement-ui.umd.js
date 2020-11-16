(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["spelement-ui"] = factory();
	else
		root["spelement-ui"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0f5d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_296869ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("47ba");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_296869ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_296869ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1148":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_19017af2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cc71");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_19017af2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_19017af2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "333a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "45f9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_0e13f56e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bdff");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_0e13f56e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_0e13f56e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "47ba":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4a38":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAKQklEQVR4Xu2df4hcVxXHz30zERJcxUCjseAPij9qKKE2loC7O+/c2W1WaS1tmk2i9QcowR8Ff0CwotCgaFXUij8otSL+ililGNptLVl3zpuNSalufxgafxXrz9Y0gtBqIWN33pFrd+tm5s3emXn3zcx799y/Fva+c8/5ns87c999972nQJrXCiivo5fgQQDwHAIBQADwXAHPw5cKIAB4roDn4UsFEAA8V8Dz8KUCCACeK+B5+FIBBADPFfA8fKkAAoDnCngevlQAAcBPBYgojOM4bI2+Wq0e8kkRbyuAAQAAqCXZESKiAOCBAgLAs0mWCnAu7FIBPDj5/xeiVIARqQBLS0sb5ubmmocOHYoHCd8oALC4uPi6ycnJXw8y7taxhvoTMD8//8JyufxtAGiOjY3t37FjxzODEmPYAJjkN5vNHwHATxHx4KDiHhkAFhcXtzabze8CwNSKU0cAYD8inh2EGMMEYE3yt5lYmflWrfWBQcQ9EgAsLCxcEATBbQBwSYtDc5s3b963ffv2p7MWY1gAtCZ/NU5m/oHW+m1Zxz0SAHQSYcW5e5aXl/dNT08/maUYwwDAEvft9Xp9dtBzoaHNAdYTQyk1f/bs2X0zMzP/zAqCQQNgSf6RsbGx2UHOgVZ1HRoAxgGLKFQqlfZOTk7+IwsIBgmAJc47AWB2UHOfkfgJWOuERZxjjUZj78zMzN9dQzAoACyV7u5GozG7a9euzOc8nfQbagVYdcoi0glm3ouIf3MJwSAAWC8uZj66adOmPTt37nzKZVy92hoJAGw/B8z8C2aerVarf+41wE79swbAUtkWzJmf5RynW51GBgAbBABwf7lcnp2YmHi02+DW65clAJbk10ul0p6s5ja9ajNSANggYOZfxXE8OzU19fteA23tnxUAluQfB4BrEPF0Wv9dHT9yANggAICHgyCYrVQqv0kjQhYAWH7z72Pm3dVq9bE0frs+diQBsEBwqlQqzQ77JkpSItYBYKlcLu+emJj4i+sEprU3sgB0gGBkk7/OFc1DzWZz99TUlJO5S9qEj9w6gC2gNWcVjOqZ3xrDGp85CIKrK5XKI7Y4h/X/ka4Aa88q8/colv1OiTMQNBoNnp6eTjVXyRqMXACQtQg+2xcAfM6+z5tCPc/7c+FLBfCcBAFAAPBcAc/DlwogAHiugOfhZ14BiKj1AUzPJe85/Pch4m97PqrLAzIFoFarHVRKfb5LX6RbsgJHEPGqrMTJDAAiej4AmF29G7Jy3iO704j4syzizRKArwLAdVk47aHNXyLipVnEnQkAtVptm1Lq4VaHlVJ/ZGZn+/qyEGREbLa9uQQA3oWI33HtXyYAENEdAHBFgrNvR8Tvuw6iSPbm5+dfVi6X204SpdTjYRie7zpW5wDUarU3K6XuSjj7T4ZhuN11AEW0R0RfA4APJGj48TAMP+MyZucARFH0ADNf3OpkEARXVioVUxmkWRQ4duzYi5aXlzs9FrfV5aZSpwAQ0XsB4OaE+I4j4rhkvnsFiOizAPDR1iOY+Wat9fu7t7R+T6cARFH0GDO/NKF06TAMZUGoh6wxc6lerz/DzG05iuP4kmq1+kAP5jp2dQYAEd0IANcnjHQPIr7JhbO+2SCiTwDApxKqwB1a6ytd6OEEgIWFhZcrpf6glColOPUGRFxy4ayPNojIPDs4lgDB5Vrrtsl2rxo5AYCIvgcA1yYM/mNEnO3VKen/fwWI6EMAcFOCJvcj4o60WqUGIIqiCWZeTHKEmV+rtf5dWid9P56IHgeAra06xHF8oFqt3ppGn9QAENFRAJhOmPh9KwzDd6dxTo59VgEieg8AJCX69MaNG1+T5hHzVAAQkSn7pvy3tQ0bNpw/Pj5uyJXmQAEiMg/EvirhRLshDMNP9jtEWgAeAoC21T1m/orW+oP9OiXHtStgXiAVx7F5s1pSu7DfPQN9A0BE5pLPXPolnf0vGB8f/5ck0q0CRGSu/dtWWQHgFkQ0i3A9t74AOHHixOZGo3EKAF6SMOKnEdFcv0pzrAARzZg3iyaZVUr1tdjWFwBRFH2JmT+c5Agi9mXTsVaFNUdE5oprIiHAOURMugO7rhY9J6ter1/MzEvMHCRYvh4RP1dY9UcgsFqt9kal1M87uHItIh7uxc2eAajVaoeVUm9tHYSZn9Zam21g0jJWgIjuBoCk5fUHAeBSRFzu1oWeACCiywHAvNgwqV2HiF/vdmDp178C9Xr9ojiOT3awcBARv9Ct9V4BmF/zdu+1Y5xGxLaVqm6dkH69K1Cr1W5TSrUtsyulziildlQqlb92Y7VrAIjIrOp9M8koM79Ta21e/S5tQAqYG3BBEPypQz5u0lp/pBtXugLg1KlTzztz5oy5o3dRgtFHEPHV3QwmfdwqQERmedgsE7c1Zt6ptb7PNmJXAERR9DFmTtyLppS6OgzDn9gGkv+7V8CydeyHiLjfNqoVgHq9/so4ju8FgBcnGHsQEV9vG0T+n50CURR9kZk7lfurENF8iaVjswJARF8GgMR1/WazednU1JSZGEobkgJm61gURYmXfeY2vda6khYA7vAbs8jMI7PPb9CffF1YWMj0E7NBEDynexzH1hM1CIIbOiTafAw16gSB1TARJQIwJOATh2Xmk1rrgT5zQERmUtz6zaNRkmXVl+IDAABPIGLSjanMEtJpB3RmA/Zv2AsAYNA3ofJQGVeY8QOAOI7fUa1WE3cn9X/yJB8ZRdEeZjYffcxD8wMApdTRMAx3DSIjURTdwsxD+dBjH/H5AcCKMFcg4lwfInV9iPniaRzH5nZ42xNQXRsZbEd/AFBK3RmG4Vuy1Ndc/q1zyZXl0P3a9gcAoxAzX6O1vr1ftdY7joheoZQ6nqOz34TjFwAA8GSpVLpwcnLS+bcGoyg6zMxtm2GygM2hTe8AMFXgUa31BQ5FNA9ndHr41eUwWdjyD4AVFc3yp5kU/jutqlEUHWXmtqef0tod0PHeAgBKKfPV0Rv7vTJY2QJnnrpJ2os/oPylHsZfAFalM1cHzPyNLVu2HN22bdt/bJKaxCulDjBzz9usbbaH8H8BYFV0Zn5KKXWvuU2qlHqCmU+XSiWO43iLUuo8s+OJmS/rsPdhCLlzMqQA4ETG/BoRAPKbOyeeCwBOZMyvEQEgv7lz4rkA4ETG/BoRAPKbOyeeCwBOZMyvEQEgv7lz4rkA4ETG/BoRAPKbOyeeCwBOZMyvEQEgv7lz4rkA4ETG/BoRAPKbOyeeCwBOZMyvEQEgv7lz4rkA4ETG/BoRAPKbOyeeCwBOZMyvEQEgv7lz4rkA4ETG/BpJDcA5755Jel/N6vts1nuXja2P+X8/truxu5q7bt61k988J3seBEGU6h1BRRNE4jlXAetLokSwYisgABQ7v9boBACrRMXuIAAUO7/W6AQAq0TF7iAAFDu/1ugEAKtExe4gABQ7v9boBACrRMXuIAAUO7/W6AQAq0TF7iAAFDu/1ugEAKtExe4gABQ7v9boBACrRMXu8F/MsoO9AkeF7gAAAABJRU5ErkJggg=="

/***/ }),

/***/ "5919":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_55ab70e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f90f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_55ab70e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_55ab70e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6800":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "718d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7546");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7546":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7f02":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "897e":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAALUElEQVR4Xu2dTXLcthLHAXngbZITPPkEUU5g6QSWTmD7BJYWgymvLK9cAy4knyDyCd7oBE85QSYniHSCSFuLM0j9p0A9akwSHwQ5AAlWaaPhB9D9A9DdaACUpGvUEqCjrn2qPEkAjByCBEACYOQSGHn1Uw+QABi5BEZe/UH1AEKIA0LIT4SQA0rpz9CtlHKfEIK/4nqQUi739vZuptPpTdf6v7i4+Pn79+9vKKXHhJCiTPj+dR/f19UvWgCEEK8ppYdSSigdf2UlF/W+I4QsKaVQ9HIymSzPzs7udULx9bsQ4gMh5LxQfMV7Ua4zzvnS1zdt3xMNAKp1vyaEoCUdNlT0GgrP83zx8ePHW1uB+LpfCPE7IeSdwfsAJCC4MrjX+y1BAwClSynfqu6zqoUXArkmhCwYY4s+W3idNubz+Tml9JOltq4YY2d9lz84AEpj5qnq2uvkeCelvFqv11e7bOnbhUP5Hx8f/27o9pu4wFDwvs8hIRgAILg8zz9IKaH4jbFUc2FcP99Vl6lr1VmWnUopL3T3Nfx+Tyk96ctA3DkAQ1F8oVAhxIIQ8qYFAMWj6Ak6twt2BoCF4h8opefT6fTSg1A7f4UQApY9jFUfV+cQ7ASA+XwOww7uUZNhRyil3yaTyWnfhlEbzXkGAHGMy9lsdtamTE3P9grAly9f9l+8eAH3qMmNQ3nvKKXv+hoHfQrX0QPQFeGKc/5ed5PL770BYBAUeXLpGGPvYmr1ZcGreMWfLspobKmUnnUxDHYOgHKL/mvQ6h8IIad9GD6+lbP9Pt/DQOn93m2CTgHIsgyhWii/ya1D/aD8wz793y4hUEMdfHrMS3i9KKVHPofGzgBQXb7WcqeU/jWZTA5j7fLrtKuGAriE//FKACEIHR/5aiydAGAaB4/RyrdRpopqnlJKEdzy2RssGWNHPhqNVwDUeA8rHxM2jReUP51OTSZLdK8K/veOQFhwzk/aVt4bAEr5/9PE7zflHZPyywpSwa9LTHC1VZySY2vPwAsANsonhFxzzrU9hA8BhfoO2AeU0isp5a8eyvhbG3ugNQA2yh+qweeqRDVxhIhoG/tgyTn/zbUMrQBIyncV+/+f89EbSCk/z2YzgGR9tQJACAEf36Q7H5Sfby1lzQM+bIPVavXKJS/CGQAhBHx85LyZXN4jWCYfje0eIQS8InhRLtcN5/zI9kEnAGwKOlaL31YRxf3z+fwYBqKLXeASJbQGwHKy444xduAjYOEq0BifUzJGXoGtcXjLOX9lU2crAJTRh5muxnn8ogAuRNoUfsj3toDAari1AsDC6INuvnLOEQJNl6MEHCGw6gWMAbAZ9zG7xxjbT12/o+ZLjzlCYNwLGAGgpjfR9eumdYuiGxegvYiG/wbLxgeBGPcCRgBYdv13nHMjG2H4qvNXQ9tUMynlyWw2w3R046UFQLklCPgYXcnwMxKT002WKedGcy5aAIQQWOVi2qJT63dSrdlDygtDppFRkolJdLARAIdVLmnsN9Ol810qzQ7T7trLZI6gFgCHNW6p9WtV4ucGC3tAawzWAmDxkU2taEdpy35ENry3CCGw9N1kKGjMF6gEwKH1E8bYL8nv7w80i6GgMSBXCYBt609ZPv0pvvwlQ6+gMWGkEgBLyx9lSsbfDhhQATp4aY1XkzfwAwAOUafU/es00OHvhnkZtQ20CgC4GLrFm+Uq/cE5t7m/Q3GM79UmvUBTTsYzAExeti3iZP3vHrosy5Bh3JRqXusOPgPAIfAD98/rWrXdizO+Epg03Dov7RkADsYf4Zxrw8nxiTS+Eus8grqG+qQ8E4oqxJLG/0BY0U3a1Q3VTwC4dP8p6ycQ7atiCCGwcrgyj7BuXuAJAJdNDZIBGBYAGmOwsrcuAyBtq5MMQFuJdXu/ZhiojAhuALCIK2/XoNXCxG7FMc63Nw0DVQb7BgCH2P9GuskDCA+yJm+gFgCX8T8BEJ7yVW9eu1VtEwD/WGT8FjV/4JybZgmHKa0BlkqzcuuHIZs6+v8QXYoBBApQnR1QZbTTFgZgAiBcACr3K64EwNUATD1AoNpvMOorATCcT66qbeoBAmWgLqejDgDX7c3vOee/BCqDURerblj3DUCKAwSKWYNh/6MXIISwDgEX9U6BoEAJIIRU6bUyDpAACFeJbUqWAGgjvQE8m2XZcmsjysrAHXUNAyc3MGxKKvRaPR3skgaOqqdcgOgAqFwuvpkNtFhnVtQ67f4Vtv6h02fufWNGkMM+NCkPID4AKncMKWcE4QRu3d50OMPv2OeRJYHLMdribfcAdcvDnqV0lw42wJal5aXHm3N6X758eZlWAMfBxBYAtVP3jRtE5Hl+kFp7HArfLqUQopzjUbtfUFrUEad+taUuB4KaPLYEgFaUcd6wFQmsNdoTAHHqt7HUW7OBjXs3JQAGCEB5fYBuu/4EwDABOKeUfkLVdDuGJgAGCEBpiZg2czsBMEAAhBDY2BtH02kP50wADBOATZKPydrNBMDAACh5AEY7tyYABgZAKc3faOu+BMDAAFDj/yvTE1sSAAMCQG3x+4/JLuFFtRMAAwJAZXddmrb+jaE4oPqPvirYG0BKubQ5RzgBMBBsitNEbA/qTAAMBAC1yxuW6+HYWeMrAWAsqrBvRPh3Op0ik8vqSgBYiSvMmxH8yfP8ttfj48MUxThLhaxuzjlOE7O+Ug9gLbJhPdAKAJDHGLtNmcLxQtEKAFQbsWcbvzNeUQ2z5K0BULNPx+mo+DgBaQ0Aqq12p1zY+qBximxYpfYCgNqSZJmWjcUHhxcAUG0ViUIi4pGrSxKf+OIvsTcAFATYlQJrChMEkbDhFYBiKEA2coIgDgK8AlAaCi4IITi+JPUEgXPgHYCSV/BG1d0oNy1wOQ22eJ0AgLnpPM9vil2qpJSXs9nsbLBSjLhinQAAeZTsgeIUqwVj7H0KG4dFS2cAqKFge9uZe0rpydg2nVCNAUPiMSFknxByCxtJSrmYzWbfdolEpwAoCJCk8Hu5kpTS8+l0+nmXFe/r21mWfZJSnjd8DzCc7Cp20jkAdRCgFVBK3w+1N1A7rwF89IIm106M5V4AaIAAP12tVqvPLtksJlLt+x610dYnSump5bfvGWOv+raRegNAAwFsg8vJZPK1bwFYKqnx9vl8/hb1cDiAa/Nek9W8Psu7+abvF+rep6aPFzVn3EYJglI8xnkYeK2uumPeW7204eHeAajxDqqKiPTmr7syjnQCV3n4bwkh6OpbK774nsmSbl3ZbH7fCQAo4HawqKHQSHa8Yox9C2F4yLLsjZQS7hz+vJ+bOBoACoVrTrze5gJDx81qtbruy2hUoL7uUunlSo4OAFRe7WqFLr+IGpr0YvCfsbcxegicjP2HyUO6exC0mUwmv67X60NKKVy4Q90zPn8fhQ1QJTA1pgKCYhLJRa6YgQQQiDEAEOySVfxv+33YQ2fThUspoWiM46Y+u0vZTJ7p/Si+ndkAddIoljhb9gYmwg3+nr67fwgkOAAKA/Hx8RFu1YfgteapgLs6gSVIAAqZqkkUDAuvPck5yNfY7OjhuwJBA1DyFA7VhMrQQLherVanfXk0VfBEAUBRcEywIMYupUQAJtYLp64s8jw/36XiC+FFBUBRaOWbv5NSIgpXPtkkWCgopX8hM4oxtgghoBU1AGUtq2lX5BwgMhcUDFA6oph5ni9CaO3RDwG65q2COMcqagef3iawpHu9ye8PKji1WK1WN6EqvVyRKIcAE03gHmUzIJJ3IKVEoMenEQllYyHMjQo6IRrptEmDaX26uG/QAFQJTNkPB+v1GlHAp8jf3t7evoLk6TEodr1ebyKKe3t7TxHFIWUxjQ6ALlpRzO9MAMSsPQ9l/xfX3WnMyKZq/gAAAABJRU5ErkJggg=="

/***/ }),

/***/ "a6ea":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2fa2282a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7f02");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2fa2282a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2fa2282a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "bbfb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_01a900d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cb49");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_01a900d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_01a900d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "bdff":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cb49":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cc71":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e810":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_5c5070f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("333a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_5c5070f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_5c5070f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f90f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7165182e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/form/src/index.vue?vue&type=template&id=01a900d6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sp-form",class:{'sp-form-search': _vm.type === 'search'}},[_c('el-form',{ref:"form",attrs:{"model":_vm.form,"label-position":_vm.spOption.labelPosition,"label-suffix":_vm.spOption.labelSuffix,"label-width":_vm.spOption.labelWidth},nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.stopPropagation();return _vm.onSubmit(true)}}},[_c('el-row',[_vm._l((_vm.spFormList),function(formItem,index){return [(_vm.displayMap[formItem.prop])?_c('el-col',{key:index,attrs:{"span":formItem.span}},[(formItem.component === 'slot')?_c('el-form-item',_vm._b({class:{'el-viewform-item': _vm.type === 'view'}},'el-form-item',formItem.elFormItem,false),[[_vm._t(formItem.prop,null,null,_vm.form)]],2):_c('sp-form-item',{attrs:{"component":formItem.component,"type":_vm.type,"prop":formItem.prop,"el-form-item":formItem.elFormItem,"el-props":formItem.elProps,"disabled":_vm.disabledMap[formItem.prop],"options":_vm.formItemOptions[formItem.prop],"loading":_vm.remoteLoadingMap[formItem.prop]},on:{"change":function($event){return _vm.onChange($event, formItem.component, formItem.prop)}},model:{value:(_vm.form[formItem.prop]),callback:function ($$v) {_vm.$set(_vm.form, formItem.prop, $$v)},expression:"form[formItem.prop]"}})],1):_vm._e()]})],2),_c('el-row',[_c('el-col',{attrs:{"span":24}},[(_vm.type === 'form')?_c('div',{staticClass:"sp-handler-bar",style:({textAlign: 'right'})},[(_vm.spOption.submitBtn)?_c('el-button',{attrs:{"type":"primary","icon":"el-icon-check"},on:{"click":_vm.onSubmit}},[_vm._v(_vm._s(_vm.spOption.submitBtnTxt))]):_vm._e(),(_vm.spOption.clearBtn)?_c('el-button',{attrs:{"icon":"el-icon-delete"},on:{"click":_vm.onClear}},[_vm._v(_vm._s(_vm.spOption.clearBtnTxt))]):_vm._e(),(_vm.spOption.cancelBtn)?_c('el-button',{attrs:{"icon":"el-icon-close"},on:{"click":_vm.onCancel}},[_vm._v(_vm._s(_vm.spOption.cancelBtnTxt))]):_vm._e(),_vm._t("formHandle")],2):(_vm.type === 'search')?_c('div',{staticClass:"sp-handler-bar",style:({textAlign: 'right'})},[(_vm.spOption.submitBtn)?_c('el-button',{attrs:{"type":"primary","icon":"el-icon-search"},on:{"click":_vm.onSubmit}},[_vm._v(_vm._s(_vm.spOption.searchBtnTxt))]):_vm._e(),(_vm.spOption.resetBtn)?_c('el-button',{attrs:{"icon":"el-icon-refresh-left"},on:{"click":_vm.onReset}},[_vm._v(_vm._s(_vm.spOption.resetBtnTxt))]):_vm._e(),(_vm.spOption.cancelBtn)?_c('el-button',{attrs:{"icon":"el-icon-close"},on:{"click":_vm.onCancel}},[_vm._v(_vm._s(_vm.spOption.cancelBtnText))]):_vm._e(),_vm._t("formHandle")],2):_vm._e()])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/index.vue?vue&type=template&id=01a900d6&scoped=true&

// CONCATENATED MODULE: ./packages/util/util.js
const deepClone = (need) => {
  if (!need || typeof need !== 'object') {
    return need
  }
  if (Array.isArray(need)) {
    return need.map(item => {
      return deepClone(item)
    })
  }
  const needClone = {}
  for (const key in need) {
    if (!need[key] || typeof need[key] !== 'object') {
      needClone[key] = need[key]
    } else {
      needClone[key] = deepClone(need[key])
    }
  }
  return needClone
}
/**
 * 判断是否为空
 */
function isNull(need) {
  if (!util_isDef(need)) { return true }
  if (typeof need === 'string' && need.trim().length === 0) { return true }
  if (Array.isArray(need) && need.length === 0) { return true }
  if (need instanceof Object && Object.keys(need).length === 0) { return true }
  return false
}
function isObjEmpty(obj) {
  if (obj) {
    for(const key in obj) {
      if(!isNull(obj[key])) {
        return false
      }
    }
  }
  return true
}
function getLabelWithOptions(options, value) {
  let label = null
  if (Array.isArray(value)) {
    label = value.map(ival => {
      const ilabel = findItemFromDeepOptions(options, ival)
      return isNull(ilabel) ? ival : ilabel
    }).join(',')
  } else {
    label = findItemFromDeepOptions(options, value)
  }
  return isNull(label) ? value : label
}
function findItemFromDeepOptions(options, value) {
  if (!Array.isArray(options) || isNull(value)) { return value }
  const item = options.find(item => !isNull(item.value) && item.value.toString() === value.toString())
  if (item){
    return item.label
  } else {
    const nextOpitons = options.filter(item => Array.isArray(item.children)).reduce((res, item) => {
      return res.concat(item.children)
    }, [])
    if (nextOpitons.length > 0) {
      return findItemFromDeepOptions(nextOpitons, value)
    }
  }
  return null
}


function isEqual(a, b) {
  if (a === b || Object.is(a, b)) { return true }
  if (typeof a != typeof b || typeof a !== 'object' || typeof b !== 'object') {
    return String(a) === String(b)
  }
  if (Array.isArray(a) && a.length !== b.length) { return false }
  if (Object.keys(a).length !== Object.keys(b).length) { return false }
  for (const key in a) {
    if (!isEqual(a[key], b[key])) {
      return false
    }
  }
  return true
}

function dataWithColumn(column) {
  const data = {}
  if (Array.isArray(column)) {
    column.forEach(item => {
      data[item.prop] = item.defaultValue
    })
  }
  return data
}

function util_isDef(need) {
  return need !== undefined && need !== null
}

function toNumber(need) {
  if (!util_isDef(need) || isNaN(need)) { return null }
  return Number(need)
}
// CONCATENATED MODULE: ./packages/core/const.js

// spForm组件option特有的属性
const spFormOptions = {
  submitBtn: 'boolean',
  submitBtnTxt: 'string',
  clearBtn: 'boolean',
  clearBtnTxt: 'string',
  cancelBtn: 'boolean',
  cancelBtnTxt: 'string',
  searchBtn: 'boolean',
  searchBtnTxt: 'string',
  resetBtn: 'boolean',
  resetBtnTxt: 'string',
  uploadAction: 'string',
  uploadHeaders: 'object',
  column: 'array',
  annotate: 'string',
  custAble: 'boolean'
}
// spTable组件option特有的属性
const spTableOptions = {
  editBtn: 'boolean',
  viewBtn: 'boolean',
  delBtn: 'boolean',
  showRowAction: 'boolean',
  rowActionWidth: 'number', 
  expand: 'boolean',
  column: 'array',
  annotate: 'string',
  custAble: 'boolean'  
}
// spCrud组件option特有的属性
const spCrudOptions = {
  addBtn: 'boolean',
  searchBtn: 'boolean',
  columnBtn: 'boolean',
  refreshBtn: 'boolean',
  showSearchForm: 'boolean',
  showTbMenu: 'boolean',
  showSptable: 'boolean',   
  editDialogWidth: 'number',
  addDialogWidth: 'number',
  annotate: 'string',
  custAble: 'boolean'  
}
const spCrudFormOptions = {
  searchBtn: 'boolean',
  columnBtn: 'boolean',
  refreshBtn: 'boolean',
  showSearchForm: 'boolean',
  showTbMenu: 'boolean',
  showSptable: 'boolean',   
  editDialogWidth: 'number',
  addDialogWidth: 'number',
  annotate: 'string',
  custAble: 'boolean'  
}
const spFormColumnProps = {
  options: ['array', 'function', 'object'],
  slot: 'boolean',
  defaultValue: ['string', 'number'],
  defaultSelectIndex: 'number',
  startValueProp: 'string',
  endValueProp: 'string',
  display: ['boolean', 'function'],
  disabled: ['boolean', 'function'],
  asyncValue: 'object'
}
const spTableColumnProps = {
  options: ['array', 'function', 'object'],
  slot: 'boolean',
  format: 'function',
  hide: 'boolean'
}
const spCrudColumnProps = {
  ...spFormColumnProps,
  ...spTableColumnProps,
  cellLabel: 'string',
  search: 'boolean',
  searchIndex: 'number',
  searchSpan: 'number',
  searchLabelWidth: 'number',
  addAble: 'boolean',
  addType: 'string',
  addRules: ['object', 'array'],
  editAble: 'boolean',
  editType: 'string',
  editRules: ['object', 'array']
}
const spFormdynamicColumnProps = {
  ...spFormColumnProps,
  ...spTableColumnProps,
  required: 'boolean',
  tableEdit: 'boolean'
}
const defSpCrudOption = {
  annotate: null,
  addBtn: false,
  searchBtn: true,
  columnBtn: true,
  refreshBtn: true,
  showSearchForm: false,
  showTbMenu: true,
  editDialogWidth: '80%',
  addDialogWidth: '80%',
  column: []
}
const defSpTbOption = {
  editBtn: false,
  viewBtn: false,
  delBtn: false,
  selection: true,
  expand: false,
  showRowAction: false,
  rowActionWidth: null,
  column: []
}
const defSpCrudFormOption = {
  cloneBtn: false,
  addBtn: false,
  removeBnt: false,
  column: []
}
const filterProps = (sourceOption, filterOption) => {
  if (isNull(filterOption) || isNull(sourceOption)) { return sourceOption }
  const newOption = {}
  for(const prop in sourceOption) {
    if (!filterOption[prop]) {
      newOption[prop] = sourceOption[prop]
    }
  }
  return newOption
}
const filterFormOptionFormCrud = (crudOption) => {
  return filterProps(crudOption, { ...spCrudOptions, ...spTableOptions })
}
const filterTableOptionFormCrud = (crudOption) => {
  return filterProps(crudOption, { ...spCrudOptions, ...spFormOptions })
}
const filterTableFormOptionFormCrud = (crudOption) => {
  return filterProps(crudOption, { ...spCrudFormOptions, ...spFormOptions })
}
const clearColumnPorps = {
  ...spCrudColumnProps,
  ...spFormColumnProps,
  ...spTableColumnProps,
  ...spFormdynamicColumnProps,
  custAble: 'boolean',
  custOptionId: 'string',
  children: 'array',
  sort: 'number'
}
const filterElFormComponentProps = (props = {}) => {
  return filterProps(props, { ...clearColumnPorps, labelWidth: 'string', rules: 'any' })
}
const filterElFormItemProps = (props = {}) => {
  return filterProps(props, { ...clearColumnPorps, type: 'string', remoteMethod: 'function' })
}
const filterElFormOption = (option = {}) => {
  return filterProps(option, { ...spFormOptions, column: 'array' })
}
const filterElTableOption = (option = {}) => { 
  return filterProps(option, { ...spTableOptions, column: 'array' })
}
const filterElTableColumnProps = (props = {}) => {
  return filterProps(props, { ...clearColumnPorps, rules: 'array', remoteMethod: 'function' })
}
// CONCATENATED MODULE: ./packages/core/util.js


const spreadColumn = (option) => {
  let column = []
  if (Array.isArray(option.column) && option.column.length > 0) {
    option.column.forEach(item => {
      if (Array.isArray(item.children) && item.children.length > 0) {
        const childColumn = spreadColumn({ column: item.children })
        column = column.concat(childColumn)
      } else {
        column.push(item)
      }
    })
    return column
  }
  return []
}
const isArrayValueByItem = (item) => {
  const type = item.type || 'input'
  return type.search('range') !== -1 || (type === 'select' && item.multiple) || type === 'checkbox'
}
const isWatchObj = (options) => {
  return options && options.watch && typeof options.method === 'function'
}
const hasOptionsByType = (type) => {
  return ['select', 'radio', 'checkbox'].includes(type)
}
// 根据type匹配它们应用的elemenUI组件
const type2Component = (type = 'input') => {
  const components = {
    uploadimg: ['elupload', 'uploadimg'],
    input: ['input', 'textarea', 'password', 'tel', 'number'],
    datepicker: ['year','month','date','dates', 'week','datetime','datetimerange', 'daterange','monthrange']
  }
  for(const c in components) {
    if (components[c].includes(type)) {
      return c
    }
  }
  return type
}
// 结合表单数据，表单元素的类型计算表单值
const getDefValue = (item, itemOptions) => {
  let defValue = item.defaultValue
  if(typeof item.defaultSelectIndex === 'number') {
    const options = Array.isArray(itemOptions) ? itemOptions : Array.isArray(item.options) ? item.options : []
    const option = options[item.defaultSelectIndex]
    defValue = !option ? defValue : option.value
  }
  return defValue
}
const getValueWithData = (item, data = {}, isDef = true, options) => {
  const defValue = isDef ? getDefValue(item, options) : ''
  let value =  data[item.prop]
  if (item.startValueProp && item.endValueProp && !isNull(data[item.startValueProp]) && !isNull(data[item.endValueProp])) {
    value = [data[item.startValueProp], data[item.endValueProp]]
  } 
  value = isNull(value) ? defValue : value
  const isArrayValue = isArrayValueByItem(item)
  if (isArrayValue && !Array.isArray(value)) {
    if (typeof value === 'number') {
      value = value.toString()
    }
    if (typeof value === 'string' && value.trim().length > 0) {
      value = value.split(',')
    } else {
      value = null
    }
  }
  return value
}
const getDefDataWithColumn = (data = {}, column = [], formItemOptions = {}) => {
  const formData = {}
  column.forEach(item => {
    formData[item.prop] = getValueWithData(item, data, true, formItemOptions[item.prop])
  })
  return formData
}
// 转成表单组件合法值
const enFormData = (data, column, formItemOptions = {}, defAble = false) => {
  const formData = {}
  const rangColumn = column.filter(item => item.endValueProp && item.startValueProp)
  const rangData = {}
  rangColumn.forEach(item => {
    if (data[item.startValueProp] || data[item.endValueProp]) {
      rangData[item.prop] = [data[item.startValueProp], data[item.endValueProp]]
    } else {
      rangData[item.prop] = ''
    }
  })
  const fullData = { ...data, ...rangData }
  for(const prop in fullData) {
    const item = column.find(col => col.prop === prop)
    if (item) {
      if (Array.isArray(item.children)) {
        const childData = enFormData(fullData, item.children, formItemOptions, defAble)
        Object.assign(formData, childData)
      } else {
        const isDef = item.clearable === false && defAble
        formData[prop] = getValueWithData(item, fullData, isDef, formItemOptions[prop])
      }
    }    
  }
  return formData
}
// 转成表单值
const deFormData = (formData, column, formItemOptions) => {
  const data = {}
  for(const prop in formData) {
    const item = column.find(item => item.prop === prop)
    if (item) {
      let value = formData[prop]
      if (typeof value === 'object') {
        value = deepClone(value)
      }
      // 日期范围开始和结束分两个字段保存
      if (Array.isArray(value) && item && item.startValueProp && item.endValueProp) {
        data[item.startValueProp] = value[0]
        data[item.endValueProp] = value[1]
      } else if(item.multiple && typeof item.valueFormat === 'function') {
        data[prop] = item.valueFormat(value)
      } else {
        data[prop] = value
      }
      // 保存那些下拉框、复选框、单选框的选中项的label
      if (hasOptionsByType(item.type)) {
        let label = ''
        if (Array.isArray(value)) {
          label = value.map(v => {
            return getLabelWithOptions(formItemOptions[prop], v)
          })
        } else {
          label = getLabelWithOptions(formItemOptions[prop], value)
        }
        data['$' + prop] = label
      }
    }
  }
  return data
}
// 转换表格行的数据
const enTableRowData = (data, column, optionsMap) => {
  const tableRowData = {}
  for(const prop in data) {
    if (Array.isArray(optionsMap[prop])) {
      tableRowData[prop] = getLabelWithOptions(optionsMap[prop], data[prop])
    } else {
      const columItem = column.find(item => item.prop === prop)
      if(columItem) {
        let propkey = null
        if (isWatchObj(columItem.options)) {
          propkey = propKeyWithWatchData(columItem, data)        
        } else if (typeof columItem.remoteMethod === 'function') {
          propkey = columItem.prop + '_' + data[prop]
        }
        if (propkey && Array.isArray(optionsMap[propkey])) {
          tableRowData[prop] = getLabelWithOptions(optionsMap[propkey], data[prop])
        } else if (typeof columItem.format === 'function') {
          tableRowData[prop] = columItem.format(data[prop])
        } else {
          tableRowData[prop] = data[prop]
        }
      } else {
        tableRowData[prop] = data[prop]
      }
    }
  }
  return tableRowData
}
const enTableData = (sourceData, option = {}) => {
  // const column = Array.isArray(option.column) ? option.column : []
  const column = spreadColumn(option)
  if(Array.isArray(sourceData) && sourceData.length > 0 && column.length > 0) {
    return new Promise(resolve => {
      loadLazyFormItemOptions(sourceData, column).then(optionsMap => {
        const tableData = sourceData.map(data => {
          const rowData = enTableRowData(data, column, optionsMap)
          if (typeof option.rowEditDisabled === 'function') {
            rowData.editDisabled = option.rowEditDisabled(data)
          }
          if (typeof option.rowDelDisabled === 'function') {
            rowData.delDisabled = option.rowDelDisabled(data)
          }
          if (typeof option.rowViewDisabled === 'function') {
            rowData.viewDisabled = option.rowViewDisabled(data)
          }
          return rowData
        })
        resolve(tableData)
      })
    })
  } else {
    return Promise.resolve([])
  }
}
//
const enTableFormData = (sourceData, option = {}) => {
  const column = Array.isArray(option.column) ? option.column : []
  if(Array.isArray(sourceData) && sourceData.length > 0 && column.length > 0) {
    const unEditColumn = column.filter(item => item.tableEdit === false)
    const editColumn = column.filter(item => item.tableEdit !== false)
    const columnMap = column.reduce((map, item) => {
      map[item.prop] = item
      return map
    }, {})
    return new Promise(resolve => {
      loadLazyFormItemOptions(sourceData, column).then(optionsMap => {
        const disabledMap = {}
        const cloneData = deepClone(sourceData)
        const tableData = sourceData.map((data) => {
          if(data.id) {
            for(const prop in data) {
              if (columnMap[prop] && typeof columnMap[prop].disabled === 'function') {
                disabledMap[prop + data.id] = columnMap[prop].disabled(data, cloneData)
              }
            }
          }
          const rowData = enTableRowData(data, unEditColumn, optionsMap)
          const rowFormData = enFormData(data, editColumn, optionsMap)
          return { ...rowData, ...rowFormData }
        })
        resolve({ tableData, disabledMap, optionsMap })
      })
    })
  } else {
    return new Promise(resolve => {
      loadLazyFormItemOptions(sourceData, column).then(optionsMap => {
        resolve({ tableData: [], disabledMap: {}, optionsMap })
      })
    })
  }
}
const enCrudFormData = (sourceData, option = {}) => {
  let column = Array.isArray(option.column) ? option.column : []
  if(Array.isArray(sourceData) && sourceData.length > 0 && column.length > 0) {
    column = column.filter(item => item.hide !== true && item.tableEdit === false)
    return new Promise(resolve => {
      loadLazyFormItemOptions(sourceData, column).then(optionsMap => {
        const tableData = sourceData.map(data => {
          const rowData = enTableRowData(data, column, optionsMap)
          return { ...data, ...rowData }
        })
        resolve(tableData)
      })
    })
  } else {
    return Promise.resolve([])
  }
}
/**
 * 
 * @param {*} tragetProp 
 * = 'age'
 * @param {*} watchOption 
 * = {
 *  watch: ['nickName', 'address'],
 *  method: function() {}
 * }
 * @param {*} saveData 
 * ={
 *  nickName: {
 *    age: function() {}
 *  },
 *  address: {
 *    age: function() {}
 *  }
 * }
 */
const assignWatchObj = (tragetProp, watchOption, saveData) => {
  if (!isWatchObj(watchOption)) { return }
  let watch = watchOption.watch
  if (!Array.isArray(watch)) {
    watch = [watchOption.watch]
  }
  watch.forEach(prop => {
    if (!saveData[prop]) {
      saveData[prop] = {}
    }
    saveData[prop][tragetProp] = watchOption.method
  })
}

const assignDictOptions = (item, formItemOptions = {}, asyncFormItemOptions = {}, watchFormItemOptions = {}) => {
  if (item && hasOptionsByType(item.type)) {
    formItemOptions[item.prop] = Array.isArray(item.options) ? item.options : []
    if (typeof item.options === 'function') {
      asyncFormItemOptions[item.prop] = item.options()
    } else if (isWatchObj(item.options)) {
      assignWatchObj(item.prop, item.options, watchFormItemOptions)
    }
    if (Array.isArray(item.children) && item.children.length > 0) {
      item.children.forEach(childItem => {
        assignDictOptions(childItem, formItemOptions, asyncFormItemOptions, watchFormItemOptions)
      })
    }
  }
}
const assignDisplay = (item, data = {}, displayMap = {}, watchDisplayMap = {}) => {
  displayMap[item.prop] = item.display === false ? false : true
  if (typeof item.display === 'function') {
    displayMap[item.prop] = item.display(deepClone(data))
  } else if (isWatchObj(item.display)) {
    assignWatchObj(item.prop, item.display, watchDisplayMap)
  }
}
const assignDisabled = (item, data = {}, disabledMap = {}, watchDisabledMap = {}, formType) => {
  disabledMap[item.prop] = item.disabled === true ? true : formType === 'view'
  if (typeof item.disabled === 'function') {
    disabledMap[item.prop] = item.disabled(deepClone(data))
  } else if (isWatchObj(item.disabled)) {
    assignWatchObj(item.prop, item.disabled, watchDisabledMap)
  }
}
const extElFormCompProps = (option, item) => {
  const elProps = filterElFormComponentProps(item)
  const component = type2Component(item.type)
  elProps.clearable = elProps.clearable !== false
  if (isNull(item.placeholder)) {
    elProps.placeholder = ['input', 'sptextarea'].includes(component) ? '请输入' + item.label : '请选择' + item.label
  }
  if(item.type && item.type.search('range') !== -1) {
    elProps.unlinkPanels = item.unlinkPanels !== false
  }
  if (item.type === 'elupload') {
    if (!isNull(option.uploadAction)) {
      elProps.action = option.uploadAction
    }
    if (!isNull(option.uploadHeaders)) {
      elProps.headers = option.uploadHeaders
    }
  }    
  return elProps
}
const extElFormItemProps = (option, item) => {
  const formItemProps = filterElFormItemProps(item)
  const labelWidth = item.labelWidth || option.labelWidth
  if (typeof labelWidth === 'number') {
    formItemProps.labelWidth = labelWidth + 'px'
  } else {
    formItemProps.labelWidth = labelWidth
  }
  return formItemProps
}
const extElTableColumnProps = (option = {}, item) => {
  const elProps = filterElTableColumnProps(item)
  elProps.align = elProps.align || option.align || 'center'
  elProps.label = item.cellLabel || item.label
  return elProps
}
const extSpTableColumn = (option = {}) => {
  const column = Array.isArray(option.column) ? option.column : []
  return column.filter(item => item.hide !== true).map(item => {
    const children = Array.isArray(item.children) ? extSpTableColumn({ ...option, column: item.children }) : null
    const elProps = extElTableColumnProps(option, item)
    return {
      prop: item.prop,
      label: item.label,
      type: item.slot ? 'slot' : item.type,
      elProps,
      children
    }
  })
}
const structuredWatchData = (watchOptions) => {
  const watchMethods = {}
  for(const prop in watchOptions) {
    const targets = watchOptions[prop]
    if (targets) {
      for(const targetProp in targets) {
        if (!watchMethods[targetProp] && typeof targets[targetProp] === 'function') {
          watchMethods[targetProp] = targets[targetProp]
        }
      }
    }
  }
  return watchMethods
}
const getResByAsyncObj = (asyncObj) => {
  if (isNull(asyncObj)) { return Promise.resolve({}) }
  const promiseList = Object.values(asyncObj)
  const propList = Object.keys(asyncObj)
  const propRes = {}
  return new Promise(resolve => {
    Promise.all(promiseList).then(resList => {
      resList.forEach((res, index) => {
        const prop = propList[index]
        propRes[prop] = res
      })
      resolve(propRes)
    }).catch(() => {
      resolve(propRes)
    })
  })  
}
const loadLazyFormItemOptions = (data = {}, column = []) => {
  const staticColumns = column.filter(item => Array.isArray(item.options))
  const remoteMethodColumns = column.filter(item => typeof item.remoteMethod === 'function')
  const asyncColumns = column.filter(item => typeof item.options === 'function')
  const watchColumns = column.filter(item => isWatchObj(item.options))
  const watchObj = {}
  staticColumns.forEach(item => {
    watchObj[item.prop] = item.options
  })
  if (Array.isArray(data) && data.length > 0) {
    asyncColumns.forEach(item => {
      watchObj[item.prop] = item.options(data[0])
    })
    remoteMethodColumns.forEach(item => {
      data.forEach(idata => {
        let prop = idata[item.prop]
        prop = isNull(prop) || Array.isArray(prop) ? null : item.prop + '_' + prop
        if (prop && !watchObj[prop]) {
          watchObj[prop] = item.remoteMethod(idata[item.prop], idata)
        }
      })
    })    
    watchColumns.forEach(item => {
      data.forEach(idata => {
        const prop = propKeyWithWatchData(item, idata)
        if (prop && !watchObj[prop]) {
          const watchValue = getWatchPropValue(item.options, idata, {})
          const sdata = deepClone(idata)
          watchObj[prop] = item.options.method(sdata, null, watchValue)
        }
      })
    })
  } else {
    asyncColumns.forEach(item => {
      watchObj[item.prop] = item.options(data)
    })    
    remoteMethodColumns.forEach(item => {
      watchObj[item.prop] = item.remoteMethod(data[item.prop], data)
    })    
    watchColumns.forEach(item => {
      const watchValue = getWatchPropValue(item.options, data, {})
      const sdata = deepClone(data)
      watchObj[item.prop] = item.options.method(sdata, null, watchValue)
    })
  }
  return getResByAsyncObj(watchObj)
}
const propKeyWithWatchData = (item = {}, data = {}) => {
  if (isWatchObj(item.options)) {
    let watch = item.options.watch
    watch = Array.isArray(watch) ? watch : typeof watch === 'string' ? [watch] : []
    if (watch.length > 0) {
      const propKey = watch.reduce((key, prop) => {
        if (isNull(data[prop]) || Array.isArray(data[prop])) {
          return key
        } else {
          return key + '_' + data[prop]
        }
      }, '')
      if (propKey) {
        return item.prop + propKey
      }
    }
  }
  return null
}
const getWatchPropValue = (watchOption = {}, data, optionsMap) => {
  let value = {}
  if(isWatchObj(watchOption)) {
    let watchProps = watchOption.watch
    watchProps = Array.isArray(watchProps) ? watchProps : [watchProps]
    watchProps.forEach(prop => {
      if (data[prop] === null || data[prop] === undefined) {
        value[prop] = null
      } else {
        // 值匹配的某个选项对象，如果没有，返回源值
        const options = Array.isArray(optionsMap[prop]) ? optionsMap[prop] : []
        if (Array.isArray(data[prop])) {
          const optionList = options.filter(item => !isNull(item.value) && data[prop].includes(item.value))
          value[prop] = optionList.length === 0 ? data[prop] : optionList
        } else {
          const option = options.find(item => !isNull(item.value) && item.value.toString() === data[prop].toString())
          value[prop] = !option ? data[prop] : option
        }
      }
    })
    return value
  }
  return value
}
const runWatchMethod = (prop, data = {}, key = 'options', watchObj = {}, column = [], optionsMap = {}) => {
  let tprops = null
  if (typeof prop === 'string') {
    tprops = watchObj[prop]
  } else {
    tprops = structuredWatchData(watchObj)
  }
  if (!isNull(tprops)) {
    const res = {}
    for(const tprop in tprops)  {
      if (typeof tprops[tprop] === 'function') {
        const cloneData = deepClone(data)
        const item = column.find(item => item.prop === tprop)
        const watchValue = getWatchPropValue(item[key], cloneData, optionsMap)
        const resVal = tprops[tprop](cloneData, prop, watchValue) 
        if (key === 'disabled') {
          res[tprop] = !resVal ? false : true
        } else {
          res[tprop] = resVal
        }
      }
    }
    return res
  }  
}
// 重置表格列样式，此方法会改变传入的参数对象
const resetColumnStyle = (option) => {
  if (option && Array.isArray(option.column) && option.column.length > 0) {
    option.column.forEach(item => {
      if (Array.isArray(item.children) && item.children.length > 0 && !isNaN(item.width)) {
        const childrenWidth = Number(item.width) / item.children.length
        item.children.forEach(child => {
          child.width = childrenWidth
        })
      }      
    })
  }
  return option
}

// CONCATENATED MODULE: ./packages/mixins/Mform.js



const defSpFormOption = {
  labelWidth: '80px',
  labelSuffix: '',
  labelPosition: 'right',
  cancelBtn: false,
  clearBtn: true,
  submitBtn: true,
  resetBtn: true,
  resetBtnTxt: '重置',
  submitBtnTxt: '提交',
  searchBtnTxt: '搜索',
  cancelBtnTxt: '取消',
  clearBtnTxt: '清空'
}
/* harmony default export */ var Mform = ({
  data() {
    return {
      spFormList: [],
      spOption: {},
      form: {},
      allForm: {},
      unClearForm: {},
      remoteLoadingMap: {},
      formItemOptions: {},
      watchFormItemOptions: {},
      displayMap: {},
      watchDisplayMap: {},
      disabledMap: {},
      watchDisabledMap: {},
      asyncValueMap: {},
      ignoreForm: {}
    }
  },
  methods: {
    init(option, formType) {
      if (!option || !Array.isArray(option.column)) {
        return {}
      }
      const column = []
      // const form = {}
      const unClearProps = []
      const displayMap = {}
      const watchDisplayMap = {}
      const disabledMap = {}
      const watchDisabledMap = {}
      const remoteLoadingMap = {}
      const formItemOptions = {}
      const asyncFormItemOptions = {} // 要异步加载选项的字段（列
      const watchFormItemOptions = {} // 跟其他字段的选项是相同的字段（列)
      const asyncValueMap = {}
      const allForm = {}
      option.column.forEach(item => {
        const type = item.formType || item.type
        const component = type2Component(type)
        const prop = item.prop
        const elProps = extElFormCompProps(option, item)
        if (typeof item.remoteMethod === 'function') {
          remoteLoadingMap[prop] = false
          elProps.filterable = true
          elProps.remote = true
          elProps.defaultFirstOption = item.defaultFirstOption !== false
          elProps.remoteMethod = this.packRemoteMethod(item.remoteMethod, item.prop, this.data)
        }        
        const elFormItem = extElFormItemProps(option, item)
        if (item.rules) {
          elFormItem.rules = this.packRules(item.rules)
        }        
        const spColumnItem = {
          prop,
          label: item.label,
          component,
          span: item.span || 24,
          tip: item.tip,
          elProps,
          elFormItem
        }
        column.push(spColumnItem)
        
        allForm[prop] = hasOptionsByType(item.type) ? [] : ''
        // 保存默认为禁用的字段
        if (item.disabled || item.canClear === false) {
          unClearProps.push(item.prop)
        }

        assignDictOptions(item, formItemOptions, asyncFormItemOptions, watchFormItemOptions)
        assignDisplay(item, this.data, displayMap, watchDisplayMap)
        assignDisabled(item, this.data, disabledMap, watchDisabledMap, formType)
        if (isWatchObj(item.asyncValue)) {
          assignWatchObj(item.prop, item.asyncValue, asyncValueMap)
        }
      })
      const spOption = filterElFormOption(option)
      this.spOption = { ...defSpFormOption, ...spOption }
      this.spFormList = column
      this.displayMap = displayMap
      this.watchDisplayMap = watchDisplayMap
      this.watchDisabledMap = watchDisabledMap
      this.disabledMap = disabledMap
      this.remoteLoadingMap = remoteLoadingMap
      this.asyncValueMap = asyncValueMap
      this.formItemOptions = formItemOptions
      this.watchFormItemOptions = watchFormItemOptions
      this.allForm = allForm
      
      loadLazyFormItemOptions(this.data, this.option.column).then(optionsMap => {
        this.formItemOptions = { ...this.formItemOptions, ...optionsMap }
        const form = getDefDataWithColumn(this.data, this.option.column, this.formItemOptions)
        this.form = form
        this.allForm = { ...form }
        const unClearForm = {}
        unClearProps.forEach(prop => {
          unClearForm[prop] = form[prop]
        })
        this.unClearForm = unClearForm
        
        const data = deFormData(form, this.option.column, this.formItemOptions)
        this.watchDataChange(null, form)
        this.$nextTick(() => {
          this.$refs.form.clearValidate()
        })
        this.$emit('init-data', data)
      })
    },
    watchDataChange(prop, formData) {
      this.formItemOptionsWatch(prop, formData)
      this.valueWatch(prop, formData)
      this.disabledWatch(prop, formData)
      this.displayWatch(prop, formData)
    },
    formItemOptionsWatch(prop, formData) {
      let watch = null
      if (prop) {
        watch = this.watchFormItemOptions[prop]
      } else {
        watch = structuredWatchData(this.watchFormItemOptions)
      }
      
      const watchPromise = {}
      for (const tprop in watch) {
        const cloneData = deepClone(formData)
        const item = this.option.column.find(item => item.prop === tprop)
        const watchValue = getWatchPropValue(item.options, formData, this.formItemOptions)
        watchPromise[tprop] = watch[tprop](cloneData, prop, watchValue)
      }
      getResByAsyncObj(watchPromise).then(newFormItemoptions => {
        if (prop) {
          for(const prop in newFormItemoptions) {
            const oldFormValue = this.form[prop]
            let newFormValue = null
            if (Array.isArray(oldFormValue) && oldFormValue.length > 0) {
              newFormValue = oldFormValue.filter(val => {
                if (typeof val === 'string' || typeof val === 'number') {
                  return newFormItemoptions[prop].some(item => item.value === val)
                }
                return false
              })
            } else if (typeof oldFormValue === 'string' || typeof oldFormValue === 'number') {
              if (newFormItemoptions[prop].some(item => item.value === oldFormValue)) {
                newFormValue = oldFormValue
              }
            }
            if (newFormValue !== oldFormValue) {
              this.$set(this.form, prop, newFormValue)
            }
          }
        }
        this.formItemOptions = {...this.formItemOptions, ...newFormItemoptions}        
      })  
    },
    valueWatch(prop, data) {
      const formData = runWatchMethod(prop, data, 'asyncValue', this.asyncValueMap, this.option.column, this.formItemOptions)
      if (!isNull(formData)) {
        this.form = { ...this.form, ...formData }
      }
    },
    displayWatch(prop, data) {
      const newDisplayMap = runWatchMethod(prop, data, 'display', this.watchDisplayMap, this.option.column, this.formItemOptions)
      this.displayMap = { ...this.displayMap, ...newDisplayMap }
    },
    disabledWatch(prop, data) {
      const newDisabledMap = runWatchMethod(prop, data, 'disabled', this.watchDisabledMap, this.option.column, this.formItemOptions)
      this.disabledMap = { ...this.disabledMap, ...newDisabledMap }
    },    
    packRemoteMethod(method, prop, formData) {
      const that = this
      return function(value) {
        that.$set(that.remoteLoadingMap, prop, true)
        const form = isNull(that.form) ? formData : that.form
        method(value, form).then(options => {
          that.$set(that.formItemOptions, prop, options)
          that.$set(that.remoteLoadingMap, prop, false)
        })
      }
    },
    // 自定义验证函数传入整个表单数据
    packRuleValidator(validator) {
      const that = this
      return function(rule, value, callback) {
        validator(rule, value, callback, that.form, that.data)
      }
    },
    packRules(rules) {
      if (rules) {
        rules = Array.isArray(rules) ? rules : [rules]
        return rules.map(item => {
          const newItem = { ...item }
          if (typeof newItem.validator === 'function') {
            newItem.validator = this.packRuleValidator(newItem.validator)
          }
          return newItem
        })
      }
      return null
    },
    // clear 清除对应的值
    toggleDisplay(display, props, ignore) {
      const newDisplayMap = {}
      if (Array.isArray(props)) {
        const ignoreForm = {}
        props.forEach(key => {
          newDisplayMap[key] = display === true
          ignoreForm[key] = ignore
        })
        this.ignoreForm = ignoreForm
      } else {
        for(const key in this.displayMap) {
          newDisplayMap[key] = typeof display === 'boolean' ? display : !this.displayMap[key]
        }
      }
      this.displayMap = { ...this.displayMap, ...newDisplayMap }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7165182e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/form-item/src/index.vue?vue&type=template&id=2fa2282a&scoped=true&
var srcvue_type_template_id_2fa2282a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-form-item',_vm._b({class:{'el-viewform-item': _vm.type === 'view'},attrs:{"label":_vm.label || _vm.elFormItem.label,"prop":_vm.prop || _vm.elFormItem.prop}},'el-form-item',_vm.elFormItem,false),[(_vm.component === 'input')?_c('el-input',_vm._b({attrs:{"disabled":_vm.disabled},on:{"change":_vm.onChange},model:{value:(_vm.curValue),callback:function ($$v) {_vm.curValue=$$v},expression:"curValue"}},'el-input',_vm.elProps,false)):(_vm.component === 'sptextarea')?_c('sp-textarea',_vm._b({attrs:{"disabled":_vm.disabled},on:{"change":_vm.onChange},nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.stopPropagation();}},model:{value:(_vm.curValue),callback:function ($$v) {_vm.curValue=$$v},expression:"curValue"}},'sp-textarea',_vm.elProps,false)):_vm._e(),(_vm.component === 'switch')?_c('el-switch',_vm._b({attrs:{"disabled":_vm.disabled},on:{"change":_vm.onChange},model:{value:(_vm.curValue),callback:function ($$v) {_vm.curValue=$$v},expression:"curValue"}},'el-switch',_vm.elProps,false)):(_vm.component === 'select')?_c('el-select',_vm._b({attrs:{"disabled":_vm.disabled,"loading":_vm.loading,"remote-method":_vm.remoteMethod || _vm.elProps.remoteMethod},on:{"change":_vm.onChange},model:{value:(_vm.curValue),callback:function ($$v) {_vm.curValue=$$v},expression:"curValue"}},'el-select',_vm.elProps,false),_vm._l((_vm.options),function(option){return _c('el-option',{key:option.value,attrs:{"label":option.label,"value":option.value,"disabled":option.disabled}})}),1):(_vm.component === 'checkbox')?_c('el-checkbox-group',_vm._b({attrs:{"disabled":_vm.disabled},on:{"change":_vm.onChange},model:{value:(_vm.curValue),callback:function ($$v) {_vm.curValue=$$v},expression:"curValue"}},'el-checkbox-group',_vm.elProps,false),_vm._l((_vm.options),function(option){return _c('el-checkbox',{key:option.value,attrs:{"disabled":option.disabled,"label":option.value}},[_vm._v(" "+_vm._s(option.label)+" ")])}),1):(_vm.component === 'radio')?_c('el-radio-group',_vm._b({attrs:{"disabled":_vm.disabled},on:{"change":_vm.onChange},model:{value:(_vm.curValue),callback:function ($$v) {_vm.curValue=$$v},expression:"curValue"}},'el-radio-group',_vm.elProps,false),_vm._l((_vm.options),function(option){return _c('el-radio',{key:option.value,attrs:{"label":option.value,"disabled":option.disabled}},[_vm._v(" "+_vm._s(option.label)+" ")])}),1):(_vm.component === 'datepicker')?_c('el-date-picker',_vm._b({attrs:{"disabled":_vm.disabled},on:{"change":_vm.onChange},model:{value:(_vm.curValue),callback:function ($$v) {_vm.curValue=$$v},expression:"curValue"}},'el-date-picker',_vm.elProps,false)):(_vm.component === 'time')?_c('el-time-select',_vm._b({attrs:{"disabled":_vm.disabled},on:{"change":_vm.onChange},model:{value:(_vm.curValue),callback:function ($$v) {_vm.curValue=$$v},expression:"curValue"}},'el-time-select',_vm.elProps,false)):(_vm.component === 'inputNumber')?_c('el-input-number',_vm._b({attrs:{"disabled":_vm.disabled},on:{"change":_vm.onChange},model:{value:(_vm.curValue),callback:function ($$v) {_vm.curValue=$$v},expression:"curValue"}},'el-input-number',_vm.elProps,false)):(_vm.component === 'cascader')?_c('el-cascader',_vm._b({attrs:{"disabled":_vm.disabled,"options":_vm.options},on:{"change":_vm.onChange},model:{value:(_vm.curValue),callback:function ($$v) {_vm.curValue=$$v},expression:"curValue"}},'el-cascader',_vm.elProps,false)):(_vm.component === 'upload')?_c('sp-upload',{attrs:{"action":_vm.uploadAction,"limit":2},model:{value:(_vm.curValue),callback:function ($$v) {_vm.curValue=$$v},expression:"curValue"}}):(_vm.component === 'uploadimg')?[(_vm.type !== 'view')?_c('sp-upload-img',{attrs:{"el-props":_vm.elProps},on:{"change":_vm.onChange},model:{value:(_vm.curValue),callback:function ($$v) {_vm.curValue=$$v},expression:"curValue"}}):_c('ul',{staticClass:"el-upload-list el-upload-list--picture-card"},_vm._l((_vm.curValue),function(imgUrl){return _c('li',{key:imgUrl,staticClass:"el-upload-list__item is-success"},[_c('el-image',{staticStyle:{"width":"100%","height":"100%"},attrs:{"src":imgUrl,"preview-src-list":_vm.curValue}})],1)}),0)]:(_vm.component === 'treeselect')?_c('sp-tree-select',_vm._b({attrs:{"options":_vm.options,"disabled":_vm.disabled},on:{"change":_vm.onChange},model:{value:(_vm.curValue),callback:function ($$v) {_vm.curValue=$$v},expression:"curValue"}},'sp-tree-select',_vm.elProps,false)):_vm._e(),(_vm.tip)?_c('p',{staticClass:"sp-form-tip"},[_vm._v(_vm._s(_vm.tip))]):_vm._e()],2)}
var srcvue_type_template_id_2fa2282a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form-item/src/index.vue?vue&type=template&id=2fa2282a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7165182e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/upload/src/main.vue?vue&type=template&id=5c5070f2&scoped=true&
var mainvue_type_template_id_5c5070f2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"upload-wrap",class:{'uploaded': _vm.fileUrl.length > 0},staticStyle:{"display":"inline-block"}},[(_vm.fileUrl)?_c('el-image',{ref:"elImage",staticClass:"el-image",staticStyle:{"width":"160px","height":"160px"},attrs:{"src":_vm.fileUrl,"fit":"contain","preview-src-list":[_vm.fileUrl]}}):_vm._e(),_c('div',{staticClass:"mask"},[(_vm.fileUrl)?_c('el-button',{attrs:{"type":"text","icon":"el-icon-delete"},on:{"click":_vm.onDelete}},[_vm._v("删除")]):_vm._e(),(_vm.fileUrl)?_c('el-button',{staticClass:"mask-btn",attrs:{"type":"text","icon":"el-icon-view"},on:{"click":_vm.onView}},[_vm._v("预览")]):_vm._e(),_c('el-upload',{ref:"upload",staticClass:"el-upload",attrs:{"show-file-list":_vm.showFileList,"action":_vm.action,"headers":_vm.headers,"limit":_vm.limit,"disabled":_vm.disabled,"accept":_vm.accept,"on-success":_vm.onSuccess,"on-error":_vm.onError,"on-remove":_vm.onRemove,"before-upload":_vm.onBeforeUpload,"auto-upload":_vm.autoUpload}},[_c('el-button',{attrs:{"type":"text","icon":"el-icon-upload"}},[_vm._v("上传")])],1)],1)],1)}
var mainvue_type_template_id_5c5070f2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/upload/src/main.vue?vue&type=template&id=5c5070f2&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/upload/src/main.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//

/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: 'sp-upload',
  props: {
    action: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    limit: {
      type: Number,
      default: 1
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    accept: {
      type: String,
      // default: '.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
      default: 'image/png, image/jpeg'  
    },
    showFileList: {
      type: Boolean,
      default: false
    },
    maxSize: {
      type: [String, Number],
      default: '3M'
    },
    loadingText: {
      type: String,
      default: '上传中...'
    },
    disabledText: {
      type: String,
      default: ''      
    }
  },
  data() {
    return {
      uploading: false,
      fileList: [],
      fileUrl: ''
    }
  },
  computed: {
    disabled: function() {
      return this.fileList.length >= this.limit || this.uploading
    },    
    maxSizeByte: function() {
      const need = this.maxSize
      if (typeof need === 'number') {
        return need
      }
      const needB = parseFloat(need)
      if (isNaN(needB)) {
        // 默认 最大3M
        return 3 * 1024 * 1024
      }
      if (/\d+(\.\d+)?[G,g]/.test(need)) {
        return needB * 1024 * 1024 * 1024
      } else if (/\d+(\.\d+)?[M,m]/.test(need)) {
        return needB * 1024 * 1024
      } else if (/\d+(\.\d+)?[K,KB,kb]/.test(need)) {
        return needB * 1024
      } else {
        return needB
      }
    }
  },
  watch: {
    value: function(newValue) {
      this.fileUrl = newValue     
    }
  },
  created() {
    this.headers = {
      Authorization: 'Bearer ' + this.$store.getters.access_token
    }
    this.fileUrl = this.value
  },
  methods: {
    onRemove(file, fileList) {
      
      this.fileList = fileList
      this.$emit('on-remove', { file, fileList })
    },
    clear() {
      this.$refs.upload.clearFiles()
      this.fileList = []
      this.uploading = false
    },
    onSuccess(response, file, fileList) {
      
      this.uploading = false
      if (response.code !== 200) {
        this.$message.error(response.msg || '系统错误，请联系管理员')
        return
      }
      if (fileList.length > 1) {
        this.$refs.upload.handleRemove(fileList[0])
      }
      this.fileList = fileList
      if (response.code === 200) {
        this.fileUrl = response.data.url
      }
      this.$emit('input', this.fileUrl)    
    },
    onError(err, file, fileList) {
      console.log({ file, fileList })
      this.uploading = false
      let message = {}
      try {
        message = JSON.parse(err.message)
      } catch (e) { console.log(e) }
      this.$message.error(message.msg || '导入失败，请联系管理员')
    },
    onBeforeUpload(file) {
      if (file.size > this.maxSizeByte) {
        this.$message({
          message: `文件大小不能超过${this.maxSize}`,
          type: 'error'
        })
        return false     
      }
      this.uploading = true
      return true
    },
    onDelete() {
      this.fileUrl = ''
      this.$emit('input', this.fileUrl)
    },
    onView() {
      this.$refs.elImage.clickHandler()
    }
  }
});

// CONCATENATED MODULE: ./packages/upload/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/upload/src/main.vue?vue&type=style&index=0&id=5c5070f2&lang=scss&scoped=true&
var mainvue_type_style_index_0_id_5c5070f2_lang_scss_scoped_true_ = __webpack_require__("e810");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/upload/src/main.vue






/* normalize component */

var main_component = normalizeComponent(
  src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_5c5070f2_scoped_true_render,
  mainvue_type_template_id_5c5070f2_scoped_true_staticRenderFns,
  false,
  null,
  "5c5070f2",
  null
  
)

/* harmony default export */ var main = (main_component.exports);
// CONCATENATED MODULE: ./packages/upload/index.js

main.install = function(Vue) {
  Vue.component(main.name, main)
}
/* harmony default export */ var upload = (main);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7165182e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tree-select/src/main.vue?vue&type=template&id=770ac5f9&scoped=true&
var mainvue_type_template_id_770ac5f9_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sp-tree-select"},[_c('el-input',{ref:"input",attrs:{"placeholder":"输入关键字进行过滤"},on:{"focus":function($event){return _vm.onTaggleTree(true)}},model:{value:(_vm.filterText),callback:function ($$v) {_vm.filterText=$$v},expression:"filterText"}}),_c('div',{ref:"treeDrown",staticClass:"sp-tree-select-drown"},[_c('el-tree',{ref:"tree",attrs:{"data":_vm.options,"props":_vm.defaultProps,"default-expand-all":"","filter-node-method":_vm.filterNode},on:{"node-click":_vm.onNodeClick}})],1)],1)}
var mainvue_type_template_id_770ac5f9_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/tree-select/src/main.vue?vue&type=template&id=770ac5f9&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tree-select/src/main.vue?vue&type=script&lang=js&
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


/* harmony default export */ var tree_select_src_mainvue_type_script_lang_js_ = ({
  name: 'sp-tree-select',
  props: {
    value: {
      type: [String, Number],
      default: '',     
    },
    options: {
      type: Array,
      default: function(){ return [] }
    },
    placeholder: {
      type: String,
      default: '输入关键字进行过滤'
    },
    defaultProps: {
      type: Object,
      default: function(){ return {label: 'label', value: 'value'} }
    }
  },
  data() {
    return {
      inputDom: null,
      drownDom: null,
      filterText: '',
      oldValue: '',
      selectedData: null,
      filterEnble: true,
      hadShowSelectDrown: false
    }
  },
  watch: {
    filterText(val) {
      if (this.filterEnble) {
        this.$refs.tree.filter(val)
      } else {
        this.filterEnble = true
      }
    },
    value(val) {
      this.hadShowSelectDrown = false
      this.filterEnble = false
      this.setData(this.options, val)
    },
    options(newOptions) {
      this.hadShowSelectDrown = false
      this.filterEnble = false
      this.setData(newOptions, this.value)
    }
  },
  created() {
    this.setData(this.options, this.value)
  },
  methods: {
    setData(options, value) {
      this.filterText = getLabelWithOptions(options, value)
      this.oldValue = value
      this.selectedData = {
        label: this.filterText,
        value: value
      }
    },
    onTaggleTree(show) {
      if (!show) {
        setTimeout(() => {
          if (!isNull(this.selectedData) && this.filterText !== this.selectedData.label) {
            this.filterEnble = false
            this.filterText = this.selectedData.label
            this.$refs.tree.filter('')
          } else if (isNull(this.selectedData) && this.filterText) {
            this.filterText = ''
          }
          this.showSelectDrown(false)
        }, 320)
      } else {
        this.hadShowSelectDrown = true
        this.showSelectDrown(true)
        document.addEventListener('click', this, false)
      }
    },
    showSelectDrown(show) {
      if (isNull(this.drownDom)) {
        const treeDrownDom = this.$refs.treeDrown
        this.inputDom = this.$refs.input.$el
        const rect = this.inputDom.getBoundingClientRect()
        treeDrownDom.style.top = rect.y + rect.height + 5 + 'px'
        treeDrownDom.style.left = rect.x + 'px'
        treeDrownDom.style.width = rect.width + 'px'
        this.drownDom = treeDrownDom
        document.body.append(this.drownDom)        
      }
      this.drownDom.style.display = show ? 'block' : 'none'
    },
    filterNode(value, data) {
      if (!value || !this.hadShowSelectDrown) return true;
      return data.label.indexOf(value) !== -1;
    },
    onNodeClick(data) {
      this.onTaggleTree(false)
      document.removeEventListener('click', this, false)
      this.selectedData = data
      this.filterEnble = false
      this.filterText = data.label
      if (data.value !== this.oldValue) {
        this.$emit('change', data.value)
      }
      this.$emit('input', data.value)
    },
    handleEvent(event) {
      
      switch(event.type) {
        case 'click':
          this.onClick(event)
          break
        default: break
      }
    },
    onClick(event) {
      
      if (this.drownDom && !this.drownDom.contains(event.target) && !this.inputDom.contains(event.target)) {
        this.onTaggleTree(false)
        document.removeEventListener('click', this, false)
      }
    }  
  },
  destroyed() {
    if (!isNull(this.drownDom)) {
      this.drownDom.remove()
    }
    document.removeEventListener('click', this, false)
  }
});

// CONCATENATED MODULE: ./packages/tree-select/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_tree_select_src_mainvue_type_script_lang_js_ = (tree_select_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/tree-select/src/main.vue





/* normalize component */

var src_main_component = normalizeComponent(
  packages_tree_select_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_770ac5f9_scoped_true_render,
  mainvue_type_template_id_770ac5f9_scoped_true_staticRenderFns,
  false,
  null,
  "770ac5f9",
  null
  
)

/* harmony default export */ var src_main = (src_main_component.exports);
// CONCATENATED MODULE: ./packages/tree-select/index.js

src_main.install = function(Vue) {
  Vue.component(src_main.name, src_main)
}
/* harmony default export */ var tree_select = (src_main);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7165182e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/textarea/src/index.vue?vue&type=template&id=2fa739f4&
var srcvue_type_template_id_2fa739f4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sp-textarea"},[_c('div',{staticClass:"sp-fouce sp-copy-el-input el-input--mini",on:{"click":_vm.showTextarea}},[(_vm.value && _vm.value.length > 0)?_c('p',{staticClass:"el-input__inner"},[_vm._v(_vm._s(_vm.value))]):_c('p',{staticClass:"el-input__inner placeholder"},[_vm._v(_vm._s(_vm.placeholder))])]),_c('div',{ref:"textareaPanel",staticClass:"sp-textarea-layout"},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.placeholder,"rows":10},on:{"blur":_vm.onBlur},model:{value:(_vm.content),callback:function ($$v) {_vm.content=$$v},expression:"content"}})],1)])}
var srcvue_type_template_id_2fa739f4_staticRenderFns = []


// CONCATENATED MODULE: ./packages/textarea/src/index.vue?vue&type=template&id=2fa739f4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/textarea/src/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: 'sp-textarea',
  props: {
    value: {
      type: [String, Number],
      default: '',     
    }, 
    placeholder: {
      type: [String, Number],
      default: '',       
    }  
  },
  data() {
    return {
      content: '',
      oldValue: '',
      blur: true,
      inputDom: null,
      textareaPanel: null
    }
  },
  watch: {
    value: function(newValue) {
      this.setValue(newValue)
    }
  },
  created() {
    this.setValue(this.value)
  },
  methods: {
    setValue(value) {
      if (value !== this.oldValue) {
        this.content = value.replace(/,/g, '\n')
        this.oldValue = value  
      }
    },
    onBlur(e) {
      // this.blur = true
      let { value } = e.target
      if (value) {
        value = value.split(/\n/).filter(item => item.length > 0).join(',')
      }
      if (value !== this.oldValue) {
        this.oldValue = value
        this.$emit('change', value)
      }      
      this.$emit('input', value)
      this.toggleTextarea(false)
    },
    showTextarea() {
      this.toggleTextarea(true)
    },
    hideTextarea() {
      this.toggleTextarea(false)
    },    
    toggleTextarea(show) {
      if (isNull(this.textareaPanel)) {
        const textareaPanel = this.$refs.textareaPanel
        this.inputDom = this.$el.querySelector('.sp-fouce')
        const rect = this.inputDom.getBoundingClientRect()
        textareaPanel.style.top = rect.y + 'px'
        textareaPanel.style.left = rect.x + 'px'
        textareaPanel.style.width = rect.width + 'px'
        this.textareaPanel = textareaPanel
        document.body.append(this.textareaPanel)
      }
      this.textareaPanel.style.display = show ? 'block' : 'none'
      if(show) {
        this.textareaPanel.querySelector('textarea').focus()
      }
    }, 
    destroyed() {
      if (!isNull(this.textareaPanel)) {
        this.textareaPanel.remove()
      }
    }           
  }
});

// CONCATENATED MODULE: ./packages/textarea/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var textarea_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/textarea/src/index.vue





/* normalize component */

var src_component = normalizeComponent(
  textarea_srcvue_type_script_lang_js_,
  srcvue_type_template_id_2fa739f4_render,
  srcvue_type_template_id_2fa739f4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var textarea_src = (src_component.exports);
// CONCATENATED MODULE: ./packages/textarea/index.js

textarea_src.install = function(Vue) {
  Vue.component(textarea_src.name, textarea_src)
}
/* harmony default export */ var packages_textarea = (textarea_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7165182e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/upload-img/src/index.vue?vue&type=template&id=553ef906&
var srcvue_type_template_id_553ef906_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sp-upload-img"},[_c('el-input',{staticStyle:{"margin-bottom":"10px"},attrs:{"placeholder":"点击此处粘贴上传"},on:{"focus":_vm.addListener,"blur":_vm.removeListener},model:{value:(_vm.placeValue),callback:function ($$v) {_vm.placeValue=$$v},expression:"placeValue"}}),_c('el-upload',_vm._b({ref:"elUpload",attrs:{"file-list":_vm.fileList,"disabled":_vm.disabled,"on-error":_vm.onUploadError,"on-exceed":_vm.onUploadExceed,"on-remove":_vm.onUploadRemove,"on-success":_vm.onUploadSuccess}},'el-upload',_vm.elProps,false),[_c('i',{staticClass:"el-icon-plus"})]),(_vm.uploadError)?_c('p',{staticClass:"el-form-item__error"},[_vm._v(_vm._s(_vm.uploadError))]):_vm._e()],1)}
var srcvue_type_template_id_553ef906_staticRenderFns = []


// CONCATENATED MODULE: ./packages/upload-img/src/index.vue?vue&type=template&id=553ef906&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/upload-img/src/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var upload_img_srcvue_type_script_lang_js_ = ({
  name: 'sp-upload-img',
  props: {
    value: {
      type: [String, Array],
      default: ''
    },
    elProps: {
      type: Object,
      default: function() { return {} }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      uploadError: '',
      fileList: [],
      placeValue: '',
      lockValueWach: false
    }
  },
  watch: {
    value: function(newValue) {
      if (!this.lockValueWach) {
        this.fileList = this.getUploadFileList(newValue)
      } else {
        this.lockValueWach = false
      }
    }
  },
  created() {
    this.fileList = this.getUploadFileList(this.value)
  },
  methods: {
    onUploadSuccess(response, file) {
      const url = file.response.data.url
      let value = Array.isArray(this.value) ? this.value.join(',') : this.value
      if (value) {
        value += ',' + url
      } else {
        value = url
      }
      this.lockValueWach = true
      this.$emit('input', value)
      this.$emit('change', value)
    },
    onUploadRemove(file) {
      this.uploadError = null
      let url = file.url
      if (file.response && file.response.data) {
        // url = location.origin + file.response.data.url
        url = file.response.data.url
      }
      const rxp = new RegExp(',?' + url + ',?', 'g')
      const oldValue = Array.isArray(this.value) ? this.value.join(',') : this.value
      let value = oldValue.replace(rxp, ',')
      value = value[0] === ',' ? value.slice(1) : value[value.length - 1] === ',' ? value.substring(0, value.length - 1) : value
      this.lockValueWach = true
      
      this.$emit('input', value)
      this.$emit('change', value)
    },
    onUploadError(err, file, fileList) {
      console.log({ err, file, fileList })
      // this.uploadError = `最多上传${this.elProps.limit}张图片`
      // return function(err, file, fileList) {
      
      // }
    },
    onUploadExceed(file, fileList) {
      console.log({ file, fileList })
      this.uploadError = `最多上传${this.elProps.limit}张图片`
      // return function(file, fileList) {
      
      // }
    },
    getUploadFileList(itemValue) {
      if (typeof itemValue === 'string' && itemValue.length > 0) {
        itemValue = itemValue.split(',')
      } else if (!Array.isArray(itemValue)) {
        itemValue = []
      }
      return itemValue.filter(url => typeof url === 'string' && url.length > 0).map((url, index) => {
        return {
          name: 'img' + index,
          url
        }
      })      
    },     
    handleEvent(event) {
      switch(event.type) {
        case 'paste':
          this.onPaste(event)
          break
      }
    },
    onPaste(event) {
      const clipboardData = event.clipboardData || window.clipboardData
      // const selection = window.getSelection()
      
      const items = clipboardData.items
      const files = []
      if (items && items.length) {
        // 搜索剪切板items
        for (var i = 0; i < items.length; i++) {
          if (items[i].type.indexOf('image') !== -1) {
            files.push(items[i].getAsFile())
          }
        }
        if (files.length > 0) {
          try {
            this.$refs.elUpload.$refs['upload-inner'].uploadFiles(files)
          } catch(e) {
            console.log(e)
          }
        } else {
          this.$message.error('粘贴内容非图片')            
        }
      } else {
        this.$message.error('当前浏览器不支持')
      }
    },
    addListener() {
      document.addEventListener('paste', this, false)        
    },
    removeListener() {
      if (this.placeValue) {
        this.placeValue = ''
      }
      document.removeEventListener('paste', this, false)
    }    
  }
});

// CONCATENATED MODULE: ./packages/upload-img/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_upload_img_srcvue_type_script_lang_js_ = (upload_img_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/upload-img/src/index.vue





/* normalize component */

var upload_img_src_component = normalizeComponent(
  packages_upload_img_srcvue_type_script_lang_js_,
  srcvue_type_template_id_553ef906_render,
  srcvue_type_template_id_553ef906_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var upload_img_src = (upload_img_src_component.exports);
// CONCATENATED MODULE: ./packages/upload-img/index.js

upload_img_src.install = function(Vue) {
  Vue.component(upload_img_src.name, upload_img_src)
}
/* harmony default export */ var upload_img = (upload_img_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/form-item/src/index.vue?vue&type=script&lang=js&
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





/* harmony default export */ var form_item_srcvue_type_script_lang_js_ = ({
  name: 'sp-form-item',
  components: {
    SpUpload: upload,
    SpUploadImg: upload_img,
    SpTreeSelect: tree_select,
    SpTextarea: packages_textarea
  },  
  props: {
    value: [Number, String, Array, Object],
    prop: {
      type: String,
      default: 'input'
    },
    label: String,
    type: {
      type: String,
      default: 'form'
    },
    tip: String,
    component: {
      type: String,
      default: 'input'
    },
    action: String,
    elFormItem: {
      type: Object,
      default: function(){ return {}}
    },
    elProps: {
      type: Object,
      default: function(){ return {}}      
    },
    options: {
      type: Array,
      default: function(){ return []}
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rowIndex: {
      type: Number,
      default: 0
    },
    rules: [Array, Object],
    remoteMethod: Function
  },
  data() {
    return {
      curValue: ''
    }
  },
  watch: {
    value(newValue) {
      if (newValue !== this.curValue) {
        this.curValue = this.defValue(newValue)
      }
    }
  },
  created() {
    this.curValue = this.defValue(this.value)
  },
  methods: {
    defValue(value) {
      return this.isArrayValue() && !Array.isArray(value) ? [] : value
    },
    isArrayValue() {
      return this.component === 'checkbox' || (this.component === 'select' && this.elProps.multiple)
    },
    onChange(value) {
      this.$emit('input', value)
      this.$emit('change', value)
    }
  }
});

// CONCATENATED MODULE: ./packages/form-item/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_form_item_srcvue_type_script_lang_js_ = (form_item_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/form-item/src/index.vue?vue&type=style&index=0&id=2fa2282a&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_2fa2282a_lang_scss_scoped_true_ = __webpack_require__("a6ea");

// CONCATENATED MODULE: ./packages/form-item/src/index.vue






/* normalize component */

var form_item_src_component = normalizeComponent(
  packages_form_item_srcvue_type_script_lang_js_,
  srcvue_type_template_id_2fa2282a_scoped_true_render,
  srcvue_type_template_id_2fa2282a_scoped_true_staticRenderFns,
  false,
  null,
  "2fa2282a",
  null
  
)

/* harmony default export */ var form_item_src = (form_item_src_component.exports);
// CONCATENATED MODULE: ./packages/form-item/index.js

form_item_src.install = function (Vue) {
  Vue.component(form_item_src.name, form_item_src)
}
/* harmony default export */ var form_item = (form_item_src);

// CONCATENATED MODULE: ./packages/util/decorator.js
// 防抖，等待一段时间再执行，等待期间再触发则重新等待
function debounce(fn, delay) {
  let timer = null
  delay = delay || 200
  return function() {
    const args = arguments
    const that = this
    clearTimeout(timer) //每次都要清除这个定时器
    timer = setTimeout(function() { //重新开启定时器
      fn.apply(that, args)
    }, delay)
  }
}
// 节流，一段时间内多次触发只执行第一次触发
function throttle(fn, delay) {
  let lastTime
  // let timer
  delay = delay || 1000
  return function() {
    const args = arguments
    // 记录当前函数触发的时间
    const nowTime = Date.now()
    if (!lastTime || nowTime - lastTime > delay) {
      lastTime = nowTime //更新最后时间
      fn.apply(this, args)
    }
  }
} 

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/form/src/index.vue?vue&type=script&lang=js&
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






/* harmony default export */ var form_srcvue_type_script_lang_js_ = ({
  name: 'sp-form',
  mixins: [Mform],
  components: {
    SpFormItem: form_item
  },
  props: {
    option: {
      type: Object,
      default: function() { return {} }
    },
    data: {
      type: [Object, Array],
      default: function() { return {} }
    },
    type: {
      type: String,
      default: 'form' // view，form, search
    },
    visible: {
      type: Boolean,
      default: true
    },
    enterSubmit: {
      type: Boolean,
      defualt: false,
    }
  },  
  data() {
    return {
      spOption: {}
      // uploadHeaders: {}
    }
  },
  watch: {
    visible: function(newV, oldV) {
      if (!newV && newV !== oldV) {
        this.changeFormData({ ...this.allForm })
      }
    },
    // 表单值变化
    data: function(newData) {
      this.setFormData(newData, false)
    }
  },
  created() {
    this.init(this.option, this.type)
  },
  methods: {
    setFormData(data = {}, isAssign = true) {
      let form = {}
      if (!isNull(data)) {
        const newFormData = enFormData(data, this.option.column, this.formItemOptions, true)
        form = {}
        const unClearFormData = {}
        for(const prop in this.allForm) {
          if (!isAssign) {
            // 没有传人的字段置为空
            form[prop] = newFormData[prop]
          } else {
            // 合并原来的值
            form[prop] = Object.hasOwnProperty.call(newFormData, prop) ? newFormData[prop] : this.form[prop] 
          }
          if (Object.hasOwnProperty.call(this.unClearForm, prop)) {
            unClearFormData[prop] = form[prop]
          }
        }
        loadLazyFormItemOptions(data, this.option.column).then(optionsMap => {
          this.formItemOptions = { ...this.formItemOptions, ...optionsMap }
          this.changeFormData(form)
        })
        this.unClearForm = { ...this.unClearForm, ...unClearFormData }
      } else {
        this.changeFormData(form)
      }
    },
    changeFormData(form = {}) {
      this.form = form
      // this.allForm = { ...this.allForm, ...form }
      // console.log({ allForm: this.allForm, form })
      this.clearWatchOptions()
      this.watchDataChange(null, { ...form })
      this.$nextTick(() => {
        if (this.$refs.form) {
          this.$refs.form.clearValidate()
        }
      })
    },
    getFormData(isSubmit) {
      if (isSubmit) {
        return this.getSubmitData(this.form)
      }
      return { ...this.form }
    },
    validateField(prop, callback) {
      this.$refs.form.validateField(prop, callback)
    },
    validate(callback) {
      this.$refs.form.validate(callback)
    },
    onChange(value, componentType, prop) {
      if (componentType === 'treeselect' && !isNull(value)) {
        this.$refs.form.clearValidate(prop)
      }
      this.watchDataChange(prop, this.form)
      let option = {}
      if (Array.isArray(this.formItemOptions[prop])) {
        if (Array.isArray(value)) {
          option = this.formItemOptions[prop].filter(item => item && value.includes(item.value))
        } else {
          option = this.formItemOptions[prop].find(item => item && item.value.toString() === value)
        }
      }
      this.$emit('change', prop, value, option)
    },
    onSubmit: throttle(function(isEnter) {
      // enter健触发，但是又没有配置enter健提交，则不处理
      if (isEnter === true && !this.enterSubmit) { return }
      this.$refs.form.validate((valid)=> {
        if (valid) {
          this.doSubmit(this.form)
        }
      })
    }, 3000),
    doSubmit(formModel = {}, isReset) {
      const form = this.getSubmitData(formModel)
      this.$emit('submit', form, isReset)
    },
    getSubmitData(formData) {
      for(const prop in this.ignoreForm) {
        if (this.ignoreForm[prop]) {
          formData[prop] = null
        }
      }
      return deFormData(formData, this.option.column, this.formItemOptions)
    },
    onClear() {
      const form = { ...this.unClearForm }
      this.changeFormData(form)
    },
    clearWatchOptions() {
      for(const prop in this.formItemOptions) {
        const item = this.option.column.find(item => item.prop === prop)
        if (item && isWatchObj(item.options) && isNull(this.form[prop])) {
          this.$set(this.formItemOptions, prop, [])
        }
      }
    },
    onReset () {
      const form = { ...this.allForm }
      this.changeFormData(form)
      this.doSubmit(form, true)
    },
    onCancel() {
      const data = deepClone(this.form)
      this.$emit('cancel', data)
    }    
  }
});

// CONCATENATED MODULE: ./packages/form/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_form_srcvue_type_script_lang_js_ = (form_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/form/src/index.vue?vue&type=style&index=0&id=01a900d6&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_01a900d6_lang_scss_scoped_true_ = __webpack_require__("bbfb");

// CONCATENATED MODULE: ./packages/form/src/index.vue






/* normalize component */

var form_src_component = normalizeComponent(
  packages_form_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "01a900d6",
  null
  
)

/* harmony default export */ var form_src = (form_src_component.exports);
// CONCATENATED MODULE: ./packages/form/index.js

form_src.install = function (Vue) {
  Vue.component(form_src.name, form_src)
}
/* harmony default export */ var packages_form = (form_src);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7165182e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/form-dynamic/src/index.vue?vue&type=template&id=79220a40&
var srcvue_type_template_id_79220a40_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sp-form sp-form-dynamic"},[_c('el-form',{ref:"elform",attrs:{"model":_vm.formData,"label-position":_vm.initOption.labelPosition,"label-width":_vm.initOption.labelWidth}},_vm._l((_vm.tableData),function(data,dIndex){return _c('el-row',{key:dIndex},[_vm._l((_vm.columnList),function(formItem,index){return _c('el-col',{key:index,attrs:{"span":formItem.span}},[_c('sp-form-item',{attrs:{"component":formItem.component,"label":index === 0 && dIndex !== 0 ? '' : formItem.label,"prop":'list.' + dIndex + '.' + formItem.prop,"el-form-item":formItem.elFormItemProps,"el-props":formItem.elProps,"options":_vm.formItemOptions[formItem.prop],"loading":_vm.remoteLoadingMap[formItem.prop]},on:{"change":function($event){return _vm.onChange($event, formItem.prop, dIndex)}},model:{value:(data[formItem.prop]),callback:function ($$v) {_vm.$set(data, formItem.prop, $$v)},expression:"data[formItem.prop]"}})],1)}),_c('el-col',{attrs:{"span":2}},[_c('div',{staticStyle:{"padding-left":"20px"}},[(_vm.initOption.cloneBtn && _vm.tableData.length - 1 > dIndex)?_c('el-button',{attrs:{"icon":"el-icon-copy-document","type":"text"},on:{"click":function($event){return _vm.onClone(data, dIndex)}}},[_vm._v("复制")]):_vm._e(),((_vm.initOption.removeBtn && _vm.tableData.length - 1 > dIndex) || !_vm.initOption.addBtn)?_c('el-button',{attrs:{"icon":"el-icon-minus","type":"text"},on:{"click":function($event){return _vm.onRemove(data, dIndex)}}},[_vm._v("移除")]):_vm._e(),(_vm.initOption.addBtn && _vm.tableData.length - 1 === dIndex)?_c('el-button',{attrs:{"icon":"el-icon-plus","type":"text"},on:{"click":_vm.onAdd}},[_vm._v("添加")]):_vm._e(),(_vm.saveMethod !== null)?_c('el-button',{attrs:{"icon":"el-icon-check","type":"text","disabled":!_vm.changeRow[dIndex]},on:{"click":function($event){return _vm.onSave(data, dIndex)}}},[_vm._v("保存")]):_vm._e()],1)])],2)}),1)],1)}
var srcvue_type_template_id_79220a40_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form-dynamic/src/index.vue?vue&type=template&id=79220a40&

// CONCATENATED MODULE: ./packages/mixins/Mformdynamic.js




/* harmony default export */ var Mformdynamic = ({
  props: {
    removeMethod: {
      type: Function,
      default: null
    },
    saveMethod: {
      type: Function,
      default: null
    },
    // 每条数据的唯一标示字段，通常用来判断数据的修改是新增还是更新，新增的数据该字段为空
    rowKey: {
      type: String,
      default: 'id'
    },
    option: {
      type: Object,
      default: function() { return { column: [] } }
    },
    //源数据
    data: {
      type: [Array, Function],
      default: function() { return [] }
    }
  },
  data() {
    const defOption = {
      addBtn: true,
      cloneBtn: false,
      removeBtn: true,
      labelPosition: 'right',
      labelWidth: '80px',
      selection: true,
      column: []
    }
    return {
      initOption: {},
      defOption: defOption,
      elTableOption: {},
      columnList: [],
      sourceData: [],
      tableData: [],
      formItemOptions: {},
      changeRow: [],
      removeRowsWithKey: [], //移除的源数据
      editProps: {},
      requiredProps: {},
      remoteLoadingMap: {},
      asyncValueMap: {},
      defRowData: {},
      disabledMap: {},
      ruleLock: [],
      lockValueWatch: {} // 锁定值变化触发监听事件，避免循环监听
    }
  },
  computed: {
    formData: function() {
      return {
        list: this.tableData
      }
    }
  },
  watch: {
    data(newData) {
      this.setData(newData, this.initOption)
    },
    option(newOption) {
      this.init(newOption, this.data)
    }  
  },
  created() {
    if (!isNull(this.option)) {
      this.init(this.option, this.data)
    }
  },  
  methods: {
    init(option, data) {
      option = resetColumnStyle(option)
      option = {...this.defOption, ...option }
      const column = []
      const requiredProps = {}
      const editProps = {}
      const asyncValueMap = {}
      const remoteLoadingMap = {}
      const formItemOptions = {}
      const watchFormItemOptions = {}
      const disabledMap = {}
      if (option && Array.isArray(option.column)) {
        option.column.filter(item => item.hide != true && item.display !== false).forEach(item => {
          const spColumnItem = this.extColumn(option, item, requiredProps, editProps)
          column.push(spColumnItem)
          disabledMap[item.prop] = item.disabled === true
          if (typeof item.remoteMethod === 'function') {
            remoteLoadingMap[item.prop] = false
          }
          requiredProps[item.prop] = item.required === true ? true : false
          if (item.tableEdit !== false) {
            editProps[item.prop] = true
          }
          assignDictOptions(item, formItemOptions, {}, watchFormItemOptions)
          if (isWatchObj(item.asyncValue)) {
            assignWatchObj(item.prop, item.asyncValue, asyncValueMap)
          }   
        })
      }
      this.initOption = option
      this.elTableOption = this.getElTableOption(option)
      this.requiredProps = requiredProps
      this.editProps = editProps
      this.asyncValueMap = asyncValueMap
      this.remoteLoadingMap = remoteLoadingMap
      this.formItemOptions = formItemOptions
      this.watchFormItemOptions = watchFormItemOptions
      this.disabledMap = disabledMap
      this.columnList = column
      
      loadLazyFormItemOptions(data, option.column).then(optionsMap => {
        this.formItemOptions = { ...this.formItemOptions, ...optionsMap }
        this.setData(data, option)
      })
    },
    extColumn(option, item, requiredProps, editProps) {
      const component = type2Component(item.type)
      const elProps = extElFormCompProps(option, item)
      const placeholder = item.type === 'trigger' ? '点击选择': elProps.placeholder
      elProps.placeholder = placeholder
      if (typeof item.remoteMethod === 'function') {
        elProps.filterable = true
        elProps.remote = true
        elProps.defaultFirstOption = item.defaultFirstOption !== false
      }
      const elFormItemProps = extElFormItemProps(option, item)
      if (item.rules) {
        elFormItemProps.rules = this.packRules(item.rules, item.prop)
      }
      const elTableColumProps = extElTableColumnProps(option, item)
      // elTableColumProps.showOverflowTooltip = false
      let children
      if (Array.isArray(item.children)) {
        children = item.children.map(childItem => this.extColumn(option, childItem, requiredProps, editProps))
      }

      requiredProps[item.prop] = item.required === true ? true : false
      if (item.tableEdit !== false) {
        editProps[item.prop] = true
      }

      return {
        prop: item.prop,
        label: item.label,
        tableEdit: item.tableEdit,
        type: item.type,
        component,
        span: item.span || 12,
        elProps,
        elFormItemProps,
        elTableColumProps,
        children
      }
    },
    extDefRowData(option = {}, data = []) {
      const column = Array.isArray(option.column) ? option.column : []
      const defData = getDefDataWithColumn({}, column, this.formItemOptions)
      const valueCloneColumn = column.filter(item => item.valueClone)
      if (valueCloneColumn.length > 0 && data.length > 0) {
        valueCloneColumn.forEach(item => {
          defData[item.prop] = data[0][item.prop]
        })
      }
      return defData   
    },
    getElTableOption(option) {
      const newOption = filterElTableOption(option)
      const that = this
      if (typeof option.cellStyle === 'function') {
        newOption.cellStyle = function({ row, column, rowIndex, columnIndex }) {
          const sourceRow = that.sourceData.find(item => item.$idKey === row.$idKey)
          return option.cellStyle({ row: sourceRow || row, column, rowIndex, columnIndex })
        }
      }
      return newOption
    },    
    // 外部可用方法
    getData(isValidate) {
      if (isValidate) {
        return new Promise((resolve, reject) => {
          this.$refs.elform.validate((valid) => {
            if (valid) {
              const data = this.getValitateData()
              resolve(data)
            } else if (reject) {
              reject()
            }
          })
        })
      } else {
        return this.getValitateData()
      }
    },
    // 外部可用方法
    addData(data) {
      if (Array.isArray(data) && data.length > 0) {
        const column = this.initOption.column.filter(item => item.hide != true)
        const tableData = data.map(rowData => {
          return enFormData(rowData, column, this.formItemOptions)
        })
        this.tableData = this.tableData.concat(tableData)
      }
    },
    // 外部可用方法
    getRemoveRows() {
      return this.removeRowsWithKey
    },
    // 外部可用方法
    resetRowData(data, index) {
      this.tableData.splice(index, 1, data)
    },
    resetTableData(done) {
      if (typeof done === 'function') {
        const newTableData = done(this.tableData)
        if (!Array.isArray(newTableData) && newTableData.length === 0) {
          this.tableData = [{...this.defRowData}]
        } else {
          this.tableData = newTableData
        }
      }
    },
    valitateRowData(data) {
      if (isNull(data)) { return false }
      for (const prop in this.requiredProps) {
        if (this.requiredProps[prop] && isNull(data[prop])) {
          return false
        }
      }
      return true
    },
    onRemove(row, index) {
      if (this.removeMethod && row[this.rowKey]) {
        this.removeMethod(row, (deleteAble) => {
          if (deleteAble) {
            this.removeRow(row, index)
          }
        })
      } else {
        this.removeRow(row, index)
      }
    },
    removeRow(row, index) {
      if (row[this.rowKey]) {
        this.removeRowsWithKey.push(row)
      }
      this.tableData.splice(index, 1)
      this.$nextTick(() => {
        this.$refs.elform.clearValidate()        
      })
    },
    onAdd() {
      const cloneData = { ...this.defRowData }
      this.tableData.push(cloneData)
    },
    onClone(row, index) {
      const cloneData = deepClone(row)
      if (cloneData[this.rowKey]) {
        cloneData[this.rowKey] = null
      }
      this.tableData.splice(index + 1, 0, cloneData)
    },
    onSave(row, index) {
      if (this.saveMethod) {
        this.$set(this.changeRow, index, false)
        this.saveMethod(row)
      }
    },
    onChange(value, component, prop, index) {
      
      if (this.saveMethod) {
        let isChange = this.tableData[index][this.rowKey]
        if (!isChange) {
          isChange = !isEqual(this.data[index], this.tableData[index])
        }
        this.$set(this.changeRow, index, isChange)
      }
      const tableData = this.getValitateData()
      // const rProp = prop + index
      // if (this.lockValueWatch[rProp]) {
      //   console.warn(`${rProp}已锁定监听变化`)
      //   this.lockValueWatch[rProp] = false
      // } else {
      // }
      this.valueWatch(prop, index, tableData)
    },
    onTrigger(column, index) {
      const row = deepClone(this.tableData[index])
      this.$emit('on-trigger', row, column, index)
    },    
    // 是否保存修改 false-未保存修改，true-已保存修改或没有修改
    haveSaveChange() {
      return !this.changeRow.some(need => need === true)
    },
    packRemoteMethod(method, prop, index) {
      const that = this
      const propIdx = prop // + index
      if (typeof method !== 'function') {
        return function() {}
      }
      return debounce(function(value) {
        that.$set(that.remoteLoadingMap, propIdx, true)
        
        method(value, that.tableData[index]).then(options => {
          that.$set(that.formItemOptions, prop, options)
          that.$set(that.remoteLoadingMap, propIdx, false)
        })
      })
    },   
    valueWatch(prop, rindex, tableData) {
      let tprops = null
      if (typeof prop === 'string') {
        tprops = this.asyncValueMap[prop]
      } else {
        tprops = structuredWatchData(this.asyncValueMap)
      }
      if (!isNull(tprops)) {
        const rowData = tableData[rindex]
        const newData = deepClone(rowData)
        for(const tprop in tprops) {
          const item = this.initOption.column.find(citem => citem.prop === tprop)
          
          const asyncValue = !item ? {} : item.asyncValue
          const watchValue = getWatchPropValue(asyncValue, newData, this.formItemOptions)
          // this.lockValueWatch[tprop + rindex] = true
          newData[tprop] = tprops[tprop](rowData, prop, watchValue, tableData)
        }
        this.tableData.splice(rindex, 1, newData)
      }
    },    
    packRuleValidator(validator) {
      const that = this
      return function(rule, value, callback) {
        // 解决重复验证多次的问题，权宜之计，待优化
        const lock = that.ruleLock.find(item => item.field === rule.field && item.value === value)
        if (lock) {
          const ltime = lock.time
          lock.time = Date.now()
          if (Date.now() - ltime < 1000) {
            callback()
            return
          }
        } else {
          that.ruleLock.push({
            field: rule.field,
            value,
            time: Date.now()
          })
        }
        const data = deepClone(that.tableData)
        const sourceData = deepClone(that.data)
        validator(rule, value, callback, data, sourceData)
      }
    },
    packRules(rules) {
      if (rules) {
        rules = Array.isArray(rules) ? rules : [rules]
        return rules.map(item => {
          const newItem = { ...item }
          if (typeof newItem.validator === 'function') {
            newItem.validator = this.packRuleValidator(newItem.validator)
          }
          return newItem
        })
      }
      return null
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/form-dynamic/src/index.vue?vue&type=script&lang=js&
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
//


// 涉及下拉框、复选框、单选框的选项功能



/* harmony default export */ var form_dynamic_srcvue_type_script_lang_js_ = ({
  name: 'sp-form-dynamic',
  components: {
    SpFormItem: form_item
  },
  mixins: [Mformdynamic],
  data() {
    return {}
  },
  methods: {
    // 外部可用方法
    setData(data, option) {
      this.removeLock = {}
      if (isNull(option)) {
        option = this.option
      }
      let tableData = []
      if (Array.isArray(data) && data.length > 0) {
        const column = option.column.filter(item => item.hide != true)
        tableData = data.map(rowData => {
          return enFormData(rowData, column, this.formItemOptions)
        })
      }
      if (this.initOption.addBtn) {
        this.defRowData = this.extDefRowData(this.option, data)
        tableData.push({ ...this.defRowData })
      }
      this.tableData = tableData
      this.removeRowsWithKey = []
      if (this.$refs.elform) {
        this.$nextTick(() => {
          this.$refs.elform.clearValidate()        
        })
      }
    },
    getValitateData() {
      const list = []
      this.tableData.forEach(row => {
        if (this.valitateRowData(row)) {
          list.push(row)
        }
      })
      return list
    },    
  }
});

// CONCATENATED MODULE: ./packages/form-dynamic/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_form_dynamic_srcvue_type_script_lang_js_ = (form_dynamic_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form-dynamic/src/index.vue





/* normalize component */

var form_dynamic_src_component = normalizeComponent(
  packages_form_dynamic_srcvue_type_script_lang_js_,
  srcvue_type_template_id_79220a40_render,
  srcvue_type_template_id_79220a40_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var form_dynamic_src = (form_dynamic_src_component.exports);
// CONCATENATED MODULE: ./packages/form-dynamic/index.js

form_dynamic_src.install = function (Vue) {
  Vue.component(form_dynamic_src.name, form_dynamic_src)
}
/* harmony default export */ var form_dynamic = (form_dynamic_src);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7165182e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/form-group/src/index.vue?vue&type=template&id=19017af2&scoped=true&
var srcvue_type_template_id_19017af2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sp-form-group"},[_vm._l((_vm.formOptionList),function(option,index){return _c('div',{key:index,staticClass:"sp-form-group-item"},[(option.title)?_c('div',{staticClass:"sp-form-group-title"},[_vm._v(_vm._s(option.title))]):_vm._e(),(option.dynamic)?_c('sp-form-dynamic',{ref:'formDynamic' + index,refInFor:true,attrs:{"type":"group","data":_vm.data,"option":option},scopedSlots:_vm._u([_vm._l((_vm.slotList),function(slotItem){return {key:slotItem.prop,fn:function(scope){return [_c('div',{key:slotItem.prop},[_vm._t(slotItem.prop,null,null,scope)],2)]}}})],null,true)}):_c('sp-form',{ref:'form' + index,refInFor:true,attrs:{"option":option,"data":_vm.data,"type":"group"},scopedSlots:_vm._u([_vm._l((_vm.slotList),function(slotItem){return {key:slotItem.prop,fn:function(scope){return [_c('div',{key:slotItem.prop},[_vm._t(slotItem.prop,null,null,scope)],2)]}}})],null,true)})],1)}),(_vm.type === 'form')?_c('div',{style:({textAlign: 'right'})},[(_vm.spOption.submitBtn)?_c('el-button',{attrs:{"type":"primary","icon":"el-icon-check"},on:{"click":_vm.onSubmit}},[_vm._v(_vm._s(_vm.spOption.submitBtnTxt))]):_vm._e(),(_vm.spOption.clearBtn)?_c('el-button',{attrs:{"icon":"el-icon-delete"},on:{"click":_vm.onClear}},[_vm._v(_vm._s(_vm.spOption.clearBtnTxt))]):_vm._e(),(_vm.spOption.cancelBtn)?_c('el-button',{attrs:{"icon":"el-icon-close"},on:{"click":_vm.onCancel}},[_vm._v(_vm._s(_vm.spOption.cancelBtnTxt))]):_vm._e(),_vm._t("formHandle")],2):(_vm.type === 'search')?_c('div',{style:({textAlign: 'right'})},[(_vm.spOption.submitBtn)?_c('el-button',{attrs:{"type":"primary","icon":"el-icon-search"},on:{"click":_vm.onSubmit}},[_vm._v(_vm._s(_vm.spOption.searchBtnTxt))]):_vm._e(),(_vm.spOption.resetBtn)?_c('el-button',{attrs:{"icon":"el-icon-refresh-left"},on:{"click":_vm.onReset}},[_vm._v(_vm._s(_vm.spOption.resetBtnTxt))]):_vm._e(),(_vm.spOption.cancelBtn)?_c('el-button',{attrs:{"icon":"el-icon-close"},on:{"click":_vm.onCancel}},[_vm._v(_vm._s(_vm.spOption.cancelBtnText))]):_vm._e(),_vm._t("formHandle")],2):_vm._e()],2)}
var srcvue_type_template_id_19017af2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form-group/src/index.vue?vue&type=template&id=19017af2&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/form-group/src/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var form_group_srcvue_type_script_lang_js_ = ({
  name: 'sp-form-group',
  props: {
    option: {
      type: Object,
      default: function() { return {} }
    },
    data: {
      type: Object,
      default: function() { return {} }
    },
    type: {
      type: String,
      default: 'form'
    }
  },
  data() {
    const defSpFormOption = {
      cancelBtn: false,
      clearBtn: false,
      submitBtn: true,
      resetBtn: true,
      resetBtnTxt: '重置',
      submitBtnTxt: '提交',
      searchBtnTxt: '搜索',
      cancelBtnTxt: '取消',
      clearBtnTxt: '清空'
    }    
    return {
      defSpFormOption,
      spOption: {},
      formOptionList: [],
      slotList: [],
      refs: []
    }
  },
  created() {
    this.spOption = { ...this.defSpFormOption, ...this.option }
    this.formOptionList = this.initConfig(this.spOption)
    this.refs = this.formOptionList.reduce((refs, item, index) => {
      if (item.dynamic) {
        refs.push('formDynamic' + index)
      } else {
        refs.push('form' + index)
      }
      return refs
    }, [])
    let slotList = []
    this.formOptionList.forEach(option => {
      if (Array.isArray(option.column)) {
        const slots = option.column.filter(item => item.slot === true || item.type === 'slot')
        slotList = slotList.concat(slots)
      }
    })
    this.slotList = slotList
  },
  methods: {
    initConfig(option) {
      const mergeOption = { ...option, group: null }
      let formOptionList = []
      if(Array.isArray(option.group)) {
        formOptionList = option.group.map(item => {
          return { ...mergeOption, ...item, }
        })
      }
      return formOptionList
    },
    onSubmit() {
      let data = {}
      const validaters = this.refs.filter(name => this.$refs[name] && this.$refs[name][0]).map(name => {
        return this.$refs[name][0].$refs.form.validate()
      })
      Promise.all(validaters).then(() => {
        this.refs.forEach(name => {
          if (this.$refs[name] && this.$refs[name][0]) {
            const sigleData = this.$refs[name][0].getFormData()
            data = { ...data, ...sigleData }
          }
        })
        this.$emit('submit', data)
      }, () => {
        
      })
    },
    onClear() {
      this.refs.forEach(name => {
        if (this.$refs[name] && this.$refs[name][0]) {
          this.$refs[name][0].onClear()
        }
      })
    },
    onCancel() {
      this.refs.forEach(name => {
        if (this.$refs[name] && this.$refs[name][0]) {
          this.$refs[name][0].onCancel()
        }
      })
    },
    onReset () {
      this.onClear()
      this.onSubmit()
    }
  }
});

// CONCATENATED MODULE: ./packages/form-group/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_form_group_srcvue_type_script_lang_js_ = (form_group_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/form-group/src/index.vue?vue&type=style&index=0&id=19017af2&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_19017af2_lang_scss_scoped_true_ = __webpack_require__("1148");

// CONCATENATED MODULE: ./packages/form-group/src/index.vue






/* normalize component */

var form_group_src_component = normalizeComponent(
  packages_form_group_srcvue_type_script_lang_js_,
  srcvue_type_template_id_19017af2_scoped_true_render,
  srcvue_type_template_id_19017af2_scoped_true_staticRenderFns,
  false,
  null,
  "19017af2",
  null
  
)

/* harmony default export */ var form_group_src = (form_group_src_component.exports);
// CONCATENATED MODULE: ./packages/form-group/index.js

form_group_src.install = function (Vue) {
  Vue.component(form_group_src.name, form_group_src)
}
/* harmony default export */ var form_group = (form_group_src);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7165182e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/table/src/index.vue?vue&type=template&id=41842104&
var srcvue_type_template_id_41842104_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sp-table"},[(_vm.showElTable)?_c('el-table',_vm._b({ref:"elTable",class:{ 'highlight-current-row': _vm.spTableOption.highlightCurrentRow },attrs:{"data":_vm.tableData,"border":""},on:{"header-dragend":_vm.onHeaderDragend,"selection-change":_vm.onSelectionChange,"row-click":_vm.onRowClick,"sort-change":_vm.sortChange,"row-dblclick":_vm.onRowDblclick}},'el-table',_vm.elTableOption,false),[(_vm.spTableOption.selection)?_c('el-table-column',{attrs:{"type":"selection","fixed":"left","align":"center","width":"40"}}):_vm._e(),(_vm.spTableOption.expand)?_c('el-table-column',{attrs:{"fixed":"left","type":"expand"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._t("expand",null,null,scope)]}}],null,true)}):_vm._e(),_c('el-table-column',{attrs:{"fixed":"left","type":"index","index":_vm.indexMethod,"align":"center","show-overflow-tooltip":"","label":"序号"}}),_vm._l((_vm.spColumn),function(column){return [(column.children && column.children.length > 0)?_c('el-table-column',{key:column.prop,attrs:{"align":"center","fixed":column.fixed,"label":column.label}},[_vm._l((column.children),function(childColumn){return [(childColumn.children && childColumn.children.length > 0)?_c('el-table-column',{key:childColumn.label,attrs:{"align":"center","fixed":childColumn.fixed,"label":childColumn.label}},_vm._l((childColumn.children),function(childWColumn){return _c('el-table-column',_vm._b({key:childWColumn.prop},'el-table-column',childWColumn.elProps,false))}),1):_c('el-table-column',_vm._b({key:childColumn.prop},'el-table-column',childColumn.elProps,false))]})],2):(column.type !== 'slot')?_c('el-table-column',_vm._b({key:column.prop},'el-table-column',column.elProps,false)):_c('el-table-column',_vm._b({key:column.prop,scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._t(column.prop,null,null,{ row: _vm.sourceData[scope.$index], $index: scope.$index })]}}],null,true)},'el-table-column',column.elProps,false))]}),_c('template',{slot:"append"},[(_vm.loading)?_c('div',{staticClass:"sp-load-wrap"},[_c('img',{staticClass:"circular",attrs:{"src":__webpack_require__("897e"),"alt":"加载中"}})]):_vm._e()]),_c('template',{slot:"empty"},[(!_vm.loading)?_c('sp-empty',{staticStyle:{"height":"100%","min-height":"300px"},attrs:{"title":_vm.emptyTip}}):_c('div')],1),(_vm.spTableOption.showRowAction)?_c('el-table-column',{attrs:{"fixed":"right","align":"center","width":_vm.spTableOption.rowActionWidth,"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(_vm.spTableOption.viewBtn && scope.row.viewBtn !== false)?_c('el-button',{attrs:{"disabled":scope.row.viewDisabled,"type":"text","icon":"el-icon-view"},on:{"click":function($event){return _vm.onRowView(_vm.sourceData[scope.$index], scope.$index)}}},[_vm._v("查看")]):_vm._e(),(_vm.spTableOption.editBtn && scope.row.editBtn !== false)?_c('el-button',{attrs:{"disabled":scope.row.editDisabled,"type":"text","icon":"el-icon-edit"},on:{"click":function($event){return _vm.onRowEdit(_vm.sourceData[scope.$index], scope.$index)}}},[_vm._v("编辑")]):_vm._e(),(_vm.spTableOption.delBtn && scope.row.delBtn !== false)?_c('el-button',{attrs:{"disabled":scope.row.delDisabled,"type":"text","icon":"el-icon-delete"},on:{"click":function($event){return _vm.onRowDel(_vm.sourceData[scope.$index], scope.$index)}}},[_vm._v("删除")]):_vm._e(),_vm._t("rowAction",null,null,{ row: _vm.sourceData[scope.$index], $index: scope.$index })]}}],null,true)}):_vm._e()],2):_vm._e(),(_vm.dynamic && _vm.loading)?_c('div',{staticClass:"sp-load-wrap"},[_c('img',{staticClass:"circular",attrs:{"src":__webpack_require__("897e"),"alt":"加载中"}})]):_vm._e(),(_vm.page.total > 0)?_c('div',{staticClass:"sp-pagination-wrap"},[_c('el-pagination',{attrs:{"background":"","layout":"total, sizes, prev, pager, next, jumper","current-page":_vm.page.current,"page-sizes":_vm.pageSizes,"page-size":_vm.page.size,"total":_vm.page.total},on:{"update:currentPage":function($event){return _vm.$set(_vm.page, "current", $event)},"update:current-page":function($event){return _vm.$set(_vm.page, "current", $event)},"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange},nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.stopPropagation();}}})],1):_vm._e()],1)}
var srcvue_type_template_id_41842104_staticRenderFns = []


// CONCATENATED MODULE: ./packages/table/src/index.vue?vue&type=template&id=41842104&

// CONCATENATED MODULE: ./packages/util/client.js
const getClientInfo = () => {
  const UA = window.navigator.userAgent.toLowerCase()
  return {
    UA: UA,
    clientWidth: document.body.clientWidth,
    clientHeight: document.body.clientHeight
  }
}
const getScreen = () => {
  var width = document.body.clientWidth
  if (width >= 1200) {
    return 3 // 大屏幕
  } else if (width >= 992) {
    return 2 // 中屏幕
  } else if (width >= 768) {
    return 1 // 小屏幕
  } else {
    return 0 // 超小屏幕
  }
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/table/src/index.vue?vue&type=script&lang=js&
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
//
//






/* harmony default export */ var table_srcvue_type_script_lang_js_ = ({
  name: 'sp-table',
  props: {
    permission: {
      type: Object,
      default: function () { return {} }
    },
    option: {
      type: Object,
      default: function () { return {} }
    },
    data: {
      type: [Array, Function],
      default: function() { return [] }
    },
    autoLoad: {
      type: Boolean,
      default: true
    },
    lazyLoad: {
      type: Boolean,
      default: false
    },
    // 动态配置表头
    dynamic: {
      type: Boolean,
      default: false
    },
    query: {
      type: Object,
      default: function() { return {} }
    }
  },
  data() {
    const pageSizes = [10, 20, 50, 100, 500]
    return {
      updateSpColumn: false,
      deactivated: false,
      tableData: [],
      sourceData: [],
      spTableOption: {},
      elTableOption: {},
      spColumn: [],
      // spColumnMap: {},
      loading: false,
      emptyTip: '暂无数据',
      pageSizes,
      page: {
        current: 1,
        size: pageSizes[0],
        total: 0
      },
      indexMethod: 1,
      params: {},
      sortConfig: {},
      bodyMaxHeight: -1 // 用于鉴别已经计算过一次表格高度了
    }
  },
  computed: {
    showElTable: function() {
      return ((this.dynamic && !this.loading) || !this.dynamic) && !this.updateSpColumn && !this.deactivated
    }
  },
  watch: {
    option: function(newOption) {
      this.init(newOption)
    },
    data: function(newData) {
      if (Array.isArray(newData)) {
        this.loadTableData(newData)
      }
    },
    query: function(newData) {
      this.resetTableData(newData)
    }
  },
  created() {
    this.params = { ...this.query }
    if (!this.dynamic) {
      this.init(this.option)
    }
    this.loading = this.lazyLoad
  },
  mounted() {
    if (this.autoLoad) {
      this.loadTableData(this.params)
    } else {
      this.emptyTip = '请手动搜索'
    }
    window.addEventListener('resize', this, false)
  },
  destroyed() {
    window.removeEventListener('resize', this, false)
  },
  activated() {
    this.deactivated = false
    this.setTableSize(true)
    window.addEventListener('resize', this)
  },
  deactivated() {
    this.deactivated = true
    window.removeEventListener('resize', this)
  },  
  methods: {
    handleEvent(event) {
      switch(event.type) {
        case 'resize':
          this.setTableSize(true)
          break
      }
    },    
    init(option) {
      option = resetColumnStyle(option)
      this.elTableOption = this.getElTableOption(option)
      this.spColumn = this.getSpColumn(option)
      this.spTableOption = this.getSpOption(option)
    },
    getElTableOption(option) {
      const newOption = filterElTableOption(option)
      const that = this
      if (typeof option.cellStyle === 'function') {
        newOption.cellStyle = function({ row, column, rowIndex, columnIndex }) {
          const sourceRow = that.sourceData.find(item => item.$idKey === row.$idKey)
          return option.cellStyle({ row: sourceRow || row, column, rowIndex, columnIndex })
        }
      }
      return newOption
    },
    getSpColumn(option) {
      return extSpTableColumn(option)
    },
    getSpOption(option) {
      const newOption = {
        showRowAction: option.showRowAction || option.editBtn || option.delBtn,
      }
      const spOption = { ...defSpTbOption, ...option, ...newOption, ...this.permission }
      const rowActionWidth = this.calRowActionWidth(spOption)
      spOption.rowActionWidth = rowActionWidth
      return spOption
    },
    setTableData(data) {
      const spData = data.map((item, index) => {
        item.$idKey = index + this.indexMethod
        return item
      })
      const column = this.option.column.filter(item => item.hide !== true)
      enTableData(spData, { ...this.option, column }).then(tableData => {
        this.sourceData = spData
        this.tableData = tableData
        this.emptyTip = '暂无数据'
        this.loading = false
        this.$nextTick(() => {
          this.setTableSize()
          if (this.elTableOption.summaryMethod) {
            this.$refs.elTable.syncPostion()
          }
        })        
      })
    },
    getTableData(source) {
      if (source) {
        return deepClone(this.sourceData)
      } else {
        return deepClone(this.tableData)
      }
    },
    setPage(data) {
      if (data.total !== this.page.total || data.current !== this.page.current) {
        this.page = { ...this.page, total: data.total, current: data.current }
      }
    },
    loadTableData(params) {
      this.params = isNull(params) ? {} : params
      if (typeof this.data === 'function') {
        const reqParams = { ...this.page, ...params, ...this.sortConfig, total: null }
        this.loading = true
        this.tableData = []
        this.data(reqParams, (config) => {
          if(isNull(config)) {
            this.loading = false
            return
          }
          let { option, data, total } = config || {}
          data = Array.isArray(data) ? data : []
          total = total || data.length || 0
          if (!isNull(option)) {
            this.init(option, data)
          }
          this.setTableData(data)
          this.setPage({
            total,
            current: reqParams.current
          })
        })
      } else if (Array.isArray(this.data)) {
        this.setTableData(this.data)
      }
    },
    resetTableData(params = {}) {
      this.setPage({
        current: 1
      })
      this.indexMethod = 1
      const defaultSort = this.spTableOption.defaultSort
      if(!isNull(defaultSort)) {
        this.sortConfig = null
        // // 会触发sort-change事件
        this.$refs.elTable.sort(defaultSort.prop, defaultSort.order)
      }
      this.loadTableData(params)
    },
    refreshTableData(delCount) {
      delCount = delCount === true ? 1 : typeof delCount === 'number' ? delCount : 0
      if (delCount > 0 && this.page.current > 1) {
        const total = this.page.total - delCount
        const maxCurrent = Math.ceil(total / this.page.size)
        if (maxCurrent < this.page.current) {
          this.setPage({
            current: maxCurrent
          })
        }
      }
      this.loadTableData(this.params)
    },
    handleSizeChange(size) {
      this.page = { ...this.page, size, current: 1 }
      this.indexMethod = (this.page.current - 1) * this.page.size + 1
      this.loadTableData(this.params)
    },
    handleCurrentChange(page) {
      this.page.current = page
      this.indexMethod = (this.page.current - 1) * this.page.size + 1
      this.loadTableData(this.params)
    },
    onHeaderDragend() {
      this.$refs.elTable.doLayout()
    },
    sortChange(column) {
      const { order, prop } = column
        // 避免重置之后又触发sort-change导致两次请求接口的问题
      if (!this.sortConfig) {
        this.sortConfig = { order, prop }
      } else {
        // this.$emit('sort-change', column, row, record)
        if (order !== this.sortConfig.order || prop !== this.sortConfig.prop) {
          this.sortConfig = { order, prop }
          this.refreshTableData()
        }
      }
    },
    calRowActionWidth(options = {}) {
      if (options.rowActionWidth) {
        return options.rowActionWidth
      }
      let width = ['editBtn', 'delBtn', 'viewBtn'].reduce((w, item) => {
        return w + (options[item] ? 65 : 0)
      }, 0)
      if (this.$scopedSlots && this.$scopedSlots.rowAction) {
        const rowActionSlot = this.$scopedSlots.rowAction()
        if (rowActionSlot) {
          width += rowActionSlot.length * 65
        }     
      }
      return width < 80 ? 80 : width
    },   
    // 计算表格高度
    setTableSize: debounce(function (isDoLayout) {
      if (this.option.maxHeight) { return }
      const targetDom = this.$el
      if (targetDom && (this.bodyMaxHeight < 0 || isDoLayout)) {
        const minHeight = 300
        const { clientHeight } = getClientInfo()
        const { top } = targetDom.getBoundingClientRect()
        let bodyMaxHeight = clientHeight - top - 77 // 52 + 15 + 10
        bodyMaxHeight = bodyMaxHeight < minHeight ? minHeight : bodyMaxHeight
        if (this.bodyMaxHeight !== bodyMaxHeight) {
          this.bodyMaxHeight = bodyMaxHeight
          this.$set(this.elTableOption, 'maxHeight', this.bodyMaxHeight)
          if (isDoLayout) {
            this.$refs.elTable.doLayout()
          }
        }
      }
    }, 480),
    resetSpColumn(column) {
      const option = {...this.option, column }
      this.updateSpColumn = true
      this.spColumn = extSpTableColumn(option)
      this.$nextTick(() => {
        this.updateSpColumn = false
      })
    },
    onRowView(row, index) {
      this.$emit('row-view', row, index)
    },
    onRowEdit(row, index) {
      this.$emit('row-edit', row, index)
    },
    onRowDel(row, index) {
      this.$emit('row-del', row, index)
    },
    onSelectionChange(selection) {
      const srows = selection.map(row => {
        return this.sourceData.find(item => item.$idKey === row.$idKey)
      })
      this.$emit('selection-change', srows)
    },
    clearSelection() {
      this.$refs.elTable.clearSelection()
    },    
    onRowClick(row, index) {
      const srow = this.sourceData.find(item => item.$idKey === row.$idKey)
      this.$emit('row-click', srow, index)
    },
    onRowDblclick(row, index) {
      const srow = this.sourceData.find(item => item.$idKey === row.$idKey)
      this.$emit('row-dblclick', srow, index)
    },
    toggleRowSelection(row) {
      const trow = this.tableData.find(item => item.$idKey === row.$idKey)
      this.$refs.elTable.toggleRowSelection(trow)
    }    
  }
});

// CONCATENATED MODULE: ./packages/table/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_table_srcvue_type_script_lang_js_ = (table_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/table/src/index.vue





/* normalize component */

var table_src_component = normalizeComponent(
  packages_table_srcvue_type_script_lang_js_,
  srcvue_type_template_id_41842104_render,
  srcvue_type_template_id_41842104_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var table_src = (table_src_component.exports);
// CONCATENATED MODULE: ./packages/table/index.js
// import Table from './src/main'

table_src.install = function(Vue) {
  Vue.component(table_src.name, table_src)
}
/* harmony default export */ var table = (table_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7165182e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/table-form/src/index.vue?vue&type=template&id=1fc45eac&
var srcvue_type_template_id_1fc45eac_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-form',{ref:"elform",staticClass:"sp-table-form",attrs:{"model":_vm.formData,"label-width":"0px"}},[(_vm.isRender)?_c('el-table',_vm._b({ref:"elTable",attrs:{"border":"","index":"","max-height":_vm.maxHeight,"data":_vm.tableData},on:{"selection-change":_vm.onSelectionChange,"cell-click":_vm.onCellClick}},'el-table',_vm.elTableOption,false),[(_vm.initOption.selection)?_c('el-table-column',{attrs:{"type":"selection","fixed":"left","align":"center","width":"40"}}):_vm._e(),_c('el-table-column',{attrs:{"fixed":"left","type":"index","align":"center","index":_vm.indexMethod,"show-overflow-tooltip":"","label":"序号"}}),_vm._l((_vm.columnList),function(column,index){return [(column.children && column.children.length > 0)?_c('el-table-column',_vm._b({key:index,attrs:{"align":"center"}},'el-table-column',column.elTableColumProps,false),[_vm._l((column.children),function(childColumn,childIndex){return [(childColumn.tableEdit !== false)?_c('el-table-column',_vm._b({key:childIndex,attrs:{"align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(_vm.disabledMap[column.prop] || _vm.disabledRowMap[column.prop + scope.row.id])?_c('span',{staticClass:"space-span"},[_vm._v(_vm._s(scope.row[childColumn.prop]))]):(childColumn.type !== 'trigger')?_c('sp-form-item',{attrs:{"component":childColumn.component,"prop":'list.' + scope.$index + '.' + childColumn.prop,"row-index":scope.$index,"el-form-item":childColumn.elFormItemProps,"el-props":childColumn.elProps,"options":_vm.formItemOptions[childColumn.prop],"loading":_vm.remoteLoadingMap[childColumn.prop],"remote-method":_vm.packRemoteMethod(childColumn.elProps.remoteMethod, childColumn.prop, scope.$index)},on:{"change":function($event){return _vm.onChange($event, childColumn.component, childColumn.prop, scope.$index)}},model:{value:(scope.row[childColumn.prop]),callback:function ($$v) {_vm.$set(scope.row, childColumn.prop, $$v)},expression:"scope.row[childColumn.prop]"}}):_c('div',{staticClass:"sp-copy-el-input el-input--mini",on:{"click":function($event){return _vm.onTrigger(childColumn, scope.$index)}}},[(scope.row[childColumn.prop])?_c('p',{staticClass:"el-input__inner"},[_vm._v(_vm._s(scope.row[childColumn.prop]))]):_c('p',{staticClass:"el-input__inner placeholder"},[_vm._v(_vm._s(childColumn.elProps.placeholder))])])]}}],null,true)},'el-table-column',childColumn.elTableColumProps,false)):_c('el-table-column',_vm._b({key:childIndex,attrs:{"align":"center"}},'el-table-column',childColumn.elTableColumProps,false))]})],2):(column.tableEdit !== false)?_c('el-table-column',_vm._b({key:index,attrs:{"align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(_vm.disabledMap[column.prop] || _vm.disabledRowMap[column.prop + scope.row.id])?_c('span',{staticClass:"space-span"},[_vm._v(_vm._s(scope.row[column.prop]))]):(column.type !== 'trigger')?_c('sp-form-item',{attrs:{"component":column.component,"prop":'list.' + scope.$index + '.' + column.prop,"row-index":scope.$index,"el-form-item":column.elFormItemProps,"el-props":column.elProps,"options":_vm.formItemOptions[column.prop],"loading":_vm.remoteLoadingMap[column.prop],"remote-method":_vm.packRemoteMethod(column.elProps.remoteMethod, column.prop, scope.$index)},on:{"change":function($event){return _vm.onChange($event, column.component, column.prop, scope.$index)}},model:{value:(scope.row[column.prop]),callback:function ($$v) {_vm.$set(scope.row, column.prop, $$v)},expression:"scope.row[column.prop]"}}):_c('div',{staticClass:"sp-copy-el-input el-input--mini",on:{"click":function($event){return _vm.onTrigger(column, scope.$index)}}},[(scope.row[column.prop])?_c('p',{staticClass:"el-input__inner"},[_vm._v(_vm._s(scope.row[column.prop]))]):_c('p',{staticClass:"el-input__inner placeholder"},[_vm._v(_vm._s(column.elProps.placeholder))])])]}}],null,true)},'el-table-column',column.elTableColumProps,false)):(column.type !== 'slot')?_c('el-table-column',_vm._b({key:index,attrs:{"align":"center"}},'el-table-column',column.elTableColumProps,false)):_c('el-table-column',_vm._b({key:column.prop,scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._t(column.prop,null,null,{ row: _vm.sourceData[scope.$index], $index: scope.$index })]}}],null,true)},'el-table-column',column.elTableColumProps,false))]}),(_vm.showHandle)?_c('el-table-column',{attrs:{"label":"操作","fixed":"right","align":"center","width":"140"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(_vm.initOption.cloneBtn && _vm.tableData.length - 1 > scope.$index)?_c('el-button',{attrs:{"icon":"el-icon-copy-document","type":"text"},on:{"click":function($event){return _vm.onClone(scope.row, scope.$index)}}},[_vm._v("复制")]):_vm._e(),((_vm.initOption.removeBtn && _vm.tableData.length - 1 > scope.$index) || !_vm.initOption.addBtn)?_c('el-button',{attrs:{"icon":"el-icon-minus","type":"text"},on:{"click":function($event){return _vm.onRemove(scope.row, scope.$index)}}},[_vm._v("移除")]):_vm._e(),(_vm.initOption.addBtn && _vm.tableData.length - 1 === scope.$index)?_c('el-button',{attrs:{"icon":"el-icon-plus","type":"text"},on:{"click":_vm.onAdd}},[_vm._v("添加")]):_vm._e(),(_vm.saveMethod !== null)?_c('el-button',{attrs:{"icon":"el-icon-check","type":"text","disabled":!_vm.changeRow[scope.$index]},on:{"click":function($event){return _vm.onSave(scope.row, scope.$index)}}},[_vm._v("保存")]):_vm._e(),_vm._t("rowAction",null,null,Object.assign({}, scope, {tableData: _vm.tableData}))]}}],null,true)}):_vm._e(),_c('template',{slot:"append"},[(_vm.loading || _vm.selfLoading)?_c('div',{staticClass:"sp-load-wrap"},[_c('img',{staticClass:"circular",attrs:{"src":__webpack_require__("897e"),"alt":"加载中"}})]):_vm._e()]),_c('template',{slot:"empty"},[(!_vm.selfLoading)?_c('sp-empty',{staticStyle:{"height":"100%","min-height":"160px"},attrs:{"title":_vm.emptyTip}}):_c('div')],1)],2):_vm._e()],1)}
var srcvue_type_template_id_1fc45eac_staticRenderFns = []


// CONCATENATED MODULE: ./packages/table-form/src/index.vue?vue&type=template&id=1fc45eac&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/table-form/src/index.vue?vue&type=script&lang=js&
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






/* harmony default export */ var table_form_srcvue_type_script_lang_js_ = ({
  name: 'sp-table-form',
  components: {
    SpFormItem: form_item
  },
  mixins: [Mformdynamic],
  props: {
    dynamic: {
      type: Boolean,
      default: false
    },
    query: {
      type: Object,
      default: function() { return {} }
    },
    loading: {
      type: Boolean,
      default: false
    },
    indexMethod: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      sourceData: [],
      disabledRowMap: {},
      isRender: true,
      haveSetTbMaxHeight: false,
      maxHeight: 1000,
      selfLoading: true,
      emptyTip: '暂无数据'
    }
  },
  computed: {
    showHandle: function() {
      return this.initOption.cloneBtn || this.initOption.removeBtn || this.initOption.addBtn || this.saveMethod !== null
    },
    dataReady: function() {
      return !this.loading && !this.selfLoading
    }
  },
  mounted() {
    window.addEventListener('resize', this, false)
  },
  destroyed() {
    window.removeEventListener('resize', this, false)
  },
  activated() {
    this.setTableSize(true)
    window.addEventListener('resize', this)
  },
  deactivated() {
    window.removeEventListener('resize', this)
  },  
  methods: {
    handleEvent(event) {
      switch(event.type) {
        case 'resize':
          this.setTableSize(true)
          break
      }
    },     
    setData(data, option, loading = false) {
      this.isRender = true
      this.selfLoading = true
      this.tableData = []
      this.sourceData = data
      // 父级组件非加载中的状态
      if (!loading) {
        if (isNull(option)) {
          option = this.initOption
        }
        const spData = data.map((item, index) => {
          item.$idKey = index + this.indexMethod
          return item
        })
        enTableFormData(spData, option).then(params => {
          const { tableData, disabledMap, optionsMap } = params
          this.disabledRowMap = disabledMap
          this.sourceData = spData
          this.formItemOptions = { ...this.formItemOptions, ...optionsMap }
          if (option.addBtn) {
            this.defRowData = this.extDefRowData(option, data)
            tableData.push({ ...this.defRowData })
          }
          this.tableData = tableData 
          this.selfLoading = false
          this.$nextTick(() => {
            if (this.$refs.elform) {
              this.$refs.elform.clearValidate() 
            }
            this.setTableSize()
            if (this.$refs.elTable && (option.showSummary || option.summaryMethod)) {
              this.$refs.elTable.syncPostion()
              this.$refs.elTable.doLayout()
            }          
          })
        })
      }
    },
    getValitateData() {
      const list = []
      this.tableData.forEach(row => {
        if (this.valitateRowData(row)) {
          let data = row
          if (row.$idKey) {
            const sRow = this.sourceData.find(item => item.$idKey === row.$idKey) || {}
            const editData = this.getRowEditData(row)
            if (sRow) {
              data = deepClone(sRow)
              Object.assign(data, editData)
            }
          }
          list.push(data)
        }
      })
      return list
    }, 
    getRowEditData(rowData) {
      const rowEditData = {}
      for(const prop in this.editProps) {
        rowEditData[prop] = rowData[prop]
      }
      return rowEditData
    },      
    toggleEditColumn(columnProps, disabled) {
      const props = typeof columnProps === 'string' ? [columnProps] : Array.isArray(columnProps) ? columnProps : []
      if (props.length > 0) {
        const newDisabledMap = {}
        props.forEach(prop => {
          newDisabledMap[prop] = typeof disabled === 'boolean' ? disabled : !this.disabledMap[prop]
        })
        this.disabledMap = { ...this.disabledMap, ...newDisabledMap }
      }
    },
    resetTableColumn(column) {
      const option = {...this.initOption, column }
      this.isRender = false
      this.init(option, this.sourceData)
    },
    onSelectionChange(selection) {
      const srows = selection.map(row => {
        return this.sourceData.find(item => item.$idKey === row.$idKey)
      })
      this.$emit('selection-change', srows)
    },
    onCellClick(row, column) {
      const srow = this.sourceData.find(item => item.$idKey === row.$idKey)
      this.$emit('cell-click', srow, column)
    },
    validate(callback) {
      this.$refs.elform.validate(callback)
    },
    // 计算表格高度 isDoLayout为true,强制重新计算高度
    setTableSize(isDoLayout) {
      let maxHeight = this.initOption.maxHeight
      const targetDom = this.$el
      if (targetDom && !maxHeight && (isDoLayout || !this.haveSetTbMaxHeight)) {
        const minHeight = 300
        const { clientHeight } = getClientInfo()
        const { top } = targetDom.getBoundingClientRect()
        let bodyMaxHeight = clientHeight - top - 77 // 分页栏高度(52)
        bodyMaxHeight = bodyMaxHeight < minHeight ? minHeight : bodyMaxHeight
        if (this.maxHeight !== bodyMaxHeight) {
          this.maxHeight = bodyMaxHeight
          this.haveSetTbMaxHeight = true
          this.$refs.elTable.doLayout()       
        }
      } else if (maxHeight) {
        this.maxHeight = maxHeight
      }
    }    
  }
});

// CONCATENATED MODULE: ./packages/table-form/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_table_form_srcvue_type_script_lang_js_ = (table_form_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/table-form/src/index.vue





/* normalize component */

var table_form_src_component = normalizeComponent(
  packages_table_form_srcvue_type_script_lang_js_,
  srcvue_type_template_id_1fc45eac_render,
  srcvue_type_template_id_1fc45eac_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var table_form_src = (table_form_src_component.exports);
// CONCATENATED MODULE: ./packages/table-form/index.js
// import Table from './src/main'

table_form_src.install = function(Vue) {
  Vue.component(table_form_src.name, table_form_src)
}
/* harmony default export */ var table_form = (table_form_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7165182e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/crud-form/src/index.vue?vue&type=template&id=d22e3adc&
var srcvue_type_template_id_d22e3adc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sp-crud sp-crud-form"},[(_vm.spCrudOption.showSearchForm)?_c('el-collapse',{staticClass:"sp-el-collapse",attrs:{"value":"collapse-search"}},[_c('el-collapse-item',{ref:"collapseItem",staticClass:"sp-el-collapse-item",attrs:{"name":"collapse-search"}},[_c('sp-form',{ref:"spSearchForm",attrs:{"type":"search","enter-submit":"","option":_vm.searchFormOption},on:{"init-data":_vm.onSearchInitSubmit,"submit":_vm.onSearchSubmit},scopedSlots:_vm._u([_vm._l((_vm.searchSlotList),function(slotItem){return {key:slotItem.prop,fn:function(scope){return [_c('div',{key:slotItem.prop},[_vm._t(slotItem.prop,null,null,scope)],2)]}}})],null,true)})],1)],1):_vm._e(),_c('div',{staticClass:"sp-crud-handle"},[_c('div',{staticClass:"sp-crud-handle-left"},[(_vm.spCrudOption.addBtn)?_c('el-button',{attrs:{"type":"primary","icon":"el-icon-plus"},on:{"click":_vm.onAddRow}},[_vm._v("新增")]):_vm._e(),_vm._t("menuLeft")],2),_c('div',{staticClass:"sp-crud-handle-right"},[(_vm.spCrudOption.columnBtn)?_c('el-button',{attrs:{"icon":"el-icon-menu","circle":""},on:{"click":function($event){_vm.columnDialogVisible = true}}}):_vm._e(),(_vm.spCrudOption.refreshBtn)?_c('el-button',{attrs:{"icon":"el-icon-refresh","circle":""},on:{"click":_vm.refreshTableData}}):_vm._e(),(_vm.spCrudOption.searchBtn && _vm.spCrudOption.showSearchForm)?_c('el-button',{attrs:{"icon":"el-icon-search","circle":""},on:{"click":function($event){return _vm.onTaggleSearchForm()}}}):_vm._e(),_vm._t("menuRight")],2)]),((_vm.dynamic && _vm.tableFormInit) || !_vm.dynamic)?_c('sp-table-form',{ref:"spTableForm",attrs:{"option":_vm.spTbformOption,"data":_vm.sourceData,"loading":_vm.loading},on:{"selection-change":_vm.onSelectionChange,"cell-click":_vm.onCellClick},scopedSlots:_vm._u([_vm._l((_vm.tableSlotList),function(slotItem){return {key:slotItem.prop,fn:function(scope){return [_c('div',{key:slotItem.prop},[_vm._t(slotItem.prop,null,null,scope)],2)]}}})],null,true)}):_vm._e(),(_vm.dynamic && !_vm.tableFormInit)?_c('div',{staticClass:"sp-load-wrap"},[_c('img',{staticClass:"circular",attrs:{"src":__webpack_require__("897e"),"alt":"加载中"}})]):_vm._e(),(_vm.page.total > 0)?_c('div',{staticClass:"sp-pagination-wrap"},[_c('el-pagination',{attrs:{"background":"","layout":"total, sizes, prev, pager, next, jumper","current-page":_vm.page.current,"page-sizes":_vm.pageSizes,"page-size":_vm.page.size,"total":_vm.page.total},on:{"update:currentPage":function($event){return _vm.$set(_vm.page, "current", $event)},"update:current-page":function($event){return _vm.$set(_vm.page, "current", $event)},"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange},nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.stopPropagation();}}})],1):_vm._e(),(_vm.spCrudOption.addBtn)?_c('el-dialog',{attrs:{"title":"新增","visible":_vm.addDialogVisible,"width":"80%","append-to-body":""},on:{"update:visible":function($event){_vm.addDialogVisible=$event}}},[_c('sp-form',{ref:"addForm",attrs:{"visible":_vm.addDialogVisible,"option":_vm.addFormOption},on:{"cancel":function($event){return _vm.onFormCancel('addForm')},"submit":_vm.onAddSubmit}})],1):_vm._e(),(_vm.spCrudOption.editBtn)?_c('el-dialog',{attrs:{"title":"编辑","width":"80%","visible":_vm.editDialogVisible,"append-to-body":""},on:{"update:visible":function($event){_vm.editDialogVisible=$event}}},[_c('sp-form',{ref:"editForm",attrs:{"option":_vm.editFormOption,"data":_vm.selectedRowData},on:{"cancel":function($event){return _vm.onFormCancel('editForm')},"submit":_vm.onEditSubmit}})],1):_vm._e(),(_vm.spCrudOption.viewBtn)?_c('el-dialog',{attrs:{"title":"查看","width":"80%","visible":_vm.viewDialogVisible,"append-to-body":""},on:{"update:visible":function($event){_vm.viewDialogVisible=$event}}},[_c('sp-form',{ref:"viewForm",attrs:{"type":"view","option":_vm.viewFormOption,"data":_vm.selectedRowData}})],1):_vm._e(),(_vm.spCrudOption.columnBtn)?_c('el-dialog',{attrs:{"title":"自定义表格列","visible":_vm.columnDialogVisible,"append-to-body":""},on:{"update:visible":function($event){_vm.columnDialogVisible=$event}}},[_c('sp-column-board',{attrs:{"visible":_vm.columnDialogVisible,"column-data":_vm.columnBoardData},on:{"update:visible":function($event){_vm.columnDialogVisible=$event},"submit":_vm.onColumnBoardSubmit}})],1):_vm._e()],1)}
var srcvue_type_template_id_d22e3adc_staticRenderFns = []


// CONCATENATED MODULE: ./packages/crud-form/src/index.vue?vue&type=template&id=d22e3adc&

// CONCATENATED MODULE: ./packages/mixins/Mcrud.js


/* harmony default export */ var Mcrud = ({
  props: {
    permission: {
      type: Object,
      default: function () { return {} }
    },
    option: {
      type: Object,
      default: function () { return {} }
    },
    data: {
      type: [Array, Function],
      default: function() { return [] }
    },
    autoLoad: {
      type: Boolean,
      default: true
    },
    lazyLoad: {
      type: Boolean,
      default: false
    },
    // 动态配置表头
    dynamic: {
      type: Boolean,
      default: false
    },
    query: {
      type: Object,
      default: function() { return {} }
    }
  },  
  data() {
    const pageSizes = [10, 20, 50, 100, 500]
    return {
      initOption: {},
      spCrudOption: {},
      // 分页
      pageSizes,
      page: {
        current: 1,
        size: pageSizes[0],
        total: 0
      },
      indexMethod: 1,
      // 各类弹窗显隐
      addDialogVisible: false,
      editDialogVisible: false,
      viewDialogVisible: false,
      columnDialogVisible: false,
      // 各类表单配置项
      addFormOption: {},
      editFormOption: {},
      viewFormOption: {},
      searchFormOption: {},
      searchPropsInMore: [],
      searchSpread: false,
      columnBoardData: [], // 更改之前的
      boardColumData: null, // 更改之后的
      searchSlotList: [],
      tableSlotList: []
    }
  },
  methods: {
    initCrudOptions(spCrudOption) {
      if (spCrudOption.addBtn) {
        this.addFormOption = this.getAddFormOption(spCrudOption)
      }
      if (spCrudOption.editBtn) {
        this.editFormOption = this.getEditFormOption(spCrudOption)
      }
      if (spCrudOption.viewBtn) {
        this.viewFormOption = this.getViewFormOption(spCrudOption)
      }
      if (spCrudOption.showSearchForm) {
        this.searchFormOption = this.getSearchFormOption(spCrudOption)
        this.searchPropsInMore = this.searchFormOption.column.filter(item => item.search === 'more').map(item => item.prop)
      }
      this.spCrudOption = spCrudOption
      this.columnBoardData = spCrudOption.column.filter(item => item.custAble === true || item.hide !== true)
      this.searchSlotList = spCrudOption.column.filter(item => item.search && item.type === 'slot')
      this.tableSlotList = spCrudOption.column.filter(item => item.slot === true || item.type === 'slot')      
    },
    getSpCrudOption(option, permission = {}) {
      let showSearchForm = false
      if (option && Array.isArray(option.column)) {
        showSearchForm = option.column.some(item => item.search === true)
      }
      return { ...defSpCrudOption, ...option, showSearchForm, ...permission }
    },
    getSearchFormOption(option){
      let column = []
      if (Array.isArray(option.column)) {
        column = option.column.filter(item => item.search).map(item => {
          let labelWidth = item.searchLabelWidth || item.labelWidth || option.searchLabelWidth || option.labelWidth
          labelWidth = typeof labelWidth === 'number' ? labelWidth + 'px' : labelWidth
          const formItem = {
            type: item.searchType || item.type,
            labelWidth,
            span: item.searchSpan || 24,
            index: item.index || 999,
            rules: null,
            slot: null,
            display: item.search === true,
            disabled: false,
            editAble: null,
            addAble: null,
            canClear: item.canClear === false ? false : isNull(item.defaultValue),
            tip: null
          }
          if (formItem.type === 'select' && item.multiple) {
            formItem.collapseTags = true
          }
          return { ...item, ...formItem }
        }).sort((a, b) => {
          const aIndex = a.searchIndex || 999
          const bIndex = b.searchIndex || 999
          return aIndex - bIndex
        })
      }
      const formOption = filterFormOptionFormCrud(option)
      return {
        ...formOption,
        labelPosition: 'right',
        column
      }
    },
    getAddFormOption(option){
      let column = []
      if (Array.isArray(option.column)) {
        column = option.column.filter(item => item.addAble !== false).map(item => {
          const formItem = {
            span: item.addSpan || item.span || 24,
            display: !isNull(item.addDisplay) ? item.addDisplay : item.display,
            disabled: !isNull(item.addDisabled) ? item.addDisabled : item.disabled,
            type: item.addType || item.type,
            index: item.index || 999,
            editAble: null,
            slot: null
          }
          return { ...item, ...formItem }
        })
      }
      const formOption = filterFormOptionFormCrud(option)
      return {
        ...formOption,
        column
      }
    },
    getEditFormOption(option){
      let column = []
      if (Array.isArray(option.column)) {
        column = option.column.filter(item => item.editAble !== false).map(item => {
          const formItem = {
            span: item.editSpan || item.span || 24,
            display: !isNull(item.editDisplay) ? item.editDisplay : item.display,
            disabled: !isNull(item.editDisabled) ? item.editDisabled : item.disabled,            
            type: item.editType || item.type,
            index: item.index || 999,
            addAble: null,
            slot: null,
            rules: item.editRules ===  false ? null : item.rules
          }
          return { ...item, ...formItem }
        })
      }
      const formOption = filterFormOptionFormCrud(option)
      return {
        ...formOption,
        column
      }
    },
    getViewFormOption(option){
      let column = []
      if (Array.isArray(option.column)) {
        column = option.column.filter(item => item.editAble !== false).map(item => {
          const formItem = {
            span: item.span || 24,
            display: item.viewDisplay === false ? false : true,
            disabled: true,
            type: item.type,
            index: item.index || 999,
            slot: null,
            rules: null
          }
          return { ...item, ...formItem }
        })
      }
      const formOption = filterFormOptionFormCrud(option)
      return {
        ...formOption,
        column
      }
    },
    onShowMoreSearch() {
      if (this.$refs.spSearchForm) {
        this.$refs.spSearchForm.toggleDisplay(!this.searchSpread, this.searchPropsInMore, this.searchSpread)
        this.searchSpread = !this.searchSpread
        setTimeout(() => {
          this.setTableSize(true)
        }, 500)        
      }
    },
    setPage(data) {
      if (data.total !== this.page.total || data.current !== this.page.current) {
        this.page = { ...this.page, total: data.total, current: data.current }
      }
    },    
    handleSizeChange(size) {
      this.page = { ...this.page, size, current: 1 }
      this.indexMethod = (this.page.current - 1) * this.page.size + 1
      this.loadTableData(this.params)
    },
    handleCurrentChange(page) {
      this.page.current = page
      this.indexMethod = (this.page.current - 1) * this.page.size + 1
      this.loadTableData(this.params)
    },
    onSearchSubmit(data = {}) {
      this.resetTableData({ ...this.params, ...data }, false, true)
    },
    onSearchInitSubmit(data = {}) {
      if (this.autoLoad) {
        this.resetTableData({ ...this.params, ...data }, false, true)
      }
    },
    onAddSubmit(data) {
      const that = this
      this.$emit('add-submit', data, function(isClose) {
        if (isClose) {
          that.addDialogVisible = false
          that.refreshTableData()
        }
      })
    },
    onEditSubmit(data) {
      const that = this
      this.$emit('edit-submit', data, function(isClose) {
        if (isClose) {
          that.editDialogVisible = false
          that.refreshTableData()
        }
      })
    },
    onFormCancel(name) {
      if (name === 'addForm') {
        this.addDialogVisible = false
      } else {
        this.editDialogVisible = false
      }
    },    
    onTaggleSearchForm() {
      this.$refs.collapseItem.handleHeaderClick()
      setTimeout(() => {
        this.setTableSize(true)
      }, 500)
    },
    resetColumnWithBoard(option, columnData) {
      const columnDict = {}
      columnData.forEach(col => {
        columnDict[col.prop] = col
      })
      let optionColumn = []
      if (Array.isArray(option.column) && option.column.length > 0) {
        optionColumn = option.column
      }
      const spColumn = optionColumn.filter(item => item.custAble || item.hide !== true).map(col => {
        const custColumn = columnDict[col.prop]
        if (custColumn) {
          if (Array.isArray(col.children) && col.children.length > 0) {
            let childrenWidth = null
            if (!isNull(custColumn.width) && !isNaN(custColumn.width)) {
              childrenWidth = Number(custColumn.width) / col.children.length
            }
            col.children = col.children.map(child => {
              const width = childrenWidth === 0 ? child.width : childrenWidth
              return { ...child, width }
            })
          }
          return { ...col, ...custColumn }
        } else {
          return col
        }
      }).sort((a, b) => {
        const aIdx = isNaN(a.sort) ? 99 : a.sort
        const bIdx = isNaN(b.sort) ? 99 : b.sort
        return aIdx - bIdx
      })
      return spColumn
    },
    onColumnBoardSubmit(columnData) {
      this.boardColumData = columnData
      const spColumn = this.resetColumnWithBoard(this.initOption, columnData)
      // this.$refs.elTable.resetSpColumn(spColumn)
      this.resetTableColumn(spColumn)
      this.columnDialogVisible = false

      if (this.useOptions && typeof this.useOptions.saveColumn === 'function') {
        let menuId = this.$route.meta.menuId
        if (this.option.custOptionId) {
          menuId = menuId.toString() + this.option.custOptionId
        }
        const column = columnData.map((item, index) => {
          return {
            menuId,
            prop: item.prop,
            show: item.hide ? '0' : '1',
            fixed: !item.fixed ? '0' : item.fixed,
            width: item.width,
            sort: index
          }
        })        
        this.useOptions.saveColumn(column)
      }
    }   
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/crud-form/src/index.vue?vue&type=script&lang=js&
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
//
//
//
//
//




/* harmony default export */ var crud_form_srcvue_type_script_lang_js_ = ({
  name: 'sp-crud-form',
  mixins: [Mcrud],
  props: {
    removeMethod: Function,
    saveMethod: Function,
    // 每条数据的唯一标示字段，通常用来判断数据的修改是新增还是更新，新增的数据该字段为空
    rowKey: {
      type: String,
      default: 'id'
    }
  },
  data() {
    return {
      sourceData: [],
      tableFormInit: false,
      spTbformOption: {},
      loading: true,
      boardColumn: null, // 自定义更改之后重组的表格列
      params: {}
    }
  },
  created() {
    this.params = this.query
    this.init(this.option)
  },  
  methods: {
    init(option) {
      this.initOption = option
      const spCrudOption = this.getSpCrudOption(option, this.permission)
      this.initCrudOptions(spCrudOption)
      if (!this.dynamic) {
        this.initTableForm(spCrudOption, [])
      }
      // 如果没有搜索，则初始化之后加载数据
      if (!spCrudOption.showSearchForm) {
        this.loadTableData(this.params, true)
      }
    },
    initTableForm(spCrudOption, data) {
      if (this.boardColumData) {
        const spColumn = this.resetColumnWithBoard(spCrudOption, this.boardColumData)
        spCrudOption.column = spColumn
      }
      this.spTbformOption = this.getTableFormOption(spCrudOption)
      this.sourceData = data
      this.tableFormInit = true
    },
    getTableFormOption(option) {
      const tableOption = filterTableFormOptionFormCrud(option)
      let column = Array.isArray(option.column) ? option.column : []
      column = column.filter(item => item.hide !== true)
      return {
        ...tableOption,
        column
      }      
    },
    /**
     * @param {Object} params 来自搜索或传入的固定参数 
     * @param {Boolean} isInit 是否初始化表格组件之后的第一次请求
     */
    loadTableData(params = {}, isInit) {
      // 保存参数，用于刷新、翻页等
      this.tableFormInit = this.dynamic && isInit ? false : true
      if (this.loading && this.tableFormInit) { return }
      if (typeof this.data === 'function') {
        this.loading = true
        const reqParams = { ...this.page, ...params, total: null }
        // 这里不直接设置sourceData, 是因为要让子组件table-form有个加载中的过渡状态
        if (this.tableFormInit && this.$refs.spTableForm) {
          this.$refs.spTableForm.setData([], null, true)
        }
        this.data(reqParams, (config) => {
          this.loading = false
          let { option, data, total } = config || {}
          data = Array.isArray(data) ? data : []
          total = total || data.length || 0
          if (!this.tableFormInit) {
            if (isNull(option)) {
              option = this.spCrudOption
            } else {
              this.initOption = option
              option = this.getSpCrudOption(option, this.permission)            
            }            
            this.initTableForm(option, data)
          } else {
            this.setTableFormData(data)
          }
          this.setPage({
            total,
            current: reqParams.current
          })
        })
      }
    },
    resetTableData(params = {}, isAssign, isFormSearch) {
      this.setPage({
        current: 1
      })
      this.indexMethod = 1
      if (this.$refs.spSearchForm && !isFormSearch) {
        this.$refs.spSearchForm.setFormData(params, false)
      }
      this.params = params
      this.loadTableData(this.params, true)
    },
    refreshTableData(isDelRow) {
      if (isDelRow && this.page.current > 1) {
        const total = this.page.total - 1
        const maxCurrent = Math.ceil(total / this.page.size)
        if (maxCurrent < this.page.current) {
          this.setPage({
            current: maxCurrent
          })
        }
      }
      this.loadTableData(this.params)
    },       
    toggleEditColumn(columnProps, disabled) {
      this.$refs.spTableForm.toggleEditColumn(columnProps, disabled)
    },
    resetTableColumn(column) {
      if (this.$refs.spTableForm) {
        this.$refs.spTableForm.resetTableColumn(column)
      }
    },
    setTableFormData(data, option) {
      if (isNull(option)) {
        option = this.spTbformOption
      }
      if (this.$refs.spTableForm) {
        this.$refs.spTableForm.setData(data, option)
      }
    },
    getData(isValidate) {
      return this.$refs.spTableForm.getData(isValidate)
    },
    resetRowData(data, index) {
      this.$refs.spTableForm.resetRowData(data, index)
    },
    setTableSize(isDoLayout) {
      this.$refs.spTableForm.setTableSize(isDoLayout)
    },
    handleSizeChange(size) {
      this.page = { ...this.page, size, current: 1 }
      this.indexMethod = (this.page.current - 1) * this.page.size + 1
      this.loadTableData(this.params)
    },
    onSelectionChange(selection) {
      this.$emit('selection-change', selection)
    },
    onCellClick(row, column) {
      this.$emit('cell-click', row, column)
    }
  }
});

// CONCATENATED MODULE: ./packages/crud-form/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_crud_form_srcvue_type_script_lang_js_ = (crud_form_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/crud-form/src/index.vue





/* normalize component */

var crud_form_src_component = normalizeComponent(
  packages_crud_form_srcvue_type_script_lang_js_,
  srcvue_type_template_id_d22e3adc_render,
  srcvue_type_template_id_d22e3adc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var crud_form_src = (crud_form_src_component.exports);
// CONCATENATED MODULE: ./packages/crud-form/index.js
// import Table from './src/main'

crud_form_src.install = function(Vue) {
  Vue.component(crud_form_src.name, crud_form_src)
}
/* harmony default export */ var crud_form = (crud_form_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7165182e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/crud/src/index.vue?vue&type=template&id=6fe68dc2&
var srcvue_type_template_id_6fe68dc2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sp-crud"},[(_vm.spCrudOption.showSearchForm)?_c('el-collapse',{staticClass:"sp-el-collapse",attrs:{"value":"collapse-search"}},[_c('el-collapse-item',{ref:"collapseItem",staticClass:"sp-el-collapse-item",attrs:{"name":"collapse-search"}},[_c('sp-form',{ref:"spSearchForm",attrs:{"type":"search","enter-submit":"","option":_vm.searchFormOption},on:{"init-data":_vm.onSearchInitSubmit,"submit":_vm.onSearchSubmit},scopedSlots:_vm._u([_vm._l((_vm.searchSlotList),function(slotItem){return {key:slotItem.prop,fn:function(scope){return [_c('div',{key:slotItem.prop},[_vm._t(slotItem.prop,null,null,scope)],2)]}}})],null,true)}),(_vm.searchPropsInMore.length > 0)?_c('div',{staticClass:"search-more"},[(_vm.searchSpread)?_c('el-button',{attrs:{"type":"text","icon":"el-icon-s-unfold"},on:{"click":_vm.onShowMoreSearch}},[_vm._v("收起更多搜索")]):_c('el-button',{attrs:{"type":"text","icon":"el-icon-s-fold"},on:{"click":_vm.onShowMoreSearch}},[_vm._v("展开更多搜索")])],1):_vm._e()],1)],1):_vm._e(),_c('div',{staticClass:"sp-crud-handle"},[_c('div',{staticClass:"sp-crud-handle-left"},[(_vm.spCrudOption.addBtn)?_c('el-button',{attrs:{"type":"primary","icon":"el-icon-plus"},on:{"click":_vm.onAddRow}},[_vm._v("新增")]):_vm._e(),_vm._t("menuLeft")],2),_c('div',{staticClass:"sp-crud-handle-right"},[(_vm.spCrudOption.columnBtn)?_c('el-button',{attrs:{"icon":"el-icon-menu","circle":""},on:{"click":function($event){_vm.columnDialogVisible = true}}}):_vm._e(),(_vm.spCrudOption.refreshBtn)?_c('el-button',{attrs:{"icon":"el-icon-refresh","circle":""},on:{"click":_vm.refreshTableData}}):_vm._e(),(_vm.spCrudOption.searchBtn && _vm.spCrudOption.showSearchForm)?_c('el-button',{attrs:{"icon":"el-icon-search","circle":""},on:{"click":function($event){return _vm.onTaggleSearchForm()}}}):_vm._e(),_vm._t("menuRight")],2)]),(_vm.spTableOption.column && _vm.spTableOption.column.length > 0)?_c('sp-table',{ref:"elTable",staticClass:"sp-crud-table",attrs:{"dynamic":_vm.dynamic,"option":_vm.spTableOption,"data":_vm.data,"auto-load":_vm.autoLoad && !_vm.spCrudOption.showSearchForm,"lazy-load":_vm.autoLoad && _vm.spCrudOption.showSearchForm},on:{"row-del":_vm.onRowDel,"row-edit":_vm.onRowEdit,"row-view":_vm.onRowView,"selection-change":_vm.onSelectionChange,"row-click":_vm.onRowClick,"row-dblclick":_vm.onRowDblclick},scopedSlots:_vm._u([{key:"expand",fn:function(scope){return [_vm._t("expand",null,null,scope)]}},{key:"rowAction",fn:function(scope){return [_vm._t("rowAction",null,null,scope)]}},_vm._l((_vm.tableSlotList),function(slotItem){return {key:slotItem.prop,fn:function(scope){return [_c('div',{key:slotItem.prop},[_vm._t(slotItem.prop,null,null,scope)],2)]}}})],null,true)}):_vm._e(),(_vm.spCrudOption.addBtn)?_c('el-dialog',{attrs:{"title":"新增","visible":_vm.addDialogVisible,"width":"80%","append-to-body":""},on:{"update:visible":function($event){_vm.addDialogVisible=$event}}},[_c('sp-form',{ref:"addForm",attrs:{"visible":_vm.addDialogVisible,"option":_vm.addFormOption,"data":_vm.addFormData},on:{"cancel":function($event){return _vm.onFormCancel('addForm')},"submit":_vm.onAddSubmit}})],1):_vm._e(),(_vm.spCrudOption.editBtn)?_c('el-dialog',{attrs:{"title":"编辑","width":"80%","visible":_vm.editDialogVisible,"append-to-body":""},on:{"update:visible":function($event){_vm.editDialogVisible=$event}}},[_c('sp-form',{ref:"editForm",attrs:{"option":_vm.editFormOption,"data":_vm.editFormData},on:{"cancel":function($event){return _vm.onFormCancel('editForm')},"submit":_vm.onEditSubmit}})],1):_vm._e(),(_vm.spCrudOption.viewBtn)?_c('el-dialog',{attrs:{"title":"查看","width":"80%","visible":_vm.viewDialogVisible,"append-to-body":""},on:{"update:visible":function($event){_vm.viewDialogVisible=$event}}},[_c('sp-form',{ref:"viewForm",attrs:{"type":"view","option":_vm.viewFormOption,"data":_vm.selectedRowData}})],1):_vm._e(),(_vm.spCrudOption.columnBtn)?_c('el-dialog',{attrs:{"title":"自定义表格列","visible":_vm.columnDialogVisible,"append-to-body":""},on:{"update:visible":function($event){_vm.columnDialogVisible=$event}}},[_c('sp-column-board',{attrs:{"visible":_vm.columnDialogVisible,"column-data":_vm.columnBoardData},on:{"update:visible":function($event){_vm.columnDialogVisible=$event},"submit":_vm.onColumnBoardSubmit}})],1):_vm._e()],1)}
var srcvue_type_template_id_6fe68dc2_staticRenderFns = []


// CONCATENATED MODULE: ./packages/crud/src/index.vue?vue&type=template&id=6fe68dc2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/crud/src/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var crud_srcvue_type_script_lang_js_ = ({
  name: 'sp-crud',
  mixins: [Mcrud],
  data() {
    return {
      // spCrudOption: {},
      spTableOption: {},
      defSearchParams: {}, // 搜索表单值
      selectedRowData: {}, // 选择表格中的行
      addFormData: {},
      editFormData: {}
    }
  },  
  mounted() {
    this.init(this.option)
  },
  methods: {
    init(option = {}) {
      // const showSearchForm = option.column.some(item => item.search)
      this.initOption = option
      const spCrudOption = this.getSpCrudOption(option)
      this.initCrudOptions(spCrudOption)
      this.spTableOption = this.getTableOption(spCrudOption)
    },
    getSpCrudOption(option) {
      let showSearchForm = false
      if (option && Array.isArray(option.column)) {
        showSearchForm = option.column.some(item => item.search === true)
      }
      return { ...defSpCrudOption, ...option, showSearchForm, ...this.permission }
    },
    getTableOption(option) {
      const tableOption = filterTableOptionFormCrud(option)
      return {
        ...tableOption,
        column: option.column
      }      
    },
    // onkeyUpEvent() {
    //   if (this.$refs.spSearchForm) {
    //     this.$refs.spSearchForm.onSubmit()
    //   }
    // },
    setTableSize(isDoLayout) {
      this.$refs.elTable.setTableSize(isDoLayout)
    },
    loadTableData(params) {
      this.$refs.elTable.loadTableData(params)
    },
    // isAssign 合并原来的值还是没传入的字段置为空，默认是合并
    resetTableData(params = {}, isAssign = false, isFromSearch) {
      if (this.$refs.spSearchForm && !isFromSearch) {
        this.$refs.spSearchForm.setFormData(params, isAssign)
        if (isAssign) {
          params = this.$refs.spSearchForm.getFormData(true)
        }
      }
      this.$refs.elTable.resetTableData(params)
    },
    
    refreshTableData(isDelRow) {
      this.$refs.elTable.refreshTableData(isDelRow)
    },
    onAddRow() {
      this.addFormData = {}
      this.addDialogVisible = true
    },    
    onRowView(row) {
      this.selectedRowData = row
      this.viewDialogVisible = true
    },    
    onRowEdit(row) {
      this.editFormData = row
      this.editDialogVisible = true
    },
    onRowDel(row) {
      const that = this
      this.$emit('row-del', row, (success) => {
        if(success) {
          that.$refs.elTable.refreshTableData(true)
        }
      })
    },
    resetTableColumn(column) {
      if (this.$refs.elTable) {
        this.$refs.elTable.resetSpColumn(column)
      }
    },
    getTableData(source) {
      return this.$refs.elTable.getTableData(source)
    },
    onSelectionChange(selection) {
      this.$emit('selection-change', selection)
    },
    onRowClick(row, index) {
      this.$emit('row-click', row, index)
    },
    onRowDblclick(row, index) {
      this.$emit('row-dblclick', row, index)
    },
    toggleRowSelection(row) {
      this.$refs.elTable.toggleRowSelection(row)
    },
    clearSelection() {
      this.$refs.elTable.clearSelection()
    }    
  }
});

// CONCATENATED MODULE: ./packages/crud/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_crud_srcvue_type_script_lang_js_ = (crud_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/crud/src/index.vue





/* normalize component */

var crud_src_component = normalizeComponent(
  packages_crud_srcvue_type_script_lang_js_,
  srcvue_type_template_id_6fe68dc2_render,
  srcvue_type_template_id_6fe68dc2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var crud_src = (crud_src_component.exports);
// CONCATENATED MODULE: ./packages/crud/index.js
// import Table from './src/main'

crud_src.install = function(Vue) {
  Vue.component(crud_src.name, crud_src)
}
/* harmony default export */ var crud = (crud_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7165182e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tree/src/index.vue?vue&type=template&id=296869ca&scoped=true&
var srcvue_type_template_id_296869ca_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sp-tree"},[_c('el-input',{ref:"elInput",staticClass:"sp-filter-bar",attrs:{"placeholder":"输入关键字进行过滤"},model:{value:(_vm.filterText),callback:function ($$v) {_vm.filterText=$$v},expression:"filterText"}}),_c('div',{ref:"treeDrown",staticClass:"sp-tree-content"},[_c('el-tree',{ref:"elTree",attrs:{"data":_vm.data,"load":_vm.load,"lazy":_vm.lazy,"props":_vm.props,"node-key":_vm.nodeKey,"default-expand-all":_vm.defaultExpandAll,"expand-on-click-node":_vm.expandOnClickNode,"default-expanded-keys":_vm.defaultExpandedKeys,"filter-node-method":_vm.filterNode,"current-node-key":_vm.currentNodeKey,"highlight-current":""},on:{"node-click":_vm.onNodeClick},scopedSlots:_vm._u([(_vm.slotAble)?{key:"default",fn:function(scope){return [_vm._t("default",null,null,scope)]}}:null],null,true)})],1)],1)}
var srcvue_type_template_id_296869ca_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/tree/src/index.vue?vue&type=template&id=296869ca&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tree/src/index.vue?vue&type=script&lang=js&
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
//

/* harmony default export */ var tree_srcvue_type_script_lang_js_ = ({
  name: 'sp-tree',
  props: {
    data: {
      type: Array,
      default: function(){ return [] }
    },
    placeholder: {
      type: String,
      default: '输入关键字进行过滤'
    },
    props: {
      type: Object,
      default: function() { return {} }
    },
    load: {
      type: Function,
      default: null
    },
    lazy: {
      type: Boolean,
      default: false
    },
    // 是否可以自定义项
    slotAble: {
      type: Boolean,
      default: false
    },
    defaultExpandAll: {
      type: Boolean,
      default: true
    },
    expandOnClickNode: {
      type: Boolean,
      default: true
    },
    defaultExpandedKeys: {
      type: Array,
      default: function() { return [-1] }
    },
    currentNodeKey: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      filterText: '',
    }
  },
  computed: {
    nodeKey: function() {
      return this.props.value || 'value'
    }
  },
  watch: {
    filterText(val) {
      this.$refs.elTree.filter(val)
    }
  },
  created() {
    // this.setData(this.options, this.value)
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      let labelAlias = 'label'
      if (this.props && this.props.label) {
        labelAlias = this.props.label
      }
      return data[labelAlias].indexOf(value) !== -1;
    },
    onNodeClick(data, node, el) {
      this.$emit('node-click', data, node, el)
    },
    updateKeyChildren(nodeCode, children) {
      this.$refs.elTree.updateKeyChildren(nodeCode, children)
    }
  }
});

// CONCATENATED MODULE: ./packages/tree/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_tree_srcvue_type_script_lang_js_ = (tree_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/tree/src/index.vue?vue&type=style&index=0&id=296869ca&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_296869ca_lang_scss_scoped_true_ = __webpack_require__("0f5d");

// CONCATENATED MODULE: ./packages/tree/src/index.vue






/* normalize component */

var tree_src_component = normalizeComponent(
  packages_tree_srcvue_type_script_lang_js_,
  srcvue_type_template_id_296869ca_scoped_true_render,
  srcvue_type_template_id_296869ca_scoped_true_staticRenderFns,
  false,
  null,
  "296869ca",
  null
  
)

/* harmony default export */ var tree_src = (tree_src_component.exports);
// CONCATENATED MODULE: ./packages/tree/index.js

tree_src.install = function(Vue) {
  Vue.component(tree_src.name, tree_src)
}
/* harmony default export */ var tree = (tree_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7165182e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/column-board/src/main.vue?vue&type=template&id=0e13f56e&scoped=true&
var mainvue_type_template_id_0e13f56e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-container',{staticStyle:{"border":"1px solid #ccc","padding":"5px"}},[(_vm.showTable)?_c('el-table',{ref:"eltable",staticStyle:{"width":"100%"},attrs:{"data":_vm.defColumnData,"max-height":_vm.maxHeight,"border":""}},[_c('el-table-column',{attrs:{"align":"center","prop":"sort","width":"76","label":"排序"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('div',{staticClass:"el-input el-input--mini"},[_c('input',{staticClass:"el-input__inner",attrs:{"placeholder":"输入正整数"},domProps:{"value":scope.$index + 1},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.onSortBlur($event, scope.$index)},"blur":function($event){return _vm.onSortBlur($event, scope.$index)}}})])]}}],null,false,4154201786)}),_c('el-table-column',{attrs:{"prop":"label","align":"center","label":"字段名称"}}),_c('el-table-column',{attrs:{"prop":"showAble","align":"center","width":"80","label":"是否显示"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-switch',{model:{value:(_vm.defColumnData[scope.$index].showAble),callback:function ($$v) {_vm.$set(_vm.defColumnData[scope.$index], "showAble", $$v)},expression:"defColumnData[scope.$index].showAble"}})]}}],null,false,898495923)}),_c('el-table-column',{attrs:{"prop":"width","align":"center","label":"列宽"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-input',{attrs:{"placeholder":"输入正数"},model:{value:(_vm.defColumnData[scope.$index].width),callback:function ($$v) {_vm.$set(_vm.defColumnData[scope.$index], "width", $$v)},expression:"defColumnData[scope.$index].width"}})]}}],null,false,4194662676)}),_c('el-table-column',{attrs:{"prop":"width","align":"center","label":"固定位置"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-select',{attrs:{"placeholder":"固定位置"},model:{value:(_vm.defColumnData[scope.$index].fixed),callback:function ($$v) {_vm.$set(_vm.defColumnData[scope.$index], "fixed", $$v)},expression:"defColumnData[scope.$index].fixed"}},[_c('el-option',{attrs:{"label":"不固定","value":"0"}}),_c('el-option',{attrs:{"label":"固定左侧","value":"left"}}),_c('el-option',{attrs:{"label":"固定右侧","value":"right"}})],1)]}}],null,false,3426190261)}),_c('el-table-column',{attrs:{"prop":"handle","align":"center","width":"80","label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"text","icon":"el-icon-thumb"},nativeOn:{"mousedown":function($event){return _vm.onSortMouseDown($event, scope.$index)}}},[_vm._v("拖动")])]}}],null,false,1875752022)})],1):_vm._e()],1),_c('div',{staticClass:"lay-bottom"},[_c('div',{staticClass:"btn-bar"},[_c('el-button',{staticClass:"inner-btn",attrs:{"type":"primary","icon":"el-icon-refresh-right"},on:{"click":_vm.onReset}},[_vm._v("恢复默认")]),_c('el-button',{attrs:{"type":"primary","icon":"el-icon-check"},on:{"click":_vm.onSubmit}},[_vm._v("确认")]),_c('el-button',{attrs:{"icon":"el-icon-close"},on:{"click":_vm.onClose}},[_vm._v("取消")])],1)])],1)}
var mainvue_type_template_id_0e13f56e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/column-board/src/main.vue?vue&type=template&id=0e13f56e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/column-board/src/main.vue?vue&type=script&lang=js&
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




/* harmony default export */ var column_board_src_mainvue_type_script_lang_js_ = ({
  name: 'sp-column-board',
  props: {
    columnData: {
      type: Array,
      default: function() { return [] }
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showTable: false,
      defColumnData: [],
      rowTrs: null, // 本体表格的tr标签
      haveSetTbMaxHeight: false,
      maxHeight: 400,
      drag: {
        tableBody: null,
        rect: {},
        target: null,
        targetTrCount: 0,
        cellHeight: 0,
        startMouseY: 0,
        moveMouseY: 0,
        formIndex: 0,
        spaceTr: null,
        spaceTrIndex: -1,
        toIndex: 0
      }
    }
  },
  watch: {
    columnData: function(newData) {
      this.defColumnData = this.markDefColumnData(newData)
    },
    visible: function(newValue) {
      this.showTable = newValue
      if (newValue) {
        this.$nextTick(() => {
          this.setTableSize()
        })
      }
    }
  },
  created() {
    this.defColumnData = this.markDefColumnData(this.columnData)
  },
  mounted() {
    this.setTableSize(true)
  },
  methods: {
    markDefColumnData(columnData = []) {
      const data = Array.isArray(columnData) ? columnData : []
      return data.map((item, index) => {
        let width = toNumber(item.width)
        width = !width || width <= 0 ? null : width
        return {
          id: item.id ? item.id : index + 1,
          width,
          label: item.label,
          prop: item.prop,
          showAble: item.hide === true ? false : true,
          sort: index + 1,
          fixed: item.fixed !== 'left' && item.fixed !== 'right' ? '0' : item.fixed,
          defSort: isNaN(item.defSort) ? index + 1 : item.defSort
        }
      })
    },
    onClose() {
      this.$emit('update:visible', false)
    },
    //确认
    onSubmit() {
      const column = this.defColumnData.map((item, index) => {
        return {
          prop: item.prop,
          hide: !item.showAble,
          fixed: item.fixed === '0' ? null : item.fixed,
          width: isNaN(item.width) || Number(item.width) <= 0 ? null : Number(item.width),
          sort: index
        }
      })
      this.$emit('submit', column)
    },
    //移动
    rowMove(scope, num) {
      const row = scope.row
      const formIndex = scope.$index
      const toIndex = num ? formIndex + num : row.defSort
      this.move(formIndex, toIndex)
    },
    move(formIndex, toIndex) {
      if (toIndex === formIndex) { return }
      if (toIndex < 0) {
        this.$message({
          message: '已经是列表中第一行,不可上移！',
          type: 'warning'
        })
      } else if (toIndex >= this.defColumnData.length) {
        this.$message({
          message: '已经是列表中最后一行,不可下移！',
          type: 'warning'
        })
      } else {
        const targetRow = this.defColumnData[formIndex]
        if (targetRow) {
          this.defColumnData.splice(formIndex, 1)
          this.defColumnData.splice(toIndex, 0, targetRow)
        }
      }       
    },
    onReset() {
      this.defColumnData = this.markDefColumnData(this.columnData)
    },
    onSortBlur(event, formIndex) {
      const value = event.target.value
      if (isNaN(value)) { return }
      const toIndex = value - 1
      // const formIndex = row.sort - 1
      this.move(formIndex, toIndex)
    },
    handleEvent(event) {
      switch(event.type) {
        case 'mousemove':
          this.onSortMouseMove(event)
          break
        case 'mouseup':
          this.onSortMouseUp()
          break
      }
    },
    onSortMouseMove(event) {
      this.drag.moveMouseY = event.clientY
      const distY = this.drag.moveMouseY - this.drag.startMouseY // 偏移量
      const top = this.drag.targetY + distY // 现在的位置
      let toIndex = Math.round((top - this.drag.rect.top) / this.drag.cellHeight)
      // if (toIndex < 0 || toIndex > this.drag.targetTrCount) { return }
      toIndex = toIndex < 0 ? 0 : toIndex > this.drag.targetTrCount - 1 ? this.drag.targetTrCount - 1 : toIndex
      if (toIndex !== this.drag.toIndex) {
        this.setSpaceTr(toIndex)
        this.drag.toIndex = toIndex
      }
      this.drag.target.style.top = top + 'px'
    },
    onSortMouseUp() {
      document.removeEventListener('mousemove', this, false)
      document.removeEventListener('mouseup', this, false)
      if (this.drag.target) {
        this.drag.target.remove()
        this.drag.target = null
      }
      // 把影子标签扶正
      if (this.drag.spaceTr) {
        this.drag.spaceTr.style.opacity = '1'
      }
      this.showTable = false
      this.move(this.drag.formIndex, this.drag.toIndex)
      this.$nextTick(() => {
        this.showTable = true
      })
    },
    // 为保持拖动的tr标签样式一致，所以复制整个表格而不是一个tr标签
    getMoveTarget() {
        const parent = this.drag.tableBody.parentElement
        const gparent = parent.parentElement
        const rect = this.drag.tableBody.getBoundingClientRect()
        const cloneTableBody = this.drag.tableBody.cloneNode(true)
        const target = document.createElement('div');
        const tableBodyWrap = document.createElement('div')
        tableBodyWrap.className = gparent.className
        const tableBodyParent = document.createElement('div')
        tableBodyParent.className = parent.className
        target.style.opacity = '0.6'
        target.style.position = 'fixed'
        target.style.zIndex = '3000'
        target.style.backgroundColor = '#fff'
        target.style.width = rect.width + 'px'
        target.style.top = rect.top + 'px'
        target.style.left = rect.left + 'px'
        tableBodyParent.append(cloneTableBody)
        tableBodyWrap.append(tableBodyParent)
        target.append(tableBodyWrap)
        this.drag.rect = rect
        return target
        // document.body.append(tableBodyWrap)
    },
    // 设置影子标签的位置
    setSpaceTr: debounce(function (toIndex) {
      if (this.rowTrs) {
        if (toIndex === 0) {
          this.rowTrs[0].before(this.drag.spaceTr)
        } if (toIndex === this.rowTrs.length - 1) {
          this.rowTrs[this.rowTrs.length - 1].after(this.drag.spaceTr)
        } else if (this.rowTrs[toIndex - 1])  {
          if (toIndex - 1 === this.drag.spaceTrIndex) {
            this.rowTrs[toIndex].after(this.drag.spaceTr)
          } else {
            this.rowTrs[toIndex - 1].after(this.drag.spaceTr)
          }
        } else if (this.rowTrs[toIndex + 1]) {
          if (toIndex + 1 === this.drag.spaceTrIndex) {
            this.rowTrs[toIndex].before(this.drag.spaceTr)
          } else {
            this.rowTrs[toIndex + 1].before(this.drag.spaceTr)
          }
        }
        this.drag.spaceTrIndex = toIndex
      }
    }),
    onSortMouseDown($event, index) {
      this.drag.formIndex = index
      this.drag.startMouseY = $event.clientY
      const el = this.$refs.eltable.$el
      const tableBodys = el.getElementsByClassName('el-table__body')
      
      if (tableBodys.length > 0) {
        this.drag.tableBody = tableBodys[0]
      }      
      if (this.drag.tableBody) {
        // 复制整个表格
        this.drag.target = this.getMoveTarget()
        this.rowTrs = this.drag.tableBody.getElementsByClassName('el-table__row') // 本体表格里面的所有tr标签元素
        document.body.append(this.drag.target)
      }
      if (this.drag.target) {
        const rowTrs = this.drag.target.getElementsByClassName('el-table__row')
        // 障眼法，隐藏其他不可拖动的tr标签
        if (rowTrs && rowTrs.length > 0) {
          for(let i = 0; i < rowTrs.length; i++) {
            if (i !== index) {
              rowTrs[i].style.display = 'none'
            }
          }
        }
        this.drag.targetTrCount = rowTrs.length
        this.drag.cellHeight = this.drag.rect.height / rowTrs.length // 每个tr标签元素的高度
        this.drag.targetY = this.drag.rect.top + this.drag.cellHeight * index // 当前拖动的tr标签位置
        this.drag.target.style.top = this.drag.targetY + 'px'
        this.drag.target.style.display = 'block'
        this.drag.formIndex = index
        this.drag.toIndex = null
        // 在本体表格里变化出当前拖动的tr标签的影子标签
        this.drag.spaceTr = this.rowTrs[index]
        this.drag.spaceTr.style.opacity = '0.4'
        this.setSpaceTr(index)
      }
      document.addEventListener('mousemove', this, false)
      document.addEventListener('mouseup', this, false)
     },
    // 计算表格高度 isDoLayout为true,强制重新计算高度
    setTableSize(isDoLayout) {
      let maxHeight
      if (isDoLayout || !this.haveSetTbMaxHeight) {
        const minHeight = 300
        const { clientHeight } = getClientInfo()
        const $table = this.$el
        const $tableBody = $table.querySelector('.el-container')
        const { top } = $tableBody.getBoundingClientRect()
        const bodyMaxHeight = clientHeight - top - 160 // 分页栏高度(52)
        this.maxHeight = bodyMaxHeight < minHeight ? minHeight : bodyMaxHeight
        this.haveSetTbMaxHeight = true
      } else if (maxHeight) {
        this.maxHeight = maxHeight
      }
      if (isDoLayout) {
        this.showTable = true
      }
    }
  }
});

// CONCATENATED MODULE: ./packages/column-board/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_column_board_src_mainvue_type_script_lang_js_ = (column_board_src_mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/column-board/src/main.vue?vue&type=style&index=0&id=0e13f56e&lang=scss&scoped=true&
var mainvue_type_style_index_0_id_0e13f56e_lang_scss_scoped_true_ = __webpack_require__("45f9");

// CONCATENATED MODULE: ./packages/column-board/src/main.vue






/* normalize component */

var column_board_src_main_component = normalizeComponent(
  packages_column_board_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_0e13f56e_scoped_true_render,
  mainvue_type_template_id_0e13f56e_scoped_true_staticRenderFns,
  false,
  null,
  "0e13f56e",
  null
  
)

/* harmony default export */ var column_board_src_main = (column_board_src_main_component.exports);
// CONCATENATED MODULE: ./packages/column-board/index.js

column_board_src_main.install = function (Vue) {
  Vue.component(column_board_src_main.name, column_board_src_main)
}
/* harmony default export */ var column_board = (column_board_src_main);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7165182e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/contextmenu/src/index.vue?vue&type=template&id=027bed6a&
var srcvue_type_template_id_027bed6a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sp-contextmenu"},[_c('div',{on:{"contextmenu":_vm.onContextmenu}},[_vm._t("default")],2),_c('ul',{staticClass:"sp-contextmenu-menu",style:(_vm.contextmenuStyle)},_vm._l((_vm.menus),function(menu,index){return _c('li',{key:index,staticClass:"sp-contextmenu-item",on:{"click":function($event){return _vm.onSelectMenu(menu.name)}}},[(menu.iconClass)?_c('i',{class:menu.iconClass}):_vm._e(),_c('span',{staticClass:"sp-contextmenu-name"},[_vm._v(_vm._s(menu.name))])])}),0)])}
var srcvue_type_template_id_027bed6a_staticRenderFns = []


// CONCATENATED MODULE: ./packages/contextmenu/src/index.vue?vue&type=template&id=027bed6a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/contextmenu/src/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var contextmenu_srcvue_type_script_lang_js_ = ({
  name: 'sp-contextmenu',
  props: {
    menus: {
      type: Array,
      default: function() {
        return [
          {
            iconClass: 'el-icon-delete',
            name: '删除'
          }
        ]
      }
    },
    taregtSelectors: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      contextmenuStyle: {},
      triggerClassName: 'sp-contextmenu-trigger',
      selectTarget: null
    }
  },
  destroyed() {
    this.hideContextmenu()
  },
  methods: {
    handleEvent(event) {
      switch(event.type) {
        case 'click':
          this.onClick(event)
          break
        default: break
      }
    },       
    onContextmenu(event) {
      event.preventDefault()
      event.stopPropagation()
      this.selectTarget =  this.getSelectorTarget(event)
      if (this.selectTarget) {
        this.selectTarget.className = this.selectTarget.className + ' ' + this.triggerClassName
        this.contextmenuStyle = {
          display: 'block',
          top: event.clientY - 20 + 'px',
          left: event.clientX - 5 + 'px'
        }
        document.addEventListener('click', this)
      }
    },
    onClick(event) {
      const contextmenu = this.$el.querySelector('.sp-contextmenu-menu')
      if (!contextmenu.contains(event.target)) {
        this.hideContextmenu()
      }
    },
    hideContextmenu() {
      this.contextmenuStyle = {
        display: 'none'
      }
      if (this.selectTarget) {
        this.selectTarget.className = this.selectTarget.className.replace(' ' + this.triggerClassName, '')
      }
      document.removeEventListener('click', this)
    },
    onSelectMenu(name) {
      this.hideContextmenu()
      this.$emit('select', name, this.selectTarget)
    },
    getSelectorTarget(event) {
      if (!this.taregtSelectors) { return event.target }
      const selectors = this.$el.querySelectorAll(this.taregtSelectors)
      if (selectors) {
        for(let i = 0; i < selectors.length; i ++) {
          if (selectors[i].contains(event.target)) {
            return selectors[i]
          }
        }
      }
      return null
    }
  }
});

// CONCATENATED MODULE: ./packages/contextmenu/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_contextmenu_srcvue_type_script_lang_js_ = (contextmenu_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/contextmenu/src/index.vue?vue&type=style&index=0&lang=scss&scope=true&
var srcvue_type_style_index_0_lang_scss_scope_true_ = __webpack_require__("718d");

// CONCATENATED MODULE: ./packages/contextmenu/src/index.vue






/* normalize component */

var contextmenu_src_component = normalizeComponent(
  packages_contextmenu_srcvue_type_script_lang_js_,
  srcvue_type_template_id_027bed6a_render,
  srcvue_type_template_id_027bed6a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var contextmenu_src = (contextmenu_src_component.exports);
// CONCATENATED MODULE: ./packages/contextmenu/index.js

contextmenu_src.install = function(Vue) {
  Vue.component(contextmenu_src.name, contextmenu_src)
}
/* harmony default export */ var contextmenu = (contextmenu_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7165182e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/empty/src/index.vue?vue&type=template&id=55ab70e7&scoped=true&
var srcvue_type_template_id_55ab70e7_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"empty-wrap"},[_c('div',{staticClass:"empty-inner"},[_c('img',{staticClass:"circular",attrs:{"src":__webpack_require__("4a38"),"alt":_vm.title}}),_c('p',{staticClass:"empty-tips"},[_vm._v(_vm._s(_vm.title))])])])}
var srcvue_type_template_id_55ab70e7_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/empty/src/index.vue?vue&type=template&id=55ab70e7&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/empty/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var empty_srcvue_type_script_lang_js_ = ({
  name: 'sp-empty',
  props: {
    title: {
      type: String,
      default: '没有数据～'
    }
  }
});

// CONCATENATED MODULE: ./packages/empty/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_empty_srcvue_type_script_lang_js_ = (empty_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/empty/src/index.vue?vue&type=style&index=0&id=55ab70e7&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_55ab70e7_lang_scss_scoped_true_ = __webpack_require__("5919");

// CONCATENATED MODULE: ./packages/empty/src/index.vue






/* normalize component */

var empty_src_component = normalizeComponent(
  packages_empty_srcvue_type_script_lang_js_,
  srcvue_type_template_id_55ab70e7_scoped_true_render,
  srcvue_type_template_id_55ab70e7_scoped_true_staticRenderFns,
  false,
  null,
  "55ab70e7",
  null
  
)

/* harmony default export */ var empty_src = (empty_src_component.exports);
// CONCATENATED MODULE: ./packages/empty/index.js

empty_src.install = function (Vue) {
  Vue.component(empty_src.name, empty_src)
}
/* harmony default export */ var empty = (empty_src);
// CONCATENATED MODULE: ./packages/directives/DivisibleHeight.js
// v-visibleHeight:500=".el-table__body-wrapper"

/* harmony default export */ var DivisibleHeight = ({
  inserted: function(el, binding, vnode) {
    const { value, arg } = binding
    let childSelector = value
    if (typeof value === 'function') {
      childSelector = value()
    }
        
    if (el && childSelector !== false) {
      let targetDom = el
      if (childSelector) {
        targetDom = el.querySelector(childSelector)
      }
      if (targetDom) {
        const { clientHeight } = getClientInfo()
        const { top } = targetDom.getBoundingClientRect()
        const height = isNaN(arg) ? 0 : Number(arg)
        const maxHeight = clientHeight - top - height
        
        vnode.set('maxHeight', maxHeight)
      }
    }
  }
});
// EXTERNAL MODULE: ./packages/styles/spelement.ui.scss
var spelement_ui = __webpack_require__("6800");

// CONCATENATED MODULE: ./packages/index.js
















const components = [
  table,
  table_form,
  packages_form,
  form_dynamic,
  form_group,
  crud,
  tree,
  tree_select,
  column_board,
  upload,
  packages_textarea,
  contextmenu,
  empty,
  crud_form
]
const directives = {
  visibleHeight: DivisibleHeight
}
const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, {
      extends: component,
      data() {
        return {
          useOptions: opts
        }
      }
    })
  })
  // 注册自定义指令
  for(const DiName in directives) {
    Vue.directive(DiName, directives[DiName])
  }
}
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
/* harmony default export */ var packages_0 = ({
  install
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=spelement-ui.umd.js.map