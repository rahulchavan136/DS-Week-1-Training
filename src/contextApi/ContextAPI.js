import React, { useContext } from 'react';
import UserContext from './UserContext';  
import { Container, Row, Col } from 'react-bootstrap';
 import CustomButton from './CustomButton';
import CalculationComponent from './CalculationComponent';
 
const ContextAPI = () => {
    const { bank, dispatch } = useContext(UserContext);  

    const handleDebit = () => {
        dispatch({ type: "DEBIT", payload: 100 });
    };

    const handleCredit = () => {
        dispatch({ type: "CREDIT", payload: 100 });
    };

    const handleReset = () => {
        dispatch({ type: "RESET" });
    };

    return (
        <Container>
            <Row>
                <Col>
                    <div>
                        <h2>This is the ContextAPI Component</h2>
                        <CustomButton variant='primary' disabled={bank.amount === 0} onClick={handleDebit}>
                            DEBIT
                        </CustomButton>
                        &nbsp;
                        <CustomButton variant='secondary' onClick={handleCredit}>
                            CREDIT
                        </CustomButton>
                        &nbsp;
                        <CustomButton variant='success' onClick={handleReset}>
                            RESET
                        </CustomButton>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CalculationComponent />
                </Col>
            </Row>
        </Container>
    );
};

export default ContextAPI;
