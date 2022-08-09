import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private router:Router,private auth:RecauthService) { }

  ngOnInit(): void {
  }
  gotoTransaction()
  {
    this.router.navigate(['/transaction']);
  }
  doCheck() {
    const cId: any = this.loginForm.value.email;
    if(this.loginForm.value.name)
    this.auth.recName=this.loginForm.value.name;
    this.auth.authenticateBIC(cId)
     .subscribe(
       (data) => {
          this.c=data;
         console.log('BIC Authentication Successful',data);
    //     this.turnOn=true;
         this.auth.turnOn=true;
     },
       (error) => {
         console.log('BIC Authentication Failure', error);
         this.auth.turnOn=false;
       }
     );

  }
  checkName()
  {
    const n:any=this.loginForm.value.name;

  }

}
