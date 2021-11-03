import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


export let rerenderEntireTree = (state, addPost) => {
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}