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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_changePhoto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/changePhoto */ \"./src/modules/changePhoto.js\");\n/* harmony import */ var _modules_blockForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/blockForm */ \"./src/modules/blockForm.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/SliderCarousel */ \"./src/modules/SliderCarousel.js\");\n\n\n\n\n\n\n\n\n\n\n\n //Timer\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)('19 Mar 2021 7:00:00'); // меню\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)(); //popup\n\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__.default)(); //табы\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__.default)(); //слайдел\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.default)(); //изменение фото\n\n(0,_modules_changePhoto__WEBPACK_IMPORTED_MODULE_5__.default)(); // форма осталиь вопросы\n\n(0,_modules_blockForm__WEBPACK_IMPORTED_MODULE_6__.default)(); //калькулятор \n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__.default)(100); //send-ajax-form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__.default)(); //слайдер 'Нам доверяют'\n\nvar carousel = new _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_9__.default({\n  main: '.companies-wrapper',\n  wrap: '.companies-hor',\n  slidesToShow: 5,\n  infinity: true,\n  responsive: [{\n    breakpoint: 1024,\n    slidesToShow: 4\n  }, {\n    breakpoint: 768,\n    slidesToShow: 3\n  }, {\n    breakpoint: 576,\n    slidesToShow: 2\n  }]\n});\ncarousel.init();\n\n//# sourceURL=webpack://3DGloLending/./src/index.js?");

/***/ }),

