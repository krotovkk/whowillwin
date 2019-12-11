import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LeaguesNavComponent } from './leagues-nav.component';
import { GamesListComponent } from './games-list/games-list.component';

const routes: Routes = [
  {
    path: 'games',
    component: LeaguesNavComponent,
    children: [
      {
        path: ':country',
        component: GamesListComponent
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LeaguesNavRoutingModule { }
