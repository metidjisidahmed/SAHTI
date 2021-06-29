import { combineReducers } from 'redux'
import medecinSchedule from "./medecinSchedule";
import userReducer from "./userReducer";
import accountsReducer from './accountsReducer'
import vaccinationListReducer from "./vaccinationListReducer";


export default combineReducers({
    medecinSchedule: medecinSchedule ,
    user : userReducer,
    accounts : accountsReducer,
    vaccinationListReducer : vaccinationListReducer

})