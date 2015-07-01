/**
 * @license eLife 1.0 Copyright (c) 2015, Valeriy Abornyev All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/drwebmaker/eloquent-electronic-life for details
 */

define(function(require){

    var Tiger = require('Tiger'),
      World = require('World'),
      PlantEater = require('PlantEater'),
      Plant = require('Plant'),
      LifelikeWorld = require('LifelikeWorld'),
      plan = require('map');

    function Wall() {}

    var description = {
      '#': Wall,
      '@': Tiger,
      'O': PlantEater,
      '*': Plant
    };

    var valley = new LifelikeWorld(
      plan, description);

    return valley;

  }

);