(function (module) {
  function View(world, vector) {
    this.world = world;
    this.vector = vector;
  }

  View.prototype = {
    look: function(dir) {
      var target = this.vector.plus(module.directions[dir]);
      if (this.world.grid.isInside(target))
        return charFromElement(this.world.grid.get(target));
      else
        return '#';
    },
    findAll: function(ch) {
      var found = [];
      for (var dir in module.directions)
        if (this.look(dir) == ch)
          found.push(dir);
      return found;
    },
    find: function(ch) {
      var found = this.findAll(ch);
      if (found.length == 0) return null;
      return randomElement(found);
    }
  };

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

  module.View = View;
  module.randomElement = randomElement;
  module.elementFromChar = elementFromChar;
  module.charFromElement = charFromElement;

}(elife));