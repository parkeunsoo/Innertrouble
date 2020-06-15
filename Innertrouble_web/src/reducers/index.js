import {combineReducers} from 'redux';
import auth from './auth';
import token from './token';
import status from './status';

const reducers = combineReducers({
    auth,token,status
});

export default reducers;