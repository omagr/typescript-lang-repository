class User2 {
	// punlic
	email: string; // # by daultf its a public
	public name: string;
	// private
	#city: string = '';
	private readonly pincode: string = '0101';
	constructor(email: string, name: string) {
		this.email = email;
		this.name = name;
		this.pincode = '1212';
		//? city -> ''
	}
}

// # professional way of writing this
// # even it priduces the same code as above with literly not this, that shit
class User3 {
	private readonly pincode: string = '0101';
	constructor(public email: string, public name: string, private city: string = '') {}
}

const hitesh = new User2('@gmail.com', 'histesh');
hitesh.city = 'rampur';

// hitesh.pincode = "1212"
// !hitesh.city => ''
