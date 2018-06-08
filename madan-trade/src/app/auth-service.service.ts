import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    constructor(private router: Router){}

    register(email: string, password: string) {
        firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(
            error => console.log(error)
        );
    }

    login(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                sessionStorage.setItem("currentUser", response.user["email"]);
                this.router.navigate(["/home"]);
            }
        )
        .catch(
            error => alert("Wrong credentials!")
        );
    }
}
