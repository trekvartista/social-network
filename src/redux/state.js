import ava from "../images/avatarka.png";

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
    },
    messagesPage: {
        messages: [
            {id: 1, message: "Hi, I'm here!"},
            {id: 2, message: "It's my second message."}
        ]
    }
}

export default state;