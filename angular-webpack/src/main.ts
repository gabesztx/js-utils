import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';

// console.log('NODE ENV: ', process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
    console.log('Production');
    enableProdMode();
}

function main() {
    return platformBrowserDynamic().bootstrapModule(AppModule);
}

if (document.readyState === 'complete') {
    main();
} else {
    document.addEventListener('DOMContentLoaded', main);
}



