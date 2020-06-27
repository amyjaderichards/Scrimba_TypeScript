export class Person {
    firstName: string;
    middleName: string;
    lastName: string;

    constructor(data?: any) {
        this.firstName = data.firstName || 'Amy';
        this.middleName = data.middleName || 'Jade';
        this.lastName = data.lastName || 'Richards';
    }
}