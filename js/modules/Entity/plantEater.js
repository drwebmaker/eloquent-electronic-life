define(function(require){

    var Vector = require('Vector');
    var View = require('View');

    function PlantEater() {
      this.energy = 30;
      this.direction = View.randomElement(Object.keys(Vector.directions));
      this.eatCounter = 1;
    }
    PlantEater.prototype = {
      act: function(view) {
        var space = view.find(' ');
        if (this.energy > 60 && space) {
          return {type: 'reproduce', direction: View.randomElement(space)};
        }

        var plant = view.findAll('*');
        if (plant.length > 1) {

          if (this.eatCounter >= 0) {
            this.eatCounter = 0;
            return {type: "eat", direction: View.randomElement(plant)};
          } else {
            this.eatCounter++;
          }
        }

        if (space) {

          var spaces = view.findAll(' ');
          if (spaces.indexOf(this.direction) == -1) {
            this.direction = space;
          }
          return {type: 'move', direction: this.direction};
        }
        else {
          this.direction = 's';
        }
      }
    };

    return {
      PlantEater: PlantEater
    };
  }
);