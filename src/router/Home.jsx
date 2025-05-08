import { useState } from "react";

const Home = () => {
    const [data, setData] = useState([]);
    const [inputData, setInputData] = useState({ name: "", age: "" });
    const [editData, setEdit] = useState({ id: null, name: "", age: "" });
    const [whatToShow, setShow] = useState("");

    const handleChange = (e) => {
        setInputData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleEdit = (e) => {
        setEdit(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const saveEdit = () => {
        setData(prev => prev.map(obj => obj.id === editData.id ? editData : obj));
        setShow("");
    };

    const createEntry = () => {
        if (inputData.name && inputData.age) {
            setData(prev => [...prev, { ...inputData, id: prev.length + 1 }]);
            setInputData({ name: "", age: "" });
            setShow("");
        }
    };

    return (
        <div className="container">
            <h1>CRUD</h1>

            {whatToShow === "create" ? (
                <div className="form">
                    <input value={inputData.name} name="name" placeholder="Name" onChange={handleChange} />
                    <input value={inputData.age} name="age" placeholder="Age" type="number" onChange={handleChange} />
                    <button className="create" onClick={createEntry}>Create</button>
                </div>
            ) : whatToShow === "edit" ? (
                <div className="form">
                    <input value={editData.name} name="name" placeholder="Name" onChange={handleEdit} />
                    <input value={editData.age} name="age" placeholder="Age" type="number" onChange={handleEdit} />
                    <button onClick={saveEdit}>Save Edit</button>
                </div>
            ) : (
                <button className="create" onClick={() => setShow("create")}>+ Create New</button>
            )}

            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(obj => (
                        <tr key={obj.id}>
                            <td>{obj.id}</td>
                            <td>{obj.name}</td>
                            <td>{obj.age}</td>
                            <td><button onClick={() => { setEdit(obj); setShow("edit"); }}>Edit</button></td>
                            <td><button className="delete" onClick={() => setData(prev => prev.filter(val => val.id !== obj.id))}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;