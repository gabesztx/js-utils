import './style.scss';
import template from './template.html';
import * as d3 from 'd3';

export class StacketBulletChart {
  constructor() {
    document.body.innerHTML = template;
    this.dummaData = {
      mobilDataTotal : 20,
      zeroRated      : false,
      data           : [
        {
          label : 'Roaming',
          color : '#AAAACE',
          value : 5,
        },
        {
          label : 'National',
          color : '#767676',
          value : 4,
        }

      ]
    };

    this.initData();
    this.initSvg();
    this.setRectBar();
  }

  initSvg() {
    this.svgWidth = '100%';
    this.svgHeight = 100;
    this.svgD3 = d3.select(document.querySelector('#stackedBulletChartSVG'))
      .attr('width', this.svgWidth)
      .attr('height', this.svgHeight);
  }

  initData() {
    this.totalData = this.dummaData.mobilDataTotal;
    this.amountDada = d3.sum(this.dummaData.data, v => v.value);
    this.freeData = this.totalData - this.amountDada;

    this.totalDataElement = document.querySelector('.dataTotal');
    this.currentDataElement = document.querySelector('.dataValue');
    this.totalDataElement.innerHTML = this.totalData;
    this.currentDataElement.innerHTML = this.amountDada;
  }

  setRectBar() {
    const rectHeight = 20;
    const rectGroup = this.svgD3.select('#stackedLineGroup');
    const lineYPos = this.svgHeight / 2 - rectHeight / 2;
    let rectBarX = 0;

    rectGroup.selectAll('rect')
      .data(this.dummaData.data)
      .enter()
      .append('rect')
      .attr('fill', data => data.color)
      .attr('width', data => (data.value / this.totalData) * 100 + '%')
      .attr('height', rectHeight)
      .attr('y', lineYPos)
      .attr('x', (data) => {
        let prevPercent = rectBarX;
        rectBarX += (data.value / this.totalData) * 100;
        return prevPercent + '%';
      });

    if (this.freeData > 0) {
      rectGroup.append('rect')
        .attr('width', (this.freeData / this.totalData) * 100 + '%')
        .attr('height', rectHeight)
        .attr('y', lineYPos)
        .attr('x', rectBarX + '%')
        .attr('fill-opacity', 0)
        .attr('stroke', '#D8D8D8')
        .attr('stroke-width', '0.5')
    }
  }
}


/*
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

  let percent = 0;
  const height = 30;
  const totalValue = d3.sum(dummyData, v => v.value);
  /!* SVG *!/
  const svg = d3.select(document.querySelector('#singleStackChart'))
    .attr('width', '100%')
    .attr('height', height);

  /!* BAR *!/
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

  /!* TEXT *!/
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
}
*/


/*Object.keys(this.dummaData.data)
  .forEach((val, index) => {
    console.log(this.dummaData.data[val], index);
  });*/


// setTimeout(() => {});
// const myScale = d3.scaleLinear()
//   .domain([0, 10])
//   .range([0, 600]);

/*this.svgMargin = {
      top    : 0,
      left   : 0,
      right  : 0,
      bottom : 0
    };
    */

// .attr('class', (data, index) => `rect-${index}`)

/*this.dummaData.data.forEach((val, index) => {
  console.log(d3.selectAll());
  // console.log(d3.selectAll());
  // console.log(val);
  // console.log(index);
});*/
