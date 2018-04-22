import {Component} from '@angular/core';

@Component({
    selector: 'root-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title: string;

    public showComponent = false;
    constructor() {
        this.title = 'App Content';
        this.showComponent = true;

        setTimeout(() => {
            console.log('Add');
            document.body.appendChild(this.component());
        }, 1000)
    }


    component() {
        const element = document.createElement('div');
        const button = document.createElement('button');
        const br = document.createElement('br');
        button.innerHTML = 'Click me and look at the console!';
        element.appendChild(br);
        element.appendChild(button);
        button.onclick = e => {
            console.log('Click');
           /* this.getComponent().then(component => {
                console.log('HUUUUU OK');
                
            })*/

        };
        return element;
    }

    getComponent() {
        return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
            const element = document.createElement('div');
            element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        }).catch(error => 'An error occurred while loading the component');
    }
}