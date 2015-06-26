require.config({
  baseUrl: "./js",
  paths: {
    "Vector": "./modules/Universe/VectorModule",
    "Grid": "./modules/Universe/grid",
    "LifelikeWorld": "./modules/Universe/lifelikeWorld",
    "Plan": "./modules/Universe/plan",
    "View": "./modules/Universe/ViewModule",
    "World": "./modules/Universe/world",
    "Plant": "./modules/Entity/plant",
    "PlantEater": "./modules/Entity/plantEater",
    "Tiger": "./modules/Entity/tiger",
    "AnimateWorld": "../animateworld"
  }
});

requirejs(['AnimateWorld', 'Plan'],
  function(animate, valley){
    animateWorld();
  }
);