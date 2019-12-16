import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { MaterialModule } from '../material/material.module';
import { HistoryListComponent } from './history-list/history-list.component';
import { HistoryCardComponent } from './history-card/history-card.component';



@NgModule({
  declarations: [HistoryComponent, HistoryListComponent, HistoryCardComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HistoryComponent
  ]
})
export class HistoryModule { }
