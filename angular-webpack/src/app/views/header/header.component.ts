import {Component} from '@angular/core';
// import * as _ from 'lodash';
// import * as moment from 'moment';

@Component({
    selector: 'my-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    constructor() {
        // console.log('Hello Header');
       /* import('moment').then(moment => {
            console.log('MOMENT OK');
            console.log(moment.locale()); // en
            // Do something with lodash (a.k.a '_')...
        })*/

        // console.log('LODASH', _);
        // console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
    }
}
