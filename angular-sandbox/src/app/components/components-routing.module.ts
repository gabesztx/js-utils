import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { IterateComponent } from './iterate/iterate.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      {
        path: 'lifecycle',
        component: LifecycleComponent
      },
      {
        path: 'iterate',
        component: IterateComponent
      },
      {
        path: '',
        redirectTo: 'lifecycle',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'lifecycle'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {
}
