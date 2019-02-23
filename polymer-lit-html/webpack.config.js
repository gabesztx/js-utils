const path = require('path');
const merge = require('webpack-merge');
const createDefaultConfig = require('@open-wc/building-webpack/default-config');
const defaultConfig = createDefaultConfig(
    {
        indexHTML: path.resolve(__dirname, './index.html'),
        indexJS: path.resolve(__dirname, './src/index.js'),
    }
);

module.exports = merge(
    defaultConfig, {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader"
                    ]
                },
            ],
        },
    }
);
