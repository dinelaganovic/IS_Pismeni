import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NoviPolazakComponent } from './novi-polazak/novi-polazak.component';
import { FiltriranjeComponent } from './filtriranje/filtriranje.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoviPolazakComponent,
    FiltriranjeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
