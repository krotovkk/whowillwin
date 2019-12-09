import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { LeaguesNavModule } from '../leagues-nav/leagues-nav.module';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    LeaguesNavModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
