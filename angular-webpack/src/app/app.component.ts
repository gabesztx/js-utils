import {Component} from '@angular/core';

@Component({
    selector: 'root-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title: string;
    constructor() {
        this.title = 'App Content';
        // setTimeout(() => {},3000)
    }
}