import React, { useContext } from 'react';
import UserContext from './UserContext';  
import { Card, Container } from 'react-bootstrap';

const CalculationComponent = () => {
    const { bank } = useContext(UserContext);  

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '10rem' }}>
            <Card style={{ width: '18rem' }}>
                <Card.Body className="text-center">
                    <Card.Title>Calculation Component</Card.Title>
                    <Card.Text>
                        Current Balance: ${bank.amount}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CalculationComponent;
