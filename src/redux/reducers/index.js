import { combineReducers } from 'redux'
import appointmentsReducer from "./appointmentsReducer";
import userReducer from "./userReducer";
import accountsReducer from './accountsReducer'


export default combineReducers({
    appointments: appointmentsReducer ,
    user : userReducer,
    accounts : accountsReducer

})