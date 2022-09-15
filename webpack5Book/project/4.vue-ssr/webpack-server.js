const Merge = require('webpack-merge');
const Base = require('./webpack-base');
const Path = require('path');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
module.exports = Merge.merge(Base, {
    entry: {
        servers: Path.resolve(__dirname, './src/entry-server.js'),
    },
    target: 'node',
    output: {
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['vue-style-loader', {
                    loader: 'css-loader',
                    options: {
                        esModule: false,
                    }
                }]
            }
        ]
    },
    plugins: [
        new WebpackManifestPlugin({fileName: 'manifest-server.json'}),
    ],
})
