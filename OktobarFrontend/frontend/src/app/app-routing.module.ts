import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OpislisteComponent } from './opisliste/opisliste.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'dash/:email',component:DashboardComponent},
  {path:'vise/:id', component:OpislisteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
