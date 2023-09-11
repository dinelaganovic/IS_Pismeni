import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListaAktivnostiComponent } from './lista-aktivnosti/lista-aktivnosti.component';
import { DodajAktivnostComponent } from './dodaj-aktivnost/dodaj-aktivnost.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DetaljiAktivnostiComponent } from './detalji-aktivnosti/detalji-aktivnosti.component';
import { AktivnostService } from './services/Aktivnost.service';
import { Pipe_promena_bojePipe } from './pipes/pipe_promena_boje.pipe';


const appRoutes: Routes = [
  {path: '', component: ListaAktivnostiComponent},
  {path: 'dodaj_aktivnost', component: DodajAktivnostComponent},
  {path: 'detalji_aktivnosti/:id', component: DetaljiAktivnostiComponent}
]


@NgModule({
  declarations: [
    AppComponent,
      NavBarComponent,
      ListaAktivnostiComponent,
      DodajAktivnostComponent,
      DetaljiAktivnostiComponent,
      Pipe_promena_bojePipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AktivnostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
