import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {environment} from './environments/environment';
import {AppModule} from './app/app.module';

if (environment.production) {
  console.log('Production');
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
