import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import store from './redux/state'

let rerenderEntireTree = () => {
    ReactDOM.render(                                // 'bind' привязывает контекст к функции
        <App state={store.getState()} addPost={store.addPost.bind(store)} update={store.updateNewText.bind(store)}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)