/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*****************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body,\nheader,\nheader *,\nsection,\nsection * {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n:root {\n  --header-size: max(3rem, 11vh);\n  --nav-size: max(8rem, 18vw);\n  font-family: Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\n    sans-serif;\n  --font-x3: calc(var(--header-size) - 1rem);\n  --font-x2: calc(var(--nav-size) / 9);\n  --font-x1: min(var(--font-x2), 1.4rem);\n\n  --color-unique: rgb(195 141 158);\n  --grey: #eeeeee;\n  --white: #f7f7f7;\n  --g: #3ba3a5;\n  --r: #ff0000;\n  --o: #ffa500;\n  --shadow: #a6a6a6;\n}\n.grid {\n  background-color: var(--white);\n  display: grid;\n  grid-template-columns: var(--nav-size) 1fr;\n  grid-template-rows: var(--header-size) 1fr;\n}\n.content {\n  height: 100vh;\n}\nheader {\n  background-color: var(--color-unique);\n  color: var(--white);\n  grid-row: 1 / 1;\n  grid-column: 1/-1;\n  font-size: var(--font-x3);\n}\nnav {\n  background-color: var(--grey);\n  grid-row: 2 / -1;\n  grid-column: 1 / 1;\n  font-size: var(--font-x2);\n  overflow: auto;\n  position: relative;\n}\nul {\n  list-style: none;\n  line-height: calc(var(--font-x2) * 1.5);\n  padding: 1rem;\n}\nli {\n  cursor: pointer;\n  border-bottom: 1px solid var(--color-unique);\n}\n.add {\n  font-size: 2rem;\n  width: var(--font-x3);\n  height: var(--font-x3);\n  background-color: var(--color-unique);\n  color: var(--white);\n  box-shadow: 2px 2px 9px 2px var(--shadow);\n  border-radius: 50%;\n  position: absolute;\n  right: 1rem;\n  bottom: 1rem;\n}\nsection {\n  gap: 12px;\n  margin: 7vh 0;\n  grid-row: 2 / -1;\n  grid-column: 2 / -1;\n  font-size: var(--font-x1);\n}\n/* **************************************************************************************** */\n.flex {\n  display: flex;\n}\n.flex-row-rev {\n  flex-direction: row-reverse;\n}\n.flex-column {\n  flex-direction: column;\n}\n.flex-center {\n  justify-content: center;\n  align-items: center;\n}\n.space-btwn {\n  justify-content: space-between;\n}\n.flex-align-center {\n  align-items: center;\n}\n.flex-justify-center {\n  justify-content: center;\n}\n/* **************************************************************************************** */\n.todo_item {\n  background-color: var(--grey);\n  width: 80%;\n}\n.todo_item:hover {\n  box-shadow: 3px 3px 5px 1px var(--shadow);\n}\n.todo_item_right_marge {\n  margin-right: calc(var(--font-x1) * 2);\n}\n.todo_item img {\n  height: var(--font-x1);\n  width: var(--font-x1);\n}\n.todo_item_title {\n  margin-right: auto;\n}\n.todo_item_state {\n  color: var(--white);\n  border: 2px solid var(--g);\n  border-radius: 4px;\n  width: var(--font-x1);\n  height: var(--font-x1);\n}\n.bg-g {\n  background-color: var(--g);\n}\n.todo_item_details {\n  font-size: calc(var(--font-x1) - 0.4rem);\n}\n.todo_item_details:hover {\n  background-color: var(--g);\n  color: var(--white);\n}\n.small-padd {\n  padding: calc(var(--font-x1) / 6) calc(var(--font-x2) / 2);\n}\n.up_onhover:hover {\n  transform: translateY(-3px);\n}\n.todo_item img:hover {\n  filter: invert(59%) sepia(4%) saturate(6311%) hue-rotate(133deg)\n    brightness(96%) contrast(75%);\n}\n.pointer {\n  cursor: pointer;\n}\n/* ******************************************************************************* */\n.blur-fixed-bg {\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100vh;\n  width: 100vw;\n  backdrop-filter: blur(6px);\n}\n.task-create-container {\n  width: min(70%, 850px);\n  height: min(60%, 450px);\n  background-color: white;\n  grid-template-columns: 20% 80%;\n}\n.task-create-container section {\n  margin: 1rem;\n  font-size: 1rem;\n}\n.task-create-container section textarea {\n  resize: none;\n  outline: none;\n  border: none;\n  border-bottom: 2px solid var(--grey);\n}\n.task-create-details {\n  height: 6rem;\n  margin-bottom: auto;\n}\n.task-create-container nav {\n  font-size: 1.4rem;\n}\n.task-create-container header {\n  font-size: 2rem;\n  padding: 0 2rem;\n}\n.date-and-priority {\n  gap: min(2rem, 10vh);\n}\n.task-create-priorities div:first-child,\n.task-create-date div:first-child {\n  padding-right: 1rem;\n}\n.date-and-priority input[type=\"radio\"] {\n  opacity: 0;\n}\n.green-btn {\n  border: 1px solid var(--g);\n  color: var(--g);\n  border-radius: 4px;\n}\n\n.task-create-priorities label.low {\n  border: 1px solid var(--g);\n  color: var(--g);\n  border-radius: 4px;\n}\n.task-create-priorities label.low:hover,\n.add-to-do:hover {\n  background-color: var(--g);\n  color: var(--white);\n}\n.task-create-priorities label.medium {\n  border: 1px solid var(--o);\n  color: var(--o);\n  border-radius: 4px;\n}\n.task-create-priorities label.medium:hover {\n  background-color: var(--o);\n  color: var(--white);\n}\n.task-create-priorities label.high {\n  border: 1px solid var(--r);\n  color: var(--r);\n  border-radius: 4px;\n}\n\n.task-create-priorities label.high:hover {\n  background-color: var(--r);\n  color: var(--white);\n}\n/*  */\n.display-none {\n  display: none;\n}\n/*  */\n/* ****************************************************************************************** */\n.task-details-container {\n  background-color: var(--grey);\n  width: 60%;\n  height: max-content;\n}\n.task-details-title-and-close {\n  font-size: 1.6rem;\n  margin-bottom: 1.6rem;\n}\n.grid2 {\n  gap: 10px;\n  display: grid;\n  grid-template-columns: 15% 80%;\n}\n/* ****************************************************************************************** */\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/index.css?../../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/../../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!******************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \******************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/../../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ \"../../node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/index.css?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \************************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/../../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/../../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*******************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/../../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/../../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nconst home = () => {\n  /**\n   * function that create the basic layout for the home page\n   */\n  let content = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\"div\", [\"content\", \"grid\"]).create();\n  let header = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\n    \"header\",\n    [\"flex\", \"space-btwn\", \"flex-column\", \"small-padd\"],\n    null,\n    \" &#128394; What ToDo &#128394;\"\n  ).create();\n  let nav = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\"nav\", [\"flex\", \"space-btwn\", \"flex-column\"]).create();\n  let section = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\"section\", [\n    \"flex\",\n    \"flex-column\",\n    \"flex-align-center\",\n  ]).create();\n\n  // nav stuff\n  let ul1 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\"ul\").create();\n  let li1_1 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\"li\", [\"up_onhover\", \"small-padd\"], null, \"Home\").create();\n  let li1_2 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\n    \"li\",\n    [\"up_onhover\", \"small-padd\"],\n    null,\n    \"Today\"\n  ).create();\n  let li1_3 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\"li\", [\"up_onhover\", \"small-padd\"], null, \"Week\").create();\n  let li1_4 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\n    \"li\",\n    [\"up_onhover\", \"small-padd\"],\n    null,\n    \"Sections\"\n  ).create();\n  let ul2 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\"ul\", [\"sections-ul\", \"small-padd\"]).create();\n  let li1_5 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\n    \"li\",\n    [\"up_onhover\", \"small-padd\"],\n    null,\n    \"Notes\"\n  ).create();\n  let addBtn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\n    \"div\",\n    [\"add\", \"flex\", \"flex-center\", \"up_onhover\", \"pointer\"],\n    null,\n    \"+\"\n  ).create();\n  ul1.append(li1_1, li1_2, li1_3, li1_4, ul2, li1_5);\n  nav.append(ul1, addBtn);\n\n  content.append(header, nav, section);\n\n  const renderStructure = () => {\n    return content;\n  };\n  const addSection = (sectionName) => {\n    let tempLi = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\n      \"li\",\n      [\"up_onhover\", \"small-padd\"],\n      null,\n      null,\n      sectionName\n    ).create();\n    tempLi.style.border = \"none\";\n    ul2.append(tempLi);\n  };\n  const renderSection = (sectionItems) => {\n    section.append(...sectionItems);\n  };\n  return { renderStructure, addSection };\n};\n\n\n//# sourceURL=webpack://todo/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _taskCreator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskCreator.js */ \"./src/taskCreator.js\");\n\n\n\nlet body = document.querySelector(\"body\");\n\nlet homeSection = (0,_home__WEBPACK_IMPORTED_MODULE_1__.home)();\nlet taskCreatorSection = (0,_taskCreator_js__WEBPACK_IMPORTED_MODULE_2__.taskCreator)();\nbody.append(homeSection.renderStructure());\nbody.append(taskCreatorSection.renderStructure());\n// taskCreatorSection.toggleRendering();\n// console.log(taskCreatorSection.isHidden());\n// homeSection.addSection(\"test\");\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/taskCreator.js":
/*!****************************!*\
  !*** ./src/taskCreator.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   taskCreator: () => (/* binding */ taskCreator)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nconst taskCreator = () => {\n  let container = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\"div\", [\n    \"blur-fixed-bg\",\n    \"flex\",\n    \"flex-center\",\n  ]).create();\n  let content = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\"div\", [\"task-create-container\", \"grid\"]).create();\n  let header = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\"header\", [\n    \"flex\",\n    \"space-btwn\",\n    \"flex-align-center\",\n  ]).create();\n  let span1 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\"span\", null, null, null, \"Create New ...\").create();\n  let span2 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\"span\", [\"pointer\"], null, null, \"x\").create();\n  header.append(span1, span2);\n  let nav = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\"nav\").create();\n  let section = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\"section\", [\n    \"flex\",\n    \"flex-column\",\n    \"space-btwn\",\n  ]).create();\n  let div_txt = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\"div\", [\"texts\", \"flex\", \"flex-column\"]).create();\n  let txtArea1 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\"textarea\", [\"task-create-title\"], {\n    placeholder: \"Title: Pay bills\",\n    name: \"task-create-title\",\n    maxlength: \"40\",\n    required: true,\n  }).create();\n  let txtArea2 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\"textarea\", [\"task-create-details\"], {\n    placeholder: \"Details: e.g internet, phone, rent.\",\n    name: \"task-create-details\",\n  }).create();\n  div_txt.append(txtArea1, txtArea2);\n  let div = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\"div\", [\"flex\", \"space-btwn\"]).create();\n  let date_and_priority = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\"div\", [\n    \"date-and-priority\",\n    \"flex\",\n    \"flex-column\",\n  ]).create();\n  date_and_priority.innerHTML = `<div class=\"flex flex-align-center task-create-date\">\n  <div>Due Date:</div>\n  <input class=\"green-btn small-padd\" type=\"date\" required />\n</div>\n<div class=\"flex flex-align-center task-create-priorities\">\n  <div>Priority:</div>\n  <input\n    type=\"radio\"\n    id=\"low-priority\"\n    name=\"priority\"\n    value=\"low\"\n    required\n  />\n  <label class=\"pointer small-padd low\" for=\"low-priority\"\n    >LOW</label\n  >\n  <input\n    type=\"radio\"\n    id=\"medium-priority\"\n    name=\"priority\"\n    value=\"medium\"\n    required\n  />\n  <label class=\"pointer small-padd medium\" for=\"medium-priority\"\n    >MEDIUM</label\n  >\n  <input\n    type=\"radio\"\n    id=\"high-priority\"\n    name=\"priority\"\n    value=\"high\"\n    required\n  />\n  <label class=\"pointer small-padd high\" for=\"high-priority\"\n    >HIGH</label\n  >\n</div>`;\n  let div_add = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.DomElm)(\"div\", [\"flex\", \"flex-center\"]).create();\n  div_add.innerHTML = `<span class=\"add-to-do pointer green-btn small-padd\"\n>ADD TO DO</span\n>`;\n  div.append(date_and_priority, div_add);\n  section.append(div_txt, div);\n  content.append(header, nav, section);\n  container.append(content);\n  const renderStructure = () => {\n    return container;\n  };\n  const isHidden = () => container.classList.contains(\"display-none\");\n  const toggleRendering = () => {\n    container.classList.toggle(\"display-none\");\n  };\n  return { renderStructure, isHidden, toggleRendering };\n};\n\n\n//# sourceURL=webpack://todo/./src/taskCreator.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DomElm: () => (/* binding */ DomElm),\n/* harmony export */   createTodoItem: () => (/* binding */ createTodoItem)\n/* harmony export */ });\n/* harmony import */ var _images_trash_can_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/trash-can.svg */ \"./src/images/trash-can.svg\");\n/* harmony import */ var _images_edit_button_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/edit-button.png */ \"./src/images/edit-button.png\");\n\n\n\nconst DomElm = (tag, classes, attrs, html, text) => {\n  let elm = document.createElement(tag);\n  const create = () => {\n    if (classes) {\n      for (let c of classes) {\n        elm.classList.add(c);\n      }\n    }\n    if (attrs) {\n      for (let k of Object.keys(attrs)) {\n        elm.setAttribute(k, attrs[k]);\n      }\n    }\n    if (html) {\n      elm.innerHTML = html;\n    }\n    if (text) {\n      elm.textContent = text;\n    }\n    return elm;\n  };\n  return { create };\n};\n\nfunction createTodoItem(i) {\n  let todoItem = DomElm(\"div\", [\n    \"todo_item\",\n    \"flex\",\n    \"flex-align-center\",\n    \"small-padd\",\n    \"up_onhover\",\n  ]).create();\n  let state = DomElm(\"div\", [\n    \"todo_item_state\",\n    \"todo_item_right_marge\",\n    \"pointer\",\n  ]).create();\n  let title = DomElm(\n    \"div\",\n    [\"todo_item_title\", \"todo_item_right_marge\"],\n    null,\n    null,\n    i.title\n  ).create();\n  let details = DomElm(\n    \"div\",\n    [\n      \"small-padd\",\n      \"todo_item_details\",\n      \"todo_item_right_marge\",\n      \"pointer\",\n      \"green-btn\",\n    ],\n    null,\n    \"DETAILS\"\n  ).create();\n  let date = DomElm(\n    \"div\",\n    [\"todo_item_date\", \"todo_item_right_marge\"],\n    null,\n    null,\n    i.dueDate\n  ).create();\n  let edit = DomElm(\n    \"div\",\n    [\"todo_item_edit\", \"todo_item_right_marge\", \"pointer\"],\n    { alt: \"trash can\", src: _images_trash_can_svg__WEBPACK_IMPORTED_MODULE_0__ }\n  ).create();\n  let remove = DomElm(\"div\", [\"todo_item_delete\", \"pointer\"], {\n    alt: \"edit pen\",\n    src: _images_edit_button_png__WEBPACK_IMPORTED_MODULE_1__,\n  }).create();\n  switch (i.priority) {\n    case \"high\":\n      todoItem.style.borderLeft = \"var(--r)\";\n      break;\n    case \"medium\":\n      todoItem.style.borderLeft = \"var(--o)\";\n      break;\n    case \"low\":\n      todoItem.style.borderLeft = \"var(--g)\";\n      break;\n  }\n  todoItem.append(state, title, details, date, edit, remove);\n  return todoItem;\n}\n\n\n//# sourceURL=webpack://todo/./src/utils.js?");

/***/ }),

/***/ "./src/images/edit-button.png":
/*!************************************!*\
  !*** ./src/images/edit-button.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4527f8b627da39edec32.png\";\n\n//# sourceURL=webpack://todo/./src/images/edit-button.png?");

/***/ }),

/***/ "./src/images/trash-can.svg":
/*!**********************************!*\
  !*** ./src/images/trash-can.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cae73bb9ae11dba69d2f.svg\";\n\n//# sourceURL=webpack://todo/./src/images/trash-can.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;