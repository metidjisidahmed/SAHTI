import moment from "moment";
import {makeTodayAppointment} from "./redux/reducers/medecinSchedule";

export const  scheduleUpdated=(arr , appointment)=>{
    const currentDate = moment();
    let date = currentDate.date();
    const result = {
        ...appointment,
        ...makeTodayAppointment(appointment.startDate, appointment.endDate),
    };
    date += 1;
    if (date > 31) date = 1;
    return arr.concat(result);
}