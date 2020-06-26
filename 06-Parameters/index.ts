import { Person } from './person.model';

// Explicitly saying the return type
function add(val1: number, val2: number): number {
    return val1 + val2;
}


function sayHello(person: Person) {
    return `Say Hello to, ${person.firstName} ${person.lastName}!`  
}


// A function not returning anything has a return type of void
function voidExample(): void {
    add(1, 2);
}

function neverExample(): never {
    throw Error;
}


