import { Action } from '@ngrx/store';

export enum DynamicComponentActionTypes {
  LoadDynamicComponents = '[DynamicComponent] Load DynamicComponents',
}
export class LoadDynamicComponents implements Action {
  readonly type = DynamicComponentActionTypes.LoadDynamicComponents;
}
export type DynamicComponentActions = LoadDynamicComponents;
