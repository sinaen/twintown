// weather-display.component.ts

import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnInit {
  city: string = ''; // Hier wird die eingegebene Stadt gespeichert
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {}

  onCityInput() {
    // Überprüfen, ob die Stadt eingegeben wurde
    if (this.city) {
      // Anfrage an den WeatherService senden
      this.weatherService.getWeather(this.city).subscribe((data: any) => {
        this.weatherData = data;
      });
    }
  }
}
