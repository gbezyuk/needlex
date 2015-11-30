var assert = require('assert');
var Needlex = require('../src/Needlex');

var PI = Math.PI;

describe('Needlex', function() {
  describe('#getAngle()', function () {
    it('should behave correctly for default limits and values within them', function () {
      assert.equal(PI/2, Needlex.getAngle(50));
      assert.equal(PI/4, Needlex.getAngle(25));
    });

    it('should overflow by default with default limits', function () {
      assert.equal(0, Needlex.getAngle(0));
      assert.equal(0, Needlex.getAngle(-10));
      assert.equal(0, Needlex.getAngle(-100));
      assert.equal(PI, Needlex.getAngle(100));
      assert.equal(PI, Needlex.getAngle(110));
      assert.equal(PI, Needlex.getAngle(1100));
    });

    it('should behave correctly with overflow enabled', function () {
      assert.equal(0, Needlex.getAngle(0, 100, 0, true));
      assert.equal(-PI*2, Needlex.getAngle(-100, 50, 0, true));
      assert.equal(-PI, Needlex.getAngle(-100, 100, 0, true));
      assert.equal(PI, Needlex.getAngle(100, 100, 0, true));
      assert.equal(PI*3, Needlex.getAngle(150, 50, 0, true));
      assert.equal(PI*2, Needlex.getAngle(200, 100, 0, true));
    });

    it('should behave correctly with custom limits', function () {
      assert.equal(PI/4, Needlex.getAngle(50, 200));
      assert.equal(PI/2, Needlex.getAngle(25, 50));
      assert.equal(0, Needlex.getAngle(0, 50));
      assert.equal(0, Needlex.getAngle(-10, 50));
      assert.equal(-PI/2, Needlex.getAngle(-25, 50, 0, true));
      assert.equal(PI*2, Needlex.getAngle(100, 50, 0, true));
      assert.equal(PI/2, Needlex.getAngle(150, 200, 100));
      assert.equal(PI/2, Needlex.getAngle(75, 100, 50));
      assert.equal(0, Needlex.getAngle(50, 100, 50));
      assert.equal(0, Needlex.getAngle(30, 100, 50));
      assert.equal(0, Needlex.getAngle(0, 100, 50));
      assert.equal(0, Needlex.getAngle(-10, 100, 50));
      assert.equal(0, Needlex.getAngle(50, 100, 50, true));
      assert.equal(-PI/2, Needlex.getAngle(25, 100, 50, true));
      assert.equal(-PI, Needlex.getAngle(0, 100, 50, true));
      assert.equal(-PI*1.5, Needlex.getAngle(-25, 100, 50, true));
      assert.equal(PI, Needlex.getAngle(100, 100, 50, true));
      assert.equal(PI*1.5, Needlex.getAngle(125, 100, 50, true));
      assert.equal(PI*2, Needlex.getAngle(150, 100, 50, true));
      assert.equal(PI*3, Needlex.getAngle(200, 100, 50, true));
      assert.equal(-PI, Needlex.getAngle(0, 100, 50, true));
    });

    it('should behave correctly with degrees', function () {
      assert.equal(45.0, Needlex.getAngle(50, 200, 0, false, true));
      assert.equal(90.0, Needlex.getAngle(25, 50, 0, false, true));
      assert.equal(0, Needlex.getAngle(0, 50, 0, false, true));
      assert.equal(0, Needlex.getAngle(-10, 50, 0, false, true));
      assert.equal(-90.0, Needlex.getAngle(-25, 50, 0, true, true));
      assert.equal(360.0, Needlex.getAngle(100, 50, 0, true, true));
      assert.equal(90.0, Needlex.getAngle(150, 200, 100, false, true));
      assert.equal(90.0, Needlex.getAngle(75, 100, 50, false, true));
      assert.equal(0, Needlex.getAngle(50, 100, 50, false, true));
      assert.equal(0, Needlex.getAngle(30, 100, 50, false, true));
      assert.equal(0, Needlex.getAngle(0, 100, 50, false, true));
      assert.equal(0, Needlex.getAngle(-10, 100, 50, false, true));
      assert.equal(0, Needlex.getAngle(50, 100, 50, true, true));
      assert.equal(-90.0, Needlex.getAngle(25, 100, 50, true, true));
      assert.equal(-180.0, Needlex.getAngle(0, 100, 50, true, true));
      assert.equal(-270.0, Needlex.getAngle(-25, 100, 50, true, true));
      assert.equal(180.0, Needlex.getAngle(100, 100, 50, true, true));
      assert.equal(270.0, Needlex.getAngle(125, 100, 50, true, true));
      assert.equal(360.0, Needlex.getAngle(150, 100, 50, true, true));
      assert.equal(540.0, Needlex.getAngle(200, 100, 50, true, true));
      assert.equal(-180.0, Needlex.getAngle(0, 100, 50, true, true));
    });

    it('should respect both argument styles the same way', function () {
      assert.equal(
        Needlex.getAngle({
          val: -50,
          max: 100,
          min: 50,
          overflow: true,
          degrees: true
        }),
        Needlex.getAngle(-50, 100, 50, true, true)
      );
      assert.equal(
        Needlex.getAngle({
          val: 50,
          max: 100,
          min: 50,
          overflow: false,
          degrees: true
        }),
        Needlex.getAngle(50, 100, 50, false, true)
      );
      assert.equal(
        Needlex.getAngle({
          val: 75,
          max: 100,
          min: 50,
          overflow: false,
          degrees: false
        }),
        Needlex.getAngle(75, 100, 50, false, false)
      );
    });
  });
});
