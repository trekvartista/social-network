const ADD_POST = 'ADD_POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
                    id: 3,
                    text: state.newText,
                    likesCount: 0
                };
                
                let stateCopy = {...state};
                stateCopy.posts = [...state.posts];
                
                stateCopy.posts.push(newPost);
                stateCopy.newText = '';
                // this._notifySubsriber();
                return stateCopy
            }
            return state
        }
        case UPDATE_NEW_TEXT: {
            
            let stateCopy = {...state};
            // stateCopy.posts = [...state.posts]
            
            stateCopy.newText = action.newText;
            // this._notifySubsriber();
            return stateCopy
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

export default profileReducer;