import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationComponent } from './Component/location/location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeathersearchComponent } from './Component/weather-search/weathersearch.component';
import { environment } from './environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { RegistrationComponent } from './Component/Authentication/register/register.component';
import { LoginComponent } from './Component/Authentication/login/login.component';
import { LogoutComponent } from './Component/Authentication/logout/logout.component';
import { HomeComponent } from './Component/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    WeathersearchComponent,
    RegistrationComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
