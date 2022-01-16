import React from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC, setTotalUsersCountAC } from '../../redux/usersReducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,        // in Users: props.users
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        }
    }   
}



export default connect(mapStateToProps, mapDispatchToProps)(Users);