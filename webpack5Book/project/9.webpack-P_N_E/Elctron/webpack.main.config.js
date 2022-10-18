const path = require('path');
const WebpackNodeExternals = require('webpack-node-externals');
module.exports= {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    target: 'electron-main',
    node: {
        __dirname: false,
        __filename: false
    },
    devtool:false,
    externals: [WebpackNodeExternals()]
}