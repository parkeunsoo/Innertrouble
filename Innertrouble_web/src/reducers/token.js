import * as types from '../actions/ActionTypes';

const initialState={
    Token:""
}
export default function token(state = initialState, action){

    switch(action.type){
        case types.TOKEN_ADD:
            return { ...state, Token:action.token};
        case types.TOKEN_GET:
            return { ...state};
        default:
            return { ...state};
    }
}