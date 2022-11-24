//Redux boiler plate code

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducers'

import {sessionService} from 'redux-react-session';

const initialState = {}
const middlewares = [thunk];

const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)))

// We write them in order for redux to work

sessionService.initSessionService(store);

export default store