import faker from 'faker/dist/faker.js'
import { MappableInterface } from './CustomMap';


export class User implements MappableInterface{
    name: string;
    location:{
        lat: number,
        lng: number,
    }
    color: string = 'red';
    constructor(){
        this.name = faker.name.firstName();
        this.location={
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude()),
        }
    }
    popupContent():string{
        return `
                <div>
                    <h1>Hi there ! </h1>
                    <h3> This is ${this.name}</h1>
                </div>
        `;
    }
}