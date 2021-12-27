import React from 'react';
import { addPostActionCreator, updateNewTextActionCreator } from '../../../redux/store';
import MyPosts from './MyPosts';


function MyPostsContainer(props)  {

    let addPost = () => {
        // alert(text);
        // props.addPost();

        // props.dispatch({
        //     type: 'ADD-POST',
        // })

        let addPostAction = addPostActionCreator();
        props.dispatch(addPostAction);

        // props.dispatch({
        //     type: 'UPDATE-NEW-TEXT',
        //     newText: ''
        // })

        let updateNewTextAction = updateNewTextActionCreator('');
        props.dispatch(updateNewTextAction);
    }

    let onPostChange = (text) => {
        let action = updateNewTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={props.posts}/>
    );
}

export default MyPostsContainer;