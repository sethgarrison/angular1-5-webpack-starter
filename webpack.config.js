var path = require('path');
var qs = require('querystring');
var CopyPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('app.css');
var copyFiles = new CopyPlugin([ { from: 'index.html' } ]);
var babelQuery = qs.stringify({ presets: require.resolve('babel-preset-es2015') });


module.exports = {
    entry: {
        app: './src',
    },
    output: {
        path: 'dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'ng-annotate?map=false!babel?' + babelQuery
            },
            {
                test: /\.html$/,
                loader: 'ngtemplate!html?attrs[]=i:ng-include'
            },
            {
                test: /\.s?css$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg|woff?)$/,
                loader: 'file',
                query: {
                    name: 'assets/[name]_[hash:7].[ext]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            angular: path.join(__dirname, 'node_modules', 'angular')
        }
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    devtool: 'sourcemap',
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    plugins: [
        copyFiles,
        extractCSS
    ],
    devServer: {
        publicPath: '/',
        contentBase: 'dist',
        historyApiFallback: true
    }
};
