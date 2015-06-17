function Tiger() {
  this.energy = 60;
  this.direction = randomElement(Object.keys(directions));
}
Tiger.prototype.act = function (view) {
  var space = view.find(' ');
  var critter = view.find('O');
  var plant = view.find('*');

  if (critter) {
    return {type: 'eat', direction: critter};
  }

  if (this.energy > 140 && space) {
    //console.log('reproduce');
    return {type: 'reproduce', direction: randomElement(space)};
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
      //console.log('eat plant');
      return {type: 'eat', direction: randomElement(plant)};
    }
  }

};


