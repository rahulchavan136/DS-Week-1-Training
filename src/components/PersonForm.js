// PersonForm.jsx

import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const PersonForm = ({ onSubmit, initialFormData }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        contact: ''
    });

    useEffect(() => {
        if (initialFormData) {
            setFormData(initialFormData);
        }
    }, [initialFormData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            name: '',
            email: '',
            address: '',
            contact: ''
        });
    };

    return (
        <>
            <h5 className='text-center'>{initialFormData ? 'Edit Person' : 'Add New Person'}</h5>
            <hr />

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Person Name:</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Person Email:</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formAddress">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formContact">
                    <Form.Label>Contact:</Form.Label>
                    <Form.Control
                        type="text"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <br />
                <Button variant={initialFormData ? "warning" : "success"} type="submit">
                    {initialFormData ? 'Update Person' : 'Add Person'}
                </Button>
            </Form>
        </>
    );
};

export default PersonForm;
