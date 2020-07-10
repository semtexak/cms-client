import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthenticationState } from '../../store/state/auth.state';
import { SignInForm } from '../../model/form/sign-in.form';
import { SignIn, SignUp } from '../../store/action/auth.action';
import { SignUpForm } from '../../model/form/sign-up.form';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AuthenticationState>
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  signUp(form: SignUpForm) {
    this.store.dispatch(new SignUp(form));
  }
}
