import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnChanges {
  option = [3, 4, 5, 6, 7, 8, 9, 10];
  @Input() selected;
  @Output() changeDeskSize = new EventEmitter();
  constructor() {}
  ngOnChanges() {
    // console.log('CVHNAGES', this.selected);
  }
  onSelect(value) {
    this.changeDeskSize.emit(value)
  }
}
