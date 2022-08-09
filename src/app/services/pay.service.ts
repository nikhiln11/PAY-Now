import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  constructor(private httpClient: HttpClient) { }
  payCheck(pay:Payment)
  {
    const url="http://localhost:8081/Pay";
    return this.httpClient.post(url,pay);
  }
}
