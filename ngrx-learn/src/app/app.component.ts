import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  config = {
    position: 'top'
  };
  ngOnInit() {}

  onClick() {
    this.config = {
      position: 'bottom'
    };
  }
}
