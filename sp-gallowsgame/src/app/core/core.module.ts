import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { LandingPageComponent } from './containers/landing-page/landing-page.component';
import { AppComponent } from './components/app-component/app.component';

export const COMPONENTS = [
  AppComponent,
  LandingPageComponent,
  HeaderComponent,
  DropDownComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule {
}
