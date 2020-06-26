export class Person {
    firstName: string;
    middleName: string;
    lastName: string;

    constructor(data?: any) {
        this.firstName = data.firstName || 'Amy';
        this.lastName = data.lastName || 'Richards';
        this.middleName = data.middleName;
    }
}