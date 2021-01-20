import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


import {map, startWith} from 'rxjs/operators'
//1.
export interface Speciality{
  id:string;
  name:string;
}

export interface Hospital{
  id:string;
  name:string;
  place:string;
}

export interface Doctor{
  id:string;
  name:string;
  speciality_name :string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //2.
  specialities: Speciality[] = [];
  hospitals: Hospital[] =[];
  doctors: Doctor[]=[];


  //a. Create FormCotrol Object for Editable Input
  specialityControl = new FormControl();
  hospitalControl = new FormControl();
  doctorControl = new FormControl();


  //b. Create Array variable for filtered data 
  filteredSpecialities: Observable<Speciality[]> | undefined; 
  filteredHospitals: Observable<Hospital[]> | undefined;
  filteredDoctors: Observable<Doctor[]> | undefined;





  //3.
  constructor(public http:HttpClient, public router: Router) { }

  ngOnInit(): void {
    //4.
    let url1="http://beezzserver.com/nadun/channeling/speciality/"
    this.http.get<Speciality[]>(url1)
    .subscribe(data =>{
      this.specialities =data;
    });


    let url2 ="http://beezzserver.com/nadun/channeling/hospital/";
    this.http.get<Hospital[]>(url2)
    .subscribe(data=> {
      this.hospitals = data;
    })

    let url3 ="http://beezzserver.com/nadun/channeling/doctor/";
    this.http.get<Doctor[]>(url3)
    .subscribe(data=> {
      this.doctors = data;
    })






    //c. Filterd Option filter //අදාල කොටස් ටික අරන් අසයින්ග් කරන්නවා  
   
   this.filteredSpecialities = this.specialityControl.valueChanges.pipe(
     startWith<string | Speciality>(''),
     map(value => typeof value === 'string'? value: value.name),
     map(name => name? this._filter1(name): this.specialities.slice())
     
   );

   this.filteredHospitals = this.hospitalControl.valueChanges.pipe(
    startWith<string | Speciality>(''),
    map(value => typeof value === 'string'? value: value.name),
    map(name => name? this._filter2(name): this.hospitals.slice())
    
  );

  
  this.filteredDoctors = this.doctorControl.valueChanges.pipe(
    startWith<string | Doctor>(''),
    map(value => typeof value === 'string'? value: value.name),
    map(name => name? this._filter3(name): this.doctors.slice())
    
  );

  }

  //d. Filter Function
  private _filter1(name: string):Speciality[]{
    const filterValue = name.toLocaleLowerCase();
    return this.specialities.filter(option => option.name.toLocaleLowerCase().indexOf(filterValue)===0);
  }

  private _filter2(name: string):Hospital[]{
    const filterValue = name.toLocaleLowerCase();
    return this.hospitals.filter(option => option.name.toLocaleLowerCase().indexOf(filterValue)===0);
  }

  private _filter3(name: string):Doctor[]{
    const filterValue = name.toLocaleLowerCase();
    return this.doctors.filter(option => option.name.toLocaleLowerCase().indexOf(filterValue)===0);
  }

  //e. Display Name override

  displayFn1(speciality?:Speciality): string | ''{
    return speciality? speciality.name  : '';
  }

  displayFn2(hospital?:Hospital): string | ''{
    return hospital? hospital.name: '';
  }

  displayFn3(doctor?:Doctor): string | ''{
    return doctor? doctor.name: '';
  }

  reset(){
      this.specialityControl.reset();
      this.doctorControl.reset();
      this.hospitalControl.reset();
  }

  search(){
    var sid =(this.specialityControl.value)?this.specialityControl.value.id:0;
    var did =(this.doctorControl.value)?this.doctorControl.value.id:0;
    var hid =(this.hospitalControl.value)?this.hospitalControl.value.id:0;

    this.router.navigate(['/session-list'],
    {queryParams:{sid: sid,did: did,hid: hid}}
    );
  }

}
