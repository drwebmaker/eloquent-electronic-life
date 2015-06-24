var SimpleEcosystemModule = (function () {

  function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function dirPlus(dir, n) {
    var index = GridModule.directionNames.indexOf(dir);
    return GridModule.directionNames[(index + n + 8) % 8];
  }

  function Wall() {}

  function WallFollower() {
    this.dir = 's';
  }

  WallFollower.prototype = {
    act: function(view) {
      var start = this.dir;
      if (view.look(dirPlus(this.dir, -3)) != ' ')
        start = this.dir = dirPlus(this.dir, -2);
      while (view.look(this.dir) != ' ') {
        this.dir = dirPlus(this.dir, 1);
        if (this.dir == start) break;
      }
      return {type: 'move', direction: this.dir};
    }
  };


  function BouncingCritter() {
    this.direction = randomElement(GridModule.directionNames);
  }

  BouncingCritter.prototype = {
    act: function(view) {
      if (view.look(this.direction) != ' ')
        this.direction = view.find(' ') || 's';
      return {type: 'move', direction: this.direction};
    }
  };

  return {
    Wall: Wall,
    randomElement: randomElement,
    dirPlus: dirPlus,
    WallFollower: WallFollower,
    BouncingCritter: BouncingCritter
  }
}());














