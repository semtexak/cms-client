import { SignIn, AuthenticationActionEnum, AuthenticationActions } from '../action/auth.action';
import { AuthenticationState, initialState } from '../state/auth.state';

export const authenticationReducer = (state = initialState, action: AuthenticationActions): AuthenticationState => {
    switch (action.type) {
        case AuthenticationActionEnum.SignIn:
        case AuthenticationActionEnum.SignUp:
            return {
                ...state,
                isLoading: true,
                isAuthenticated: false
            };
        case AuthenticationActionEnum.SignInToken:
            return {
                ...state,
                token: action.payload.token
            };
        case AuthenticationActionEnum.SignInSuccess:
            console.log('Auth red');
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: action.payload
            };
        case AuthenticationActionEnum.SignInError:
        case AuthenticationActionEnum.SignUpError:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
};