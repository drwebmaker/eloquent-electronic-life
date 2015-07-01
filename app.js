var elife = require('./js/modules/Universe/plan');

setInterval(function() {
  elife.turn();
  console.log(elife.toString());
},200);

