import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityStorageService {
  public cities: string[] = [];
  storageName = 'cities';
  constructor() {
    const existingCities = JSON.parse(localStorage.getItem(this.storageName));
    if (existingCities) {
      this.cities = existingCities;
    }
    console.log('Stored cities', this.cities);
  }

  addCity(city: string) {
    if (!this.cities.includes(city)) {
      this.cities.push(city);
      localStorage.setItem(this.storageName, JSON.stringify(this.cities));
    }
  }

  totalCities(): number {
    return this.cities.length;
  }

  removeCity(city: string) {
    this.cities = this.cities.filter(c => c.toLocaleLowerCase() !== city.toLocaleLowerCase());
    localStorage.setItem(this.storageName, JSON.stringify(this.cities));
  }

  nextCity(currentCity: string): string {
    const currentIndex = this.cities.indexOf(currentCity);
    if (currentIndex === -1) {
      return this.cities[0];
    }
    const nextIndex = currentIndex + 1;
    return this.cities.length - 1 >= nextIndex ? this.cities[nextIndex] : undefined;
  }

  previousCity(currentCity: string): string {
    const currentIndex = this.cities.indexOf(currentCity);
    if (currentIndex === -1) {
      return undefined;
    }

    const previousIndex = currentIndex - 1;
    return previousIndex >= 0 ? this.cities[previousIndex] : undefined;
  }
}
