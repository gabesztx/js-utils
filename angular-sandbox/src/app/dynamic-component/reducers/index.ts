import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromDynamicComponent from './dynamic-component.reducer';

export interface State {

  dynamicComponent: fromDynamicComponent.State;
}

export const reducers: ActionReducerMap<State> = {

  dynamicComponent: fromDynamicComponent.reducer,
};


// import { environment } from '../../environments/environment';
// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
