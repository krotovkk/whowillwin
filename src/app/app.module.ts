import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LeaguesNavModule } from './leagues-nav/leagues-nav.module';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from './sidebar/sidebar.module';
import { AppRoutingModule } from './app-routing.module';
import { HistoryModule } from './history/history.module';
import { LoginComponent } from './login/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LeaguesNavModule,
    HttpClientModule,
    SidebarModule,
    AppRoutingModule,
    HistoryModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
