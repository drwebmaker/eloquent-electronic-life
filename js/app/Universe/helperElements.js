/**
 * @license eLife 1.0 Copyright (c) 2015, Valeriy Abornyev All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/drwebmaker/eloquent-electronic-life for details
 */

define( function() {
    function randomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

    function elementFromChar(legend, ch) {
      if (ch == ' ')
        return null;
      var element = new legend[ch]();
      element.originChar = ch;
      return element;
    }

    function charFromElement(element) {
      if (element == null)
        return ' ';
      else
        return element.originChar;
    }

    return {
      randomElement: randomElement,
      elementFromChar: elementFromChar,
      charFromElement: charFromElement
    };
  }
);

