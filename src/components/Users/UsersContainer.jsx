import { connect } from 'react-redux';
import { setCurrentPage, setFilter, switchFollowing, getUsersTC, followTC, unfollowTC, setFirstPage, setLastPage } from '../../redux/usersReducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        // searchValue: state.usersPage.searchValue,
        // filterValue: state.usersPage.filterValue,
        filter: state.usersPage.filter,
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
    // setSearchValue,
    setFilter,
    follow: followTC,
    unfollow: unfollowTC,
    switchFollowing,
    getUsers: getUsersTC })(Users);