import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from "redux";

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}
