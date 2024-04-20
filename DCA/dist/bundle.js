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

/***/ "./src/components/card/card.ts":
/*!*************************************!*\
  !*** ./src/components/card/card.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attribute\": () => (/* binding */ Attribute),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Attribute;\n(function (Attribute) {\n    Attribute[\"text\"] = \"text\";\n    Attribute[\"image\"] = \"image\";\n})(Attribute || (Attribute = {}));\nclass Card extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    static get observedAttributes() {\n        const attrs = {\n            text: null,\n            image: null\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propname, oldV0alue, newValue) {\n        this[propname] = newValue;\n        this.render();\n    }\n    render() {\n        var _a, _b, _c;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = '';\n        }\n        const catDive = this.ownerDocument.createElement('div');\n        // buttoncats.addEventListener('click', );\n        const texth1 = this.ownerDocument.createElement('h1');\n        texth1.className = 'text';\n        texth1.textContent = `${this.text}`;\n        const imagen = this.ownerDocument.createElement('img');\n        texth1.className = 'imagen';\n        texth1.textContent = `${this.image}`;\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(catDive);\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(imagen);\n        (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(texth1);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\ncustomElements.define('card-card', Card);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/card/card.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _types_datafech__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/datafech */ \"./src/types/datafech.ts\");\n/* harmony import */ var _components_card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/card/card */ \"./src/components/card/card.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const dataGatos = yield (0,_types_datafech__WEBPACK_IMPORTED_MODULE_0__.getdata)();\n            this.render(dataGatos);\n        });\n    }\n    render(dataGatos) {\n        var _a, _b;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\n                <style>\n\t\t\t\t\n                </style>\n\n                `;\n        }\n        const cardgatos = this.ownerDocument.createElement(\"card-card\");\n        cardgatos.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_1__.Attribute.text, dataGatos);\n        cardgatos.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_1__.Attribute.image, dataGatos);\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(cardgatos);\n        const buttoncats = this.ownerDocument.createElement('button');\n        buttoncats.className = 'get gatos';\n        buttoncats.textContent = 'gatos';\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(buttoncats);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/types/datafech.ts":
/*!*******************************!*\
  !*** ./src/types/datafech.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getdata\": () => (/* binding */ getdata)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst getdata = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const data = yield fetch(`https://catfact.ninja/fact`).then((res) => res.json());\n        console.log(data.fact);\n        return data.fact;\n    }\n    catch (error) {\n        console.log(error);\n        return error;\n    }\n});\ngetdata();\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/types/datafech.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;