import {BehaviorSubject, mergeMap, Observable, of, Subject, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {cartObjType, cartType} from "../carts/cartType";
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class ReqService {

  private carts$ = new Subject();
  carts: Observable<any>;

  constructor(private http: HttpClient) {
    this.carts = this.carts$.asObservable();
  }

  getCarts() {
    return this.http.get("http://localhost:5000/api/carts").pipe(tap((_) => this.carts$.next(_)))
  }

  setCarts(cart: cartType) {
    return this.http.post("http://localhost:5000/api/carts",{cart}).pipe(mergeMap(() => this.getCarts()))
  }
}
