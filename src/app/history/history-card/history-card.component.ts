import { Component, OnInit, Input } from '@angular/core';
import { IForecast } from 'src/app/model/IForecast';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.css']
})
export class HistoryCardComponent implements OnInit {
  @Input() forecast: IForecast;

  constructor() { }

  ngOnInit() {
  }

}
