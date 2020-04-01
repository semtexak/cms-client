import { SignInToken } from '../action/auth.action';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, mapTo, catchError, map, delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { SignIn, SignInSuccess, SignInError, AuthenticationActionEnum } from '../action/auth.action';
import { AuthService } from '../../service/auth.service';
import { LoggedUser, JwtToken } from '../state/auth.state';

@Injectable()
export class AuthEffect {

    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) {
    }

    @Effect()
    signInRequest$ = this.actions$.pipe(
        ofType<SignIn>(AuthenticationActionEnum.SignIn),
        switchMap(action => this.authService.authenticate(action.payload)),
        map((token: JwtToken) => new SignInToken(token)),
        // catchError(e => {new SignInError({message: e}))
    );

    @Effect()
    signInToken$ = this.actions$.pipe(
        ofType<SignInToken>(AuthenticationActionEnum.SignInToken),
        map((action) => new SignInSuccess(this.authService.decodeToken(action.payload))),
        // catchError(e => {new SignInError({message: e}))
    );

    
}