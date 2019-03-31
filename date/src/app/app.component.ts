import * as d3 from 'd3v4';
import {Component, OnInit} from '@angular/core';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private endDay: Date;
  private startDay: Date;

  private weekItems: any[];
  private dateItems: any[];

  constructor() {
  }

  ngOnInit() {
    // this.startDay = new Date(2019, 0, 1);
    // this.endDay = new Date(2019, 5, 13);
    this.startDay = new Date(2019, 0, 1);
    this.endDay = new Date(2019, 4, 17);
    this.buildData();
    this.buildWeeks();
    this.buildDays();
  }

  buildData() {
    const weeks = d3.timeWeek.range(this.startDay, this.endDay);
    const dateItems = d3.timeDay.range(this.startDay, this.endDay);
    dateItems.push(this.endDay);

    this.weekItems = !weeks.length ? [this.startDay] : [this.startDay, ...weeks];
    this.dateItems = dateItems.map((d, i) => {
        return {date: d, id: i};
      }
    );
  }

  buildWeeks() {
    const dateContent = d3.select('.dateContent');
    dateContent.selectAll('div')
      .data(this.weekItems)
      .enter()
      .append('div')
      .attr('class', 'weekRowItem')
      .selectAll('div')
      .data(DAYS)
      .enter()
      .append(() => document.createElement('div'))
      .attr('class', 'dateItem');
  }

  buildDays() {
    const weekItemRows = d3.selectAll('.weekRowItem');
    let rowId = 0;
    this.dateItems.forEach((data, i) => {
      const date = data.date;
      const dateDayIndex = date.getDay() === 0 ? 7 : date.getDay();
      const dateItem = weekItemRows.nodes()[rowId].children[dateDayIndex - 1];
      if (dateDayIndex === 7) {
        rowId++;
      }
      dateItem.innerHTML = this.getItemTemplate(date);
    });
  }

  getItemTemplate(date: Date): string {
    const dayDate = date.getDate();
    const todayClass = this.getIsToday(date) ? 'dateVal today' : 'dateVal';
    const month = dayDate === 1 ? MONTHS[date.getMonth()] : '';
    return `
    <div class="itemValue">
      <span class="${todayClass}">${dayDate}</span>
      ${month ?
      `<span class="monthVal">${month}</span>`
      : ``}
      <div class="itemBg"></div>
    </div>`;
  }

  getIsToday(date: Date): boolean {
    return date.toDateString() === new Date().toDateString();
  }
}
