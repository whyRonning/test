import {Component, Input, OnInit} from '@angular/core';
import {cartType} from "../cartType";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
    @Input() cart:any;
  constructor() { }



}
