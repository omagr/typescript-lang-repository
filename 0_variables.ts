let isTrue: boolean = true;
let isFalse: boolean = false;

let intValue: number = 42;
let floatValue: number = 3.14;

let isString: string = 'John Doe';

// The inferred return type is void
function isVoid() {
    return;
    // In JavaScript, a function that doesn’t return any value will implicitly return the value undefined. However, void and undefined are not the same thing in TypeScript. 
}

// null and undefined
function doSomething(x: string | null) {
    if (x === null) {
      // do nothing
    } else {
      console.log('Hello, ' + x.toUpperCase());
    }
  }