class Human {
	private _courseCount = 1;
	private readonly pincode: string = '0101';
	constructor(public email: string, public name: string, private city: string = 'Default') {}
	// # private fuctions
	private deleteToken() {
		console.log(this.name);
	}
	// # methods
	// getters
	get getId(): string {
		return `id_${this.email}`;
	}
	get courseCount(): number {
		return this._courseCount;
	}
	// setters
	//# there should be no :return (void, never) nothing should there
	set courseCount(count) {
		if (count <= 1) throw new Error('More than one!');
		this._courseCount = count;
	}
}

const a = new Human('rahul@pappu.com', 'rahul');
console.log(a.courseCount, a.getId);
a.courseCount = 12;
console.log(a.courseCount, a.getId);
