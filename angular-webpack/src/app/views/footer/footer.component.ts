import {Component} from '@angular/core';

// declare var _;

@Component({
    selector: 'my-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    constructor() {
        console.log('FooterComponent');
        const element = document.createElement('div');
        const button = document.createElement('button');
        button.innerHTML = 'Footer Click';
        button.onclick = e => {
            console.log('Click 1 1 1 ');
            // console.log(_.join(['Hello', 'webpack'], '_loadsh'));

        };

        element.appendChild(button);
        document.body.appendChild(element);
        // console.log('Hello Footer');
    }
}
