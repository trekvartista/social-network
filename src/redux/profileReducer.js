import { profileAPI } from "../api/api";

const ADD_POST = 'profile/ADD_POST';
const UPDATE_NEW_TEXT = 'profile/UPDATE-NEW-TEXT';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'

let initialState = {
    // profileInfo: [
    //     {
    //         name: "Alex Treasure",
    //         city: "Bishkek",
    //         dateOfBirth: "1 April",
    //         education:  "don't need no"
    //     }
    // ],
    profileInfo: null,
    posts: [
        {id: 1, text: "Hi there, retards!", likesCount: 0},
        {id: 2, text: "Boom, second post!", likesCount: 0},
        {id: 3, text: "Затвра экзамен по OS и я даже не знаю как реализовать ls, однако здравствуйте!", likesCount: 0},
    ],
    newText: 'Hi, retard'
}; 

const profileReducer = (state = initialState, action) => {

    switch(action.type)
    {
        case ADD_POST: {

            if (state.newText !== "")
            {
                let newPost = {
                    id: 4,
                    text: state.newText,
                    likesCount: 0
                };
                // this._notifySubsriber();
                return {...state, posts: [...state.posts, newPost], newText: ''}    // newText ??
            }
            return state
        }
        case UPDATE_NEW_TEXT: {
            // this._notifySubsriber();
            return {...state, newText: action.text}
        }
        case SET_USER_PROFILE:
            return {...state, profileInfo: action.profile};
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewTextActionCreator = (text) => ({type: UPDATE_NEW_TEXT, text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfileTC = (userID) => async (dispatch) => {
        
    let data = await profileAPI.getUserProfile(userID)

    dispatch(setUserProfile(data));

    // console.log(response.data)
}

export default profileReducer;