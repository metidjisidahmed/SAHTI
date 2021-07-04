import React from 'react';
import Paper from '@material-ui/core/Paper';

import {
    Scheduler,
    WeekView,
    Appointments,
    MonthView,
    DayView
} from '@devexpress/dx-react-scheduler-material-ui';

import {useMediaQuery} from "@material-ui/core";
import {useSelector} from "react-redux";

const ScheduleMedecin = (props) =>  {
    const user =useSelector(state => state.user) ;
    const isDesktop = useMediaQuery('(min-width:768px)');
    return(
        <Paper >
            <Scheduler style={!isDesktop ?{} :{marginTop : '2rem' } } data={user.data.appointment} height={'100%'}>
                <MonthView  startDayHour={8} endDayHour={16}/>
                <Appointments/>
            </Scheduler>
        </Paper>
        )
}

export default ScheduleMedecin;
