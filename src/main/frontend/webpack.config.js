'use strict'
const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin')
    , devMode = require('.').isDevelopment
    , USE_FAST_SOURCE_MAPS = false

const PATHS = {
    source: path.join(__dirname, 'app/main.jsx'),
    output: path.join(__dirname, '../../../target/classes/static')
};

module.exports = {
    entry: './app/main.jsx',
    output: '../../../target/classes/static/bundle.js',
    context: __dirname,
    devtool: devMode && USE_FAST_SOURCE_MAPS
        ? 'cheap-module-eval-source-map'
        : 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    },
    module: {
        rules: [{
            test: /jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            }]
        }]
    },
    plugins: devMode
        ? [new LiveReloadPlugin({appendScriptTag: true})]
        : [],
    devServer: {
        port: 9090,
        proxy: {
            '/': {
                target: 'http://localhost:8080',
                secure: false,
                prependPath: false
            }
        },
        publicPath: 'http://localhost:9090/',
        historyApiFallback: true
    }
};