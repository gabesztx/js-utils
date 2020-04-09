import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardListRoutingModule } from './card-list-routing.module';
import { CardListComponent } from './components/card-list/card-list.component';


@NgModule({
  declarations: [
    CardListComponent
  ],
  imports: [
    CommonModule,
    // CardListRoutingModule
  ]
})
export class CardListModule { }
