import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import bookingsList from '../bookingsList';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  arrival;
  departure;
  adult;
  children;
  room;
  constructor() { }

  ngOnInit() {
  }

  //we are going to be setting up our methods for recieving input
  setArrival(event){
    this.arrival = event.target.value;

  }
  setDeparture(event){
    this.departure = event.target.value;

  }
  setAdults(event){
    this.adult = event.target.value;

  }

  setChildren(event){
    this.children = event.target.value;

  }
  setRoom(event){
    this.room = event.target.value;
  }


  book(){
    let booking = new Booking(this.arrival, this.departure, this.adult, this.children, this.room);
    bookingsList.push(booking);
  }
}