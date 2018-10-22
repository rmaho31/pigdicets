

class Die {
	private num1: number;
	
	constructor() {
		this.num1 = 0;
	}
	
	roll() {
		this.num1 = (Math.ceil((Math.random() * 6)));
	}
	
	get getValue(): number {
		return this.num1;
	}
}
