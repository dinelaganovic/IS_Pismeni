import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Nav_barComponent } from './nav_bar/nav_bar.component';
import { Dodaj_sportistuComponent } from './dodaj_sportistu/dodaj_sportistu.component';
import { Lista_sportistaComponent } from './lista_sportista/lista_sportista.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RadnikService } from './services/radnik.service';
import { Update_sportistuComponent } from './update_sportistu/update_sportistu.component';

const appRoutes: Routes = [
  {path: '', component: Lista_sportistaComponent},
  {path: 'dodaj_sportistu', component: Dodaj_sportistuComponent},
  {path: 'update/:id', component: Update_sportistuComponent}
]

@NgModule({
  declarations: [
    AppComponent,
      Nav_barComponent,
      Dodaj_sportistuComponent,
      Lista_sportistaComponent,
      Update_sportistuComponent,
      Update_sportistuComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    RadnikService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
