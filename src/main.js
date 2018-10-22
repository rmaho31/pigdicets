"use strict";
var id = 0;
document.getElementById("btn1").onclick = function () {
    runGame($("#i1").val());
};
function runGame(choice) {
    id++;
    var rolls = 0;
    var total = 0;
    var percTwo = 0;
    var percThree = 0;
    var percFour = 0;
    var percFive = 0;
    var percSix = 0;
    for (var i = 0; i < choice; i++) {
        var two = 0;
        var three = 0;
        var four = 0;
        var five = 0;
        var six = 0;
        var sum = 0;
        var d1 = 0;
        var counter = 0;
        while (d1 == 0) {
            var dice = new Dice();
            dice.roll();
            if (dice.getDie1Value() == 2) {
                two++;
            }
            else if (dice.getDie1Value() == 3) {
                three++;
            }
            else if (dice.getDie1Value() == 4) {
                four++;
            }
            else if (dice.getDie1Value() == 5) {
                five++;
            }
            else if (dice.getDie1Value() == 6) {
                six++;
            }
            else {
                d1++;
            }
            counter++;
            sum += dice.getDie1Value();
        }
        rolls = Math.max(rolls, counter);
        total = Math.max(total, sum);
        percTwo = Math.max(percTwo, two / counter);
        percThree = Math.max(percThree, three / counter);
        percFour = Math.max(percFour, four / counter);
        percFive = Math.max(percFive, five / counter);
        percSix = Math.max(percSix, six / counter);
    }
    var n1 = [percTwo, percThree,
        percFour, percFive,
        percSix];
    $("body").append("<ul>Game Stats #" + id +
        "<li>" + "Played " + choice + " games" + "</li>" +
        "<li>" + "Highest Score was " + total + "</li>" +
        "<li>" + "Highest number of rolls was " + rolls + "</li>" +
        "<li>" + getHighestPercent(n1) + "</li>" +
        "</ul>");
}
function getHighestPercent(n1) {
    var maxNum = 0;
    var max = n1[0];
    for (var i = 1; i < 5; i++) {
        if (n1[i] > max) {
            maxNum = i;
        }
        max = Math.max(max, n1[i]);
    }
    var p = max * 100;
    return "The highest percent of total rolls was " + p.toFixed(0) + "% " + (maxNum + 2) + "'s";
}
