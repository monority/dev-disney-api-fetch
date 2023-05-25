import React from 'react';

export const Button = ({ className, action, children }) => {
    return (
        <div className="wrapper">
        <button className={className} onClick={action}>
            {children}
        </button>
        </div>
    )
}
