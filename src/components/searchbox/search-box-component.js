import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange}) => (
    <div>
        <input 
            className='search-component'
            type='search'
            placeholder={placeholder}
            onChange={handleChange}
        />
    </div>
);