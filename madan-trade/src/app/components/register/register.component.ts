import { AuthService } from './../../auth-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router/';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(public authService: AuthService, public route: Router) { }

  ngOnInit() {
  }

  onRegister() {
    this.authService.register(this.email, this.password);
    this.route.navigate(['/login']);
  }
}
