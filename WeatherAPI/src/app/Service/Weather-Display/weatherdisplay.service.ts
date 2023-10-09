import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherdisplayService {
  private apiKey = '809758f446864490b4a102255230610';
  private apiUrl = 'https://api.weatherapi.com/v1';

  constructor(private http: HttpClient) { }

  getCurrentWeather(location: string): Observable<any> {
    const url = `${this.apiUrl}/current.json?key=${this.apiKey}&q=${location}`;
    return this.http.get(url);
  }

  getForecast(location: string, days: number): Observable<any> {
    const url = `${this.apiUrl}/forecast.json?key=${this.apiKey}&q=${location}&days=${days}`;
    return this.http.get(url);
  }
  
  }

