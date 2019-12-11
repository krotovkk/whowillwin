import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { LeaguesNavComponent } from './leagues-nav/leagues-nav.component';
import { LoginComponent } from './login/login/login.component';

const appRoutes: Routes = [
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
