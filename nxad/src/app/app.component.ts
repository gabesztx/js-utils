import { Component } from '@angular/core';
import {UserService} from '@nexius/core';
import {PreloadService} from './shared/services/preload.service';

@Component({
    selector: 'nx-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent  {
    title = 'nx';
    constructor(private userService: UserService, private preloadService: PreloadService) {
        this.preloadService.loadResources();
        this.userService.init().subscribe();
    }
}
