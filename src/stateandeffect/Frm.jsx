import React, { useEffect, useState } from 'react';
function Frm(props) {
    let [info, setInfo] = useState({id:props.id, name: "", price: ""})
    let valuesetter = (e) => {
       
        setInfo({ ...info, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        fetch("http://localhost:3001/products/"+props.id).then(r => r.json()).then(fr =>  setInfo(fr))
    },[props]);
    let save = (e) => {
        e.preventDefault();
        console.log(info);
        
        fetch("http://localhost:3001/products/" + props.id, {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        }).then(r => {
            console.log("Updated")
            props.prox("");
        });

    }
    return (
        <div>
            <form>
                <input type='text' defaultValue={info.name} name='name' onChange={valuesetter} />
                <input type='number' defaultValue={info.price} name="price" onChange={valuesetter} />
                <button onClick={save}>Update</button>
            </form>  
        </div>
    );
}

export default Frm;