'use strict';

var App = App || {};

App.Maths = {
    add: function(numberOne, numberTwo) {
        if (typeof(numberOne) !== 'number') {
            numberOne = parseInt(numberOne, 10);
        }

        if (typeof(numberTwo) !== 'number') {
            numberTwo = parseInt(numberTwo, 10);
        }

        return numberOne + numberTwo;
    }
};