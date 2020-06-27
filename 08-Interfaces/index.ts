import { IPerson } from './person.interface'

const example1: IPerson = {firstName: 'Amie', middleName: 'Amie', lastName: 'Amie'};

// Reassign the values
example1.firstName = 'Amy';
example1.middleName = 'Jade';
example1.lastName = 'Richards'