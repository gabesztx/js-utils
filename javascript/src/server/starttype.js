import {runDevelop, runProduction} from './servertype'
const start = (env) => {
  if (env === 'development') {
      runDevelop('dev');
  }
  if (env === 'production') {
      runProduction('prod');
  }
};
start(process.env.NODE_ENV);