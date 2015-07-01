/**
 * @license eLife 1.0 Copyright (c) 2015, Valeriy Abornyev All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/drwebmaker/eloquent-electronic-life for details
 */

define(function(require){

    var Vector = require('Vector'),
      View = require('View'),
      directions = require('directions'),
      help = require('helperElements');

    function PlantEater() {
      this.energy = 30;
      this.direction = help.randomElement(Object.keys(directions));
      this.eatCounter = 1;
    }
    PlantEater.prototype = {
      act: function(view) {
        var space = view.find(' ');
        if (this.energy > 60 && space) {
          return {type: 'reproduce', direction: help.randomElement(space)};
        }

        var plant = view.findAll('*');
        if (plant.length > 1) {

          if (this.eatCounter >= 0) {
            this.eatCounter = 0;
            return {type: "eat", direction: help.randomElement(plant)};
          } else {
            this.eatCounter++;
          }
        }

        if (space) {

          var spaces = view.findAll(' ');
          if (spaces.indexOf(this.direction) == -1) {
            this.direction = space;
          }
          return {type: 'move', direction: this.direction};
        }
        else {
          this.direction = 's';
        }
      }
    };

    return PlantEater;
  }
);