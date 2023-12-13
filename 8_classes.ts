class User {
	// # propertise
	email: string;
	name: string;
	city: string = '';
	readonly pincode: string = '0101';
	constructor(email: string, name: string) {
		this.email = email;
		this.name = name;
		this.pincode = '1212';
	}
}
const hitesh = new User('@gmail.com', 'histesh');
hitesh.city = 'rampur';
// hitesh.pincode = "1212"
