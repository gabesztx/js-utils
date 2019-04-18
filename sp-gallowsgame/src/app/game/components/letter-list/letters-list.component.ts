import { Component, Input, OnInit } from '@angular/core';
import { Letter } from '../../models/game.model';

@Component({
  selector: 'app-letter-list',
  templateUrl: './letter-list.component.html',
  styleUrls: ['./letter-list.component.scss']
})
export class LettersListComponent implements OnInit {
  @Input() letters: Letter[];
  constructor() { }

  ngOnInit() {
    console.log(this.letters);
  }

}
