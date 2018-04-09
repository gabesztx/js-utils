// Helper: root() is defined at the bottom
const path = require('path');
const webpack = require('webpack');

// Webpack Plugins
// const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CheckerPlugin} = require('awesome-typescript-loader')
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
const ENV = process.env.npm_lifecycle_event;

const isTestWatch = ENV === 'test-watch';
const isTest = ENV === 'test' || isTestWatch;
const isProd = ENV === 'build';

module.exports = function makeWebpackConfig() {
	/**
	 * Config
	 * Reference: http://webpack.github.io/docs/configuration.html
	 * This is the object where all configuration gets set
	 */
		
		// console.log('isTest: ', isTest);
		// console.log('isProd: ', isProd);
	const config = {};
	
	/* mode value */
	config.mode = 'development';
	
	/**
	 * Devtool
	 * Reference: http://webpack.github.io/docs/configuration.html#devtool
	 * Type of sourcemap to use per build type
	 */
	if (isProd) {
		// config.devtool = 'source-map';
	}
	else if (isTest) {
		// config.devtool = 'inline-source-map';
	}
	else {
		// config.devtool = 'eval-source-map';
	}
	
	config.devtool = 'source-map';
	/**
	 * Entry
	 * Reference: http://webpack.github.io/docs/configuration.html#entry
	 */
	config.entry = {
		// 'polyfills': './src/polyfills.ts',
		'vendor': './src/vendor.ts',
		'app': './src/main.ts' // our angular app
	};
	
	
	/**
	 * Output
	 * Reference: http://webpack.github.io/docs/configuration.html#output
	 */
	config.output = {
		path: root('dist'),
		publicPath: '/',
		filename: 'js/[name].js',
		chunkFilename: '[id].chunk.js'
	};
	
/*	config.optimization = {
		splitChunks: {
			chunks: 'all',
		}
	};*/
	
	
	
	/**
	 * Loaders
	 * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
	 * List: http://webpack.github.io/docs/list-of-loaders.html
	 * This handles most of the magic responsible for converting modules
	 */
	
	config.module = {
		rules: [
			// Support for .ts files.
			{
				test: /\.ts$/,
				// loader: 'awesome-typescript-loader',
				loaders: ['awesome-typescript-loader', 'angular2-template-loader', '@angularclass/hmr-loader'],
				exclude: /node_modules/,
				// exclude: [/\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
			}
		]
	};
	
	
	/**
	 * Plugins
	 * Reference: http://webpack.github.io/docs/configuration.html#plugins
	 * List: http://webpack.github.io/docs/list-of-plugins.html
	 */
	config.plugins = [
		new HtmlWebpackPlugin({
			template: './src/public/index.html',
			chunksSortMode: 'dependency'
		}),
		/*		new webpack.ContextReplacementPlugin(
					// The (\\|\/) piece accounts for path separators in *nix and Windows
					// /angular(\\|\/)core(\\|\/)(@angular|es5)/,
					/angular(\\|\/)core(\\|\/)@angular/,
					root('./src') // location of your src
				),*/
		// new CheckerPlugin(),
	];
	
	
	/**
	 * Dev server configuration
	 * Reference: http://webpack.github.io/docs/configuration.html#devserver
	 * Reference: http://webpack.github.io/docs/webpack-dev-server.html
	 */
	
	config.devServer = {
		contentBase: './src/public',
		historyApiFallback: true,
		quiet: true,
/*
		stats: {
			warnings: false
		}*/
	};
	
	return config;
}();

// Helper functions
function root(args) {
	args = Array.prototype.slice.call(arguments, 0);
	return path.join.apply(path, [__dirname].concat(args));
}
