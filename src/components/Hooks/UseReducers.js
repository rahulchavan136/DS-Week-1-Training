import React, { useReducer } from 'react';
import { Button, Container } from 'react-bootstrap';
import ReducersInfo from './ReducersInfo';

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
};

// Initial state
const initialState = { count: 0 };

function UseReducers() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div>
                <p>Count: {state.count}</p>
                <Button variant='success' onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</Button>&nbsp;
                <Button variant='warning' onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</Button>&nbsp;
                <Button variant='danger' onClick={() => dispatch({ type: 'RESET' })}>Reset</Button>
            </div><br />
            <Container>
                <ReducersInfo />
            </Container>
        </>
    );
}

export default UseReducers;
