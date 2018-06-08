import { Router } from '@angular/router/';
import { AuthService } from './../../auth-service.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(public authService: AuthService, public route: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login(this.email, this.password);
  }
}