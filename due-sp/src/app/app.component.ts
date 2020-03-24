import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // dateAndTime = '2020-03-24T16:00'; // iso date
  // dateAndTime = '03/24/2020 9:00'; // short date
  dailyHours = {
    start: 9,
    end: 17
  };

  constructor() {
    this.calculateDueDate('03/24/2020 16:01:30', 1);
  }

  calculateDueDate(dateAndTime, turnaroundHour) {
    const startDate = new Date(dateAndTime);
    const nextDays = this.getNextDays(startDate, turnaroundHour);
    const nextHours = this.getNextHours(startDate, turnaroundHour);
    this.getEndDate(startDate, nextDays, nextHours);
  }

  getNextHours(startDate, turnaroundHour) {
    const hours = startDate.getHours() + turnaroundHour;
    const calculateHour = hours - this.dailyHours.end;
    const allHours = calculateHour <= 0 ? hours : (calculateHour) + this.dailyHours.start;
    return this.dailyHours.end === hours && !!startDate.getMinutes() ? this.dailyHours.start : allHours;

  }

  getNextDays(startDate, turnaroundHour) {
    const hours = startDate.getHours() + turnaroundHour;
    const calculateDay = Math.abs(Math.floor(this.dailyHours.end / hours) - 1);
    const nextDay = this.dailyHours.end === hours && !!startDate.getMinutes() ? 1 : 0;
    return calculateDay + nextDay;
  }

  getEndDate(startDate, nextDays, nextHours) {
    const date = new Date();
    date.setDate(startDate.getDate() + nextDays);
    date.setHours(nextHours);
    date.setMinutes(startDate.getMinutes());
    date.setSeconds(startDate.getSeconds());
    console.log(date);
    // return new Date(new Date().setDate(startDate.getDate() + endDay));
  }
}
// console.log(`This is ${firstName} ${lastName}. She is ${age} years old.`)
