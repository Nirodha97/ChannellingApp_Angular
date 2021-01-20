import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { HomeComponent } from './home/home.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { PastAppointmentsComponent } from './past-appointments/past-appointments.component';
import { SessionListComponent } from './session-list/session-list.component';
import { SpecialtyListComponent } from './specialty-list/specialty-list.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'past_appointments',component: PastAppointmentsComponent},
  {path:'specialty_list',component: SpecialtyListComponent},
  {path:'doctor_list',component: DoctorListComponent},
  {path:'hospital_list',component: HospitalListComponent},
  {path:'session-list',component:SessionListComponent},
  {path:'book',component:BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
