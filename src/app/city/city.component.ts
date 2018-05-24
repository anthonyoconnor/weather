import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.less']
})
export class CityComponent implements OnInit {

  city = '?';
  weather = '?';
  temp = 0;
  failedToLoad: boolean;

  constructor(public weatherService: WeatherService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(route => {
      this.city = route.get('city');
      this.reset();
      this.weatherService.getCurrentWeather(this.city).subscribe(x => {
        this.weather = x.weather.description;
        this.temp = x.temp;
      },
        error => {
          console.log('error occured', error);
          this.failedToLoad = true;
        });
    });
  }

  reset() {
    this.failedToLoad = false;
    this.weather = '?';
    this.temp = 0;
  }
}
