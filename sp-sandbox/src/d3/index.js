import './style.scss';
import template from './template.html';
import * as d3 from 'd3';

export class StacketBulletChart {
  constructor() {
    document.body.innerHTML = template;
    this.dummaData = {
      mobilTotalData : 10,
      data           : [
        {
          label : 'Roaming',
          color : '#AAAACE',
          value : 4
        },
        {
          label : 'National',
          color : '#767676',
          value : 5
        }
      ]
      // zeroRated      : {
      //   label : 'allowance',
      //   color : '#36B07F'
      // }
    };

    this.initSvg();
    this.initData();
    this.setRectBar();
  }

  initSvg() {
    this.svgWidth = '100%';
    this.svgHeight = 150;
    this.svgD3 = d3.select(document.querySelector('#stackedBulletChartSVG'))
      .attr('width', this.svgWidth)
      .attr('height', this.svgHeight);
  }

  initData() {
    this.isZeroRated = this.dummaData.hasOwnProperty('zeroRated');
    this.totalData = this.dummaData.mobilTotalData;
    this.amountDada = d3.sum(this.dummaData.data, v => v.value);
    this.freeData = this.totalData - this.amountDada;
    document.querySelector('.dataCurrent').innerHTML = this.amountDada;
    document.querySelector('.dataTotal').innerHTML = this.totalData;
  }


  setRectBar() {
    this.rectBarXpos = 0;
    this.rectHeight = 12;
    this.lineYPos = this.svgHeight / 2 - this.rectHeight / 2;
    this.rectGroup = this.svgD3.selectAll('g')
      .data(this.dummaData.data)
      .enter()
      .append('g')
      .attr('class', (data, index) => `rect-group-${index}`);

    this.rectGroup
      .append('rect')
      .attr('class', (data, index) => `rect rect-${index}`)
      .attr('fill', data => data.color)
      .attr('width', data => this.getDimension(data.value) + '%')
      .attr('height', this.rectHeight)
      .attr('y', this.lineYPos)
      .attr('x', (data) => {
        let prevPercent = this.rectBarXpos;
        this.rectBarXpos += this.getDimension(data.value);
        return prevPercent + '%';
      });

    if (this.freeData > 0) {
      const groupLength = this.svgD3.selectAll('g')
        .nodes().length;
      this.svgD3.append('g')
        .attr('class', () => `rect-group-${groupLength}`)
        .append('rect')
        .attr('class', () => `rect rect-${groupLength}`)
        .attr('width', this.getDimension(this.freeData) + '%')
        .attr('height', this.rectHeight)
        .attr('y', this.lineYPos)
        .attr('x', this.rectBarXpos + '%')
        .attr('fill-opacity', 0)
        .attr('stroke', '#D8D8D8')
        .attr('stroke-width', '0.5');
    }

    if (this.isZeroRated) {
      const zeroRatedData = this.dummaData.zeroRated || {};
      const groupLength = this.svgD3.selectAll('g')
        .nodes().length;
      this.svgD3.append('g')
        .attr('class', () => `rect-group-${groupLength}`)
        .append('rect')
        .attr('class', (data, index) => `rect rect-${index}`)
        .attr('fill', () => zeroRatedData.color)
        .attr('width', () => '20%')
        .attr('height', this.rectHeight)
        .attr('y', this.lineYPos)
        .attr('x', () => {
          const prevPercent = 100 - 20;
          return prevPercent + '%';
        });
    }

    /* TEXT */
    this.rectBarXpos = 0;
    this.barLength = this.dummaData.data.length - 1;
    this.svgD3.selectAll('g')
      .append('g')
      .attr('class', (data, index) => {
        return `text-label-group text-group-${index}`;
      });
    this.textLabelGroup = d3.selectAll('.text-label-group');
    this.textLabelGroup.each((data, index) => {
      if (data) {
        if (index === 0) {
          this.setTextLabel(index, index, this.rectBarXpos);
        }
        this.rectBarXpos += this.getDimension(data.value);
        if (this.barLength === index) {
          this.setTextLabel(index, this.amountDada, this.rectBarXpos);
          this.setTextLabel(index + 1, this.totalData, this.isZeroRated ? 80 : 100);
        }
      }
    });
    this.setTextLabelPosition();
  }

  setTextLabel(index, value, position) {
    const textGroup = d3.select(this.textLabelGroup.nodes()[index]);
    const textLabel = textGroup.append('text')
      .attr('class', `label-value`)
      .text(value);
    const textFlag = textGroup.append('text')
      .attr('class', `label-flag`)
      .text('GB');
    const textHeight = textLabel.node()
      .getBoundingClientRect().height;
    const textWidth = textLabel.node()
      .getBoundingClientRect().width;
    const textYpos = this.lineYPos + this.rectHeight + textHeight;
    textLabel
      .attr('x', position + '%')
      .attr('dy', textYpos);
    textFlag
      .attr('x', position + '%')
      .attr('dx', textWidth + 2)
      .attr('dy', textYpos);
  }

  setTextLabelPosition() {
    const barLength = this.dummaData.data.length;
    const isZeroRated = this.isZeroRated;
    d3.selectAll('.text-label-group')
      .attr('transform', function (data, index) {
        let xPos = 0;
        if (barLength - 1 === index) {
          console.log(this.getBoundingClientRect().width);
          const groupWidth = this.getBoundingClientRect().width;
          xPos = -groupWidth / 2;
        }
        if (barLength === index) {
          const groupWidth = this.getBoundingClientRect().width;
          xPos = isZeroRated ? -groupWidth / 2 : -groupWidth;
        }
        return `translate(${xPos},0)`;
      });
  }

  getDimension(value) {
    // TODO: 20% zeroratedet dinamikusan
    const percentVale = this.isZeroRated ? 80 : 100;
    return (value / this.totalData) * percentVale;
  }
}
