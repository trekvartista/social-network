const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

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
        case UNFOLLOW:

        default:
            return state
    }

}

export const followAC = () => ({type: FOLLOW, userId})
export const unfollowAC = () => ({type: UNFOLLOW, userId})

export default usersReducer;