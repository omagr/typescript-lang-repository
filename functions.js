//# any return; type arguments
function sumWTwo(num) {
    return num + 2;
}
function signup(name, paid) {
    return ' ';
}
function login(name, paid) {
    if (paid === void 0) { paid = false; }
}
//# type return; type arguments
function sumWTwo2(num) {
    return 'num';
}
function login2(name, paid) {
    if (paid === void 0) { paid = false; }
    return;
}
//# return more than one type
function moreThan2() {
    if (0 == 0)
        return true;
    return 'false';
} // ? how?
//# arrow function
var arrowFunction = function (s) {
    return '';
};
//# type swtiching
var arr = ['shaktiman', 'modiji'];
var arr2 = [1, 2, 3];
var arr3 = [1, 2, 'ambaniji'];
arr.map(function (s) { return "this is ".concat(s); }); // normal way
arr2.map(function (s) { return "this is ".concat(s); }); // arg is number
arr3.map(function (s) { return "this is ".concat(s); }); // arg is number
//# always use assertion in every fucking moment
function console_erro(err) {
    console.log(err);
    return;
}
//# never: return never anything, while void return nothing
//* this means func throws an exception or terminates execution of the program
function handle_error(err) {
    throw new Error(err);
}
