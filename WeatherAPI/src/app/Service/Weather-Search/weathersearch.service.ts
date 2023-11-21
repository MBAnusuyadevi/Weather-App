import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeathersearchService {

 
     apiKey = '62ff7f4d42e049dcb5640510232111';
    private apiUrl = 'https://api.weatherapi.com/v1';
  
    constructor(private http: HttpClient) { }
  
    getCurrentWeather(query: string) {
      const url = `${this.apiUrl}/current.json?key=${this.apiKey}&q=${query}`;
      return this.http.get(url);
    }
    
  
    getForecast(query: string, days: number): Observable<any> {
      const url = `${this.apiUrl}/forecast.json?key=${this.apiKey}&q=${query}&days=${days}`;
      return this.http.get(url);
    }
    }
