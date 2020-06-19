import * as types from '../actions/ActionTypes';

const initialState={
    Expired:true
}
export default function auth(state = initialState, action){

    switch(action.type){
        case types.AUTH_ADD:
            return { ...state, Expired:false};
        case types.AUTH_DELETE:
            return { ...state, Expired:true};
        case types.AUTH_GET_STATUS:
            return { ...state};
        default:
            return { state};
    }
}