import { authAPI, securityAPI } from "../api/api";

const AUTH_USER = 'auth/AUTH_USER';
const HANDLE_ERROR = 'auth/HANDLE_ERROR';
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuthorized: false,
    error: null,
    captchaURL: null
}

const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case AUTH_USER: 
            return {...state, ...action.payload}
        
        case HANDLE_ERROR:
            return {...state, error: action.payload}

        case GET_CAPTCHA_URL:
            return {...state, captchaURL: action.payload}

        default: return state
    }
}

export const authUserAC = (userId, email, login, isAuthorized) => ({type: AUTH_USER, payload: {userId, email, login, isAuthorized}})
export const handleError = (payload) => ({type: HANDLE_ERROR, payload})
export const getCaptchaURL = (payload) => ({type: GET_CAPTCHA_URL, payload})

export const authUserTC = () => async(dispatch) => {
    
    let data = await authAPI.authMe()

    // debugger
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;         // <== THE NAMES MUST BE THE SAME
        // console.log(userId, email)
        dispatch(authUserAC(id, email, login, true));
    }    
}

export const loginTC = (email, password, rememberMe, captcha) => async (dispatch) => {
        
    let data = await authAPI.login(email, password, rememberMe, captcha)

    if (data.resultCode === 0) {
        dispatch(authUserTC());
    }
    else {
        // result code 10 -> incorrect anti-bot symbols
        if (data.resultCode === 10) {
            // debugger
            dispatch(getCaptchaUrlTC())
        }

        let msg = data.messages.length > 0 ? data.messages[0] : "Some error";
        // console.log(msg)
        dispatch(handleError(msg));
    }
}

export const logoutTC = () => async (dispatch) => {
    
    let data = await authAPI.logout();

    if (data.resultCode === 0) {
        dispatch(authUserAC(null, null, null, false));
    }
}

export const getCaptchaUrlTC = () => async (dispatch) => {

    const data = await securityAPI.getCaptchaURL();

    const captchaURL = data.url;
    
    dispatch(getCaptchaURL(captchaURL));
    
}

export default authReducer;