import { Person } from './person.model';

function add(val1: number, val2: number) {
    return val1 + val2;
}

add(1, 9);

function sayHello(person: Person) {
    return `Say Hello to, ${person.firstName} ${person.lastName}!    
}