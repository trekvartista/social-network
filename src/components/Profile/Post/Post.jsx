import React from 'react';
import ava from "../../../images/avatarka.png";

function Post(props) {
    return(
        <div>
            <img    
                src={ava}
                width="50px"
                height="50px"
                alt=""/>
            {props.message}
            <div>
                <span> {props.likes} Like(s) </span>
            </div>
        </div>
    );
}

export default Post;