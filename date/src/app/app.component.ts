import * as d3 from 'd3v4';
import * as scroll from './scroll';
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
  private tabsData: any[];
  private tabsDataTransform: any[];
  private weekItems: any[];
  private dateItems: any[];
  private tabMenuItem: any;
  private isClicked = false;
  private selectRange: any;
  // private selectedDates: any[];
  // private isOutSideClicked = false

  constructor() {
  }

  ngOnInit() {
    this.setData();
    this.buildData();
    this.buildTabsData();
    this.buildWeeks();
    this.buildDays();
    this.addMouseClickEvent();
    // this.emitDate();
  }

  setData() {
    this.startDay = new Date(2019, 0, 1);
    this.endDay = new Date(2019, 10, 27);
    this.tabsData = [
      {
        label: 'Today',
        date: {
          start: new Date()
        }
      },
      {
        label: 'Yesterday',
        date: {
          start: new Date(new Date().setDate(new Date().getDate() - 1))
        }
      },
      {
        label: 'Custom',
        date: {
          start: new Date(2019, 4, 1),
          end: new Date(2019, 4, 3),
        }
      },
    ];
  }

  /* --------------- MENU TABS START --------------- */
  onClickTab(data: any) {
    const value = data.date || data;
    this.selectRange = {
      start: value[0],
      end: value[1] && value[1] ? value[1] : value[0]
    };
    this.hasTabActive();
    this.updateSelected();
    scroll.scrollIt(
      value[0].position,
      d3.select('.dateContent').node(),
      500,
      'easeInOutQuad',
      () => {
      }
    );
  }

  hasTabActive() {
    console.log('hasTabActive');
    const start = this.selectRange.start.date;
    const end = this.selectRange.end.date;
    this.removeTabActive();
    this.tabsData.forEach((data, index) => {
      const tabDateStart = data.date.start;
      const tabDateEnd = data.date.end;
      const isStartEqual = tabDateStart && (start.toDateString() === tabDateStart.toDateString());
      const isEndEqual = tabDateEnd && (end.toDateString() === tabDateEnd.toDateString());
      const isOneDay = !isEndEqual && (start.toDateString() === end.toDateString());
      if (isStartEqual && isEndEqual) {
        this.addTabActive(index);
      } else if (isStartEqual && isOneDay) {
        this.addTabActive(index);
      }
    });
  }

  addTabActive(tabIndex: number) {

    d3.select(this.tabMenuItem.nodes()[tabIndex]).classed('selected', true);
  }

  removeTabActive() {
    this.tabMenuItem.classed('selected', false);
  }

  /* --------------- MENU TABS END --------------- */


  /* --------------- BUILD VIEW START --------------- */
  buildData() {
    const weeks = this.getWeekRange(this.startDay, this.endDay);
    const dateItems = this.getDayRange(this.startDay, this.endDay);
    this.weekItems = !weeks.length ? [this.startDay] : [this.startDay, ...weeks];
    this.dateItems = dateItems.map((d, i) => {
        return {date: d, id: i};
      }
    );
    this.tabsDataTransform = this.tabsData.map((data, index) => {
      return {
        label: data.label,
        date: this.getDayIdRange(Object.values(data.date))
      };
    });
    console.log(this.tabsDataTransform);
  }

  buildTabsData() {
    // TODO: inactive when tabs data is undefined
    this.tabMenuItem = d3.selectAll('.dateMenu').selectAll('div')
      .data(this.tabsDataTransform)
      .enter()
      .append('div')
      .attr('class', 'dateMenuItem')
      .text(d => d.label)
      .on('click', this.onClickTab.bind(this));
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
  /* --------------- BUILD VIEW END --------------- */

  /* --------------- MOUSE EVENTS START --------------- */
  // Add click event
  addMouseClickEvent() {
    d3.selectAll('.itemValue')
      .data(this.dateItems)
      .on('click', this.onMouseClickEvent.bind(this));
  }

  // Add mosue over event
  addMouseOverEvent() {
    d3.selectAll('.itemValue')
      .data(this.dateItems)
      .on('mouseover', this.onMouseOverEvent.bind(this));
  }

  // Handler click mouse
  onMouseClickEvent(data: any) {
    this.isClicked = !this.isClicked;
    if (this.isClicked) {
      this.selectRange = {start: data, end: data};
      this.addMouseOverEvent();
    } else {
      this.selectRange.end = data;
      this.offMouseOverEvents();
      this.getDateSequence();
      this.hasTabActive();
    }
    this.updateSelected();
  }

  // Handler over mouse
  onMouseOverEvent(data: any) {
    this.selectRange.end = data;
    this.updateSelected();
  }

  // Remove mosue over event
  offMouseOverEvents() {
    d3.selectAll('.itemValue').on('mouseover', null);
  }

  /* --------------- MOUSE EVENTS END --------------- */

  // Update selected items
  updateSelected() {
    const start = this.selectRange.start.id;
    const end = this.selectRange.end.id;
    const selectedItems = this.getSelectRangeDays(start, end)
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
  getSelectRangeDays(start: number, end: number): number[] {
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

  /* --------------- GET DATE DATAS START --------------- */
  getDayIdRange(date: Date[]): number[] {
    const dateIdRange = [];
    date.forEach((dateValue) => {
      this.dateItems.forEach((dataObj) => {
        if (dateValue.toDateString() === dataObj.date.toDateString()) {
          dateIdRange.push(dataObj);
        }
      });
    });
    return dateIdRange;
  }

  getDateSequence() {
    const start = this.selectRange.start;
    const end = this.selectRange.end;
    if (start.id > end.id) {
      this.selectRange.start = end;
      this.selectRange.end = start;
    }
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

  /* --------------- GET DATE DATAS END --------------- */

}

// Add outside event
// TODO: out click handler
// addOutSideClickEvent() {
//   // d3.select((window as any)).on('mousedown', () => {});
//   // d3.select((window as any)).on('mousedown', null);
// }
