interface MappableInterface {
    location:{
        lat: number,
        lng: number
    }
}

export class CustomMap{
   private googleMap:google.maps.Map;

    constructor(divId:string){
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
                                zoom:1,
                                backgroundColor:"#fbc",
                                center:{
                                    lat:0,
                                    lng:0
                                }
                            });
    }

    addMarker(mappable: MappableInterface):void{
        new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            }
        })
    }
}