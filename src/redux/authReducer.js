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
        case AUTH_USER: return {...state, ...action.payload}
        default: return state
    }
}

export const authUserAC = (userId, email, login, isAuthorized) => ({type: AUTH_USER, payload: {userId, email, login, isAuthorized}});

export const authUserTC = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then((data) => {
                // debugger
                if (data.resultCode === 0) {
                    let {userId, email, login} = data.data;
                    dispatch(authUserAC(userId, email, login, true));
                }
            });
    }
}

export const loginTC = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(authUserTC());
                }
            })
    }
}

export const logoutTC = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(authUserAC(null, null, null, false));
                }
            })
    }
}

export default authReducer;