import {spaceLocation} from "./space-location"

export class spaceLocationResponse {
    message:string;
    iss_position:spaceLocation;
    timestamp:number;
    constructor( message:string,iss_position:spaceLocation,timestamp:number){
        this.message=message;
        this.iss_position=iss_position;
        this.timestamp=timestamp;
    }
}