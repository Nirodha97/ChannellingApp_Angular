import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MyMaterialModule} from './material';
import { PastAppointmentsComponent } from './past-appointments/past-appointments.component';
import { SpecialtyListComponent } from './specialty-list/specialty-list.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SessionListComponent } from './session-list/session-list.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    PastAppointmentsComponent,
    SpecialtyListComponent,
    DoctorListComponent,
    HospitalListComponent,
    HomeComponent,
    SessionListComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 