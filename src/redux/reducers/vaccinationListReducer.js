import {ADD_VACCINATION, RDV_CONFIRMED_LOADING, RDV_EN_ATTENTE_LOADING, VACCINATION_CONFIRMED} from "../types";
import moment from "moment";
import 'moment/locale/fr'
const initialState = {
    loadingEnAttente:false,
    loadingConfirmed : false ,
    error : false ,
    data: JSON.parse(localStorage.getItem('vaccinationList')) ? JSON.parse(localStorage.getItem('vaccinationList')) : []
    // data : {
    //     id : null,
    //     accountType : 'Adherant',
    //     appointment : null
    // }
}

export default function vaccinationListReducer (state = initialState, action) {
    let format ={};
    let beforeResult={};
    let result=[];
    let index;
    moment.locale('fr')
    switch(action.type){
        case ADD_VACCINATION :
            format = {
                id : state.data.length,
                medecinId : action.payload.rdvMedecinSchedule.userId,
                nom : action.payload.user.nom ,
                prenom : action.payload.user.prenom,
                vaccinationDate : moment(action.payload.vaccinationUser.startDate).format('L'),
                vaccinationHour : `${moment(action.payload.vaccinationUser.startDate).format('LT')} - ${moment(action.payload.vaccinationUser.endDate).format('LT')}`,
                age : action.payload.vaccinationUser.age ,
                etat : action.payload.vaccinationUser.etat,
                situation : action.payload.vaccinationUser.situation,
                suspects : action.payload.vaccinationUser.suspects ? 'Oui' : 'Non',
                phoneNumber : action.payload.vaccinationUser.phoneNumber,
                email : action.payload.user.email,
                confirmed : false ,
                rejected : false
            }
            result =[...state.data].concat(format);
            localStorage.setItem('vaccinationList' , JSON.stringify(result))
            return {
                ...state,
                loadingEnAttente: false,
                error: null,
                data: result
            }
        case RDV_EN_ATTENTE_LOADING:
            return {
                ...state ,
                loadingEnAttente: true,
            }
        case RDV_CONFIRMED_LOADING:
            return {
                ...state ,
                loadingConfirmed: true
            }
        case VACCINATION_CONFIRMED:
            let vaccinationToConfirm=state.data.filter(vaccination=>vaccination.id===action.payload.vaccinationToConfirmId)[0];
            index = state.data.indexOf(vaccinationToConfirm);
            vaccinationToConfirm={...vaccinationToConfirm, confirmed : true , vaccinationConfirmedDate : moment().format('llll')};
            result=[...state.data];
            result[index]=vaccinationToConfirm;
            localStorage.setItem('vaccinationList' , JSON.stringify(result));
            return {
                ...state ,
                loadingEnAttente: false ,
                loadingConfirmed: false ,
                data : result

            }
        default: return state
    }

}

