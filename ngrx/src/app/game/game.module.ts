import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './effects/game.effects';
import { LandingPageComponent } from './containers/landing-page/landing-page.component';
import { GamePageComponent } from './containers/game-page/game-page.component';
import { GameDataService } from './services/game-data.service';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    LandingPageComponent,
    GamePageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    StoreModule.forFeature('game', reducers),
    EffectsModule.forFeature([GameEffects])
  ],
  providers: [
    GameDataService
  ],
  exports: [
    LandingPageComponent,
    GamePageComponent
  ]
})
export class GameModule {
}
