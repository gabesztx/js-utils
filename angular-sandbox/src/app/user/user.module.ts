import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from './components/user/user.component';
import { UserDataService } from "./services/user-data.service";


@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UserRoutingModule
  ],
  providers: [
    UserDataService
  ]
})
export class UserModule {
}
