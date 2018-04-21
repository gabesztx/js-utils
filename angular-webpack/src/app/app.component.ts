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

        setTimeout(() => {
            this.showComponent = true;
        }, 3000)
    }
}