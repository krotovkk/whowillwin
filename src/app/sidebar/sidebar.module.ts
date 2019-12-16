import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { LeaguesNavModule } from '../leagues-nav/leagues-nav.module';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    LeaguesNavModule,
    MaterialModule,
    RouterModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
