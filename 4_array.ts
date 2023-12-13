type Arrays = {
	int: number[];
	str: string[];
};

type Arrays2 = {
	int: Array<number>;
	str: Array<string>;
};

const a: Arrays2 = {
	int: [1, 2],
	str: ['a'],
};

const empty: [] = [];
//! now you cant add amything
// empty.push(2)

//# list of user
type User = {
	name: string;
	age: number;
};

// const list: User[]
const list: Array<User> = [
	{ name: 'rahul', age: 21 },
	{ name: 'rahul2', age: 212 },
];

const array_of_arrays: number[][] = [
	[21, 21],
	[23, 45],
];
