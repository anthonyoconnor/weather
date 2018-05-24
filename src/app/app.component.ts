import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { CityStorageService } from './city-storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor() {
  }
}
