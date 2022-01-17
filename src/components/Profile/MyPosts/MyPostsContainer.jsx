import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newText: state.profilePage.newText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            let addPostAction = addPostActionCreator();
            dispatch(addPostAction);

            let updateNewTextAction = updateNewTextActionCreator('');
            dispatch(updateNewTextAction);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;