import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NamecheckService } from 'src/app/services/namecheck.service';
import { RecauthService } from 'src/app/services/recauth.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {
  public dataAvailable:boolean=false;
  public c!:any;
  isDisabled1=true;
  isHidden=false;
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required,Validators.minLength(11)]),
    name: new FormControl(null,[Validators.required]),
    recId : new FormControl(null,[Validators.required,Validators.minLength(14)]),
  });
  constructor(private router:Router,private auth:RecauthService,private nCheck: NamecheckService) { }

  ngOnInit(): void {
  }
 showBankName()
  {
    const cId: any = this.loginForm.value.email;
    this.auth.authenticateBIC(cId)
    .subscribe(
      (data) => {
       if(data==null){
       alert("BIC Not Found! Please Try Again");}
       else{
        localStorage.setItem("TransactionPageAccess","true");
         this.c=data;
        console.log('BIC Authentication Successful',data);
        if(this.loginForm.value.email)
        localStorage.setItem("ReceiverBIC",this.loginForm.value.email);
   //     this.turnOn=true;
        this.auth.turnOn=true;
        this.isHidden=true;
        localStorage.setItem("HiddenRec","true");

    }
    },
      (error) => {
        console.log('BIC Authentication Failure', error);
        this.auth.turnOn=false;
      }
    );


  }
  doCheck() {
    const cId: any = this.loginForm.value.email;
    if(this.loginForm.value.name){
    this.auth.recName=this.loginForm.value.name;
      localStorage.setItem("ReceiverName",this.loginForm.value.name || '{}');
    }
    console.log(this.loginForm.value.recId);

    alert("Please wait for 5 seconds while we are checking the name!");
     if(this.loginForm.value.name)
     this.nCheck.nameCheck(this.loginForm.value.name)
     .subscribe(
      (data)=>
      {
        console.log(data);
        if(!data){
          if(this.loginForm.value.name)
        localStorage.setItem("ReceiverName",this.loginForm.value.name);
        alert("Thank you for authenticating your Name!");
        //this.router.navigate(['/transaction']);
        this.isDisabled1=false;
        }
        else
        alert("Sorry!This name is under terror list!");
      }
     );


  }
  goNext()
  {

    const rId: any = this.loginForm.value.recId ;
    localStorage.setItem("ReceiverAccount",this.loginForm.value.recId || '{}');
    this.router.navigate(['/transaction']);

  }

}
