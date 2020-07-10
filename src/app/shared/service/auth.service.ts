import { SignInToken, SignIn } from './../store/action/auth.action';
import { Store } from '@ngrx/store';
import { JwtToken, AuthenticationState } from '../store/state/auth.state';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { SignInForm } from '../model/form/sign-in.form';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoggedUser } from '../store/state/auth.state';
import * as jwt_decode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { SignUpForm } from '../model/form/sign-up.form';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private store: Store<AuthenticationState>,
    private cookieService: CookieService
  ) {
    this.loadAuth();
  }

  // TODO Why setTimeout?
  private loadAuth() {
    const token = this.cookieService.get('jwt');
    if (token) {
      setTimeout(_ => {
        this.store.dispatch(new SignInToken({ token }));
      }, 100);
    }
  }

  authenticate(form: SignInForm) {
    return this.http.post(`${this.apiUrl}/auth/sign-in`, form).pipe(
      // map((res: JwtToken) => this.decodeToken(res)),
      catchError(e => throwError(e))
    );
  }

  signUp(form: SignUpForm) {
    return this.http.post(`${this.apiUrl}/auth/sign-up`, form).pipe(
      // map((res: JwtToken) => this.decodeToken(res)),
      catchError(e => throwError(e))
    );
  }

  decodeToken(token: JwtToken): LoggedUser {
    const user: LoggedUser = jwt_decode(token.token);
    this.cookieService.set('jwt', token.token, new Date(user.iat * 1000), '/');
    return user;
  }
}
