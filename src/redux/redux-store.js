import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer'

// all reducers come here !
let reducers = combineReducers({
    profilePage: profileReducer     // diff names
});

let store = createStore(reducers);

export default store;