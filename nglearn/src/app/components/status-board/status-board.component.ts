import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-status-board',
  templateUrl: './status-board.component.html',
  styleUrls: ['./status-board.component.scss']
})
export class StatusBoardComponent implements OnInit {
  $interval: Observable<number>;
  constructor() {
    // this.$interval = timer(0, 1000);
  }

  ngOnInit() {
    // this.$interval = timer(0, 1000);
  /*  this.$interval.subscribe(
      (val) => {
        console.log('VAL', val);
      });*/
  }
}
