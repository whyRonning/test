import {BehaviorSubject, catchError, Observable, Subject, tap, throttleTime, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
@Injectable()
export class LoginService {
  private _token:string|undefined;

  auth(login:string,password:string):Observable<any>{
    return this.http.post("http://localhost:5000/api/auth",{login,password}).pipe(throttleTime(1000),tap((_:any)=>{
      this._token=_.token
      localStorage.setItem("token",_.token)
      this.router.navigate(["/profile"])
    }),catchError((err)=>{
      return throwError(err)
    }))
  }

  constructor(private http:HttpClient,private router:Router) {
    const token=localStorage.getItem("token")
    if(token){
      this._token=token
    }
  }
  getToken():string|undefined{
    return this._token
  }
}
