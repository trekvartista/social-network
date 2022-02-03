import { authAPI } from "../api/api";

const AUTH_USER = 'auth/AUTH_USER';
const HANDLE_ERROR = 'HANDLE_ERROR';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuthorized: false,
    error: null
}

const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case AUTH_USER: 
            return {...state, ...action.payload}
        
        case HANDLE_ERROR:
            return {...state, error: action.payload}

        default: return state
    }
}

export const authUserAC = (userId, email, login, isAuthorized) => ({type: AUTH_USER, payload: {userId, email, login, isAuthorized}});
export const handleError = (payload) => ({type: HANDLE_ERROR, payload})

export const authUserTC = () => async(dispatch) => {
    
    let data = await authAPI.authMe()

    // debugger
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;         // <== THE NAMES MUST BE THE SAME
        // console.log(userId, email)
        dispatch(authUserAC(id, email, login, true));
    }    
}

export const loginTC = (email, password, rememberMe) => async (dispatch) => {
        
    let data = await authAPI.login(email, password, rememberMe)

    if (data.resultCode === 0) {
        dispatch(authUserTC());
    }
    else {
        let msg = data.messages.length > 0 ? data.messages[0] : "Some error";
        console.log(msg)
        dispatch(handleError(msg));
    }
}

export const logoutTC = () => async (dispatch) => {
    
    let data = await authAPI.logout()

    if (data.resultCode === 0) {
        dispatch(authUserAC(null, null, null, false));
    }
}

export default authReducer;