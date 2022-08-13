import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";



const myMap: CustomMap = new CustomMap("map");


myMap.addMarker(new User());
myMap.addMarker(new Company());
new CustomMap("map");
