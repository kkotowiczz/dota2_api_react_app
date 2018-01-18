const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const BUILD_DIR = path.resolve(__dirname, './src/client/public');
const APP_DIR = path.resolve(__dirname, './src/app');

const config = {
    entry: `${APP_DIR}/App.js`,
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: APP_DIR
    },
    module: {

        rules: [
            {
                test: /\.css$/,
                use: 'css-loader',
                include: `${APP_DIR}/assets/stylesheets`
            },
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${APP_DIR}/index.html`,
            filename: 'index.html',
            inject: 'body'
        })
    ]
};

module.exports = config;