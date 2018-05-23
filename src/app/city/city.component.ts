import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.less']
})
export class CityComponent implements OnInit {

  city = 'Vancouver';
  weather = '?';
  temp = 0;
  failedToLoad: boolean;

  constructor(public weatherService: WeatherService) {

  }

  ngOnInit() {
    this.weatherService.getCurrentWeather(this.city).subscribe(x => {
      this.weather = x.weather.description;
      this.temp = x.temp;
    },
      error => {
        console.log('error occured', error);
        this.failedToLoad = true;
      });
  }

}
