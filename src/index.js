import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import state from './redux/state'
import {addPost, updateNewText, subscribe} from './redux/state'   // export without default

let rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={state} addPost={addPost} update={updateNewText}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

subscribe(rerenderEntireTree)