export const chartColors = ['#0082F0', '#A56EBE', '#36B07F', '#F52323'];

export const lineChartSpec = {
  $schema: 'https://vega.github.io/schema/vega/v5.json',
  width: 1450,
  height: 175,
  data: [
    {
      name: 'lineChartData',
    },
  ],
  autosize: {
    type: 'pad',
    contains: 'padding',
  },
  scales: [
    {
      name: 'x-scale',
      type: 'point',
      range: 'width',
      domain: { data: 'lineChartData', field: 'date' },
    },
    {
      name: 'y-scale',
      type: 'linear',
      range: 'height',
      nice: true,
      zero: true,
      domain: { data: 'lineChartData', field: 'value' },
    },
    {
      name: 'color',
      type: 'ordinal',
      range: chartColors,
    },
  ],

  axes: [
    {
      orient: 'bottom',
      scale: 'x-scale',
      domainColor: 'black',
      labelOverlap: 'greedy',
    },
    {
      orient: 'left',
      scale: 'y-scale',
      grid: true,
      ticks: false,
      domain: false,
    },
  ],

  marks: [
    {
      type: 'line',
      from: { data: 'lineChartData' },
      encode: {
        update: {
          x: { scale: 'x-scale', field: 'date' },
          y: { scale: 'y-scale', field: 'value' },
          stroke: { scale: 'color', field: 'color' },
          strokeWidth: { value: 2 },
        },
      },
    },
  ],
};
