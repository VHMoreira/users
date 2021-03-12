import React from 'react';
import { FaSearch } from "react-icons/fa";

import './styles.scss';

const SearchField: React.FC = () => {
    return (
        <div className='input'>
            <input className="input-field" type="text" />
            <FaSearch className="input-icon" size={18} />
        </div>
    );
}

export default SearchField;
