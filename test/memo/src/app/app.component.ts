import { Component, OnInit } from '@angular/core';
import { CardService } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private cardService: CardService) {
    this.cardService.initCards();
  }

  ngOnInit() {
    /*const cat = {
      legs: 4,
      sound: 'meow'
    };
    const dog = {
      sound: 'woof',
      ...cat,
    };
    console.log('CAT', cat);
    console.log('DOG', dog);*/
    // const newObj = {...this.obj};
    // newObj.name = 'bla';
    // console.log('new', newObj);
    // console.log('old', this.obj);
    // this.obj.id = 100;
    // console.log('new', newObj);
    // console.log('old', this.obj);
  }
}

