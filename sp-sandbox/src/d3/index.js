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
          value : 2
        },
        {
          label : 'National',
          color : '#767676',
          value : 5.75
        }
      ]
      /*   zeroRated      : {
           label : 'allowance',
           color : '#36B07F'
         }*/
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
    this.totalDataElement = document.querySelector('.dataCurrent');
    this.currentDataElement = document.querySelector('.dataTotal');
    this.totalDataElement.innerHTML = this.amountDada;
    this.currentDataElement.innerHTML = this.totalData;
    this.rectBarXpos = 0;
    this.rectHeight = 12;
    this.lineYPos = this.svgHeight / 2 - this.rectHeight / 2;
  }


  setRectBar() {
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


    /* Text */
    // console.log(this.rectGroup.nodes());
    /*   const texts = this.svgD3.selectAll('g');
       const groupLength = this.svgD3.selectAll('g').nodes().length;
       texts.each((data, index) => {
         console.log(groupLength, index);
       });*/


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

    /*    this.rectGroup
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
          });*/

    // console.log('this.rectBarXpos', this.rectBarXpos);

    const dataLength = this.dummaData.data.length;
    const txt = this.svgD3.selectAll('g');
    this.rectBarXpos = 0;
    txt.append('g')
      .attr('class', `text-label-group`);
    this.textLabelGroup = d3.selectAll('.text-label-group');
    this.textLabelGroup.each((data, index) => {
      if (data) {
        this.rectBarXpos += this.getDimension(data.value);
        if (dataLength - 1 == index) {
          const textGroup = d3.select(this.textLabelGroup.nodes()[index]);
          const textLabel = textGroup.append('text')
            .attr('class', `label-value`)
            .text(this.amountDada);
          // .text(data.value);
          const textFlag = textGroup.append('text')
            .attr('class', `label-flag`)
            .text('GB');
          const textHeight = textLabel.node()
            .getBoundingClientRect().height;
          const textWidth = textLabel.node()
            .getBoundingClientRect().width;
          const textYpos = this.lineYPos + this.rectHeight + textHeight;
          textLabel
            .attr('x', this.rectBarXpos + '%')
            .attr('dy', textYpos);
          textFlag
            .attr('x', this.rectBarXpos + '%')
            .attr('dx', textWidth + 2)
            .attr('dy', textYpos);

          // console.log(textGroup);
        }
      }

      // console.log(dataLength - 1, index);
      /*

      this.rectBarXpos += this.getDimension(data.value);
      const textHeight = textLabel.node()
        .getBoundingClientRect().height;
      const textWidth = textLabel.node()
        .getBoundingClientRect().width;
      const textYpos = this.lineYPos + this.rectHeight + textHeight;
      textLabel
        .attr('x', this.rectBarXpos + '%')
        .attr('dy', textYpos);
      textFlag
        .attr('x', this.rectBarXpos + '%')
        .attr('dx', textWidth + 2)
        .attr('dy', textYpos);*/
      // this.setTextLabel();
    });
  }

  getDimension(value) {
    // TODO: 20% zeroratedet dinamikusan
    const percentVale = this.isZeroRated ? 80 : 100;
    const percent = (value / this.totalData) * percentVale;
    return percent;
  }

  setFreeBar() {
    /*this.rectGroup.append('rect')
      .attr('width', this.getDimension(this.freeData) + '%')
      .attr('height', this.rectHeight)
      .attr('y', this.lineYPos)
      .attr('x', this.rectBarXpos + '%')
      .attr('fill-opacity', 0)
      .attr('stroke', '#D8D8D8')
      .attr('stroke-width', '0.5');*/
  }

  setTextLabel() {

    const textStartGroup = this.svgD3.select('#stackedLabelGroup')
      .append('g')
      .attr('class', 'label-group');
    const textStartValue = textStartGroup.append('text')
      .attr('class', 'label-value')
      .text(0);
    const textStartFlag = textStartGroup.append('text')
      .attr('class', 'label-flag')
      .text('GB');

    const textWidth = document.querySelector('.label-value')
      .getBoundingClientRect().width;
    const textHeight = document.querySelector('.label-value')
      .getBoundingClientRect().height;

    const textYpos = this.lineYPos + this.rectHeight + textHeight;

    textStartValue.attr('dy', textYpos);
    textStartFlag.attr('dy', textYpos);
    textStartFlag.attr('dx', textWidth + 2);

    const textTotalGroup = this.svgD3.select('#stackedLabelGroup')
      .append('g')
      .attr('class', 'label-total-group');

    const textTotalValue = textTotalGroup.append('text')
      .attr('class', 'label-total-value')
      .text(this.dummaData.mobilTotalData);

    const textTotalFlag = textTotalGroup.append('text')
      .attr('class', 'label-total-flag')
      .text('GB');

    const textTotalWidth = document.querySelector('.label-total-value')
      .getBoundingClientRect().width;
    const textTotalHeight = document.querySelector('.label-total-flag')
      .getBoundingClientRect().height;


    const textTotalYpos = this.lineYPos + this.rectHeight + textTotalHeight;

    textTotalValue.attr('dy', textTotalYpos);
    textTotalFlag
      .attr('dy', textTotalYpos)
      .attr('dx', textTotalWidth + 2);

    textTotalGroup.attr('transform', () => {
      const textTotalGroupWidth = this.currentDataElement.getBoundingClientRect().width;
      const textTotalGroupXPos = textTotalGroupWidth;
      return `;
      translate(${textTotalGroupWidth}, 0)`;
      // console.log(this.currentDataElement.getBoundingClientRect().width);
    });

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

    let percent = 0;
    const height = 30;
    const totalValue = d3.sum(dummyData, v => v.value);

    /* SVG */
    const svg = d3.select(document.querySelector('#singleStackChart'))
      .attr('width', '100%')
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
  }

}


/*const bar = svg.selectAll('g')
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
  });*/
