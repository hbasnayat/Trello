import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-headercomp',
  templateUrl: 'header.html'


})
export class HeaderComponent {
  constructor(private router:Router){
  }
  logout(){
      localStorage.clear();
      this.router.navigate(['/login']);

  }
  isloggedin(){
    return localStorage.getItem('token')!==null;
    }
 }

  

