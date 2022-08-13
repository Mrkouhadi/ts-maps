import faker from 'faker/dist/faker.js'

class User{
    name: string;
    location:{
        lat: number,
        lng: number,
    }
    constructor(name:string){
        this.name = faker.name.firstName();
        this.location={
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude()),
        }
    }
}