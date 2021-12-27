import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer'

// all reducers come here !
let reducers = combineReducers({
    profilePage: profileReducer     // diff names
});

let store = createStore(reducers);  // should I use it in this project? useReducer, useContext and other hooks could probably give the same results

window.store = store

export default store;