const ADD_POST = 'ADD_POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';

const profileReducer = (state, action) => {

    switch(action.type)
    {
        case ADD_POST:
            if (state.newText !== "")
            {
                let newPost = {
                    id: 3,
                    text: state.newText,
                    likesCount: 0
                };

                state.posts.push(newPost);
                state.newText = '';
                // this._notifySubsriber();
            }
            return state
        case UPDATE_NEW_TEXT:
            state.newText = action.newText;
            // this._notifySubsriber();
            return state
        default:
            return state;
    }
}

export default profileReducer;