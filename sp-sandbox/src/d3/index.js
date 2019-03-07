import './style.css';
import template from './template.html';
import * as d3 from 'd3';

export class D3SandBox {
  constructor() {
    document.body.innerHTML = template;
    this.render();
  }

  render() {
    const dummyData = [
      {
        label : 'label1',
        value : 10,
        color : '#2626ff'
      },
      {
        label : 'label2',
        value : 20,
        color : '#766eff'
      },
      {
        label : 'label2',
        value : 20,
        color : '#9a93ff'
      },
      {
        label : 'label2',
        value : 55,
        color : '#b4afff'
      }
    ];

    return;
    let percent = 0;
    const height = 30;
    const totalValue = d3.sum(dummyData, v => v.value);
    /* SVG */
    const svg = d3.select(document.querySelector('#singleStackChart'))
      .attr('width', '80%')
      .attr('height', height);

    /* BAR */
    const bar = svg.selectAll('g')
      .data(dummyData)
      .enter()
      .append('g');
    bar
      .append('rect')
      .attr('width', d => {
        return ((d.value / totalValue) * 100) + '%';
      })
      .attr('height', height - 5)
      .attr('y', 20)
      .attr('x', (d) => {
        let prevPercent = percent;
        percent += 100 * (d.value / totalValue);
        return prevPercent + '%';
      })
      .attr('fill', d => d.color);

    /* TEXT */
    percent = 0;
    svg.select('g')
      .append('text')
      .text(0 + 'GB')
      .attr('dy', 14);
    bar.append('text')
      .text(d => d.value + 'GB')
      .attr('class', d => 'text' + d.value)
      .attr('font-size', '14')
      .attr('dy', '14')
      .attr('x', (d) => {
        percent += 100 * (d.value / totalValue);
        return percent + '%';
      })
      .attr('dx', (d, i) => {
        const className = '.text' + d.value;
        const textEl = document.querySelector(className);
        const textWidth = textEl.getComputedTextLength();
        if (i === dummyData.length - 1) {
          return -textWidth;
        }
        return -textWidth / 2;
      });
    // document.querySelector('#singleStackChartAll').innerHTML = totalValue + 'GB';
  }
}

// setTimeout(() => {});
// const myScale = d3.scaleLinear()
//   .domain([0, 10])
//   .range([0, 600]);
