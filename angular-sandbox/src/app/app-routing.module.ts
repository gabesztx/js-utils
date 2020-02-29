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
    path: 'forms',
    loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
    data: {
      // preload: true // if preload true, automatic load module, handling in CustomPreloadingStrategyService
    }
  },
  {
    path: 'components',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule),
    data: {
      preload: false
    }

  },
  {
    path: 'modules',
    loadChildren: () => import('./ng-modules/ng-modules.module').then(m => m.NgModulesModule)
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
        // preloadingStrategy: NoPreloading, // default
        // preloadingStrategy: PreloadAllModules, // automatic load all lazy load feature module
        preloadingStrategy: CustomPreloadingStrategyService, // custom lazy load feature module
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
