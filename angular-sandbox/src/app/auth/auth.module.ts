import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { LoginFormComponent } from './componens/login-form/login-form.component';
import { LoginDataService } from './services/login-data.service';

@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [LoginDataService],
  exports: [LoginPageComponent]
})
export class AuthModule {
}
