import faker from 'faker/dist/faker.js'

 update

export class User{
=======
export class User {
 master
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
}