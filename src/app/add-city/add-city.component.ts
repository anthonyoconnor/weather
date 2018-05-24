import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.less']
})
export class AddCityComponent implements OnInit {
  newCity: string;

  constructor() { }

  ngOnInit() {
  }

}
