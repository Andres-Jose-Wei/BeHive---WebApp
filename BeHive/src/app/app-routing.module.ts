import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminconsoleComponent } from './components/adminconsole/adminconsole.component';
import { ProjectdashboardComponent } from './components/projectdashboard/projectdashboard.component';
import { CreateprojectComponent } from './components/createproject/createproject.component';

const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'registration', component: RegistrationComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'admin', component: AdminconsoleComponent },
{ path: 'project', component: ProjectdashboardComponent },
{ path: 'project/create', component: CreateprojectComponent },
{ path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
