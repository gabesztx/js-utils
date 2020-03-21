import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgModulesRoutingModule } from './ng-modules-routing.module';
import { NgModulesComponent } from './ng-modules.component';
import { ProvidersComponent } from './providers/providers.component';
import { SingletonServiceComponent } from './singleton-service/singleton-service.component';
import { SharingModulesComponent } from './sharing-modules/sharing-modules.component';


@NgModule({
  declarations: [NgModulesComponent, ProvidersComponent, SingletonServiceComponent, SharingModulesComponent],
  imports: [
    CommonModule,
    NgModulesRoutingModule
  ]
})
export class NgModulesModule {
}
