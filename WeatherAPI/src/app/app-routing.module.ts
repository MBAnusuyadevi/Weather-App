import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './Component/location/location.component';
import { WeatherDisplayComponent } from './Component/weather-display/weather-display.component';
import { WeathersearchComponent } from './Component/weather-search/weathersearch.component';
import { WeatherComponent } from './Component/weather/weather.component';

const routes: Routes = [
  { path: '', component: LocationComponent },
  { path: 'weather', component: WeatherComponent },
  {path: 'weather-display', component: WeatherDisplayComponent},
  {path:'weather-search',component:WeathersearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
