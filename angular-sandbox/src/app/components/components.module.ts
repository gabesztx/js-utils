import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { IterateComponent } from './iterate/iterate.component';


@NgModule({
  declarations: [ComponentsComponent, LifecycleComponent, IterateComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
