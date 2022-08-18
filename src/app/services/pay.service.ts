import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Payment, Transaction } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PayService {
  public code!:any;
  private currencySubject = new BehaviorSubject(this.code);
  afterPay=new Payment;
  currencyObservable = this.currencySubject.asObservable();
  constructor(private httpClient: HttpClient) { }
  payCheck(pay:Payment):Observable<Transaction>
  {
    const url="http://localhost:8081/Pay";
    return this.httpClient.post<Transaction>(url,pay);
    //this.currencySubject.next(this.httpClient.post(url,pay));
    //this.code=this.httpClient.post<Transaction>(url,pay);
  }
}
