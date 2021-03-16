import React from 'react';
import { FaSearch } from "react-icons/fa";
import { InputContainer, InputField } from './styled';

const SearchField: React.FC = () => {
    // const { searchUsers } = useUser();
    return (
        <InputContainer>
            <InputField placeholder='Buscar usuário' type="text" onChange={async ({ target }) => { }} />
            <FaSearch size={18} />
        </InputContainer>
    );
}

export default SearchField;
