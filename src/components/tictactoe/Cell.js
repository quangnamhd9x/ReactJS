import React from 'react';

const Cell = ({value, onClick, className}) => {  // object distructuring thay cho props
    return (
        <div className={`game-cell ${className}`} onClick={onClick}>
            {value}
        </div>
    );
};

export default Cell;