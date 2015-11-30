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

	function _prepare_params (defaults, signature, args) {
	  var params = defaults || {};
	  var i;
	  if (!args || !args.length || !signature  || !signature.length) {
	    return params;
	  }
	  if (typeof args[0] == 'object') {
	    for (i = 0; i < signature.length; i++) {
	      var key = signature[i];
	      if (key in args[0])
	        params[key] = args[0][key];
	    }
	  } else {
	    for (i = 0; i < Math.min(signature.length, args.length); i++) {
	      params[signature[i]] = args[i];
	    }
	  }
	  return params;
	}

	Needlex.getAngle = function () {
	  var params = _prepare_params({
	    min: 0,
	    max: 100,
	    degrees: false,
	    overflow: false,
	    val: 0
	  }, ['val', 'max', 'min', 'overflow', 'degrees'], arguments);

	  if (!params.overflow) {
	    if (params.val <= params.min)
	      return 0;
	    if (params.val >= params.max)
	      return params.degrees ? 180.0 : Math.PI;
	  }

	  return (params.degrees ? 180.0 : Math.PI) * (params.val - params.min) / (params.max - params.min);
	};

	Needlex.getCoordinates = function () {
	  var params = _prepare_params({
	    x0: 100,
	    y0: 100,
	    r: 100,
	    angle: 0,
	    degrees: false,
	  }, ['angle', 'r', 'x0', 'y0', 'degrees'], arguments);

	  if (params.degrees) {
	    params.angle = params.angle / 180 * Math.PI;
	  }

	  return {
	    x: params.x0 - params.r * Math.cos(params.angle),
	    y: params.y0 - params.r * Math.sin(params.angle)
	  }

	};

	module.exports = Needlex;


/***/ }
/******/ ]);