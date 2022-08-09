import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PayService } from 'src/app/services/pay.service';

@Component({
  selector: 'app-after-payment',
  templateUrl: './after-payment.component.html',
  styleUrls: ['./after-payment.component.css']
})
export class AfterPaymentComponent implements OnInit {

  constructor(private router:Router,private tran: PayService) { }

  ngOnInit(): void {
  }

  // this.tran.payCheck(null)
  // .subscribe(
  //   (data)=>{},
  //   (error)=>{}
  // );
}
