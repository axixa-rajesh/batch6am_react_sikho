import React,{useState} from 'react';

function UserCreate(props) {
     let [info, setInfo] = useState({ name: "", price: ""})
        let valuesetter = (e) => {
           
            setInfo({ ...info, [e.target.name]: e.target.value })
    }
    let save = (e) => {
        e.preventDefault();
        console.log(info);

        fetch("http://localhost:3001/products/", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        }).then(r => {
            props.prox("");
            console.log("Saved")
    })

    }
    return (
        <div>
            <form>
                <input type='text' defaultValue={info.name} name='name' onChange={valuesetter} />
                <input type='number' defaultValue={info.price} name="price" onChange={valuesetter} />
                <button onClick={save}>Save</button>
            </form>  
        </div>
    );
}

export default UserCreate;