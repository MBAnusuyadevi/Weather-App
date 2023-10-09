import { Component } from '@angular/core';
import { WeathersearchService } from 'src/app/Service/Weather-Search/weathersearch.service';

@Component({
  selector: 'app-weathersearch',
  templateUrl: './weathersearch.component.html',
  styleUrls: ['./weathersearch.component.css']
})
export class WeathersearchComponent {
  query: string = '';
  weatherData: any;
  forecastData: any;
  location: string = '';

  constructor(private weathersearchService: WeathersearchService) {}

  searchLocation() {
    this.weathersearchService.getWeatherByLocation(this.query).subscribe(
      (data: any) => {
        this.weatherData = data;
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  
        this.weathersearchService.getForecast(this.query,7)
      .subscribe((data) => {
        this.forecastData = data;

      });
    }
      
}
