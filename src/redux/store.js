// import ava from "../images/avatarka.png";
import profileReducer from "./profileReducer";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';

let store = {
    
    _state: {
        profilePage: {
            profileInfo: [
                {
                    name: "Alex Treasure",
                    city: "Bishkek",
                    dateOfBirth: "1 April",
                    education:  "auca"
                }
            ],
            posts: [
                {id: 1, text: "Hi there, retards!", likesCount: 0},
                {id: 2, text: "Boom, second post!", likesCount: 0},
            ],
            newText: 'Hi, retard'
        },
        messagesPage: {
            messages: [
                {id: 1, message: "Hi, I'm here!"},
                {id: 2, message: "It's my second message."}
            ]
        }
    },
    getState() {
        return this._state;
    },

    _notifySubsriber() {
        // former rerender Entire Tree
        console.log('State was changed')
    },
    subscribe(observer) {
        this._notifySubsriber = observer   // observer pattern
    },

    // object type: 'ADD_POST'
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._notifySubsriber();
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_TEXT,
        newText: text
    }
}

export default store;