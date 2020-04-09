import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomPreloadingStrategyService } from './services/custom-preloading-strategy.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'cards',
    loadChildren: () => import('./card-list/card-list.module').then(m => m.CardListModule),
    // if preload true, automatic load lazy module - handling in CustomPreloadingStrategyService
    // data: {preload: true}
  },
  /*{
    path: 'components',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule),

  },*/
  /*{
    path: 'modules',
    loadChildren: () => import('./ng-modules/ng-modules.module').then(m => m.NgModulesModule)
  },*/
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
