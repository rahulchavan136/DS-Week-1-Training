import React, { useContext } from 'react';
import UserContext from './UserContext';

const DisplayComponent = () => {
    const { name } = useContext(UserContext);

    return (
        <div>
            <h2>Welcome, {name}!</h2>
        </div>
    );
}

export default DisplayComponent;
