import { type } from 'node:os';
import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from 'redux';
import { User } from '../../models/User';
import List from '../../shared/components/List';
import { ApplicationState } from '../../store';
import UserListItem from './components/UserListItem';
import { UsersContainer } from './styles';
import * as UsersActions from "../../store/ducks/users/actions";

interface StateProps {
    users: User[];
}

interface DispatchProps {
    loadUsersRequest(): void;
}

interface OwnProps {

}

type Props = StateProps & DispatchProps & OwnProps;

const Users: React.FC<Props> = ({ users, loadUsersRequest }) => {
    useEffect(() => {
        loadUsersRequest();
    }, []);

    return (
        <UsersContainer>
            <List>
                {users.map(user => <UserListItem key={user.email} user={user} />)}
            </List>
        </UsersContainer>
    );
}

const mapStateToProps = (state: ApplicationState) => ({
    users: state.users.data
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(UsersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Users);