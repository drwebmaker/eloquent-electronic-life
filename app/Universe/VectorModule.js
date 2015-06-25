var VectordModule = (function () {

  function Vector(x, y) {
    this.x = x;
    this.y = y;
  }
  Vector.prototype = {
    plus: function(other) {
      return new Vector(this.x + other.x, this.y + other.y);
    },
    toString: function() {
      return 'VECTOR: X: ' + this.x + ' Y: ' + this.y;
    }
  };



  var directions = {
    'n':  new Vector( 0, -1),
    'ne': new Vector( 1, -1),
    'e':  new Vector( 1,  0),
    'se': new Vector( 1,  1),
    's':  new Vector( 0,  1),
    'sw': new Vector(-1,  1),
    'w':  new Vector(-1,  0),
    'nw': new Vector(-1, -1)
  };

  var directionNames = 'n ne e se s sw w nw'.split(' ');



  return {
    Vector: Vector,
    directions: directions,
    directionNames: directionNames
  }
}());