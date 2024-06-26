import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const CustomButton = ({ variant, onClick, disabled, children }) => {
    return (
        <Button variant={variant} onClick={onClick} disabled={disabled}>
            {children}
        </Button>
    );
};

CustomButton.propTypes = {
    variant: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default CustomButton;
