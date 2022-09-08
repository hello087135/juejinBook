const path = require('path');
// 导入vue-loader的插件
const {VueLoaderPlugin} = require('vue-loader');
// 导入html-webpack-plugin插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    mode:'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader',
                }
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.pug$/,
                use: [
                    'pug-plain-loader',
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    devServer: {
        hot: true,
    }
}
