function SmartPlantEater() {
  this.energy = 30;
  this.direction = randomElement(Object.keys(directions));
  this.eatCounter = 1;
}
SmartPlantEater.prototype.act = function(view) {
  var space = view.find(' ');
  if (this.energy > 60 && space) {
    //console.log('reproduce');
    return {type: 'reproduce', direction: randomElement(space)};
  }

  var plant = view.findAll('*');
  if (plant.length > 1) {

    if (this.eatCounter >= 0) {
      this.eatCounter = 0;
      //console.log('eat');
      return {type: "eat", direction: randomElement(plant)};
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
};

//var valley = new LifelikeWorld(
//  ['############################',
//    '#####                 ######',
//    '##   ***                **##',
//    '#   *##**         **  O  *##',
//    '#    ***     O    ##**    *#',
//    '#       O         ##***    #',
//    '#                 ##**     #',
//    '#   O       #*             #',
//    '#*          #**       O    #',
//    '#***        ##**    O    **#',
//    '##****     ###***       *###',
//    '############################'],
//  {'#': Wall,
//    'O': SmartPlantEater,
//    '*': Plant}
//);