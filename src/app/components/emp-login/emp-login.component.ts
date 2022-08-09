import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotologin()
  {
    this.router.navigate(['/login']);
  }

}
