import faker from 'faker/dist/faker.js'


export class User{
    name: string;
    location:{
        lat: number,
        lng: number,
    }
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