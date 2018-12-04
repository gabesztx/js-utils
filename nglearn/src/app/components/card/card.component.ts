import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: any;
  @Output() flipped = new EventEmitter();
  constructor() {}
  ngOnInit() {}
  flip(card: any) {
    this.flipped.emit(card)
  }

}
