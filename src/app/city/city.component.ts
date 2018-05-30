import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherService, WeatherModel, WeatherType } from '../weather.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CityStorageService } from '../city-storage.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.less']
})
export class CityComponent implements OnInit {
  nextCity: string;
  previousCity: string;
  totalCities: number;
  city = '?';
  weather: WeatherModel;
  failedToLoad: boolean;

  // This is to allow the enum to be used in the template;
  WeatherType = WeatherType;

  constructor(public weatherService: WeatherService, private route: ActivatedRoute,
    public cityStorage: CityStorageService, private router: Router) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(route => {
      this.city = route.get('city');
      this.nextCity = this.cityStorage.nextCity(this.city);
      this.previousCity = this.cityStorage.previousCity(this.city);
      this.totalCities = this.cityStorage.totalCities();
      this.reset();
      this.weatherService.getCurrentWeather(this.city).subscribe(x => {
        this.weather = x;
      },
        error => {
          console.log('error occured', error);
          this.failedToLoad = true;
        });
    });
  }



  reset() {
    this.failedToLoad = false;
    this.weather = undefined;
  }

  removeCity() {
    this.cityStorage.removeCity(this.city);
    const city = this.nextCity ? this.nextCity : this.previousCity;
    if (city) {
      this.router.navigate(['/city/' + city]);
    } else {
      this.router.navigate(['/add-city/']);
    }
  }

  isDay() {
    // TODO: This should check sunrise and sunset times to determine
    // if it is night time. Since your local time is different than
    // the city's time.
    const currentHour = new Date().getHours();
    return (currentHour > 6 && currentHour < 20);
  }
}
