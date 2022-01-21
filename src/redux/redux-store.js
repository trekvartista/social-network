import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import profileReducer from './profileReducer'
import usersReducer from "./usersReducer";
import thunkMiddleware from 'redux-thunk';

// all reducers come here !
let reducers = combineReducers({
    profilePage: profileReducer,     // diff names
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));  // should I use it in this project? useReducer, useContext and other hooks could probably give the same results

// window.store = store

export default store;