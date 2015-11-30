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
      params.degrees = params_provided.degrees;
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
      return params.degrees ? 180.0 : Math.PI;
  }

  return (params.degrees ? 180.0 : Math.PI) * (params.val - params.min) / (params.max - params.min);
};


module.exports = Needlex;
