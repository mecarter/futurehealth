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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_Router__ = __webpack_require__(7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes_common__ = __webpack_require__(5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_home__ = __webpack_require__(6);\n\n\n\n\n\n\n/**\n * Populate Router instance with DOM routes\n * @type {Router} routes - An instance of our router\n */\nvar routes = new __WEBPACK_IMPORTED_MODULE_1__util_Router__[\"a\" /* default */]({\n  /** All pages */\n  common: __WEBPACK_IMPORTED_MODULE_2__routes_common__[\"a\" /* default */],\n  /** Home page */\n  home: __WEBPACK_IMPORTED_MODULE_3__routes_home__[\"a\" /* default */]\n  /** About Us page, note the change from about-us to aboutUs. */\n});\n\n/** Load Events */\nroutes.loadEvents();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz81MmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuaW1wb3J0IFJvdXRlciBmcm9tICcuL3V0aWwvUm91dGVyJztcbmltcG9ydCBjb21tb24gZnJvbSAnLi9yb3V0ZXMvY29tbW9uJztcbmltcG9ydCBob21lIGZyb20gJy4vcm91dGVzL2hvbWUnO1xuXG4vKipcbiAqIFBvcHVsYXRlIFJvdXRlciBpbnN0YW5jZSB3aXRoIERPTSByb3V0ZXNcbiAqIEB0eXBlIHtSb3V0ZXJ9IHJvdXRlcyAtIEFuIGluc3RhbmNlIG9mIG91ciByb3V0ZXJcbiAqL1xudmFyIHJvdXRlcyA9IG5ldyBSb3V0ZXIoe1xuICAvKiogQWxsIHBhZ2VzICovXG4gIGNvbW1vbjogY29tbW9uLFxuICAvKiogSG9tZSBwYWdlICovXG4gIGhvbWU6IGhvbWVcbiAgLyoqIEFib3V0IFVzIHBhZ2UsIG5vdGUgdGhlIGNoYW5nZSBmcm9tIGFib3V0LXVzIHRvIGFib3V0VXMuICovXG59KTtcblxuLyoqIExvYWQgRXZlbnRzICovXG5yb3V0ZXMubG9hZEV2ZW50cygpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var setupPostCards = function setupPostCards() {\n  var PostCards = document.getElementsByClassName('PostCard');\n\n  var _loop = function _loop(i) {\n    var PostCard = PostCards[i];\n    var url = PostCard.getElementsByTagName('a')[0].getAttribute('href');\n    PostCard.addEventListener('click', function (e) {\n      if (e.target.tagName !== 'a') {\n        window.location = url;\n      }\n    });\n  };\n\n  for (var i = 0; i < PostCards.length; i++) {\n    _loop(i);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  init: setupPostCards\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdENhcmQvUG9zdENhcmQuanM/YmI2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc2V0dXBQb3N0Q2FyZHMgPSBmdW5jdGlvbiBzZXR1cFBvc3RDYXJkcygpIHtcbiAgdmFyIFBvc3RDYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ1Bvc3RDYXJkJyk7XG5cbiAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaSkge1xuICAgIHZhciBQb3N0Q2FyZCA9IFBvc3RDYXJkc1tpXTtcbiAgICB2YXIgdXJsID0gUG9zdENhcmQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKVswXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICBQb3N0Q2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS50YXJnZXQudGFnTmFtZSAhPT0gJ2EnKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IFBvc3RDYXJkcy5sZW5ndGg7IGkrKykge1xuICAgIF9sb29wKGkpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IHNldHVwUG9zdENhcmRzXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9Qb3N0Q2FyZC9Qb3N0Q2FyZC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProjectOverlay_ProjectOverlay__ = __webpack_require__(3);\n\n\nvar ProjectOverlay = new __WEBPACK_IMPORTED_MODULE_0__ProjectOverlay_ProjectOverlay__[\"a\" /* default */]();\n\nvar setupProjectSite = function setupProjectSite(ProjectSiteEl) {\n  var ProjectSiteA = ProjectSiteEl.getElementsByTagName('a')[0];\n  var url = ProjectSiteA ? ProjectSiteA.getAttribute('href') : '';\n  if (url) {\n    ProjectSiteEl.addEventListener('click', function (e) {\n      e.preventDefault();\n      var slug = url.split('/').pop();\n      ProjectOverlay.open(slug);\n    });\n  }\n};\n\nvar setupProjectMap = function setupProjectMap() {\n  var ProjectSites = document.getElementsByClassName('ProjectSite');\n  for (var i = 0; i < ProjectSites.length; i++) {\n    setupProjectSite(ProjectSites[i]);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  init: setupProjectMap,\n  projectOverlay: ProjectOverlay\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvamVjdE1hcC9Qcm9qZWN0TWFwLmpzPzNhYTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3RPdmVybGF5Q2xhc3MgZnJvbSAnLi9Qcm9qZWN0T3ZlcmxheS9Qcm9qZWN0T3ZlcmxheSc7XG5cbnZhciBQcm9qZWN0T3ZlcmxheSA9IG5ldyBQcm9qZWN0T3ZlcmxheUNsYXNzKCk7XG5cbnZhciBzZXR1cFByb2plY3RTaXRlID0gZnVuY3Rpb24gc2V0dXBQcm9qZWN0U2l0ZShQcm9qZWN0U2l0ZUVsKSB7XG4gIHZhciBQcm9qZWN0U2l0ZUEgPSBQcm9qZWN0U2l0ZUVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJylbMF07XG4gIHZhciB1cmwgPSBQcm9qZWN0U2l0ZUEgPyBQcm9qZWN0U2l0ZUEuZ2V0QXR0cmlidXRlKCdocmVmJykgOiAnJztcbiAgaWYgKHVybCkge1xuICAgIFByb2plY3RTaXRlRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIHNsdWcgPSB1cmwuc3BsaXQoJy8nKS5wb3AoKTtcbiAgICAgIFByb2plY3RPdmVybGF5Lm9wZW4oc2x1Zyk7XG4gICAgfSk7XG4gIH1cbn07XG5cbnZhciBzZXR1cFByb2plY3RNYXAgPSBmdW5jdGlvbiBzZXR1cFByb2plY3RNYXAoKSB7XG4gIHZhciBQcm9qZWN0U2l0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdQcm9qZWN0U2l0ZScpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IFByb2plY3RTaXRlcy5sZW5ndGg7IGkrKykge1xuICAgIHNldHVwUHJvamVjdFNpdGUoUHJvamVjdFNpdGVzW2ldKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBzZXR1cFByb2plY3RNYXAsXG4gIHByb2plY3RPdmVybGF5OiBQcm9qZWN0T3ZlcmxheVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvUHJvamVjdE1hcC9Qcm9qZWN0TWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ProjectOverlayClass = function () {\n  function ProjectOverlayClass() {\n    var _this = this;\n\n    _classCallCheck(this, ProjectOverlayClass);\n\n    this.El = document.getElementById('ProjectOverlay');\n    this.CloseButton = document.getElementById('ProjectOverlayClose');\n    this.listenForEscKey = this.listenForEscKey.bind(this);\n\n    this.CloseButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      _this.close();\n    });\n  }\n\n  _createClass(ProjectOverlayClass, [{\n    key: 'listenForEscKey',\n    value: function listenForEscKey(e) {\n      if (e.keyCode === 27) this.close();\n    }\n  }, {\n    key: 'open',\n    value: function open(slug) {\n      var newClassName = 'open ' + slug;\n      this.El.className = newClassName;\n      window.addEventListener('keyup', this.listenForEscKey);\n    }\n  }, {\n    key: 'close',\n    value: function close() {\n      var _this2 = this;\n\n      this.El.className = this.El.className.replace('open', 'closing');\n      window.removeEventListener('keyup', this.listenForEscKey);\n      setTimeout(function () {\n        _this2.El.className = '';\n      }, 300);\n    }\n  }]);\n\n  return ProjectOverlayClass;\n}();\n\n;\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (ProjectOverlayClass);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvamVjdE1hcC9Qcm9qZWN0T3ZlcmxheS9Qcm9qZWN0T3ZlcmxheS5qcz8wZTE3Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBQcm9qZWN0T3ZlcmxheUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQcm9qZWN0T3ZlcmxheUNsYXNzKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvamVjdE92ZXJsYXlDbGFzcyk7XG5cbiAgICB0aGlzLkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1Byb2plY3RPdmVybGF5Jyk7XG4gICAgdGhpcy5DbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdQcm9qZWN0T3ZlcmxheUNsb3NlJyk7XG4gICAgdGhpcy5saXN0ZW5Gb3JFc2NLZXkgPSB0aGlzLmxpc3RlbkZvckVzY0tleS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5DbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBfdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFByb2plY3RPdmVybGF5Q2xhc3MsIFt7XG4gICAga2V5OiAnbGlzdGVuRm9yRXNjS2V5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuRm9yRXNjS2V5KGUpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb3BlbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW4oc2x1Zykge1xuICAgICAgdmFyIG5ld0NsYXNzTmFtZSA9ICdvcGVuICcgKyBzbHVnO1xuICAgICAgdGhpcy5FbC5jbGFzc05hbWUgPSBuZXdDbGFzc05hbWU7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmxpc3RlbkZvckVzY0tleSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2xvc2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLkVsLmNsYXNzTmFtZSA9IHRoaXMuRWwuY2xhc3NOYW1lLnJlcGxhY2UoJ29wZW4nLCAnY2xvc2luZycpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5saXN0ZW5Gb3JFc2NLZXkpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5FbC5jbGFzc05hbWUgPSAnJztcbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFByb2plY3RPdmVybGF5Q2xhc3M7XG59KCk7XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdE92ZXJsYXlDbGFzcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvUHJvamVjdE1hcC9Qcm9qZWN0T3ZlcmxheS9Qcm9qZWN0T3ZlcmxheS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var setupSiteHeader = function setupSiteHeader() {\n  var menuItems = document.getElementsByClassName('menu-item');\n  for (var i = 0; i < menuItems.length; i++) {\n    menuItems[i].addEventListener('click', function (e) {\n      var isHashLink = e.target.href.includes('#');\n      if (!isHashLink) return;\n      var hashLink = e.target.href.split('#')[1];\n      var hashLinkElement = document.getElementById(hashLink);\n      if (hashLinkElement) {\n        e.preventDefault();\n        hashLinkElement.scrollIntoView({\n          behavior: 'smooth',\n          block: 'start'\n        });\n      }\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  init: setupSiteHeader\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2l0ZUhlYWRlci9TaXRlSGVhZGVyLmpzPzVlMDYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHNldHVwU2l0ZUhlYWRlciA9IGZ1bmN0aW9uIHNldHVwU2l0ZUhlYWRlcigpIHtcbiAgdmFyIG1lbnVJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnUtaXRlbScpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIG1lbnVJdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgaXNIYXNoTGluayA9IGUudGFyZ2V0LmhyZWYuaW5jbHVkZXMoJyMnKTtcbiAgICAgIGlmICghaXNIYXNoTGluaykgcmV0dXJuO1xuICAgICAgdmFyIGhhc2hMaW5rID0gZS50YXJnZXQuaHJlZi5zcGxpdCgnIycpWzFdO1xuICAgICAgdmFyIGhhc2hMaW5rRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2hMaW5rKTtcbiAgICAgIGlmIChoYXNoTGlua0VsZW1lbnQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBoYXNoTGlua0VsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgICBibG9jazogJ3N0YXJ0J1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBzZXR1cFNpdGVIZWFkZXJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL1NpdGVIZWFkZXIvU2l0ZUhlYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_PostCard_PostCard__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_SiteHeader_SiteHeader__ = __webpack_require__(4);\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  init: function init() {\n    // JavaScript to be fired on all pages\n    __WEBPACK_IMPORTED_MODULE_0__components_PostCard_PostCard__[\"a\" /* default */].init();\n    __WEBPACK_IMPORTED_MODULE_1__components_SiteHeader_SiteHeader__[\"a\" /* default */].init();\n  },\n  finalize: function finalize() {\n    // JavaScript to be fired on all pages, after page specific JS is fired\n  }\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvY29tbW9uLmpzPzExMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdENhcmQvUG9zdENhcmQnO1xuaW1wb3J0IFNpdGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaXRlSGVhZGVyL1NpdGVIZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgLy8gSmF2YVNjcmlwdCB0byBiZSBmaXJlZCBvbiBhbGwgcGFnZXNcbiAgICBQb3N0Q2FyZC5pbml0KCk7XG4gICAgU2l0ZUhlYWRlci5pbml0KCk7XG4gIH0sXG4gIGZpbmFsaXplOiBmdW5jdGlvbiBmaW5hbGl6ZSgpIHtcbiAgICAvLyBKYXZhU2NyaXB0IHRvIGJlIGZpcmVkIG9uIGFsbCBwYWdlcywgYWZ0ZXIgcGFnZSBzcGVjaWZpYyBKUyBpcyBmaXJlZFxuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JvdXRlcy9jb21tb24uanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ProjectMap_ProjectMap__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ResearcherCard_ResearcherCard__ = __webpack_require__(28);\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  init: function init() {\n    __WEBPACK_IMPORTED_MODULE_0__components_ProjectMap_ProjectMap__[\"a\" /* default */].init();\n    __WEBPACK_IMPORTED_MODULE_1__components_ResearcherCard_ResearcherCard__[\"a\" /* default */].init();\n  },\n  finalize: function finalize() {\n    // JavaScript to be fired on the home page, after the init JS\n  }\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvaG9tZS5qcz9mZTI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0TWFwIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvamVjdE1hcC9Qcm9qZWN0TWFwJztcbmltcG9ydCBSZXNlYXJjaGVyQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Jlc2VhcmNoZXJDYXJkL1Jlc2VhcmNoZXJDYXJkJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgIFByb2plY3RNYXAuaW5pdCgpO1xuICAgIFJlc2VhcmNoZXJDYXJkLmluaXQoKTtcbiAgfSxcbiAgZmluYWxpemU6IGZ1bmN0aW9uIGZpbmFsaXplKCkge1xuICAgIC8vIEphdmFTY3JpcHQgdG8gYmUgZmlyZWQgb24gdGhlIGhvbWUgcGFnZSwgYWZ0ZXIgdGhlIGluaXQgSlNcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yb3V0ZXMvaG9tZS5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__camelCase__ = __webpack_require__(8);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/* ========================================================================\n * DOM-based Routing\n * Based on http://goo.gl/EUTi53 by Paul Irish\n *\n * Only fires on body classes that match. If a body class contains a dash,\n * replace the dash with an underscore when adding it to the object below.\n * ======================================================================== */\n\n\n\n// The routing fires all common scripts, followed by the page specific scripts.\n// Add additional events for more control over timing e.g. a finalize event\n\nvar Router = function () {\n  function Router(routes) {\n    _classCallCheck(this, Router);\n\n    this.routes = routes;\n  }\n\n  _createClass(Router, [{\n    key: 'fire',\n    value: function fire(route) {\n      var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'init';\n      var args = arguments[2];\n\n      var fire = route !== '' && this.routes[route] && typeof this.routes[route][fn] === 'function';\n      if (fire) {\n        this.routes[route][fn](args);\n      }\n    }\n  }, {\n    key: 'loadEvents',\n    value: function loadEvents() {\n      var _this = this;\n\n      // Fire common init JS\n      this.fire('common');\n\n      // Fire page-specific init JS, and then finalize JS\n      document.body.className.toLowerCase().replace(/-/g, '_').split(/\\s+/).map(__WEBPACK_IMPORTED_MODULE_0__camelCase__[\"a\" /* default */]).forEach(function (className) {\n        _this.fire(className);\n        _this.fire(className, 'finalize');\n      });\n\n      // Fire common finalize JS\n      this.fire('common', 'finalize');\n    }\n  }]);\n\n  return Router;\n}();\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Router);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlsL1JvdXRlci5qcz8zMzRmIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogRE9NLWJhc2VkIFJvdXRpbmdcbiAqIEJhc2VkIG9uIGh0dHA6Ly9nb28uZ2wvRVVUaTUzIGJ5IFBhdWwgSXJpc2hcbiAqXG4gKiBPbmx5IGZpcmVzIG9uIGJvZHkgY2xhc3NlcyB0aGF0IG1hdGNoLiBJZiBhIGJvZHkgY2xhc3MgY29udGFpbnMgYSBkYXNoLFxuICogcmVwbGFjZSB0aGUgZGFzaCB3aXRoIGFuIHVuZGVyc2NvcmUgd2hlbiBhZGRpbmcgaXQgdG8gdGhlIG9iamVjdCBiZWxvdy5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5pbXBvcnQgY2FtZWxDYXNlIGZyb20gJy4vY2FtZWxDYXNlJztcblxuLy8gVGhlIHJvdXRpbmcgZmlyZXMgYWxsIGNvbW1vbiBzY3JpcHRzLCBmb2xsb3dlZCBieSB0aGUgcGFnZSBzcGVjaWZpYyBzY3JpcHRzLlxuLy8gQWRkIGFkZGl0aW9uYWwgZXZlbnRzIGZvciBtb3JlIGNvbnRyb2wgb3ZlciB0aW1pbmcgZS5nLiBhIGZpbmFsaXplIGV2ZW50XG5cbnZhciBSb3V0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJvdXRlcihyb3V0ZXMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm91dGVyKTtcblxuICAgIHRoaXMucm91dGVzID0gcm91dGVzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJvdXRlciwgW3tcbiAgICBrZXk6ICdmaXJlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmlyZShyb3V0ZSkge1xuICAgICAgdmFyIGZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnaW5pdCc7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50c1syXTtcblxuICAgICAgdmFyIGZpcmUgPSByb3V0ZSAhPT0gJycgJiYgdGhpcy5yb3V0ZXNbcm91dGVdICYmIHR5cGVvZiB0aGlzLnJvdXRlc1tyb3V0ZV1bZm5dID09PSAnZnVuY3Rpb24nO1xuICAgICAgaWYgKGZpcmUpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXNbcm91dGVdW2ZuXShhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdsb2FkRXZlbnRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZEV2ZW50cygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIC8vIEZpcmUgY29tbW9uIGluaXQgSlNcbiAgICAgIHRoaXMuZmlyZSgnY29tbW9uJyk7XG5cbiAgICAgIC8vIEZpcmUgcGFnZS1zcGVjaWZpYyBpbml0IEpTLCBhbmQgdGhlbiBmaW5hbGl6ZSBKU1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8tL2csICdfJykuc3BsaXQoL1xccysvKS5tYXAoY2FtZWxDYXNlKS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgICAgX3RoaXMuZmlyZShjbGFzc05hbWUpO1xuICAgICAgICBfdGhpcy5maXJlKGNsYXNzTmFtZSwgJ2ZpbmFsaXplJyk7XG4gICAgICB9KTtcblxuICAgICAgLy8gRmlyZSBjb21tb24gZmluYWxpemUgSlNcbiAgICAgIHRoaXMuZmlyZSgnY29tbW9uJywgJ2ZpbmFsaXplJyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJvdXRlcjtcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3V0aWwvUm91dGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("// the most terrible camelizer on the internet, guaranteed!\n/* harmony default export */ __webpack_exports__[\"a\"] = (function (str) {\n  return '' + str.charAt(0).toLowerCase() + str.replace(/[\\W_]/g, '|').split('|').map(function (part) {\n    return '' + part.charAt(0).toUpperCase() + part.slice(1);\n  }).join('').slice(1);\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlsL2NhbWVsQ2FzZS5qcz8zZTg5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRoZSBtb3N0IHRlcnJpYmxlIGNhbWVsaXplciBvbiB0aGUgaW50ZXJuZXQsIGd1YXJhbnRlZWQhXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gJycgKyBzdHIuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBzdHIucmVwbGFjZSgvW1xcV19dL2csICd8Jykuc3BsaXQoJ3wnKS5tYXAoZnVuY3Rpb24gKHBhcnQpIHtcbiAgICByZXR1cm4gJycgKyBwYXJ0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcGFydC5zbGljZSgxKTtcbiAgfSkuam9pbignJykuc2xpY2UoMSk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy91dGlsL2NhbWVsQ2FzZS5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzPzBlMTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProjectMap_ProjectMap__ = __webpack_require__(2);\n\n\nvar projectOverlay = __WEBPACK_IMPORTED_MODULE_0__ProjectMap_ProjectMap__[\"a\" /* default */].projectOverlay;\n\n\nvar setupResearcherCards = function setupResearcherCards() {\n  var Buttons = document.getElementsByClassName('ResearcherCardOpenProject');\n\n  var _loop = function _loop(i) {\n    var Button = Buttons[i];\n    var slug = Button.dataset.project;\n    Button.addEventListener('click', function (e) {\n      e.preventDefault();\n      projectOverlay.open(slug);\n    });\n  };\n\n  for (var i = 0; i < Buttons.length; i++) {\n    _loop(i);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  init: setupResearcherCards\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jlc2VhcmNoZXJDYXJkL1Jlc2VhcmNoZXJDYXJkLmpzP2U4YjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3RNYXAgZnJvbSAnLi4vUHJvamVjdE1hcC9Qcm9qZWN0TWFwJztcblxudmFyIHByb2plY3RPdmVybGF5ID0gUHJvamVjdE1hcC5wcm9qZWN0T3ZlcmxheTtcblxuXG52YXIgc2V0dXBSZXNlYXJjaGVyQ2FyZHMgPSBmdW5jdGlvbiBzZXR1cFJlc2VhcmNoZXJDYXJkcygpIHtcbiAgdmFyIEJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdSZXNlYXJjaGVyQ2FyZE9wZW5Qcm9qZWN0Jyk7XG5cbiAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaSkge1xuICAgIHZhciBCdXR0b24gPSBCdXR0b25zW2ldO1xuICAgIHZhciBzbHVnID0gQnV0dG9uLmRhdGFzZXQucHJvamVjdDtcbiAgICBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcHJvamVjdE92ZXJsYXkub3BlbihzbHVnKTtcbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IEJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBfbG9vcChpKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBzZXR1cFJlc2VhcmNoZXJDYXJkc1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvUmVzZWFyY2hlckNhcmQvUmVzZWFyY2hlckNhcmQuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);