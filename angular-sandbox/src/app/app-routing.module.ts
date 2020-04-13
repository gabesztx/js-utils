import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomPreloadingStrategyService } from './services/custom-preloading-strategy.service';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    // canLoad: [UserGuard]
    // if preload true, automatic load lazy module - handling in CustomPreloadingStrategyService
    // data: {preload: true}
  },
  {
    path: '', redirectTo: '/welcome', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/welcome',
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        // preloadingStrategy: NoPreloading, // default
        // preloadingStrategy: PreloadAllModules, // automatic load all only lazy load feature module
        // preloadingStrategy: CustomPreloadingStrategyService, // custom only lazy load feature module
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
