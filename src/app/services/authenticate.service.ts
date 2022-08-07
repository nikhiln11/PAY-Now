import { Injectable } from '@angular/core';
import { Accountdetails, Sender } from '../types';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  turnOn:boolean=false;
  public s: any;
  // public accDetails: Accountdetails[]=
  // [
  //   {customerId: 73646382927365,
  //     customerName: "Customer 1",
  //     accountBalance: 443988,
  //     overDraft: false,
  //     BIC: "ABINKXXX",
  //     bankName: "AB bank of new york",
  //   },
  //   {
  //     customerId: 73646382927364,
  //     customerName: "Customer 1",
  //     accountBalance: 443988,
  //     overDraft: false,
  //     BIC: "ABINKXXX",
  //     bankName: "AB bank of new york",
  //   },
  // ];
  //private _customerExists:any =null;
  //private customerSubject = new BehaviorSubject(this._customerExists);
  //customerObservable = this.customerSubject.asObservable();
  constructor(private httpClient: HttpClient) { }
  authenticateCustomer(c:string)
  {
    // localhost:12345/addNewEmp : POST
    const url="http://localhost:8081/authenticate?c="+c;
    console.log(Number(c));
    //return this.httpClient.get(url):this.httpClient.get(url)?this.customerSubject.error('not found');
    //const customerObservable = this.httpClient.get(url).asObservable();
    //console.log(typeof this.httpClient.get(url));
    return this.httpClient.get(url);
    // private customerSubject = new BehaviorSubject(d);
    //const customerObservable = this.customerSubject.asObservable();


    //  const customer=this.accDetails.find(d=>{
    //   return d.customerId===Number(customerId);
    //  });
    //  if(customer){
    //   this._customerExists=customer;
    //   this.customerSubject.next(this._customerExists);
    //  }else{
    //   this.customerSubject.error('not found');
    //  }
  }
}
