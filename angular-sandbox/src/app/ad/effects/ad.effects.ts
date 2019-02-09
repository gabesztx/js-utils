import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';



import { AdActionTypes } from '../actions/ad.actions';

@Injectable()
export class AdEffects {


  @Effect()
  loadAds$ = this.actions$.pipe(ofType(AdActionTypes.LoadAds));


  constructor(private actions$: Actions) {}

}
