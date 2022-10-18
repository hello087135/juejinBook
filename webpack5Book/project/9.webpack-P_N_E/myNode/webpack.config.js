const path = require('path');
const WebPackNodeExternals = require('webpack-node-externals');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
    },
    externals: [WebPackNodeExternals()],
    node: {
        __dirname: false,
        __filename: false,
    }
}