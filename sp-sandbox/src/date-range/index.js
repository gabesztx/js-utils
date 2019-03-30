// import './style.scss';
import template from './template.html';
import * as d3 from 'd3';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export class DateRange {
  constructor() {
    document.body.innerHTML = template;
    this.setData();
  }

  setData() {
    this.startDay = new Date(2019, 0, 1);
    this.endDay = new Date(2019, 4, 4);
    this.buildWeeks();
    this.buildDays();
    // this.clearunUsedDate();
  }

  buildWeeks() {
    const diffWeek = d3.timeWeek.range(this.startDay, this.endDay).length;
    const dateContent = d3.select('.dateContent')
      .node();
    for (let i = 0; i <= diffWeek; i++) {
      let row = document.createElement('div');
      row.setAttribute('class', 'dateItemRow');
      dateContent.appendChild(row);
      for (let j = 0; j <= 6; j++) {
        let item = document.createElement('div');
        item.setAttribute('class', 'dateItem');
        row.appendChild(item);
      }
    }
  }

  buildDays() {
    const diffDay = d3.timeDay.range(this.startDay, this.endDay);
    diffDay.push(this.endDay);
    const dateItemRows = d3.selectAll('.dateItemRow')
      .nodes();
    let rowId = 0;
    for (let k = 0; k < diffDay.length; k++) {
      const time = diffDay[k];
      const date = time.getDate();
      const day = time.getDay();
      const month = date === 1 ? MONTHS[time.getMonth()] : '';
      const dayItemRow = day === 0 ? 7 : day;
      const dateRow = dateItemRows[rowId].children[dayItemRow - 1];
      if (dayItemRow === 7) {
        rowId++;
      }
      dateRow.innerHTML = this.getItemTemplate(date, month);
    }
  }

  clearunUsedDate() {
    d3.selectAll('.dateItem')
      .each(function (a, i) {
        const item = this;
        const row = item.parentNode;
        if (!item.innerText.length) {
          // row.removeChild(item)
        }
      });
  }

  getItemTemplate(date, month) {
    return `
    <div class="itemValue">
      <span class="dateVal">${date}</span>
      ${month ? `<span class="monthVal">${month}</span>` : ''}
      <div class="itemBg"></div>
    </div>`;
  }
}
