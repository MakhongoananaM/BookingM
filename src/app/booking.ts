export class Booking{
    arrival;
    departure;
    adults;
    children;
    room;

    constructor(Arrival, Departure, Adults, Children, Room){
        this.arrival = Arrival;
        this.departure = Departure;
        this.adults = Adults;
        this.children = Children;
        this.room = Room;
    }
}