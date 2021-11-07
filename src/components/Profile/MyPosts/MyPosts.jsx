import React from 'react';
import Post from '../Post/Post';
import s from './MyPosts.module.css'

function MyPosts(props)  {

    let postElements = props.state.map((p) => (
        <Post message={p.text} likes={p.likesCount} />
    ));

    let newPost = React.createRef();

    let addPost = () => {
        // alert(text);
        props.addPost();
        props.updateNewText('');
        // newPost.current.value = "";  не имееш права, тупой компонент
    }
    /* alert('You do want it.'); */

    let onPostChange = () => {
        let text = newPost.current.value;
        // console.log(text)
        props.updateNewText(text)
    }

    return (
        <div className={s.main}>
            <h2>My Posts</h2>
            <div>
                <textarea  value={props.newText}
                            ref={newPost}
                            onChange={onPostChange}/>
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