"use strict";
var Die = /** @class */ (function () {
    function Die() {
        this.num1 = 0;
    }
    Die.prototype.roll = function () {
        this.num1 = (Math.ceil((Math.random() * 6)));
    };
    Object.defineProperty(Die.prototype, "getValue", {
        get: function () {
            return this.num1;
        },
        enumerable: true,
        configurable: true
    });
    return Die;
}());
