import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  option = [3, 4, 5, 6, 7, 8, 9, 10];
  selected = 3;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(value) {
    this.selected = value;
  }
}
