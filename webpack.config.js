var webpack = require('webpack');
var config = {
    context: __dirname + '/src',
    entry: './index.js',
    output: {
        path: __dirname + '/src',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'ng-annotate!babel', exclude: /node_modules/},
            {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
            //LOADERS ARE RUN FROM LEFT TO RIGHT '!' strings loaders together - this runs through sass-loader, css-loader, style-loader
            {test: /\.scss$/, loader: 'style!css!sass', exclude: /node_modules/}
        ]
    },
    plugins: []
};

if(process.env.NODE_ENV == 'production'){
    config.output.path = './dist';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = config;