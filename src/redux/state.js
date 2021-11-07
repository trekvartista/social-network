import ava from "../images/avatarka.png";

let rerenderEntireTree = () => {
    console.log('State was changed')
}

let state = {
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
}

export const addPost  = () => {
    let newPost = {
        id: 3,
        text: state.profilePage.newText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newText = '';
    rerenderEntireTree();
}

export const updateNewText = (newText) => {
    state.profilePage.newText = newText;
    rerenderEntireTree();
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer   // observer pattern
}

export default state;