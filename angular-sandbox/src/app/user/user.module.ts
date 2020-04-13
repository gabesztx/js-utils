import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [
  ]
})
export class UserModule {
}
