import React, { useEffect, useState } from 'react';
import Frm from './Frm';
import UserCreate from './UserCreate';
function UserList(props) {
    let [data, setData] = useState([]);
    let [id, setId] = useState(1);
    let [whattoshow, changeshow] = useState("");
    useEffect(() => {
        fetch("http://localhost:3001/products/").then(r => r.json()).then(fr => {
            setData(fr);
            
            
        });
    }, [whattoshow]);
    let deleterecord = (id) => {
        fetch("http://localhost:3001/products/" + id, {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            
        }).then(r => {
            if (whattoshow=="")
                changeshow("deleted");
            else 
            changeshow("");
                console.log("Delete")

        });
   }
    return (
        <div>
            {
                (whattoshow == '' || whattoshow == 'deleted') ? "" : (whattoshow == 'create') ? <UserCreate prox={changeshow}></UserCreate> : <Frm id={id} prox={changeshow}></Frm>
            }
            <a href='#' onClick={() => {
                changeshow('create');
            }}>Create</a>
            <table border="1px">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(info =>
                            <tr key={info.id}>
                                <td>{info.id}</td>
                                <td>{info.name}</td>
                                <td>{info.price}</td>
                                <td>
                                    <button onClick={() => {
                                        changeshow('edit');
                                        setId(info.id);

                                    }}>Edit</button>
                                </td>
                                <td>
                                    <button onClick={() => {
                                        deleterecord(info.id);
                                       

                                    }}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>   
        </div>
    );
}

export default UserList;