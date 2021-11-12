import ava from "../images/avatarka.png";

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
        if (action.type === 'ADD-POST')
        {
            if (this._state.profilePage.newText !== "")
            {
                let newPost = {
                    id: 3,
                    text: this._state.profilePage.newText,
                    likesCount: 0
                };
                
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newText = '';
                this._notifySubsriber();
            }
        }
        else if (action.type === 'UPDATE-NEW-TEXT')
        {
            this._state.profilePage.newText = action.newText;
            this._notifySubsriber();
        }
    }

}

export default store;