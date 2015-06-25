(function(module){
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

  module.Plant = Plant;
}(elife));