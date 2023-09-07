import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PipePipe } from './pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomvalidatorComponent } from './customvalidator/customvalidator.component';
import { VezbanjeComponent } from './vezbanje/vezbanje.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PipePipe,
    TemplatedrivenformComponent,
    ReactiveformComponent,
    CustomvalidatorComponent,
    VezbanjeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