/***/ "./src/modules/SliderCarousel.js":
/*!***************************************!*\
  !*** ./src/modules/SliderCarousel.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SliderCarousel = /*#__PURE__*/function () {\n  function SliderCarousel(_ref) {\n    var main = _ref.main,\n        wrap = _ref.wrap,\n        next = _ref.next,\n        prev = _ref.prev,\n        _ref$infinity = _ref.infinity,\n        infinity = _ref$infinity === void 0 ? false : _ref$infinity,\n        _ref$position = _ref.position,\n        position = _ref$position === void 0 ? 0 : _ref$position,\n        _ref$slidesToShow = _ref.slidesToShow,\n        slidesToShow = _ref$slidesToShow === void 0 ? 3 : _ref$slidesToShow,\n        _ref$responsive = _ref.responsive,\n        responsive = _ref$responsive === void 0 ? [] : _ref$responsive;\n\n    _classCallCheck(this, SliderCarousel);\n\n    if (!main || !wrap) {\n      console.warn('slider-carousel: необхдимо 2 свойства \"main\" и \"wrap\"!');\n    }\n\n    this.main = document.querySelector(main);\n    this.wrap = document.querySelector(wrap);\n    this.slides = document.querySelector(wrap).children;\n    this.next = document.querySelector(next);\n    this.prev = document.querySelector(prev);\n    this.slidesToShow = slidesToShow;\n    this.options = {\n      position: position,\n      infinity: infinity,\n      widthSlide: Math.floor(100 / slidesToShow),\n      maxPosition: this.slides.length - this.slidesToShow\n    };\n    this.responsive = responsive;\n  }\n\n  _createClass(SliderCarousel, [{\n    key: \"init\",\n    value: function init() {\n      this.addGloClass();\n      this.addStyle();\n\n      if (this.prev && this.next) {\n        this.controlSlider();\n      } else {\n        this.addArrow();\n        this.controlSlider();\n      }\n\n      if (this.responsive) {\n        this.responseInit();\n      }\n    }\n  }, {\n    key: \"addGloClass\",\n    value: function addGloClass() {\n      this.main.classList.add('glo-slider');\n      this.wrap.classList.add('glo-slider__wrap');\n\n      var _iterator = _createForOfIteratorHelper(this.slides),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var item = _step.value;\n          item.classList.add('glo-slider__item');\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }, {\n    key: \"addStyle\",\n    value: function addStyle() {\n      var style = document.getElementById('sliderCarousel-style');\n\n      if (!style) {\n        style = document.createElement('style');\n        style.id = 'sliderCarousel-style';\n      }\n\n      style.textContent = \"\\n\\t\\t\\t\\t.glo-slider{\\n\\t\\t\\t\\t\\toverflow: hidden !important;\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\t.glo-slider__wrap{\\n\\t\\t\\t\\t\\tdisplay: flex !important;\\n\\t\\t\\t\\t\\ttransition: transform 0.5s !important;\\n\\t\\t\\t\\t\\twill-change: transform !important;\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\t.glo-slider__item{\\n\\t\\t\\t\\t\\tdisplay: flex !important;\\n\\t\\t\\t\\t\\tjustify-content: center;\\n\\t\\t\\t\\t\\talign-items: center;\\n\\t\\t\\t\\t\\tflex: 0 0 \".concat(this.options.widthSlide, \"% !important;\\n\\t\\t\\t\\t\\tmargin: auto 0 !important;\\n\\t\\t\\t\\t}\\n\\t\\t\\t\");\n      document.head.appendChild(style);\n    }\n  }, {\n    key: \"controlSlider\",\n    value: function controlSlider() {\n      this.prev.addEventListener('click', this.prevSlider.bind(this));\n      this.next.addEventListener('click', this.nextSlider.bind(this));\n    }\n  }, {\n    key: \"prevSlider\",\n    value: function prevSlider() {\n      if (this.options.infinity || this.options.position > 0) {\n        --this.options.position;\n\n        if (this.options.position < 0) {\n          this.options.position = this.options.maxPosition;\n        }\n\n        this.wrap.style.transform = \"translateX(-\".concat(this.options.position * this.options.widthSlide, \"%)\");\n      }\n    }\n  }, {\n    key: \"nextSlider\",\n    value: function nextSlider() {\n      if (this.options.infinity || this.options.position < this.options.maxPosition) {\n        ++this.options.position;\n\n        if (this.options.position > this.options.maxPosition - 1) {\n          this.options.position = 0;\n        }\n\n        this.wrap.style.transform = \"translateX(-\".concat(this.options.position * this.options.widthSlide, \"%)\");\n      }\n    }\n  }, {\n    key: \"addArrow\",\n    value: function addArrow() {\n      this.prev = document.createElement('button');\n      this.next = document.createElement('button');\n      this.prev.classList = 'glo-slider__prev';\n      this.next.classList = 'glo-slider__next';\n      this.main.appendChild(this.prev);\n      this.main.appendChild(this.next);\n      var style = document.createElement('style');\n      style.textContent = \"\\n\\t\\t\\t\\t.glo-slider__prev, \\n\\t\\t\\t\\t.glo-slider__next {\\n\\t\\t\\t\\t\\tmargin: 0 10px;\\n\\t\\t\\t\\t\\tborder: 20px solid transparent;\\n\\t\\t\\t\\t\\tbackground: transparent;\\n\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\t.glo-slider__next {\\n\\t\\t\\t\\t\\tborder-left-color: #19b5fe;\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\t.glo-slider__prev {\\n\\t\\t\\t\\t\\tborder-right-color: #19b5fe;\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\t.glo-slider__prev:hover,\\n\\t\\t\\t\\t.glo-slider__next:hover,\\n\\t\\t\\t\\t.glo-slider__prev:focus,\\n\\t\\t\\t\\t.glo-slider__next:focus {\\n\\t\\t\\t\\t\\tbackground: transparent;\\n\\t\\t\\t\\t\\toutline: transparent;\\n\\t\\t\\t\\t}\\n\\t\\t\\t\";\n      document.head.appendChild(style);\n    }\n  }, {\n    key: \"responseInit\",\n    value: function responseInit() {\n      var _this = this;\n\n      var slidesToShowDefault = this.slidesToShow;\n      var allRespone = this.responsive.map(function (item) {\n        return item.breakpoint;\n      });\n      var maxResponse = Math.max.apply(Math, _toConsumableArray(allRespone));\n\n      var checkResponse = function checkResponse() {\n        var widthWindow = document.documentElement.clientWidth;\n\n        if (widthWindow < maxResponse) {\n          for (var i = 0; i < allRespone.length; i++) {\n            if (widthWindow < allRespone[i]) {\n              _this.slidesToShow = _this.responsive[i].slidesToShow;\n              _this.options.widthSlide = Math.floor(100 / _this.slidesToShow);\n\n              _this.addStyle();\n            }\n          }\n        } else {\n          _this.slidesToShow = slidesToShowDefault;\n          _this.options.widthSlide = Math.floor(100 / _this.slidesToShow);\n\n          _this.addStyle();\n        }\n      };\n\n      checkResponse();\n      window.addEventListener('resize', checkResponse);\n    }\n  }]);\n\n  return SliderCarousel;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderCarousel);\n\n//# sourceURL=webpack://3DGloLending/./src/modules/SliderCarousel.js?");

/***/ }),

/***/ "./src/modules/blockForm.js":
/*!**********************************!*\
  !*** ./src/modules/blockForm.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar blockForm = function blockForm() {\n  var formName1 = document.getElementById('form1-name'),\n      formName2 = document.getElementById('form2-name'),\n      formName3 = document.getElementById('form3-name'),\n      formMessage = document.getElementById('form2-message'),\n      regExp = new RegExp('^-* *|-(?=-)| (?= )| *-*$', 'ig');\n\n  var regName = function regName(btn) {\n    if (!/[а-я\\s]/ig.test(btn.data)) {\n      btn.target.value = btn.target.value.replace(/[^а-я\\s]/ig, '');\n    }\n  };\n\n  var regMessage = function regMessage(btn) {\n    if (!/[а-я\\s\\d\\.,!\\?]/ig.test(btn.data)) {\n      this.value = this.value.replace(/[^а-я\\s\\d\\.,!\\?]/ig, '');\n    }\n  };\n\n  var regEmail = function regEmail(btn) {\n    if (!/[a-z@_\\-\\.!\\~\\*']/ig.test(btn.data)) {\n      btn.target.value = btn.target.value.replace(/[^a-z@_\\-\\.!\\~\\*']/ig, '');\n    }\n  };\n\n  var regNumder = function regNumder(btn) {\n    if (!/[+\\d]/ig.test(btn.data)) {\n      btn.target.value = btn.target.value.replace(/[^+\\d]/ig, '');\n    }\n\n    btn.target.value = btn.target.value.replace(/(.{12}).*/ig, '$1');\n\n    if (/^[78]/ig.test(btn.target.value)) {\n      btn.target.value = btn.target.value.replace(/[+]/ig, '');\n      btn.target.value = btn.target.value.replace(/([\\d]{11})\\d*/ig, '$1');\n    }\n  };\n\n  formMessage.addEventListener('input', regMessage);\n  document.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.type === 'tel') {\n      regNumder(event);\n\n      if (target.value.length < 7) {\n        target.setCustomValidity('минимум 7 цифр');\n      } else {\n        target.setCustomValidity('');\n      }\n    }\n\n    if (target.type === 'email') {\n      regEmail(event);\n    }\n\n    if (target.id === 'form1-name' || target.id === 'form2-name' || target.id === 'form3-name') {\n      regName(event);\n\n      if (target.value.length < 2) {\n        target.setCustomValidity('слишком короткое имя');\n      } else {\n        target.setCustomValidity('');\n      }\n    }\n  });\n\n  var nameUpperCase = function nameUpperCase() {\n    var target = event.target;\n    target.value = target.value.replace(regExp, '');\n    var tmp = target.value.split(' ');\n    tmp.map(function (item, i) {\n      tmp[i] = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();\n    });\n    target.value = tmp.join(' ');\n  };\n\n  formName1.addEventListener('blur', nameUpperCase);\n  formName2.addEventListener('blur', nameUpperCase);\n  formName3.addEventListener('blur', nameUpperCase);\n  formMessage.addEventListener('blur', function () {\n    formMessage.value = formMessage.value.replace(regExp, '');\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blockForm);\n\n//# sourceURL=webpack://3DGloLending/./src/modules/blockForm.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcCount = document.querySelector('.calc-count'),\n      calcDay = document.querySelector('.calc-day'),\n      totalValue = document.getElementById('total');\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value,\n        squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n      var counterNum = 0;\n      var changeModal;\n      var tmp = Math.ceil(total / 39);\n\n      var animateNumbers = function animateNumbers() {\n        changeModal = requestAnimationFrame(animateNumbers);\n        counterNum += tmp;\n\n        if (total > counterNum) {\n          totalValue.textContent = counterNum;\n        } else {\n          totalValue.textContent = Math.floor(total);\n          cancelAnimationFrame(changeModal);\n        }\n      };\n\n      changeModal = requestAnimationFrame(animateNumbers);\n    }\n  };\n\n  calcBlock.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.tagName === 'INPUT') {\n      target.value = target.value.replace(/\\D/, '');\n    }\n\n    if (target.matches('select') || target.matches('input')) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3DGloLending/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/changePhoto.js":
/*!************************************!*\
  !*** ./src/modules/changePhoto.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar changePhoto = function changePhoto() {\n  var command = document.getElementById('command');\n  var tmpSrc;\n  var tmpTarget;\n  command.addEventListener('mouseover', function (e) {\n    var target = event.target;\n\n    if (target.matches('.command__photo')) {\n      tmpSrc = target.src;\n      tmpTarget = target;\n      target.src = target.dataset.img;\n    }\n\n    if (!target.matches('.command__photo') && tmpSrc) {\n      target = tmpTarget;\n      target.src = tmpSrc;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changePhoto);\n\n//# sourceURL=webpack://3DGloLending/./src/modules/changePhoto.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar countTimer = function countTimer(deadline) {\n  var timerHours = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector('#timer-minutes'),\n      timerSeconds = document.querySelector('#timer-seconds');\n\n  var getTimeRemaining = function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60);\n    return {\n      timeRemaining: timeRemaining,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  };\n\n  var zeroAdd = function zeroAdd(x) {\n    return x < 10 ? '0' + x : x;\n  };\n\n  var updateClock = function updateClock() {\n    var timer = getTimeRemaining();\n\n    if (timer.seconds >= 0) {\n      timerHours.textContent = zeroAdd(timer.hours);\n      timerMinutes.textContent = zeroAdd(timer.minutes);\n      timerSeconds.textContent = zeroAdd(timer.seconds);\n    } else {\n      timerHours.textContent = '00';\n      timerMinutes.textContent = '00';\n      timerSeconds.textContent = '00';\n    }\n\n    if (timer.timeRemaining < 1) {\n      clearInterval(timerId);\n    }\n  };\n\n  var timerId = setInterval(updateClock, 1000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://3DGloLending/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var errorMassage = 'Что то пошло не так',\n      successMassage = 'Спасибо! Мы скоро с вами свяжемся!';\n\n  var clearInput = function clearInput(formClear) {\n    var formInrut = formClear.querySelectorAll('input');\n    formInrut.forEach(function (item) {\n      item.value = '';\n    });\n  };\n\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size: 2rem';\n  var statusImg = document.createElement('img');\n  statusImg.src = './images/833.svg';\n  var bodyTag = document.querySelector('body');\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  bodyTag.addEventListener('submit', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (target.querySelector('[name=\"user_phone\"]').value.length < 7 || target.querySelector('[name=\"user_name\"]').value.length < 2) {\n      return;\n    }\n\n    target.appendChild(statusMessage);\n    statusMessage.style.color = 'white';\n    statusMessage.textContent = '';\n    statusMessage.appendChild(statusImg);\n    var formData = new FormData(target);\n    var body = {};\n    formData.forEach(function (val, key) {\n      body[key] = val;\n    });\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      statusMessage.textContent = successMassage;\n      setTimeout(function () {\n        return statusMessage.textContent = '';\n      }, 4000);\n    })[\"catch\"](function (error) {\n      statusMessage.textContent = errorMassage;\n      console.error(error);\n    });\n    clearInput(target);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3DGloLending/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slide = document.querySelectorAll('.portfolio-item'),\n      slider = document.querySelector('.portfolio-content'),\n      portfolioDots = document.querySelector('.portfolio-dots');\n  var currentSlide = 0,\n      interval;\n  slide.forEach(function (item, index) {\n    var li = document.createElement('li');\n    li.classList.add('dot');\n    portfolioDots.append(li);\n\n    if (item.matches('.portfolio-item-active')) {\n      document.querySelectorAll('.dot')[index].classList.add('dot-active');\n      currentSlide = index;\n    }\n  });\n  var dot = document.querySelectorAll('.dot');\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1500;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n  startSlide(3000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3DGloLending/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = document.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab');\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab');\n\n    if (target) {\n      tab.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3DGloLending/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var scrollPage = function scrollPage(target) {\n    var menuId = target.getAttribute('href').substring(1);\n\n    if (document.getElementById(menuId)) {\n      event.preventDefault();\n      document.getElementById(menuId).scrollIntoView({\n        block: 'start',\n        behavior: 'smooth'\n      });\n    }\n  };\n\n  var menu = document.querySelector('menu');\n\n  var handlerMenu = function handlerMenu() {\n    menu.classList.toggle('active-menu');\n  };\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.menu') || target.closest('.close-btn') || target.matches('a') && target.closest('.active-menu') || !target.closest('.active-menu') && menu.matches('.active-menu')) {\n      handlerMenu();\n    }\n\n    if (target.getAttribute('href') && target.getAttribute('href').charAt(0) === '#') {\n      scrollPage(target);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://3DGloLending/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopUp = function togglePopUp() {\n  var popup = document.querySelector('.popup'),\n      popupBtn = document.querySelectorAll('.popup-btn'),\n      popupContent = document.querySelector('.popup-content'),\n      scrollBtn = document.querySelector('a');\n  var count = 0;\n  var moveModal;\n\n  var animationModal = function animationModal() {\n    moveModal = requestAnimationFrame(animationModal);\n    count += 4;\n\n    if (count < 104) {\n      popupContent.style.transform = \"translateY(-\".concat(100 - count, \"%)\");\n    } else {\n      count = 0;\n      cancelAnimationFrame(moveModal);\n    }\n  };\n\n  popupBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      popup.style.display = 'block';\n      var widthWin = document.documentElement.clientWidth;\n\n      if (widthWin >= 768) {\n        popupContent.style.transform = \"translateY(-100%)\";\n        moveModal = requestAnimationFrame(animationModal);\n      }\n    });\n  });\n  scrollBtn.addEventListener('click', function () {\n    event.preventDefault();\n    document.getElementById('service-block').scrollIntoView({\n      block: 'start',\n      behavior: 'smooth'\n    });\n  });\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popup.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://3DGloLending/./src/modules/togglePopUp.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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