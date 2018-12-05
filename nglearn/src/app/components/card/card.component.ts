import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICard } from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: ICard;
  @Output() cardRotate = new EventEmitter();

  constructor() {}
  ngOnInit() {}

  rotate(card: ICard) {
    this.cardRotate.emit(card);
  }
}
