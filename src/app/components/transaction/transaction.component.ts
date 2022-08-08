import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Sender } from 'src/app/types';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  public transferType:string="";
  public mCode: string="";
  loginForm = new FormGroup({
    amount: new FormControl(null, [Validators.required]),
  });
  constructor(private router:Router,private sender: AuthenticateService ) { }
  doCheck()
  {
    const c = this.loginForm.value.amount;
    if(this.sender.senderAccount)
    {
    // if(c<this.sender.senderAccount.clearBalance)
    // console.log("Transaction Successful!");
    // else
    // console.log("Transaction Unsuccessful");
    // code to check the amount is less than available and if not check for "Overdraft" and start transaction
    }
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
