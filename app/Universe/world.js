(function(module) {
    function World(map, legend) {
      var grid = new module.Grid(map[0].length, map.length);
      this.grid = grid;
      this.legend = legend;
      console.log(grid.toString());

      map.forEach(function(line, y) {
        for (var x = 0; x < line.length; x++)
          grid.set(new module.Vector(x, y),
            module.elementFromChar(legend, line[x]));
      });
    }

    World.prototype = {
      toString: function() {
        var output = '';
        for (var y = 0; y < this.grid.height; y++) {
          for (var x = 0; x < this.grid.width; x++) {
            var element = this.grid.get(new module.Vector(x, y));
            output += module.charFromElement(element);
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
        var action = critter.act(new module.View(this, vector));
        if (action && action.type == 'move') {
          var dest = this.checkDestination(action, vector);
          if (dest && this.grid.get(dest) == null) {
            this.grid.set(vector, null);
            this.grid.set(dest, critter);
          }
        }
      },
      checkDestination: function(action, vector) {
        if (module.directions.hasOwnProperty(action.direction)) {
          var dest = vector.plus(module.directions[action.direction]);
          if (this.grid.isInside(dest))
            return dest;
        }
      }
    };

    function Wall() {}

    module.Wall = Wall;
    module.World = World;
  }(elife));