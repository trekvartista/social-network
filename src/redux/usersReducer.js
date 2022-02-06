import { usersAPI } from "../api/api"

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_PAGE = 'users/SET_PAGE'
// const SET_SEARCH_VALUE = 'users/SET_SEARCH_VALUE'
const SET_FILTER = 'users/SET_FILTER'
const SET_FIRST_PAGE = 'users/SET_FIRST_PAGE'
const SET_LAST_PAGE = 'users/SET_LAST_PAGE'
const SET_USERS_COUNT = 'users/SET_USERS_COUNT'
const SWITCH_LOADING = 'users/SWITCH_LOADING'
const SWITCH_FOLLOWING = 'users/SWITCH_FOLLOWING'

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    filter: {
        searchValue: '',
        filterValue: 'All'
    },
    // searchValue: '',
    // filterValue: 'All',
    firstLoadedPage: 1,
    lastLoadedPage: 7,
    isLoading: true,
    isFollowing: []
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: {

            let stateCopy = {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}   // no need to copy entire state
                    }
                    return {...u}
                } )
                
            }
            return stateCopy;
        }
        case UNFOLLOW: {

            let stateCopy = {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}   // no need to copy entire state
                    }
                    return {...u}
                } )
                
            }
            return stateCopy;
        }
        case SET_USERS:
            return {...state, users: action.users}

        case SET_PAGE:
            return {...state, currentPage: action.pageNum}

        // case SET_SEARCH_VALUE:
        //     return {...state, searchValue: action.payload}
            
        case SET_FILTER:
            return {...state, filter: action.payload}

        case SET_FIRST_PAGE:
            return {...state, firstLoadedPage: action.payload}
        
        case SET_LAST_PAGE:
            return {...state, lastLoadedPage: action.payload}

        case SET_USERS_COUNT:
            return {...state, totalUsersCount: action.usersCount}

        case SWITCH_LOADING:
            return {...state, isLoading: action.isLoading}
        case SWITCH_FOLLOWING:
            return {
                ...state,
                isFollowing: action.isLoading
                    ? [...state.isFollowing, action.userId]
                    : state.isFollowing.filter(id => id !== action.userId)
                }

        default:
            return state
    }

}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (pageNum) => ({type: SET_PAGE, pageNum})
export const setFilter = (payload) => ({type: SET_FILTER, payload})
// export const setSearchValue = (payload) => ({type: SET_SEARCH_VALUE, payload})
// export const setFilter = (payload) => ({type: SET_FILTER, payload})
export const setFirstPage = (payload) => ({type: SET_FIRST_PAGE, payload})
export const setLastPage = (payload) => ({type: SET_LAST_PAGE, payload})
export const setTotalUsersCount = (usersCount) => ({type: SET_USERS_COUNT, usersCount})
export const switchLoading = (isLoading) => ({type: SWITCH_LOADING, isLoading})
export const switchFollowing = (isLoading, userId) => ({type: SWITCH_FOLLOWING, isLoading, userId})

export const getUsersTC = (pageNum, pageSize, filter) => async (dispatch) => {
    
    dispatch(switchLoading(true));

    const {searchValue, filterValue} = filter;
    const data = await usersAPI.getUsers(pageNum, pageSize, searchValue, filterValue);

    dispatch(switchLoading(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));

    return data
}

export const followTC = (userID) => async (dispatch) => {
    
    dispatch(switchFollowing(true, userID));

    let data = await usersAPI.follow(userID)

    if (data.resultCode === 0) {
        dispatch(follow(userID));
    }
    dispatch(switchFollowing(false, userID));

}

export const unfollowTC = (userID) => async (dispatch) => {
    
    dispatch(switchFollowing(true, userID));
    
    let data = await usersAPI.unfollow(userID)
        
    if (data.resultCode === 0) {
        dispatch(unfollow(userID));
    }
    dispatch(switchFollowing(false, userID));
}

export default usersReducer;