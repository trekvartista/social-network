import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

let rerenderEntireTree = () => {
    ReactDOM.render(                                // 'bind' привязывает контекст к функции
        // <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>,
        
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,

        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)