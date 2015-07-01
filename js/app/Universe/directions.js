/**
 * @license eLife 1.0 Copyright (c) 2015, Valeriy Abornyev All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/drwebmaker/eloquent-electronic-life for details
 */

define(function (require) {

  var Vector = require('Vector');

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

  return directions;

});