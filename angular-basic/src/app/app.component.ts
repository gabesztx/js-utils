import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'page-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public title: string;


    constructor() {
        this.title = 'App Content';
    }

    ngOnInit() {
        this.component();
    }


    component() {
        /*const element = document.createElement('div');
        const element1 = document.createElement('div');
        const button = document.createElement('button');
        const button1 = document.createElement('button');

        button.innerHTML = 'Click1';
        button1.innerHTML = 'Click2';

        button.onclick = e => {
            this.showComponent = true;
            import('lodash').then((lodash) => {
                const _ = lodash['default'];
                console.log('lodash OK');

            })
        };
        button1.onclick = e => {
            import('moment/moment.js').then((moment_) => {
                const moment = moment_['default'];
                const time = moment().format();
                console.log('moment Done');
                // console.log('Hello Time Time: ', time);
            })
        };

        element.appendChild(button);
        element1.appendChild(button1);
        document.body.appendChild(element);
        document.body.appendChild(element1);*/
    }

    /*  getComponent() {
          return import(/!* webpackChunkName: "lodash" *!/ 'lodash').then(_ => {
              const element = document.createElement('div');
              element.innerHTML = _.join(['Hello', 'webpack'], ' ');
          }).catch(error => 'An error occurred while loading the component');
      }*/
}
