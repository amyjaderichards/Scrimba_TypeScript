import { Bear } from './bear.model';
import { Animal } from './animal.model';


const bear = new Bear(name: 'Big Bear', tail: true);
const animal = new Animal({type: bear});

bear.claws = 3;
bear.name = 'Small Bear'; //error! read-only

bear.add(1, 2);
