import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './games-list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { GameCardModule } from '../game-card/game-card.module';



@NgModule({
  declarations: [GamesListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    GameCardModule
  ],
  exports: [
    GamesListComponent
  ]
})
export class GamesListModule { }
