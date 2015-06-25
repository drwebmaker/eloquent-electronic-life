var WorldModule = (function (root, world) {

  function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function elementFromChar(legend, ch) {
    if (ch == ' ')
      return null;
    var element = new legend[ch]();
    element.originChar = ch;
    return element;
  }

  function charFromElement(element) {
    if (element == null)
      return ' ';
    else
      return element.originChar;
  }




//------------------------------LifelikeWorld-------------------------------------
  function LifelikeWorld(map, legend) {
    world.call(this, map, legend);
  }

  LifelikeWorld.prototype = Object.create(world.prototype);

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
      var baby = elementFromChar(this.legend,
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

  return {
    randomElement: randomElement,
    LifelikeWorld: LifelikeWorld,
    elementFromChar: elementFromChar,
    charFromElement: charFromElement
  }

}(GridModule, WORLD));