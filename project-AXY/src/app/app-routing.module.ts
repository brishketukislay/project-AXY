import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {ContactPersonComponent} from './contact-person/contact-person.component';
import {AppGuard} from './app.guard';

const routes: Routes = [
  {
    path:'',
    component:LoginPageComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate: [AppGuard]
  },
  {
    path:'contact-person',
    component:ContactPersonComponent,
    canActivate: [AppGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
