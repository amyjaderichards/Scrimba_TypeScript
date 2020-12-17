import { Bear } from './bear.model';

const bear = new Bear(3);

if (bear instanceof Bear) {
    'bear is an instance of Bear';
}