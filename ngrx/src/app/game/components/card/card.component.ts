import { Component, OnInit, Input, Output, OnChanges, EventEmitter, HostBinding } from '@angular/core';
import { ICard } from '../../models/card.model';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [

    trigger('rotateState', [
      state('close', style({transform: 'rotateY(0)'})),
      state('open', style({transform: 'rotateY(180deg)'})),
      transition('close => open', [
        animate('.4s', keyframes([
          style({transform: 'rotateY(180deg)'})
        ])),
      ]),
      transition('open => close', [
        animate('.4s', keyframes([
          style({transform: 'rotateY(0)'})
        ])),
      ]),
    ]),

    trigger('cardBgState', [
      state('visible', style({opacity: 1})),
      state('invisible', style({opacity: 0})),
      transition('visible => invisible', [
        animate('.2s', keyframes([
          style({opacity: 0})
        ])),
      ]),
    ]),

    trigger('cardImgState', [
      state('visible', style({opacity: 1})),
      state('invisible', style({opacity: 0.5})),
      transition('visible => invisible', [
        animate('.2s', keyframes([
          style({opacity: 0.5})
        ])),
      ]),
    ])
  ]
})
export class CardComponent implements OnInit, OnChanges {
  @Input() card: ICard;
  @Input() cardsOpen: any;
  @Output() cardFlippedOut = new EventEmitter();
  @Output() cardFlippedIn = new EventEmitter();
  public isOpen: string;
  public inactive: string;

  constructor() {}

  ngOnChanges() {
    this.inactive = 'visible';
    this.isOpen = this.card.rotate ? 'open' : 'close';
    setTimeout(() => {
      this.inactive = this.card.inactive ? 'invisible' : 'visible';
    });
  }

  ngOnInit() {
    if (this.isOpen === 'open' && !this.card.isOpen) {
      setTimeout(() => {
        this.isOpen = 'close';
      });
    }
  }

  clickCard(card: ICard) {
    this.isOpen = 'open';
  }

  rotateDone(event: any, card) {
    if (event.totalTime === 400 && event.toState === 'open') {
      // console.log('Open Done');
      this.cardFlippedIn.emit(card);
    }

    if (event.totalTime === 400 && event.toState === 'close') {
      // console.log('Close Done');
      this.cardFlippedOut.emit(card);
    }
  }
}
