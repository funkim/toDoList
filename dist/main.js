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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n \n\n\nconst projectSubmit = document.getElementById(\"projectCreator\");\nprojectSubmit.addEventListener('submit', function(e) {\n    e.preventDefault();\n    const { projectName, projectDueDate, projectDescription, priority } = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.getUserInputs)();\n    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.createProject)(projectName,  projectDueDate.value, projectDescription, priority );\n});\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   getUserInputs: () => (/* binding */ getUserInputs)\n/* harmony export */ });\n\n\nfunction getUserInputs() {\n    const projectForm = document.querySelector('.addNewProjectPage form');\n    const projectName = document.getElementById('projectName').value;\n    const projectDueDate = document.getElementById('projectDueDate');\n    const projectDescription = document.getElementById('projectDescription').value;\n    const priorityListeners = document.getElementsByName('projectPriority');        \n        \n    let priority = '';\n        for (var i = 0; i < priorityListeners.length; i++) {\n            if (priorityListeners[i].checked) {\n            priority = priorityListeners[i].value;\n            break;\n            }\n        }\n        return {projectName, projectDueDate, projectDescription, priority}\n}\n\nfunction createProject(name, dueDate, description, priority) {\n    \n    const allProjectsContainer = document.getElementById(\"projects\");\n    const projectContainer = document.createElement(\"div\");\n    const projectContainerHeader = document.createElement(\"h1\");\n    const projectContainerPriority = document.createElement(\"h2\");\n    const projectContainerDueDate = document.createElement(\"h2\");\n    const projectContainerDescription = document.createElement(\"p\");\n    allProjectsContainer.appendChild(projectContainer)\n    projectContainer.appendChild(projectContainerHeader)\n    projectContainer.appendChild(projectContainerPriority)\n    projectContainer.appendChild(projectContainerDueDate)\n    projectContainer.appendChild(projectContainerDescription)\n\nprojectContainer.classList.add(\"projectContainer\")\nprojectContainerHeader.classList.add(\"projectContainerHeader\")\nprojectContainerPriority.classList.add(\"projectContainerPriority\")\nprojectContainerDueDate.classList.add(\"projectContainerDueDate\")\nprojectContainerDescription.classList.add(\"projectContainerDescription\")\n\n\nprojectContainerHeader.innerHTML = name\nprojectContainerPriority.innerHTML = priority \nprojectContainerDueDate.innerHTML = dueDate\nprojectContainerDescription.innerHTML= description\n}\n\n\n//# sourceURL=webpack://todolist/./src/todo.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;