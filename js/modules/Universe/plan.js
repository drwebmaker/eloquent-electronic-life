define(function(require){

    var Tiger = require('Tiger');
    var World = require('World');
    var PlantEater = require('PlantEater');
    var Plant = require('Plant');
    var LifelikeWorld = require('LifelikeWorld');


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
      '@': Tiger.Tiger,
      'O': PlantEater.PlantEater,
      '*': Plant.Plant
    };

    var valley = new LifelikeWorld.LifelikeWorld(
      plan, description);
    return valley;

  }
);