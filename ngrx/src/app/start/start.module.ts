import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromStart from './reducers/start.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StartEffects } from './effects/start.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('start', fromStart.reducer),
    EffectsModule.forFeature([StartEffects])
  ]
})
export class StartModule { }
