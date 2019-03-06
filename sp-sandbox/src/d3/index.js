import './style.css';
import template from './template.html';
import * as d3 from 'd3';

export class D3SandBox {
  constructor() {
    document.body.innerHTML = template;
    this.render();
  }

  render() {

    /*let perc_so_far = 0;
    const data = [8, 3, 40, 15, 10];
    const height = 30;
    const totalValue = d3.sum(data);

    /!* SVG *!/
    const chart = d3.select('#chart')
      .attr('width', '100%')
      .attr('height', height);

    /!* BAR *!/
    const bar = chart.selectAll('g')
      .data(data)
      .enter()
      .append('g');

    /!* RECT *!/
    bar.append('rect')
      .attr('width', function (d) {
        return ((d / totalValue) * 100) + '%';
      })
      .attr('x', function (d) {
        const prev_perc = perc_so_far;
        const this_perc = 100 * (d / totalValue);
        perc_so_far = perc_so_far + this_perc;
        return prev_perc + '%';
      })
      .attr('height', height)
      .attr('fill', 'red');


    /!* TEXT *!/
    perc_so_far = 0;
    bar.append('text')
      .attr('x', function (d) {
        const prev_perc = perc_so_far;
        const this_perc = 100 * (d / totalValue);
        perc_so_far = perc_so_far + this_perc;
        return prev_perc + '%';
      })
      .attr('dy', '1.35em')
      .text(function (d) {// console.log('return text', d);
        return d;
      });*/

    const data = [
      {
        value : 5,
        color : '#1b35f5'
      },
      {
        value : 20,
        color : '#e746f5'
      },
      {
        value : 20,
        color : '#27f535'
      },
      {
        value : 5,
        color : '#f53e48'
      }
    ];

    let perc_so_far = 0;

    const height = 30;
    const totalValue = d3.sum(data, v => v.value);

    /* SVG */
    const svg = d3.select(document.querySelector('.d3-content svg'))
      .attr('width', '100%')
      .attr('height', height);

    /* BAR */
    const bar = svg.selectAll('g')
      .data(data)
      .enter()
      .append('g');
    bar
      .append('rect')
      .attr('width', (d) => {
        return ((d.value / totalValue) * 100) + '%';
      })
      .attr('height', height)
      .attr('x', (d) => {
        const prev_perc = perc_so_far;
        const this_perc = 100 * (d.value / totalValue);
        perc_so_far = perc_so_far + this_perc;
        // console.log(prev_perc);
        // console.log(perc_so_far);
        return prev_perc + '%';
      })
      .attr('fill', d => d.color);
    // const myScale = d3.scaleLinear()
    //   .domain([0, 10])
    //   .range([0, 600]);
    //
    // console.log(myScale(1));

    // const lineGroup = svg.append('g');
    //
    // const line = lineGroup.append('rect');
    // line
    //   .attr('width', '10%')
    //   .attr('height', 15)
    //   .attr('y', 15)
    //   .attr('fill', '#1b35f5');
    //
    // const text = lineGroup.append('text');
    //
    // text
    //   .attr('class', 'f1')
    //   .attr('font-size', 12)
    //   .text('Val1')
    //   .attr('y', 12)

    // .attr('x', '10%');
    // console.log(document.querySelector('.f1').getComputedTextLength()/2);


    /* Rect 1 */
    // const text = line1Group.append('text');
    // const rect = line1Group.append('rect');
    // rect1Text.style('translate', 'translateX(10px)')
    // text
    //   .text('lorem Ipsum')
    //   .attr('font-size', '12px')
    //   .attr('y', '12');
    // .text('y', 0)
    // {/*<text x="20" y="20" font-family="sans-serif" font-size="20px" fill="red">Hello!</text>*/}
    // rect
    //   .attr('width', '10%')
    //   .attr('height', '15')
    //   .attr('fill', '#1b35f5')
    //   .style('transform', 'translateY(5px)')
    // .attr('x', '0');

    // /* Rect 2 */
    // const rect2 = lineGroup.append('rect');
    // rect2
    //   .attr('width', '20%')
    //   .attr('fill', '#e746f5')
    //   .attr('x', '10%');
    //
    // /* Rect 3 */
    // const rect3 = lineGroup.append('rect');
    // rect3
    //   .attr('width', '5%')
    //   .attr('fill', '#27f535')
    //   .attr('x', '30%');
  }
}

// setTimeout(() => {});
// .style('transform', 'translateY(5px)')
