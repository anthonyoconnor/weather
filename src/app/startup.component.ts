import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { CityStorageService } from './city-storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    template: ``, // Nothing will show on this component.
})
export class StartupComponent {

    constructor(private cityStorage: CityStorageService, private router: Router) {
        if (this.cityStorage.cities.length === 0) {
            this.router.navigate(['/add-city/']);
        } else {
            const defaultCity = this.cityStorage.cities[0];
            console.log('going to default');
            this.router.navigate(['/city/' + defaultCity]);
        }
    }
}
