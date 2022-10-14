const obj={
    name: 'app3',
    modifyName: function(){
        this.name = 'has been modified';
    }
};
window.onresize = function(){
    console.log(obj);
}
export default obj;