import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, delay, materialize, dematerialize } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable()
export class WeatherService {

  constructor(private httpClient: HttpClient) { }
  apiKey = '665d48140dca13e411595586a256c4ce';
  unit = 'metric';

  getCurrentWeather(city: string): Observable<any> {
    const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${this.unit}&APPID=${this.apiKey}`;
    console.log('apiCall', apiCall);
    return this.httpClient.get<any>(apiCall).pipe(
      map(resp => {
        console.log('Response', resp);
        const weather = resp.weather[0];
        const temp = resp.main.temp;
        const x = { weather, temp };
        console.log(x);
        return x;
      }));
  }
}


@Injectable()
export class DevelopmentWeatherService {
  getCurrentWeather(city: string): Observable<any> {
    const weather = { description: 'Rain Rain Rain' };
    const temp = 12.2;
    const x = { weather, temp };
    // of(x).pipe(delay(2000)) allows you to mimic delays
    // that can happen when you call the real api.
    return of(x).pipe(delay(2000));

    // throwError can mimic errors from the API call.
    // return throwError('mimic an api failure');

    // const error = new Error();
    // error['status'] = 400;
    // return throwError(error).pipe(materialize(), delay(2000), dematerialize());
  }
}


export function weatherServiceFactory(httpClient: HttpClient, configService: ConfigService) {
  let service: any;

  if (configService.inMemoryApi) {
    service = new DevelopmentWeatherService();
  } else {
    service = new WeatherService(httpClient);
  }
  return service;
}

export let weatherServiceProvider = {
  provide: WeatherService,
  useFactory: weatherServiceFactory,
  deps: [HttpClient, ConfigService]
};
