import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SignIn } from 'src/app/store/actions/user.actions';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  regexPassword: RegExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  constructor(private fb: FormBuilder,
              private store: Store) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required, Validators.email
      ]],
      password: ['', [
        Validators.required, Validators.pattern(this.regexPassword)
      ]]
    })
  }

  login(event) {
    event.preventDefault();
    const { email, password }: { email: string, password: string } = this.loginForm.value;
    this.store.dispatch(SignIn({payload: { mail: email ,password: password}}));
    // this.user.SignIn(email, password);
  }
}
