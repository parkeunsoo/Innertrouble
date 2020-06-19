import * as types from '../actions/ActionTypes';

const initialState={
    menu:null,
    user:null
}
export default function status(state = initialState, action){

    switch(action.type){
        case types.MENU_STATUS:
            return { 
                ...state, 
                menu:action.menu
            };
        case types.USER_STATUS:
            return {
                ...state,
                user:action.user
            };
        default:
            return state;
    }
}