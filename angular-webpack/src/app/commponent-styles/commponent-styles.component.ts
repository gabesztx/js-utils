import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-commponent-styles',
  template: `
      <h1>Tour of Heroes</h1>
      <div>divcontent</div>`,
  // styles: ['h1 { font-weight: normal; }', 'div { font-size: 40px; }']
  styleUrls: ['./commponent-styles.component.css']
})
export class CommponentStylesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
