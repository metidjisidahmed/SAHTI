import {initialScheduleArr} from "./medecinSchedule";
import {ADD_VACCINATION, SIGN_UP_USER , VACCINATION_CONFIRMED} from "../types";
import moment from "moment";


const rdvsmedecin2Test=[...initialScheduleArr];

const rdvsmedecin3Test=[...initialScheduleArr];
const initialState = {
    loading:true,
    error : false ,
    data : [
        {
            id : 1,
            matricule : '123456',
            userName : 'Medecin 1',
            nom : 'medecin',
            prenom : '1',
            email : 'med1@esi.dz',
            password : '123',
            accountType  : 'Medecin',
            appointment : initialScheduleArr
        },
        {
            id : 2,
            matricule : '12345',
            userName : 'Medecin 2',
            nom : 'medecin',
            prenom : '2',
            email : 'med2@esi.dz',
            password : '123',
            accountType  : 'Medecin',
            appointment : rdvsmedecin2Test

        },
        {
        id : 3,
        nss :'0123',
        userName : 'Amine Bacha',
        nom : 'Bacha',
        prenom : 'Amine'    ,
        email : 'bacha@esi.dz',
        password : '123',
        accountType  : 'Adherant',
        appointment : null
    },
        {
            id : 4,
            nss :'01234',
            userName : 'Hassani Mehdi',
            nom : 'Hassani',
            prenom : 'Mehdi',
            email : 'hassani@esi.dz',
            password : 'cbon',
            accountType  : 'Adherant',
            appointment : null
        },
        {
            id : 5,
            nss :'012345678',
            userName : 'Tutelle 1',
            nom : 'Tutelle',
            prenom : '1',
            email : 'tut1@esi.dz',
            password : '123',
            accountType  : 'Tutelle',
        }


    ]
}

export default function accountsReducer (state = initialState, action) {
    let useless=0;
    let index;
    let result;


    switch(action.type){
        case ADD_VACCINATION :
            let userToVaccinate=state.data.filter(user=>action.payload.user.id===user.id)[0];
            userToVaccinate.appointment={...action.payload.vaccinationUser , userId : action.payload.rdvMedecinSchedule.userId};
            let medecinWhoVaccinate=state.data.filter(user=>action.payload.rdvMedecinSchedule.userId ===user.id)[0];
            medecinWhoVaccinate.appointment.push(action.payload.rdvMedecinSchedule);
            console.log('User to vaccinate :' , userToVaccinate);
            console.log('The medecin who vaccinate ', medecinWhoVaccinate);
            let otherUsers=state.data.filter(user=> user.id!==action.payload.rdvMedecinSchedule.userId && user.id!==action.payload.user.id);
            console.log('Other Users :' , otherUsers);
            localStorage.setItem('accounts' , JSON.stringify([...otherUsers , userToVaccinate , medecinWhoVaccinate]) );
            return {
                ...state,
                data : [...otherUsers , userToVaccinate , medecinWhoVaccinate]
            }
        case SIGN_UP_USER:
            console.log('User to add :' , action.payload);
            let userToAdd={...action.payload , id : state.data.length+1 , appointment : null , userName : action.payload.nom + ' ' + action.payload.prenom};
            let beforeAdd=[...state.data];
            let accountAdded=[...state.data].concat(userToAdd);
            console.log('Before : ', beforeAdd , 'After : '  , accountAdded);
            localStorage.setItem('accounts' , JSON.stringify([...state.data].concat(userToAdd)) );
            return {
                ...state ,
                data : accountAdded
            }
        case VACCINATION_CONFIRMED :
            let accountToConfirm=state.data.filter(acc=>acc.email===action.payload.emailVaccinatedUser)[0];
            index = state.data.indexOf(accountToConfirm);
            console.log('ACCOUNT TO CONFIRM : ', accountToConfirm);
            accountToConfirm={...accountToConfirm, appointment : {...accountToConfirm.appointment , confirmed : true} };
            result=[...state.data];
            result[index]=accountToConfirm;
            localStorage.setItem('accounts' , JSON.stringify(result));
            return {
                ...state ,
                data : result

            }
        default: return state
    }

}

