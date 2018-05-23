import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  city = 'My house';
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
