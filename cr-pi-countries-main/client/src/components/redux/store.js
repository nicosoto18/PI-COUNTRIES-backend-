import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(reducer,composeEnhancer(applyMiddleware(thunkMiddleware))) 

export default Store;