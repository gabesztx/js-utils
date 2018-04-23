// import * as _ from 'lodash'
/*import {enableProdMode} from '@angular/core';
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
}*/


// import * as _ from 'lodash'
// import * as moment from 'moment'
// const getTheme = (themeName: any) => import(`./themes/${themeName}`);

const button1 = document.createElement('button');

button1.innerHTML = 'Click me!';
button1.onclick = e => {
    console.log('Click');
    // console.log(moment);
    /* Lodash load */
    import('lodash').then((lodash) => {
        const _ = lodash['default'];
        console.log(_.join(['Hello', 'webpack'], 'sff'));
    })

    /* Moment js load */
 /*   import('moment/moment.js').then((moment_) => {
         const moment =  moment_['default'];
         const time = moment().format();
         console.log('Moment loaded');
         console.log('Time: ', time);
     })*/
    /* basic js load */
    /*
    import('./print.js').then(module => {
        console.log('Print Loaded:');
        module.default()
    })
    */

    /* load more js modules in folder dynamic */
    /*getTheme('a').then(module => {
        console.log('A Module loaded: ', module);
    });*/
};

setTimeout(() => {
    console.log('Page Loaded!');
    document.body.appendChild(button1);
});