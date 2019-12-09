import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaguesNavComponent } from './leagues-nav.component';
import { MaterialModule } from '../material/material.module';
import { GamesListComponent } from './games-list/games-list.component';
import { GameCardComponent } from './game-card/game-card.component';
import { AddForecastComponent } from './game-card/add-forecast/add-forecast.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LeaguesNavComponent, GamesListComponent, GameCardComponent, AddForecastComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [LeaguesNavComponent],
})
export class LeaguesNavModule { }
