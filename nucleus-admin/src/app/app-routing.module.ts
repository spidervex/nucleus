import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SessionComponent} from './session/session.component';
import {UsersComponent} from './users/users.component';
import {CompaniesComponent} from './companies/companies.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'session',
    component: SessionComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'companies',
    component: CompaniesComponent
  },
  {
    path: '**', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
