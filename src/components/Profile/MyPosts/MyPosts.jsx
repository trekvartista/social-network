import React from 'react';
import Post from '../Post/Post';
import s from './MyPosts.module.css';
import { useRef } from 'react';

function MyPosts(props)  {

    // console.log('RENDER!')

    let postElements = props.posts.map((p) => (
        <Post key={p.id} message={p.text} likes={p.likesCount} />
    ));

    let newPost = useRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPost.current.value;

        props.updateNewPostText(text);
    }

    return (
        <div className={s.main}>
            <h2>My Posts</h2>
            <div>
                <textarea  value={props.newText}
                            placeholder={"Enter your post message"}
                            ref={newPost}
                            onChange={onPostChange}/>
            </div>

            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.post}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;