/**
 * @license eLife 1.0 Copyright (c) 2015, Valeriy Abornyev All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/drwebmaker/eloquent-electronic-life for details
 */

require.config({
  baseUrl: "./js/app",
  paths: {
    "Vector": "./Universe/Vector",
    "Grid": "./Universe/Grid",
    "LifelikeWorld": "./Universe/lifelikeWorld",
    "Plan": "./Universe/Plan",
    "View": "./Universe/View",
    "World": "./Universe/World",
    "helperElements": "./Universe/helperElements",
    "map": "./Universe/map",
    "Plant": "./Entity/Plant",
    "PlantEater": "./Entity/PlantEater",
    "Tiger": "./Entity/Tiger",
    "AnimateWorld": "./Universe/animateworld",
    "directions": "./Universe/directions"
  }
});

requirejs(['AnimateWorld'],
  function(animateWorld){}
);