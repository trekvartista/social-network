const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_PAGE = 'SET_PAGE'
const SET_USERS_COUNT = 'SET_USERS_COUNT'
const SWITCH_LOADING = 'SWITCH_LOADING'

let initialState = {
    users: [
        // {
        //     id: 1,
        //     isFriend: true,
        //     avatarUrl: 'http://cdn.onlinewebfonts.com/svg/img_264570.png',
        //     firstName: 'Ricardo',
        //     lastName: 'Milos',
        //     status: 'online',
        //     location: {
        //         country: 'Memeland',
        //         city: 'Memass'
        //     }
        // },
        // {
        //     id: 2,
        //     isFriend: false,
        //     avatarUrl: 'http://cdn.onlinewebfonts.com/svg/img_264570.png',
        //     firstName: 'Sadyr',
        //     lastName: 'Japarov',
        //     status: 'online',
        //     location: {
        //         country: 'Kyrgyzstan',
        //         city: 'Bishkek'
        //     }
        // },
        // {}
    ],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: {

            let stateCopy = {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, isFriend: true}   // no need to copy entire state
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
                        return {...u, isFriend: false}   // no need to copy entire state
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

export default usersReducer;