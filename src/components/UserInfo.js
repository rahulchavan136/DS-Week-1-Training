
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import PersonDetails from './PersonDetails';
import PersonForm from './PersonForm';
     
const UserInfo = () => {
    const [submittedData, setSubmittedData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const handleSubmit = (formData) => {
        if (editIndex !== null) {
            const updatedData = [...submittedData];
            updatedData[editIndex] = formData;
            setSubmittedData(updatedData);
            setEditIndex(null);
        } else {
            setSubmittedData([...submittedData, formData]);
        }
    };

    const handleDelete = (index) => {
        const updatedData = submittedData.filter((_, i) => i !== index);
        setSubmittedData(updatedData);
    };

    const handleEdit = (index) => {
      console.log(index,"indexxx")
        setEditIndex(index);
    };


    return (
        <Container className="mt-5">
            <PersonForm onSubmit={handleSubmit} initialFormData={editIndex !== null ? submittedData[editIndex] : null} />
            {submittedData.length > 0 && (
                <PersonDetails submittedData={submittedData} onDelete={handleDelete} onEdit={handleEdit} />
            )}
        </Container> 
    );
};

export default UserInfo;
