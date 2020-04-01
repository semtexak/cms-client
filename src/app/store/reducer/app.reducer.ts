import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { authenticationReducer } from 'src/app/shared/store/reducer/auth.reducer';

export const appReducer: ActionReducerMap<AppState, any> = {
    authentication: authenticationReducer,
    router: routerReducer
};