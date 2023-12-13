/**
 ** prob: creating an app in which we onborad a user and user has some of the props that we want to gor through w that, maybe there are a hell lot of function whic do the same thing.
 */

type User = {
	name: string;
	email: string;
	isActive: boolean;
};

function createUser(user: User): User {
	return {
		name: '',
		email: '',
		isActive: true,
	};
}

//# imagine we need to stop some props to manipulate in future down the lin
//# if it woukd array, then we can push values to array case of readonly

type User2 = {
	readonly _id: string;
	readonly arr: any;
	name: string;
	email: string;
	isActive: boolean;
};

let myUser: User2 = {
	_id: '1245',
	arr: [1, 2, 3],
	name: 'h',
	email: 'h@h.com',
	isActive: false,
};

// we cant
// !myUser._id = 'dfedfew'
myUser.arr.push(23);

//# so it indecates it is optional
type User3 = {
	readonly _id: string;
	cred?: number;
	name: string;
	email: string;
	isActive: boolean;
};
let myUser2: User3 = {
	_id: '1245',
	name: 'h',
	email: 'h@h.com',
	isActive: false,
};

//# mix and match
type cardNumber = {
	cardnumber: string;
};
type cardDate = {
	cardDate: string;
};
type cardDetails = cardNumber &
	cardDate & {
		cvv: number;
	};

export {};
