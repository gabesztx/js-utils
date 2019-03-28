// import './style.scss';
import template from './template.html';
import * as d3 from 'd3';

export class DateRange {
  constructor() {
    document.body.innerHTML = template;
    //  const rangeEvery = d3.timeDay.every(2).range(start, end);
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const startDay = new Date(2019, 2, 24);
    const endDay = new Date(2019, 2, 31);
    const diffDay = d3.timeDay.range(startDay, endDay);
    diffDay.push(endDay);

    const diffWeek = d3.timeWeek.range(startDay, endDay).length;
    const dateContent = d3.select('.dateContent').node();
    
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
    const dateItemRows = d3.selectAll('.dateItemRow').nodes();
    let rowId = 0;
    for (let k = 0; k < diffDay.length; k++) {
      const time = diffDay[k];
      const date = time.getDate();
      const day = time.getDay();
      const dayId = day === 0 ? 7 : day;
      const dateRow = dateItemRows[rowId].children[dayId-1];
      if(dayId === 7){
        rowId++;
      }
      dateRow.innerText = date;
    }
  }
}

/*const timeDiff = Math.abs(startDay.getTime() - endDay.getTime());
console.log(timeDiff);
const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

// console.log(dateFirst.getDay());
// console.log(dateFirst.getDate() + 30);
// const nextDay = dateFirst.setDate()
// console.log(startDay, ' - ', days[startDay]);
let i = 0;
while (i < daysDiff) {
  i++;
  // console.log(i);
}*/
