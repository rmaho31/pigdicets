let id = 0;
document.getElementById("btn1").onclick = () => {
	runGame($("#i1").val());
}
function runGame(choice: number) {
	id++;
	let rolls = 0;
	let total = 0;
	let percTwo = 0;
	let percThree = 0;
	let percFour = 0;
	let percFive = 0;
	let percSix = 0;

	for (let i = 0; i < choice; i++) {
		let two = 0;
		let three = 0;
		let four = 0;
		let five = 0;
		let six = 0;
		let sum = 0;
		let d1 = 0;
		let counter = 0;

		while (d1 == 0) {
			let dice = new Dice();
			dice.roll();

			if (dice.getDie1Value() == 2) {
				two++;
			} else if (dice.getDie1Value() == 3) {
				three++;
			} else if (dice.getDie1Value() == 4) {
				four++;
			} else if (dice.getDie1Value() == 5) {
				five++;
			} else if (dice.getDie1Value() == 6) {
				six++;
			} else {
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


	let n1 = [percTwo, percThree,
		percFour, percFive,
		percSix];

	$("body").append("<ul>Game Stats #" + id +
		"<li>" + "Played " + choice + " games" + "</li>" +
		"<li>" + "Highest Score was " + total + "</li>" +
		"<li>" + "Highest number of rolls was " + rolls + "</li>" +
		"<li>" + getHighestPercent(n1) + "</li>" +
		"</ul>");
}

function getHighestPercent(n1: number[]) {
	let maxNum = 0;
	let max = n1[0];
	for (let i = 1; i < 5; i++) {
		if (n1[i] > max) {
			maxNum = i;
		}
		max = Math.max(max, n1[i]);
	}
	let p = max*100;
	return "The highest percent of total rolls was " + p.toFixed(0) + "% " + (maxNum + 2) + "'s";
}



