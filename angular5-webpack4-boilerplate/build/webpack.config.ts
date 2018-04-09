const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ngcWebpack = require('ngc-webpack');
const {CheckerPlugin} = require('awesome-typescript-loader')
// console.log('Env', process.env.NODE_ENV);
const ENV = process.env.NODE_ENV;
export const config = {
    entry: {
        app: './src/index.ts'
    },
    target: 'node',
    // mode: 'development',
    devtool: ENV === 'production' ? false : 'inline-source-map',

    /*optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'initial',
                    enforce: true
                }
            }
        }
    },*/
    resolve: {
        extensions: ['.js', '.ts', '.html']
    },
    module: {
        rules: [
            {
                test: /.js$/,
                parser: {
                    system: true
                }
            },
            // Typescript
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                // loader: 'awesome-typescript-loader',
                use: '@ngtools/webpack'
            },

            // Templates
            {
                test: /\.html$/,
                exclude: /index.html$/i,
                use: [
                    {
                        loader: 'raw-loader'
                    }
                ]
            },

            // index file
            {
                test: /index.html$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            },

            // main application .less file
            /*   {
                   test: /app\.less$/i,
                   use: [
                       {
                           loader: 'file-loader',
                           options: {
                               name: 'assets/[name].css'
                           }

                       },
                       {
                           loader: 'less-loader',
                       }
                   ]
               }*/
        ]
    },
    plugins: [
        new ngcWebpack.NgcWebpackPlugin({
            tsConfigPath: './tsconfig.json',
            mainPath: './src/index.ts'
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(ENV === 'production'),
            BUILDTIMESTAMP: JSON.stringify(Date.now()),
        }),
        // new CheckerPlugin()
        /* new CopyWebpackPlugin([
             {
                 from: './src/assets/images',
                 to: './assets/images',
                 toType: 'dir'
             },
             {
                 from: './src/assets/shim',
                 to: './assets',
                 toType: 'dir'
             }
         ]),*/
    ],
};