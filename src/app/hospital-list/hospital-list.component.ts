import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


//1. Create an interface for object type with variables
export interface Hospital{
id: string;
name: string;
place: string;
}

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {

  //2. Create an empty object array
  hospitals: Hospital[]=[];

  //3.
  //a) Import HttpClientModule in app.module.ts
  //b) Create constructer argument for http variables(Automaticaly inject the object)
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    //4. Load objects from web server or API
    let url ="http://beezzserver.com/nirodha/channeling/hospital/";
    this.http.get<Hospital[]>(url)
    .subscribe(data => {
      this.hospitals=data;
    });
  }

}
