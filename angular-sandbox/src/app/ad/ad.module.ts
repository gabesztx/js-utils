import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromAd from './reducers';
import { AdEffects } from './effects/ad.effects';
import { AdService } from './services/ad.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('ad', fromAd.reducers),
    EffectsModule.forFeature([AdEffects]),
  ],
  providers: [
    AdService
  ]
})
export class AdModule {
}
