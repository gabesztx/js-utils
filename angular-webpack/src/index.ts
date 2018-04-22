// import * as moment from 'moment'
// const getTheme = (themeName: any) => import(`./themes/${themeName}`);
const button = document.createElement('button');

button.innerHTML = 'Click me!';
button.onclick = e => {

    /* Moment js load */
    /*
    import('moment/moment.js').then((moment_) => {
         const moment =  moment_['default'];
         const time = moment().format();
         console.log('Moment loaded');
         console.log('Time: ', time);
     })
     */
    /* basic js load */
    /*
    import('./print.js').then(module => {
        console.log('Print Loaded:');
        module.default()
    })
    */

    /* load more js modules in folder dynamic */
    /*
    getTheme('f').then(module => {
        console.log('F Module loaded: ', module);
    });
    */
};

setTimeout(() => {
    console.log('Page Loaded!');
    document.body.appendChild(button);
});