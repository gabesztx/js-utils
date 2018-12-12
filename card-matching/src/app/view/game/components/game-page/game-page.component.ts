import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../../../../services/game-data.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  constructor(private gameDataService: GameDataService) {
  }
  ngOnInit() {
    this.gameDataService.initCards();
  }
}
