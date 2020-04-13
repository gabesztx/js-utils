import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from "./components/user/user.component";
import { UserDetailComponent } from "./components/user-detail/user-detail.component";
import { UserListComponent } from "./components/user-list/user-list.component";

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'list',
        component: UserListComponent
      },
      {
        path: 'list/:id',
        component: UserDetailComponent
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
export class UserRoutingModule {
}
