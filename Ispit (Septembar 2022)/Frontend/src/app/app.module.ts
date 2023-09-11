import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DodajRadnikaComponent } from './dodaj-radnika/dodaj-radnika.component';
import { ListaZaposlenihComponent } from './lista-zaposlenih/lista-zaposlenih.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadnikService } from './services/radnik.service';
import { HttpClientModule } from '@angular/common/http'

const appRoutes: Routes = [
  {path: '', component: ListaZaposlenihComponent},
  {path: 'dodaj_radnika', component: DodajRadnikaComponent  }
]


@NgModule({
  declarations: [
    AppComponent,
      DodajRadnikaComponent,
      ListaZaposlenihComponent,
      NavBarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    RadnikService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
