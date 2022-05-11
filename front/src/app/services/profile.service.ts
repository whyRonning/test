import {Observable, Subject, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
@Injectable({providedIn:"root"})
export class ProfileService {

  public users: Observable<any>;
  public userCards: Observable<any>;
  private _users:Subject<any>=new Subject<any>()
  private _userCarts:Subject<any>=new Subject<any>()


  constructor(private http:HttpClient) {
    this.users = this._users.asObservable()
    this.userCards = this._userCarts.asObservable();
  }

  getUsers(){
    return this.http.get("http://localhost:5000/api/users").pipe(
      tap(({users}:any)=>{
        this._users.next(users)
      })
    )
  }
  getUserCarts(user:any){
    return this.http.get(`http://localhost:5000/api/userCarts`,{params:{user}}).pipe(
      tap(({carts}:any)=>{
        this._userCarts.next(carts)
      })
    )
  }
}
