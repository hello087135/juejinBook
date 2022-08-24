const path =require('path');
module.exports={
    mode:'development',
    entry:{
        test:'./text.js'
    },
    context:path.resolve(__dirname,'./src/'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    resolve:{
        alias:{
            'aa':path.resolve(__dirname,'./src/testResolve/')
        },
        extensions:['.js','.json'],
        modules:[path.resolve(__dirname,'./src/testResolve/'),'node_modules'],
    },
    externals:['lodash','atest'],
}
