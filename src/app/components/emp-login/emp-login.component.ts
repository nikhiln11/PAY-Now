import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent implements OnInit {
  loginForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    password: new FormControl(null,[Validators.required]),

  });
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotologin()
  {
    const n:any = this.loginForm.value.name;
    const p:any = this.loginForm.value.password;
   // console.log(n+p);
    if(n=="root" && p=="Root@1234"){
      localStorage.setItem("SenderPageAccess","true");
      localStorage.setItem("TransactionTable","true");
    this.router.navigate(['/login']);}
    else
    alert("Please enter valid credentials for employee login!");
  }

}
