var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlPlugin = require('html-webpack-plugin');

var package = require('./package');

var extractCSS = new ExtractTextPlugin('app.css');

var htmlEntry = new HtmlPlugin({
    favicon: path.resolve(__dirname, 'src/assets/favicon.ico'),
    hash: true,
    template: path.resolve(__dirname, 'src/index.ejs'),
    title: package.description
});

var config = {
    entry: {
        app: './src'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'ng-annotate',
                    'babel'
                ]
            },
            {
                test: /\.html$/,
                loaders: [
                    'ngtemplate-loader',
                    'html-loader'
                ]
            },
            {
                test: /\.s?css$/,
                loader: extractCSS.extract([
                    'css-loader?sourceMap',
                    'sass-loader?sourceMap'
                ])
            }
        ]
    },
    devServer: {
        publicPath: '/',
        contentBase: 'dist',
        historyApiFallback: true
    },
    devtool: 'source-map',
    plugins: [
        extractCSS,
        htmlEntry
    ]
};

if (process.env.NODE_ENV == 'production') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;
