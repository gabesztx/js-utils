import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromLanding from './reducers/landing.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LandingEffects } from './effects/landing.effects';
import { PageComponent } from './component/page/page.component';

@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    StoreModule.forFeature('landing', fromLanding.reducer),
    EffectsModule.forFeature([LandingEffects])
  ],
  exports: [PageComponent]
})
export class LandingModule { }
