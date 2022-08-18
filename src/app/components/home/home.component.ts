import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  checkDate(){
    let current = new Date();
    let today = current.toLocaleDateString('en-US',{weekday: 'long'});
    if(today=='Sunday' || today == 'Saturday'){
        alert(`oops...!  on saturday and sundays our bank is on leave`)
      }
      else{
        this.router.navigate(['/welcome']);
      }
  }

}
