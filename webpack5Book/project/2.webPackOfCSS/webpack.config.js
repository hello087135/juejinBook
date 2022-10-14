const path = require('path');
const MiniCSSExtraPlugin =require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        myTest: './src/main.js',
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:[MiniCSSExtraPlugin.loader,'css-loader']
        },{
            test:/\.less$/,
            use:[MiniCSSExtraPlugin.loader,{
                loader:'css-loader',
                options:{
                    importLoaders:1
                }
            },'postcss-loader', 'less-loader']
        }
        ]
    },
    devtool:false,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    plugins:[
        new MiniCSSExtraPlugin(),
        new HtmlWebpackPlugin({
            minify: false,
            template: './public/index.css.html',
        })
    ],
}
