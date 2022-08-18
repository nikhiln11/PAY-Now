import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem("SenderPageAccess","false");
    localStorage.setItem("ReceiverPageAccess","false");
    localStorage.setItem("TransactionPageAccess","false");
    localStorage.setItem('TransactionTable',"false");
    localStorage.setItem('AfterPayment',"false");
  }
  gotosignup() {
    this.router.navigate(['/signup']);
  }
  gotologin() {
    this.router.navigate(['/emplogin']);
  }
}



