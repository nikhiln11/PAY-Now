import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { PayService } from 'src/app/services/pay.service';
import { RecauthService } from 'src/app/services/recauth.service';
import { Payment, Sender } from 'src/app/types';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  providers: []

})
export class TransactionComponent implements OnInit {
  public sendPay= new Payment;
  public transferType:string="Please Select a transfer Type";
  public mCode: string="Please Select a Message Type";
  loginForm = new FormGroup({
    amount: new FormControl(),
  });
  constructor( private router:Router,private sender: AuthenticateService,private rec: RecauthService,private payz: PayService ) { }
  doCheck()
  {

    if(this.loginForm.value.amount)
    this.sendPay.amountSent= this.loginForm.value.amount;
    console.log(this.sendPay.amountSent);
     this.sendPay.senderName=localStorage.getItem("SenderName");
    this.sendPay.receiverName=localStorage.getItem("ReceiverName");
    this.sendPay.senderId=Number(localStorage.getItem("SenderAccount"));

    this.sendPay.messageCode=this.mCode;
    this.sendPay.transferTypes=this.transferType;
    this.sendPay.receiverId = localStorage.getItem("ReceiverAccount") || '{}';
    let dateTime = new Date();
    const d=String(dateTime);
    this.sendPay.payTime=d;
    //console.log(this.sendPay);
    localStorage.setItem("Payment",JSON.stringify(this.sendPay));
    //this.payz.payCheck(this.sendPay);
    this.payz.afterPay=this.sendPay;
    localStorage.setItem("AfterPayment","true");
    this.router.navigate(['/afterp']);

  }
  transType(c:any)
  {
    this.transferType=c;
    console.log(this.transferType);
  }
  msgCode(c:any)
  {
    this.mCode=c;
    console.log(this.mCode);
  }
  ngOnInit(): void {
  }

}
