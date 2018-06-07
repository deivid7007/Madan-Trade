import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AdsComponent } from './components/ads/ads.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDGWKtNSQc_pc6kn5BtDPIiPZuHfJdMRuM",
    authDomain: "madan-trade-46658.firebaseapp.com",
    databaseURL: "https://madan-trade-46658.firebaseio.com",
    projectId: "madan-trade-46658",
    storageBucket: "madan-trade-46658.appspot.com",
    messagingSenderId: "997704338374"
};


const appRoutes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: 'home', component: HomeComponent},
{ path: 'about', component: AboutComponent },
{ path: 'contacts', component: ContactsComponent },
{ path: 'ads', component: AdsComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactsComponent,
    AdsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
