/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/fairytale-page.css":
/*!************************************!*\
  !*** ./src/css/fairytale-page.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/css/fairytale-page.css?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/css/index.css?");

/***/ }),

/***/ "./src/css/menu.css":
/*!**************************!*\
  !*** ./src/css/menu.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/css/menu.css?");

/***/ }),

/***/ "./src/js/burger.js":
/*!**************************!*\
  !*** ./src/js/burger.js ***!
  \**************************/
/***/ (() => {

eval("const menuBurger = document.getElementById(\"menuBurger\");\r\nconst menu = document.getElementById(\"menu\");\r\nconst menuClose = document.getElementById(\"menuClose\");\r\n\r\n// Показать меню и скрыть надпись \"МЕНЮ\"\r\nmenuBurger.addEventListener(\"click\", () => {\r\n  menu.classList.add(\"menu-active\");\r\n  menuBurger.style.display = \"none\";\r\n});\r\n\r\n// Закрыть меню и вернуть надпись \"МЕНЮ\"\r\nmenuClose.addEventListener(\"click\", () => {\r\n  menu.classList.remove(\"menu-active\");\r\n  menuBurger.style.display = \"block\";\r\n});\r\n\n\n//# sourceURL=webpack:///./src/js/burger.js?");

/***/ }),

/***/ "./src/js/carousels.js":
/*!*****************************!*\
  !*** ./src/js/carousels.js ***!
  \*****************************/
/***/ (() => {

eval("const bookWrapper = document.getElementById('bookWrapper');\r\nlet scrollAmount = 0;\r\nconst scrollStep = 400; // Шаг прокрутки в пикселях\r\n\r\nfunction scrollBooks(direction) {\r\n    const maxScroll = bookWrapper.scrollWidth - bookWrapper.offsetWidth;\r\n\r\n    if (direction === 'right') {\r\n        scrollAmount += scrollStep;\r\n        if (scrollAmount > maxScroll) scrollAmount = maxScroll;\r\n    } else if (direction === 'left') {\r\n        scrollAmount -= scrollStep;\r\n        if (scrollAmount < 0) scrollAmount = 0;\r\n    }\r\n    bookWrapper.style.transform = `translateX(-${scrollAmount}px)`;\r\n}\r\n\r\ndocument.querySelector('.left').onclick = function() {\r\n    scrollBooks('left');\r\n};\r\ndocument.querySelector('.right').onclick = function() {\r\n    scrollBooks('right');\r\n};\n\n//# sourceURL=webpack:///./src/js/carousels.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/menu.css */ \"./src/css/menu.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _css_fairytale_page_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/fairytale-page.css */ \"./src/css/fairytale-page.css\");\n/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./burger.js */ \"./src/js/burger.js\");\n/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_burger_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _carousels_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousels.js */ \"./src/js/carousels.js\");\n/* harmony import */ var _carousels_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_carousels_js__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;