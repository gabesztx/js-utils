import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAd from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AdEffects } from './effects/ad.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('ad', fromAd.reducers),
    EffectsModule.forFeature([AdEffects]),
  ]
})
export class AdModule { }
