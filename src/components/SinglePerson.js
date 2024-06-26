import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { Trash } from 'react-bootstrap-icons';

const SinglePerson = ({ person, onDelete, isOldest }) => {
    const handleDelete = () => {
        onDelete(person.id);
    };

    return (
        <>
            <Card style={{ marginBottom: '1rem', textAlign: "left" }}>
                <Card.Body className="d-flex flex-column">
                    {isOldest && <Badge pill style={{ position: 'absolute', top: '10px', right: '10px' }}>Oldest</Badge>}
                    <Card.Title>{person?.name}</Card.Title>
                    <Card.Text>
                        Age: {person?.age}<br />
                        Department: {person?.department}
                    </Card.Text>
                    <Button variant="danger" onClick={handleDelete} style={{ marginTop: 'auto', alignSelf: 'flex-end' }}>
                        <Trash />
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default SinglePerson;
