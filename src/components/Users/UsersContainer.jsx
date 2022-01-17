import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setUsers, unfollow, setTotalUsersCount, switchLoading } from '../../redux/usersReducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,        // in Users: props.users
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
}


export default connect(mapStateToProps, { follow, setCurrentPage, setUsers, unfollow, setTotalUsersCount, switchLoading })(Users);