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
