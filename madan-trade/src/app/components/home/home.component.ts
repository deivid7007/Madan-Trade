import { Component, OnInit } from '@angular/core';
import { Kinvey } from 'kinvey-angular2-sdk';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
Kinvey.ping()
  .then(function(response: {}) {
    console.log('Kinvey Ping Success. Kinvey Service is alive, version: ');
  }).catch(function(error) {
    console.log('Kinvey Ping Failed. Response: ' + error.description);
  });
  }

}
