var chai = require('chai');
chai.use(require('chai-shallow-deep-almost-equal'));
assert = chai.assert;
var Needlex = require('../src/Needlex');

var PI = Math.PI;

describe('Needlex', function() {
  describe('#getCoordinates()', function () {
    it('should behave correctly for default limits and values within them', function () {
      assert.shallowDeepAlmostEqual({x: 0, y: 100}, Needlex.getCoordinates(0));
      assert.shallowDeepAlmostEqual({x: 200, y: 100}, Needlex.getCoordinates(PI));
      assert.shallowDeepAlmostEqual({x: 100, y: 0}, Needlex.getCoordinates(PI*.5));
      assert.shallowDeepAlmostEqual({x: 100 * (1 - Math.sqrt(2)/2), y: 100 * (1 - Math.sqrt(2)/2)}, Needlex.getCoordinates(PI*.25));
      assert.shallowDeepAlmostEqual({x: 100 * (1 + Math.sqrt(2)/2), y: 100 * (1 - Math.sqrt(2)/2)}, Needlex.getCoordinates(PI*.75));
    });
  });
});
