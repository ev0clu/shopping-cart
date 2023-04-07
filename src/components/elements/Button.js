import React from 'react';

const Button = (props) => {
    const { className, text, handleClick } = props;
    return (
        <button className={className} onClick={handleClick}>
            {text}
        </button>
    );
};

export default Button;
