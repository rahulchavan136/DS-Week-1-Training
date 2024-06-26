import React, { useState, useEffect } from 'react';
import SinglePerson from './SinglePerson';
import { Card, Row, Col } from 'react-bootstrap';
import personsData from './PersonData';
 

const Persons = () => {
    const [persons, setPersons] = useState(personsData);
    const [oldestId, setOldestId] = useState(null);

    useEffect(() => {
        let oldest = persons.reduce((prev, current) => {
            return (prev.age > current.age) ? prev : current;
        });

        setOldestId(oldest.id);
    }, [persons]);

    const deletePerson = (id) => {
        const updatedPersons = persons.filter(person => person.id !== id);
        setPersons(updatedPersons);
    };

    return (
        <>
            <Card>
                <Card.Header className='text-center'>SCB Digital School - React (Week 1) 17th June</Card.Header>
                <Card.Body>
                    <Row>
                        {persons.map(person => (
                            <Col sm={6} md={4} lg={3} key={person.id} style={{ marginBottom: '20px' }}>
                                <SinglePerson
                                    person={person}
                                    onDelete={deletePerson}
                                    isOldest={person.id === oldestId}
                                />
                            </Col>
                        ))}
                    </Row>
                </Card.Body>
            </Card>
            
        </>
    );
};

export default Persons;
