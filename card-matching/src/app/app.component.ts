import { Component, OnInit } from '@angular/core';
import { GameDataService } from './services/game-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private gameDataService: GameDataService) {
    this.gameDataService.initCards();
  }
  ngOnInit() {}
}

