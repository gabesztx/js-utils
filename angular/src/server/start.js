import {runDev, runProd} from './server'
const start = (env) => {

  if (env === 'development') {
    runDev('dev');
  }

  if (env === 'production') {
    runProd('prod');
  }

};
console.log(process.env.NODE_ENV);
start(process.env.NODE_ENV);