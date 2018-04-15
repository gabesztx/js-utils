import express from 'express';
import http from 'http';
import webpack from 'webpack';
import path from 'path';

import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config';

const app = express();
const historyApiFallback = require('connect-history-api-fallback');
const port = process.env.PORT || 8080;
const server = http.createServer(app);

// return;
const runDevelop = (env) => {
	console.log('-------- Run development mode --------');
	const config = webpackConfig;
	const compiler = webpack(config);
	const middleware = webpackMiddleware(compiler, {
		publicPath: config.output.publicPath,
        stats: {
            hash: true,
            colors: true,
            entrypoints: true,
            modules: false,
        },
	});
	app
		.use(express.static(path.resolve(__dirname, '../')))
		.use(historyApiFallback())
		.use(middleware)
		.use(webpackHotMiddleware(compiler));
	server.listen(port);
};

const runProduction = (env) => {
	console.log('-------- Production development mode --------');
	const compiler = webpack(webpackConfig(env));
	compiler.apply(new webpack.ProgressPlugin());
	compiler.run(function (err, stats) {
		console.log('-------- Production build finished --------');
	});
};

module.exports = {
	runDev: runDevelop,
	runProd: runProduction,
};
