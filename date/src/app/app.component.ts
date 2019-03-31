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
  private isClicked = false;
  private selectRange: any;
  private selectedDates: number[];


  constructor() {
  }

  ngOnInit() {

    this.startDay = new Date(2019, 0, 1);
    this.endDay = new Date(2019, 4, 17);
    this.buildData();
    this.buildWeeks();
    this.buildDays();
    this.addMouseClickEvent();
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
    d3.select('.dateContent').selectAll('div')
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
    let rowId = 0;
    const weekItemRows = d3.selectAll('.weekRowItem');
    this.dateItems.forEach((value) => {
      const date = value.date;
      const dateDayIndex = date.getDay() === 0 ? 7 : date.getDay();
      const dateItem = weekItemRows.nodes()[rowId].children[dateDayIndex - 1];
      if (dateDayIndex === 7) {
        rowId++;
      }
      dateItem.innerHTML = this.getDayTemplate(date);
      value.target = dateItem.children[0];
    });
  }
  // Handler over
  onMouseOverEvent() {
    d3.selectAll('.itemValue')
      .data(this.dateItems)
      .on('mouseover', this.addMouseOverEvent.bind(this));
  }
  // Handler click
  onMouseClickEvent(data: any) {
    this.isClicked = !this.isClicked;
    if (this.isClicked) {
      this.selectRange = {start: data.id, end: data.id};
      this.onMouseOverEvent();
    } else {
      this.removeMouseOverEvent();
      this.selectRange.end = data.id;
    }
    this.updateSelected();
  }
  // Add click event
  addMouseClickEvent() {
    d3.selectAll('.itemValue')
      .data(this.dateItems)
      .on('click', this.onMouseClickEvent.bind(this));
  }
  // Add over event
  addMouseOverEvent(data: any) {
    this.selectRange.end = data.id;
    this.updateSelected();
  }
  // Remove over event
  removeMouseOverEvent() {
    d3.selectAll('.itemValue').on('mouseover', null);
  }
  // Update selected items
  updateSelected() {
    const start = this.selectRange.start;
    const end = this.selectRange.end;
    const selectedItems = this.getSelectDays(start, end)
      .map(id => this.dateItems[id]);
    this.addSelected(selectedItems);
  }
  // Add selected classes
  addSelected(items: any[]) {
    this.clearSelected();
    items.forEach((item) => {
      d3.select(item.target).classed('selected', true);
    });
  }
  // Clear selected classes
  clearSelected() {
    d3.selectAll('.itemValue').classed('selected', false);
  }
  // Get start, end range Array
  getSelectDays(start: number, end: number): number[] {
    const option = start < end ? 1 : -1;
    if (start === end) {
      return [start];
    }
    return d3.range(start, end + option, option);
  }
  // Get day item template
  getDayTemplate(date: Date): string {
    const dayDate = date.getDate();
    const todayClass = this.getIsToday(date) ? 'dateVal today' : 'dateVal';
    const month = this.getMonth(date);
    return `
    <div class="itemValue">
      <span class="${todayClass}">${dayDate}</span>
      ${month ?
      `<span class="monthVal">${month}</span>`
      : ``}
      <div class="itemBg"></div>
    </div>`;
  }
  // Get if today
  getIsToday(date: Date): boolean {
    return date.toDateString() === new Date().toDateString();
  }
  // Get month name
  getMonth(date: Date): string {
    return date.getDate() === 1 ? MONTHS[date.getMonth()] : '';
  }
}
