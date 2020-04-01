import { JwtToken } from '../store/state/auth.state';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { SignInForm } from '../model/form/sign-in.form';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoggedUser } from '../store/state/auth.state';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  authenticate(form: SignInForm) {
    console.log('Auth');
    return this.http.post(`${this.apiUrl}/auth/sign-in`, form).pipe(
      // map((res: JwtToken) => this.decodeToken(res)),
      catchError(e => throwError(e))
    );
  }

  decodeToken(token: JwtToken): LoggedUser {
    console.log('Decoding...');
    const user: LoggedUser = jwt_decode(token.token);
    console.log(user, token);
    return user;
  }
}
