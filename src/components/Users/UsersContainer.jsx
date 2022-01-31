import { connect } from 'react-redux';
import { setCurrentPage, switchFollowing, getUsersTC, followTC, unfollowTC, setFirstPage, setLastPage } from '../../redux/usersReducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,        // in Users: props.users
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        firstPage: state.usersPage.firstLoadedPage,
        lastPage: state.usersPage.lastLoadedPage,
        isLoading: state.usersPage.isLoading,
        isFollowing: state.usersPage.isFollowing,
        isAuthorized: state.auth.isAuthorized
    }
}


export default connect(mapStateToProps, { 
    setCurrentPage,
    setFirstPage,
    setLastPage,
    follow: followTC,
    unfollow: unfollowTC,
    switchFollowing,
    getUsers: getUsersTC })(Users);