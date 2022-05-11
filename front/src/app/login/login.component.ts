import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = this.formBuilder.group({
    login: ["", Validators.required],
    password: ["", Validators.required]
  })
  errText = "";
  isErr = false;

  constructor(private formBuilder: FormBuilder, private loginIn: LoginService, private _cdr: ChangeDetectorRef) {
  }


  onSubmit() {
    this.loginIn.auth(this.form.value.login, this.form.value.password).subscribe({
      error: (err) => {
        this.errText = err.error.message
        this.isErr = true;
        this._cdr.detectChanges()
        setTimeout(() => {
          this.isErr = false;
          this._cdr.detectChanges()
        }, 3000)

      }
    })
  }

}
