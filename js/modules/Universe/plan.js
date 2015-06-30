    var Tiger = require('../Entity/tiger'),
        World = require('./world'),
        PlantEater = require('../Entity/plantEater');
    var Plant = require('../Entity/plant');
    var LifelikeWorld = require('./lifelikeWorld');


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

    var description = {
      '#': World.Wall,
      '@': Tiger,
      'O': PlantEater,
      '*': Plant
    };

    var valley = new LifelikeWorld(
      plan, description);
    module.exports = valley;