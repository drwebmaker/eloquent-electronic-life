/**
 * @license eLife 1.0 Copyright (c) 2015, Valeriy Abornyev All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/drwebmaker/eloquent-electronic-life for details
 */

define(
  function(){
    function Plant() {
      this.energy = 3 + Math.random() * 4;
    }

    Plant.prototype = {
      act: function (context) {
        if (this.energy > 20) {
          var space = context.find(' ');
          if (space)
            return {type: 'reproduce', direction: space};
        }
        if (this.energy < 30)
          return {type: 'grow'};
      }
    };

    return Plant;
  }
);

