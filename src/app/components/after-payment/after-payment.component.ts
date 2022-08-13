import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PayService } from 'src/app/services/pay.service';
import { Payment } from 'src/app/types';

@Component({
  selector: 'app-after-payment',
  templateUrl: './after-payment.component.html',
  styleUrls: ['./after-payment.component.css']
})
export class AfterPaymentComponent implements OnInit {

  constructor(private router:Router,private tran: PayService) { }

  ngOnInit(): void {
    let c=new Payment;
    c=JSON.parse(localStorage.getItem('Payment') || '{}');
    localStorage.clear();
    console.log(c);
    this.tran.payCheck(c)
    .subscribe(
      (data) => {
        console.log('SUCCESS',data);
      },
      (error) => {
        console.log('ERROR', error);
      }
    );
  }
  ngonChange():void{}


}
