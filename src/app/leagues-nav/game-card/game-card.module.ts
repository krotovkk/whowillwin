import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './game-card.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [GameCardComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ GameCardComponent]
})
export class GameCardModule { }
