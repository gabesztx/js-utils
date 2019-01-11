import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LandingActionTypes } from '../actions/landing.actions';

@Injectable()
export class LandingEffects {

  @Effect()
  loadLandings$ = this.actions$.pipe(ofType(LandingActionTypes.LoadLandings));

  constructor(private actions$: Actions) {}
}
