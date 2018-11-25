import { AfterContentInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterContentInit {
  config = {
    position: 'top'
  };

  ngOnInit() {
    // console.log('ngOnInit');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    setTimeout(() => {
      console.log('Trigger config');
      this.config = {
        position: 'bottom'
      };
    }, 3000);
  }

  onClick() {
    console.log('click');
    // this.config.position = 'bottom :) ';
    this.config = {
      position: 'bottom'
    };
  }
}

