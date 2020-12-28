import { DashboardComponent } from './@pages/dashboard/dashboard.component';
import { HomeComponent } from './@pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'activity', component: HomeComponent},
  {path:'home', component: DashboardComponent},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
