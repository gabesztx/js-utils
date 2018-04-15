import {runDev, runProd} from './server'
const start = (env) => {
  console.log('ENV', env);
  if (env === 'development') {
    runDev('dev');
  }

  if (env === 'production') {
    runProd('prod');
  }

};
start(process.env.NODE_ENV);