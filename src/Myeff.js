import { useEffect, useState } from "react";
function Myeff() {
    let [val, setVal] = useState(1);
    let [name, setName] = useState("Vimal");
    useEffect(function () {
        window.alert(" I will call always when changes is happen")
    }); // call every time when component rerender 
    useEffect(function () {
        window.alert("Your First Change")
    }, []); //only first time
    useEffect(function () {
        window.alert(" Values happen")
    },[val]); // call when val state is change
     useEffect(function () {
        window.alert(" name happen")
    },[name]); // call when name state is change
     useEffect(function () {
        window.alert("name and Values happen")
    },[name,val]); // call when name and val state is change  
    return (
        <div>
            { name } {val}
            <input type="number" value={val} onChange={(e) => {
                // alert(e.target.value);
                setVal(e.target.value);
            }} />
             <input type="text" value={name} onChange={(e) => {
                // alert(e.target.value);
                setName(e.target.value);
            }} />
                
            <b>I am my effect</b>
        </div>
    );
}

export default Myeff;