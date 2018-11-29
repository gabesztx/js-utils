import { Component } from '@angular/core';
import { CardService } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private cardService: CardService) {
    this.cardService.initCards();
  }

  // ngOnInit() {}
  /* onClick() {
     this.config = {
       position: 'bottom'
     };
   }*/
}
/*  config = {
    position: 'top'
  };*/
