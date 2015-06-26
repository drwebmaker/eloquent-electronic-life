define( "Plan",
  ['World', 'Tiger', 'PlantEater', 'Plant', 'LifelikeWorld'],
  function( moduleW, moduleT, modulePE, moduleP, lw ){
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
      '#': moduleW.Wall,
      '@': moduleT.Tiger,
      'O': modulePE.PlantEater,
      '*': moduleP.Plant
    };

    var valley = new lw.LifelikeWorld(
      plan, description);
    return valley;

  }
);