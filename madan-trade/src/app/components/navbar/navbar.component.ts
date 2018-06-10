import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public toastr : ToastrService) { }

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
    this.toastr.success("Logout Successfully", "User");

  }
}


