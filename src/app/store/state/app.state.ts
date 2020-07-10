import { BlogState } from 'src/app/module/cms/store/state/blog.state';
import { AuthenticationState } from 'src/app/shared/store/state/auth.state';
import { initialState as initialAuthenticationState } from '../../shared/store/state/auth.state';

export interface AppState {
    authentication: AuthenticationState;
    router?: any;
}

export const initialState: AppState = {
    authentication: initialAuthenticationState,
}