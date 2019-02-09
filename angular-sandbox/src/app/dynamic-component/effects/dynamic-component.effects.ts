import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';



import { DynamicComponentActionTypes } from '../actions/dynamic-component.actions';

@Injectable()
export class DynamicComponentEffects {


  @Effect()
  loadDynamicComponents$ = this.actions$.pipe(ofType(DynamicComponentActionTypes.LoadDynamicComponents));


  constructor(private actions$: Actions) {}

}
