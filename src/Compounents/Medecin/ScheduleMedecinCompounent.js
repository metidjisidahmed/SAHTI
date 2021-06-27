import React from 'react';
import Paper from '@material-ui/core/Paper';

import {
    Scheduler,
    WeekView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

import {useMediaQuery} from "@material-ui/core";
import {useSelector} from "react-redux";

const ScheduleMedecin = (props) =>  {
    const appointments =useSelector(state => state.appointments) ;
    const isDesktop = useMediaQuery('(min-width:768px)');
    return(
        <Paper style={ !isDesktop ?{} :{ } }>
            <Scheduler data={appointments.data} height={'100%'}>
                <WeekView startDayHour={9} endDayHour={17}/>
                <Appointments/>
            </Scheduler>
        </Paper>
        )
}

export default ScheduleMedecin;
