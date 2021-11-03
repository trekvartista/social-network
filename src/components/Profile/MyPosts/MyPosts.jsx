import React from 'react';
import Post from '../Post/Post';
import s from './MyPosts.module.css'

function MyPosts(props)  {

    let postElements = props.state.map((p) => (
        <Post message={p.text} likes={p.likesCount} />
    ));

    let newPost = React.createRef();

    let addPost = () => {
        let text = newPost.current.value;
        // alert(text);
        props.addPost(text);
        newPost.current.value = "";
    }
    /* alert('You do want it.'); */
    return (
        <div className={s.main}>
            <h2>My Posts</h2>
            <div>
                <textarea ref={newPost}></textarea>
            </div>

            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.post}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;