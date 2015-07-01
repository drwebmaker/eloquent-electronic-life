/**
 * @license eLife 1.0 Copyright (c) 2015, Valeriy Abornyev All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/drwebmaker/eloquent-electronic-life for details
 */

define(function () {

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

  return Vector;

});