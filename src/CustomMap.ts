export class CustomMap{
   private googleMap:google.maps.Map;

    constructor(divId:string){
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
                                zoom:1,
                                backgroundColor:"#fbc000",
                                center:{
                                    lat:0,
                                    lng:0
                                }
                            });
    }

    private addMarker():void{
        console.log('marker');
        
    }

    
}