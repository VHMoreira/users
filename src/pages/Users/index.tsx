import { type } from 'node:os';
import React, { useCallback, useEffect, useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from 'redux';
import { User } from '../../models/User';
import List from '../../shared/components/List';
import { ApplicationState } from '../../store';
import UserListItem from './components/UserListItem';
import { Pagination, PaginationButton, UsersContainer } from './styles';
import * as UsersActions from "../../store/ducks/users/actions";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface StateProps {
    users: User[];
}

interface DispatchProps {
    loadUsersRequest(page: number): void;
}

interface OwnProps {

}

type Props = StateProps & DispatchProps & OwnProps;

const Users: React.FC<Props> = ({ users, loadUsersRequest }) => {
    const [page, setPage] = useState(1);

    useEffect(() => {
        loadUsersRequest(1);
    }, []);

    const handlePaginationToBack = useCallback((page: number) => {
        if (page > 0) {
            setPage(page);
            loadUsersRequest(page);
        }
    }, [loadUsersRequest]);

    const handlePaginationToNext = useCallback((page: number) => {
        if (users.length === 10) {
            setPage(page);
            loadUsersRequest(page);
        }
    }, [users, loadUsersRequest]);

    return (
        <UsersContainer>
            <List>
                {users.map(user => <UserListItem key={user.email} user={user} />)}
            </List>
            <Pagination>
                <PaginationButton onClick={() => handlePaginationToBack(page - 1)}>
                    <FaChevronLeft size={20} />
                </PaginationButton>
                {page}
                <PaginationButton onClick={() => handlePaginationToNext(page + 1)}>
                    <FaChevronRight size={20} />
                </PaginationButton>
            </Pagination>
        </UsersContainer>
    );
}

const mapStateToProps = (state: ApplicationState) => ({
    users: state.users.data
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(UsersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Users);