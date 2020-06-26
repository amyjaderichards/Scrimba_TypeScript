// implicit
const arrayExample = [1, 3, 4, 5];
// explicit
const arrayExample: number[] = [1, 3, 4, 5];

// optional types
let example1: boolean | number = 35;

// explicit typing
let example2: number;
example2 = 35;

// implicit typing
let example3 = "Hello Amy";

let example4: undefined = undefined;

let example5: null = null;

let example6 = arrayExample.reduce((num1, num2) => num1 + num2);
