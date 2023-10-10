import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from 'src/app/Service/User Location/ForeCastLocation.service';
import { WeatherService } from 'src/app/Service/User Location/weather.service';




@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  errorMessage: string = '';
  forecastData: any;

  constructor(private route: ActivatedRoute, private weatherService: WeatherService, private locationService:LocationService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const lat = params?.['lat']; // Use optional chaining
      const lon = params?.['lon']; // Use optional chaining
      
      if (lat && lon) {
        this.getWeatherByLocation(lat, lon);
      }
    });
    this.getLocationAndFetchForecast();
    
  }

  getWeatherByLocation(lat: number, lon: number) {
    this.weatherService.getWeatherByLocation(lat, lon).subscribe(
      (data) => {
        this.weatherData = data;
      },
      (error) => {
        this.errorMessage = 'Error fetching weather data.';
        console.error(error);
      }
    );
  }
  getLocationAndFetchForecast() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          this.locationService
            .getForecastByLocation(lat, lon)
            .subscribe(
              (data) => {
                this.forecastData = data;
              },
              (error) => {
                this.errorMessage = 'Error fetching forecast data.';
                console.error(error);
              }
            );
        },
        (error) => {
          this.errorMessage = 'Error fetching location data.';
          console.error(error);
        }
      );
    } else {
      this.errorMessage = 'Geolocation is not supported by your browser.';
    }

}
}
