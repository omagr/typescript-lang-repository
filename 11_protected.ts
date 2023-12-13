class Human {
	protected _courseCount = 1;
	private readonly pincode: string = '0101';
	constructor(public email: string, public name: string, private city: string = 'Default') {}
	// # private fuctions
	private deleteToken() {
		console.log(this.name);
	}
}
class SubHuman extends Human {
	changeCourseCount() {
		this._courseCount = 2;
	}
}
