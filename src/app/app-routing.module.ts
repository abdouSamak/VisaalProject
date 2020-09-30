import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import {LoginComponent} from './login/login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
{ path: 'Accueil', component: NotificationComponent  },
{ path: 'ajouterpatient', component: AddPatientComponent },
{ path: 'patients', component: ListPatientsComponent },
{ path: 'login', component: LoginComponent},
{ path: '', redirectTo: 'login', pathMatch: 'full' },
/*{ path: '**', redirectTo: 'notifications' }*/];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NotificationComponent, AddPatientComponent, ListPatientsComponent,LoginComponent];
