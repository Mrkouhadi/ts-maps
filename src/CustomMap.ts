interface MappableInterface {
    location:{
        lat: number,
        lng: number
    }
    popupContent():string
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
        const mapMarker = new google.maps.Marker({
                                map:this.googleMap,
                                position:{
                                    lat: mappable.location.lat,
                                    lng: mappable.location.lng,
                                }
                            })

        mapMarker.addListener('click', ()=> {
            const infoPopup = new google.maps.InfoWindow({
                content:mappable.popupContent(),
            })
            infoPopup.open(this.googleMap, mapMarker);
        })
    }
}