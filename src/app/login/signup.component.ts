import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import {Router } from '@angular/router';

@Component({
  templateUrl:"signup.html"
  
//   `<app-headercomp></app-headercomp><br><br><h1>This is the signup component</h1>

//   <form #signupform="ngForm" (ngSubmit)="signupsub(signupform.value)">
//       <input type="text" name="username" #username="ngModel" ngModel required minlength="5" placeholder="username">
//       <br><br>
//       <input type="text" name="password" ngModel required placeholder="password">
//       <br><br>
//       <input type="text" name="email" ngModel required placeholder="email">
//       <br><br>
//       <input type="text" name="address" ngModel required placeholder="address">
//       <br><br>
//       <input type="text" name="fullname" ngModel required placeholder="fullname">
//       <br><br>
//       <div *ngIf="username.errors">
//           <small *ngIf="username.errors.required && username.touched">username is required</small>
//           <small *ngIf="username.errors.minlength && username.dirty">
//               {{username.errors.minlength.requiredLength-username.errors.minlength.actualLength}} more characters
//           </small>
//       </div>
//   <button type="submit" [disabled]="signupform.invalid">Submit</button>
//   </form>`
  
//   `
// <style>
// .container{
// margin-top:10rem;

// }
// @media(max-width:500px){

// .container{
//     margin-top: 6rem;
// }
// }

// </style>



// <div class="container">
//     <div class="row justify-content-center">
//         <div class="col-md-6 col-sm-6 col-xs-6">
// <div class="card mb-5">
//     <h3 class="card-header text-center text-white bg-primary">Signup</h3>
//     <div class="card-body">
    
//       <form #signupform="ngForm" (ngSubmit)="signupsub(signupform.value)">
//       <div class="row">
//       <div class="form-group col-md-6">
//       <label>Username</label>

//       <div class="input-group mb-3">
//       <div class="input-group-prepend">
//         <span class="input-group-text"><i class="fas fa-user-tie"></i></span>
        
//       </div>
//       <input type="text" name="username" #username="ngModel" ngModel required minlength="5" placeholder="username" class="form-control">
//     </div>





      
//       </div>




//       <div class="form-group col-md-6">
//       <label>Password</label>


//       <div class="input-group mb-3">
//       <div class="input-group-prepend">
//         <span class="input-group-text"><i class="fa fa-key"></i></span>
    
//       </div>
//       <input type="text" name="password" ngModel required placeholder="password" class="form-control">
//     </div>






      
//       </div> 






//       <div class="form-group col-md-6">
//       <label>Email</label>
//       <div class="input-group mb-3">
//       <div class="input-group-prepend">
//         <span class="input-group-text"><i class="fa fa-envelope"></i></span>
        
//       </div>
//       <input type="text" name="email" ngModel required placeholder="email" class="form-control">
//     </div>





      
//       </div>

//       <div class="form-group col-md-6">
//       <label>Address</label>
      
//       <div class="input-group mb-3">
//       <div class="input-group-prepend">
//         <span class="input-group-text"><i class="fas fa-map-marker-alt"></i></span>
        
//       </div>
//       <input type="text" name="address" ngModel required placeholder="address" class="form-control">
//     </div>


      
//       </div>
//       <div class="form-group col-md-12">
//       <label>Fullname</label>
//       <div class="input-group mb-3">
//       <div class="input-group-prepend">
//         <span class="input-group-text"><i class="fas fa-signature"></i></span>
        
//       </div>
//       <input type="text" name="fullname" ngModel required placeholder="fullname" class="form-control">
//     </div>

      
//       </div>
//       <div *ngIf="username.errors">
//           <small *ngIf="username.errors.required && username.touched">username is required</small>
//           <small *ngIf="username.errors.minlength && username.dirty">
//               {{username.errors.minlength.requiredLength-username.errors.minlength.actualLength}} more characters
//           </small>
//       </div>
  
//   </div>
//   <button type="submit" [disabled]="signupform.invalid" class="btn btn-primary btn-block col-md-12">Submit</button>
//   </form>
    
//     </div>
//     </div>
//     </div></div>
//     </div>






// `
  
  
  
  
  
})
export class SignupComponent {

    constructor(private http:HttpClient,private router:Router){  
    }

    signupsub(form){
        this.http.post('/user',{
            fullname:form.fullname,
            email:form.email,
            password:form.password,
            address:form.address,
            username:form.username
        }).subscribe((res:any)=>{
            
            console.log(res.message)
            // this.router.navigate(['/dashboard']);
        })
    }
}
