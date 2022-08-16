import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AfterPaymentComponent } from './components/after-payment/after-payment.component';
import { EmpLoginComponent } from './components/emp-login/emp-login.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LoginComponent } from './components/login/login.component';
import { ReceiverComponent } from './components/receiver/receiver.component';
import { SignupComponent } from './components/signup/signup.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NextgaurdGuard } from './Gaurdservices/nextgaurd.guard';

const routes: Routes = [
  { path:'emplogin',component:EmpLoginComponent},
  { path:'',component:WelcomeComponent},
{ path:'signup',component:SignupComponent},
{ path:'login',component:LoginComponent },
{ path:"receiver",component:ReceiverComponent,canActivate:[NextgaurdGuard]},
{ path:"transaction",component:TransactionComponent},
{ path:"afterp", component:AfterPaymentComponent},
{ path:"error", component:ErrorPageComponent},

{ path:"**", component:ErrorPageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
