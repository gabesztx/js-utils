import { Component } from '@angular/core';
// const env = require('config').environment;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = `app works!`;
  // title = `app works! - Environment : ${env.platform}`;
}
