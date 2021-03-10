/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3DGloLending"]("main",{

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var errorMassage = 'Что то пошло не так',\n      successMassage = 'Спасибо! Мы скоро с вами свяжемся!';\n\n  var clearInput = function clearInput(formClear) {\n    var formInrut = formClear.querySelectorAll('input');\n    formInrut.forEach(function (item) {\n      item.value = '';\n    });\n  };\n\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size: 2rem';\n  var statusImg = document.createElement('img');\n  statusImg.src = './images/833.svg';\n  var bodyTag = document.querySelector('body');\n  bodyTag.addEventListener('submit', function (event) {\n    event.preventDefault();\n    var target = event.target;\n    target.appendChild(statusMessage);\n    statusMessage.style.color = 'white';\n    statusMessage.textContent = '';\n    statusMessage.appendChild(statusImg);\n    var formData = new FormData(target);\n\n    var postData = function postData(body) {\n      return fetch('./server.php', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'multipart/from-data'\n        },\n        body: JSON.stringify(body)\n      });\n    };\n\n    postData(formData).then(function (responce) {\n      if (responce.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      statusMessage.textContent = successMassage;\n      setTimeout(function () {\n        return statusMessage.textContent = '';\n      }, 4000);\n    })[\"catch\"](function (error) {\n      statusMessage.textContent = errorMassage;\n      console.error(error);\n    });\n    clearInput(target);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3DGloLending/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("891901cd59412fb693f7")
/******/ 	})();
/******/ 	
/******/ }
);