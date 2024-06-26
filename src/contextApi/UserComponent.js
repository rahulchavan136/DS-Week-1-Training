import React, { useReducer, useState } from 'react';
import UserContext from './UserContext'; // Correct import path

const UserComponent = (props) => {
    const [name, setName] = useState('Rahul Chavan');

    const bankReducer = (state, action) => {
        switch (action.type) {
            case "DEBIT":
                return { amount: state.amount - action.payload };
            case "CREDIT":
                return { amount: state.amount + action.payload };
            case "RESET":
                return { amount: 0 };
            default:
                return state;
        }
    };

    const [bank, dispatch] = useReducer(bankReducer, { amount: 0 });

    return (
        <UserContext.Provider value={{ name, setName, bank, dispatch }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserComponent;
