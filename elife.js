var valley = new WorldModule.LifelikeWorld(
  plan,
  {'#':  EcosystemModule.Wall,
    '@': EcosystemModule.Tiger,
    'O': EcosystemModule.SmartPlantEater,
    '*': EcosystemModule.Plant}
);