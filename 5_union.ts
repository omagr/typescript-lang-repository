let scrore: number | string = 33;
scrore = '22';

type user = { name: string; id: number };
type admin = { user: string; id: number };

let modiji: user | admin = { name: 'modiji', id: 12 };
modiji = { user: 'modiji', id: 12 };

// #but now there is a problem
function main(arg: string | number): void {
	// ? arg.toLowerCase(); // Why
	// ? arg + 2; // Why
	if (typeof arg == 'string') arg.toLowerCase();
	if (typeof arg == 'number') arg + 2;
}

// # array
var arr1: number[] = [1, 2, 3];
var arr2: string[] = ['1', '2', '3'];
var arr3: string[] | number[]; // = ['1', '2', '3'] | [1, 2, 3]
var arr4: string | number[]; // = [1, 2, 3] | 'string';
// # so
var arr5: (string | number | boolean)[] = [2, '2', true];

// # strict value for some vars
var pi: 3.14 = 3.14;
// ! pi = 3.15;
var planet: 'earth' = 'earth';
// ! planet = 'moon';

var arr6: [string, number, boolean] = [2, '2', true];
arr6 = ['2', 2, true];

var arr7: [number, number, number] = [2, 2, 2, 2];
