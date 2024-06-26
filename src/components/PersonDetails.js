// PersonDetails.jsx

import React from 'react';
import { Table, Button } from 'react-bootstrap';

const PersonDetails = ({ submittedData, onDelete, onEdit }) => {
    const handleDelete = (index) => {
        onDelete(index);
    };

    const handleEdit = (index) => {
        onEdit(index);
    };

    return (
        <div className="mt-4">
            <h2>Person Data</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Person Name</th>
                        <th>Person Email</th>
                        <th>Address</th>
                        <th>Contact</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {submittedData.map((data, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.address}</td>
                            <td>{data.contact}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleEdit(index)}>
                                    Edit
                                </Button>
                                {' '}
                                <Button variant="danger" onClick={() => handleDelete(index)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default PersonDetails;
