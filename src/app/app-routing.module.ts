import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReceiverComponent } from './components/receiver/receiver.component';
import { SignupComponent } from './components/signup/signup.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NextgaurdGuard } from './Gaurdservices/nextgaurd.guard';

const routes: Routes = [
  { path:'',component:WelcomeComponent},
{ path:'signup',component:SignupComponent},
{ path:'login',component:LoginComponent },
{ path:"receiver",component:ReceiverComponent,canActivate:[NextgaurdGuard]},
{ path:"transaction",component:TransactionComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
