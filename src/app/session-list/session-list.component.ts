import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//1. Interface
export interface Session{
  id:string;
  doctor_id: string;
  hospital_is: string;
  date_time: string;
  count: string;
  hospital_name:string;
  doctor_name: string;
  speciality_name: string;
  hospital_place: string;
  next:string;
}



@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {


  sid: number | undefined;
  hid: number | undefined;
  did: number | undefined;

    //2. Create Array
    sessions: Session[] =[];

    //3. http client
  constructor(public http: HttpClient, public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.sid = +params['sid'] || 0;
      this.did = +params['did'] || 0;
      this.hid = +params['hid'] || 0;
    });

    //4.load data
    let url ="http://beezzserver.com/nadun/channeling/session/index.php?sid="+this.sid+"&hid="+this.hid+"&did="+this.did;
    this.http.get<Session[]>(url).subscribe(data => {
      this.sessions=data; 
    })
  }


  book(id: any){
    this.router.navigate(['/book'],{
      queryParams: {session_id: id}
    });
  }

}
