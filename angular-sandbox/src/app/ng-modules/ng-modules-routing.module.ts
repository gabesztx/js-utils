import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgModulesComponent } from './ng-modules.component';
import { ProvidersComponent } from './providers/providers.component';
import { SingletonServiceComponent } from './singleton-service/singleton-service.component';
import { SharingModulesComponent } from './sharing-modules/sharing-modules.component';


const routes: Routes = [
  {
    path: '',
    component: NgModulesComponent,
    children: [
      {
        path: 'providers',
        component: ProvidersComponent
      },
      {
        path: 'singleton-service',
        component: SingletonServiceComponent
      },
      {
        path: 'sharing-modules',
        component: SharingModulesComponent
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgModulesRoutingModule { }
