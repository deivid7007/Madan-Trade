import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireDatabaseModule } from 'angularfire2/database';



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
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth-service.service';
import { AuthGuard } from './auth-guard';
import { AdComponent } from './components/ads/ad/ad.component';
import { AdListComponent } from './components/ads/ad-list/ad-list.component';
import { AngularFireModule } from 'angularfire2';
import { AdService } from './components/ads/shared/ad.service';
import { environment } from '../environments/environment';
import { ToastrModule } from  'ngx-toastr';




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
    RegisterComponent,
    AdComponent,
    AdListComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
),
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
