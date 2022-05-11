import {ActivatedRouteSnapshot, CanActivate, Router, UrlTree} from "@angular/router";
import { Observable } from "rxjs";
import {LoginService} from "../login/login.service";
import {Injectable} from "@angular/core";
@Injectable({providedIn:"root"})
export class LoginGuard implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.auth.getToken()){
      this.router.navigate(["/profile"])
      return false
    }
    return true
  }
  constructor(private auth:LoginService,private router:Router) {
  }
}
