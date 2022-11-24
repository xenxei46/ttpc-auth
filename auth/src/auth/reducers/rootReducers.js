import { combineReducers } from 'redux';

//session
import { sessionReducers } from "redux-react-session";

const rootReducer = combineReducers({
    session: sessionReducer
});


export default rootReducer;