const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackSpritesmithPlugin = require('webpack-spritesmith');
module.exports={
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     type: 'asset',
            //     use: [{
            //         loader: 'image-webpack-loader',
            //         options: {
            //           mozjpeg: {
            //             progressive: true,
            //             quality: 60
            //           }
            //         }
            //     }]
            // },
            {
                test: /\.txt$/,
                use: ['raw-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                oneOf: [{
                    type:'javascript/auto',
                    resourceQuery: /sizes?/,
                    use:[{
                        loader:'responsive-loader',
                        options:{
                            adapter: require('responsive-loader/sharp'),
                        }
                    }]
                },{
                    type: 'asset',
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        // new WebpackSpritesmithPlugin({
        //     src: {
        //         cwd: path.resolve(__dirname, './public'),
        //         glob: '*.jpg'
        //     },
        //     target: {
        //         image: path.resolve(__dirname, './dist/sprite.jpg'),
        //         css: path.resolve(__dirname, './dist/sprite.css')
        //     }
        // })
    ]
}
