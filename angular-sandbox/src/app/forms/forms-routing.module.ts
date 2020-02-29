import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { DynamicComponent } from './dynamic/dynamic.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'reactive',
        component: ReactiveComponent
      },
      {
        path: 'dynamic',
        component: DynamicComponent
      },
      {
        path: '',
        redirectTo: 'reactive',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'reactive'
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FormsRoutingModule {
}


/*
const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule)
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/welcome',
  },

];*/
