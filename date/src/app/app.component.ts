import * as scroll from './scroll';
import * as d3 from 'd3v4';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  private months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  private endDay: Date;
  private startDay: Date;
  private weekItems: any[];
  private dateItems: any[];
  private isClicked = false;
  private selectRange: any;
  private selectedDates: number[];
  // private isOutSideClicked = false

  constructor() {
  }

  ngOnInit() {
    this.startDay = new Date(2019, 0, 1);
    this.endDay = new Date(2019, 10, 28);
    // this.startDay = new Date(2019, 0, 1);
    // this.endDay = new Date(2019, 0, 7);
    this.buildData();
    this.buildWeeks();
    this.buildDays();
    this.addMouseClickEvent();
    this.emitDate();
    // scroll.scrollIt();
    // scroll(30, )
  }

  emitDate() {
    // TODO: ha triggerek között nincs olyan emitálási dátum nint a listába ne jelenitsük meg
    // TODO: custom date pontosítás
    const today = new Date();
    const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
    const custom = new Date(2019, 0, 10);
    const custom1 = new Date(2019, 5, 30);

    const items = this.getSearchDate(today);
    this.addSelected(items);
    if (items.length) {
      const dateContent = d3.select('.dateContent').node();
      const scrollYPos = items[0].position;
      dateContent.scrollTo(0, scrollYPos);
    } else {
      console.log('nincs emitálás és deaktiv');
    }

    /*const customData = {
      start: new Date(2019, 3, 2),
      end: new Date(2019, 3, 3),
    };
    const customDates = this.getDayRange(customData.start, customData.end)*/

  }

  buildData() {
    const weeks = this.getWeekRange(this.startDay, this.endDay);
    const dateItems = this.getDayRange(this.startDay, this.endDay);

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
      .data(this.days)
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
      // TODO: refactor
      value.position = rowId * dateItem.clientHeight;
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
      this.offMouseEvents();
      this.selectRange.end = data.id;

    }
    this.updateSelected();
  }

  // Add outside event
  // TODO: out click handler
  addOutSideClickEvent() {
    // d3.select((window as any)).on('mousedown', () => {});
    // d3.select((window as any)).on('mousedown', null);
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
  offMouseEvents() {
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
  getSearchDate(date: Date): any[] {
    return this.dateItems.filter((data) => {
      if (date.toDateString() === data.date.toDateString()) {
        return data;
      }
    });
  }

  // Get if today
  getIsToday(date: Date): boolean {
    return date.toDateString() === new Date().toDateString();
  }

  // Get month name
  getMonth(date: Date): string {
    return date.getDate() === 1 ? this.months[date.getMonth()] : '';
  }

  // Get day date
  getDayRange(start: Date, end: Date): Date[] {
    const dates = d3.timeDay.range(start, end);
    dates.push(end);
    return dates;
  }

  // Get weeks date
  getWeekRange(start: Date, end: Date): Date[] {
    return d3.timeWeek.range(start, end);
  }
}
