import React, { useEffect, useRef, useState } from 'react';
import { Container, Form } from 'react-bootstrap';

export const RefDemo = () => {
    const [name, setName] = useState('');
    const rCount = useRef(1);

    useEffect(() => {
        rCount.current = rCount.current + 1;
    }, []);

    return (
        <Container className="mt-5">
            <h2>RefDemo Component</h2>
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Enter Your Name:</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                </Form.Group>
            </Form>
            <p className="mt-3">The component has been rendered: {rCount.current} times</p>
        </Container>
    );
};
