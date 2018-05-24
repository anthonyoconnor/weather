import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CityComponent } from './city/city.component';
import { weatherServiceProvider } from './weather.service';
import { AddCityComponent } from './add-city/add-city.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    AddCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [weatherServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
