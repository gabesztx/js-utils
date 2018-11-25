import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config = {
    position: 'top'
  };

  onClick() {
    console.log('click');
    // this.config.position = 'bottom :) ';
    this.config = {
      position: 'bottom'
    };
  }
}

