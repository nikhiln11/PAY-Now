import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../services/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class NextgaurdGuard implements CanActivate {
  constructor(private _auth:AuthenticateService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this._auth.turnOn){
     // this.router.navigate(['/receiver']);
    return true;}
    else
    {
      this.router.navigate(['/login']);
    return false;
    }
  }

}
