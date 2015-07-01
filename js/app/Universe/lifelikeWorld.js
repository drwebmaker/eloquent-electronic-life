/**
 * @license eLife 1.0 Copyright (c) 2015, Valeriy Abornyev All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/drwebmaker/eloquent-electronic-life for details
 */

define(function(require){

  var View = require('View'),
      World = require('World'),
      help = require('helperElements');
  
  function LifelikeWorld(map, legend) {
    World.call(this, map, legend);
  }

  LifelikeWorld.prototype = Object.create(World.prototype);

  LifelikeWorld.prototype.letAct = function(critter, vector) {
    var action = critter.act(new View(this, vector));
    var handled = action &&
      action.type in actionTypes &&
      actionTypes[action.type].call(this, critter,
        vector, action);
    if (!handled) {
      critter.energy -= 0.2;
      if (critter.energy <= 0)
        this.grid.set(vector, null);
    }

  };

  var actionTypes = Object.create(null);

  actionTypes = {

    grow: function(critter) {
      critter.energy += 0.5;
      return true;
    },

    move: function(critter, vector, action) {
      var dest = this.checkDestination(action, vector);
      if (dest == null ||
        critter.energy <= 1 ||
        this.grid.get(dest) != null)
        return false;
      critter.energy -= 1;
      this.grid.set(vector, null);
      this.grid.set(dest, critter);
      return true;
    },

    eat: function(critter, vector, action) {
      var dest = this.checkDestination(action, vector);
      var atDest = dest != null && this.grid.get(dest);
      if (!atDest || atDest.energy == null)
        return false;
      critter.energy += atDest.energy;
      this.grid.set(dest, null);
      return true;
    },

    reproduce: function(critter, vector, action) {
      var baby = help.elementFromChar(this.legend,
        critter.originChar);
      var dest = this.checkDestination(action, vector);
      if (dest == null ||
        critter.energy <= 2 * baby.energy ||
        this.grid.get(dest) != null)
        return false;
      critter.energy -= 2 * baby.energy;
      this.grid.set(dest, baby);
      return true;
    }

  };

  return LifelikeWorld;
});