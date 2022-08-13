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
  public c!:any;
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    name: new FormControl(null,[Validators.required]),
  });
  constructor(private router:Router,private auth:RecauthService,private nCheck: NamecheckService) { }

  ngOnInit(): void {
  }
  gotoTransaction()
  {

  }
  doCheck() {
    const cId: any = this.loginForm.value.email;
    if(this.loginForm.value.name){
    this.auth.recName=this.loginForm.value.name;
      localStorage.setItem("ReceiverName",this.loginForm.value.name);
    }
    this.auth.authenticateBIC(cId)
     .subscribe(
       (data) => {
          this.c=data;
         console.log('BIC Authentication Successful',data);
         if(this.loginForm.value.email)
         localStorage.setItem("ReceiverBIC",this.loginForm.value.email);
    //     this.turnOn=true;
         this.auth.turnOn=true;
     },
       (error) => {
         console.log('BIC Authentication Failure', error);
         this.auth.turnOn=false;
       }
     );
     if(this.loginForm.value.name)
     this.nCheck.nameCheck(this.loginForm.value.name)
     .subscribe(
      (data)=>
      {
        if(!data){
          if(this.loginForm.value.name)
        localStorage.setItem("ReceiverName",this.loginForm.value.name);
        }
        else
        alert("Sorry!This name is under terror list!");
      }
     );


  }
  goNext()
  {
    if(localStorage.getItem("ReceiverName")&&localStorage.getItem("ReceiverBIC"))
     this.router.navigate(['/transaction']);
     else
     this.router.navigate(['/receiver']);
  }

}
