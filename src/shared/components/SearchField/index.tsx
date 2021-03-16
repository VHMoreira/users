import React from 'react';
import { FaSearch } from "react-icons/fa";
import { useUser } from '../../../providers/UserProvider';
import { InputContainer, InputField } from './styled';

const SearchField: React.FC = () => {
    const { searchUsers } = useUser();
    return (
        <InputContainer>
            <InputField placeholder='Buscar usuário' type="text" onChange={async ({ target }) => await searchUsers({ name: target.value })} />
            <FaSearch size={18} />
        </InputContainer>
    );
}

export default SearchField;
