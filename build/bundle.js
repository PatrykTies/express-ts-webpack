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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, main, scripts, license, devDependencies, dependencies, default */
/***/ (function(module) {

eval("module.exports = {\"name\":\"tswebpack\",\"version\":\"1.0.1\",\"main\":\"index.js\",\"scripts\":{\"clean\":\"rimraf build\",\"prestart\":\"npm run clean\",\"start\":\"webpack --watch --config webpack.config.js\"},\"license\":\"MIT\",\"devDependencies\":{\"@types/body-parser\":\"^1.17.0\",\"@types/dotenv\":\"^6.1.0\",\"@types/express\":\"^4.16.1\",\"nodemon\":\"^1.18.10\",\"rimraf\":\"^2.6.3\",\"ts-loader\":\"^5.3.3\",\"ts-node\":\"^8.0.2\",\"tslint\":\"^5.12.1\",\"typescript\":\"^3.3.3\",\"webpack\":\"^4.29.4\",\"webpack-cli\":\"^3.2.3\",\"webpack-shell-plugin\":\"^0.5.0\"},\"dependencies\":{\"body-parser\":\"^1.18.3\",\"dotenv\":\"^6.2.0\",\"express\":\"^4.16.4\"}};\n\n//# sourceURL=webpack:///./package.json?");

/***/ }),

/***/ "./src/app.express.ts":
/*!****************************!*\
  !*** ./src/app.express.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express = __webpack_require__(/*! express */ \"express\");\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nconst home_routes_1 = __webpack_require__(/*! ./gateways/home.routes */ \"./src/gateways/home.routes.ts\");\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\ndotenv.config();\nclass App {\n    constructor() {\n        this.routePrv = new home_routes_1.Routes();\n        this.app = express();\n        this.config();\n        this.routePrv.routes(this.app);\n    }\n    config() {\n        this.app.set('port', process.env.PORT || 3000);\n        this.app.set('env', process.env.DEV || 'development');\n        this.app.use(bodyParser.json());\n        this.app.use(bodyParser.urlencoded({ extended: true }));\n        this.app.use(express.static('public'));\n    }\n}\nexports.default = new App().app;\n\n\n//# sourceURL=webpack:///./src/app.express.ts?");

/***/ }),

/***/ "./src/controllers/home.controller.ts":
/*!********************************************!*\
  !*** ./src/controllers/home.controller.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst pkg = __webpack_require__(/*! ../../package.json */ \"./package.json\");\nclass HomeController {\n    getContacts(req, res) {\n        res.json({\n            message: 'Welcome to API sekeleton.',\n            version: pkg.version,\n        });\n    }\n}\nexports.HomeController = HomeController;\n\n\n//# sourceURL=webpack:///./src/controllers/home.controller.ts?");

/***/ }),

/***/ "./src/gateways/home.routes.ts":
/*!*************************************!*\
  !*** ./src/gateways/home.routes.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst home_controller_1 = __webpack_require__(/*! ../controllers/home.controller */ \"./src/controllers/home.controller.ts\");\nclass Routes {\n    constructor() {\n        this.homeController = new home_controller_1.HomeController();\n    }\n    routes(app) {\n        app.route('/')\n            .get(this.homeController.getContacts);\n    }\n}\nexports.Routes = Routes;\n\n\n//# sourceURL=webpack:///./src/gateways/home.routes.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst app_express_1 = __webpack_require__(/*! ./app.express */ \"./src/app.express.ts\");\napp_express_1.default.listen(app_express_1.default.get('port'), () => {\n    console.log(('App is running at http://localhost:%d in %s mode'), app_express_1.default.get('port'), app_express_1.default.get('env'));\n    console.log('Press CTRL-C to stop\\n');\n});\n\n\n//# sourceURL=webpack:///./src/server.ts?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ })

/******/ });