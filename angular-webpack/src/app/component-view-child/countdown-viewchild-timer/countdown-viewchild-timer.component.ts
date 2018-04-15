import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'my-countdown-viewchild-timer',
  templateUrl: './countdown-viewchild-timer.component.html',
  styleUrls: ['./countdown-viewchild-timer.component.css']
})
export class CountdownViewchildTimerComponent implements OnInit, OnDestroy {
  intervalId = 0;
  message = '';
  seconds = 11;

  clearTimer() {
    clearInterval(this.intervalId);
  }

  ngOnInit() {
    // console.log('ngOnInit');
    this.start();
  }

  ngOnDestroy() {
    // console.log('ngOnDestroy');
    this.clearTimer();
  }

  start() {
    // console.log('START');
    this.countDown();
  }

  stop() {
    // console.log('STOP');
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        } // reset
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }
}
