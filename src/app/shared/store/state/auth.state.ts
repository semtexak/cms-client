import { Entity } from '../../model/base/entity.model';

export interface LoggedUser extends Entity {
    email: string;
    roles: string[];
}

export interface JwtToken {
    token: string;
}

export interface AuthenticationState {
    isLoading: boolean;
    isAuthenticated: boolean;
    token: string;
    user: LoggedUser;
}

export const initialState: AuthenticationState = {
    isLoading: false,
    isAuthenticated: false,
    token: null,
    user: null
}