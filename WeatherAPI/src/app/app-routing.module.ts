import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './Component/location/location.component';
import { WeathersearchComponent } from './Component/weather-search/weathersearch.component';
import { RegistrationComponent } from './Component/Authentication/register/register.component';
import { LoginComponent } from './Component/Authentication/login/login.component';
import { HomeComponent } from './Component/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegistrationComponent},
  { path: 'login', component: LoginComponent },
  { path: 'weather', component: LocationComponent },
  {path:'weather-search',component:WeathersearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
