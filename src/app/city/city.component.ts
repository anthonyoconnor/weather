import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ActivatedRoute } from '@angular/router';

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
    this.city = this.route.snapshot.params['city'];

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
