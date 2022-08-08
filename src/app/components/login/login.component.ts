import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Sender } from 'src/app/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public c!: any;
  public d=true;
  turnOn=false;
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
  });
  constructor(private auth : AuthenticateService,private router: Router) { }

  ngOnInit(): void {
  }
  gotoReceiver()
  {
    this.router.navigate(['/receiver']);
  }
  doLogin() {
    const cId: any = this.loginForm.value.email;
    this.auth.authenticateCustomer(cId)
    .subscribe(
      (data) => {
        this.c=data;
        console.log('Authentication Successful',data);
        this.auth.senderAccount=data;
        //this.turnOn=true;
        this.auth.turnOn=true;
      },
      (error) => {
        console.log('Authentication Failure', error);
        this.auth.turnOn=false;
      }
    );
  }

}
