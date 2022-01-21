import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, switchFollowing, getUsersTC, followTC, unfollowTC } from '../../redux/usersReducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,        // in Users: props.users
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        isFollowing: state.usersPage.isFollowing
    }
}


export default connect(mapStateToProps, { 
    setCurrentPage,
    follow: followTC,
    unfollow: unfollowTC,
    switchFollowing,
    getUsers: getUsersTC })(Users);