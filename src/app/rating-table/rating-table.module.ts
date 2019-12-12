import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingTableComponent } from './rating-table.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [RatingTableComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [RatingTableComponent]
})
export class RatingTableModule { }
