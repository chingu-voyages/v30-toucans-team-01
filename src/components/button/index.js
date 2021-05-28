import React from 'react';
import './button.css';

function Button({children, className, ...attributes}) {
    return (
        <button className={`Button ${className || ''}`} {...attributes}>
            {children}
        </button>
    );
}

export default Button;