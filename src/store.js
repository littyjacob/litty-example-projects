import {
    combineReducers,
    createStore, applyMiddleware, compose,
} from 'redux';
// To handle async actions (like API calls) in store
import thunk from 'redux-thunk';
import reducer from './reducer';
// Initial state
const initialState = {};
const reducers =  combineReducers({ reducer })

const configureStore = () => createStore(
    reducers,
    initialState,
    applyMiddleware(thunk))

export default configureStore;
