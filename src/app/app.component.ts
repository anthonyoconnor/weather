import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  city = 'Vancouver';
  weather = 'Sunny';
  temp = 23.0;
}
