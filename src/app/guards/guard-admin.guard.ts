import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ShareServiceService } from '../services/share-service.service';
import { Route, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GuardAdminGuard implements CanActivate {
  constructor(private myshare:ShareServiceService,private myroute:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve,reject)=>{
      if(this.myshare.isAdmin){
        resolve(true)
      }
      else{
        this.myroute.navigate(['/'])
        resolve(false)
      }
    })

    }
  
}
