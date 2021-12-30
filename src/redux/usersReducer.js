const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        {
            id: 1,
            isFriend: true,
            firstName: 'Ricardo',
            lastName: 'Milos',
            status: 'online',
            location: {
                country: 'Memeland',
                city: 'Memass'
            }
        },
        {
            id: 2,
            isFriend: false,
            firstName: 'Sadyr',
            lastName: 'Japarov',
            status: 'online',
            location: {
                country: 'Kyrgyzstan',
                city: 'Bishkek'
            }
        },
        {}
    ]

}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            let stateCopy = {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, isFriend: true}   // no need to copy entire state
                    }
                    return {...u}
                } )

            }
        case UNFOLLOW:
            let stateCopy = {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, isFriend: false}   // no need to copy entire state
                    }
                    return {...u}
                } )

            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        
        default:
            return state
    }

}

export const followAC = () => ({type: FOLLOW, userId})
export const unfollowAC = () => ({type: UNFOLLOW, userId})
export const setUsersAC = () => ({type: SET_USERS, users})

export default usersReducer;