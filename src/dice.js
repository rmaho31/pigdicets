"use strict";
var Dice = /** @class */ (function () {
    function Dice() {
        this.d1 = new Die();
    }
    Dice.prototype.getDie1Value = function () {
        return this.d1.getValue;
    };
    Dice.prototype.roll = function () {
        this.d1.roll();
    };
    Dice.prototype.toString = function () {
        return "Die 1: " + this.getDie1Value();
    };
    return Dice;
}());
