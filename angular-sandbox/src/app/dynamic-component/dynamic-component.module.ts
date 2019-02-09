import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromDynamicComponentState from './reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('dynamicComponentState', fromDynamicComponentState.reducers, { metaReducers: fromDynamicComponentState.metaReducers })
  ]
})
export class DynamicComponentModule { }
