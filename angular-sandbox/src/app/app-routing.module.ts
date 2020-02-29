import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactiveFormComponent } from './forms/reactive/components/reactive-form/reactive-form.component';
import { DynamicFormComponent } from './forms/reactive/components/dynamic-form/dynamic-form.component';


const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'reactive',
    component: ReactiveFormComponent,
  },
  {
    path: 'dynamic',
    component: DynamicFormComponent,
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

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false
      }
    ),

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
