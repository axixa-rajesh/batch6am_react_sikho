import React from 'react';
import { Table } from 'react-bootstrap';

function About(props) {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>S.NO.</th>
                        <th>Name</th>
                        <th>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Raja</td>
                        <td>250</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Raj kumar</td>
                        <td>150</td>
                    </tr>
                </tbody>
           </Table>
        </div>
    );
}

export default About;