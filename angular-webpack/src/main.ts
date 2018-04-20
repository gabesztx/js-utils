import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';

// console.log('PROCESS ENV: ', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
    console.log('PRODUCTION MODE!');
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
