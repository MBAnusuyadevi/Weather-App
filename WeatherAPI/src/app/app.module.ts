import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationComponent } from './Component/location/location.component';
import { WeatherDisplayComponent } from './Component/weather-display/weather-display.component';
import { WeatherComponent } from './Component/weather/weather.component';
import { FormsModule } from '@angular/forms';
import { WeathersearchComponent } from './Component/weather-search/weathersearch.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    LocationComponent,
    WeatherDisplayComponent,
    WeathersearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
