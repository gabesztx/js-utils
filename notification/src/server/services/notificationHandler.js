import path from 'path';
// import notifier from 'node-notifier';

// console.log('ICON', icon)
const NotifySend = require('node-notifier').NotifySend;
const NotificationCenter = require('node-notifier').NotificationCenter;
// const icon = path.join(__dirname, 'icon.png');

/*const notifier = new NotificationCenter({
    withFallback: false,
    customPath: void 0
});*/

const notifier = new NotifySend({
    withFallback: false,
    customPath: void 0
});

const setNoticifaction = () => {
    notifier.notify({
        /*title: 'Foo',
        message: 'Hello World',
        urgency: void 0,

        category: void 0,
        hint: void 0,*/
        // icon: __dirname + '/coulson.jpg'
        // time: 2000,
        title: 'Új ingatlan!',
        subtitle: 'Sub title',
        message: 'Hello, új ingatlan!',
        // icon: icon,
        contentImage: 'https://ingatlancdn.com/hirdadmin/t/5e/f4/103952233_m_0.jpg',
        sound: false,
        id: '0121321',
        // open: 'http://bama.hu',
        wait: true,
        // timeout: 13500,
    });
};

setNoticifaction();

notifier
    .on('click', (notifierObject, options) => {
        console.log('CLIICK!');
    })
    .on('timeout', (notifierObject, options) => {
        console.log('TIMEOPIUT');
        // setNoticifaction()
        // Triggers if `wait: true` and notification closes
    });