import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecauthService {
  turnOn:boolean=false;

  constructor(private router:Router,private httpClient: HttpClient) { }
  authenticateBIC(c:string)
  {
    // localhost:12345/addNewEmp : POST
    const url="http://localhost:8081/bicauth?s="+c;
    const d=this.httpClient.get(url);
    // private customerSubject = new BehaviorSubject(d);
    //const customerObservable = this.customerSubject.asObservable();
    return d;


  }
}
