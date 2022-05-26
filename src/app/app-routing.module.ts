import { NotFoundComponent } from './component/not-found/not-found.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  { path:'login',component:LoginComponent },
  { path:'dashoard',component:DashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:'**',component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
