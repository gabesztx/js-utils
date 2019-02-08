import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
// import { environment } from '../../environments/environment';
import * as fromRoot from '../reducers/auth.reducer';
import * as fromLoginForm from './login-form.reducer';

export interface AuthState {
  loginForm: fromLoginForm.State;
}

export interface State extends fromRoot.State {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AuthState> = {
  loginForm: fromLoginForm.reducer,
};
export const selectAuthState = createFeatureSelector<State, AuthState>('auth');

// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
