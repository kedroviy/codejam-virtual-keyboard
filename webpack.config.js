/* eslint-disable indent */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: ['./src/index.js', './src/main.scss'],
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].js',
    },

    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader'],
        }, {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                { loader: 'css-loader', options: { url: false, sourceMap: true } },
                { loader: 'sass-loader', options: { sourceMap: true } },
            ],
        }],
    },

    plugins: [
        new HtmlWebpackPlugin({ title: 'virtual-keyboard' }),
        new MiniCssExtractPlugin({ filename: '[name].css' }),
    ],
};
