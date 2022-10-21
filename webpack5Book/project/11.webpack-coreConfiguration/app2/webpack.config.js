const path =require('path');
module.exports={
    mode:'development',
    entry:{
        test:{
            import:'./src/test.js',
            runtime:"aa"
        },
        main:{
            import:'./src/index.js',
            runtime:'aa'
        }
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        clean:true,
    }
}