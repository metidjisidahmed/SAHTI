import {ADD_VACCINATION} from "../types";
const initialState = {
    loading:false,
    error : false ,
    data: JSON.parse(localStorage.getItem('vaccinationList')) ? JSON.parse(localStorage.getItem('vaccinationList')) : []
    // data : {
    //     id : null,
    //     accountType : 'Adherant',
    //     appointment : null
    // }
}

export default function vaccinationListReducer (state = initialState, action) {
    let result=[];
    switch(action.type){
        case ADD_VACCINATION :
            result =[...state.data].concat({
                rdvMedecinSchedule: {...action.payload.rdvMedecinSchedule},
                vaccinationUser: {...action.payload.vaccinationUser},
                user : {...action.payload.user}
            });
            localStorage.setItem('vaccinationList' , JSON.stringify(result))
            return {
                ...state,
                loading: false,
                error: null,
                data: result
            }
        default: return state
    }

}

