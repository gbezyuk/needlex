# Needlex
A set of tools for speedometer-needle-like animations with javascript
[![Build Status](https://travis-ci.org/gbezyuk/needlex.png?branch=master)](https://travis-ci.org/gbezyuk/needlex)

## How to use

```
Needlex = require('Needlex');
Needlex.getAngle(50); // Math.PI/2
Needlex.getAngle(40, 120); // Math.PI/3
```

## API

### getAngle(value=0, max=100, min=0, oveflow=false, degrees=false)
Returns angle value (in radians or in degrees) for the value and meter limits provided.
Both plain arguments and params object approaches allowed.

Examples:
```
Needlex.getAngle(); // 0
Needlex.getAngle(50); // Math.PI/2
Needlex.getAngle(40, 120); // Math.PI/3
Needlex.getAngle({val: 150, overflow: true, degrees: true}); // 270.0
```

See test/getAngle.js for more examples.


### getCoordinates(angle=0, r=100, x0=100, y0=100, degrees=false)
Returns {x,y} coordinates for the angle, coordinates and measures provided.
Both plain arguments and params object approaches allowed.

Examples:
```
Needlex.getCoordinates(0); // {x: 0, y: 100}
Needlex.getCoordinates(Math.PI); // {x: 200, y: 100}
Needlex.getCoordinates(Math.PI*.5); // {x: 100, y: 0}
```

See test/getCoordinates.js for more examples.
