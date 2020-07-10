import { SignInToken, Logout, SignUp, SignUpSuccess } from '../action/auth.action';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, mapTo, catchError, map, delay, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SignIn, SignInSuccess, SignInError, AuthenticationActionEnum } from '../action/auth.action';
import { AuthService } from '../../service/auth.service';
import { LoggedUser, JwtToken } from '../state/auth.state';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthEffect {

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private cookieService: CookieService
    ) {
    }

    @Effect()
    signIn$ = this.actions$.pipe(
        ofType<SignIn>(AuthenticationActionEnum.SignIn),
        switchMap(action => this.authService.authenticate(action.payload)),
        map((token: JwtToken) => new SignInToken(token)),
        // catchError(e => {new SignInError({message: e}))
    );

    @Effect()
    signUp$ = this.actions$.pipe(
        ofType<SignUp>(AuthenticationActionEnum.SignUp),
        switchMap(action => this.authService.signUp(action.payload)),
        map((token: JwtToken) => new SignInToken(token)),
        // catchError(e => {new SignInError({message: e}))
    );

    @Effect()
    signInToken$ = this.actions$.pipe(
        ofType<SignInToken>(AuthenticationActionEnum.SignInToken),
        map((action) => {
            return new SignInSuccess(this.authService.decodeToken(action.payload));
        }),
        // catchError(e => {new SignInError({message: e}))
    );

    @Effect({dispatch: false})
    logout$ = this.actions$.pipe(
        ofType<Logout>(AuthenticationActionEnum.Logout),
        tap(_ => {
            console.log('Deleting', this.cookieService.get('jwt'));
            this.cookieService.delete('jwt', '/');
            console.log('Deleting', this.cookieService.get('jwt'));
        }),
        // catchError(e => {new SignInError({message: e}))
    );

    
}