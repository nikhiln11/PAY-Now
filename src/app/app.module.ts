import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReceiverComponent } from './components/receiver/receiver.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { AfterPaymentComponent } from './components/after-payment/after-payment.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { EmpLoginComponent } from './components/emp-login/emp-login.component';
import { TransactTableComponent } from './components/transact-table/transact-table.component';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { HomeComponent } from './components/home/home.component';
import { BankleaveComponent } from './components/bankleave/bankleave.component';
//import { NumonlyDirective } from './directives/numonly.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent,
    ReceiverComponent,
    TransactionComponent,
    AfterPaymentComponent,
    ErrorPageComponent,
    EmpLoginComponent,
    TransactTableComponent,
    NumbersOnlyDirective,
    HomeComponent,
    BankleaveComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
