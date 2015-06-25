var MAP = (function(){

  var plan = ['####################################################',
    '# @               ####         ****              ###',
    '#   *  @  ##                 ########       OO    ##',
    '#   *    ##        O O                 ****       *#',
    '#       ##*                        ##########     *#',
    '#      ##***  *         ****                     **#',
    '#* **  #  *  ***      #########                  **#',
    '#* **  #      *               #   *              **#',
    '#     ##              #   O   #  ***          ######',
    '#*            @       #       #   *        O  #    #',
    '#*                    #  ######                 ** #',
    '#####        ****          ***                  ** #',
    '#***#   O                        @         O  @@   #',
    '# O #     ##  ##  ##  ##               ###      *  #',
    '#***#*         #              *       #####  O     #',
    '##  #*  O   O  #  #    ***  ***        ###      ** #',
    '###               #   *****                    ****#',
    '####################################################'];

  var description ={
    '#':  EcosystemModule.Wall,
    '@': EcosystemModule.Tiger,
    'O': EcosystemModule.SmartPlantEater,
    '*': EcosystemModule.Plant
  };

  var valley = new WorldModule.LifelikeWorld(
    plan, description);

  return {
    valley: valley
  }

}());
