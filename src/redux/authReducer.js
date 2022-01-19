const AUTH_USER = 'AUTH_USER';

let initialState = {
    userId: null,
    email: null,
    login: null
}

const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case AUTH_USER: return {...state, ...action.data}
        default: return state
    }
}

export const authUser = (userId, email, login) => ({type: AUTH_USER, data: {userId, email, login}});

export default authReducer;