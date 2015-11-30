# Needlex
A set of tools for speedometer-needle-like animations with javascript

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
Needlex.getAngle({val: 150, oveflow: true, degrees: true}); // 270.0
```

See test/getAngle.js for more examples.
