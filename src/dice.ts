
class Dice {
    private d1: Die;

    constructor() {
        this.d1 = new Die();

    }

    getDie1Value() {
        return this.d1.getValue;
    }

    roll() {
        this.d1.roll();
    }


    toString() {
        return "Die 1: " + this.getDie1Value();
    }
}
