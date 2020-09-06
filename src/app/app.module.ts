import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { Guard } from './services/auth.guard';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path:'',
      redirectTo:'dashboard',
      pathMatch:'full'
    },{
      path:'login',
      loadChildren:'./login/login.module#LoginModule'
    },{
      path:'dashboard',
      canActivate:[Guard],
      loadChildren:'./dashboard/dashboard.module#DashboardModule'
    }])
  ],
  providers: [
    Guard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


