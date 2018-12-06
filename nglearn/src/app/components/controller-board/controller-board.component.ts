import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controller-board',
  templateUrl: './controller-board.component.html',
  styleUrls: ['./controller-board.component.scss']
})
export class ControllerBoardComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  restartGame() {
    // this.store.dispatch(new ResetCard());
  }
}
