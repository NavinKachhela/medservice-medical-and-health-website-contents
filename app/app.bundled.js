/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/scripts/app.js":
/*!***********************************!*\
  !*** ./app/assets/scripts/app.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ \"./app/assets/styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconsole.log('console')\r\n\n\n//# sourceURL=webpack:///./app/assets/scripts/app.js?");

/***/ }),

/***/ "./app/assets/styles/style.css":
/*!*************************************!*\
  !*** ./app/assets/styles/style.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?url=false!../../../node_modules/postcss-loader/src??ref--4-2!./style.css */ \"./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/postcss-loader/src/index.js?!./app/assets/styles/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./app/assets/styles/style.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/postcss-loader/src/index.js?!./app/assets/styles/style.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/postcss-loader/src??ref--4-2!./app/assets/styles/style.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/**\\r\\n* FILE ARCHITECTURE\\r\\n* IDENTIFY PATTERNS IN THE DESIGN\\r\\n* RULES YO BE FOLLOWED TO NAME THE CLASSES OF CSS\\r\\n* BEN\\r\\n* B - Block\\r\\n* E - Element\\r\\n* N - Modifier\\r\\n*/\\r\\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\r\\n/* Document\\n   ========================================================================== */\\r\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\r\\nhtml {\\n  line-height: 1.15; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n}\\r\\n/* Sections\\n   ========================================================================== */\\r\\n/**\\n * Remove the margin in all browsers.\\n */\\r\\nbody {\\n  margin: 0;\\n}\\r\\n/**\\n * Render the `main` element consistently in IE.\\n */\\r\\nmain {\\n  display: block;\\n}\\r\\n/**\\n * Correct the font size and margin on `h1` elements within `section` and\\n * `article` contexts in Chrome, Firefox, and Safari.\\n */\\r\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0;\\n}\\r\\n/* Grouping content\\n   ========================================================================== */\\r\\n/**\\n * 1. Add the correct box sizing in Firefox.\\n * 2. Show the overflow in Edge and IE.\\n */\\r\\nhr {\\n  box-sizing: content-box; /* 1 */\\n  height: 0; /* 1 */\\n  overflow: visible; /* 2 */\\n}\\r\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\r\\npre {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\r\\n/* Text-level semantics\\n   ========================================================================== */\\r\\n/**\\n * Remove the gray background on active links in IE 10.\\n */\\r\\na {\\n  background-color: transparent;\\n}\\r\\n/**\\n * 1. Remove the bottom border in Chrome 57-\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\r\\nabbr[title] {\\n  border-bottom: none; /* 1 */\\n  text-decoration: underline; /* 2 */\\n  -webkit-text-decoration: underline dotted;\\n          text-decoration: underline dotted; /* 2 */\\n}\\r\\n/**\\n * Add the correct font weight in Chrome, Edge, and Safari.\\n */\\r\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\r\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\r\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\r\\n/**\\n * Add the correct font size in all browsers.\\n */\\r\\nsmall {\\n  font-size: 80%;\\n}\\r\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\r\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\r\\nsub {\\n  bottom: -0.25em;\\n}\\r\\nsup {\\n  top: -0.5em;\\n}\\r\\n/* Embedded content\\n   ========================================================================== */\\r\\n/**\\n * Remove the border on images inside links in IE 10.\\n */\\r\\nimg {\\n  border-style: none;\\n}\\r\\n/* Forms\\n   ========================================================================== */\\r\\n/**\\n * 1. Change the font styles in all browsers.\\n * 2. Remove the margin in Firefox and Safari.\\n */\\r\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  line-height: 1.15; /* 1 */\\n  margin: 0; /* 2 */\\n}\\r\\n/**\\n * Show the overflow in IE.\\n * 1. Show the overflow in Edge.\\n */\\r\\nbutton,\\ninput { /* 1 */\\n  overflow: visible;\\n}\\r\\n/**\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n * 1. Remove the inheritance of text transform in Firefox.\\n */\\r\\nbutton,\\nselect { /* 1 */\\n  text-transform: none;\\n}\\r\\n/**\\n * Correct the inability to style clickable types in iOS and Safari.\\n */\\r\\nbutton,\\n[type=\\\"button\\\"],\\n[type=\\\"reset\\\"],\\n[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n}\\r\\n/**\\n * Remove the inner border and padding in Firefox.\\n */\\r\\nbutton::-moz-focus-inner,\\n[type=\\\"button\\\"]::-moz-focus-inner,\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0;\\n}\\r\\n/**\\n * Restore the focus styles unset by the previous rule.\\n */\\r\\nbutton:-moz-focusring,\\n[type=\\\"button\\\"]:-moz-focusring,\\n[type=\\\"reset\\\"]:-moz-focusring,\\n[type=\\\"submit\\\"]:-moz-focusring {\\n  outline: 1px dotted ButtonText;\\n}\\r\\n/**\\n * Correct the padding in Firefox.\\n */\\r\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em;\\n}\\r\\n/**\\n * 1. Correct the text wrapping in Edge and IE.\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\n * 3. Remove the padding so developers are not caught out when they zero out\\n *    `fieldset` elements in all browsers.\\n */\\r\\nlegend {\\n  box-sizing: border-box; /* 1 */\\n  color: inherit; /* 2 */\\n  display: table; /* 1 */\\n  max-width: 100%; /* 1 */\\n  padding: 0; /* 3 */\\n  white-space: normal; /* 1 */\\n}\\r\\n/**\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\r\\nprogress {\\n  vertical-align: baseline;\\n}\\r\\n/**\\n * Remove the default vertical scrollbar in IE 10+.\\n */\\r\\ntextarea {\\n  overflow: auto;\\n}\\r\\n/**\\n * 1. Add the correct box sizing in IE 10.\\n * 2. Remove the padding in IE 10.\\n */\\r\\n[type=\\\"checkbox\\\"],\\n[type=\\\"radio\\\"] {\\n  box-sizing: border-box; /* 1 */\\n  padding: 0; /* 2 */\\n}\\r\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\r\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\r\\n/**\\n * 1. Correct the odd appearance in Chrome and Safari.\\n * 2. Correct the outline style in Safari.\\n */\\r\\n[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\r\\n/**\\n * Remove the inner padding in Chrome and Safari on macOS.\\n */\\r\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\r\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Change font properties to `inherit` in Safari.\\n */\\r\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\r\\n/* Interactive\\n   ========================================================================== */\\r\\n/*\\n * Add the correct display in Edge, IE 10+, and Firefox.\\n */\\r\\ndetails {\\n  display: block;\\n}\\r\\n/*\\n * Add the correct display in all browsers.\\n */\\r\\nsummary {\\n  display: list-item;\\n}\\r\\n/* Misc\\n   ========================================================================== */\\r\\n/**\\n * Add the correct display in IE 10+.\\n */\\r\\ntemplate {\\n  display: none;\\n}\\r\\n/**\\n * Add the correct display in IE 10.\\n */\\r\\n[hidden] {\\n  display: none;\\n}\\r\\nbody {\\r\\n    font-family: 'Roboto', sans-serif;\\r\\n    color: #333;\\r\\n    font-weight: 300;\\r\\n}\\r\\nimg {\\r\\n    max-width: 100%;\\r\\n    height: auto;\\r\\n}\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\nh6 {\\r\\n    font-family: 'lato', 'sans-serif';\\r\\n}\\r\\n.large-hero {\\r\\n    margin-top: 1rem;\\r\\n    position: relative;\\r\\n\\r\\n}\\r\\n.large-hero__title {\\r\\n        font-size: 2.15rem;\\r\\n        font-weight: 900;\\r\\n        text-transform: uppercase;\\r\\n        letter-spacing: 0.5px;\\r\\n        color: #004861;\\r\\n    }\\r\\n.large-hero__text-content {\\r\\n        position: absolute;\\r\\n        left: 10%;\\r\\n        top: 35%;\\r\\n        transform: translateY(-50%);\\r\\n    }\\r\\n.large-hero__text-content__strip-title {\\r\\n            padding: 1.25rem 2.5rem;\\r\\n            border-radius: 0.3575rem 0.3575rem 0 0;\\r\\n            background-color: #00A3C8;\\r\\n            display: inline-block;\\r\\n            text-transform: uppercase;\\r\\n            color: #FFF;\\r\\n            letter-spacing: 1px;\\r\\n            font-weight: 900;\\r\\n            font-size: 0.85rem;\\r\\n            margin-bottom: 0;\\r\\n        }\\r\\n.large-hero__text-content__text {\\r\\n            background-color: #FFF;\\r\\n            padding: 3.125rem 2.5rem;\\r\\n            width: 50%;\\r\\n            border-radius: 0 6px 6 px 6 px\\r\\n        }\\r\\n.large-hero__subtitle {\\r\\n        font-size: 1.75rem;\\r\\n        line-height: 1;\\r\\n        text-transform: uppercase;\\r\\n        letter-spacing: 0.5px;\\r\\n        margin-top: 0;\\r\\n        margin-bottom: 0.675rem;\\r\\n        color: #004861;\\r\\n    }\\r\\n.large-hero__feature-list {\\r\\n        list-style: circle;\\r\\n        margin-left: -1.3rem;\\r\\n        color: #666;\\r\\n    }\\r\\n.large-hero__feature-list_item {\\r\\n            line-height: 1.5;\\r\\n            margin-bottom: 0.625rem;\\r\\n        }\\r\\n.btn {\\r\\n    display: inline-block;\\r\\n    line-height: 1;\\r\\n    padding: 0.75rem 1.5rem;\\r\\n    border-radius: 6px;\\r\\n    text-align: center;\\r\\n    font-size: 0.915rem;\\r\\n}\\r\\n.btn_blue {\\r\\n        color: #FFF;\\r\\n        background-color: #00A3C8;\\r\\n        text-decoration: none;\\r\\n    }\\r\\n.btn $:hover {\\r\\n        background-color: #0E8EAB;\\r\\n    }\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./app/assets/styles/style.css?./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/postcss-loader/src??ref--4-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ });