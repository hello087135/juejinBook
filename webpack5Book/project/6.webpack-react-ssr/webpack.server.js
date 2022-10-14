const Merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');

module.exports = Merge.merge(baseConfig, {
    mode: 'development',
    entry: {
        server: path.resolve(__dirname, './src/entry-server.js'),
    },
    target: 'node',
    output: {
        filename: 'server.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader: './Loader/index.css.js',
        }]
    }
})
