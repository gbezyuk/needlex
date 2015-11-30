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

Needlex.animateNeedle = function () {
  var params = _prepare_params({
    x0: 100,
    y0: 100,
    r: 100,
    start_value: 0,
    target_value: 90,
    max_value: 90,
    min_value: 90,
    steps: 50,
    on_animation: null,
    on_finish: null
  }, ['x0', 'y0', 'r', 'start_value', 'target_value', 'max_value', 'min_value',
  'steps', 'on_animation', 'on_finish'], arguments);

  var current_step = 0;
  var current_value = params.start_value;
  var delta = (params.target_value - params.start_value) / params.steps;
  var coords = Needlex.getCoordinates(
    Needlex.getAngle(current_value, params.max_value, params.min_value),
    params.r, params.x0, params.y0);
  var t = setInterval(function () {
    current_step ++;
    current_value += delta;
    coords = Needlex.getCoordinates(
      Needlex.getAngle(current_value, params.max_value, params.min_value),
      params.r, params.x0, params.y0);
    if (typeof(params.on_animation) == 'function') {
      params.on_animation(coords, current_value, current_step, params);
    }
    if (current_step >= params.steps) {
      clearInterval(t);
      if (typeof(params.on_finish) == 'function') {
        params.on_finish(coords, params);
      }
    }
  }, 10);
  // TODO: speed control, requestAnimationFrame (?)
};

try {
  module.exports = Needlex;
} catch (e) {
  console.log('running in browser');
}
