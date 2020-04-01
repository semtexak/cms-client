import { Action } from '@ngrx/store';
import { SignInForm } from '../../model/form/sign-in.form';
import { LoggedUser, JwtToken } from '../state/auth.state';

export enum AuthenticationActionEnum {
    SignIn = '[Auth] Sign in',
    SignInToken = '[Auth] Sign in by token',
    SignUp = '[Auth] Sign up',
    SignInSuccess = '[Auth] Sign in/up success',
    SignInError = '[Auth] Sign in error',
    SignUpError = '[Auth] Sign up error'
}

export class SignIn implements Action {
    public readonly type = AuthenticationActionEnum.SignIn;
    constructor(public payload: SignInForm) {}
}
export class SignInToken implements Action {
    public readonly type = AuthenticationActionEnum.SignInToken;
    constructor(public payload: JwtToken) {}
}
export class SignUp implements Action {
    public readonly type = AuthenticationActionEnum.SignUp;
    constructor(public payload: SignInForm) {}
}
export class SignInSuccess implements Action {
    public readonly type = AuthenticationActionEnum.SignInSuccess;
    constructor(public payload: LoggedUser) {}
}
export class SignUpError implements Action {
    public readonly type = AuthenticationActionEnum.SignUpError;
    constructor(public payload: {message: string}) {}
}
export class SignInError implements Action {
    public readonly type = AuthenticationActionEnum.SignInError;
    constructor(public payload: {message: string}) {}
}

export type AuthenticationActions = SignIn | SignInToken | SignUp | SignInSuccess | SignInError | SignUpError;
