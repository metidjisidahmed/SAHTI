import {USER_LOGIN_LOADING, USER_LOGIN_ERROR, USER_LOGIN, USER_LOGOUT, ADD_VACCINATION} from "../types";
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
    let result;
    switch(action.type){
        case USER_LOGIN_LOADING:
            return {
                ...state,
                loading: true
            }
        case USER_LOGIN:
            result=action.payload
            localStorage.setItem('user' , JSON.stringify(result));
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
        case USER_LOGOUT:
            localStorage.removeItem("user");
            return {
                ...state ,
                error: null ,
                loading: false ,
                data : null

            }
        case ADD_VACCINATION:
            result={
                ...state ,
                data : {
                    ...state.data,
                    appointment : action.payload.vaccinationUser
                }
            }
            localStorage.setItem('user' , JSON.stringify(result.data));
            return {
                ...state ,
                data : {
                    ...state.data,
                    appointment : action.payload.vaccinationUser
                }
            }
        default: return state
    }

}

