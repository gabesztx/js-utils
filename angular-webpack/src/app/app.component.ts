import {Component} from '@angular/core';

// import * as moment from 'moment'
@Component({
    selector: 'root-app',
    templateUrl: './app.component.html',
    // styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title: string;

    public showComponent = false;

    constructor() {
        this.title = 'App Content';
        this.showComponent = true;
        console.log('AppComponent: ');
        document.body.appendChild(this.component());
        // setTimeout(() => {}, 1000)
    }


    component() {
        const element = document.createElement('div');
        const button = document.createElement('button');
        button.innerHTML = 'Click me and look at the console!';
        element.appendChild(button);
        button.onclick = e => {
            console.log('Click');
           /* import('lodash').then((lodash) => {
                const _ = lodash['default'];
                console.log(_.join(['Hello', 'webpack'], '_loadsh'));
            })*/

        };
        return element;
    }

    /*  getComponent() {
          return import(/!* webpackChunkName: "lodash" *!/ 'lodash').then(_ => {
              const element = document.createElement('div');
              element.innerHTML = _.join(['Hello', 'webpack'], ' ');
          }).catch(error => 'An error occurred while loading the component');
      }*/
}