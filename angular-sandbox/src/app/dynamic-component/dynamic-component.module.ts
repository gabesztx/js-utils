import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromDynamicComponent from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { DynamicComponentEffects } from './effects/dynamic-component.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('dynamicComponent', fromDynamicComponent.reducers),
    EffectsModule.forFeature([DynamicComponentEffects]),
  ]
})
export class DynamicComponentModule { }
