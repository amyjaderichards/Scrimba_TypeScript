import { Bear, Man, Pig } from './interfaces';

let man: Man | Pig;
let bear: Bear;
let pig: Pig;

type ManBearPig = Bear & Man & Pig;


let manBearPig: Bear & Man & Pig;
manBearPig.firstName = 'Dylan';
manBearPig.claws = 3;
manBearPig.bacon = false;

