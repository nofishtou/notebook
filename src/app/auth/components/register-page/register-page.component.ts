import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatError } from '@angular/material/form-field';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/shared/services/user.service';
import { SignUp } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;
  regexPassword: RegExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  constructor(private fb: FormBuilder,
              private store: Store,
              private user: UserService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.fb.group({
      name: ['', [
        Validators.required,
      ]],
      email: ['', [
        Validators.required, Validators.email
      ]],
      password: ['', [ Validators.required, Validators.pattern(this.regexPassword) ]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.checkPasswords })
  }

  register(event) {
    event.preventDefault();
    const { email, password, username }: {email:string, password: string, username: string} = this.registerForm.value;
    this.store.dispatch(SignUp({payload: { email: email, password: password, username: username}}));
    // this.user.SignUp(email, password );
  }

  checkPasswords(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;

    return password === confirmPassword ? null : { confirmError: true }
  }

  checkPasswordInput() {
    console.log(this.registerForm.hasError('confirmError'))
    if (this.registerForm.hasError('confirmError')) {
      this.registerForm.controls.confirmPassword.setErrors([{ confirmError: true }]);
    } else {
      this.registerForm.controls.confirmPassword.setErrors(null);
    }
  }
}
