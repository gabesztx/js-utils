// import './style.scss';
import template from './template.html';
import * as d3 from 'd3';

export class DateRange {
  constructor() {
    document.body.innerHTML = template;

    // const dayDiffNum = d3.timeDay.count(start, end);
    //  const rangeEvery = d3.timeDay.every(2).range(start, end);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const start = new Date(2006,1,1);
    const end = new Date(2006,1,3);
    const dayDiffTime = d3.timeDay.range(start, end);
    dayDiffTime.push(end);
    // console.log(start);
    // const dayContent = [dayDiffTime, ...end]
     // console.log(dayContent);

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


/*
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    let selectYear = document.getElementById("year");
    let selectMonth = document.getElementById("month");

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let monthAndYear = document.getElementById("monthAndYear");
    showCalendar(currentMonth, currentYear);

    function showCalendar(month, year) {

      let firstDay = (new Date(year, month)).getDay();
      let daysInMonth = 32 - new Date(year, month, 32).getDate();

      let tbl = document.getElementById("calendar-body"); // body of the calendar

      // clearing all previous cells
      tbl.innerHTML = "";

      // filing data about month and in the page via DOM.
      monthAndYear.innerHTML = months[month] + " " + year;
      selectYear.value = year;
      selectMonth.value = month;

      // creating all cells
      let date = 1;
      for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
          if (i === 0 && j < firstDay) {
            let cell = document.createElement("td");
            let cellText = document.createTextNode("");
            cell.appendChild(cellText);
            row.appendChild(cell);
          }
          else if (date > daysInMonth) {
            break;
          }

          else {
            let cell = document.createElement("td");
            let cellText = document.createTextNode(date);
            if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
              cell.classList.add("bg-info");
            } // color today's date
            cell.appendChild(cellText);
            row.appendChild(cell);
            date++;
          }
        }
        tbl.appendChild(row); // appending each row into calendar body.
      }

    }
*/
