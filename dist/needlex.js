/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	var Needlex = {};

	Needlex.getAngle = function () {
	  var params = {
	    min: 0,
	    max: 100,
	    degrees: false,
	    overflow: false,
	    val: 0
	  };

	  if (!arguments.length) {
	    return 0;
	  }

	  if (typeof(arguments[0]) == 'object') {
	    var params_provided = arguments[0];
	    if ('min' in params_provided)
	      params.min = params_provided.min;
	    if ('max' in params_provided)
	      params.max = params_provided.max;
	    if ('degrees' in params_provided)
	      params.degreees = params_provided.degrees;
	    if ('overflow' in params_provided)
	      params.overflow = params_provided.overflow;
	    if ('val' in params_provided)
	      params.val = params_provided.val;
	  } else {
	    if (arguments.length >= 1)
	      params.val = arguments[0];
	    if (arguments.length >= 2)
	      params.max = arguments[1];
	    if (arguments.length >= 3)
	      params.min = arguments[2];
	    if (arguments.length >= 4)
	      params.overflow = arguments[3];
	    if (arguments.length >= 5)
	      params.degrees = arguments[4];
	  }

	  if (!params.overflow) {
	    if (params.val <= params.min)
	      return 0;
	    if (params.val >= params.max)
	      return params.degrees ? 180 : Math.PI;
	  }

	  return (params.degrees ? 180.0 : Math.PI) * (params.val - params.min) / (params.max - params.min);
	};


	module.exports = Needlex;


/***/ }
/******/ ]);