import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ReqService} from "../services/req.service";
import {cartType} from "./cartType";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss'],

})
export class CartsComponent implements OnInit {
  carts: Observable<any>;

  constructor(public req: ReqService, private http:HttpClient) {
    this.carts = this.req.carts;
  }

  ngOnInit(): void {
    this.req.getCarts().subscribe()
  }

  setCard(cart:cartType) {
    this.req.setCarts(cart).subscribe()
  }

}
