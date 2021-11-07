import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import state from './redux/state'
import {addPost, updateNewText} from './redux/state'   // export without default

import { rerenderEntireTree } from './render';

rerenderEntireTree(state, addPost, updateNewText);