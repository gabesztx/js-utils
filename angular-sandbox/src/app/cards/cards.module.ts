import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { CardsRoutingModule } from "./cards-routing.module";
import { CardsComponent } from './components/cards/cards.component';


@NgModule({
  declarations: [
    CardListComponent,
    CardDetailComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule
  ]
})
export class CardsModule {
}
