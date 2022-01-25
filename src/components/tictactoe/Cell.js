import React from 'react';

const Cell = ({value, onClick}) => {  // object distructuring thay cho props
    return (
        <div className='game-cell' onClick={onClick}>
            {value}
        </div>
    );
};

export default Cell;