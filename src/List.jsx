import React from 'react';
const data = [
    { id: 1, username: "rmcats", password: "rajesh123" },
    { id: 2, username: "vamu", password: "raaesh123" },
    { id: 3, username: "mamu", password: "radesh123" },
    { id: 4, username: "ramu", password: "radesh123" },
    { id: 5, username: "vasu", password: "rajgesh123" },
    { id: 6, username: "raju", password: "grajesh123" },
];

function List(props) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Passord</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(info => (
                            <tr>
                                <td>{info. id}</td>
                                <td>{info.username}</td>
                                <td>{info.password}</td>
                            </tr> 
                        ))
                    }
                </tbody>
            </table>   
        </div>
    );
}

export default List;