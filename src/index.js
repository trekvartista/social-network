import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

// let rerenderEntireTree = () => {

    ReactDOM.render(

        // base name for Browser Router is useful during deployment
        // upd: actually it isn't useful during deployment or it has to be used with hash router
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,

        document.getElementById('root')
    );
// }

// rerenderEntireTree()

// store.subscribe(rerenderEntireTree)