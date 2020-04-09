import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from "./components/card-list/card-list.component";
import { CardsComponent } from "./components/cards/cards.component";
import { CardDetailComponent } from "./components/card-detail/card-detail.component";

const routes: Routes = [
  {
    path: '',
    component: CardsComponent,
    children: [
      {
        path: 'list',
        component: CardListComponent
      },
      {
        path: 'list/:id',
        component: CardDetailComponent
      },
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      },
      { path: '**', redirectTo: 'list'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule {
}
