import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';




@Component({
    templateUrl: './login.html'
})
export class LoginComponent {


    constructor(private router: Router, private http: HttpClient) { }

    loginsub(form) {

        this.http.post('/user/signin', {
            email: form.email,
            password: form.password
        }).subscribe((res: any) => {
            if (res.success) {
                localStorage.setItem('token', res.token)
                localStorage.setItem('userid', res.userId)
                this.router.navigate(['/dashboard']);
            }
        })
    }

}
// for creating new item localStorage.setItem('name',value)

// for getting a new item localStorage.getItem('name')

// for removing localStorage.removeItem('name')

// for clearing local storage localStorage.clear()