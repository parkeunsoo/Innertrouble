import * as types from './ActionTypes'

export function menuStatus(menu){
    return{
        type:types.MENU_STATUS,
        menu:menu
    }
}
export function getStatusAuth(){
    return{
        type:types.AUTH_GET_STATUS
    };
}
export function addAuth(){
    return{
        type:types.AUTH_ADD
    };
}

export function deleteAuth(){
    return{
        type:types.AUTH_DELETE
    };
}

export function getToken(){
    return{
        type:types.TOKEN_GET,
    };
}

export function addToken(token){
    return{
        type:types.TOKEN_ADD,
        token:token
    }
}