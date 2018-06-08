import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isUserLogged(): boolean {
    if (sessionStorage.getItem('currentUser') != null) {
      return true;
    } else {
      return false;
    }
  }
  logOut() {
    sessionStorage.removeItem('currentUser');
  }
}


