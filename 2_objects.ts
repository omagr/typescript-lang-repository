//# so this will a normal object in js
const User = {
	name: 'hitesh',
	email: 'hitesh@lco.dev',
	isAvtive: true,
};

//# how object arg passed in ts functions
function createUser({ name: string, isPaid: boolean }) {}

//! weird behivaor of ts
let newUser = { name: 'hitesh', isPaid: false, EMAIL: 'h@h.com' };
createUser(newUser);

//# how a function retunr an object
function createCourse(): { name: string; price: number } {
	return { name: 'reactjs', price: 399 };
}
function createCourse2(): {} {
	return { name: 'reactjs', price: 399 };
}

//# an advancd way of doing this
type User2 = {
	name: string;
	email: string;
	isActive: boolean;
};

function createUser3(user: User2): User2 {
	return { name: '', email: '', isActive: true };
}
