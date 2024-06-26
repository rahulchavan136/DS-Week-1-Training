import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import useFetchData from './useFetchData'; // Adjust import path based on your project structure

const CustomHookExample = () => {
    const { data, loading, error } = useFetchData('https://jsonplaceholder.typicode.com/users');

    if (loading) {
        return <Container className="mt-5">Loading...</Container>;
    }

    if (error) {
        return <Container className="mt-5">Error: {error.message}</Container>;
    }

    return (
        <Container className="mt-2">
            <h2>User List</h2>
            <ListGroup>
                {data && data.map(user => (
                    <ListGroup.Item key={user.id}>
                        {user.name} - {user.email}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default CustomHookExample;
