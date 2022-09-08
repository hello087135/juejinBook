const path =require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    output: {
        path: path.resolve(__dirname, '../dist'),
        name: '[name].[contenthash].js',
    },
    resolve: {
        extensions: ['.js', '.vue'],
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
