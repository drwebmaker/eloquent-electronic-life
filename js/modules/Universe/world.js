define('World', ['Grid', 'Vector', 'View'], function(gridM, vectorM, view) {
  function World(map, legend) {
    var grid = new gridM.Grid(map[0].length, map.length);
    this.grid = grid;
    this.legend = legend;

    map.forEach(function(line, y) {
      for (var x = 0; x < line.length; x++)
        grid.set(new vectorM.Vector(x, y),
          view.elementFromChar(legend, line[x]));
    });
  }

  World.prototype = {
    toString: function() {
      var output = '';
      for (var y = 0; y < this.grid.height; y++) {
        for (var x = 0; x < this.grid.width; x++) {
          var element = this.grid.get(new vectorM.Vector(x, y));
          output += view.charFromElement(element);
        }
        output += '\n';
      }
      return output;
    },
    turn: function() {
      var acted = [];
      this.grid.forEach(function(critter, vector) {
        if (critter.act && acted.indexOf(critter) == -1) {
          acted.push(critter);
          this.letAct(critter, vector);
        }
      }, this);
    },
    letAct: function(critter, vector) {
      var action = critter.act(new view.View(this, vector));
      if (action && action.type == 'move') {
        var dest = this.checkDestination(action, vector);
        if (dest && this.grid.get(dest) == null) {
          this.grid.set(vector, null);
          this.grid.set(dest, critter);
        }
      }
    },
    checkDestination: function(action, vector) {
      if (vectorM.directions.hasOwnProperty(action.direction)) {
        var dest = vector.plus(vectorM.directions[action.direction]);
        if (this.grid.isInside(dest))
          return dest;
      }
    }
  };

  function Wall() {}

  return {
    Wall: Wall,
    World: World
  };

});