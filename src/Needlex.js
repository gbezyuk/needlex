var Needlex = {};
var yanus = require('yanus');

Needlex.getAngle = function () {
  var params = yanus({
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
  var params = yanus({
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
  var params = yanus({
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

  function animator () {
    current_step ++;
    current_value += delta;
    coords = Needlex.getCoordinates(
      Needlex.getAngle(current_value, params.max_value, params.min_value),
      params.r, params.x0, params.y0);
    if (typeof(params.on_animation) == 'function') {
      params.on_animation(coords, current_value, current_step, params);
    }
    if (current_step >= params.steps) {
      if (typeof(params.on_finish) == 'function') {
        params.on_finish(coords, params);
      }
    } else {
      requestAnimationFrame(animator);
    }
  }

  requestAnimationFrame(animator);
};

try {
  module.exports = Needlex;
} catch (e) {
  console.log('running in browser');
}
