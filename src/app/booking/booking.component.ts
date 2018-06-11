import { Component, OnInit } from '@angular/core';
import bookingsList from '../bookingsList';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor() { }

  
  ngOnInit() {
  }
  bookingsArray = bookingsList;

  delete(i){
    this.bookingsArray.splice(i, 1);
  }
}