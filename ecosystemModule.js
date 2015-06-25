var EcosystemModule = (function () {
  function Wall() {}

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


//---------------------------------PlantEater--------------------------
  function PlantEater() {
    this.energy = 20;
  }

  PlantEater.prototype = {
    act: function (context) {
      var space = context.find(' ');
      if (this.energy > 60 && space)
        return {type: 'reproduce', direction: space};
      var plant = context.find('*');
      if (plant)
        return {type: 'eat', direction: plant};
      if (space)
        return {type: 'move', direction: space};
    }
  };


//---------------------------------SmartPlantEater----------------------------
  function SmartPlantEater() {
    this.energy = 30;
    this.direction = WorldModule.randomElement(Object.keys(GridModule.directions));
    this.eatCounter = 1;
  }
  SmartPlantEater.prototype = {
    act: function(view) {
      var space = view.find(' ');
      if (this.energy > 60 && space) {
        //console.log('reproduce');
        return {type: 'reproduce', direction: WorldModule.randomElement(space)};
      }

      var plant = view.findAll('*');
      if (plant.length > 1) {

        if (this.eatCounter >= 0) {
          this.eatCounter = 0;
          //console.log('eat');
          return {type: "eat", direction: WorldModule.randomElement(plant)};
        } else {
          this.eatCounter++;
        }
      }

      if (space) {

        var spaces = view.findAll(' ');
        if (spaces.indexOf(this.direction) == -1) {
          this.direction = space;
        }
        //console.log('move');
        return {type: 'move', direction: this.direction};
      }
      else {
        this.direction = 's';
      }
    }
  };



//------------------------------Tiger-----------------------------------
  function Tiger() {
    this.energy = 60;
    this.direction = WorldModule.randomElement(Object.keys(VectordModule.directions));
    this.eatCounter = 1;
  }
  Tiger.prototype = {
    act: function (view) {
      var space = view.find(' ');
      var critter = view.find('O');
      var plant = view.find('*');

      if (critter) {
        var critters = view.findAll('O');
        if (critters.length > 2) {
          return {type: 'move', direction: this.direction};
        }
        else {
          return {type: 'eat', direction: critter};
        }
      }

      if (this.energy > 120 && space) {
        return {type: 'reproduce', direction: WorldModule.randomElement(space)};
      }

      if (space) {
        var spaces = view.findAll(' ');
        if (spaces.indexOf(this.direction) == -1) {
          this.direction = space;
        }
        return {type: 'move', direction: this.direction};
      } else {
        this.direction = 's';
      }

      if (plant) {
        if (this.energy < 40) {
          return {type: 'eat', direction: WorldModule.randomElement(plant)};
        }
      }

    }
  };

  return {
    Wall: Wall,
    Plant: Plant,
    PlantEater: PlantEater,
    SmartPlantEater: SmartPlantEater,
    Tiger: Tiger
  }
}());
