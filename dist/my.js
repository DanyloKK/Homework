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

/***/ "./src/my.js":
/*!*******************!*\
  !*** ./src/my.js ***!
  \*******************/
/***/ (() => {

eval("$(document).ready(function () {\n  const form = $(\".js--form\");\n  const button = $(\".btn-success\");\n  const inputForm = $(\".js--form__input\");\n  const list = $(\".js--todos-wrapper\");\n  const modal = $(\".modal\");\n  const body = $(\"body\");\n  const modalTask = $(\"#todoDetails\");\n  const buttonClose = $(\".btn-close\");\n  const container = $(\".container\");\n  $(form).on(\"submit\", function (e) {\n    e.preventDefault();\n    let inputValue = inputForm.val();\n    if (inputValue) {\n      let createLi = $(\"<li></li>\");\n      $(createLi).addClass(\n        \"list-group-item d-flex align-items-center justify-content-between\",\n      );\n      let createCheckBox = $(\"<input>\");\n      $(createCheckBox).attr(\"type\", \"checkbox\").addClass(\"form-check-input\");\n      let createSpan = $(\"<span></span>\").addClass(\n        \"ms-2 todo-item__description\",\n      );\n      createSpan.text(inputValue);\n      $(list).append(createLi);\n      $(createLi).append(createCheckBox);\n      $(createLi).append(createSpan);\n      let deleteButton = $(\"<button>\")\n        .addClass(\"btn btn-danger btn-sm\")\n        .text(\"Видалити\");\n      $(createLi).append(deleteButton);\n      inputForm.val(\"\");\n      $(deleteButton).on(\"click\", function (e) {\n        $(createLi).remove();\n      });\n      $(createLi).on(\"click\", function (e) {\n        $(modal).addClass(\"modal-show\");\n        $(body).addClass(\"background\");\n        const textSpan = createSpan.text();\n        $(modalTask).text(textSpan);\n        $(container).addClass(\"style\");\n        $(buttonClose).on(\"click\", function () {\n          $(modal).removeClass(\"modal-show\");\n          $(body).removeClass(\"background\");\n          $(container).removeClass(\"style\");\n        });\n      });\n    }\n  });\n});\n\n\n//# sourceURL=webpack://homework/./src/my.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/my.js"]();
/******/ 	
/******/ })()
;