(function(module){
  function Tiger() {
    this.energy = 60;
    this.direction = module.randomElement(Object.keys(module.directions));
    this.eatCounter = 1;
  }
  Tiger.prototype = {
    act: function (context) {
      var space = context.find(' ');
      var critter = context.find('O');
      var plant = context.find('*');

      if (critter) {
        var critters = context.findAll('O');
        if (critters.length > 2) {
          return {type: 'move', direction: this.direction};
        }
        else {
          return {type: 'eat', direction: critter};
        }
      }

      if (this.energy > 120 && space) {
        return {type: 'reproduce', direction: module.randomElement(space)};
      }

      if (space) {
        var spaces = context.findAll(' ');
        if (spaces.indexOf(this.direction) == -1) {
          this.direction = space;
        }
        return {type: 'move', direction: this.direction};
      } else {
        this.direction = 's';
      }

      if (plant) {
        if (this.energy < 10) {
          return {type: 'eat', direction: plant};
        }
      }

    }
  };

  module.Tiger = Tiger;
}(elife));