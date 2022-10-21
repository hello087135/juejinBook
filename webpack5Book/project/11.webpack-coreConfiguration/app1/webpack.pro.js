const path =require('path');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
module.exports=merge(baseConfig,{
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'afterMerge.js'
    }
})