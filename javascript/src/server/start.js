import { runDevelop, runProduction } from './server';

const start = (env) => {
    if (env === 'development') {
        runDevelop('dev');
    } else if (env === 'production') {
        runProduction('prod');
    }

};
start(process.env.NODE_ENV);