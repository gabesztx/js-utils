// import * as _ from 'lodash'
// import * as moment from 'moment'

const button1 = document.createElement('button');
const getTheme = (themeName: any) => import(`./themes/${themeName}`);

button1.innerHTML = 'Click me!';
button1.onclick = e => {
    console.log('Click');
    /* Lodash load */
    /*import('lodash').then((lodash) => {
        const _ = lodash['default'];
        console.log(_.join(['Hello', 'webpack'], 'sff'));
    })*/
    /* Moment js load */
    /*import('moment/moment.js').then((moment_) => {
         const moment =  moment_['default'];
         const time = moment().format();
         console.log('Moment loaded');
         console.log('Time: ', time);
     })*/

    /* Basic js load */
    /*    import('./print.js').then(module => {
            console.log('Print Loaded:');
            module.default()
        });*/

    /* Load more js modules in folder dynamic */
    getTheme('a').then(module => {
        console.log('A Module loaded: ', module);
    });
};

setTimeout(() => {
    document.body.appendChild(button1);
});