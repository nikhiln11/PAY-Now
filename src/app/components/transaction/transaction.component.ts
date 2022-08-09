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
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  public sendPay! : Payment;
  public transferType:string="";
  public mCode: string="";
  loginForm = new FormGroup({
    amount: new FormControl(null, [Validators.required]),
  });
  constructor(private router:Router,private sender: AuthenticateService,private rec: RecauthService,private payz: PayService ) { }
  doCheck()
  {
    if(this.loginForm.value.amount)
    this.sendPay.amountSent= this.loginForm.value.amount;
    this.sendPay.senderName=this.sender.senderAccount.accountHolderName;
    this.sendPay.receiverName=this.rec.recName;
    this.sendPay.senderId=this.sender.senderAccount.customerId;
    this.sendPay.messageCode=this.mCode;
    this.sendPay.transferTypes=this.transferType;
    let dateTime = new Date();
    const d=String(dateTime);
    this.sendPay.payTime=d;
    this.payz.payCheck(this.sendPay);
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
