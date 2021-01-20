import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//1. Create an Interface for object Type with variables
//ජේසන් ෆයිල් එකේ ඔබ්ජෙක්ට් වලට අදාල ඩේට ටයිප් දාල ඉන්ටර්ෆේස් එකක් හදාගන්න 
export interface Speciality{
  id: string;
  name: string;
}

@Component({
  selector: 'app-specialty-list',
  templateUrl: './specialty-list.component.html',
  styleUrls: ['./specialty-list.component.css']
})
export class SpecialtyListComponent implements OnInit {

  //2. Create an Empty Object Array
  //ගේන්න යන ඩේට වලට අදාලව එම්ප්ටි ඔබ්ජෙක්ට් ඇරේ එකක් හදාගන්න 
  specialities: Speciality[] =[];


  //3.
  //a) Import HttpClientModule in app.module.ts file
  //b) Create Constructer argument for http Variable(Automatically Inject the object)
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  //4. Load Objects from web service or API 
 let url= "http://beezzserver.com/nadun/channeling/speciality/";
  this.http.get<Speciality[]>(url)
    .subscribe(data => {
      this.specialities=data;
    });
  }

}
