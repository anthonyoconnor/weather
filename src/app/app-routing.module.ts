import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';
import { AddCityComponent } from './add-city/add-city.component';
import { AppComponent } from './app.component';
import { StartupComponent } from './startup.component';

const routes: Routes = [
  { path: '', component: StartupComponent },
  { path: 'city/:city', component: CityComponent },
  { path: 'add-city', component: AddCityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
