import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/Service/User Location/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const lat = params?.['lat']; // Use optional chaining
      const lon = params?.['lon']; // Use optional chaining
      
      if (lat && lon) {
        this.getWeatherByLocation(lat, lon);
      }
    });
    
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

}
