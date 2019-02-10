import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromAd from './reducers';
import { AdEffects } from './effects/ad.effects';
import { AdService } from './services/ad.service';
import { AdPageComponent } from './containers/ad-page/ad-page.component';

@NgModule({
  declarations: [AdPageComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('ad', fromAd.reducers),
    EffectsModule.forFeature([AdEffects]),
  ],
  providers: [
    AdService
  ],
  exports: [AdPageComponent],
})
export class AdModule {}
