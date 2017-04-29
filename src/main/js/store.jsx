import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

const store = createStore(
    rootReducer,
    applyMiddleware(
        createLogger({collapsed: true}),
        thunkMiddleware
    )
);

export default store;