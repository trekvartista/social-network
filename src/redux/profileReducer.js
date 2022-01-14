const ADD_POST = 'ADD_POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';

let initialState = {
    profileInfo: [
        {
            name: "Alex Treasure",
            city: "Bishkek",
            dateOfBirth: "1 April",
            education:  "don't need no"
        }
    ],
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
        default:
            return state
    }
}

export default profileReducer;