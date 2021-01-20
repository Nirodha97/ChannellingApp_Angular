import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


//1.
export interface Doctor{
  id: string;
  name: string;
  speciality_name: string;
}



@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  //2. 
  doctors: Doctor[] =[];
   //3.
  constructor(public http: HttpClient) { }

 
  ngOnInit(): void {
    //4.
    let url ="http://beezzserver.com/nirodha/channeling/doctor/";
    this.http.get<Doctor[]>(url)
    .subscribe(data =>{
      this.doctors=data;
    });
  }


}
