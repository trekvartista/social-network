import React from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC, setTotalUsersCountAC, switchLoadingAC } from '../../redux/usersReducer';
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

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNum) => {
            dispatch(setCurrentPageAC(pageNum))
        },
        setTotalUsersCount: (usersCount) => {
            dispatch(setTotalUsersCountAC(usersCount))
        },
        switchLoading: (isLoading) => {
            dispatch(switchLoadingAC(isLoading))
        }
    }   
}



export default connect(mapStateToProps, mapDispatchToProps)(Users);