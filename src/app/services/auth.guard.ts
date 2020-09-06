import {Injectable} from "@angular/core";
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router} from "@angular/router"
import { HttpClient } from "@angular/common/http";

@Injectable()
export class Guard implements CanActivate{

    constructor(
        private http: HttpClient,
        private router : Router
    ){}

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        if(localStorage.getItem('token')==null){
            this.router.navigate(['/login']);
            return false;
        }
        return this.http.get<boolean>('/user/check', {headers: {'token': localStorage.getItem('token')}}).pipe(res =>{
            res.subscribe(response=>{
                if(!response){
                    this.router.navigate(['/login']);              
                }
            })         
            return res;
        })      
    }
}
