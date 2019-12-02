import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaguesNavComponent } from './leagues-nav.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [LeaguesNavComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [LeaguesNavComponent],
})
export class LeaguesNavModule { }
