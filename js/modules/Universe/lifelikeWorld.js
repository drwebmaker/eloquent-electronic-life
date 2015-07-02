  var View = require('./ViewModule');
  var World = require('./world');
  
  function LifelikeWorld(map, legend) {
    World.World.call(this, map, legend);
  }

  LifelikeWorld.prototype = Object.create(World.World.prototype);

  LifelikeWorld.prototype.letAct = function(critter, vector) {
    var action = critter.act(new View.View(this, vector));
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
      var baby = View.elementFromChar(this.legend,
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

  module.exports = LifelikeWorld;