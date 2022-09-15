const path =require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[contenthash].js',
    },
    resolve: {
        extensions: ['.js', '.vue'],
        fallback: {
            'crypto': require.resolve('crypto-browserify'),
            'stream': require.resolve('stream-browserify'),
            "os": require.resolve("os-browserify/browser"),
            "path": require.resolve("path-browserify")
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}
