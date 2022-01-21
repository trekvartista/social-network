import { authAPI } from "../api/api";

const AUTH_USER = 'AUTH_USER';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuthorized: false
}

const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case AUTH_USER: return {...state, ...action.data, isAuthorized: true}
        default: return state
    }
}

export const authUserAC = (userId, email, login) => ({type: AUTH_USER, data: {userId, email, login}});

export const authUserTC = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then((data) => {
                // debugger
                if (data.resultCode === 0) {
                    let {userId, email, login} = data.data;
                    dispatch(authUserAC(userId, email, login));
                }
            });
    }
}

export default authReducer;