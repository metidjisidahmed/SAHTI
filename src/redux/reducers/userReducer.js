import {USER_LOGIN_LOADING , USER_LOGIN_ERROR , USER_LOGIN} from "../types";
const initialState = {
    loading:false,
    error : false ,
    data: JSON.parse(localStorage.getItem('user'))
    // data : {
    //     id : null,
    //     accountType : 'Adherant',
    //     appointment : null
    // }
}

export default function userReducer (state = initialState, action) {

    switch(action.type){
        case USER_LOGIN_LOADING:
            return {
                ...state,
                loading: true
            }
        case USER_LOGIN:
            localStorage.setItem('user' , JSON.stringify(action.payload));
            return {
                ...state ,
                error : null,
                data : action.payload,
                loading : false
            }
        case USER_LOGIN_ERROR:
            return {
                ...state ,
                error: action.payload,
                loading: false
            }
        default: return state
    }

}

