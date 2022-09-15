const merge = require('webpack-merge')
const base = require('./webpack-base')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {WebpackManifestPlugin} = require('webpack-manifest-plugin')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
// 导出配置
module.exports = merge.merge(base, {
    // 入口
    entry: {
        client: path.resolve(__dirname, './src/entry-client.js'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        fallback: {
            'crypto': require.resolve('crypto-browserify'),
            'stream': require.resolve('stream-browserify'),
            "os": require.resolve("os-browserify/browser"),
            "path": require.resolve("path-browserify")
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
        }),
        new WebpackManifestPlugin({fileName: 'manifest-client.json'}),
        new NodePolyfillPlugin(),
    ]
})
