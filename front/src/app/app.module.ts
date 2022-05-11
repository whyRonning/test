import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartItemComponent } from './carts/cart-item/cart-item.component';
import { CartsComponent } from './carts/carts.component';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import {ReactiveFormsModule} from "@angular/forms";
import {LoginService} from "./login/login.service";
import {IsErrDirective} from "./login/is-err.directive";
import { AlertComponent } from './login/alert/alert.component';
import { HeadTitleComponent } from './profile/head-title/head-title.component';

@NgModule({
  declarations: [
    AppComponent,
    CartsComponent,
    CartItemComponent,
    LoginComponent,
    ProfileComponent,IsErrDirective, AlertComponent, HeadTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
