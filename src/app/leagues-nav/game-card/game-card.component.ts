import { Component, OnInit, Input } from '@angular/core';
import { IGame } from 'src/app/model/igame';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() game: IGame;

  constructor() { }

  ngOnInit() {
  }

}
