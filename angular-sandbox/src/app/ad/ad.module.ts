import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromAd from './reducers';
import { AdEffects } from './effects/ad.effects';
import { AdService } from './services/ad.service';
import { AdPageComponent } from './containers/ad-page/ad-page.component';
import { Item1Component } from './components/item1/item1.component';
import { Item2Component } from './components/item2/item2.component';
import { Item3Component } from './components/item3/item3.component';
import { AdContainerComponent } from './containers/ad-container/ad-container.component';


@NgModule({
  declarations: [
    AdPageComponent,
    AdContainerComponent,
    Item1Component,
    Item2Component,
    Item3Component,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('ad', fromAd.reducers),
    EffectsModule.forFeature([AdEffects]),
  ],
  providers: [
    AdService
  ],
  exports: [AdPageComponent, AdContainerComponent],
  entryComponents: [
    Item1Component,
    Item2Component,
    Item3Component
  ],
})
export class AdModule {
}
