import ('app3/index').then((obj)=>{
    window.onresize = function(){
        console.log(obj.default);
        obj.default.modifyName();
    }
})