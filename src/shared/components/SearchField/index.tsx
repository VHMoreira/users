import React from 'react';
import { FaSearch } from "react-icons/fa";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { InputContainer, InputField } from './styled';
import * as UsersActions from "../../../store/ducks/users/actions";
import { ApplicationState } from '../../../store';

interface DispatchProps {
    searchUsersRequest(url: string): void;
}

const SearchField: React.FC<DispatchProps> = ({ searchUsersRequest }) => {
    // const { searchUsers } = useUser();
    return (
        <InputContainer>
            <InputField placeholder='Buscar usuário' type="text" onChange={async ({ target }) => searchUsersRequest(target.value)} />
            <FaSearch size={18} />
        </InputContainer>
    );
}

const mapStateToProps = (state: ApplicationState) => ({
    users: state.users.data
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(UsersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
