// import './style.scss';
import template from './template.html';
import * as d3 from 'd3';

export class DateRange {
  constructor() {
    document.body.innerHTML = template;
    //  const rangeEvery = d3.timeDay.every(2).range(start, end);
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // const dayDiffNum = d3.timeDay.count(startDay, endDay);

    const startDay = new Date(2019, 2, 17);
    const endDay = new Date(2019, 2, 27);
    const diffDay = d3.timeDay.range(startDay, endDay);
    const diffWeek = d3.timeWeek.range(startDay, endDay);
    console.log(diffWeek);
    // TODO heti row alapján legenárlni az oszlopokat

    // diffDay.push(endDay);
    // console.log('Days:', diffDay);
    //
    // console.log('diffWeek:', diffWeek);

   /* const days = diffDay.length;
    const date1 = new Date('2019-03-11');
    const date2 = new Date('2019-03-31');
    const getWeek = function (d1, d2) {
      const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
      const date1 = d1.setDate(d1.getDate() - 1);
      const date1_ms = new Date(date1).getTime();
      // const date1_ms = d1.getTime();
      const date2_ms = d2.getTime();
      // console.log('Date 1', date1_ms);
      const difference_ms = Math.abs(date1_ms - date2_ms);
      return Math.floor(difference_ms / ONE_WEEK);

    };*/
    // console.log(date1);
    // console.log(date1.getDate() + 1);
    // console.log(getWeek(date1, date2) + 1);
    // alert(Math.round(dif/1000/60/60/24/7));
    // const diffMonth = d3.timeMonth.range(startDay, endDay);
    // console.log(diffMonth);


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
