import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


export let rerenderEntireTree = (state, addPost, updateNewText) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} update={updateNewText}/>,
        document.getElementById('root')
    );
}