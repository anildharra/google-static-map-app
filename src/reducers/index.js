import { combineReducers } from 'redux';
import GoogleStaticMapReducer from './google-static-map-reducer';
import UserReducer from './userReducer';


const rootReducer = combineReducers({
    GoogleStaticMapReducer,
    UserReducer
})

export default rootReducer;