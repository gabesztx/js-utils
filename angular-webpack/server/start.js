import {runDev, runProd} from './server'
const start = (env) => {
  if (env === 'development') {
    runDev();
  }

 /* if (env === 'production') {
    runProd('prod');
  }*/

};
start(process.env.NODE_ENV);