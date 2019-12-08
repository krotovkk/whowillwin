import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaguesNavComponent } from './leagues-nav.component';
import { MaterialModule } from '../material/material.module';
import { GamesListComponent } from './games-list/games-list.component';
import { GameCardComponent } from './game-card/game-card.component';



@NgModule({
  declarations: [LeaguesNavComponent, GamesListComponent, GameCardComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [LeaguesNavComponent],
})
export class LeaguesNavModule { }
