import { usersAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_PAGE = 'SET_PAGE'
const SET_USERS_COUNT = 'SET_USERS_COUNT'
const SWITCH_LOADING = 'SWITCH_LOADING'
const SWITCH_FOLLOWING = 'SWITCH_FOLLOWING'

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
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
export const setTotalUsersCount = (usersCount) => ({type: SET_USERS_COUNT, usersCount})
export const switchLoading = (isLoading) => ({type: SWITCH_LOADING, isLoading})
export const switchFollowing = (isLoading, userId) => ({type: SWITCH_FOLLOWING, isLoading, userId})

export const getUsersTC = (pageNum, pageSize) => {
    return (dispatch) => {
        dispatch(switchLoading(true));

        usersAPI.getUsers(pageNum, pageSize)
            .then(data => {
                dispatch(switchLoading(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
                // debugger
            });
    }
}

export const followTC = (userID) => {
    return (dispatch) => {
        dispatch(switchFollowing(true, userID));
        usersAPI.follow(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(userID));
                }
                dispatch(switchFollowing(false, userID));
            });
    }
}

export const unfollowTC = (userID) => {
    return (dispatch) => {
        dispatch(switchFollowing(true, userID));
        usersAPI.unfollow(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(userID));
                }
                dispatch(switchFollowing(false, userID));
            });
    }
}

export default usersReducer;