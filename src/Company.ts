import faker from 'faker/dist/faker.js' // command click on fake to read type definitions file

export class Company {
    cName: string;
    catchPhrase: string;
    location:{
        lat: number,
        lng: number,
    };
    constructor(){
        this.cName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location={
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude(),
        }
    } 
}