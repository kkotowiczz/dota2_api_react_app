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
    devtool: 'cheap-eval-source-map',
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
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                include: `${APP_DIR}/assets/images`,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
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