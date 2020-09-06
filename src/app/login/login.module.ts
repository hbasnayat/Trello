import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
      CommonModule,
      HttpClientModule,
      FormsModule,
    RouterModule.forChild([{
        path:'',
        component:LoginComponent
    },{
        path:'signup',
        component:SignupComponent
    }])
  ]
})
export class LoginModule {
  
  
}
 