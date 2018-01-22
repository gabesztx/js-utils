const path = require('path');
const webpack = require('webpack');
const sourcePath = path.resolve(__dirname, '../src/app');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// const babelLoaderTransformConfig = require('./babel-loader-transform-config');
// const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
// const ManifestPlugin = require('webpack-manifest-plugin');
// const AssetsPlugin = require('assets-webpack-plugin');
// const SplitByPathPlugin = require('webpack-split-by-path');


const getEntry = (env) => {

	const entry = {
		app: ['./index.js'],
		// publicApp: ['./publicApp.js'],
	};

	if (env === 'dev') {
		Object.keys(entry).forEach((key) => {
			entry[key].unshift('webpack-hot-middleware/client?reload=true');
		});
	}
	if (env === 'prod') {
		Object.keys(entry).forEach((key) => {
			// entry[key].unshift('babel-regenerator-runtime');
		});
		// entry['vendor'] = ['angular-route'];
	}
	return entry;
};


let getOutput = (env) => {
	return {
		path: path.resolve(__dirname, '../src/public/dist'),
		publicPath: '/',
		filename: env == 'prod' ? '[name]-[chunkhash].js' : '[name].js',
		// chunkFilename: env == 'prod' ? '[name]-[chunkhash].js' : '[name].js'
	}
};

let getDevTool = (isProd) => {
	return isProd ? false : 'source-map';
	// return 'source-map';
};


let getPlugin = (env) => {
	const plugin = [

		new webpack.DefinePlugin({
			__ENV__: `'${env}'`
		}),

		new HtmlWebpackPlugin({
			title: 'HtmlWebpackPlugin',
			template: 'index.html',
			inject: 'body',
			filename: 'index.html'
		}),

	];

	if (env === 'prod') {
		plugin.push(
			new webpack.LoaderOptionsPlugin({
				options: {},
				//minimize: true,
				//debug: false
			}),


			/*new webpack.optimize.UglifyJsPlugin({

				compress: {
					screw_ie8: true,
					warnings: false
				},
				comments: false
			}),*/

			/* new AssetsPlugin({
			 filename: 'generated-webpack-assets.json',
			 fullPath: false,
			 path: path.join(__dirname, './'),
			 prettyPrint: true
			 }),*/

			new ExtractTextPlugin({
				filename: '[name].css',
			})
		)
	}

	if (env === 'dev') {
		plugin.push(
			new BrowserSyncPlugin({
					host: 'localhost',
					port: 3000,
					open: true,
					proxy: 'http://localhost:5000',
					notify: false,
					files: ['src/public/**/*.*', '*.html'],
					ghostMode: {
						scroll: true
					},
					ui: {
						port: 3010
					}
				},
				{
					reload: false
				}
			),
			new webpack.HotModuleReplacementPlugin()
		)
	}
	return plugin;
};


module.exports = (environment) => {
	let env = environment == undefined ? 'prod' : environment;
	let isProd = env === 'prod';
	return {
		context: sourcePath,
		entry: getEntry(env),
		output: getOutput(env),
		devtool: getDevTool(isProd),
		stats: {
			colors: true,
			chunks: false,
			hash: false,
			children: false,
			timings: true,
		},
		module: {
			rules: [
				{
					test: /\.js?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',

				},

				{
					test: /\.(scss|css)$/,
					loader: !isProd ?
						'style-loader!css-loader!sass-loader' :
						ExtractTextPlugin.extract({
							fallback: 'style-loader',
							use: [
								{
									loader: 'css-loader?importLoaders=1,',
								},
								{
									loader: 'postcss-loader',
									options: {
										plugins: [require('autoprefixer')()]
									}
								},
								{
									loader: 'sass-loader',
								}

							]
						})
				},
				{
					test: /\.html$/,
					use: [{
						loader: 'html-loader',
						options: {
							minimize: true
						}
					}],
				},
				{
					test: /\.(svg)$/,
					use: "url-loader?name=[sha512:hash:base64:7].[ext]"

				},
			],
		},

		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.jsx']
		},
		plugins: getPlugin(env),
	}
};
