import { Component, OnInit } from '@angular/core';
import { WeatherdisplayService } from 'src/app/Service/Weather-Display/weatherdisplay.service';


@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css'],
})
export class WeatherDisplayComponent implements OnInit {
  weatherData: any;
  forecastData:any;
  location: string = 'Bengaluru'; 
  constructor(private weatherdisplayService: WeatherdisplayService) {}

  ngOnInit(): void {
    this.getWeatherData(); // Replace with the city you want to display
  }

  getWeatherData() {
    this.weatherdisplayService.getCurrentWeather(this.location)
      .subscribe((data) => {
        this.weatherData = data;
      });
        this.weatherdisplayService.getForecast(this.location,7)
      .subscribe((data) => {
        this.forecastData = data;

      });
      
    }
    
        
}
