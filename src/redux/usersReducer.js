const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

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
    pageSize: 5,
    totalUsersCount: 10,
    currentPage: 1

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
        
        default:
            return state
    }

}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;