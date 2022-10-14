export default function ChidrenCom(props) {
    let {value,onChange} =props;

    const add = (target) => {
        const newValue = [...value];
        !newValue.includes(target) && newValue.push(target) && onChange(newValue);
    };
    const remove = (target) => {
        value = value.filter((v) => v !== target);
        console.log(value,'11111')
        onChange(value);
        console.log(value,'00000')
    };

    return <div>
        {value?.includes(0)?<div onClick={()=>{remove(0)}} >0</div>:<div onClick={()=>{add(0)}}>1</div>}
        {value?.includes(1)?<div onClick={()=>{remove(1)}} >0</div>:<div onClick={()=>{add(1)}}>1</div>}
        {value?.includes(2)?<div onClick={()=>{remove(2)}} >0</div>:<div onClick={()=>{add(2)}}>1</div>}
    </div>
}
