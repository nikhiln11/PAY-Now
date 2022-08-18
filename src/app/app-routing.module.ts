import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AfterPaymentComponent } from './components/after-payment/after-payment.component';
import { BankleaveComponent } from './components/bankleave/bankleave.component';
import { EmpLoginComponent } from './components/emp-login/emp-login.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReceiverComponent } from './components/receiver/receiver.component';
import { SignupComponent } from './components/signup/signup.component';
import { TransactTableComponent } from './components/transact-table/transact-table.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AfterPaymentPageAccessGuard } from './Gaurdservices/after-payment-page-access.guard';
import { NextgaurdGuard } from './Gaurdservices/nextgaurd.guard';
import { SenderAccessGuard } from './Gaurdservices/sender-access.guard';
import { TransactionAccessGuard } from './Gaurdservices/transaction-access.guard';
import { TransactionPageAccessGuard } from './Gaurdservices/transaction-page-access.guard';

const routes: Routes = [
  { path:'emplogin',component:EmpLoginComponent },
  { path: 'bankleave',component:BankleaveComponent},
  { path:'',component:HomeComponent},
  { path:'welcome',component:WelcomeComponent},
{ path:'signup',component:SignupComponent},
{ path:'login',component:LoginComponent,canActivate:[SenderAccessGuard] },
{ path:"receiver",component:ReceiverComponent,canActivate:[NextgaurdGuard]},
{ path:"transaction",component:TransactionComponent,canActivate:[TransactionPageAccessGuard]},
{ path:"afterp", component:AfterPaymentComponent,canActivate:[AfterPaymentPageAccessGuard]},
{ path:"error", component:ErrorPageComponent},
{ path : "transtable",component:TransactTableComponent,canActivate:[TransactionAccessGuard]},
{ path:"**", component:ErrorPageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
