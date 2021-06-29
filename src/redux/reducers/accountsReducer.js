import {initialScheduleArr} from "./medecinSchedule";
import {ADD_VACCINATION} from "../types";


const rdvsmedecin2Test=[...initialScheduleArr ,{
    title: 'RDV 1',
    startDate: new Date(2021, 5, 29, 8, 0),
    endDate: new Date(2021, 5, 29, 8, 30),
    id: 5,
    userId:2,
    location: 'Room 1',
},{
    title: 'RDV 2',
    startDate: new Date(2021, 5, 29, 8, 30),
    endDate: new Date(2021, 5, 29, 9, 0),
    id: 6,
    userId:  2,
    location: 'Room 1',
},


]

const rdvsmedecin3Test=[...initialScheduleArr , {
    title: 'RDV 1',
    startDate: new Date(2021, 5, 29, 8, 0),
    endDate: new Date(2021, 5, 29, 8, 30),
    id: 5,
    userId:3,
    location: 'Room 1',
}]
const initialState = {
    loading:true,
    error : false ,
    data : [
        {
            id : 1,
            userName : 'Medecin 1',
            email : 'is_metidji1@medecin.dz',
            password : 'zyraveigar',
            accountType  : 'Medecin',
            appointment : initialScheduleArr
        },
        {
            id : 2,
            userName : 'Medecin 2',
            email : 'is_metidji2@medecin.dz',
            password : 'zyraveigar',
            accountType  : 'Medecin',
            appointment : rdvsmedecin2Test

        },
        {
            id : 3,
            userName : 'Medecin 3',
            email : 'is_metidji3@medecin.dz',
            password : 'zyraveigar',
            accountType  : 'Medecin',
            appointment : rdvsmedecin3Test
        },
        {
        id : 4,
        userName : 'Adherant 1',
        email : 'is_metidji1@adherant.dz',
        password : 'cbon',
        accountType  : 'Adherant',
        appointment : null
    },
        {
            id : 5,
            userName : 'Adherant 2',
            email : 'is_metidji2@adherant.dz',
            password : 'cbon',
            accountType  : 'Adherant',
            appointment : null
        },
        {
            id : 6,
            userName : 'Adherant 3',
            email : 'is_metidji3@adherant.dz',
            password : 'cbon',
            accountType  : 'Adherant',
            appointment : null
        },
        {
            id : 7,
            userName : 'Adherant 4',
            email : 'is_metidji4@adherant.dz',
            password : 'cbon',
            accountType  : 'Adherant',
            appointment : null
        },
        {
            id : 8,
            userName : 'Adherant 5',
            email : 'is_metidji5@adherant.dz',
            password : 'cbon',
            accountType  : 'cbon',
            appointment : null
        },
        {
            id : 9,
            userName : 'Adherant 6',
            email : 'is_metidji6@adherant.dz',
            password : 'cbon',
            accountType  : 'Adherant',
            appointment : null
        }


    ]
}

export default function accountsReducer (state = initialState, action) {
    let useless=0;
    switch(action.type){
        case ADD_VACCINATION :
            let userToVaccinate=state.data.filter(user=>action.payload.user.id===user.id)[0];
            userToVaccinate.appointment=action.payload.vaccinationUser;
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

        default: return state
    }

}

