import faker from "faker"; // command click on fake to read type definitions file

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