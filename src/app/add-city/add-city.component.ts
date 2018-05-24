import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';
import { CityStorageService } from '../city-storage.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.less']
})
export class AddCityComponent implements OnInit {
  newCity: string;
  failed: boolean;
  searching: boolean;
  constructor(public weatherService: WeatherService, private router: Router, public cityStorage: CityStorageService) { }

  ngOnInit() {
  }

  addCity() {
    this.searching = true;
    this.failed = false;
    const city = this.newCity;
    this.weatherService.getCurrentWeather(city).subscribe(x => {
      console.log('Successfully found city');
      this.searching = false;
      this.cityStorage.addCity(city);
      this.router.navigate(['/city/' + city]);
    },
      error => {
        console.log('Could not add city');
        this.failed = true;
        this.searching = false;
      });
  }

}
