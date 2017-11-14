import {runDev, runProd} from './servertype'
const start = (env) => {
  if (env === 'development') {
    runDev('dev');
  }
  if (env === 'production') {
    runProd('prod');
  }
};
start(process.env.NODE_ENV);