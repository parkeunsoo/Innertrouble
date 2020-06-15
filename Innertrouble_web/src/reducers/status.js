import * as types from '../actions/ActionTypes';

const initialState={
    menu:null
}
export default function status(state = initialState, action){

    switch(action.type){
        case types.MENU_STATUS:
            return { 
                ...state, 
                menu:action.menu};
        default:
            return { ...state};
    }
}