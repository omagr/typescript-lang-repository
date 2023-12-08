//# any return; type arguments
function sumWTwo(num: number) {
	return num + 2;
}

function signup(name: string, paid: Boolean) {
	return ' ';
}

function login(name: string, paid: Boolean = false) {}

//# type return; type arguments
function sumWTwo2(num: number): string {
	return 'num';
}

function login2(name: string, paid: Boolean = false): void {
	return;
}

//# return more than one type
function moreThan2() {
	if (0 == 0) return true;
	return 'false';
} // ? how?

//# arrow function
const arrowFunction = (s: string): string => {
	return '';
};

//# type swtiching
const arr = ['shaktiman', 'modiji'];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 'ambaniji'];

arr.map((s) => `this is ${s}`); // normal way
arr2.map((s) => `this is ${s}`); // arg is number
arr3.map((s: any): any => `this is ${s}`); // arg is number

//# always use assertion in every fucking moment
function console_erro(err: string): void {
	console.log(err);
	return;
}

//# never: return never anything, while void return nothing
//* this means func throws an exception or terminates execution of the program
function handle_error(err: string): never {
	throw new Error(err);
}
