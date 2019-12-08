import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-forecast',
  templateUrl: './add-forecast.component.html',
  styleUrls: ['./add-forecast.component.css']
})
export class AddForecastComponent implements OnInit {
  @Input() game;

  constructor() { }

  ngOnInit() {
  }

}
