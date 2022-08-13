import faker from 'faker/dist/faker.js' // command click on fake to read type definitions file
import { MappableInterface } from './CustomMap';

export class Company implements MappableInterface {
    cName: string;
    catchPhrase: string;
    location:{
        lat: number,
        lng: number,
    };
    color: string = 'red';
    constructor(){
        this.cName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location={
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude(),
        }
    } 
    popupContent():string{
        return `
                    <div>
                        <h1>${this.cName} </h1>
                        <h3>${this.catchPhrase}</h1>
                    </div>
                 `;
    }
}