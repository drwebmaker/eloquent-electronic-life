var elife = require('./js/modules/Universe/plan');
//var world = require('./js/modules/Universe/world');


function refreshMap() {
  elife.turn();
  console.log(elife.toString());
}

function live() {
  for (var count = 0; count < 10; count++) {
    refreshMap();
  }
}

console.log(live());