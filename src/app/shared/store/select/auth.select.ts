import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthenticationState } from '../state/auth.state';

export const selectAuthentication = createFeatureSelector<AuthenticationState>('authentication');

export const getAuth = createSelector(
    selectAuthentication,
    (state: AuthenticationState) => state
);
export const getUser = createSelector(
    selectAuthentication,
    (state: AuthenticationState) => state.user
);