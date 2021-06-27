import * as ActionTypes from './types'
import {useHistory} from "react-router-dom";


export const loginUserLoading=()=>{
    return {
        type : ActionTypes.USER_LOGIN_LOADING,
    }
}
export const  loginUser=(userData)=>{
    return {
        type : ActionTypes.USER_LOGIN,
        payload : userData
    }
}

export const loginUserError=(err)=>{
    return {
        type : ActionTypes.USER_LOGIN_ERROR,
        payload : err
    }
}
export function wait(time) {
    return new Promise(function (resolve, reject) {

        // Setting 2000 ms time
        setTimeout(resolve, time);
    })
}
