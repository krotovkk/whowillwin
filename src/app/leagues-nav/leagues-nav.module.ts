import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaguesNavComponent } from './leagues-nav.component';
import { MaterialModule } from '../material/material.module';
import { GamesListModule } from './games-list/games-list.module';



@NgModule({
  declarations: [LeaguesNavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    GamesListModule
  ],
  exports: [LeaguesNavComponent],
})
export class LeaguesNavModule { }
