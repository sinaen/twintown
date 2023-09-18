// src/app/weather.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'inserttokenhere'; // Fügen Sie hier Ihren OpenWeatherMap API-Schlüssel ein
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const params = { q: city, appid: this.apiKey, units: 'metric' };
    return this.http.get(this.apiUrl, { params });
  }
}
