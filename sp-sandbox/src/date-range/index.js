import './style.scss';
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
    this.endDay = new Date(2019, 4, 17);
    // this.startDay = new Date(2019, 0, 1);
    // this.endDay = new Date(2019, 0, 2);
    this.buildWeeks();
    this.buildDays();
    this.addMouseClickEvent();
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
    this.dateItem = [];
    const diffDay = d3.timeDay.range(this.startDay, this.endDay);
    diffDay.push(this.endDay);
    const dateItemRows = d3.selectAll('.dateItemRow').nodes();
    let rowId = 0;
    for (let k = 0; k < diffDay.length; k++) {
      const date = diffDay[k];
      const dayItemRow = date.getDay() === 0 ? 7 : date.getDay();
      const dateItem = dateItemRows[rowId].children[dayItemRow - 1];
      if (dayItemRow === 7) {
        rowId++
      }
      dateItem.innerHTML = this.getItemTemplate(date);
      this.dateItem.push({
        id: k,
        target: dateItem.children[0],
        position: dateItem.clientHeight * rowId,
      })
    }
  }

  getItemTemplate(date) {
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

  dateItemClick(index, event) {
    console.log('click',event);
    // console.log('dateclick', this.dateItem[index])
  }

  addMouseClickEvent() {

    const cont = d3.select('.dateContent').node()
    // console.log(cont.scrollTop);
    setTimeout(() => {

    },2000)
    /*this.dateItem.forEach((data, index) => {
      data.target.addEventListener('click', this.dateItemClick.bind(this, index));
    })*/
  }

  removeMouseClickEvent() {
    this.dateItem.forEach((item) => {
      // item.children[0].addEventListener('click', this.dateItemClick);
      // item.addEventListener('click', this.dateItemClick);
    })
  }

  /*dateItemOver(e) {
    // console.log('Over', id)
    // console.log('Over', e)
  }

  addMouseOverEvent() {
    this.dateItem.forEach((item) => {
      // item.addEventListener('mouseover', this.dateItemOver);
    })
  }

  removeMouseOverEvent() {
    this.dateItem.forEach((item) => {
      // item.addEventListener('mouseover', this.dateItemOver);
    })
  }*/

  getIsToday(date) {
    return date.toDateString() === new Date().toDateString();
  }
}

// cont.scrollTo(0, 80);
// console.log(cont.scrollTop);
// setTimeout(() => {},4000)
// d3.selectAll('.itemValue').on('click', this.dateItemClick)
// dateItem.children[0].setAttribute('data-id', k);
/*
clearunUsedDate() {
  d3.selectAll('.dateItem')
    .each(function (a, i) {
      const item = this;
      const row = item.parentNode;
      if (!item.innerText.length) {
        // row.removeChild(item)
      }
    });
}*/
