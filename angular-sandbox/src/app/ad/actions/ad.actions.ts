import { Action } from '@ngrx/store';

export enum AdActionTypes {
  LoadAds = '[Ad] Load Ads',
  
  
}

export class LoadAds implements Action {
  readonly type = AdActionTypes.LoadAds;
}


export type AdActions = LoadAds;
