import { type } from "os";
import { authAPI, securityAPI } from "../api/api";

const AUTH_USER = 'auth/AUTH_USER';
const HANDLE_ERROR = 'auth/HANDLE_ERROR';
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL';

export type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuthorized: boolean
    error: null
    captchaURL: string | null
}

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuthorized: false,
    error: null,
    captchaURL: null
}

const authReducer = (state = initialState, action: any): InitialStateType => {

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

type authUserActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuthorized: boolean | null
}

type authUserActionType = {
    type: typeof AUTH_USER
    payload: authUserActionPayloadType
}

export const authUserAC = (userId: number | null, email: string| null, login: string | null, isAuthorized: boolean | null ): authUserActionType => ({
    type: AUTH_USER, payload:
        {userId, email, login, isAuthorized}
})


type getCaptchaURLActionType = {
    type: typeof GET_CAPTCHA_URL
    payload: string
}

export const getCaptchaURL = (payload: string): getCaptchaURLActionType => ({type: GET_CAPTCHA_URL, payload})

type HandleErrorActionType = {
    type: typeof HANDLE_ERROR
    payload: string
}

export const handleError = (payload: string): HandleErrorActionType => ({type: HANDLE_ERROR, payload})

export const authUserTC = () => async(dispatch: any) => {
    
    let data = await authAPI.authMe()

    // debugger
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;         // <== THE NAMES MUST BE THE SAME
        // console.log(userId, email)
        dispatch(authUserAC(id, email, login, true));
    }    
}

export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: any) => {
        
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

export const logoutTC = () => async (dispatch: any) => {
    
    let data = await authAPI.logout();

    if (data.resultCode === 0) {
        dispatch(authUserAC(null, null, null, false));
    }
}

export const getCaptchaUrlTC = () => async (dispatch: any) => {

    const data = await securityAPI.getCaptchaURL();

    const captchaURL = data.url;
    
    dispatch(getCaptchaURL(captchaURL));
    
}

export default authReducer;