import React from 'react';

const Filter = ({inputText, count, onChange}) => {
    
    return (
        <div className="filter">
            <span className="filter__count">
                {count}
            </span>
            <input 
                type="text" 
                className="filter__input" 
                value={inputText}
                onChange={onChange}
            />
        </div>
    );
        
};

export default Filter;





